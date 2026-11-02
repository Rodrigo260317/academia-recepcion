// Guardado del progreso: Google Sheets (Apps Script) o, si no hay URL configurada,
// modo demo en este navegador.
(function () {
  const API = (window.ACADEMIA_CONFIG && window.ACADEMIA_CONFIG.apiUrl) || '';
  const DEMO = !API;
  const CLAVE_DEMO = 'academia-demo-v1';
  const CLAVE_SESION = 'academia-sesion-v1';
  const NOTA_APROBATORIA = 80;

  const USUARIOS_DEMO = [
    { usuario: 'recepcion1', nombre: 'Recepción 1', rol: 'recepcion', pin: '1111' },
    { usuario: 'recepcion2', nombre: 'Recepción 2', rol: 'recepcion', pin: '2222' },
    { usuario: 'recepcion3', nombre: 'Recepción 3', rol: 'recepcion', pin: '3333' },
    { usuario: 'admin', nombre: 'Admin', rol: 'admin', pin: '0000' }
  ];

  function leerDemo() {
    try {
      return JSON.parse(localStorage.getItem(CLAVE_DEMO)) || { progreso: [], checklist: [] };
    } catch (e) {
      return { progreso: [], checklist: [] };
    }
  }
  function escribirDemo(d) {
    try { localStorage.setItem(CLAVE_DEMO, JSON.stringify(d)); } catch (e) { /* sin almacenamiento */ }
  }

  function demo(pedido) {
    const u = USUARIOS_DEMO.find(x => x.usuario === pedido.usuario && x.pin === String(pedido.pin));
    if (!u) return { ok: false, error: 'PIN incorrecto' };
    const yo = { usuario: u.usuario, nombre: u.nombre, rol: u.rol };
    const d = leerDemo();
    const ahora = new Date().toISOString().slice(0, 19);
    if (pedido.accion === 'guardarIntento') {
      const nota = Math.round(pedido.nota);
      const previa = d.progreso.find(p => p.usuario === yo.usuario && p.modulo === pedido.modulo);
      const yaAprobado = previa && previa.estado === 'aprobado';
      const fila = {
        usuario: yo.usuario, modulo: pedido.modulo,
        estado: (nota >= NOTA_APROBATORIA || yaAprobado) ? 'aprobado' : 'desaprobado',
        nota, mejor_nota: Math.max(nota, previa ? previa.mejor_nota : 0),
        intentos: (previa ? previa.intentos : 0) + 1,
        fecha: yaAprobado ? previa.fecha : ahora,
        compromiso: pedido.compromiso || (previa ? previa.compromiso : '')
      };
      if (previa) Object.assign(previa, fila); else d.progreso.push(fila);
      escribirDemo(d);
    }
    if (pedido.accion === 'guardarChecklist') {
      if (yo.rol !== 'admin') return { ok: false, error: 'Solo el Admin registra el checklist' };
      const previa = d.checklist.find(c => c.fecha === pedido.fecha && c.usuario === pedido.objetivo);
      const fila = { fecha: pedido.fecha, usuario: pedido.objetivo, puntaje: pedido.puntaje, detalle: pedido.detalle };
      if (previa) Object.assign(previa, fila); else d.checklist.push(fila);
      escribirDemo(d);
    }
    if (pedido.accion === 'guardarTurno') {
      d.turnos = d.turnos || [];
      const momento = pedido.momento === 'cierre' ? 'cierre' : 'apertura';
      const previa = d.turnos.find(t => t.fecha === pedido.fecha && t.usuario === yo.usuario && t.momento === momento);
      const n = v => Math.max(0, Math.round(Number(v) || 0));
      const fila = {
        fecha: pedido.fecha, usuario: yo.usuario, momento, revisado: pedido.revisado || '',
        entrantes: n(pedido.entrantes), contestadas: n(pedido.contestadas), devueltas: n(pedido.devueltas),
        pendientes: n(pedido.pendientes), wsp_sin_responder: n(pedido.wsp_sin_responder), notas: pedido.notas || ''
      };
      if (previa) Object.assign(previa, fila); else d.turnos.push(fila);
      escribirDemo(d);
    }
    if (pedido.accion === 'guardarOcurrencia') {
      d.bitacora = d.bitacora || [];
      if (!String(pedido.hechos || '').trim() || !pedido.fecha) return { ok: false, error: 'Escribe la fecha y los hechos.' };
      const fila = {
        fecha: pedido.fecha, hora: pedido.hora || '', tipo: pedido.tipo, hechos: String(pedido.hechos).trim(),
        resolucion: String(pedido.resolucion || '').trim(), estado: pedido.estado === 'pendiente' ? 'pendiente' : 'resuelto'
      };
      const previa = pedido.id && d.bitacora.find(b => b.id === pedido.id);
      if (previa) Object.assign(previa, fila);
      else d.bitacora.push(Object.assign({ id: Date.now().toString(36), usuario: yo.usuario }, fila));
      escribirDemo(d);
    }
    if (pedido.accion === 'cambiarPin') {
      if (!/^\d{4}$/.test(String(pedido.nuevo || ''))) return { ok: false, error: 'El PIN debe tener 4 números.' };
      const objetivo = pedido.objetivo || yo.usuario;
      if (objetivo !== yo.usuario && yo.rol !== 'admin') return { ok: false, error: 'Solo el Admin cambia el PIN de otra persona.' };
      const u2 = USUARIOS_DEMO.find(x => x.usuario === objetivo);
      if (!u2) return { ok: false, error: 'No existe ese usuario.' };
      u2.pin = String(pedido.nuevo);
      return { ok: true };
    }
    const turnos = d.turnos || [];
    return {
      ok: true, usuario: yo,
      datos: {
        usuarios: USUARIOS_DEMO.map(({ pin, ...r }) => r), progreso: d.progreso, checklist: d.checklist,
        turnos: yo.rol === 'admin' ? turnos
          : turnos.map(t => t.usuario === yo.usuario ? t : { fecha: t.fecha, usuario: t.usuario, momento: t.momento }),
        bitacora: d.bitacora || []
      }
    };
  }

  async function pedir(pedido) {
    if (DEMO) return demo(pedido);
    const ctrl = new AbortController();
    const reloj = setTimeout(() => ctrl.abort(), 20000);
    try {
      // text/plain evita la consulta previa de CORS que Apps Script no responde.
      const r = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(pedido),
        signal: ctrl.signal
      });
      return await r.json();
    } catch (e) {
      return { ok: false, error: 'Sin conexión con la hoja de progreso. Revisa el internet e inténtalo de nuevo.' };
    } finally {
      clearTimeout(reloj);
    }
  }

  let sesion = null;
  try { sesion = JSON.parse(sessionStorage.getItem(CLAVE_SESION)); } catch (e) { sesion = null; }

  window.Datos = {
    demo: DEMO,
    notaAprobatoria: NOTA_APROBATORIA,
    usuarios: USUARIOS_DEMO.map(({ pin, ...r }) => r),
    sesion() { return sesion; },
    async entrar(usuario, pin) {
      const r = await pedir({ accion: 'estado', usuario, pin });
      if (r.ok) {
        sesion = { usuario, pin, perfil: r.usuario };
        try { sessionStorage.setItem(CLAVE_SESION, JSON.stringify(sesion)); } catch (e) { /* nada */ }
      }
      return r;
    },
    salir() {
      sesion = null;
      try { sessionStorage.removeItem(CLAVE_SESION); } catch (e) { /* nada */ }
    },
    estado() { return pedir({ accion: 'estado', usuario: sesion.usuario, pin: sesion.pin }); },
    guardarIntento(modulo, nota, detalle, compromiso) {
      return pedir({ accion: 'guardarIntento', usuario: sesion.usuario, pin: sesion.pin, modulo, nota, detalle, compromiso });
    },
    guardarChecklist(fecha, objetivo, puntaje, detalle) {
      return pedir({ accion: 'guardarChecklist', usuario: sesion.usuario, pin: sesion.pin, fecha, objetivo, puntaje, detalle });
    },
    guardarTurno(turno) {
      return pedir(Object.assign({ accion: 'guardarTurno', usuario: sesion.usuario, pin: sesion.pin }, turno));
    },
    // Sin id registra una ocurrencia nueva; con id la actualiza.
    guardarOcurrencia(o) {
      return pedir(Object.assign({ accion: 'guardarOcurrencia', usuario: sesion.usuario, pin: sesion.pin }, o));
    },
    // Sin objetivo cambia el PIN propio; el Admin puede indicar a quién.
    async cambiarPin(nuevo, objetivo) {
      const r = await pedir({ accion: 'cambiarPin', usuario: sesion.usuario, pin: sesion.pin, nuevo, objetivo });
      if (r.ok && (!objetivo || objetivo === sesion.usuario)) {
        sesion.pin = nuevo;
        try { sessionStorage.setItem(CLAVE_SESION, JSON.stringify(sesion)); } catch (e) { /* nada */ }
      }
      return r;
    }
  };
})();

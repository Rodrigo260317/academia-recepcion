// Academia de Recepción · pantallas e interacción.
(function () {
  const CFG = window.ACADEMIA_CONFIG;
  const MODS = window.MODULOS.slice().sort((a, b) => a.n - b.n);
  const PROGRAMA = window.PROGRAMA;
  const app = document.getElementById('app');

  const st = { datos: null, perfil: null, vistaAdmin: 'tablero', fechaChecklist: null };

  // ───────────── utilidades
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const iso = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const deIso = s => { const [y, m, d] = s.slice(0, 10).split('-').map(Number); return new Date(y, m - 1, d); };
  const hoy = () => iso(new Date());
  const sumaDias = (s, n) => { const d = deIso(s); d.setDate(d.getDate() + n); return iso(d); };
  const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const DIAS_C = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
  const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];
  const MESES_C = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SET', 'OCT', 'NOV', 'DIC'];
  const fechaLarga = s => { const d = deIso(s); return DIAS[d.getDay()] + ' ' + d.getDate() + ' de ' + MESES[d.getMonth()]; };
  const fechaCorta = s => { const d = deIso(s); return DIAS_C[d.getDay()] + ' ' + pad(d.getDate()) + ' ' + MESES_C[d.getMonth()]; };
  const fechaModulo = n => sumaDias(CFG.inicio, Math.floor((n - 1) / 2) * 7 + ((n - 1) % 2 ? 3 : 0));
  const modPorN = n => MODS.find(m => m.n === n);
  // Índices en orden aleatorio, para que la respuesta correcta no esté siempre en el mismo lugar.
  const barajar = n => { const a = [...Array(n).keys()]; for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const recepcionistas = () => (st.datos ? st.datos.usuarios : Datos.usuarios).filter(u => u.rol === 'recepcion');
  const nombreDe = id => ((st.datos ? st.datos.usuarios : Datos.usuarios).find(u => u.usuario === id) || {}).nombre || id;

  function toast(msg, error) {
    const t = document.createElement('div');
    t.className = 'toast' + (error ? ' error' : '');
    t.setAttribute('role', 'status');
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3200);
  }

  function progreso(usuario, modId) {
    return (st.datos.progreso || []).find(p => p.usuario === usuario && p.modulo === modId);
  }

  // Estado de un módulo del programa para una persona.
  function estadoModulo(usuario, n) {
    const mod = modPorN(n);
    const fecha = fechaModulo(n);
    const p = mod ? progreso(usuario, mod.id) : null;
    const h = hoy();
    if (p && p.estado === 'aprobado') return { clave: 'aprobado', texto: 'APROBADO ' + p.mejor_nota, fecha, p };
    if (p && p.estado === 'desaprobado') return { clave: 'reintentar', texto: 'REINTENTAR ' + p.mejor_nota, fecha, p };
    if (!mod) return { clave: 'proximo', texto: 'PRÓXIMAMENTE', fecha };
    if (fecha === h) return { clave: 'hoy', texto: 'HOY', fecha };
    if (h > sumaDias(fecha, 2)) return { clave: 'atrasado', texto: 'ATRASADO', fecha };
    if (h > fecha) return { clave: 'hoy', texto: 'PENDIENTE', fecha };
    return { clave: 'programado', texto: fechaCorta(fecha).slice(0, 6), fecha };
  }

  function moduloSugerido(usuario) {
    const h = hoy();
    const pendientes = MODS.filter(m => { const e = estadoModulo(usuario, m.n); return e.clave !== 'aprobado'; });
    const vencidos = pendientes.filter(m => fechaModulo(m.n) <= h);
    return vencidos[0] || pendientes[0] || null;
  }

  // Recepcionista del mes: módulos 50 %, presentación 30 %, turnos 20 %.
  function ranking() {
    const h = hoy();
    const mes = h.slice(0, 7);
    const vencidos = MODS.filter(m => fechaModulo(m.n) <= h && fechaModulo(m.n).slice(0, 7) === mes);
    const diasTurno = new Set((st.datos.turnos || []).filter(t => t.fecha.slice(0, 7) === mes).map(t => t.fecha));
    return recepcionistas().map(u => {
      let notas = null;
      if (vencidos.length) {
        notas = vencidos.reduce((s, m) => { const p = progreso(u.usuario, m.id); return s + (p ? p.mejor_nota : 0); }, 0) / vencidos.length;
      } else {
        const delMes = (st.datos.progreso || []).filter(p => p.usuario === u.usuario && p.estado === 'aprobado' && String(p.fecha).slice(0, 7) === mes);
        if (delMes.length) notas = delMes.reduce((s, p) => s + p.mejor_nota, 0) / delMes.length;
      }
      const checks = (st.datos.checklist || []).filter(c => c.usuario === u.usuario && c.fecha.slice(0, 7) === mes);
      const pres = checks.length ? checks.reduce((s, c) => s + c.puntaje, 0) / checks.length : null;
      const propios = (st.datos.turnos || []).filter(t => t.usuario === u.usuario && t.fecha.slice(0, 7) === mes).length;
      const turnos = diasTurno.size ? Math.min(100, propios / (diasTurno.size * 2) * 100) : null;
      const partes = [[notas, .5], [pres, .3], [turnos, .2]].filter(x => x[0] != null);
      const peso = partes.reduce((s, x) => s + x[1], 0);
      const total = peso ? partes.reduce((s, x) => s + x[0] * x[1], 0) / peso : 0;
      return { u, total: Math.round(total), notas, pres, turnos };
    }).sort((a, b) => b.total - a.total);
  }

  // Tablero: anima las celdas cuyo estado cambió desde la última visita.
  function tagFlap(clave, texto, llave) {
    let previo = {};
    try { previo = JSON.parse(localStorage.getItem('academia-flap') || '{}'); } catch (e) { previo = {}; }
    const cambio = previo[llave] !== undefined && previo[llave] !== texto;
    previo[llave] = texto;
    try { localStorage.setItem('academia-flap', JSON.stringify(previo)); } catch (e) { /* nada */ }
    const letras = cambio
      ? [...texto].map((c, i) => '<span class="flap" style="animation-delay:' + (i * 35) + 'ms">' + (c === ' ' ? '&nbsp;' : esc(c)) + '</span>').join('')
      : esc(texto);
    return '<span class="tag ' + clave + '">' + letras + '</span>';
  }

  async function refrescar() {
    const r = await Datos.estado();
    if (r.ok) st.datos = r.datos;
    else toast(r.error || 'No se pudo actualizar', true);
    return r.ok;
  }

  function avisoDemo() {
    return Datos.demo ? '<div class="aviso-demo">Modo demo: el avance se guarda solo en este equipo hasta conectar la hoja de Google.</div>' : '';
  }

  // ───────────── ingreso
  function vistaIngreso() {
    app.innerHTML = '<div class="ingreso">' + avisoDemo() +
      '<header class="banda"><div class="contenedor">' + '<div class="marca-jb"><img src="media/logo-jb.png" alt=""><div><span>Joana Bernedo</span><small>Academia de Recepción</small></div></div>' +
      '' +
      '<h1>¿Quién entra?</h1><p class="sub">Capacitación de ' + esc(CFG.hora) + ' a ' + esc(CFG.horaFin) + ', lunes y jueves.</p>' +
      '</div></header><main class="contenedor"><div class="lista-usuarios">' +
      Datos.usuarios.map(u => '<button data-u="' + u.usuario + '"><span>' + esc(u.nombre) + '</span><span class="rotulo">' + (u.rol === 'admin' ? 'Panel' : 'Entrar') + '</span></button>').join('') +
      '</div><p class="pie">' + (Datos.demo ? 'PIN de prueba: 1111, 2222, 3333 y Admin 0000.' : 'Tu PIN te lo da el Admin.') + '</p></main></div>';
    app.querySelectorAll('[data-u]').forEach(b => b.addEventListener('click', () => vistaPin(Datos.usuarios.find(u => u.usuario === b.dataset.u))));
  }

  function vistaPin(u) {
    let pin = '';
    app.innerHTML = '<div class="ingreso">' + avisoDemo() +
      '<header class="banda"><div class="contenedor">' + '<div class="marca-jb"><img src="media/logo-jb.png" alt=""><div><span>Joana Bernedo</span><small>Academia de Recepción</small></div></div>' + '<div class="fila"><span></span>' +
      '<button class="enlace-banda" data-volver>Cambiar</button></div>' +
      '<h1>' + esc(u.nombre) + '</h1><p class="sub">Escribe tu PIN de 4 dígitos.</p></div></header>' +
      '<main class="contenedor"><div class="teclado-pin">' +
      '<div class="puntos-pin" aria-hidden="true"><i></i><i></i><i></i><i></i></div>' +
      '<p class="msg-error" role="alert"></p>' +
      '<div class="teclas">' + [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => '<button data-k="' + n + '" aria-label="' + n + '">' + n + '</button>').join('') +
      '<button class="vacia" tabindex="-1" aria-hidden="true"></button><button data-k="0" aria-label="0">0</button><button data-k="borrar" aria-label="Borrar">←</button></div>' +
      '</div></main></div>';
    const puntos = app.querySelector('.puntos-pin');
    const msg = app.querySelector('.msg-error');
    const pintar = () => puntos.querySelectorAll('i').forEach((i, k) => i.classList.toggle('lleno', k < pin.length));
    let ocupado = false;
    async function tecla(k) {
      if (ocupado) return;
      if (k === 'borrar') pin = pin.slice(0, -1);
      else if (pin.length < 4) pin += k;
      msg.textContent = '';
      pintar();
      if (pin.length === 4) {
        ocupado = true;
        msg.textContent = 'Verificando…';
        const r = await Datos.entrar(u.usuario, pin);
        ocupado = false;
        if (r.ok) { st.datos = r.datos; st.perfil = r.usuario; ir(r.usuario.rol === 'admin' ? '#/admin' : '#/inicio'); }
        else {
          msg.textContent = r.error === 'PIN incorrecto' ? 'PIN incorrecto. Inténtalo otra vez.' : r.error;
          puntos.classList.remove('error'); void puntos.offsetWidth; puntos.classList.add('error');
          pin = ''; pintar();
        }
      }
    }
    app.querySelectorAll('[data-k]').forEach(b => b.addEventListener('click', () => tecla(b.dataset.k)));
    app.querySelector('[data-volver]').addEventListener('click', vistaIngreso);
    document.onkeydown = e => { if (/^\d$/.test(e.key)) tecla(e.key); if (e.key === 'Backspace') tecla('borrar'); };
  }

  // ───────────── inicio de la recepcionista
  function vistaInicio() {
    document.onkeydown = null;
    const yo = st.perfil.usuario;
    const h = hoy();
    const mod = moduloSugerido(yo);
    let titulo, pase;
    if (!mod) {
      titulo = 'Estás al día';
      pase = '<section class="pase"><div class="pase-cab"><div class="txt"><p class="rotulo">Pase de capacitación · ' + esc(st.perfil.nombre) + '</p>' +
        '<h2>Aprobaste todos los módulos publicados</h2><p>El próximo módulo aparece aquí en su fecha.</p></div>' + Ilus.svg('timbre') + '</div></section>';
    } else {
      const e = estadoModulo(yo, mod.n);
      const fecha = fechaModulo(mod.n);
      titulo = (fecha === h ? 'Hoy: ' : fecha < h ? 'Pendiente: ' : 'Próximo: ') + mod.titulo;
      const p = progreso(yo, mod.id);
      pase = '<section class="pase"><div class="pase-cab"><div class="txt"><p class="rotulo">Pase de capacitación · ' + esc(st.perfil.nombre) + '</p>' +
        '<h2>' + esc(mod.titulo) + '</h2><p>' + esc(mod.resumen) + '</p></div>' + Ilus.svg(mod.ilus) + '</div>' +
        '<div class="perforado"></div><div class="segmentos">' +
        '<div><span class="rotulo">' + (fecha === h ? 'Hora' : 'Día') + '</span><b>' + (fecha === h ? esc(CFG.hora) : fechaCorta(fecha).slice(0, 6)) + '</b></div>' +
        '<div><span class="rotulo">Dura</span><b>' + mod.minutos + '′</b></div>' +
        '<div><span class="rotulo">Módulo</span><b>' + pad(mod.n) + '</b></div></div>' +
        '<div class="acciones"><button class="btn" data-mod="' + mod.id + '">' + (p ? 'Intentar de nuevo' : 'Empezar') + '</button></div>' +
        (e.clave === 'atrasado' ? '<span class="sello" style="border-color:var(--tinta);color:var(--tinta);background:var(--senal)">ATRASADO</span>' : '') +
        '</section>';
    }
    const ap = (st.datos.turnos || []).find(t => t.usuario === yo && t.fecha === h && t.momento === 'apertura');
    const ci = (st.datos.turnos || []).find(t => t.usuario === yo && t.fecha === h && t.momento === 'cierre');
    const rk = ranking();

    app.innerHTML = avisoDemo() +
      '<header class="banda"><div class="contenedor">' + '<div class="marca-jb"><img src="media/logo-jb.png" alt=""><div><span>Joana Bernedo</span><small>Academia de Recepción</small></div></div>' + '<div class="fila"><p class="quien"><b>' + esc(st.perfil.nombre) + '</b> · ' + fechaLarga(h) + '</p>' +
      '<span style="display:flex;gap:8px"><button class="enlace-banda" data-mipin>Mi PIN</button><button class="enlace-banda" data-salir>Salir</button></span></div><h1>' + esc(titulo) + '</h1>' +
      '<p class="sub">Capacitación de ' + esc(CFG.hora) + ' a ' + esc(CFG.horaFin) + ', antes de abrir.</p></div></header>' +
      '<main class="contenedor">' + pase +
      '<section class="seccion"><div class="titulo"><h3>Tu turno de hoy</h3><span class="rotulo">' + fechaCorta(h) + '</span></div>' +
      '<div class="turno-dia">' +
      '<button data-turno="apertura" class="' + (ap ? 'hecho' : '') + '"><b>Apertura</b><span>' + (ap ? 'Registrada' : 'Antes de las 8:00') + '</span></button>' +
      '<button data-turno="cierre" class="' + (ci ? 'hecho' : '') + '"><b>Cierre</b><span>' + (ci ? ci.contestadas + ' de ' + ci.entrantes + ' llamadas' : 'Llamadas y pendientes') + '</span></button>' +
      '</div></section>' +
      '<section class="seccion"><div class="titulo"><h3>Bitácora de ocurrencias</h3><span class="rotulo">' + pendientesBitacora() + ' pendiente' + (pendientesBitacora() === 1 ? '' : 's') + '</span></div>' +
      '<p class="nota-pie">Quejas, demoras, errores o algo olvidado: fecha, hora y hechos, sin adjetivos. Así la que entra al turno y el médico ya lo saben.</p>' +
      '<div class="turno-dia"><button data-ocurrencia><b>Registrar ocurrencia</b><span>Dos minutos, en el momento</span></button>' +
      '<a class="boton-enlace" href="guia.html" target="_blank" rel="noopener"><b>Guía de presentación</b><span>Para imprimir o revisar</span></a></div>' +
      listaBitacora((st.datos.bitacora || []).slice().sort(ordenBitacora).slice(0, 4), yo) + '</section>' +
      '<section class="seccion"><div class="titulo"><h3>Tablero de módulos</h3><span class="rotulo">Lun y jue</span></div><ul class="tablero">' +
      PROGRAMA.map(pg => {
        const e = estadoModulo(yo, pg.n);
        const m = modPorN(pg.n);
        return '<li class="' + (m ? 'abrible' : 'apagado') + '"' + (m ? ' data-mod="' + m.id + '" tabindex="0" role="button"' : '') + '>' +
          '<span class="n">' + pad(pg.n) + '</span><span><span class="nombre">' + esc(pg.titulo) + '</span><span class="fecha">' + fechaCorta(e.fecha) + '</span></span>' +
          tagFlap(e.clave, e.texto, yo + ':' + pg.n) + '</li>';
      }).join('') + '</ul></section>' +
      '<section class="seccion"><div class="titulo"><h3>Recepcionista del mes</h3><span class="rotulo">' + MESES[new Date().getMonth()] + '</span></div>' +
      '<ul class="ranking">' + rk.map((r, i) => '<li class="' + (i === 0 && r.total > 0 ? 'primero' : '') + '"><span class="pos">' + (i + 1) + '</span>' +
        '<span><b>' + esc(r.u.nombre) + (r.u.usuario === yo ? ' (tú)' : '') + '</b><span class="barra"><i style="width:' + r.total + '%"></i></span></span>' +
        '<span class="num">' + r.total + '</span></li>').join('') + '</ul>' +
      '<p class="nota-pie">Suma tus notas de los módulos (50 %), el checklist de presentación (30 %) y tus registros de apertura y cierre (20 %).</p></section>' +
      '<p class="pie">Academia de Recepción · estándar de hotelería de lujo</p></main>';

    app.querySelectorAll('[data-mod]').forEach(el => {
      const abrir = () => vistaLeccion(MODS.find(m => m.id === el.dataset.mod));
      el.addEventListener('click', abrir);
      if (el.tagName === 'LI') el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); } });
    });
    app.querySelectorAll('[data-turno]').forEach(b => b.addEventListener('click', () => vistaTurno(b.dataset.turno)));
    app.querySelector('[data-mipin]').addEventListener('click', vistaMiPin);
    app.querySelector('[data-ocurrencia]').addEventListener('click', () => vistaOcurrencia());
    enlazarBitacora(app);
    app.querySelector('[data-salir]').addEventListener('click', () => { Datos.salir(); st.perfil = null; ir('#/'); });
  }

  // ───────────── cambiar el PIN propio
  const campoPin = (id, etiqueta) => '<div class="campo"><label for="' + id + '">' + etiqueta + '</label>' +
    '<input class="num" id="' + id + '" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="4" autocomplete="new-password"></div>';

  function vistaMiPin() {
    app.innerHTML = '<div class="leccion"><div class="barra-leccion"><div class="contenedor fila"><button class="cerrar" data-cerrar aria-label="Volver">' + icoX() + '</button>' +
      '<strong>Cambiar mi PIN</strong></div></div>' +
      '<main class="contenedor cuerpo-leccion entra"><h2 class="paso-titulo">Elige un PIN nuevo</h2>' +
      '<p class="paso-sub">Cuatro números que solo tú sepas. Lo usarás desde la próxima vez que entres.</p>' +
      '<form class="form" id="f-pin">' + campoPin('p-nuevo', 'PIN nuevo') + campoPin('p-repite', 'Repite el PIN nuevo') +
      '<p class="msg-error" role="alert"></p></form></main>' +
      '<div class="pie-leccion"><div class="contenedor"><button class="btn" data-guardar>Guardar PIN</button></div></div></div>';
    window.scrollTo(0, 0);
    app.querySelector('[data-cerrar]').addEventListener('click', () => ir('#/inicio', true));
    app.querySelector('[data-guardar]').addEventListener('click', async e => {
      const f = app.querySelector('#f-pin');
      const msg = f.querySelector('.msg-error');
      const nuevo = f.querySelector('#p-nuevo').value.trim();
      if (!/^\d{4}$/.test(nuevo)) { msg.textContent = 'El PIN debe tener 4 números.'; return; }
      if (nuevo !== f.querySelector('#p-repite').value.trim()) { msg.textContent = 'Los dos PIN no coinciden.'; return; }
      await guardando(e.currentTarget, async () => {
        const r = await Datos.cambiarPin(nuevo);
        if (!r.ok) { msg.textContent = r.error; return; }
        toast('PIN cambiado');
        ir('#/inicio', true);
      });
    });
  }

  // ───────────── apertura y cierre de turno
  const CHECK_APERTURA = [
    'Los tres teléfonos con tono, volumen alto y sin desvío (si uno falla, avisar al Admin)',
    'Mensaje de «fuera de horario» desactivado',
    'Agenda del día y pacientes VIP revisadas',
    'Llamadas y WhatsApp pendientes de ayer revisados',
    'Counter ordenado y presentación lista'
  ];

  function vistaTurno(momento) {
    const yo = st.perfil.usuario;
    const h = hoy();
    const previo = (st.datos.turnos || []).find(t => t.usuario === yo && t.fecha === h && t.momento === momento) || {};
    const revisado = String(previo.revisado || '').split('|');
    const cuerpo = momento === 'apertura'
      ? CHECK_APERTURA.map((c, i) => '<label class="check"><input type="checkbox" value="' + i + '"' + (revisado.includes(String(i)) ? ' checked' : '') + '><span>' + esc(c) + '</span></label>').join('')
      : '<div class="campos">' +
        [['entrantes', 'Llamadas que entraron'], ['contestadas', 'Contestadas'], ['devueltas', 'Devueltas'], ['pendientes', 'Quedan pendientes'], ['wsp_sin_responder', 'WhatsApp sin responder']]
          .map(([k, l]) => '<div class="campo"><label for="c-' + k + '">' + l + '</label><input class="num" id="c-' + k + '" name="' + k + '" type="number" inputmode="numeric" min="0" value="' + (previo[k] != null ? previo[k] : '') + '"></div>').join('') +
        '</div>';
    app.innerHTML = '<div class="leccion"><div class="barra-leccion"><div class="contenedor fila"><button class="cerrar" data-cerrar aria-label="Volver">' + icoX() + '</button>' +
      '<strong>' + (momento === 'apertura' ? 'Apertura del counter' : 'Cierre y entrega de turno') + '</strong></div></div>' +
      '<main class="contenedor cuerpo-leccion entra"><p class="paso-sub">' + fechaLarga(h) + ' · ' + esc(st.perfil.nombre) + '</p>' +
      '<h2 class="paso-titulo">' + (momento === 'apertura' ? 'Antes de abrir, revisa:' : '¿Cómo quedó el día?') + '</h2>' +
      '<form class="form" id="f-turno">' + cuerpo +
      '<div class="campo"><label for="c-notas">' + (momento === 'apertura' ? 'Pendientes del día (opcional)' : 'Entrega: pacientes en sala, pendientes con su hora y ocurrencias') + '</label>' +
      '<textarea id="c-notas" name="notas">' + esc(previo.notas || '') + '</textarea></div>' +
      '<p class="msg-error" role="alert"></p></form></main>' +
      '<div class="pie-leccion"><div class="contenedor"><button class="btn" data-guardar>' + (previo.momento ? 'Actualizar registro' : 'Guardar registro') + '</button></div></div></div>';
    window.scrollTo(0, 0);
    app.querySelector('[data-cerrar]').addEventListener('click', () => ir('#/inicio', true));
    app.querySelector('[data-guardar]').addEventListener('click', async e => {
      const f = app.querySelector('#f-turno');
      const msg = f.querySelector('.msg-error');
      const datos = { fecha: h, momento, notas: f.notas.value.trim() };
      if (momento === 'apertura') {
        const marcados = [...f.querySelectorAll('input[type=checkbox]:checked')].map(i => i.value);
        if (marcados.length < CHECK_APERTURA.length) { msg.textContent = 'Marca los ' + CHECK_APERTURA.length + ' puntos antes de guardar: así se abre el counter.'; return; }
        datos.revisado = marcados.join('|');
      } else {
        ['entrantes', 'contestadas', 'devueltas', 'pendientes', 'wsp_sin_responder'].forEach(k => { datos[k] = f[k].value === '' ? null : Number(f[k].value); });
        if (datos.entrantes == null || datos.contestadas == null) { msg.textContent = 'Escribe al menos cuántas llamadas entraron y cuántas se contestaron.'; return; }
        if (datos.contestadas > datos.entrantes) { msg.textContent = 'Las contestadas no pueden ser más que las que entraron.'; return; }
      }
      await guardando(e.currentTarget, async () => {
        const r = await Datos.guardarTurno(datos);
        if (!r.ok) { msg.textContent = r.error; return; }
        st.datos = r.datos;
        toast(momento === 'apertura' ? 'Apertura registrada' : 'Cierre registrado');
        ir('#/inicio', true);
      });
    });
  }

  // ───────────── bitácora de ocurrencias
  const TIPOS_OCURRENCIA = ['Queja', 'Demora', 'Error de registro o cobro', 'Complicación reportada', 'Incidente en sala', 'Objeto olvidado', 'Otro'];
  const ordenBitacora = (a, b) => (b.fecha + b.hora).localeCompare(a.fecha + a.hora);
  const pendientesBitacora = () => (st.datos.bitacora || []).filter(b => b.estado === 'pendiente').length;

  function listaBitacora(filas, yo) {
    if (!filas.length) return '<div class="vacio-estado">Sin ocurrencias registradas. Cuando pase algo, regístralo en el momento.</div>';
    return '<ul class="tablero">' + filas.map(b => {
      const editable = st.perfil.rol === 'admin' || b.usuario === yo;
      return '<li style="grid-template-columns:1fr auto"' + (editable ? ' class="abrible" data-editar="' + esc(b.id) + '" tabindex="0" role="button"' : '') + '>' +
        '<span><span class="nombre">' + esc(b.tipo) + '</span>' +
        '<span class="fecha">' + fechaCorta(b.fecha) + (b.hora ? ' · ' + esc(b.hora) : '') + ' · ' + esc(nombreDe(b.usuario)) + '</span>' +
        '<span class="nota-pie" style="display:block;margin-top:4px">' + esc(b.hechos) + '</span>' +
        (b.resolucion ? '<span class="nota-pie" style="display:block;margin-top:2px"><b>Qué se hizo:</b> ' + esc(b.resolucion) + '</span>' : '') + '</span>' +
        (b.estado === 'pendiente' ? '<span class="tag atrasado">PEND</span>' : '<span class="tag aprobado">OK</span>') + '</li>';
    }).join('') + '</ul>';
  }

  function enlazarBitacora(raiz) {
    raiz.querySelectorAll('[data-editar]').forEach(el => {
      const abrir = () => vistaOcurrencia((st.datos.bitacora || []).find(b => b.id === el.dataset.editar));
      el.addEventListener('click', abrir);
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); } });
    });
  }

  function vistaOcurrencia(previo) {
    const p = previo || {};
    const ahora = new Date();
    const volver = () => ir(st.perfil.rol === 'admin' ? '#/admin' : '#/inicio', true);
    app.innerHTML = '<div class="leccion"><div class="barra-leccion"><div class="contenedor fila"><button class="cerrar" data-cerrar aria-label="Volver">' + icoX() + '</button>' +
      '<strong>' + (previo ? 'Actualizar ocurrencia' : 'Registrar ocurrencia') + '</strong></div></div>' +
      '<main class="contenedor cuerpo-leccion entra"><h2 class="paso-titulo">¿Qué pasó?</h2>' +
      '<p class="paso-sub">Solo hechos, sin adjetivos ni opiniones. Sin nombres de pacientes: usa el número de historia o las iniciales.</p>' +
      '<form class="form" id="f-oc"><div class="campos">' +
      '<div class="campo"><label for="o-fecha">Fecha</label><input class="num" id="o-fecha" type="date" max="' + hoy() + '" value="' + esc(p.fecha || hoy()) + '"></div>' +
      '<div class="campo"><label for="o-hora">Hora</label><input class="num" id="o-hora" type="time" value="' + esc(p.hora || pad(ahora.getHours()) + ':' + pad(ahora.getMinutes())) + '"></div></div>' +
      '<div class="campo"><label for="o-tipo">Tipo</label><select id="o-tipo">' + TIPOS_OCURRENCIA.map(t => '<option' + (t === p.tipo ? ' selected' : '') + '>' + esc(t) + '</option>').join('') + '</select></div>' +
      '<div class="campo"><label for="o-hechos">Hechos</label><textarea id="o-hechos" maxlength="2000" placeholder="Ej.: HC 1234 esperó 50 min para su sesión; se le avisó a las 10:20 y a las 10:40.">' + esc(p.hechos || '') + '</textarea></div>' +
      '<div class="campo"><label for="o-res">Cómo se resolvió o qué se hizo</label><textarea id="o-res" maxlength="2000" placeholder="Ej.: se le ofreció café, se avisó a la doctora y pasó a las 10:45.">' + esc(p.resolucion || '') + '</textarea></div>' +
      '<label class="check"><input type="radio" name="o-estado" value="resuelto"' + (p.estado !== 'pendiente' ? ' checked' : '') + '><span><b>Resuelto</b></span></label>' +
      '<label class="check"><input type="radio" name="o-estado" value="pendiente"' + (p.estado === 'pendiente' ? ' checked' : '') + '><span><b>Queda pendiente</b>: lo ve la que entra al turno y el Admin</span></label>' +
      '<p class="msg-error" role="alert"></p></form></main>' +
      '<div class="pie-leccion"><div class="contenedor"><button class="btn" data-guardar>' + (previo ? 'Actualizar' : 'Guardar ocurrencia') + '</button></div></div></div>';
    window.scrollTo(0, 0);
    app.querySelector('[data-cerrar]').addEventListener('click', volver);
    app.querySelector('[data-guardar]').addEventListener('click', async e => {
      const f = app.querySelector('#f-oc');
      const msg = f.querySelector('.msg-error');
      const datos = {
        id: p.id || '', fecha: f.querySelector('#o-fecha').value, hora: f.querySelector('#o-hora').value,
        tipo: f.querySelector('#o-tipo').value, hechos: f.querySelector('#o-hechos').value.trim(),
        resolucion: f.querySelector('#o-res').value.trim(), estado: f.querySelector('input[name=o-estado]:checked').value
      };
      if (!datos.fecha) { msg.textContent = 'Indica la fecha.'; return; }
      if (datos.hechos.length < 10) { msg.textContent = 'Cuenta los hechos en una o dos frases.'; return; }
      await guardando(e.currentTarget, async () => {
        const r = await Datos.guardarOcurrencia(datos);
        if (!r.ok) { msg.textContent = r.error; return; }
        st.datos = r.datos;
        toast(previo ? 'Ocurrencia actualizada' : 'Ocurrencia registrada');
        volver();
      });
    });
  }

  async function guardando(btn, fn) {
    const texto = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="carga"></span> Guardando…';
    try { await fn(); } finally { if (btn.isConnected) { btn.disabled = false; btn.innerHTML = texto; } }
  }

  const icoX = () => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  const icoArriba = () => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>';
  const icoIzq = () => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>';
  const icoDer = () => '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
  const icoPlay = () => '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  const icoPausa = () => '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
  const icoAbajo = () => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

  // ───────────── lección
  function vistaLeccion(mod, soloEvaluacion) {
    document.onkeydown = null;
    const pasos = soloEvaluacion ? [{ tipo: 'evaluacion' }, { tipo: 'compromiso' }] : mod.pasos.concat([{ tipo: 'evaluacion' }, { tipo: 'compromiso' }]);
    const L = { mod, pasos, i: 0, nota: null, respuestas: [], compromiso: progreso(st.perfil.usuario, mod.id)?.compromiso || '' };

    app.innerHTML = '<div class="leccion"><div class="barra-leccion"><div class="contenedor fila">' +
      '<button class="cerrar" data-cerrar aria-label="Salir del módulo">' + icoX() + '</button>' +
      '<div class="progreso" aria-hidden="true">' + pasos.map(() => '<i></i>').join('') + '</div>' +
      '<span class="paso-num"></span></div></div>' +
      '<main class="contenedor cuerpo-leccion" id="cuerpo"></main>' +
      '<div class="pie-leccion"><div class="contenedor"><button class="btn" id="seguir">Continuar</button></div></div></div>';
    const cuerpo = app.querySelector('#cuerpo');
    const seguir = app.querySelector('#seguir');
    app.querySelector('[data-cerrar]').addEventListener('click', () => {
      if (L.i === 0 || confirm('¿Salir del módulo? Se pierde el avance de esta vez.')) ir('#/inicio', true);
    });

    function pintarProgreso() {
      app.querySelectorAll('.progreso i').forEach((el, k) => { el.className = k < L.i ? 'hecho' : k === L.i ? 'actual' : ''; });
      app.querySelector('.paso-num').textContent = (L.i + 1) + '/' + pasos.length;
    }
    function listo(on, texto) {
      seguir.disabled = !on;
      if (texto) seguir.textContent = texto;
    }
    function siguiente() {
      L.i++;
      if (L.i >= pasos.length) return;
      pintar();
    }
    seguir.addEventListener('click', () => { if (L.alSeguir) L.alSeguir(); else siguiente(); });

    function pintar() {
      L.alSeguir = null;
      pintarProgreso();
      listo(true, 'Continuar');
      const p = pasos[L.i];
      cuerpo.className = 'contenedor cuerpo-leccion';
      void cuerpo.offsetWidth;
      cuerpo.classList.add('entra');
      window.scrollTo(0, 0);
      PASOS[p.tipo](p, cuerpo, { L, listo, siguiente, mod });
    }
    pintar();
  }

  const PASOS = {
    escena(p, c) {
      c.innerHTML = '<div class="escena-ilus">' + Ilus.svg(p.ilus) + '</div>' +
        '<h2 class="paso-titulo">' + esc(p.titulo) + '</h2><p class="paso-sub">' + esc(p.texto) + '</p>' +
        (p.porque ? '<div class="porque"><span class="rotulo">Por qué importa</span>' + esc(p.porque) + '</div>' : '');
    },

    // Carta de protocolo: una ficha a la vez, como la carta de tratamientos de la clínica.
    // Cada ficha se puede escuchar con la voz de la Academia (media/narracion/<módulo>-<n>.mp3).
    tarjetas(p, c, { L, listo, siguiente, mod }) {
      const n = p.tarjetas.length;
      const conVoz = !!(window.NARRACION && window.NARRACION[mod.id] === n);
      c.innerHTML = '<h2 class="paso-titulo">' + esc(p.titulo) + '</h2>' +
        '<p class="paso-sub">' + (conVoz ? 'Escucha cada punto del protocolo o avanza a tu ritmo.' : 'Revisa cada punto del protocolo.') + '</p>' +
        '<section class="carta" aria-label="Protocolo">' +
        '<div class="carta-cab"><span class="rotulo">Protocolo · ' + esc(mod.titulo) + '</span><span class="num carta-num"></span></div>' +
        '<div class="carta-ficha" aria-live="polite"></div>' +
        '<div class="carta-controles">' +
        '<button class="carta-flecha" data-prev aria-label="Anterior">' + icoIzq() + '</button>' +
        (conVoz ? '<button class="carta-voz" data-voz aria-pressed="false"></button>' : '<span></span>') +
        '<button class="carta-flecha" data-next aria-label="Siguiente">' + icoDer() + '</button></div>' +
        '<ol class="carta-indice">' + p.tarjetas.map((t, k) => '<li><button data-k="' + k + '"><span class="num">' + pad(k + 1) + '</span><span>' + esc(t.titulo) + '</span></button></li>').join('') + '</ol>' +
        '</section>' + (conVoz ? '<audio preload="none"></audio>' : '');
      const ficha = c.querySelector('.carta-ficha');
      const audio = c.querySelector('audio');
      const bVoz = c.querySelector('[data-voz]');
      let actual = 0, visto = 0, sonando = false;
      const pintarVoz = () => { if (bVoz) { bVoz.innerHTML = sonando ? icoPausa() + ' Pausar' : icoPlay() + ' Escuchar'; bVoz.setAttribute('aria-pressed', sonando); } };
      const mostrar = (k, voz) => {
        actual = Math.max(0, Math.min(n - 1, k));
        visto = Math.max(visto, actual);
        const t = p.tarjetas[actual];
        ficha.innerHTML = '<div class="carta-ilus">' + Ilus.svg(t.ilus) + '</div><h3>' + esc(t.titulo) + '</h3><p>' + esc(t.texto) + '</p>' +
          (t.frase ? '<blockquote><span class="rotulo">Así se dice</span>' + esc(t.frase) + '</blockquote>' : '');
        ficha.classList.remove('entra'); void ficha.offsetWidth; ficha.classList.add('entra');
        c.querySelector('.carta-num').textContent = pad(actual + 1) + ' / ' + pad(n);
        c.querySelectorAll('.carta-indice button').forEach((b, i) => { b.classList.toggle('on', i === actual); b.classList.toggle('visto', i <= visto); });
        c.querySelector('[data-prev]').disabled = actual === 0;
        c.querySelector('[data-next]').disabled = actual === n - 1;
        listo(true, actual < n - 1 ? 'Siguiente punto' : 'Continuar');
        if (audio && (voz || sonando)) {
          audio.src = 'media/narracion/' + mod.id + '-' + (actual + 1) + '.mp3';
          audio.play().then(() => { sonando = true; pintarVoz(); }).catch(() => { sonando = false; pintarVoz(); });
        }
      };
      if (audio) {
        audio.addEventListener('ended', () => {
          if (actual < n - 1) setTimeout(() => { if (sonando && audio.isConnected) mostrar(actual + 1); }, 700);
          else { sonando = false; pintarVoz(); }
        });
        bVoz.addEventListener('click', () => {
          if (sonando) { audio.pause(); sonando = false; pintarVoz(); }
          else if (audio.src && !audio.ended && audio.currentTime > 0) { audio.play(); sonando = true; pintarVoz(); }
          else mostrar(actual, true);
        });
      }
      c.querySelector('[data-prev]').addEventListener('click', () => mostrar(actual - 1));
      c.querySelector('[data-next]').addEventListener('click', () => mostrar(actual + 1));
      c.querySelectorAll('.carta-indice button').forEach(b => b.addEventListener('click', () => mostrar(+b.dataset.k)));
      // Deslizar con el dedo o arrastrar con el mouse.
      let x0 = null;
      ficha.addEventListener('pointerdown', e => { x0 = e.clientX; });
      ficha.addEventListener('pointerup', e => {
        if (x0 === null) return;
        const dx = e.clientX - x0; x0 = null;
        if (Math.abs(dx) > 40) mostrar(actual + (dx < 0 ? 1 : -1));
      });
      ficha.addEventListener('pointercancel', () => { x0 = null; });
      document.onkeydown = e => { if (!ficha.isConnected) { document.onkeydown = null; return; } if (e.key === 'ArrowRight') mostrar(actual + 1); if (e.key === 'ArrowLeft') mostrar(actual - 1); };
      L.alSeguir = () => {
        if (actual < n - 1) mostrar(actual + 1);
        else { if (audio) audio.pause(); document.onkeydown = null; siguiente(); }
      };
      pintarVoz();
      mostrar(0, conVoz);
    },

    // Video de YouTube (modo sin cookies) con lo que hay que observar.
    video(p, c) {
      if (p.archivo) { // video propio de la Academia
        c.innerHTML = '<h2 class="paso-titulo">' + esc(p.titulo) + '</h2>' +
          '<div class="video-caja"><video src="' + esc(p.archivo) + '" poster="' + esc(p.poster || '') + '" controls playsinline preload="metadata"></video></div>' +
          (p.fijate ? '<div class="porque"><span class="rotulo">Lo que tienes que llevarte</span><ul class="fijate">' + p.fijate.map(f => '<li>' + esc(f) + '</li>').join('') + '</ul></div>' : '');
        return;
      }
      c.innerHTML = '<h2 class="paso-titulo">' + esc(p.titulo) + '</h2>' +
        '<div class="video-caja"><iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(p.youtube) + '?rel=0&modestbranding=1&playsinline=1' + (p.inicio ? '&start=' + p.inicio : '') + '"' +
        ' title="' + esc(p.titulo) + '" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>' +
        '<p class="nota-pie">' + esc(p.fuente) + '</p>' +
        '<div class="porque"><span class="rotulo">Mientras lo ves, fíjate en</span><ul class="fijate">' + p.fijate.map(f => '<li>' + esc(f) + '</li>').join('') + '</ul></div>';
    },

    caso(p, c, { listo }) {
      c.innerHTML = (p.real ? '<p class="real"><span class="tag hoy">PASÓ EN LA CLÍNICA</span><span class="num">' + esc(p.real) + '</span></p>' : '') +
        '<h2 class="paso-titulo">' + esc(p.titulo) + '</h2>' +
        '<div class="situacion">' + (p.ilus ? Ilus.svg(p.ilus) : '') + '<p>' + esc(p.situacion) + '</p></div>' +
        '<div class="opciones">' + barajar(p.opciones.length).map(k => '<button class="opcion" data-k="' + k + '">' + esc(p.opciones[k].texto) + '</button>').join('') + '</div>';
      listo(false, 'Elige una opción');
      c.querySelectorAll('.opcion').forEach(b => b.addEventListener('click', () => {
        const o = p.opciones[+b.dataset.k];
        b.classList.add(o.ok ? 'ok' : 'no');
        b.insertAdjacentHTML('afterbegin', '<span class="marca">' + (o.ok ? 'BIEN' : 'MEJOR NO') + '</span>');
        b.insertAdjacentHTML('beforeend', '<span class="nota">' + esc(o.nota) + '</span>');
        b.disabled = true;
        if (o.ok) {
          c.querySelectorAll('.opcion').forEach(x => { x.disabled = true; });
          listo(true, 'Continuar');
        } else listo(false, 'Prueba otra opción');
      }));
    },

    ordenar(p, c, { listo }) {
      const correcto = p.pasos.slice();
      let orden = correcto.map((_, k) => k);
      do { orden.sort(() => Math.random() - .5); } while (orden.every((v, k) => v === k));
      let intentos = 0;
      c.innerHTML = '<h2 class="paso-titulo">' + esc(p.titulo) + '</h2><p class="paso-sub">' + esc(p.consigna) + '</p><ol class="ordenar"></ol><div class="retro-caja"></div>';
      const lista = c.querySelector('.ordenar');
      const retro = c.querySelector('.retro-caja');
      function dibujar() {
        lista.innerHTML = orden.map((k, pos) => '<li data-k="' + k + '"><span class="pos">' + (pos + 1) + '</span><span class="agarre">' + esc(correcto[k]) + '</span>' +
          '<span class="flechas"><button data-mover="-1" aria-label="Subir"' + (pos === 0 ? ' disabled' : '') + '>' + icoArriba() + '</button>' +
          '<button data-mover="1" aria-label="Bajar"' + (pos === orden.length - 1 ? ' disabled' : '') + '>' + icoAbajo() + '</button></span></li>').join('');
        lista.querySelectorAll('[data-mover]').forEach(b => b.addEventListener('click', e => {
          const li = e.currentTarget.closest('li');
          const pos = [...lista.children].indexOf(li);
          const dest = pos + Number(b.dataset.mover);
          [orden[pos], orden[dest]] = [orden[dest], orden[pos]];
          dibujar();
          lista.children[dest].querySelector('[data-mover="' + b.dataset.mover + '"]')?.focus();
          retro.innerHTML = '';
        }));
        lista.querySelectorAll('.agarre').forEach(a => a.addEventListener('pointerdown', arrastrar));
      }
      // Arrastre con el dedo o el mouse.
      function arrastrar(e) {
        const li = e.currentTarget.closest('li');
        const items = [...lista.children];
        const desde = items.indexOf(li);
        const alto = li.offsetHeight + 8;
        const y0 = e.clientY;
        let dest = desde;
        li.classList.add('arrastrando');
        li.setPointerCapture(e.pointerId);
        const mover = ev => {
          const dy = ev.clientY - y0;
          li.style.transform = 'translateY(' + dy + 'px)';
          dest = Math.max(0, Math.min(items.length - 1, desde + Math.round(dy / alto)));
          items.forEach((it, k) => {
            if (it === li) return;
            let s = 0;
            if (desde < dest && k > desde && k <= dest) s = -alto;
            if (desde > dest && k < desde && k >= dest) s = alto;
            it.style.transform = s ? 'translateY(' + s + 'px)' : '';
          });
        };
        const soltar = () => {
          li.removeEventListener('pointermove', mover);
          li.removeEventListener('pointerup', soltar);
          li.removeEventListener('pointercancel', soltar);
          const [k] = orden.splice(desde, 1);
          orden.splice(dest, 0, k);
          retro.innerHTML = '';
          dibujar();
        };
        li.addEventListener('pointermove', mover);
        li.addEventListener('pointerup', soltar);
        li.addEventListener('pointercancel', soltar);
      }
      dibujar();
      listo(true, 'Comprobar orden');
      const L = arguments[2].L;
      L.alSeguir = () => {
        const ok = orden.every((v, k) => v === k);
        intentos++;
        [...lista.children].forEach((li, pos) => li.classList.add(orden[pos] === pos ? 'ok' : 'no'));
        if (ok) {
          retro.innerHTML = '<div class="retro ok"><b>BIEN</b>Ese es el orden.</div>';
          listo(true, 'Continuar');
          L.alSeguir = null;
        } else if (intentos >= 2) {
          orden = correcto.map((_, k) => k);
          dibujar();
          [...lista.children].forEach(li => li.classList.add('ok'));
          retro.innerHTML = '<div class="retro no"><b>ASÍ VA</b>Te dejo el orden correcto. Léelo una vez más antes de seguir.</div>';
          listo(true, 'Continuar');
          L.alSeguir = null;
        } else {
          retro.innerHTML = '<div class="retro no"><b>CASI</b>Los que están en rojo van en otro lugar. Muévelos y vuelve a comprobar.</div>';
        }
      };
    },

    sino(p, c, ctx) { fichas(p, c, ctx, p.frases, f => f.si, ['Sí', 'No']); },
    vf(p, c, ctx) { fichas(p, c, ctx, p.afirmaciones, f => f.v, ['Verdadero', 'Falso']); },

    errores(p, c, { listo }) {
      const hallados = new Set();
      c.innerHTML = '<h2 class="paso-titulo">' + esc(p.titulo) + '</h2><p class="paso-sub">' + esc(p.consigna) + '</p>' +
        '<div class="errores-caja">' + Ilus.figura() + '</div>' +
        '<p class="nota-pie num" id="cuenta">0 de ' + p.puntos.length + '</p><ol class="lista-hallazgos"></ol>';
      const caja = c.querySelector('.errores-caja');
      const svgEl = caja.querySelector('svg');
      const lista = c.querySelector('.lista-hallazgos');
      const cuenta = c.querySelector('#cuenta');
      const L = arguments[2].L;
      function anotar(k, faltaba) {
        hallados.add(k);
        const pt = p.puntos[k];
        caja.insertAdjacentHTML('beforeend', '<span class="hallazgo" style="left:' + (pt.x / 3.6) + '%;top:' + (pt.y / 3.6) + '%">' + hallados.size + '</span>');
        lista.insertAdjacentHTML('beforeend', '<li class="' + (faltaba ? 'faltaba' : '') + '"><span class="num">' + hallados.size + '</span><span>' + esc(pt.etiqueta) + '</span></li>');
        cuenta.textContent = hallados.size + ' de ' + p.puntos.length;
        if (hallados.size === p.puntos.length) { listo(true, 'Continuar'); L.alSeguir = null; }
      }
      svgEl.addEventListener('click', e => {
        const r = svgEl.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width * 360;
        const y = (e.clientY - r.top) / r.height * 360;
        const k = p.puntos.findIndex((pt, i) => !hallados.has(i) && Math.hypot(pt.x - x, pt.y - y) <= pt.r + 6);
        if (k >= 0) anotar(k);
        else {
          caja.insertAdjacentHTML('beforeend', '<span class="toque-errado" style="left:' + (x / 3.6) + '%;top:' + (y / 3.6) + '%"></span>');
          setTimeout(() => caja.querySelector('.toque-errado')?.remove(), 700);
        }
      });
      listo(true, 'Ver los que faltan');
      L.alSeguir = () => { p.puntos.forEach((_, k) => { if (!hallados.has(k)) anotar(k, true); }); };
    },

    llamada(p, c, { listo, L }) {
      let paso = -1, aciertos = 0, primerIntento = true, timer = null, t0 = 0;
      const total = p.timbreSeg * 3 * 1000;
      c.innerHTML = '<h2 class="paso-titulo">' + esc(p.titulo) + '</h2><p class="paso-sub">' + esc(p.consigna) + '</p>' +
        '<div class="llamada"><div>' + Ilus.svg('telefono') + '</div>' +
        '<div class="timbres" aria-hidden="true"><i><b></b></i><i><b></b></i><i><b></b></i></div>' +
        '<p class="estado" aria-live="assertive">Lista para la llamada</p>' +
        '<button class="btn claro" id="accion-llamada">Que suene el teléfono</button></div>' +
        '<div class="chat"></div><div class="opciones"></div>';
      const caja = c.querySelector('.llamada');
      const estado = c.querySelector('.estado');
      const accion = c.querySelector('#accion-llamada');
      const barras = [...c.querySelectorAll('.timbres b')];
      const chat = c.querySelector('.chat');
      const opciones = c.querySelector('.opciones');
      listo(false, 'Primero contesta la llamada');

      let limite = null;
      function sonar() {
        caja.classList.add('sonando');
        estado.textContent = 'Suena el teléfono…';
        accion.textContent = 'Contestar';
        accion.className = 'btn senal';
        t0 = performance.now();
        const anim = () => {
          const ms = performance.now() - t0;
          barras.forEach((b, k) => { b.style.transform = 'scaleX(' + Math.max(0, Math.min(1, (ms - k * p.timbreSeg * 1000) / (p.timbreSeg * 1000))) + ')'; });
          if (ms < total) timer = requestAnimationFrame(anim);
        };
        timer = requestAnimationFrame(anim);
        limite = setTimeout(perdida, total);
        accion.onclick = contestar;
      }
      function perdida() {
        cancelAnimationFrame(timer);
        clearTimeout(limite);
        caja.classList.remove('sonando');
        barras.forEach(b => { b.style.transform = 'scaleX(1)'; });
        estado.textContent = 'Se perdió la llamada. Esa paciente ya está marcando a otra clínica.';
        accion.textContent = 'Intentar otra vez';
        accion.className = 'btn claro';
        accion.onclick = () => { barras.forEach(b => { b.style.transform = 'scaleX(0)'; }); sonar(); };
      }
      function contestar() {
        const ms = performance.now() - t0;
        if (ms >= total) { perdida(); return; }
        cancelAnimationFrame(timer);
        clearTimeout(limite);
        caja.classList.remove('sonando');
        const timbre = Math.min(3, Math.floor(ms / (p.timbreSeg * 1000)) + 1);
        estado.textContent = 'Contestaste en el ' + timbre + '.º timbre (' + (ms / 1000).toFixed(1) + ' s). ' + (timbre <= 2 ? 'Muy bien.' : 'Justo a tiempo: apunta al segundo.');
        accion.remove();
        turno();
      }
      function turno() {
        paso++;
        primerIntento = true;
        if (paso >= p.guion.length) {
          chat.insertAdjacentHTML('beforeend', '<div class="retro ok"><b>LLAMADA CERRADA</b>Elegiste bien a la primera en ' + aciertos + ' de ' + p.guion.length + ' momentos.</div>');
          opciones.innerHTML = '';
          listo(true, 'Continuar');
          return;
        }
        const g = p.guion[paso];
        chat.insertAdjacentHTML('beforeend', '<div class="burbuja paciente entra"><span class="rotulo">Paciente</span>' + esc(g.paciente) + '</div>');
        opciones.innerHTML = '<p class="rotulo">¿Qué respondes?</p>' + barajar(g.opciones.length).map(k => '<button class="opcion" data-k="' + k + '">' + esc(g.opciones[k].texto) + '</button>').join('');
        opciones.querySelectorAll('.opcion').forEach(b => b.addEventListener('click', () => {
          const o = g.opciones[+b.dataset.k];
          if (o.ok) {
            if (primerIntento) aciertos++;
            chat.insertAdjacentHTML('beforeend', '<div class="burbuja yo entra"><span class="rotulo">Tú</span>' + esc(o.texto.replace(/^«|»$/g, '')) + '</div>' +
              '<div class="retro ok"><b>BIEN</b>' + esc(o.nota) + '</div>');
            turno();
            chat.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } else {
            primerIntento = false;
            b.disabled = true;
            b.classList.add('no');
            b.insertAdjacentHTML('beforeend', '<span class="nota">' + esc(o.nota) + '</span>');
          }
        }));
      }
      accion.addEventListener('click', function primero() { accion.removeEventListener('click', primero); sonar(); }, { once: true });
      L.alSeguir = null;
    },

    evaluacion(p, c, { L, listo, siguiente, mod }) {
      const qs = mod.evaluacion;
      let q = 0;
      L.respuestas = [];
      function pintarQ() {
        const pr = qs[q];
        c.innerHTML = '<p class="pregunta-num">EVALUACIÓN · PREGUNTA ' + (q + 1) + ' DE ' + qs.length + '</p>' +
          '<h2 class="pregunta">' + esc(pr.p) + '</h2>' +
          '<div class="opciones" role="radiogroup">' + barajar(pr.opciones.length).map(k => '<button class="opcion" role="radio" aria-checked="false" data-k="' + k + '">' + esc(pr.opciones[k]) + '</button>').join('') + '</div>' +
          (q === 0 ? '<p class="nota-pie">Se aprueba con ' + Datos.notaAprobatoria + ' o más. Aquí no te muestro si acertaste hasta el final.</p>' : '');
        listo(false, 'Elige una respuesta');
        c.querySelectorAll('.opcion').forEach(b => b.addEventListener('click', () => {
          c.querySelectorAll('.opcion').forEach(x => { x.classList.remove('elegida'); x.setAttribute('aria-checked', 'false'); });
          b.classList.add('elegida');
          b.setAttribute('aria-checked', 'true');
          L.respuestas[q] = +b.dataset.k;
          listo(true, q < qs.length - 1 ? 'Siguiente pregunta' : 'Terminar evaluación');
        }));
      }
      L.alSeguir = () => {
        if (q < qs.length - 1) { q++; c.classList.remove('entra'); void c.offsetWidth; c.classList.add('entra'); pintarQ(); window.scrollTo(0, 0); }
        else {
          const buenas = qs.filter((pr, k) => L.respuestas[k] === pr.correcta).length;
          L.nota = Math.round(buenas / qs.length * 100);
          siguiente();
        }
      };
      pintarQ();
    },

    compromiso(p, c, { L, listo, mod }) {
      c.innerHTML = '<h2 class="paso-titulo">Tu compromiso para hoy</h2><p class="paso-sub">Elige uno. Lo verás en tu pase y el Admin también.</p>' +
        '<div class="opciones compromisos" role="radiogroup">' + mod.compromisos.map(t => '<button class="opcion' + (t === L.compromiso ? ' elegida' : '') + '" role="radio" aria-checked="' + (t === L.compromiso) + '"><i></i><span>' + esc(t) + '</span></button>').join('') + '</div>';
      listo(!!L.compromiso, L.compromiso ? 'Guardar y ver mi nota' : 'Elige un compromiso');
      c.querySelectorAll('.opcion').forEach(b => b.addEventListener('click', () => {
        c.querySelectorAll('.opcion').forEach(x => { x.classList.remove('elegida'); x.setAttribute('aria-checked', 'false'); });
        b.classList.add('elegida');
        b.setAttribute('aria-checked', 'true');
        L.compromiso = b.textContent;
        listo(true, 'Guardar y ver mi nota');
      }));
      L.alSeguir = async () => {
        const btn = document.getElementById('seguir');
        const detalle = mod.evaluacion.map((pr, k) => (k + 1) + ':' + (L.respuestas[k] === pr.correcta ? 'ok' : 'x')).join(' ');
        await guardando(btn, async () => {
          const r = await Datos.guardarIntento(mod.id, L.nota, detalle, L.compromiso);
          if (!r.ok) { toast(r.error || 'No se pudo guardar. Inténtalo de nuevo.', true); return; }
          st.datos = r.datos;
          vistaResultado(mod, L);
        });
      };
    }
  };

  // Sí/No y Verdadero/Falso: una ficha a la vez.
  function fichas(p, c, { L, listo }, items, esSi, etiquetas) {
    let k = 0, buenas = 0;
    c.innerHTML = '<h2 class="paso-titulo">' + esc(p.titulo) + '</h2>' + (p.consigna ? '<p class="paso-sub">' + esc(p.consigna) + '</p>' : '') +
      '<div class="ficha"><p class="contador num"></p><p class="texto"></p></div>' +
      '<div class="botones-dos"><button class="btn sec" data-r="1">' + etiquetas[0] + '</button><button class="btn sec" data-r="0">' + etiquetas[1] + '</button></div>' +
      '<div class="retro-caja"></div>';
    const texto = c.querySelector('.ficha .texto');
    const contador = c.querySelector('.contador');
    const retro = c.querySelector('.retro-caja');
    const botones = [...c.querySelectorAll('[data-r]')];
    function pintarF() {
      contador.textContent = (k + 1) + ' / ' + items.length;
      texto.textContent = items[k].texto;
      retro.innerHTML = '';
      botones.forEach(b => { b.disabled = false; b.className = 'btn sec'; });
      listo(false, 'Responde');
    }
    botones.forEach(b => b.addEventListener('click', () => {
      const dijo = b.dataset.r === '1';
      const ok = dijo === esSi(items[k]);
      if (ok) buenas++;
      botones.forEach(x => { x.disabled = true; });
      b.className = 'btn ' + (ok ? '' : 'sec');
      retro.innerHTML = '<div class="retro ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? 'BIEN' : 'NO EXACTAMENTE') + '</b>' + esc(items[k].nota) + '</div>';
      listo(true, k < items.length - 1 ? 'Siguiente' : 'Continuar (' + buenas + '/' + items.length + ')');
    }));
    L.alSeguir = () => {
      if (k < items.length - 1) { k++; pintarF(); }
      else { L.alSeguir = null; document.getElementById('seguir').click(); }
    };
    pintarF();
  }

  function vistaResultado(mod, L) {
    const aprobado = L.nota >= Datos.notaAprobatoria;
    const errores = mod.evaluacion.map((pr, k) => ({ pr, k })).filter(x => L.respuestas[x.k] !== x.pr.correcta);
    app.innerHTML = '<div class="leccion"><div class="barra-leccion"><div class="contenedor fila"><button class="cerrar" data-cerrar aria-label="Volver al inicio">' + icoX() + '</button><strong>Resultado</strong></div></div>' +
      '<main class="contenedor cuerpo-leccion resultado entra">' +
      '<section class="pase"><div class="pase-cab"><div class="txt"><p class="rotulo">Módulo ' + pad(mod.n) + ' · ' + esc(st.perfil.nombre) + '</p>' +
      '<h2>' + esc(mod.titulo) + '</h2><p>' + (aprobado ? 'Queda registrado con tu nota y la fecha de hoy.' : 'Te faltó poco. Repasa lo que fallaste y vuelve a intentarlo.') + '</p></div></div>' +
      '<div class="perforado"></div><div class="segmentos"><div><span class="rotulo">Nota</span><b>' + L.nota + '</b></div>' +
      '<div><span class="rotulo">Aprueba</span><b>' + Datos.notaAprobatoria + '</b></div><div><span class="rotulo">Fecha</span><b>' + fechaCorta(hoy()).slice(4) + '</b></div></div>' +
      '<div class="acciones"><p class="nota-pie">Tu compromiso: <b>' + esc(L.compromiso) + '</b></p></div>' +
      (aprobado ? '<span class="sello anim">APROBADO ' + L.nota + '</span>' : '<span class="sello anim" style="border-color:var(--mal);color:var(--mal)">POR REPASAR</span>') +
      '</section>' +
      (errores.length ? '<section class="seccion"><div class="titulo"><h3>Para repasar</h3><span class="rotulo">' + errores.length + ' pregunta' + (errores.length > 1 ? 's' : '') + '</span></div><ul class="repaso">' +
        errores.map(x => '<li><b>' + esc(x.pr.p) + '</b>Correcta: <span class="bien">' + esc(x.pr.opciones[x.pr.correcta]) + '</span></li>').join('') + '</ul></section>' : '') +
      '</main><div class="pie-leccion"><div class="contenedor" style="display:grid;gap:10px">' +
      (aprobado ? '' : '<button class="btn" data-reintentar>Repetir la evaluación</button>') +
      '<button class="btn ' + (aprobado ? '' : 'sec') + '" data-volver>Volver al tablero</button></div></div></div>';
    window.scrollTo(0, 0);
    app.querySelector('[data-cerrar]').addEventListener('click', () => ir('#/inicio', true));
    app.querySelector('[data-volver]').addEventListener('click', () => ir('#/inicio', true));
    app.querySelector('[data-reintentar]')?.addEventListener('click', () => vistaLeccion(mod, true));
  }

  // ───────────── Admin
  const CHECK_PRESENTACION = ['Cabello recogido (moño o trenza)', 'Maquillaje completo', 'Uñas impecables', 'Uniforme completo y gafete', 'Accesorios discretos', 'Celular guardado'];

  function vistaAdmin() {
    document.onkeydown = null;
    const h = hoy();
    const pestanas = [['tablero', 'Tablero'], ['presentacion', 'Presentación'], ['turnos', 'Turnos y llamadas'], ['bitacora', 'Bitácora'], ['ranking', 'Recepcionista del mes'], ['pines', 'Usuarios y PIN']];
    app.innerHTML = '<div class="admin">' + avisoDemo() +
      '<header class="banda"><div class="contenedor">' + '<div class="marca-jb"><img src="media/logo-jb.png" alt=""><div><span>Joana Bernedo</span><small>Academia de Recepción</small></div></div>' + '<div class="fila"><p class="quien"><b>Admin</b> · ' + fechaLarga(h) + '</p>' +
      '<span style="display:flex;gap:8px"><button class="enlace-banda" data-actualizar>Actualizar</button><button class="enlace-banda" data-salir>Salir</button></span></div>' +
      '<h1>Panel de la Academia</h1>' +
      '<nav class="admin-nav" role="tablist">' + pestanas.map(([k, t]) => '<button role="tab" data-tab="' + k + '" aria-selected="' + (st.vistaAdmin === k) + '">' + t + '</button>').join('') + '</nav>' +
      '</div></header><main class="contenedor" id="admin-cuerpo"></main></div>';
    app.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => { st.vistaAdmin = b.dataset.tab; vistaAdmin(); }));
    app.querySelector('[data-salir]').addEventListener('click', () => { Datos.salir(); st.perfil = null; ir('#/'); });
    app.querySelector('[data-actualizar]').addEventListener('click', async e => {
      const b = e.currentTarget; b.textContent = 'Actualizando…';
      if (await refrescar()) toast('Datos al día');
      vistaAdmin();
    });
    const c = app.querySelector('#admin-cuerpo');
    ({ tablero: adminTablero, presentacion: adminPresentacion, turnos: adminTurnos, bitacora: adminBitacora, ranking: adminRanking, pines: adminPines })[st.vistaAdmin](c);
  }

  function adminPines(c) {
    const usuarios = st.datos ? st.datos.usuarios : Datos.usuarios;
    c.innerHTML = '<section class="seccion"><div class="titulo"><h3>Usuarios y PIN</h3></div>' +
      '<p class="nota-pie">Escribe un PIN nuevo de 4 números y guárdalo. Vale desde el próximo ingreso. Cada recepcionista también puede cambiar el suyo con «Mi PIN».</p>' +
      usuarios.map(u => '<form class="tarjeta-linea" data-u="' + u.usuario + '" style="margin-top:12px">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><strong>' + esc(u.nombre) + '</strong><span class="rotulo">' + (u.rol === 'admin' ? 'Admin' : 'Recepción') + '</span></div>' +
        '<div style="display:grid;grid-template-columns:1fr auto;gap:10px;align-items:end;margin-top:10px">' +
        '<div class="campo"><label for="pin-' + u.usuario + '">PIN nuevo</label><input class="num" id="pin-' + u.usuario + '" inputmode="numeric" pattern="[0-9]*" maxlength="4" autocomplete="off"></div>' +
        '<button class="btn chico" type="submit" style="min-height:50px">Guardar</button></div>' +
        '<p class="msg-error" role="alert" style="text-align:left"></p></form>').join('') + '</section>';
    c.querySelectorAll('form[data-u]').forEach(f => f.addEventListener('submit', async e => {
      e.preventDefault();
      const nuevo = f.querySelector('input').value.trim();
      const msg = f.querySelector('.msg-error');
      if (!/^\d{4}$/.test(nuevo)) { msg.textContent = 'El PIN debe tener 4 números.'; return; }
      await guardando(f.querySelector('button'), async () => {
        const r = await Datos.cambiarPin(nuevo, f.dataset.u);
        if (!r.ok) { msg.textContent = r.error; return; }
        msg.textContent = '';
        f.querySelector('input').value = '';
        toast('PIN de ' + nombreDe(f.dataset.u) + ' actualizado');
      });
    }));
  }

  function adminTablero(c) {
    const recs = recepcionistas();
    const h = hoy();
    const vencidos = MODS.filter(m => fechaModulo(m.n) <= h);
    let aprob = 0, atras = 0, suma = 0, cuenta = 0;
    recs.forEach(u => MODS.forEach(m => {
      const e = estadoModulo(u.usuario, m.n);
      if (e.clave === 'aprobado') { aprob++; suma += e.p.mejor_nota; cuenta++; }
      if (e.clave === 'atrasado') atras++;
    }));
    c.innerHTML = '<div class="resumen"><div><span class="rotulo">Aprobados</span><b>' + aprob + (vencidos.length ? '<small style="font-size:13px;color:var(--gris)">/' + (recs.length * vencidos.length) + '</small>' : '') + '</b></div>' +
      '<div><span class="rotulo">Atrasados</span><b>' + atras + '</b></div><div><span class="rotulo">Promedio</span><b>' + (cuenta ? Math.round(suma / cuenta) : '—') + '</b></div></div>' +
      '<p class="nota-pie">' + (vencidos.length ? 'Aprobados sobre los módulos que ya tocaban a la fecha (' + vencidos.length + ' por persona).' : 'El programa empieza el ' + fechaLarga(CFG.inicio) + '. Pueden adelantarse desde ya.') + '</p>' +
      '<section class="seccion"><div class="titulo"><h3>Quién hizo qué</h3><span class="rotulo">Nota · fecha · intentos</span></div>' +
      '<div class="matriz-caja"><table class="matriz"><thead><tr><th>Persona</th>' +
      MODS.map(m => '<th title="' + esc(m.titulo) + '">' + pad(m.n) + '<span class="detalle-celda">' + fechaCorta(fechaModulo(m.n)).slice(4) + '</span></th>').join('') +
      '</tr></thead><tbody>' + recs.map(u => '<tr><td>' + esc(u.nombre) + '</td>' + MODS.map(m => {
        const e = estadoModulo(u.usuario, m.n);
        if (e.clave === 'aprobado') return '<td>' + tagFlap('aprobado', String(e.p.mejor_nota), 'adm:' + u.usuario + ':' + m.n) + '<span class="detalle-celda">' + fechaCorta(String(e.p.fecha).slice(0, 10)).slice(4) + ' · ' + e.p.intentos + 'x</span></td>';
        if (e.clave === 'reintentar') return '<td><span class="tag reintentar">' + e.p.mejor_nota + '</span><span class="detalle-celda">' + e.p.intentos + ' intento' + (e.p.intentos > 1 ? 's' : '') + '</span></td>';
        if (e.clave === 'atrasado') return '<td><span class="tag atrasado">ATR</span></td>';
        if (e.clave === 'hoy') return '<td><span class="tag hoy">' + (e.texto === 'HOY' ? 'HOY' : 'PEND') + '</span></td>';
        return '<td class="vacio">·</td>';
      }).join('') + '</tr>').join('') + '</tbody></table></div>' +
      '<div class="leyenda"><span class="tag aprobado">90</span> aprobado <span class="tag reintentar">60</span> no aprobó <span class="tag atrasado">ATR</span> atrasado (más de 2 días) <span class="vacio num">·</span> aún no toca</div>' +
      '<p class="nota-pie">Programa completo: 20 módulos. La guía de presentación para imprimir está en <a href="guia.html" target="_blank" rel="noopener">guia.html</a>.</p></section>' +
      '<section class="seccion"><div class="titulo"><h3>Compromisos</h3></div>' + compromisos() + '</section>';
  }

  function compromisos() {
    const filas = (st.datos.progreso || []).filter(p => p.compromiso).sort((a, b) => String(b.fecha).localeCompare(String(a.fecha))).slice(0, 12);
    if (!filas.length) return '<div class="vacio-estado">Cuando terminen un módulo, aquí verás qué se comprometió a aplicar cada una.</div>';
    return '<ul class="tablero">' + filas.map(p => { const m = MODS.find(x => x.id === p.modulo); return '<li><span class="n">' + (m ? pad(m.n) : '') + '</span><span><span class="nombre">' + esc(p.compromiso) + '</span><span class="fecha">' + esc(nombreDe(p.usuario)) + ' · ' + fechaCorta(String(p.fecha).slice(0, 10)) + '</span></span><span></span></li>'; }).join('') + '</ul>';
  }

  function adminPresentacion(c) {
    const fecha = st.fechaChecklist || hoy();
    const recs = recepcionistas();
    c.innerHTML = '<section class="seccion"><div class="titulo"><h3>Checklist de presentación</h3>' +
      '<input type="date" id="f-fecha" value="' + fecha + '" max="' + hoy() + '" style="border:1px solid var(--filete);border-radius:8px;padding:6px 8px;font-family:var(--mono);font-size:13px;background:var(--papel)"></div>' +
      '<p class="nota-pie">Marca lo que cumple cada una al empezar el turno. Treinta segundos por persona.</p>' +
      recs.map(u => {
        const prev = (st.datos.checklist || []).find(x => x.usuario === u.usuario && x.fecha === fecha);
        const marcados = prev ? String(prev.detalle || '').split('|') : [];
        return '<form class="tarjeta-linea" data-u="' + u.usuario + '" style="margin-top:14px"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><strong>' + esc(u.nombre) + '</strong>' +
          (prev ? '<span class="tag aprobado">' + prev.puntaje + '%</span>' : '<span class="tag programado">SIN REGISTRO</span>') + '</div>' +
          '<div class="form" style="margin-top:10px">' + CHECK_PRESENTACION.map((t, i) => '<label class="check"><input type="checkbox" value="' + i + '"' + (marcados.includes(String(i)) ? ' checked' : '') + '><span>' + esc(t) + '</span></label>').join('') + '</div>' +
          '<button class="btn chico" style="margin-top:12px" type="submit">' + (prev ? 'Actualizar' : 'Guardar') + '</button></form>';
      }).join('') + '</section>' +
      '<section class="seccion"><div class="titulo"><h3>Últimos 7 días</h3></div>' + historialChecklist() + '</section>';
    c.querySelector('#f-fecha').addEventListener('change', e => { st.fechaChecklist = e.target.value || hoy(); vistaAdmin(); });
    c.querySelectorAll('form[data-u]').forEach(f => f.addEventListener('submit', async e => {
      e.preventDefault();
      const marcados = [...f.querySelectorAll('input:checked')].map(i => i.value);
      const puntaje = Math.round(marcados.length / CHECK_PRESENTACION.length * 100);
      await guardando(f.querySelector('button'), async () => {
        const r = await Datos.guardarChecklist(fecha, f.dataset.u, puntaje, marcados.join('|'));
        if (!r.ok) { toast(r.error, true); return; }
        st.datos = r.datos;
        toast(nombreDe(f.dataset.u) + ': ' + puntaje + '%');
        vistaAdmin();
      });
    }));
  }

  function historialChecklist() {
    const dias = [...Array(7)].map((_, i) => sumaDias(hoy(), -i));
    const recs = recepcionistas();
    return '<div class="matriz-caja"><table class="matriz"><thead><tr><th>Persona</th>' + dias.map(d => '<th>' + fechaCorta(d).slice(0, 6) + '</th>').join('') + '</tr></thead><tbody>' +
      recs.map(u => '<tr><td>' + esc(u.nombre) + '</td>' + dias.map(d => {
        const x = (st.datos.checklist || []).find(k => k.usuario === u.usuario && k.fecha === d);
        return x ? '<td class="num">' + x.puntaje + '</td>' : '<td class="vacio">·</td>';
      }).join('') + '</tr>').join('') + '</tbody></table></div>';
  }

  function adminTurnos(c) {
    const turnos = (st.datos.turnos || []).slice().sort((a, b) => b.fecha.localeCompare(a.fecha));
    const desde = sumaDias(hoy(), -6);
    const semana = turnos.filter(t => t.momento === 'cierre' && t.fecha >= desde);
    const tot = k => semana.reduce((s, t) => s + (Number(t[k]) || 0), 0);
    const ent = tot('entrantes'), con = tot('contestadas');
    const fechas = [...new Set(turnos.map(t => t.fecha))].slice(0, 14);
    c.innerHTML = '<div class="resumen"><div><span class="rotulo">Contestadas 7 días</span><b>' + (ent ? Math.round(con / ent * 100) + '%' : '—') + '</b></div>' +
      '<div><span class="rotulo">Pendientes</span><b>' + tot('pendientes') + '</b></div><div><span class="rotulo">WSP sin resp.</span><b>' + tot('wsp_sin_responder') + '</b></div></div>' +
      '<p class="nota-pie">' + con + ' de ' + ent + ' llamadas contestadas y ' + tot('devueltas') + ' devueltas, según los cierres de turno de los últimos 7 días.</p>' +
      '<section class="seccion"><div class="titulo"><h3>Registro por día</h3><span class="rotulo">Apertura · cierre</span></div>' +
      (fechas.length ? fechas.map(f => '<div class="tarjeta-linea" style="margin-top:12px"><strong class="num" style="font-size:14px">' + fechaCorta(f) + '</strong><ul class="tablero">' +
        recepcionistas().map(u => {
          const a = turnos.find(t => t.fecha === f && t.usuario === u.usuario && t.momento === 'apertura');
          const z = turnos.find(t => t.fecha === f && t.usuario === u.usuario && t.momento === 'cierre');
          return '<li style="grid-template-columns:1fr auto"><span><span class="nombre">' + esc(u.nombre) + '</span>' +
            '<span class="fecha">' + (z ? z.contestadas + '/' + z.entrantes + ' llamadas · ' + z.devueltas + ' devueltas · ' + z.pendientes + ' pend. · ' + z.wsp_sin_responder + ' WSP' : 'Sin cierre') + '</span>' +
            (z && z.notas ? '<span class="nota-pie" style="display:block;margin-top:4px">' + esc(z.notas) + '</span>' : '') + '</span>' +
            '<span style="display:flex;gap:4px">' + (a ? '<span class="tag aprobado">AP</span>' : '<span class="tag programado">AP</span>') + (z ? '<span class="tag aprobado">CI</span>' : '<span class="tag programado">CI</span>') + '</span></li>';
        }).join('') + '</ul></div>').join('')
        : '<div class="vacio-estado">Aún no hay registros. Cada recepcionista registra su apertura y su cierre desde su inicio, en «Tu turno de hoy».</div>') +
      '</section>';
  }

  function adminBitacora(c) {
    const todas = (st.datos.bitacora || []).slice().sort(ordenBitacora);
    const desde = sumaDias(hoy(), -29);
    const mes = todas.filter(b => b.fecha >= desde);
    const filtro = st.filtroBitacora || '';
    const porTipo = TIPOS_OCURRENCIA.map(t => [t, mes.filter(b => b.tipo === t).length]).filter(x => x[1]).sort((a, b) => b[1] - a[1]);
    const max = porTipo.length ? porTipo[0][1] : 1;
    const lista = todas.filter(b => !filtro || (filtro === 'pendiente' ? b.estado === 'pendiente' : b.tipo === filtro)).slice(0, 40);
    c.innerHTML = '<div class="resumen"><div><span class="rotulo">Últimos 30 días</span><b>' + mes.length + '</b></div>' +
      '<div><span class="rotulo">Pendientes</span><b>' + pendientesBitacora() + '</b></div>' +
      '<div><span class="rotulo">Más frecuente</span><b style="font-size:15px;font-family:var(--sans)">' + (porTipo.length ? esc(porTipo[0][0]) : '—') + '</b></div></div>' +
      '<section class="seccion"><div class="titulo"><h3>Por tipo</h3><span class="rotulo">30 días</span></div>' +
      (porTipo.length ? '<ul class="ranking">' + porTipo.map(([t, n]) => '<li><span class="pos">' + n + '</span><span><b>' + esc(t) + '</b><span class="barra"><i style="width:' + Math.round(n / max * 100) + '%"></i></span></span><span class="num">' + Math.round(n / mes.length * 100) + '%</span></li>').join('') + '</ul>'
        : '<div class="vacio-estado">Aún no hay ocurrencias en los últimos 30 días.</div>') +
      '<p class="nota-pie">Si un tipo se repite, ese es el tema para reforzar en la próxima capacitación.</p></section>' +
      '<section class="seccion"><div class="titulo"><h3>Registro</h3><div class="campo" style="min-width:180px"><select id="f-tipo" aria-label="Filtrar">' +
      [['', 'Todas'], ['pendiente', 'Solo pendientes']].concat(TIPOS_OCURRENCIA.map(t => [t, t])).map(([v, t]) => '<option value="' + esc(v) + '"' + (v === filtro ? ' selected' : '') + '>' + esc(t) + '</option>').join('') +
      '</select></div></div>' + listaBitacora(lista, st.perfil.usuario) +
      '<p class="nota-pie">Toca una ocurrencia para completarla o marcarla como resuelta.</p></section>';
    c.querySelector('#f-tipo').addEventListener('change', e => { st.filtroBitacora = e.target.value; vistaAdmin(); });
    enlazarBitacora(c);
  }

  function adminRanking(c) {
    const rk = ranking();
    const f = v => v == null ? '—' : Math.round(v);
    c.innerHTML = '<section class="seccion"><div class="titulo"><h3>Recepcionista del mes</h3><span class="rotulo">' + MESES[new Date().getMonth()] + '</span></div>' +
      '<div class="matriz-caja"><table class="matriz"><thead><tr><th>Persona</th><th>Total</th><th>Módulos 50%</th><th>Presentación 30%</th><th>Turnos 20%</th></tr></thead><tbody>' +
      rk.map((r, i) => '<tr><td>' + (i === 0 && r.total > 0 ? '<span class="tag hoy" style="margin-right:6px">1.º</span>' : '') + esc(r.u.nombre) + '</td><td class="num"><b>' + r.total + '</b></td><td class="num">' + f(r.notas) + '</td><td class="num">' + f(r.pres) + '</td><td class="num">' + f(r.turnos) + '</td></tr>').join('') +
      '</tbody></table></div><p class="nota-pie">Módulos: promedio de las notas de los módulos que ya tocaban este mes (0 si no lo hizo). Presentación: promedio del checklist diario. Turnos: aperturas y cierres registrados sobre los días con registro. Si falta una parte, se calcula con las demás.</p></section>';
  }

  // ───────────── navegación
  function ir(hash, sinHistorial) {
    if (sinHistorial) history.replaceState(null, '', hash); else location.hash = hash;
    router();
  }

  async function router() {
    const s = Datos.sesion();
    if (!s) { st.perfil = null; vistaIngreso(); return; }
    if (!st.datos || !st.perfil) {
      app.innerHTML = '<div class="contenedor" style="padding-top:40px"><div class="esqueleto" style="width:60%"></div><div class="esqueleto"></div><div class="esqueleto" style="width:80%"></div></div>';
      const r = await Datos.entrar(s.usuario, s.pin);
      if (!r.ok) { Datos.salir(); vistaIngreso(); toast(r.error, true); return; }
      st.datos = r.datos; st.perfil = r.usuario;
    }
    if (st.perfil.rol === 'admin') vistaAdmin();
    else vistaInicio();
  }

  window.addEventListener('hashchange', router);
  router();
})();

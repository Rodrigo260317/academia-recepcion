// Módulos 17 a 20 de la Academia de Recepción (cuarta tanda, cierra el programa).
// Casos reales de las reuniones del 02/09, 16/09, 23/09, 07/10 y 31/10/2026. Sin nombres de pacientes ni del personal.

window.MODULOS.push(
  // ───────────────────────────── 17 · Agenda, confirmaciones y no-shows
  {
    id: 'm17', n: 17, titulo: 'Agenda, confirmaciones y no-shows', minutos: 20, ilus: 'agenda',
    resumen: 'Una agenda confirmada es una mañana sin sorpresas.',
    pasos: [
      {
        tipo: 'escena', ilus: 'agenda',
        titulo: 'La agenda de mañana se arma hoy',
        texto: 'La agenda vivía en un Excel enredado, con colores y palabras por todos lados. Cuando una paciente no confirma y no llega, esa hora se pierde, y otra paciente que esperaba un espacio se quedó sin él. A las cinco de la tarde, la lista del día siguiente ya tiene que estar lista.',
        porque: 'Cada hora vacía es una paciente que no se atendió y un ingreso que no entró.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: el cierre de agenda', archivo: 'media/m17-agenda.mp4', poster: 'media/m17-agenda.jpg',
        fijate: ['Recordatorio a cada paciente de mañana', 'Llamar a quien no responde', 'Reprogramar en el sistema en el momento', 'Revisar la historia antes de mover una cita al mismo día']
      },
      {
        tipo: 'caso', real: '16/09/2026', titulo: '¿Qué harías?', ilus: 'whatsapp',
        situacion: 'Son las 4:30 p. m. Mandaste los recordatorios de mañana y tres pacientes no respondieron.',
        opciones: [
          { texto: 'Lo dejo así; si no vienen, ya se verá.', ok: false, nota: 'Así se pierden las horas de la mañana.' },
          { texto: 'Las llamo antes de cerrar la agenda. Si alguna cancela, la reprogramo en el sistema y ofrezco ese espacio a quien esperaba una cita.', ok: true, nota: 'Confirmar, reprogramar y llenar el espacio: así se cierra la agenda.' },
          { texto: 'Les escribo de nuevo mañana a las 8.', ok: false, nota: 'Mañana ya es tarde para llenar el espacio.' }
        ]
      },
      {
        tipo: 'caso', real: '23/09/2026', titulo: 'Mover una cita al mismo día', ilus: 'alerta',
        situacion: 'Una paciente que hoy se puso bótox pide aprovechar y hacerse también radiofrecuencia, que hay un espacio libre en la tarde.',
        opciones: [
          { texto: 'Se lo agendo: hay espacio y ella lo pidió.', ok: false, nota: 'La radiofrecuencia después del bótox hace que el bótox se pierda.' },
          { texto: 'Reviso su historia del día y consulto con la doctora antes de agendar.', ok: true, nota: 'Hay tratamientos que no van juntos. Ante la duda, siempre la doctora.' },
          { texto: 'Le digo que no se puede, sin explicar.', ok: false, nota: 'Se verifica y se le explica con amabilidad.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'El cierre de agenda, cada tarde',
        tarjetas: [
          { ilus: 'whatsapp', titulo: 'Recordatorio', texto: 'A cada paciente del día siguiente, con fecha, hora y doctora.', frase: '«Le recordamos su cita de mañana a las 10:00. ¿Nos confirma su asistencia, por favor?»' },
          { ilus: 'telefono', titulo: 'Llamar a quien no responde', texto: 'Antes de cerrar. Una llamada amable confirma lo que un mensaje no.' },
          { ilus: 'agenda', titulo: 'Cancelaciones, en el sistema', texto: 'Se reprograman en el momento, en el sistema. Nada en papelitos ni de memoria.' },
          { ilus: 'reloj', titulo: 'Espacio libre, espacio ofrecido', texto: 'Si alguien cancela, se le ofrece la hora a quien esperaba una cita.' },
          { ilus: 'pantalla', titulo: 'Citas por internet', texto: 'Las que entran solas también se revisan, se completan y se confirman.' },
          { ilus: 'alerta', titulo: 'El mismo día, con la historia', texto: 'Antes de mover o sumar un tratamiento ese día, revisa la historia y pregunta a la doctora.' }
        ]
      },
      {
        tipo: 'ordenar', titulo: 'Ordena el cierre de agenda',
        consigna: 'Ordena los pasos de la tarde.',
        pasos: [
          'Envío los recordatorios de mañana',
          'Llamo a quien no respondió',
          'Reprogramo las cancelaciones en el sistema',
          'Ofrezco los espacios libres',
          'Dejo lista la lista de mañana a las 5'
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Una cancelación se puede anotar en un papel y pasarla al sistema después.', v: false, nota: 'Se reprograma en el sistema en el momento.' },
          { texto: 'A las 5 p. m. la lista del día siguiente ya debería estar lista.', v: true, nota: 'Así se prepara la mañana con tiempo.' },
          { texto: 'Las citas que entran por internet no hace falta revisarlas.', v: false, nota: 'Se revisan y se confirman como cualquier otra.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Cuándo se cierra la agenda de mañana?', opciones: ['Hoy en la tarde, hacia las 5', 'Mañana a las 8', 'Cuando haya tiempo'], correcta: 0 },
      { p: 'Una paciente no responde el recordatorio.', opciones: ['La llamo antes de cerrar la agenda', 'La dejo agendada sin confirmar', 'La borro'], correcta: 0 },
      { p: 'Una paciente cancela.', opciones: ['La reprogramo en el sistema en el momento', 'Lo anoto en un papel', 'Lo recuerdo de memoria'], correcta: 0 },
      { p: 'El espacio que quedó libre…', opciones: ['Se ofrece a quien esperaba una cita', 'Se queda vacío', 'Se usa para descansar'], correcta: 0 },
      { p: '¿Qué pasa con las citas que entran por internet?', opciones: ['Se revisan y se confirman', 'Se ignoran', 'Se borran'], correcta: 0 },
      { p: 'Bótox hoy y piden radiofrecuencia la misma tarde.', opciones: ['Reviso la historia y consulto a la doctora', 'Lo agendo', 'Lo cobro primero'], correcta: 0 },
      { p: '¿Por qué importa una hora vacía?', opciones: ['Es una paciente sin atender y un ingreso perdido', 'No importa', 'Es tiempo libre'], correcta: 0 },
      { p: '¿Qué frase va con el estándar?', opciones: ['«¿Nos confirma su asistencia, por favor?»', '«¿Viene o no viene?»', '«Si no viene, avise»'], correcta: 0 }
    ],
    compromisos: [
      'Cerraré la agenda de mañana antes de las 5',
      'Llamaré a cada paciente que no confirme',
      'Reprogramaré cada cancelación en el sistema, en el momento',
      'Revisaré la historia antes de mover una cita al mismo día'
    ]
  },

  // ───────────────────────────── 18 · Historias clínicas y exámenes
  {
    id: 'm18', n: 18, titulo: 'Historias clínicas y exámenes', minutos: 20, ilus: 'pantalla',
    resumen: 'Una historia en orden protege a todos.',
    pasos: [
      {
        tipo: 'escena', ilus: 'pantalla',
        titulo: 'Lo primero que se pide ante un reclamo',
        texto: 'Cuando una paciente denuncia, lo primero que se pide es el consentimiento, la historia clínica y los exámenes. Hoy los resultados llegan por WhatsApp, se imprimen y a veces no aparecen el día de la consulta. Y el orden de las historias físicas es un pedido directo de la doctora.',
        porque: 'Si falta un papel, la clínica queda sin defensa. Si está en su sitio, todos están protegidos.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: la historia en orden', archivo: 'media/m18-historias.mp4', poster: 'media/m18-historias.jpg',
        fijate: ['Cada resultado se sube a exámenes auxiliares, con su fecha', 'Paciente correcta: nombre y documento', 'Las historias físicas vuelven a su lugar el mismo día', 'Recepción ve, pero no escribe en lo médico']
      },
      {
        tipo: 'caso', real: '23/09/2026', titulo: '¿Qué harías?', ilus: 'whatsapp',
        situacion: 'Por WhatsApp llega la ecografía de una paciente que tiene cita con la doctora el jueves.',
        opciones: [
          { texto: 'La imprimo y la dejo en la bandeja del counter.', ok: false, nota: 'Así se pierde. El papel suelto no es parte de la historia.' },
          { texto: 'Verifico nombre y documento, y la subo a su historia digital, en exámenes auxiliares, con la fecha.', ok: true, nota: 'Así la doctora la ve el jueves sin que nadie la busque.' },
          { texto: 'Le respondo a la paciente que la traiga impresa.', ok: false, nota: 'Ya la mandó: se sube a su historia.' }
        ]
      },
      {
        tipo: 'caso', real: '16/09/2026', titulo: 'Dos pacientes con el mismo nombre', ilus: 'gafete',
        situacion: 'Vas a subir un resultado y en el sistema aparecen dos pacientes con el mismo nombre y apellido.',
        opciones: [
          { texto: 'Lo subo a la primera que aparece.', ok: false, nota: 'Un examen en la historia equivocada es un error grave.' },
          { texto: 'Comparo el documento y la fecha de nacimiento del resultado con cada ficha; si no coincide, pregunto antes de subirlo.', ok: true, nota: 'La paciente correcta, siempre.' },
          { texto: 'No lo subo y lo dejo para después.', ok: false, nota: 'Se aclara y se sube el mismo día.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'La historia, paso a paso',
        tarjetas: [
          { ilus: 'whatsapp', titulo: 'Llega un resultado', texto: 'Por WhatsApp, correo o en físico. No se queda en el celular ni en una bandeja.' },
          { ilus: 'gafete', titulo: 'La paciente correcta', texto: 'Nombre, documento y fecha de nacimiento antes de adjuntar nada.' },
          { ilus: 'pantalla', titulo: 'Exámenes auxiliares', texto: 'Se sube o se escanea al apartado de exámenes auxiliares de su historia digital, con la fecha del examen.' },
          { ilus: 'llave', titulo: 'Historias físicas en su lugar', texto: 'Las que se sacan, vuelven el mismo día, en orden. Nunca sobre el counter a la vista.' },
          { ilus: 'mano', titulo: 'Ver, no escribir', texto: 'Recepción ve lo que indicó la doctora, pero no escribe en la parte médica.' },
          { ilus: 'agenda', titulo: 'Una sola historia', texto: 'Todo lo de ese día en un mismo lugar: así nadie programa algo que no va.' }
        ]
      },
      {
        tipo: 'ordenar', titulo: 'Ordena: llegó un resultado',
        consigna: 'Ordena los pasos para adjuntar un examen.',
        pasos: [
          'Recibo el resultado',
          'Verifico nombre y documento',
          'Abro su historia digital',
          'Lo subo a exámenes auxiliares con la fecha',
          'Confirmo que quedó adjunto'
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Un resultado impreso en la bandeja del counter es suficiente.', v: false, nota: 'Va a la historia digital, en exámenes auxiliares.' },
          { texto: 'Ante un reclamo, se piden el consentimiento, la historia y los exámenes.', v: true, nota: 'Por eso tienen que estar completos y en su lugar.' },
          { texto: 'Recepción puede corregir lo que escribió la doctora si ve un error.', v: false, nota: 'Recepción ve, no escribe en la parte médica. Si ves algo raro, avisas.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Dónde va un resultado de laboratorio?', opciones: ['A exámenes auxiliares de su historia digital', 'A la bandeja del counter', 'Al celular'], correcta: 0 },
      { p: 'Antes de adjuntar un examen…', opciones: ['Verifico nombre y documento', 'Lo subo a la primera ficha', 'No reviso nada'], correcta: 0 },
      { p: 'Ante un reclamo, ¿qué se pide primero?', opciones: ['Consentimiento, historia y exámenes', 'La boleta', 'Nada'], correcta: 0 },
      { p: 'Las historias físicas que se sacan…', opciones: ['Vuelven a su lugar el mismo día, en orden', 'Se quedan en el counter', 'Se guardan al fin de mes'], correcta: 0 },
      { p: '¿Qué hace recepción en la parte médica?', opciones: ['La ve, pero no escribe', 'La corrige', 'La borra'], correcta: 0 },
      { p: 'Hay dos pacientes con el mismo nombre.', opciones: ['Comparo documento y fecha de nacimiento', 'Elijo una', 'Lo dejo para otro día'], correcta: 0 },
      { p: '¿Por qué la historia es una sola?', opciones: ['Para ver todo lo del día y no programar algo que no va', 'Por costumbre', 'No importa'], correcta: 0 },
      { p: 'El examen llega en físico.', opciones: ['Lo escaneo y lo subo a su historia', 'Lo guardo en un cajón', 'Se lo devuelvo'], correcta: 0 }
    ],
    compromisos: [
      'Subiré cada resultado a la historia el mismo día',
      'Verificaré nombre y documento antes de adjuntar',
      'Devolveré cada historia física a su lugar',
      'No escribiré en la parte médica'
    ]
  },

  // ───────────────────────────── 19 · De la vereda a la cabina
  {
    id: 'm19', n: 19, titulo: 'De la vereda a la cabina', minutos: 20, ilus: 'puerta',
    resumen: 'Cada tramo tiene una responsable.',
    pasos: [
      {
        tipo: 'escena', ilus: 'puerta',
        titulo: 'La doctora es lo último',
        texto: 'Antes de llegar a la doctora, la paciente pasó por el teléfono, la vereda, la puerta, el counter, la sala y el pasillo. Si en cualquiera de esos tramos algo falla, la paciente no regresa, aunque la doctora haga un trabajo perfecto.',
        porque: 'Al paciente no lo atiende la empresa: lo atiende cada persona que encuentra en el camino.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: el recorrido completo', archivo: 'media/m19-recorrido.mp4', poster: 'media/m19-recorrido.jpg',
        fijate: ['Valet y vigilante: saludo y puerta abierta', 'Counter: de pie, por su nombre, y avisar que llegó', 'Acompañar hasta la cabina, no señalar', 'Rondas también en cabina; cobro con POS, con discreción']
      },
      {
        tipo: 'caso', real: '07/10/2026', titulo: '¿Qué falló?', ilus: 'silla',
        situacion: 'Una paciente pasó dos horas en la camilla de una cabina pensada para 15 minutos. Entraron varias personas y nadie hizo nada.',
        opciones: [
          { texto: 'La asistente que la dejó ahí; las demás no tenían por qué saber.', ok: false, nota: 'Todas la vieron. Cada una pudo preguntar o avisar.' },
          { texto: 'No hubo rondas ni nadie avisó. Quien ve a una paciente esperando de más, pregunta y escala de inmediato.', ok: true, nota: 'Las rondas no son solo de la sala: también de las cabinas.' },
          { texto: 'La paciente debió reclamar.', ok: false, nota: 'Nunca debería tener que hacerlo.' }
        ]
      },
      {
        tipo: 'caso', real: '02/09/2026', titulo: 'Un cobro en plena atención', ilus: 'pos',
        situacion: 'En la cabina, la paciente pide una jeringa más de lo indicado. La doctora está trabajando.',
        opciones: [
          { texto: 'La paciente baja al counter a pagar a mitad del procedimiento.', ok: false, nota: 'No se interrumpe la atención.' },
          { texto: 'Subo con el POS, cobro con discreción y aviso a farmacia apenas se confirma el pago.', ok: true, nota: 'Cobro sin interrumpir a la doctora ni incomodar a la paciente.' },
          { texto: 'Se lo cobro otro día.', ok: false, nota: 'Sin crédito: se cobra en el momento.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'Los tramos del recorrido',
        tarjetas: [
          { ilus: 'telefono', titulo: 'El teléfono', texto: 'La primera cara. Antes del tercer timbre, con nombre y sonrisa.' },
          { ilus: 'puerta', titulo: 'Vereda y puerta', texto: 'El valet sale a recibirla y abre la puerta. El vigilante saluda.', frase: '«Buenos días, señora, bienvenida.»' },
          { ilus: 'timbre', titulo: 'El counter', texto: 'De pie, por su nombre. Avisas que llegó y le das el tiempo real.' },
          { ilus: 'taza', titulo: 'La sala', texto: 'Algo de tomar, rondas cada 15 minutos y avisos antes de que pregunte.' },
          { ilus: 'manos', titulo: 'El pasillo y la cabina', texto: 'La acompañas; no le señalas el camino. En cabina también hay rondas.' },
          { ilus: 'pos', titulo: 'El cobro en cabina', texto: 'Si hay un adicional, subes con el POS y cobras con discreción.' },
          { ilus: 'agenda', titulo: 'La despedida', texto: 'De pie, con su próxima cita confirmada y la invitación al QR.' }
        ]
      },
      {
        tipo: 'ordenar', titulo: 'Ordena el recorrido',
        consigna: 'Ordena los tramos, desde que llega.',
        pasos: [
          'El valet abre la puerta',
          'Saludo de pie y por su nombre',
          'Algo de tomar y el tiempo real',
          'La acompaño hasta la cabina',
          'Despedida con su próxima cita'
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Las rondas son solo para la sala de espera.', v: false, nota: 'También para las cabinas.' },
          { texto: 'Si veo a una paciente esperando de más, aunque no sea mía, pregunto y aviso.', v: true, nota: 'Cada una cuida a cada paciente.' },
          { texto: 'Basta con señalarle a la paciente dónde queda la cabina.', v: false, nota: 'Se la acompaña.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Dónde empieza la atención?', opciones: ['En el teléfono y en la vereda', 'En la cabina', 'Con la doctora'], correcta: 0 },
      { p: '¿Qué hace el valet?', opciones: ['Sale a recibirla y abre la puerta', 'Espera sentado', 'Nada'], correcta: 0 },
      { p: 'En el counter, al llegar ella…', opciones: ['De pie, por su nombre, y aviso que llegó', 'Sigo en la computadora', 'Le pido que espere'], correcta: 0 },
      { p: '¿Cómo se llega a la cabina?', opciones: ['La acompaño', 'Le señalo el camino', 'Que pregunte'], correcta: 0 },
      { p: 'Una paciente lleva mucho tiempo en la cabina.', opciones: ['Pregunto y escalo de inmediato', 'No es mi tema', 'Espero'], correcta: 0 },
      { p: 'Hay un adicional en plena atención.', opciones: ['Subo con el POS y cobro con discreción', 'Que baje a pagar', 'Se cobra otro día'], correcta: 0 },
      { p: '¿Cómo se despide?', opciones: ['De pie, con su próxima cita', 'Sentada, sin mirar', 'No se despide'], correcta: 0 },
      { p: '¿Por qué importa cada tramo?', opciones: ['Si uno falla, la paciente no regresa', 'Solo importa la doctora', 'No importa'], correcta: 0 }
    ],
    compromisos: [
      'Acompañaré a cada paciente hasta la cabina',
      'Haré rondas también en las cabinas',
      'Avisaré si veo a una paciente esperando de más, aunque no sea mía',
      'Despediré a cada paciente de pie y con su próxima cita'
    ]
  },

  // ───────────────────────────── 20 · Un solo equipo, nivel de lujo
  {
    id: 'm20', n: 20, titulo: 'Un solo equipo, nivel de lujo', minutos: 20, ilus: 'manos',
    resumen: 'El lujo lo hace un equipo que se cuida.',
    pasos: [
      {
        tipo: 'escena', ilus: 'manos',
        titulo: 'Todo se mide, y somos un equipo',
        texto: 'En la clínica, nadie dará un paso que no sea medido: llamadas, esperas, encuestas. Y al mismo tiempo, el estándar es de todo el equipo. Hoy el counter tiene más personas que antes: el resultado tiene que notarse.',
        porque: 'Medir no es castigar. Es saber dónde mejorar, juntas.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: un solo equipo', archivo: 'media/m20-equipo.mp4', poster: 'media/m20-equipo.jpg',
        fijate: ['La paciente ve una sola clínica', 'Contesta quien está libre', 'Pendientes por escrito; nadie dice «no es mi trabajo»', 'Recepcionista del mes: módulos, presentación y turnos']
      },
      {
        tipo: 'caso', titulo: '¿Qué harías?', ilus: 'telefono',
        situacion: 'Tu compañera de historias está en el tercer piso, la otra está cobrando y suena el teléfono. Tú estás ordenando la agenda.',
        opciones: [
          { texto: 'No contesto: el teléfono lo ve otra.', ok: false, nota: 'La paciente que llama no sabe de turnos ni de áreas.' },
          { texto: 'Contesto antes del tercer timbre; la agenda puede esperar dos minutos.', ok: true, nota: 'Contesta quien está libre. Siempre.' },
          { texto: 'Lo dejo sonar y devuelvo la llamada en la tarde.', ok: false, nota: 'Una llamada perdida puede ser una paciente perdida.' }
        ]
      },
      {
        tipo: 'caso', titulo: 'Una compañera con una paciente difícil', ilus: 'alerta',
        situacion: 'Una paciente levanta la voz en el counter con tu compañera. La sala está llena.',
        opciones: [
          { texto: 'Sigo con lo mío; no es mi paciente.', ok: false, nota: 'La sala también necesita atención en ese momento.' },
          { texto: 'Atiendo la sala y a las que llegan, para que ella pueda llevar a la paciente a un lugar tranquilo.', ok: true, nota: 'Así se cubren entre ellas.' },
          { texto: 'Me meto en la discusión para apoyarla.', ok: false, nota: 'Dos contra una sube el tono. Se apoya cubriendo lo demás.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'Así trabaja un equipo de lujo',
        tarjetas: [
          { ilus: 'manos', titulo: 'Una sola clínica', texto: 'La paciente no ve áreas ni turnos. Ve una sola clínica.' },
          { ilus: 'telefono', titulo: 'Contesta quien está libre', texto: 'El teléfono, la puerta y la sala son de todas.' },
          { ilus: 'agenda', titulo: 'Pendientes por escrito', texto: 'Se entregan de palabra y por escrito, con su hora. Nada queda en la cabeza de una sola.' },
          { ilus: 'alerta', titulo: 'Nunca «no es mi trabajo»', texto: 'Si no sabes, averiguas. Si no te toca, avisas a quien le toca.' },
          { ilus: 'gafete', titulo: 'Recepcionista del mes', texto: 'Se elige con números: módulos 50 %, presentación 30 % y turnos 20 %.' },
          { ilus: 'espejo', titulo: 'Lo bueno se contagia', texto: 'Cuando una se alinea, las demás la siguen. Lo malo, también.' }
        ]
      },
      {
        tipo: 'sino', titulo: '¿Es de equipo?',
        consigna: 'Toca «Sí» si es trabajo en equipo y «No» si no lo es.',
        frases: [
          { texto: '«Eso no me toca.»', si: false, nota: 'Se averigua o se avisa a quien le toca.' },
          { texto: 'Dejo mis pendientes escritos en la entrega de turno.', si: true, nota: 'Lo que no se entrega, se pierde.' },
          { texto: 'Contesto el teléfono aunque esté ordenando otra cosa.', si: true, nota: 'Contesta quien está libre.' },
          { texto: 'Comento con una paciente que mi compañera siempre llega tarde.', si: false, nota: 'Frente a la paciente, somos una sola clínica.' },
          { texto: 'Cubro la sala mientras mi compañera atiende a una paciente molesta.', si: true, nota: 'Así se cuidan entre ellas.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Medir la atención es una forma de castigo.', v: false, nota: 'Es para saber dónde mejorar, juntas.' },
          { texto: 'La Recepcionista del mes se elige con números, no por simpatía.', v: true, nota: 'Módulos, presentación y turnos.' },
          { texto: 'Si una compañera no cumple el estándar, me da igual.', v: false, nota: 'Lo malo también se contagia: se conversa y se apoya.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Para qué se mide la atención?', opciones: ['Para saber dónde mejorar, juntas', 'Para castigar', 'Para nada'], correcta: 0 },
      { p: '¿Qué ve la paciente?', opciones: ['Una sola clínica', 'Áreas separadas', 'Turnos'], correcta: 0 },
      { p: 'Suena el teléfono y estás ordenando la agenda.', opciones: ['Contesto', 'Lo dejo sonar', 'Espero a otra'], correcta: 0 },
      { p: 'Tu compañera atiende a una paciente molesta.', opciones: ['Cubro la sala y a las que llegan', 'Me meto en la discusión', 'Sigo con lo mío'], correcta: 0 },
      { p: '¿Cómo se entregan los pendientes?', opciones: ['De palabra y por escrito, con su hora', 'De memoria', 'No se entregan'], correcta: 0 },
      { p: '¿Cómo se elige la Recepcionista del mes?', opciones: ['Módulos 50 %, presentación 30 % y turnos 20 %', 'Por sorteo', 'Por antigüedad'], correcta: 0 },
      { p: '«Eso no es mi trabajo» se reemplaza por…', opciones: ['«Lo averiguo» o «le aviso a quien le toca»', '«Pregunte a otra»', 'Silencio'], correcta: 0 },
      { p: '¿Quién hace el lujo?', opciones: ['Un equipo que se cuida', 'Solo la doctora', 'El edificio'], correcta: 0 }
    ],
    compromisos: [
      'Contestaré el teléfono si estoy libre, sea de quien sea',
      'Cubriré a mi compañera cuando lo necesite',
      'Entregaré mis pendientes por escrito',
      'Nunca diré «no es mi trabajo»'
    ]
  }
);

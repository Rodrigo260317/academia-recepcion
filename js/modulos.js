// Contenido de la Academia de Recepción.
// Fuente: reuniones con la dirección médica (31/10/2026 y anteriores). Sin nombres de pacientes ni del personal.

window.PROGRAMA = [
  { n: 1, titulo: 'Teléfono y WhatsApp' },
  { n: 2, titulo: 'Esperas sin olvidos' },
  { n: 3, titulo: 'Complicaciones: nunca sin respuesta' },
  { n: 4, titulo: 'Primero se paga, sin crédito' },
  { n: 5, titulo: 'Apertura, cierre y entrega de turno' },
  { n: 6, titulo: 'Bienvenida de lujo' },
  { n: 7, titulo: 'Presencia y conducta a la vista' },
  { n: 8, titulo: 'Lenguaje corporal' },
  { n: 9, titulo: 'Admisión con DNI y registro completo' },
  { n: 10, titulo: 'Flujo: paga, firma en tablet y sube' },
  { n: 11, titulo: 'Decir la verdad con elegancia' },
  { n: 12, titulo: 'Pacientes difíciles y altercados' },
  { n: 13, titulo: 'Quejas y Libro de Reclamaciones' },
  { n: 14, titulo: 'Discreción, cámaras y objetos olvidados' },
  { n: 15, titulo: 'Paciente VIP y tarjetas' },
  { n: 16, titulo: 'Venta consultiva ética' },
  { n: 17, titulo: 'Agenda, confirmaciones y no-shows' },
  { n: 18, titulo: 'Historias clínicas y exámenes' },
  { n: 19, titulo: 'De la vereda a la cabina' },
  { n: 20, titulo: 'Un solo equipo, nivel de lujo' }
];

window.MODULOS = [
  // ───────────────────────────── 3 · Complicaciones
  {
    id: 'm03', n: 3, titulo: 'Complicaciones: nunca sin respuesta', minutos: 20, ilus: 'alerta',
    resumen: 'Contestar, registrar y pasar a la doctora el mismo día.',
    pasos: [
      {
        tipo: 'escena', ilus: 'alerta',
        titulo: 'Una complicación nunca se queda sin respuesta',
        texto: 'Una molestia después de un procedimiento puede pasar. Lo que no puede pasar es que la paciente se sienta abandonada: que no le contesten, que la bloqueen o que le digan «es normal» sin que la vea la doctora. Ya pasó, y terminó en multas que costaron decenas de veces lo que valía el procedimiento.',
        porque: 'Ante una complicación se contiene a la paciente, se resuelve, y nunca se la abandona ni se deja de contestar el teléfono.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: nunca sin respuesta', archivo: 'media/m03-complicaciones.mp4', poster: 'media/m03-complicaciones.jpg',
        fijate: ['Contestar en el momento y con calma', 'Registrar fecha, hora y lo que contó', 'Pasarla a la doctora el mismo día', 'Llamar al día siguiente para saber cómo sigue']
      },
      {
        tipo: 'caso', real: '20/08/2026', titulo: '¿Qué harías?', ilus: 'whatsapp',
        situacion: 'Una paciente escribe varias veces por WhatsApp contando una molestia después de su procedimiento. Alguien propone bloquearla porque «ya está insistiendo mucho».',
        opciones: [
          { texto: 'La bloqueo: ya se le respondió una vez.', ok: false, nota: 'Así pasó: a una paciente complicada la bloquearon y no le contestaban. Terminó en abogados y multas, «16 000 soles por un procedimiento de 300».' },
          { texto: 'Le respondo en ese momento con calma, registro lo que cuenta y le paso el caso a la doctora el mismo día.', ok: true, nota: 'Exacto: se la contiene, se registra y la ve la doctora. Responder a tiempo también es parte del trabajo del counter.' },
          { texto: 'Le digo que es normal y que espere unos días.', ok: false, nota: 'Solo la doctora puede decir si es normal, y después de verla.' }
        ]
      },
      {
        tipo: 'caso', real: '20/08/2026', titulo: '¿Qué harías?', ilus: 'agenda',
        situacion: 'Llega una paciente por una complicación. Otra profesional te pide su historia para atenderla ella misma, sin que pase por la doctora.',
        opciones: [
          { texto: 'Se la doy: ella también sabe.', ok: false, nota: 'Toda complicación pasa con la doctora, sin excepción. Así lo pidió la dirección.' },
          { texto: 'Le explico con amabilidad que toda complicación pasa con la doctora, y le aviso a la doctora en ese momento.', ok: true, nota: 'Bien. Ya pasó una vez y el counter lo evitó: eso es cuidar a la paciente y a la clínica.' },
          { texto: 'Le digo a la paciente que vuelva otro día.', ok: false, nota: 'Una paciente con complicación se atiende ese mismo día.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'El protocolo de la complicación',
        tarjetas: [
          { ilus: 'alerta', titulo: 'Reconócela', texto: 'Si una paciente escribe o llama por dolor, hinchazón, moretones, enrojecimiento o un «algo no está bien» después de un procedimiento, es una posible complicación. Va primero que todo lo demás.' },
          { ilus: 'whatsapp', titulo: 'Contesta y contén', texto: 'Respondes en el momento, con calma y sin minimizar. Nada de «es normal» ni de discutir.', frase: '«Lamento mucho que se sienta así. Le aviso ahora mismo a la doctora y le escribo en 15 minutos con la hora en que la verá.»' },
          { ilus: 'telefono', titulo: 'Pásala a la doctora', texto: 'El mismo día y a la doctora: nadie más decide ni atiende una complicación por su cuenta.' },
          { ilus: 'agenda', titulo: 'Regístralo', texto: 'Fecha, hora, qué dijo la paciente con sus palabras y a quién le avisaste. Sin adjetivos, solo hechos.' },
          { ilus: 'reloj', titulo: 'Haz el seguimiento', texto: 'Cumples la hora que prometiste y al día siguiente la llamas para saber cómo sigue. Nunca se la deja en visto ni se la bloquea.' }
        ]
      },
      {
        tipo: 'ordenar', titulo: 'Ordena la respuesta',
        consigna: 'Ordena qué haces cuando una paciente reporta una molestia.',
        pasos: [
          'Le respondo de inmediato y con calma',
          'Registro lo que cuenta, con fecha y hora',
          'Le aviso a la doctora el mismo día',
          'Le confirmo a la paciente cuándo la verá',
          'La llamo después para saber cómo sigue'
        ]
      },
      {
        tipo: 'sino', titulo: 'Frases que sí y frases que no',
        consigna: 'Toca «Sí» si la frase va con el protocolo y «No» si no va.',
        frases: [
          { texto: '«Eso es normal, no se preocupe.»', si: false, nota: 'Solo la doctora lo puede decir, después de verla.' },
          { texto: '«Lamento mucho que se sienta así; ahora mismo le aviso a la doctora.»', si: true, nota: 'Contiene y actúa.' },
          { texto: '«La doctora está ocupada, escriba mañana.»', si: false, nota: 'Una complicación se atiende el mismo día.' },
          { texto: '«Le escribo en 15 minutos con la hora en que la verá la doctora.»', si: true, nota: 'Compromiso concreto, y luego se cumple.' },
          { texto: '«Eso le pasa por no seguir las indicaciones.»', si: false, nota: 'Nunca se culpa a la paciente.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Si una paciente insiste mucho, se la puede bloquear.', v: false, nota: 'Nunca. Es justo lo que convirtió una molestia en multas.' },
          { texto: 'Una complicación mal atendida puede costar muchas veces lo que se cobró por el procedimiento.', v: true, nota: 'Ya pasó: multas de decenas de miles de soles por un procedimiento de 300.' },
          { texto: 'Si la doctora está ocupada, otra profesional puede atender la complicación.', v: false, nota: 'Toda complicación pasa con la doctora.' }
        ]
      }
    ],
    evaluacion: [
      { p: 'Una paciente escribe por una molestia después de su procedimiento. ¿Qué haces primero?', opciones: ['Le respondo de inmediato y con calma', 'Espero a terminar mis pendientes', 'Le digo que es normal'], correcta: 0 },
      { p: '¿Quién atiende una complicación?', opciones: ['Cualquier profesional disponible', 'La doctora, el mismo día', 'Recepción, con lo que sepa'], correcta: 1 },
      { p: 'La paciente insiste con muchos mensajes.', opciones: ['La bloqueo', 'La dejo en visto un rato', 'Le contesto, la contengo y le aviso a la doctora'], correcta: 2 },
      { p: '¿Qué se registra?', opciones: ['Nada, si se resolvió', 'Fecha, hora, lo que dijo y a quién se avisó', 'Solo el nombre'], correcta: 1 },
      { p: '¿Qué frase NO se usa?', opciones: ['«Eso es normal, no se preocupe.»', '«Le aviso ahora mismo a la doctora.»', '«La llamo mañana para saber cómo sigue.»'], correcta: 0 },
      { p: '¿Por qué importa tanto?', opciones: ['Por la imagen en redes nada más', 'Porque una complicación mal atendida termina en multas que cuestan muchas veces el procedimiento, y porque la paciente lo merece', 'No importa tanto'], correcta: 1 },
      { p: 'Otra profesional pide la historia para atender la complicación ella misma.', opciones: ['Se la doy', 'Le explico que pasa con la doctora y le aviso a la doctora', 'Le digo a la paciente que vuelva otro día'], correcta: 1 },
      { p: 'Después de que la vio la doctora…', opciones: ['Se cierra el caso', 'Se la llama al día siguiente para saber cómo sigue', 'Se espera a que ella escriba'], correcta: 1 }
    ],
    compromisos: [
      'Nunca dejaré sin respuesta a una paciente con una molestia',
      'Pasaré toda complicación a la doctora el mismo día',
      'Registraré cada caso con fecha, hora y lo que se dijo',
      'Haré el seguimiento al día siguiente'
    ]
  },

  // ───────────────────────────── 4 · Cobro primero
  {
    id: 'm04', n: 4, titulo: 'Primero se paga, sin crédito', minutos: 20, ilus: 'pos',
    resumen: 'Autorización, pago y recién sale el producto. Con elegancia.',
    pasos: [
      {
        tipo: 'escena', ilus: 'pos',
        titulo: 'Primero se paga, después se prepara',
        texto: 'Se han perdido productos preparados sin pago y tratamientos que se fueron sin cobrar: una paciente se fue debiendo unos 5 000 soles con un «no me pasa la tarjeta», y en créditos se llegó a perder hasta 10 000 dólares. El nuevo orden protege a la clínica y también a la paciente: autorización, pago y recién sale el producto.',
        porque: 'Pedir el pago primero no es desconfianza: es el orden de una clínica de lujo, explicado con elegancia.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: primero se paga', archivo: 'media/m04-cobro.mp4', poster: 'media/m04-cobro.jpg',
        fijate: ['Autorización, pago y recién ahí el producto', 'Sin crédito para nadie', 'El plan B se resuelve antes de empezar', 'Se pide con elegancia']
      },
      {
        tipo: 'caso', real: '02/09/2026', titulo: '¿Qué falló?', ilus: 'pos',
        situacion: 'Se prepararon cuatro enzimas para una paciente que al final dijo que no se las ponía y se fue. Una quedó preparada sin aplicar, alguien la guardó y apareció dos meses después.',
        opciones: [
          { texto: 'La paciente cambió de opinión: no se podía hacer nada.', ok: false, nota: 'Sí se podía: si el producto sale solo con el pago confirmado, no se pierde.' },
          { texto: 'El producto se preparó antes del pago. Desde ahora sale solo con la conformidad de pago.', ok: true, nota: 'Exacto: primero se paga abajo, y con el pago confirmado farmacia prepara.' },
          { texto: 'Farmacia debió esconderlo mejor.', ok: false, nota: 'Nada se esconde: lo que se prepara sin pago es una pérdida para la clínica.' }
        ]
      },
      {
        tipo: 'caso', real: '02/09/2026', titulo: '¿Qué harías?', ilus: 'pos',
        situacion: 'Al terminar el procedimiento, la paciente dice que su tarjeta no pasa y que vuelve otro día a pagar.',
        opciones: [
          { texto: 'Le digo que no se preocupe, que pague la próxima vez.', ok: false, nota: 'Así se fue una paciente con unos 5 000 soles y nunca pagó.' },
          { texto: 'Eso se evita antes: se cobra antes del procedimiento y, si la tarjeta no pasa, se ofrecen otra tarjeta, transferencia o efectivo.', ok: true, nota: 'Bien: el plan B se resuelve antes de empezar, nunca con la paciente ya en la puerta.' },
          { texto: 'Le doy crédito porque es paciente frecuente.', ok: false, nota: 'Sin crédito, para nadie.' }
        ]
      },
      {
        tipo: 'caso', real: '02/09/2026', titulo: '¿Qué harías?', ilus: 'reloj',
        situacion: 'La doctora indica un bótox a las 9:00 y manda a la paciente a pagar. Abajo hay cola, nadie le prioriza el cobro ni el consentimiento, y la paciente vuelve recién a las 12:00 para una aplicación de 15 minutos.',
        opciones: [
          { texto: 'Que haga la cola como todas.', ok: false, nota: 'Una derivada de consulta se cobra en minutos: si no, se atrasan la doctora y la paciente.' },
          { texto: 'Cobro exprés: la atiendo de inmediato, llena el consentimiento en la tablet, aviso a farmacia y sube en minutos.', ok: true, nota: 'Eso es: baja, paga, firma y sube.' },
          { texto: 'Le digo que suba y pague al final.', ok: false, nota: 'Primero se paga; el orden no cambia, se agiliza.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'El orden del cobro',
        tarjetas: [
          { ilus: 'tablet', titulo: 'Autorización, pago, producto', texto: 'Primero la paciente llena su autorización en la tablet, luego paga, y con el pago confirmado farmacia prepara el producto.' },
          { ilus: 'pos', titulo: 'Sin crédito', texto: 'No se da crédito a nadie, ni a pacientes frecuentes. Si no puede pagar todo, se conversa antes de empezar, nunca después.' },
          { ilus: 'gafete', titulo: 'Pídelo con elegancia', texto: 'Se explica como parte del servicio, no como desconfianza.', frase: '«Para agilizar su atención y por su seguridad, primero registramos su autorización y el pago; así farmacia le tiene todo listo al instante.»' },
          { ilus: 'pos', titulo: 'Si la tarjeta no pasa', texto: 'Antes del procedimiento: otra tarjeta, transferencia o efectivo. Nunca se deja ir a la paciente con el cobro abierto.' },
          { ilus: 'reloj', titulo: 'Cobro exprés', texto: 'A la paciente que baja de consulta con un procedimiento indicado se la atiende primero: paga, firma y sube en minutos.' },
          { ilus: 'manos', titulo: 'Algo extra en cabina', texto: 'Si en plena atención pide algo más, sube alguien de caja con el POS y cobra ahí mismo, con discreción y sin interrumpir a la doctora.' }
        ]
      },
      {
        tipo: 'ordenar', titulo: 'Ordena el cobro',
        consigna: 'Ordena lo que pasa desde que la doctora indica un procedimiento.',
        pasos: [
          'La paciente llena su autorización en la tablet',
          'Paga en caja',
          'Confirmo el pago',
          'Aviso a farmacia para que prepare el producto',
          'La paciente sube al procedimiento'
        ]
      },
      {
        tipo: 'sino', titulo: 'Frases que sí y frases que no',
        consigna: 'Toca «Sí» si la frase va con el estándar y «No» si no va.',
        frases: [
          { texto: '«Usted pague al final, no se preocupe.»', si: false, nota: 'Primero se paga.' },
          { texto: '«Para agilizar su atención, primero registramos el pago y farmacia le tiene todo listo.»', si: true, nota: 'Elegante y claro.' },
          { texto: '«Ya le preparo el producto mientras decide.»', si: false, nota: 'Nada se prepara sin pago confirmado.' },
          { texto: '«¿Desea intentar con otra tarjeta, transferencia o efectivo?»', si: true, nota: 'El plan B, antes de empezar.' },
          { texto: '«Si no tiene ahora, me paga la próxima.»', si: false, nota: 'Sin crédito.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'A una paciente frecuente se le puede dar crédito.', v: false, nota: 'Sin crédito, para nadie.' },
          { texto: 'El producto se prepara solo con el pago confirmado.', v: true, nota: 'Así nada se pierde.' },
          { texto: 'Pedir el pago primero es una falta de confianza con la paciente.', v: false, nota: 'Es el orden de la clínica, y se explica con elegancia.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Cuál es el orden correcto?', opciones: ['Producto, pago, autorización', 'Autorización, pago, producto', 'Pago al final'], correcta: 1 },
      { p: '¿Se puede dar crédito?', opciones: ['Solo a frecuentes', 'No, a nadie', 'Si la doctora no se entera'], correcta: 1 },
      { p: 'La tarjeta no pasa. ¿Cuándo se resuelve?', opciones: ['Antes del procedimiento, con otra tarjeta, transferencia o efectivo', 'Otro día', 'Al salir'], correcta: 0 },
      { p: 'Una paciente baja de consulta con un bótox indicado.', opciones: ['Hace la cola normal', 'Cobro exprés: paga, firma y sube en minutos', 'Que pague al final'], correcta: 1 },
      { p: '¿Cuándo prepara farmacia el producto?', opciones: ['Cuando la paciente llega', 'Con el pago confirmado', 'Cuando la doctora lo pide, sin pago'], correcta: 1 },
      { p: '¿Cómo se pide el pago?', opciones: ['Con elegancia: es para agilizar y por su seguridad', 'Con desconfianza', 'Sin explicar nada'], correcta: 0 },
      { p: 'En plena atención la paciente pide una jeringa más.', opciones: ['Que pague al salir', 'Sube alguien de caja con el POS y cobra con discreción', 'No se le vende'], correcta: 1 },
      { p: 'Un producto preparado y no pagado…', opciones: ['Se guarda para otra', 'Es una pérdida que se evita cobrando primero', 'No importa'], correcta: 1 }
    ],
    compromisos: [
      'Cobraré antes de que se prepare cualquier producto',
      'No daré crédito a nadie',
      'Resolveré el plan B antes del procedimiento',
      'Daré cobro exprés a las pacientes que bajan de consulta'
    ]
  },

  // ───────────────────────────── 2 · Esperas
  {
    id: 'm02', n: 2, titulo: 'Esperas sin olvidos', minutos: 20, ilus: 'reloj',
    resumen: 'Ninguna paciente esperando sin que alguien lo sepa.',
    pasos: [
      {
        tipo: 'escena', ilus: 'reloj',
        titulo: 'Ninguna paciente se queda olvidada',
        texto: 'Ha pasado: pacientes sentadas dos horas en una cabina pensada para quince minutos, sin que nadie les avise nada. La doctora no puede atender y vigilar a la vez; para eso estamos nosotras. Las esperas largas son la queja que más se repite en las reseñas de Google.',
        porque: 'Una espera que se explica y se acompaña se perdona. Una espera olvidada no se perdona nunca.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: ninguna paciente olvidada', archivo: 'media/m02-esperas.mp4', poster: 'media/m02-esperas.jpg',
        fijate: ['Cada paciente que espera tiene una responsable', 'Ronda cada 15 minutos', 'Tiempo real de espera, y se vuelve a avisar', 'Consentimiento en recepción, no en la cabina']
      },
      {
        tipo: 'caso', real: '07/10/2026', titulo: '¿Qué falló?', ilus: 'reloj',
        situacion: 'La doctora mandó a una paciente a la máquina (Morpheus/Exion) y volvió a su consultorio. Dos horas después la paciente seguía sentada esperando y nadie le había dicho nada.',
        opciones: [
          { texto: 'La doctora debió vigilarla.', ok: false, nota: 'La doctora no puede atender a sus pacientes y vigilar a las que esperan a la vez. Ese seguimiento es de recepción.' },
          { texto: 'Nadie en recepción era responsable de esa paciente ni hizo la ronda.', ok: true, nota: 'Exacto: cada paciente que espera tiene una responsable, y la ronda cada 15 minutos la habría encontrado a los pocos minutos.' },
          { texto: 'La paciente debió avisar.', ok: false, nota: 'Una paciente de lujo no tiene que reclamar para que la atiendan.' }
        ]
      },
      {
        tipo: 'caso', real: '07/10/2026', titulo: '¿Qué harías?', ilus: 'tablet',
        situacion: 'Una paciente pasa a la cabina a llenar el consentimiento y se demora 40 minutos llamando a un familiar. Mientras tanto, la cabina está ocupada y la agenda se atrasa.',
        opciones: [
          { texto: 'Esperar a que termine: es su derecho leerlo con calma.', ok: false, nota: 'Puede leerlo con calma, pero no en la cabina: así se atrasa todo el día.' },
          { texto: 'Que llene el consentimiento digital en recepción, con la tablet, mientras espera, y ayudarla si tiene dudas.', ok: true, nota: 'Es lo acordado: el consentimiento se llena en recepción y la cabina queda libre para el procedimiento.' },
          { texto: 'Pedirle que lo firme sin leer para avanzar.', ok: false, nota: 'Nunca. Lo lee con calma, pero en recepción.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'Las reglas de la espera',
        tarjetas: [
          { ilus: 'agenda', titulo: 'Cada paciente tiene dueña', texto: 'Al registrar la llegada anotas la hora y quién la va a seguir. Toda paciente que está en sala o en cabina tiene una responsable en recepción.' },
          { ilus: 'reloj', titulo: 'Ronda cada 15 minutos', texto: 'Cada 15 minutos alguien recorre la sala y las cabinas de espera: quién está, desde qué hora y para quién. Si alguien pasó su tiempo, se avisa al consultorio en ese momento.' },
          { ilus: 'telefono', titulo: 'Avisa con el tiempo real', texto: 'Si hay demora, se le dice a la paciente cuánto falta de verdad, no «ya la llaman». Y se le vuelve a avisar antes de que se cumpla ese tiempo.', frase: '«La doctora termina en unos 20 minutos. Le aviso apenas esté lista.»' },
          { ilus: 'taza', titulo: 'Espera con servicio', texto: 'Si espera, se le ofrece algo como en un hotel: agua, café, una infusión, un snack, galletas o una latita.' },
          { ilus: 'tablet', titulo: 'Consentimiento en recepción', texto: 'El consentimiento digital se llena en recepción, con la tablet, mientras espera. Así no ocupa la cabina 40 minutos y la agenda no se atrasa.' },
          { ilus: 'pantalla', titulo: 'La pantalla de llamado', texto: 'El consultorio llama desde la pantalla, y la hora de llamado, de atención y de cierre queda registrada. Si la llaman y no aparece, recepción la busca.' }
        ]
      },
      {
        tipo: 'caso', titulo: '¿Qué harías?', ilus: 'reloj',
        situacion: 'En tu ronda ves a una paciente en la cabina de espera. Llegó hace 50 minutos y su sesión era de 15.',
        opciones: [
          { texto: 'Le digo que ya falta poco y sigo con lo mío.', ok: false, nota: 'No sabes si falta poco. Así es como una paciente termina esperando dos horas.' },
          { texto: 'Me disculpo, aviso de inmediato al consultorio, le doy el tiempo real y le ofrezco algo mientras tanto.', ok: true, nota: 'Actúas en el momento, informas con la verdad y la cuidas mientras espera.' },
          { texto: 'Espero a que ella reclame.', ok: false, nota: 'Si reclama, ya es tarde: se fue molesta y probablemente con una reseña.' }
        ]
      },
      {
        tipo: 'ordenar', titulo: 'Ordena la espera',
        consigna: 'Ordena qué pasa desde que la paciente llega hasta que entra.',
        pasos: [
          'Registro la hora de llegada y quién la sigue',
          'Le doy el tiempo real de espera',
          'Le ofrezco algo y el consentimiento en la tablet',
          'Hago la ronda cada 15 minutos',
          'Si pasó su tiempo, aviso al consultorio y le actualizo el tiempo'
        ]
      },
      {
        tipo: 'sino', titulo: 'Frases que sí y frases que no',
        consigna: 'Toca «Sí» si la frase va con el estándar y «No» si no va.',
        frases: [
          { texto: '«Ya la llaman.» (sin saber cuánto falta)', si: false, nota: 'Se da el tiempo real. Si no lo sabes, lo averiguas.' },
          { texto: '«Le pido disculpas por la demora. Faltan unos 15 minutos; le aviso apenas esté lista.»', si: true, nota: 'Disculpa, tiempo real y compromiso.' },
          { texto: '«Es que la doctora está muy llena.»', si: false, nota: 'No se justifica: se informa y se cuida.' },
          { texto: '«Mientras espera, ¿le ofrezco un café o una infusión?»', si: true, nota: 'Espera con servicio.' },
          { texto: '«Ahí llene esto en la cabina.»', si: false, nota: 'El consentimiento se llena en recepción, con la tablet y con ayuda.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Si la paciente ya está en la cabina, ya no es responsabilidad de recepción.', v: false, nota: 'Hasta que la atienden, es nuestra.' },
          { texto: 'Las esperas largas son una de las quejas más frecuentes en las reseñas.', v: true, nota: 'Por eso este módulo va antes que casi todos.' },
          { texto: 'Llenar el consentimiento en la cabina atrasa la agenda de todo el día.', v: true, nota: 'Va en recepción, con la tablet.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Cada cuánto se hace la ronda por la sala y las cabinas?', opciones: ['Cada hora', 'Cada 15 minutos', 'Cuando alguien reclama'], correcta: 1 },
      { p: '¿Qué se anota al registrar la llegada?', opciones: ['Solo el nombre', 'La hora de llegada y quién la sigue', 'Nada'], correcta: 1 },
      { p: 'Hay demora. ¿Qué le dices a la paciente?', opciones: ['«Ya la llaman.»', 'El tiempo real, y le vuelves a avisar antes de que se cumpla', 'Nada, para no preocuparla'], correcta: 1 },
      { p: '¿Dónde se llena el consentimiento?', opciones: ['En la cabina', 'En recepción, con la tablet, mientras espera', 'En casa'], correcta: 1 },
      { p: 'Una paciente lleva 50 minutos en una cabina de 15.', opciones: ['Espero a que reclame', 'Aviso al consultorio, me disculpo, le doy el tiempo real y le ofrezco algo', 'Le digo que ya falta poco'], correcta: 1 },
      { p: '¿Qué se le ofrece en la espera?', opciones: ['Nada', 'Agua, café, una infusión o un snack', 'Solo si lo pide'], correcta: 1 },
      { p: '¿Hasta cuándo es responsable recepción de una paciente que espera?', opciones: ['Hasta que entra a la cabina', 'Hasta que la atienden', 'Hasta que paga'], correcta: 1 },
      { p: 'La pantalla llama a una paciente y no aparece.', opciones: ['Se espera', 'Recepción la busca', 'Se pasa a la siguiente sin avisar'], correcta: 1 }
    ],
    compromisos: [
      'Haré la ronda cada 15 minutos',
      'Daré siempre el tiempo real de espera',
      'Ninguna paciente se quedará sin una responsable',
      'El consentimiento se llenará en recepción'
    ]
  },

  // ───────────────────────────── 4
  {
    id: 'm05', n: 5, titulo: 'Apertura, cierre y entrega de turno', minutos: 15, ilus: 'llave',
    resumen: 'Como en un hospital: nada se pierde entre un turno y otro.',
    pasos: [
      {
        tipo: 'escena', ilus: 'llave',
        titulo: 'Lo que no se entrega se pierde',
        texto: 'En un hospital, nadie se va sin entregar el turno: qué pacientes hay, qué quedó pendiente y qué pasó. En el counter vamos a trabajar igual. Al abrir se revisa, al cerrar se cuenta y se entrega por escrito.',
        porque: 'Tener más personas en el counter solo sirve si nada se pierde entre una y otra.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: lo que no se entrega se pierde', archivo: 'media/m05-turno.mp4', poster: 'media/m05-turno.jpg',
        fijate: ['Apertura antes de las 8:00: teléfonos, mensaje automático, agenda', 'Cada pendiente con su hora', 'Cierre: llamadas y WhatsApp contados', 'Entrega de palabra y por escrito']
      },
      {
        tipo: 'caso', real: '07/10/2026', titulo: '¿Qué faltó?', ilus: 'agenda',
        situacion: 'Entra una queja, se resuelve, y a la semana nadie sabe qué pasó, ni cuántas llamadas se perdieron ese día, ni quién quedó en devolverlas.',
        opciones: [
          { texto: 'Nada: si se resolvió, no hace falta anotarlo.', ok: false, nota: 'Si no se anota, no se aprende. La dirección pidió una bitácora de ocurrencias con estadística.' },
          { texto: 'Un cierre de turno por escrito: llamadas que entraron, contestadas y pendientes, y las ocurrencias del día.', ok: true, nota: 'Eso es: como en un hospital, nada se pierde entre un turno y otro. Por eso el cierre se registra en esta plataforma.' },
          { texto: 'Que el Admin lo pregunte cada día.', ok: false, nota: 'La entrega es responsabilidad de quien cierra el turno.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'Tres momentos',
        tarjetas: [
          { ilus: 'llave', titulo: 'Apertura (antes de las 8:00)', texto: 'Los tres teléfonos con el volumen alto y sin desvío, y el mensaje de «fuera de horario» desactivado. Revisas la agenda del día, las pacientes VIP y las llamadas y WhatsApp pendientes del día anterior. El counter, ordenado.' },
          { ilus: 'agenda', titulo: 'Durante el día', texto: 'Cada llamada que no puedes resolver va a la lista de pendientes con la hora prometida. Cada ocurrencia (una queja, un error, una demora larga) se anota en el momento.' },
          { ilus: 'telefono', titulo: 'Cierre', texto: 'Cuentas cuántas llamadas entraron, cuántas se contestaron, cuántas se devolvieron y cuántas quedaron pendientes, y cuántos WhatsApp quedaron sin responder. Todo se anota en la plataforma.' },
          { ilus: 'manos', titulo: 'Entrega de turno', texto: 'Si alguien te reemplaza, le entregas en voz alta y por escrito: pacientes en sala, pendientes con su hora y lo que pasó. Si no está escrito, no se entregó.', frase: '«Te entrego: dos pacientes en sala, una llamada por devolver a las 4 y una queja anotada.»' }
        ]
      },
      {
        tipo: 'ordenar', titulo: 'Ordena la apertura',
        consigna: 'Ordena lo que se hace al abrir el counter.',
        pasos: [
          'Reviso que los tres teléfonos tengan volumen y no estén desviados',
          'Desactivo el mensaje de fuera de horario',
          'Reviso la agenda del día y las pacientes VIP',
          'Reviso las llamadas y WhatsApp pendientes de ayer',
          'Dejo el counter ordenado y abro'
        ]
      },
      {
        tipo: 'caso', titulo: '¿Qué harías?', ilus: 'telefono',
        situacion: 'Son las 8:10. Un doctor llama a los fijos y al celular de la clínica y nadie contesta; además sale el mensaje de «fuera de horario».',
        opciones: [
          { texto: 'No es mi culpa: todavía no había terminado de instalarme.', ok: false, nota: 'A las 8:00 la clínica está abierta. La apertura se hace antes, en el bloque de 7:30.' },
          { texto: 'Se evita en la apertura: volumen, desvíos y mensaje automático se revisan antes de las 8:00, todos los días.', ok: true, nota: 'Así es. Ese chequeo de dos minutos evita la queja más repetida.' },
          { texto: 'Que llame más tarde.', ok: false, nota: 'Esa llamada pudo ser una paciente con una urgencia.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Si no está escrito, no se entregó.', v: true, nota: 'La entrega va de palabra y por escrito.' },
          { texto: 'El conteo de llamadas solo lo hace el Admin.', v: false, nota: 'Cada cierre de turno lo anota en la plataforma.' },
          { texto: 'El mensaje de «fuera de horario» se revisa en la apertura.', v: true, nota: 'Nunca debe salir con la clínica abierta.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Qué se revisa primero al abrir?', opciones: ['Las redes sociales', 'Que los tres teléfonos tengan volumen y no estén desviados', 'La caja'], correcta: 1 },
      { p: 'El mensaje automático de «fuera de horario»…', opciones: ['Puede quedar activado hasta las 9', 'Se desactiva antes de abrir', 'No importa'], correcta: 1 },
      { p: 'Una llamada que no puedes resolver va a…', opciones: ['La memoria', 'La lista de pendientes, con la hora prometida', 'El día siguiente'], correcta: 1 },
      { p: 'Al cierre se anotan…', opciones: ['Llamadas entrantes, contestadas, devueltas y pendientes, y WhatsApp sin responder', 'Solo las ventas', 'Nada'], correcta: 0 },
      { p: 'La entrega de turno es…', opciones: ['Solo de palabra', 'De palabra y por escrito', 'Opcional'], correcta: 1 },
      { p: 'Una queja de la mañana…', opciones: ['Se anota en el momento', 'Se olvida si se resolvió', 'Se comenta en el grupo'], correcta: 0 },
      { p: '¿A qué hora debe estar lista la apertura?', opciones: ['Antes de las 8:00', 'A las 8:30', 'Cuando llegue la primera paciente'], correcta: 0 },
      { p: '¿Para qué sirve la entrega de turno?', opciones: ['Para culpar a alguien', 'Para que nada ni nadie se pierda entre un turno y otro', 'Para llenar papeles'], correcta: 1 }
    ],
    compromisos: [
      'Haré la apertura completa antes de las 8:00',
      'Anotaré cada pendiente con su hora',
      'Llenaré el cierre de turno en la plataforma',
      'Entregaré el turno de palabra y por escrito'
    ]
  },

  // ───────────────────────────── 1
  {
    id: 'm06', n: 6, titulo: 'Bienvenida de lujo', minutos: 15, ilus: 'timbre',
    resumen: 'Ponerse de pie, saludar por el nombre, ofrecer algo y acompañar.',
    pasos: [
      {
        tipo: 'escena', ilus: 'timbre',
        titulo: 'La recepción es la primera impresión, y también la última',
        texto: 'Al paciente no lo atiende «la empresa»: lo atiende quien contesta el teléfono, quien abre la puerta y quien lo recibe. En los primeros segundos decide cómo se siente en la clínica. En este módulo vas a practicar los gestos que hacen que una llegada se sienta como la de un hotel de lujo, desde la puerta hasta la despedida.',
        porque: 'Lo que vendemos es servicio, y el servicio es experiencia: desde quien abre la puerta hasta quien despide.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: la bienvenida de lujo', archivo: 'media/m06-bienvenida.mp4', poster: 'media/m06-bienvenida.jpg',
        fijate: ['El valet sale a recibir y abre la puerta', 'De pie, a los ojos, por su nombre', 'Agua, café o una infusión sin que lo pida', 'Acompaña y despide con su próxima cita']
      },
      {
        tipo: 'caso', real: '02/09 y 23/09/2026', titulo: '¿Qué harías?', ilus: 'puerta',
        situacion: 'Desde el counter ves llegar a una paciente en su auto. El valet y el vigilante están sentados mirando el celular y nadie sale a recibirla.',
        opciones: [
          { texto: 'No es mi área: yo la saludo cuando entre.', ok: false, nota: 'Si al llegar nadie la saluda, la experiencia ya empezó mal. La recepción empieza en la vereda.' },
          { texto: 'Aviso de inmediato a la puerta para que salgan a recibirla y abran, y la espero de pie para saludarla por su nombre.', ok: true, nota: 'Así es: «Buenos días, señora», la puerta abierta y el counter de pie. Todo el equipo, desde el valet, da la misma calidez.' },
          { texto: 'Lo comento después en el grupo.', ok: false, nota: 'La paciente ya llegó. Se actúa en el momento y luego se conversa en privado.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'De la puerta a la despedida',
        tarjetas: [
          { ilus: 'puerta', titulo: 'Empieza en la puerta', texto: 'La experiencia empieza en la vereda: el valet y el vigilante salen a recibir, saludan y abren la puerta. Si al llegar nadie la saluda, la experiencia ya empezó mal. Recepción coordina que la puerta nunca esté sola.', frase: '«Buenos días, señora. Bienvenida.»' },
          { ilus: 'silla', titulo: 'Ponte de pie', texto: 'Cuando llega una paciente, dejas lo que estás haciendo, guardas el celular y te pones de pie. Si estás en una llamada, la saludas con la mirada y un gesto de «ya la atiendo».' },
          { ilus: 'gafete', titulo: 'Salúdala por su nombre', texto: 'Señora o señor, y su apellido. Si no lo sabes, lo preguntas una vez y lo usas siempre. Que la llamen por su nombre hace que la paciente se sienta reconocida.', frase: '«Buenos días, señora Rojas, bienvenida.»' },
          { ilus: 'taza', titulo: 'Ofrécele algo', texto: 'Agua, café o una infusión al llegar. Si va a esperar, también un snack o una latita. Como en un hotel: no espera a pedirlo.', frase: '«¿Le ofrezco un café, agua o una infusión mientras la preparan?»' },
          { ilus: 'puerta', titulo: 'Acompaña, no señales', texto: 'Al consultorio no se le indica el camino con el dedo. Se le acompaña, o se le presenta a quien la va a llevar.' },
          { ilus: 'agenda', titulo: 'Despídela con calidez', texto: 'De pie, por su nombre y con su próxima cita confirmada. Que se vaya sabiendo que la esperamos.', frase: '«Hasta el jueves a las once, señora Rojas. La esperamos.»' }
        ]
      },
      {
        tipo: 'video', titulo: 'Así recibe la hotelería profesional', youtube: '5BM2gD_YdeQ',
        fuente: 'Video: «Departamento de Recepción y Housekeeping en un hotel», CENFOTUR (YouTube).',
        fijate: ['Cómo se saluda y se da la bienvenida al huésped', 'La postura y la presentación de quien recibe', 'Qué se hace para que el huésped no espere sin información']
      },
      {
        tipo: 'ordenar', titulo: 'Ordena la llegada',
        consigna: 'Arrastra los pasos (o usa las flechas) hasta dejarlos en el orden correcto.',
        pasos: [
          'Me pongo de pie y la miro a los ojos',
          'La saludo por su nombre y le doy la bienvenida',
          'Le ofrezco agua, café o una infusión',
          'Confirmo su cita y sus datos',
          'La acompaño o la presento a quien la atenderá'
        ]
      },
      {
        tipo: 'caso', titulo: '¿Qué harías?', ilus: 'whatsapp',
        situacion: 'Estás respondiendo un WhatsApp cuando entra una paciente.',
        opciones: [
          { texto: 'Termino el mensaje y después la saludo.', ok: false, nota: 'La paciente no sabe que estás ocupada: siente que la ignoras. El mensaje puede esperar 30 segundos.' },
          { texto: 'Levanto la vista, sonrío, me pongo de pie y la saludo. El mensaje espera.', ok: true, nota: 'Exacto. La persona que está delante va primero, siempre.' },
          { texto: 'Le digo «hola» sin levantar la vista, para que sepa que la vi.', ok: false, nota: 'Un saludo sin mirada se siente como un trámite. Primero los ojos, después las palabras.' }
        ]
      },
      {
        tipo: 'caso', titulo: '¿Qué harías?', ilus: 'reloj',
        situacion: 'La doctora va con 20 minutos de retraso y la paciente acaba de llegar.',
        opciones: [
          { texto: '«Siéntese, ya la llaman.»', ok: false, nota: 'No le da información ni la cuida. Así la espera se le hace el doble de larga.' },
          { texto: '«Señora, la doctora termina en unos 20 minutos. ¿Le ofrezco un café o una infusión? Le aviso apenas esté lista.»', ok: true, nota: 'Le das el tiempo real, le ofreces algo y te comprometes a avisarle. Así se maneja una espera de lujo.' },
          { texto: 'No le digo nada para no preocuparla.', ok: false, nota: 'Una demora que nadie explica se siente como abandono. Siempre se avisa.' }
        ]
      },
      {
        tipo: 'sino', titulo: 'Frases que sí y frases que no',
        consigna: 'Toca «Sí» si la frase va con el estándar de la clínica y «No» si hay que cambiarla.',
        frases: [
          { texto: '«Buenos días, señora, bienvenida.»', si: true, nota: 'Cálida y formal.' },
          { texto: '«¿Qué se le ofrece?»', si: false, nota: 'Mejor: «¿En qué puedo ayudarla?»' },
          { texto: '«Espérate un ratito.»', si: false, nota: 'Nunca se tutea. Mejor: «Permítame un momento, por favor.»' },
          { texto: '«Con mucho gusto.»', si: true, nota: 'Mejor que «de nada» o «ya».' },
          { texto: '«Siéntate ahí.»', si: false, nota: 'Mejor: «Por favor, tome asiento. Enseguida la atiendo.»' },
          { texto: '«¿Le ofrezco un café o agua?»', si: true, nota: 'Ofrecer antes de que lo pidan es el detalle que distingue.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Si estoy muy ocupada, puedo saludar sin levantar la vista.', v: false, nota: 'Primero la mirada. Lo demás espera unos segundos.' },
          { texto: 'Usar el nombre de la paciente la hace sentir reconocida.', v: true, nota: 'Es el gesto más simple y el que más se recuerda.' },
          { texto: 'Para indicar el consultorio basta con señalar la escalera.', v: false, nota: 'Se acompaña o se presenta a quien la llevará.' }
        ]
      }
    ],
    evaluacion: [
      { p: 'Llega una paciente y estás sentada frente a la computadora. ¿Qué es lo primero?', opciones: ['Terminar lo que estaba digitando', 'Ponerme de pie y mirarla', 'Pedirle su DNI'], correcta: 1 },
      { p: '¿Cuál es el saludo correcto?', opciones: ['«Hola, ¿qué deseas?»', '«Buenos días, señora Rojas, bienvenida.»', '«Siguiente.»'], correcta: 1 },
      { p: 'Si no sabes el nombre de la paciente…', opciones: ['La llamas «amiga»', 'Lo preguntas una vez y lo usas siempre', 'Evitas usar su nombre'], correcta: 1 },
      { p: '¿Cuándo se ofrece agua, café o una infusión?', opciones: ['Solo si la paciente lo pide', 'Al llegar, sin esperar a que lo pida', 'Solo a las pacientes VIP'], correcta: 1 },
      { p: 'La paciente tiene que subir al consultorio del segundo piso. ¿Qué haces?', opciones: ['Le señalo la escalera', 'La acompaño o la presento a quien la llevará', 'Le digo el número de consultorio'], correcta: 1 },
      { p: 'Hay una demora de 20 minutos. Lo correcto es…', opciones: ['No decir nada', 'Avisar el tiempo real, ofrecer algo y avisar cuando esté lista', 'Decirle que vuelva otro día'], correcta: 1 },
      { p: '¿Cuál de estas frases NO va con el estándar?', opciones: ['«Con mucho gusto.»', '«Permítame un momento, por favor.»', '«Espérate un ratito.»'], correcta: 2 },
      { p: 'La despedida ideal incluye…', opciones: ['Su nombre y su próxima cita confirmada', 'Un «chau» rápido', 'Pedirle que deje una reseña'], correcta: 0 }
    ],
    compromisos: [
      'Me pondré de pie cada vez que llegue una paciente',
      'Saludaré a cada paciente por su nombre',
      'Ofreceré agua, café o una infusión sin que me lo pidan',
      'Acompañaré en lugar de señalar'
    ]
  },

  // ───────────────────────────── 2
  {
    id: 'm01', n: 1, titulo: 'Teléfono y WhatsApp', minutos: 20, ilus: 'telefono',
    resumen: 'Contestar antes del tercer timbre y no dejar a nadie sin respuesta.',
    pasos: [
      {
        tipo: 'escena', ilus: 'telefono',
        titulo: 'Un teléfono que no se contesta es una paciente que se va',
        texto: 'Cuando nadie contesta, la paciente no piensa que estamos ocupadas: piensa que no nos importa. Esa llamada puede ser una cita, una venta o una urgencia. En este módulo vas a contestar una llamada de verdad, contra el reloj.',
        porque: 'Una complicación se contiene, se resuelve y nunca se deja de contestar el teléfono.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: antes del tercer timbre', archivo: 'media/m01-telefono.mp4', poster: 'media/m01-telefono.jpg',
        fijate: ['Los tres teléfonos siempre con volumen alto, nunca desviados', 'Contestar antes del tercer timbre, con el saludo de la casa', 'Devolver la llamada a la hora prometida', 'WhatsApp: si lo abres, lo respondes']
      },
      {
        tipo: 'caso', real: '23/09/2026', titulo: '¿Qué pasó aquí?', ilus: 'telefono',
        situacion: 'A las 8:10 un doctor llamó a los fijos y al celular de la clínica y nadie contestó. Encima, salió el mensaje de «fuera de horario» con la clínica abierta. ¿Cuál fue la causa de fondo?',
        opciones: [
          { texto: 'Mala suerte: justo estaban todas ocupadas.', ok: false, nota: 'No fue un día malo: la misma queja salió en tres reuniones (16/09, 23/09 y 07/10).' },
          { texto: 'Una costumbre: el volumen bajo, el desvío al celular y nadie revisando el mensaje automático al abrir.', ok: true, nota: 'Exacto. Es una costumbre de años que aprenden las nuevas, y se corta con un estándar: volumen alto, sin desvíos y la apertura revisada antes de las 8:00.' },
          { texto: 'Que el doctor llamó demasiado temprano.', ok: false, nota: 'A las 8:10 la clínica está abierta. Además, los pacientes mayores no usan WhatsApp: llaman al fijo que sale en la web.' }
        ]
      },
      {
        tipo: 'caso', real: '16/09/2026', titulo: '¿Qué harías?', ilus: 'telefono',
        situacion: 'Es tu primera semana. Una compañera te dice: «Bájale el volumen al teléfono, así no molesta a las pacientes de la sala».',
        opciones: [
          { texto: 'Le hago caso: ella conoce la clínica.', ok: false, nota: 'Así se pasa la costumbre de una a otra. La dirección pidió erradicarla.' },
          { texto: 'Le digo con amabilidad que el estándar es volumen alto y contestar antes del tercer timbre, y lo dejo así.', ok: true, nota: 'Bien. Lo bueno también se contagia: si una se alinea, las demás la siguen.' },
          { texto: 'Lo desvío a mi celular para no perder llamadas.', ok: false, nota: 'Los teléfonos de la clínica no se desvían a celulares personales.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'El estándar telefónico',
        tarjetas: [
          { ilus: 'telefono', titulo: 'Antes del tercer timbre', texto: 'Los tres teléfonos del counter van siempre con el volumen alto. Nunca se bajan ni se desvían a un celular personal. Si sales, dejas a una compañera a cargo.' },
          { ilus: 'gafete', titulo: 'El saludo de la casa', texto: 'Sonríe antes de contestar: la sonrisa se escucha en la voz.', frase: '«Buenos días, clínica, le saluda (su nombre). ¿En qué puedo ayudarla?»' },
          { ilus: 'silla', titulo: 'Si estás atendiendo a alguien', texto: 'Le pides permiso a quien está delante y contestas. Si la llamada va para largo, tomas el número y devuelves la llamada en la hora que prometiste.', frase: '«¿Me permite su número? La llamo en cinco minutos.»' },
          { ilus: 'agenda', titulo: 'Nunca sin respuesta', texto: 'Si no sabes algo, no se dice «no sé». Se averigua y se vuelve a llamar a la hora que dijiste. Anota toda llamada pendiente.', frase: '«Permítame verificarlo. La llamo antes de las once.»' },
          { ilus: 'whatsapp', titulo: 'WhatsApp con el mismo estándar', texto: 'En horario se responde en menos de cinco minutos: saludo, su nombre y mensajes cortos y completos. Nada de «ok», stickers o audios largos.' },
          { ilus: 'timbre', titulo: 'El cierre', texto: 'Repite lo acordado (día, hora, doctora) y pregunta si hay algo más. Cuelga después de la paciente.', frase: '«¿Hay algo más en lo que pueda ayudarla?»' }
        ]
      },
      {
        tipo: 'video', titulo: 'Mira cómo se atiende una llamada', youtube: 'xkEeQfQsvq8',
        fuente: 'Video: «Etiqueta telefónica en contact center», Vilma Training (YouTube).',
        fijate: ['Cómo saluda al contestar y cómo se presenta', 'El tono de voz: amable, sin apuro', 'Qué hace cuando tiene que poner en espera o no sabe algo']
      },
      {
        tipo: 'llamada', titulo: 'Simulador de llamada',
        consigna: 'Cuando suene, contesta antes de que se acaben los tres timbres. Después elige qué responder.',
        timbreSeg: 2.4,
        guion: [
          {
            paciente: '¿Aló? Buenas, quería saber si la doctora tiene cita para mañana.',
            opciones: [
              { texto: '«Buenos días, clínica, le saluda (su nombre). Con gusto la ayudo. ¿Me dice su nombre, por favor?»', ok: true, nota: 'Saludo completo y su nombre primero, para atenderla como se merece.' },
              { texto: '«Sí, dígame.»', ok: false, nota: 'Falta el saludo de la casa y tu nombre. Suena apurado.' },
              { texto: '«Aló, ¿quién habla?»', ok: false, nota: 'Así se contesta en una casa, no en una clínica de lujo.' }
            ]
          },
          {
            paciente: 'Soy la señora Paredes. Es para un control de bótox.',
            opciones: [
              { texto: '«Señora Paredes, mañana tenemos a las 11:00 o a las 16:30. ¿Cuál le acomoda mejor?»', ok: true, nota: 'La llamas por su nombre y le das dos opciones concretas. Así es fácil decir que sí.' },
              { texto: '«Uy, mañana está bien lleno.»', ok: false, nota: 'Nunca se empieza por lo que no hay. Ofrece lo que sí hay.' },
              { texto: '«Déjeme ver… (silencio de un minuto)»', ok: false, nota: 'Si vas a tardar, pide permiso: «¿Me permite un momento? La pongo en espera.»' }
            ]
          },
          {
            paciente: 'A las 11 está perfecto. ¿Tengo que llevar algo?',
            opciones: [
              { texto: '«Solo su DNI. Queda confirmada mañana martes a las 11:00 con la doctora. Le llegará un recordatorio por WhatsApp. ¿Hay algo más en lo que pueda ayudarla?»', ok: true, nota: 'Repites lo acordado, avisas el recordatorio y cierras con calidez.' },
              { texto: '«No, nada. Chau.»', ok: false, nota: 'Falta confirmar día, hora y doctora. Y el cierre suena brusco.' },
              { texto: '«No sé, pregunte mañana cuando venga.»', ok: false, nota: '«No sé» no existe: se averigua y se responde.' }
            ]
          }
        ]
      },
      {
        tipo: 'caso', titulo: '¿Qué harías?', ilus: 'telefono',
        situacion: 'Estás cobrando a una paciente en el counter y suena el teléfono.',
        opciones: [
          { texto: 'Lo dejo sonar: la paciente que está delante es primero.', ok: false, nota: 'La que llama también es paciente. Un teléfono que no se contesta es justo el problema que queremos acabar.' },
          { texto: '«Me permite un segundo, por favor.» Contesto, tomo el número y prometo devolver la llamada en cinco minutos.', ok: true, nota: 'Atiendes a las dos sin descuidar a ninguna, y cumples la hora que prometiste.' },
          { texto: 'Bajo el volumen hasta terminar.', ok: false, nota: 'El volumen nunca se baja. Esa costumbre es la que hay que dejar atrás.' }
        ]
      },
      {
        tipo: 'caso', titulo: 'WhatsApp', ilus: 'whatsapp',
        situacion: 'Una paciente escribe: «¿Cuánto cuesta el bótox?»',
        opciones: [
          { texto: '«S/ 1200»', ok: false, nota: 'Seco, sin saludo y sin contexto: la paciente compara solo por precio y se va.' },
          { texto: '«Buenos días, gracias por escribirnos. Con gusto la oriento: el precio depende de las zonas que la doctora evalúe. ¿Le separo una evaluación? Tenemos mañana a las 11:00 o a las 16:00.»', ok: true, nota: 'Saludo, orientación y una invitación con horarios concretos.' },
          { texto: 'Le mando un audio de dos minutos explicando todo.', ok: false, nota: 'Los audios largos no se escuchan. Mejor mensajes cortos y claros.' }
        ]
      },
      {
        tipo: 'caso', real: '23/09/2026', titulo: '¿Qué harías?', ilus: 'whatsapp',
        situacion: 'Abres el WhatsApp de una interesada que pregunta por un tratamiento y justo llega una paciente al counter.',
        opciones: [
          { texto: 'Lo dejo leído y le respondo cuando se desocupe el counter.', ok: false, nota: 'Abrir y no responder es dejar en visto, y la dirección lo criticó. Cuando nadie responde a tiempo, la interesada se va a otra clínica.' },
          { texto: 'Le respondo en ese momento «Con gusto, en unos minutos le confirmo» y luego cumplo.', ok: true, nota: 'Bien: un mensaje abierto se responde en ese momento, aunque sea para pedir unos minutos.' },
          { texto: 'Lo marco como no leído para que lo vea otra.', ok: false, nota: 'Lo que abres, lo respondes tú.' }
        ]
      },
      {
        tipo: 'ordenar', titulo: 'Ordena la llamada',
        consigna: 'Deja los pasos de una llamada en el orden correcto.',
        pasos: [
          'Contesto antes del tercer timbre, sonriendo',
          'Digo el saludo de la casa y mi nombre',
          'Pregunto su nombre y lo uso',
          'Resuelvo o tomo el dato para devolver la llamada',
          'Repito lo acordado y pregunto si hay algo más'
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Si hay mucha gente en la sala, puedo bajar el volumen del teléfono.', v: false, nota: 'Nunca. Es justo lo que hace que se pierdan llamadas.' },
          { texto: 'Desviar el teléfono a mi celular está bien si salgo un rato.', v: false, nota: 'Se deja a una compañera a cargo del counter.' },
          { texto: 'La sonrisa se escucha en la voz.', v: true, nota: 'Por eso se sonríe antes de levantar el auricular.' },
          { texto: 'Si una paciente tiene una complicación, se le contesta siempre, aunque sea fuera de horario.', v: true, nota: 'Nunca se la abandona: se la contiene y se avisa al médico.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Antes de qué timbre se contesta?', opciones: ['Del quinto', 'Del tercero', 'Cuando pueda'], correcta: 1 },
      { p: '¿Qué se hace con el volumen de los teléfonos del counter?', opciones: ['Se baja si hay mucha gente', 'Siempre alto, nunca desviado', 'Se desvía al celular en la tarde'], correcta: 1 },
      { p: 'El saludo telefónico correcto es…', opciones: ['«Aló, ¿quién habla?»', '«Buenos días, clínica, le saluda [tu nombre]. ¿En qué puedo ayudarla?»', '«Sí, dígame.»'], correcta: 1 },
      { p: 'Estás atendiendo en el counter y suena el teléfono. ¿Qué haces?', opciones: ['Lo dejo sonar', 'Pido permiso, contesto y, si es largo, devuelvo la llamada a la hora prometida', 'Lo contesto y dejo esperando a la paciente diez minutos'], correcta: 1 },
      { p: 'Una paciente pregunta algo que no sabes.', opciones: ['«No sé.»', '«Permítame verificarlo, la llamo antes de las once.»', '«Llame más tarde.»'], correcta: 1 },
      { p: '¿En cuánto tiempo se responde un WhatsApp en horario?', opciones: ['En menos de 5 minutos', 'Cuando haya tiempo', 'Al final del día'], correcta: 0 },
      { p: '¿Qué NO se usa en WhatsApp con pacientes?', opciones: ['Su nombre', 'Mensajes cortos y completos', 'Stickers, «ok» o audios largos'], correcta: 2 },
      { p: 'Al cerrar una llamada de cita…', opciones: ['Repito día, hora y doctora, y pregunto si hay algo más', 'Cuelgo apenas dice que sí', 'Le digo que confirme por WhatsApp'], correcta: 0 },
      { p: 'Una paciente con una complicación llama fuera de horario.', opciones: ['No se contesta fuera de horario', 'Se le contesta, se la contiene y se avisa al médico', 'Se le dice que vaya a emergencias sin más'], correcta: 1 }
    ],
    compromisos: [
      'Contestaré antes del tercer timbre',
      'Nunca bajaré el volumen ni desviaré el teléfono',
      'Devolveré cada llamada a la hora que prometí',
      'Responderé los WhatsApp en menos de cinco minutos'
    ]
  },

  // ───────────────────────────── 3
  {
    id: 'm07', n: 7, titulo: 'Presencia y conducta a la vista', minutos: 15, ilus: 'espejo',
    resumen: 'De punta en blanco: cabello, maquillaje, uñas, uniforme y accesorios.',
    pasos: [
      {
        tipo: 'escena', ilus: 'espejo',
        titulo: 'La presentación es todo',
        texto: 'El counter es lo primero que ve la paciente, y tú eres el counter. Antes de abrir, cada mañana, pasas por este checklist frente al espejo.',
        porque: 'Todo lo bueno te jala, y lo malo también. Si una del equipo se alinea, las demás la siguen.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: la presentación es todo', archivo: 'media/m07-presencia.mp4', poster: 'media/m07-presencia.jpg',
        fijate: ['Moño o trenza, maquillaje natural, uñas claras', 'Uniforme impecable y gafete visible', 'Celular guardado', 'Donde ve la paciente: no se come ni se recuesta nadie']
      },
      {
        tipo: 'caso', real: '20/08 y 16/09/2026', titulo: '¿Qué ve la paciente?', ilus: 'silla',
        situacion: 'Una paciente está pagando en el counter. Al lado, alguien del personal come algo detrás del mostrador, y al subir ve por una puerta abierta a otra persona recostada en una camilla con el celular.',
        opciones: [
          { texto: 'Nada grave: es un momento de descanso.', ok: false, nota: '«Los pacientes ven igual.» En las zonas que ve la paciente no se come, nadie se recuesta y el celular no está a la vista.' },
          { texto: 'Que la clínica no la está atendiendo a ella. En el counter no se come mientras una paciente paga, y nadie se recuesta ni usa el celular donde la paciente lo pueda ver.', ok: true, nota: 'Así es: quien paga tiene toda la atención, y el estándar es para todo el personal, no solo el counter.' },
          { texto: 'Que el personal está cómodo.', ok: false, nota: 'Lo que ve la paciente es descuido. Los descansos se toman fuera de su vista.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'De punta en blanco',
        tarjetas: [
          { ilus: 'peine', titulo: 'Cabello recogido', texto: 'Moño o trenza, pulidos y sin mechones sueltos. Nada de pelo suelto en el counter. Los ganchos y ligas, discretos.' },
          { ilus: 'espejo', titulo: 'Maquillaje completo y natural', texto: 'Piel uniforme, cejas definidas y labios. Natural, pero completo. Se retoca a mediodía.' },
          { ilus: 'mano', titulo: 'Uñas impecables', texto: 'Limpias, de largo corto o medio, en tono nude o claro y sin despostillar. Nada de colores intensos ni diseños.' },
          { ilus: 'gafete', titulo: 'Uniforme completo', texto: 'Limpio, planchado y de tu talla, con el gafete visible y los zapatos limpios. Si una prenda está gastada, se pide cambio.' },
          { ilus: 'arete', titulo: 'Accesorios mínimos', texto: 'Aretes pequeños, un solo anillo y un reloj discreto. Nada que cuelgue ni que suene.' },
          { ilus: 'taza', titulo: 'Aliento y perfume', texto: 'Aliento fresco y un perfume suave, o ninguno. En el counter no se come ni se toma nada a la vista.' },
          { ilus: 'celular', titulo: 'El celular, fuera de la vista', texto: 'En silencio y guardado. La paciente nunca debe verte con el celular en la mano.' }
        ]
      },
      {
        tipo: 'video', titulo: 'La imagen personal también comunica', youtube: 'tS7YZO0jP3w',
        fuente: 'Video: «El cuidado de la imagen personal se alinea con la corporativa», CENTRUM PUCP (YouTube).',
        fijate: ['Por qué la imagen de cada una es la imagen de la clínica', 'Qué transmite una presencia cuidada antes de hablar', 'Qué detalle tuyo podrías mejorar desde mañana']
      },
      {
        tipo: 'errores', titulo: 'Encuentra los 5 detalles',
        consigna: 'Esta recepcionista todavía no está lista para abrir. Toca los 5 detalles que hay que corregir.',
        escena: 'figura',
        puntos: [
          { x: 118, y: 100, r: 34, etiqueta: 'Mechones sueltos: el cabello va recogido en moño o trenza.' },
          { x: 214, y: 146, r: 26, etiqueta: 'Aretes grandes y colgantes: deben ser pequeños.' },
          { x: 150, y: 247, r: 28, etiqueta: 'Falta el gafete, y tiene que estar visible.' },
          { x: 255, y: 292, r: 30, etiqueta: 'Celular en la mano: va guardado y en silencio.' },
          { x: 87, y: 305, r: 26, etiqueta: 'Uñas largas de color intenso: van en largo corto o medio y en tono nude.' }
        ]
      },
      {
        tipo: 'sino', titulo: '¿Va o no va?',
        consigna: 'Toca «Sí» si va con el estándar del counter y «No» si no va.',
        frases: [
          { texto: 'Pelo suelto, bien peinado', si: false, nota: 'Aunque esté peinado, en el counter va recogido.' },
          { texto: 'Moño bajo y pulido', si: true, nota: 'El clásico de hotelería.' },
          { texto: 'Esmalte rojo intenso con diseño', si: false, nota: 'Tonos nude o claros, sin diseños.' },
          { texto: 'Gafete visible', si: true, nota: 'Siempre.' },
          { texto: 'Perfume intenso', si: false, nota: 'Suave o ninguno: hay pacientes sensibles a los olores.' },
          { texto: 'Aretes pequeños', si: true, nota: 'Discretos y elegantes.' }
        ]
      },
      {
        tipo: 'caso', titulo: '¿Qué harías?', ilus: 'espejo',
        situacion: 'Una compañera llega con el pelo suelto y sin maquillaje, y en diez minutos abren.',
        opciones: [
          { texto: 'No digo nada, no es mi problema.', ok: false, nota: 'Somos un equipo: la imagen del counter es de todas.' },
          { texto: 'Se lo digo con cariño y en privado: «Ve a arreglarte, yo te cubro cinco minutos».', ok: true, nota: 'Así se corrige: en privado, con cariño y dándole una mano.' },
          { texto: 'Se lo comento delante de la primera paciente.', ok: false, nota: 'Nunca se corrige en público ni delante de una paciente.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Cómo va el cabello en el counter?', opciones: ['Suelto si está peinado', 'Recogido en moño o trenza, sin mechones', 'Como cada una prefiera'], correcta: 1 },
      { p: 'El maquillaje debe ser…', opciones: ['Natural y completo', 'Opcional', 'Intenso para la foto'], correcta: 0 },
      { p: '¿Qué uñas van con el estándar?', opciones: ['Largas con diseño', 'Limpias, de largo corto o medio, en tono nude o claro', 'Sin cuidado especial'], correcta: 1 },
      { p: '¿Qué accesorios van?', opciones: ['Aretes grandes y pulseras', 'Aretes pequeños, un anillo y un reloj discreto', 'Ninguna regla'], correcta: 1 },
      { p: '¿Dónde va el celular durante el turno?', opciones: ['Sobre el mostrador', 'En la mano por si escriben', 'Guardado y en silencio'], correcta: 2 },
      { p: 'El gafete…', opciones: ['Siempre visible', 'Solo si lo piden', 'En el bolsillo'], correcta: 0 },
      { p: 'Una compañera no está lista para abrir. Lo correcto es…', opciones: ['Ignorarlo', 'Decírselo en privado, con cariño, y cubrirla unos minutos', 'Comentarlo en el grupo'], correcta: 1 },
      { p: '¿Por qué importa tanto la presentación?', opciones: ['Porque la paciente juzga la clínica por lo que ve primero', 'Por las fotos de redes', 'No importa tanto'], correcta: 0 }
    ],
    compromisos: [
      'Llegaré de punta en blanco todos los días',
      'Revisaré mi checklist frente al espejo antes de abrir',
      'Mantendré el celular guardado durante el turno',
      'Ayudaré con cariño a una compañera que no esté lista'
    ]
  },

  // ───────────────────────────── 4
  {
    id: 'm08', n: 8, titulo: 'Lenguaje corporal', minutos: 15, ilus: 'manos',
    resumen: 'Postura, mirada, sonrisa y entregar todo con las dos manos.',
    pasos: [
      {
        tipo: 'escena', ilus: 'manos',
        titulo: 'El cuerpo habla antes que tú',
        texto: 'En un buen hotel de Cusco todo se entrega con las dos manos: la cuenta, la llave, el vuelto. En algunas culturas, entregar con una sola mano es una falta de respeto. Por eso los hoteles lo tienen estandarizado, y nosotras también lo vamos a tener.',
        porque: 'La recepcionista ideal mira a los ojos, no hacia abajo, y transmite calidez, confianza y amabilidad sin decir una palabra.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: tu cuerpo habla', archivo: 'media/m08-lenguaje.mp4', poster: 'media/m08-lenguaje.jpg',
        fijate: ['Todo con las dos manos', 'Postura erguida y de frente', 'A los ojos, no a la pantalla', 'Si está sentada, a su altura']
      },
      {
        tipo: 'tarjetas', titulo: 'Seis gestos que se ven',
        tarjetas: [
          { ilus: 'silla', titulo: 'Postura erguida', texto: 'Hombros abajo y de frente a la paciente. No te apoyes en el mostrador ni le hables de costado.' },
          { ilus: 'espejo', titulo: 'Mirada a los ojos', texto: 'Mientras ella habla, la miras a ella y no a la pantalla. Si tienes que digitar, avísale: «Permítame, lo anoto».' },
          { ilus: 'taza', titulo: 'Sonrisa genuina', texto: 'La que llega a los ojos. La sonrisa de compromiso se nota.' },
          { ilus: 'mano', titulo: 'Manos visibles y tranquilas', texto: 'Sin brazos cruzados, sin manos en los bolsillos y sin jugar con el lapicero.' },
          { ilus: 'tablet', titulo: 'Con las dos manos', texto: 'La tablet, un documento, la tarjeta o el vuelto se entregan con las dos manos, girados hacia ella para que pueda leer, y explicándole qué es.', frase: '«Aquí tiene su consentimiento. Son dos minutos; cualquier duda, estoy aquí.»' },
          { ilus: 'puerta', titulo: 'Distancia y altura', texto: 'Mantén un brazo de distancia. Si ella está sentada, inclínate un poco o ponte a su altura; no le hables desde arriba.' }
        ]
      },
      {
        tipo: 'video', titulo: 'Tu cuerpo habla con la paciente', youtube: 'k5jpvCSb5QE',
        fuente: 'Video: «No saber gestionar el lenguaje corporal propio de cara al cliente», JC Alcaide (YouTube).',
        fijate: ['Qué comunica el cuerpo aunque no digas nada', 'Los gestos que alejan al cliente', 'Uno que tú haces sin darte cuenta']
      },
      {
        tipo: 'ordenar', titulo: 'Entregar la tablet',
        consigna: 'Ordena cómo se entrega la tablet del consentimiento.',
        pasos: [
          'Me pongo de pie y la miro',
          'Giro la tablet hacia ella',
          'Se la entrego con las dos manos',
          'Le explico en una frase qué es y cuánto toma',
          'Me quedo cerca por si tiene dudas'
        ]
      },
      {
        tipo: 'sino', titulo: 'Gestos que sí y gestos que no',
        consigna: 'Toca «Sí» si el gesto transmite calidez y confianza.',
        frases: [
          { texto: 'Brazos cruzados mientras la paciente habla', si: false, nota: 'Se lee como defensa o fastidio.' },
          { texto: 'Asentir mientras te explica', si: true, nota: 'Le muestra que la estás escuchando.' },
          { texto: 'Entregar el vuelto con una mano, sin mirar', si: false, nota: 'Con las dos manos y mirándola.' },
          { texto: 'Mirar la pantalla mientras te habla', si: false, nota: 'Primero la mirada. Si vas a digitar, avísale.' },
          { texto: 'Inclinarte un poco hacia la paciente sentada', si: true, nota: 'Le hablas a su altura.' },
          { texto: 'Apoyarte con los codos en el mostrador', si: false, nota: 'Postura erguida, siempre.' }
        ]
      },
      {
        tipo: 'caso', titulo: '¿Qué harías?', ilus: 'tablet',
        situacion: 'Una paciente te está contando una molestia con su tratamiento y tú estás terminando de digitar.',
        opciones: [
          { texto: 'Sigo digitando y le digo «ajá, ajá».', ok: false, nota: 'Siente que no la escuchas, y su molestia crece.' },
          { texto: 'Dejo el teclado, la miro, asiento y repito lo que entendí antes de proponerle algo.', ok: true, nota: 'Escucha activa: se siente atendida antes de que resuelvas nada.' },
          { texto: 'Le pido que espere a que termine de digitar.', ok: false, nota: 'Lo urgente para ella es que la escuchen. Lo demás espera.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Entregar algo con una sola mano puede leerse como una falta de respeto.', v: true, nota: 'Por eso, siempre con las dos.' },
          { texto: 'Si la paciente está sentada, le hablo de pie, desde arriba.', v: false, nota: 'Inclínate o ponte a su altura.' },
          { texto: 'La sonrisa de compromiso se nota.', v: true, nota: 'La sonrisa genuina llega a los ojos.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Cómo se entrega la tablet o un documento?', opciones: ['Con una mano, rápido', 'Con las dos manos, girado hacia ella y explicándole', 'Se deja sobre el mostrador'], correcta: 1 },
      { p: 'Mientras la paciente habla, miras…', opciones: ['La pantalla', 'Sus ojos', 'El celular'], correcta: 1 },
      { p: '¿Qué gesto transmite escucha?', opciones: ['Brazos cruzados', 'Asentir', 'Mirar el reloj'], correcta: 1 },
      { p: 'La paciente está sentada en la sala.', opciones: ['Le hablo de pie desde lejos', 'Me inclino o me pongo a su altura', 'Le hablo desde el counter'], correcta: 1 },
      { p: '¿Cuál es la postura correcta en el counter?', opciones: ['Erguida y de frente', 'Apoyada en el mostrador', 'De costado mirando la pantalla'], correcta: 0 },
      { p: 'Tienes que digitar mientras te habla.', opciones: ['Digito en silencio', 'Le aviso: «Permítame, lo anoto», y vuelvo a mirarla', 'Le pido que repita después'], correcta: 1 },
      { p: '¿Dónde van las manos?', opciones: ['En los bolsillos', 'Visibles y tranquilas', 'Jugando con el lapicero'], correcta: 1 },
      { p: 'La escucha activa incluye…', opciones: ['Repetir lo que entendí antes de proponer', 'Interrumpir con la solución', 'Seguir con lo mío'], correcta: 0 }
    ],
    compromisos: [
      'Entregaré todo con las dos manos',
      'Miraré a los ojos mientras me hablan',
      'Me mantendré erguida y de frente en el counter',
      'Repetiré lo que entendí antes de proponer una solución'
    ]
  }
];

// Módulos 9 a 12 de la Academia de Recepción (segunda tanda).
// Casos reales de las reuniones del 02/09, 16/09, 23/09, 07/10 y 31/10/2026. Sin nombres de pacientes ni del personal.

window.MODULOS.push(
  // ───────────────────────────── 9 · Admisión con DNI
  {
    id: 'm09', n: 9, titulo: 'Admisión con DNI y registro completo', minutos: 20, ilus: 'tablet',
    resumen: 'Un dato mal puesto hoy es un problema mañana.',
    pasos: [
      {
        tipo: 'escena', ilus: 'tablet',
        titulo: 'Un dato mal puesto hoy es un problema mañana',
        texto: 'Hay pacientes registradas sin correo, sin distrito y sin dirección exacta, y cuando la dirección pide la información, no se puede sacar. Hay fichas mal llenadas que traban el bot de los informes. Y de la primera ficha salen todos los consentimientos. Todo empieza en el counter, en la computadora.',
        porque: 'El registro no se hace como cada una quiera: se hace como dice el protocolo, siempre igual.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: el registro perfecto', archivo: 'media/m09-admision.mp4?v=jb', poster: 'media/m09-admision.jpg?v=jb',
        fijate: ['Escanear el DNI y verificar que el nombre coincida', 'Correo, distrito, dirección y ocupación: siempre completos', 'La paciente completa en la tablet mientras se le cobra', 'Mismo orden de campos, siempre']
      },
      {
        tipo: 'caso', real: '16/09/2026', titulo: '¿Qué harías?', ilus: 'gafete',
        situacion: 'Escaneas el DNI de una paciente nueva y el nombre que sale no coincide con el nombre que te dio.',
        opciones: [
          { texto: 'Uso el nombre que me dijo; seguro es un error del sistema.', ok: false, nota: 'Ya pasó: llegan personas con nombre o DNI falso que después exigen devoluciones. El DNI manda.' },
          { texto: 'Con amabilidad le pido que lo verifiquemos y, si no coincide, aviso a administración antes de agendar o cobrar.', ok: true, nota: 'Exacto: sin tono de sospecha, pero sin registrar ni cobrar nada hasta aclararlo.' },
          { texto: 'Le digo en voz alta que su DNI no es suyo.', ok: false, nota: 'Nunca en voz alta ni delante de otras pacientes. Se verifica con discreción.' }
        ]
      },
      {
        tipo: 'caso', real: '02/09/2026', titulo: '¿Qué falló?', ilus: 'agenda',
        situacion: 'El bot que arma y envía los informes falla: en varias solicitudes falta el sexo de la paciente y el número de ficha está mal puesto.',
        opciones: [
          { texto: 'El bot está mal hecho.', ok: false, nota: 'El bot funciona si los datos entran siempre igual. El problema fue el llenado.' },
          { texto: 'Cada una llenó a su manera. Se llena con el mismo orden de campos y se revisan la ficha y los datos antes de enviar.', ok: true, nota: 'Así es: protocolo fijo, pegado a la vista, y revisión antes de guardar.' },
          { texto: 'No importa, igual se entiende.', ok: false, nota: 'Una ficha mal llenada traba el bot, Odoo y los consentimientos.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'El registro perfecto',
        tarjetas: [
          { ilus: 'gafete', titulo: 'Escanea el DNI', texto: 'Los datos salen de RENIEC: nombre, DNI, fecha de nacimiento. Verifica que el nombre coincida con la persona antes de seguir.' },
          { ilus: 'tablet', titulo: 'Lo que RENIEC no da', texto: 'Correo, distrito, dirección exacta, ocupación (de la lista) y cómo nos conoció. La paciente lo completa en la tablet.', frase: '«Para enviarle sus resultados y recordatorios, ¿me ayuda a completar sus datos en la tablet?»' },
          { ilus: 'pos', titulo: 'En paralelo', texto: 'Mientras ella completa sus datos, tú cobras. Nadie hace cola por un registro.' },
          { ilus: 'agenda', titulo: 'Siempre el mismo orden', texto: 'Las solicitudes se llenan con el orden fijo de campos: sexo, número de ficha, datos básicos. No como cada una quiera.' },
          { ilus: 'reloj', titulo: 'Revisa antes de guardar', texto: 'Correo bien escrito, ficha correcta, nada vacío. De este registro salen los consentimientos, los informes y las tarjetas VIP.' }
        ]
      },
      {
        tipo: 'ordenar', titulo: 'Ordena la admisión',
        consigna: 'Ordena los pasos de una paciente nueva.',
        pasos: [
          'Pido el DNI y lo escaneo',
          'Verifico que el nombre coincida',
          'Le entrego la tablet para correo, distrito y ocupación',
          'Cobro mientras ella completa',
          'Reviso la ficha completa antes de guardar'
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Si la paciente está apurada, puedo dejar el correo para otro día.', v: false, nota: 'El correo se pide siempre: sin él no llegan resultados ni recordatorios.' },
          { texto: 'Los consentimientos se llenan con los datos del registro.', v: true, nota: 'Por eso el registro tiene que estar completo y bien escrito.' },
          { texto: 'Cada recepcionista puede llenar la solicitud con su propio orden.', v: false, nota: 'El orden es uno solo, el del protocolo.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Qué se verifica al escanear el DNI?', opciones: ['Que el nombre coincida con la persona', 'Nada, el sistema ya lo hizo', 'Solo la fecha'], correcta: 0 },
      { p: 'El nombre no coincide con el DNI.', opciones: ['Registro igual', 'Verifico con discreción y aviso a administración antes de agendar o cobrar', 'Se lo digo en voz alta'], correcta: 1 },
      { p: '¿Qué datos completa la paciente en la tablet?', opciones: ['Correo, distrito, dirección, ocupación y cómo nos conoció', 'Solo su nombre', 'Nada'], correcta: 0 },
      { p: '¿Qué haces mientras ella completa la tablet?', opciones: ['Espero mirando', 'Cobro, en paralelo', 'Atiendo el celular'], correcta: 1 },
      { p: '¿Por qué falló el bot de informes?', opciones: ['Por fichas llenadas cada una a su manera', 'Por el internet', 'Por la doctora'], correcta: 0 },
      { p: '¿Qué sale del registro de la primera visita?', opciones: ['Nada más', 'Los consentimientos, los informes y las tarjetas', 'Solo la boleta'], correcta: 1 },
      { p: 'Antes de guardar…', opciones: ['Reviso correo, ficha y que nada quede vacío', 'Guardo sin revisar', 'Lo reviso a fin de mes'], correcta: 0 },
      { p: '¿Cómo se pide el correo?', opciones: ['«Dame tu correo»', '«Para enviarle sus resultados y recordatorios, ¿me ayuda con su correo?»', 'No se pide'], correcta: 1 }
    ],
    compromisos: [
      'Verificaré siempre que el nombre coincida con el DNI',
      'Ninguna ficha quedará sin correo, distrito y dirección',
      'Llenaré las solicitudes con el orden del protocolo',
      'Revisaré cada ficha antes de guardar'
    ]
  },

  // ───────────────────────────── 10 · Flujo: paga, firma y sube
  {
    id: 'm10', n: 10, titulo: 'Flujo: paga, firma y sube', minutos: 20, ilus: 'tablet',
    resumen: 'El orden que cuida a la paciente y a la clínica.',
    pasos: [
      {
        tipo: 'escena', ilus: 'tablet',
        titulo: 'Baja, paga, firma y sube',
        texto: 'Cuando la doctora indica un procedimiento, la paciente no debería esperar horas. El orden es simple: evaluación, cotización, confirmación, pago, consentimiento y procedimiento. Y el consentimiento no es un trámite: es la primera defensa de la clínica.',
        porque: 'Todos los procedimientos, hasta una vitamina C, tienen su consentimiento firmado.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: el orden correcto', archivo: 'media/m10-flujo.mp4?v=jb', poster: 'media/m10-flujo.jpg?v=jb',
        fijate: ['Evaluación, cotización, confirmación, pago', 'Un consentimiento por procedimiento', 'Firmado en la tablet mientras actúa el anestésico', 'Sin consentimiento, nadie pasa']
      },
      {
        tipo: 'caso', real: '16/09/2026', titulo: '¿Por qué importa?', ilus: 'alerta',
        situacion: 'Hace años una paciente denunció a la clínica después de un procedimiento. Lo primero que se pidió fue el consentimiento informado, la historia y los exámenes.',
        opciones: [
          { texto: 'El consentimiento es un papel más; lo importante es el procedimiento.', ok: false, nota: 'Ante una denuncia, el consentimiento firmado y archivado es lo primero que se pide.' },
          { texto: 'Por eso ninguna paciente pasa a un procedimiento sin su consentimiento firmado y archivado en la historia.', ok: true, nota: 'Exacto: protege a la paciente, a la doctora y a la clínica.' },
          { texto: 'Basta con que la paciente diga que está de acuerdo.', ok: false, nota: 'Tiene que estar firmado, uno por cada procedimiento.' }
        ]
      },
      {
        tipo: 'caso', real: '23/09/2026', titulo: '¿Qué harías?', ilus: 'agenda',
        situacion: 'Una paciente se hizo bótox en la mañana y pide que le agendes radiofrecuencia esa misma tarde, porque tiene espacio.',
        opciones: [
          { texto: 'La agendo: hay espacio y ella lo pide.', ok: false, nota: 'La radiofrecuencia el mismo día puede hacer que se pierda el bótox.' },
          { texto: 'Reviso en la historia qué se hizo hoy y consulto con el médico antes de agendar.', ok: true, nota: 'Así es: la agenda del mismo día se cruza con la historia, y ante la duda decide el médico.' },
          { texto: 'Le digo que no sin explicarle.', ok: false, nota: 'Se le explica con amabilidad y se le ofrece otra fecha.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'El flujo, paso a paso',
        tarjetas: [
          { ilus: 'agenda', titulo: 'Evaluación y cotización', texto: 'La doctora evalúa e indica. Recepción explica la cotización con claridad y la confirma con la paciente.' },
          { ilus: 'pos', titulo: 'Pago', texto: 'Se cobra y se emite la boleta. Con el pago confirmado, farmacia prepara el producto.' },
          { ilus: 'tablet', titulo: 'Consentimiento', texto: 'Uno por procedimiento, en la tablet y ya prellenado con los datos del registro. La paciente solo lee y firma.' },
          { ilus: 'reloj', titulo: 'Sin tiempo muerto', texto: 'No se retiene a la paciente abajo llenando papeles: firma mientras actúa el anestésico, para no perder tiempo.' },
          { ilus: 'alerta', titulo: 'Sin consentimiento no se pasa', texto: 'Es la primera defensa ante cualquier reclamo. Va firmado y archivado en la historia.' }
        ]
      },
      {
        tipo: 'ordenar', titulo: 'Ordena el flujo',
        consigna: 'Ordena lo que pasa desde que la doctora indica un procedimiento.',
        pasos: [
          'La doctora evalúa e indica',
          'Explico y confirmo la cotización',
          'La paciente paga y se emite la boleta',
          'Firma el consentimiento en la tablet',
          'Sube al procedimiento'
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Una vitamina C no necesita consentimiento.', v: false, nota: 'Todos los procedimientos llevan su consentimiento.' },
          { texto: 'El consentimiento se llena con los datos del registro.', v: true, nota: 'Por eso el registro tiene que estar completo.' },
          { texto: 'Se puede agendar radiofrecuencia justo después de un bótox sin preguntar.', v: false, nota: 'Se revisa la historia y se consulta con el médico.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Cuál es el orden correcto?', opciones: ['Procedimiento, pago, consentimiento', 'Evaluación, cotización, pago, consentimiento, procedimiento', 'Consentimiento al final'], correcta: 1 },
      { p: '¿Qué procedimientos llevan consentimiento?', opciones: ['Solo los grandes', 'Todos, hasta una vitamina C', 'Los que pida la paciente'], correcta: 1 },
      { p: '¿Dónde se firma el consentimiento?', opciones: ['En la tablet, prellenado', 'En una hoja suelta', 'No se firma'], correcta: 0 },
      { p: '¿Por qué es tan importante el consentimiento?', opciones: ['Es un trámite', 'Es la primera defensa ante un reclamo o denuncia', 'Para la estadística'], correcta: 1 },
      { p: 'Una paciente quiere radiofrecuencia la tarde de su bótox.', opciones: ['La agendo', 'Reviso la historia y consulto al médico', 'Le digo que no sin explicar'], correcta: 1 },
      { p: '¿Cuándo prepara farmacia el producto?', opciones: ['Con el pago confirmado', 'Antes de cotizar', 'Cuando la paciente llega'], correcta: 0 },
      { p: 'Para no perder tiempo, la paciente firma…', opciones: ['Mientras actúa el anestésico', 'Al día siguiente', 'Después de irse'], correcta: 0 },
      { p: 'Sin consentimiento firmado…', opciones: ['Se pasa igual', 'Nadie pasa al procedimiento', 'Lo firma la recepcionista'], correcta: 1 }
    ],
    compromisos: [
      'Ninguna paciente pasará sin su consentimiento firmado',
      'Explicaré la cotización con claridad antes de cobrar',
      'Revisaré la historia antes de agendar algo el mismo día',
      'No retendré a la paciente abajo llenando papeles'
    ]
  },

  // ───────────────────────────── 11 · Decir la verdad con elegancia
  {
    id: 'm11', n: 11, titulo: 'Decir la verdad con elegancia', minutos: 15, ilus: 'whatsapp',
    resumen: 'Mejor una verdad a tiempo que diez reprogramaciones.',
    pasos: [
      {
        tipo: 'escena', ilus: 'whatsapp',
        titulo: 'Mejor una verdad a tiempo',
        texto: 'Una máquina dejó de funcionar y, en lugar de decirlo, se reprogramaba a los pacientes una y otra vez, porque ya no se sabía qué decirles. Uno de ellos había pagado 200 dólares. La dirección fue clara: decir la verdad, disculparse, devolver el dinero y avisar cuando vuelva.',
        porque: 'En una clínica de lujo, la paciente confía porque se le dice la verdad, con elegancia.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: la verdad, con elegancia', archivo: 'media/m11-verdad.mp4?v=jb', poster: 'media/m11-verdad.jpg?v=jb',
        fijate: ['Decir la verdad a tiempo, sin rodeos', 'Disculparse sin excusas', 'Ofrecer una alternativa o la devolución', 'Comprometerse a avisar, y cumplir']
      },
      {
        tipo: 'caso', real: '31/10/2026', titulo: '¿Qué harías?', ilus: 'whatsapp',
        situacion: 'Un paciente pagó un tratamiento con una máquina que está parada y no se sabe cuándo vuelve. Te escribe por tercera vez para reprogramar.',
        opciones: [
          { texto: 'Lo reprogramo otra vez para la próxima semana.', ok: false, nota: 'Así se le tenía dando vueltas. Cada reprogramación sin verdad desgasta la confianza.' },
          { texto: 'Le digo con claridad que por el momento el equipo no está disponible, me disculpo, le ofrezco la devolución y le prometo avisarle apenas vuelva.', ok: true, nota: 'Exacto: verdad, disculpa, solución y compromiso. Es lo que pidió la dirección.' },
          { texto: 'Le digo que no hay y nada más.', ok: false, nota: 'La verdad sí, pero con elegancia: disculpa, alternativa y compromiso.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'La verdad, con elegancia',
        tarjetas: [
          { ilus: 'reloj', titulo: 'A tiempo', texto: 'Apenas sabes que algo no va a ser posible, lo dices. No esperas a que la paciente pregunte por tercera vez.' },
          { ilus: 'manos', titulo: 'Disculpa sin excusas', texto: 'Una disculpa sincera y corta. Sin culpar a la máquina, al proveedor ni a otra área.', frase: '«Le pido disculpas: por el momento el equipo no está disponible.»' },
          { ilus: 'pos', titulo: 'Una solución', texto: 'Una alternativa equivalente o la devolución del dinero, sin hacerla rogar.' },
          { ilus: 'agenda', titulo: 'Compromiso', texto: 'Le avisas cuando vuelva, y lo anotas como pendiente con su fecha.', frase: '«Apenas esté disponible, la llamo personalmente.»' },
          { ilus: 'whatsapp', titulo: 'Las palabras de lujo', texto: '«No hay» se dice «por el momento no está disponible». «No sé» se dice «permítame verificarlo». «Espérate» se dice «permítame un momento».' }
        ]
      },
      {
        tipo: 'sino', titulo: 'Frases que sí y frases que no',
        consigna: 'Toca «Sí» si la frase va con el estándar y «No» si hay que cambiarla.',
        frases: [
          { texto: '«No hay.»', si: false, nota: 'Mejor: «Por el momento no está disponible.»' },
          { texto: '«Permítame verificarlo y le confirmo en diez minutos.»', si: true, nota: 'Compromiso concreto.' },
          { texto: '«Es culpa del proveedor.»', si: false, nota: 'No se culpa a nadie frente a la paciente.' },
          { texto: '«Le pido disculpas. Le ofrezco la devolución o una alternativa.»', si: true, nota: 'Disculpa y solución.' },
          { texto: '«No sé, pregunte otro día.»', si: false, nota: '«No sé» no existe: se averigua.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Reprogramar varias veces es mejor que dar una mala noticia.', v: false, nota: 'La verdad a tiempo cuida más la confianza.' },
          { texto: 'Prometer que se le avisará también hay que cumplirlo.', v: true, nota: 'Se anota como pendiente con su fecha.' }
        ]
      }
    ],
    evaluacion: [
      { p: 'Un servicio no va a estar disponible. ¿Cuándo se dice?', opciones: ['Apenas se sabe', 'Cuando la paciente pregunte', 'Nunca'], correcta: 0 },
      { p: '¿Cómo se dice «no hay»?', opciones: ['«No hay»', '«Por el momento no está disponible»', '«Ya se acabó»'], correcta: 1 },
      { p: 'Al disculparte…', opciones: ['Culpas a la máquina', 'Te disculpas sin excusas', 'No te disculpas'], correcta: 1 },
      { p: '¿Qué se ofrece?', opciones: ['Nada', 'Una alternativa o la devolución', 'Que espere'], correcta: 1 },
      { p: 'Prometiste avisar cuando vuelva el servicio.', opciones: ['Lo anoto como pendiente y cumplo', 'Lo recuerdo de memoria', 'Ella llamará'], correcta: 0 },
      { p: '«No sé» se reemplaza por…', opciones: ['«Pregunte otro día»', '«Permítame verificarlo»', '«Quién sabe»'], correcta: 1 },
      { p: '¿Qué pasó con el equipo parado?', opciones: ['Se reprogramaba sin fin, en vez de decir la verdad', 'Se avisó a tiempo', 'Nada'], correcta: 0 },
      { p: 'La verdad dicha con elegancia…', opciones: ['Cuida la confianza', 'Ahuyenta a la paciente', 'No importa'], correcta: 0 }
    ],
    compromisos: [
      'Diré la verdad a tiempo, con elegancia',
      'No volveré a decir «no hay» ni «no sé»',
      'Ofreceré siempre una alternativa o la devolución',
      'Cumpliré cada aviso que prometa'
    ]
  },

  // ───────────────────────────── 12 · Pacientes difíciles y altercados
  {
    id: 'm12', n: 12, titulo: 'Pacientes difíciles y altercados', minutos: 20, ilus: 'alerta',
    resumen: 'Calma por fuera, hechos por escrito.',
    pasos: [
      {
        tipo: 'escena', ilus: 'alerta',
        titulo: 'Calma por fuera, hechos por escrito',
        texto: 'Hoy las pacientes conflictivas se marcan a mano con papelitos de colores en la historia física. La dirección quiere algo mejor: si una paciente levanta la voz o hay un altercado, se anota en el sistema con fecha y hechos, para que el médico lo sepa antes de atender. Y el trato hacia ella sigue siendo igual de cordial.',
        porque: 'Se registra lo que pasó, no lo que opinamos de la persona.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: calma y hechos', archivo: 'media/m12-dificiles.mp4?v=jb', poster: 'media/m12-dificiles.jpg?v=jb',
        fijate: ['Bajar la voz y no discutir', 'Escuchar, disculparse y resolver', 'Llevarla a un lugar más privado', 'Anotar hechos, no adjetivos']
      },
      {
        tipo: 'caso', real: '16/09/2026', titulo: '¿Qué harías?', ilus: 'alerta',
        situacion: 'Una paciente llega con su hija, discuten fuerte en la sala de espera y luego la paciente te levanta la voz por la demora.',
        opciones: [
          { texto: 'Le respondo en el mismo tono para que se calme.', ok: false, nota: 'Subir la voz enciende más el conflicto, y las demás pacientes lo ven.' },
          { texto: 'Bajo la voz, la escucho, me disculpo por la demora, le doy el tiempo real y la invito a un lugar más tranquilo. Después anoto lo ocurrido con fecha y hechos.', ok: true, nota: 'Así es: calma por fuera, y el incidente queda registrado para el médico.' },
          { texto: 'La ignoro hasta que se le pase.', ok: false, nota: 'Ignorar se siente como desprecio. Escuchar baja la tensión.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'El método para calmar',
        tarjetas: [
          { ilus: 'telefono', titulo: 'Escucha', texto: 'Déjala hablar sin interrumpir. Mira a los ojos, asiente y repite lo que entendiste.' },
          { ilus: 'manos', titulo: 'Empatiza y discúlpate', texto: 'No le das la razón en todo, pero reconoces cómo se siente.', frase: '«Entiendo su molestia y le pido disculpas por la espera.»' },
          { ilus: 'puerta', titulo: 'Un lugar más privado', texto: 'Si la conversación sube de tono, la invitas a un espacio más tranquilo, lejos de la sala.' },
          { ilus: 'agenda', titulo: 'Resuelve y avisa', texto: 'Le das una solución concreta o avisas a quien pueda dársela, y le dices cuándo.' },
          { ilus: 'alerta', titulo: 'Anota hechos', texto: 'Fecha, hora, qué dijo o hizo, quién estuvo. Sin adjetivos. Por ejemplo: «levantó la voz y se negó a firmar». Nunca «es una pesada».' }
        ]
      },
      {
        tipo: 'sino', titulo: '¿Es una nota objetiva?',
        consigna: 'Toca «Sí» si la nota describe hechos y «No» si es una opinión.',
        frases: [
          { texto: '«02/11, 10:40. Levantó la voz en sala por la demora; se le ofreció café y se le dio el tiempo real.»', si: true, nota: 'Fecha, hora y hechos.' },
          { texto: '«Paciente loca, no atenderla.»', si: false, nota: 'Es un adjetivo y una orden sin hechos.' },
          { texto: '«Se negó a firmar el consentimiento y se retiró sin pagar el saldo.»', si: true, nota: 'Hechos concretos.' },
          { texto: '«Es una pesada como siempre.»', si: false, nota: 'Opinión. No sirve al médico y no es profesional.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Los papelitos de colores en la historia física son suficientes.', v: false, nota: 'La alerta va en el sistema, con hechos y fecha.' },
          { texto: 'Después de registrar un incidente, se sigue tratando a la paciente con la misma cordialidad.', v: true, nota: 'El registro es para cuidar, no para castigar.' },
          { texto: 'Si una paciente grita, lo mejor es responder con firmeza en el mismo tono.', v: false, nota: 'Se baja la voz: la calma contagia.' }
        ]
      }
    ],
    evaluacion: [
      { p: 'Una paciente te levanta la voz. Lo primero es…', opciones: ['Responder igual', 'Bajar la voz y escuchar', 'Ignorarla'], correcta: 1 },
      { p: '¿Qué se dice al disculparse?', opciones: ['«Usted no tiene razón»', '«Entiendo su molestia y le pido disculpas»', 'Nada'], correcta: 1 },
      { p: 'Si la discusión sube de tono…', opciones: ['Se sigue en la sala', 'Se la invita a un lugar más privado', 'Se llama a seguridad de inmediato'], correcta: 1 },
      { p: '¿Cómo se anota un incidente?', opciones: ['Con adjetivos', 'Con fecha, hora y hechos', 'No se anota'], correcta: 1 },
      { p: '¿Cuál es una nota correcta?', opciones: ['«Paciente loca»', '«Levantó la voz y se negó a firmar»', '«No atenderla nunca»'], correcta: 1 },
      { p: '¿Para qué sirve la alerta en el sistema?', opciones: ['Para que el médico lo sepa antes de atender', 'Para burlarse', 'Para nada'], correcta: 0 },
      { p: 'Después del incidente, el trato a la paciente…', opciones: ['Es igual de cordial', 'Es más frío', 'Se le cobra más'], correcta: 0 },
      { p: '¿Qué reemplaza a los papelitos de colores?', opciones: ['Una alerta con hechos en el sistema', 'Un grupo de WhatsApp', 'Nada'], correcta: 0 }
    ],
    compromisos: [
      'Bajaré la voz cuando la paciente la suba',
      'Escucharé antes de proponer',
      'Anotaré cada incidente con fecha y hechos',
      'Trataré igual de bien a quien tuvo un mal momento'
    ]
  }
);

// Módulos 13 a 16 de la Academia de Recepción (tercera tanda).
// Casos reales de las reuniones del 02/09, 16/09, 23/09, 07/10 y 31/10/2026. Sin nombres de pacientes ni del personal.

window.MODULOS.push(
  // ───────────────────────────── 13 · Quejas y Libro de Reclamaciones
  {
    id: 'm13', n: 13, titulo: 'Quejas y Libro de Reclamaciones', minutos: 20, ilus: 'alerta',
    resumen: 'Una queja escuchada a tiempo se convierte en confianza.',
    pasos: [
      {
        tipo: 'escena', ilus: 'alerta',
        titulo: 'La queja que no se dice en el counter, se escribe en Google',
        texto: 'Las reseñas negativas de la clínica hablan de lo mismo: esperas de dos horas y WhatsApp que tarda en responder. Esas pacientes no reclamaron en recepción. Se fueron y lo escribieron donde todos lo leen.',
        porque: 'Cuando una paciente se queja contigo, todavía estamos a tiempo de arreglarlo.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: cómo se recibe una queja', archivo: 'media/m13-quejas.mp4?v=jb', poster: 'media/m13-quejas.jpg?v=jb',
        fijate: ['Escuchar sin interrumpir, agradecer y disculparse', 'Resolver en el momento o decir quién y cuándo', 'El Libro de Reclamaciones se entrega de inmediato', 'Invitar a calificar con el QR al despedirla']
      },
      {
        tipo: 'caso', real: '07/10/2026', titulo: '¿Qué harías?', ilus: 'reloj',
        situacion: 'Una paciente lleva una hora y media esperando. Se acerca al counter y te dice, molesta: «Esto es una falta de respeto».',
        opciones: [
          { texto: '«No es mi culpa, la doctora está retrasada.»', ok: false, nota: 'Nunca se culpa a nadie frente a la paciente. Para ella, la clínica es una sola.' },
          { texto: '«Tiene toda la razón y le pido disculpas. Déjeme confirmar ahora mismo cuánto falta y le doy el tiempo real.»', ok: true, nota: 'Le das la razón en lo que siente, te disculpas y vuelves con un dato concreto.' },
          { texto: 'Le pido que espere un poquito más, sin averiguar nada.', ok: false, nota: 'Eso es lo que termina en una reseña de una estrella.' }
        ]
      },
      {
        tipo: 'caso', titulo: 'Te piden el Libro de Reclamaciones', ilus: 'agenda',
        situacion: 'Después de una demora, una paciente pide el Libro de Reclamaciones. Tu compañera te hace una seña para que le digas que «no lo tienes a la mano».',
        opciones: [
          { texto: 'Le digo que no lo tengo y que regrese otro día.', ok: false, nota: 'Negarlo o esconderlo está prohibido por ley y agrava la queja.' },
          { texto: 'Trato de convencerla de que no vale la pena.', ok: false, nota: 'Puedes ofrecer una solución, pero si lo quiere, se lo entregas sin insistir.' },
          { texto: 'Se lo entrego de inmediato, la ayudo con lo que necesite, le doy su copia y aviso a administración el mismo día.', ok: true, nota: 'Es su derecho. Entregarlo con amabilidad también es parte del servicio.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'Así se recibe una queja',
        tarjetas: [
          { ilus: 'manos', titulo: 'Escucha completa', texto: 'Sin interrumpir, de frente y con la mirada en ella. No te defiendas mientras habla.' },
          { ilus: 'mano', titulo: 'Agradece y discúlpate', texto: 'Que te lo diga es una oportunidad.', frase: '«Gracias por decírmelo. Le pido disculpas, no es la experiencia que queremos para usted.»' },
          { ilus: 'reloj', titulo: 'Solución con hora', texto: 'Si puedes resolverlo, ahora. Si no, quién lo verá y cuándo le avisas. Y cumples.' },
          { ilus: 'agenda', titulo: 'Libro de Reclamaciones', texto: 'Si lo pide, se entrega de inmediato, sin preguntar por qué. La ayudas, le das su copia y avisas a administración el mismo día.' },
          { ilus: 'pantalla', titulo: 'Queda registrado', texto: 'Toda queja va a la bitácora: fecha, hora, hechos y qué se hizo. Así se ve qué se repite.' },
          { ilus: 'celular', titulo: 'El QR al despedirla', texto: 'Invítala a calificar la atención, sin insistir. Las calificaciones corrigen lo que está mal.', frase: '«Su opinión nos ayuda a mejorar. ¿Nos regala un minuto con este código?»' }
        ]
      },
      {
        tipo: 'ordenar', titulo: 'Ordena la respuesta a una queja',
        consigna: 'Ordena los pasos, del primero al último.',
        pasos: [
          'Escucho sin interrumpir',
          'Agradezco y me disculpo',
          'Resuelvo o digo quién y cuándo',
          'Lo anoto en la bitácora',
          'Le aviso cuando está resuelto'
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Si la paciente pide el Libro de Reclamaciones, primero le pregunto por qué.', v: false, nota: 'Se entrega de inmediato. Puedes ofrecer ayuda, no condiciones.' },
          { texto: 'Una queja en el counter es mejor que una queja en Google.', v: true, nota: 'En el counter todavía se puede arreglar.' },
          { texto: 'Si la culpa es de otra área, se lo explico a la paciente.', v: false, nota: 'Para la paciente la clínica es una sola. Te disculpas en nombre de todos.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿De qué hablan las reseñas negativas de la clínica?', opciones: ['De esperas largas y WhatsApp lento', 'Del estacionamiento', 'De los precios'], correcta: 0 },
      { p: 'Lo primero ante una queja es…', opciones: ['Explicar que no fue mi culpa', 'Escuchar sin interrumpir', 'Llamar a seguridad'], correcta: 1 },
      { p: 'La paciente pide el Libro de Reclamaciones.', opciones: ['Se lo entrego de inmediato y aviso a administración el mismo día', 'Le digo que no lo tengo', 'Le pido que lo piense'], correcta: 0 },
      { p: 'Si no puedes resolverlo en el momento…', opciones: ['Le dices que no se puede', 'Le dices quién lo verá y cuándo le avisas', 'Cambias de tema'], correcta: 1 },
      { p: '¿Dónde queda registrada la queja?', opciones: ['En la bitácora: fecha, hora, hechos y qué se hizo', 'En ningún lado', 'En mi celular'], correcta: 0 },
      { p: 'La demora fue por la doctora. Le dices a la paciente…', opciones: ['«Es culpa de la doctora»', '«Le pido disculpas por la espera; ya confirmo cuánto falta»', 'Nada'], correcta: 1 },
      { p: 'El QR de satisfacción se ofrece…', opciones: ['Al despedirla, sin insistir', 'Solo si está contenta', 'Nunca'], correcta: 0 },
      { p: '¿Qué frase va con el estándar?', opciones: ['«Gracias por decírmelo, le pido disculpas»', '«Siempre se quejan de lo mismo»', '«Eso no es mi área»'], correcta: 0 }
    ],
    compromisos: [
      'Escucharé cada queja sin interrumpir',
      'Entregaré el Libro de Reclamaciones apenas me lo pidan',
      'Anotaré cada queja en la bitácora',
      'Invitaré a cada paciente a calificar la atención'
    ]
  },

  // ───────────────────────────── 14 · Discreción, cámaras y objetos olvidados
  {
    id: 'm14', n: 14, titulo: 'Discreción, cámaras y objetos olvidados', minutos: 20, ilus: 'llave',
    resumen: 'Lo que se ve en la clínica, se cuida en la clínica.',
    pasos: [
      {
        tipo: 'escena', ilus: 'llave',
        titulo: 'Una billetera en el sillón',
        texto: 'Una billetera negra con bastante efectivo quedó más de una hora en un sillón de la sala de espera. Se encontró gracias a las cámaras, pero la abrió una sola persona. Más tarde, la paciente llamó diciendo que se la habían sacado de la cartera.',
        porque: 'Con un protocolo claro, nadie del equipo queda expuesto a una sospecha.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: objetos olvidados y discreción', archivo: 'media/m14-discrecion.mp4?v=jb', poster: 'media/m14-discrecion.jpg?v=jb',
        fijate: ['Revisar el sillón cada vez que una paciente se retira', 'Abrir y contar entre dos, y anotarlo en la bitácora', 'Guardar bajo llave y llamar a la paciente', 'Nunca comentar en voz alta el tratamiento de nadie']
      },
      {
        tipo: 'caso', real: '16/09/2026', titulo: '¿Qué harías?', ilus: 'llave',
        situacion: 'Al pasar por la sala ves una cartera pequeña sobre un sillón vacío. No sabes de quién es.',
        opciones: [
          { texto: 'La abro yo sola para buscar un documento.', ok: false, nota: 'Abrirla a solas te expone. Siempre entre dos.' },
          { texto: 'La dejo ahí; seguro vuelve por ella.', ok: false, nota: 'Puede llevársela otra persona, y la responsabilidad sería de la clínica.' },
          { texto: 'La llevo al counter, la abrimos entre dos, contamos lo que hay, lo anotamos en la bitácora, la guardamos bajo llave y buscamos a la paciente.', ok: true, nota: 'Así se protege a la paciente y a todo el equipo.' }
        ]
      },
      {
        tipo: 'caso', real: '16/09/2026', titulo: 'La paciente llama molesta', ilus: 'telefono',
        situacion: 'La dueña de la billetera llama diciendo que alguien se la sacó de la cartera en la clínica.',
        opciones: [
          { texto: '«Aquí nadie roba, señora.»', ok: false, nota: 'Discutir solo sube el tono.' },
          { texto: '«Entiendo su preocupación. Su billetera está guardada y registrada. Si gusta, revisamos juntas las cámaras cuando venga a recogerla.»', ok: true, nota: 'Calma, hechos y transparencia. Las cámaras protegen a todos.' },
          { texto: 'Le paso la llamada a otra persona sin decir nada.', ok: false, nota: 'Primero la tranquilizas con lo que sabes; luego, si hace falta, avisas a administración.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'El protocolo',
        tarjetas: [
          { ilus: 'silla', titulo: 'Revisa el sillón', texto: 'Cada vez que una paciente se retira de la sala o de la cabina, una mirada rápida a su asiento.' },
          { ilus: 'manos', titulo: 'Siempre entre dos', texto: 'Un objeto olvidado se abre y se cuenta con una compañera como testigo. Nunca a solas.' },
          { ilus: 'pantalla', titulo: 'A la bitácora', texto: 'Tipo «Objeto olvidado»: qué es, dónde estaba, qué contenía, a qué hora y quiénes lo revisaron.' },
          { ilus: 'llave', titulo: 'Bajo llave', texto: 'Se guarda en un lugar cerrado y se llama a la paciente. Se entrega contra firma.' },
          { ilus: 'gafete', titulo: 'Las cámaras, con una frase amable', texto: 'Están para la seguridad de todos y protegen también al equipo.', frase: '«Por su seguridad y la de sus pertenencias, nuestras áreas cuentan con cámaras.»' },
          { ilus: 'mano', titulo: 'Discreción', texto: 'No se dice en voz alta qué tratamiento se hace una paciente, ni se comenta de ella en la sala, en el pasillo o por WhatsApp.' }
        ]
      },
      {
        tipo: 'sino', titulo: '¿Es discreto?',
        consigna: 'Toca «Sí» si cuida la privacidad de la paciente y «No» si no.',
        frases: [
          { texto: 'En la sala llena: «¡Señora, su bótox ya está listo!»', si: false, nota: 'Se le invita por su nombre: «Señora, la esperamos, por favor».' },
          { texto: 'Le confirmo el tratamiento en voz baja, en el counter.', si: true, nota: 'Lo justo, y solo a ella.' },
          { texto: 'Comento con una compañera, en el pasillo, lo que se hizo una paciente conocida.', si: false, nota: 'Lo que se ve en la clínica, se cuida en la clínica.' },
          { texto: 'Doy la pantalla de la computadora vuelta hacia la paciente con la agenda de otras personas abierta.', si: false, nota: 'Antes de girar la pantalla, solo debe verse lo suyo.' },
          { texto: 'Explico que hay cámaras por su seguridad y la de sus pertenencias.', si: true, nota: 'Es una frase amable y cierta.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Si encuentro dinero olvidado, puedo contarlo yo sola si lo anoto.', v: false, nota: 'Siempre con una testigo. Es tu protección.' },
          { texto: 'Las cámaras protegen a la paciente y al equipo.', v: true, nota: 'Sirven para aclarar cualquier duda con hechos.' },
          { texto: 'Hablar de una paciente por WhatsApp entre compañeras está bien si es en confianza.', v: false, nota: 'Ningún dato de una paciente sale del sistema de la clínica.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Cuándo se revisa el sillón?', opciones: ['Cada vez que una paciente se retira', 'Al final del día', 'Nunca'], correcta: 0 },
      { p: 'Un objeto olvidado se abre…', opciones: ['A solas, con cuidado', 'Entre dos, contando lo que hay', 'No se abre nunca, se deja ahí'], correcta: 1 },
      { p: '¿Dónde se registra?', opciones: ['En la bitácora, tipo «Objeto olvidado»', 'En un papel suelto', 'No se registra'], correcta: 0 },
      { p: 'Después de registrarlo…', opciones: ['Se guarda bajo llave y se llama a la paciente', 'Se deja en el counter a la vista', 'Se lo lleva quien lo encontró'], correcta: 0 },
      { p: 'Una paciente acusa que le sacaron algo.', opciones: ['Discuto', 'Respondo con calma y ofrezco revisar las cámaras juntas', 'Cuelgo'], correcta: 1 },
      { p: '¿Cómo se explican las cámaras?', opciones: ['«Por su seguridad y la de sus pertenencias»', '«Para vigilarla»', 'No se explican'], correcta: 0 },
      { p: '¿Cómo se llama a una paciente en la sala?', opciones: ['Por su nombre, sin decir su tratamiento', 'Por su tratamiento', 'A gritos'], correcta: 0 },
      { p: 'Antes de girar la pantalla hacia la paciente…', opciones: ['Verifico que solo se vea lo suyo', 'No importa lo que se vea', 'La giro rápido'], correcta: 0 }
    ],
    compromisos: [
      'Revisaré el sillón cada vez que una paciente se retire',
      'Nunca abriré a solas un objeto olvidado',
      'No diré en voz alta el tratamiento de ninguna paciente',
      'Explicaré las cámaras con una frase amable'
    ]
  },

  // ───────────────────────────── 15 · Paciente VIP y tarjetas
  {
    id: 'm15', n: 15, titulo: 'Paciente VIP y tarjetas', minutos: 20, ilus: 'gafete',
    resumen: 'Una paciente VIP compra sentirse esperada.',
    pasos: [
      {
        tipo: 'escena', ilus: 'gafete',
        titulo: 'Que sienta la diferencia',
        texto: 'En una aerolínea, quien tiene la tarjeta más alta es reconocida y priorizada sin pedir nada. La doctora quiere eso para las pacientes con tarjeta: beneficios reales, que se sientan, y un trato que no se le da a cualquiera.',
        porque: 'Si los beneficios no se notan, la tarjeta no vale. Y si se dan a todas, tampoco.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: la paciente esperada', archivo: 'media/m15-vip.mp4?v=jb', poster: 'media/m15-vip.jpg?v=jb',
        fijate: ['La tarjeta depende del consumo del año, no del día', 'Revisar en el sistema su nivel antes de que llegue', 'Ofrecer lo que le corresponde sin que lo pida', 'Beneficios siempre, y solo a quien le corresponden']
      },
      {
        tipo: 'caso', real: '31/10/2026', titulo: '¿A quién le corresponde?', ilus: 'gafete',
        situacion: 'Una paciente que viene poco hizo una compra grande en el aniversario y pide la tarjeta Black. Otra, que viene todos los meses del año, nunca la pidió.',
        opciones: [
          { texto: 'Se la doy a la primera, porque hoy gastó más.', ok: false, nota: 'La tarjeta no depende de lo que compró un día.' },
          { texto: 'La tarjeta se define por el consumo de todo el año; consulto con administración el nivel de cada una.', ok: true, nota: 'Así lo pidió la doctora: se ve quién consume más en el año, independientemente de ese día.' },
          { texto: 'Se la doy a las dos para que estén contentas.', ok: false, nota: 'Si se da a todas, deja de valer.' }
        ]
      },
      {
        tipo: 'caso', titulo: '¿Qué harías?', ilus: 'reloj',
        situacion: 'Llega una paciente con tarjeta Signature. La doctora está con 30 minutos de retraso.',
        opciones: [
          { texto: 'Esperará igual que todas; no digo nada.', ok: false, nota: 'Ella debe saberlo primero y recibir una alternativa.' },
          { texto: 'La recibo por su nombre, le aviso el tiempo real antes de que pregunte, le ofrezco algo de tomar y la alternativa que le corresponde.', ok: true, nota: 'Reconocer, anticiparse y ofrecer sin que tenga que pedir.' },
          { texto: 'Le cuento a la sala que es VIP para que la dejen pasar.', ok: false, nota: 'El trato preferente se da con discreción.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'El trato VIP',
        tarjetas: [
          { ilus: 'gafete', titulo: 'Los niveles', texto: 'Glow, Redefine, Signature y Black. Cada nivel tiene sus precios y beneficios: conócelos de memoria.' },
          { ilus: 'agenda', titulo: 'Antes de que llegue', texto: 'Revisa en la agenda quién viene con tarjeta, su nivel y sus beneficios.' },
          { ilus: 'puerta', titulo: 'Reconocerla', texto: 'De pie, por su nombre, como a alguien que esperabas.', frase: '«Señora, bienvenida. La estábamos esperando.»' },
          { ilus: 'taza', titulo: 'Ofrecer sin que pida', texto: 'Su bebida, su preferencia, su beneficio del nivel. Que no tenga que recordarte nada.' },
          { ilus: 'reloj', titulo: 'Primero en saber', texto: 'Si hay espera, se lo dices antes que nadie y le ofreces una alternativa.' },
          { ilus: 'llave', titulo: 'Solo a quien le corresponde', texto: 'Los beneficios no se regalan por simpatía. Se cumplen siempre, con discreción, y solo al nivel que corresponde.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'La tarjeta depende de cuánto gastó la paciente hoy.', v: false, nota: 'Depende del consumo de todo el año.' },
          { texto: 'Antes de que llegue, reviso su nivel y sus beneficios.', v: true, nota: 'Así la recibes como a alguien que esperabas.' },
          { texto: 'Si una paciente me cae bien, puedo darle el beneficio de otro nivel.', v: false, nota: 'Si se da a todas, deja de valer para quienes sí lo tienen.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿De qué depende la tarjeta?', opciones: ['Del consumo de todo el año', 'De la compra del día', 'De la simpatía'], correcta: 0 },
      { p: '¿Cuáles son los niveles?', opciones: ['Glow, Redefine, Signature y Black', 'Oro y plata', 'No hay niveles'], correcta: 0 },
      { p: 'Antes de que llegue una paciente con tarjeta…', opciones: ['Reviso su nivel y sus beneficios', 'No reviso nada', 'Le pregunto qué nivel tiene'], correcta: 0 },
      { p: '¿Cómo se la recibe?', opciones: ['De pie y por su nombre', 'Sentada y sin mirar', 'Con su número de tarjeta'], correcta: 0 },
      { p: 'Hay 30 minutos de retraso.', opciones: ['Se lo digo primero y le ofrezco una alternativa', 'Que espere como todas', 'No le digo nada'], correcta: 0 },
      { p: '¿Por qué no se dan beneficios a todas?', opciones: ['Porque dejarían de valer', 'Porque no hay presupuesto', 'Da igual'], correcta: 0 },
      { p: 'El trato preferente se da…', opciones: ['Con discreción', 'Anunciándolo en la sala', 'Solo si lo pide'], correcta: 0 },
      { p: '¿Qué compra una paciente VIP?', opciones: ['Sentirse esperada', 'Solo un descuento', 'Una tarjeta de plástico'], correcta: 0 }
    ],
    compromisos: [
      'Revisaré cada mañana quién viene con tarjeta',
      'Recibiré por su nombre a cada paciente con tarjeta',
      'Cumpliré los beneficios de cada nivel, ni más ni menos',
      'Avisaré primero a la paciente VIP si hay espera'
    ]
  },

  // ───────────────────────────── 16 · Venta consultiva ética
  {
    id: 'm16', n: 16, titulo: 'Venta consultiva ética', minutos: 20, ilus: 'pos',
    resumen: 'Vender bien no es convencer: es ayudar a decidir.',
    pasos: [
      {
        tipo: 'escena', ilus: 'pos',
        titulo: 'Quien indica es la doctora',
        texto: 'En el counter te preguntan qué conviene para las manchas, las arrugas o la flacidez. Tú conoces los tratamientos y los precios, pero el tratamiento lo indica la doctora después de evaluar. Tu parte es que la paciente entienda bien y decida tranquila.',
        porque: 'Una paciente que se sintió presionada no vuelve. Una que entendió todo, sí.'
      },
      {
        tipo: 'video', titulo: 'Mira el video: ayudar a decidir', archivo: 'media/m16-venta.mp4?v=jb', poster: 'media/m16-venta.jpg?v=jb',
        fijate: ['Escuchar qué busca y agendar una evaluación', 'Explicar la cotización: qué incluye, sesiones, precio y forma de pago', 'La verdad, sin prometer resultados', 'Recordar a tiempo el mantenimiento que indicó la doctora']
      },
      {
        tipo: 'caso', titulo: '¿Qué harías?', ilus: 'espejo',
        situacion: 'Una paciente nueva te pregunta en el counter qué tratamiento le recomiendas para unas manchas en la cara.',
        opciones: [
          { texto: 'Le recomiendo el láser que está en promoción.', ok: false, nota: 'Recepción no indica tratamientos: eso lo decide la doctora al evaluarla.' },
          { texto: 'Le pregunto qué le preocupa, le explico que la doctora evalúa su piel para indicarle lo mejor y le ofrezco una cita de evaluación.', ok: true, nota: 'Escuchas, orientas y la llevas con quien sabe.' },
          { texto: 'Le digo que no sé y que pregunte por WhatsApp.', ok: false, nota: '«No sé» no existe: se orienta y se agenda.' }
        ]
      },
      {
        tipo: 'caso', real: '16/09/2026', titulo: 'La cotización', ilus: 'pantalla',
        situacion: 'La doctora indicó un tratamiento de cuatro sesiones. La paciente baja al counter con dudas sobre el precio.',
        opciones: [
          { texto: 'Le doy el total rápido y le pregunto con qué tarjeta paga.', ok: false, nota: 'Sin explicación, el precio parece caro y la paciente duda.' },
          { texto: 'Le giro la pantalla y le explico qué incluye, cuántas sesiones son, el precio y cómo se paga. Si duda, se la envío por escrito y quedamos en una fecha para llamarla.', ok: true, nota: 'Claridad sin presión. Y el seguimiento, en la fecha acordada.' },
          { texto: 'Le prometo que con eso desaparecen sus manchas para siempre.', ok: false, nota: 'Nunca se prometen resultados.' }
        ]
      },
      {
        tipo: 'tarjetas', titulo: 'La venta que cuida',
        tarjetas: [
          { ilus: 'manos', titulo: 'Escucha primero', texto: 'Qué le preocupa, qué espera, qué se hizo antes. Sin interrumpir.', frase: '«Cuénteme, ¿qué le gustaría mejorar?»' },
          { ilus: 'agenda', titulo: 'La doctora indica', texto: 'Si no hay una indicación médica, lo que corresponde es una evaluación. No se recomiendan tratamientos desde el counter.' },
          { ilus: 'pantalla', titulo: 'Cotización clara', texto: 'Qué incluye, cuántas sesiones, cuánto cuesta y cómo se paga. Pantalla girada hacia ella.' },
          { ilus: 'alerta', titulo: 'La verdad', texto: 'Sin prometer resultados ni inventar urgencias. Si no sabes algo, lo verificas.' },
          { ilus: 'whatsapp', titulo: 'Sin presión', texto: 'Si duda, le envías la cotización por escrito y la llamas en la fecha que acordaron.' },
          { ilus: 'reloj', titulo: 'El mantenimiento a tiempo', texto: 'Si la doctora indicó un control o una sesión de mantenimiento, se lo recuerdas antes de que se pase la fecha.' }
        ]
      },
      {
        tipo: 'sino', titulo: '¿Va o no va?',
        consigna: 'Toca «Sí» si es una venta ética y «No» si no lo es.',
        frases: [
          { texto: '«Con este tratamiento le garantizo que se ve diez años menor.»', si: false, nota: 'No se prometen resultados.' },
          { texto: '«La doctora le indicó cuatro sesiones; le explico qué incluye cada una.»', si: true, nota: 'Claridad sobre la indicación médica.' },
          { texto: '«Si no paga hoy, pierde el precio para siempre.»', si: false, nota: 'Urgencias inventadas: no. Si hay una promoción con fecha real, se informa con su fecha.' },
          { texto: '«Le envío la cotización por escrito y la llamo el jueves, como quedamos.»', si: true, nota: 'Sin presión y con seguimiento.' },
          { texto: '«Para eso le recomiendo este láser.» (sin evaluación)', si: false, nota: 'La indicación es de la doctora.' }
        ]
      },
      {
        tipo: 'vf', titulo: 'Verdadero o falso',
        afirmaciones: [
          { texto: 'Recepción puede recomendar un tratamiento si la paciente insiste.', v: false, nota: 'Se le ofrece una evaluación con la doctora.' },
          { texto: 'Recordar un mantenimiento indicado es parte de cuidar a la paciente.', v: true, nota: 'Y además evita que pierda el resultado.' },
          { texto: 'Si la paciente duda, la presiono un poco para que decida hoy.', v: false, nota: 'La presión espanta. La claridad y el seguimiento, no.' }
        ]
      }
    ],
    evaluacion: [
      { p: '¿Quién indica un tratamiento?', opciones: ['La doctora, después de evaluar', 'Recepción', 'La paciente sola'], correcta: 0 },
      { p: 'Una paciente nueva pregunta qué le recomiendas.', opciones: ['Escucho y le ofrezco una evaluación', 'Le vendo lo que está en promoción', 'Le digo que no sé'], correcta: 0 },
      { p: '¿Qué se explica en una cotización?', opciones: ['Qué incluye, sesiones, precio y forma de pago', 'Solo el total', 'Nada, que pregunte'], correcta: 0 },
      { p: 'Sobre los resultados…', opciones: ['Nunca se prometen', 'Se garantizan', 'Se exageran un poco'], correcta: 0 },
      { p: 'La paciente duda.', opciones: ['Le envío la cotización por escrito y la llamo en la fecha acordada', 'La presiono', 'La dejo ir sin nada'], correcta: 0 },
      { p: 'La doctora indicó un mantenimiento.', opciones: ['Se lo recuerdo a tiempo', 'Espero que ella se acuerde', 'No es mi tema'], correcta: 0 },
      { p: '¿Qué frase va con el estándar?', opciones: ['«Cuénteme, ¿qué le gustaría mejorar?»', '«Si no paga hoy, lo pierde»', '«Le garantizo el resultado»'], correcta: 0 },
      { p: 'Vender bien es…', opciones: ['Ayudar a decidir', 'Convencer a toda costa', 'Bajar el precio'], correcta: 0 }
    ],
    compromisos: [
      'No recomendaré tratamientos sin indicación de la doctora',
      'Explicaré cada cotización completa, con la pantalla hacia la paciente',
      'Nunca prometeré resultados',
      'Recordaré a tiempo los mantenimientos indicados'
    ]
  }
);

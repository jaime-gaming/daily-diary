export const MOODS = [
  {value:1,emoji:'😫',label:'Fatal',color:'#a8442c'},
  {value:2,emoji:'😕',label:'Flojo',color:'#c2743a'},
  {value:3,emoji:'😐',label:'Normal',color:'#98938a'},
  {value:4,emoji:'🙂',label:'Bien',color:'#4e6f52'},
  {value:5,emoji:'🤩',label:'Genial',color:'#254d32'}
];
export const WEEKDAYS = ['L','M','X','J','V','S','D'];
export const ENERGY_LABELS = ['','Muy baja','Baja','Normal','Alta','Muy alta'];
export const STRESS_LABELS = ['','Muy bajo','Bajo','Normal','Alto','Muy alto'];
export const TAGS = [
  'Productivo','Tranquilo','Ajetreado','Social','Solitario','Creativo',
  'Cansado','Motivado','Ansioso','Emocionado','Nostálgico','Aburrido'
];
export const COUNTERS = [
  {key:'water',label:'Agua',unit:'vasos',min:0,max:40,step:1,icon:'drop'},
  {key:'exercise',label:'Ejercicio',unit:'min',min:0,max:1440,step:5,icon:'run'},
  {key:'reading',label:'Lectura',unit:'min',min:0,max:1440,step:5,icon:'book'},
  {key:'mindfulness',label:'Pausa consciente',unit:'min',min:0,max:1440,step:5,icon:'leaf'}
];
export const DEFAULT_HABITS = [];
export const TEXT_FIELDS = ['bestOfDay','differentToday','generalDay','tomorrow','wordOfDay'];

export const AGE_GROUPS = [
  {
    id:'teen',
    min:10,
    max:18,
    label:'12 – 18 años',
    title:'Instituto y descubrimiento',
    desc:'Pensado para tu ritmo de clases, exámenes, amigos, aficiones y empezar a guardar tu propia historia.',
    sleepRecommended:8.5,
    studyRecommended:2,
    focusLabel:'Horas de estudio',
    focusQuestion:'¿Cuánto tiempo has dedicado hoy a estudiar, repasar o hacer tareas?',
    tags:['Clases','Exámenes','Amigos','Deporte','Música','Videojuegos','Tarde libre','Tranquilo','Cansado','Motivado','Creativo','Social'],
    habits:[
      'Hacer tareas sin mirar el móvil',
      'Leer 15 minutos antes de dormir',
      'Moverme o entrenar un rato',
      'Dejar la mochila lista para mañana',
      'Dejar el móvil fuera de la cama',
      'Salir a tomar el aire'
    ],
    placeholders:{
      bestOfDay:'Una risa en clase, una partida con amigos, una canción en el bus, quitarme un examen de encima...',
      differentToday:'Algo curioso que pasó en el insti, una charla que no esperaba o un plan improvisado...',
      generalDay:'Cuenta cómo te has sentido hoy de verdad, qué te ha dado rabia, qué te ha hecho gracia...',
      tomorrow:'Repasar ese tema a tiempo, quedar un rato, acostarme sin quedarme pegado a la pantalla...'
    }
  },
  {
    id:'young',
    min:19,
    max:26,
    label:'19 – 26 años',
    title:'Universidad, proyectos y primeros pasos',
    desc:'Adaptado a años de carrera, primeros trabajos, independencia, amigos y construir tu propio camino.',
    sleepRecommended:8,
    studyRecommended:3,
    focusLabel:'Horas de estudio y foco',
    focusQuestion:'¿Cuántas horas has dedicado a estudiar, formarte o sacar adelante tus proyectos?',
    tags:['Productivo','Uni / Trabajo','Amigos','Entreno','Creativo','Tranquilo','Cansado','Motivado','Social','Solitario','Nostálgico','Ajetreado'],
    habits:[
      'Bloque de estudio sin distracciones',
      'Entrenar o caminar 30 min',
      'Leer 20 páginas',
      'Cocinar algo casero',
      'Sin pantallas 30 min antes de dormir',
      'Ordenar mi mesa al acabar'
    ],
    placeholders:{
      bestOfDay:'Un café a media mañana, avanzar de verdad con mis cosas, entrenar, una charla hasta tarde...',
      differentToday:'Una idea que me vino de repente, alguien con quien coincidí, un cambio de planes...',
      generalDay:'Escribe para ti cómo ha ido el día, qué tienes en la cabeza y cómo llevas la semana...',
      tomorrow:'Aprovechar la mañana, quitarme esa tarea pendiente, guardar tiempo para descansar...'
    }
  },
  {
    id:'adult',
    min:27,
    max:49,
    label:'27 – 49 años',
    title:'Equilibrio, oficio y vida propia',
    desc:'Diseñado para compaginar trabajo o proyectos, descanso mental, salud, casa y tiempo de calidad.',
    sleepRecommended:7.5,
    studyRecommended:1.5,
    focusLabel:'Horas de enfoque o aprendizaje',
    focusQuestion:'¿Cuánto tiempo has dedicado hoy a aprender, leer o avanzar en proyectos propios?',
    tags:['Enfocado','Tranquilo','Trabajo','Familia','Deporte','Lectura','Cansado','Motivado','Social','Creativo','Desconexión','Ajetreado'],
    habits:[
      'Cerrar el trabajo a mi hora',
      'Caminar 30 minutos sin prisas',
      'Leer antes de apagar la luz',
      'Estirar espalda y cuello',
      'Beber agua durante la jornada',
      'Media hora sin notificaciones'
    ],
    placeholders:{
      bestOfDay:'Una sobremesa tranquila, resolver un asunto pendiente, cerrar el ordenador y desconectar...',
      differentToday:'Algo que rompió la inercia de la semana o un detalle cotidiano que hoy noté distinto...',
      generalDay:'Cómo ha ido la jornada, qué energía te queda esta noche y qué necesitas soltar...',
      tomorrow:'Centrarme en lo prioritario, no llenarme la agenda de más, salir a estirar las piernas...'
    }
  },
  {
    id:'senior',
    min:50,
    max:120,
    label:'50+ años',
    title:'Serenidad, bienestar y perspectiva',
    desc:'Orientado a saborear el ritmo diario, cuidar la salud, los paseos, la lectura y la memoria de lo vivido.',
    sleepRecommended:7.5,
    studyRecommended:1,
    focusLabel:'Tiempo de lectura o dedicación',
    focusQuestion:'¿Cuánto tiempo has dedicado hoy a la lectura, aprender o cultivar tus aficiones?',
    tags:['Sereno','Paseo','Lectura','Familia','Naturaleza','Salud','Agradecido','Activo','Creativo','Social','Tranquilo','Nostálgico'],
    habits:[
      'Paseo matutino al aire libre',
      'Rato de lectura tranquila',
      'Ejercicios de movilidad suave',
      'Llamar o ver a alguien querido',
      'Cuidar el descanso nocturno',
      'Un momento de silencio y calma'
    ],
    placeholders:{
      bestOfDay:'La luz de la mañana en el paseo, una buena conversación, avanzar con el libro que estoy leyendo...',
      differentToday:'Una visita grata, un recuerdo que volvió con nitidez, un paseo por un sitio distinto...',
      generalDay:'Anota con sosiego cómo ha transcurrido el día y con qué sensación te quedas hoy...',
      tomorrow:'Salir a caminar temprano, dedicar un rato a la lectura, disfrutar del día sin prisa...'
    }
  }
];

export const INTEREST_OPTIONS = [
  {id:'reading',label:'Lectura y escritura',icon:'book',habit:'Leer 20 minutos con calma',tag:'Lectura'},
  {id:'sport',label:'Deporte y movimiento',icon:'run',habit:'Entrenar o moverme 30 min',tag:'Deporte'},
  {id:'study',label:'Estudio y aprendizaje',icon:'study',habit:'Sesión de estudio sin móvil',tag:'Productivo'},
  {id:'music',label:'Música, cine y arte',icon:'spark',habit:'Escuchar un álbum o crear algo',tag:'Creativo'},
  {id:'nature',label:'Naturaleza y aire libre',icon:'leaf',habit:'Salir a caminar al aire libre',tag:'Naturaleza'},
  {id:'social',label:'Amigos y gente querida',icon:'heart',habit:'Hablar con alguien que quiero',tag:'Social'},
  {id:'calm',label:'Calma y descanso',icon:'moon',habit:'Apagar pantallas 30 min antes de dormir',tag:'Tranquilo'},
  {id:'projects',label:'Proyectos personales',icon:'bolt',habit:'Dedicar 30 min a mi propio proyecto',tag:'Enfocado'},
  {id:'gaming',label:'Tecnología y videojuegos',icon:'target',habit:'Parar a tiempo para descansar la vista',tag:'Desconexión'},
  {id:'cooking',label:'Cocina y comer bien',icon:'flame',habit:'Preparar una comida casera y tranquila',tag:'Bienestar'}
];

export const WRITING_RITUALS = [
  {id:'night',label:'Por la noche, al cerrar el día',icon:'moon'},
  {id:'morning',label:'Por la mañana, con café o té',icon:'sun'},
  {id:'afternoon',label:'A media tarde, haciendo una pausa',icon:'leaf'},
  {id:'anytime',label:'Cuando me pide el cuerpo escribir',icon:'pen'}
];

export const TONE_STYLES = [
  {id:'warm',label:'Cálido y cercano',desc:'Como hablar con un buen amigo en calma'},
  {id:'literary',label:'Pausado y literario',desc:'Con gusto por las palabras y los detalles'},
  {id:'direct',label:'Directo y práctico',desc:'Al grano, claro y enfocado en tu día a día'},
  {id:'gentle',label:'Suave y compasivo',desc:'Especialmente amable para días de cansancio'}
];

export const THEMES = [
  {
    id:'paper',
    name:'Papel Clásico',
    desc:'Cuaderno color crema y tinta estilográfica carbón',
    colors:['#F3EFE6','#211E17','#B34A2E'],
    favicon:{bg:'#211E17',page:'#F3EFE6',accent:'#B34A2E',ink:'#211E17'}
  },
  {
    id:'night',
    name:'Tinta Nocturna',
    desc:'Cuero oscuro y trazos cálidos para escribir de noche',
    colors:['#151412','#EDE6D8','#D96B4E'],
    favicon:{bg:'#151412',page:'#272420',accent:'#D96B4E',ink:'#EDE6D8'}
  },
  {
    id:'forest',
    name:'Bosque Sereno',
    desc:'Encuadernación salvia y papel natural de algodón',
    colors:['#EBF0EA','#19241D','#356343'],
    favicon:{bg:'#19241D',page:'#EBF0EA',accent:'#4C8B5E',ink:'#19241D'}
  },
  {
    id:'terracotta',
    name:'Atardecer Cálido',
    desc:'Arcilla cocida, papel hueso y acentos ocre',
    colors:['#F6ECE4','#261B15','#C45534'],
    favicon:{bg:'#261B15',page:'#F6ECE4',accent:'#C45534',ink:'#261B15'}
  },
  {
    id:'ocean',
    name:'Azul Atlántico',
    desc:'Papel marfil frío y tinta azul de cuaderno de viaje',
    colors:['#EDF2F6','#16222F','#2B5F8C'],
    favicon:{bg:'#16222F',page:'#EDF2F6',accent:'#2B5F8C',ink:'#16222F'}
  },
  {
    id:'lavender',
    name:'Bruma Lavanda',
    desc:'Lino malva suave y tinta ciruela',
    colors:['#F2EEF6','#221B2B','#6E4B8E'],
    favicon:{bg:'#221B2B',page:'#F2EEF6',accent:'#6E4B8E',ink:'#221B2B'}
  }
];

export const SETUP_PURPOSES = [
  {
    id:'calm',
    label:'Calma y desahogo',
    icon:'leaf',
    desc:'Soltar el ruido del día y quedarme más tranquilo/a.'
  },
  {
    id:'focus',
    label:'Constancia y hábitos',
    icon:'study',
    desc:'Cuidar mi estudio, mi descanso y mis rutinas diarias.'
  },
  {
    id:'memory',
    label:'Guardar mi historia',
    icon:'book',
    desc:'Que los meses no pasen sin recordar lo que he vivido.'
  },
  {
    id:'growth',
    label:'Conocerme mejor',
    icon:'spark',
    desc:'Ver qué cosas me sientan bien y cuáles me quitan energía.'
  }
];

export const SUGGESTED_HABITS = [
  'Leer 20 minutos',
  'Caminar al aire libre',
  'Pausa sin pantallas',
  'Beber 8 vasos de agua',
  'Respirar 5 minutos en calma',
  'Dormir a buena hora',
  'Estirar el cuerpo',
  'Ordenar mi espacio'
];

export const PERSONAL_QUOTES = [
  {
    text:'No todos los días son buenos, pero siempre queda algún rincón que merece la pena guardar.',
    author:'Nota de cuaderno',
    tones:['warm','gentle'],
    ages:['teen','young','adult','senior']
  },
  {
    text:'Cómo pasamos los días es, al final, cómo pasamos la vida.',
    author:'Annie Dillard',
    tones:['literary','direct'],
    ages:['young','adult','senior'],
    interests:['reading','projects']
  },
  {
    text:'Escribir en un diario es hablar contigo sin tener que fingir que todo va perfecto.',
    author:'Apunte al margen',
    tones:['direct','warm'],
    ages:['teen','young','adult']
  },
  {
    text:'La prisa casi nunca arregla lo que el descanso sí sabe colocar en su sitio.',
    author:'Cuaderno de calma',
    tones:['gentle','warm'],
    ages:['teen','young','adult','senior'],
    interests:['calm','nature']
  },
  {
    text:'Un paso corto dado hoy vale más que diez planes perfectos que se quedan para el lunes.',
    author:'Bitácora personal',
    tones:['direct'],
    ages:['teen','young','adult'],
    interests:['study','sport','projects']
  },
  {
    text:'Guardar memoria de las cosas pequeñas es la mejor forma de vivir dos veces.',
    author:'Tradición de lectura',
    tones:['literary'],
    ages:['young','adult','senior'],
    interests:['reading','music']
  },
  {
    text:'Sé amable con tu propio ritmo: ni los árboles dan fruto todos los meses del año.',
    author:'Cuaderno de campo',
    tones:['gentle','literary'],
    ages:['teen','young','adult','senior'],
    interests:['nature','calm']
  },
  {
    text:'Lo que hoy parece un examen gigante o un problema sin salida, dentro de un mes será solo una página pasada.',
    author:'Nota para días revueltos',
    tones:['warm','gentle'],
    ages:['teen','young'],
    interests:['study','gaming']
  }
];

export const DAILY_WORDS = [
  {
    word:'Ataraxia',
    origin:'Griego clásico',
    meaning:'Tranquilidad de ánimo que nace cuando dejamos de pelear contra lo que no depende de nosotros.',
    prompt:'¿Qué preocupación podrías dejar en pausa por esta noche?'
  },
  {
    word:'Meraki',
    origin:'Griego moderno',
    meaning:'Hacer algo poniendo el corazón, el cuidado y una parte de ti en ello.',
    prompt:'¿En qué detalle pequeño de hoy has puesto ganas o cariño?'
  },
  {
    word:'Kintsugi',
    origin:'Japonés',
    meaning:'Oficio de reparar la cerámica rota con barniz de oro, sin esconder las grietas.',
    prompt:'¿Qué tropiezo reciente te ha servido para aprender algo útil?'
  },
  {
    word:'Komorebi',
    origin:'Japonés',
    meaning:'La luz del sol cuando se cuela entre las hojas de los árboles.',
    prompt:'¿Qué imagen o rincón bonito has visto hoy al pasar?'
  },
  {
    word:'Resiliencia',
    origin:'Latín',
    meaning:'La capacidad de encajar un golpe, recuperar el aliento y seguir adelante a tu paso.',
    prompt:'¿Cómo has tirado hacia delante hoy cuando algo se hacía cuesta arriba?'
  },
  {
    word:'Serendipia',
    origin:'Castellano',
    meaning:'Eso bueno que te encuentras por casualidad mientras ibas buscando otra cosa.',
    prompt:'¿Qué momento no planeado ha merecido la pena hoy?'
  },
  {
    word:'Ubuntu',
    origin:'Zulú · Xhosa',
    meaning:'La idea de que somos quienes somos gracias también a quienes nos rodean.',
    prompt:'¿Quién te ha hecho el día un poco más fácil o agradable hoy?'
  },
  {
    word:'Ikigai',
    origin:'Japonés',
    meaning:'Aquello que te da un motivo concreto para levantarte por la mañana.',
    prompt:'¿Qué plan o proyecto te apetece de verdad hacer pronto?'
  },
  {
    word:'Wabi-sabi',
    origin:'Japonés',
    meaning:'Gustar de las cosas sencillas, imperfectas y gastadas por la vida real.',
    prompt:'¿En qué cosa imperfecta de hoy puedes dejar de exigirte tanto?'
  },
  {
    word:'Apapachar',
    origin:'Náhuatl',
    meaning:'Dar abrigo y consuelo de verdad; cuidar con cercanía.',
    prompt:'¿Qué necesitas hoy para descansar a gusto?'
  },
  {
    word:'Sosiego',
    origin:'Castellano',
    meaning:'Ese silencio tranquilo que queda cuando por fin se acaba la prisa del día.',
    prompt:'¿En qué momento del día has notado más calma hoy?'
  },
  {
    word:'Epifanía',
    origin:'Griego',
    meaning:'Caer en la cuenta de golpe de algo que llevabas tiempo viendo sin entender.',
    prompt:'¿De qué cosa te has dado cuenta hoy?'
  },
  {
    word:'Bonhomía',
    origin:'Castellano',
    meaning:'Trato llano, honesto y amable que no necesita aparentar nada.',
    prompt:'¿Qué gesto sencillo de amabilidad has visto o tenido hoy?'
  },
  {
    word:'Nefelibata',
    origin:'Castellano',
    meaning:'Persona que de vez en cuando camina por las nubes y mira el mundo a su manera.',
    prompt:'¿En qué se te ha ido el santo al cielo hoy?'
  },
  {
    word:'Templanza',
    origin:'Latín',
    meaning:'Guardar el equilibrio y no perder los papeles cuando alrededor hay ruido.',
    prompt:'¿En qué situación de hoy has sabido mantener la calma?'
  },
  {
    word:'Alba',
    origin:'Latín',
    meaning:'La primera claridad de la mañana antes de que asome el sol.',
    prompt:'¿Cómo te gustaría empezar la mañana de mañana?'
  },
  {
    word:'Saudade',
    origin:'Portugués',
    meaning:'Echar de menos con cariño a alguien o a una época en la que fuiste feliz.',
    prompt:'¿Qué buen recuerdo te ha venido hoy a la cabeza?'
  },
  {
    word:'Lagom',
    origin:'Sueco',
    meaning:'Ni de más ni de menos: saber cuándo algo es ya suficiente.',
    prompt:'¿Con qué cosa de hoy puedes decir tranquilo/a «por hoy ya está bien»?'
  },
  {
    word:'Sisu',
    origin:'Finés',
    meaning:'Empuje tranquilo para terminar lo que empezaste aunque estés cansado.',
    prompt:'¿Qué cosa has sacado adelante hoy aunque te diera pereza?'
  },
  {
    word:'Hygge',
    origin:'Danés',
    meaning:'Estar a gusto en lo cotidiano: una charla tranquila, una manta, un rato en casa.',
    prompt:'¿Qué momento sencillo del día te ha sentado mejor?'
  },
  {
    word:'Querencia',
    origin:'Castellano',
    meaning:'El sitio o la gente a la que uno siempre tiene ganas de volver.',
    prompt:'¿Dónde o con quién te sientes más cómodo/a últimamente?'
  },
  {
    word:'Claridad',
    origin:'Latín',
    meaning:'Distinguir lo que de verdad importa de lo que solo hace ruido.',
    prompt:'Si te quedas con una sola cosa de hoy, ¿cuál eliges?'
  },
  {
    word:'Amparo',
    origin:'Latín',
    meaning:'Tener un lugar o una persona donde resguardarse cuando el día se tuerce.',
    prompt:'¿Qué te reconforta cuando tienes un día torcido?'
  },
  {
    word:'Gratitud',
    origin:'Latín',
    meaning:'No dar por supuesto lo bueno que tenemos cerca cada día.',
    prompt:'¿Qué cosa normal de tu rutina agradecerías si mañana faltara?'
  }
];

export const DAILY_TIPS = [
  {
    category:'Autocompasión',
    title:'No te hables peor que a un amigo',
    tip:'Cuando estás cansado o algo sale regular, es fácil machacarse. Prueba a decirte exactamente lo que le dirías a alguien a quien aprecias.',
    action:'Anota algo que hoy hayas hecho lo mejor que podías.',
    icon:'heart',
    ages:['teen','young','adult','senior'],
    interests:['calm','social']
  },
  {
    category:'Descanso',
    title:'Bajar el brillo antes de acostarte',
    tip:'Dejar el móvil o las pantallas un rato antes de meterte en la cama ayuda a que la cabeza deje de saltar de un tema a otro.',
    action:'Pon la alarma y deja el teléfono lejos de la almohada.',
    icon:'moon',
    ages:['teen','young','adult','senior'],
    interests:['calm','gaming']
  },
  {
    category:'Calma',
    title:'Soltar el aire más despacio',
    tip:'Cuando notes prisa o nudo en el estómago, toma aire contando 4 y suéltalo despacio contando 6. El cuerpo entiende enseguida el mensaje.',
    action:'Respira hondo tres veces antes de cerrar el cuaderno.',
    icon:'leaf',
    ages:['teen','young','adult','senior'],
    interests:['calm','nature']
  },
  {
    category:'Enfoque',
    title:'La regla de los primeros cinco minutos',
    tip:'Casi siempre cuesta más ponerse que hacerlo. Ponte solo 5 minutos con eso que estás posponiendo; luego decides si sigues.',
    action:'Deja escrita una sola tarea concreta para mañana.',
    icon:'study',
    ages:['teen','young','adult'],
    interests:['study','projects']
  },
  {
    category:'Escritura',
    title:'Aquí nadie te va a poner nota',
    tip:'No hace falta escribir bonito ni llenar la página. Tres líneas sinceras sobre lo que te ha pasado hoy bastan.',
    action:'Escribe lo primero que te salga sin borrar.',
    icon:'pen',
    ages:['teen','young','adult','senior'],
    interests:['reading']
  },
  {
    category:'Hábitos',
    title:'Un día suelto no rompe nada',
    tip:'Si ayer no pudiste cumplir un hábito, no pasa nada. Lo que cuenta es retomarlo hoy con naturalidad y sin culpa.',
    action:'Empieza por el hábito más fácil de tu lista.',
    icon:'flame',
    ages:['teen','young','adult','senior'],
    interests:['projects','sport']
  },
  {
    category:'Bienestar',
    title:'A veces el cansancio es sed',
    tip:'Gran parte del embotamiento de media tarde viene de llevar horas sin beber agua mientras estudias o trabajas.',
    action:'Ten un vaso o botella a mano mañana por la mañana.',
    icon:'drop',
    ages:['teen','young','adult','senior'],
    interests:['sport','study','cooking']
  },
  {
    category:'Calma',
    title:'Sacar el ruido de la cabeza al papel',
    tip:'Cuando una preocupación da vueltas en bucle, escribirla en una frase la vuelve manejable y libera espacio mental.',
    action:'Apunta qué te preocupa hoy y qué parte sí está en tu mano.',
    icon:'book',
    ages:['teen','young','adult','senior'],
    interests:['reading','calm']
  },
  {
    category:'Movimiento',
    title:'Caminar también ordena las ideas',
    tip:'Quince minutos andando sin mirar el teléfono despejan más la mente que media hora intentando concentrarse a la fuerza.',
    action:'Sal a dar una vuelta corta mañana cuando te satures.',
    icon:'run',
    ages:['teen','young','adult','senior'],
    interests:['sport','nature']
  },
  {
    category:'Estudio y memoria',
    title:'Lo que estudias se fija mientras duermes',
    tip:'Quitarle horas al sueño para estudiar a última hora suele salir caro: el cerebro consolida lo aprendido durante el descanso.',
    action:'Prioriza dormir bien hoy para rendir mejor mañana.',
    icon:'study',
    ages:['teen','young'],
    interests:['study']
  },
  {
    category:'Equilibrio',
    title:'Cerrar la jornada de verdad',
    tip:'Tener un pequeño ritual al terminar tus obligaciones —recoger la mesa, ducharte o salir a caminar— separa el deber del descanso.',
    action:'Elige a qué hora vas a desconectar mañana.',
    icon:'sun',
    ages:['young','adult'],
    interests:['projects','calm']
  },
  {
    category:'Perspectiva',
    title:'Cuidar el contacto con los tuyos',
    tip:'A veces un mensaje corto o una llamada de cinco minutos a alguien que quieres cambia por completo el tono de la semana.',
    action:'Piensa en alguien con quien te apetezca hablar mañana.',
    icon:'heart',
    ages:['teen','young','adult','senior'],
    interests:['social']
  }
];

export const WRITING_PROMPTS = [
  '¿Qué rato de hoy te ha dejado buen sabor de boca, aunque haya sido breve?',
  '¿Qué te ha dado más pereza o respeto hoy y cómo lo has llevado?',
  '¿Qué conversación, canción o momento tranquilo te ha acompañado hoy?',
  '¿Qué te gustaría quitarte de la cabeza antes de apagar la luz?',
  'Si un amigo hubiera tenido exactamente tu día de hoy, ¿qué le dirías?',
  '¿En qué momento del día te has sentido más cómodo/a siendo tú?',
  '¿Qué detalle pequeño de hoy no querrías que se te olvidara dentro de un año?',
  '¿Cómo notas el cuerpo esta noche: cansado, inquieto, ligero, tranquilo?',
  '¿Qué cosa sencilla ha salido mejor de lo que esperabas esta mañana?',
  '¿Qué necesitas mañana para que sea un día llevadero y amable?'
];

export const CRISIS_HELPLINES = [
  {
    number:'024',
    tel:'tel:024',
    name:'Línea 024 · Atención a la conducta suicida',
    detail:'Ministerio de Sanidad (España) · Gratuita, confidencial, anónima y abierta las 24 horas.',
    primary:true
  },
  {
    number:'717 003 717',
    tel:'tel:717003717',
    name:'Teléfono de la Esperanza',
    detail:'Escucha y apoyo emocional en momentos de crisis · 24 horas todos los días.',
    primary:true
  },
  {
    number:'900 20 20 10',
    tel:'tel:900202010',
    name:'Fundación ANAR (Menores y jóvenes)',
    detail:'Atención gratuita, confidencial y 24h para jóvenes y adolescentes. No deja rastro en la factura.',
    primary:false,
    youth:true
  },
  {
    number:'112',
    tel:'tel:112',
    name:'Emergencias 112',
    detail:'Atención inmediata de urgencia sanitaria o seguridad · 24 horas.',
    primary:false
  }
];

export const INTERNATIONAL_HELPLINES = [
  {country:'México',name:'Línea de la Vida',number:'800 911 2000'},
  {country:'Argentina',name:'Centro de Asistencia al Suicida',number:'135 / (011) 5275-1135'},
  {country:'Colombia',name:'Línea 106 / Salud Mental',number:'106 / 192'},
  {country:'Chile',name:'Prevención del Suicidio',number:'*4141'},
  {country:'Perú',name:'Línea 113 Salud Mental',number:'113 (opción 5)'},
  {country:'EE. UU. y Canadá',name:'Suicide & Crisis Lifeline',number:'988'}
];

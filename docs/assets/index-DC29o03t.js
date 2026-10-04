(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const O=[{value:1,emoji:"😫",label:"Fatal",color:"#a8442c"},{value:2,emoji:"😕",label:"Flojo",color:"#c2743a"},{value:3,emoji:"😐",label:"Normal",color:"#98938a"},{value:4,emoji:"🙂",label:"Bien",color:"#4e6f52"},{value:5,emoji:"🤩",label:"Genial",color:"#254d32"}],ao=["L","M","X","J","V","S","D"],ls=["","Muy baja","Baja","Normal","Alta","Muy alta"],ds=["","Muy bajo","Bajo","Normal","Alto","Muy alto"],to=["Productivo","Tranquilo","Ajetreado","Social","Solitario","Creativo","Cansado","Motivado","Ansioso","Emocionado","Nostálgico","Aburrido"],Le=[{key:"water",label:"Agua",unit:"vasos",min:0,max:40,step:1,icon:"drop"},{key:"exercise",label:"Ejercicio",unit:"min",min:0,max:1440,step:5,icon:"run"},{key:"reading",label:"Lectura",unit:"min",min:0,max:1440,step:5,icon:"book"},{key:"mindfulness",label:"Pausa consciente",unit:"min",min:0,max:1440,step:5,icon:"leaf"}],so=["bestOfDay","differentToday","generalDay","tomorrow","wordOfDay"],ta=[{id:"teen",min:10,max:18,label:"12 – 18 años",title:"Instituto y descubrimiento",desc:"Pensado para tu ritmo de clases, exámenes, amigos, aficiones y empezar a guardar tu propia historia.",sleepRecommended:8.5,studyRecommended:2,focusLabel:"Horas de estudio",focusQuestion:"¿Cuánto tiempo has dedicado hoy a estudiar, repasar o hacer tareas?",tags:["Clases","Exámenes","Amigos","Deporte","Música","Videojuegos","Tarde libre","Tranquilo","Cansado","Motivado","Creativo","Social"],habits:["Hacer tareas sin mirar el móvil","Leer 15 minutos antes de dormir","Moverme o entrenar un rato","Dejar la mochila lista para mañana","Dejar el móvil fuera de la cama","Salir a tomar el aire"],placeholders:{bestOfDay:"Una risa en clase, una partida con amigos, una canción en el bus, quitarme un examen de encima...",differentToday:"Algo curioso que pasó en el insti, una charla que no esperaba o un plan improvisado...",generalDay:"Cuenta cómo te has sentido hoy de verdad, qué te ha dado rabia, qué te ha hecho gracia...",tomorrow:"Repasar ese tema a tiempo, quedar un rato, acostarme sin quedarme pegado a la pantalla..."}},{id:"young",min:19,max:26,label:"19 – 26 años",title:"Universidad, proyectos y primeros pasos",desc:"Adaptado a años de carrera, primeros trabajos, independencia, amigos y construir tu propio camino.",sleepRecommended:8,studyRecommended:3,focusLabel:"Horas de estudio y foco",focusQuestion:"¿Cuántas horas has dedicado a estudiar, formarte o sacar adelante tus proyectos?",tags:["Productivo","Uni / Trabajo","Amigos","Entreno","Creativo","Tranquilo","Cansado","Motivado","Social","Solitario","Nostálgico","Ajetreado"],habits:["Bloque de estudio sin distracciones","Entrenar o caminar 30 min","Leer 20 páginas","Cocinar algo casero","Sin pantallas 30 min antes de dormir","Ordenar mi mesa al acabar"],placeholders:{bestOfDay:"Un café a media mañana, avanzar de verdad con mis cosas, entrenar, una charla hasta tarde...",differentToday:"Una idea que me vino de repente, alguien con quien coincidí, un cambio de planes...",generalDay:"Escribe para ti cómo ha ido el día, qué tienes en la cabeza y cómo llevas la semana...",tomorrow:"Aprovechar la mañana, quitarme esa tarea pendiente, guardar tiempo para descansar..."}},{id:"adult",min:27,max:49,label:"27 – 49 años",title:"Equilibrio, oficio y vida propia",desc:"Diseñado para compaginar trabajo o proyectos, descanso mental, salud, casa y tiempo de calidad.",sleepRecommended:7.5,studyRecommended:1.5,focusLabel:"Horas de enfoque o aprendizaje",focusQuestion:"¿Cuánto tiempo has dedicado hoy a aprender, leer o avanzar en proyectos propios?",tags:["Enfocado","Tranquilo","Trabajo","Familia","Deporte","Lectura","Cansado","Motivado","Social","Creativo","Desconexión","Ajetreado"],habits:["Cerrar el trabajo a mi hora","Caminar 30 minutos sin prisas","Leer antes de apagar la luz","Estirar espalda y cuello","Beber agua durante la jornada","Media hora sin notificaciones"],placeholders:{bestOfDay:"Una sobremesa tranquila, resolver un asunto pendiente, cerrar el ordenador y desconectar...",differentToday:"Algo que rompió la inercia de la semana o un detalle cotidiano que hoy noté distinto...",generalDay:"Cómo ha ido la jornada, qué energía te queda esta noche y qué necesitas soltar...",tomorrow:"Centrarme en lo prioritario, no llenarme la agenda de más, salir a estirar las piernas..."}},{id:"senior",min:50,max:120,label:"50+ años",title:"Serenidad, bienestar y perspectiva",desc:"Orientado a saborear el ritmo diario, cuidar la salud, los paseos, la lectura y la memoria de lo vivido.",sleepRecommended:7.5,studyRecommended:1,focusLabel:"Tiempo de lectura o dedicación",focusQuestion:"¿Cuánto tiempo has dedicado hoy a la lectura, aprender o cultivar tus aficiones?",tags:["Sereno","Paseo","Lectura","Familia","Naturaleza","Salud","Agradecido","Activo","Creativo","Social","Tranquilo","Nostálgico"],habits:["Paseo matutino al aire libre","Rato de lectura tranquila","Ejercicios de movilidad suave","Llamar o ver a alguien querido","Cuidar el descanso nocturno","Un momento de silencio y calma"],placeholders:{bestOfDay:"La luz de la mañana en el paseo, una buena conversación, avanzar con el libro que estoy leyendo...",differentToday:"Una visita grata, un recuerdo que volvió con nitidez, un paseo por un sitio distinto...",generalDay:"Anota con sosiego cómo ha transcurrido el día y con qué sensación te quedas hoy...",tomorrow:"Salir a caminar temprano, dedicar un rato a la lectura, disfrutar del día sin prisa..."}}],Na=[{id:"reading",label:"Lectura y escritura",icon:"book",habit:"Leer 20 minutos con calma",tag:"Lectura"},{id:"sport",label:"Deporte y movimiento",icon:"run",habit:"Entrenar o moverme 30 min",tag:"Deporte"},{id:"study",label:"Estudio y aprendizaje",icon:"study",habit:"Sesión de estudio sin móvil",tag:"Productivo"},{id:"music",label:"Música, cine y arte",icon:"spark",habit:"Escuchar un álbum o crear algo",tag:"Creativo"},{id:"nature",label:"Naturaleza y aire libre",icon:"leaf",habit:"Salir a caminar al aire libre",tag:"Naturaleza"},{id:"social",label:"Amigos y gente querida",icon:"heart",habit:"Hablar con alguien que quiero",tag:"Social"},{id:"calm",label:"Calma y descanso",icon:"moon",habit:"Apagar pantallas 30 min antes de dormir",tag:"Tranquilo"},{id:"projects",label:"Proyectos personales",icon:"bolt",habit:"Dedicar 30 min a mi propio proyecto",tag:"Enfocado"},{id:"gaming",label:"Tecnología y videojuegos",icon:"target",habit:"Parar a tiempo para descansar la vista",tag:"Desconexión"},{id:"cooking",label:"Cocina y comer bien",icon:"flame",habit:"Preparar una comida casera y tranquila",tag:"Bienestar"}],sa=[{id:"night",label:"Por la noche, al cerrar el día",icon:"moon"},{id:"morning",label:"Por la mañana, con café o té",icon:"sun"},{id:"afternoon",label:"A media tarde, haciendo una pausa",icon:"leaf"},{id:"anytime",label:"Cuando me pide el cuerpo escribir",icon:"pen"}],oa=[{id:"warm",label:"Cálido y cercano",desc:"Como hablar con un buen amigo en calma"},{id:"literary",label:"Pausado y literario",desc:"Con gusto por las palabras y los detalles"},{id:"direct",label:"Directo y práctico",desc:"Al grano, claro y enfocado en tu día a día"},{id:"gentle",label:"Suave y compasivo",desc:"Especialmente amable para días de cansancio"}],Y=[{id:"paper",name:"Papel Clásico",desc:"Cuaderno color crema y tinta estilográfica carbón",colors:["#F3EFE6","#211E17","#B34A2E"],favicon:{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"}},{id:"night",name:"Tinta Nocturna",desc:"Cuero oscuro y trazos cálidos para escribir de noche",colors:["#151412","#EDE6D8","#D96B4E"],favicon:{bg:"#151412",page:"#272420",accent:"#D96B4E",ink:"#EDE6D8"}},{id:"forest",name:"Bosque Sereno",desc:"Encuadernación salvia y papel natural de algodón",colors:["#EBF0EA","#19241D","#356343"],favicon:{bg:"#19241D",page:"#EBF0EA",accent:"#4C8B5E",ink:"#19241D"}},{id:"terracotta",name:"Atardecer Cálido",desc:"Arcilla cocida, papel hueso y acentos ocre",colors:["#F6ECE4","#261B15","#C45534"],favicon:{bg:"#261B15",page:"#F6ECE4",accent:"#C45534",ink:"#261B15"}},{id:"ocean",name:"Azul Atlántico",desc:"Papel marfil frío y tinta azul de cuaderno de viaje",colors:["#EDF2F6","#16222F","#2B5F8C"],favicon:{bg:"#16222F",page:"#EDF2F6",accent:"#2B5F8C",ink:"#16222F"}},{id:"lavender",name:"Bruma Lavanda",desc:"Lino malva suave y tinta ciruela",colors:["#F2EEF6","#221B2B","#6E4B8E"],favicon:{bg:"#221B2B",page:"#F2EEF6",accent:"#6E4B8E",ink:"#221B2B"}}],oo=[{id:"calm",label:"Calma y desahogo",icon:"leaf",desc:"Soltar el ruido del día y quedarme más tranquilo/a."},{id:"focus",label:"Constancia y hábitos",icon:"study",desc:"Cuidar mi estudio, mi descanso y mis rutinas diarias."},{id:"memory",label:"Guardar mi historia",icon:"book",desc:"Que los meses no pasen sin recordar lo que he vivido."},{id:"growth",label:"Conocerme mejor",icon:"spark",desc:"Ver qué cosas me sientan bien y cuáles me quitan energía."}],no=["Leer 20 minutos","Caminar al aire libre","Pausa sin pantallas","Beber 8 vasos de agua","Respirar 5 minutos en calma","Dormir a buena hora","Estirar el cuerpo","Ordenar mi espacio"],Ht=[{text:"No todos los días son buenos, pero siempre queda algún rincón que merece la pena guardar.",author:"Nota de cuaderno",tones:["warm","gentle"],ages:["teen","young","adult","senior"]},{text:"Cómo pasamos los días es, al final, cómo pasamos la vida.",author:"Annie Dillard",tones:["literary","direct"],ages:["young","adult","senior"],interests:["reading","projects"]},{text:"Escribir en un diario es hablar contigo sin tener que fingir que todo va perfecto.",author:"Apunte al margen",tones:["direct","warm"],ages:["teen","young","adult"]},{text:"La prisa casi nunca arregla lo que el descanso sí sabe colocar en su sitio.",author:"Cuaderno de calma",tones:["gentle","warm"],ages:["teen","young","adult","senior"],interests:["calm","nature"]},{text:"Un paso corto dado hoy vale más que diez planes perfectos que se quedan para el lunes.",author:"Bitácora personal",tones:["direct"],ages:["teen","young","adult"],interests:["study","sport","projects"]},{text:"Guardar memoria de las cosas pequeñas es la mejor forma de vivir dos veces.",author:"Tradición de lectura",tones:["literary"],ages:["young","adult","senior"],interests:["reading","music"]},{text:"Sé amable con tu propio ritmo: ni los árboles dan fruto todos los meses del año.",author:"Cuaderno de campo",tones:["gentle","literary"],ages:["teen","young","adult","senior"],interests:["nature","calm"]},{text:"Lo que hoy parece un examen gigante o un problema sin salida, dentro de un mes será solo una página pasada.",author:"Nota para días revueltos",tones:["warm","gentle"],ages:["teen","young"],interests:["study","gaming"]}],Nt=[{word:"Ataraxia",origin:"Griego clásico",meaning:"Tranquilidad de ánimo que nace cuando dejamos de pelear contra lo que no depende de nosotros.",prompt:"¿Qué preocupación podrías dejar en pausa por esta noche?"},{word:"Meraki",origin:"Griego moderno",meaning:"Hacer algo poniendo el corazón, el cuidado y una parte de ti en ello.",prompt:"¿En qué detalle pequeño de hoy has puesto ganas o cariño?"},{word:"Kintsugi",origin:"Japonés",meaning:"Oficio de reparar la cerámica rota con barniz de oro, sin esconder las grietas.",prompt:"¿Qué tropiezo reciente te ha servido para aprender algo útil?"},{word:"Komorebi",origin:"Japonés",meaning:"La luz del sol cuando se cuela entre las hojas de los árboles.",prompt:"¿Qué imagen o rincón bonito has visto hoy al pasar?"},{word:"Resiliencia",origin:"Latín",meaning:"La capacidad de encajar un golpe, recuperar el aliento y seguir adelante a tu paso.",prompt:"¿Cómo has tirado hacia delante hoy cuando algo se hacía cuesta arriba?"},{word:"Serendipia",origin:"Castellano",meaning:"Eso bueno que te encuentras por casualidad mientras ibas buscando otra cosa.",prompt:"¿Qué momento no planeado ha merecido la pena hoy?"},{word:"Ubuntu",origin:"Zulú · Xhosa",meaning:"La idea de que somos quienes somos gracias también a quienes nos rodean.",prompt:"¿Quién te ha hecho el día un poco más fácil o agradable hoy?"},{word:"Ikigai",origin:"Japonés",meaning:"Aquello que te da un motivo concreto para levantarte por la mañana.",prompt:"¿Qué plan o proyecto te apetece de verdad hacer pronto?"},{word:"Wabi-sabi",origin:"Japonés",meaning:"Gustar de las cosas sencillas, imperfectas y gastadas por la vida real.",prompt:"¿En qué cosa imperfecta de hoy puedes dejar de exigirte tanto?"},{word:"Apapachar",origin:"Náhuatl",meaning:"Dar abrigo y consuelo de verdad; cuidar con cercanía.",prompt:"¿Qué necesitas hoy para descansar a gusto?"},{word:"Sosiego",origin:"Castellano",meaning:"Ese silencio tranquilo que queda cuando por fin se acaba la prisa del día.",prompt:"¿En qué momento del día has notado más calma hoy?"},{word:"Epifanía",origin:"Griego",meaning:"Caer en la cuenta de golpe de algo que llevabas tiempo viendo sin entender.",prompt:"¿De qué cosa te has dado cuenta hoy?"},{word:"Bonhomía",origin:"Castellano",meaning:"Trato llano, honesto y amable que no necesita aparentar nada.",prompt:"¿Qué gesto sencillo de amabilidad has visto o tenido hoy?"},{word:"Nefelibata",origin:"Castellano",meaning:"Persona que de vez en cuando camina por las nubes y mira el mundo a su manera.",prompt:"¿En qué se te ha ido el santo al cielo hoy?"},{word:"Templanza",origin:"Latín",meaning:"Guardar el equilibrio y no perder los papeles cuando alrededor hay ruido.",prompt:"¿En qué situación de hoy has sabido mantener la calma?"},{word:"Alba",origin:"Latín",meaning:"La primera claridad de la mañana antes de que asome el sol.",prompt:"¿Cómo te gustaría empezar la mañana de mañana?"},{word:"Saudade",origin:"Portugués",meaning:"Echar de menos con cariño a alguien o a una época en la que fuiste feliz.",prompt:"¿Qué buen recuerdo te ha venido hoy a la cabeza?"},{word:"Lagom",origin:"Sueco",meaning:"Ni de más ni de menos: saber cuándo algo es ya suficiente.",prompt:"¿Con qué cosa de hoy puedes decir tranquilo/a «por hoy ya está bien»?"},{word:"Sisu",origin:"Finés",meaning:"Empuje tranquilo para terminar lo que empezaste aunque estés cansado.",prompt:"¿Qué cosa has sacado adelante hoy aunque te diera pereza?"},{word:"Hygge",origin:"Danés",meaning:"Estar a gusto en lo cotidiano: una charla tranquila, una manta, un rato en casa.",prompt:"¿Qué momento sencillo del día te ha sentado mejor?"},{word:"Querencia",origin:"Castellano",meaning:"El sitio o la gente a la que uno siempre tiene ganas de volver.",prompt:"¿Dónde o con quién te sientes más cómodo/a últimamente?"},{word:"Claridad",origin:"Latín",meaning:"Distinguir lo que de verdad importa de lo que solo hace ruido.",prompt:"Si te quedas con una sola cosa de hoy, ¿cuál eliges?"},{word:"Amparo",origin:"Latín",meaning:"Tener un lugar o una persona donde resguardarse cuando el día se tuerce.",prompt:"¿Qué te reconforta cuando tienes un día torcido?"},{word:"Gratitud",origin:"Latín",meaning:"No dar por supuesto lo bueno que tenemos cerca cada día.",prompt:"¿Qué cosa normal de tu rutina agradecerías si mañana faltara?"}],Ot=[{category:"Autocompasión",title:"No te hables peor que a un amigo",tip:"Cuando estás cansado o algo sale regular, es fácil machacarse. Prueba a decirte exactamente lo que le dirías a alguien a quien aprecias.",action:"Anota algo que hoy hayas hecho lo mejor que podías.",icon:"heart",ages:["teen","young","adult","senior"],interests:["calm","social"]},{category:"Descanso",title:"Bajar el brillo antes de acostarte",tip:"Dejar el móvil o las pantallas un rato antes de meterte en la cama ayuda a que la cabeza deje de saltar de un tema a otro.",action:"Pon la alarma y deja el teléfono lejos de la almohada.",icon:"moon",ages:["teen","young","adult","senior"],interests:["calm","gaming"]},{category:"Calma",title:"Soltar el aire más despacio",tip:"Cuando notes prisa o nudo en el estómago, toma aire contando 4 y suéltalo despacio contando 6. El cuerpo entiende enseguida el mensaje.",action:"Respira hondo tres veces antes de cerrar el cuaderno.",icon:"leaf",ages:["teen","young","adult","senior"],interests:["calm","nature"]},{category:"Enfoque",title:"La regla de los primeros cinco minutos",tip:"Casi siempre cuesta más ponerse que hacerlo. Ponte solo 5 minutos con eso que estás posponiendo; luego decides si sigues.",action:"Deja escrita una sola tarea concreta para mañana.",icon:"study",ages:["teen","young","adult"],interests:["study","projects"]},{category:"Escritura",title:"Aquí nadie te va a poner nota",tip:"No hace falta escribir bonito ni llenar la página. Tres líneas sinceras sobre lo que te ha pasado hoy bastan.",action:"Escribe lo primero que te salga sin borrar.",icon:"pen",ages:["teen","young","adult","senior"],interests:["reading"]},{category:"Hábitos",title:"Un día suelto no rompe nada",tip:"Si ayer no pudiste cumplir un hábito, no pasa nada. Lo que cuenta es retomarlo hoy con naturalidad y sin culpa.",action:"Empieza por el hábito más fácil de tu lista.",icon:"flame",ages:["teen","young","adult","senior"],interests:["projects","sport"]},{category:"Bienestar",title:"A veces el cansancio es sed",tip:"Gran parte del embotamiento de media tarde viene de llevar horas sin beber agua mientras estudias o trabajas.",action:"Ten un vaso o botella a mano mañana por la mañana.",icon:"drop",ages:["teen","young","adult","senior"],interests:["sport","study","cooking"]},{category:"Calma",title:"Sacar el ruido de la cabeza al papel",tip:"Cuando una preocupación da vueltas en bucle, escribirla en una frase la vuelve manejable y libera espacio mental.",action:"Apunta qué te preocupa hoy y qué parte sí está en tu mano.",icon:"book",ages:["teen","young","adult","senior"],interests:["reading","calm"]},{category:"Movimiento",title:"Caminar también ordena las ideas",tip:"Quince minutos andando sin mirar el teléfono despejan más la mente que media hora intentando concentrarse a la fuerza.",action:"Sal a dar una vuelta corta mañana cuando te satures.",icon:"run",ages:["teen","young","adult","senior"],interests:["sport","nature"]},{category:"Estudio y memoria",title:"Lo que estudias se fija mientras duermes",tip:"Quitarle horas al sueño para estudiar a última hora suele salir caro: el cerebro consolida lo aprendido durante el descanso.",action:"Prioriza dormir bien hoy para rendir mejor mañana.",icon:"study",ages:["teen","young"],interests:["study"]},{category:"Equilibrio",title:"Cerrar la jornada de verdad",tip:"Tener un pequeño ritual al terminar tus obligaciones —recoger la mesa, ducharte o salir a caminar— separa el deber del descanso.",action:"Elige a qué hora vas a desconectar mañana.",icon:"sun",ages:["young","adult"],interests:["projects","calm"]},{category:"Perspectiva",title:"Cuidar el contacto con los tuyos",tip:"A veces un mensaje corto o una llamada de cinco minutos a alguien que quieres cambia por completo el tono de la semana.",action:"Piensa en alguien con quien te apetezca hablar mañana.",icon:"heart",ages:["teen","young","adult","senior"],interests:["social"]}],Bt=["¿Qué rato de hoy te ha dejado buen sabor de boca, aunque haya sido breve?","¿Qué te ha dado más pereza o respeto hoy y cómo lo has llevado?","¿Qué conversación, canción o momento tranquilo te ha acompañado hoy?","¿Qué te gustaría quitarte de la cabeza antes de apagar la luz?","Si un amigo hubiera tenido exactamente tu día de hoy, ¿qué le dirías?","¿En qué momento del día te has sentido más cómodo/a siendo tú?","¿Qué detalle pequeño de hoy no querrías que se te olvidara dentro de un año?","¿Cómo notas el cuerpo esta noche: cansado, inquieto, ligero, tranquilo?","¿Qué cosa sencilla ha salido mejor de lo que esperabas esta mañana?","¿Qué necesitas mañana para que sea un día llevadero y amable?"],ro=[{number:"024",tel:"tel:024",name:"Línea 024 · Atención a la conducta suicida",detail:"Ministerio de Sanidad (España) · Gratuita, confidencial, anónima y abierta las 24 horas.",primary:!0},{number:"717 003 717",tel:"tel:717003717",name:"Teléfono de la Esperanza",detail:"Escucha y apoyo emocional en momentos de crisis · 24 horas todos los días.",primary:!0},{number:"900 20 20 10",tel:"tel:900202010",name:"Fundación ANAR (Menores y jóvenes)",detail:"Atención gratuita, confidencial y 24h para jóvenes y adolescentes. No deja rastro en la factura.",primary:!1,youth:!0},{number:"112",tel:"tel:112",name:"Emergencias 112",detail:"Atención inmediata de urgencia sanitaria o seguridad · 24 horas.",primary:!1}];function g(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Ce(e){return new Date(`${e}T12:00:00`)}function E(e,a){const t=Ce(e);return t.setDate(t.getDate()+a),g(t)}function Q(e,a){return Math.round((Date.UTC(...a.split("-").map((t,s)=>+t-(s===1?1:0)))-Date.UTC(...e.split("-").map((t,s)=>+t-(s===1?1:0))))/864e5)}function da(e,a){const t=[e,...a.map(s=>s.date)].sort()[0];return Q(t,e)+1}function A(e,a={weekday:"long",day:"numeric",month:"long",year:"numeric"}){return Ce(e).toLocaleDateString("es-ES",a)}function $e(e){const a=Ce(e).getDay();return E(e,-((a+6)%7))}function cs(e){const a=Ce(e);return[g(new Date(a.getFullYear(),a.getMonth(),1)),g(new Date(a.getFullYear(),a.getMonth()+1,0))]}function Te(e,a){const t=Ce(e);return g(new Date(t.getFullYear(),t.getMonth()+a,1))}function io(e){const[a,t]=cs(e),s=E(a,-((Ce(a).getDay()+6)%7)),o=Math.ceil((Q(s,t)+1)/7)*7;return Array.from({length:o},(n,r)=>({date:E(s,r),inMonth:E(s,r).slice(0,7)===e.slice(0,7)}))}const q=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e);function Z(e){const a=e.filter(t=>Number.isFinite(t));return a.length?a.reduce((t,s)=>t+s,0)/a.length:0}function te(e,a,t){return e.filter(s=>s.date>=a&&s.date<=t).sort((s,o)=>s.date.localeCompare(o.date))}function us(e){let a=0,t=0,s;for(const o of[...new Set(e.map(n=>n.date))].sort())t=s&&Q(s,o)===1?t+1:1,a=Math.max(a,t),s=o;return a}function La(e,a=g()){const t=new Set(e.map(n=>n.date));let s=t.has(a)?a:E(a,-1),o=0;for(;t.has(s);)o++,s=E(s,-1);return o}function pe(e){const a=[e.bestOfDay,e.differentToday,e.generalDay,e.tomorrow,...e.gratitude||[]].join(" ").trim();return a?a.split(/\s+/).length:0}function lo(e){return e.reduce((a,t)=>a+pe(t),0)}function Ft(e,a){return e.filter(t=>t.habits?.[a]).length}function ps(e,a){return[...new Set(e.filter(t=>t.habits?.[a]).map(t=>t.date))].sort()}function ms(e,a){const t=ps(e,a);let s=0,o=0,n;for(const r of t)o=n&&Q(n,r)===1?o+1:1,s=Math.max(s,o),n=r;return s}function Oa(e,a,t=g()){const s=new Set(ps(e,a));if(!s.size)return 0;let o=s.has(t)?t:E(t,-1),n=0;for(;s.has(o);)n++,o=E(o,-1);return n}function hs(e,a,t=28,s=g()){const o=E(s,1-t),n=e.filter(c=>c.habits?.[a]&&c.date>=o&&c.date<=s).length,r=e.filter(c=>c.date>=o&&c.date<=s).length,l=Math.min(t,Q(o,s)+1);return{done:n,tracked:r,window:l,pct:l?Math.round(n/l*100):0}}function co(e,a,t=28,s=g(),o=g()){const n=Array.from({length:t},(l,c)=>E(s,c-t+1)),r=new Map(e.map(l=>[l.date,l]));return{dates:n,rows:a.map(l=>({habit:l,cells:n.map(c=>({date:c,done:!!r.get(c)?.habits?.[l.id],future:c>o,recorded:r.has(c)}))}))}}function Pt(e){const a=new Map;for(const t of e)for(const s of t.tags||[])a.set(s,(a.get(s)||0)+1);return[...a.entries()].sort((t,s)=>s[1]-t[1])}function xe(e){const a=[...e].sort((s,o)=>s.date.localeCompare(o.date)),t=s=>a.reduce((o,n)=>!o||n[s]>o[s]?n:o,null);return{count:e.length,mood:Z(e.map(s=>s.mood)),energy:Z(e.map(s=>s.energy)),stress:Z(e.map(s=>s.stress)),sleep:Z(e.map(s=>s.sleepHours)),study:Z(e.map(s=>s.studyHours)),totalSleep:e.reduce((s,o)=>s+o.sleepHours,0),totalStudy:e.reduce((s,o)=>s+o.studyHours,0),words:lo(e),best:t("mood"),worst:a.reduce((s,o)=>!s||o.mood<s.mood?o:s,null),mostStudy:t("studyHours"),mostSleep:t("sleepHours"),maxStreak:us(e),moods:[1,2,3,4,5].map(s=>e.filter(o=>o.mood===s).length),counters:Object.fromEntries(Le.map(s=>[s.key,{total:e.reduce((o,n)=>o+(n.counters?.[s.key]||0),0),average:Z(e.map(o=>o.counters?.[s.key]))}]))}}function gs(e){return e<6?"Has dormido poco.":e<7?"Una cantidad algo baja.":e<=9?"Un descanso razonable.":"Has dormido bastante."}function uo(e){return e===0?"Hoy no has dedicado tiempo al estudio.":e<1?"Has hecho un poco de estudio.":e<3?"Has tenido una sesión de estudio considerable.":e<5?"Has dedicado bastante tiempo.":"Ha sido un día de estudio intenso."}function Ba(e,a){switch(e){case"water":return a===0?"Sin registrar agua hoy.":a<4?"Poca agua registrada.":a<8?"Una hidratación razonable.":"Buen nivel de hidratación.";case"exercise":return a===0?"Sin ejercicio registrado hoy.":a<20?"Un poco de movimiento.":a<60?"Una sesión de ejercicio notable.":"Un día muy activo.";case"reading":return a===0?"Sin lectura registrada hoy.":a<20?"Unas páginas para hoy.":a<60?"Una buena sesión de lectura.":"Un día de mucha lectura.";default:return a===0?"Sin pausa consciente registrada.":a<10?"Un momento de pausa.":a<30?"Una práctica considerable.":"Una práctica muy constante hoy."}}const po=["","Hoy ha sido un día difícil.","Hoy ha sido un día flojo.","Hoy ha sido un día normal.","Hoy ha sido un día bueno.","Hoy ha sido un día genial."];function mo(e){const a=[po[e.mood],`Has dormido ${q(e.sleepHours)} horas y has dedicado ${q(e.studyHours)} horas al estudio.`,gs(e.sleepHours),uo(e.studyHours)];e.energy&&a.push(`Tu energía se ha sentido ${["","muy baja","baja","normal","alta","muy alta"][e.energy].toLowerCase()}.`),e.stress&&a.push(`El estrés ha sido ${["","muy bajo","bajo","normal","alto","muy alto"][e.stress].toLowerCase()}.`);const t=Object.values(e.habits||{}).filter(Boolean).length;t&&a.push(`Has cumplido ${t} de tus hábitos de hoy.`);const s=e.counters?.water||0;return s>=6&&a.push(`Además, has bebido ${s} vasos de agua.`),a.join(" ")}function ho(e,a=!1){if(!e.count)return"Aún no hay entradas en este período. Cada día que escribas irá dando forma a tu historia.";const t=a?`Durante este mes has registrado ${e.count} ${e.count===1?"día":"días"}. Tu valoración media ha sido de ${q(e.mood)}/5. Has estudiado un total de ${q(e.totalStudy)} horas y tu media de sueño ha sido de ${q(e.sleep)} horas.`:`Esta semana has registrado ${e.count} ${e.count===1?"día":"días"}. Tu estado medio ha sido ${["","difícil","flojo","normal","bueno","genial"][Math.round(e.mood)]}. Has dormido una media de ${q(e.sleep)} horas y estudiado ${q(e.study)} horas por día registrado.`,s=[];return Number.isFinite(e.energy)&&s.push(`Tu energía media ha sido ${q(e.energy)}/5`),Number.isFinite(e.stress)&&s.push(`el estrés medio ${q(e.stress)}/5`),e.words&&s.push(`has escrito ${q(e.words)} palabras`),s.length?`${t} ${s.join(", ")}.`:t}function go(e,a=g()){const t=te(e,E(a,-6),a),s=te(e,E(a,-13),E(a,-7)),o=[];if(t.length>=3&&s.length>=3){const p=xe(t),b=xe(s);p.sleep<b.sleep-.3&&o.push("Tu cantidad media de sueño ha disminuido respecto a los 7 días anteriores."),p.sleep>b.sleep+.3&&o.push("En tus registros, has dormido más que en los 7 días anteriores."),p.study>b.study+.3&&o.push("Has aumentado tus horas medias de estudio respecto a los 7 días anteriores."),p.study<b.study-.3&&o.push("Tu tiempo medio de estudio ha disminuido respecto a los 7 días anteriores."),p.mood>b.mood+.2&&o.push("Tu valoración diaria ha mejorado recientemente."),p.mood<b.mood-.2&&o.push("Tu valoración diaria ha bajado respecto a los 7 días anteriores."),Number.isFinite(p.energy)&&Number.isFinite(b.energy)&&(p.energy>b.energy+.2&&o.push("Se observa una tendencia al alza en tu energía."),p.energy<b.energy-.2&&o.push("Tu energía media ha bajado respecto a la semana anterior.")),Number.isFinite(p.stress)&&Number.isFinite(b.stress)&&p.stress>b.stress+.2&&o.push("Tu estrés medio ha subido respecto a la semana anterior. Quizá convenga cuidar tus ratos de pausa."),o.length||o.push("Tus medias se han mantenido bastante estables respecto a los 7 días anteriores.")}const n=te(e,E(a,-29),a),r=n.filter(p=>p.sleepHours>7),l=n.filter(p=>p.sleepHours<=7);r.length>=3&&l.length>=3&&Z(r.map(p=>p.mood))>Z(l.map(p=>p.mood))+.3&&o.push("En tus registros de los últimos 30 días, dormir más de 7 horas parece coincidir con una valoración más alta. Es una relación entre registros, no una causa demostrada.");const c=n.filter(p=>(p.counters?.exercise||0)>=20),u=n.filter(p=>(p.counters?.exercise||0)<20);return c.length>=3&&u.length>=3&&Z(c.map(p=>p.mood))>Z(u.map(p=>p.mood))+.3&&o.push("En tus registros, los días con 20 minutos o más de ejercicio suelen tener una valoración algo más alta. Parece coincidir, sin más."),o}const Oe=29.530588853,bo="2000-01-06",zt=2.5,Ca=[{id:"shore",label:"A la orilla",desc:"Muy cerca: vuelve en cuanto suba la marea.",min:2,max:7,chance:.94,miles:9,reach:"se ve desde la arena"},{id:"breeze",label:"Brisa costera",desc:"Un par de semanas dando tumbos por la bahía.",min:9,max:28,chance:.8,miles:17,reach:"cruza la bahía"},{id:"current",label:"Corriente del norte",desc:"Semanas de travesía; ya no se ve desde la playa.",min:28,max:80,chance:.63,miles:34,reach:"dobló el cabo"},{id:"deep",label:"Alta mar",desc:"Meses lejos. Puede que no vuelva nunca.",min:80,max:240,chance:.42,miles:58,reach:"más allá del mapa"}],fo=["la corriente del Golfo","el Noroeste","los Alisios","la deriva de Levante","el canal viejo","la corriente fría","el remolino de poniente","la resaca del faro"],Da=[{id:"amber",name:"ámbar",hex:"#B4762E"},{id:"green",name:"verde botella",hex:"#3E6B4F"},{id:"blue",name:"azul cobalto",hex:"#3B5F86"},{id:"smoke",name:"humo",hex:"#6E6257"},{id:"rose",name:"rosa viejo",hex:"#A65B4E"},{id:"clear",name:"cristal",hex:"#7F8E93"}],Gt={near:["aún se divisa desde la orilla","rebota en la rompiente, perezosa","a un par de brazas de la arena"],mid:["cruza la bahía con la marea","dobló el cabo al atardecer","navega entre barcos que no se detienen","persigue una bandada de gaviotas"],far:["en aguas que ya no consultas","se perdió de vista hace días","anda más lejos que tu última carta","viaja con los barcos lentos"],home:["la rompiente la devolvió a tu playa","apareció entre las algas al amanecer","el mar te la dejó en los pies","volvió, con la arena pegada al cristal"],lost:["se hundió despacio, sin testigos","el mar se la quedó para siempre","se fue a pique antes de tocar tierra","nadie la vio llegar a ninguna orilla"]};function ct(e=""){let a=2166136261;const t=String(e);for(let s=0;s<t.length;s++)a^=t.charCodeAt(s),a=Math.imul(a,16777619);return a>>>0}function bs(e=0){let a=e>>>0;return()=>{a=a+1831565813>>>0;let t=Math.imul(a^a>>>15,1|a);return t=t+Math.imul(t^t>>>7,61|t)^t>>>0,((t^t>>>14)>>>0)/4294967296}}const Je=(e,a)=>(e%a+a)%a,It=(e,a)=>e[Math.floor(a()*e.length)%e.length],vo=["luna nueva","luna creciente","cuarto creciente","gibosa creciente","luna llena","gibosa menguante","cuarto menguante","luna menguante"],Ie=e=>Math.min(1,Math.max(0,e));function yo(e=g()){return Je(Q(bo,e)+.765,Oe)}function Re(e=g()){const a=yo(e),t=Oe/2,s=Math.min(Je(a,t),t-Je(a,t)),o=a<t;let n="swell",r="Marea en movimiento",l=.6;s<=zt?(n="spring",r="Marea viva",l=1):Math.abs(Je(a,t)-t/2)<=zt?(n="neap",r="Marea muerta",l=.28):o?(n="rising",r="Marea creciente",l=.7):(n="falling",r="Marea menguante",l=.5);const c=Ie((1-Math.cos(2*Math.PI*a/Oe))/2),u=vo[Math.floor(Je(a+Oe/16,Oe)/(Oe/8))%8];return{age:a,key:n,name:r,strength:l,rising:o,illum:c,moon:Math.round(c*100)/100,phase:u}}function $o(e=g()){return Re(e).key==="spring"}function wo(e,a=16){for(let t=0;t<=a;t++){const s=E(e,t);if($o(s))return s}return e}const fa=[{id:"calm",label:"mar en calma",short:"calma",desc:"Agua plana: la botella avanza despacio, pero no se pierde de vista.",speed:.82,push:0,water:.34,rough:0},{id:"haze",label:"bruma",short:"bruma",desc:"Niebla espesa: se pierde la referencia de la orilla algún día más.",speed:.92,push:1,water:.3,rough:.25},{id:"wind",label:"viento a favor",short:"viento",desc:"Sopla hacia fuera y hacia casa: la travesía se acelera.",speed:1.24,push:0,water:.58,rough:.5},{id:"rain",label:"lluvia",short:"lluvia",desc:"Llueve sobre el agua: corrientes revueltas, llegadas inciertas.",speed:1.05,push:1,water:.66,rough:.62},{id:"gale",label:"temporal",short:"temporal",desc:"Con este mar no entra nada en la bahía: la botella espera fuera.",speed:1.42,push:2,water:.92,rough:1}],Xa=[{id:"levante",label:"levante"},{id:"poniente",label:"poniente"},{id:"noroeste",label:"el noroeste"},{id:"gallego",label:"el gallego"},{id:"suroeste",label:"suroeste"},{id:"mistral",label:"el mistral"},{id:"libeccio",label:"libeccio"},{id:"gregal",label:"gregal"}],Rt=new Set(["levante","el mistral","gregal","suroeste"]);function De(e=g()){const a=bs(ct(`parte|${e}`)),t=a(),s=a(),o=a(),n=Math.min(fa.length-1,Math.floor(Math.pow(t,1.7)*fa.length)),r=fa[n],l=Xa[Math.floor(s*Xa.length)%Xa.length],c=Math.round(4+o*12+r.rough*38),u=Re(e);return{date:e,weather:r,wind:{...l,kmh:c,offshore:Rt.has(l.id)},level:Ie(r.water*.7+u.strength*.42),rough:Ie(r.rough*.72+(u.strength-.5)*.4),speed:r.speed,push:Rt.has(l.id)?r.push+1:r.push,tide:u}}const Ut=[{id:"port",at:0,label:"el puerto",note:"todavía se oye la playa"},{id:"buoy",at:.26,label:"la boya",note:"doblado el canal"},{id:"cabo",at:.56,label:"el cabo",note:"ya no se ve tierra"},{id:"rompiente",at:.86,label:"la rompiente",note:"a un pulso de la arena"}];function So(e,a=g()){const t=fe(e,a),s=t.fate!=="drifting";let o=-1;const n=Ut.map(r=>{const l=s||t.pct>=r.at;return l&&(o=Ut.findIndex(c=>c.id===r.id)),{...r,reached:l}});return{list:n,current:Math.max(0,o),next:n.find(r=>!r.reached)||null,pct:t.pct,fate:t.fate}}function xo(e){return Ie(.05+Ie(e)*.86)}function Fa(e){return e?e.status==="returned"?e.returnedAt||e.arriveOn||null:e.status==="lost"||e.returns===!1?null:e.arriveOn||null:null}function ut({today:e=g(),bottles:a=[],days:t=14}={}){const s=[];for(let o=0;o<t;o++){const n=E(e,o),r=De(n),l=a.filter(u=>Fa(u)===n),c=a.filter(u=>u.status==="drifting"&&u.returns===!1&&u.lostOn===n);s.push({...r,date:n,day:o,arrivalCount:l.length,arrivalIds:l.map(u=>u.id),sinkingIds:c.map(u=>u.id),isToday:o===0,marker:o===0?"hoy":o===1?"mañana":null})}return s}function fs(e=[],a=g()){let t=null;for(const s of e){if(ua(s,a)!=="drifting")continue;const o=Fa(s);!o||o<a||(!t||o<t.date)&&(t={date:o,bottle:s,daysLeft:Q(a,o)})}return t}function ca(e="breeze"){return Ca.find(a=>a.id===e)||Ca.find(a=>a.id==="breeze")}function ko({text:e="",castAt:a=g(),sea:t="breeze",id:s=""}={}){const o=ca(t),n=bs(ct(`${a}|${o.id}|${s}|${String(e).trim().slice(0,220)}`)),r=n(),l=n(),c=n(),u=n(),p=De(a),b=Math.max(1,Math.round(o.min+r*(o.max-o.min))),$=l<o.chance,M=Math.max(4,Math.round(o.miles*(.7+c*.6)*p.speed)),f=E(a,b),C=p.push>0?E(f,p.push):f,U=$?wo(C):f,P=Math.max(3,Math.round(b*.22));return{sea:o.id,returns:$,speed:M,driftDays:Math.max(1,Q(a,U)),arriveOn:U,lostOn:$?null:E(a,b+P),current:It(fo,n),glass:It(Da,n),mottoSeed:Math.floor(u*1e6),weather:p.weather.id,wind:p.wind.label,windSpeed:p.wind.kmh,push:p.push}}function vs(e,a=g()){return Math.max(0,Q(e.castAt,a))}function ua(e,a=g()){return e.status&&e.status!=="drifting"?e.status:e.returns?a>=(e.arriveOn||e.castAt)?"returned":"drifting":e.lostOn&&a>=e.lostOn?"lost":"drifting"}function qo(e,a=g()){if(!e||typeof e!="object")return e;const t=ua(e,a);if(t===e.status)return e;const s=new Date().toISOString();return t==="returned"?{...e,status:"returned",returnedAt:e.arriveOn||g(),seen:!1,updatedAt:s}:t==="lost"?{...e,status:"lost",lostAt:e.lostOn||g(),seen:!1,updatedAt:s}:e}function Mo(e){return!e.returns&&e.lostOn?e.lostOn:e.arriveOn||e.castAt}function fe(e,a=g()){const t=Mo(e),s=Math.max(1,Q(e.castAt,t)),o=vs(e,a),n=ua(e,a),r=n==="drifting"?Ie(o/s):1,l=Math.round(o*(e.speed||10)),c=n==="drifting"&&!e.returns?null:Math.max(0,s-o)*(e.speed||10);return{fate:n,pct:r,atSea:o,total:s,horizon:t,miles:l,milesHome:c===null?null:Math.round(c),label:n==="drifting"?`día ${o} de ${s}`:n==="returned"?"de vuelta a casa":"a pique",phase:n==="returned"?"home":n==="lost"?"lost":r<.18?"near":r<.62?"mid":"far"}}function va(e,a=g()){const{phase:t}=fe(e,a),s=Gt[t]||Gt.mid,o=ct(`${e.id||""}|${e.mottoSeed||0}|${t}`);return s[o%s.length]}function pt(e,a=g()){const t=fe(e,a);if(t.fate==="returned")return"en la orilla";if(t.fate==="lost")return"perdida";const s=Math.max(0,t.total-t.atSea);return s<=1?"casi llega":s<=7?`${s} días para la orilla`:`${s} días de travesía`}function ve(e=[],a=g()){const t={drifting:[],returned:[],lost:[],kept:[]};for(const s of e)t[ua(s,a)]?.push(s);t.kept=e.filter(s=>s.kept),t.drifting.sort((s,o)=>s.castAt.localeCompare(o.castAt));for(const s of["returned","lost"])t[s].sort((o,n)=>String(n.returnedAt||n.lostAt||n.castAt).localeCompare(String(o.returnedAt||o.lostAt||o.castAt)));return t.returned.sort((s,o)=>(s.seen===!0)-(o.seen===!0)||String(o.returnedAt||"").localeCompare(String(s.returnedAt||""))),t.kept.sort((s,o)=>String(o.keptOn||"").localeCompare(String(s.keptOn||""))),t}function pa(e=[],a=g()){return e.filter(t=>ua(t,a)==="returned")}function Eo(e=[],a=g()){const t=ve(e,a),s=e.reduce((l,c)=>l+ys(c.text),0),o=e.reduce((l,c)=>{const u=Math.round(vs(c,a)*(c.speed||10));return u>(l?.miles||0)?{miles:u,bottle:c}:l},null),n=e.filter(l=>l.status!=="drifting"),r=n.length?Math.round(n.reduce((l,c)=>l+Math.max(1,Q(c.castAt,c.returnedAt||c.lostAt||c.castAt)),0)/n.length):0;return{total:e.length,drifting:t.drifting.length,returned:t.returned.length,lost:t.lost.length,kept:t.kept.length,words:s,avgDays:r,farthest:o||{miles:0,bottle:null}}}function ys(e=""){const a=String(e||"").trim();return a?a.split(/\s+/).length:0}function Pa(e=g()){const a=Re(e);return a.key==="spring"?"Marea viva: hoy el mar devuelve lo que guardó.":a.key==="neap"?"Marea muerta: el agua apenas se mueve, ten paciencia.":a.key==="rising"?"La marea sube: algo podría acercarse a la orilla.":"La marea baja: buen momento para escribir y soltar."}const mt="diario.entries.v1",ht="diario.habits.v1",gt="diario.setup.v1",za="diario.thoughts.v1",V={completed:!1,name:"",age:null,ageGroup:"young",interests:[],ritual:"night",tone:"warm",savedQuotes:[],purpose:"calm",motto:"Un día a la vez.",theme:"paper",sleepGoal:7.5,studyGoal:2,waterGoal:8,showDailyWord:!0,showDailyTip:!0,crisisAlertsEnabled:!0,trustedContactName:"",trustedContactPhone:"",sidebarCollapsed:!1,updatedAt:null};function Ga(e,a="young"){const t=Number(e);return!Number.isFinite(t)||t<=0?a:t<=18?"teen":t<=26?"young":t<=49?"adult":"senior"}function we(e,a){if(typeof e!="string")throw new Error(`${a} debe ser texto.`);if(e.length>2e4)throw new Error(`${a} debe tener como máximo 20.000 caracteres.`);return e}function Ao(e,a){const t=Le.find(o=>o.key===a);if(e==null||e==="")return 0;const s=Number(e);if(!Number.isFinite(s)||s<t.min||s>t.max)throw new Error(`${t.label} debe estar entre ${t.min} y ${t.max}.`);return Math.round(s*10)/10}function Wt(e){if(e==null||e==="")return null;const a=Number(e);if(!Number.isInteger(a)||a<1||a>5)throw new Error("Las escalas van de 1 a 5.");return a}function Ia(e){if(!e||typeof e!="object"||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(new Date(e.date+"T12:00:00").getTime())||g(new Date(e.date+"T12:00:00"))!==e.date)throw new Error("Hay una fecha no válida.");if(e.date>g())throw new Error("No se pueden registrar días futuros.");if(!Number.isInteger(e.mood)||e.mood<1||e.mood>5)throw new Error("Selecciona cómo te ha ido el día.");for(const r of["sleepHours","studyHours"]){const l=e[r];if(typeof l!="number"||!Number.isFinite(l)||l<0||l>24)throw new Error("Las horas deben estar entre 0 y 24.")}const a=Object.fromEntries(so.map(r=>[r,we(e[r]??"",r)]));if(!a.generalDay.trim())throw new Error("Escribe cómo ha ido tu día en general.");const t=we(e.capsule??"","La cápsula del día").slice(0,300);if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(r=>typeof r!="string"||r.length>2e4))throw new Error("El agradecimiento debe tener tres campos de texto.");if(e.goals!==void 0&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(r=>typeof r!="string"||r.length>500)))throw new Error("La lista de objetivos no es válida.");const s=Array.isArray(e.tags)?e.tags:[];if(s.length>20)throw new Error("Puedes elegir como máximo 20 etiquetas.");for(const r of s)if(typeof r!="string"||!r.trim()||r.length>40)throw new Error("Hay una etiqueta no válida.");const o={};for(const r of Le)o[r.key]=Ao(e.counters?.[r.key],r.key);const n={};if(e.habits!==void 0&&(typeof e.habits!="object"||e.habits===null||Array.isArray(e.habits)))throw new Error("Los hábitos no son válidos.");for(const[r,l]of Object.entries(e.habits||{}))typeof r=="string"&&r.length<=60&&(n[r]=l===!0);return{id:typeof e.id=="string"?e.id:crypto.randomUUID(),date:e.date,mood:e.mood,sleepHours:e.sleepHours,studyHours:e.studyHours,energy:Wt(e.energy),stress:Wt(e.stress),...a,capsule:t,gratitude:e.gratitude.map(r=>we(r??"","El agradecimiento")),goals:(e.goals||[]).map(r=>we(r,"Un objetivo")),tags:[...new Set(s.map(r=>r.trim()))],counters:o,habits:n,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function bt(e){const a=e.map(Ia).sort((t,s)=>t.date.localeCompare(s.date));return a.map(t=>({...t,dayNumber:da(t.date,a)}))}function Ra(){const e=localStorage.getItem(mt);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se han podido leer tus entradas.");return bt(a)}function ft(e){const a=bt(e);return localStorage.setItem(mt,JSON.stringify(a)),a}function $s(e){const a=Ia(e);a.updatedAt=new Date().toISOString();const t=Ra();return ft([...t.filter(s=>s.date!==a.date),a])}function Lo(e){return ft(Ra().filter(a=>a.date!==e))}function Co(){localStorage.removeItem(mt),localStorage.removeItem(ht),localStorage.removeItem(gt),localStorage.removeItem(za)}function Ue(e){if(!e||typeof e!="object")throw new Error("Hábito no válido.");const a=we(e.name??"","El nombre del hábito").trim();if(!a)throw new Error("El hábito necesita un nombre.");if(a.length>40)throw new Error("El nombre del hábito debe tener 40 caracteres o menos.");return{id:typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),name:a,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString()}}function ma(){const e=localStorage.getItem(ht);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se han podido leer tus hábitos.");return a.map(Ue)}function vt(e){const a=e.map(Ue);return localStorage.setItem(ht,JSON.stringify(a)),a}function ja(e){const a=Ue(e),t=ma();return vt([...t.filter(s=>s.id!==a.id),a])}function Do(e){return vt(ma().filter(a=>a.id!==e))}const jo=new Set(Ca.map(e=>e.id)),To=new Set(fa.map(e=>e.id)),Ho=new Set(Da.map(e=>e.id)),No=new Set(["drifting","returned","lost"]);function He(e){return typeof e=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e)}function We(e){if(!e||typeof e!="object")throw new Error("El pensamiento no es válido.");const a=we(e.text??"","El pensamiento").trim().slice(0,1200);if(!a)throw new Error("Escribe un pensamiento antes de echar la botella al mar.");const t=He(e.castAt)&&e.castAt<=g()?e.castAt:g(),s=jo.has(e.sea)?e.sea:"breeze",o=Number.isInteger(e.mood)&&e.mood>=1&&e.mood<=5?e.mood:null,n=typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),r=Number.isInteger(e.driftDays)&&He(e.arriveOn)?{returns:e.returns===!0,speed:Number.isFinite(e.speed)?Math.max(1,Math.round(e.speed)):10,driftDays:Math.max(1,e.driftDays),arriveOn:e.arriveOn,lostOn:He(e.lostOn)?e.lostOn:null,current:typeof e.current=="string"?e.current.slice(0,60):"",mottoSeed:Number.isFinite(e.mottoSeed)?Math.round(e.mottoSeed):0,weather:To.has(e.weather)?e.weather:null,wind:typeof e.wind=="string"?e.wind.slice(0,24):"",windSpeed:Number.isFinite(e.windSpeed)?Math.max(0,Math.round(e.windSpeed)):null,push:Number.isInteger(e.push)?Math.max(0,Math.min(4,e.push)):0}:ko({text:a,castAt:t,sea:s,id:n});return{id:n,text:a,castAt:t,mood:o,sea:s,...r,status:No.has(e.status)?e.status:"drifting",glass:Ho.has(e.glass)?e.glass:"amber",returnedAt:He(e.returnedAt)?e.returnedAt:null,lostAt:He(e.lostAt)?e.lostAt:null,reply:we(e.reply??"","La respuesta").trim().slice(0,1200),kept:!!e.kept,keptOn:He(e.keptOn)?e.keptOn:null,seen:e.seen===!0,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function Ua(e){const a=g(),t=e.map(We).map(s=>s.castAt>a?{...s,castAt:a}:s).sort((s,o)=>s.castAt.localeCompare(o.castAt)||s.id.localeCompare(o.id));return localStorage.setItem(za,JSON.stringify(t)),me()}function Oo(e){const a=g();let t=!1;const s=e.map(o=>{const n=qo(o,a);return n!==o&&(t=!0),n});return t&&localStorage.setItem(za,JSON.stringify(s)),s}function me(){const e=localStorage.getItem(za);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se ha podido leer tu mar de pensamientos.");return Oo(a.map(We))}function ws(e){const a=me().find(o=>o.id===e?.id)||null,t=a?Object.fromEntries(["sea","returns","speed","driftDays","arriveOn","lostOn","current","glass","mottoSeed","status"].map(o=>[o,a[o]])):{},s=We({...a,...e,...t,updatedAt:new Date().toISOString()});return Ua([...me().filter(o=>o.id!==s.id),s])}function ne(e,a={}){const t=me();return Ua(t.map(s=>s.id===e?{...s,...a,updatedAt:new Date().toISOString()}:s))}function Bo(e){return Ua(me().filter(a=>a.id!==e))}function Ss(e){return ne(e,{status:"drifting",castAt:g(),driftDays:null,arriveOn:null,lostOn:null,returnedAt:null,lostAt:null,seen:!1,reply:"",kept:!1,keptOn:null})}function Wa(e={}){const a=e&&typeof e=="object"?e:{},t=new Set(Y.map(f=>f.id)),s=new Set(oo.map(f=>f.id)),o=new Set(ta.map(f=>f.id)),n=new Set(Na.map(f=>f.id)),r=new Set(sa.map(f=>f.id)),l=new Set(oa.map(f=>f.id)),c=(f,C,U,P)=>{const j=Number(f);return Number.isFinite(j)?Math.min(U,Math.max(C,Math.round(j*10)/10)):P};let u=null;if(a.age!==void 0&&a.age!==null&&a.age!==""){const f=Math.round(Number(a.age));Number.isFinite(f)&&f>=8&&f<=115&&(u=f)}const p=o.has(a.ageGroup)?a.ageGroup:V.ageGroup,b=u!==null?Ga(u,p):p,$=Array.isArray(a.interests)?[...new Set(a.interests.filter(f=>n.has(f)))]:[],M=Array.isArray(a.savedQuotes)?[...new Set(a.savedQuotes.filter(f=>typeof f=="string"&&f.trim().length>0).map(f=>f.trim().slice(0,260)))].slice(0,40):[];return{completed:!!a.completed,name:String(a.name??"").trim().slice(0,50),age:u,ageGroup:b,interests:$,ritual:r.has(a.ritual)?a.ritual:V.ritual,tone:l.has(a.tone)?a.tone:V.tone,savedQuotes:M,purpose:s.has(a.purpose)?a.purpose:V.purpose,motto:String(a.motto??V.motto).trim().slice(0,140)||V.motto,theme:t.has(a.theme)?a.theme:V.theme,sleepGoal:c(a.sleepGoal,4,14,V.sleepGoal),studyGoal:c(a.studyGoal,0,16,V.studyGoal),waterGoal:c(a.waterGoal,1,25,V.waterGoal),showDailyWord:a.showDailyWord===void 0?!0:!!a.showDailyWord,showDailyTip:a.showDailyTip===void 0?!0:!!a.showDailyTip,crisisAlertsEnabled:a.crisisAlertsEnabled===void 0?!0:!!a.crisisAlertsEnabled,trustedContactName:String(a.trustedContactName??"").trim().slice(0,60),trustedContactPhone:String(a.trustedContactPhone??"").trim().slice(0,30),sidebarCollapsed:!!a.sidebarCollapsed,updatedAt:typeof a.updatedAt=="string"?a.updatedAt:new Date().toISOString()}}function Qa(){const e=localStorage.getItem(gt);if(!e)return{...V};try{const a=JSON.parse(e);return Wa(a)}catch{return{...V}}}function ie(e={}){const a=Qa(),t=Wa({...a,...e,updatedAt:new Date().toISOString()});return localStorage.setItem(gt,JSON.stringify(t)),t}function Fo(e,a=ma(),t=Qa(),s=me()){return JSON.stringify({app:"diario",version:1,exportedAt:new Date().toISOString(),entries:bt(e),habits:a.map(Ue),thoughts:s.map(We),setup:Wa(t)},null,2)}function Po(e){let a;try{a=JSON.parse(e)}catch{throw new Error("El archivo no es una copia JSON válida.")}if(!a||typeof a!="object"||a.version!==1||!Array.isArray(a.entries))throw new Error("Selecciona una copia JSON de Diario (versión 1).");const t=a.entries.map(Ia);if(new Set(t.map(r=>r.date)).size!==t.length)throw new Error("La copia contiene fechas duplicadas.");const s=Array.isArray(a.habits)?a.habits.map(Ue):[],o=Array.isArray(a.thoughts)?a.thoughts.map(We):[],n=a.setup?Wa(a.setup):null;return{entries:t,habits:s,thoughts:o,setup:n}}function zo(e){const a=Ra(),t=new Map(a.map(n=>[n.date,n]));for(const n of e.entries)t.set(n.date,Ia(n));const s=new Map(ma().map(n=>[n.id,n]));for(const n of e.habits)s.set(n.id,Ue(n));vt([...s.values()]);const o=new Map(me().map(n=>[n.id,n]));for(const n of e.thoughts||[])o.set(n.id,We(n));return Ua([...o.values()]),e.setup&&ie(e.setup),ft([...t.values()])}function Go(e=""){return String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim()}function he(e="paper",a={}){const t=Y.find(u=>u.id===e)||Y[0],{bg:s,page:o,accent:n,ink:r}=t.favicon||{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"},l=String(a?.name||"").trim().slice(0,1).toUpperCase(),c=l?`<text x="36" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="18" fill="${r}">${l.replace(/[<>&"']/g,"")}</text>`:`<path d="M29 29h14M29 36h10" stroke="${r}" stroke-width="2.6" stroke-linecap="round"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="16" fill="${s}"/>
    <rect x="14" y="11" width="38" height="42" rx="5" fill="${o}"/>
    <rect x="14" y="11" width="7" height="42" rx="2" fill="${n}"/>
    <path d="M41 11v12l-4-3-4 3V11" fill="${n}"/>
    ${c}
    <circle cx="46" cy="46" r="3" fill="${n}"/>
  </svg>`.replace(/\s+/g," ").trim()}function Io(e="paper",a={}){const t=he(e,a);return`data:image/svg+xml;utf8,${encodeURIComponent(t)}`}const Ro=[{label:"suicidio",regex:/\b(suicid(io|arme|arse|a)|conducta suicida)\b/},{label:"quitarme la vida",regex:/\b(quitar(me|se) la vida|acabar con mi vida|terminar con mi vida)\b/},{label:"no quiero vivir",regex:/\b(no quiero (seguir viviendo|vivir)|no merece la pena vivir|no vale la pena vivir)\b/},{label:"quiero morir",regex:/\b(quiero morir(me)?|me quiero morir|deseo morir(me)?|prefiero estar muert[oa]|mejor muert[oa])\b/},{label:"autolesión",regex:/\b(autolesion(arme|arse|es)?|hacerme dano|hacerme sangre|cortarme las venas|cortarme el brazo|cortarme la piel)\b/},{label:"acabar con todo",regex:/\b(acabar con todo para siempre|desaparecer para siempre|ojala no despertar|no despertar manana|matarme|tirarme (por la ventana|al tren|desde un puente)|sobredosis)\b/}];function Uo(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"){const a=Array.isArray(e.gratitude)?e.gratitude.join(" "):"",t=Array.isArray(e.goals)?e.goals.join(" "):"",s=Array.isArray(e.tags)?e.tags.join(" "):"";return[e.bestOfDay,e.differentToday,e.generalDay,e.wordOfDay,e.capsule,e.tomorrow,a,t,s].filter(Boolean).join(" ")}return""}function G(e={}){const a=e?.age?Ga(e.age,e.ageGroup||"young"):e?.ageGroup||"young",t=ta.find(C=>C.id===a)||ta[1],s=Array.isArray(e?.interests)?e.interests:[],o=Na.filter(C=>s.includes(C.id)),n=sa.find(C=>C.id===e?.ritual)||sa[0],r=oa.find(C=>C.id===e?.tone)||oa[0];let l=t.focusLabel,c=t.focusQuestion;s.includes("study")?(l="Estudio",c="Tiempo de estudio o repaso"):s.includes("projects")&&t.id!=="teen"&&(l="Proyectos y enfoque",c="Tiempo dedicado a tus proyectos");const u=[...new Set([...o.map(C=>C.habit),...t.habits,...no])].slice(0,8),p=[...new Set([...o.map(C=>C.tag),...t.tags,...to])].slice(0,12),b=Number.isFinite(Number(e?.age))&&Number(e.age)>0&&Number(e.age)<18;let $="Nota al margen (canción, lectura, lugar...)",M="Una canción, un libro, una película o un detalle que quieras recordar...";s.includes("music")?($="Canción, película o escena del día",M="¿Qué has escuchado o visto hoy?"):s.includes("reading")?($="Lectura o cita del día",M="Un libro que estés leyendo o una frase que te haya gustado..."):s.includes("gaming")&&($="Partida, serie o tema del día",M="A qué has jugado hoy o qué serie estás viendo...");const f=["water"];return(s.includes("sport")||s.includes("nature")||!s.length)&&f.push("exercise"),(s.includes("reading")||s.includes("study")||!s.length)&&f.push("reading"),(s.includes("calm")||!s.length)&&f.push("mindfulness"),{group:t,age:e?.age||null,isMinor:b,interests:o,ritual:n,tone:r,focusLabel:l,focusQuestion:c,capsuleLabel:$,capsulePlaceholder:M,activeCounterKeys:f,sleepRecommended:t.sleepRecommended,studyRecommended:t.studyRecommended,suggestedHabits:u,tags:p,placeholders:t.placeholders}}function yt(e){const a=Uo(e),t=Go(a),s=[];if(t)for(const o of Ro)o.regex.test(t)&&s.push(o.label);return s.length>0?{triggered:!0,level:"high",matchedTerms:s,reason:"Si estás pasando por un momento muy difícil, no tienes por qué llevarlo a solas. El 024 es gratuito, confidencial y atiende las 24 horas."}:{triggered:!1,level:"none",matchedTerms:[],reason:""}}function na(e=g()){const a=String(e||"").replace(/[^0-9]/g,"");let t=0;for(let s=0;s<a.length;s++)t=t*31+a.charCodeAt(s)>>>0;return t||1}function Wo(e=g(),a=0){const t=(na(e)+Math.abs(a))%Nt.length;return Nt[t]}function Qo(e=g(),a=0,t={}){const o=G(t).group.id,n=new Set(t?.interests||[]),r=Ot.filter(u=>{const p=!u.ageGroups||u.ageGroups.includes(o),b=!u.interests||u.interests.some($=>n.has($));return p||b}),l=r.length?r:Ot,c=(na(e)*7+Math.abs(a))%l.length;return l[c]}function _o(e=g(),a=0,t={}){const o=G(t).group.id,n=t?.tone||"warm",r=new Set(t?.interests||[]),l=Array.isArray(t?.savedQuotes)?t.savedQuotes:[];if(l.length>0&&a%3===0){const M=(na(e)+Math.abs(a))%l.length;return{text:l[M],author:t?.name?`Guardada por ${t.name}`:"De tu colección",isCustom:!0}}const c=Ht.map(M=>{let f=0;return M.tones?.includes(n)&&(f+=3),M.ageGroups?.includes(o)&&(f+=2),M.interests?.some(C=>r.has(C))&&(f+=4),{q:M,score:f}}),u=Math.max(...c.map(M=>M.score),0),p=c.filter(M=>M.score>=Math.max(2,u-2)).map(M=>M.q),b=p.length>=4?p:Ht,$=(na(e)*5+Math.abs(a))%b.length;return b[$]}function st(e=g(),a=0){const t=(na(e)*13+Math.abs(a))%Bt.length;return Bt[t]}function Vo(e={},a={}){const t=[],s=G(a),o=Number(a?.sleepGoal)||s.sleepRecommended||7.5,n=Number(e?.sleepHours),r=Number(e?.stress),l=Number(e?.mood);return Number.isFinite(n)&&n>0&&n<o-1.5&&t.push({icon:"moon",title:"Descanso corto",text:`Has dormido ${n} h (tu meta es ${o} h). Intenta bajar el ritmo esta tarde.`}),Number.isFinite(r)&&r>=4&&t.push({icon:"wind",title:"Día cargado",text:"Con este nivel de tensión, prioriza una sola cosa hoy y deja el resto para mañana."}),Number.isFinite(l)&&l===1&&t.push({icon:"heart",title:"Día cuesta arriba",text:"En los días pesados basta con descansar y cubrir lo básico."}),t.slice(0,2)}function Zo(e=[],a={}){const t=G(a),s=Number(a?.sleepGoal)||t.sleepRecommended||7.5,o=Number(a?.studyGoal)??t.studyRecommended??2,n=Number(a?.waterGoal)||8,r=e.length;if(!r)return{total:0,sleepGoal:s,studyGoal:o,waterGoal:n,sleepMet:0,studyMet:0,waterMet:0,sleepPct:0,studyPct:0,waterPct:0,moodWhenSleepMet:null,moodWhenSleepMissed:null};const l=e.filter(b=>b.sleepHours>=s),c=e.filter(b=>b.sleepHours<s),u=e.filter(b=>b.studyHours>=o),p=e.filter(b=>(b.counters?.water||0)>=n);return{total:r,sleepGoal:s,studyGoal:o,waterGoal:n,sleepMet:l.length,studyMet:u.length,waterMet:p.length,sleepPct:Math.round(l.length/r*100),studyPct:Math.round(u.length/r*100),waterPct:Math.round(p.length/r*100),moodWhenSleepMet:l.length?q(Z(l.map(b=>b.mood))):null,moodWhenSleepMissed:c.length?q(Z(c.map(b=>b.mood))):null}}function Jo(e="",a=new Date().getHours()){const t=String(e||"").trim(),s=t?`, ${t}`:"";return a>=5&&a<13?`Buenos días${s}`:a>=13&&a<20?`Buenas tardes${s}`:`Buenas noches${s}`}const Yo={pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',week:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 9h18M8 14h8"/>',month:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9"/>',history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-5 3-7 1 2 2 3 2 3 0-3-1-4 0-6Z"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',study:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',check:'<path d="M20 6 9 17l-5-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',download:'<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3"/>',upload:'<path d="M12 15V3m0 0-4 4m4-4 4 4M4 17v3h16v-3"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 5.1-6C9.5 14.5 12 13 13 12"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',bolt:'<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',storm:'<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/><path d="m13 11-3 5h4l-2 5"/>',drop:'<path d="M12 2.7 6.4 8.3a8 8 0 1 0 11.3 0Z"/>',run:'<circle cx="15" cy="4" r="2"/><path d="m10.5 9.5-3 3L5 11m5.5-1.5 3.5 2 3 2M9 14l-2 6m5-4 3 5"/>',book:'<path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',stamp:'<path d="M5 21h14M6 17h12v2H6zM9 17v-3a3 3 0 1 1 6 0v3"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',refresh:'<path d="M21 12a9 9 0 0 0-15.4-6.4L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15.4 6.4L21 16"/><path d="M21 21v-5h-5"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5-4.5-8.6-10-8.6Z"/>',spark:'<path d="m12 3 1.9 5.8L20 10.8l-6.1 1.9L12 18.5l-1.9-5.8L4 10.8l6.1-2Z"/>',quote:'<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/>',expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',wave:'<path d="M2 9.5c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/><path d="M2 15c2 0 2 1.8 4 1.8S8 15 10 15s2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/>',tide:'<path d="M3 16.5c1.7 0 1.7 1.5 3.4 1.5s1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5 1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5"/><circle cx="17" cy="6" r="3"/><path d="M4 11c1.7 0 1.7 1.5 3.4 1.5S9.1 11 10.8 11"/>',send:'<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z"/>',anchor:'<circle cx="12" cy="5" r="2.6"/><path d="M12 7.6V21"/><path d="M8.5 10h7"/><path d="M3 14a9 9 0 0 0 18 0"/><path d="M3 14h3M18 14h3"/>',bookmark:'<path d="M6.5 3h11a1 1 0 0 1 1 1v17l-6.5-4.6L5.5 21V4a1 1 0 0 1 1-1Z"/>',reply:'<path d="M9 14 4 9l5-5"/><path d="M4 9h9.5A6.5 6.5 0 0 1 20 15.5V20"/>',seal:'<circle cx="12" cy="12" r="8"/><path d="m12 7.6 1.5 2.9 3.2.4-2.3 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.3-2.3 3.2-.4Z"/>',eye:'<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',grid:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',listChecks:'<path d="M11 6h10M11 12h10M11 18h10"/><path d="m3 6 1.6 1.6L7.2 5M3 12l1.6 1.6 2.6-2.6M3 18l1.6 1.6 2.6-2.6"/>',sail:'<path d="M3 18.5h18l-2.6 3.2H5.6Z"/><path d="M12.5 15V3.5L20 15Z"/><path d="M10.5 15 6 8.5 3.8 15Z"/>',fog:'<path d="M4 9h16M3 13h18M5 17h14"/><path d="M7 5.5c1.6-1.6 3.4-1.6 5 0"/>',rain:'<path d="M17.5 14a4 4 0 0 0-.6-7.9A5.5 5.5 0 0 0 6.3 7.4 3.8 3.8 0 0 0 7 14Z"/><path d="M9 17.5 8 20M13 17.5 12 20M17 17.5 16 20"/>',hourglass:'<path d="M7 3h10M7 21h10"/><path d="M7 3c0 4 5 5.4 5 9s-5 5-5 9M17 3c0 4-5 5.4-5 9s5 5 5 9"/>',gauge:'<path d="M12 20a8 8 0 1 1 8-8"/><path d="M12 12 16 9"/><circle cx="12" cy="12" r="1.2"/>',paper:'<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/>',splash:'<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.6 6.6l2.8 2.8M14.6 14.6l2.8 2.8M17.4 6.6l-2.8 2.8M9.4 14.6l-2.8 2.8"/>',save:'<path d="M5 4h11l3 3v13H5Z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'},i=e=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Yo[e]||""}</svg>`,d=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]);function xs(e={},a=0){const t=G(e),s=e.name?d(e.name):"Personalizar perfil",o=e.age?`${e.age} años`:t.group.label;return`<button type="button" class="ex-libris-card" data-action="open-setup-wizard" title="Editar perfil y preferencias">
    <span class="ex-libris-icon">${he(e.theme||"paper",e)}</span>
    <div class="ex-libris-meta">
      <strong>${s}</strong>
      <small>${d(o)} · ${a} ${a===1?"día":"días"}</small>
    </div>
  </button>`}function Qt(e,a,t,s,o,n,r){return`<div class="scale-field">
    <p class="field-title">${i(s)} ${o}</p>
    <p class="field-caption">${n}</p>
    <div class="level-scale" role="radiogroup" aria-label="${o}">
      ${[1,2,3,4,5].map(l=>`<label class="level-option">
        <input type="radio" name="${e}" value="${l}" ${t===l?"checked":""}>
        <span class="level-num">${l}</span>
        <span class="level-text">${a[l]}</span>
      </label>`).join("")}
    </div>
    <small id="${e}-hint">${t?a[t]+".":r}</small>
  </div>`}function Ko(e=[],a=[]){const t=new Set(e);return`<div class="tag-picker">
    ${[...new Set([...a,...e])].map(o=>`<label class="tag-chip">
      <input type="checkbox" name="tags" value="${d(o)}" ${t.has(o)?"checked":""}>
      <span>${d(o)}</span>
    </label>`).join("")}
    <label class="tag-chip ghost">
      <span>+ Otra:</span>
      <input type="text" name="tagCustom" id="tagCustom" maxlength="24" placeholder="Escribe y pulsa Enter" aria-label="Añadir etiqueta personalizada">
    </label>
  </div>`}function Xo(e={},a=[],t={},s={}){const o=G(t),n=new Set(o.activeCounterKeys||["water"]),r=a.filter(u=>n.has(u.key)||(Number(e?.[u.key])||0)>0),l=r.length?r:a,c=s.action?`${s.action}-`:"";return`<div class="counters-grid">${l.map(u=>{const p=Number(e?.[u.key])||0,$=u.key==="water"?t.waterGoal||8:0,M=$?Math.min(100,Math.round(p/$*100)):0;return`<div class="counter-row" data-counter="${u.key}">
      <div>
        <p class="field-title">${i(u.icon)} ${u.label} ${$?`<small class="counter-goal-pill ${p>=$?"met":""}">Meta: ${p}/${$}</small>`:""}</p>
        <p class="field-caption" id="hint-${u.key}">${Ba(u.key,p)}</p>
        ${$?`<div class="counter-progress"><i style="width:${M}%"></i></div>`:""}
      </div>
      <div class="stepper">
        <button type="button" class="icon-button" data-action="${c}counter-minus" data-key="${u.key}" data-step="${u.step}" aria-label="Restar ${u.label}">${i("minus")}</button>
        <div class="stepper-value">
          <input type="number" name="counter_${u.key}" min="0" max="${u.max}" step="${u.step}" value="${p}" aria-label="${u.label}" data-counter-input="${u.key}">
          <span>${u.unit}</span>
        </div>
        <button type="button" class="icon-button" data-action="${c}counter-plus" data-key="${u.key}" data-step="${u.step}" aria-label="Sumar ${u.label}">${i("plus")}</button>
      </div>
    </div>`}).join("")}</div>`}function en(e,a,{mini:t=!1,selected:s=g()}={}){const o=new Map(a.map(l=>[l.date,l])),n=g(),r=io(e).map(l=>{const c=o.get(l.date),u=c?O[c.mood-1]:null,p=l.date>n,b=["calendar-day",!l.inMonth&&"outside",l.date===n&&"today",l.date===s&&"selected",c&&"recorded"].filter(Boolean).join(" "),$=`${A(l.date)}${u?`, ${u.label}`:", sin entrada"}`;return`<button type="button" class="${b}" data-action="open-day" data-date="${l.date}" ${p?"disabled":""} aria-label="${$}" style="${u?`--mood:${u.color}`:""}">
      <span>${l.day}</span>${u?'<i aria-hidden="true"></i>':""}
    </button>`}).join("");return`<div class="calendar ${t?"mini":""}">
    <div class="calendar-heading">
      <button type="button" class="icon-button ghost" data-action="month-prev" data-mini="${t?"1":"0"}" aria-label="Mes anterior">${i("left")}</button>
      <strong>${A(e,{month:"long",year:"numeric"})}</strong>
      <button type="button" class="icon-button ghost" data-action="month-next" data-mini="${t?"1":"0"}" aria-label="Mes siguiente">${i("right")}</button>
    </div>
    <div class="calendar-grid">
      ${ao.map(l=>`<span class="weekday">${l}</span>`).join("")}
      ${r}
    </div>
  </div>`}function an(e,a,t,s={}){const o=new Map(e.map(h=>[h.date,h])),n=680,r=230,l=36,c=26,u=n-l*2,p=r-c*2,b=h=>l+(t===1?u/2:h*u/(t-1)),$=h=>c+(5-h)*p/4,M=h=>c+p-Math.min(12,Math.max(0,h||0))/12*p,f=[],C=[],U=Math.max(6,Math.min(18,Math.floor(u/t)-6));for(let h=0;h<t;h++){const k=E(a,h),D=o.get(k);if(D){f.push({x:b(h),y:$(D.mood),e:D,d:k});const H=M(D.sleepHours),I=Math.max(2,c+p-H);C.push(`<rect x="${(b(h)-U/2).toFixed(1)}" y="${H.toFixed(1)}" width="${U}" height="${I.toFixed(1)}" rx="2" fill="color-mix(in srgb,var(--green) 22%,transparent)"><title>${A(k)}: ${q(D.sleepHours)} h de sueño</title></rect>`)}}const P=f.map((h,k)=>`${k?"L":"M"}${h.x.toFixed(1)},${h.y.toFixed(1)}`).join(" "),j=f.length>1?`${P} L${f[f.length-1].x.toFixed(1)},${r-c} L${f[0].x.toFixed(1)},${r-c} Z`:"",T=s?.sleepGoal||7.5,ye=M(T);return`<div class="chart-wrap">
    <svg viewBox="0 0 ${n} ${r}" class="mood-chart" role="img" aria-label="Evolución del estado de ánimo y horas de sueño">
      <defs>
        <linearGradient id="moodAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--red)" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="var(--red)" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      ${[1,2,3,4,5].map(h=>`<line x1="${l}" x2="${n-l}" y1="${$(h)}" y2="${$(h)}" stroke="var(--rule)" stroke-dasharray="3 5"/>
      <text x="10" y="${$(h)+4}" fill="var(--ink-faint)" font-size="11" font-family="var(--font-mono)">${h}</text>`).join("")}
      <line x1="${l}" x2="${n-l}" y1="${ye.toFixed(1)}" y2="${ye.toFixed(1)}" stroke="var(--green)" stroke-width="1" stroke-dasharray="6 4" opacity="0.55"/>
      ${C.join("")}
      ${j?`<path class="chart-area-path" d="${j}" fill="url(#moodAreaGrad)"/>`:""}
      ${P?`<path class="chart-line-path" d="${P}" fill="none" stroke="var(--red)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`:""}
      ${f.map((h,k)=>`<g>
        <circle class="chart-dot" style="--dot-i:${k}" cx="${h.x}" cy="${h.y}" r="5.5" fill="${O[h.e.mood-1].color}" stroke="var(--paper-2)" stroke-width="2">
          <title>${A(h.d)} · ${O[h.e.mood-1].label} (${h.e.mood}/5) · ${q(h.e.sleepHours)} h sueño</title>
        </circle>
      </g>`).join("")}
    </svg>
    <div class="chart-legend-inline">
      <span><i class="legend-line"></i> Ánimo (1–5)</span>
      <span><i class="legend-bar"></i> Horas de sueño (meta: ${q(T)} h)</span>
    </div>
  </div>`}function tn(e=[],a=g(),t=28){const s=new Map(e.map(r=>[r.date,r])),o=E(a,1-t),n=[];for(let r=0;r<t;r++){const l=E(o,r),c=s.get(l),u=c?O[c.mood-1]:null;n.push(`<button type="button" class="heatmap-cell ${c?"filled":""}" data-action="open-day" data-date="${l}" style="${u?`--mood:${u.color}`:""}" title="${A(l)}${u?`: ${u.label} (${c.mood}/5) · ${q(c.sleepHours)} h sueño`:": sin registro"}">
      <span>${l.slice(8)}</span>
      ${u?`<small>${u.emoji}</small>`:""}
    </button>`)}return`<div class="heatmap-strip">${n.join("")}</div>`}function ks(e=[],a={}){const t=Zo(e,a),s=G(a);return t.total?`<section class="card personal-goals-card">
    <div class="section-heading">
      <div>
        <h2>Cumplimiento de tus metas</h2>
      </div>
      <button type="button" class="text-button" data-action="open-setup-wizard">${i("sliders")} Ajustar metas</button>
    </div>
    <div class="goals-meter-grid">
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${i("moon")} Sueño (≥ ${q(t.sleepGoal)} h)</span>
          <strong>${t.sleepPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${t.sleepPct}%;background:var(--green)"></i></div>
        <small>${t.sleepMet} de ${t.total} días cumplidos</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${i("study")} ${d(s.focusLabel)} (≥ ${q(t.studyGoal)} h)</span>
          <strong>${t.studyPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${t.studyPct}%;background:var(--red)"></i></div>
        <small>${t.studyMet} de ${t.total} días cumplidos</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${i("drop")} Agua (≥ ${t.waterGoal} vasos)</span>
          <strong>${t.waterPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${t.waterPct}%;background:var(--ochre)"></i></div>
        <small>${t.waterMet} de ${t.total} días cumplidos</small>
      </div>
    </div>
    ${t.moodWhenSleepMet&&t.moodWhenSleepMissed?`
      <div class="sleep-mood-insight">
        ${i("spark")}
        <p>Cuando alcanzas tu meta de <b>${q(t.sleepGoal)} h</b> de sueño, tu estado medio es <b>${t.moodWhenSleepMet}/5</b> (frente a <b>${t.moodWhenSleepMissed}/5</b> los días que duermes menos).</p>
      </div>
    `:""}
  </section>`:`<section class="card personal-goals-card">
      <div class="section-heading">
        <h2>Tus metas personales</h2>
        <button type="button" class="text-button" data-action="open-setup-wizard">${i("sliders")} Ajustar</button>
      </div>
      <p class="habit-empty">Guarda tu primer día para ver cómo evolucionan tus metas de sueño (${q(t.sleepGoal)} h), ${d(s.focusLabel.toLowerCase())} (${q(t.studyGoal)} h) y agua (${t.waterGoal} vasos).</p>
    </section>`}function qs(e,a=0,t={}){const s=_o(e,a,t),o=(t?.savedQuotes||[]).includes(s.text);return`<section class="card quote-card">
    <div class="quote-top">
      <span class="eyebrow">${i("quote")} ${s.isCustom?"Tu colección":"Frase del día"}</span>
      <div class="quote-actions">
        <button type="button" class="icon-button ghost ${o?"is-saved":""}" data-action="save-quote" data-quote="${d(s.text)}" title="${o?"Guardada en tus frases":"Guardar en mis frases"}" aria-label="Guardar frase">${i("heart")}</button>
        <button type="button" class="icon-button ghost" data-action="next-quote" title="Otra frase" aria-label="Otra frase">${i("refresh")}</button>
      </div>
    </div>
    <p class="quote-text">«${d(s.text)}»</p>
    <small class="quote-author">— ${d(s.author)}</small>
  </section>`}function z(e,a,t="",s=""){return`<div class="ledger-cell">
    <span class="ledger-label">${e}</span>
    <div class="ledger-value">${a}${t?`<small>${t}</small>`:""}</div>
    ${s?`<span class="ledger-hint">${s}</span>`:""}
  </div>`}function ga(e,a,t="mood"){if(!a)return`<div class="rank-row"><span class="rank-label">${e}</span><strong>—</strong><small>Sin datos aún</small></div>`;const s=t==="mood"?`${O[a.mood-1].emoji} ${O[a.mood-1].label} (${a.mood}/5)`:`${q(a[t])} h`;return`<div class="rank-row">
    <span class="rank-label">${e}</span>
    <strong>${A(a.date,{weekday:"short",day:"numeric",month:"short"})}</strong>
    <small>${s}</small>
  </div>`}function Ta(e,a,t=""){return`<div class="empty-state">
    ${i("leaf")}
    <h3>${e}</h3>
    <p>${a}</p>
    ${t}
  </div>`}function $t(e){return`<div class="meter-list">${e.map(a=>{const t=a.total?Math.round(a.count/a.total*100):0;return`<div class="meter-row">
      <span>${a.label}</span>
      <div class="meter-track"><i style="width:${t}%;background:${a.color||"var(--ink)"}"></i></div>
      <strong>${a.count}</strong>
    </div>`}).join("")}</div>`}function Ms(e,a={}){if(!e?.triggered||e.level!=="high")return"";const t=a?.trustedContactName?.trim(),s=a?.trustedContactPhone?.trim();return`<section class="crisis-banner high" role="region" aria-label="Apoyo emocional disponible">
    <div class="crisis-banner-head">
      <span class="crisis-badge">${i("heart")} No estás a solas</span>
      <button type="button" class="icon-button ghost crisis-dismiss" data-action="dismiss-crisis-banner" aria-label="Ocultar este aviso">${i("close")}</button>
    </div>
    <p class="crisis-reason">${d(e.reason)}</p>
    <div class="crisis-quick-actions">
      <a href="tel:024" class="button solid crisis-call-btn">${i("phone")} Llamar al 024 (24h, gratuito y confidencial)</a>
      ${t&&s?`<a href="tel:${d(s.replace(/\s+/g,""))}" class="button outline">${i("user")} Llamar a ${d(t)}</a>`:""}
      <button type="button" class="button outline" data-action="open-crisis-modal" data-tab="breathe">${i("wind")} Respiración guiada</button>
    </div>
  </section>`}function sn(e={},a="help"){const t=G(e),s=e?.trustedContactName?.trim(),o=e?.trustedContactPhone?.trim();return`<div class="modal-card crisis-modal">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${i("heart")} Apoyo y calma</p>
        <h2>Un espacio para respirar y pedir ayuda</h2>
      </div>
      <button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${i("close")}</button>
    </div>

    <div class="crisis-tabs" role="tablist">
      <button type="button" class="crisis-tab ${a==="help"?"active":""}" data-crisis-tab="help" role="tab">${i("phone")} Teléfonos 24h</button>
      <button type="button" class="crisis-tab ${a==="breathe"?"active":""}" data-crisis-tab="breathe" role="tab">${i("wind")} Respirar (4-4-6)</button>
      <button type="button" class="crisis-tab ${a==="ground"?"active":""}" data-crisis-tab="ground" role="tab">${i("compass")} Volver al presente</button>
    </div>

    <div class="crisis-tab-panel ${a==="help"?"active":""}" data-panel="help">
      <p class="crisis-intro">Hablar con alguien cuando todo pesa es un paso valiente. Estos servicios son confidenciales, gratuitos y atienden las 24 horas.</p>
      ${s&&o?`
        <div class="trusted-contact-card">
          <div>
            <span class="eyebrow">Tu persona de confianza</span>
            <h3>${d(s)}</h3>
            <p>${d(o)}</p>
          </div>
          <a href="tel:${d(o.replace(/\s+/g,""))}" class="button solid">${i("phone")} Llamar</a>
        </div>
      `:""}
      <div class="helpline-grid">
        ${ro.map(n=>{const r=t.isMinor&&n.youth;return`
          <div class="helpline-card ${n.primary||r?"primary":""}">
            <div class="helpline-info">
              <h3>${d(n.name)}</h3>
              <p>${d(n.detail)}</p>
            </div>
            <a href="${d(n.tel)}" class="helpline-phone">${i("phone")} <span>${d(n.number)}</span></a>
          </div>
        `}).join("")}
      </div>
    </div>

    <div class="crisis-tab-panel ${a==="breathe"?"active":""}" data-panel="breathe">
      <div class="breathing-box">
        <div class="breathing-circle-wrap">
          <div class="breathing-circle" id="breathing-visual">
            <span id="breathing-phase">Preparado</span>
            <small id="breathing-timer">4 — 4 — 6</small>
          </div>
        </div>
        <p class="breathing-instructions" id="breathing-guide">Inhala 4 segundos por la nariz, mantén el aire 4 segundos y suelta despacio durante 6 segundos.</p>
        <button type="button" class="button solid" data-action="toggle-breathing" id="breathing-btn">${i("wind")} Empezar ejercicio</button>
      </div>
    </div>

    <div class="crisis-tab-panel ${a==="ground"?"active":""}" data-panel="ground">
      <p class="crisis-intro">Cuando la cabeza va demasiado deprisa, nombrar lo que tienes alrededor ayuda a bajar el ritmo:</p>
      <div class="grounding-list">
        ${[{count:5,sense:"Cosas que puedas ver",prompt:"Fíjate en 5 objetos a tu alrededor."},{count:4,sense:"Cosas que puedas tocar",prompt:"Nota el tacto de 4 superficies cercanas."},{count:3,sense:"Sonidos que puedas oír",prompt:"Escucha 3 sonidos del entorno."},{count:2,sense:"Olores que percibas",prompt:"Identifica 2 aromas cercanos."},{count:1,sense:"Una respiración profunda",prompt:"Toma aire hondo y suéltalo despacio."}].map(n=>`
          <label class="grounding-step">
            <input type="checkbox">
            <span class="grounding-num"><b>${n.count}</b></span>
            <div>
              <strong>${d(n.sense)}</strong>
              <p>${d(n.prompt)}</p>
            </div>
          </label>
        `).join("")}
      </div>
    </div>

    <div class="modal-actions">
      <button type="button" class="button outline" data-modal="close">Cerrar</button>
    </div>
  </div>`}function Es(e,a,t,s={},o={},n=""){const r=s?.showDailyWord!==!1,l=s?.showDailyTip!==!1;if(!r&&!l)return"";const c=Wo(e,a),u=Qo(e,t,s),p=Vo(o,s),b=n&&n.toLowerCase()===c.word.toLowerCase();return`<div class="daily-inspiration-grid">
    ${r?`
      <article class="card inspiration-card word-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${i("book")} Palabra del día</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-word" title="Ver otra palabra" aria-label="Ver otra palabra">${i("refresh")}</button>
        </div>
        <div class="daily-word-main">
          <div>
            <h2 class="daily-word-title">${d(c.word)}</h2>
            <span class="daily-word-origin">${d(c.type)} · ${d(c.origin)}</span>
          </div>
          <button type="button" class="button ${b?"solid":"outline"} small-btn" data-action="use-daily-word" data-word="${d(c.word)}">
            ${i(b?"check":"pen")} ${b?"Elegida hoy":"Usar hoy"}
          </button>
        </div>
        <p class="daily-word-meaning">${d(c.meaning)}</p>
      </article>
    `:""}

    ${l?`
      <article class="card inspiration-card tip-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${i("spark")} Consejo · ${d(u.category)}</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-tip" title="Ver otro consejo" aria-label="Ver otro consejo">${i("refresh")}</button>
        </div>
        <h2 class="daily-tip-title">${d(u.title)}</h2>
        <p class="daily-tip-body">${d(u.tip)}</p>
        ${p.length?`
          <div class="contextual-advice-list">
            ${p.map($=>`
              <div class="contextual-advice-item">
                ${i($.icon)}
                <div><strong>${d($.title)}:</strong> ${d($.text)}</div>
              </div>
            `).join("")}
          </div>
        `:""}
      </article>
    `:""}
  </div>`}function on(e={},a=[],t=1){const s=G(e),o=new Set(a.map(r=>r.name.toLowerCase())),n=new Set(e.interests||[]);return`<div class="modal-card setup-wizard-modal" data-current-step="${t}">
    <div class="setup-wizard-header">
      <div>
        <p class="eyebrow">${i("sliders")} Paso ${t} de 3</p>
        <h2>${t===1?"Sobre ti, tu edad y tus gustos":t===2?"Tu ritmo y tus hábitos":"Papel e icono de tu cuaderno"}</h2>
      </div>
      <button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${i("close")}</button>
    </div>

    <div class="wizard-steps-bar" aria-hidden="true">
      <span class="${t>=1?"done":""} ${t===1?"current":""}">1. Tú y tus gustos</span>
      <span class="${t>=2?"done":""} ${t===2?"current":""}">2. Ritmo y hábitos</span>
      <span class="${t>=3?"done":""} ${t===3?"current":""}">3. Papel e icono</span>
    </div>

    <form id="setup-wizard-form">
      <div class="wizard-step-body ${t===1?"active":""}" data-step="1" ${t===1?"":"hidden"}>
        <div class="setup-name-age-row">
          <div class="setup-field">
            <label for="setup-name">${i("user")} ¿Cómo te llamas?</label>
            <input id="setup-name" name="name" maxlength="50" placeholder="Tu nombre o apodo..." value="${d(e.name||"")}">
          </div>
          <div class="setup-field">
            <label for="setup-age">¿Cuántos años tienes?</label>
            <div class="age-input-wrap">
              <input id="setup-age" name="age" type="number" min="10" max="110" step="1" placeholder="Ej. 20" value="${e.age??""}">
              <span>años</span>
            </div>
          </div>
        </div>

        <div class="setup-field">
          <label>Tu etapa vital</label>
          <div class="age-group-grid" id="wizard-age-groups">
            ${ta.map(r=>`
              <label class="age-group-card ${s.group.id===r.id?"is-selected":""}" data-age-group-card="${r.id}">
                <input type="radio" name="ageGroup" value="${r.id}" ${s.group.id===r.id?"checked":""}>
                <span class="age-range-badge">${d(r.label)}</span>
                <strong>${d(r.title)}</strong>
                <small>${d(r.desc)}</small>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="setup-field">
          <label>¿Qué cosas te gustan o te importan más?</label>
          <p class="setup-caption">El diario mostrará solo los bloques, etiquetas y frases que encajen contigo:</p>
          <div class="interests-grid">
            ${Na.map(r=>`
              <label class="interest-chip">
                <input type="checkbox" name="interests" value="${r.id}" ${n.has(r.id)?"checked":""}>
                <span>${i(r.icon)} ${d(r.label)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${t===2?"active":""}" data-step="2" ${t===2?"":"hidden"}>
        <div class="age-adaptation-callout" id="wiz-adaptation-callout">
          ${i("compass")}
          <div>
            <strong>Adaptado a: ${d(s.group.title)} (${d(s.group.label)})</strong>
            <p>Hemos ajustado tus metas recomendadas de sueño (${q(s.sleepRecommended)} h) y dedicación (${q(s.studyRecommended)} h).</p>
          </div>
        </div>

        <div class="goals-setup-grid">
          <div class="setup-field">
            <label for="setup-sleep">${i("moon")} Meta de sueño</label>
            <div class="number-wrap">
              <input id="setup-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${e.sleepGoal??s.sleepRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-study">${i("study")} Meta de dedicación</label>
            <div class="number-wrap">
              <input id="setup-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${e.studyGoal??s.studyRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-water">${i("drop")} Vasos de agua</label>
            <div class="number-wrap">
              <input id="setup-water" name="waterGoal" type="number" min="1" max="25" step="1" value="${e.waterGoal??8}">
              <span>vasos</span>
            </div>
          </div>
        </div>

        <div class="two-columns" style="margin-top:14px">
          <div class="setup-field" style="margin-top:0">
            <label>¿Cuándo sueles escribir?</label>
            <div class="ritual-stack">
              ${sa.map(r=>`
                <label class="purpose-card compact">
                  <input type="radio" name="ritual" value="${r.id}" ${(e.ritual||"night")===r.id?"checked":""}>
                  <span class="purpose-icon">${i(r.icon)}</span>
                  <div><strong>${d(r.label)}</strong></div>
                </label>
              `).join("")}
            </div>
          </div>
          <div class="setup-field" style="margin-top:0">
            <label>Tono de las frases</label>
            <div class="ritual-stack">
              ${oa.map(r=>`
                <label class="purpose-card compact">
                  <input type="radio" name="tone" value="${r.id}" ${(e.tone||"warm")===r.id?"checked":""}>
                  <div><strong>${d(r.label)}</strong><small>${d(r.desc)}</small></div>
                </label>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="setup-field">
          <label>Hábitos sugeridos para ti</label>
          <div class="tag-picker" id="wiz-suggested-habits">
            ${s.suggestedHabits.map(r=>{const l=o.has(r.toLowerCase());return`<label class="tag-chip">
                <input type="checkbox" name="suggestedHabits" value="${d(r)}" ${l?"checked":""}>
                <span>${d(r)}</span>
              </label>`}).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${t===3?"active":""}" data-step="3" ${t===3?"":"hidden"}>
        <div class="setup-field">
          <label>${i("palette")} Elige el papel y el icono de tu pestaña</label>
          <div class="theme-picker-grid">
            ${Y.map(r=>`
              <label class="theme-card">
                <input type="radio" name="theme" value="${r.id}" ${(e.theme||"paper")===r.id?"checked":""}>
                <div class="theme-card-top">
                  <span class="theme-favicon-preview">${he(r.id,e)}</span>
                  <div class="theme-swatches">
                    ${r.colors.map(l=>`<i style="background:${l}"></i>`).join("")}
                  </div>
                </div>
                <strong>${d(r.name)}</strong>
                <small>${d(r.desc)}</small>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="setup-field">
          <label for="setup-motto">Frase de portada (opcional)</label>
          <input id="setup-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${d(e.motto||"Un día a la vez.")}">
        </div>

        <div class="setup-toggles">
          <label class="toggle-row">
            <input type="checkbox" name="showDailyWord" ${e.showDailyWord!==!1?"checked":""}>
            <span><strong>Mostrar Palabra del día</strong><small>Sugiere cada día una palabra nueva en la cabecera.</small></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="showDailyTip" ${e.showDailyTip!==!1?"checked":""}>
            <span><strong>Mostrar Consejo del día</strong><small>Adaptado a tu edad y a tus intereses.</small></span>
          </label>
        </div>
      </div>

      <div class="modal-actions wizard-footer">
        ${t>1?`<button type="button" class="button outline" data-wizard="prev">${i("left")} Anterior</button>`:'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${t<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${i("right")}</button>`:`<button type="submit" class="button solid">${i("check")} Guardar</button>`}
      </div>
    </form>
  </div>`}const Qe=e=>Da.find(a=>a.id===e?.glass)||Da[0],wt={calm:"sun",haze:"fog",wind:"wind",rain:"rain",gale:"storm"},ke=e=>i(wt[e]||"wave"),St=e=>A(e,{day:"numeric",month:"short"}).replace(/\. /g," ").trim();function _e(e={},a={}){const t=Qe(e),s=a.class?` ${a.class}`:"",o=a.paper===!1?"":`<path class="bottle-paper" d="M10.6 13.4h6.2M10.6 15.6h4.4" stroke="${t.hex}" stroke-width="1.1" stroke-linecap="round" opacity=".85"/>`;return`<svg class="bottle-glyph${s}" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <g transform="rotate(-24 14 14)">
      <path d="M11 4.2h6v3.1c0 1 .3 1.6 1 2.3l1.5 1.6c.9 1 1.4 2 1.4 3.3v7.2c0 1.4-1.1 2.5-2.5 2.5h-8.8c-1.4 0-2.5-1.1-2.5-2.5v-7.2c0-1.3.5-2.3 1.4-3.3l1.5-1.6c.7-.7 1-1.3 1-2.3Z" fill="color-mix(in srgb,${t.hex} 26%,transparent)" stroke="${t.hex}" stroke-width="1.3"/>
      <path d="M11.6 6.6h4.8" stroke="${t.hex}" stroke-width="1.1" opacity=".7"/>
      <rect class="bottle-cork" x="12.2" y="2.4" width="3.6" height="2.4" rx="1" fill="${t.hex}" opacity=".9"/>
      ${o}
      <path class="bottle-shine" d="M9.6 15.4v6.4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".55"/>
    </g>
  </svg>`}function nn(e=2400,a=8,t=110,s=240){let o=`M0 ${t}`;for(let n=0;n<e;n+=s)o+=` q ${s/4} ${-a} ${s/2} 0 q ${s/4} ${a} ${s/2} 0`;return`${o} L${e} 240 L0 240 Z`}function ot(e=0,a=0){const t=(s,o,n,r,l)=>{const c=e%7*9,u=(l*(1-Math.min(.62,a*.55))).toFixed(1);return`<path class="${r}" style="--wave-dur:${u}s;--wave-shift:${c}px;--wave-amp:${(1+a*.5).toFixed(2)}" d="${nn(2400,s,o,n)}"/>`};return`<svg class="sea-wave-svg" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden="true">
    ${t(7,126,300,"wave wave-4",26)}
    ${t(9,142,240,"wave wave-3",19)}
    ${t(11,160,190,"wave wave-2",14)}
    ${t(13,182,150,"wave wave-1",10)}
  </svg>`}function As(){let e="M0 15";for(let a=0;a<2400;a+=120)e+=" q30 -9 60 0 q30 9 60 0";return`<svg class="tide-rule" viewBox="0 0 1200 30" preserveAspectRatio="none" aria-hidden="true">
    <path class="tide-rule-path" d="${e}"/>
  </svg>`}function rn(e,a){const t=Math.round(e.illum*100),s=e.phase.replace("luna ","");return`<span class="sea-wash sea-wash-1" aria-hidden="true"></span>
    <span class="sea-wash sea-wash-2" aria-hidden="true"></span>
    <span class="sea-disc" style="--illum:${Math.max(6,t)}%" data-phase="${d(s)}" aria-hidden="true"></span>`}function ln(e,a,t){return e.length?`<ul class="sea-fleet">${e.map(s=>{const o=fe(s,a),n=Qe(s),r=(xo(o.pct)*100).toFixed(1),l=Q("2020-01-01",s.castAt),c=(2.5+l%3*1.4)*(1+t.rough*.9),p=Math.max(0,o.total-o.atSea)<=2&&o.fate==="drifting";return`<li class="sea-float ${p?"is-landing":""}" style="--x:${r}%;--tint:${n.hex};--lift:${(46+l%5*2.6).toFixed(1)}%;--bob:${c.toFixed(1)}px;--delay:${(l%9*.4).toFixed(2)}s;--dur:${(5.6-t.rough*1.8).toFixed(1)}s">
      <button type="button" class="sea-float-btn" data-action="open-bottle" data-id="${s.id}" title="${d((s.text||"").slice(0,70))}">
        <span class="sea-wake" aria-hidden="true"></span>
        ${_e(s)}
        <span class="sea-float-tag">${p?"toca tierra":`${o.atSea} d · ${pt(s,a)}`}</span>
      </button>
    </li>`}).join("")}</ul>`:""}function dn(){return`<svg viewBox="0 0 60 96" fill="none" aria-hidden="true">
    <path d="M22 88 26 30h8l4 58Z" fill="color-mix(in srgb,var(--ink) 62%,transparent)" stroke="var(--ink)" stroke-width="1.4"/>
    <path d="M26.4 44h7.2M27.6 60h4.8" stroke="var(--paper-2)" stroke-width="3" opacity=".55"/>
    <rect x="24" y="20" width="12" height="10" rx="1.5" fill="color-mix(in srgb,var(--ochre) 70%,var(--paper-2))" stroke="var(--ink)" stroke-width="1.4"/>
    <path d="M23 20h14l-7-8Z" fill="var(--ink)"/>
    <circle class="sea-beacon" cx="30" cy="25" r="2.6" fill="var(--ochre)"/>
    <path class="sea-beam" d="M36 25h22l-6 5h-16Z" fill="var(--ochre)" opacity=".35"/>
    <path d="M14 88h32" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>
  </svg>`}function cn(e,a){return e.length?`<div class="sea-shore"><span class="sea-shore-label">${i("anchor")} La orilla</span>
    <div class="shore-list">${e.slice(0,4).map((t,s)=>`
      <button type="button" class="shore-bottle ${t.seen?"":"is-new"}" style="--i:${s}" data-action="open-bottle" data-id="${t.id}">
        <span class="shore-bottle-glow">${_e(t,{class:"is-landed"})}</span>
        <span class="shore-bottle-meta">
          <strong>${Q(t.castAt,t.returnedAt||a)} días después</strong>
          <small>${d((t.text||"").slice(0,54))}${(t.text||"").length>54?"…":""}</small>
        </span>
        ${t.seen?"":'<span class="shore-new-dot" aria-label="Sin abrir"></span>'}
      </button>`).join("")}
    </div>
  </div>`:""}function un(e){const a=`<span class="ribbon-name">${e.marker||St(e.date)}</span>
      <span class="ribbon-water"><i style="height:${(e.level*100).toFixed(0)}%"></i></span>
      <span class="ribbon-glyph">${ke(e.weather.id)}</span>
      <span class="ribbon-dots">${"<b></b>".repeat(Math.min(3,e.arrivalCount))}</span>
      ${e.tide.key==="spring"?'<span class="ribbon-spring" title="marea viva"></span>':""}`,t=`ribbon-day${e.arrivalCount?" is-arrival":""}`,s=e.isToday?' data-today="1"':"";if(e.arrivalCount){const o=e.arrivalCount;return`<button type="button" class="${t}" role="listitem" data-action="sea-day" data-date="${e.date}"${s} title="${o} ${o===1?"botella varada":"botellas varadas"}">${a}</button>`}return`<span class="${t}" role="listitem" data-date="${e.date}"${s}>${a}</span>`}function pn(e){const a=e.arrivalCount?`<span class="forecast-cta">${i("anchor")} abrir</span>`:e.tide.key==="spring"?'<span class="forecast-spring">viva</span>':'<span class="forecast-spring is-ghost">&nbsp;</span>',t=`<span class="forecast-top"><b>${e.marker||St(e.date)}</b>${ke(e.weather.id)}</span>
      <span class="forecast-column"><i style="height:${(e.level*100).toFixed(0)}%"></i></span>
      <span class="forecast-dots">${e.arrivalCount?`<em>${e.arrivalCount}</em>`:""}</span>
      <span class="forecast-foot">${a}</span>`,s=`data-date="${e.date}"${e.isToday?' data-today="1"':""}${e.tide.key==="spring"?' data-spring="1"':""}`;return e.arrivalCount?`<button type="button" class="forecast-day has-arrival" ${s} data-action="sea-day" title="${e.arrivalCount} ${e.arrivalCount===1?"botella":"botellas"} que ${e.arrivalCount===1?"toca tierra":"tocan tierra"}">${t}</button>`:`<div class="forecast-day" ${s}>${t}</div>`}function mn(e=[],a=g(),t={}){const s=ve(e,a),o=De(a),n=o.tide,r=ut({today:a,bottles:e,days:t.ribbonDays||7}),l=fs(s.drifting.length?s.drifting:[],a),c=s.lost.length?`<span class="sea-lost-note">${i("anchor")} ${s.lost.length} ${s.lost.length===1?"botella perdida":"botellas perdidas"} en el mar</span>`:"";return`<section class="sea-panel ${s.returned.length?"has-shore":""}" data-tide="${n.key}" data-weather="${o.weather.id}"
    style="--water:${(o.level*100).toFixed(1)}%;--rough:${o.rough.toFixed(2)}" aria-label="El estado del mar hoy">
    <header class="sea-sky">
      ${rn(n)}
      <span class="sea-tide-pill">${i("tide")} ${d(n.name)} · luna al ${Math.round(n.illum*100)}%</span>
      <h2 class="sea-headline">${hn(s)}</h2>
      <p class="sea-sub">${d(o.weather.desc)}</p>
      <p class="sea-part">${ke(o.weather.id)} ${d(o.weather.label)} · viento ${d(o.wind.label)}, ${o.wind.kmh} nudos${o.wind.offshore?' <span class="sea-part-flag">de tierra</span>':' <span class="sea-part-flag is-good">a favor</span>'}</p>
    </header>
    <div class="sea-water">
      ${o.weather.id==="rain"||o.weather.id==="gale"?'<span class="sea-veil" aria-hidden="true"></span>':""}
      ${ot(Q("2020-01-01",a),o.rough)}
      <span class="sea-lighthouse" aria-hidden="true">${dn()}</span>
      ${ln(s.drifting,a,o)}
      <span class="sea-horizon-line"></span>
    </div>
    <div class="sea-ribbon" role="list">${r.map(un).join("")}</div>
    ${l?`<p class="sea-next">${i("hourglass")} La próxima botella toca tierra el <b>${d(A(l.date,{day:"numeric",month:"long"}))}</b> · ${l.daysLeft} ${l.daysLeft===1?"día":"días"} · marea ${d(Re(l.date).name.replace("Marea ",""))}</p>`:""}
    ${cn(s.returned,a)}
    ${c?`<footer class="sea-foot">${c}<button type="button" class="text-button" data-view="thoughts" data-action="thoughts-tab" data-tab="lost">Ver el archivo ${i("arrow")}</button></footer>`:""}
  </section>`}function hn(e,a){const t=e.drifting.length,s=e.returned.length;return s>0?`El mar te ha devuelto ${s} ${s===1?"pensamiento":"pensamientos"}`:t>0?`${t} ${t===1?"pensamiento navega":"pensamientos navegan"} ${ca(e.drifting[0].sea).reach}`:"El mar está en calma"}function gn(e=g(),a=[]){const t=De(e),s=t.tide,o=ve(a,e),n=ut({today:e,bottles:a,days:14}).filter(r=>r.arrivalCount).slice(0,3);return`<section class="card sea-part-card" data-weather="${t.weather.id}" style="--water:${(t.level*100).toFixed(1)}%;--rough:${t.rough.toFixed(2)}">
    <div class="section-heading">
      <p class="section-index">${ke(t.weather.id)} El parte de hoy</p>
      <span class="tag">${d(s.name)}</span>
    </div>
    <p class="sea-part-headline">${d(t.weather.label)}, con el agua al ${Math.round(t.level*100)}%</p>
    <div class="part-rows">
      <div class="part-row">
        <span class="part-row-label">${i("wind")} Viento</span>
        <span class="part-row-value">${d(t.wind.label)} <b>${t.wind.kmh}</b> nudos</span>
        <span class="wind-rose" style="--dir:${fn(t.wind.id)}" aria-hidden="true"><i></i></span>
      </div>
      <div class="part-row">
        <span class="part-row-label">${i("tide")} Marea</span>
        <span class="part-row-value">${d(s.name.replace("Marea ",""))} <b>${Math.round(s.strength*100)}</b>%</span>
        <span class="part-meter"><i style="width:${Math.round(s.strength*100)}%"></i></span>
      </div>
      <div class="part-row">
        <span class="part-row-label">${i("moon")} Luna</span>
        <span class="part-row-value">${d(s.phase)} <b>${Math.round(s.illum*100)}</b>%</span>
        <span class="part-moon" style="--illum:${Math.round(s.illum*100)}%" aria-hidden="true"></span>
      </div>
      <div class="part-row">
        <span class="part-row-label">${i("sail")} En el agua</span>
        <span class="part-row-value"><b>${o.drifting.length}</b> ${o.drifting.length===1?"botella":"botellas"}</span>
      </div>
    </div>
    <p class="field-caption sea-part-note">${d(Pa(e))} ${t.push>0?`Hoy el mar no deja entrar a nadie: lo que suelles esperarà ${t.push} ${t.push===1?"día más":"días más"} en pleamar.`:"Con este viento, lo que eches hoy entra en cuanto suba la marea."}</p>
    ${n.length?`<ul class="part-soon">${n.map(r=>`<li><button type="button" data-action="sea-day" data-date="${r.date}">${i("anchor")} <b>${r.arrivalCount}</b> el ${d(St(r.date))}${r.day===0?" (hoy)":r.day===1?" (mañana)":""}</button></li>`).join("")}</ul>`:""}
  </section>`}const bn={levante:90,poniente:270,noroeste:315,gallego:225,suroeste:225,mistral:0,libeccio:225,gregal:45},fn=e=>bn[e]??0;function vn(e=[]){return e.length?`<section class="card forecast-card" aria-label="Pronóstico de la costa">
    <div class="section-heading">
      <p class="section-index">${i("calendar")} La costa en dos semanas</p>
      <span class="field-caption">el agua sube con la marea viva · los puntos son botellas que llegan</span>
    </div>
    <div class="forecast-grid">${e.map(pn).join("")}</div>
    <p class="forecast-legend"><span><i class="lg lg-water"></i> nivel del agua</span><span><i class="lg lg-spring"></i> marea viva: es cuando el mar devuelve las cosas</span><span><i class="lg lg-arrival"></i> botella que toca tierra</span></p>
  </section>`:""}function yn(e,a=g()){const t=So(e,a),s=fe(e,a);return`<div class="mile-track" style="--pct:${Math.round((t.fate==="drifting"?t.pct:1)*100)}%" data-fate="${t.fate}">
    <span class="mile-rail"><i class="mile-fill"></i></span>
    ${t.list.map((n,r)=>`<span class="mile ${n.reached?"is-reached":""} ${r===t.current&&t.fate==="drifting"?"is-here":""}" style="--mi:${r}">
      <b class="mile-dot"></b><small>${d(n.label)}</small></span>`).join("")}
    <p class="mile-caption">${t.fate==="lost"||t.fate==="returned"?d(va(e,a)):t.next?`${d(va(e,a))} · el próximo hito: ${d(t.next.label)}`:d(s.label)}</p>
  </div>`}function $n(e={},a=g(),t={}){const s=String(t.text||""),o=s.trim()?s.trim().split(/\s+/).length:0,n=De(a),r=t.restoredFrom?`<p class="draft-note" role="status">${i("refresh")} Recuperado de donde lo dejaste <span class="draft-when">${d(t.restoredFrom)}</span> <button type="button" class="text-button is-danger" data-action="discard-bottle-draft">${i("close")} descartar</button></p>`:"";return`<form id="bottle-form" class="card bottle-composer" data-draft-scope="botella">
    <div class="section-heading">
      <p class="section-index">${i("pen")} Escribe tu pensamiento</p>
      <span class="save-status" data-save-status="idle">${i("check")} se guarda solo</span>
    </div>
    ${r}
    <label class="sr-only" for="bottle-text">Pensamiento para la botella</label>
    <textarea id="bottle-text" name="text" class="bottle-text" data-draft="botella:text" maxlength="1200" rows="4"
      placeholder="Lo que hoy no quieres guardar en el cuaderno... escríbelo y déjalo ir.">${d(s)}</textarea>
    <p class="composer-foot-note">${i("wave")} Una vez en el agua, el viaje ya está escrito: ni tú ni nadie podrá cambiarlo.</p>
    <div class="composer-bar">
      <div class="composer-moods" role="radiogroup" aria-label="¿Con qué ánimo lo escribes?">
        <span class="composer-bar-label">Ánimo</span>
        ${O.map(l=>`<label class="mini-mood" style="--mood-color:${l.color}" title="${l.label}">
          <input type="radio" name="mood" value="${l.value}" ${t.mood===l.value?"checked":""}>
          <span>${l.emoji}</span>
        </label>`).join("")}
      </div>
      <span class="word-count" id="bottle-words">${o} palabras</span>
    </div>

    <div class="composer-part">
      ${ke(n.weather.id)}
      <p><b>${d(n.weather.label)}</b>, viento ${d(n.wind.label)} a ${n.wind.kmh} nudos y ${d(n.tide.name.toLowerCase())}. ${n.push>0?`Hoy el mar retiene lo que eches ${n.push} ${n.push===1?"día":"días"} más.`:"Hoy el mar deja entrar rápido lo que suelles."}</p>
    </div>

    <p class="section-index" style="margin-top:22px">${i("wave")} ¿Hasta dónde lo lanzas?</p>
    <div class="sea-picker">
      ${Ca.map((l,c)=>`<label class="sea-option" style="--opt-i:${c}">
        <input type="radio" name="sea" value="${l.id}" ${(t.sea||"breeze")===l.id?"checked":""}>
        <span class="sea-option-waves" aria-hidden="true">${wn(c)}</span>
        <span class="sea-option-top">
          <strong>${d(l.label)}</strong>
          <small>${l.min}–${l.max} días</small>
        </span>
        <span class="sea-option-desc">${d(l.desc)}</span>
        <span class="sea-option-odds"><i style="width:${Math.round(l.chance*100)}%"></i><em>${Math.round(l.chance*100)}/100 vuelven</em></span>
      </label>`).join("")}
    </div>

    <div class="save-area">
      <span>${i("lock")} Nada sale de este navegador: el azar lo calcula tu propio cuaderno.</span>
      <button type="submit" class="button solid save-button" ${s.trim()?"":"disabled"}>${i("send")} Echar al mar</button>
    </div>
  </form>`}function wn(e){const a=[3,5,8,12],t=a[e%a.length];let s="M0 14";for(let o=0;o<200;o+=40)s+=` q10 ${-t} 20 0 q10 ${t} 20 0`;return`<svg viewBox="0 0 200 28" preserveAspectRatio="none" aria-hidden="true"><path d="${s}" class="mini-wave"/><path d="${s} L200 28 L0 28 Z" class="mini-wave-fill"/></svg>`}function Sn(e,a=g(),t=0){const s=fe(e,a),o=Qe(e),n=ca(e.sea),r=e.mood?O[e.mood-1]:null,l=s.fate==="drifting"?"en el mar":s.fate==="returned"?"en la orilla":"perdida",c=Math.max(0,s.total-s.atSea),u=s.fate==="drifting"&&c<=2;return e.weather&&`${ke(e.weather)}${d(wt[e.weather]&&e.weather||"")}`,`<article class="card bottle-card is-${s.fate} ${u?"is-landing":""}" style="--tint:${o.hex};--i:${Math.min(9,t)}" data-bottle-id="${e.id}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${_e(e)}</span>
      <div class="bottle-card-who">
        <p class="eyebrow">escrito el ${d(A(e.castAt,{day:"numeric",month:"long",year:"numeric"}))}</p>
        <h3>${d(n.label)} <span class="bottle-card-status s-${s.fate}">${l}</span></h3>
      </div>
      ${r?`<span class="mood-tag" style="--mood:${r.color}">${r.emoji} ${r.label}</span>`:""}
    </header>
    <p class="bottle-card-text ${ys(e.text)<=26?"is-short":""}">${d(e.text)}</p>
    ${e.reply?`<p class="bottle-card-reply"><span>${i("reply")} Tu respuesta de entonces:</span> ${d(e.reply)}</p>`:""}

    ${yn(e,a)}

    <footer class="bottle-card-foot">
      <span class="chiplet">${i("compass")} ${d(e.current||"a la deriva")}</span>
      <span class="chiplet">${i("wind")} ${s.miles} millas</span>
      ${e.wind?`<span class="chiplet" title="el parte del día que la soltaste">${ke(e.weather)} ${d(e.wind)}${e.windSpeed?`, ${e.windSpeed} nudos`:""}</span>`:""}
      ${s.milesHome!==null&&s.fate==="drifting"?`<span class="chiplet">${i("anchor")} a ${s.milesHome} millas de casa</span>`:""}
      <span class="chiplet ${u?"is-hot":""}">${i("hourglass")} ${d(pt(e,a))}</span>
      <div class="bottle-card-actions">
        ${s.fate==="drifting"?`<button type="button" class="text-button" data-action="recall-bottle" data-id="${e.id}">${i("wind")} Traer a la orilla</button>`:""}
        ${s.fate==="returned"?`<button type="button" class="text-button" data-action="open-bottle" data-id="${e.id}">${i("stamp")} Abrir</button>`:""}
        ${s.fate==="lost"?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${e.id}">${i("refresh")} Volver a lanzar</button>`:""}
        <button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${e.id}" aria-label="Romper la botella">${i("trash")}</button>
      </div>
    </footer>
  </article>`}function xn(e,a=g(),t={}){const s=fe(e,a),o=Qe(e),n=ca(e.sea),r=e.mood?O[e.mood-1]:null,l=e.returnedAt?Re(e.returnedAt):null,c=Math.max(1,Q(e.castAt,e.returnedAt||e.lostAt||a)),u=t.name?`Cuaderno de ${d(t.name)}`:"Tu cuaderno";return e.weather&&`${wt[e.weather]?e.weather:"mar"}`,`<div class="modal-card bottle-modal ${e.seen===!1?"is-fresh":""}" style="--tint:${o.hex}" data-modal-bottle="${e.id}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${i("close")}</button>
    <span class="bottle-wax" aria-hidden="true">${_e(e,{paper:!1})}<i class="wax-crack"></i></span>
    <p class="eyebrow">${u} · botella del ${d(A(e.castAt,{day:"numeric",month:"long",year:"numeric"}))}</p>
    <h2 class="bottle-modal-title">${s.fate==="returned"?"El mar te la devolvió":s.fate==="lost"?"Se perdió en el mar":"Sigue en el mar"}</h2>
    ${r?`<p class="bottle-modal-mood">${r.emoji} Lo escribiste sintiendo: <b>${r.label.toLowerCase()}</b></p>`:""}
    <div class="bottle-note" data-fate="${s.fate}">
      <span class="note-fold note-fold-1" aria-hidden="true"></span>
      <span class="note-fold note-fold-2" aria-hidden="true"></span>
      <blockquote class="bottle-modal-text">${d(e.text)}</blockquote>
    </div>
    <div class="bottle-modal-voyage">
      ${z("Días a la deriva",c,"días")}
      ${z("Millas navegadas",s.miles,"millas")}
      ${z("Mar elegido",d(n.label.split(" ")[0]),"",n.desc)}
      ${z("Marea",l?d(l.name.replace("Marea ","")):"—","","las botellas vuelven en marea viva")}
      ${e.wind?z("Viento al soltarla",d(e.wind),e.windSpeed?`${e.windSpeed} nudos`:"",e.push?`el mar la retuvo ${e.push} ${e.push===1?"día":"días"} más`:"entró en la primera pleamar"):""}
    </div>
    ${s.fate==="returned"?`<p class="bottle-modal-foot-note">${i("check")} Volvió el ${d(A(e.returnedAt||a,{day:"numeric",month:"long"}))}, ${c} días después de soltarla.</p>`:""}
    ${s.fate==="lost"?`<p class="bottle-modal-foot-note is-lost">${i("anchor")} Nunca llegó a ninguna orilla. Lo que escribiste sigue aquí, si lo quieres leer.</p>`:""}
    ${e.reply?`<div class="bottle-reply-box"><span>${i("reply")} Respondiste a tu yo de entonces${e.repliedAt?` · ${d(A(e.repliedAt.slice(0,10),{day:"numeric",month:"long"}))}`:""}</span><p>${d(e.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">¿Qué le dirías hoy a quien escribió esto?</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" data-draft="respuesta:${e.id}:text" placeholder="Respóndele con la calma que te da el tiempo...">${d(e.replyDraft||"")}</textarea>
        <span class="field-caption" data-reply-status>${e.replyDraft?"Tienes una respuesta a medias, guardada en este dispositivo.":"Si te vas a mitad, no se pierde: se queda escrito aquí."}</span>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${e.reply?"":`<button class="button outline" data-modal="reply">${i("reply")} Responder</button>`}
      ${e.reply?`<button class="button outline" data-modal="reply-clear">${i("close")} Quitar respuesta</button>`:""}
      ${s.fate==="lost"?`<button class="button outline" data-modal="recast">${i("refresh")} Volver a lanzar</button>`:""}
      <button class="button outline" data-modal="keep">${i("bookmark")} ${e.kept?"Desanclar":"Anclar a la colección"}</button>
      <button class="button outline" data-modal="to-entry">${i("pen")} Copiar en la entrada de hoy</button>
      ${s.fate==="drifting"?`<button class="button solid" data-modal="recall">${i("wind")} Traer a la orilla</button>`:""}
    </div>
  </div>`}function kn(e={}){return`<div class="splash-layer" style="--tint:${Qe(e).hex}">
    <span class="splash-arc">${_e(e)}</span>
    <span class="splash-ring"></span>
    <span class="splash-ring is-2"></span>
    <span class="splash-drop"></span>
    <span class="splash-drop is-2"></span>
    <span class="splash-drop is-3"></span>
  </div>`}function qn(e=[],a=g()){const t=Eo(e,a);return`<div class="ledger-grid">
    ${z("Botellas en el mar",t.drifting,"activas",t.returned?`${t.returned} esperando en la orilla`:"el agua está tranquila")}
    ${z("De vueltas a casa",t.returned,"recibidas",`media de ${t.avgDays} días de viaje`)}
    ${z("Perdidas",t.lost,"a pique","también forman parte del mar")}
    ${z("Palabras soltadas",t.words,"palabras",t.farthest.miles?`el viaje más largo: ${t.farthest.miles} millas`:"aún no hay travesías")}
  </div>`}function Mn(e=[]){const a=g(),t=ve(e,a),s=De(a),o=t.returned[0],n=t.drifting.length,r=fs(t.drifting,a);return o?`<section class="card sea-teaser is-arrival" style="--tint:${Qe(o).hex};--water:${(s.level*100).toFixed(1)}%">
      <div class="sea-teaser-waves">${ot(2,s.rough)}</div>
      <p class="eyebrow">${i("wave")} El mar · ${d(s.weather.label)}</p>
      <h2>Te ha vuelto una botella</h2>
      <p class="sea-teaser-quote">«${d(o.text.slice(0,120))}${o.text.length>120?"…":""}»</p>
      <div class="sea-teaser-actions">
        <button type="button" class="button solid small-btn" data-action="open-bottle" data-id="${o.id}">${i("stamp")} Abrir la botella</button>
        ${n?`<span class="sea-teaser-count">${n} ${n===1?"botella sigue":"botellas siguen"} en el agua</span>`:""}
      </div>
    </section>`:`<section class="card sea-teaser ${r?"":"is-idle"}" style="--water:${(s.level*100).toFixed(1)}%">
    <div class="sea-teaser-waves">${ot(5,s.rough)}</div>
    <p class="eyebrow">${i("wave")} El mar · ${d(s.weather.label)}</p>
    <h2>${n?`${n} ${n===1?"pensamiento navega":"pensamientos navegan"}`:"Nada escrito en el agua"}</h2>
    <p class="sea-teaser-quote">${n?`${d(va(t.drifting[0],a))}${r?` · ${d(pt(r.bottle,a))}`:""}`:"Escribe un pensamiento, séllalo y echa la botella al mar. Puede que vuelva a ti."}</p>
    <div class="sea-teaser-actions">
      <button type="button" class="button outline small-btn" data-view="thoughts">${i("pen")} ${n?"Ver la travesía":"Escribir un pensamiento"}</button>
      ${n?`<span class="sea-teaser-count">${d(Pa(a))}</span>`:""}
    </div>
  </section>`}function En(e="shore"){const a={shore:["Nada en la orilla","Cuando la marea viva traiga una botella, aparecerá aquí doblada y con su sello."],sea:["El agua está vacía","Escribe algo que no quieras guardar y échalo a la deriva."],kept:["Sin notas ancladas","Las botellas que ancles se quedan aquí para siempre."],lost:["Ninguna se ha hundido","El mar todavía no se ha quedado nada tuyo."]}[e]||["El mar está vacío","Escribe lo que no quieres guardar, échalo a la deriva y deja que la marea decida si devolvértelo."];return`<div class="empty-state sea-empty" data-tab="${e}">
    <span class="sea-empty-art">${_e({})}<i class="sea-empty-ripple"></i><i class="sea-empty-ripple is-2"></i></span>
    <h3>${d(a[0])}</h3>
    <p>${d(a[1])}</p>
  </div>`}const Ha="diario.drafts.v1",An=6e3,_t=40,K={entry:e=>`entrada:${e}`,bottle:()=>"botella",reply:e=>`respuesta:${e}`,tomorrow:()=>"manana",setup:()=>"perfil"};function qe(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function et(e,a=An){const t=String(e??"");return t.length>a?t.slice(0,a):t}function _a(){let e=null;try{e=localStorage.getItem(Ha)}catch{return{}}if(!e)return{};try{const a=JSON.parse(e);return qe(a)?a:{}}catch{return{}}}function Ls(e){const a=Object.keys(e);if(!a.length){try{localStorage.removeItem(Ha)}catch{}return!0}let t=e;a.length>_t&&(t=Object.fromEntries(a.sort((s,o)=>String(e[o]?.savedAt||"").localeCompare(String(e[s]?.savedAt||""))).slice(0,_t).map(s=>[s,e[s]])));try{return localStorage.setItem(Ha,JSON.stringify(t)),!0}catch{return!1}}function Va(e,a){if(!e)return null;const t={};let s=0;for(const[r,l]of Object.entries(qe(a)?a:{}))if(l!=null){if(typeof l=="string"){const c=et(l);if(!c.trim())continue;t[r]=c,s++}else if(typeof l=="number"||typeof l=="boolean")t[r]=l,s++;else if(Array.isArray(l)){const c=l.map(u=>typeof u=="string"?et(u,600):u).filter(u=>typeof u!="string"||u.trim());c.length&&(t[r]=c,s++)}else if(qe(l)){const c={};for(const[u,p]of Object.entries(l))typeof p=="number"||typeof p=="boolean"?c[u]=p:typeof p=="string"&&p.trim()&&(c[u]=et(p,600));Object.keys(c).length&&(t[r]=c)}}if(!s)return oe(e),null;const o=_a(),n=new Date().toISOString();return o[e]={data:t,savedAt:n},{savedAt:n,ok:Ls(o)}}function xt(e){if(!e)return null;const a=_a()[e];return qe(a)?a:null}function Se(e){const a=xt(e);return a&&qe(a.data)?a.data:null}function oe(e){if(!e)return!1;const a=_a();return e in a?(delete a[e],Ls(a),!0):!1}function kt(){const e=_a();return Object.entries(e).filter(([,a])=>qe(a)&&qe(a.data)).map(([a,t])=>({scope:a,savedAt:t.savedAt||"",data:t.data})).sort((a,t)=>String(t.savedAt).localeCompare(String(a.savedAt)))}function Cs(e,a){const t=xt(e);return t?.savedAt?a?String(t.savedAt)>String(a):!0:!1}function Ds(e,a=Date.now()){const t=xt(e);if(!t?.savedAt)return null;const s=Date.parse(t.savedAt);return Number.isFinite(s)?Math.max(0,Math.round((a-s)/6e4)):null}function js(e,a=Date.now()){const t=Se(e);if(!t)return null;const s=Object.values(t).filter(r=>typeof r=="string").join(" ").trim().split(/\s+/).filter(Boolean).length,o=Ds(e,a),n=o===null?"":o<1?"ahora mismo":o<60?`hace ${o} min`:`hace ${Math.round(o/60)} h`;return{words:s,when:n,minutes:o}}function Me(){const e=kt();return{total:e.length,entries:e.filter(a=>a.scope.startsWith("entrada:")).length,bottles:e.filter(a=>a.scope==="botella").length,newest:e[0]?.savedAt||""}}function Vt(){try{localStorage.removeItem(Ha)}catch{}return!0}const Ts=["L","M","X","J","V","S","D"],Zt=e=>Ts[(Ce(e).getDay()+6)%7];function Hs(e,a,t=""){const o=2*Math.PI*26,n=(Math.min(100,Math.max(0,e))/100*o).toFixed(2);return`<div class="ring-widget ${e>=100?"is-full":""}">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle class="ring-track" cx="32" cy="32" r="26"/>
      <circle class="ring-fill" cx="32" cy="32" r="26" stroke-dasharray="${n} ${o.toFixed(2)}"/>
    </svg>
    <span class="ring-value">${a}</span>
    ${t?`<span class="ring-sub">${d(t)}</span>`:""}
  </div>`}function Ln(e=[],a=null,t=[],s=g(),o=g()){return e.length?`<div class="habit-board">${e.map((n,r)=>{const l=!!a?.habits?.[n.id],c=Oa(t,n.id,s>o?s:o),u=hs(t,n.id,7,s);return`<button type="button" class="habit-toggle ${l?"is-done":""}" style="--habit-i:${r}"
      data-action="toggle-habit" data-habit="${n.id}" data-date="${s}" aria-pressed="${l}">
      <span class="habit-tick" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.8 11.8 12.8 4.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span class="habit-copy">
        <strong>${d(n.name)}</strong>
        <small>${l?"hecho hoy":s===o?"toca para marcarlo":"aún por hacer"}</small>
      </span>
      <span class="habit-dots" aria-hidden="true">
        ${Array.from({length:7},(p,b)=>{const $=E(s,b-6);return`<i class="${!!t.find(f=>f.date===$)?.habits?.[n.id]?"on":""} ${$>o?"future":""}"></i>`}).join("")}
      </span>
      <span class="habit-streak ${c?"is-hot":""}" title="Racha actual">${c?`${i("flame")} ${c}`:`${u.done}/7`}</span>
    </button>`}).join("")}</div>`:""}function Cn(e=[],a=[],{days:t=28,end:s=g(),today:o=g(),title:n="Tus últimas 4 semanas"}={}){if(!a.length)return"";const{dates:r,rows:l}=co(e,a,t,s,o),c=A(r[0],{day:"numeric",month:"short"}).replace(/\./g,"");return`<section class="card momentum-card">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${i("grid")} Constancia</p>
        <h2>${d(n)}</h2>
      </div>
      <span class="field-caption">${d(c)} → ${d(A(r[r.length-1],{day:"numeric",month:"short"}))}</span>
    </div>
    <p class="momentum-hint">Toca cualquier casilla para anotar o quitar un hábito de ese día. Solo días pasados o el de hoy.</p>
    <div class="momentum-scroll">
      <div class="momentum-grid" style="--cols:${t}">
        <span class="momentum-corner"></span>
        ${r.map(u=>`<span class="momentum-day ${u===o?"is-today":""}">${u.slice(8,10)}</span>`).join("")}
        ${l.map(u=>`
          <span class="momentum-name" title="${d(u.habit.name)}">${d(u.habit.name)}</span>
          ${u.cells.map(p=>`<button type="button" class="momentum-cell ${p.done?"is-done":""} ${p.future?"is-future":""} ${p.recorded?"":"is-blank"}"
            ${p.future?"disabled":""} data-action="toggle-habit" data-habit="${u.habit.id}" data-date="${p.date}" aria-pressed="${p.done}"
            aria-label="${d(u.habit.name)} · ${A(p.date)} · ${p.done?"cumplido":"sin cumplir"}">
            <i></i>
          </button>`).join("")}
        `).join("")}
      </div>
      <div class="momentum-weekdays" style="--cols:${t}">
        <span class="momentum-corner"></span>
        ${r.map(u=>`<span class="${Zt(u)==="L"?"is-mon":""}">${Zt(u)}</span>`).join("")}
      </div>
    </div>
    <div class="momentum-legend">
      <span><i class="lg done"></i> cumplido</span>
      <span><i class="lg"></i> sin registrar</span>
      <span><i class="lg blank"></i> día sin entrada</span>
      <span class="momentum-weekday-note">${Ts.join(" ")} · cada lunes resaltado</span>
    </div>
  </section>`}function Dn(e=[],a=[],t=g()){return e.length?`<section class="card habit-stats-card">
    <div class="section-heading"><div><p class="eyebrow">${i("chart")}constancia por hábito</p><h2>Cada uno a su ritmo</h2></div><span class="field-caption">últimos 28 días</span></div>
    <ul class="habit-stats-list">
      ${e.map(s=>{const o=hs(a,s.id,28,t),n=Oa(a,s.id,t),r=ms(a,s.id);return`<li class="habit-stat-row">
          <div class="habit-stat-name">
            <strong>${d(s.name)}</strong>
            <small>${Ft(a,s.id)} ${Ft(a,s.id)===1?"día marcado":"días marcados"} en total</small>
          </div>
          <div class="habit-stat-meter"><i style="width:${o.pct}%"></i><span>${o.pct}%</span></div>
          <div class="habit-stat-figures">
            <span title="Racha actual">${i("flame")} <b>${n}</b> d</span>
            <span title="Mejor racha">${i("seal")} <b>${r}</b> d</span>
          </div>
          <div class="habit-stat-actions">
            <button type="button" class="icon-button ghost" data-action="edit-habit" data-habit="${s.id}" aria-label="Renombrar ${d(s.name)}">${i("pen")}</button>
            <button type="button" class="icon-button ghost delete-button" data-action="delete-habit" data-habit="${s.id}" data-name="${d(s.name)}" aria-label="Eliminar ${d(s.name)}">${i("trash")}</button>
          </div>
        </li>`}).join("")}
    </ul>
  </section>`:""}function jn(e={},a=[]){const t=new Set(a.map(o=>o.name.toLowerCase())),s=(e.suggestedHabits||[]).filter(o=>!t.has(o.toLowerCase())).slice(0,6);return`<section class="card habit-composer">
    <div class="section-heading"><div><p class="eyebrow">${i("plus")}Nueva rutina</p><h2>Añade un hábito</h2></div><span class="field-caption">${a.length}/30</span></div>
    <div class="habit-add">
      <input id="new-habit" maxlength="40" placeholder="Nombre del hábito (ej. Leer 20 minutos)" aria-label="Nuevo hábito">
      <button type="button" class="button solid small-btn" data-action="add-habit">${i("plus")} Añadir</button>
    </div>
    ${s.length?`
      <p class="field-caption" style="margin-top:16px">Sugerencias para tu etapa · toca para añadir</p>
      <div class="tag-picker">
        ${s.map(o=>`<button type="button" class="tag-chip" data-action="add-suggested-habit" data-name="${d(o)}"><span>+ ${d(o)}</span></button>`).join("")}
      </div>`:""}
    ${a.length?"":'<p class="habit-empty">Aún no tienes hábitos. Añade uno, o marca algunos en tu perfil y aparecerán aquí.</p>'}
  </section>`}function Tn(e={},a={},t=[]){return`<section class="card counters-board">
    <div class="section-heading">
      <div><p class="eyebrow">${i("drop")} Contadores</p><h2>Lo de hoy, en cifras</h2></div>
      <span class="field-caption">se guarda al instante</span>
    </div>
    ${Xo(e?.counters||{},Le,a,{action:"routine"})}
    ${t.length?`<p class="sleep-mood-insight">${i("spark")} ${d(t[0])}</p>`:""}
  </section>`}function Hn(e={},a=g()){const t=e?.goals||[];return`<section class="card tomorrow-board">
    <div class="section-heading">
      <div><p class="eyebrow">${i("sail")} Para mañana</p><h2>La lista de la próxima marea</h2></div>
      <button type="button" class="text-button" data-action="add-goal-routine">${i("plus")} Añadir tarea</button>
    </div>
    <label class="sr-only" for="routine-tomorrow">Intención para mañana</label>
    <textarea id="routine-tomorrow" class="tomorrow-intent" name="tomorrow" maxlength="600" rows="2"
      placeholder="Mañana quiero... (una frase basta)">${d(e?.tomorrow||"")}</textarea>
    <div class="task-list" id="routine-goals">
      ${t.length?t.map((s,o)=>`<div class="task-row">
        <span class="task-index">${String(o+1).padStart(2,"0")}</span>
        <input class="task-input" data-index="${o}" value="${d(s)}" maxlength="200" aria-label="Tarea ${o+1}">
        <button type="button" class="icon-button ghost delete-button" data-action="remove-goal-routine" data-index="${o}" aria-label="Quitar tarea">${i("close")}</button>
      </div>`).join(""):'<p class="habit-empty">Nada apuntado para mañana. Tres tareas concretas suelen funcionar mejor que diez genéricas.</p>'}
    </div>
  </section>`}function Nn(e=[],a=null,t=[],s=g()){const o=e.filter(c=>a?.habits?.[c.id]).length,n=e.length?Math.round(o/e.length*100):0,r=e.length?Math.max(0,...e.map(c=>Oa(t,c.id,s))):0,l=A($e(s),{day:"numeric",month:"short"});return`<section class="card routine-teaser">
    <div class="section-heading">
      <div><p class="eyebrow">${i("listChecks")} Rutina de hoy</p><h2>${o}/${e.length||0} ${e.length===1?"hábito":"hábitos"}</h2></div>
      ${Hs(n,`${n}%`)}
    </div>
    <p class="routine-teaser-note">${e.length?`La lista completa, los contadores y tus rachas viven ahora en su propia pestaña. Semana del ${d(l)}.`:"Todavía no hay hábitos: crea tu lista en la pestaña Rutina."}</p>
    <button type="button" class="text-button full-link" data-view="routine">Ir a Rutina ${i("arrow")}</button>
    ${r?`<span class="routine-teaser-flame">${i("flame")} racha de ${r} días</span>`:""}
  </section>`}const N=document.querySelector("#app");let S=[],x=[],L=[],m=Qa(),ge="",F="diary",y=g(),X=g(),ba=g(),ce="shore",Xe="hoy",re={text:"",mood:null,sea:"breeze"},Be=7,ae=!1,J=!1,W=!1,ya="",$a="",wa="",Sa="grid",xa="list",Fe="pulse",ka="personal",Ye=!1,Ne=null,qt=0,Mt=0,qa=0,Et=0,Pe=!1,ea=!1,Za=!1,Ma=null,Ke="",R="",Jt="",B="idle",ra=0,Yt=!1,ee=!0;try{const e=window.matchMedia("(prefers-reduced-motion: reduce)");ee=!e.matches,e.addEventListener?.("change",a=>{ee=!a.matches,document.documentElement.dataset.motion=ee?"full":"calm"})}catch{}document.documentElement.dataset.motion=ee?"full":"calm";function Ee(e,a=m){const t=Y.find(s=>s.id===e)||Y[0];document.documentElement.dataset.theme=t.id;try{const s=Io(t.id,a);let o=document.querySelector('link[rel="icon"]');o||(o=document.createElement("link"),o.rel="icon",document.head.appendChild(o)),o.type="image/svg+xml",o.href=s;const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",t.colors[0]),document.title=a?.name?`Cuaderno de ${a.name}`:"Diario"}catch{}}function Ja(){S=Ra(),x=ma(),L=me(),m=Qa(),W=!!m.sidebarCollapsed,Ee(m.theme,m)}try{Ja()}catch(e){ge="No se han podido leer los datos guardados. Revisa el almacenamiento del navegador o recupera una copia. "+e.message}const Ns=[{label:"El cuaderno",items:[["diary","pen","Hoy"],["thoughts","wave","Pensamientos"],["archive","book","Archivo"]]},{label:"Constancia",items:[["routine","listChecks","Rutina"],["stats","chart","Progreso"]]},{label:"Tuyo",items:[["setup","sliders","Perfil"]]}],On=["diary","thoughts","routine","archive","stats"];function Os(){return Ns.flatMap(e=>e.items)}const Bs=e=>Os().find(a=>a[0]===e)?.[2]||"Hoy";function Fs(e){if(e!=="thoughts")return"";const a=pa(L);return`<span class="nav-badge ${a.some(s=>s.seen!==!0)?"is-new":""}" ${a.length?"":"hidden"} data-count="${a.length}">${a.length}</span>`}function Bn([e,a,t],s){const o=e==="thoughts"?pa(L).filter(n=>n.seen!==!0).length:0;return`<button class="nav-item ${F===e?"active":""}" style="--nav-i:${s}" data-view="${e}" title="${d(t)}" data-tooltip="${d(t)}" ${F===e?'aria-current="page"':""}>
    <span class="nav-index">${String(s+1).padStart(2,"0")}</span>
    <span class="nav-item-icon">${i(a)}${o?'<i class="nav-icon-ping" aria-hidden="true"></i>':""}</span>
    <span class="nav-label">${d(t)}</span>${Fs(e)}
  </button>`}function Fn(){let e=0;return Ns.map(a=>`<div class="nav-group">
    <p class="nav-group-label">${d(a.label)}</p>
    ${a.items.map(t=>Bn(t,e++)).join("")}
  </div>`).join("")}function Pn(){return`<nav class="tabbar" aria-label="Navegación inferior">
    ${On.map(e=>{const a=Os().find(t=>t[0]===e);return a?`<button type="button" class="tabbar-item ${F===e?"active":""}" data-view="${e}" ${F===e?'aria-current="page"':""}>
        <span class="tabbar-icon">${i(a[1])}${Fs(e)}</span>
        <span class="tabbar-label">${d(a[2])}</span>
      </button>`:""}).join("")}
  </nav>`}function zn(){return`
  <div class="sidebar-backdrop" data-action="close-menu" aria-hidden="true"></div>
  <aside class="sidebar" aria-label="Menú principal">
    <div class="sidebar-top-row">
      <a href="#" class="brand" data-action="today" title="Ir a hoy">
        <span class="brand-mark"><span class="brand-full">diario</span><span class="brand-short">d</span><span class="brand-period">.</span></span>
      </a>
      <button type="button" class="icon-button sidebar-collapse-btn" data-action="toggle-sidebar" aria-label="Plegar o desplegar el menú">
        ${i("left")}
      </button>
    </div>
    <div class="brand-rule"></div>
    <div id="ex-libris-slot">${xs(m,S.length)}</div>
    <div class="nav-wrap">
      <span class="nav-rail" aria-hidden="true"></span>
      <nav class="sidebar-nav" id="sidebar-nav" aria-label="Navegación principal">${Fn()}</nav>
    </div>
    <div class="sidebar-bottom" id="sidebar-bottom">${Ps()}</div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <div class="topbar-left">
        <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="false">${i("menu")}</button>
        <button class="icon-button ghost desktop-sidebar-toggle" data-action="toggle-sidebar" aria-label="Alternar barra lateral">${i("sidebar")}</button>
        <span class="breadcrumb"><span id="breadcrumb-owner">${m.name?`Cuaderno de ${d(m.name)}`:"Diario"}</span> <span>/</span> <span id="breadcrumb-view">${d(Bs(F))}</span></span>
      </div>
      <div class="topbar-right">
        <span id="draft-chip-slot"></span>
        <button type="button" id="sea-quick" class="sea-quick" data-view="thoughts" title="Pensamientos en el mar">
          ${i("wave")}
          <span id="sea-quick-count"></span>
        </button>
        <button type="button" id="theme-pill" class="theme-pill" data-action="cycle-theme">
          <span class="topbar-favicon-mini" id="theme-pill-favicon">${he(m.theme,m)}</span>
          <span id="theme-pill-label"></span>
        </button>
        <button type="button" class="avatar" id="avatar-slot" data-action="open-setup-wizard" title="Personalizar mi perfil, edad y gustos" aria-label="Personalizar mi perfil"></button>
      </div>
    </header>
    <main id="main"></main>
    <div class="tabbar-wrap">
      <span class="tabbar-rail" aria-hidden="true"></span>
      <nav class="tabbar" id="tabbar" aria-label="Navegación inferior">${Pn()}</nav>
    </div>
    <footer class="page-footer">
      <span id="footer-motto">${i("leaf")} ${d(m.motto||"Un día a la vez.")}</span>
      <span id="footer-owner">${m.name?`Cuaderno de ${d(m.name)}`:"Guardado localmente en este navegador"}</span>
    </footer>
  </div>
  <div id="floating-save" class="floating-save-bar" aria-live="polite">
    <span id="floating-save-text">${i("pen")} Cambios sin guardar</span>
    <button type="button" class="button solid small-btn" data-action="quick-save">${i("stamp")} Guardar</button>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <dialog id="modal"></dialog>`}function Ps(){const e=Me();return`<div class="local-note">${i("lock")}<div><strong>Guardado en tu dispositivo</strong>${m.name?`Cuaderno de ${d(m.name)}.`:"Sin cuentas ni servidores externos."}</div></div>
    <div class="save-note ${e.total?"has-pending":""}" id="save-note">
      <span class="save-dot" data-state="${B}"></span>
      <div>
        <strong>${zs()}</strong>
        <small>${d(Gs())}</small>
      </div>
    </div>`}function zs(){if(ge)return"Sin guardar";switch(B){case"typing":case"saving":return"Guardando…";case"draft":return"Borrador a salvo";case"error":return"No se pudo guardar";default:return ra?`Guardado ${At(ra)}`:"Todo guardado"}}function Gs(){const e=Me();return B==="error"?"Tus palabras siguen en el borrador de este navegador.":B==="draft"&&e.total?`${e.total} ${e.total===1?"texto a medias":"textos a medias"} recuperables.`:ge?"Revisa el almacenamiento del navegador o descarga una copia.":"Se guarda solo, sin nube ni cuentas."}function At(e){const a=typeof e=="number"?e:Date.parse(e);if(!Number.isFinite(a))return"";const t=Math.round((Date.now()-a)/6e4);return t<1?"ahora mismo":t<60?`hace ${t} min`:t<1440?`hace ${Math.round(t/60)} h`:`el ${new Date(a).toLocaleDateString("es-ES",{day:"numeric",month:"short"})}`}function Gn(){Tr();const e=N.querySelector(".sidebar");e&&(e.classList.add("is-mounting"),setTimeout(()=>e.classList.remove("is-mounting"),900)),window.addEventListener("resize",()=>ia()),document.fonts?.ready?.then(()=>ia())}function ia(){const e=N.querySelector(".nav-wrap"),a=N.querySelector(".nav-rail");if(e&&a){const o=e.querySelector(".nav-item.active")||e.querySelector(".nav-item");o&&(a.style.setProperty("--rail-y",`${o.offsetTop}px`),a.style.setProperty("--rail-h",`${o.offsetHeight}px`),a.classList.add("is-ready"))}const t=N.querySelector("#tabbar"),s=N.querySelector(".tabbar-rail");if(t&&s){const o=t.querySelector(".tabbar-item.active")||t.querySelector(".tabbar-item");o&&(s.style.setProperty("--rail-x",`${o.offsetLeft}px`),s.style.setProperty("--rail-w",`${o.offsetWidth}px`),s.classList.add("is-ready"))}}function In(){const e=Y.find(j=>j.id===m.theme)||Y[0],a=N.querySelector(".sidebar"),t=N.querySelector(".sidebar-backdrop"),s=N.querySelector(".mobile-menu");a&&(a.classList.toggle("is-open",J),a.classList.toggle("is-collapsed",W),a.classList.toggle("is-ready",!0)),t&&t.classList.toggle("is-visible",J),s&&s.setAttribute("aria-expanded",String(J));for(const j of[".sidebar-collapse-btn",".desktop-sidebar-toggle"]){const T=N.querySelector(j);T&&(T.title=`${W?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)"}`,T.setAttribute("aria-expanded",String(!W)))}const o=N.querySelector(".sidebar-collapse-btn .icon");o&&(o.outerHTML=i(W?"right":"left")),N.querySelectorAll("#sidebar-nav .nav-item, #tabbar .tabbar-item").forEach(j=>{const T=j.dataset.view===F;j.classList.toggle("active",T),T?j.setAttribute("aria-current","page"):j.removeAttribute("aria-current")});const n=pa(L),r=n.some(j=>j.seen!==!0);N.querySelectorAll('[data-view="thoughts"] .nav-badge').forEach(j=>{j.textContent=n.length,j.hidden=!n.length,j.classList.toggle("is-new",r)});const l=N.querySelector("#sea-quick");if(l){l.classList.toggle("has-new",r);const j=N.querySelector("#sea-quick-count");j&&(j.textContent=`${n.length||ve(L).drifting.length||""}`)}const c=N.querySelector("#ex-libris-slot");c&&(c.innerHTML=xs(m,S.length));const u=N.querySelector("#sidebar-bottom");u&&(u.innerHTML=Ps());const p=N.querySelector("#breadcrumb-owner");p&&(p.textContent=m.name?`Cuaderno de ${m.name}`:"Diario");const b=N.querySelector("#breadcrumb-view");b&&(b.textContent=Bs(F));const $=N.querySelector("#theme-pill-label");$&&($.textContent=e.name);const M=N.querySelector("#theme-pill");M&&(M.title=`Cambiar papel e icono (${e.name})`);const f=N.querySelector("#theme-pill-favicon");f&&(f.innerHTML=he(m.theme,m));const C=N.querySelector("#avatar-slot");C&&(C.innerHTML=m.name?`<span class="avatar-initial">${d(m.name.slice(0,1).toUpperCase())}</span>`:i("user"));const U=N.querySelector("#footer-motto");U&&(U.innerHTML=`${i("leaf")} ${d(m.motto||"Un día a la vez.")}`);const P=N.querySelector("#footer-owner");P&&(P.textContent=m.name?`Cuaderno de ${m.name}`:"Guardado localmente en este navegador"),Dt(),ia()}function w(e={}){const a=()=>{Ee(m.theme,m),Yt||(N.innerHTML=zn(),Yt=!0,Gn()),Is(e),In()};e.transition&&ee&&typeof document.startViewTransition=="function"?document.startViewTransition(a):a()}function Is(e={}){const a=document.querySelector("#main");if(!a)return;F==="thoughts"&&Or();const t=Jt!==F,s=window.scrollY,o=Ke?`page-turn-${Ke}`:t?"view-enter":"";Ke="",a.innerHTML=`
    ${ge?`<div class="error-banner" role="alert">${d(ge)}</div>`:""}
    ${Un()}`,a.className=`${o}`,(t||Ke)&&(a.classList.remove("view-enter"),a.offsetWidth,a.classList.add("view-enter"),Rn(a)),Ur(),Er(),vr(),Hr(),t?(Jt=F,window.scrollTo({top:0,behavior:e.instant?"auto":"smooth"})):s&&window.scrollTo(0,s),Qs()}function Rn(e){if(!ee)return;[...e.querySelectorAll(".page-heading, .sea-panel, .card, .forecast-card, .day-hero")].slice(0,12).forEach((t,s)=>{t.style.setProperty("--enter-i",s),t.classList.add("is-entering"),setTimeout(()=>t.classList.remove("is-entering"),520+s*55)})}function ha(e,a,t,s=""){return`<div class="page-heading">
    <div>${e?`<p class="eyebrow">${e}</p>`:""}<h1>${a}</h1>${t?`<p class="page-subtitle">${t}</p>`:""}</div>
    ${s}
  </div>`}function Un(){switch(F){case"diary":return Kt();case"thoughts":return Yn();case"routine":return sr();case"archive":return ur();case"stats":return pr();case"setup":return hr();default:return Kt()}}function Wn(){return`<div class="day-navigation">
    <button type="button" data-action="previous" aria-label="Día anterior">${i("left")}<span>Anterior</span></button>
    <button type="button" data-action="today" class="today-button">Hoy</button>
    <button type="button" data-action="next" ${y>=g()?"disabled":""}><span>Siguiente</span>${i("right")}</button>
  </div>`}function Qn(){return m.completed?"":`<section class="card setup-welcome-banner">
    <div class="setup-welcome-content">
      <span class="soft-icon accent">${i("sliders")}</span>
      <div>
        <h2>Adapta el diario a tu edad y a tus gustos</h2>
        <p>En 30 segundos ajustamos las metas, los hábitos, las frases y el papel para que solo veas lo que te interesa.</p>
      </div>
    </div>
    <div class="setup-welcome-actions">
      <button type="button" class="button solid" data-action="open-setup-wizard">${i("sliders")} Personalizar ahora</button>
      <button type="button" class="button outline" data-action="dismiss-setup-banner">Omitir</button>
    </div>
  </section>`}function _n(e,a){const t=e?pe(e):0,s=e?Object.values(e.habits||{}).filter(Boolean).length:0,o=Jo(m.name),n=ve(L,y),r=n.drifting.length,l=n.returned.length;return`<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Día</small><span>${da(y,S)}</span></div>
      <div class="hero-meta">
        <p class="hero-greeting">${d(o)} <span class="age-stage-tag">${m.age?`· ${m.age} años`:""}</span></p>
        <span class="date-line">${A(y)}</span>
        <div class="hero-chips">
          ${La(S)>0?`<span class="chip hot">${i("flame")} ${La(S)} d seguidos</span>`:""}
          <span class="chip" id="hero-words-chip">${t} palabras</span>
          ${x.length?`<button type="button" class="chip chip-link" data-view="routine" id="hero-routine-chip">${i("listChecks")} ${s}/${x.length} rutina</button>`:""}
          ${l?`<button type="button" class="chip chip-link is-new" data-view="thoughts">${i("anchor")} ${l} ${l===1?"botella":"botellas"} en la orilla</button>`:r?`<button type="button" class="chip chip-link" data-view="thoughts">${i("wave")} ${r} en el mar</button>`:`<button type="button" class="chip chip-link" data-view="thoughts">${i("pen")} Echar un pensamiento al mar</button>`}
          ${a.interests.slice(0,2).map(c=>`<span class="chip personal-interest-chip">${i(c.icon)} ${d(c.label.split(" ")[0])}</span>`).join("")}
          ${e?`<span class="entry-status">${i("check")} Escrito en el cuaderno</span>`:'<span class="entry-status pending">Aún sin cerrar</span>'}
          <span class="save-status" data-save-status>${Ws()}</span>
        </div>
      </div>
    </div>
    <div class="hero-right">
      ${Wn()}
      <p class="hero-tide">${i("tide")} <span>${d(Pa(y))}</span></p>
    </div>
  </div>`}function at(e,a,t,s,o=!0){const n=s?String(s).trim().split(/\s+/).length:0;return`<div class="writing-field" data-field="${e}">
    <label for="${e}">${a}<span class="word-count">${n} palabras</span></label>
    <textarea id="${e}" name="${e}" maxlength="20000" placeholder="${d(t)}" class="${o?"large":""}">${d(s||"")}</textarea>
  </div>`}function Vn(e=""){return`<div class="goal-row"><span class="goal-circle"></span>
    <input name="goal" aria-label="Objetivo para mañana" placeholder="Un objetivo concreto..." maxlength="500" value="${d(e)}">
    <button type="button" class="icon-button ghost" data-action="remove-goal" aria-label="Eliminar objetivo">${i("close")}</button>
  </div>`}function Zn(e,a){if(!e)return"";const t=x.filter(o=>e.habits?.[o.id]),s=m.name?`Cuaderno de ${m.name}`:"Resumen guardado";return`<section class="card daily-summary notebook-sheet reveal">
    <div class="sheet-header">
      <div>
        <p class="eyebrow">${i("book")} Día ${da(e.date,S)}</p>
        <h2>${A(e.date)}</h2>
      </div>
      <span class="mood-tag" style="--mood:${O[e.mood-1].color}">${O[e.mood-1].emoji} ${O[e.mood-1].label}</span>
    </div>
    ${e.wordOfDay||e.capsule?`
      <div class="sheet-capsules">
        ${e.wordOfDay?`<div class="sheet-capsule-item"><span>Palabra del día</span><strong>«${d(e.wordOfDay)}»</strong></div>`:""}
        ${e.capsule?`<div class="sheet-capsule-item"><span>${d(a.capsuleLabel)}</span><strong>${d(e.capsule)}</strong></div>`:""}
      </div>
    `:""}
    <p class="sheet-narrative">${mo(e)}</p>
    ${e.bestOfDay?`<div class="sheet-quote-note"><span>Lo mejor:</span> «${d(e.bestOfDay)}»</div>`:""}
    ${t.length?`<div class="sheet-habits-line">${i("check")} ${t.map(o=>`<b>${d(o.name)}</b>`).join(" · ")}</div>`:""}
    <div class="sheet-footer">
      <small>${d(s)} · ${pe(e)} palabras</small>
      <button type="button" class="text-button" data-action="read" data-date="${e.date}">Ver hoja completa ${i("arrow")}</button>
    </div>
  </section>`}function Jn(e){return e?!!(e.bestOfDay||e.differentToday||e.tomorrow||e.energy||e.stress||e.tags&&e.tags.length||e.gratitude&&e.gratitude.some(Boolean)):!1}function Kt(){const e=S.find(p=>p.date===y),a=G(m),t=Za?{triggered:!1}:yt(e||{}),s=st(y,qa),o=e?.mood?O[e.mood-1].color:"",n=e?.sleepHours??m.sleepGoal??a.sleepRecommended??7.5,r=e?.studyHours??0,l=Ye||Jn(e),c=[6,7,7.5,8,9],u=[0,1,2,3,4];return`
  ${Qn()}
  ${_n(e,a)}
  <div class="tide-rule-wrap">${As()}</div>
  <div id="crisis-alert-slot">${Ms(t,m)}</div>
  <div class="diary-layout ${ea?"is-focus-writing":""}">
    <div class="diary-main">
      <form id="diary-form" style="${o?`--active-mood:${o}`:""}" autocomplete="off">
        <div id="entry-draft-slot" data-live="1"></div>

        <!-- 1 · CAPTURA RÁPIDA -->
        <section class="card mood-card-section quick-capture" style="--i:1">
          <div class="section-heading">
            <p class="section-index" style="margin-bottom:0">¿Cómo ha ido hoy?</p>
            <span class="capture-hint">${i("spark")} un clic vale como entrada</span>
          </div>
          <div class="mood-scale" role="radiogroup" aria-label="¿Cómo te ha ido?">
            ${O.map(p=>`<label class="mood-option" style="--mood-color:${p.color}">
              <input type="radio" name="mood" value="${p.value}" ${(e?.mood||0)===p.value?"checked":""}>
              <span class="mood-face">${p.emoji}</span>
              <span class="mood-label">${p.label}</span>
            </label>`).join("")}
          </div>

          <div class="quick-hours-strip">
            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="sleepHours">${i("moon")} Sueño</label>
                <div class="quick-pills" role="group" aria-label="Atajos de sueño">
                  ${c.map(p=>`<button type="button" class="quick-pill ${Number(n)===p?"active":""}" data-action="quick-number" data-target="sleepHours" data-val="${p}">${q(p)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="sleepHours" name="sleepHours" type="number" min="0" max="24" step="0.5" value="${n}">
                <span>horas (meta: ${q(m.sleepGoal||a.sleepRecommended)} h)</span>
              </div>
            </div>

            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="studyHours">${i("study")} ${d(a.focusLabel)}</label>
                <div class="quick-pills" role="group" aria-label="Atajos de dedicación">
                  ${u.map(p=>`<button type="button" class="quick-pill ${Number(r)===p?"active":""}" data-action="quick-number" data-target="studyHours" data-val="${p}">${q(p)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="studyHours" name="studyHours" type="number" min="0" max="24" step="0.5" value="${r}">
                <span>horas (meta: ${q(m.studyGoal??a.studyRecommended)} h)</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 2 · TU PÁGINA DE HOY -->
        <section class="card writing-card-section" style="--i:2">
          <div class="section-heading">
            <p class="section-index" style="flex:1">Tu página de hoy</p>
            <div class="writing-tools-bar">
              <button type="button" class="text-button prompt-trigger-btn" data-action="inspire-prompt">
                ${i("spark")} Sugerir tema
              </button>
              <button type="button" class="icon-button ghost" data-action="toggle-focus-writing" title="${ea?"Salir del modo enfoque":"Ampliar zona de escritura"}" aria-label="Modo enfoque">
                ${i("expand")}
              </button>
            </div>
          </div>
          <div id="writing-prompt-box" class="writing-prompt-banner ${Pe?"is-open":""}" ${Pe?"":"hidden"}>
            <div>
              <p id="writing-prompt-text">${d(s)}</p>
            </div>
            <div class="writing-prompt-actions">
              <button type="button" class="button outline small-btn" data-action="next-writing-prompt">${i("refresh")} Otra</button>
              <button type="button" class="button solid small-btn" data-action="insert-writing-prompt">${i("pen")} Usar</button>
            </div>
          </div>
          ${at("generalDay","Notas del día (opcional si solo quieres un registro rápido)",a.placeholders.generalDay,e?.generalDay,!0)}
          <div class="capsule-word-grid">
            <div class="writing-field" data-field="capsule">
              <label for="capsule">${i("spark")} ${d(a.capsuleLabel)}</label>
              <input id="capsule" name="capsule" class="clean-line-input" maxlength="300" placeholder="${d(a.capsulePlaceholder)}" value="${d(e?.capsule||"")}">
            </div>
            <div class="writing-field" data-field="wordOfDay">
              <label for="wordOfDay">${i("book")} Palabra del día</label>
              <input id="wordOfDay" name="wordOfDay" class="clean-line-input" maxlength="60" placeholder="Una palabra que resuma hoy..." value="${d(e?.wordOfDay||"")}">
            </div>
          </div>
        </section>

        <!-- 3 · MÁS DETALLES (etiquetas, momentos, gratitud) -->
        <div class="extras-accordion ${l?"is-open":""}" id="extras-accordion">
          <button type="button" class="extras-toggle-btn" data-action="toggle-more-details" aria-expanded="${l}">
            <div>
              <strong>Añadir más detalles al día</strong>
              <small>Etiquetas, energía, lo mejor de hoy y tres cosas buenas · la rutina y los contadores viven en su pestaña</small>
            </div>
            <span class="extras-chevron">${i("chevronDown")}</span>
          </button>
          <div class="extras-Work-shell">
            <div class="extras-inner">
              <section class="card">
                <p class="section-index">Etiquetas de hoy</p>
                ${Ko(e?.tags||[],a.tags)}
              </section>

              <section class="card">
                <p class="section-index">Momentos y energía</p>
                <div class="scale-block" style="margin-bottom:16px">
                  ${Qt("energy",ls,e?.energy,"bolt","Energía","Del 1 al 5","Opcional")}
                  ${Qt("stress",ds,e?.stress,"storm","Estrés","Del 1 al 5","Opcional")}
                </div>
                ${at("bestOfDay","Lo mejor del día",a.placeholders.bestOfDay,e?.bestOfDay,!1)}
                ${at("differentToday","¿Qué ha sido distinto hoy?",a.placeholders.differentToday,e?.differentToday,!1)}
              </section>

              <section class="card">
                <p class="section-index">Tres cosas buenas</p>
                <div class="gratitude-fields">
                  ${["1. Hoy agradezco o valoro...","2. También...","3. Y además..."].map((p,b)=>`<label><span>0${b+1}</span><input name="gratitude${b}" aria-label="${p}" placeholder="${p}" maxlength="20000" value="${d(e?.gratitude?.[b]||"")}"></label>`).join("")}
                </div>
                <p class="aside-note" style="margin-top:14px">${i("listChecks")}<span>Lo de mañana (intención y tareas) se apunta en la pestaña <button type="button" class="inline-link" data-view="routine">Rutina</button>.</span></p>
              </section>
            </div>
          </div>
        </div>

        <div class="save-area">
          <span>${i("lock")} Se guarda al instante en tu navegador.</span>
          <button class="button solid save-button" type="submit" ${ge?"disabled":""}>${i("stamp")} Guardar día</button>
        </div>
      </form>
      ${Zn(e,a)}
    </div>

    <aside class="diary-aside">
      ${Mn(L)}
      <div id="inspiration-slot">${Es(y,qt,Mt,m,e,e?.wordOfDay||"")}</div>
      ${Nn(x,e,S,y)}
      ${Rs()}
      <div id="quote-slot">${qs(y,Et,m)}</div>
    </aside>
  </div>`}function Rs(){const e=$e(y),a=E(e,6),t=te(S,e,a),s=xe(t);return`<section class="card week-preview">
    <div class="section-heading"><h2>Esta semana</h2><span class="tag">${t.length}/7 días</span></div>
    <div class="week-dots">
      ${Array.from({length:7},(o,n)=>{const r=E(e,n),l=t.find(c=>c.date===r);return`<button type="button" data-action="open-day" data-date="${r}" ${r>g()?"disabled":""} aria-label="${A(r)}${l?", "+O[l.mood-1].label:""}">
          <span>${["L","M","X","J","V","S","D"][n]}</span>
          <i class="${l?"filled":""} ${r===g()?"current":""}" style="--mood:${l?O[l.mood-1].color:""}">${l?i("check"):"·"}</i>
        </button>`}).join("")}
    </div>
    <div class="mini-metrics">
      <div>${i("heart")}<strong>${s.count?q(s.mood):"—"}<small>/5</small></strong><span>Ánimo</span></div>
      <div>${i("moon")}<strong>${s.count?q(s.sleep):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${i("study")}<strong>${s.count?q(s.study):"—"}<small>h</small></strong><span>Enfoque</span></div>
    </div>
    <button class="text-button full-link" data-view="stats">Ver progreso completo ${i("arrow")}</button>
  </section>`}function Yn(){const e=g(),a=ve(L,e),t=[["shore","anchor","La orilla",a.returned.length],["sea","wave","En el mar",a.drifting.length],["kept","bookmark","Ancladas",a.kept.length],["lost","storm","Perdidas",a.lost.length]];return`${ha("Pensamientos",m.name?`El mar de ${d(m.name)}`:"El mar de los pensamientos","Escribe lo que no quieres guardar, séllalo en una botella y échalo al mar. Cuando la marea quiera, puede volver a ti.",`
    <span class="count-badge">${L.length} ${L.length===1?"botella":"botellas"} en tu mar</span>
  `)}
  ${mn(L,e)}
  ${vn(ut({today:e,bottles:L,days:14}))}
  <div class="tide-rule-wrap is-after-sea">${As()}</div>
  <div class="ocean-layout">
    <div class="ocean-main">
      <div id="composer-slot">${$n(m,e,re)}</div>
      <div class="segmented ocean-tabs">
        ${t.map(([s,o,n,r])=>`<button type="button" data-action="thoughts-tab" data-tab="${s}" class="${ce===s?"active":""}">
          ${i(o)} ${d(n)}${r?`<span class="seg-count">${r}</span>`:""}
        </button>`).join("")}
      </div>
      <div id="ocean-body" class="tab-panel-enter">${Xn(a,e)}</div>
    </div>
    <aside class="ocean-aside">
      ${gn(e,L)}
      ${ar(e)}
      ${tr(a,e)}
      ${qn(L,e)}
    </aside>
  </div>`}function Kn(){const e=g();return L.filter(a=>Fa(a)===R&&fateOf(a,e)==="drifting")}function Xn(e,a){if(!L.length)return En(ce);let s={shore:e.returned,sea:e.drifting,kept:e.kept,lost:e.lost}[ce]??e.returned;return R&&(s=s.filter(n=>Fa(n)===R||n.lostOn===R),!s.length)?er(ce):`${R?`<div class="filter-chip">${i("calendar")} Botellas que tocan tierra el ${d(A(R,{day:"numeric",month:"long"}))}<button type="button" class="text-button" data-action="clear-sea-filter">${i("close")} Quitar el filtro</button></div>`:""}<div class="bottle-grid">${s.map((n,r)=>Sn(n,a,r)).join("")}</div>`}function er(e){const a={shore:["La orilla está seca","Ninguna botella ha vuelto todavía. Cuando la marea viva traiga una, aparecerá aquí y en tu portada."],sea:["No hay nada a la deriva","Echa una botella al mar y la verás alejarse por esta pantalla."],kept:["Nada anclado","Al abrir una botella puedes guardarla en el cuaderno para que se quede contigo."],lost:["El mar no se ha quedado nada","Todavía ninguna botella se ha perdido. Suerte, o paciencia."]},[t,s]=a[e]||a.shore;return`${Ta(t,s,e==="lost"?"":`<button type="button" class="button outline" data-action="focus-composer">${i("pen")} Escribir un pensamiento</button>`)}`}function ar(e){const a=Re(e),t=14.765,s=Math.round((a.age%t+t)%t/t*100);return`<section class="card tide-card" data-tide="${a.key}">
    <div class="section-heading">
      <p class="section-index" style="margin-bottom:0">La marea</p>
      <span class="tag">${d(a.name)}</span>
    </div>
    <p class="tide-headline">${d(Pa(e))}</p>
    <div class="tide-dial">
      <span class="tide-track" style="--pct:${s}%"><i style="width:${s}%"></i><b class="tide-pin"></b></span>
      <span class="tide-track-labels"><small>${i("moon")} Luna nueva</small><small class="tide-now">${d(a.phase)}</small><small>${i("moon")} Luna llena</small></span>
    </div>
    <p class="field-caption">Las botellas que vuelven lo hacen con la marea viva, cerca de la luna nueva o de la llena.</p>
  </section>`}function tr(e,a){const t=e.drifting[0],s=t?fe(t,a):null;return`<section class="card sea-rules">
    <p class="section-index">${i("compass")} Cómo funciona</p>
    <ol class="sea-rules-list">
      <li><b>Escribe</b> un pensamiento suelto: una duda, un deseo, una rabia, una frase que no va a ningún sitio.</li>
      <li><b>Mira el parte.</b> El clima del día en que la sueltas no es decorado: con viento a favor entra en la primera pleamar; con temporal o viento de tierra se queda fuera uno o dos días más.</li>
      <li><b>Elige el mar.</b> Cuanto más lejos lo lances, más tarda y más fácil es que no regrese.</li>
      <li><b>El azar se calcula aquí.</b> Sale de tus propias palabras, del día y del mar elegido; no hay servidores, ni cuentas, ni IA.</li>
      <li><b>Espérate a la marea.</b> Solo vuelve en marea viva. Tú decides si la abres, la anclas o la vuelves a lanzar; si se hundió, se quedó perdida para siempre (aunque se puede leer).</li>
    </ol>
    ${t?`<p class="sea-rules-now">${i("wave")} <span>La más cercana: <b>${d(ca(t.sea).label.toLowerCase())}</b>, ${s.total-s.atSea<=1?"a un día de la orilla":`${s.total-s.atSea} días por delante`}.</span></p>`:'<p class="sea-rules-now"><span>Nada en el agua ahora mismo.</span></p>'}
  </section>`}function sr(){const e=S.find(t=>t.date===y);return`${ha("Rutina","Hábitos, contadores y la lista de mañana","Todo lo que se marca en un toque y se guarda al instante, sin escribir una sola línea.",`
    <div class="segmented">
      ${[["hoy","listChecks","Hoy"],["week","grid","Semana"],["counters","drop","Contadores"],["streaks","flame","Rachas"]].map(([t,s,o])=>`<button type="button" data-action="routine-tab" data-tab="${t}" class="${Xe===t?"active":""}">${i(s)} ${d(o)}</button>`).join("")}
    </div>
  `)}
  <div class="routine-layout">
    <div class="routine-main tab-panel-enter">
      ${nr(e)}
      <div id="routine-body">${rr(e)}</div>
    </div>
    <aside class="routine-aside">${cr(e)}</aside>
  </div>`}function or(){return`<div class="day-navigation">
    <button type="button" data-action="shift-day" data-delta="-1" aria-label="Día anterior">${i("left")}<span>Anterior</span></button>
    <button type="button" data-action="today-routine" ${y===g()?"disabled":""}>${i("sun")} Hoy</button>
    <button type="button" data-action="shift-day" data-delta="1" ${y>=g()?"disabled":""}><span>Siguiente</span>${i("right")}</button>
  </div>`}function nr(e){const a=x.filter(n=>e?.habits?.[n.id]).length,t=x.length?Math.round(a/x.length*100):0,s=x.length?a===0?"Aún no has marcado nada":a===x.length?"Rutina completa":`Vas a ${a} de ${x.length}`:"Tu lista está vacía",o=t>=100?"Todos los casilleros llenos: eso también se lee en tus estadísticas.":t>0?"Cada casilla cuenta igual que un párrafo entero.":"Si hoy no puedes con todo, marca uno y da el día por bueno.";return`<section class="card routine-hero">
    <div class="routine-hero-copy">
      <p class="eyebrow">${i("sun")} ${d(A(y,{weekday:"long",day:"numeric",month:"long"}))}</p>
      <h2>${d(s)}</h2>
      <p class="routine-hero-note">${d(o)}</p>
      ${or()}
    </div>
    ${Hs(t,x.length?`${t}%`:"—","de hoy")}
  </section>`}function rr(e){const a=G(m),t=g();if(Xe==="week")return`${Cn(S,x,{days:35,end:t,today:t,title:"Tus últimas cinco semanas"})}${ir()}`;if(Xe==="counters"){const s=te(S,E(t,-27),t);return`${Tn(e,m,[])||""}${ks(s,m)}`}return Xe==="streaks"?x.length?`${Dn(x,S,t)}${lr()}`:Ta("Todavía no hay hábitos","Añade el primero y en unos días verás aquí sus rachas y su constancia.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="hoy">${i("plus")} Crear hábitos</button>`):`${x.length?`<section class="card habit-board-card">
    <div class="section-heading">
      <div><p class="eyebrow">${i("listChecks")} La tasklist de hoy</p><h2>Marcar y seguir</h2></div>
      <span class="field-caption">${x.filter(s=>e?.habits?.[s.id]).length}/${x.length}</span>
    </div>
    ${Ln(x,e,S,y,t)}
    <p class="board-hint">${i("spark")} Toca un hábito para marcarlo: se guarda solo, sin botón de guardar.</p>
  </section>`:Ta("Sin hábitos todavía","Crea tu lista abajo o toma prestados los sugeridos para tu etapa.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="streaks">${i("flame")} Ver rachas</button>`)}
  ${Hn(e,y)}
  ${jn(a,x)}`}function ir(){const e=$e(y),a=E(e,6),t=te(S,e,a),s=x.map(o=>{const n=t.filter(r=>r.habits?.[o.id]).length;return{label:o.name,count:n,total:7,color:n>=5?"var(--green)":n>=3?"var(--ochre)":"var(--red)"}});return`<section class="card">
    <div class="section-heading"><div><p class="eyebrow">${i("week")}Esta semana</p><h2>${d(A(e,{day:"numeric",month:"short"}))} → ${d(A(a,{day:"numeric",month:"short"}))}</h2></div>
      <span class="tag">${t.length}/7 días con entrada</span></div>
    ${x.length?$t(s):'<p class="habit-empty">Añade hábitos para ver su semana.</p>'}
  </section>`}function lr(){const e=x.map(t=>({h:t,best:ms(S,t.id),live:Oa(S,t.id)})).filter(t=>t.best>0).sort((t,s)=>s.best-t.best).slice(0,6);if(!e.length)return"";const a=e[0].best||1;return`<section class="card streak-board">
    <div class="section-heading"><div><p class="eyebrow">${i("flame")}El muro de las rachas</p><h2>Tus mejores series</h2></div><span class="field-caption">días seguidos</span></div>
    <ol class="streak-ranks">
      ${e.map((t,s)=>`<li>
        <span class="streak-rank">${String(s+1).padStart(2,"0")}</span>
        <span class="streak-name">${d(t.h.name)}</span>
        <span class="streak-bar"><i style="width:${Math.max(6,Math.round(t.best/a*100))}%"></i></span>
        <span class="streak-num"><b>${t.best}</b> d${t.live?` · viva ${t.live}`:""}</span>
      </li>`).join("")}
    </ol>
  </section>`}function dr(){return x.length?S.filter(e=>x.every(a=>e.habits?.[a.id])).length:0}function cr(e){const a=g(),t=te(S,E(a,-27),a),s=e?Math.min(100,Math.round(e.sleepHours/(m.sleepGoal||7.5)*100)):0;return`
  <section class="card routine-day-card">
    <div class="section-heading"><h2>El día en cifras</h2><span class="tag">${d(A(y,{day:"numeric",month:"short"}))}</span></div>
    <div class="mini-metrics">
      <div>${i("moon")}<strong>${e?q(e.sleepHours):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${i("study")}<strong>${e?q(e.studyHours):"—"}<small>h</small></strong><span>Enfoque</span></div>
      <div>${i("drop")}<strong>${e?.counters?.water||0}<small>v</small></strong><span>Agua</span></div>
    </div>
    ${e?`<div class="sleep-goal-bar"><span style="width:${s}%"></span></div>
      <p class="field-caption">${d(gs(e.sleepHours))}</p>`:'<p class="habit-empty">Este día no tiene entrada en el cuaderno.</p>'}
    <button type="button" class="text-button full-link" data-action="open-day" data-date="${y}">Escribir sobre este día ${i("arrow")}</button>
  </section>
  <section class="card">
    <div class="section-heading"><h2>Rachas del cuaderno</h2><span class="field-caption">28 días</span></div>
    <div class="streak-lines">
      <div><span>${i("flame")} Días seguidos escribiendo</span><strong>${La(S)}</strong></div>
      <div><span>${i("seal")} Mejor racha histórica</span><strong>${us(S)}</strong></div>
      <div><span>${i("check")} Días con toda la rutina</span><strong>${dr()}</strong></div>
      <div><span>${i("moon")} Sueño medio</span><strong>${t.length?q(xe(t).sleep):"—"} h</strong></div>
    </div>
  </section>
  ${Rs()}`}function ur(){const e=[...new Set(S.flatMap(t=>t.tags||[]))],a=S.filter(t=>(!$a||t.mood===+$a)&&(!wa||(t.tags||[]).includes(wa))&&(!ya||[t.date,t.generalDay,t.bestOfDay,t.differentToday,t.tomorrow,t.wordOfDay,t.capsule,...t.gratitude,...t.goals||[],...t.tags||[]].join(" ").toLocaleLowerCase().includes(ya.toLocaleLowerCase()))).sort((t,s)=>s.date.localeCompare(t.date));return`${ha("Archivo",m.name?`Recuerdos de ${d(m.name)}`:"Tus días guardados",`${S.length} ${S.length===1?"entrada":"entradas"} · ${q(S.reduce((t,s)=>t+pe(s),0))} palabras`,`
    <div class="segmented">
      <button type="button" data-action="archive-tab" data-tab="list" class="${xa==="list"?"active":""}">${i("book")} Lista</button>
      <button type="button" data-action="archive-tab" data-tab="calendar" class="${xa==="calendar"?"active":""}">${i("calendar")} Calendario</button>
    </div>
  `)}

  ${xa==="calendar"?`
    <div class="tab-panel-enter">
      <section class="card full-calendar">
        ${en(X,S,{selected:y})}
        <div class="mood-legend">
          ${O.map(t=>`<span><i style="background:${t.color}"></i>${t.label}</span>`).join("")}
        </div>
      </section>
    </div>
  `:`
    <div class="tab-panel-enter">
      <div class="history-controls">
        <label class="search-box">${i("search")}<input id="history-search" aria-label="Buscar en el diario" placeholder="Buscar por palabra, nota o etiqueta..." value="${d(ya)}"></label>
        <select id="history-mood" aria-label="Filtrar por estado de ánimo">
          <option value="">Todos los estados</option>
          ${O.map(t=>`<option value="${t.value}" ${$a==t.value?"selected":""}>${t.emoji} ${t.label}</option>`).join("")}
        </select>
        ${e.length?`
          <select id="history-tag" aria-label="Filtrar por etiqueta">
            <option value="">Todas las etiquetas</option>
            ${e.map(t=>`<option value="${d(t)}" ${wa===t?"selected":""}>#${d(t)}</option>`).join("")}
          </select>
        `:""}
        <div class="segmented">
          <button type="button" data-action="history-layout" data-layout="grid" class="${Sa==="grid"?"active":""}">Tarjetas</button>
          <button type="button" data-action="history-layout" data-layout="timeline" class="${Sa==="timeline"?"active":""}">Hilo</button>
        </div>
      </div>
      <div class="${Sa==="timeline"?"history-timeline":"history-grid"}">
        ${a.length?a.map((t,s)=>{const o=Object.values(t.habits||{}).filter(Boolean).length;return`<article class="card history-card" style="--mood:${O[t.mood-1].color};--i:${Math.min(s,10)}">
            <div class="section-heading">
              <p class="eyebrow">Día ${da(t.date,S)}</p>
              <span class="mood-tag" style="--mood:${O[t.mood-1].color}">${O[t.mood-1].emoji} ${O[t.mood-1].label}</span>
            </div>
            <h2>${A(t.date,{day:"numeric",month:"long",year:"numeric"})}</h2>
            <p class="entry-excerpt">${d(t.generalDay)}</p>
            ${t.wordOfDay||t.capsule?`
              <div class="history-capsules">
                ${t.wordOfDay?`<span class="history-word-pill">«${d(t.wordOfDay)}»</span>`:""}
                ${t.capsule?`<span class="history-capsule-pill">${i("spark")} ${d(t.capsule)}</span>`:""}
              </div>
            `:""}
            <div class="history-numbers">
              <span class="chiplet">${i("moon")} ${q(t.sleepHours)} h</span>
              <span class="chiplet">${i("study")} ${q(t.studyHours)} h</span>
              ${x.length?`<span class="chiplet">${i("check")} ${o}/${x.length}</span>`:""}
              <span class="chiplet">${i("pen")} ${pe(t)} pal.</span>
            </div>
            <div class="history-actions">
              <button class="text-button" data-action="read" data-date="${t.date}">Abrir ${i("arrow")}</button>
              <button class="icon-button ghost" data-action="open-day" data-date="${t.date}" aria-label="Editar">${i("pen")}</button>
              <button class="icon-button ghost delete-button" data-action="delete" data-date="${t.date}" aria-label="Eliminar">${i("trash")}</button>
            </div>
          </article>`}).join(""):Ta(S.length?"Sin resultados":"Aún no hay entradas guardadas","Las páginas que guardes aparecerán aquí.")}
      </div>
    </div>
  `}`}function pr(){return`${ha("Progreso",m.name?`Tu evolución, ${d(m.name.split(" ")[0])}`:"Tu evolución","Tus patrones de descanso, ánimo, hábitos y metas personales.",`
    <div class="segmented">
      <button type="button" data-action="stats-tab" data-tab="pulse" class="${Fe==="pulse"?"active":""}">Pulso y metas</button>
      <button type="button" data-action="stats-tab" data-tab="week" class="${Fe==="week"?"active":""}">Semana</button>
      <button type="button" data-action="stats-tab" data-tab="month" class="${Fe==="month"?"active":""}">Mes</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${Fe==="week"?Xt(!1):Fe==="month"?Xt(!0):mr()}
  </div>`}function mr(){const e=g(),a=E(e,1-Be),t=te(S,a,e),s=te(S,E(a,-Be),E(a,-1)),o=xe(t),n=xe(s),r=go(S),l=G(m),c=(u,p)=>{if(t.length<3||s.length<3||!Number.isFinite(o[u])||!Number.isFinite(n[u]))return"";const b=o[u]-n[u];return`${b>0?"↑":b<0?"↓":"→"} ${q(Math.abs(b))}${p} vs. anterior`};return`
  <div class="ledger-grid">
    ${z("Estado medio",o.count?q(o.mood):"—","/ 5",c("mood",""))}
    ${z("Sueño medio",o.count?q(o.sleep):"—","h",c("sleep"," h"))}
    ${z(l.focusLabel,o.count?q(o.study):"—","h",c("study"," h"))}
    ${z("Racha actual",La(S),"días",`${o.count} días registrados`)}
  </div>
  ${ks(t,m)}
  <section class="card chart-card">
    <div class="section-heading">
      <h2>Ánimo y horas de sueño</h2>
      <div class="segmented">
        <button type="button" data-action="range" data-range="7" class="${Be===7?"active":""}">7 días</button>
        <button type="button" data-action="range" data-range="30" class="${Be===30?"active":""}">30 días</button>
      </div>
    </div>
    ${an(t,a,Be,m)}
    <div class="chart-dates"><span>${A(a,{day:"numeric",month:"short"})}</span><span>${A(e,{day:"numeric",month:"short"})}</span></div>
  </section>
  <section class="card">
    <div class="section-heading">
      <h2>Últimos 28 días</h2>
      <span class="field-caption">Pulsa cualquier día para abrirlo</span>
    </div>
    ${tn(S,e,28)}
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Tendencias detectadas</h2>
      <div style="margin-top:10px">
        ${r.length?r.map(u=>`<p class="trend-item">${i("arrow")}<span>${u}</span></p>`).join(""):'<p class="habit-empty">Con 3 o más registros por semana verás comparativas automáticas aquí.</p>'}
      </div>
    </section>
    <section class="card">
      <h2>Etiquetas más frecuentes</h2>
      ${Pt(t).length?$t(Pt(t).slice(0,6).map(([u,p])=>({label:u,count:p,total:t.length,color:"var(--red)"}))):'<p class="habit-empty">Aún no hay etiquetas en este período.</p>'}
    </section>
  </div>`}function Xt(e){const[a,t]=e?cs(X):[$e(y),E($e(y),6)],s=te(S,a,t),o=xe(s);return`
  <div class="section-heading" style="margin-bottom:16px">
    <h2>${e?A(X,{month:"long",year:"numeric"}):`${A($e(y),{day:"numeric",month:"short"})} – ${A(E($e(y),6),{day:"numeric",month:"short",year:"numeric"})}`}</h2>
    <div class="period-controls">
      <button class="icon-button ghost" data-action="period-prev" data-monthly="${e?"1":"0"}" aria-label="Anterior">${i("left")}</button>
      <button class="icon-button ghost" data-action="period-next" data-monthly="${e?"1":"0"}" aria-label="Siguiente">${i("right")}</button>
    </div>
  </div>
  <div class="ledger-grid">
    ${z("Días registrados",o.count,e?"días":"/ 7")}
    ${z("Estado medio",o.count?q(o.mood):"—","/ 5")}
    ${z("Sueño medio",o.count?q(o.sleep):"—","h")}
    ${z("Dedicación media",o.count?q(o.study):"—","h")}
  </div>
  <section class="card period-summary">
    <span class="soft-icon">${i("leaf")}</span>
    <div>
      <p>${ho(o,e)}</p>
    </div>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Días destacados</h2>
      <div class="highlights" style="grid-template-columns:1fr 1fr">
        ${ga("Mejor día",o.best)}
        ${ga("Más sueño",o.mostSleep,"sleepHours")}
        ${ga("Más dedicación",o.mostStudy,"studyHours")}
        ${ga("Día más difícil",o.worst)}
      </div>
    </section>
    <section class="card">
      <h2>Distribución de estados</h2>
      <div style="margin-top:14px">
        ${$t(O.map((n,r)=>({label:`${n.emoji} ${n.label}`,count:o.moods[r],total:o.count,color:n.color})))}
      </div>
    </section>
  </div>`}function hr(){return`${ha("Perfil y ajustes","Hecho a tu medida","Personaliza tu identidad, tus gustos, el papel del cuaderno o haz una copia de seguridad.",`
    <div class="segmented">
      <button type="button" data-action="profile-tab" data-tab="personal" class="${ka==="personal"?"active":""}">${i("sliders")} Mi perfil</button>
      <button type="button" data-action="profile-tab" data-tab="data" class="${ka==="data"?"active":""}">${i("shield")} Datos y copias</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${ka==="data"?br():gr()}
  </div>`}function gr(){const e=G(m),a=new Set(x.map(s=>s.name.toLowerCase())),t=new Set(m.interests||[]);return`<form id="setup-page-form" class="setup-page-grid">
    <section class="card" style="--i:1">
      <h2>Identidad y etapa vital</h2>
      <div class="setup-name-age-row">
        <div class="setup-field">
          <label for="sp-name">${i("user")} Tu nombre o apodo</label>
          <input id="sp-name" name="name" maxlength="50" placeholder="Tu nombre..." value="${d(m.name)}">
        </div>
        <div class="setup-field">
          <label for="sp-age">Tu edad</label>
          <div class="age-input-wrap">
            <input id="sp-age" name="age" type="number" min="10" max="110" step="1" placeholder="Ej. 20" value="${m.age??""}">
            <span>años</span>
          </div>
        </div>
      </div>

      <div class="setup-field">
        <label>Grupo de edad</label>
        <div class="age-group-grid" id="sp-age-groups">
          ${ta.map(s=>`
            <label class="age-group-card ${e.group.id===s.id?"is-selected":""}" data-age-group-card="${s.id}">
              <input type="radio" name="ageGroup" value="${s.id}" ${e.group.id===s.id?"checked":""}>
              <span class="age-range-badge">${d(s.label)}</span>
              <strong>${d(s.title)}</strong>
              <small>${d(s.desc)}</small>
            </label>
          `).join("")}
        </div>
      </div>

      <div class="setup-field">
        <label for="sp-motto">Frase de pie de página</label>
        <input id="sp-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${d(m.motto)}">
      </div>
    </section>

    <section class="card" style="--i:2">
      <h2>Tus gustos y estilo</h2>
      <p class="field-caption" style="margin:6px 0 8px">El diario adapta sus contadores, etiquetas y frases a lo que marques aquí:</p>
      <div class="interests-grid">
        ${Na.map(s=>`
          <label class="interest-chip">
            <input type="checkbox" name="interests" value="${s.id}" ${t.has(s.id)?"checked":""}>
            <span>${i(s.icon)} ${d(s.label)}</span>
          </label>
        `).join("")}
      </div>

      <div class="two-columns" style="margin-top:16px">
        <div class="setup-field" style="margin-top:0">
          <label>Momento habitual</label>
          <div class="ritual-stack">
            ${sa.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="ritual" value="${s.id}" ${(m.ritual||"night")===s.id?"checked":""}>
                <span class="purpose-icon">${i(s.icon)}</span>
                <div><strong>${d(s.label)}</strong></div>
              </label>
            `).join("")}
          </div>
        </div>
        <div class="setup-field" style="margin-top:0">
          <label>Tono de las frases</label>
          <div class="ritual-stack">
            ${oa.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="tone" value="${s.id}" ${(m.tone||"warm")===s.id?"checked":""}>
                <div><strong>${d(s.label)}</strong><small>${d(s.desc)}</small></div>
              </label>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="card" style="--i:3">
      <h2>Metas, hábitos y frases propias</h2>
      <p class="field-caption" style="margin-top:6px">Los hábitos que elijas se marcan en su propia pestaña, <b>Rutina</b>, junto a los contadores.</p>
      <div class="age-adaptation-callout" id="sp-adaptation-callout" style="margin-top:12px">
        ${i("compass")}
        <div>
          <strong>Etapa activa: ${d(e.group.title)} (${d(e.group.label)})</strong>
          <p>Sueño recomendado: <b>${q(e.sleepRecommended)} h</b> · Dedicación sugerida: <b>${q(e.studyRecommended)} h</b>.</p>
        </div>
      </div>
      <div class="goals-setup-grid">
        <div class="setup-field">
          <label for="sp-sleep">${i("moon")} Meta de sueño (h)</label>
          <input id="sp-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${m.sleepGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-study">${i("study")} Meta de dedicación (h)</label>
          <input id="sp-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${m.studyGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-water">${i("drop")} Meta de agua (vasos)</label>
          <input id="sp-water" name="waterGoal" type="number" min="1" max="25" step="1" value="${m.waterGoal}">
        </div>
      </div>
      <div class="setup-field" style="margin-top:16px">
        <label>Hábitos sugeridos para tu perfil</label>
        <div class="tag-picker" id="sp-suggested-habits">
          ${e.suggestedHabits.map(s=>{const o=a.has(s.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${d(s)}" ${o?"checked":""}><span>${o?"✓ ":"+ "}${d(s)}</span></label>`}).join("")}
        </div>
      </div>
      <div class="setup-field" style="margin-top:18px">
        <label>${i("quote")} Tus frases guardadas (${(m.savedQuotes||[]).length})</label>
        ${(m.savedQuotes||[]).length?`
          <div class="saved-quotes-list">
            ${m.savedQuotes.map((s,o)=>`
              <div class="saved-quote-item">
                <span>«${d(s)}»</span>
                <button type="button" class="icon-button ghost" data-action="remove-saved-quote" data-index="${o}" aria-label="Quitar frase">${i("close")}</button>
              </div>
            `).join("")}
          </div>
        `:""}
        <div class="habit-add" style="margin-top:10px">
          <input id="new-custom-quote" maxlength="240" placeholder="Añade una frase propia...">
          <button type="button" class="icon-button" data-action="add-custom-quote" aria-label="Añadir frase">${i("plus")}</button>
        </div>
      </div>
    </section>

    <section class="card" style="--i:4">
      <h2>Papel e icono de la pestaña</h2>
      <div class="setup-field">
        <div class="theme-picker-grid">
          ${Y.map(s=>`
            <label class="theme-card">
              <input type="radio" name="theme" value="${s.id}" ${m.theme===s.id?"checked":""}>
              <div class="theme-card-top">
                <span class="theme-favicon-preview">${he(s.id,m)}</span>
                <div class="theme-swatches">${s.colors.map(o=>`<i style="background:${o}"></i>`).join("")}</div>
              </div>
              <strong>${d(s.name)}</strong>
              <small>${d(s.desc)}</small>
            </label>
          `).join("")}
        </div>
      </div>
      <div class="setup-toggles" style="margin-top:16px">
        <label class="toggle-row">
          <input type="checkbox" name="sidebarCollapsed" ${W?"checked":""}>
          <span><strong>Barra lateral compacta</strong><small>Reducir el menú a iconos en escritorio (Ctrl+B).</small></span>
        </label>
        <label class="toggle-row">
          <input type="checkbox" name="showDailyWord" ${m.showDailyWord!==!1?"checked":""}>
          <span><strong>Mostrar Palabra del día</strong><small>Muestra una palabra diaria en la parte superior.</small></span>
        </label>
        <label class="toggle-row">
          <input type="checkbox" name="showDailyTip" ${m.showDailyTip!==!1?"checked":""}>
          <span><strong>Mostrar Consejo del día</strong><small>Recomendaciones breves adaptadas a tu edad y gustos.</small></span>
        </label>
      </div>
    </section>

    <div class="save-area" style="grid-column:1/-1">
      <span>${i("lock")} Guardado localmente en este dispositivo.</span>
      <button type="submit" class="button solid save-button">${i("check")} Guardar perfil</button>
    </div>
  </form>`}function br(){return`
  <div class="two-columns">
    <section class="card">
      <h2>Exportar copia de seguridad</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Descarga todas tus entradas, hábitos y tu perfil en un archivo JSON para guardarlo o llevarlo a otro dispositivo.</p>
      <button class="button solid" data-action="export">${i("download")} Descargar copia (.json)</button>
    </section>
    <section class="card">
      <h2>Importar copia</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Recupera un archivo JSON exportado previamente. Te pedirá confirmación antes de fusionar los datos.</p>
      <button class="button outline" data-action="import">${i("upload")} Seleccionar archivo</button>
      <input type="file" id="import-file" accept=".json,application/json" hidden>
    </section>
  </div>
  <section class="card">
    <h2>Privacidad local</h2>
    <ul class="privacy-list">
      <li>Tus entradas y preferencias se guardan únicamente en el almacenamiento local (<code>localStorage</code>) de este navegador.</li>
      <li>No existen cuentas, servidores externos, telemetría ni envíos a terceros.</li>
      <li>La aplicación funciona sin conexión a internet tras la primera carga.</li>
    </ul>
  </section>
  <section class="card danger-zone">
    <div>
      <h2>Borrar todos los datos</h2>
      <p>Elimina todas las entradas, hábitos y ajustes guardados en este navegador.</p>
    </div>
    <button class="button danger" data-action="clear">${i("trash")} Borrar todo</button>
  </section>`}function fr(e){const a=S.find(s=>s.date===e),t=G(m);return a?{...a}:{date:e,mood:3,sleepHours:m.sleepGoal||t.sleepRecommended||7.5,studyHours:0,energy:null,stress:null,bestOfDay:"",differentToday:"",generalDay:"Registro rápido desde la rutina.",wordOfDay:"",capsule:"",gratitude:["","",""],tomorrow:"",goals:[],tags:[],counters:{},habits:{}}}function Ge(e,a){if(e>g())throw new Error("Ese día todavía no ha llegado.");S=$s({...fr(e),...a})}function nt(){return[...document.querySelectorAll("#routine-goals .task-input")].map(e=>e.value.trim())}function le(){const e=document.querySelector("#routine-tomorrow");if(!e)return;const a=nt().filter(Boolean);try{Ge(y,{tomorrow:e.value.trim(),goals:a})}catch(t){v(t.message||"No se pudo guardar la lista.",!0)}}function vr(){const e=document.querySelector("#routine-tomorrow");e&&(e.addEventListener("change",le),e.addEventListener("input",()=>Ae("manana",le,500)),document.querySelectorAll("#routine-goals .task-input").forEach(a=>{a.addEventListener("change",le),a.addEventListener("input",()=>Ae("manana-tarea",le,600)),a.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),le(),w()),t.key==="Escape"&&w()})}))}let es=null;function yr(e,a,t){const s=e.closest(".counter-row"),o=document.querySelector(`#hint-${a}`);if(o&&(o.textContent=Ba(a,t)),e.classList.remove("num-bump"),e.offsetWidth,e.classList.add("num-bump"),a==="water"){const n=m.waterGoal||8,r=s?.querySelector(".counter-goal-pill"),l=s?.querySelector(".counter-progress i");r&&(r.textContent=`Meta: ${t}/${n}`,r.classList.toggle("met",t>=n)),l&&(l.style.width=`${Math.min(100,Math.round(t/n*100))}%`)}}function $r(){const e={},a=S.find(t=>t.date===y);for(const t of Le){const s=document.querySelector(`[name="counter_${t.key}"]`);e[t.key]=s?parseFloat(s.value)||0:Number(a?.counters?.[t.key])||0}try{Ge(y,{counters:e})}catch(t){v(t.message||"No se pudo guardar el contador.",!0)}}function as(e,a){const t=String(a||"").trim().slice(0,40),s=x.find(o=>o.id===e);if(s){if(!t){v("El hábito necesita un nombre.",!0);return}if(t.toLowerCase()!==s.name.toLowerCase()&&x.some(o=>o.name.toLowerCase()===t.toLowerCase())){v("Ya tienes un hábito con ese nombre.",!0);return}t!==s.name&&(x=ja({...s,name:t}),w(),v("Hábito renombrado"))}}function wr(e){if(!ee)return;const a=document.querySelector(`.habit-toggle[data-habit="${e}"]`);a&&(a.classList.add("is-flashed"),setTimeout(()=>a.classList.remove("is-flashed"),700));const t=document.querySelector(`.momentum-cell[data-habit="${e}"]`);t&&(t.classList.add("is-flashed"),setTimeout(()=>t.classList.remove("is-flashed"),700))}function Sr(){const e=pa(L),a=e.length,t=e.some(o=>o.seen!==!0);document.querySelectorAll(".nav-badge").forEach(o=>{o.textContent=a,o.classList.toggle("is-new",t),o.hidden=!a});const s=document.querySelector(".sea-quick");if(s){const o=s.querySelector("span");o&&(o.textContent=a||ve(L).drifting.length||""),s.classList.toggle("has-new",t)}}function rt(e){const a=L.find(n=>n.id===e);if(!a)return;a.status==="returned"&&a.seen!==!0&&(L=ne(e,{seen:!0}),Sr());const t=a.reply?"":Se(K.reply(e))?.text||"",s=je(xn({...a,replyDraft:t},g(),m));qr(s);const o=()=>{s.close(),w()};s.onclick=n=>{const r=n.target.closest("[data-modal]")?.dataset.modal;if(!r){n.target===s&&s.close();return}if(r==="close"){o();return}if(r==="reply"){const l=(s.querySelector("#bottle-reply")?.value||"").trim();if(!l){v("Escribe primero lo que quieres contestarte.",!0);return}ue(`respuesta:${e}`),L=ne(e,{reply:l,seen:!0,repliedAt:new Date().toISOString()}),oe(K.reply(e)),s.close(),w(),rt(e),v("Le has respondido a tu yo de entonces");return}if(r==="reply-clear"){ue(`respuesta:${e}`),oe(K.reply(e)),L=ne(e,{reply:""}),s.close(),w(),rt(e);return}if(r==="keep"){const l=!a.kept;L=ne(e,{kept:l,keptOn:l?g():null,seen:!0}),o(),v(l?"Botella anclada a tu cuaderno":"Botella desanclada");return}if(r==="to-entry"){try{xr(a),o(),v("Copiado en la entrada de hoy")}catch(l){v(l.message||"No se pudo copiar.",!0)}return}if(r==="recall"){L=ne(e,{status:"returned",returnedAt:g(),seen:!0}),o(),v("La marea te la trajo antes de tiempo");return}if(r==="recast"){L=Ss(e),o(),v("La botella vuelve a navegar");return}}}function xr(e){const a=g(),t=S.find(n=>n.date===a),s=`Del mar (botella del ${A(e.castAt,{day:"numeric",month:"long"})}): «${e.text}»`,o=[t?.generalDay,s].filter(Boolean).join(`

`);Ge(a,{generalDay:o,capsule:t?.capsule||String(e.text).slice(0,240),tags:[...new Set([...t?.tags||[],"Pensamiento"])].slice(0,20)}),L=ne(e.id,{kept:!0,keptOn:a,seen:!0}),y=a,F="diary"}function kr(e){if((document.querySelector("#ocean-fx")||document.body)===document.body){const r=document.createElement("div");r.id="ocean-fx",r.className="ocean-fx",document.body.appendChild(r)}const t=document.querySelector("#ocean-fx"),o=(document.querySelector(".sea-panel")||document.querySelector("#bottle-form"))?.getBoundingClientRect(),n=document.createElement("div");n.className="splash-wrap",n.innerHTML=kn(e),o&&(n.style.setProperty("--to-x",`${Math.round(o.left+o.width*.5)}px`),n.style.setProperty("--to-y",`${Math.round(o.top+o.height*.42)}px`)),t.appendChild(n),document.documentElement.classList.add("is-casting"),setTimeout(()=>document.documentElement.classList.remove("is-casting"),1400),setTimeout(()=>n.remove(),ee?1500:60)}function qr(e){const a=e.querySelector(".bottle-modal");!a||!ee||(a.classList.add("is-uncorking"),setTimeout(()=>a.classList.remove("is-uncorking"),1100))}function Mr(e){const a=new FormData(e),t=(a.get("text")||"").toString().trim();if(t.length<2){v("Escribe algo antes de soltar la botella.",!0);return}const s=a.get("mood"),o=a.get("sea")||"breeze";try{const n=crypto.randomUUID();L=ws({id:n,text:t,mood:s?+s:null,sea:o,castAt:g()});const r=L.find(c=>c.id===n);ue("botella"),oe(K.bottle()),re={text:"",mood:null,sea:o},la="",ce="sea",R="",kr(r||{}),_("saved"),setTimeout(()=>w(),ee?1150:0);const l=De(g());v(r?`Botella al mar${r.push?` · el ${l.weather.short} la retiene ${r.push} ${r.push===1?"día":"días"}`:""} · la orilla la espera hacia el ${A(r.arriveOn,{day:"numeric",month:"long"})}`:"Botella al mar")}catch(n){v(n.message||"No se pudo echar la botella al mar.",!0)}}function Er(){const e=document.querySelector("#bottle-form");if(!e)return;const a=e.querySelector("#bottle-text"),t=e.querySelector("#bottle-words"),s=()=>{const r=e.querySelector('[name="mood"]:checked');re={text:a?.value||"",mood:r?+r.value:null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"},t&&(t.textContent=`${_s(a?.value||"")} palabras`)},o=e.querySelector('button[type="submit"]'),n=()=>{if(!o)return;const r=!!(a?.value||"").trim();o.disabled=!r,o.classList.toggle("is-armed",r)};s(),n(),a?.addEventListener("input",()=>{s(),n()}),e.addEventListener("change",()=>{s(),n()}),document.activeElement===a&&a.value&&a.setSelectionRange(a.value.length,a.value.length),e.addEventListener("submit",r=>{r.preventDefault(),Mr(e)})}function Ar(e){L.find(t=>t.id===e)&&aa({title:"¿Romper esta botella?",text:"El pensamiento se borrará de este navegador. No se puede deshacer.",confirmLabel:"Romperla",danger:!0}).then(t=>{t&&(L=Bo(e),w(),v("Botella rota"))})}const Ya=["generalDay","bestOfDay","differentToday","capsule","wordOfDay","tomorrow","gratitude0","gratitude1","gratitude2","tagCustom"],se=new Map;let la="",it=!1;function ue(e){const a=se.get(e);a&&(clearTimeout(a),se.delete(e))}function Ae(e,a,t=460){clearTimeout(se.get(e)),se.set(e,setTimeout(()=>{se.delete(e),a()},t))}function ze(e,a){se.has(e)&&(clearTimeout(se.get(e)),se.delete(e),a())}function be(){return K.entry(y)}function Us(e){const a={};if(!e)return a;for(const r of Ya){const l=e.querySelector(`[name="${r}"]`);l&&typeof l.value=="string"&&(a[r]=l.value)}for(const r of["mood","energy","stress"]){const l=e.querySelector(`[name="${r}"]:checked`);l&&(a[r]=Number(l.value))}for(const r of["sleepHours","studyHours"]){const l=e.querySelector(`[name="${r}"]`);l&&l.value!==""&&(a[r]=Number(l.value))}const t=[...e.querySelectorAll('[name="tags"]:checked')].map(r=>r.value);t.length&&(a.tags=t);const s={};for(const r of e.querySelectorAll('[name^="counter_"]'))s[r.name.slice(8)]=Number(r.value)||0;Object.keys(s).length&&(a.counters=s);const o={};for(const r of e.querySelectorAll('[name^="habit_"]'))o[r.name.slice(6)]=r.checked;Object.keys(o).length&&(a.habits=o);const n=[...e.querySelectorAll('[name="goal"]')].map(r=>r.value).filter(r=>r.trim());return n.length&&(a.goals=n),a}function Lr(e){const a=S.find(o=>o.date===y);if(!a)return!Object.keys(e).length;for(const o of Ya){if(!(o in e))continue;let n="";if(o.startsWith("gratitude"))n=(a.gratitude||[])[+o.slice(9)]||"";else{if(o==="tagCustom")continue;n=a[o]??""}if(String(e[o]??"").trim()!==String(n).trim())return!1}for(const o of["mood","energy","stress","sleepHours","studyHours"]){if(e[o]===void 0)continue;const n=a[o];if(n==null){if(Number(e[o])!==0&&e[o]!==3)return!1;continue}if(Number(e[o])!==Number(n))return!1}const t=a.counters||{};for(const[o,n]of Object.entries(e.counters||{}))if(Number(n)!==Number(t[o]||0))return!1;const s=a.habits||{};for(const[o,n]of Object.entries(e.habits||{}))if(!!n!=!!s[o])return!1;return!((a.tags||[]).slice().sort().join("|")!==(e.tags||[]).slice().sort().join("|")||(a.goals||[]).join("|")!==(e.goals||[]).join("|"))}function Lt(){const e=document.querySelector("#diary-form");if(!e)return;const a=Us(e);if(Lr(a)){const s=oe(be());_(s||B==="typing"?"saved":B),dt();return}const t=Va(be(),a);t&&!t.ok?_("error"):t&&_("draft"),dt()}function Ct(){const e=document.querySelector("#bottle-form");if(!e)return;const a=Va(K.bottle(),{text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"});a&&!a.ok&&_("error")}function Cr(e,a){!a||!document.contains(a)||Va(K.reply(e),{text:a.value||""})}function ts(){_("typing"),Ae("entrada",Lt,420),Ae("autosave",()=>Ve({silent:!0}),2400)}function ss(){const e=document.querySelector("#bottle-form");if(!e)return;re={text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"},_("typing"),Ae("botella",Ct,380)}function Dr(){const e=document.querySelector("#setup-page-form");if(!e)return;const a={};for(const s of e.querySelectorAll('textarea,input[type="text"],input:not([type])'))s.name&&(a[s.name]=s.value);const t=e.querySelector("#new-custom-quote");t?.value&&(a.customQuote=t.value),Va(K.setup(),a)}function jr(){Ae("perfil",Dr,700)}function Tr(){N.addEventListener("input",e=>{const a=e.target;if(!(!a||!a.closest)){if(a.closest("#diary-form")){ts();return}if(a.closest("#bottle-form")){ss();return}if(a.closest("#setup-page-form")){jr();return}if(a.id==="bottle-reply"&&a.closest("#modal")){const t=a.closest("[data-modal-bottle]")?.dataset.modalBottle;t&&Ae(`respuesta:${t}`,()=>Cr(t,a),360)}}}),N.addEventListener("change",e=>{const a=e.target;!a||!a.closest||(a.closest("#diary-form")&&ts(),a.closest("#bottle-form")&&ss())}),window.addEventListener("pagehide",lt),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&lt()})}function lt(){ze("entrada",Lt),ze("botella",Ct),ze("manana",le),ze("manana-tarea",le);for(const[e,a]of[...se.entries()])e.startsWith("respuesta:")&&(clearTimeout(a),se.delete(e));document.querySelector("#diary-form")&&!it&&B==="draft"&&Ve({silent:!0,final:!0})}function Hr(){Nr(),dt()}function os(e,a,t){if(t==null)return;const s=e.querySelector(`[name="${a}"]`);if(s){if(s.type==="radio"){const o=e.querySelector(`[name="${a}"][value="${t}"]`);o&&(o.checked=!0);return}s.value=Array.isArray(t)?t.join(`
`):t}}function Nr(){const e=document.querySelector("#diary-form");if(!e)return;const a=S.find(s=>s.date===y);if(!Cs(be(),a?.updatedAt))return;const t=Se(be());if(t){for(const s of Ya)os(e,s,t[s]);for(const s of["mood","energy","stress","sleepHours","studyHours"])t[s]!==void 0&&os(e,s,t[s]);if(Array.isArray(t.tags)&&e.querySelectorAll('[name="tags"]').forEach(s=>{s.checked=t.tags.includes(s.value)}),t.counters)for(const[s,o]of Object.entries(t.counters)){const n=e.querySelector(`[name="counter_${s}"]`);n&&(n.value=o)}if(t.habits)for(const[s,o]of Object.entries(t.habits)){const n=e.querySelector(`[name="habit_${s}"]`);n&&(n.checked=!!o)}Array.isArray(t.goals)&&[...e.querySelectorAll('[name="goal"]')].forEach((o,n)=>{t.goals[n]!==void 0&&(o.value=t.goals[n])}),e.dispatchEvent(new Event("input",{bubbles:!0})),_("draft")}}function dt(){const e=document.querySelector("#entry-draft-slot");if(!e)return;const a=S.find(o=>o.date===y),t=e.dataset.live==="1";if(!t&&!Cs(be(),a?.updatedAt)){e.innerHTML="";return}const s=js(be());if(!s){e.innerHTML="";return}e.innerHTML=`<div class="draft-note ${t?"is-live":""}" role="status">
    ${i(t?"pen":"refresh")}
    <span>${t?`Escribiendo: guardado <b>${d(s.when||"ahora mismo")}</b> · ${s.words} palabras`:`Recuperado de donde lo dejaste <b>${d(s.when)}</b> · ${s.words} palabras`}</span>
    <button type="button" class="text-button" data-action="commit-draft">${i("stamp")} Dejarlo escrito ya</button>
    <button type="button" class="text-button is-danger" data-action="discard-draft">${i("close")} Descartar</button>
  </div>`}function Or(){if(re.text||la)return;const e=Se(K.bottle());e?.text&&(re={text:e.text,mood:e.mood||null,sea:e.sea||"breeze"},la=js(K.bottle())?.when||"")}function Br(e){return!!(Ya.map(t=>String(e[t]||"")).join(" ").trim().split(/\s+/).filter(Boolean).length>3||Object.values(e.counters||{}).some(t=>Number(t)>0)||Object.values(e.habits||{}).some(Boolean)||(e.tags||[]).length||(e.gratitude0||"").trim()||(e.gratitude1||"").trim()||(e.gratitude2||"").trim())}function Ve({silent:e=!1,final:a=!1}={}){const t=document.querySelector("#diary-form");if(!t||ge)return!1;const s=Us(t);if(e&&!Br(s))return!1;it=!0,ue("entrada"),ue("autosave");try{const o=Rr(jt(t));if(S=$s(o),oe(be()),ae=!1,_(e?"autosaved":"saved"),Fr(S.find(n=>n.date===y)),e){if(a)try{localStorage.setItem("diario.lastflush.v1",JSON.stringify({at:new Date().toISOString(),date:y}))}catch{}}else{w(),Qr(),v("Día guardado"),document.querySelector(".daily-summary")?.classList.add("reveal");const n=yt(o);n.triggered&&n.level==="high"&&setTimeout(()=>Js("help"),550)}return!0}catch(o){return _("error"),e?String(o.message||"").includes("Ese día")||v("No he podido autoguardar; tu texto sigue a salvo en el borrador.",!0):v(o.message||"No se ha podido guardar este día.",!0),!1}finally{it=!1}}function Fr(e){const a=e||S.find(o=>o.date===y),t=document.querySelector("#hero-words-chip");t&&a&&(t.textContent=`${pe(a)} palabras`);const s=document.querySelector(".entry-status");s&&(s.textContent=a?.updatedAt?`Autoguardado ${At(a.updatedAt)}`:"Sin escribir todavía",s.classList.remove("is-flash"),s.offsetWidth,s.classList.add("is-flash")),Dt()}function _(e){(e==="saved"||e==="autosaved")&&(ra=Date.now()),B=e,Qs()}function Ws(){const e={typing:["pen","Escribiendo…","is-working"],saving:["save","Guardando…","is-working"],draft:["paper","Borrador a salvo, sin enviar","is-draft"],error:["close","Sin guardar · reintenta","is-error"],autosaved:["check","Autoguardado","is-ok"],idle:["check",ra?`Guardado ${At(ra)}`:"Todo guardado","is-ok"]},[a,t,s]=e[B]||e.idle;return`<span class="save-dot ${s}"></span>${i(a)}<span>${d(t)}</span>`}function Qs(){document.querySelectorAll("[data-save-status]").forEach(t=>{t.className=`save-status ${B==="draft"?"is-draft":""} ${B==="error"?"is-error":""} ${B==="typing"||B==="saving"?"is-working":""}`,t.innerHTML=Ws()});const e=document.querySelector("#save-note");e&&(e.outerHTML=`<div class="save-note ${Me().total?"has-pending":""}" id="save-note">
      <span class="save-dot ${B==="error"?"is-error":B==="draft"?"is-draft":"is-ok"}"></span>
      <div><strong>${zs()}</strong><small>${d(Gs())}</small></div>
    </div>`);const a=document.querySelector("#floating-save");if(a){const t=B==="error"||ae;a.classList.toggle("is-visible",t);const s=document.querySelector("#floating-save-text");s&&(s.innerHTML=B==="error"?`${i("close")} El autoguardado falló · tu texto está en el borrador`:`${i("pen")} Cambios sin guardar`)}Dt()}function Dt(){const e=document.querySelector("#draft-chip-slot");if(!e)return;const a=Me();if(!a.total){e.firstElementChild&&(e.innerHTML="");return}e.innerHTML=`<button type="button" class="draft-chip" data-action="show-drafts" title="${a.total} ${a.total===1?"texto a medias guardado":"textos a medias guardados"}">
    ${i("paper")}<span>${a.total}</span>
  </button>`}function Pr(e){const a=Object.entries(e.data||{}).filter(([,n])=>typeof n=="string").map(([,n])=>n).join(" ").replace(/\s+/g," ").trim(),t=a?a.split(/\s+/).length:0,s=Ds(e.scope),o=s===null?"":s<1?"hace un momento":s<60?`hace ${s} min`:`el ${new Date(e.savedAt).toLocaleDateString("es-ES",{day:"numeric",month:"short"})}`;return{scope:e.scope,label:zr(e.scope),words:t,when:o,preview:a?`«${a.slice(0,76)}${a.length>76?"…":""}»`:"(solo cifras y marcas)",goto:e.scope.startsWith("entrada:")?e.scope.slice(8):""}}function ns(){const e=kt().map(Pr),a=e.length?e.map(t=>`
    <li class="draft-row">
      <div class="draft-row-main">
        <strong>${d(t.label)}</strong>
        <small>${t.words} palabras · ${d(t.when)} · ${d(t.preview)}</small>
      </div>
      <div class="draft-row-actions">
        ${t.goto?`<button type="button" class="text-button" data-modal="goto" data-date="${d(t.goto)}">${i("arrow")} Ir a recuperarlo</button>`:""}
        <button type="button" class="text-button is-danger" data-modal="drop" data-scope="${d(t.scope)}">${i("close")} Descartar</button>
      </div>
    </li>`).join(""):`<li class="draft-row is-empty">${i("check")} No hay nada a medias: todo está escrito ya en el cuaderno.</li>`;return`<div class="modal-card drafts-modal">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${i("close")}</button>
    <p class="eyebrow">${i("paper")} Lo que se quedó a medias</p>
    <h2>Ni una palabra perdida</h2>
    <p class="modal-lead">Esto es lo que escribiste y todavía no está cerrado en el cuaderno. Se guarda solo en este dispositivo: nada viaja a ningún sitio.</p>
    <ul class="draft-list">${a}</ul>
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${e.length?`<button class="button danger" data-modal="drop-all">${i("trash")} Descartar todos</button>`:""}
      <button class="button solid" data-modal="save-all">${i("stamp")} Escribirlo todo ahora</button>
    </div>
  </div>`}function zr(e){return e.startsWith("entrada:")?`La entrada del ${A(e.slice(8),{day:"numeric",month:"long"})}`:e==="botella"?"Una botella a medio escribir":e.startsWith("respuesta:")?"Una respuesta a una botella":e==="perfil"?"Tu perfil":"Un texto pendiente"}function Gr(){const e=je(ns());e.onclick=a=>{const t=a.target.closest("[data-modal]"),s=t?.dataset.modal;if(!s){a.target===e&&e.close();return}if(s==="close"){e.close(),w();return}if(s==="drop"){oe(t.dataset.scope),e.innerHTML=ns(),_(Me().total?"draft":"saved"),w(),e.showModal(),v("Borrador descartado");return}if(s==="drop-all"){Vt(),e.close(),w(),v("Todos los borradores descartados");return}if(s==="save-all"){const o=Me().total;for(const n of kt())if(n.scope.startsWith("entrada:"))y=n.scope.slice(8),F="diary",Is(),Ve({silent:!1});else if(n.scope==="botella"&&Se("botella")?.text)Ir(Se("botella"));else if(n.scope.startsWith("respuesta:")){const r=n.scope.slice(10),l=Se(n.scope)?.text;l&&(L=ne(r,{reply:l,seen:!0,repliedAt:new Date().toISOString()}),v("Respuesta guardada"))}e.close(),Vt(),w(),v(o?`Cerrados ${o} textos a medias`:"No había nada que escribir");return}if(s==="goto"){e.close(),de(t.dataset.date);return}}}function Ir(e){if(e?.text)try{const a=crypto.randomUUID();L=ws({id:a,text:e.text,mood:e.mood||null,sea:e.sea||"breeze",castAt:g()}),oe(K.bottle()),re={text:"",mood:null,sea:e.sea||"breeze"},la="",v("Tu botella a medias ya está en el mar")}catch(a){v(a.message||"No se pudo echar la botella al mar.",!0)}}function _s(e){const a=String(e||"").trim();return a?a.split(/\s+/).length:0}function jt(e){const a=new FormData(e),t=S.find(T=>T.date===y),s=G(m),o=(a.get("tagCustom")||"").toString().trim(),n=[...new Set([...a.getAll("tags").map(T=>T.toString().trim()),o].filter(Boolean))],r={};for(const T of Le){const ye=e.querySelector(`[name="counter_${T.key}"]`);r[T.key]=ye?parseFloat(ye.value)||0:Number(t?.counters?.[T.key])||0}const l={},c=[...e.querySelectorAll('[name^="habit_"]')];for(const T of x)l[T.id]=c.length?!!e.querySelector(`[name="habit_${T.id}"]`)?.checked:!!t?.habits?.[T.id];const u=+a.get("mood")||t?.mood||3,p=a.get("sleepHours"),b=p!==null&&p!==""?parseFloat(p):m.sleepGoal||s.sleepRecommended||7.5,$=a.get("studyHours"),M=$!==null&&$!==""?parseFloat($):0,f=(a.get("bestOfDay")||"").toString().trim(),C=(a.get("differentToday")||"").toString().trim(),U=(a.get("capsule")||"").toString().trim(),P=(a.get("wordOfDay")||"").toString().trim();let j=(a.get("generalDay")||"").toString().trim();return j||(j=f||U||(P?`Palabra del día: ${P}.`:`Día ${O[u-1].label.toLowerCase()}.`)),{id:t?.id,date:y,mood:u,sleepHours:b,studyHours:M,energy:a.get("energy")?+a.get("energy"):null,stress:a.get("stress")?+a.get("stress"):null,bestOfDay:f,differentToday:C,generalDay:j,wordOfDay:P,capsule:U,gratitude:[0,1,2].map(T=>(a.get(`gratitude${T}`)||"").toString().trim()),tomorrow:a.has("tomorrow")?(a.get("tomorrow")||"").toString().trim():t?.tomorrow||"",goals:e.querySelector('[name="goal"]')?a.getAll("goal").map(T=>T.toString().trim()).filter(Boolean):t?.goals||[],tags:n,counters:r,habits:l,createdAt:t?.createdAt}}function Rr(e){for(const[a,t]of[["sleepHours","horas de sueño"],["studyHours","horas de dedicación"]]){const s=e[a];if(!Number.isFinite(s)||s<0||s>24)throw new Error(`Escribe unas ${t} válidas, entre 0 y 24.`)}return e}function rs(e){if(!e)return;const a=jt(e),t=document.querySelector("#hero-words-chip");t&&(t.textContent=`${pe(a)} palabras`);const s=document.querySelector("#floating-save");s&&s.classList.toggle("is-visible",ae||B==="error");const o=yt(a),n=document.querySelector("#crisis-alert-slot");n&&(o.triggered&&o.level==="high"&&!Za?n.innerHTML=Ms(o,m):o.triggered||(n.innerHTML=""))}function Vs(e,a){if(!e)return;const t=e.querySelector('[name="age"]'),s=()=>{const o=new FormData(e),n=o.get("age"),r=n?Ga(n,o.get("ageGroup")||"young"):o.get("ageGroup")||"young",l=o.getAll("interests").map(String);e.querySelectorAll("[data-age-group-card]").forEach(M=>{const f=M.dataset.ageGroupCard===r;M.classList.toggle("is-selected",f);const C=M.querySelector('input[type="radio"]');C&&n&&(C.checked=f)});const c=G({age:n||null,ageGroup:r,interests:l}),u=e.querySelector('[name="sleepGoal"]'),p=e.querySelector('[name="studyGoal"]');u&&n&&(u.value=c.sleepRecommended),p&&n&&(p.value=c.studyRecommended);const b=e.querySelector(`#${a}-adaptation-callout`);b&&(b.innerHTML=`
        ${i("compass")}
        <div>
          <strong>Adaptado a: ${d(c.group.title)} (${d(c.group.label)})</strong>
          <p>Sueño recomendado: <b>${q(c.sleepRecommended)} h</b> · Dedicación sugerida: <b>${q(c.studyRecommended)} h</b>.</p>
        </div>`);const $=e.querySelector(`#${a}-suggested-habits`);if($){const M=new Set(x.map(f=>f.name.toLowerCase()));$.innerHTML=c.suggestedHabits.map(f=>{const C=M.has(f.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${d(f)}" ${C?"checked":""}><span>${C?"✓ ":"+ "}${d(f)}</span></label>`}).join("")}};t&&t.addEventListener("input",s),e.querySelectorAll('[name="ageGroup"], [name="interests"]').forEach(o=>{o.addEventListener("change",s)})}function Ur(){const e=document.querySelector("#setup-page-form");e&&(Vs(e,"sp"),e.addEventListener("submit",t=>{t.preventDefault(),Zs(e),w(),v("Perfil actualizado")}),e.addEventListener("change",t=>{t.target.name==="theme"&&Ee(t.target.value,m)}));const a=document.querySelector("#diary-form");a&&(a.addEventListener("submit",t=>{t.preventDefault(),!ge&&Ve()}),a.addEventListener("input",t=>{ae=!0;const s=t.target;if(s.name==="mood"){const n=O[+s.value-1];a.style.setProperty("--active-mood",n.color)}if(s.name==="sleepHours"||s.name==="studyHours"){const n=parseFloat(s.value);a.querySelectorAll(`[data-action="quick-number"][data-target="${s.name}"]`).forEach(r=>{r.classList.toggle("active",parseFloat(r.dataset.val)===n)})}if(s.name==="energy"){const n=document.querySelector("#energy-hint");n&&(n.textContent=ls[+s.value]+".")}if(s.name==="stress"){const n=document.querySelector("#stress-hint");n&&(n.textContent=ds[+s.value]+".")}if(s.name?.startsWith("counter_")){const n=s.name.slice(8),r=parseFloat(s.value)||0,l=document.querySelector(`#hint-${n}`);if(l&&(l.textContent=Ba(n,r)),n==="water"){const c=m.waterGoal||8,u=s.closest(".counter-row"),p=u?.querySelector(".counter-goal-pill"),b=u?.querySelector(".counter-progress i");p&&(p.textContent=`Meta: ${r}/${c}`,p.classList.toggle("met",r>=c)),b&&(b.style.width=`${Math.min(100,Math.round(r/c*100))}%`)}}const o=s.closest(".writing-field");if(o){const n=o.querySelector(".word-count");n&&(n.textContent=`${_s(s.value)} palabras`)}rs(a)}),a.addEventListener("keydown",t=>{if(t.target.id==="tagCustom"&&t.key==="Enter"){t.preventDefault();const s=t.target.value.trim();if(s){const o=a.querySelector(".tag-picker .tag-chip.ghost");o&&o.insertAdjacentHTML("beforebegin",`<label class="tag-chip"><input type="checkbox" name="tags" value="${d(s)}" checked><span>${d(s)}</span></label>`),t.target.value="",ae=!0,rs(a)}}}),Wr())}function Zs(e){const a=new FormData(e),t=a.getAll("suggestedHabits").map(p=>p.toString().trim()).filter(Boolean),s=new Set(x.map(p=>p.name.toLowerCase()));for(const p of t)!s.has(p.toLowerCase())&&x.length<30&&(x=ja({name:p}),s.add(p.toLowerCase()));const o=e.querySelector('[name="sidebarCollapsed"]')!==null,n=a.get("age"),r=n!==null&&n!==""?parseInt(n.toString(),10):null,l=r?Ga(r,a.get("ageGroup")||"young"):a.get("ageGroup")||m.ageGroup,c=a.getAll("interests").map(p=>p.toString().trim()).filter(Boolean);m=ie({completed:!0,name:a.get("name")||"",age:Number.isFinite(r)?r:null,ageGroup:l,interests:c,ritual:a.get("ritual")||m.ritual,tone:a.get("tone")||m.tone,purpose:a.get("purpose")||m.purpose,motto:a.get("motto")||"Un día a la vez.",theme:a.get("theme")||m.theme,sleepGoal:parseFloat(a.get("sleepGoal"))||7.5,studyGoal:parseFloat(a.get("studyGoal"))??2,waterGoal:parseInt(a.get("waterGoal"),10)||8,showDailyWord:e.querySelector('[name="showDailyWord"]')?.checked??!0,showDailyTip:e.querySelector('[name="showDailyTip"]')?.checked??!0,sidebarCollapsed:o?!!e.querySelector('[name="sidebarCollapsed"]')?.checked:W}),W=!!m.sidebarCollapsed,Ee(m.theme,m)}function Wr(){const e=document.querySelector("#diary-form");if(e)for(const a of Le){const t=e.querySelector(`[name="counter_${a.key}"]`),s=document.querySelector(`#hint-${a.key}`);t&&s&&t.value!==""&&(s.textContent=Ba(a.key,parseFloat(t.value)||0))}}function tt(e=""){const a=document.querySelector("#inspiration-slot");if(!a)return;const t=document.querySelector("#diary-form"),s=t?jt(t):S.find(o=>o.date===y);if(a.innerHTML=Es(y,qt,Mt,m,s,s?.wordOfDay||""),e){const o=a.querySelector(e);o&&(o.classList.remove("card-flip-in"),o.offsetWidth,o.classList.add("card-flip-in"))}}function is(){const e=document.querySelector("#quote-slot");if(!e)return;e.innerHTML=qs(y,Et,m);const a=e.querySelector(".quote-card");a&&(a.classList.remove("card-flip-in"),a.offsetWidth,a.classList.add("card-flip-in"))}function Qr(){const e=document.querySelector("#stamp");if(!e)return;const a=m.name?`Cuaderno de ${d(m.name)}`:"Guardado";e.innerHTML=`<div class="stamp-face">${a}<small>${A(y)}</small></div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function v(e,a=!1){const t=document.querySelector("#toast");t&&(t.innerHTML=`<div class="${a?"error":""}">${i(a?"close":"check")}<span>${d(e)}</span></div>`,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),3e3))}function Ea(){Ma&&(clearInterval(Ma),Ma=null)}function je(e){Ea();const a=document.querySelector("#modal");return a.innerHTML=e,a.open||a.showModal(),a}function Js(e="help"){const a=je(sn(m,e));let t=!1;const s=()=>{Ea(),a.close()};a.onclick=o=>{if(o.target.closest('[data-modal="close"]')||o.target===a){s();return}const r=o.target.closest("[data-crisis-tab]");if(r){const c=r.dataset.crisisTab;a.querySelectorAll(".crisis-tab").forEach(u=>u.classList.toggle("active",u.dataset.crisisTab===c)),a.querySelectorAll(".crisis-tab-panel").forEach(u=>u.classList.toggle("active",u.dataset.panel===c)),c!=="breathe"&&Ea();return}const l=o.target.closest('[data-action="toggle-breathing"]');if(l){const c=a.querySelector("#breathing-visual"),u=a.querySelector("#breathing-phase"),p=a.querySelector("#breathing-timer"),b=a.querySelector("#breathing-guide");if(t)t=!1,Ea(),c?.classList.remove("inhale","hold","exhale"),u&&(u.textContent="En pausa"),p&&(p.textContent="4 — 4 — 6"),l.innerHTML=`${i("wind")} Seguir respirando`;else{t=!0,l.innerHTML=`${i("close")} Pausar`;let $=0;const M=()=>{const f=$%14;c?.classList.remove("inhale","hold","exhale"),f<4?(c?.classList.add("inhale"),u&&(u.textContent="Toma aire..."),p&&(p.textContent=`${4-f} s`),b&&(b.textContent="Inhala despacio por la nariz.")):f<8?(c?.classList.add("hold"),u&&(u.textContent="Mantén..."),p&&(p.textContent=`${8-f} s`),b&&(b.textContent="Sostén el aire sin tensar los hombros.")):(c?.classList.add("exhale"),u&&(u.textContent="Suelta..."),p&&(p.textContent=`${14-f} s`),b&&(b.textContent="Deja salir el aire poco a poco.")),$++};M(),Ma=setInterval(M,1e3)}}}}function _r(e=1){let a=e;const t=je(on(m,x,a)),s=t.querySelector("#setup-wizard-form");Vs(s,"wiz");const o=n=>{a=Math.max(1,Math.min(3,n)),t.querySelectorAll(".wizard-step-body").forEach(p=>{const b=+p.dataset.step;p.classList.toggle("active",b===a),p.hidden=b!==a});const r=t.querySelector(".setup-wizard-header .eyebrow"),l=t.querySelector(".setup-wizard-header h2");r&&(r.innerHTML=`${i("sliders")} Paso ${a} de 3`),l&&(l.textContent=a===1?"Sobre ti, tu edad y tus gustos":a===2?"Tu ritmo y tus hábitos":"Papel e icono de tu cuaderno"),t.querySelectorAll(".wizard-steps-bar span").forEach((p,b)=>{p.classList.toggle("done",a>=b+1),p.classList.toggle("current",a===b+1)});const u=t.querySelector(".wizard-footer");u&&(u.innerHTML=`
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${i("left")} Anterior</button>`:'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${i("right")}</button>`:`<button type="submit" class="button solid">${i("check")} Guardar</button>`}`)};t.onchange=n=>{n.target.name==="theme"&&Ee(n.target.value,m)},t.onsubmit=n=>{n.preventDefault(),s&&Zs(s),t.close(),w(),v("Tu cuaderno se ha adaptado a tus gustos")},t.onclick=n=>{if(n.target.closest('[data-modal="close"]')||n.target===t){Ee(m.theme,m),t.close();return}const l=n.target.closest("[data-wizard]");if(l){const c=l.dataset.wizard;o(c==="next"?a+1:a-1)}}}function aa({title:e,text:a,confirmLabel:t,danger:s=!1}){return new Promise(o=>{const n=je(`<div class="modal-card">
      <h2>${d(e)}</h2><p>${d(a)}</p>
      <div class="modal-actions">
        <button class="button outline" data-modal="cancel">Cancelar</button>
        <button class="button ${s?"danger":"solid"}" data-modal="confirm">${d(t)}</button>
      </div>
    </div>`);n.onclick=r=>{const l=r.target.closest("[data-modal]")?.dataset.modal;l?(n.close(),o(l==="confirm")):r.target===n&&(n.close(),o(!1))}})}function Vr(e){const a=S.find(n=>n.date===e);if(!a){de(e);return}const t=G(m),s=x.filter(n=>a.habits?.[n.id]),o=je(`<article class="modal-card entry-modal">
    <div class="section-heading">
      <div><p class="eyebrow">${m.name?`Cuaderno de ${d(m.name)} · `:""}Día ${da(a.date,S)}</p><h2>${A(a.date)}</h2></div>
      <span class="mood-tag" style="--mood:${O[a.mood-1].color}">${O[a.mood-1].emoji} ${O[a.mood-1].label}</span>
    </div>
    <div class="read-metrics">
      <span class="chiplet">${i("moon")} ${q(a.sleepHours)} h sueño</span>
      <span class="chiplet">${i("study")} ${q(a.studyHours)} h dedicación</span>
      ${a.energy?`<span class="chiplet">${i("bolt")} energía ${a.energy}/5</span>`:""}
      ${a.stress?`<span class="chiplet">${i("storm")} estrés ${a.stress}/5</span>`:""}
      <span class="chiplet">${i("pen")} ${pe(a)} palabras</span>
    </div>
    ${(a.tags||[]).length?`<div class="read-metrics">${a.tags.map(n=>`<span class="chiplet">${i("hash")} ${d(n)}</span>`).join("")}</div>`:""}
    ${a.wordOfDay?`<div class="read-section"><h3>Palabra del día</h3><p>«${d(a.wordOfDay)}»</p></div>`:""}
    ${a.capsule?`<div class="read-section"><h3>${d(t.capsuleLabel)}</h3><p>${d(a.capsule)}</p></div>`:""}
    <div class="read-section"><h3>Notas del día</h3><p class="dropcap-paragraph">${d(a.generalDay)}</p></div>
    ${a.bestOfDay?`<div class="read-section"><h3>Lo mejor del día</h3><p>${d(a.bestOfDay)}</p></div>`:""}
    ${a.differentToday?`<div class="read-section"><h3>¿Qué ha sido distinto?</h3><p>${d(a.differentToday)}</p></div>`:""}
    ${a.gratitude?.some(Boolean)?`<div class="read-section"><h3>Agradecimientos</h3><ol>${a.gratitude.filter(Boolean).map(n=>`<li>${d(n)}</li>`).join("")}</ol></div>`:""}
    ${a.tomorrow||a.goals?.length?`<div class="read-section"><h3>Para mañana</h3><p>${d(a.tomorrow)}</p>${a.goals?.length?`<ul>${a.goals.map(n=>`<li>${d(n)}</li>`).join("")}</ul>`:""}</div>`:""}
    ${x.length&&s.length?`<div class="read-section"><h3>Hábitos cumplidos</h3><p>${s.map(n=>d(n.name)).join(" · ")}</p></div>`:""}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      <button class="button danger" data-modal="delete">Eliminar</button>
      <button class="button solid" data-modal="edit">${i("pen")} Editar</button>
    </div>
  </article>`);o.onclick=n=>{const r=n.target.closest("[data-modal]")?.dataset.modal,l=()=>o.close();(r==="close"||n.target===o)&&l(),r==="edit"&&(l(),de(a.date)),r==="delete"&&(l(),Xs(a.date))}}function de(e,a=""){if(e>g()){v("Ese día todavía no ha llegado.",!0);return}Ys(),Ke=a||(e<y?"prev":e>y?"next":""),ae=!1,y=e,F="diary",J=!1,Za=!1,w({transition:!0})}function Ys(){ze("entrada",Lt),ze("botella",Ct),document.querySelector("#diary-form")&&B==="draft"&&Ve({silent:!0})}function Ks(){if(window.innerWidth<=980){J=!J,document.querySelector(".sidebar")?.classList.toggle("is-open",J),document.querySelector(".sidebar-backdrop")?.classList.toggle("is-visible",J);return}W=!W,m=ie({sidebarCollapsed:W});const e=document.querySelector(".sidebar");if(e){e.classList.toggle("is-collapsed",W);const a=e.querySelector(".sidebar-collapse-btn");a&&(a.innerHTML=i(W?"right":"left"),a.title=W?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)",a.setAttribute("aria-expanded",String(!W))),e.classList.add("is-animating"),setTimeout(()=>{e.classList.remove("is-animating"),ia()},420),setTimeout(()=>ia(),60)}}async function Xs(e){await aa({title:"¿Eliminar esta entrada?",text:`Se borrará del dispositivo el registro de ${A(e)}.`,confirmLabel:"Eliminar",danger:!0})&&(S=Lo(e),w(),v("Entrada eliminada."))}function Zr(e,a){const t=new Blob([a],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(t),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),1e3)}N.addEventListener("click",async e=>{const a=e.target.closest("[data-view]"),t=e.target.closest("[data-action]");if(e.target.closest(".brand")){e.preventDefault(),de(g());return}if(a&&!t){const h=a.dataset.view;Ys(),ae=!1,h!==F&&(R=""),F=h,J=!1,F==="diary"&&(y=g()),w({transition:!0});return}if(!t)return;const{action:s,date:o,range:n,mini:r,key:l,step:c,habit:u,name:p,word:b,tab:$,quote:M,index:f,layout:C,target:U,val:P,monthly:j,id:T,delta:ye}=t.dataset;switch(s){case"menu":J=!J,w();break;case"close-menu":J=!1,w();break;case"toggle-sidebar":Ks();break;case"archive-tab":xa=$||"list",w();break;case"stats-tab":Fe=$||"pulse",w();break;case"profile-tab":ka=$||"personal",w();break;case"thoughts-tab":ce=$||"shore",R="",w();break;case"sea-day":{R=R===o?"":o,R&&!Kn().length&&(R="",v("Ese día no toca tierra ninguna botella.",!0)),ce=R?"sea":ce,w(),R&&setTimeout(()=>document.querySelector("#ocean-body")?.scrollIntoView({behavior:ee?"smooth":"auto",block:"center"}),80);break}case"clear-sea-filter":R="",w();break;case"show-drafts":Gr();break;case"commit-draft":Ve();break;case"discard-draft":{aa({title:"¿Descartar lo escrito a medias?",text:"Se borrar el borrador de este día en este dispositivo. Lo que ya está guardado en el cuaderno se queda.",confirmLabel:"Descartarlo",danger:!0}).then(h=>{h&&(ue("entrada"),ue("autosave"),oe(be()),_("saved"),w(),v("Borrador descartado"))});break}case"discard-bottle-draft":{ue("botella"),oe(K.bottle()),re={text:"",mood:null,sea:re.sea||"breeze"},la="",w(),v("Borrador de la botella descartado");break}case"routine-tab":Xe=$||"hoy",w();break;case"shift-day":{const h=E(y,parseInt(ye||"1",10));if(h>g()){v("Ese día todavía no ha llegado.",!0);break}y=h,w(),window.scrollTo({top:0,behavior:"smooth"});break}case"today-routine":y=g(),w();break;case"focus-composer":{const h=document.querySelector("#bottle-text");h&&(h.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>h.focus(),250));break}case"toggle-habit":{const h=o||y;if(h>g()){v("Ese día todavía no ha llegado.",!0);break}const k=S.find(I=>I.date===h),D={...k?.habits||{}},H=!D[u];D[u]=H;try{Ge(h,{habits:D});const I=!k;w(),wr(u);const Ze=x.find(Ka=>Ka.id===u)?.name||"Hábito",Tt=x.length,eo=x.filter(Ka=>D[Ka.id]).length;H&&h===g()&&Tt&&eo===Tt?v("Rutina de hoy completada"):v(I&&H?`«${Ze}» marcado · creé una entrada mínima para ese día`:H?`«${Ze}» marcado`:`«${Ze}» desmarcado`)}catch(I){v(I.message||"No se pudo guardar el hábito.",!0)}break}case"add-suggested-habit":{if(!p)break;if(x.length>=30){v("Máximo 30 hábitos.",!0);break}if(x.some(h=>h.name.toLowerCase()===p.toLowerCase())){v("Ya está en tu lista.",!0);break}x=ja({name:p}),w(),v(`«${p}» añadido a tu rutina`);break}case"edit-habit":{const h=t.closest(".habit-stat-row"),k=h?.querySelector(".habit-stat-name strong"),D=x.find(I=>I.id===u);if(!k||!D)break;k.outerHTML=`<input class="habit-rename" maxlength="40" value="${d(D.name)}" aria-label="Renombrar hábito">`;const H=h.querySelector(".habit-rename");H.focus(),H.select(),H.addEventListener("keydown",I=>{I.key==="Enter"&&(I.preventDefault(),H.dataset.done="1",as(u,H.value)),I.key==="Escape"&&(H.dataset.done="1",w())}),H.addEventListener("blur",()=>{H.dataset.done!=="1"&&as(u,H.value)});break}case"routine-counter-plus":case"routine-counter-minus":{const h=document.querySelector(`[name="counter_${l}"]`);if(!h)break;const k=s==="routine-counter-plus"?1:-1,D=parseFloat(c)||1,H=Math.min(parseFloat(h.max),Math.max(parseFloat(h.min),(parseFloat(h.value)||0)+k*D));h.value=Math.round(H*10)/10,yr(h,l,parseFloat(h.value)),clearTimeout(es),es=setTimeout($r,400);break}case"add-goal-routine":{le();const h=nt().filter(Boolean);h.push("");try{Ge(y,{goals:h}),w();const k=document.querySelectorAll("#routine-goals .task-input");k[k.length-1]?.focus()}catch(k){v(k.message||"No se pudo añadir la tarea.",!0)}break}case"remove-goal-routine":{const h=nt().filter((D,H)=>H!==+f),k=S.find(D=>D.date===y);try{Ge(y,{goals:h.filter(Boolean),tomorrow:document.querySelector("#routine-tomorrow")?.value.trim()??(k?.tomorrow||"")}),w()}catch(D){v(D.message||"No se pudo quitar la tarea.",!0)}break}case"open-bottle":rt(T);break;case"recall-bottle":{L=ne(T,{status:"returned",returnedAt:g(),seen:!0}),w(),v("Botella recogida en la orilla");break}case"recast-bottle":{L=Ss(T),w(),v("Vuelve a estar en el agua");break}case"delete-bottle":Ar(T);break;case"toggle-more-details":{Ye=!Ye;const h=document.querySelector("#extras-accordion");h&&(h.classList.toggle("is-open",Ye),t.setAttribute("aria-expanded",String(Ye)));break}case"quick-number":{const h=document.querySelector(`#${U}`);h&&P!==void 0&&(h.value=P,h.classList.remove("num-bump"),h.offsetWidth,h.classList.add("num-bump"),h.dispatchEvent(new Event("input",{bubbles:!0})));break}case"cycle-theme":{const h=Y.findIndex(Ze=>Ze.id===m.theme),k=Y[(h+1)%Y.length];m=ie({theme:k.id}),Ee(m.theme,m);const D=document.querySelector(".theme-pill > span:last-child"),H=document.querySelector(".topbar-favicon-mini"),I=document.querySelector(".ex-libris-icon");D&&(D.textContent=k.name),H&&(H.innerHTML=he(m.theme,m)),I&&(I.innerHTML=he(m.theme,m)),v(`Tema: ${k.name}`);break}case"open-setup-wizard":_r(1);break;case"dismiss-setup-banner":m=ie({completed:!0}),document.querySelector(".setup-welcome-banner")?.remove();break;case"open-crisis-modal":Js($||"help");break;case"dismiss-crisis-banner":Za=!0,document.querySelector("#crisis-alert-slot").innerHTML="";break;case"next-daily-word":qt++,tt(".word-of-day-card");break;case"next-daily-tip":Mt++,tt(".tip-of-day-card");break;case"next-quote":Et++,is();break;case"save-quote":{if(!M)break;const h=m.savedQuotes||[],k=h.includes(M),D=k?h.filter(H=>H!==M):[M,...h];m=ie({savedQuotes:D}),is(),v(k?"Frase quitada de tus guardadas":"Frase guardada en tu perfil");break}case"add-custom-quote":{const k=document.querySelector("#new-custom-quote")?.value.trim();if(!k){v("Escribe una frase primero.",!0);break}m=ie({savedQuotes:[k,...m.savedQuotes||[]]}),w(),v("Frase añadida");break}case"remove-saved-quote":{const h=parseInt(f,10),k=(m.savedQuotes||[]).filter((D,H)=>H!==h);m=ie({savedQuotes:k}),w(),v("Frase eliminada");break}case"toggle-focus-writing":{ea=!ea,document.querySelector(".diary-layout")?.classList.toggle("is-focus-writing",ea);break}case"history-layout":{Sa=C||"grid",w();break}case"use-daily-word":{const h=document.querySelector("#wordOfDay");h&&b&&(h.value=b,ae=!0,h.dispatchEvent(new Event("input",{bubbles:!0})),h.classList.add("highlight-flash"),setTimeout(()=>h.classList.remove("highlight-flash"),900),tt(),v(`«${b}» anotada`));break}case"inspire-prompt":{Pe=!Pe;const h=document.querySelector("#writing-prompt-box");h&&(h.hidden=!Pe,h.classList.toggle("is-open",Pe));break}case"next-writing-prompt":{qa++;const h=document.querySelector("#writing-prompt-text");h&&(h.classList.remove("text-swap"),h.offsetWidth,h.textContent=st(y,qa),h.classList.add("text-swap"));break}case"insert-writing-prompt":{const h=st(y,qa),k=document.querySelector("#generalDay");if(k){const D=k.value.trim();k.value=D?`${D}

— ${h}
`:`— ${h}
`,k.focus(),k.setSelectionRange(k.value.length,k.value.length),k.dispatchEvent(new Event("input",{bubbles:!0}))}break}case"quick-save":{const h=document.querySelector("#diary-form");h&&h.requestSubmit();break}case"previous":de(E(y,-1),"prev");break;case"next":de(E(y,1),"next");break;case"today":de(g());break;case"open-day":de(o);break;case"read":Vr(o);break;case"delete":Xs(o);break;case"add-goal":document.querySelector("#goals").insertAdjacentHTML("beforeend",Vn()),document.querySelector("#goals .goal-row:last-child input")?.focus(),ae=!0;break;case"remove-goal":t.closest(".goal-row").remove(),ae=!0;break;case"counter-plus":case"counter-minus":{const h=document.querySelector(`[name="counter_${l}"]`);if(!h)break;const k=s==="counter-plus"?1:-1,D=parseFloat(c)||1,H=Math.min(parseFloat(h.max),Math.max(parseFloat(h.min),(parseFloat(h.value)||0)+k*D));h.value=Math.round(H*10)/10,h.classList.remove("num-bump"),h.offsetWidth,h.classList.add("num-bump"),h.dispatchEvent(new Event("input",{bubbles:!0}));break}case"add-habit":{const k=document.querySelector("#new-habit")?.value.trim();if(!k){v("Escribe un nombre para el hábito.",!0);break}if(x.length>=30){v("Máximo 30 hábitos.",!0);break}if(x.some(D=>D.name.toLowerCase()===k.toLowerCase())){v("Ya existe un hábito con ese nombre.",!0);break}x=ja({name:k}),w(),document.querySelector("#new-habit")?.focus(),v(`Hábito «${k}» añadido`);break}case"delete-habit":{await aa({title:"¿Eliminar este hábito?",text:`Se quitará «${p}» de tu lista actual.`,confirmLabel:"Eliminar",danger:!0})&&(x=Do(u),w(),v("Hábito eliminado"));break}case"month-prev":r==="1"?ba=Te(ba,-1):X=Te(X,-1),w();break;case"month-next":r==="1"?ba=Te(ba,1):X=Te(X,1),w();break;case"period-prev":j==="1"?X=Te(X,-1):y=E(y,-7),w();break;case"period-next":j==="1"?X=Te(X,1):y=E(y,7),w();break;case"range":Be=+n,w();break;case"export":case"backup":Zr(`diario-${g()}.json`,Fo(S,x,m)),v("Copia descargada");break;case"import":document.querySelector("#import-file").click();break;case"clear":await aa({title:"¿Borrar todos los datos?",text:"Se eliminarán todas las entradas, hábitos y preferencias de este navegador.",confirmLabel:"Borrar todo",danger:!0})&&(Co(),Ja(),y=g(),F="diary",w(),v("Datos eliminados"));break}});N.addEventListener("change",e=>{if(e.target.id==="import-file"){const a=e.target.files[0];if(!a)return;const t=new FileReader;t.onload=()=>{try{Ne=Po(t.result);const s=je(`<div class="modal-card">
          <h2>Importar copia</h2>
          <p>El archivo contiene <strong>${Ne.entries.length}</strong> ${Ne.entries.length===1?"entrada":"entradas"} y <strong>${Ne.habits.length}</strong> ${Ne.habits.length===1?"hábito":"hábitos"}.</p>
          <div class="modal-actions">
            <button class="button outline" data-modal="cancel">Cancelar</button>
            <button class="button solid" data-modal="confirm">Importar</button>
          </div>
        </div>`);s.onclick=o=>{const n=o.target.closest("[data-modal]")?.dataset.modal;n==="confirm"&&(zo(Ne),Ja(),v("Copia importada")),(n||o.target===s)&&(s.close(),w())}}catch(s){v(s.message||"No se ha podido importar el archivo.",!0)}e.target.value=""},t.readAsText(a)}e.target.id==="history-mood"&&($a=e.target.value,w()),e.target.id==="history-tag"&&(wa=e.target.value,w())});N.addEventListener("input",e=>{if(e.target.id==="history-search"){ya=e.target.value;const a=document.activeElement===e.target;if(w(),a){const t=document.querySelector("#history-search");t.focus(),t.setSelectionRange(t.value.length,t.value.length)}}});window.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="b"&&(e.preventDefault(),Ks())});window.addEventListener("beforeunload",e=>{lt(),B==="error"&&(e.preventDefault(),e.returnValue="")});window.addEventListener("storage",e=>{if(!(!e.key||!String(e.key).startsWith("diario.")))try{Ja(),w(),v("Otra pestaña cambió el cuaderno: lo he actualizado")}catch(a){v("No pude refrescar los datos: "+a.message,!0)}});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});w();_("idle");const Aa=pa(L).filter(e=>e.seen!==!0);Aa.length&&setTimeout(()=>{v(`El mar te ha devuelto ${Aa.length} ${Aa.length===1?"pensamiento":"pensamientos"}`),document.querySelectorAll(".shore-bottle").forEach((e,a)=>{e.style.setProperty("--wash-delay",`${a*140}ms`),e.classList.add("is-washing")}),document.querySelector(".sea-panel")?.classList.add("is-rising"),setTimeout(()=>document.querySelector(".sea-panel")?.classList.remove("is-rising"),2600)},820);Jr();function Jr(){const e=Me();if(!e.total)return e;const a=[];return e.entries&&a.push(`${e.entries} ${e.entries===1?"entrada":"entradas"}`),e.bottles&&a.push(`${e.bottles} ${e.bottles===1?"botella":"botellas"} a medio escribir`),a.length&&setTimeout(()=>v(`Recuperado lo que dejaste a medias: ${a.join(" y ")}`),Aa.length?2400:1100),e}

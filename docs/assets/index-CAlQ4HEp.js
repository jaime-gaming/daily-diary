(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const C=[{value:1,emoji:"😫",label:"Fatal",color:"#a8442c"},{value:2,emoji:"😕",label:"Flojo",color:"#c2743a"},{value:3,emoji:"😐",label:"Normal",color:"#98938a"},{value:4,emoji:"🙂",label:"Bien",color:"#4e6f52"},{value:5,emoji:"🤩",label:"Genial",color:"#254d32"}],Na=["L","M","X","J","V","S","D"],fa=["","Muy baja","Baja","Normal","Alta","Muy alta"],$a=["","Muy bajo","Bajo","Normal","Alto","Muy alto"],Ga=["Productivo","Tranquilo","Ajetreado","Social","Solitario","Creativo","Cansado","Motivado","Ansioso","Emocionado","Nostálgico","Aburrido"],ne=[{key:"water",label:"Agua",unit:"vasos",min:0,max:40,step:1,icon:"drop"},{key:"exercise",label:"Ejercicio",unit:"min",min:0,max:1440,step:5,icon:"run"},{key:"reading",label:"Lectura",unit:"min",min:0,max:1440,step:5,icon:"book"},{key:"mindfulness",label:"Pausa consciente",unit:"min",min:0,max:1440,step:5,icon:"leaf"}],Pa=["bestOfDay","differentToday","generalDay","tomorrow","wordOfDay"],pe=[{id:"teen",min:10,max:18,label:"12 – 18 años",title:"Instituto y descubrimiento",desc:"Pensado para tu ritmo de clases, exámenes, amigos, aficiones y empezar a guardar tu propia historia.",sleepRecommended:8.5,studyRecommended:2,focusLabel:"Horas de estudio",focusQuestion:"¿Cuánto tiempo has dedicado hoy a estudiar, repasar o hacer tareas?",tags:["Clases","Exámenes","Amigos","Deporte","Música","Videojuegos","Tarde libre","Tranquilo","Cansado","Motivado","Creativo","Social"],habits:["Hacer tareas sin mirar el móvil","Leer 15 minutos antes de dormir","Moverme o entrenar un rato","Dejar la mochila lista para mañana","Dejar el móvil fuera de la cama","Salir a tomar el aire"],placeholders:{bestOfDay:"Una risa en clase, una partida con amigos, una canción en el bus, quitarme un examen de encima...",differentToday:"Algo curioso que pasó en el insti, una charla que no esperaba o un plan improvisado...",generalDay:"Cuenta cómo te has sentido hoy de verdad, qué te ha dado rabia, qué te ha hecho gracia...",tomorrow:"Repasar ese tema a tiempo, quedar un rato, acostarme sin quedarme pegado a la pantalla..."}},{id:"young",min:19,max:26,label:"19 – 26 años",title:"Universidad, proyectos y primeros pasos",desc:"Adaptado a años de carrera, primeros trabajos, independencia, amigos y construir tu propio camino.",sleepRecommended:8,studyRecommended:3,focusLabel:"Horas de estudio y foco",focusQuestion:"¿Cuántas horas has dedicado a estudiar, formarte o sacar adelante tus proyectos?",tags:["Productivo","Uni / Trabajo","Amigos","Entreno","Creativo","Tranquilo","Cansado","Motivado","Social","Solitario","Nostálgico","Ajetreado"],habits:["Bloque de estudio sin distracciones","Entrenar o caminar 30 min","Leer 20 páginas","Cocinar algo casero","Sin pantallas 30 min antes de dormir","Ordenar mi mesa al acabar"],placeholders:{bestOfDay:"Un café a media mañana, avanzar de verdad con mis cosas, entrenar, una charla hasta tarde...",differentToday:"Una idea que me vino de repente, alguien con quien coincidí, un cambio de planes...",generalDay:"Escribe para ti cómo ha ido el día, qué tienes en la cabeza y cómo llevas la semana...",tomorrow:"Aprovechar la mañana, quitarme esa tarea pendiente, guardar tiempo para descansar..."}},{id:"adult",min:27,max:49,label:"27 – 49 años",title:"Equilibrio, oficio y vida propia",desc:"Diseñado para compaginar trabajo o proyectos, descanso mental, salud, casa y tiempo de calidad.",sleepRecommended:7.5,studyRecommended:1.5,focusLabel:"Horas de enfoque o aprendizaje",focusQuestion:"¿Cuánto tiempo has dedicado hoy a aprender, leer o avanzar en proyectos propios?",tags:["Enfocado","Tranquilo","Trabajo","Familia","Deporte","Lectura","Cansado","Motivado","Social","Creativo","Desconexión","Ajetreado"],habits:["Cerrar el trabajo a mi hora","Caminar 30 minutos sin prisas","Leer antes de apagar la luz","Estirar espalda y cuello","Beber agua durante la jornada","Media hora sin notificaciones"],placeholders:{bestOfDay:"Una sobremesa tranquila, resolver un asunto pendiente, cerrar el ordenador y desconectar...",differentToday:"Algo que rompió la inercia de la semana o un detalle cotidiano que hoy noté distinto...",generalDay:"Cómo ha ido la jornada, qué energía te queda esta noche y qué necesitas soltar...",tomorrow:"Centrarme en lo prioritario, no llenarme la agenda de más, salir a estirar las piernas..."}},{id:"senior",min:50,max:120,label:"50+ años",title:"Serenidad, bienestar y perspectiva",desc:"Orientado a saborear el ritmo diario, cuidar la salud, los paseos, la lectura y la memoria de lo vivido.",sleepRecommended:7.5,studyRecommended:1,focusLabel:"Tiempo de lectura o dedicación",focusQuestion:"¿Cuánto tiempo has dedicado hoy a la lectura, aprender o cultivar tus aficiones?",tags:["Sereno","Paseo","Lectura","Familia","Naturaleza","Salud","Agradecido","Activo","Creativo","Social","Tranquilo","Nostálgico"],habits:["Paseo matutino al aire libre","Rato de lectura tranquila","Ejercicios de movilidad suave","Llamar o ver a alguien querido","Cuidar el descanso nocturno","Un momento de silencio y calma"],placeholders:{bestOfDay:"La luz de la mañana en el paseo, una buena conversación, avanzar con el libro que estoy leyendo...",differentToday:"Una visita grata, un recuerdo que volvió con nitidez, un paseo por un sitio distinto...",generalDay:"Anota con sosiego cómo ha transcurrido el día y con qué sensación te quedas hoy...",tomorrow:"Salir a caminar temprano, dedicar un rato a la lectura, disfrutar del día sin prisa..."}}],He=[{id:"reading",label:"Lectura y escritura",icon:"book",habit:"Leer 20 minutos con calma",tag:"Lectura"},{id:"sport",label:"Deporte y movimiento",icon:"run",habit:"Entrenar o moverme 30 min",tag:"Deporte"},{id:"study",label:"Estudio y aprendizaje",icon:"study",habit:"Sesión de estudio sin móvil",tag:"Productivo"},{id:"music",label:"Música, cine y arte",icon:"spark",habit:"Escuchar un álbum o crear algo",tag:"Creativo"},{id:"nature",label:"Naturaleza y aire libre",icon:"leaf",habit:"Salir a caminar al aire libre",tag:"Naturaleza"},{id:"social",label:"Amigos y gente querida",icon:"heart",habit:"Hablar con alguien que quiero",tag:"Social"},{id:"calm",label:"Calma y descanso",icon:"moon",habit:"Apagar pantallas 30 min antes de dormir",tag:"Tranquilo"},{id:"projects",label:"Proyectos personales",icon:"bolt",habit:"Dedicar 30 min a mi propio proyecto",tag:"Enfocado"},{id:"gaming",label:"Tecnología y videojuegos",icon:"target",habit:"Parar a tiempo para descansar la vista",tag:"Desconexión"},{id:"cooking",label:"Cocina y comer bien",icon:"flame",habit:"Preparar una comida casera y tranquila",tag:"Bienestar"}],me=[{id:"night",label:"Por la noche, al cerrar el día",icon:"moon"},{id:"morning",label:"Por la mañana, con café o té",icon:"sun"},{id:"afternoon",label:"A media tarde, haciendo una pausa",icon:"leaf"},{id:"anytime",label:"Cuando me pide el cuerpo escribir",icon:"pen"}],ge=[{id:"warm",label:"Cálido y cercano",desc:"Como hablar con un buen amigo en calma"},{id:"literary",label:"Pausado y literario",desc:"Con gusto por las palabras y los detalles"},{id:"direct",label:"Directo y práctico",desc:"Al grano, claro y enfocado en tu día a día"},{id:"gentle",label:"Suave y compasivo",desc:"Especialmente amable para días de cansancio"}],z=[{id:"paper",name:"Papel Clásico",desc:"Cuaderno color crema y tinta estilográfica carbón",colors:["#F3EFE6","#211E17","#B34A2E"],favicon:{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"}},{id:"night",name:"Tinta Nocturna",desc:"Cuero oscuro y trazos cálidos para escribir de noche",colors:["#151412","#EDE6D8","#D96B4E"],favicon:{bg:"#151412",page:"#272420",accent:"#D96B4E",ink:"#EDE6D8"}},{id:"forest",name:"Bosque Sereno",desc:"Encuadernación salvia y papel natural de algodón",colors:["#EBF0EA","#19241D","#356343"],favicon:{bg:"#19241D",page:"#EBF0EA",accent:"#4C8B5E",ink:"#19241D"}},{id:"terracotta",name:"Atardecer Cálido",desc:"Arcilla cocida, papel hueso y acentos ocre",colors:["#F6ECE4","#261B15","#C45534"],favicon:{bg:"#261B15",page:"#F6ECE4",accent:"#C45534",ink:"#261B15"}},{id:"ocean",name:"Azul Atlántico",desc:"Papel marfil frío y tinta azul de cuaderno de viaje",colors:["#EDF2F6","#16222F","#2B5F8C"],favicon:{bg:"#16222F",page:"#EDF2F6",accent:"#2B5F8C",ink:"#16222F"}},{id:"lavender",name:"Bruma Lavanda",desc:"Lino malva suave y tinta ciruela",colors:["#F2EEF6","#221B2B","#6E4B8E"],favicon:{bg:"#221B2B",page:"#F2EEF6",accent:"#6E4B8E",ink:"#221B2B"}}],Fa=[{id:"calm",label:"Calma y desahogo",icon:"leaf",desc:"Soltar el ruido del día y quedarme más tranquilo/a."},{id:"focus",label:"Constancia y hábitos",icon:"study",desc:"Cuidar mi estudio, mi descanso y mis rutinas diarias."},{id:"memory",label:"Guardar mi historia",icon:"book",desc:"Que los meses no pasen sin recordar lo que he vivido."},{id:"growth",label:"Conocerme mejor",icon:"spark",desc:"Ver qué cosas me sientan bien y cuáles me quitan energía."}],Ba=["Leer 20 minutos","Caminar al aire libre","Pausa sin pantallas","Beber 8 vasos de agua","Respirar 5 minutos en calma","Dormir a buena hora","Estirar el cuerpo","Ordenar mi espacio"],la=[{text:"No todos los días son buenos, pero siempre queda algún rincón que merece la pena guardar.",author:"Nota de cuaderno",tones:["warm","gentle"],ages:["teen","young","adult","senior"]},{text:"Cómo pasamos los días es, al final, cómo pasamos la vida.",author:"Annie Dillard",tones:["literary","direct"],ages:["young","adult","senior"],interests:["reading","projects"]},{text:"Escribir en un diario es hablar contigo sin tener que fingir que todo va perfecto.",author:"Apunte al margen",tones:["direct","warm"],ages:["teen","young","adult"]},{text:"La prisa casi nunca arregla lo que el descanso sí sabe colocar en su sitio.",author:"Cuaderno de calma",tones:["gentle","warm"],ages:["teen","young","adult","senior"],interests:["calm","nature"]},{text:"Un paso corto dado hoy vale más que diez planes perfectos que se quedan para el lunes.",author:"Bitácora personal",tones:["direct"],ages:["teen","young","adult"],interests:["study","sport","projects"]},{text:"Guardar memoria de las cosas pequeñas es la mejor forma de vivir dos veces.",author:"Tradición de lectura",tones:["literary"],ages:["young","adult","senior"],interests:["reading","music"]},{text:"Sé amable con tu propio ritmo: ni los árboles dan fruto todos los meses del año.",author:"Cuaderno de campo",tones:["gentle","literary"],ages:["teen","young","adult","senior"],interests:["nature","calm"]},{text:"Lo que hoy parece un examen gigante o un problema sin salida, dentro de un mes será solo una página pasada.",author:"Nota para días revueltos",tones:["warm","gentle"],ages:["teen","young"],interests:["study","gaming"]}],da=[{word:"Ataraxia",origin:"Griego clásico",meaning:"Tranquilidad de ánimo que nace cuando dejamos de pelear contra lo que no depende de nosotros.",prompt:"¿Qué preocupación podrías dejar en pausa por esta noche?"},{word:"Meraki",origin:"Griego moderno",meaning:"Hacer algo poniendo el corazón, el cuidado y una parte de ti en ello.",prompt:"¿En qué detalle pequeño de hoy has puesto ganas o cariño?"},{word:"Kintsugi",origin:"Japonés",meaning:"Oficio de reparar la cerámica rota con barniz de oro, sin esconder las grietas.",prompt:"¿Qué tropiezo reciente te ha servido para aprender algo útil?"},{word:"Komorebi",origin:"Japonés",meaning:"La luz del sol cuando se cuela entre las hojas de los árboles.",prompt:"¿Qué imagen o rincón bonito has visto hoy al pasar?"},{word:"Resiliencia",origin:"Latín",meaning:"La capacidad de encajar un golpe, recuperar el aliento y seguir adelante a tu paso.",prompt:"¿Cómo has tirado hacia delante hoy cuando algo se hacía cuesta arriba?"},{word:"Serendipia",origin:"Castellano",meaning:"Eso bueno que te encuentras por casualidad mientras ibas buscando otra cosa.",prompt:"¿Qué momento no planeado ha merecido la pena hoy?"},{word:"Ubuntu",origin:"Zulú · Xhosa",meaning:"La idea de que somos quienes somos gracias también a quienes nos rodean.",prompt:"¿Quién te ha hecho el día un poco más fácil o agradable hoy?"},{word:"Ikigai",origin:"Japonés",meaning:"Aquello que te da un motivo concreto para levantarte por la mañana.",prompt:"¿Qué plan o proyecto te apetece de verdad hacer pronto?"},{word:"Wabi-sabi",origin:"Japonés",meaning:"Gustar de las cosas sencillas, imperfectas y gastadas por la vida real.",prompt:"¿En qué cosa imperfecta de hoy puedes dejar de exigirte tanto?"},{word:"Apapachar",origin:"Náhuatl",meaning:"Dar abrigo y consuelo de verdad; cuidar con cercanía.",prompt:"¿Qué necesitas hoy para descansar a gusto?"},{word:"Sosiego",origin:"Castellano",meaning:"Ese silencio tranquilo que queda cuando por fin se acaba la prisa del día.",prompt:"¿En qué momento del día has notado más calma hoy?"},{word:"Epifanía",origin:"Griego",meaning:"Caer en la cuenta de golpe de algo que llevabas tiempo viendo sin entender.",prompt:"¿De qué cosa te has dado cuenta hoy?"},{word:"Bonhomía",origin:"Castellano",meaning:"Trato llano, honesto y amable que no necesita aparentar nada.",prompt:"¿Qué gesto sencillo de amabilidad has visto o tenido hoy?"},{word:"Nefelibata",origin:"Castellano",meaning:"Persona que de vez en cuando camina por las nubes y mira el mundo a su manera.",prompt:"¿En qué se te ha ido el santo al cielo hoy?"},{word:"Templanza",origin:"Latín",meaning:"Guardar el equilibrio y no perder los papeles cuando alrededor hay ruido.",prompt:"¿En qué situación de hoy has sabido mantener la calma?"},{word:"Alba",origin:"Latín",meaning:"La primera claridad de la mañana antes de que asome el sol.",prompt:"¿Cómo te gustaría empezar la mañana de mañana?"},{word:"Saudade",origin:"Portugués",meaning:"Echar de menos con cariño a alguien o a una época en la que fuiste feliz.",prompt:"¿Qué buen recuerdo te ha venido hoy a la cabeza?"},{word:"Lagom",origin:"Sueco",meaning:"Ni de más ni de menos: saber cuándo algo es ya suficiente.",prompt:"¿Con qué cosa de hoy puedes decir tranquilo/a «por hoy ya está bien»?"},{word:"Sisu",origin:"Finés",meaning:"Empuje tranquilo para terminar lo que empezaste aunque estés cansado.",prompt:"¿Qué cosa has sacado adelante hoy aunque te diera pereza?"},{word:"Hygge",origin:"Danés",meaning:"Estar a gusto en lo cotidiano: una charla tranquila, una manta, un rato en casa.",prompt:"¿Qué momento sencillo del día te ha sentado mejor?"},{word:"Querencia",origin:"Castellano",meaning:"El sitio o la gente a la que uno siempre tiene ganas de volver.",prompt:"¿Dónde o con quién te sientes más cómodo/a últimamente?"},{word:"Claridad",origin:"Latín",meaning:"Distinguir lo que de verdad importa de lo que solo hace ruido.",prompt:"Si te quedas con una sola cosa de hoy, ¿cuál eliges?"},{word:"Amparo",origin:"Latín",meaning:"Tener un lugar o una persona donde resguardarse cuando el día se tuerce.",prompt:"¿Qué te reconforta cuando tienes un día torcido?"},{word:"Gratitud",origin:"Latín",meaning:"No dar por supuesto lo bueno que tenemos cerca cada día.",prompt:"¿Qué cosa normal de tu rutina agradecerías si mañana faltara?"}],ca=[{category:"Autocompasión",title:"No te hables peor que a un amigo",tip:"Cuando estás cansado o algo sale regular, es fácil machacarse. Prueba a decirte exactamente lo que le dirías a alguien a quien aprecias.",action:"Anota algo que hoy hayas hecho lo mejor que podías.",icon:"heart",ages:["teen","young","adult","senior"],interests:["calm","social"]},{category:"Descanso",title:"Bajar el brillo antes de acostarte",tip:"Dejar el móvil o las pantallas un rato antes de meterte en la cama ayuda a que la cabeza deje de saltar de un tema a otro.",action:"Pon la alarma y deja el teléfono lejos de la almohada.",icon:"moon",ages:["teen","young","adult","senior"],interests:["calm","gaming"]},{category:"Calma",title:"Soltar el aire más despacio",tip:"Cuando notes prisa o nudo en el estómago, toma aire contando 4 y suéltalo despacio contando 6. El cuerpo entiende enseguida el mensaje.",action:"Respira hondo tres veces antes de cerrar el cuaderno.",icon:"leaf",ages:["teen","young","adult","senior"],interests:["calm","nature"]},{category:"Enfoque",title:"La regla de los primeros cinco minutos",tip:"Casi siempre cuesta más ponerse que hacerlo. Ponte solo 5 minutos con eso que estás posponiendo; luego decides si sigues.",action:"Deja escrita una sola tarea concreta para mañana.",icon:"study",ages:["teen","young","adult"],interests:["study","projects"]},{category:"Escritura",title:"Aquí nadie te va a poner nota",tip:"No hace falta escribir bonito ni llenar la página. Tres líneas sinceras sobre lo que te ha pasado hoy bastan.",action:"Escribe lo primero que te salga sin borrar.",icon:"pen",ages:["teen","young","adult","senior"],interests:["reading"]},{category:"Hábitos",title:"Un día suelto no rompe nada",tip:"Si ayer no pudiste cumplir un hábito, no pasa nada. Lo que cuenta es retomarlo hoy con naturalidad y sin culpa.",action:"Empieza por el hábito más fácil de tu lista.",icon:"flame",ages:["teen","young","adult","senior"],interests:["projects","sport"]},{category:"Bienestar",title:"A veces el cansancio es sed",tip:"Gran parte del embotamiento de media tarde viene de llevar horas sin beber agua mientras estudias o trabajas.",action:"Ten un vaso o botella a mano mañana por la mañana.",icon:"drop",ages:["teen","young","adult","senior"],interests:["sport","study","cooking"]},{category:"Calma",title:"Sacar el ruido de la cabeza al papel",tip:"Cuando una preocupación da vueltas en bucle, escribirla en una frase la vuelve manejable y libera espacio mental.",action:"Apunta qué te preocupa hoy y qué parte sí está en tu mano.",icon:"book",ages:["teen","young","adult","senior"],interests:["reading","calm"]},{category:"Movimiento",title:"Caminar también ordena las ideas",tip:"Quince minutos andando sin mirar el teléfono despejan más la mente que media hora intentando concentrarse a la fuerza.",action:"Sal a dar una vuelta corta mañana cuando te satures.",icon:"run",ages:["teen","young","adult","senior"],interests:["sport","nature"]},{category:"Estudio y memoria",title:"Lo que estudias se fija mientras duermes",tip:"Quitarle horas al sueño para estudiar a última hora suele salir caro: el cerebro consolida lo aprendido durante el descanso.",action:"Prioriza dormir bien hoy para rendir mejor mañana.",icon:"study",ages:["teen","young"],interests:["study"]},{category:"Equilibrio",title:"Cerrar la jornada de verdad",tip:"Tener un pequeño ritual al terminar tus obligaciones —recoger la mesa, ducharte o salir a caminar— separa el deber del descanso.",action:"Elige a qué hora vas a desconectar mañana.",icon:"sun",ages:["young","adult"],interests:["projects","calm"]},{category:"Perspectiva",title:"Cuidar el contacto con los tuyos",tip:"A veces un mensaje corto o una llamada de cinco minutos a alguien que quieres cambia por completo el tono de la semana.",action:"Piensa en alguien con quien te apetezca hablar mañana.",icon:"heart",ages:["teen","young","adult","senior"],interests:["social"]}],ua=["¿Qué rato de hoy te ha dejado buen sabor de boca, aunque haya sido breve?","¿Qué te ha dado más pereza o respeto hoy y cómo lo has llevado?","¿Qué conversación, canción o momento tranquilo te ha acompañado hoy?","¿Qué te gustaría quitarte de la cabeza antes de apagar la luz?","Si un amigo hubiera tenido exactamente tu día de hoy, ¿qué le dirías?","¿En qué momento del día te has sentido más cómodo/a siendo tú?","¿Qué detalle pequeño de hoy no querrías que se te olvidara dentro de un año?","¿Cómo notas el cuerpo esta noche: cansado, inquieto, ligero, tranquilo?","¿Qué cosa sencilla ha salido mejor de lo que esperabas esta mañana?","¿Qué necesitas mañana para que sea un día llevadero y amable?"],Oa=[{number:"024",tel:"tel:024",name:"Línea 024 · Atención a la conducta suicida",detail:"Ministerio de Sanidad (España) · Gratuita, confidencial, anónima y abierta las 24 horas.",primary:!0},{number:"717 003 717",tel:"tel:717003717",name:"Teléfono de la Esperanza",detail:"Escucha y apoyo emocional en momentos de crisis · 24 horas todos los días.",primary:!0},{number:"900 20 20 10",tel:"tel:900202010",name:"Fundación ANAR (Menores y jóvenes)",detail:"Atención gratuita, confidencial y 24h para jóvenes y adolescentes. No deja rastro en la factura.",primary:!1,youth:!0},{number:"112",tel:"tel:112",name:"Emergencias 112",detail:"Atención inmediata de urgencia sanitaria o seguridad · 24 horas.",primary:!1}];function q(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function ie(e){return new Date(`${e}T12:00:00`)}function j(e,a){const t=ie(e);return t.setDate(t.getDate()+a),q(t)}function he(e,a){return Math.round((Date.UTC(...a.split("-").map((t,o)=>+t-(o===1?1:0)))-Date.UTC(...e.split("-").map((t,o)=>+t-(o===1?1:0))))/864e5)}function ye(e,a){const t=[e,...a.map(o=>o.date)].sort()[0];return he(t,e)+1}function L(e,a={weekday:"long",day:"numeric",month:"long",year:"numeric"}){return ie(e).toLocaleDateString("es-ES",a)}function le(e){const a=ie(e).getDay();return j(e,-((a+6)%7))}function wa(e){const a=ie(e);return[q(new Date(a.getFullYear(),a.getMonth(),1)),q(new Date(a.getFullYear(),a.getMonth()+1,0))]}function X(e,a){const t=ie(e);return q(new Date(t.getFullYear(),t.getMonth()+a,1))}function za(e){const[a,t]=wa(e),o=j(a,-((ie(a).getDay()+6)%7)),s=Math.ceil((he(o,t)+1)/7)*7;return Array.from({length:s},(n,i)=>({date:j(o,i),inMonth:j(o,i).slice(0,7)===e.slice(0,7)}))}const v=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e);function B(e){const a=e.filter(t=>Number.isFinite(t));return a.length?a.reduce((t,o)=>t+o,0)/a.length:0}function J(e,a,t){return e.filter(o=>o.date>=a&&o.date<=t).sort((o,s)=>o.date.localeCompare(s.date))}function Ia(e){let a=0,t=0,o;for(const s of[...new Set(e.map(n=>n.date))].sort())t=o&&he(o,s)===1?t+1:1,a=Math.max(a,t),o=s;return a}function Qe(e,a=q()){const t=new Set(e.map(n=>n.date));let o=t.has(a)?a:j(a,-1),s=0;for(;t.has(o);)s++,o=j(o,-1);return s}function Y(e){const a=[e.bestOfDay,e.differentToday,e.generalDay,e.tomorrow,...e.gratitude||[]].join(" ").trim();return a?a.split(/\s+/).length:0}function Ra(e){return e.reduce((a,t)=>a+Y(t),0)}function Ua(e,a){const t=[...new Set(e.filter(m=>m.habits?.[a]).map(m=>m.date))].sort();if(!t.length)return 0;let o=0,s=0,n;for(const m of t)s=n&&he(n,m)===1?s+1:1,o=Math.max(o,s),n=m;const i=t[t.length-1],r=q(),p=he(i,r)<=1;return o}function pa(e){const a=new Map;for(const t of e)for(const o of t.tags||[])a.set(o,(a.get(o)||0)+1);return[...a.entries()].sort((t,o)=>o[1]-t[1])}function se(e){const a=[...e].sort((o,s)=>o.date.localeCompare(s.date)),t=o=>a.reduce((s,n)=>!s||n[o]>s[o]?n:s,null);return{count:e.length,mood:B(e.map(o=>o.mood)),energy:B(e.map(o=>o.energy)),stress:B(e.map(o=>o.stress)),sleep:B(e.map(o=>o.sleepHours)),study:B(e.map(o=>o.studyHours)),totalSleep:e.reduce((o,s)=>o+s.sleepHours,0),totalStudy:e.reduce((o,s)=>o+s.studyHours,0),words:Ra(e),best:t("mood"),worst:a.reduce((o,s)=>!o||s.mood<o.mood?s:o,null),mostStudy:t("studyHours"),mostSleep:t("sleepHours"),maxStreak:Ia(e),moods:[1,2,3,4,5].map(o=>e.filter(s=>s.mood===o).length),counters:Object.fromEntries(ne.map(o=>[o.key,{total:e.reduce((s,n)=>s+(n.counters?.[o.key]||0),0),average:B(e.map(s=>s.counters?.[o.key]))}]))}}function Qa(e){return e<6?"Has dormido poco.":e<7?"Una cantidad algo baja.":e<=9?"Un descanso razonable.":"Has dormido bastante."}function Wa(e){return e===0?"Hoy no has dedicado tiempo al estudio.":e<1?"Has hecho un poco de estudio.":e<3?"Has tenido una sesión de estudio considerable.":e<5?"Has dedicado bastante tiempo.":"Ha sido un día de estudio intenso."}function Ve(e,a){switch(e){case"water":return a===0?"Sin registrar agua hoy.":a<4?"Poca agua registrada.":a<8?"Una hidratación razonable.":"Buen nivel de hidratación.";case"exercise":return a===0?"Sin ejercicio registrado hoy.":a<20?"Un poco de movimiento.":a<60?"Una sesión de ejercicio notable.":"Un día muy activo.";case"reading":return a===0?"Sin lectura registrada hoy.":a<20?"Unas páginas para hoy.":a<60?"Una buena sesión de lectura.":"Un día de mucha lectura.";default:return a===0?"Sin pausa consciente registrada.":a<10?"Un momento de pausa.":a<30?"Una práctica considerable.":"Una práctica muy constante hoy."}}const _a=["","Hoy ha sido un día difícil.","Hoy ha sido un día flojo.","Hoy ha sido un día normal.","Hoy ha sido un día bueno.","Hoy ha sido un día genial."];function Va(e){const a=[_a[e.mood],`Has dormido ${v(e.sleepHours)} horas y has dedicado ${v(e.studyHours)} horas al estudio.`,Qa(e.sleepHours),Wa(e.studyHours)];e.energy&&a.push(`Tu energía se ha sentido ${["","muy baja","baja","normal","alta","muy alta"][e.energy].toLowerCase()}.`),e.stress&&a.push(`El estrés ha sido ${["","muy bajo","bajo","normal","alto","muy alto"][e.stress].toLowerCase()}.`);const t=Object.values(e.habits||{}).filter(Boolean).length;t&&a.push(`Has cumplido ${t} de tus hábitos de hoy.`);const o=e.counters?.water||0;return o>=6&&a.push(`Además, has bebido ${o} vasos de agua.`),a.join(" ")}function Ja(e,a=!1){if(!e.count)return"Aún no hay entradas en este período. Cada día que escribas irá dando forma a tu historia.";const t=a?`Durante este mes has registrado ${e.count} ${e.count===1?"día":"días"}. Tu valoración media ha sido de ${v(e.mood)}/5. Has estudiado un total de ${v(e.totalStudy)} horas y tu media de sueño ha sido de ${v(e.sleep)} horas.`:`Esta semana has registrado ${e.count} ${e.count===1?"día":"días"}. Tu estado medio ha sido ${["","difícil","flojo","normal","bueno","genial"][Math.round(e.mood)]}. Has dormido una media de ${v(e.sleep)} horas y estudiado ${v(e.study)} horas por día registrado.`,o=[];return Number.isFinite(e.energy)&&o.push(`Tu energía media ha sido ${v(e.energy)}/5`),Number.isFinite(e.stress)&&o.push(`el estrés medio ${v(e.stress)}/5`),e.words&&o.push(`has escrito ${v(e.words)} palabras`),o.length?`${t} ${o.join(", ")}.`:t}function Ya(e,a=q()){const t=J(e,j(a,-6),a),o=J(e,j(a,-13),j(a,-7)),s=[];if(t.length>=3&&o.length>=3){const c=se(t),g=se(o);c.sleep<g.sleep-.3&&s.push("Tu cantidad media de sueño ha disminuido respecto a los 7 días anteriores."),c.sleep>g.sleep+.3&&s.push("En tus registros, has dormido más que en los 7 días anteriores."),c.study>g.study+.3&&s.push("Has aumentado tus horas medias de estudio respecto a los 7 días anteriores."),c.study<g.study-.3&&s.push("Tu tiempo medio de estudio ha disminuido respecto a los 7 días anteriores."),c.mood>g.mood+.2&&s.push("Tu valoración diaria ha mejorado recientemente."),c.mood<g.mood-.2&&s.push("Tu valoración diaria ha bajado respecto a los 7 días anteriores."),Number.isFinite(c.energy)&&Number.isFinite(g.energy)&&(c.energy>g.energy+.2&&s.push("Se observa una tendencia al alza en tu energía."),c.energy<g.energy-.2&&s.push("Tu energía media ha bajado respecto a la semana anterior.")),Number.isFinite(c.stress)&&Number.isFinite(g.stress)&&c.stress>g.stress+.2&&s.push("Tu estrés medio ha subido respecto a la semana anterior. Quizá convenga cuidar tus ratos de pausa."),s.length||s.push("Tus medias se han mantenido bastante estables respecto a los 7 días anteriores.")}const n=J(e,j(a,-29),a),i=n.filter(c=>c.sleepHours>7),r=n.filter(c=>c.sleepHours<=7);i.length>=3&&r.length>=3&&B(i.map(c=>c.mood))>B(r.map(c=>c.mood))+.3&&s.push("En tus registros de los últimos 30 días, dormir más de 7 horas parece coincidir con una valoración más alta. Es una relación entre registros, no una causa demostrada.");const p=n.filter(c=>(c.counters?.exercise||0)>=20),m=n.filter(c=>(c.counters?.exercise||0)<20);return p.length>=3&&m.length>=3&&B(p.map(c=>c.mood))>B(m.map(c=>c.mood))+.3&&s.push("En tus registros, los días con 20 minutos o más de ejercicio suelen tener una valoración algo más alta. Parece coincidir, sin más."),s}const Je="diario.entries.v1",Ye="diario.habits.v1",Ze="diario.setup.v1",F={completed:!1,name:"",age:null,ageGroup:"young",interests:[],ritual:"night",tone:"warm",savedQuotes:[],purpose:"calm",motto:"Un día a la vez.",theme:"paper",sleepGoal:7.5,studyGoal:2,waterGoal:8,showDailyWord:!0,showDailyTip:!0,crisisAlertsEnabled:!0,trustedContactName:"",trustedContactPhone:"",sidebarCollapsed:!1,updatedAt:null};function Ne(e,a="young"){const t=Number(e);return!Number.isFinite(t)||t<=0?a:t<=18?"teen":t<=26?"young":t<=49?"adult":"senior"}function de(e,a){if(typeof e!="string")throw new Error(`${a} debe ser texto.`);if(e.length>2e4)throw new Error(`${a} debe tener como máximo 20.000 caracteres.`);return e}function Za(e,a){const t=ne.find(s=>s.key===a);if(e==null||e==="")return 0;const o=Number(e);if(!Number.isFinite(o)||o<t.min||o>t.max)throw new Error(`${t.label} debe estar entre ${t.min} y ${t.max}.`);return Math.round(o*10)/10}function ma(e){if(e==null||e==="")return null;const a=Number(e);if(!Number.isInteger(a)||a<1||a>5)throw new Error("Las escalas van de 1 a 5.");return a}function Ge(e){if(!e||typeof e!="object"||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(new Date(e.date+"T12:00:00").getTime())||q(new Date(e.date+"T12:00:00"))!==e.date)throw new Error("Hay una fecha no válida.");if(e.date>q())throw new Error("No se pueden registrar días futuros.");if(!Number.isInteger(e.mood)||e.mood<1||e.mood>5)throw new Error("Selecciona cómo te ha ido el día.");for(const i of["sleepHours","studyHours"]){const r=e[i];if(typeof r!="number"||!Number.isFinite(r)||r<0||r>24)throw new Error("Las horas deben estar entre 0 y 24.")}const a=Object.fromEntries(Pa.map(i=>[i,de(e[i]??"",i)]));if(!a.generalDay.trim())throw new Error("Escribe cómo ha ido tu día en general.");const t=de(e.capsule??"","La cápsula del día").slice(0,300);if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(i=>typeof i!="string"||i.length>2e4))throw new Error("El agradecimiento debe tener tres campos de texto.");if(e.goals!==void 0&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(i=>typeof i!="string"||i.length>500)))throw new Error("La lista de objetivos no es válida.");const o=Array.isArray(e.tags)?e.tags:[];if(o.length>20)throw new Error("Puedes elegir como máximo 20 etiquetas.");for(const i of o)if(typeof i!="string"||!i.trim()||i.length>40)throw new Error("Hay una etiqueta no válida.");const s={};for(const i of ne)s[i.key]=Za(e.counters?.[i.key],i.key);const n={};if(e.habits!==void 0&&(typeof e.habits!="object"||e.habits===null||Array.isArray(e.habits)))throw new Error("Los hábitos no son válidos.");for(const[i,r]of Object.entries(e.habits||{}))typeof i=="string"&&i.length<=60&&(n[i]=r===!0);return{id:typeof e.id=="string"?e.id:crypto.randomUUID(),date:e.date,mood:e.mood,sleepHours:e.sleepHours,studyHours:e.studyHours,energy:ma(e.energy),stress:ma(e.stress),...a,capsule:t,gratitude:e.gratitude.map(i=>de(i??"","El agradecimiento")),goals:(e.goals||[]).map(i=>de(i,"Un objetivo")),tags:[...new Set(o.map(i=>i.trim()))],counters:s,habits:n,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function Ke(e){const a=e.map(Ge).sort((t,o)=>t.date.localeCompare(o.date));return a.map(t=>({...t,dayNumber:ye(t.date,a)}))}function Pe(){const e=localStorage.getItem(Je);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se han podido leer tus entradas.");return Ke(a)}function Xe(e){const a=Ke(e);return localStorage.setItem(Je,JSON.stringify(a)),a}function Ka(e){const a=Ge(e);a.updatedAt=new Date().toISOString();const t=Pe();return Xe([...t.filter(o=>o.date!==a.date),a])}function Xa(e){return Xe(Pe().filter(a=>a.date!==e))}function et(){localStorage.removeItem(Je),localStorage.removeItem(Ye),localStorage.removeItem(Ze)}function re(e){if(!e||typeof e!="object")throw new Error("Hábito no válido.");const a=de(e.name??"","El nombre del hábito").trim();if(!a)throw new Error("El hábito necesita un nombre.");if(a.length>40)throw new Error("El nombre del hábito debe tener 40 caracteres o menos.");return{id:typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),name:a,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString()}}function fe(){const e=localStorage.getItem(Ye);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se han podido leer tus hábitos.");return a.map(re)}function ea(e){const a=e.map(re);return localStorage.setItem(Ye,JSON.stringify(a)),a}function Sa(e){const a=re(e),t=fe();return ea([...t.filter(o=>o.id!==a.id),a])}function at(e){return ea(fe().filter(a=>a.id!==e))}function Fe(e={}){const a=e&&typeof e=="object"?e:{},t=new Set(z.map(h=>h.id)),o=new Set(Fa.map(h=>h.id)),s=new Set(pe.map(h=>h.id)),n=new Set(He.map(h=>h.id)),i=new Set(me.map(h=>h.id)),r=new Set(ge.map(h=>h.id)),p=(h,k,R,P)=>{const A=Number(h);return Number.isFinite(A)?Math.min(R,Math.max(k,Math.round(A*10)/10)):P};let m=null;if(a.age!==void 0&&a.age!==null&&a.age!==""){const h=Math.round(Number(a.age));Number.isFinite(h)&&h>=8&&h<=115&&(m=h)}const c=s.has(a.ageGroup)?a.ageGroup:F.ageGroup,g=m!==null?Ne(m,c):c,w=Array.isArray(a.interests)?[...new Set(a.interests.filter(h=>n.has(h)))]:[],f=Array.isArray(a.savedQuotes)?[...new Set(a.savedQuotes.filter(h=>typeof h=="string"&&h.trim().length>0).map(h=>h.trim().slice(0,260)))].slice(0,40):[];return{completed:!!a.completed,name:String(a.name??"").trim().slice(0,50),age:m,ageGroup:g,interests:w,ritual:i.has(a.ritual)?a.ritual:F.ritual,tone:r.has(a.tone)?a.tone:F.tone,savedQuotes:f,purpose:o.has(a.purpose)?a.purpose:F.purpose,motto:String(a.motto??F.motto).trim().slice(0,140)||F.motto,theme:t.has(a.theme)?a.theme:F.theme,sleepGoal:p(a.sleepGoal,4,14,F.sleepGoal),studyGoal:p(a.studyGoal,0,16,F.studyGoal),waterGoal:p(a.waterGoal,1,25,F.waterGoal),showDailyWord:a.showDailyWord===void 0?!0:!!a.showDailyWord,showDailyTip:a.showDailyTip===void 0?!0:!!a.showDailyTip,crisisAlertsEnabled:a.crisisAlertsEnabled===void 0?!0:!!a.crisisAlertsEnabled,trustedContactName:String(a.trustedContactName??"").trim().slice(0,60),trustedContactPhone:String(a.trustedContactPhone??"").trim().slice(0,30),sidebarCollapsed:!!a.sidebarCollapsed,updatedAt:typeof a.updatedAt=="string"?a.updatedAt:new Date().toISOString()}}function Be(){const e=localStorage.getItem(Ze);if(!e)return{...F};try{const a=JSON.parse(e);return Fe(a)}catch{return{...F}}}function Q(e={}){const a=Be(),t=Fe({...a,...e,updatedAt:new Date().toISOString()});return localStorage.setItem(Ze,JSON.stringify(t)),t}function tt(e,a=fe(),t=Be()){return JSON.stringify({app:"diario",version:1,exportedAt:new Date().toISOString(),entries:Ke(e),habits:a.map(re),setup:Fe(t)},null,2)}function ot(e){let a;try{a=JSON.parse(e)}catch{throw new Error("El archivo no es una copia JSON válida.")}if(!a||typeof a!="object"||a.version!==1||!Array.isArray(a.entries))throw new Error("Selecciona una copia JSON de Diario (versión 1).");const t=a.entries.map(Ge);if(new Set(t.map(n=>n.date)).size!==t.length)throw new Error("La copia contiene fechas duplicadas.");const o=Array.isArray(a.habits)?a.habits.map(re):[],s=a.setup?Fe(a.setup):null;return{entries:t,habits:o,setup:s}}function st(e){const a=Pe(),t=new Map(a.map(s=>[s.date,s]));for(const s of e.entries)t.set(s.date,Ge(s));const o=new Map(fe().map(s=>[s.id,s]));for(const s of e.habits)o.set(s.id,re(s));return ea([...o.values()]),e.setup&&Q(e.setup),Xe([...t.values()])}function nt(e=""){return String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim()}function Z(e="paper",a={}){const t=z.find(m=>m.id===e)||z[0],{bg:o,page:s,accent:n,ink:i}=t.favicon||{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"},r=String(a?.name||"").trim().slice(0,1).toUpperCase(),p=r?`<text x="36" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="18" fill="${i}">${r.replace(/[<>&"']/g,"")}</text>`:`<path d="M29 29h14M29 36h10" stroke="${i}" stroke-width="2.6" stroke-linecap="round"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="16" fill="${o}"/>
    <rect x="14" y="11" width="38" height="42" rx="5" fill="${s}"/>
    <rect x="14" y="11" width="7" height="42" rx="2" fill="${n}"/>
    <path d="M41 11v12l-4-3-4 3V11" fill="${n}"/>
    ${p}
    <circle cx="46" cy="46" r="3" fill="${n}"/>
  </svg>`.replace(/\s+/g," ").trim()}function it(e="paper",a={}){const t=Z(e,a);return`data:image/svg+xml;utf8,${encodeURIComponent(t)}`}const rt=[{label:"suicidio",regex:/\b(suicid(io|arme|arse|a)|conducta suicida)\b/},{label:"quitarme la vida",regex:/\b(quitar(me|se) la vida|acabar con mi vida|terminar con mi vida)\b/},{label:"no quiero vivir",regex:/\b(no quiero (seguir viviendo|vivir)|no merece la pena vivir|no vale la pena vivir)\b/},{label:"quiero morir",regex:/\b(quiero morir(me)?|me quiero morir|deseo morir(me)?|prefiero estar muert[oa]|mejor muert[oa])\b/},{label:"autolesión",regex:/\b(autolesion(arme|arse|es)?|hacerme dano|hacerme sangre|cortarme las venas|cortarme el brazo|cortarme la piel)\b/},{label:"acabar con todo",regex:/\b(acabar con todo para siempre|desaparecer para siempre|ojala no despertar|no despertar manana|matarme|tirarme (por la ventana|al tren|desde un puente)|sobredosis)\b/}];function lt(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"){const a=Array.isArray(e.gratitude)?e.gratitude.join(" "):"",t=Array.isArray(e.goals)?e.goals.join(" "):"",o=Array.isArray(e.tags)?e.tags.join(" "):"";return[e.bestOfDay,e.differentToday,e.generalDay,e.wordOfDay,e.capsule,e.tomorrow,a,t,o].filter(Boolean).join(" ")}return""}function N(e={}){const a=e?.age?Ne(e.age,e.ageGroup||"young"):e?.ageGroup||"young",t=pe.find(k=>k.id===a)||pe[1],o=Array.isArray(e?.interests)?e.interests:[],s=He.filter(k=>o.includes(k.id)),n=me.find(k=>k.id===e?.ritual)||me[0],i=ge.find(k=>k.id===e?.tone)||ge[0];let r=t.focusLabel,p=t.focusQuestion;o.includes("study")?(r="Estudio",p="Tiempo de estudio o repaso"):o.includes("projects")&&t.id!=="teen"&&(r="Proyectos y enfoque",p="Tiempo dedicado a tus proyectos");const m=[...new Set([...s.map(k=>k.habit),...t.habits,...Ba])].slice(0,8),c=[...new Set([...s.map(k=>k.tag),...t.tags,...Ga])].slice(0,12),g=Number.isFinite(Number(e?.age))&&Number(e.age)>0&&Number(e.age)<18;let w="Nota al margen (canción, lectura, lugar...)",f="Una canción, un libro, una película o un detalle que quieras recordar...";o.includes("music")?(w="Canción, película o escena del día",f="¿Qué has escuchado o visto hoy?"):o.includes("reading")?(w="Lectura o cita del día",f="Un libro que estés leyendo o una frase que te haya gustado..."):o.includes("gaming")&&(w="Partida, serie o tema del día",f="A qué has jugado hoy o qué serie estás viendo...");const h=["water"];return(o.includes("sport")||o.includes("nature")||!o.length)&&h.push("exercise"),(o.includes("reading")||o.includes("study")||!o.length)&&h.push("reading"),(o.includes("calm")||!o.length)&&h.push("mindfulness"),{group:t,age:e?.age||null,isMinor:g,interests:s,ritual:n,tone:i,focusLabel:r,focusQuestion:p,capsuleLabel:w,capsulePlaceholder:f,activeCounterKeys:h,sleepRecommended:t.sleepRecommended,studyRecommended:t.studyRecommended,suggestedHabits:m,tags:c,placeholders:t.placeholders}}function aa(e){const a=lt(e),t=nt(a),o=[];if(t)for(const s of rt)s.regex.test(t)&&o.push(s.label);return o.length>0?{triggered:!0,level:"high",matchedTerms:o,reason:"Si estás pasando por un momento muy difícil, no tienes por qué llevarlo a solas. El 024 es gratuito, confidencial y atiende las 24 horas."}:{triggered:!1,level:"none",matchedTerms:[],reason:""}}function be(e=q()){const a=String(e||"").replace(/[^0-9]/g,"");let t=0;for(let o=0;o<a.length;o++)t=t*31+a.charCodeAt(o)>>>0;return t||1}function dt(e=q(),a=0){const t=(be(e)+Math.abs(a))%da.length;return da[t]}function ct(e=q(),a=0,t={}){const s=N(t).group.id,n=new Set(t?.interests||[]),i=ca.filter(m=>{const c=!m.ageGroups||m.ageGroups.includes(s),g=!m.interests||m.interests.some(w=>n.has(w));return c||g}),r=i.length?i:ca,p=(be(e)*7+Math.abs(a))%r.length;return r[p]}function ut(e=q(),a=0,t={}){const s=N(t).group.id,n=t?.tone||"warm",i=new Set(t?.interests||[]),r=Array.isArray(t?.savedQuotes)?t.savedQuotes:[];if(r.length>0&&a%3===0){const f=(be(e)+Math.abs(a))%r.length;return{text:r[f],author:t?.name?`Guardada por ${t.name}`:"De tu colección",isCustom:!0}}const p=la.map(f=>{let h=0;return f.tones?.includes(n)&&(h+=3),f.ageGroups?.includes(s)&&(h+=2),f.interests?.some(k=>i.has(k))&&(h+=4),{q:f,score:h}}),m=Math.max(...p.map(f=>f.score),0),c=p.filter(f=>f.score>=Math.max(2,m-2)).map(f=>f.q),g=c.length>=4?c:la,w=(be(e)*5+Math.abs(a))%g.length;return g[w]}function We(e=q(),a=0){const t=(be(e)*13+Math.abs(a))%ua.length;return ua[t]}function pt(e={},a={}){const t=[],o=N(a),s=Number(a?.sleepGoal)||o.sleepRecommended||7.5,n=Number(e?.sleepHours),i=Number(e?.stress),r=Number(e?.mood);return Number.isFinite(n)&&n>0&&n<s-1.5&&t.push({icon:"moon",title:"Descanso corto",text:`Has dormido ${n} h (tu meta es ${s} h). Intenta bajar el ritmo esta tarde.`}),Number.isFinite(i)&&i>=4&&t.push({icon:"wind",title:"Día cargado",text:"Con este nivel de tensión, prioriza una sola cosa hoy y deja el resto para mañana."}),Number.isFinite(r)&&r===1&&t.push({icon:"heart",title:"Día cuesta arriba",text:"En los días pesados basta con descansar y cubrir lo básico."}),t.slice(0,2)}function mt(e=[],a={}){const t=N(a),o=Number(a?.sleepGoal)||t.sleepRecommended||7.5,s=Number(a?.studyGoal)??t.studyRecommended??2,n=Number(a?.waterGoal)||8,i=e.length;if(!i)return{total:0,sleepGoal:o,studyGoal:s,waterGoal:n,sleepMet:0,studyMet:0,waterMet:0,sleepPct:0,studyPct:0,waterPct:0,moodWhenSleepMet:null,moodWhenSleepMissed:null};const r=e.filter(g=>g.sleepHours>=o),p=e.filter(g=>g.sleepHours<o),m=e.filter(g=>g.studyHours>=s),c=e.filter(g=>(g.counters?.water||0)>=n);return{total:i,sleepGoal:o,studyGoal:s,waterGoal:n,sleepMet:r.length,studyMet:m.length,waterMet:c.length,sleepPct:Math.round(r.length/i*100),studyPct:Math.round(m.length/i*100),waterPct:Math.round(c.length/i*100),moodWhenSleepMet:r.length?v(B(r.map(g=>g.mood))):null,moodWhenSleepMissed:p.length?v(B(p.map(g=>g.mood))):null}}function gt(e="",a=new Date().getHours()){const t=String(e||"").trim(),o=t?`, ${t}`:"";return a>=5&&a<13?`Buenos días${o}`:a>=13&&a<20?`Buenas tardes${o}`:`Buenas noches${o}`}const ht={pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',week:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 9h18M8 14h8"/>',month:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9"/>',history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-5 3-7 1 2 2 3 2 3 0-3-1-4 0-6Z"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',study:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',check:'<path d="M20 6 9 17l-5-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',download:'<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3"/>',upload:'<path d="M12 15V3m0 0-4 4m4-4 4 4M4 17v3h16v-3"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 5.1-6C9.5 14.5 12 13 13 12"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',bolt:'<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',storm:'<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/><path d="m13 11-3 5h4l-2 5"/>',drop:'<path d="M12 2.7 6.4 8.3a8 8 0 1 0 11.3 0Z"/>',run:'<circle cx="15" cy="4" r="2"/><path d="m10.5 9.5-3 3L5 11m5.5-1.5 3.5 2 3 2M9 14l-2 6m5-4 3 5"/>',book:'<path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',stamp:'<path d="M5 21h14M6 17h12v2H6zM9 17v-3a3 3 0 1 1 6 0v3"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',refresh:'<path d="M21 12a9 9 0 0 0-15.4-6.4L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15.4 6.4L21 16"/><path d="M21 21v-5h-5"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5-4.5-8.6-10-8.6Z"/>',spark:'<path d="m12 3 1.9 5.8L20 10.8l-6.1 1.9L12 18.5l-1.9-5.8L4 10.8l6.1-2Z"/>',quote:'<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/>',expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>'},l=e=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ht[e]||""}</svg>`,d=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]);function bt(e={},a=0){const t=N(e),o=e.name?d(e.name):"Personalizar perfil",s=e.age?`${e.age} años`:t.group.label;return`<button type="button" class="ex-libris-card" data-action="open-setup-wizard" title="Editar perfil y preferencias">
    <span class="ex-libris-icon">${Z(e.theme||"paper",e)}</span>
    <div class="ex-libris-meta">
      <strong>${o}</strong>
      <small>${d(s)} · ${a} ${a===1?"día":"días"}</small>
    </div>
  </button>`}function ga(e,a,t,o,s,n,i){return`<div class="scale-field">
    <p class="field-title">${l(o)} ${s}</p>
    <p class="field-caption">${n}</p>
    <div class="level-scale" role="radiogroup" aria-label="${s}">
      ${[1,2,3,4,5].map(r=>`<label class="level-option">
        <input type="radio" name="${e}" value="${r}" ${t===r?"checked":""}>
        <span class="level-num">${r}</span>
        <span class="level-text">${a[r]}</span>
      </label>`).join("")}
    </div>
    <small id="${e}-hint">${t?a[t]+".":i}</small>
  </div>`}function vt(e=[],a=[]){const t=new Set(e);return`<div class="tag-picker">
    ${[...new Set([...a,...e])].map(s=>`<label class="tag-chip">
      <input type="checkbox" name="tags" value="${d(s)}" ${t.has(s)?"checked":""}>
      <span>${d(s)}</span>
    </label>`).join("")}
    <label class="tag-chip ghost">
      <span>+ Otra:</span>
      <input type="text" name="tagCustom" id="tagCustom" maxlength="24" placeholder="Escribe y pulsa Enter" aria-label="Añadir etiqueta personalizada">
    </label>
  </div>`}function yt(e={},a=[],t={}){const o=N(t),s=new Set(o.activeCounterKeys||["water"]),n=a.filter(r=>s.has(r.key)||(Number(e?.[r.key])||0)>0);return`<div class="counters-grid">${(n.length?n:a).map(r=>{const p=Number(e?.[r.key])||0,c=r.key==="water"?t.waterGoal||8:0,g=c?Math.min(100,Math.round(p/c*100)):0;return`<div class="counter-row" data-counter="${r.key}">
      <div>
        <p class="field-title">${l(r.icon)} ${r.label} ${c?`<small class="counter-goal-pill ${p>=c?"met":""}">Meta: ${p}/${c}</small>`:""}</p>
        <p class="field-caption" id="hint-${r.key}">${Ve(r.key,p)}</p>
        ${c?`<div class="counter-progress"><i style="width:${g}%"></i></div>`:""}
      </div>
      <div class="stepper">
        <button type="button" class="icon-button" data-action="counter-minus" data-key="${r.key}" data-step="${r.step}" aria-label="Restar ${r.label}">${l("minus")}</button>
        <div class="stepper-value">
          <input type="number" name="counter_${r.key}" min="0" max="${r.max}" step="${r.step}" value="${p}" aria-label="${r.label}">
          <span>${r.unit}</span>
        </div>
        <button type="button" class="icon-button" data-action="counter-plus" data-key="${r.key}" data-step="${r.step}" aria-label="Sumar ${r.label}">${l("plus")}</button>
      </div>
    </div>`}).join("")}</div>`}function ft(e,a){return`<div class="habits-list">${e.map((t,o)=>{const s=!!a?.habits?.[t.id];return`<div class="habit-item ${s?"is-done":""}" style="--habit-i:${o}">
      <label class="habit-check">
        <input type="checkbox" name="habit_${t.id}" data-habit="${t.id}" ${s?"checked":""}>
        <span class="habit-box" aria-hidden="true">
          <svg class="habit-check-svg" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.8 11.8 12.8 4.8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <span class="habit-name">${d(t.name)}</span>
      </label>
      <span class="habit-meta" data-habit-id="${t.id}"></span>
      <button type="button" class="icon-button ghost habit-del" data-action="delete-habit" data-habit="${t.id}" data-name="${d(t.name)}" aria-label="Eliminar hábito ${d(t.name)}">${l("close")}</button>
    </div>`}).join("")}</div>`}function $t(e,a,{mini:t=!1,selected:o=q()}={}){const s=new Map(a.map(r=>[r.date,r])),n=q(),i=za(e).map(r=>{const p=s.get(r.date),m=p?C[p.mood-1]:null,c=r.date>n,g=["calendar-day",!r.inMonth&&"outside",r.date===n&&"today",r.date===o&&"selected",p&&"recorded"].filter(Boolean).join(" "),w=`${L(r.date)}${m?`, ${m.label}`:", sin entrada"}`;return`<button type="button" class="${g}" data-action="open-day" data-date="${r.date}" ${c?"disabled":""} aria-label="${w}" style="${m?`--mood:${m.color}`:""}">
      <span>${r.day}</span>${m?'<i aria-hidden="true"></i>':""}
    </button>`}).join("");return`<div class="calendar ${t?"mini":""}">
    <div class="calendar-heading">
      <button type="button" class="icon-button ghost" data-action="month-prev" data-mini="${t?"1":"0"}" aria-label="Mes anterior">${l("left")}</button>
      <strong>${L(e,{month:"long",year:"numeric"})}</strong>
      <button type="button" class="icon-button ghost" data-action="month-next" data-mini="${t?"1":"0"}" aria-label="Mes siguiente">${l("right")}</button>
    </div>
    <div class="calendar-grid">
      ${Na.map(r=>`<span class="weekday">${r}</span>`).join("")}
      ${i}
    </div>
  </div>`}function wt(e,a,t,o={}){const s=new Map(e.map(y=>[y.date,y])),n=680,i=230,r=36,p=26,m=n-r*2,c=i-p*2,g=y=>r+(t===1?m/2:y*m/(t-1)),w=y=>p+(5-y)*c/4,f=y=>p+c-Math.min(12,Math.max(0,y||0))/12*c,h=[],k=[],R=Math.max(6,Math.min(18,Math.floor(m/t)-6));for(let y=0;y<t;y++){const H=j(a,y),U=s.get(H);if(U){h.push({x:g(y),y:w(U.mood),e:U,d:H});const we=f(U.sleepHours),Ha=Math.max(2,p+c-we);k.push(`<rect x="${(g(y)-R/2).toFixed(1)}" y="${we.toFixed(1)}" width="${R}" height="${Ha.toFixed(1)}" rx="2" fill="color-mix(in srgb,var(--green) 22%,transparent)"><title>${L(H)}: ${v(U.sleepHours)} h de sueño</title></rect>`)}}const P=h.map((y,H)=>`${H?"L":"M"}${y.x.toFixed(1)},${y.y.toFixed(1)}`).join(" "),A=h.length>1?`${P} L${h[h.length-1].x.toFixed(1)},${i-p} L${h[0].x.toFixed(1)},${i-p} Z`:"",b=o?.sleepGoal||7.5,M=f(b);return`<div class="chart-wrap">
    <svg viewBox="0 0 ${n} ${i}" class="mood-chart" role="img" aria-label="Evolución del estado de ánimo y horas de sueño">
      <defs>
        <linearGradient id="moodAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--red)" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="var(--red)" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      ${[1,2,3,4,5].map(y=>`<line x1="${r}" x2="${n-r}" y1="${w(y)}" y2="${w(y)}" stroke="var(--rule)" stroke-dasharray="3 5"/>
      <text x="10" y="${w(y)+4}" fill="var(--ink-faint)" font-size="11" font-family="var(--font-mono)">${y}</text>`).join("")}
      <line x1="${r}" x2="${n-r}" y1="${M.toFixed(1)}" y2="${M.toFixed(1)}" stroke="var(--green)" stroke-width="1" stroke-dasharray="6 4" opacity="0.55"/>
      ${k.join("")}
      ${A?`<path class="chart-area-path" d="${A}" fill="url(#moodAreaGrad)"/>`:""}
      ${P?`<path class="chart-line-path" d="${P}" fill="none" stroke="var(--red)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`:""}
      ${h.map((y,H)=>`<g>
        <circle class="chart-dot" style="--dot-i:${H}" cx="${y.x}" cy="${y.y}" r="5.5" fill="${C[y.e.mood-1].color}" stroke="var(--paper-2)" stroke-width="2">
          <title>${L(y.d)} · ${C[y.e.mood-1].label} (${y.e.mood}/5) · ${v(y.e.sleepHours)} h sueño</title>
        </circle>
      </g>`).join("")}
    </svg>
    <div class="chart-legend-inline">
      <span><i class="legend-line"></i> Ánimo (1–5)</span>
      <span><i class="legend-bar"></i> Horas de sueño (meta: ${v(b)} h)</span>
    </div>
  </div>`}function St(e=[],a=q(),t=28){const o=new Map(e.map(i=>[i.date,i])),s=j(a,1-t),n=[];for(let i=0;i<t;i++){const r=j(s,i),p=o.get(r),m=p?C[p.mood-1]:null;n.push(`<button type="button" class="heatmap-cell ${p?"filled":""}" data-action="open-day" data-date="${r}" style="${m?`--mood:${m.color}`:""}" title="${L(r)}${m?`: ${m.label} (${p.mood}/5) · ${v(p.sleepHours)} h sueño`:": sin registro"}">
      <span>${r.slice(8)}</span>
      ${m?`<small>${m.emoji}</small>`:""}
    </button>`)}return`<div class="heatmap-strip">${n.join("")}</div>`}function xt(e=[],a={}){const t=mt(e,a),o=N(a);return t.total?`<section class="card personal-goals-card">
    <div class="section-heading">
      <div>
        <h2>Cumplimiento de tus metas</h2>
      </div>
      <button type="button" class="text-button" data-action="open-setup-wizard">${l("sliders")} Ajustar metas</button>
    </div>
    <div class="goals-meter-grid">
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${l("moon")} Sueño (≥ ${v(t.sleepGoal)} h)</span>
          <strong>${t.sleepPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${t.sleepPct}%;background:var(--green)"></i></div>
        <small>${t.sleepMet} de ${t.total} días cumplidos</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${l("study")} ${d(o.focusLabel)} (≥ ${v(t.studyGoal)} h)</span>
          <strong>${t.studyPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${t.studyPct}%;background:var(--red)"></i></div>
        <small>${t.studyMet} de ${t.total} días cumplidos</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${l("drop")} Agua (≥ ${t.waterGoal} vasos)</span>
          <strong>${t.waterPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${t.waterPct}%;background:var(--ochre)"></i></div>
        <small>${t.waterMet} de ${t.total} días cumplidos</small>
      </div>
    </div>
    ${t.moodWhenSleepMet&&t.moodWhenSleepMissed?`
      <div class="sleep-mood-insight">
        ${l("spark")}
        <p>Cuando alcanzas tu meta de <b>${v(t.sleepGoal)} h</b> de sueño, tu estado medio es <b>${t.moodWhenSleepMet}/5</b> (frente a <b>${t.moodWhenSleepMissed}/5</b> los días que duermes menos).</p>
      </div>
    `:""}
  </section>`:`<section class="card personal-goals-card">
      <div class="section-heading">
        <h2>Tus metas personales</h2>
        <button type="button" class="text-button" data-action="open-setup-wizard">${l("sliders")} Ajustar</button>
      </div>
      <p class="habit-empty">Guarda tu primer día para ver cómo evolucionan tus metas de sueño (${v(t.sleepGoal)} h), ${d(o.focusLabel.toLowerCase())} (${v(t.studyGoal)} h) y agua (${t.waterGoal} vasos).</p>
    </section>`}function xa(e,a=0,t={}){const o=ut(e,a,t),s=(t?.savedQuotes||[]).includes(o.text);return`<section class="card quote-card">
    <div class="quote-top">
      <span class="eyebrow">${l("quote")} ${o.isCustom?"Tu colección":"Frase del día"}</span>
      <div class="quote-actions">
        <button type="button" class="icon-button ghost ${s?"is-saved":""}" data-action="save-quote" data-quote="${d(o.text)}" title="${s?"Guardada en tus frases":"Guardar en mis frases"}" aria-label="Guardar frase">${l("heart")}</button>
        <button type="button" class="icon-button ghost" data-action="next-quote" title="Otra frase" aria-label="Otra frase">${l("refresh")}</button>
      </div>
    </div>
    <p class="quote-text">«${d(o.text)}»</p>
    <small class="quote-author">— ${d(o.author)}</small>
  </section>`}function W(e,a,t="",o=""){return`<div class="ledger-cell">
    <span class="ledger-label">${e}</span>
    <div class="ledger-value">${a}${t?`<small>${t}</small>`:""}</div>
    ${o?`<span class="ledger-hint">${o}</span>`:""}
  </div>`}function Se(e,a,t="mood"){if(!a)return`<div class="rank-row"><span class="rank-label">${e}</span><strong>—</strong><small>Sin datos aún</small></div>`;const o=t==="mood"?`${C[a.mood-1].emoji} ${C[a.mood-1].label} (${a.mood}/5)`:`${v(a[t])} h`;return`<div class="rank-row">
    <span class="rank-label">${e}</span>
    <strong>${L(a.date,{weekday:"short",day:"numeric",month:"short"})}</strong>
    <small>${o}</small>
  </div>`}function qt(e,a,t=""){return`<div class="empty-state">
    ${l("leaf")}
    <h3>${e}</h3>
    <p>${a}</p>
    ${t}
  </div>`}function qa(e){return`<div class="meter-list">${e.map(a=>{const t=a.total?Math.round(a.count/a.total*100):0;return`<div class="meter-row">
      <span>${a.label}</span>
      <div class="meter-track"><i style="width:${t}%;background:${a.color||"var(--ink)"}"></i></div>
      <strong>${a.count}</strong>
    </div>`}).join("")}</div>`}function ka(e,a={}){if(!e?.triggered||e.level!=="high")return"";const t=a?.trustedContactName?.trim(),o=a?.trustedContactPhone?.trim();return`<section class="crisis-banner high" role="region" aria-label="Apoyo emocional disponible">
    <div class="crisis-banner-head">
      <span class="crisis-badge">${l("heart")} No estás a solas</span>
      <button type="button" class="icon-button ghost crisis-dismiss" data-action="dismiss-crisis-banner" aria-label="Ocultar este aviso">${l("close")}</button>
    </div>
    <p class="crisis-reason">${d(e.reason)}</p>
    <div class="crisis-quick-actions">
      <a href="tel:024" class="button solid crisis-call-btn">${l("phone")} Llamar al 024 (24h, gratuito y confidencial)</a>
      ${t&&o?`<a href="tel:${d(o.replace(/\s+/g,""))}" class="button outline">${l("user")} Llamar a ${d(t)}</a>`:""}
      <button type="button" class="button outline" data-action="open-crisis-modal" data-tab="breathe">${l("wind")} Respiración guiada</button>
    </div>
  </section>`}function kt(e={},a="help"){const t=N(e),o=e?.trustedContactName?.trim(),s=e?.trustedContactPhone?.trim();return`<div class="modal-card crisis-modal">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${l("heart")} Apoyo y calma</p>
        <h2>Un espacio para respirar y pedir ayuda</h2>
      </div>
      <button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${l("close")}</button>
    </div>

    <div class="crisis-tabs" role="tablist">
      <button type="button" class="crisis-tab ${a==="help"?"active":""}" data-crisis-tab="help" role="tab">${l("phone")} Teléfonos 24h</button>
      <button type="button" class="crisis-tab ${a==="breathe"?"active":""}" data-crisis-tab="breathe" role="tab">${l("wind")} Respirar (4-4-6)</button>
      <button type="button" class="crisis-tab ${a==="ground"?"active":""}" data-crisis-tab="ground" role="tab">${l("compass")} Volver al presente</button>
    </div>

    <div class="crisis-tab-panel ${a==="help"?"active":""}" data-panel="help">
      <p class="crisis-intro">Hablar con alguien cuando todo pesa es un paso valiente. Estos servicios son confidenciales, gratuitos y atienden las 24 horas.</p>
      ${o&&s?`
        <div class="trusted-contact-card">
          <div>
            <span class="eyebrow">Tu persona de confianza</span>
            <h3>${d(o)}</h3>
            <p>${d(s)}</p>
          </div>
          <a href="tel:${d(s.replace(/\s+/g,""))}" class="button solid">${l("phone")} Llamar</a>
        </div>
      `:""}
      <div class="helpline-grid">
        ${Oa.map(n=>{const i=t.isMinor&&n.youth;return`
          <div class="helpline-card ${n.primary||i?"primary":""}">
            <div class="helpline-info">
              <h3>${d(n.name)}</h3>
              <p>${d(n.detail)}</p>
            </div>
            <a href="${d(n.tel)}" class="helpline-phone">${l("phone")} <span>${d(n.number)}</span></a>
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
        <button type="button" class="button solid" data-action="toggle-breathing" id="breathing-btn">${l("wind")} Empezar ejercicio</button>
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
  </div>`}function Ma(e,a,t,o={},s={},n=""){const i=o?.showDailyWord!==!1,r=o?.showDailyTip!==!1;if(!i&&!r)return"";const p=dt(e,a),m=ct(e,t,o),c=pt(s,o),g=n&&n.toLowerCase()===p.word.toLowerCase();return`<div class="daily-inspiration-grid">
    ${i?`
      <article class="card inspiration-card word-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${l("book")} Palabra del día</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-word" title="Ver otra palabra" aria-label="Ver otra palabra">${l("refresh")}</button>
        </div>
        <div class="daily-word-main">
          <div>
            <h2 class="daily-word-title">${d(p.word)}</h2>
            <span class="daily-word-origin">${d(p.type)} · ${d(p.origin)}</span>
          </div>
          <button type="button" class="button ${g?"solid":"outline"} small-btn" data-action="use-daily-word" data-word="${d(p.word)}">
            ${l(g?"check":"pen")} ${g?"Elegida hoy":"Usar hoy"}
          </button>
        </div>
        <p class="daily-word-meaning">${d(p.meaning)}</p>
      </article>
    `:""}

    ${r?`
      <article class="card inspiration-card tip-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${l("spark")} Consejo · ${d(m.category)}</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-tip" title="Ver otro consejo" aria-label="Ver otro consejo">${l("refresh")}</button>
        </div>
        <h2 class="daily-tip-title">${d(m.title)}</h2>
        <p class="daily-tip-body">${d(m.tip)}</p>
        ${c.length?`
          <div class="contextual-advice-list">
            ${c.map(w=>`
              <div class="contextual-advice-item">
                ${l(w.icon)}
                <div><strong>${d(w.title)}:</strong> ${d(w.text)}</div>
              </div>
            `).join("")}
          </div>
        `:""}
      </article>
    `:""}
  </div>`}function Mt(e={},a=[],t=1){const o=N(e),s=new Set(a.map(i=>i.name.toLowerCase())),n=new Set(e.interests||[]);return`<div class="modal-card setup-wizard-modal" data-current-step="${t}">
    <div class="setup-wizard-header">
      <div>
        <p class="eyebrow">${l("sliders")} Paso ${t} de 3</p>
        <h2>${t===1?"Sobre ti, tu edad y tus gustos":t===2?"Tu ritmo y tus hábitos":"Papel e icono de tu cuaderno"}</h2>
      </div>
      <button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${l("close")}</button>
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
            <label for="setup-name">${l("user")} ¿Cómo te llamas?</label>
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
            ${pe.map(i=>`
              <label class="age-group-card ${o.group.id===i.id?"is-selected":""}" data-age-group-card="${i.id}">
                <input type="radio" name="ageGroup" value="${i.id}" ${o.group.id===i.id?"checked":""}>
                <span class="age-range-badge">${d(i.label)}</span>
                <strong>${d(i.title)}</strong>
                <small>${d(i.desc)}</small>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="setup-field">
          <label>¿Qué cosas te gustan o te importan más?</label>
          <p class="setup-caption">El diario mostrará solo los bloques, etiquetas y frases que encajen contigo:</p>
          <div class="interests-grid">
            ${He.map(i=>`
              <label class="interest-chip">
                <input type="checkbox" name="interests" value="${i.id}" ${n.has(i.id)?"checked":""}>
                <span>${l(i.icon)} ${d(i.label)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${t===2?"active":""}" data-step="2" ${t===2?"":"hidden"}>
        <div class="age-adaptation-callout" id="wiz-adaptation-callout">
          ${l("compass")}
          <div>
            <strong>Adaptado a: ${d(o.group.title)} (${d(o.group.label)})</strong>
            <p>Hemos ajustado tus metas recomendadas de sueño (${v(o.sleepRecommended)} h) y dedicación (${v(o.studyRecommended)} h).</p>
          </div>
        </div>

        <div class="goals-setup-grid">
          <div class="setup-field">
            <label for="setup-sleep">${l("moon")} Meta de sueño</label>
            <div class="number-wrap">
              <input id="setup-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${e.sleepGoal??o.sleepRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-study">${l("study")} Meta de dedicación</label>
            <div class="number-wrap">
              <input id="setup-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${e.studyGoal??o.studyRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-water">${l("drop")} Vasos de agua</label>
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
              ${me.map(i=>`
                <label class="purpose-card compact">
                  <input type="radio" name="ritual" value="${i.id}" ${(e.ritual||"night")===i.id?"checked":""}>
                  <span class="purpose-icon">${l(i.icon)}</span>
                  <div><strong>${d(i.label)}</strong></div>
                </label>
              `).join("")}
            </div>
          </div>
          <div class="setup-field" style="margin-top:0">
            <label>Tono de las frases</label>
            <div class="ritual-stack">
              ${ge.map(i=>`
                <label class="purpose-card compact">
                  <input type="radio" name="tone" value="${i.id}" ${(e.tone||"warm")===i.id?"checked":""}>
                  <div><strong>${d(i.label)}</strong><small>${d(i.desc)}</small></div>
                </label>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="setup-field">
          <label>Hábitos sugeridos para ti</label>
          <div class="tag-picker" id="wiz-suggested-habits">
            ${o.suggestedHabits.map(i=>{const r=s.has(i.toLowerCase());return`<label class="tag-chip">
                <input type="checkbox" name="suggestedHabits" value="${d(i)}" ${r?"checked":""}>
                <span>${d(i)}</span>
              </label>`}).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${t===3?"active":""}" data-step="3" ${t===3?"":"hidden"}>
        <div class="setup-field">
          <label>${l("palette")} Elige el papel y el icono de tu pestaña</label>
          <div class="theme-picker-grid">
            ${z.map(i=>`
              <label class="theme-card">
                <input type="radio" name="theme" value="${i.id}" ${(e.theme||"paper")===i.id?"checked":""}>
                <div class="theme-card-top">
                  <span class="theme-favicon-preview">${Z(i.id,e)}</span>
                  <div class="theme-swatches">
                    ${i.colors.map(r=>`<i style="background:${r}"></i>`).join("")}
                  </div>
                </div>
                <strong>${d(i.name)}</strong>
                <small>${d(i.desc)}</small>
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
        ${t>1?`<button type="button" class="button outline" data-wizard="prev">${l("left")} Anterior</button>`:'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${t<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${l("right")}</button>`:`<button type="submit" class="button solid">${l("check")} Guardar</button>`}
      </div>
    </form>
  </div>`}const Oe=document.querySelector("#app");let x=[],$=[],u=Be(),ve="",_="diary",S=q(),I=q(),xe=q(),ae=7,G=!1,O=!1,T=!1,qe="",ke="",Me="",Ee="grid",Ce="list",te="pulse",je="personal",ce=!1,ee=null,ta=0,oa=0,Ae=0,sa=0,oe=!1,ue=!1,ze=!1,De=null,Le="";function K(e,a=u){const t=z.find(o=>o.id===e)||z[0];document.documentElement.dataset.theme=t.id;try{const o=it(t.id,a);let s=document.querySelector('link[rel="icon"]');s||(s=document.createElement("link"),s.rel="icon",document.head.appendChild(s)),s.type="image/svg+xml",s.href=o;const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",t.colors[0]),document.title=a?.name?`Cuaderno de ${a.name}`:"Diario"}catch{}}function na(){x=Pe(),$=fe(),u=Be(),T=!!u.sidebarCollapsed,K(u.theme,u)}try{na()}catch(e){ve="No se han podido leer los datos guardados. Revisa el almacenamiento del navegador o recupera una copia. "+e.message}function Ea(){return[["diary","pen","Hoy"],["archive","book","Archivo"],["stats","chart","Progreso"],["setup","sliders","Perfil"]]}const Et=e=>Ea().find(a=>a[0]===e)?.[2]||"Hoy";function Ct([e,a,t],o){return`<button class="nav-item ${_===e?"active":""}" style="--nav-i:${o}" data-view="${e}" title="${d(t)}" data-tooltip="${d(t)}" ${_===e?'aria-current="page"':""}>
    ${l(a)}<span class="nav-label">${d(t)}</span>
  </button>`}function E(){K(u.theme,u);const e=Ea(),a=z.find(o=>o.id===u.theme)||z[0],t=Le?`page-turn-${Le}`:"view-enter";Le="",Oe.innerHTML=`
  <div class="sidebar-backdrop ${O?"is-visible":""}" data-action="close-menu" aria-hidden="true"></div>
  <aside class="sidebar ${O?"is-open":""} ${T?"is-collapsed":""}" aria-label="Menú principal">
    <div class="sidebar-top-row">
      <a href="#" class="brand" data-action="today" title="Ir a hoy">
        <span class="brand-mark"><span class="brand-full">diario</span><span class="brand-short">d</span><span class="brand-period">.</span></span>
      </a>
      <button type="button" class="icon-button sidebar-collapse-btn" data-action="toggle-sidebar" title="${T?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)"}" aria-label="${T?"Desplegar menú":"Plegar menú"}" aria-expanded="${!T}">
        ${l(T?"right":"left")}
      </button>
    </div>
    <div class="brand-rule"></div>
    ${bt(u,x.length)}
    <nav aria-label="Navegación principal">${e.map(Ct).join("")}</nav>
    <div class="sidebar-bottom">
      <div class="local-note">${l("lock")}<div><strong>Guardado en tu dispositivo</strong>${u.name?`Cuaderno de ${d(u.name)}.`:"Sin cuentas ni servidores externos."}</div></div>
    </div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <div class="topbar-left">
        <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="${O}">${l("menu")}</button>
        <button class="icon-button ghost desktop-sidebar-toggle" data-action="toggle-sidebar" title="${T?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)"}" aria-label="Alternar barra lateral">${l("sidebar")}</button>
        <span class="breadcrumb">${u.name?`Cuaderno de ${d(u.name)}`:"Diario"} <span>/</span> ${d(Et(_))}</span>
      </div>
      <div class="topbar-right">
        <button type="button" class="theme-pill" data-action="cycle-theme" title="Cambiar papel e icono (${d(a.name)})">
          <span class="topbar-favicon-mini">${Z(u.theme,u)}</span>
          <span>${d(a.name)}</span>
        </button>
        <button type="button" class="avatar" data-action="open-setup-wizard" title="Personalizar mi perfil, edad y gustos" aria-label="Personalizar mi perfil">
          ${u.name?`<span class="avatar-initial">${d(u.name.slice(0,1).toUpperCase())}</span>`:l("user")}
        </button>
      </div>
    </header>
    <main id="main" class="${t}">
      ${ve?`<div class="error-banner" role="alert">${d(ve)}</div>`:""}
      ${jt()}
    </main>
    <footer class="page-footer">
      <span>${l("leaf")} ${d(u.motto||"Un día a la vez.")}</span>
      <span>${u.name?`Cuaderno de ${d(u.name)}`:"Guardado localmente en este navegador"}</span>
    </footer>
  </div>
  <div id="floating-save" class="floating-save-bar ${G?"is-visible":""}" aria-live="polite">
    <span>${l("pen")} Cambios sin guardar</span>
    <button type="button" class="button solid small-btn" data-action="quick-save">${l("stamp")} Guardar</button>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <dialog id="modal"></dialog>`,Qt()}function ia(e,a,t,o=""){return`<div class="page-heading">
    <div>${e?`<p class="eyebrow">${e}</p>`:""}<h1>${a}</h1>${t?`<p class="page-subtitle">${t}</p>`:""}</div>
    ${o}
  </div>`}function jt(){switch(_){case"diary":return ha();case"archive":return Pt();case"stats":return Ft();case"setup":return Ot();default:return ha()}}function At(){return`<div class="day-navigation">
    <button type="button" data-action="previous" aria-label="Día anterior">${l("left")}<span>Anterior</span></button>
    <button type="button" data-action="today" class="today-button">Hoy</button>
    <button type="button" data-action="next" ${S>=q()?"disabled":""}><span>Siguiente</span>${l("right")}</button>
  </div>`}function Dt(){return u.completed?"":`<section class="card setup-welcome-banner">
    <div class="setup-welcome-content">
      <span class="soft-icon accent">${l("sliders")}</span>
      <div>
        <h2>Adapta el diario a tu edad y a tus gustos</h2>
        <p>En 30 segundos ajustamos las metas, los hábitos, las frases y el papel para que solo veas lo que te interesa.</p>
      </div>
    </div>
    <div class="setup-welcome-actions">
      <button type="button" class="button solid" data-action="open-setup-wizard">${l("sliders")} Personalizar ahora</button>
      <button type="button" class="button outline" data-action="dismiss-setup-banner">Omitir</button>
    </div>
  </section>`}function Lt(e,a){const t=e?Y(e):0,o=e?Object.values(e.habits||{}).filter(Boolean).length:0,s=gt(u.name);return`<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Día</small><span>${ye(S,x)}</span></div>
      <div class="hero-meta">
        <p class="hero-greeting">${d(s)} <span class="age-stage-tag">${u.age?`· ${u.age} años`:""}</span></p>
        <span class="date-line">${L(S)}</span>
        <div class="hero-chips">
          ${Qe(x)>0?`<span class="chip hot">${l("flame")} ${Qe(x)} d seguidos</span>`:""}
          <span class="chip" id="hero-words-chip">${t} palabras</span>
          ${$.length?`<span class="chip" id="hero-habits-chip">${o}/${$.length} hábitos</span>`:""}
          ${a.interests.slice(0,2).map(n=>`<span class="chip personal-interest-chip">${l(n.icon)} ${d(n.label.split(" ")[0])}</span>`).join("")}
          ${e?`<span class="entry-status">${l("check")} Guardado</span>`:'<span class="entry-status pending">Borrador</span>'}
        </div>
      </div>
    </div>
    <div class="hero-right">
      ${At()}
    </div>
  </div>`}function Ie(e,a,t,o,s=!0){const n=o?String(o).trim().split(/\s+/).length:0;return`<div class="writing-field" data-field="${e}">
    <label for="${e}">${a}<span class="word-count">${n} palabras</span></label>
    <textarea id="${e}" name="${e}" maxlength="20000" placeholder="${d(t)}" class="${s?"large":""}">${d(o||"")}</textarea>
  </div>`}function Ca(e=""){return`<div class="goal-row"><span class="goal-circle"></span>
    <input name="goal" aria-label="Objetivo para mañana" placeholder="Un objetivo concreto..." maxlength="500" value="${d(e)}">
    <button type="button" class="icon-button ghost" data-action="remove-goal" aria-label="Eliminar objetivo">${l("close")}</button>
  </div>`}function Tt(e,a){if(!e)return"";const t=$.filter(s=>e.habits?.[s.id]),o=u.name?`Cuaderno de ${u.name}`:"Resumen guardado";return`<section class="card daily-summary notebook-sheet reveal">
    <div class="sheet-header">
      <div>
        <p class="eyebrow">${l("book")} Día ${ye(e.date,x)}</p>
        <h2>${L(e.date)}</h2>
      </div>
      <span class="mood-tag" style="--mood:${C[e.mood-1].color}">${C[e.mood-1].emoji} ${C[e.mood-1].label}</span>
    </div>
    ${e.wordOfDay||e.capsule?`
      <div class="sheet-capsules">
        ${e.wordOfDay?`<div class="sheet-capsule-item"><span>Palabra del día</span><strong>«${d(e.wordOfDay)}»</strong></div>`:""}
        ${e.capsule?`<div class="sheet-capsule-item"><span>${d(a.capsuleLabel)}</span><strong>${d(e.capsule)}</strong></div>`:""}
      </div>
    `:""}
    <p class="sheet-narrative">${Va(e)}</p>
    ${e.bestOfDay?`<div class="sheet-quote-note"><span>Lo mejor:</span> «${d(e.bestOfDay)}»</div>`:""}
    ${t.length?`<div class="sheet-habits-line">${l("check")} ${t.map(s=>`<b>${d(s.name)}</b>`).join(" · ")}</div>`:""}
    <div class="sheet-footer">
      <small>${d(o)} · ${Y(e)} palabras</small>
      <button type="button" class="text-button" data-action="read" data-date="${e.date}">Ver hoja completa ${l("arrow")}</button>
    </div>
  </section>`}function Ht(e){return e?!!(e.bestOfDay||e.differentToday||e.tomorrow||e.energy||e.stress||e.tags&&e.tags.length||e.gratitude&&e.gratitude.some(Boolean)||e.goals&&e.goals.length||Object.values(e.counters||{}).some(a=>a>0)):!1}function ha(){const e=x.find(c=>c.date===S),a=N(u),t=ze?{triggered:!1}:aa(e||{}),o=We(S,Ae),s=e?.mood?C[e.mood-1].color:"",n=e?.sleepHours??u.sleepGoal??a.sleepRecommended??7.5,i=e?.studyHours??0,r=ce||Ht(e),p=[6,7,7.5,8,9],m=[0,1,2,3,4];return`
  ${Dt()}
  ${Lt(e,a)}
  <div id="crisis-alert-slot">${ka(t,u)}</div>
  <div id="inspiration-slot">${Ma(S,ta,oa,u,e,e?.wordOfDay||"")}</div>
  <div class="diary-layout ${ue?"is-focus-writing":""}">
    <div class="diary-main">
      <form id="diary-form" style="${s?`--active-mood:${s}`:""}">
        <!-- TARJETA 1: ÁNIMO Y RITMO CON 1 CLIC -->
        <section class="card mood-card-section" style="--i:1">
          <fieldset>
            <legend class="section-index">¿Cómo ha ido hoy?</legend>
            <div class="mood-scale" role="radiogroup" aria-label="¿Cómo te ha ido?" style="margin-top:12px">
              ${C.map(c=>`<label class="mood-option" style="--mood-color:${c.color}">
                <input type="radio" name="mood" value="${c.value}" ${(e?.mood||0)===c.value?"checked":""}>
                <span class="mood-face">${c.emoji}</span>
                <span class="mood-label">${c.label}</span>
              </label>`).join("")}
            </div>
          </fieldset>

          <div class="quick-hours-strip">
            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="sleepHours">${l("moon")} Sueño</label>
                <div class="quick-pills" role="group" aria-label="Atajos de sueño">
                  ${p.map(c=>`<button type="button" class="quick-pill ${Number(n)===c?"active":""}" data-action="quick-number" data-target="sleepHours" data-val="${c}">${v(c)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="sleepHours" name="sleepHours" type="number" min="0" max="24" step="0.5" value="${n}">
                <span>horas (meta: ${v(u.sleepGoal||a.sleepRecommended)} h)</span>
              </div>
            </div>

            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="studyHours">${l("study")} ${d(a.focusLabel)}</label>
                <div class="quick-pills" role="group" aria-label="Atajos de dedicación">
                  ${m.map(c=>`<button type="button" class="quick-pill ${Number(i)===c?"active":""}" data-action="quick-number" data-target="studyHours" data-val="${c}">${v(c)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="studyHours" name="studyHours" type="number" min="0" max="24" step="0.5" value="${i}">
                <span>horas (meta: ${v(u.studyGoal??a.studyRecommended)} h)</span>
              </div>
            </div>
          </div>
        </section>

        <!-- TARJETA 2: TU PÁGINA DE HOY (ESCRITURA LIBRE Y CÁPSULA) -->
        <section class="card writing-card-section" style="--i:2">
          <div class="section-heading">
            <p class="section-index" style="flex:1">Tu página de hoy</p>
            <div class="writing-tools-bar">
              <button type="button" class="text-button prompt-trigger-btn" data-action="inspire-prompt">
                ${l("spark")} Sugerir tema
              </button>
              <button type="button" class="icon-button ghost" data-action="toggle-focus-writing" title="${ue?"Salir del modo enfoque":"Ampliar zona de escritura"}" aria-label="Modo enfoque">
                ${l("expand")}
              </button>
            </div>
          </div>
          <div id="writing-prompt-box" class="writing-prompt-banner ${oe?"is-open":""}" ${oe?"":"hidden"}>
            <div>
              <p id="writing-prompt-text">${d(o)}</p>
            </div>
            <div class="writing-prompt-actions">
              <button type="button" class="button outline small-btn" data-action="next-writing-prompt">${l("refresh")} Otra</button>
              <button type="button" class="button solid small-btn" data-action="insert-writing-prompt">${l("pen")} Usar</button>
            </div>
          </div>
          ${Ie("generalDay","Notas del día (opcional si solo quieres un registro rápido)",a.placeholders.generalDay,e?.generalDay,!0)}
          <div class="capsule-word-grid">
            <div class="writing-field" data-field="capsule">
              <label for="capsule">${l("spark")} ${d(a.capsuleLabel)}</label>
              <input id="capsule" name="capsule" class="clean-line-input" maxlength="300" placeholder="${d(a.capsulePlaceholder)}" value="${d(e?.capsule||"")}">
            </div>
            <div class="writing-field" data-field="wordOfDay">
              <label for="wordOfDay">${l("book")} Palabra del día</label>
              <input id="wordOfDay" name="wordOfDay" class="clean-line-input" maxlength="60" placeholder="Una palabra que resuma hoy..." value="${d(e?.wordOfDay||"")}">
            </div>
          </div>
        </section>

        <!-- ACORDEÓN ANIMADO: MÁS DETALLES DEL DÍA (ADAPTADO A TUS GUSTOS) -->
        <div class="extras-accordion ${r?"is-open":""}" id="extras-accordion">
          <button type="button" class="extras-toggle-btn" data-action="toggle-more-details" aria-expanded="${r}">
            <div>
              <strong>Añadir más detalles al día</strong>
              <small>Etiquetas, contadores, lo mejor de hoy, gratitud o intención para mañana</small>
            </div>
            <span class="extras-chevron">${l("chevronDown")}</span>
          </button>
          <div class="extras-Work-shell">
            <div class="extras-inner">
              <section class="card">
                <p class="section-index">Etiquetas de hoy</p>
                ${vt(e?.tags||[],a.tags)}
              </section>

              <section class="card">
                <p class="section-index">Contadores adaptados a ti</p>
                ${yt(e?.counters,ne,u)}
              </section>

              <section class="card">
                <p class="section-index">Momentos y energía</p>
                <div class="scale-block" style="margin-bottom:16px">
                  ${ga("energy",fa,e?.energy,"bolt","Energía","Del 1 al 5","Opcional")}
                  ${ga("stress",$a,e?.stress,"storm","Estrés","Del 1 al 5","Opcional")}
                </div>
                ${Ie("bestOfDay","Lo mejor del día",a.placeholders.bestOfDay,e?.bestOfDay,!1)}
                ${Ie("differentToday","¿Qué ha sido distinto hoy?",a.placeholders.differentToday,e?.differentToday,!1)}
              </section>

              <section class="card">
                <p class="section-index">Tres cosas buenas y mañana</p>
                <div class="gratitude-fields" style="margin-bottom:16px">
                  ${["1. Hoy agradezco o valoro...","2. También...","3. Y además..."].map((c,g)=>`<label><span>0${g+1}</span><input name="gratitude${g}" aria-label="${c}" placeholder="${c}" maxlength="20000" value="${d(e?.gratitude?.[g]||"")}"></label>`).join("")}
                </div>
                <textarea name="tomorrow" aria-label="Intención para mañana" maxlength="20000" placeholder="${d(a.placeholders.tomorrow)}">${d(e?.tomorrow||"")}</textarea>
                <div id="goals">${(e?.goals||[]).map(Ca).join("")}</div>
                <button type="button" class="text-button" data-action="add-goal">${l("plus")} Añadir objetivo concreto</button>
              </section>
            </div>
          </div>
        </div>

        <div class="save-area">
          <span>${l("lock")} Se guarda al instante en tu navegador.</span>
          <button class="button solid save-button" type="submit" ${ve?"disabled":""}>${l("stamp")} Guardar día</button>
        </div>
      </form>
      ${Tt(e,a)}
    </div>

    <aside class="diary-aside">
      ${Gt(e)}
      ${Nt()}
      <div id="quote-slot">${xa(S,sa,u)}</div>
    </aside>
  </div>`}function Nt(){const e=le(S),a=j(e,6),t=J(x,e,a),o=se(t);return`<section class="card week-preview">
    <div class="section-heading"><h2>Esta semana</h2><span class="tag">${t.length}/7 días</span></div>
    <div class="week-dots">
      ${Array.from({length:7},(s,n)=>{const i=j(e,n),r=t.find(p=>p.date===i);return`<button type="button" data-action="open-day" data-date="${i}" ${i>q()?"disabled":""} aria-label="${L(i)}${r?", "+C[r.mood-1].label:""}">
          <span>${["L","M","X","J","V","S","D"][n]}</span>
          <i class="${r?"filled":""} ${i===q()?"current":""}" style="--mood:${r?C[r.mood-1].color:""}">${r?l("check"):"·"}</i>
        </button>`}).join("")}
    </div>
    <div class="mini-metrics">
      <div>${l("heart")}<strong>${o.count?v(o.mood):"—"}<small>/5</small></strong><span>Ánimo</span></div>
      <div>${l("moon")}<strong>${o.count?v(o.sleep):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${l("study")}<strong>${o.count?v(o.study):"—"}<small>h</small></strong><span>Enfoque</span></div>
    </div>
    <button class="text-button full-link" data-view="stats">Ver progreso completo ${l("arrow")}</button>
  </section>`}function Gt(e){const a=$.filter(o=>e?.habits?.[o.id]).length,t=$.length?Math.round(a/$.length*100):0;return`<section class="card">
    <div class="section-heading"><h2>Tus hábitos</h2><span class="tag ${a===$.length&&$.length>0?"all-done":""}" id="habits-badge">${a}/${$.length}</span></div>
    ${$.length?`<div class="habit-progress-bar"><i id="habit-progress-fill" style="width:${t}%"></i></div>`:""}
    ${$.length?ft($,e):'<p class="habit-empty" style="margin-top:10px">Añade aquí los hábitos que quieras seguir a diario.</p>'}
    <div class="habit-add">
      <input id="new-habit" maxlength="40" placeholder="Añadir hábito…" aria-label="Nuevo hábito">
      <button class="icon-button" data-action="add-habit" aria-label="Añadir hábito">${l("plus")}</button>
    </div>
  </section>`}function Pt(){const e=[...new Set(x.flatMap(t=>t.tags||[]))],a=x.filter(t=>(!ke||t.mood===+ke)&&(!Me||(t.tags||[]).includes(Me))&&(!qe||[t.date,t.generalDay,t.bestOfDay,t.differentToday,t.tomorrow,t.wordOfDay,t.capsule,...t.gratitude,...t.goals||[],...t.tags||[]].join(" ").toLocaleLowerCase().includes(qe.toLocaleLowerCase()))).sort((t,o)=>o.date.localeCompare(t.date));return`${ia("Archivo",u.name?`Recuerdos de ${d(u.name)}`:"Tus días guardados",`${x.length} ${x.length===1?"entrada":"entradas"} · ${v(x.reduce((t,o)=>t+Y(o),0))} palabras`,`
    <div class="segmented">
      <button type="button" data-action="archive-tab" data-tab="list" class="${Ce==="list"?"active":""}">${l("book")} Lista</button>
      <button type="button" data-action="archive-tab" data-tab="calendar" class="${Ce==="calendar"?"active":""}">${l("calendar")} Calendario</button>
    </div>
  `)}

  ${Ce==="calendar"?`
    <div class="tab-panel-enter">
      <section class="card full-calendar">
        ${$t(I,x,{selected:S})}
        <div class="mood-legend">
          ${C.map(t=>`<span><i style="background:${t.color}"></i>${t.label}</span>`).join("")}
        </div>
      </section>
    </div>
  `:`
    <div class="tab-panel-enter">
      <div class="history-controls">
        <label class="search-box">${l("search")}<input id="history-search" aria-label="Buscar en el diario" placeholder="Buscar por palabra, nota o etiqueta..." value="${d(qe)}"></label>
        <select id="history-mood" aria-label="Filtrar por estado de ánimo">
          <option value="">Todos los estados</option>
          ${C.map(t=>`<option value="${t.value}" ${ke==t.value?"selected":""}>${t.emoji} ${t.label}</option>`).join("")}
        </select>
        ${e.length?`
          <select id="history-tag" aria-label="Filtrar por etiqueta">
            <option value="">Todas las etiquetas</option>
            ${e.map(t=>`<option value="${d(t)}" ${Me===t?"selected":""}>#${d(t)}</option>`).join("")}
          </select>
        `:""}
        <div class="segmented">
          <button type="button" data-action="history-layout" data-layout="grid" class="${Ee==="grid"?"active":""}">Tarjetas</button>
          <button type="button" data-action="history-layout" data-layout="timeline" class="${Ee==="timeline"?"active":""}">Hilo</button>
        </div>
      </div>
      <div class="${Ee==="timeline"?"history-timeline":"history-grid"}">
        ${a.length?a.map((t,o)=>{const s=Object.values(t.habits||{}).filter(Boolean).length;return`<article class="card history-card" style="--mood:${C[t.mood-1].color};--i:${Math.min(o,10)}">
            <div class="section-heading">
              <p class="eyebrow">Día ${ye(t.date,x)}</p>
              <span class="mood-tag" style="--mood:${C[t.mood-1].color}">${C[t.mood-1].emoji} ${C[t.mood-1].label}</span>
            </div>
            <h2>${L(t.date,{day:"numeric",month:"long",year:"numeric"})}</h2>
            <p class="entry-excerpt">${d(t.generalDay)}</p>
            ${t.wordOfDay||t.capsule?`
              <div class="history-capsules">
                ${t.wordOfDay?`<span class="history-word-pill">«${d(t.wordOfDay)}»</span>`:""}
                ${t.capsule?`<span class="history-capsule-pill">${l("spark")} ${d(t.capsule)}</span>`:""}
              </div>
            `:""}
            <div class="history-numbers">
              <span class="chiplet">${l("moon")} ${v(t.sleepHours)} h</span>
              <span class="chiplet">${l("study")} ${v(t.studyHours)} h</span>
              ${$.length?`<span class="chiplet">${l("check")} ${s}/${$.length}</span>`:""}
              <span class="chiplet">${l("pen")} ${Y(t)} pal.</span>
            </div>
            <div class="history-actions">
              <button class="text-button" data-action="read" data-date="${t.date}">Abrir ${l("arrow")}</button>
              <button class="icon-button ghost" data-action="open-day" data-date="${t.date}" aria-label="Editar">${l("pen")}</button>
              <button class="icon-button ghost delete-button" data-action="delete" data-date="${t.date}" aria-label="Eliminar">${l("trash")}</button>
            </div>
          </article>`}).join(""):qt(x.length?"Sin resultados":"Aún no hay entradas guardadas","Las páginas que guardes aparecerán aquí.")}
      </div>
    </div>
  `}`}function Ft(){return`${ia("Progreso",u.name?`Tu evolución, ${d(u.name.split(" ")[0])}`:"Tu evolución","Tus patrones de descanso, ánimo, hábitos y metas personales.",`
    <div class="segmented">
      <button type="button" data-action="stats-tab" data-tab="pulse" class="${te==="pulse"?"active":""}">Pulso y metas</button>
      <button type="button" data-action="stats-tab" data-tab="week" class="${te==="week"?"active":""}">Semana</button>
      <button type="button" data-action="stats-tab" data-tab="month" class="${te==="month"?"active":""}">Mes</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${te==="week"?ba(!1):te==="month"?ba(!0):Bt()}
  </div>`}function Bt(){const e=q(),a=j(e,1-ae),t=J(x,a,e),o=J(x,j(a,-ae),j(a,-1)),s=se(t),n=se(o),i=Ya(x),r=N(u),p=(m,c)=>{if(t.length<3||o.length<3||!Number.isFinite(s[m])||!Number.isFinite(n[m]))return"";const g=s[m]-n[m];return`${g>0?"↑":g<0?"↓":"→"} ${v(Math.abs(g))}${c} vs. anterior`};return`
  <div class="ledger-grid">
    ${W("Estado medio",s.count?v(s.mood):"—","/ 5",p("mood",""))}
    ${W("Sueño medio",s.count?v(s.sleep):"—","h",p("sleep"," h"))}
    ${W(r.focusLabel,s.count?v(s.study):"—","h",p("study"," h"))}
    ${W("Racha actual",Qe(x),"días",`${s.count} días registrados`)}
  </div>
  ${xt(t,u)}
  <section class="card chart-card">
    <div class="section-heading">
      <h2>Ánimo y horas de sueño</h2>
      <div class="segmented">
        <button type="button" data-action="range" data-range="7" class="${ae===7?"active":""}">7 días</button>
        <button type="button" data-action="range" data-range="30" class="${ae===30?"active":""}">30 días</button>
      </div>
    </div>
    ${wt(t,a,ae,u)}
    <div class="chart-dates"><span>${L(a,{day:"numeric",month:"short"})}</span><span>${L(e,{day:"numeric",month:"short"})}</span></div>
  </section>
  <section class="card">
    <div class="section-heading">
      <h2>Últimos 28 días</h2>
      <span class="field-caption">Pulsa cualquier día para abrirlo</span>
    </div>
    ${St(x,e,28)}
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Tendencias detectadas</h2>
      <div style="margin-top:10px">
        ${i.length?i.map(m=>`<p class="trend-item">${l("arrow")}<span>${m}</span></p>`).join(""):'<p class="habit-empty">Con 3 o más registros por semana verás comparativas automáticas aquí.</p>'}
      </div>
    </section>
    <section class="card">
      <h2>Etiquetas más frecuentes</h2>
      ${pa(t).length?qa(pa(t).slice(0,6).map(([m,c])=>({label:m,count:c,total:t.length,color:"var(--red)"}))):'<p class="habit-empty">Aún no hay etiquetas en este período.</p>'}
    </section>
  </div>`}function ba(e){const[a,t]=e?wa(I):[le(S),j(le(S),6)],o=J(x,a,t),s=se(o);return`
  <div class="section-heading" style="margin-bottom:16px">
    <h2>${e?L(I,{month:"long",year:"numeric"}):`${L(le(S),{day:"numeric",month:"short"})} – ${L(j(le(S),6),{day:"numeric",month:"short",year:"numeric"})}`}</h2>
    <div class="period-controls">
      <button class="icon-button ghost" data-action="period-prev" data-monthly="${e?"1":"0"}" aria-label="Anterior">${l("left")}</button>
      <button class="icon-button ghost" data-action="period-next" data-monthly="${e?"1":"0"}" aria-label="Siguiente">${l("right")}</button>
    </div>
  </div>
  <div class="ledger-grid">
    ${W("Días registrados",s.count,e?"días":"/ 7")}
    ${W("Estado medio",s.count?v(s.mood):"—","/ 5")}
    ${W("Sueño medio",s.count?v(s.sleep):"—","h")}
    ${W("Dedicación media",s.count?v(s.study):"—","h")}
  </div>
  <section class="card period-summary">
    <span class="soft-icon">${l("leaf")}</span>
    <div>
      <p>${Ja(s,e)}</p>
    </div>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Días destacados</h2>
      <div class="highlights" style="grid-template-columns:1fr 1fr">
        ${Se("Mejor día",s.best)}
        ${Se("Más sueño",s.mostSleep,"sleepHours")}
        ${Se("Más dedicación",s.mostStudy,"studyHours")}
        ${Se("Día más difícil",s.worst)}
      </div>
    </section>
    <section class="card">
      <h2>Distribución de estados</h2>
      <div style="margin-top:14px">
        ${qa(C.map((n,i)=>({label:`${n.emoji} ${n.label}`,count:s.moods[i],total:s.count,color:n.color})))}
      </div>
    </section>
  </div>`}function Ot(){return`${ia("Perfil y ajustes","Hecho a tu medida","Personaliza tu identidad, tus gustos, el papel del cuaderno o haz una copia de seguridad.",`
    <div class="segmented">
      <button type="button" data-action="profile-tab" data-tab="personal" class="${je==="personal"?"active":""}">${l("sliders")} Mi perfil</button>
      <button type="button" data-action="profile-tab" data-tab="data" class="${je==="data"?"active":""}">${l("shield")} Datos y copias</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${je==="data"?It():zt()}
  </div>`}function zt(){const e=N(u),a=new Set($.map(o=>o.name.toLowerCase())),t=new Set(u.interests||[]);return`<form id="setup-page-form" class="setup-page-grid">
    <section class="card" style="--i:1">
      <h2>Identidad y etapa vital</h2>
      <div class="setup-name-age-row">
        <div class="setup-field">
          <label for="sp-name">${l("user")} Tu nombre o apodo</label>
          <input id="sp-name" name="name" maxlength="50" placeholder="Tu nombre..." value="${d(u.name)}">
        </div>
        <div class="setup-field">
          <label for="sp-age">Tu edad</label>
          <div class="age-input-wrap">
            <input id="sp-age" name="age" type="number" min="10" max="110" step="1" placeholder="Ej. 20" value="${u.age??""}">
            <span>años</span>
          </div>
        </div>
      </div>

      <div class="setup-field">
        <label>Grupo de edad</label>
        <div class="age-group-grid" id="sp-age-groups">
          ${pe.map(o=>`
            <label class="age-group-card ${e.group.id===o.id?"is-selected":""}" data-age-group-card="${o.id}">
              <input type="radio" name="ageGroup" value="${o.id}" ${e.group.id===o.id?"checked":""}>
              <span class="age-range-badge">${d(o.label)}</span>
              <strong>${d(o.title)}</strong>
              <small>${d(o.desc)}</small>
            </label>
          `).join("")}
        </div>
      </div>

      <div class="setup-field">
        <label for="sp-motto">Frase de pie de página</label>
        <input id="sp-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${d(u.motto)}">
      </div>
    </section>

    <section class="card" style="--i:2">
      <h2>Tus gustos y estilo</h2>
      <p class="field-caption" style="margin:6px 0 8px">El diario adapta sus contadores, etiquetas y frases a lo que marques aquí:</p>
      <div class="interests-grid">
        ${He.map(o=>`
          <label class="interest-chip">
            <input type="checkbox" name="interests" value="${o.id}" ${t.has(o.id)?"checked":""}>
            <span>${l(o.icon)} ${d(o.label)}</span>
          </label>
        `).join("")}
      </div>

      <div class="two-columns" style="margin-top:16px">
        <div class="setup-field" style="margin-top:0">
          <label>Momento habitual</label>
          <div class="ritual-stack">
            ${me.map(o=>`
              <label class="purpose-card compact">
                <input type="radio" name="ritual" value="${o.id}" ${(u.ritual||"night")===o.id?"checked":""}>
                <span class="purpose-icon">${l(o.icon)}</span>
                <div><strong>${d(o.label)}</strong></div>
              </label>
            `).join("")}
          </div>
        </div>
        <div class="setup-field" style="margin-top:0">
          <label>Tono de las frases</label>
          <div class="ritual-stack">
            ${ge.map(o=>`
              <label class="purpose-card compact">
                <input type="radio" name="tone" value="${o.id}" ${(u.tone||"warm")===o.id?"checked":""}>
                <div><strong>${d(o.label)}</strong><small>${d(o.desc)}</small></div>
              </label>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="card" style="--i:3">
      <h2>Metas, hábitos y frases propias</h2>
      <div class="age-adaptation-callout" id="sp-adaptation-callout" style="margin-top:12px">
        ${l("compass")}
        <div>
          <strong>Etapa activa: ${d(e.group.title)} (${d(e.group.label)})</strong>
          <p>Sueño recomendado: <b>${v(e.sleepRecommended)} h</b> · Dedicación sugerida: <b>${v(e.studyRecommended)} h</b>.</p>
        </div>
      </div>
      <div class="goals-setup-grid">
        <div class="setup-field">
          <label for="sp-sleep">${l("moon")} Meta de sueño (h)</label>
          <input id="sp-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${u.sleepGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-study">${l("study")} Meta de dedicación (h)</label>
          <input id="sp-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${u.studyGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-water">${l("drop")} Meta de agua (vasos)</label>
          <input id="sp-water" name="waterGoal" type="number" min="1" max="25" step="1" value="${u.waterGoal}">
        </div>
      </div>
      <div class="setup-field" style="margin-top:16px">
        <label>Hábitos sugeridos para tu perfil</label>
        <div class="tag-picker" id="sp-suggested-habits">
          ${e.suggestedHabits.map(o=>{const s=a.has(o.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${d(o)}" ${s?"checked":""}><span>${s?"✓ ":"+ "}${d(o)}</span></label>`}).join("")}
        </div>
      </div>
      <div class="setup-field" style="margin-top:18px">
        <label>${l("quote")} Tus frases guardadas (${(u.savedQuotes||[]).length})</label>
        ${(u.savedQuotes||[]).length?`
          <div class="saved-quotes-list">
            ${u.savedQuotes.map((o,s)=>`
              <div class="saved-quote-item">
                <span>«${d(o)}»</span>
                <button type="button" class="icon-button ghost" data-action="remove-saved-quote" data-index="${s}" aria-label="Quitar frase">${l("close")}</button>
              </div>
            `).join("")}
          </div>
        `:""}
        <div class="habit-add" style="margin-top:10px">
          <input id="new-custom-quote" maxlength="240" placeholder="Añade una frase propia...">
          <button type="button" class="icon-button" data-action="add-custom-quote" aria-label="Añadir frase">${l("plus")}</button>
        </div>
      </div>
    </section>

    <section class="card" style="--i:4">
      <h2>Papel e icono de la pestaña</h2>
      <div class="setup-field">
        <div class="theme-picker-grid">
          ${z.map(o=>`
            <label class="theme-card">
              <input type="radio" name="theme" value="${o.id}" ${u.theme===o.id?"checked":""}>
              <div class="theme-card-top">
                <span class="theme-favicon-preview">${Z(o.id,u)}</span>
                <div class="theme-swatches">${o.colors.map(s=>`<i style="background:${s}"></i>`).join("")}</div>
              </div>
              <strong>${d(o.name)}</strong>
              <small>${d(o.desc)}</small>
            </label>
          `).join("")}
        </div>
      </div>
      <div class="setup-toggles" style="margin-top:16px">
        <label class="toggle-row">
          <input type="checkbox" name="sidebarCollapsed" ${T?"checked":""}>
          <span><strong>Barra lateral compacta</strong><small>Reducir el menú a iconos en escritorio (Ctrl+B).</small></span>
        </label>
        <label class="toggle-row">
          <input type="checkbox" name="showDailyWord" ${u.showDailyWord!==!1?"checked":""}>
          <span><strong>Mostrar Palabra del día</strong><small>Muestra una palabra diaria en la parte superior.</small></span>
        </label>
        <label class="toggle-row">
          <input type="checkbox" name="showDailyTip" ${u.showDailyTip!==!1?"checked":""}>
          <span><strong>Mostrar Consejo del día</strong><small>Recomendaciones breves adaptadas a tu edad y gustos.</small></span>
        </label>
      </div>
    </section>

    <div class="save-area" style="grid-column:1/-1">
      <span>${l("lock")} Guardado localmente en este dispositivo.</span>
      <button type="submit" class="button solid save-button">${l("check")} Guardar perfil</button>
    </div>
  </form>`}function It(){return`
  <div class="two-columns">
    <section class="card">
      <h2>Exportar copia de seguridad</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Descarga todas tus entradas, hábitos y tu perfil en un archivo JSON para guardarlo o llevarlo a otro dispositivo.</p>
      <button class="button solid" data-action="export">${l("download")} Descargar copia (.json)</button>
    </section>
    <section class="card">
      <h2>Importar copia</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Recupera un archivo JSON exportado previamente. Te pedirá confirmación antes de fusionar los datos.</p>
      <button class="button outline" data-action="import">${l("upload")} Seleccionar archivo</button>
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
    <button class="button danger" data-action="clear">${l("trash")} Borrar todo</button>
  </section>`}function Rt(e){const a=String(e||"").trim();return a?a.split(/\s+/).length:0}function ra(e){const a=new FormData(e),t=x.find(A=>A.date===S),o=N(u),s=(a.get("tagCustom")||"").toString().trim(),n=[...new Set([...a.getAll("tags").map(A=>A.toString().trim()),s].filter(Boolean))],i={};for(const A of ne)i[A.key]=parseFloat(a.get(`counter_${A.key}`))||0;const r={};for(const A of $)r[A.id]=!!(document.querySelector(`[name="habit_${A.id}"]`)?.checked??a.get(`habit_${A.id}`)==="on");const p=+a.get("mood")||t?.mood||3,m=a.get("sleepHours"),c=m!==null&&m!==""?parseFloat(m):u.sleepGoal||o.sleepRecommended||7.5,g=a.get("studyHours"),w=g!==null&&g!==""?parseFloat(g):0,f=(a.get("bestOfDay")||"").toString().trim(),h=(a.get("differentToday")||"").toString().trim(),k=(a.get("capsule")||"").toString().trim(),R=(a.get("wordOfDay")||"").toString().trim();let P=(a.get("generalDay")||"").toString().trim();return P||(P=f||k||(R?`Palabra del día: ${R}.`:`Día ${C[p-1].label.toLowerCase()}.`)),{id:t?.id,date:S,mood:p,sleepHours:c,studyHours:w,energy:a.get("energy")?+a.get("energy"):null,stress:a.get("stress")?+a.get("stress"):null,bestOfDay:f,differentToday:h,generalDay:P,wordOfDay:R,capsule:k,gratitude:[0,1,2].map(A=>(a.get(`gratitude${A}`)||"").toString().trim()),tomorrow:(a.get("tomorrow")||"").toString().trim(),goals:a.getAll("goal").map(A=>A.toString().trim()).filter(Boolean),tags:n,counters:i,habits:r,createdAt:t?.createdAt}}function Ut(e){for(const[a,t]of[["sleepHours","horas de sueño"],["studyHours","horas de dedicación"]]){const o=e[a];if(!Number.isFinite(o)||o<0||o>24)throw new Error(`Escribe unas ${t} válidas, entre 0 y 24.`)}return e}function Re(e){if(!e)return;const a=ra(e),t=document.querySelector("#hero-words-chip");t&&(t.textContent=`${Y(a)} palabras`);const o=document.querySelector("#floating-save");o&&o.classList.toggle("is-visible",G);const s=aa(a),n=document.querySelector("#crisis-alert-slot");n&&(s.triggered&&s.level==="high"&&!ze?n.innerHTML=ka(s,u):s.triggered||(n.innerHTML=""))}function ja(e,a){if(!e)return;const t=e.querySelector('[name="age"]'),o=()=>{const s=new FormData(e),n=s.get("age"),i=n?Ne(n,s.get("ageGroup")||"young"):s.get("ageGroup")||"young",r=s.getAll("interests").map(String);e.querySelectorAll("[data-age-group-card]").forEach(f=>{const h=f.dataset.ageGroupCard===i;f.classList.toggle("is-selected",h);const k=f.querySelector('input[type="radio"]');k&&n&&(k.checked=h)});const p=N({age:n||null,ageGroup:i,interests:r}),m=e.querySelector('[name="sleepGoal"]'),c=e.querySelector('[name="studyGoal"]');m&&n&&(m.value=p.sleepRecommended),c&&n&&(c.value=p.studyRecommended);const g=e.querySelector(`#${a}-adaptation-callout`);g&&(g.innerHTML=`
        ${l("compass")}
        <div>
          <strong>Adaptado a: ${d(p.group.title)} (${d(p.group.label)})</strong>
          <p>Sueño recomendado: <b>${v(p.sleepRecommended)} h</b> · Dedicación sugerida: <b>${v(p.studyRecommended)} h</b>.</p>
        </div>`);const w=e.querySelector(`#${a}-suggested-habits`);if(w){const f=new Set($.map(h=>h.name.toLowerCase()));w.innerHTML=p.suggestedHabits.map(h=>{const k=f.has(h.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${d(h)}" ${k?"checked":""}><span>${k?"✓ ":"+ "}${d(h)}</span></label>`}).join("")}};t&&t.addEventListener("input",o),e.querySelectorAll('[name="ageGroup"], [name="interests"]').forEach(s=>{s.addEventListener("change",o)})}function Qt(){const e=document.querySelector("#setup-page-form");e&&(ja(e,"sp"),e.addEventListener("submit",t=>{t.preventDefault(),Aa(e),E(),D("Perfil actualizado")}),e.addEventListener("change",t=>{t.target.name==="theme"&&K(t.target.value,u)}));const a=document.querySelector("#diary-form");a&&(a.addEventListener("submit",t=>{if(t.preventDefault(),!ve)try{const o=Ut(ra(a)),s=aa(o);x=Ka(o),G=!1,E(),_t(),D("Día guardado"),document.querySelector(".daily-summary")?.classList.add("reveal"),s.triggered&&s.level==="high"&&setTimeout(()=>Da("help"),550)}catch(o){D(o.message||"No se ha podido guardar este día.",!0)}}),a.addEventListener("input",t=>{G=!0;const o=t.target;if(o.name==="mood"){const n=C[+o.value-1];a.style.setProperty("--active-mood",n.color)}if(o.name==="sleepHours"||o.name==="studyHours"){const n=parseFloat(o.value);a.querySelectorAll(`[data-action="quick-number"][data-target="${o.name}"]`).forEach(i=>{i.classList.toggle("active",parseFloat(i.dataset.val)===n)})}if(o.name==="energy"){const n=document.querySelector("#energy-hint");n&&(n.textContent=fa[+o.value]+".")}if(o.name==="stress"){const n=document.querySelector("#stress-hint");n&&(n.textContent=$a[+o.value]+".")}if(o.name?.startsWith("counter_")){const n=o.name.slice(8),i=parseFloat(o.value)||0,r=document.querySelector(`#hint-${n}`);if(r&&(r.textContent=Ve(n,i)),n==="water"){const p=u.waterGoal||8,m=o.closest(".counter-row"),c=m?.querySelector(".counter-goal-pill"),g=m?.querySelector(".counter-progress i");c&&(c.textContent=`Meta: ${i}/${p}`,c.classList.toggle("met",i>=p)),g&&(g.style.width=`${Math.min(100,Math.round(i/p*100))}%`)}}const s=o.closest(".writing-field");if(s){const n=s.querySelector(".word-count");n&&(n.textContent=`${Rt(o.value)} palabras`)}Re(a)}),a.addEventListener("keydown",t=>{if(t.target.id==="tagCustom"&&t.key==="Enter"){t.preventDefault();const o=t.target.value.trim();if(o){const s=a.querySelector(".tag-picker .tag-chip.ghost");s&&s.insertAdjacentHTML("beforebegin",`<label class="tag-chip"><input type="checkbox" name="tags" value="${d(o)}" checked><span>${d(o)}</span></label>`),t.target.value="",G=!0,Re(a)}}}),document.querySelectorAll(".habit-check input").forEach(t=>{t.addEventListener("change",()=>{G=!0;const o=t.closest(".habit-item");o&&(o.classList.toggle("is-done",t.checked),t.checked&&(o.classList.remove("just-checked"),o.offsetWidth,o.classList.add("just-checked")));const s=document.querySelectorAll(".habit-check input:checked").length,n=document.querySelector("#habits-badge"),i=document.querySelector("#habit-progress-fill"),r=document.querySelector("#hero-habits-chip");n&&(n.textContent=`${s}/${$.length}`,n.classList.toggle("all-done",s===$.length&&$.length>0)),i&&$.length&&(i.style.width=`${Math.round(s/$.length*100)}%`),r&&(r.textContent=`${s}/${$.length} hábitos`),t.checked&&s===$.length&&$.length>0&&D("Todos los hábitos de hoy completados"),va(),Re(a)})}),va(),Wt())}function Aa(e){const a=new FormData(e),t=a.getAll("suggestedHabits").map(c=>c.toString().trim()).filter(Boolean),o=new Set($.map(c=>c.name.toLowerCase()));for(const c of t)!o.has(c.toLowerCase())&&$.length<30&&($=Sa({name:c}),o.add(c.toLowerCase()));const s=e.querySelector('[name="sidebarCollapsed"]')!==null,n=a.get("age"),i=n!==null&&n!==""?parseInt(n.toString(),10):null,r=i?Ne(i,a.get("ageGroup")||"young"):a.get("ageGroup")||u.ageGroup,p=a.getAll("interests").map(c=>c.toString().trim()).filter(Boolean);u=Q({completed:!0,name:a.get("name")||"",age:Number.isFinite(i)?i:null,ageGroup:r,interests:p,ritual:a.get("ritual")||u.ritual,tone:a.get("tone")||u.tone,purpose:a.get("purpose")||u.purpose,motto:a.get("motto")||"Un día a la vez.",theme:a.get("theme")||u.theme,sleepGoal:parseFloat(a.get("sleepGoal"))||7.5,studyGoal:parseFloat(a.get("studyGoal"))??2,waterGoal:parseInt(a.get("waterGoal"),10)||8,showDailyWord:e.querySelector('[name="showDailyWord"]')?.checked??!0,showDailyTip:e.querySelector('[name="showDailyTip"]')?.checked??!0,sidebarCollapsed:s?!!e.querySelector('[name="sidebarCollapsed"]')?.checked:T}),T=!!u.sidebarCollapsed,K(u.theme,u)}function va(){for(const e of $){const a=document.querySelector(`.habit-meta[data-habit-id="${e.id}"]`);a&&(a.innerHTML=`<b>${Ua(x,e.id)}</b> d`)}}function Wt(){const e=document.querySelector("#diary-form");if(e)for(const a of ne){const t=e.querySelector(`[name="counter_${a.key}"]`),o=document.querySelector(`#hint-${a.key}`);t&&o&&t.value!==""&&(o.textContent=Ve(a.key,parseFloat(t.value)||0))}}function Ue(e=""){const a=document.querySelector("#inspiration-slot");if(!a)return;const t=document.querySelector("#diary-form"),o=t?ra(t):x.find(s=>s.date===S);if(a.innerHTML=Ma(S,ta,oa,u,o,o?.wordOfDay||""),e){const s=a.querySelector(e);s&&(s.classList.remove("card-flip-in"),s.offsetWidth,s.classList.add("card-flip-in"))}}function ya(){const e=document.querySelector("#quote-slot");if(!e)return;e.innerHTML=xa(S,sa,u);const a=e.querySelector(".quote-card");a&&(a.classList.remove("card-flip-in"),a.offsetWidth,a.classList.add("card-flip-in"))}function _t(){const e=document.querySelector("#stamp");if(!e)return;const a=u.name?`Cuaderno de ${d(u.name)}`:"Guardado";e.innerHTML=`<div class="stamp-face">${a}<small>${L(S)}</small></div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function D(e,a=!1){const t=document.querySelector("#toast");t&&(t.innerHTML=`<div class="${a?"error":""}">${l(a?"close":"check")}<span>${d(e)}</span></div>`,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),3e3))}function Te(){De&&(clearInterval(De),De=null)}function $e(e){Te();const a=document.querySelector("#modal");return a.innerHTML=e,a.open||a.showModal(),a}function Da(e="help"){const a=$e(kt(u,e));let t=!1;const o=()=>{Te(),a.close()};a.onclick=s=>{if(s.target.closest('[data-modal="close"]')||s.target===a){o();return}const i=s.target.closest("[data-crisis-tab]");if(i){const p=i.dataset.crisisTab;a.querySelectorAll(".crisis-tab").forEach(m=>m.classList.toggle("active",m.dataset.crisisTab===p)),a.querySelectorAll(".crisis-tab-panel").forEach(m=>m.classList.toggle("active",m.dataset.panel===p)),p!=="breathe"&&Te();return}const r=s.target.closest('[data-action="toggle-breathing"]');if(r){const p=a.querySelector("#breathing-visual"),m=a.querySelector("#breathing-phase"),c=a.querySelector("#breathing-timer"),g=a.querySelector("#breathing-guide");if(t)t=!1,Te(),p?.classList.remove("inhale","hold","exhale"),m&&(m.textContent="En pausa"),c&&(c.textContent="4 — 4 — 6"),r.innerHTML=`${l("wind")} Seguir respirando`;else{t=!0,r.innerHTML=`${l("close")} Pausar`;let w=0;const f=()=>{const h=w%14;p?.classList.remove("inhale","hold","exhale"),h<4?(p?.classList.add("inhale"),m&&(m.textContent="Toma aire..."),c&&(c.textContent=`${4-h} s`),g&&(g.textContent="Inhala despacio por la nariz.")):h<8?(p?.classList.add("hold"),m&&(m.textContent="Mantén..."),c&&(c.textContent=`${8-h} s`),g&&(g.textContent="Sostén el aire sin tensar los hombros.")):(p?.classList.add("exhale"),m&&(m.textContent="Suelta..."),c&&(c.textContent=`${14-h} s`),g&&(g.textContent="Deja salir el aire poco a poco.")),w++};f(),De=setInterval(f,1e3)}}}}function Vt(e=1){let a=e;const t=$e(Mt(u,$,a)),o=t.querySelector("#setup-wizard-form");ja(o,"wiz");const s=n=>{a=Math.max(1,Math.min(3,n)),t.querySelectorAll(".wizard-step-body").forEach(c=>{const g=+c.dataset.step;c.classList.toggle("active",g===a),c.hidden=g!==a});const i=t.querySelector(".setup-wizard-header .eyebrow"),r=t.querySelector(".setup-wizard-header h2");i&&(i.innerHTML=`${l("sliders")} Paso ${a} de 3`),r&&(r.textContent=a===1?"Sobre ti, tu edad y tus gustos":a===2?"Tu ritmo y tus hábitos":"Papel e icono de tu cuaderno"),t.querySelectorAll(".wizard-steps-bar span").forEach((c,g)=>{c.classList.toggle("done",a>=g+1),c.classList.toggle("current",a===g+1)});const m=t.querySelector(".wizard-footer");m&&(m.innerHTML=`
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${l("left")} Anterior</button>`:'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${l("right")}</button>`:`<button type="submit" class="button solid">${l("check")} Guardar</button>`}`)};t.onchange=n=>{n.target.name==="theme"&&K(n.target.value,u)},t.onsubmit=n=>{n.preventDefault(),o&&Aa(o),t.close(),E(),D("Tu cuaderno se ha adaptado a tus gustos")},t.onclick=n=>{if(n.target.closest('[data-modal="close"]')||n.target===t){K(u.theme,u),t.close();return}const r=n.target.closest("[data-wizard]");if(r){const p=r.dataset.wizard;s(p==="next"?a+1:a-1)}}}function _e({title:e,text:a,confirmLabel:t,danger:o=!1}){return new Promise(s=>{const n=$e(`<div class="modal-card">
      <h2>${d(e)}</h2><p>${d(a)}</p>
      <div class="modal-actions">
        <button class="button outline" data-modal="cancel">Cancelar</button>
        <button class="button ${o?"danger":"solid"}" data-modal="confirm">${d(t)}</button>
      </div>
    </div>`);n.onclick=i=>{const r=i.target.closest("[data-modal]")?.dataset.modal;r?(n.close(),s(r==="confirm")):i.target===n&&(n.close(),s(!1))}})}function Jt(e){const a=x.find(n=>n.date===e);if(!a){V(e);return}const t=N(u),o=$.filter(n=>a.habits?.[n.id]),s=$e(`<article class="modal-card entry-modal">
    <div class="section-heading">
      <div><p class="eyebrow">${u.name?`Cuaderno de ${d(u.name)} · `:""}Día ${ye(a.date,x)}</p><h2>${L(a.date)}</h2></div>
      <span class="mood-tag" style="--mood:${C[a.mood-1].color}">${C[a.mood-1].emoji} ${C[a.mood-1].label}</span>
    </div>
    <div class="read-metrics">
      <span class="chiplet">${l("moon")} ${v(a.sleepHours)} h sueño</span>
      <span class="chiplet">${l("study")} ${v(a.studyHours)} h dedicación</span>
      ${a.energy?`<span class="chiplet">${l("bolt")} energía ${a.energy}/5</span>`:""}
      ${a.stress?`<span class="chiplet">${l("storm")} estrés ${a.stress}/5</span>`:""}
      <span class="chiplet">${l("pen")} ${Y(a)} palabras</span>
    </div>
    ${(a.tags||[]).length?`<div class="read-metrics">${a.tags.map(n=>`<span class="chiplet">${l("hash")} ${d(n)}</span>`).join("")}</div>`:""}
    ${a.wordOfDay?`<div class="read-section"><h3>Palabra del día</h3><p>«${d(a.wordOfDay)}»</p></div>`:""}
    ${a.capsule?`<div class="read-section"><h3>${d(t.capsuleLabel)}</h3><p>${d(a.capsule)}</p></div>`:""}
    <div class="read-section"><h3>Notas del día</h3><p class="dropcap-paragraph">${d(a.generalDay)}</p></div>
    ${a.bestOfDay?`<div class="read-section"><h3>Lo mejor del día</h3><p>${d(a.bestOfDay)}</p></div>`:""}
    ${a.differentToday?`<div class="read-section"><h3>¿Qué ha sido distinto?</h3><p>${d(a.differentToday)}</p></div>`:""}
    ${a.gratitude?.some(Boolean)?`<div class="read-section"><h3>Agradecimientos</h3><ol>${a.gratitude.filter(Boolean).map(n=>`<li>${d(n)}</li>`).join("")}</ol></div>`:""}
    ${a.tomorrow||a.goals?.length?`<div class="read-section"><h3>Para mañana</h3><p>${d(a.tomorrow)}</p>${a.goals?.length?`<ul>${a.goals.map(n=>`<li>${d(n)}</li>`).join("")}</ul>`:""}</div>`:""}
    ${$.length&&o.length?`<div class="read-section"><h3>Hábitos cumplidos</h3><p>${o.map(n=>d(n.name)).join(" · ")}</p></div>`:""}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      <button class="button danger" data-modal="delete">Eliminar</button>
      <button class="button solid" data-modal="edit">${l("pen")} Editar</button>
    </div>
  </article>`);s.onclick=n=>{const i=n.target.closest("[data-modal]")?.dataset.modal,r=()=>s.close();(i==="close"||n.target===s)&&r(),i==="edit"&&(r(),V(a.date)),i==="delete"&&(r(),Ta(a.date))}}function V(e,a=""){if(e>q()){D("Ese día todavía no ha llegado.",!0);return}G&&!window.confirm("Tienes cambios sin guardar. ¿Quieres salir igualmente?")||(Le=a||(e<S?"prev":e>S?"next":""),G=!1,S=e,_="diary",O=!1,ze=!1,E(),window.scrollTo({top:0,behavior:"smooth"}))}function La(){if(window.innerWidth<=980){O=!O,document.querySelector(".sidebar")?.classList.toggle("is-open",O),document.querySelector(".sidebar-backdrop")?.classList.toggle("is-visible",O);return}T=!T,u=Q({sidebarCollapsed:T});const e=document.querySelector(".sidebar");if(e){e.classList.toggle("is-collapsed",T);const a=e.querySelector(".sidebar-collapse-btn");a&&(a.innerHTML=l(T?"right":"left"),a.title=T?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)",a.setAttribute("aria-expanded",String(!T)))}}async function Ta(e){await _e({title:"¿Eliminar esta entrada?",text:`Se borrará del dispositivo el registro de ${L(e)}.`,confirmLabel:"Eliminar",danger:!0})&&(x=Xa(e),E(),D("Entrada eliminada."))}function Yt(e,a){const t=new Blob([a],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(t),o.download=e,o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),1e3)}Oe.addEventListener("click",async e=>{const a=e.target.closest("[data-view]"),t=e.target.closest("[data-action]");if(e.target.closest(".brand")){e.preventDefault(),V(q());return}if(a&&!t){const b=a.dataset.view;if(G&&!window.confirm("Tienes cambios sin guardar. ¿Quieres salir igualmente?"))return;G=!1,_=b,O=!1,_==="diary"&&(S=q()),E(),window.scrollTo({top:0,behavior:"smooth"});return}if(!t)return;const{action:o,date:s,range:n,mini:i,key:r,step:p,habit:m,name:c,word:g,tab:w,quote:f,index:h,layout:k,target:R,val:P,monthly:A}=t.dataset;switch(o){case"menu":O=!O,E();break;case"close-menu":O=!1,E();break;case"toggle-sidebar":La();break;case"archive-tab":Ce=w||"list",E();break;case"stats-tab":te=w||"pulse",E();break;case"profile-tab":je=w||"personal",E();break;case"toggle-more-details":{ce=!ce;const b=document.querySelector("#extras-accordion");b&&(b.classList.toggle("is-open",ce),t.setAttribute("aria-expanded",String(ce)));break}case"quick-number":{const b=document.querySelector(`#${R}`);b&&P!==void 0&&(b.value=P,b.classList.remove("num-bump"),b.offsetWidth,b.classList.add("num-bump"),b.dispatchEvent(new Event("input",{bubbles:!0})));break}case"cycle-theme":{const b=z.findIndex(we=>we.id===u.theme),M=z[(b+1)%z.length];u=Q({theme:M.id}),K(u.theme,u);const y=document.querySelector(".theme-pill > span:last-child"),H=document.querySelector(".topbar-favicon-mini"),U=document.querySelector(".ex-libris-icon");y&&(y.textContent=M.name),H&&(H.innerHTML=Z(u.theme,u)),U&&(U.innerHTML=Z(u.theme,u)),D(`Tema: ${M.name}`);break}case"open-setup-wizard":Vt(1);break;case"dismiss-setup-banner":u=Q({completed:!0}),document.querySelector(".setup-welcome-banner")?.remove();break;case"open-crisis-modal":Da(w||"help");break;case"dismiss-crisis-banner":ze=!0,document.querySelector("#crisis-alert-slot").innerHTML="";break;case"next-daily-word":ta++,Ue(".word-of-day-card");break;case"next-daily-tip":oa++,Ue(".tip-of-day-card");break;case"next-quote":sa++,ya();break;case"save-quote":{if(!f)break;const b=u.savedQuotes||[],M=b.includes(f),y=M?b.filter(H=>H!==f):[f,...b];u=Q({savedQuotes:y}),ya(),D(M?"Frase quitada de tus guardadas":"Frase guardada en tu perfil");break}case"add-custom-quote":{const M=document.querySelector("#new-custom-quote")?.value.trim();if(!M){D("Escribe una frase primero.",!0);break}u=Q({savedQuotes:[M,...u.savedQuotes||[]]}),E(),D("Frase añadida");break}case"remove-saved-quote":{const b=parseInt(h,10),M=(u.savedQuotes||[]).filter((y,H)=>H!==b);u=Q({savedQuotes:M}),E(),D("Frase eliminada");break}case"toggle-focus-writing":{ue=!ue,document.querySelector(".diary-layout")?.classList.toggle("is-focus-writing",ue);break}case"history-layout":{Ee=k||"grid",E();break}case"use-daily-word":{const b=document.querySelector("#wordOfDay");b&&g&&(b.value=g,G=!0,b.dispatchEvent(new Event("input",{bubbles:!0})),b.classList.add("highlight-flash"),setTimeout(()=>b.classList.remove("highlight-flash"),900),Ue(),D(`«${g}» anotada`));break}case"inspire-prompt":{oe=!oe;const b=document.querySelector("#writing-prompt-box");b&&(b.hidden=!oe,b.classList.toggle("is-open",oe));break}case"next-writing-prompt":{Ae++;const b=document.querySelector("#writing-prompt-text");b&&(b.classList.remove("text-swap"),b.offsetWidth,b.textContent=We(S,Ae),b.classList.add("text-swap"));break}case"insert-writing-prompt":{const b=We(S,Ae),M=document.querySelector("#generalDay");if(M){const y=M.value.trim();M.value=y?`${y}

— ${b}
`:`— ${b}
`,M.focus(),M.setSelectionRange(M.value.length,M.value.length),M.dispatchEvent(new Event("input",{bubbles:!0}))}break}case"quick-save":{const b=document.querySelector("#diary-form");b&&b.requestSubmit();break}case"previous":V(j(S,-1),"prev");break;case"next":V(j(S,1),"next");break;case"today":V(q());break;case"open-day":V(s);break;case"read":Jt(s);break;case"delete":Ta(s);break;case"add-goal":document.querySelector("#goals").insertAdjacentHTML("beforeend",Ca()),document.querySelector("#goals .goal-row:last-child input")?.focus(),G=!0;break;case"remove-goal":t.closest(".goal-row").remove(),G=!0;break;case"counter-plus":case"counter-minus":{const b=document.querySelector(`[name="counter_${r}"]`);if(!b)break;const M=o==="counter-plus"?1:-1,y=parseFloat(p)||1,H=Math.min(parseFloat(b.max),Math.max(parseFloat(b.min),(parseFloat(b.value)||0)+M*y));b.value=Math.round(H*10)/10,b.classList.remove("num-bump"),b.offsetWidth,b.classList.add("num-bump"),b.dispatchEvent(new Event("input",{bubbles:!0}));break}case"add-habit":{const M=document.querySelector("#new-habit")?.value.trim();if(!M){D("Escribe un nombre para el hábito.",!0);break}if($.length>=30){D("Máximo 30 hábitos.",!0);break}$=Sa({name:M}),E(),D(`Hábito «${M}» añadido`);break}case"delete-habit":{await _e({title:"¿Eliminar este hábito?",text:`Se quitará «${c}» de tu lista actual.`,confirmLabel:"Eliminar",danger:!0})&&($=at(m),E(),D("Hábito eliminado"));break}case"month-prev":i==="1"?xe=X(xe,-1):I=X(I,-1),E();break;case"month-next":i==="1"?xe=X(xe,1):I=X(I,1),E();break;case"period-prev":A==="1"?I=X(I,-1):S=j(S,-7),E();break;case"period-next":A==="1"?I=X(I,1):S=j(S,7),E();break;case"range":ae=+n,E();break;case"export":case"backup":Yt(`diario-${q()}.json`,tt(x,$,u)),D("Copia descargada");break;case"import":document.querySelector("#import-file").click();break;case"clear":await _e({title:"¿Borrar todos los datos?",text:"Se eliminarán todas las entradas, hábitos y preferencias de este navegador.",confirmLabel:"Borrar todo",danger:!0})&&(et(),na(),S=q(),_="diary",E(),D("Datos eliminados"));break}});Oe.addEventListener("change",e=>{if(e.target.id==="import-file"){const a=e.target.files[0];if(!a)return;const t=new FileReader;t.onload=()=>{try{ee=ot(t.result);const o=$e(`<div class="modal-card">
          <h2>Importar copia</h2>
          <p>El archivo contiene <strong>${ee.entries.length}</strong> ${ee.entries.length===1?"entrada":"entradas"} y <strong>${ee.habits.length}</strong> ${ee.habits.length===1?"hábito":"hábitos"}.</p>
          <div class="modal-actions">
            <button class="button outline" data-modal="cancel">Cancelar</button>
            <button class="button solid" data-modal="confirm">Importar</button>
          </div>
        </div>`);o.onclick=s=>{const n=s.target.closest("[data-modal]")?.dataset.modal;n==="confirm"&&(st(ee),na(),D("Copia importada")),(n||s.target===o)&&(o.close(),E())}}catch(o){D(o.message||"No se ha podido importar el archivo.",!0)}e.target.value=""},t.readAsText(a)}e.target.id==="history-mood"&&(ke=e.target.value,E()),e.target.id==="history-tag"&&(Me=e.target.value,E())});Oe.addEventListener("input",e=>{if(e.target.id==="history-search"){qe=e.target.value;const a=document.activeElement===e.target;if(E(),a){const t=document.querySelector("#history-search");t.focus(),t.setSelectionRange(t.value.length,t.value.length)}}});window.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="b"&&(e.preventDefault(),La())});window.addEventListener("beforeunload",e=>{G&&(e.preventDefault(),e.returnValue="")});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});E();

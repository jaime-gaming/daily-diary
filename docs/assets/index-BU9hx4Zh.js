(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const T=[{value:1,emoji:"😫",label:"Fatal",color:"#a8442c"},{value:2,emoji:"😕",label:"Flojo",color:"#c2743a"},{value:3,emoji:"😐",label:"Normal",color:"#98938a"},{value:4,emoji:"🙂",label:"Bien",color:"#4e6f52"},{value:5,emoji:"🤩",label:"Genial",color:"#254d32"}],Qs=["L","M","X","J","V","S","D"],Jt=["","Muy baja","Baja","Normal","Alta","Muy alta"],Kt=["","Muy bajo","Bajo","Normal","Alto","Muy alto"],_s=["Productivo","Tranquilo","Ajetreado","Social","Solitario","Creativo","Cansado","Motivado","Ansioso","Emocionado","Nostálgico","Aburrido"],ke=[{key:"water",label:"Agua",unit:"vasos",min:0,max:40,step:1,icon:"drop"},{key:"exercise",label:"Ejercicio",unit:"min",min:0,max:1440,step:5,icon:"run"},{key:"reading",label:"Lectura",unit:"min",min:0,max:1440,step:5,icon:"book"},{key:"mindfulness",label:"Pausa consciente",unit:"min",min:0,max:1440,step:5,icon:"leaf"}],Vs=["bestOfDay","differentToday","generalDay","tomorrow","wordOfDay"],Ye=[{id:"teen",min:10,max:18,label:"12 – 18 años",title:"Instituto y descubrimiento",desc:"Pensado para tu ritmo de clases, exámenes, amigos, aficiones y empezar a guardar tu propia historia.",sleepRecommended:8.5,studyRecommended:2,focusLabel:"Horas de estudio",focusQuestion:"¿Cuánto tiempo has dedicado hoy a estudiar, repasar o hacer tareas?",tags:["Clases","Exámenes","Amigos","Deporte","Música","Videojuegos","Tarde libre","Tranquilo","Cansado","Motivado","Creativo","Social"],habits:["Hacer tareas sin mirar el móvil","Leer 15 minutos antes de dormir","Moverme o entrenar un rato","Dejar la mochila lista para mañana","Dejar el móvil fuera de la cama","Salir a tomar el aire"],placeholders:{bestOfDay:"Una risa en clase, una partida con amigos, una canción en el bus, quitarme un examen de encima...",differentToday:"Algo curioso que pasó en el insti, una charla que no esperaba o un plan improvisado...",generalDay:"Cuenta cómo te has sentido hoy de verdad, qué te ha dado rabia, qué te ha hecho gracia...",tomorrow:"Repasar ese tema a tiempo, quedar un rato, acostarme sin quedarme pegado a la pantalla..."}},{id:"young",min:19,max:26,label:"19 – 26 años",title:"Universidad, proyectos y primeros pasos",desc:"Adaptado a años de carrera, primeros trabajos, independencia, amigos y construir tu propio camino.",sleepRecommended:8,studyRecommended:3,focusLabel:"Horas de estudio y foco",focusQuestion:"¿Cuántas horas has dedicado a estudiar, formarte o sacar adelante tus proyectos?",tags:["Productivo","Uni / Trabajo","Amigos","Entreno","Creativo","Tranquilo","Cansado","Motivado","Social","Solitario","Nostálgico","Ajetreado"],habits:["Bloque de estudio sin distracciones","Entrenar o caminar 30 min","Leer 20 páginas","Cocinar algo casero","Sin pantallas 30 min antes de dormir","Ordenar mi mesa al acabar"],placeholders:{bestOfDay:"Un café a media mañana, avanzar de verdad con mis cosas, entrenar, una charla hasta tarde...",differentToday:"Una idea que me vino de repente, alguien con quien coincidí, un cambio de planes...",generalDay:"Escribe para ti cómo ha ido el día, qué tienes en la cabeza y cómo llevas la semana...",tomorrow:"Aprovechar la mañana, quitarme esa tarea pendiente, guardar tiempo para descansar..."}},{id:"adult",min:27,max:49,label:"27 – 49 años",title:"Equilibrio, oficio y vida propia",desc:"Diseñado para compaginar trabajo o proyectos, descanso mental, salud, casa y tiempo de calidad.",sleepRecommended:7.5,studyRecommended:1.5,focusLabel:"Horas de enfoque o aprendizaje",focusQuestion:"¿Cuánto tiempo has dedicado hoy a aprender, leer o avanzar en proyectos propios?",tags:["Enfocado","Tranquilo","Trabajo","Familia","Deporte","Lectura","Cansado","Motivado","Social","Creativo","Desconexión","Ajetreado"],habits:["Cerrar el trabajo a mi hora","Caminar 30 minutos sin prisas","Leer antes de apagar la luz","Estirar espalda y cuello","Beber agua durante la jornada","Media hora sin notificaciones"],placeholders:{bestOfDay:"Una sobremesa tranquila, resolver un asunto pendiente, cerrar el ordenador y desconectar...",differentToday:"Algo que rompió la inercia de la semana o un detalle cotidiano que hoy noté distinto...",generalDay:"Cómo ha ido la jornada, qué energía te queda esta noche y qué necesitas soltar...",tomorrow:"Centrarme en lo prioritario, no llenarme la agenda de más, salir a estirar las piernas..."}},{id:"senior",min:50,max:120,label:"50+ años",title:"Serenidad, bienestar y perspectiva",desc:"Orientado a saborear el ritmo diario, cuidar la salud, los paseos, la lectura y la memoria de lo vivido.",sleepRecommended:7.5,studyRecommended:1,focusLabel:"Tiempo de lectura o dedicación",focusQuestion:"¿Cuánto tiempo has dedicado hoy a la lectura, aprender o cultivar tus aficiones?",tags:["Sereno","Paseo","Lectura","Familia","Naturaleza","Salud","Agradecido","Activo","Creativo","Social","Tranquilo","Nostálgico"],habits:["Paseo matutino al aire libre","Rato de lectura tranquila","Ejercicios de movilidad suave","Llamar o ver a alguien querido","Cuidar el descanso nocturno","Un momento de silencio y calma"],placeholders:{bestOfDay:"La luz de la mañana en el paseo, una buena conversación, avanzar con el libro que estoy leyendo...",differentToday:"Una visita grata, un recuerdo que volvió con nitidez, un paseo por un sitio distinto...",generalDay:"Anota con sosiego cómo ha transcurrido el día y con qué sensación te quedas hoy...",tomorrow:"Salir a caminar temprano, dedicar un rato a la lectura, disfrutar del día sin prisa..."}}],ka=[{id:"reading",label:"Lectura y escritura",icon:"book",habit:"Leer 20 minutos con calma",tag:"Lectura"},{id:"sport",label:"Deporte y movimiento",icon:"run",habit:"Entrenar o moverme 30 min",tag:"Deporte"},{id:"study",label:"Estudio y aprendizaje",icon:"study",habit:"Sesión de estudio sin móvil",tag:"Productivo"},{id:"music",label:"Música, cine y arte",icon:"spark",habit:"Escuchar un álbum o crear algo",tag:"Creativo"},{id:"nature",label:"Naturaleza y aire libre",icon:"leaf",habit:"Salir a caminar al aire libre",tag:"Naturaleza"},{id:"social",label:"Amigos y gente querida",icon:"heart",habit:"Hablar con alguien que quiero",tag:"Social"},{id:"calm",label:"Calma y descanso",icon:"moon",habit:"Apagar pantallas 30 min antes de dormir",tag:"Tranquilo"},{id:"projects",label:"Proyectos personales",icon:"bolt",habit:"Dedicar 30 min a mi propio proyecto",tag:"Enfocado"},{id:"gaming",label:"Tecnología y videojuegos",icon:"target",habit:"Parar a tiempo para descansar la vista",tag:"Desconexión"},{id:"cooking",label:"Cocina y comer bien",icon:"flame",habit:"Preparar una comida casera y tranquila",tag:"Bienestar"}],Je=[{id:"night",label:"Por la noche, al cerrar el día",icon:"moon"},{id:"morning",label:"Por la mañana, con café o té",icon:"sun"},{id:"afternoon",label:"A media tarde, haciendo una pausa",icon:"leaf"},{id:"anytime",label:"Cuando me pide el cuerpo escribir",icon:"pen"}],Ke=[{id:"warm",label:"Cálido y cercano",desc:"Como hablar con un buen amigo en calma"},{id:"literary",label:"Pausado y literario",desc:"Con gusto por las palabras y los detalles"},{id:"direct",label:"Directo y práctico",desc:"Al grano, claro y enfocado en tu día a día"},{id:"gentle",label:"Suave y compasivo",desc:"Especialmente amable para días de cansancio"}],V=[{id:"paper",name:"Papel Clásico",desc:"Cuaderno color crema y tinta estilográfica carbón",colors:["#F3EFE6","#211E17","#B34A2E"],favicon:{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"}},{id:"night",name:"Tinta Nocturna",desc:"Cuero oscuro y trazos cálidos para escribir de noche",colors:["#151412","#EDE6D8","#D96B4E"],favicon:{bg:"#151412",page:"#272420",accent:"#D96B4E",ink:"#EDE6D8"}},{id:"forest",name:"Bosque Sereno",desc:"Encuadernación salvia y papel natural de algodón",colors:["#EBF0EA","#19241D","#356343"],favicon:{bg:"#19241D",page:"#EBF0EA",accent:"#4C8B5E",ink:"#19241D"}},{id:"terracotta",name:"Atardecer Cálido",desc:"Arcilla cocida, papel hueso y acentos ocre",colors:["#F6ECE4","#261B15","#C45534"],favicon:{bg:"#261B15",page:"#F6ECE4",accent:"#C45534",ink:"#261B15"}},{id:"ocean",name:"Azul Atlántico",desc:"Papel marfil frío y tinta azul de cuaderno de viaje",colors:["#EDF2F6","#16222F","#2B5F8C"],favicon:{bg:"#16222F",page:"#EDF2F6",accent:"#2B5F8C",ink:"#16222F"}},{id:"lavender",name:"Bruma Lavanda",desc:"Lino malva suave y tinta ciruela",colors:["#F2EEF6","#221B2B","#6E4B8E"],favicon:{bg:"#221B2B",page:"#F2EEF6",accent:"#6E4B8E",ink:"#221B2B"}}],Zs=[{id:"calm",label:"Calma y desahogo",icon:"leaf",desc:"Soltar el ruido del día y quedarme más tranquilo/a."},{id:"focus",label:"Constancia y hábitos",icon:"study",desc:"Cuidar mi estudio, mi descanso y mis rutinas diarias."},{id:"memory",label:"Guardar mi historia",icon:"book",desc:"Que los meses no pasen sin recordar lo que he vivido."},{id:"growth",label:"Conocerme mejor",icon:"spark",desc:"Ver qué cosas me sientan bien y cuáles me quitan energía."}],Ys=["Leer 20 minutos","Caminar al aire libre","Pausa sin pantallas","Beber 8 vasos de agua","Respirar 5 minutos en calma","Dormir a buena hora","Estirar el cuerpo","Ordenar mi espacio"],kt=[{text:"No todos los días son buenos, pero siempre queda algún rincón que merece la pena guardar.",author:"Nota de cuaderno",tones:["warm","gentle"],ages:["teen","young","adult","senior"]},{text:"Cómo pasamos los días es, al final, cómo pasamos la vida.",author:"Annie Dillard",tones:["literary","direct"],ages:["young","adult","senior"],interests:["reading","projects"]},{text:"Escribir en un diario es hablar contigo sin tener que fingir que todo va perfecto.",author:"Apunte al margen",tones:["direct","warm"],ages:["teen","young","adult"]},{text:"La prisa casi nunca arregla lo que el descanso sí sabe colocar en su sitio.",author:"Cuaderno de calma",tones:["gentle","warm"],ages:["teen","young","adult","senior"],interests:["calm","nature"]},{text:"Un paso corto dado hoy vale más que diez planes perfectos que se quedan para el lunes.",author:"Bitácora personal",tones:["direct"],ages:["teen","young","adult"],interests:["study","sport","projects"]},{text:"Guardar memoria de las cosas pequeñas es la mejor forma de vivir dos veces.",author:"Tradición de lectura",tones:["literary"],ages:["young","adult","senior"],interests:["reading","music"]},{text:"Sé amable con tu propio ritmo: ni los árboles dan fruto todos los meses del año.",author:"Cuaderno de campo",tones:["gentle","literary"],ages:["teen","young","adult","senior"],interests:["nature","calm"]},{text:"Lo que hoy parece un examen gigante o un problema sin salida, dentro de un mes será solo una página pasada.",author:"Nota para días revueltos",tones:["warm","gentle"],ages:["teen","young"],interests:["study","gaming"]}],qt=[{word:"Ataraxia",origin:"Griego clásico",meaning:"Tranquilidad de ánimo que nace cuando dejamos de pelear contra lo que no depende de nosotros.",prompt:"¿Qué preocupación podrías dejar en pausa por esta noche?"},{word:"Meraki",origin:"Griego moderno",meaning:"Hacer algo poniendo el corazón, el cuidado y una parte de ti en ello.",prompt:"¿En qué detalle pequeño de hoy has puesto ganas o cariño?"},{word:"Kintsugi",origin:"Japonés",meaning:"Oficio de reparar la cerámica rota con barniz de oro, sin esconder las grietas.",prompt:"¿Qué tropiezo reciente te ha servido para aprender algo útil?"},{word:"Komorebi",origin:"Japonés",meaning:"La luz del sol cuando se cuela entre las hojas de los árboles.",prompt:"¿Qué imagen o rincón bonito has visto hoy al pasar?"},{word:"Resiliencia",origin:"Latín",meaning:"La capacidad de encajar un golpe, recuperar el aliento y seguir adelante a tu paso.",prompt:"¿Cómo has tirado hacia delante hoy cuando algo se hacía cuesta arriba?"},{word:"Serendipia",origin:"Castellano",meaning:"Eso bueno que te encuentras por casualidad mientras ibas buscando otra cosa.",prompt:"¿Qué momento no planeado ha merecido la pena hoy?"},{word:"Ubuntu",origin:"Zulú · Xhosa",meaning:"La idea de que somos quienes somos gracias también a quienes nos rodean.",prompt:"¿Quién te ha hecho el día un poco más fácil o agradable hoy?"},{word:"Ikigai",origin:"Japonés",meaning:"Aquello que te da un motivo concreto para levantarte por la mañana.",prompt:"¿Qué plan o proyecto te apetece de verdad hacer pronto?"},{word:"Wabi-sabi",origin:"Japonés",meaning:"Gustar de las cosas sencillas, imperfectas y gastadas por la vida real.",prompt:"¿En qué cosa imperfecta de hoy puedes dejar de exigirte tanto?"},{word:"Apapachar",origin:"Náhuatl",meaning:"Dar abrigo y consuelo de verdad; cuidar con cercanía.",prompt:"¿Qué necesitas hoy para descansar a gusto?"},{word:"Sosiego",origin:"Castellano",meaning:"Ese silencio tranquilo que queda cuando por fin se acaba la prisa del día.",prompt:"¿En qué momento del día has notado más calma hoy?"},{word:"Epifanía",origin:"Griego",meaning:"Caer en la cuenta de golpe de algo que llevabas tiempo viendo sin entender.",prompt:"¿De qué cosa te has dado cuenta hoy?"},{word:"Bonhomía",origin:"Castellano",meaning:"Trato llano, honesto y amable que no necesita aparentar nada.",prompt:"¿Qué gesto sencillo de amabilidad has visto o tenido hoy?"},{word:"Nefelibata",origin:"Castellano",meaning:"Persona que de vez en cuando camina por las nubes y mira el mundo a su manera.",prompt:"¿En qué se te ha ido el santo al cielo hoy?"},{word:"Templanza",origin:"Latín",meaning:"Guardar el equilibrio y no perder los papeles cuando alrededor hay ruido.",prompt:"¿En qué situación de hoy has sabido mantener la calma?"},{word:"Alba",origin:"Latín",meaning:"La primera claridad de la mañana antes de que asome el sol.",prompt:"¿Cómo te gustaría empezar la mañana de mañana?"},{word:"Saudade",origin:"Portugués",meaning:"Echar de menos con cariño a alguien o a una época en la que fuiste feliz.",prompt:"¿Qué buen recuerdo te ha venido hoy a la cabeza?"},{word:"Lagom",origin:"Sueco",meaning:"Ni de más ni de menos: saber cuándo algo es ya suficiente.",prompt:"¿Con qué cosa de hoy puedes decir tranquilo/a «por hoy ya está bien»?"},{word:"Sisu",origin:"Finés",meaning:"Empuje tranquilo para terminar lo que empezaste aunque estés cansado.",prompt:"¿Qué cosa has sacado adelante hoy aunque te diera pereza?"},{word:"Hygge",origin:"Danés",meaning:"Estar a gusto en lo cotidiano: una charla tranquila, una manta, un rato en casa.",prompt:"¿Qué momento sencillo del día te ha sentado mejor?"},{word:"Querencia",origin:"Castellano",meaning:"El sitio o la gente a la que uno siempre tiene ganas de volver.",prompt:"¿Dónde o con quién te sientes más cómodo/a últimamente?"},{word:"Claridad",origin:"Latín",meaning:"Distinguir lo que de verdad importa de lo que solo hace ruido.",prompt:"Si te quedas con una sola cosa de hoy, ¿cuál eliges?"},{word:"Amparo",origin:"Latín",meaning:"Tener un lugar o una persona donde resguardarse cuando el día se tuerce.",prompt:"¿Qué te reconforta cuando tienes un día torcido?"},{word:"Gratitud",origin:"Latín",meaning:"No dar por supuesto lo bueno que tenemos cerca cada día.",prompt:"¿Qué cosa normal de tu rutina agradecerías si mañana faltara?"}],Mt=[{category:"Autocompasión",title:"No te hables peor que a un amigo",tip:"Cuando estás cansado o algo sale regular, es fácil machacarse. Prueba a decirte exactamente lo que le dirías a alguien a quien aprecias.",action:"Anota algo que hoy hayas hecho lo mejor que podías.",icon:"heart",ages:["teen","young","adult","senior"],interests:["calm","social"]},{category:"Descanso",title:"Bajar el brillo antes de acostarte",tip:"Dejar el móvil o las pantallas un rato antes de meterte en la cama ayuda a que la cabeza deje de saltar de un tema a otro.",action:"Pon la alarma y deja el teléfono lejos de la almohada.",icon:"moon",ages:["teen","young","adult","senior"],interests:["calm","gaming"]},{category:"Calma",title:"Soltar el aire más despacio",tip:"Cuando notes prisa o nudo en el estómago, toma aire contando 4 y suéltalo despacio contando 6. El cuerpo entiende enseguida el mensaje.",action:"Respira hondo tres veces antes de cerrar el cuaderno.",icon:"leaf",ages:["teen","young","adult","senior"],interests:["calm","nature"]},{category:"Enfoque",title:"La regla de los primeros cinco minutos",tip:"Casi siempre cuesta más ponerse que hacerlo. Ponte solo 5 minutos con eso que estás posponiendo; luego decides si sigues.",action:"Deja escrita una sola tarea concreta para mañana.",icon:"study",ages:["teen","young","adult"],interests:["study","projects"]},{category:"Escritura",title:"Aquí nadie te va a poner nota",tip:"No hace falta escribir bonito ni llenar la página. Tres líneas sinceras sobre lo que te ha pasado hoy bastan.",action:"Escribe lo primero que te salga sin borrar.",icon:"pen",ages:["teen","young","adult","senior"],interests:["reading"]},{category:"Hábitos",title:"Un día suelto no rompe nada",tip:"Si ayer no pudiste cumplir un hábito, no pasa nada. Lo que cuenta es retomarlo hoy con naturalidad y sin culpa.",action:"Empieza por el hábito más fácil de tu lista.",icon:"flame",ages:["teen","young","adult","senior"],interests:["projects","sport"]},{category:"Bienestar",title:"A veces el cansancio es sed",tip:"Gran parte del embotamiento de media tarde viene de llevar horas sin beber agua mientras estudias o trabajas.",action:"Ten un vaso o botella a mano mañana por la mañana.",icon:"drop",ages:["teen","young","adult","senior"],interests:["sport","study","cooking"]},{category:"Calma",title:"Sacar el ruido de la cabeza al papel",tip:"Cuando una preocupación da vueltas en bucle, escribirla en una frase la vuelve manejable y libera espacio mental.",action:"Apunta qué te preocupa hoy y qué parte sí está en tu mano.",icon:"book",ages:["teen","young","adult","senior"],interests:["reading","calm"]},{category:"Movimiento",title:"Caminar también ordena las ideas",tip:"Quince minutos andando sin mirar el teléfono despejan más la mente que media hora intentando concentrarse a la fuerza.",action:"Sal a dar una vuelta corta mañana cuando te satures.",icon:"run",ages:["teen","young","adult","senior"],interests:["sport","nature"]},{category:"Estudio y memoria",title:"Lo que estudias se fija mientras duermes",tip:"Quitarle horas al sueño para estudiar a última hora suele salir caro: el cerebro consolida lo aprendido durante el descanso.",action:"Prioriza dormir bien hoy para rendir mejor mañana.",icon:"study",ages:["teen","young"],interests:["study"]},{category:"Equilibrio",title:"Cerrar la jornada de verdad",tip:"Tener un pequeño ritual al terminar tus obligaciones —recoger la mesa, ducharte o salir a caminar— separa el deber del descanso.",action:"Elige a qué hora vas a desconectar mañana.",icon:"sun",ages:["young","adult"],interests:["projects","calm"]},{category:"Perspectiva",title:"Cuidar el contacto con los tuyos",tip:"A veces un mensaje corto o una llamada de cinco minutos a alguien que quieres cambia por completo el tono de la semana.",action:"Piensa en alguien con quien te apetezca hablar mañana.",icon:"heart",ages:["teen","young","adult","senior"],interests:["social"]}],Et=["¿Qué rato de hoy te ha dejado buen sabor de boca, aunque haya sido breve?","¿Qué te ha dado más pereza o respeto hoy y cómo lo has llevado?","¿Qué conversación, canción o momento tranquilo te ha acompañado hoy?","¿Qué te gustaría quitarte de la cabeza antes de apagar la luz?","Si un amigo hubiera tenido exactamente tu día de hoy, ¿qué le dirías?","¿En qué momento del día te has sentido más cómodo/a siendo tú?","¿Qué detalle pequeño de hoy no querrías que se te olvidara dentro de un año?","¿Cómo notas el cuerpo esta noche: cansado, inquieto, ligero, tranquilo?","¿Qué cosa sencilla ha salido mejor de lo que esperabas esta mañana?","¿Qué necesitas mañana para que sea un día llevadero y amable?"],Js=[{number:"024",tel:"tel:024",name:"Línea 024 · Atención a la conducta suicida",detail:"Ministerio de Sanidad (España) · Gratuita, confidencial, anónima y abierta las 24 horas.",primary:!0},{number:"717 003 717",tel:"tel:717003717",name:"Teléfono de la Esperanza",detail:"Escucha y apoyo emocional en momentos de crisis · 24 horas todos los días.",primary:!0},{number:"900 20 20 10",tel:"tel:900202010",name:"Fundación ANAR (Menores y jóvenes)",detail:"Atención gratuita, confidencial y 24h para jóvenes y adolescentes. No deja rastro en la factura.",primary:!1,youth:!0},{number:"112",tel:"tel:112",name:"Emergencias 112",detail:"Atención inmediata de urgencia sanitaria o seguridad · 24 horas.",primary:!1}];function b(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function qe(e){return new Date(`${e}T12:00:00`)}function A(e,a){const t=qe(e);return t.setDate(t.getDate()+a),b(t)}function Y(e,a){return Math.round((Date.UTC(...a.split("-").map((t,s)=>+t-(s===1?1:0)))-Date.UTC(...e.split("-").map((t,s)=>+t-(s===1?1:0))))/864e5)}function sa(e,a){const t=[e,...a.map(s=>s.date)].sort()[0];return Y(t,e)+1}function L(e,a={weekday:"long",day:"numeric",month:"long",year:"numeric"}){return qe(e).toLocaleDateString("es-ES",a)}function he(e){const a=qe(e).getDay();return A(e,-((a+6)%7))}function Xt(e){const a=qe(e);return[b(new Date(a.getFullYear(),a.getMonth(),1)),b(new Date(a.getFullYear(),a.getMonth()+1,0))]}function Ee(e,a){const t=qe(e);return b(new Date(t.getFullYear(),t.getMonth()+a,1))}function Ks(e){const[a,t]=Xt(e),s=A(a,-((qe(a).getDay()+6)%7)),o=Math.ceil((Y(s,t)+1)/7)*7;return Array.from({length:o},(n,r)=>({date:A(s,r),inMonth:A(s,r).slice(0,7)===e.slice(0,7)}))}const q=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e);function Q(e){const a=e.filter(t=>Number.isFinite(t));return a.length?a.reduce((t,s)=>t+s,0)/a.length:0}function X(e,a,t){return e.filter(s=>s.date>=a&&s.date<=t).sort((s,o)=>s.date.localeCompare(o.date))}function es(e){let a=0,t=0,s;for(const o of[...new Set(e.map(n=>n.date))].sort())t=s&&Y(s,o)===1?t+1:1,a=Math.max(a,t),s=o;return a}function as(e,a=b()){const t=new Set(e.map(n=>n.date));let s=t.has(a)?a:A(a,-1),o=0;for(;t.has(s);)o++,s=A(s,-1);return o}function ve(e){const a=[e.bestOfDay,e.differentToday,e.generalDay,e.tomorrow,...e.gratitude||[]].join(" ").trim();return a?a.split(/\s+/).length:0}function Xs(e){return e.reduce((a,t)=>a+ve(t),0)}function At(e,a){return e.filter(t=>t.habits?.[a]).length}function ts(e,a){return[...new Set(e.filter(t=>t.habits?.[a]).map(t=>t.date))].sort()}function ss(e,a){const t=ts(e,a);let s=0,o=0,n;for(const r of t)o=n&&Y(n,r)===1?o+1:1,s=Math.max(s,o),n=r;return s}function qa(e,a,t=b()){const s=new Set(ts(e,a));if(!s.size)return 0;let o=s.has(t)?t:A(t,-1),n=0;for(;s.has(o);)n++,o=A(o,-1);return n}function os(e,a,t=28,s=b()){const o=A(s,1-t),n=e.filter(p=>p.habits?.[a]&&p.date>=o&&p.date<=s).length,r=e.filter(p=>p.date>=o&&p.date<=s).length,i=Math.min(t,Y(o,s)+1);return{done:n,tracked:r,window:i,pct:i?Math.round(n/i*100):0}}function eo(e,a,t=28,s=b(),o=b()){const n=Array.from({length:t},(i,p)=>A(s,p-t+1)),r=new Map(e.map(i=>[i.date,i]));return{dates:n,rows:a.map(i=>({habit:i,cells:n.map(p=>({date:p,done:!!r.get(p)?.habits?.[i.id],future:p>o,recorded:r.has(p)}))}))}}function Lt(e){const a=new Map;for(const t of e)for(const s of t.tags||[])a.set(s,(a.get(s)||0)+1);return[...a.entries()].sort((t,s)=>s[1]-t[1])}function ye(e){const a=[...e].sort((s,o)=>s.date.localeCompare(o.date)),t=s=>a.reduce((o,n)=>!o||n[s]>o[s]?n:o,null);return{count:e.length,mood:Q(e.map(s=>s.mood)),energy:Q(e.map(s=>s.energy)),stress:Q(e.map(s=>s.stress)),sleep:Q(e.map(s=>s.sleepHours)),study:Q(e.map(s=>s.studyHours)),totalSleep:e.reduce((s,o)=>s+o.sleepHours,0),totalStudy:e.reduce((s,o)=>s+o.studyHours,0),words:Xs(e),best:t("mood"),worst:a.reduce((s,o)=>!s||o.mood<s.mood?o:s,null),mostStudy:t("studyHours"),mostSleep:t("sleepHours"),maxStreak:es(e),moods:[1,2,3,4,5].map(s=>e.filter(o=>o.mood===s).length),counters:Object.fromEntries(ke.map(s=>[s.key,{total:e.reduce((o,n)=>o+(n.counters?.[s.key]||0),0),average:Q(e.map(o=>o.counters?.[s.key]))}]))}}function ns(e){return e<6?"Has dormido poco.":e<7?"Una cantidad algo baja.":e<=9?"Un descanso razonable.":"Has dormido bastante."}function ao(e){return e===0?"Hoy no has dedicado tiempo al estudio.":e<1?"Has hecho un poco de estudio.":e<3?"Has tenido una sesión de estudio considerable.":e<5?"Has dedicado bastante tiempo.":"Ha sido un día de estudio intenso."}function Ma(e,a){switch(e){case"water":return a===0?"Sin registrar agua hoy.":a<4?"Poca agua registrada.":a<8?"Una hidratación razonable.":"Buen nivel de hidratación.";case"exercise":return a===0?"Sin ejercicio registrado hoy.":a<20?"Un poco de movimiento.":a<60?"Una sesión de ejercicio notable.":"Un día muy activo.";case"reading":return a===0?"Sin lectura registrada hoy.":a<20?"Unas páginas para hoy.":a<60?"Una buena sesión de lectura.":"Un día de mucha lectura.";default:return a===0?"Sin pausa consciente registrada.":a<10?"Un momento de pausa.":a<30?"Una práctica considerable.":"Una práctica muy constante hoy."}}const to=["","Hoy ha sido un día difícil.","Hoy ha sido un día flojo.","Hoy ha sido un día normal.","Hoy ha sido un día bueno.","Hoy ha sido un día genial."];function so(e){const a=[to[e.mood],`Has dormido ${q(e.sleepHours)} horas y has dedicado ${q(e.studyHours)} horas al estudio.`,ns(e.sleepHours),ao(e.studyHours)];e.energy&&a.push(`Tu energía se ha sentido ${["","muy baja","baja","normal","alta","muy alta"][e.energy].toLowerCase()}.`),e.stress&&a.push(`El estrés ha sido ${["","muy bajo","bajo","normal","alto","muy alto"][e.stress].toLowerCase()}.`);const t=Object.values(e.habits||{}).filter(Boolean).length;t&&a.push(`Has cumplido ${t} de tus hábitos de hoy.`);const s=e.counters?.water||0;return s>=6&&a.push(`Además, has bebido ${s} vasos de agua.`),a.join(" ")}function oo(e,a=!1){if(!e.count)return"Aún no hay entradas en este período.";const t=a?`Durante este mes has registrado ${e.count} ${e.count===1?"día":"días"}. Tu valoración media ha sido de ${q(e.mood)}/5. Has estudiado un total de ${q(e.totalStudy)} horas y tu media de sueño ha sido de ${q(e.sleep)} horas.`:`Esta semana has registrado ${e.count} ${e.count===1?"día":"días"}. Tu estado medio ha sido ${["","difícil","flojo","normal","bueno","genial"][Math.round(e.mood)]}. Has dormido una media de ${q(e.sleep)} horas y estudiado ${q(e.study)} horas por día registrado.`,s=[];return Number.isFinite(e.energy)&&s.push(`Tu energía media ha sido ${q(e.energy)}/5`),Number.isFinite(e.stress)&&s.push(`el estrés medio ${q(e.stress)}/5`),e.words&&s.push(`has escrito ${q(e.words)} palabras`),s.length?`${t} ${s.join(", ")}.`:t}function no(e,a=b()){const t=X(e,A(a,-6),a),s=X(e,A(a,-13),A(a,-7)),o=[];if(t.length>=3&&s.length>=3){const u=ye(t),g=ye(s);u.sleep<g.sleep-.3&&o.push("Tu cantidad media de sueño ha disminuido respecto a los 7 días anteriores."),u.sleep>g.sleep+.3&&o.push("En tus registros, has dormido más que en los 7 días anteriores."),u.study>g.study+.3&&o.push("Has aumentado tus horas medias de estudio respecto a los 7 días anteriores."),u.study<g.study-.3&&o.push("Tu tiempo medio de estudio ha disminuido respecto a los 7 días anteriores."),u.mood>g.mood+.2&&o.push("Tu valoración diaria ha mejorado recientemente."),u.mood<g.mood-.2&&o.push("Tu valoración diaria ha bajado respecto a los 7 días anteriores."),Number.isFinite(u.energy)&&Number.isFinite(g.energy)&&(u.energy>g.energy+.2&&o.push("Se observa una tendencia al alza en tu energía."),u.energy<g.energy-.2&&o.push("Tu energía media ha bajado respecto a la semana anterior.")),Number.isFinite(u.stress)&&Number.isFinite(g.stress)&&u.stress>g.stress+.2&&o.push("Tu estrés medio ha subido respecto a la semana anterior. Quizá convenga cuidar tus ratos de pausa."),o.length||o.push("Tus medias se han mantenido bastante estables respecto a los 7 días anteriores.")}const n=X(e,A(a,-29),a),r=n.filter(u=>u.sleepHours>7),i=n.filter(u=>u.sleepHours<=7);r.length>=3&&i.length>=3&&Q(r.map(u=>u.mood))>Q(i.map(u=>u.mood))+.3&&o.push("En tus registros de los últimos 30 días, dormir más de 7 horas parece coincidir con una valoración más alta. Es una relación entre registros, no una causa demostrada.");const p=n.filter(u=>(u.counters?.exercise||0)>=20),c=n.filter(u=>(u.counters?.exercise||0)<20);return p.length>=3&&c.length>=3&&Q(p.map(u=>u.mood))>Q(c.map(u=>u.mood))+.3&&o.push("En tus registros, los días con 20 minutos o más de ejercicio suelen tener una valoración algo más alta. Parece coincidir, sin más."),o}const De=29.530588853,ro="2000-01-06",Dt=2.5,ya=[{id:"shore",label:"A la orilla",desc:"Muy cerca: vuelve en cuanto suba la marea.",min:2,max:7,chance:.94,miles:9,reach:"se ve desde la arena"},{id:"breeze",label:"Brisa costera",desc:"Un par de semanas dando tumbos por la bahía.",min:9,max:28,chance:.8,miles:17,reach:"cruza la bahía"},{id:"current",label:"Corriente del norte",desc:"Semanas de travesía; ya no se ve desde la playa.",min:28,max:80,chance:.63,miles:34,reach:"dobló el cabo"},{id:"deep",label:"Alta mar",desc:"Meses lejos. Puede que no vuelva nunca.",min:80,max:240,chance:.42,miles:58,reach:"más allá del mapa"}],io=["la corriente del Golfo","el Noroeste","los Alisios","la deriva de Levante","el canal viejo","la corriente fría","el remolino de poniente","la resaca del faro"],$a=[{id:"amber",name:"ámbar",hex:"#B4762E"},{id:"green",name:"verde botella",hex:"#3E6B4F"},{id:"blue",name:"azul cobalto",hex:"#3B5F86"},{id:"smoke",name:"humo",hex:"#6E6257"},{id:"rose",name:"rosa viejo",hex:"#A65B4E"},{id:"clear",name:"cristal",hex:"#7F8E93"}],jt={near:["aún se divisa desde la orilla","rebota en la rompiente, perezosa","a un par de brazas de la arena"],mid:["cruza la bahía con la marea","dobló el cabo al atardecer","navega entre barcos que no se detienen","persigue una bandada de gaviotas"],far:["en aguas que ya no consultas","se perdió de vista hace días","anda más lejos que tu última carta","viaja con los barcos lentos"],home:["la rompiente la devolvió a tu playa","apareció entre las algas al amanecer","el mar te la dejó en los pies","volvió, con la arena pegada al cristal"],lost:["se hundió despacio, sin testigos","el mar se la quedó para siempre","se fue a pique antes de tocar tierra","nadie la vio llegar a ninguna orilla"]};function tt(e=""){let a=2166136261;const t=String(e);for(let s=0;s<t.length;s++)a^=t.charCodeAt(s),a=Math.imul(a,16777619);return a>>>0}function rs(e=0){let a=e>>>0;return()=>{a=a+1831565813>>>0;let t=Math.imul(a^a>>>15,1|a);return t=t+Math.imul(t^t>>>7,61|t)^t>>>0,((t^t>>>14)>>>0)/4294967296}}const Ue=(e,a)=>(e%a+a)%a,Ct=(e,a)=>e[Math.floor(a()*e.length)%e.length],lo=["luna nueva","luna creciente","cuarto creciente","gibosa creciente","luna llena","gibosa menguante","cuarto menguante","luna menguante"],Be=e=>Math.min(1,Math.max(0,e));function co(e=b()){return Ue(Y(ro,e)+.765,De)}function st(e=b()){const a=co(e),t=De/2,s=Math.min(Ue(a,t),t-Ue(a,t)),o=a<t;let n="swell",r="Marea en movimiento",i=.6;s<=Dt?(n="spring",r="Marea viva",i=1):Math.abs(Ue(a,t)-t/2)<=Dt?(n="neap",r="Marea muerta",i=.28):o?(n="rising",r="Marea creciente",i=.7):(n="falling",r="Marea menguante",i=.5);const p=Be((1-Math.cos(2*Math.PI*a/De))/2),c=lo[Math.floor(Ue(a+De/16,De)/(De/8))%8];return{age:a,key:n,name:r,strength:i,rising:o,illum:p,moon:Math.round(p*100)/100,phase:c}}function uo(e=b()){return st(e).key==="spring"}function po(e,a=16){for(let t=0;t<=a;t++){const s=A(e,t);if(uo(s))return s}return e}const la=[{id:"calm",label:"mar en calma",short:"calma",desc:"Agua plana: la botella avanza despacio, pero no se pierde de vista.",speed:.82,push:0,water:.34,rough:0},{id:"haze",label:"bruma",short:"bruma",desc:"Niebla espesa: se pierde la referencia de la orilla algún día más.",speed:.92,push:1,water:.3,rough:.25},{id:"wind",label:"viento a favor",short:"viento",desc:"Sopla hacia fuera y hacia casa: la travesía se acelera.",speed:1.24,push:0,water:.58,rough:.5},{id:"rain",label:"lluvia",short:"lluvia",desc:"Llueve sobre el agua: corrientes revueltas, llegadas inciertas.",speed:1.05,push:1,water:.66,rough:.62},{id:"gale",label:"temporal",short:"temporal",desc:"Con este mar no entra nada en la bahía: la botella espera fuera.",speed:1.42,push:2,water:.92,rough:1}],Ua=[{id:"levante",label:"levante"},{id:"poniente",label:"poniente"},{id:"noroeste",label:"el noroeste"},{id:"gallego",label:"el gallego"},{id:"suroeste",label:"suroeste"},{id:"mistral",label:"el mistral"},{id:"libeccio",label:"libeccio"},{id:"gregal",label:"gregal"}],Tt=new Set(["levante","el mistral","gregal","suroeste"]);function is(e=b()){const a=rs(tt(`parte|${e}`)),t=a(),s=a(),o=a(),n=Math.min(la.length-1,Math.floor(Math.pow(t,1.7)*la.length)),r=la[n],i=Ua[Math.floor(s*Ua.length)%Ua.length],p=Math.round(4+o*12+r.rough*38),c=st(e);return{date:e,weather:r,wind:{...i,kmh:p,offshore:Tt.has(i.id)},level:Be(r.water*.7+c.strength*.42),rough:Be(r.rough*.72+(c.strength-.5)*.4),speed:r.speed,push:Tt.has(i.id)?r.push+1:r.push,tide:c}}function mo(e){return Be(.05+Be(e)*.86)}function ot(e="breeze"){return ya.find(a=>a.id===e)||ya.find(a=>a.id==="breeze")}function ho({text:e="",castAt:a=b(),sea:t="breeze",id:s=""}={}){const o=ot(t),n=rs(tt(`${a}|${o.id}|${s}|${String(e).trim().slice(0,220)}`)),r=n(),i=n(),p=n(),c=n(),u=is(a),g=Math.max(1,Math.round(o.min+r*(o.max-o.min))),$=i<o.chance,M=Math.max(4,Math.round(o.miles*(.7+p*.6)*u.speed)),f=A(a,g),E=u.push>0?A(f,u.push):f,B=$?po(E):f,I=Math.max(3,Math.round(g*.22));return{sea:o.id,returns:$,speed:M,driftDays:Math.max(1,Y(a,B)),arriveOn:B,lostOn:$?null:A(a,g+I),current:Ct(io,n),glass:Ct($a,n),mottoSeed:Math.floor(c*1e6),weather:u.weather.id,wind:u.wind.label,windSpeed:u.wind.kmh,push:u.push}}function go(e,a=b()){return Math.max(0,Y(e.castAt,a))}function Ea(e,a=b()){return e.status&&e.status!=="drifting"?e.status:e.returns?a>=(e.arriveOn||e.castAt)?"returned":"drifting":e.lostOn&&a>=e.lostOn?"lost":"drifting"}function bo(e,a=b()){if(!e||typeof e!="object")return e;const t=Ea(e,a);if(t===e.status)return e;const s=new Date().toISOString();return t==="returned"?{...e,status:"returned",returnedAt:e.arriveOn||b(),seen:!1,updatedAt:s}:t==="lost"?{...e,status:"lost",lostAt:e.lostOn||b(),seen:!1,updatedAt:s}:e}function fo(e){return!e.returns&&e.lostOn?e.lostOn:e.arriveOn||e.castAt}function Aa(e,a=b()){const t=fo(e),s=Math.max(1,Y(e.castAt,t)),o=go(e,a),n=Ea(e,a),r=n==="drifting"?Be(o/s):1,i=Math.round(o*(e.speed||10)),p=n==="drifting"&&!e.returns?null:Math.max(0,s-o)*(e.speed||10);return{fate:n,pct:r,atSea:o,total:s,horizon:t,miles:i,milesHome:p===null?null:Math.round(p),label:n==="drifting"?`día ${o} de ${s}`:n==="returned"?"de vuelta a casa":"a pique",phase:n==="returned"?"home":n==="lost"?"lost":r<.18?"near":r<.62?"mid":"far"}}function nt(e,a=b()){const{phase:t}=Aa(e,a),s=jt[t]||jt.mid,o=tt(`${e.id||""}|${e.mottoSeed||0}|${t}`);return s[o%s.length]}function La(e=[],a=b()){const t={drifting:[],returned:[],lost:[],kept:[]};for(const s of e)t[Ea(s,a)]?.push(s);t.kept=e.filter(s=>s.kept),t.drifting.sort((s,o)=>s.castAt.localeCompare(o.castAt));for(const s of["returned","lost"])t[s].sort((o,n)=>String(n.returnedAt||n.lostAt||n.castAt).localeCompare(String(o.returnedAt||o.lostAt||o.castAt)));return t.returned.sort((s,o)=>(s.seen===!0)-(o.seen===!0)||String(o.returnedAt||"").localeCompare(String(s.returnedAt||""))),t.kept.sort((s,o)=>String(o.keptOn||"").localeCompare(String(s.keptOn||""))),t}function Da(e=[],a=b()){return e.filter(t=>Ea(t,a)==="returned")}function vo(e=""){const a=String(e||"").trim();return a?a.split(/\s+/).length:0}const rt="diario.entries.v1",it="diario.habits.v1",lt="diario.setup.v1",ja="diario.thoughts.v1",W={completed:!1,name:"",age:null,ageGroup:"young",interests:[],ritual:"night",tone:"warm",savedQuotes:[],purpose:"calm",motto:"Un día a la vez.",theme:"paper",sleepGoal:7.5,studyGoal:2,waterGoal:8,showDailyWord:!0,showDailyTip:!0,crisisAlertsEnabled:!0,trustedContactName:"",trustedContactPhone:"",sidebarCollapsed:!1,updatedAt:null};function Ca(e,a="young"){const t=Number(e);return!Number.isFinite(t)||t<=0?a:t<=18?"teen":t<=26?"young":t<=49?"adult":"senior"}function ge(e,a){if(typeof e!="string")throw new Error(`${a} debe ser texto.`);if(e.length>2e4)throw new Error(`${a} debe tener como máximo 20.000 caracteres.`);return e}function yo(e,a){const t=ke.find(o=>o.key===a);if(e==null||e==="")return 0;const s=Number(e);if(!Number.isFinite(s)||s<t.min||s>t.max)throw new Error(`${t.label} debe estar entre ${t.min} y ${t.max}.`);return Math.round(s*10)/10}function Ht(e){if(e==null||e==="")return null;const a=Number(e);if(!Number.isInteger(a)||a<1||a>5)throw new Error("Las escalas van de 1 a 5.");return a}function Ta(e){if(!e||typeof e!="object"||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(new Date(e.date+"T12:00:00").getTime())||b(new Date(e.date+"T12:00:00"))!==e.date)throw new Error("Hay una fecha no válida.");if(e.date>b())throw new Error("No se pueden registrar días futuros.");if(!Number.isInteger(e.mood)||e.mood<1||e.mood>5)throw new Error("Selecciona cómo te ha ido el día.");for(const r of["sleepHours","studyHours"]){const i=e[r];if(typeof i!="number"||!Number.isFinite(i)||i<0||i>24)throw new Error("Las horas deben estar entre 0 y 24.")}const a=Object.fromEntries(Vs.map(r=>[r,ge(e[r]??"",r)]));if(!a.generalDay.trim())throw new Error("Escribe cómo ha ido tu día en general.");const t=ge(e.capsule??"","La cápsula del día").slice(0,300);if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(r=>typeof r!="string"||r.length>2e4))throw new Error("El agradecimiento debe tener tres campos de texto.");if(e.goals!==void 0&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(r=>typeof r!="string"||r.length>500)))throw new Error("La lista de objetivos no es válida.");const s=Array.isArray(e.tags)?e.tags:[];if(s.length>20)throw new Error("Puedes elegir como máximo 20 etiquetas.");for(const r of s)if(typeof r!="string"||!r.trim()||r.length>40)throw new Error("Hay una etiqueta no válida.");const o={};for(const r of ke)o[r.key]=yo(e.counters?.[r.key],r.key);const n={};if(e.habits!==void 0&&(typeof e.habits!="object"||e.habits===null||Array.isArray(e.habits)))throw new Error("Los hábitos no son válidos.");for(const[r,i]of Object.entries(e.habits||{}))typeof r=="string"&&r.length<=60&&(n[r]=i===!0);return{id:typeof e.id=="string"?e.id:crypto.randomUUID(),date:e.date,mood:e.mood,sleepHours:e.sleepHours,studyHours:e.studyHours,energy:Ht(e.energy),stress:Ht(e.stress),...a,capsule:t,gratitude:e.gratitude.map(r=>ge(r??"","El agradecimiento")),goals:(e.goals||[]).map(r=>ge(r,"Un objetivo")),tags:[...new Set(s.map(r=>r.trim()))],counters:o,habits:n,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function dt(e){const a=e.map(Ta).sort((t,s)=>t.date.localeCompare(s.date));return a.map(t=>({...t,dayNumber:sa(t.date,a)}))}function Ha(){const e=localStorage.getItem(rt);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se han podido leer tus entradas.");return dt(a)}function ct(e){const a=dt(e);return localStorage.setItem(rt,JSON.stringify(a)),a}function ls(e){const a=Ta(e);a.updatedAt=new Date().toISOString();const t=Ha();return ct([...t.filter(s=>s.date!==a.date),a])}function $o(e){return ct(Ha().filter(a=>a.date!==e))}function wo(){localStorage.removeItem(rt),localStorage.removeItem(it),localStorage.removeItem(lt),localStorage.removeItem(ja)}function Fe(e){if(!e||typeof e!="object")throw new Error("Hábito no válido.");const a=ge(e.name??"","El nombre del hábito").trim();if(!a)throw new Error("El hábito necesita un nombre.");if(a.length>40)throw new Error("El nombre del hábito debe tener 40 caracteres o menos.");return{id:typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),name:a,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString()}}function oa(){const e=localStorage.getItem(it);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se han podido leer tus hábitos.");return a.map(Fe)}function ut(e){const a=e.map(Fe);return localStorage.setItem(it,JSON.stringify(a)),a}function wa(e){const a=Fe(e),t=oa();return ut([...t.filter(s=>s.id!==a.id),a])}function So(e){return ut(oa().filter(a=>a.id!==e))}const xo=new Set(ya.map(e=>e.id)),ko=new Set(la.map(e=>e.id)),qo=new Set($a.map(e=>e.id)),Mo=new Set(["drifting","returned","lost"]);function Ae(e){return typeof e=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e)}function ze(e){if(!e||typeof e!="object")throw new Error("El pensamiento no es válido.");const a=ge(e.text??"","El pensamiento").trim().slice(0,1200);if(!a)throw new Error("Escribe un pensamiento antes de echar la botella al mar.");const t=Ae(e.castAt)&&e.castAt<=b()?e.castAt:b(),s=xo.has(e.sea)?e.sea:"breeze",o=Number.isInteger(e.mood)&&e.mood>=1&&e.mood<=5?e.mood:null,n=typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),r=Number.isInteger(e.driftDays)&&Ae(e.arriveOn)?{returns:e.returns===!0,speed:Number.isFinite(e.speed)?Math.max(1,Math.round(e.speed)):10,driftDays:Math.max(1,e.driftDays),arriveOn:e.arriveOn,lostOn:Ae(e.lostOn)?e.lostOn:null,current:typeof e.current=="string"?e.current.slice(0,60):"",mottoSeed:Number.isFinite(e.mottoSeed)?Math.round(e.mottoSeed):0,weather:ko.has(e.weather)?e.weather:null,wind:typeof e.wind=="string"?e.wind.slice(0,24):"",windSpeed:Number.isFinite(e.windSpeed)?Math.max(0,Math.round(e.windSpeed)):null,push:Number.isInteger(e.push)?Math.max(0,Math.min(4,e.push)):0}:ho({text:a,castAt:t,sea:s,id:n});return{id:n,text:a,castAt:t,mood:o,sea:s,...r,status:Mo.has(e.status)?e.status:"drifting",glass:qo.has(e.glass)?e.glass:"amber",returnedAt:Ae(e.returnedAt)?e.returnedAt:null,lostAt:Ae(e.lostAt)?e.lostAt:null,reply:ge(e.reply??"","La respuesta").trim().slice(0,1200),kept:!!e.kept,keptOn:Ae(e.keptOn)?e.keptOn:null,seen:e.seen===!0,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function Na(e){const a=b(),t=e.map(ze).map(s=>s.castAt>a?{...s,castAt:a}:s).sort((s,o)=>s.castAt.localeCompare(o.castAt)||s.id.localeCompare(o.id));return localStorage.setItem(ja,JSON.stringify(t)),de()}function Eo(e){const a=b();let t=!1;const s=e.map(o=>{const n=bo(o,a);return n!==o&&(t=!0),n});return t&&localStorage.setItem(ja,JSON.stringify(s)),s}function de(){const e=localStorage.getItem(ja);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se ha podido leer tu mar de pensamientos.");return Eo(a.map(ze))}function ds(e){const a=de().find(o=>o.id===e?.id)||null,t=a?Object.fromEntries(["sea","returns","speed","driftDays","arriveOn","lostOn","current","glass","mottoSeed","status"].map(o=>[o,a[o]])):{},s=ze({...a,...e,...t,updatedAt:new Date().toISOString()});return Na([...de().filter(o=>o.id!==s.id),s])}function be(e,a={}){const t=de();return Na(t.map(s=>s.id===e?{...s,...a,updatedAt:new Date().toISOString()}:s))}function Ao(e){return Na(de().filter(a=>a.id!==e))}function cs(e){return be(e,{status:"drifting",castAt:b(),driftDays:null,arriveOn:null,lostOn:null,returnedAt:null,lostAt:null,seen:!1,reply:"",kept:!1,keptOn:null})}function Oa(e={}){const a=e&&typeof e=="object"?e:{},t=new Set(V.map(f=>f.id)),s=new Set(Zs.map(f=>f.id)),o=new Set(Ye.map(f=>f.id)),n=new Set(ka.map(f=>f.id)),r=new Set(Je.map(f=>f.id)),i=new Set(Ke.map(f=>f.id)),p=(f,E,B,I)=>{const U=Number(f);return Number.isFinite(U)?Math.min(B,Math.max(E,Math.round(U*10)/10)):I};let c=null;if(a.age!==void 0&&a.age!==null&&a.age!==""){const f=Math.round(Number(a.age));Number.isFinite(f)&&f>=8&&f<=115&&(c=f)}const u=o.has(a.ageGroup)?a.ageGroup:W.ageGroup,g=c!==null?Ca(c,u):u,$=Array.isArray(a.interests)?[...new Set(a.interests.filter(f=>n.has(f)))]:[],M=Array.isArray(a.savedQuotes)?[...new Set(a.savedQuotes.filter(f=>typeof f=="string"&&f.trim().length>0).map(f=>f.trim().slice(0,260)))].slice(0,40):[];return{completed:!!a.completed,name:String(a.name??"").trim().slice(0,50),age:c,ageGroup:g,interests:$,ritual:r.has(a.ritual)?a.ritual:W.ritual,tone:i.has(a.tone)?a.tone:W.tone,savedQuotes:M,purpose:s.has(a.purpose)?a.purpose:W.purpose,motto:String(a.motto??W.motto).trim().slice(0,140)||W.motto,theme:t.has(a.theme)?a.theme:W.theme,sleepGoal:p(a.sleepGoal,4,14,W.sleepGoal),studyGoal:p(a.studyGoal,0,16,W.studyGoal),waterGoal:p(a.waterGoal,1,25,W.waterGoal),showDailyWord:a.showDailyWord===void 0?!0:!!a.showDailyWord,showDailyTip:a.showDailyTip===void 0?!0:!!a.showDailyTip,crisisAlertsEnabled:a.crisisAlertsEnabled===void 0?!0:!!a.crisisAlertsEnabled,trustedContactName:String(a.trustedContactName??"").trim().slice(0,60),trustedContactPhone:String(a.trustedContactPhone??"").trim().slice(0,30),sidebarCollapsed:!!a.sidebarCollapsed,updatedAt:typeof a.updatedAt=="string"?a.updatedAt:new Date().toISOString()}}function Ba(){const e=localStorage.getItem(lt);if(!e)return{...W};try{const a=JSON.parse(e);return Oa(a)}catch{return{...W}}}function oe(e={}){const a=Ba(),t=Oa({...a,...e,updatedAt:new Date().toISOString()});return localStorage.setItem(lt,JSON.stringify(t)),t}function Lo(e,a=oa(),t=Ba(),s=de()){return JSON.stringify({app:"diario",version:1,exportedAt:new Date().toISOString(),entries:dt(e),habits:a.map(Fe),thoughts:s.map(ze),setup:Oa(t)},null,2)}function Do(e){let a;try{a=JSON.parse(e)}catch{throw new Error("El archivo no es una copia JSON válida.")}if(!a||typeof a!="object"||a.version!==1||!Array.isArray(a.entries))throw new Error("Selecciona una copia JSON de Diario (versión 1).");const t=a.entries.map(Ta);if(new Set(t.map(r=>r.date)).size!==t.length)throw new Error("La copia contiene fechas duplicadas.");const s=Array.isArray(a.habits)?a.habits.map(Fe):[],o=Array.isArray(a.thoughts)?a.thoughts.map(ze):[],n=a.setup?Oa(a.setup):null;return{entries:t,habits:s,thoughts:o,setup:n}}function jo(e){const a=Ha(),t=new Map(a.map(n=>[n.date,n]));for(const n of e.entries)t.set(n.date,Ta(n));const s=new Map(oa().map(n=>[n.id,n]));for(const n of e.habits)s.set(n.id,Fe(n));ut([...s.values()]);const o=new Map(de().map(n=>[n.id,n]));for(const n of e.thoughts||[])o.set(n.id,ze(n));return Na([...o.values()]),e.setup&&oe(e.setup),ct([...t.values()])}function Co(e=""){return String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim()}function ce(e="paper",a={}){const t=V.find(c=>c.id===e)||V[0],{bg:s,page:o,accent:n,ink:r}=t.favicon||{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"},i=String(a?.name||"").trim().slice(0,1).toUpperCase(),p=i?`<text x="36" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="18" fill="${r}">${i.replace(/[<>&"']/g,"")}</text>`:`<path d="M29 29h14M29 36h10" stroke="${r}" stroke-width="2.6" stroke-linecap="round"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="16" fill="${s}"/>
    <rect x="14" y="11" width="38" height="42" rx="5" fill="${o}"/>
    <rect x="14" y="11" width="7" height="42" rx="2" fill="${n}"/>
    <path d="M41 11v12l-4-3-4 3V11" fill="${n}"/>
    ${p}
    <circle cx="46" cy="46" r="3" fill="${n}"/>
  </svg>`.replace(/\s+/g," ").trim()}function To(e="paper",a={}){const t=ce(e,a);return`data:image/svg+xml;utf8,${encodeURIComponent(t)}`}const Ho=[{label:"suicidio",regex:/\b(suicid(io|arme|arse|a)|conducta suicida)\b/},{label:"quitarme la vida",regex:/\b(quitar(me|se) la vida|acabar con mi vida|terminar con mi vida)\b/},{label:"no quiero vivir",regex:/\b(no quiero (seguir viviendo|vivir)|no merece la pena vivir|no vale la pena vivir)\b/},{label:"quiero morir",regex:/\b(quiero morir(me)?|me quiero morir|deseo morir(me)?|prefiero estar muert[oa]|mejor muert[oa])\b/},{label:"autolesión",regex:/\b(autolesion(arme|arse|es)?|hacerme dano|hacerme sangre|cortarme las venas|cortarme el brazo|cortarme la piel)\b/},{label:"acabar con todo",regex:/\b(acabar con todo para siempre|desaparecer para siempre|ojala no despertar|no despertar manana|matarme|tirarme (por la ventana|al tren|desde un puente)|sobredosis)\b/}];function No(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"){const a=Array.isArray(e.gratitude)?e.gratitude.join(" "):"",t=Array.isArray(e.goals)?e.goals.join(" "):"",s=Array.isArray(e.tags)?e.tags.join(" "):"";return[e.bestOfDay,e.differentToday,e.generalDay,e.wordOfDay,e.capsule,e.tomorrow,a,t,s].filter(Boolean).join(" ")}return""}function F(e={}){const a=e?.age?Ca(e.age,e.ageGroup||"young"):e?.ageGroup||"young",t=Ye.find(E=>E.id===a)||Ye[1],s=Array.isArray(e?.interests)?e.interests:[],o=ka.filter(E=>s.includes(E.id)),n=Je.find(E=>E.id===e?.ritual)||Je[0],r=Ke.find(E=>E.id===e?.tone)||Ke[0];let i=t.focusLabel,p=t.focusQuestion;s.includes("study")?(i="Estudio",p="Tiempo de estudio o repaso"):s.includes("projects")&&t.id!=="teen"&&(i="Proyectos y enfoque",p="Tiempo dedicado a tus proyectos");const c=[...new Set([...o.map(E=>E.habit),...t.habits,...Ys])].slice(0,8),u=[...new Set([...o.map(E=>E.tag),...t.tags,..._s])].slice(0,12),g=Number.isFinite(Number(e?.age))&&Number(e.age)>0&&Number(e.age)<18;let $="Nota al margen (canción, lectura, lugar...)",M="Una canción, un libro, una película o un detalle que quieras recordar...";s.includes("music")?($="Canción, película o escena del día",M="¿Qué has escuchado o visto hoy?"):s.includes("reading")?($="Lectura o cita del día",M="Un libro que estés leyendo o una frase que te haya gustado..."):s.includes("gaming")&&($="Partida, serie o tema del día",M="A qué has jugado hoy o qué serie estás viendo...");const f=["water"];return(s.includes("sport")||s.includes("nature")||!s.length)&&f.push("exercise"),(s.includes("reading")||s.includes("study")||!s.length)&&f.push("reading"),(s.includes("calm")||!s.length)&&f.push("mindfulness"),{group:t,age:e?.age||null,isMinor:g,interests:o,ritual:n,tone:r,focusLabel:i,focusQuestion:p,capsuleLabel:$,capsulePlaceholder:M,activeCounterKeys:f,sleepRecommended:t.sleepRecommended,studyRecommended:t.studyRecommended,suggestedHabits:c,tags:u,placeholders:t.placeholders}}function pt(e){const a=No(e),t=Co(a),s=[];if(t)for(const o of Ho)o.regex.test(t)&&s.push(o.label);return s.length>0?{triggered:!0,level:"high",matchedTerms:s,reason:"Si estás pasando por un momento muy difícil, no tienes por qué llevarlo a solas. El 024 es gratuito, confidencial y atiende las 24 horas."}:{triggered:!1,level:"none",matchedTerms:[],reason:""}}function Xe(e=b()){const a=String(e||"").replace(/[^0-9]/g,"");let t=0;for(let s=0;s<a.length;s++)t=t*31+a.charCodeAt(s)>>>0;return t||1}function Oo(e=b(),a=0){const t=(Xe(e)+Math.abs(a))%qt.length;return qt[t]}function Bo(e=b(),a=0,t={}){const o=F(t).group.id,n=new Set(t?.interests||[]),r=Mt.filter(c=>{const u=!c.ageGroups||c.ageGroups.includes(o),g=!c.interests||c.interests.some($=>n.has($));return u||g}),i=r.length?r:Mt,p=(Xe(e)*7+Math.abs(a))%i.length;return i[p]}function Po(e=b(),a=0,t={}){const o=F(t).group.id,n=t?.tone||"warm",r=new Set(t?.interests||[]),i=Array.isArray(t?.savedQuotes)?t.savedQuotes:[];if(i.length>0&&a%3===0){const M=(Xe(e)+Math.abs(a))%i.length;return{text:i[M],author:t?.name?`Guardada por ${t.name}`:"De tu colección",isCustom:!0}}const p=kt.map(M=>{let f=0;return M.tones?.includes(n)&&(f+=3),M.ageGroups?.includes(o)&&(f+=2),M.interests?.some(E=>r.has(E))&&(f+=4),{q:M,score:f}}),c=Math.max(...p.map(M=>M.score),0),u=p.filter(M=>M.score>=Math.max(2,c-2)).map(M=>M.q),g=u.length>=4?u:kt,$=(Xe(e)*5+Math.abs(a))%g.length;return g[$]}function Va(e=b(),a=0){const t=(Xe(e)*13+Math.abs(a))%Et.length;return Et[t]}function Fo(e={},a={}){const t=[],s=F(a),o=Number(a?.sleepGoal)||s.sleepRecommended||7.5,n=Number(e?.sleepHours),r=Number(e?.stress),i=Number(e?.mood);return Number.isFinite(n)&&n>0&&n<o-1.5&&t.push({icon:"moon",title:"Descanso corto",text:`Has dormido ${n} h (tu meta es ${o} h). Intenta bajar el ritmo esta tarde.`}),Number.isFinite(r)&&r>=4&&t.push({icon:"wind",title:"Día cargado",text:"Con este nivel de tensión, prioriza una sola cosa hoy y deja el resto para mañana."}),Number.isFinite(i)&&i===1&&t.push({icon:"heart",title:"Día cuesta arriba",text:"En los días pesados basta con descansar y cubrir lo básico."}),t.slice(0,2)}function zo(e=[],a={}){const t=F(a),s=Number(a?.sleepGoal)||t.sleepRecommended||7.5,o=Number(a?.studyGoal)??t.studyRecommended??2,n=Number(a?.waterGoal)||8,r=e.length;if(!r)return{total:0,sleepGoal:s,studyGoal:o,waterGoal:n,sleepMet:0,studyMet:0,waterMet:0,sleepPct:0,studyPct:0,waterPct:0,moodWhenSleepMet:null,moodWhenSleepMissed:null};const i=e.filter(g=>g.sleepHours>=s),p=e.filter(g=>g.sleepHours<s),c=e.filter(g=>g.studyHours>=o),u=e.filter(g=>(g.counters?.water||0)>=n);return{total:r,sleepGoal:s,studyGoal:o,waterGoal:n,sleepMet:i.length,studyMet:c.length,waterMet:u.length,sleepPct:Math.round(i.length/r*100),studyPct:Math.round(c.length/r*100),waterPct:Math.round(u.length/r*100),moodWhenSleepMet:i.length?q(Q(i.map(g=>g.mood))):null,moodWhenSleepMissed:p.length?q(Q(p.map(g=>g.mood))):null}}function Go(e="",a=new Date().getHours()){const t=String(e||"").trim(),s=t?`, ${t}`:"";return a>=5&&a<13?`Buenos días${s}`:a>=13&&a<20?`Buenas tardes${s}`:`Buenas noches${s}`}const Io={pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',week:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 9h18M8 14h8"/>',month:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9"/>',history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-5 3-7 1 2 2 3 2 3 0-3-1-4 0-6Z"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',study:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',check:'<path d="M20 6 9 17l-5-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',download:'<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3"/>',upload:'<path d="M12 15V3m0 0-4 4m4-4 4 4M4 17v3h16v-3"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 5.1-6C9.5 14.5 12 13 13 12"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',bolt:'<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',storm:'<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/><path d="m13 11-3 5h4l-2 5"/>',drop:'<path d="M12 2.7 6.4 8.3a8 8 0 1 0 11.3 0Z"/>',run:'<circle cx="15" cy="4" r="2"/><path d="m10.5 9.5-3 3L5 11m5.5-1.5 3.5 2 3 2M9 14l-2 6m5-4 3 5"/>',book:'<path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',stamp:'<path d="M5 21h14M6 17h12v2H6zM9 17v-3a3 3 0 1 1 6 0v3"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',refresh:'<path d="M21 12a9 9 0 0 0-15.4-6.4L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15.4 6.4L21 16"/><path d="M21 21v-5h-5"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5-4.5-8.6-10-8.6Z"/>',spark:'<path d="m12 3 1.9 5.8L20 10.8l-6.1 1.9L12 18.5l-1.9-5.8L4 10.8l6.1-2Z"/>',quote:'<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/>',expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',wave:'<path d="M2 9.5c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/><path d="M2 15c2 0 2 1.8 4 1.8S8 15 10 15s2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/>',tide:'<path d="M3 16.5c1.7 0 1.7 1.5 3.4 1.5s1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5 1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5"/><circle cx="17" cy="6" r="3"/><path d="M4 11c1.7 0 1.7 1.5 3.4 1.5S9.1 11 10.8 11"/>',send:'<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z"/>',anchor:'<circle cx="12" cy="5" r="2.6"/><path d="M12 7.6V21"/><path d="M8.5 10h7"/><path d="M3 14a9 9 0 0 0 18 0"/><path d="M3 14h3M18 14h3"/>',bookmark:'<path d="M6.5 3h11a1 1 0 0 1 1 1v17l-6.5-4.6L5.5 21V4a1 1 0 0 1 1-1Z"/>',reply:'<path d="M9 14 4 9l5-5"/><path d="M4 9h9.5A6.5 6.5 0 0 1 20 15.5V20"/>',seal:'<circle cx="12" cy="12" r="8"/><path d="m12 7.6 1.5 2.9 3.2.4-2.3 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.3-2.3 3.2-.4Z"/>',eye:'<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',grid:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',listChecks:'<path d="M11 6h10M11 12h10M11 18h10"/><path d="m3 6 1.6 1.6L7.2 5M3 12l1.6 1.6 2.6-2.6M3 18l1.6 1.6 2.6-2.6"/>',sail:'<path d="M3 18.5h18l-2.6 3.2H5.6Z"/><path d="M12.5 15V3.5L20 15Z"/><path d="M10.5 15 6 8.5 3.8 15Z"/>',fog:'<path d="M4 9h16M3 13h18M5 17h14"/><path d="M7 5.5c1.6-1.6 3.4-1.6 5 0"/>',rain:'<path d="M17.5 14a4 4 0 0 0-.6-7.9A5.5 5.5 0 0 0 6.3 7.4 3.8 3.8 0 0 0 7 14Z"/><path d="M9 17.5 8 20M13 17.5 12 20M17 17.5 16 20"/>',hourglass:'<path d="M7 3h10M7 21h10"/><path d="M7 3c0 4 5 5.4 5 9s-5 5-5 9M17 3c0 4-5 5.4-5 9s5 5 5 9"/>',gauge:'<path d="M12 20a8 8 0 1 1 8-8"/><path d="M12 12 16 9"/><circle cx="12" cy="12" r="1.2"/>',paper:'<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/>',splash:'<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.6 6.6l2.8 2.8M14.6 14.6l2.8 2.8M17.4 6.6l-2.8 2.8M9.4 14.6l-2.8 2.8"/>',save:'<path d="M5 4h11l3 3v13H5Z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'},l=e=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Io[e]||""}</svg>`,d=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]);function us(e={},a=0){const t=F(e),s=e.name?d(e.name):"Personalizar perfil",o=e.age?`${e.age} años`:t.group.label;return`<button type="button" class="ex-libris-card" data-action="open-setup-wizard" title="Editar perfil y preferencias">
    <span class="ex-libris-icon">${ce(e.theme||"paper",e)}</span>
    <div class="ex-libris-meta">
      <strong>${s}</strong>
      <small>${d(o)} · ${a} ${a===1?"día":"días"}</small>
    </div>
  </button>`}function Nt(e,a,t,s,o,n,r){return`<div class="scale-field">
    <p class="field-title">${l(s)} ${o}</p>
    <p class="field-caption">${n}</p>
    <div class="level-scale" role="radiogroup" aria-label="${o}">
      ${[1,2,3,4,5].map(i=>`<label class="level-option">
        <input type="radio" name="${e}" value="${i}" ${t===i?"checked":""}>
        <span class="level-num">${i}</span>
        <span class="level-text">${a[i]}</span>
      </label>`).join("")}
    </div>
    <small id="${e}-hint">${t?a[t]+".":r}</small>
  </div>`}function Ro(e=[],a=[]){const t=new Set(e);return`<div class="tag-picker">
    ${[...new Set([...a,...e])].map(o=>`<label class="tag-chip">
      <input type="checkbox" name="tags" value="${d(o)}" ${t.has(o)?"checked":""}>
      <span>${d(o)}</span>
    </label>`).join("")}
    <label class="tag-chip ghost">
      <span>+ Otra:</span>
      <input type="text" name="tagCustom" id="tagCustom" maxlength="24" placeholder="Escribe y pulsa Enter" aria-label="Añadir etiqueta personalizada">
    </label>
  </div>`}function Uo(e={},a=[],t={},s={}){const o=F(t),n=new Set(o.activeCounterKeys||["water"]),r=a.filter(c=>n.has(c.key)||(Number(e?.[c.key])||0)>0),i=r.length?r:a,p=s.action?`${s.action}-`:"";return`<div class="counters-grid">${i.map(c=>{const u=Number(e?.[c.key])||0,$=c.key==="water"?t.waterGoal||8:0,M=$?Math.min(100,Math.round(u/$*100)):0;return`<div class="counter-row" data-counter="${c.key}">
      <div>
        <p class="field-title">${l(c.icon)} ${c.label} ${$?`<small class="counter-goal-pill ${u>=$?"met":""}">Meta: ${u}/${$}</small>`:""}</p>
        <p class="field-caption" id="hint-${c.key}">${Ma(c.key,u)}</p>
        ${$?`<div class="counter-progress"><i style="width:${M}%"></i></div>`:""}
      </div>
      <div class="stepper">
        <button type="button" class="icon-button" data-action="${p}counter-minus" data-key="${c.key}" data-step="${c.step}" aria-label="Restar ${c.label}">${l("minus")}</button>
        <div class="stepper-value">
          <input type="number" name="counter_${c.key}" min="0" max="${c.max}" step="${c.step}" value="${u}" aria-label="${c.label}" data-counter-input="${c.key}">
          <span>${c.unit}</span>
        </div>
        <button type="button" class="icon-button" data-action="${p}counter-plus" data-key="${c.key}" data-step="${c.step}" aria-label="Sumar ${c.label}">${l("plus")}</button>
      </div>
    </div>`}).join("")}</div>`}function Wo(e,a,{mini:t=!1,selected:s=b()}={}){const o=new Map(a.map(i=>[i.date,i])),n=b(),r=Ks(e).map(i=>{const p=o.get(i.date),c=p?T[p.mood-1]:null,u=i.date>n,g=["calendar-day",!i.inMonth&&"outside",i.date===n&&"today",i.date===s&&"selected",p&&"recorded"].filter(Boolean).join(" "),$=`${L(i.date)}${c?`, ${c.label}`:", sin entrada"}`;return`<button type="button" class="${g}" data-action="open-day" data-date="${i.date}" ${u?"disabled":""} aria-label="${$}" style="${c?`--mood:${c.color}`:""}">
      <span>${i.day}</span>${c?'<i aria-hidden="true"></i>':""}
    </button>`}).join("");return`<div class="calendar ${t?"mini":""}">
    <div class="calendar-heading">
      <button type="button" class="icon-button ghost" data-action="month-prev" data-mini="${t?"1":"0"}" aria-label="Mes anterior">${l("left")}</button>
      <strong>${L(e,{month:"long",year:"numeric"})}</strong>
      <button type="button" class="icon-button ghost" data-action="month-next" data-mini="${t?"1":"0"}" aria-label="Mes siguiente">${l("right")}</button>
    </div>
    <div class="calendar-grid">
      ${Qs.map(i=>`<span class="weekday">${i}</span>`).join("")}
      ${r}
    </div>
  </div>`}function Qo(e,a,t,s={}){const o=new Map(e.map(m=>[m.date,m])),n=680,r=230,i=36,p=26,c=n-i*2,u=r-p*2,g=m=>i+(t===1?c/2:m*c/(t-1)),$=m=>p+(5-m)*u/4,M=m=>p+u-Math.min(12,Math.max(0,m||0))/12*u,f=[],E=[],B=Math.max(6,Math.min(18,Math.floor(c/t)-6));for(let m=0;m<t;m++){const k=A(a,m),D=o.get(k);if(D){f.push({x:g(m),y:$(D.mood),e:D,d:k});const j=M(D.sleepHours),z=Math.max(2,p+u-j);E.push(`<rect x="${(g(m)-B/2).toFixed(1)}" y="${j.toFixed(1)}" width="${B}" height="${z.toFixed(1)}" rx="2" fill="color-mix(in srgb,var(--green) 22%,transparent)"><title>${L(k)}: ${q(D.sleepHours)} h de sueño</title></rect>`)}}const I=f.map((m,k)=>`${k?"L":"M"}${m.x.toFixed(1)},${m.y.toFixed(1)}`).join(" "),U=f.length>1?`${I} L${f[f.length-1].x.toFixed(1)},${r-p} L${f[0].x.toFixed(1)},${r-p} Z`:"",N=s?.sleepGoal||7.5,me=M(N);return`<div class="chart-wrap">
    <svg viewBox="0 0 ${n} ${r}" class="mood-chart" role="img" aria-label="Evolución del estado de ánimo y horas de sueño">
      <defs>
        <linearGradient id="moodAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--red)" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="var(--red)" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      ${[1,2,3,4,5].map(m=>`<line x1="${i}" x2="${n-i}" y1="${$(m)}" y2="${$(m)}" stroke="var(--rule)" stroke-dasharray="3 5"/>
      <text x="10" y="${$(m)+4}" fill="var(--ink-faint)" font-size="11" font-family="var(--font-mono)">${m}</text>`).join("")}
      <line x1="${i}" x2="${n-i}" y1="${me.toFixed(1)}" y2="${me.toFixed(1)}" stroke="var(--green)" stroke-width="1" stroke-dasharray="6 4" opacity="0.55"/>
      ${E.join("")}
      ${U?`<path class="chart-area-path" d="${U}" fill="url(#moodAreaGrad)"/>`:""}
      ${I?`<path class="chart-line-path" d="${I}" fill="none" stroke="var(--red)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`:""}
      ${f.map((m,k)=>`<g>
        <circle class="chart-dot" style="--dot-i:${k}" cx="${m.x}" cy="${m.y}" r="5.5" fill="${T[m.e.mood-1].color}" stroke="var(--paper-2)" stroke-width="2">
          <title>${L(m.d)} · ${T[m.e.mood-1].label} (${m.e.mood}/5) · ${q(m.e.sleepHours)} h sueño</title>
        </circle>
      </g>`).join("")}
    </svg>
    <div class="chart-legend-inline">
      <span><i class="legend-line"></i> Ánimo (1–5)</span>
      <span><i class="legend-bar"></i> Horas de sueño (meta: ${q(N)} h)</span>
    </div>
  </div>`}function _o(e=[],a=b(),t=28){const s=new Map(e.map(r=>[r.date,r])),o=A(a,1-t),n=[];for(let r=0;r<t;r++){const i=A(o,r),p=s.get(i),c=p?T[p.mood-1]:null;n.push(`<button type="button" class="heatmap-cell ${p?"filled":""}" data-action="open-day" data-date="${i}" style="${c?`--mood:${c.color}`:""}" title="${L(i)}${c?`: ${c.label} (${p.mood}/5) · ${q(p.sleepHours)} h sueño`:": sin registro"}">
      <span>${i.slice(8)}</span>
      ${c?`<small>${c.emoji}</small>`:""}
    </button>`)}return`<div class="heatmap-strip">${n.join("")}</div>`}function ps(e=[],a={}){const t=zo(e,a),s=F(a);return t.total?`<section class="card personal-goals-card">
    <div class="section-heading">
      <div>
        <h2>Cumplimiento de tus metas</h2>
      </div>
      <button type="button" class="text-button" data-action="open-setup-wizard">${l("sliders")} Ajustar metas</button>
    </div>
    <div class="goals-meter-grid">
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${l("moon")} Sueño (≥ ${q(t.sleepGoal)} h)</span>
          <strong>${t.sleepPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${t.sleepPct}%;background:var(--green)"></i></div>
        <small>${t.sleepMet} de ${t.total} días cumplidos</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${l("study")} ${d(s.focusLabel)} (≥ ${q(t.studyGoal)} h)</span>
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
        <p>Cuando alcanzas tu meta de <b>${q(t.sleepGoal)} h</b> de sueño, tu estado medio es <b>${t.moodWhenSleepMet}/5</b> (frente a <b>${t.moodWhenSleepMissed}/5</b> los días que duermes menos).</p>
      </div>
    `:""}
  </section>`:`<section class="card personal-goals-card">
      <div class="section-heading">
        <h2>Tus metas personales</h2>
        <button type="button" class="text-button" data-action="open-setup-wizard">${l("sliders")} Ajustar</button>
      </div>
      <p class="habit-empty">Guarda tu primer día para ver cómo evolucionan tus metas de sueño (${q(t.sleepGoal)} h), ${d(s.focusLabel.toLowerCase())} (${q(t.studyGoal)} h) y agua (${t.waterGoal} vasos).</p>
    </section>`}function ms(e,a=0,t={}){const s=Po(e,a,t),o=(t?.savedQuotes||[]).includes(s.text);return`<section class="card quote-card">
    <div class="quote-top">
      <span class="eyebrow">${l("quote")} ${s.isCustom?"Tu colección":"Frase del día"}</span>
      <div class="quote-actions">
        <button type="button" class="icon-button ghost ${o?"is-saved":""}" data-action="save-quote" data-quote="${d(s.text)}" title="${o?"Guardada en tus frases":"Guardar en mis frases"}" aria-label="Guardar frase">${l("heart")}</button>
        <button type="button" class="icon-button ghost" data-action="next-quote" title="Otra frase" aria-label="Otra frase">${l("refresh")}</button>
      </div>
    </div>
    <p class="quote-text">«${d(s.text)}»</p>
    <small class="quote-author">— ${d(s.author)}</small>
  </section>`}function ie(e,a,t="",s=""){return`<div class="ledger-cell">
    <span class="ledger-label">${e}</span>
    <div class="ledger-value">${a}${t?`<small>${t}</small>`:""}</div>
    ${s?`<span class="ledger-hint">${s}</span>`:""}
  </div>`}function ra(e,a,t="mood"){if(!a)return`<div class="rank-row"><span class="rank-label">${e}</span><strong>—</strong><small>Sin datos aún</small></div>`;const s=t==="mood"?`${T[a.mood-1].emoji} ${T[a.mood-1].label} (${a.mood}/5)`:`${q(a[t])} h`;return`<div class="rank-row">
    <span class="rank-label">${e}</span>
    <strong>${L(a.date,{weekday:"short",day:"numeric",month:"short"})}</strong>
    <small>${s}</small>
  </div>`}function Sa(e,a,t=""){return`<div class="empty-state">
    ${l("leaf")}
    <h3>${e}</h3>
    <p>${a}</p>
    ${t}
  </div>`}function mt(e){return`<div class="meter-list">${e.map(a=>{const t=a.total?Math.round(a.count/a.total*100):0;return`<div class="meter-row">
      <span>${a.label}</span>
      <div class="meter-track"><i style="width:${t}%;background:${a.color||"var(--ink)"}"></i></div>
      <strong>${a.count}</strong>
    </div>`}).join("")}</div>`}function hs(e,a={}){if(!e?.triggered||e.level!=="high")return"";const t=a?.trustedContactName?.trim(),s=a?.trustedContactPhone?.trim();return`<section class="crisis-banner high" role="region" aria-label="Apoyo emocional disponible">
    <div class="crisis-banner-head">
      <span class="crisis-badge">${l("heart")} No estás a solas</span>
      <button type="button" class="icon-button ghost crisis-dismiss" data-action="dismiss-crisis-banner" aria-label="Ocultar este aviso">${l("close")}</button>
    </div>
    <p class="crisis-reason">${d(e.reason)}</p>
    <div class="crisis-quick-actions">
      <a href="tel:024" class="button solid crisis-call-btn">${l("phone")} Llamar al 024 (24h, gratuito y confidencial)</a>
      ${t&&s?`<a href="tel:${d(s.replace(/\s+/g,""))}" class="button outline">${l("user")} Llamar a ${d(t)}</a>`:""}
      <button type="button" class="button outline" data-action="open-crisis-modal" data-tab="breathe">${l("wind")} Respiración guiada</button>
    </div>
  </section>`}function Vo(e={},a="help"){const t=F(e),s=e?.trustedContactName?.trim(),o=e?.trustedContactPhone?.trim();return`<div class="modal-card crisis-modal">
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
      ${s&&o?`
        <div class="trusted-contact-card">
          <div>
            <span class="eyebrow">Tu persona de confianza</span>
            <h3>${d(s)}</h3>
            <p>${d(o)}</p>
          </div>
          <a href="tel:${d(o.replace(/\s+/g,""))}" class="button solid">${l("phone")} Llamar</a>
        </div>
      `:""}
      <div class="helpline-grid">
        ${Js.map(n=>{const r=t.isMinor&&n.youth;return`
          <div class="helpline-card ${n.primary||r?"primary":""}">
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
  </div>`}function gs(e,a,t,s={},o={},n=""){const r=s?.showDailyWord!==!1,i=s?.showDailyTip!==!1;if(!r&&!i)return"";const p=Oo(e,a),c=Bo(e,t,s),u=Fo(o,s),g=n&&n.toLowerCase()===p.word.toLowerCase();return`<div class="daily-inspiration-grid">
    ${r?`
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

    ${i?`
      <article class="card inspiration-card tip-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${l("spark")} Consejo · ${d(c.category)}</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-tip" title="Ver otro consejo" aria-label="Ver otro consejo">${l("refresh")}</button>
        </div>
        <h2 class="daily-tip-title">${d(c.title)}</h2>
        <p class="daily-tip-body">${d(c.tip)}</p>
        ${u.length?`
          <div class="contextual-advice-list">
            ${u.map($=>`
              <div class="contextual-advice-item">
                ${l($.icon)}
                <div><strong>${d($.title)}:</strong> ${d($.text)}</div>
              </div>
            `).join("")}
          </div>
        `:""}
      </article>
    `:""}
  </div>`}function Zo(e={},a=[],t=1){const s=F(e),o=new Set(a.map(r=>r.name.toLowerCase())),n=new Set(e.interests||[]);return`<div class="modal-card setup-wizard-modal" data-current-step="${t}">
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
            ${Ye.map(r=>`
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
            ${ka.map(r=>`
              <label class="interest-chip">
                <input type="checkbox" name="interests" value="${r.id}" ${n.has(r.id)?"checked":""}>
                <span>${l(r.icon)} ${d(r.label)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${t===2?"active":""}" data-step="2" ${t===2?"":"hidden"}>
        <div class="age-adaptation-callout" id="wiz-adaptation-callout">
          ${l("compass")}
          <div>
            <strong>Adaptado a: ${d(s.group.title)} (${d(s.group.label)})</strong>
            <p>Hemos ajustado tus metas recomendadas de sueño (${q(s.sleepRecommended)} h) y dedicación (${q(s.studyRecommended)} h).</p>
          </div>
        </div>

        <div class="goals-setup-grid">
          <div class="setup-field">
            <label for="setup-sleep">${l("moon")} Meta de sueño</label>
            <div class="number-wrap">
              <input id="setup-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${e.sleepGoal??s.sleepRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-study">${l("study")} Meta de dedicación</label>
            <div class="number-wrap">
              <input id="setup-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${e.studyGoal??s.studyRecommended}">
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
              ${Je.map(r=>`
                <label class="purpose-card compact">
                  <input type="radio" name="ritual" value="${r.id}" ${(e.ritual||"night")===r.id?"checked":""}>
                  <span class="purpose-icon">${l(r.icon)}</span>
                  <div><strong>${d(r.label)}</strong></div>
                </label>
              `).join("")}
            </div>
          </div>
          <div class="setup-field" style="margin-top:0">
            <label>Tono de las frases</label>
            <div class="ritual-stack">
              ${Ke.map(r=>`
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
            ${s.suggestedHabits.map(r=>{const i=o.has(r.toLowerCase());return`<label class="tag-chip">
                <input type="checkbox" name="suggestedHabits" value="${d(r)}" ${i?"checked":""}>
                <span>${d(r)}</span>
              </label>`}).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${t===3?"active":""}" data-step="3" ${t===3?"":"hidden"}>
        <div class="setup-field">
          <label>${l("palette")} Elige el papel y el icono de tu pestaña</label>
          <div class="theme-picker-grid">
            ${V.map(r=>`
              <label class="theme-card">
                <input type="radio" name="theme" value="${r.id}" ${(e.theme||"paper")===r.id?"checked":""}>
                <div class="theme-card-top">
                  <span class="theme-favicon-preview">${ce(r.id,e)}</span>
                  <div class="theme-swatches">
                    ${r.colors.map(i=>`<i style="background:${i}"></i>`).join("")}
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
        ${t>1?`<button type="button" class="button outline" data-wizard="prev">${l("left")} Anterior</button>`:'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${t<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${l("right")}</button>`:`<button type="submit" class="button solid">${l("check")} Guardar</button>`}
      </div>
    </form>
  </div>`}const Ge=e=>$a.find(a=>a.id===e?.glass)||$a[0],da=(e,a=8)=>{const t=String(e||"").trim().split(/\s+/);return t.slice(0,a).join(" ")+(t.length>a?"…":"")};function Pe(e={},a={}){const t=Ge(e),s=a.class?` ${a.class}`:"",o=a.paper===!1?"":`<path class="bottle-paper" d="M10.6 13.4h6.2M10.6 15.6h4.4" stroke="${t.hex}" stroke-width="1.1" stroke-linecap="round" opacity=".8"/>`;return`<svg class="bottle-glyph${s}" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <g transform="rotate(-24 14 14)">
      <path d="M11 4.2h6v3.1c0 1 .3 1.6 1 2.3l1.5 1.6c.9 1 1.4 2 1.4 3.3v7.2c0 1.4-1.1 2.5-2.5 2.5h-8.8c-1.4 0-2.5-1.1-2.5-2.5v-7.2c0-1.3.5-2.3 1.4-3.3l1.5-1.6c.7-.7 1-1.3 1-2.3Z" fill="color-mix(in srgb,${t.hex} 22%,transparent)" stroke="${t.hex}" stroke-width="1.2"/>
      <path d="M11.6 6.6h4.8" stroke="${t.hex}" stroke-width="1" opacity=".6"/>
      <rect class="bottle-cork" x="12.2" y="2.4" width="3.6" height="2.4" rx="1" fill="${t.hex}" opacity=".85"/>
      ${o}
      <path class="bottle-shine" d="M9.6 15.4v6.4" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".4"/>
    </g>
  </svg>`}function Yo(e=2400,a=8,t=110,s=240){let o=`M0 ${t}`;for(let n=0;n<e;n+=s)o+=` q ${s/4} ${-a} ${s/2} 0 q ${s/4} ${a} ${s/2} 0`;return`${o} L${e} 240 L0 240 Z`}function Za(e=0,a=0){const t=(s,o,n,r,i)=>{const p=e%7*9,c=(i*(1-Math.min(.55,a*.45))).toFixed(1);return`<path class="${r}" style="--wave-dur:${c}s;--wave-delay:-${(p/100*c).toFixed(2)}s" d="${Yo(2400,s,o,n)}"/>`};return`<svg class="sea-wave-svg" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden="true">
    ${t(7,126,300,"wave wave-4",28)}
    ${t(9,142,240,"wave wave-3",21)}
    ${t(11,160,190,"wave wave-2",16)}
    ${t(13,182,150,"wave wave-1",11)}
  </svg>`}function bs(){let e="M0 15";for(let a=0;a<2400;a+=120)e+=" q30 -9 60 0 q30 9 60 0";return`<svg class="tide-rule" viewBox="0 0 1200 30" preserveAspectRatio="none" aria-hidden="true">
    <path class="tide-rule-path" d="${e}"/>
  </svg>`}function Jo(e=[],a=b()){const t=La(e,a),s=is(a),o=st(a),n=Y("2020-01-01",a),r=t.drifting.map(c=>{const u=Aa(c,a),g=Ge(c),$=Y("2020-01-01",c.castAt);return`<li class="sea-float" style="--x:${(mo(u.pct)*100).toFixed(1)}%;--tint:${g.hex};--lift:${(48+$%5*2.4).toFixed(1)}%;--delay:${($%9*.4).toFixed(2)}s;--dur:${(6-s.rough*2).toFixed(1)}s;--bob:${(2.5+$%3*1.2).toFixed(1)}px">
      <button type="button" class="sea-float-btn" data-action="open-bottle" data-id="${c.id}" aria-label="${d(da(c.text,12))}">
        <span class="sea-wake" aria-hidden="true"></span>
        ${Pe(c)}
        <span class="sea-float-whisper">${d(da(c.text,7))}</span>
      </button>
    </li>`}).join(""),i=t.returned.slice(0,3).map((c,u)=>`
    <button type="button" class="shore-bottle ${c.seen?"":"is-new"}" style="--i:${u}" data-action="open-bottle" data-id="${c.id}">
      <span class="shore-bottle-glow">${Pe(c,{class:"is-landed"})}</span>
      <span class="shore-bottle-meta">
        <strong>${d(L(c.returnedAt||a,{day:"numeric",month:"long"}))}</strong>
        <small>${d(da(c.text,10))}</small>
      </span>
      ${c.seen?"":'<span class="shore-new-dot" aria-label="sin leer"></span>'}
    </button>`).join(""),p=t.returned.length?`Volvió ${t.returned.length===1?"una":"algo"} que habías soltado`:t.drifting.length?`${t.drifting.length===1?"Una botella anda":"Andan por ahí "+t.drifting.length+" botellas"} por el agua`:"El mar está vacío";return`<section class="sea-panel ${t.returned.length?"has-shore":""}" data-tide="${o.key}" data-weather="${s.weather.id}"
    style="--water:${(s.level*100).toFixed(1)}%;--rough:${s.rough.toFixed(2)}">
    <header class="sea-sky">
      <span class="sea-wash sea-wash-1" aria-hidden="true"></span>
      <span class="sea-wash sea-wash-2" aria-hidden="true"></span>
      <h2 class="sea-headline">${d(p)}</h2>
      <p class="sea-sub">${d(Ko(t,a,s))}</p>
    </header>
    <div class="sea-water">
      ${Za(n,s.rough)}
      <span class="sea-lighthouse" aria-hidden="true">${Xo()}</span>
      <ul class="sea-fleet">${r}</ul>
      <span class="sea-horizon-line"></span>
    </div>
    ${i?`<div class="sea-shore"><div class="shore-list">${i}</div>${t.returned.length>3?`<span class="shore-more">${t.returned.length-3} más en la orilla</span>`:""}</div>`:""}
  </section>`}function Ko(e,a,t){return e.returned.length?"Está en la orilla, abierta cuando tú quieras.":e.drifting.length?t.weather.id==="gale"?"Con este mar no se ve ninguna desde la playa.":"No hace falta volver a mirar: si tiene que volver, vuelve.":"Escribe algo que no quieras guardar y suéltalo ahí fuera."}function Xo(){return`<svg viewBox="0 0 60 96" fill="none" aria-hidden="true">
    <path d="M22 88 26 30h8l4 58Z" fill="color-mix(in srgb,var(--ink) 58%,transparent)" stroke="var(--ink)" stroke-width="1.3"/>
    <path d="M26.4 44h7.2M27.6 60h4.8" stroke="var(--paper-2)" stroke-width="3" opacity=".5"/>
    <rect x="24" y="20" width="12" height="10" rx="1.5" fill="color-mix(in srgb,var(--ochre) 62%,var(--paper-2))" stroke="var(--ink)" stroke-width="1.3"/>
    <path d="M23 20h14l-7-8Z" fill="var(--ink)"/>
    <circle class="sea-beacon" cx="30" cy="25" r="2.4" fill="var(--ochre)"/>
    <path d="M14 88h32" stroke="var(--ink)" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`}function en(e={},a=b(),t={}){const s=String(t.text||"");return`<form id="bottle-form" class="card bottle-composer">
    ${t.restoredFrom?`<p class="draft-note" role="status">${l("pen")} Sigues con la misma de ${d(t.restoredFrom)}. <button type="button" class="text-button is-danger" data-action="discard-bottle-draft">empezar de cero</button></p>`:""}
    <label class="sr-only" for="bottle-text">Pensamiento</label>
    <textarea id="bottle-text" name="text" class="bottle-text" maxlength="1200" rows="3"
      placeholder="Lo que hoy no quieres dejar escrito en el cuaderno.">${d(s)}</textarea>

    <div class="composer-bar">
      <div class="composer-moods" role="radiogroup" aria-label="Ánimo">
        ${T.map(n=>`<label class="mini-mood" style="--mood-color:${n.color}" title="${n.label}">
          <input type="radio" name="mood" value="${n.value}" ${t.mood===n.value?"checked":""}>
          <span>${n.emoji}</span>
        </label>`).join("")}
      </div>
      <span class="word-count" id="bottle-words">${s.trim()?s.trim().split(/\s+/).length:0} palabras</span>
      <button type="submit" class="text-button cast-btn"${s.trim()?"":" disabled"}>${l("send")} echar al mar</button>
    </div>

    <div class="sea-picker" role="radiogroup" aria-label="¿Hasta dónde?">
      <span class="sea-picker-label">¿Hasta dónde?</span>
      ${ya.map((n,r)=>`<label class="sea-option" style="--opt-i:${r}">
        <input type="radio" name="sea" value="${n.id}" ${(t.sea||"breeze")===n.id?"checked":""}>
        <span class="sea-option-name">${d(n.label)}</span>
        <span class="sea-option-days">${n.min}–${n.max} días</span>
      </label>`).join("")}
    </div>
  </form>`}function an(e,a=b(),t=0){const s=Aa(e,a),o=Ge(e),n=ot(e.sea),r=L(e.castAt,{day:"numeric",month:"short"}),i=s.fate==="drifting"?`en el agua desde el ${r}`:s.fate==="returned"?`soltada el ${r} · volvió el ${L(e.returnedAt||a,{day:"numeric",month:"long"})}`:`soltada el ${r} · nunca llegó`;return`<article class="card bottle-card is-${s.fate}" style="--tint:${o.hex};--i:${Math.min(9,t)}" data-bottle-id="${e.id}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${Pe(e)}</span>
      <div class="bottle-card-who">
        <p class="field-caption">${d(i)}</p>
        <h3>${d(n.label)}</h3>
      </div>
      ${e.kept?`<span class="kept-mark" title="anclada al cuaderno">${l("bookmark")}</span>`:""}
    </header>
    <p class="bottle-card-text ${vo(e.text)<=26?"is-short":""}">${d(e.text)}</p>
    ${s.fate==="drifting"?`<p class="bottle-card-quiet">${d(nt(e,a))}</p>`:""}
    ${e.reply?`<p class="bottle-card-reply"><span>le contestaste:</span> ${d(e.reply)}</p>`:""}
    <footer class="bottle-card-foot">
      ${s.fate==="returned"?`<button type="button" class="text-button" data-action="open-bottle" data-id="${e.id}">abrir</button>`:""}
      ${s.fate==="lost"?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${e.id}">volver a lanzarla</button>`:""}
      ${s.fate==="drifting"?`<button type="button" class="text-button" data-action="open-bottle" data-id="${e.id}">ver</button>`:""}
      <button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${e.id}" aria-label="romper la botella">${l("trash")}</button>
    </footer>
  </article>`}function tn(e,a=b(),t={}){const s=Aa(e,a),o=Ge(e),n=ot(e.sea),r=e.mood?T[e.mood-1]:null,i=Math.max(1,Y(e.castAt,e.returnedAt||e.lostAt||a)),p=s.fate==="returned"?`La soltaste el ${L(e.castAt,{day:"numeric",month:"long"})} y ha vuelto ${i} días después, en ${n.label.toLowerCase()}.`:s.fate==="lost"?`La soltaste el ${L(e.castAt,{day:"numeric",month:"long"})}. Este papel se quedó fuera; solo lo lees tú.`:`Suelta el ${L(e.castAt,{day:"numeric",month:"long"})}, día ${s.atSea} en el agua.`;return`<div class="modal-card bottle-modal ${e.seen===!1?"is-fresh":""}" style="--tint:${o.hex}" data-modal-bottle="${e.id}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${l("close")}</button>
    <span class="bottle-wax" aria-hidden="true">${Pe(e,{paper:!1})}<i class="wax-crack"></i></span>
    <p class="tale">${d(p)}</p>
    <div class="bottle-note" data-fate="${s.fate}">
      <blockquote class="bottle-modal-text">${d(e.text)}</blockquote>
      ${r?`<p class="bottle-modal-mood">${r.emoji} · ${r.label.toLowerCase()}</p>`:""}
    </div>
    ${s.fate==="drifting"?'<p class="field-caption modal-quiet">Todavía no se sabe si volverá. Puedes leerla aquí las veces que quieras.</p>':""}
    ${e.reply?`<div class="bottle-reply-box"><span>tu respuesta:</span><p>${d(e.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">¿Le contestas?</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" data-draft="respuesta:${e.id}:text" placeholder="Se guarda aquí aunque lo dejes a medias.">${d(e.replyDraft||"")}</textarea>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${e.reply?'<button class="button outline" data-modal="reply-clear">quitar la respuesta</button>':'<button class="button outline" data-modal="reply">contestar</button>'}
      <button class="button outline" data-modal="keep">${e.kept?"desanclar":"anclar al cuaderno"}</button>
      ${s.fate==="lost"?'<button class="button outline" data-modal="recast">volver a lanzar</button>':""}
      <button class="button solid" data-modal="to-entry">copiar en la entrada de hoy</button>
    </div>
  </div>`}function sn(e={}){return`<div class="splash-layer" style="--tint:${Ge(e).hex}">
    <span class="splash-arc">${Pe(e)}</span>
    <span class="splash-ring"></span>
    <span class="splash-ring is-2"></span>
    <span class="splash-drop"></span>
    <span class="splash-drop is-2"></span>
    <span class="splash-drop is-3"></span>
  </div>`}function on(e=[]){const a=b(),t=La(e,a),s=t.returned[0];if(s)return`<section class="card sea-teaser is-arrival" style="--tint:${Ge(s).hex}">
      <div class="sea-teaser-waves">${Za(2,0)}</div>
      <h2>Ha vuelto algo</h2>
      <p class="sea-teaser-quote">«${d(da(s.text,18))}»</p>
      <div class="sea-teaser-actions">
        <button type="button" class="text-button" data-action="open-bottle" data-id="${s.id}">leerla</button>
        ${t.returned.length>1?`<span class="sea-teaser-count">y ${t.returned.length-1} más en la orilla</span>`:""}
      </div>
    </section>`;const o=t.drifting.length;return`<section class="card sea-teaser">
    <div class="sea-teaser-waves">${Za(5,0)}</div>
    <h2>${o?`${o} ${o===1?"botella anda suelta":"botellas andan sueltas"}`:"El mar está vacío"}</h2>
    <p class="sea-teaser-quote">${o?d(nt(t.drifting[0],a))+".":"Escribe lo que no quieras guardar, ciérralo en una botella y tira. Si vuelve, aquí estará."}</p>
    <div class="sea-teaser-actions">
      <button type="button" class="text-button" data-view="thoughts">${o?"ver el agua":"echar una"}</button>
    </div>
  </section>`}function nn(e="shore"){const a={shore:["La orilla está seca","Cuando vuelva alguna, aparecerá aquí."],sea:["Nada a la deriva","Echa una y olvídate hasta que el mar la traiga."],kept:["Nada anclado","Al abrir una botella puedes dejarla prendida del cuaderno."],lost:["El mar no se ha quedado nada","Por ahora."]}[e]||["El mar está vacío","Escribe, sella y tira."];return`<div class="empty-state sea-empty" data-tab="${e}">
    <span class="sea-empty-art">${Pe({})}<i class="sea-empty-ripple"></i></span>
    <h3>${d(a[0])}</h3>
    <p>${d(a[1])}</p>
  </div>`}const xa="diario.drafts.v1",rn=6e3,Ot=40,Z={entry:e=>`entrada:${e}`,bottle:()=>"botella",reply:e=>`respuesta:${e}`,tomorrow:()=>"manana",setup:()=>"perfil"};function $e(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Wa(e,a=rn){const t=String(e??"");return t.length>a?t.slice(0,a):t}function Pa(){let e=null;try{e=localStorage.getItem(xa)}catch{return{}}if(!e)return{};try{const a=JSON.parse(e);return $e(a)?a:{}}catch{return{}}}function fs(e){const a=Object.keys(e);if(!a.length){try{localStorage.removeItem(xa)}catch{}return!0}let t=e;a.length>Ot&&(t=Object.fromEntries(a.sort((s,o)=>String(e[o]?.savedAt||"").localeCompare(String(e[s]?.savedAt||""))).slice(0,Ot).map(s=>[s,e[s]])));try{return localStorage.setItem(xa,JSON.stringify(t)),!0}catch{return!1}}function Fa(e,a){if(!e)return null;const t={};let s=0;for(const[r,i]of Object.entries($e(a)?a:{}))if(i!=null){if(typeof i=="string"){const p=Wa(i);if(!p.trim())continue;t[r]=p,s++}else if(typeof i=="number"||typeof i=="boolean")t[r]=i,s++;else if(Array.isArray(i)){const p=i.map(c=>typeof c=="string"?Wa(c,600):c).filter(c=>typeof c!="string"||c.trim());p.length&&(t[r]=p,s++)}else if($e(i)){const p={};for(const[c,u]of Object.entries(i))typeof u=="number"||typeof u=="boolean"?p[c]=u:typeof u=="string"&&u.trim()&&(p[c]=Wa(u,600));Object.keys(p).length&&(t[r]=p)}}if(!s)return te(e),null;const o=Pa(),n=new Date().toISOString();return o[e]={data:t,savedAt:n},{savedAt:n,ok:fs(o)}}function ht(e){if(!e)return null;const a=Pa()[e];return $e(a)?a:null}function fe(e){const a=ht(e);return a&&$e(a.data)?a.data:null}function te(e){if(!e)return!1;const a=Pa();return e in a?(delete a[e],fs(a),!0):!1}function gt(){const e=Pa();return Object.entries(e).filter(([,a])=>$e(a)&&$e(a.data)).map(([a,t])=>({scope:a,savedAt:t.savedAt||"",data:t.data})).sort((a,t)=>String(t.savedAt).localeCompare(String(a.savedAt)))}function vs(e,a){const t=ht(e);return t?.savedAt?a?String(t.savedAt)>String(a):!0:!1}function ys(e,a=Date.now()){const t=ht(e);if(!t?.savedAt)return null;const s=Date.parse(t.savedAt);return Number.isFinite(s)?Math.max(0,Math.round((a-s)/6e4)):null}function $s(e,a=Date.now()){const t=fe(e);if(!t)return null;const s=Object.values(t).filter(r=>typeof r=="string").join(" ").trim().split(/\s+/).filter(Boolean).length,o=ys(e,a),n=o===null?"":o<1?"ahora mismo":o<60?`hace ${o} min`:`hace ${Math.round(o/60)} h`;return{words:s,when:n,minutes:o}}function we(){const e=gt();return{total:e.length,entries:e.filter(a=>a.scope.startsWith("entrada:")).length,bottles:e.filter(a=>a.scope==="botella").length,newest:e[0]?.savedAt||""}}function Bt(){try{localStorage.removeItem(xa)}catch{}return!0}const ws=["L","M","X","J","V","S","D"],Pt=e=>ws[(qe(e).getDay()+6)%7];function Ss(e,a,t=""){const o=2*Math.PI*26,n=(Math.min(100,Math.max(0,e))/100*o).toFixed(2);return`<div class="ring-widget ${e>=100?"is-full":""}">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle class="ring-track" cx="32" cy="32" r="26"/>
      <circle class="ring-fill" cx="32" cy="32" r="26" stroke-dasharray="${n} ${o.toFixed(2)}"/>
    </svg>
    <span class="ring-value">${a}</span>
    ${t?`<span class="ring-sub">${d(t)}</span>`:""}
  </div>`}function ln(e=[],a=null,t=[],s=b(),o=b()){return e.length?`<div class="habit-board">${e.map((n,r)=>{const i=!!a?.habits?.[n.id],p=qa(t,n.id,s>o?s:o),c=os(t,n.id,7,s);return`<button type="button" class="habit-toggle ${i?"is-done":""}" style="--habit-i:${r}"
      data-action="toggle-habit" data-habit="${n.id}" data-date="${s}" aria-pressed="${i}">
      <span class="habit-tick" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.8 11.8 12.8 4.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span class="habit-copy">
        <strong>${d(n.name)}</strong>
        <small>${i?"hecho hoy":s===o?"toca para marcarlo":"aún por hacer"}</small>
      </span>
      <span class="habit-dots" aria-hidden="true">
        ${Array.from({length:7},(u,g)=>{const $=A(s,g-6);return`<i class="${!!t.find(f=>f.date===$)?.habits?.[n.id]?"on":""} ${$>o?"future":""}"></i>`}).join("")}
      </span>
      <span class="habit-streak ${p?"is-hot":""}" title="Racha actual">${p?`${l("flame")} ${p}`:`${c.done}/7`}</span>
    </button>`}).join("")}</div>`:""}function dn(e=[],a=[],{days:t=28,end:s=b(),today:o=b(),title:n="Tus últimas 4 semanas"}={}){if(!a.length)return"";const{dates:r,rows:i}=eo(e,a,t,s,o),p=L(r[0],{day:"numeric",month:"short"}).replace(/\./g,"");return`<section class="card momentum-card">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${l("grid")} Constancia</p>
        <h2>${d(n)}</h2>
      </div>
      <span class="field-caption">${d(p)} → ${d(L(r[r.length-1],{day:"numeric",month:"short"}))}</span>
    </div>
    <p class="momentum-hint">Toca cualquier casilla para anotar o quitar un hábito de ese día. Solo días pasados o el de hoy.</p>
    <div class="momentum-scroll">
      <div class="momentum-grid" style="--cols:${t}">
        <span class="momentum-corner"></span>
        ${r.map(c=>`<span class="momentum-day ${c===o?"is-today":""}">${c.slice(8,10)}</span>`).join("")}
        ${i.map(c=>`
          <span class="momentum-name" title="${d(c.habit.name)}">${d(c.habit.name)}</span>
          ${c.cells.map(u=>`<button type="button" class="momentum-cell ${u.done?"is-done":""} ${u.future?"is-future":""} ${u.recorded?"":"is-blank"}"
            ${u.future?"disabled":""} data-action="toggle-habit" data-habit="${c.habit.id}" data-date="${u.date}" aria-pressed="${u.done}"
            aria-label="${d(c.habit.name)} · ${L(u.date)} · ${u.done?"cumplido":"sin cumplir"}">
            <i></i>
          </button>`).join("")}
        `).join("")}
      </div>
      <div class="momentum-weekdays" style="--cols:${t}">
        <span class="momentum-corner"></span>
        ${r.map(c=>`<span class="${Pt(c)==="L"?"is-mon":""}">${Pt(c)}</span>`).join("")}
      </div>
    </div>
    <div class="momentum-legend">
      <span><i class="lg done"></i> cumplido</span>
      <span><i class="lg"></i> sin registrar</span>
      <span><i class="lg blank"></i> día sin entrada</span>
      <span class="momentum-weekday-note">${ws.join(" ")} · cada lunes resaltado</span>
    </div>
  </section>`}function cn(e=[],a=[],t=b()){return e.length?`<section class="card habit-stats-card">
    <div class="section-heading"><div><p class="eyebrow">${l("chart")}constancia por hábito</p><h2>Cada uno a su ritmo</h2></div><span class="field-caption">últimos 28 días</span></div>
    <ul class="habit-stats-list">
      ${e.map(s=>{const o=os(a,s.id,28,t),n=qa(a,s.id,t),r=ss(a,s.id);return`<li class="habit-stat-row">
          <div class="habit-stat-name">
            <strong>${d(s.name)}</strong>
            <small>${At(a,s.id)} ${At(a,s.id)===1?"día marcado":"días marcados"} en total</small>
          </div>
          <div class="habit-stat-meter"><i style="width:${o.pct}%"></i><span>${o.pct}%</span></div>
          <div class="habit-stat-figures">
            <span title="Racha actual">${l("flame")} <b>${n}</b> d</span>
            <span title="Mejor racha">${l("seal")} <b>${r}</b> d</span>
          </div>
          <div class="habit-stat-actions">
            <button type="button" class="icon-button ghost" data-action="edit-habit" data-habit="${s.id}" aria-label="Renombrar ${d(s.name)}">${l("pen")}</button>
            <button type="button" class="icon-button ghost delete-button" data-action="delete-habit" data-habit="${s.id}" data-name="${d(s.name)}" aria-label="Eliminar ${d(s.name)}">${l("trash")}</button>
          </div>
        </li>`}).join("")}
    </ul>
  </section>`:""}function un(e={},a=[]){const t=new Set(a.map(o=>o.name.toLowerCase())),s=(e.suggestedHabits||[]).filter(o=>!t.has(o.toLowerCase())).slice(0,6);return`<section class="card habit-composer">
    <div class="section-heading"><div><p class="eyebrow">${l("plus")}Nueva rutina</p><h2>Añade un hábito</h2></div><span class="field-caption">${a.length}/30</span></div>
    <div class="habit-add">
      <input id="new-habit" maxlength="40" placeholder="Nombre del hábito (ej. Leer 20 minutos)" aria-label="Nuevo hábito">
      <button type="button" class="button solid small-btn" data-action="add-habit">${l("plus")} Añadir</button>
    </div>
    ${s.length?`
      <p class="field-caption" style="margin-top:16px">Sugerencias para tu etapa · toca para añadir</p>
      <div class="tag-picker">
        ${s.map(o=>`<button type="button" class="tag-chip" data-action="add-suggested-habit" data-name="${d(o)}"><span>+ ${d(o)}</span></button>`).join("")}
      </div>`:""}
    ${a.length?"":'<p class="habit-empty">Aún no tienes hábitos. Añade uno, o marca algunos en tu perfil y aparecerán aquí.</p>'}
  </section>`}function pn(e={},a={},t=[]){return`<section class="card counters-board">
    <div class="section-heading">
      <div><p class="eyebrow">${l("drop")} Contadores</p><h2>Lo de hoy, en cifras</h2></div>
      <span class="field-caption">se guarda al instante</span>
    </div>
    ${Uo(e?.counters||{},ke,a,{action:"routine"})}
    ${t.length?`<p class="sleep-mood-insight">${l("spark")} ${d(t[0])}</p>`:""}
  </section>`}function mn(e={},a=b()){const t=e?.goals||[];return`<section class="card tomorrow-board">
    <div class="section-heading">
      <div><p class="eyebrow">${l("sail")} Para mañana</p><h2>La lista de la próxima marea</h2></div>
      <button type="button" class="text-button" data-action="add-goal-routine">${l("plus")} Añadir tarea</button>
    </div>
    <label class="sr-only" for="routine-tomorrow">Intención para mañana</label>
    <textarea id="routine-tomorrow" class="tomorrow-intent" name="tomorrow" maxlength="600" rows="2"
      placeholder="Mañana quiero... (una frase basta)">${d(e?.tomorrow||"")}</textarea>
    <div class="task-list" id="routine-goals">
      ${t.length?t.map((s,o)=>`<div class="task-row">
        <span class="task-index">${String(o+1).padStart(2,"0")}</span>
        <input class="task-input" data-index="${o}" value="${d(s)}" maxlength="200" aria-label="Tarea ${o+1}">
        <button type="button" class="icon-button ghost delete-button" data-action="remove-goal-routine" data-index="${o}" aria-label="Quitar tarea">${l("close")}</button>
      </div>`).join(""):'<p class="habit-empty">Nada apuntado para mañana. Tres tareas concretas suelen funcionar mejor que diez genéricas.</p>'}
    </div>
  </section>`}function hn(e=[],a=null,t=[],s=b()){const o=e.filter(p=>a?.habits?.[p.id]).length,n=e.length?Math.round(o/e.length*100):0,r=e.length?Math.max(0,...e.map(p=>qa(t,p.id,s))):0,i=L(he(s),{day:"numeric",month:"short"});return`<section class="card routine-teaser">
    <div class="section-heading">
      <div><p class="eyebrow">${l("listChecks")} Rutina de hoy</p><h2>${o}/${e.length||0} ${e.length===1?"hábito":"hábitos"}</h2></div>
      ${Ss(n,`${n}%`)}
    </div>
    <p class="routine-teaser-note">${e.length?`La lista completa, los contadores y tus rachas viven ahora en su propia pestaña. Semana del ${d(i)}.`:"Todavía no hay hábitos: crea tu lista en la pestaña Rutina."}</p>
    <button type="button" class="text-button full-link" data-view="routine">Ir a Rutina ${l("arrow")}</button>
    ${r?`<span class="routine-teaser-flame">${l("flame")} racha de ${r} días</span>`:""}
  </section>`}const C=document.querySelector("#app");let S=[],x=[],H=[],h=Ba(),ue="",P="diary",v=b(),J=b(),ia=b(),Ne="shore",_e="hoy",se={text:"",mood:null,sea:"breeze"},je=7,K=!1,_=!1,G=!1,ca="",ua="",pa="",ma="grid",ha="list",Ce="pulse",ga="personal",We=!1,Le=null,bt=0,ft=0,ba=0,vt=0,Te=!1,Ve=!1,za=!1,fa=null,Qe="",Ft="",O="idle",ea=0,zt=!1,ee=!0;try{const e=window.matchMedia("(prefers-reduced-motion: reduce)");ee=!e.matches,e.addEventListener?.("change",a=>{ee=!a.matches,document.documentElement.dataset.motion=ee?"full":"calm"})}catch{}document.documentElement.dataset.motion=ee?"full":"calm";function Se(e,a=h){const t=V.find(s=>s.id===e)||V[0];document.documentElement.dataset.theme=t.id;try{const s=To(t.id,a);let o=document.querySelector('link[rel="icon"]');o||(o=document.createElement("link"),o.rel="icon",document.head.appendChild(o)),o.type="image/svg+xml",o.href=s;const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",t.colors[0]),document.title=a?.name?`Cuaderno de ${a.name}`:"Diario"}catch{}}function Ga(){S=Ha(),x=oa(),H=de(),h=Ba(),G=!!h.sidebarCollapsed,Se(h.theme,h)}try{Ga()}catch(e){ue="No se han podido leer los datos guardados. Revisa el almacenamiento del navegador o recupera una copia. "+e.message}const xs=[{label:"El cuaderno",items:[["diary","pen","Hoy"],["thoughts","wave","Pensamientos"],["archive","book","Archivo"]]},{label:"Constancia",items:[["routine","listChecks","Rutina"],["stats","chart","Progreso"]]},{label:"Tuyo",items:[["setup","sliders","Perfil"]]}],gn=["diary","thoughts","routine","archive","stats"];function ks(){return xs.flatMap(e=>e.items)}const qs=e=>ks().find(a=>a[0]===e)?.[2]||"Hoy";function Ms(e){if(e!=="thoughts")return"";const a=Da(H).some(t=>t.seen!==!0);return`<span class="nav-dot ${a?"is-new":""}" ${a?"":"hidden"} title="hay algo sin leer en la orilla"></span>`}function bn([e,a,t],s){const o=e==="thoughts"?Da(H).filter(n=>n.seen!==!0).length:0;return`<button class="nav-item ${P===e?"active":""}" style="--nav-i:${s}" data-view="${e}" title="${d(t)}" data-tooltip="${d(t)}" ${P===e?'aria-current="page"':""}>
    <span class="nav-index">${String(s+1).padStart(2,"0")}</span>
    <span class="nav-item-icon">${l(a)}${o?'<i class="nav-icon-ping" aria-hidden="true"></i>':""}</span>
    <span class="nav-label">${d(t)}</span>${Ms(e)}
  </button>`}function fn(){let e=0;return xs.map(a=>`<div class="nav-group">
    <p class="nav-group-label">${d(a.label)}</p>
    ${a.items.map(t=>bn(t,e++)).join("")}
  </div>`).join("")}function vn(){return`<nav class="tabbar" aria-label="Navegación inferior">
    ${gn.map(e=>{const a=ks().find(t=>t[0]===e);return a?`<button type="button" class="tabbar-item ${P===e?"active":""}" data-view="${e}" ${P===e?'aria-current="page"':""}>
        <span class="tabbar-icon">${l(a[1])}${Ms(e)}</span>
        <span class="tabbar-label">${d(a[2])}</span>
      </button>`:""}).join("")}
  </nav>`}function yn(){return`
  <div class="sidebar-backdrop" data-action="close-menu" aria-hidden="true"></div>
  <aside class="sidebar" aria-label="Menú principal">
    <div class="sidebar-top-row">
      <a href="#" class="brand" data-action="today" title="Ir a hoy">
        <span class="brand-mark"><span class="brand-full">diario</span><span class="brand-short">d</span><span class="brand-period">.</span></span>
      </a>
      <button type="button" class="icon-button sidebar-collapse-btn" data-action="toggle-sidebar" aria-label="Plegar o desplegar el menú">
        ${l("left")}
      </button>
    </div>
    <div class="brand-rule"></div>
    <div id="ex-libris-slot">${us(h,S.length)}</div>
    <div class="nav-wrap">
      <span class="nav-rail" aria-hidden="true"></span>
      <nav class="sidebar-nav" id="sidebar-nav" aria-label="Navegación principal">${fn()}</nav>
    </div>
    <div class="sidebar-bottom" id="sidebar-bottom">${Es()}</div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <div class="topbar-left">
        <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="false">${l("menu")}</button>
        <button class="icon-button ghost desktop-sidebar-toggle" data-action="toggle-sidebar" aria-label="Alternar barra lateral">${l("sidebar")}</button>
        <span class="breadcrumb"><span id="breadcrumb-owner">${h.name?`Cuaderno de ${d(h.name)}`:"Diario"}</span> <span>/</span> <span id="breadcrumb-view">${d(qs(P))}</span></span>
      </div>
      <div class="topbar-right">
        <span id="draft-chip-slot"></span>
        <button type="button" id="sea-quick" class="sea-quick" data-view="thoughts" title="El mar">
          ${l("wave")}
        </button>
        <button type="button" id="theme-pill" class="theme-pill" data-action="cycle-theme">
          <span class="topbar-favicon-mini" id="theme-pill-favicon">${ce(h.theme,h)}</span>
          <span id="theme-pill-label"></span>
        </button>
        <button type="button" class="avatar" id="avatar-slot" data-action="open-setup-wizard" title="Personalizar mi perfil, edad y gustos" aria-label="Personalizar mi perfil"></button>
      </div>
    </header>
    <main id="main"></main>
    <div class="tabbar-wrap">
      <span class="tabbar-rail" aria-hidden="true"></span>
      <nav class="tabbar" id="tabbar" aria-label="Navegación inferior">${vn()}</nav>
    </div>
    <footer class="page-footer">
      <span id="footer-motto">${l("leaf")} ${d(h.motto||"Un día a la vez.")}</span>
      <span id="footer-owner">${h.name?`Cuaderno de ${d(h.name)}`:"Guardado localmente en este navegador"}</span>
    </footer>
  </div>
  <div id="floating-save" class="floating-save-bar" aria-live="polite">
    <span id="floating-save-text">${l("pen")} Cambios sin guardar</span>
    <button type="button" class="button solid small-btn" data-action="quick-save">${l("stamp")} Guardar</button>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <dialog id="modal"></dialog>`}function Es(){const e=we();return`<div class="local-note">${l("lock")}<div><strong>Guardado en tu dispositivo</strong>${h.name?`Cuaderno de ${d(h.name)}.`:"Sin cuentas ni servidores externos."}</div></div>
    <div class="save-note ${e.total?"has-pending":""}" id="save-note">
      <span class="save-dot" data-state="${O}"></span>
      <div>
        <strong>${As()}</strong>
        <small>${d(Ls())}</small>
      </div>
    </div>`}function As(){if(ue)return"Sin guardar";switch(O){case"typing":case"saving":return"Guardando…";case"draft":return"Borrador guardado";case"error":return"No se pudo guardar";default:return ea?`Guardado ${Ds(ea)}`:"Todo guardado"}}function Ls(){const e=we();return O==="error"?"Tus palabras siguen en el borrador de este navegador.":O==="draft"&&e.total?`${e.total} ${e.total===1?"texto a medias":"textos a medias"} recuperables.`:ue?"Revisa el almacenamiento del navegador o descarga una copia.":"Se guarda solo, sin nube ni cuentas."}function Ds(e){const a=typeof e=="number"?e:Date.parse(e);if(!Number.isFinite(a))return"";const t=Math.round((Date.now()-a)/6e4);return t<1?"ahora mismo":t<60?`hace ${t} min`:t<1440?`hace ${Math.round(t/60)} h`:`el ${new Date(a).toLocaleDateString("es-ES",{day:"numeric",month:"short"})}`}function $n(){dr();const e=C.querySelector(".sidebar");e&&(e.classList.add("is-mounting"),setTimeout(()=>e.classList.remove("is-mounting"),900)),window.addEventListener("resize",()=>aa()),document.fonts?.ready?.then(()=>aa())}function aa(){const e=C.querySelector(".nav-wrap"),a=C.querySelector(".nav-rail");if(e&&a){const o=e.querySelector(".nav-item.active")||e.querySelector(".nav-item");o&&(a.style.setProperty("--rail-y",`${o.offsetTop}px`),a.style.setProperty("--rail-h",`${o.offsetHeight}px`),a.classList.add("is-ready"))}const t=C.querySelector("#tabbar"),s=C.querySelector(".tabbar-rail");if(t&&s){const o=t.querySelector(".tabbar-item.active")||t.querySelector(".tabbar-item");o&&(s.style.setProperty("--rail-x",`${o.offsetLeft}px`),s.style.setProperty("--rail-w",`${o.offsetWidth}px`),s.classList.add("is-ready"))}}function wn(){const e=V.find(E=>E.id===h.theme)||V[0],a=C.querySelector(".sidebar"),t=C.querySelector(".sidebar-backdrop"),s=C.querySelector(".mobile-menu");a&&(a.classList.toggle("is-open",_),a.classList.toggle("is-collapsed",G),a.classList.toggle("is-ready",!0)),t&&t.classList.toggle("is-visible",_),s&&s.setAttribute("aria-expanded",String(_));for(const E of[".sidebar-collapse-btn",".desktop-sidebar-toggle"]){const B=C.querySelector(E);B&&(B.title=`${G?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)"}`,B.setAttribute("aria-expanded",String(!G)))}const o=C.querySelector(".sidebar-collapse-btn .icon");o&&(o.outerHTML=l(G?"right":"left")),C.querySelectorAll("#sidebar-nav .nav-item, #tabbar .tabbar-item").forEach(E=>{const B=E.dataset.view===P;E.classList.toggle("active",B),B?E.setAttribute("aria-current","page"):E.removeAttribute("aria-current")}),Ts();const n=C.querySelector("#ex-libris-slot");n&&(n.innerHTML=us(h,S.length));const r=C.querySelector("#sidebar-bottom");r&&(r.innerHTML=Es());const i=C.querySelector("#breadcrumb-owner");i&&(i.textContent=h.name?`Cuaderno de ${h.name}`:"Diario");const p=C.querySelector("#breadcrumb-view");p&&(p.textContent=qs(P));const c=C.querySelector("#theme-pill-label");c&&(c.textContent=e.name);const u=C.querySelector("#theme-pill");u&&(u.title=`Cambiar papel e icono (${e.name})`);const g=C.querySelector("#theme-pill-favicon");g&&(g.innerHTML=ce(h.theme,h));const $=C.querySelector("#avatar-slot");$&&($.innerHTML=h.name?`<span class="avatar-initial">${d(h.name.slice(0,1).toUpperCase())}</span>`:l("user"));const M=C.querySelector("#footer-motto");M&&(M.innerHTML=`${l("leaf")} ${d(h.motto||"Un día a la vez.")}`);const f=C.querySelector("#footer-owner");f&&(f.textContent=h.name?`Cuaderno de ${h.name}`:"Guardado localmente en este navegador"),wt(),aa()}function w(e={}){const a=()=>{Se(h.theme,h),zt||(C.innerHTML=yn(),zt=!0,$n()),js(e),wn()};e.transition&&ee&&typeof document.startViewTransition=="function"?document.startViewTransition(a):a()}function js(e={}){const a=document.querySelector("#main");if(!a)return;P==="thoughts"&&pr();const t=Ft!==P,s=window.scrollY,o=Qe?`page-turn-${Qe}`:t?"view-enter":"";Qe="",a.innerHTML=`
    ${ue?`<div class="error-banner" role="alert">${d(ue)}</div>`:""}
    ${xn()}`,a.className=`${o}`,(t||Qe)&&(a.classList.remove("view-enter"),a.offsetWidth,a.classList.add("view-enter"),Sn(a)),$r(),sr(),Zn(),cr(),t?(Ft=P,window.scrollTo({top:0,behavior:e.instant?"auto":"smooth"})):s&&window.scrollTo(0,s),Bs()}function Sn(e){if(!ee)return;[...e.querySelectorAll(".page-heading, .sea-panel, .card, .day-hero")].slice(0,12).forEach((t,s)=>{t.style.setProperty("--enter-i",s),t.classList.add("is-entering"),setTimeout(()=>t.classList.remove("is-entering"),520+s*55)})}function na(e,a,t,s=""){return`<div class="page-heading">
    <div>${e?`<p class="eyebrow">${e}</p>`:""}<h1>${a}</h1>${t?`<p class="page-subtitle">${t}</p>`:""}</div>
    ${s}
  </div>`}function xn(){switch(P){case"diary":return Gt();case"thoughts":return Dn();case"routine":return Hn();case"archive":return In();case"stats":return Rn();case"setup":return Wn();default:return Gt()}}function kn(){return`<div class="day-navigation">
    <button type="button" data-action="previous" aria-label="Día anterior">${l("left")}<span>Anterior</span></button>
    <button type="button" data-action="today" class="today-button">Hoy</button>
    <button type="button" data-action="next" ${v>=b()?"disabled":""}><span>Siguiente</span>${l("right")}</button>
  </div>`}function qn(){return h.completed?"":`<section class="card setup-welcome-banner">
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
  </section>`}function Mn(e,a){const t=e?Object.values(e.habits||{}).filter(Boolean).length:0,s=Go(h.name),o=La(H,v),n=o.drifting.length,r=o.returned.length;return`<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Día</small><span>${sa(v,S)}</span></div>
      <div class="hero-meta">
        <p class="hero-greeting">${d(s)}</p>
        <span class="date-line">${L(v)}</span>
        <p class="hero-line">
          <span class="entry-status ${e?"":"pending"}" id="hero-words-chip">${Ns(e)}</span>
          ${x.length?`<button type="button" class="hero-link" data-view="routine" id="hero-routine-chip">${t} de ${x.length} en la rutina</button><span class="hero-dot">·</span>`:""}
          ${r?`<button type="button" class="hero-link is-new" data-view="thoughts">${r} ${r===1?"botella":"botellas"} en la orilla</button>`:n?`<button type="button" class="hero-link" data-view="thoughts">${n} ${n===1?"botella":"botellas"} por ahí fuera</button>`:""}
          <span class="hero-dot">·</span>
          <span class="save-status" data-save-status>${Os()}</span>
        </p>
      </div>
    </div>
    <div class="hero-right">
      ${kn()}
    </div>
  </div>`}function Qa(e,a,t,s,o=!0){const n=s?String(s).trim().split(/\s+/).length:0;return`<div class="writing-field" data-field="${e}">
    <label for="${e}">${a}<span class="word-count">${n} palabras</span></label>
    <textarea id="${e}" name="${e}" maxlength="20000" placeholder="${d(t)}" class="${o?"large":""}">${d(s||"")}</textarea>
  </div>`}function En(e=""){return`<div class="goal-row"><span class="goal-circle"></span>
    <input name="goal" aria-label="Objetivo para mañana" placeholder="Un objetivo concreto..." maxlength="500" value="${d(e)}">
    <button type="button" class="icon-button ghost" data-action="remove-goal" aria-label="Eliminar objetivo">${l("close")}</button>
  </div>`}function An(e,a){if(!e)return"";const t=x.filter(o=>e.habits?.[o.id]),s=h.name?`Cuaderno de ${h.name}`:"Resumen guardado";return`<section class="card daily-summary notebook-sheet reveal">
    <div class="sheet-header">
      <div>
        <p class="eyebrow">${l("book")} Día ${sa(e.date,S)}</p>
        <h2>${L(e.date)}</h2>
      </div>
      <span class="mood-tag" style="--mood:${T[e.mood-1].color}">${T[e.mood-1].emoji} ${T[e.mood-1].label}</span>
    </div>
    ${e.wordOfDay||e.capsule?`
      <div class="sheet-capsules">
        ${e.wordOfDay?`<div class="sheet-capsule-item"><span>Palabra del día</span><strong>«${d(e.wordOfDay)}»</strong></div>`:""}
        ${e.capsule?`<div class="sheet-capsule-item"><span>${d(a.capsuleLabel)}</span><strong>${d(e.capsule)}</strong></div>`:""}
      </div>
    `:""}
    <p class="sheet-narrative">${so(e)}</p>
    ${e.bestOfDay?`<div class="sheet-quote-note"><span>Lo mejor:</span> «${d(e.bestOfDay)}»</div>`:""}
    ${t.length?`<div class="sheet-habits-line">${l("check")} ${t.map(o=>`<b>${d(o.name)}</b>`).join(" · ")}</div>`:""}
    <div class="sheet-footer">
      <small>${d(s)} · ${ve(e)} palabras</small>
      <button type="button" class="text-button" data-action="read" data-date="${e.date}">Ver hoja completa ${l("arrow")}</button>
    </div>
  </section>`}function Ln(e){return e?!!(e.bestOfDay||e.differentToday||e.tomorrow||e.energy||e.stress||e.tags&&e.tags.length||e.gratitude&&e.gratitude.some(Boolean)):!1}function Gt(){const e=S.find(u=>u.date===v),a=F(h),t=za?{triggered:!1}:pt(e||{}),s=Va(v,ba),o=e?.mood?T[e.mood-1].color:"",n=e?.sleepHours??h.sleepGoal??a.sleepRecommended??7.5,r=e?.studyHours??0,i=We||Ln(e),p=[6,7,7.5,8,9],c=[0,1,2,3,4];return`
  ${qn()}
  ${Mn(e)}
  <div class="tide-rule-wrap">${bs()}</div>
  <div id="crisis-alert-slot">${hs(t,h)}</div>
  <div class="diary-layout ${Ve?"is-focus-writing":""}">
    <div class="diary-main">
      <form id="diary-form" style="${o?`--active-mood:${o}`:""}" autocomplete="off">
        <div id="entry-draft-slot" data-live="1"></div>

        <!-- 1 · CAPTURA RÁPIDA -->
        <section class="card mood-card-section quick-capture" style="--i:1">
          <div class="section-heading">
            <p class="section-index" style="margin-bottom:0">¿Cómo ha ido hoy?</p>
            <span class="capture-hint">${l("spark")} un clic vale como entrada</span>
          </div>
          <div class="mood-scale" role="radiogroup" aria-label="¿Cómo te ha ido?">
            ${T.map(u=>`<label class="mood-option" style="--mood-color:${u.color}">
              <input type="radio" name="mood" value="${u.value}" ${(e?.mood||0)===u.value?"checked":""}>
              <span class="mood-face">${u.emoji}</span>
              <span class="mood-label">${u.label}</span>
            </label>`).join("")}
          </div>

          <div class="quick-hours-strip">
            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="sleepHours">${l("moon")} Sueño</label>
                <div class="quick-pills" role="group" aria-label="Atajos de sueño">
                  ${p.map(u=>`<button type="button" class="quick-pill ${Number(n)===u?"active":""}" data-action="quick-number" data-target="sleepHours" data-val="${u}">${q(u)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="sleepHours" name="sleepHours" type="number" min="0" max="24" step="0.5" value="${n}">
                <span>horas (meta: ${q(h.sleepGoal||a.sleepRecommended)} h)</span>
              </div>
            </div>

            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="studyHours">${l("study")} ${d(a.focusLabel)}</label>
                <div class="quick-pills" role="group" aria-label="Atajos de dedicación">
                  ${c.map(u=>`<button type="button" class="quick-pill ${Number(r)===u?"active":""}" data-action="quick-number" data-target="studyHours" data-val="${u}">${q(u)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="studyHours" name="studyHours" type="number" min="0" max="24" step="0.5" value="${r}">
                <span>horas (meta: ${q(h.studyGoal??a.studyRecommended)} h)</span>
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
                ${l("spark")} Sugerir tema
              </button>
              <button type="button" class="icon-button ghost" data-action="toggle-focus-writing" title="${Ve?"Salir del modo enfoque":"Ampliar zona de escritura"}" aria-label="Modo enfoque">
                ${l("expand")}
              </button>
            </div>
          </div>
          <div id="writing-prompt-box" class="writing-prompt-banner ${Te?"is-open":""}" ${Te?"":"hidden"}>
            <div>
              <p id="writing-prompt-text">${d(s)}</p>
            </div>
            <div class="writing-prompt-actions">
              <button type="button" class="button outline small-btn" data-action="next-writing-prompt">${l("refresh")} Otra</button>
              <button type="button" class="button solid small-btn" data-action="insert-writing-prompt">${l("pen")} Usar</button>
            </div>
          </div>
          ${Qa("generalDay","Notas del día (opcional si solo quieres un registro rápido)",a.placeholders.generalDay,e?.generalDay,!0)}
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

        <!-- 3 · MÁS DETALLES (etiquetas, momentos, gratitud) -->
        <div class="extras-accordion ${i?"is-open":""}" id="extras-accordion">
          <button type="button" class="extras-toggle-btn" data-action="toggle-more-details" aria-expanded="${i}">
            <div>
              <strong>Añadir más detalles al día</strong>
              <small>Etiquetas, energía, lo mejor de hoy y tres cosas buenas · la rutina y los contadores viven en su pestaña</small>
            </div>
            <span class="extras-chevron">${l("chevronDown")}</span>
          </button>
          <div class="extras-Work-shell">
            <div class="extras-inner">
              <section class="card">
                <p class="section-index">Etiquetas de hoy</p>
                ${Ro(e?.tags||[],a.tags)}
              </section>

              <section class="card">
                <p class="section-index">Momentos y energía</p>
                <div class="scale-block" style="margin-bottom:16px">
                  ${Nt("energy",Jt,e?.energy,"bolt","Energía","Del 1 al 5","Opcional")}
                  ${Nt("stress",Kt,e?.stress,"storm","Estrés","Del 1 al 5","Opcional")}
                </div>
                ${Qa("bestOfDay","Lo mejor del día",a.placeholders.bestOfDay,e?.bestOfDay,!1)}
                ${Qa("differentToday","¿Qué ha sido distinto hoy?",a.placeholders.differentToday,e?.differentToday,!1)}
              </section>

              <section class="card">
                <p class="section-index">Tres cosas buenas</p>
                <div class="gratitude-fields">
                  ${["1. Hoy agradezco o valoro...","2. También...","3. Y además..."].map((u,g)=>`<label><span>0${g+1}</span><input name="gratitude${g}" aria-label="${u}" placeholder="${u}" maxlength="20000" value="${d(e?.gratitude?.[g]||"")}"></label>`).join("")}
                </div>
                <p class="aside-note" style="margin-top:14px">${l("listChecks")}<span>Lo de mañana (intención y tareas) se apunta en la pestaña <button type="button" class="inline-link" data-view="routine">Rutina</button>.</span></p>
              </section>
            </div>
          </div>
        </div>

        <div class="save-area">
          <span>${l("lock")} Se guarda al instante en tu navegador.</span>
          <button class="button solid save-button" type="submit" ${ue?"disabled":""}>${l("stamp")} Guardar día</button>
        </div>
      </form>
      ${An(e,a)}
    </div>

    <aside class="diary-aside">
      ${on(H)}
      <div id="inspiration-slot">${gs(v,bt,ft,h,e,e?.wordOfDay||"")}</div>
      ${hn(x,e,S,v)}
      ${Cs()}
      <div id="quote-slot">${ms(v,vt,h)}</div>
    </aside>
  </div>`}function Cs(){const e=he(v),a=A(e,6),t=X(S,e,a),s=ye(t);return`<section class="card week-preview">
    <div class="section-heading"><h2>Esta semana</h2><span class="tag">${t.length}/7 días</span></div>
    <div class="week-dots">
      ${Array.from({length:7},(o,n)=>{const r=A(e,n),i=t.find(p=>p.date===r);return`<button type="button" data-action="open-day" data-date="${r}" ${r>b()?"disabled":""} aria-label="${L(r)}${i?", "+T[i.mood-1].label:""}">
          <span>${["L","M","X","J","V","S","D"][n]}</span>
          <i class="${i?"filled":""} ${r===b()?"current":""}" style="--mood:${i?T[i.mood-1].color:""}">${i?l("check"):"·"}</i>
        </button>`}).join("")}
    </div>
    <div class="mini-metrics">
      <div>${l("heart")}<strong>${s.count?q(s.mood):"—"}<small>/5</small></strong><span>Ánimo</span></div>
      <div>${l("moon")}<strong>${s.count?q(s.sleep):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${l("study")}<strong>${s.count?q(s.study):"—"}<small>h</small></strong><span>Enfoque</span></div>
    </div>
    <button class="text-button full-link" data-view="stats">Ver progreso completo ${l("arrow")}</button>
  </section>`}function Dn(){const e=b(),a=La(H,e),t=[["shore","anchor","En la orilla",a.returned.length],["sea","wave","Por ahí fuera",a.drifting.length],["kept","bookmark","Ancladas",a.kept.length],["lost","storm","Nunca volvieron",a.lost.length]];return`${na("Pensamientos","El mar","Lo que no quieres dejar escrito aquí lo cierras y lo tiras. De vez en cuando vuelve algo.")}
  ${Jo(H,e)}
  <div class="tide-rule-wrap is-after-sea">${bs()}</div>
  <div class="ocean-layout">
    <div class="ocean-main">
      <div id="composer-slot">${en(h,e,se)}</div>
      <div class="segmented ocean-tabs">
        ${t.map(([s,o,n,r])=>`<button type="button" data-action="thoughts-tab" data-tab="${s}" class="${Ne===s?"active":""}">
          ${l(o)} ${d(n)}${r?`<span class="seg-count">${r}</span>`:""}
        </button>`).join("")}
      </div>
      <div id="ocean-body" class="tab-panel-enter">${jn(a,e)}</div>
    </div>
    <aside class="ocean-aside">
      ${Tn(a,e)}
    </aside>
  </div>`}function jn(e,a){if(!H.length)return nn(Ne);const s={shore:e.returned,sea:e.drifting,kept:e.kept,lost:e.lost}[Ne]??e.returned;return s.length?`<div class="bottle-grid">${s.map((o,n)=>an(o,a,n)).join("")}</div>`:Cn(Ne)}function Cn(e){const a={shore:["La orilla está seca","Cuando vuelva alguna, aparecerá aquí y en la portada."],sea:["Nada a la deriva","Lo que eches se verá por aquí hasta que el mar lo devuelva."],kept:["Nada anclado","Al abrir una botella puedes dejarla prendida del cuaderno."],lost:["El mar no se ha quedado nada","Todavía."]},[t,s]=a[e]||a.shore;return`${Sa(t,s,e==="lost"?"":`<button type="button" class="button outline" data-action="focus-composer">${l("pen")} Escribir un pensamiento</button>`)}`}function Tn(e,a){const t=e.drifting[0];return`<section class="card sea-rules">
    <p class="field-title">${l("wave")} Cómo va esto</p>
    <ol class="sea-rules-list">
      <li>Se escribe, se echa y se deja estar. No hay que volver a mirar.</li>
      <li>Cuanto más lejos la tires, más tarda y más fácil que no regrese.</li>
      <li>Lo decide este cuaderno, con tu texto y la fecha: sin servidores y sin IA.</li>
      <li>Si vuelve, la lees, la anclas o la tiras otra vez. Si no, se queda fuera.</li>
    </ol>
    ${t?`<p class="sea-rules-now">${d(nt(t,a))}.</p>`:'<p class="sea-rules-now">Nada en el agua ahora mismo.</p>'}
  </section>`}function Hn(){const e=S.find(t=>t.date===v);return`${na("Rutina","Hábitos, contadores y la lista de mañana","Todo lo que se marca en un toque y se guarda al instante, sin escribir una sola línea.",`
    <div class="segmented">
      ${[["hoy","listChecks","Hoy"],["week","grid","Semana"],["counters","drop","Contadores"],["streaks","flame","Rachas"]].map(([t,s,o])=>`<button type="button" data-action="routine-tab" data-tab="${t}" class="${_e===t?"active":""}">${l(s)} ${d(o)}</button>`).join("")}
    </div>
  `)}
  <div class="routine-layout">
    <div class="routine-main tab-panel-enter">
      ${On(e)}
      <div id="routine-body">${Bn(e)}</div>
    </div>
    <aside class="routine-aside">${Gn(e)}</aside>
  </div>`}function Nn(){return`<div class="day-navigation">
    <button type="button" data-action="shift-day" data-delta="-1" aria-label="Día anterior">${l("left")}<span>Anterior</span></button>
    <button type="button" data-action="today-routine" ${v===b()?"disabled":""}>${l("sun")} Hoy</button>
    <button type="button" data-action="shift-day" data-delta="1" ${v>=b()?"disabled":""}><span>Siguiente</span>${l("right")}</button>
  </div>`}function On(e){const a=x.filter(n=>e?.habits?.[n.id]).length,t=x.length?Math.round(a/x.length*100):0,s=x.length?a===0?"Aún no has marcado nada":a===x.length?"Rutina completa":`Vas a ${a} de ${x.length}`:"Tu lista está vacía",o=t>=100?"Todos los casilleros llenos: eso también se lee en tus estadísticas.":t>0?"Cada casilla cuenta igual que un párrafo entero.":"Si hoy no puedes con todo, marca uno y da el día por bueno.";return`<section class="card routine-hero">
    <div class="routine-hero-copy">
      <p class="eyebrow">${l("sun")} ${d(L(v,{weekday:"long",day:"numeric",month:"long"}))}</p>
      <h2>${d(s)}</h2>
      <p class="routine-hero-note">${d(o)}</p>
      ${Nn()}
    </div>
    ${Ss(t,x.length?`${t}%`:"—","de hoy")}
  </section>`}function Bn(e){const a=F(h),t=b();if(_e==="week")return`${dn(S,x,{days:35,end:t,today:t,title:"Tus últimas cinco semanas"})}${Pn()}`;if(_e==="counters"){const s=X(S,A(t,-27),t);return`${pn(e,h,[])||""}${ps(s,h)}`}return _e==="streaks"?x.length?`${cn(x,S,t)}${Fn()}`:Sa("Todavía no hay hábitos","Añade el primero y en unos días verás aquí sus rachas y su constancia.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="hoy">${l("plus")} Crear hábitos</button>`):`${x.length?`<section class="card habit-board-card">
    <div class="section-heading">
      <div><p class="eyebrow">${l("listChecks")} La tasklist de hoy</p><h2>Marcar y seguir</h2></div>
      <span class="field-caption">${x.filter(s=>e?.habits?.[s.id]).length}/${x.length}</span>
    </div>
    ${ln(x,e,S,v,t)}
    <p class="board-hint">${l("spark")} Toca un hábito para marcarlo: se guarda solo, sin botón de guardar.</p>
  </section>`:Sa("Sin hábitos todavía","Crea tu lista abajo o toma prestados los sugeridos para tu etapa.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="streaks">${l("flame")} Ver rachas</button>`)}
  ${mn(e,v)}
  ${un(a,x)}`}function Pn(){const e=he(v),a=A(e,6),t=X(S,e,a),s=x.map(o=>{const n=t.filter(r=>r.habits?.[o.id]).length;return{label:o.name,count:n,total:7,color:n>=5?"var(--green)":n>=3?"var(--ochre)":"var(--red)"}});return`<section class="card">
    <div class="section-heading"><div><p class="eyebrow">${l("week")}Esta semana</p><h2>${d(L(e,{day:"numeric",month:"short"}))} → ${d(L(a,{day:"numeric",month:"short"}))}</h2></div>
      <span class="tag">${t.length}/7 días con entrada</span></div>
    ${x.length?mt(s):'<p class="habit-empty">Añade hábitos para ver su semana.</p>'}
  </section>`}function Fn(){const e=x.map(t=>({h:t,best:ss(S,t.id),live:qa(S,t.id)})).filter(t=>t.best>0).sort((t,s)=>s.best-t.best).slice(0,6);if(!e.length)return"";const a=e[0].best||1;return`<section class="card streak-board">
    <div class="section-heading"><div><p class="eyebrow">${l("flame")}El muro de las rachas</p><h2>Tus mejores series</h2></div><span class="field-caption">días seguidos</span></div>
    <ol class="streak-ranks">
      ${e.map((t,s)=>`<li>
        <span class="streak-rank">${String(s+1).padStart(2,"0")}</span>
        <span class="streak-name">${d(t.h.name)}</span>
        <span class="streak-bar"><i style="width:${Math.max(6,Math.round(t.best/a*100))}%"></i></span>
        <span class="streak-num"><b>${t.best}</b> d${t.live?` · viva ${t.live}`:""}</span>
      </li>`).join("")}
    </ol>
  </section>`}function zn(){return x.length?S.filter(e=>x.every(a=>e.habits?.[a.id])).length:0}function Gn(e){const a=b(),t=X(S,A(a,-27),a),s=e?Math.min(100,Math.round(e.sleepHours/(h.sleepGoal||7.5)*100)):0;return`
  <section class="card routine-day-card">
    <div class="section-heading"><h2>El día en cifras</h2><span class="tag">${d(L(v,{day:"numeric",month:"short"}))}</span></div>
    <div class="mini-metrics">
      <div>${l("moon")}<strong>${e?q(e.sleepHours):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${l("study")}<strong>${e?q(e.studyHours):"—"}<small>h</small></strong><span>Enfoque</span></div>
      <div>${l("drop")}<strong>${e?.counters?.water||0}<small>v</small></strong><span>Agua</span></div>
    </div>
    ${e?`<div class="sleep-goal-bar"><span style="width:${s}%"></span></div>
      <p class="field-caption">${d(ns(e.sleepHours))}</p>`:'<p class="habit-empty">Este día no tiene entrada en el cuaderno.</p>'}
    <button type="button" class="text-button full-link" data-action="open-day" data-date="${v}">Escribir sobre este día ${l("arrow")}</button>
  </section>
  <section class="card">
    <div class="section-heading"><h2>Rachas del cuaderno</h2><span class="field-caption">28 días</span></div>
    <div class="streak-lines">
      <div><span>${l("flame")} Días seguidos escribiendo</span><strong>${as(S)}</strong></div>
      <div><span>${l("seal")} Mejor racha histórica</span><strong>${es(S)}</strong></div>
      <div><span>${l("check")} Días con toda la rutina</span><strong>${zn()}</strong></div>
      <div><span>${l("moon")} Sueño medio</span><strong>${t.length?q(ye(t).sleep):"—"} h</strong></div>
    </div>
  </section>
  ${Cs()}`}function In(){const e=[...new Set(S.flatMap(t=>t.tags||[]))],a=S.filter(t=>(!ua||t.mood===+ua)&&(!pa||(t.tags||[]).includes(pa))&&(!ca||[t.date,t.generalDay,t.bestOfDay,t.differentToday,t.tomorrow,t.wordOfDay,t.capsule,...t.gratitude,...t.goals||[],...t.tags||[]].join(" ").toLocaleLowerCase().includes(ca.toLocaleLowerCase()))).sort((t,s)=>s.date.localeCompare(t.date));return`${na("Archivo",h.name?`Recuerdos de ${d(h.name)}`:"Tus días guardados",`${S.length} ${S.length===1?"entrada":"entradas"} · ${q(S.reduce((t,s)=>t+ve(s),0))} palabras`,`
    <div class="segmented">
      <button type="button" data-action="archive-tab" data-tab="list" class="${ha==="list"?"active":""}">${l("book")} Lista</button>
      <button type="button" data-action="archive-tab" data-tab="calendar" class="${ha==="calendar"?"active":""}">${l("calendar")} Calendario</button>
    </div>
  `)}

  ${ha==="calendar"?`
    <div class="tab-panel-enter">
      <section class="card full-calendar">
        ${Wo(J,S,{selected:v})}
        <div class="mood-legend">
          ${T.map(t=>`<span><i style="background:${t.color}"></i>${t.label}</span>`).join("")}
        </div>
      </section>
    </div>
  `:`
    <div class="tab-panel-enter">
      <div class="history-controls">
        <label class="search-box">${l("search")}<input id="history-search" aria-label="Buscar en el diario" placeholder="Buscar por palabra, nota o etiqueta..." value="${d(ca)}"></label>
        <select id="history-mood" aria-label="Filtrar por estado de ánimo">
          <option value="">Todos los estados</option>
          ${T.map(t=>`<option value="${t.value}" ${ua==t.value?"selected":""}>${t.emoji} ${t.label}</option>`).join("")}
        </select>
        ${e.length?`
          <select id="history-tag" aria-label="Filtrar por etiqueta">
            <option value="">Todas las etiquetas</option>
            ${e.map(t=>`<option value="${d(t)}" ${pa===t?"selected":""}>#${d(t)}</option>`).join("")}
          </select>
        `:""}
        <div class="segmented">
          <button type="button" data-action="history-layout" data-layout="grid" class="${ma==="grid"?"active":""}">Tarjetas</button>
          <button type="button" data-action="history-layout" data-layout="timeline" class="${ma==="timeline"?"active":""}">Hilo</button>
        </div>
      </div>
      <div class="${ma==="timeline"?"history-timeline":"history-grid"}">
        ${a.length?a.map((t,s)=>{const o=Object.values(t.habits||{}).filter(Boolean).length;return`<article class="card history-card" style="--mood:${T[t.mood-1].color};--i:${Math.min(s,10)}">
            <div class="section-heading">
              <p class="eyebrow">Día ${sa(t.date,S)}</p>
              <span class="mood-tag" style="--mood:${T[t.mood-1].color}">${T[t.mood-1].emoji} ${T[t.mood-1].label}</span>
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
              <span class="chiplet">${l("moon")} ${q(t.sleepHours)} h</span>
              <span class="chiplet">${l("study")} ${q(t.studyHours)} h</span>
              ${x.length?`<span class="chiplet">${l("check")} ${o}/${x.length}</span>`:""}
              <span class="chiplet">${l("pen")} ${ve(t)} pal.</span>
            </div>
            <div class="history-actions">
              <button class="text-button" data-action="read" data-date="${t.date}">Abrir ${l("arrow")}</button>
              <button class="icon-button ghost" data-action="open-day" data-date="${t.date}" aria-label="Editar">${l("pen")}</button>
              <button class="icon-button ghost delete-button" data-action="delete" data-date="${t.date}" aria-label="Eliminar">${l("trash")}</button>
            </div>
          </article>`}).join(""):Sa(S.length?"Sin resultados":"Aún no hay entradas guardadas","Las páginas que guardes aparecerán aquí.")}
      </div>
    </div>
  `}`}function Rn(){return`${na("Progreso",h.name?`Tu evolución, ${d(h.name.split(" ")[0])}`:"Tu evolución","Tus patrones de descanso, ánimo, hábitos y metas personales.",`
    <div class="segmented">
      <button type="button" data-action="stats-tab" data-tab="pulse" class="${Ce==="pulse"?"active":""}">Pulso y metas</button>
      <button type="button" data-action="stats-tab" data-tab="week" class="${Ce==="week"?"active":""}">Semana</button>
      <button type="button" data-action="stats-tab" data-tab="month" class="${Ce==="month"?"active":""}">Mes</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${Ce==="week"?It(!1):Ce==="month"?It(!0):Un()}
  </div>`}function Un(){const e=b(),a=A(e,1-je),t=X(S,a,e),s=X(S,A(a,-je),A(a,-1)),o=ye(t),n=ye(s),r=no(S),i=F(h),p=(c,u)=>{if(t.length<3||s.length<3||!Number.isFinite(o[c])||!Number.isFinite(n[c]))return"";const g=o[c]-n[c];return`${g>0?"↑":g<0?"↓":"→"} ${q(Math.abs(g))}${u} vs. anterior`};return`
  <div class="ledger-grid">
    ${ie("Estado medio",o.count?q(o.mood):"—","/ 5",p("mood",""))}
    ${ie("Sueño medio",o.count?q(o.sleep):"—","h",p("sleep"," h"))}
    ${ie(i.focusLabel,o.count?q(o.study):"—","h",p("study"," h"))}
    ${ie("Racha actual",as(S),"días",`${o.count} días registrados`)}
  </div>
  ${ps(t,h)}
  <section class="card chart-card">
    <div class="section-heading">
      <h2>Ánimo y horas de sueño</h2>
      <div class="segmented">
        <button type="button" data-action="range" data-range="7" class="${je===7?"active":""}">7 días</button>
        <button type="button" data-action="range" data-range="30" class="${je===30?"active":""}">30 días</button>
      </div>
    </div>
    ${Qo(t,a,je,h)}
    <div class="chart-dates"><span>${L(a,{day:"numeric",month:"short"})}</span><span>${L(e,{day:"numeric",month:"short"})}</span></div>
  </section>
  <section class="card">
    <div class="section-heading">
      <h2>Últimos 28 días</h2>
      <span class="field-caption">Pulsa cualquier día para abrirlo</span>
    </div>
    ${_o(S,e,28)}
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Tendencias detectadas</h2>
      <div style="margin-top:10px">
        ${r.length?r.map(c=>`<p class="trend-item">${l("arrow")}<span>${c}</span></p>`).join(""):'<p class="habit-empty">Con 3 o más registros por semana verás comparativas automáticas aquí.</p>'}
      </div>
    </section>
    <section class="card">
      <h2>Etiquetas más frecuentes</h2>
      ${Lt(t).length?mt(Lt(t).slice(0,6).map(([c,u])=>({label:c,count:u,total:t.length,color:"var(--red)"}))):'<p class="habit-empty">Aún no hay etiquetas en este período.</p>'}
    </section>
  </div>`}function It(e){const[a,t]=e?Xt(J):[he(v),A(he(v),6)],s=X(S,a,t),o=ye(s);return`
  <div class="section-heading" style="margin-bottom:16px">
    <h2>${e?L(J,{month:"long",year:"numeric"}):`${L(he(v),{day:"numeric",month:"short"})} – ${L(A(he(v),6),{day:"numeric",month:"short",year:"numeric"})}`}</h2>
    <div class="period-controls">
      <button class="icon-button ghost" data-action="period-prev" data-monthly="${e?"1":"0"}" aria-label="Anterior">${l("left")}</button>
      <button class="icon-button ghost" data-action="period-next" data-monthly="${e?"1":"0"}" aria-label="Siguiente">${l("right")}</button>
    </div>
  </div>
  <div class="ledger-grid">
    ${ie("Días registrados",o.count,e?"días":"/ 7")}
    ${ie("Estado medio",o.count?q(o.mood):"—","/ 5")}
    ${ie("Sueño medio",o.count?q(o.sleep):"—","h")}
    ${ie("Dedicación media",o.count?q(o.study):"—","h")}
  </div>
  <section class="card period-summary">
    <span class="soft-icon">${l("leaf")}</span>
    <div>
      <p>${oo(o,e)}</p>
    </div>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Días destacados</h2>
      <div class="highlights" style="grid-template-columns:1fr 1fr">
        ${ra("Mejor día",o.best)}
        ${ra("Más sueño",o.mostSleep,"sleepHours")}
        ${ra("Más dedicación",o.mostStudy,"studyHours")}
        ${ra("Día más difícil",o.worst)}
      </div>
    </section>
    <section class="card">
      <h2>Distribución de estados</h2>
      <div style="margin-top:14px">
        ${mt(T.map((n,r)=>({label:`${n.emoji} ${n.label}`,count:o.moods[r],total:o.count,color:n.color})))}
      </div>
    </section>
  </div>`}function Wn(){return`${na("Perfil y ajustes","Hecho a tu medida","Personaliza tu identidad, tus gustos, el papel del cuaderno o haz una copia de seguridad.",`
    <div class="segmented">
      <button type="button" data-action="profile-tab" data-tab="personal" class="${ga==="personal"?"active":""}">${l("sliders")} Mi perfil</button>
      <button type="button" data-action="profile-tab" data-tab="data" class="${ga==="data"?"active":""}">${l("shield")} Datos y copias</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${ga==="data"?_n():Qn()}
  </div>`}function Qn(){const e=F(h),a=new Set(x.map(s=>s.name.toLowerCase())),t=new Set(h.interests||[]);return`<form id="setup-page-form" class="setup-page-grid">
    <section class="card" style="--i:1">
      <h2>Identidad y etapa vital</h2>
      <div class="setup-name-age-row">
        <div class="setup-field">
          <label for="sp-name">${l("user")} Tu nombre o apodo</label>
          <input id="sp-name" name="name" maxlength="50" placeholder="Tu nombre..." value="${d(h.name)}">
        </div>
        <div class="setup-field">
          <label for="sp-age">Tu edad</label>
          <div class="age-input-wrap">
            <input id="sp-age" name="age" type="number" min="10" max="110" step="1" placeholder="Ej. 20" value="${h.age??""}">
            <span>años</span>
          </div>
        </div>
      </div>

      <div class="setup-field">
        <label>Grupo de edad</label>
        <div class="age-group-grid" id="sp-age-groups">
          ${Ye.map(s=>`
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
        <input id="sp-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${d(h.motto)}">
      </div>
    </section>

    <section class="card" style="--i:2">
      <h2>Tus gustos y estilo</h2>
      <p class="field-caption" style="margin:6px 0 8px">El diario adapta sus contadores, etiquetas y frases a lo que marques aquí:</p>
      <div class="interests-grid">
        ${ka.map(s=>`
          <label class="interest-chip">
            <input type="checkbox" name="interests" value="${s.id}" ${t.has(s.id)?"checked":""}>
            <span>${l(s.icon)} ${d(s.label)}</span>
          </label>
        `).join("")}
      </div>

      <div class="two-columns" style="margin-top:16px">
        <div class="setup-field" style="margin-top:0">
          <label>Momento habitual</label>
          <div class="ritual-stack">
            ${Je.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="ritual" value="${s.id}" ${(h.ritual||"night")===s.id?"checked":""}>
                <span class="purpose-icon">${l(s.icon)}</span>
                <div><strong>${d(s.label)}</strong></div>
              </label>
            `).join("")}
          </div>
        </div>
        <div class="setup-field" style="margin-top:0">
          <label>Tono de las frases</label>
          <div class="ritual-stack">
            ${Ke.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="tone" value="${s.id}" ${(h.tone||"warm")===s.id?"checked":""}>
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
        ${l("compass")}
        <div>
          <strong>Etapa activa: ${d(e.group.title)} (${d(e.group.label)})</strong>
          <p>Sueño recomendado: <b>${q(e.sleepRecommended)} h</b> · Dedicación sugerida: <b>${q(e.studyRecommended)} h</b>.</p>
        </div>
      </div>
      <div class="goals-setup-grid">
        <div class="setup-field">
          <label for="sp-sleep">${l("moon")} Meta de sueño (h)</label>
          <input id="sp-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${h.sleepGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-study">${l("study")} Meta de dedicación (h)</label>
          <input id="sp-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${h.studyGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-water">${l("drop")} Meta de agua (vasos)</label>
          <input id="sp-water" name="waterGoal" type="number" min="1" max="25" step="1" value="${h.waterGoal}">
        </div>
      </div>
      <div class="setup-field" style="margin-top:16px">
        <label>Hábitos sugeridos para tu perfil</label>
        <div class="tag-picker" id="sp-suggested-habits">
          ${e.suggestedHabits.map(s=>{const o=a.has(s.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${d(s)}" ${o?"checked":""}><span>${o?"✓ ":"+ "}${d(s)}</span></label>`}).join("")}
        </div>
      </div>
      <div class="setup-field" style="margin-top:18px">
        <label>${l("quote")} Tus frases guardadas (${(h.savedQuotes||[]).length})</label>
        ${(h.savedQuotes||[]).length?`
          <div class="saved-quotes-list">
            ${h.savedQuotes.map((s,o)=>`
              <div class="saved-quote-item">
                <span>«${d(s)}»</span>
                <button type="button" class="icon-button ghost" data-action="remove-saved-quote" data-index="${o}" aria-label="Quitar frase">${l("close")}</button>
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
          ${V.map(s=>`
            <label class="theme-card">
              <input type="radio" name="theme" value="${s.id}" ${h.theme===s.id?"checked":""}>
              <div class="theme-card-top">
                <span class="theme-favicon-preview">${ce(s.id,h)}</span>
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
          <input type="checkbox" name="sidebarCollapsed" ${G?"checked":""}>
          <span><strong>Barra lateral compacta</strong><small>Reducir el menú a iconos en escritorio (Ctrl+B).</small></span>
        </label>
        <label class="toggle-row">
          <input type="checkbox" name="showDailyWord" ${h.showDailyWord!==!1?"checked":""}>
          <span><strong>Mostrar Palabra del día</strong><small>Muestra una palabra diaria en la parte superior.</small></span>
        </label>
        <label class="toggle-row">
          <input type="checkbox" name="showDailyTip" ${h.showDailyTip!==!1?"checked":""}>
          <span><strong>Mostrar Consejo del día</strong><small>Recomendaciones breves adaptadas a tu edad y gustos.</small></span>
        </label>
      </div>
    </section>

    <div class="save-area" style="grid-column:1/-1">
      <span>${l("lock")} Guardado localmente en este dispositivo.</span>
      <button type="submit" class="button solid save-button">${l("check")} Guardar perfil</button>
    </div>
  </form>`}function _n(){return`
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
  </section>`}function Vn(e){const a=S.find(s=>s.date===e),t=F(h);return a?{...a}:{date:e,mood:3,sleepHours:h.sleepGoal||t.sleepRecommended||7.5,studyHours:0,energy:null,stress:null,bestOfDay:"",differentToday:"",generalDay:"Registro rápido desde la rutina.",wordOfDay:"",capsule:"",gratitude:["","",""],tomorrow:"",goals:[],tags:[],counters:{},habits:{}}}function Oe(e,a){if(e>b())throw new Error("Ese día todavía no ha llegado.");S=ls({...Vn(e),...a})}function Ya(){return[...document.querySelectorAll("#routine-goals .task-input")].map(e=>e.value.trim())}function ne(){const e=document.querySelector("#routine-tomorrow");if(!e)return;const a=Ya().filter(Boolean);try{Oe(v,{tomorrow:e.value.trim(),goals:a})}catch(t){y(t.message||"No se pudo guardar la lista.",!0)}}function Zn(){const e=document.querySelector("#routine-tomorrow");e&&(e.addEventListener("change",ne),e.addEventListener("input",()=>xe("manana",ne,500)),document.querySelectorAll("#routine-goals .task-input").forEach(a=>{a.addEventListener("change",ne),a.addEventListener("input",()=>xe("manana-tarea",ne,600)),a.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),ne(),w()),t.key==="Escape"&&w()})}))}let Rt=null;function Yn(e,a,t){const s=e.closest(".counter-row"),o=document.querySelector(`#hint-${a}`);if(o&&(o.textContent=Ma(a,t)),e.classList.remove("num-bump"),e.offsetWidth,e.classList.add("num-bump"),a==="water"){const n=h.waterGoal||8,r=s?.querySelector(".counter-goal-pill"),i=s?.querySelector(".counter-progress i");r&&(r.textContent=`Meta: ${t}/${n}`,r.classList.toggle("met",t>=n)),i&&(i.style.width=`${Math.min(100,Math.round(t/n*100))}%`)}}function Jn(){const e={},a=S.find(t=>t.date===v);for(const t of ke){const s=document.querySelector(`[name="counter_${t.key}"]`);e[t.key]=s?parseFloat(s.value)||0:Number(a?.counters?.[t.key])||0}try{Oe(v,{counters:e})}catch(t){y(t.message||"No se pudo guardar el contador.",!0)}}function Ut(e,a){const t=String(a||"").trim().slice(0,40),s=x.find(o=>o.id===e);if(s){if(!t){y("El hábito necesita un nombre.",!0);return}if(t.toLowerCase()!==s.name.toLowerCase()&&x.some(o=>o.name.toLowerCase()===t.toLowerCase())){y("Ya tienes un hábito con ese nombre.",!0);return}t!==s.name&&(x=wa({...s,name:t}),w(),y("Hábito renombrado"))}}function Kn(e){if(!ee)return;const a=document.querySelector(`.habit-toggle[data-habit="${e}"]`);a&&(a.classList.add("is-flashed"),setTimeout(()=>a.classList.remove("is-flashed"),700));const t=document.querySelector(`.momentum-cell[data-habit="${e}"]`);t&&(t.classList.add("is-flashed"),setTimeout(()=>t.classList.remove("is-flashed"),700))}function Ts(){const e=Da(H).some(a=>a.seen!==!0);document.querySelectorAll(".nav-dot").forEach(a=>{a.hidden=!e,a.classList.toggle("is-new",e)}),document.querySelectorAll('#sea-quick,.tabbar-item[data-view="thoughts"]').forEach(a=>{a.classList.toggle("has-new",e)})}function Ja(e){const a=H.find(n=>n.id===e);if(!a)return;a.status==="returned"&&a.seen!==!0&&(H=be(e,{seen:!0}),Ts());const t=a.reply?"":fe(Z.reply(e))?.text||"",s=Me(tn({...a,replyDraft:t},b(),h));ar(s);const o=()=>{s.close(),w()};s.onclick=n=>{const r=n.target.closest("[data-modal]")?.dataset.modal;if(!r){n.target===s&&s.close();return}if(r==="close"){o();return}if(r==="reply"){const i=(s.querySelector("#bottle-reply")?.value||"").trim();if(!i){y("Escribe primero lo que quieres contestarte.",!0);return}le(`respuesta:${e}`),H=be(e,{reply:i,seen:!0,repliedAt:new Date().toISOString()}),te(Z.reply(e)),s.close(),w(),Ja(e),y("Contestada.");return}if(r==="reply-clear"){le(`respuesta:${e}`),te(Z.reply(e)),H=be(e,{reply:""}),s.close(),w(),Ja(e);return}if(r==="keep"){const i=!a.kept;H=be(e,{kept:i,keptOn:i?b():null,seen:!0}),o(),y(i?"Anclada.":"Desanclada.");return}if(r==="to-entry"){try{Xn(a),o(),y("Copiado a la entrada de hoy.")}catch(i){y(i.message||"No se pudo copiar.",!0)}return}if(r==="recast"){H=cs(e),o(),y("Otra vez fuera.");return}}}function Xn(e){const a=b(),t=S.find(n=>n.date===a),s=`Del mar (botella del ${L(e.castAt,{day:"numeric",month:"long"})}): «${e.text}»`,o=[t?.generalDay,s].filter(Boolean).join(`

`);Oe(a,{generalDay:o,capsule:t?.capsule||String(e.text).slice(0,240),tags:[...new Set([...t?.tags||[],"Pensamiento"])].slice(0,20)}),H=be(e.id,{kept:!0,keptOn:a,seen:!0}),v=a,P="diary"}function er(e){if((document.querySelector("#ocean-fx")||document.body)===document.body){const r=document.createElement("div");r.id="ocean-fx",r.className="ocean-fx",document.body.appendChild(r)}const t=document.querySelector("#ocean-fx"),o=(document.querySelector(".sea-panel")||document.querySelector("#bottle-form"))?.getBoundingClientRect(),n=document.createElement("div");n.className="splash-wrap",n.innerHTML=sn(e),o&&(n.style.setProperty("--to-x",`${Math.round(o.left+o.width*.5)}px`),n.style.setProperty("--to-y",`${Math.round(o.top+o.height*.42)}px`)),t.appendChild(n),document.documentElement.classList.add("is-casting"),setTimeout(()=>document.documentElement.classList.remove("is-casting"),1400),setTimeout(()=>n.remove(),ee?1500:60)}function ar(e){const a=e.querySelector(".bottle-modal");!a||!ee||(a.classList.add("is-uncorking"),setTimeout(()=>a.classList.remove("is-uncorking"),1100))}function tr(e){const a=new FormData(e),t=(a.get("text")||"").toString().trim();if(t.length<2){y("Escribe algo antes de soltar la botella.",!0);return}const s=a.get("mood"),o=a.get("sea")||"breeze";try{const n=crypto.randomUUID();H=ds({id:n,text:t,mood:s?+s:null,sea:o,castAt:b()});const r=H.find(i=>i.id===n);le("botella"),te(Z.bottle()),se={text:"",mood:null,sea:o},ta="",Ne="sea",er(r||{}),R("saved"),setTimeout(()=>w(),ee?1150:0),y("Ya está fuera.")}catch(n){y(n.message||"No se pudo echar la botella al mar.",!0)}}function sr(){const e=document.querySelector("#bottle-form");if(!e)return;const a=e.querySelector("#bottle-text"),t=e.querySelector("#bottle-words"),s=()=>{const r=e.querySelector('[name="mood"]:checked');se={text:a?.value||"",mood:r?+r.value:null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"},t&&(t.textContent=`${Ps(a?.value||"")} palabras`)},o=e.querySelector('button[type="submit"]'),n=()=>{if(!o)return;const r=!!(a?.value||"").trim();o.disabled=!r,o.classList.toggle("is-armed",r)};s(),n(),a?.addEventListener("input",()=>{s(),n()}),e.addEventListener("change",()=>{s(),n()}),document.activeElement===a&&a.value&&a.setSelectionRange(a.value.length,a.value.length),e.addEventListener("submit",r=>{r.preventDefault(),tr(e)})}function or(e){H.find(t=>t.id===e)&&Ze({title:"¿Romper esta botella?",text:"El pensamiento se borrará de este navegador. No se puede deshacer.",confirmLabel:"Romperla",danger:!0}).then(t=>{t&&(H=Ao(e),w(),y("Rota."))})}const Ia=["generalDay","bestOfDay","differentToday","capsule","wordOfDay","tomorrow","gratitude0","gratitude1","gratitude2","tagCustom"],ae=new Map;let ta="",Ka=!1;function le(e){const a=ae.get(e);a&&(clearTimeout(a),ae.delete(e))}function xe(e,a,t=460){clearTimeout(ae.get(e)),ae.set(e,setTimeout(()=>{ae.delete(e),a()},t))}function He(e,a){ae.has(e)&&(clearTimeout(ae.get(e)),ae.delete(e),a())}function pe(){return Z.entry(v)}function Hs(e){const a={};if(!e)return a;for(const r of Ia){const i=e.querySelector(`[name="${r}"]`);i&&typeof i.value=="string"&&(a[r]=i.value)}for(const r of["mood","energy","stress"]){const i=e.querySelector(`[name="${r}"]:checked`);i&&(a[r]=Number(i.value))}for(const r of["sleepHours","studyHours"]){const i=e.querySelector(`[name="${r}"]`);i&&i.value!==""&&(a[r]=Number(i.value))}const t=[...e.querySelectorAll('[name="tags"]:checked')].map(r=>r.value);t.length&&(a.tags=t);const s={};for(const r of e.querySelectorAll('[name^="counter_"]'))s[r.name.slice(8)]=Number(r.value)||0;Object.keys(s).length&&(a.counters=s);const o={};for(const r of e.querySelectorAll('[name^="habit_"]'))o[r.name.slice(6)]=r.checked;Object.keys(o).length&&(a.habits=o);const n=[...e.querySelectorAll('[name="goal"]')].map(r=>r.value).filter(r=>r.trim());return n.length&&(a.goals=n),a}function nr(e){const a=S.find(o=>o.date===v);if(!a)return!Object.keys(e).length;for(const o of Ia){if(!(o in e))continue;let n="";if(o.startsWith("gratitude"))n=(a.gratitude||[])[+o.slice(9)]||"";else{if(o==="tagCustom")continue;n=a[o]??""}if(String(e[o]??"").trim()!==String(n).trim())return!1}for(const o of["mood","energy","stress","sleepHours","studyHours"]){if(e[o]===void 0)continue;const n=a[o];if(n==null){if(Number(e[o])!==0&&e[o]!==3)return!1;continue}if(Number(e[o])!==Number(n))return!1}const t=a.counters||{};for(const[o,n]of Object.entries(e.counters||{}))if(Number(n)!==Number(t[o]||0))return!1;const s=a.habits||{};for(const[o,n]of Object.entries(e.habits||{}))if(!!n!=!!s[o])return!1;return!((a.tags||[]).slice().sort().join("|")!==(e.tags||[]).slice().sort().join("|")||(a.goals||[]).join("|")!==(e.goals||[]).join("|"))}function yt(){const e=document.querySelector("#diary-form");if(!e)return;const a=Hs(e);if(nr(a)){const s=te(pe());R(s||O==="typing"?"saved":O),et();return}const t=Fa(pe(),a);t&&!t.ok?R("error"):t&&R("draft"),et()}function $t(){const e=document.querySelector("#bottle-form");if(!e)return;const a=Fa(Z.bottle(),{text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"});a&&!a.ok&&R("error")}function rr(e,a){!a||!document.contains(a)||Fa(Z.reply(e),{text:a.value||""})}function Wt(){R("typing"),xe("entrada",yt,420),xe("autosave",()=>Ie({silent:!0}),2400)}function Qt(){const e=document.querySelector("#bottle-form");if(!e)return;se={text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"},R("typing"),xe("botella",$t,380)}function ir(){const e=document.querySelector("#setup-page-form");if(!e)return;const a={};for(const s of e.querySelectorAll('textarea,input[type="text"],input:not([type])'))s.name&&(a[s.name]=s.value);const t=e.querySelector("#new-custom-quote");t?.value&&(a.customQuote=t.value),Fa(Z.setup(),a)}function lr(){xe("perfil",ir,700)}function dr(){C.addEventListener("input",e=>{const a=e.target;if(!(!a||!a.closest)){if(a.closest("#diary-form")){Wt();return}if(a.closest("#bottle-form")){Qt();return}if(a.closest("#setup-page-form")){lr();return}if(a.id==="bottle-reply"&&a.closest("#modal")){const t=a.closest("[data-modal-bottle]")?.dataset.modalBottle;t&&xe(`respuesta:${t}`,()=>rr(t,a),360)}}}),C.addEventListener("change",e=>{const a=e.target;!a||!a.closest||(a.closest("#diary-form")&&Wt(),a.closest("#bottle-form")&&Qt())}),window.addEventListener("pagehide",Xa),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Xa()})}function Xa(){He("entrada",yt),He("botella",$t),He("manana",ne),He("manana-tarea",ne);for(const[e,a]of[...ae.entries()])e.startsWith("respuesta:")&&(clearTimeout(a),ae.delete(e));document.querySelector("#diary-form")&&!Ka&&O==="draft"&&Ie({silent:!0,final:!0})}function cr(){ur(),et()}function _t(e,a,t){if(t==null)return;const s=e.querySelector(`[name="${a}"]`);if(s){if(s.type==="radio"){const o=e.querySelector(`[name="${a}"][value="${t}"]`);o&&(o.checked=!0);return}s.value=Array.isArray(t)?t.join(`
`):t}}function ur(){const e=document.querySelector("#diary-form");if(!e)return;const a=S.find(s=>s.date===v);if(!vs(pe(),a?.updatedAt))return;const t=fe(pe());if(t){for(const s of Ia)_t(e,s,t[s]);for(const s of["mood","energy","stress","sleepHours","studyHours"])t[s]!==void 0&&_t(e,s,t[s]);if(Array.isArray(t.tags)&&e.querySelectorAll('[name="tags"]').forEach(s=>{s.checked=t.tags.includes(s.value)}),t.counters)for(const[s,o]of Object.entries(t.counters)){const n=e.querySelector(`[name="counter_${s}"]`);n&&(n.value=o)}if(t.habits)for(const[s,o]of Object.entries(t.habits)){const n=e.querySelector(`[name="habit_${s}"]`);n&&(n.checked=!!o)}Array.isArray(t.goals)&&[...e.querySelectorAll('[name="goal"]')].forEach((o,n)=>{t.goals[n]!==void 0&&(o.value=t.goals[n])}),e.dispatchEvent(new Event("input",{bubbles:!0})),R("draft")}}function et(){const e=document.querySelector("#entry-draft-slot");if(!e)return;const a=S.find(o=>o.date===v),t=e.dataset.live==="1";if(!t&&!vs(pe(),a?.updatedAt)){e.innerHTML="";return}const s=$s(pe());if(!s){e.innerHTML="";return}e.innerHTML=`<div class="draft-note ${t?"is-live":""}" role="status">
    ${l(t?"pen":"refresh")}
    <span>${t?`Escribiendo: guardado <b>${d(s.when||"ahora mismo")}</b> · ${s.words} palabras`:`Recuperado de donde lo dejaste <b>${d(s.when)}</b> · ${s.words} palabras`}</span>
    <button type="button" class="text-button" data-action="commit-draft">${l("stamp")} Dejarlo escrito ya</button>
    <button type="button" class="text-button is-danger" data-action="discard-draft">${l("close")} Descartar</button>
  </div>`}function pr(){if(se.text||ta)return;const e=fe(Z.bottle());e?.text&&(se={text:e.text,mood:e.mood||null,sea:e.sea||"breeze"},ta=$s(Z.bottle())?.when||"")}function mr(e){return!!(Ia.map(t=>String(e[t]||"")).join(" ").trim().split(/\s+/).filter(Boolean).length>3||Object.values(e.counters||{}).some(t=>Number(t)>0)||Object.values(e.habits||{}).some(Boolean)||(e.tags||[]).length||(e.gratitude0||"").trim()||(e.gratitude1||"").trim()||(e.gratitude2||"").trim())}function Ie({silent:e=!1,final:a=!1}={}){const t=document.querySelector("#diary-form");if(!t||ue)return!1;const s=Hs(t);if(e&&!mr(s))return!1;Ka=!0,le("entrada"),le("autosave");try{const o=yr(St(t));if(S=ls(o),te(pe()),K=!1,R(e?"autosaved":"saved"),hr(S.find(n=>n.date===v)),e){if(a)try{localStorage.setItem("diario.lastflush.v1",JSON.stringify({at:new Date().toISOString(),date:v}))}catch{}}else{w(),Sr(),y("Día guardado"),document.querySelector(".daily-summary")?.classList.add("reveal");const n=pt(o);n.triggered&&n.level==="high"&&setTimeout(()=>Gs("help"),550)}return!0}catch(o){return R("error"),e?String(o.message||"").includes("Ese día")||y("No he podido autoguardar; tu texto sigue a salvo en el borrador.",!0):y(o.message||"No se ha podido guardar este día.",!0),!1}finally{Ka=!1}}function hr(e){const a=e||S.find(s=>s.date===v),t=document.querySelector("#hero-words-chip");t&&(t.innerHTML=Ns(a),t.classList.toggle("pending",!a),t.classList.remove("is-flash"),t.offsetWidth,t.classList.add("is-flash")),wt()}function Ns(e){if(!e)return"todavía sin escribir";const a=ve(e);return`${a} ${a===1?"palabra":"palabras"} escritas`}function R(e){(e==="saved"||e==="autosaved")&&(ea=Date.now()),O=e,Bs()}function Os(){const e={typing:["pen","Escribiendo…","is-working"],saving:["save","Guardando…","is-working"],draft:["paper","Borrador guardado","is-draft"],error:["close","No se ha guardado","is-error"],autosaved:["check","Autoguardado","is-ok"],idle:["check",ea?`Guardado ${Ds(ea)}`:"Todo guardado","is-ok"]},[a,t,s]=e[O]||e.idle;return`${l(a)}<span>${d(t)}</span>`}function Bs(){document.querySelectorAll("[data-save-status]").forEach(t=>{t.className=`save-status ${O==="draft"?"is-draft":""} ${O==="error"?"is-error":""} ${O==="typing"||O==="saving"?"is-working":""}`,t.innerHTML=Os()});const e=document.querySelector("#save-note");e&&(e.outerHTML=`<div class="save-note ${we().total?"has-pending":""}" id="save-note">
      <span class="save-dot ${O==="error"?"is-error":O==="draft"?"is-draft":"is-ok"}"></span>
      <div><strong>${As()}</strong><small>${d(Ls())}</small></div>
    </div>`);const a=document.querySelector("#floating-save");if(a){const t=O==="error"||K;a.classList.toggle("is-visible",t);const s=document.querySelector("#floating-save-text");s&&(s.innerHTML=O==="error"?`${l("close")} El autoguardado falló · tu texto está en el borrador`:`${l("pen")} Cambios sin guardar`)}wt()}function wt(){const e=document.querySelector("#draft-chip-slot");if(!e)return;const a=we();if(!a.total){e.firstElementChild&&(e.innerHTML="");return}e.innerHTML=`<button type="button" class="draft-chip" data-action="show-drafts" title="${a.total} ${a.total===1?"texto a medias guardado":"textos a medias guardados"}">
    ${l("paper")}<span>${a.total}</span>
  </button>`}function gr(e){const a=Object.entries(e.data||{}).filter(([,n])=>typeof n=="string").map(([,n])=>n).join(" ").replace(/\s+/g," ").trim(),t=a?a.split(/\s+/).length:0,s=ys(e.scope),o=s===null?"":s<1?"hace un momento":s<60?`hace ${s} min`:`el ${new Date(e.savedAt).toLocaleDateString("es-ES",{day:"numeric",month:"short"})}`;return{scope:e.scope,label:br(e.scope),words:t,when:o,preview:a?`«${a.slice(0,76)}${a.length>76?"…":""}»`:"(solo cifras y marcas)",goto:e.scope.startsWith("entrada:")?e.scope.slice(8):""}}function Vt(){const e=gt().map(gr),a=e.length?e.map(t=>`
    <li class="draft-row">
      <div class="draft-row-main">
        <strong>${d(t.label)}</strong>
        <small>${t.words} palabras · ${d(t.when)} · ${d(t.preview)}</small>
      </div>
      <div class="draft-row-actions">
        ${t.goto?`<button type="button" class="text-button" data-modal="goto" data-date="${d(t.goto)}">${l("arrow")} Ir a recuperarlo</button>`:""}
        <button type="button" class="text-button is-danger" data-modal="drop" data-scope="${d(t.scope)}">${l("close")} Descartar</button>
      </div>
    </li>`).join(""):`<li class="draft-row is-empty">${l("check")} No hay nada a medias: todo está escrito ya en el cuaderno.</li>`;return`<div class="modal-card drafts-modal">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${l("close")}</button>
    <p class="eyebrow">${l("paper")} Lo que se quedó a medias</p>
    <h2>Ni una palabra perdida</h2>
    <p class="modal-lead">Esto es lo que escribiste y todavía no está cerrado en el cuaderno. Se guarda solo en este dispositivo: nada viaja a ningún sitio.</p>
    <ul class="draft-list">${a}</ul>
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${e.length?`<button class="button danger" data-modal="drop-all">${l("trash")} Descartar todos</button>`:""}
      <button class="button solid" data-modal="save-all">${l("stamp")} Escribirlo todo ahora</button>
    </div>
  </div>`}function br(e){return e.startsWith("entrada:")?`La entrada del ${L(e.slice(8),{day:"numeric",month:"long"})}`:e==="botella"?"Una botella a medio escribir":e.startsWith("respuesta:")?"Una respuesta a una botella":e==="perfil"?"Tu perfil":"Un texto pendiente"}function fr(){const e=Me(Vt());e.onclick=a=>{const t=a.target.closest("[data-modal]"),s=t?.dataset.modal;if(!s){a.target===e&&e.close();return}if(s==="close"){e.close(),w();return}if(s==="drop"){te(t.dataset.scope),e.innerHTML=Vt(),R(we().total?"draft":"saved"),w(),e.showModal(),y("Borrador descartado");return}if(s==="drop-all"){Bt(),e.close(),w(),y("Todos los borradores descartados");return}if(s==="save-all"){const o=we().total;for(const n of gt())if(n.scope.startsWith("entrada:"))v=n.scope.slice(8),P="diary",js(),Ie({silent:!1});else if(n.scope==="botella"&&fe("botella")?.text)vr(fe("botella"));else if(n.scope.startsWith("respuesta:")){const r=n.scope.slice(10),i=fe(n.scope)?.text;i&&(H=be(r,{reply:i,seen:!0,repliedAt:new Date().toISOString()}),y("Respuesta guardada"))}e.close(),Bt(),w(),y(o?`Cerrados ${o} textos a medias`:"No había nada que escribir");return}if(s==="goto"){e.close(),re(t.dataset.date);return}}}function vr(e){if(e?.text)try{const a=crypto.randomUUID();H=ds({id:a,text:e.text,mood:e.mood||null,sea:e.sea||"breeze",castAt:b()}),te(Z.bottle()),se={text:"",mood:null,sea:e.sea||"breeze"},ta="",y("Ya está fuera.")}catch(a){y(a.message||"No se pudo echar la botella al mar.",!0)}}function Ps(e){const a=String(e||"").trim();return a?a.split(/\s+/).length:0}function St(e){const a=new FormData(e),t=S.find(N=>N.date===v),s=F(h),o=(a.get("tagCustom")||"").toString().trim(),n=[...new Set([...a.getAll("tags").map(N=>N.toString().trim()),o].filter(Boolean))],r={};for(const N of ke){const me=e.querySelector(`[name="counter_${N.key}"]`);r[N.key]=me?parseFloat(me.value)||0:Number(t?.counters?.[N.key])||0}const i={},p=[...e.querySelectorAll('[name^="habit_"]')];for(const N of x)i[N.id]=p.length?!!e.querySelector(`[name="habit_${N.id}"]`)?.checked:!!t?.habits?.[N.id];const c=+a.get("mood")||t?.mood||3,u=a.get("sleepHours"),g=u!==null&&u!==""?parseFloat(u):h.sleepGoal||s.sleepRecommended||7.5,$=a.get("studyHours"),M=$!==null&&$!==""?parseFloat($):0,f=(a.get("bestOfDay")||"").toString().trim(),E=(a.get("differentToday")||"").toString().trim(),B=(a.get("capsule")||"").toString().trim(),I=(a.get("wordOfDay")||"").toString().trim();let U=(a.get("generalDay")||"").toString().trim();return U||(U=f||B||(I?`Palabra del día: ${I}.`:`Día ${T[c-1].label.toLowerCase()}.`)),{id:t?.id,date:v,mood:c,sleepHours:g,studyHours:M,energy:a.get("energy")?+a.get("energy"):null,stress:a.get("stress")?+a.get("stress"):null,bestOfDay:f,differentToday:E,generalDay:U,wordOfDay:I,capsule:B,gratitude:[0,1,2].map(N=>(a.get(`gratitude${N}`)||"").toString().trim()),tomorrow:a.has("tomorrow")?(a.get("tomorrow")||"").toString().trim():t?.tomorrow||"",goals:e.querySelector('[name="goal"]')?a.getAll("goal").map(N=>N.toString().trim()).filter(Boolean):t?.goals||[],tags:n,counters:r,habits:i,createdAt:t?.createdAt}}function yr(e){for(const[a,t]of[["sleepHours","horas de sueño"],["studyHours","horas de dedicación"]]){const s=e[a];if(!Number.isFinite(s)||s<0||s>24)throw new Error(`Escribe unas ${t} válidas, entre 0 y 24.`)}return e}function Zt(e){if(!e)return;const a=St(e),t=document.querySelector("#hero-words-chip");if(t){const r=ve(a);t.innerHTML=r?`${r} ${r===1?"palabra":"palabras"} escritas`:"todavía sin escribir",t.classList.toggle("pending",!r)}const s=document.querySelector("#floating-save");s&&s.classList.toggle("is-visible",K||O==="error");const o=pt(a),n=document.querySelector("#crisis-alert-slot");n&&(o.triggered&&o.level==="high"&&!za?n.innerHTML=hs(o,h):o.triggered||(n.innerHTML=""))}function Fs(e,a){if(!e)return;const t=e.querySelector('[name="age"]'),s=()=>{const o=new FormData(e),n=o.get("age"),r=n?Ca(n,o.get("ageGroup")||"young"):o.get("ageGroup")||"young",i=o.getAll("interests").map(String);e.querySelectorAll("[data-age-group-card]").forEach(M=>{const f=M.dataset.ageGroupCard===r;M.classList.toggle("is-selected",f);const E=M.querySelector('input[type="radio"]');E&&n&&(E.checked=f)});const p=F({age:n||null,ageGroup:r,interests:i}),c=e.querySelector('[name="sleepGoal"]'),u=e.querySelector('[name="studyGoal"]');c&&n&&(c.value=p.sleepRecommended),u&&n&&(u.value=p.studyRecommended);const g=e.querySelector(`#${a}-adaptation-callout`);g&&(g.innerHTML=`
        ${l("compass")}
        <div>
          <strong>Adaptado a: ${d(p.group.title)} (${d(p.group.label)})</strong>
          <p>Sueño recomendado: <b>${q(p.sleepRecommended)} h</b> · Dedicación sugerida: <b>${q(p.studyRecommended)} h</b>.</p>
        </div>`);const $=e.querySelector(`#${a}-suggested-habits`);if($){const M=new Set(x.map(f=>f.name.toLowerCase()));$.innerHTML=p.suggestedHabits.map(f=>{const E=M.has(f.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${d(f)}" ${E?"checked":""}><span>${E?"✓ ":"+ "}${d(f)}</span></label>`}).join("")}};t&&t.addEventListener("input",s),e.querySelectorAll('[name="ageGroup"], [name="interests"]').forEach(o=>{o.addEventListener("change",s)})}function $r(){const e=document.querySelector("#setup-page-form");e&&(Fs(e,"sp"),e.addEventListener("submit",t=>{t.preventDefault(),zs(e),w(),y("Perfil actualizado")}),e.addEventListener("change",t=>{t.target.name==="theme"&&Se(t.target.value,h)}));const a=document.querySelector("#diary-form");a&&(a.addEventListener("submit",t=>{t.preventDefault(),!ue&&Ie()}),a.addEventListener("input",t=>{K=!0;const s=t.target;if(s.name==="mood"){const n=T[+s.value-1];a.style.setProperty("--active-mood",n.color)}if(s.name==="sleepHours"||s.name==="studyHours"){const n=parseFloat(s.value);a.querySelectorAll(`[data-action="quick-number"][data-target="${s.name}"]`).forEach(r=>{r.classList.toggle("active",parseFloat(r.dataset.val)===n)})}if(s.name==="energy"){const n=document.querySelector("#energy-hint");n&&(n.textContent=Jt[+s.value]+".")}if(s.name==="stress"){const n=document.querySelector("#stress-hint");n&&(n.textContent=Kt[+s.value]+".")}if(s.name?.startsWith("counter_")){const n=s.name.slice(8),r=parseFloat(s.value)||0,i=document.querySelector(`#hint-${n}`);if(i&&(i.textContent=Ma(n,r)),n==="water"){const p=h.waterGoal||8,c=s.closest(".counter-row"),u=c?.querySelector(".counter-goal-pill"),g=c?.querySelector(".counter-progress i");u&&(u.textContent=`Meta: ${r}/${p}`,u.classList.toggle("met",r>=p)),g&&(g.style.width=`${Math.min(100,Math.round(r/p*100))}%`)}}const o=s.closest(".writing-field");if(o){const n=o.querySelector(".word-count");n&&(n.textContent=`${Ps(s.value)} palabras`)}Zt(a)}),a.addEventListener("keydown",t=>{if(t.target.id==="tagCustom"&&t.key==="Enter"){t.preventDefault();const s=t.target.value.trim();if(s){const o=a.querySelector(".tag-picker .tag-chip.ghost");o&&o.insertAdjacentHTML("beforebegin",`<label class="tag-chip"><input type="checkbox" name="tags" value="${d(s)}" checked><span>${d(s)}</span></label>`),t.target.value="",K=!0,Zt(a)}}}),wr())}function zs(e){const a=new FormData(e),t=a.getAll("suggestedHabits").map(u=>u.toString().trim()).filter(Boolean),s=new Set(x.map(u=>u.name.toLowerCase()));for(const u of t)!s.has(u.toLowerCase())&&x.length<30&&(x=wa({name:u}),s.add(u.toLowerCase()));const o=e.querySelector('[name="sidebarCollapsed"]')!==null,n=a.get("age"),r=n!==null&&n!==""?parseInt(n.toString(),10):null,i=r?Ca(r,a.get("ageGroup")||"young"):a.get("ageGroup")||h.ageGroup,p=a.getAll("interests").map(u=>u.toString().trim()).filter(Boolean);h=oe({completed:!0,name:a.get("name")||"",age:Number.isFinite(r)?r:null,ageGroup:i,interests:p,ritual:a.get("ritual")||h.ritual,tone:a.get("tone")||h.tone,purpose:a.get("purpose")||h.purpose,motto:a.get("motto")||"Un día a la vez.",theme:a.get("theme")||h.theme,sleepGoal:parseFloat(a.get("sleepGoal"))||7.5,studyGoal:parseFloat(a.get("studyGoal"))??2,waterGoal:parseInt(a.get("waterGoal"),10)||8,showDailyWord:e.querySelector('[name="showDailyWord"]')?.checked??!0,showDailyTip:e.querySelector('[name="showDailyTip"]')?.checked??!0,sidebarCollapsed:o?!!e.querySelector('[name="sidebarCollapsed"]')?.checked:G}),G=!!h.sidebarCollapsed,Se(h.theme,h)}function wr(){const e=document.querySelector("#diary-form");if(e)for(const a of ke){const t=e.querySelector(`[name="counter_${a.key}"]`),s=document.querySelector(`#hint-${a.key}`);t&&s&&t.value!==""&&(s.textContent=Ma(a.key,parseFloat(t.value)||0))}}function _a(e=""){const a=document.querySelector("#inspiration-slot");if(!a)return;const t=document.querySelector("#diary-form"),s=t?St(t):S.find(o=>o.date===v);if(a.innerHTML=gs(v,bt,ft,h,s,s?.wordOfDay||""),e){const o=a.querySelector(e);o&&(o.classList.remove("card-flip-in"),o.offsetWidth,o.classList.add("card-flip-in"))}}function Yt(){const e=document.querySelector("#quote-slot");if(!e)return;e.innerHTML=ms(v,vt,h);const a=e.querySelector(".quote-card");a&&(a.classList.remove("card-flip-in"),a.offsetWidth,a.classList.add("card-flip-in"))}function Sr(){const e=document.querySelector("#stamp");if(!e)return;const a=h.name?`Cuaderno de ${d(h.name)}`:"Guardado";e.innerHTML=`<div class="stamp-face">${a}<small>${L(v)}</small></div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function y(e,a=!1){const t=document.querySelector("#toast");t&&(t.innerHTML=`<div class="${a?"error":""}">${l(a?"close":"check")}<span>${d(e)}</span></div>`,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),3e3))}function va(){fa&&(clearInterval(fa),fa=null)}function Me(e){va();const a=document.querySelector("#modal");return a.innerHTML=e,a.open||a.showModal(),a}function Gs(e="help"){const a=Me(Vo(h,e));let t=!1;const s=()=>{va(),a.close()};a.onclick=o=>{if(o.target.closest('[data-modal="close"]')||o.target===a){s();return}const r=o.target.closest("[data-crisis-tab]");if(r){const p=r.dataset.crisisTab;a.querySelectorAll(".crisis-tab").forEach(c=>c.classList.toggle("active",c.dataset.crisisTab===p)),a.querySelectorAll(".crisis-tab-panel").forEach(c=>c.classList.toggle("active",c.dataset.panel===p)),p!=="breathe"&&va();return}const i=o.target.closest('[data-action="toggle-breathing"]');if(i){const p=a.querySelector("#breathing-visual"),c=a.querySelector("#breathing-phase"),u=a.querySelector("#breathing-timer"),g=a.querySelector("#breathing-guide");if(t)t=!1,va(),p?.classList.remove("inhale","hold","exhale"),c&&(c.textContent="En pausa"),u&&(u.textContent="4 — 4 — 6"),i.innerHTML=`${l("wind")} Seguir respirando`;else{t=!0,i.innerHTML=`${l("close")} Pausar`;let $=0;const M=()=>{const f=$%14;p?.classList.remove("inhale","hold","exhale"),f<4?(p?.classList.add("inhale"),c&&(c.textContent="Toma aire..."),u&&(u.textContent=`${4-f} s`),g&&(g.textContent="Inhala despacio por la nariz.")):f<8?(p?.classList.add("hold"),c&&(c.textContent="Mantén..."),u&&(u.textContent=`${8-f} s`),g&&(g.textContent="Sostén el aire sin tensar los hombros.")):(p?.classList.add("exhale"),c&&(c.textContent="Suelta..."),u&&(u.textContent=`${14-f} s`),g&&(g.textContent="Deja salir el aire poco a poco.")),$++};M(),fa=setInterval(M,1e3)}}}}function xr(e=1){let a=e;const t=Me(Zo(h,x,a)),s=t.querySelector("#setup-wizard-form");Fs(s,"wiz");const o=n=>{a=Math.max(1,Math.min(3,n)),t.querySelectorAll(".wizard-step-body").forEach(u=>{const g=+u.dataset.step;u.classList.toggle("active",g===a),u.hidden=g!==a});const r=t.querySelector(".setup-wizard-header .eyebrow"),i=t.querySelector(".setup-wizard-header h2");r&&(r.innerHTML=`${l("sliders")} Paso ${a} de 3`),i&&(i.textContent=a===1?"Sobre ti, tu edad y tus gustos":a===2?"Tu ritmo y tus hábitos":"Papel e icono de tu cuaderno"),t.querySelectorAll(".wizard-steps-bar span").forEach((u,g)=>{u.classList.toggle("done",a>=g+1),u.classList.toggle("current",a===g+1)});const c=t.querySelector(".wizard-footer");c&&(c.innerHTML=`
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${l("left")} Anterior</button>`:'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${l("right")}</button>`:`<button type="submit" class="button solid">${l("check")} Guardar</button>`}`)};t.onchange=n=>{n.target.name==="theme"&&Se(n.target.value,h)},t.onsubmit=n=>{n.preventDefault(),s&&zs(s),t.close(),w(),y("Tu cuaderno se ha adaptado a tus gustos")},t.onclick=n=>{if(n.target.closest('[data-modal="close"]')||n.target===t){Se(h.theme,h),t.close();return}const i=n.target.closest("[data-wizard]");if(i){const p=i.dataset.wizard;o(p==="next"?a+1:a-1)}}}function Ze({title:e,text:a,confirmLabel:t,danger:s=!1}){return new Promise(o=>{const n=Me(`<div class="modal-card">
      <h2>${d(e)}</h2><p>${d(a)}</p>
      <div class="modal-actions">
        <button class="button outline" data-modal="cancel">Cancelar</button>
        <button class="button ${s?"danger":"solid"}" data-modal="confirm">${d(t)}</button>
      </div>
    </div>`);n.onclick=r=>{const i=r.target.closest("[data-modal]")?.dataset.modal;i?(n.close(),o(i==="confirm")):r.target===n&&(n.close(),o(!1))}})}function kr(e){const a=S.find(n=>n.date===e);if(!a){re(e);return}const t=F(h),s=x.filter(n=>a.habits?.[n.id]),o=Me(`<article class="modal-card entry-modal">
    <div class="section-heading">
      <div><p class="eyebrow">${h.name?`Cuaderno de ${d(h.name)} · `:""}Día ${sa(a.date,S)}</p><h2>${L(a.date)}</h2></div>
      <span class="mood-tag" style="--mood:${T[a.mood-1].color}">${T[a.mood-1].emoji} ${T[a.mood-1].label}</span>
    </div>
    <div class="read-metrics">
      <span class="chiplet">${l("moon")} ${q(a.sleepHours)} h sueño</span>
      <span class="chiplet">${l("study")} ${q(a.studyHours)} h dedicación</span>
      ${a.energy?`<span class="chiplet">${l("bolt")} energía ${a.energy}/5</span>`:""}
      ${a.stress?`<span class="chiplet">${l("storm")} estrés ${a.stress}/5</span>`:""}
      <span class="chiplet">${l("pen")} ${ve(a)} palabras</span>
    </div>
    ${(a.tags||[]).length?`<div class="read-metrics">${a.tags.map(n=>`<span class="chiplet">${l("hash")} ${d(n)}</span>`).join("")}</div>`:""}
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
      <button class="button solid" data-modal="edit">${l("pen")} Editar</button>
    </div>
  </article>`);o.onclick=n=>{const r=n.target.closest("[data-modal]")?.dataset.modal,i=()=>o.close();(r==="close"||n.target===o)&&i(),r==="edit"&&(i(),re(a.date)),r==="delete"&&(i(),Us(a.date))}}function re(e,a=""){if(e>b()){y("Ese día todavía no ha llegado.",!0);return}Is(),Qe=a||(e<v?"prev":e>v?"next":""),K=!1,v=e,P="diary",_=!1,za=!1,w({transition:!0})}function Is(){He("entrada",yt),He("botella",$t),document.querySelector("#diary-form")&&O==="draft"&&Ie({silent:!0})}function Rs(){if(window.innerWidth<=980){_=!_,document.querySelector(".sidebar")?.classList.toggle("is-open",_),document.querySelector(".sidebar-backdrop")?.classList.toggle("is-visible",_);return}G=!G,h=oe({sidebarCollapsed:G});const e=document.querySelector(".sidebar");if(e){e.classList.toggle("is-collapsed",G);const a=e.querySelector(".sidebar-collapse-btn");a&&(a.innerHTML=l(G?"right":"left"),a.title=G?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)",a.setAttribute("aria-expanded",String(!G))),e.classList.add("is-animating"),setTimeout(()=>{e.classList.remove("is-animating"),aa()},420),setTimeout(()=>aa(),60)}}async function Us(e){await Ze({title:"¿Eliminar esta entrada?",text:`Se borrará del dispositivo el registro de ${L(e)}.`,confirmLabel:"Eliminar",danger:!0})&&(S=$o(e),w(),y("Entrada eliminada."))}function qr(e,a){const t=new Blob([a],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(t),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),1e3)}C.addEventListener("click",async e=>{const a=e.target.closest("[data-view]"),t=e.target.closest("[data-action]");if(e.target.closest(".brand")){e.preventDefault(),re(b());return}if(a&&!t){const m=a.dataset.view;Is(),K=!1,P=m,_=!1,P==="diary"&&(v=b()),w({transition:!0});return}if(!t)return;const{action:s,date:o,range:n,mini:r,key:i,step:p,habit:c,name:u,word:g,tab:$,quote:M,index:f,layout:E,target:B,val:I,monthly:U,id:N,delta:me}=t.dataset;switch(s){case"menu":_=!_,w();break;case"close-menu":_=!1,w();break;case"toggle-sidebar":Rs();break;case"archive-tab":ha=$||"list",w();break;case"stats-tab":Ce=$||"pulse",w();break;case"profile-tab":ga=$||"personal",w();break;case"thoughts-tab":Ne=$||"shore",w();break;case"show-drafts":fr();break;case"commit-draft":Ie();break;case"discard-draft":{Ze({title:"¿Descartar lo escrito a medias?",text:"Se borrar el borrador de este día en este dispositivo. Lo que ya está guardado en el cuaderno se queda.",confirmLabel:"Descartarlo",danger:!0}).then(m=>{m&&(le("entrada"),le("autosave"),te(pe()),R("saved"),w(),y("Borrador descartado"))});break}case"discard-bottle-draft":{le("botella"),te(Z.bottle()),se={text:"",mood:null,sea:se.sea||"breeze"},ta="",w(),y("Borrador de la botella descartado");break}case"routine-tab":_e=$||"hoy",w();break;case"shift-day":{const m=A(v,parseInt(me||"1",10));if(m>b()){y("Ese día todavía no ha llegado.",!0);break}v=m,w(),window.scrollTo({top:0,behavior:"smooth"});break}case"today-routine":v=b(),w();break;case"focus-composer":{const m=document.querySelector("#bottle-text");m&&(m.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>m.focus(),250));break}case"toggle-habit":{const m=o||v;if(m>b()){y("Ese día todavía no ha llegado.",!0);break}const k=S.find(z=>z.date===m),D={...k?.habits||{}},j=!D[c];D[c]=j;try{Oe(m,{habits:D});const z=!k;w(),Kn(c);const Re=x.find(Ra=>Ra.id===c)?.name||"Hábito",xt=x.length,Ws=x.filter(Ra=>D[Ra.id]).length;j&&m===b()&&xt&&Ws===xt?y("Rutina de hoy completada"):y(z&&j?`«${Re}» marcado · creé una entrada mínima para ese día`:j?`«${Re}» marcado`:`«${Re}» desmarcado`)}catch(z){y(z.message||"No se pudo guardar el hábito.",!0)}break}case"add-suggested-habit":{if(!u)break;if(x.length>=30){y("Máximo 30 hábitos.",!0);break}if(x.some(m=>m.name.toLowerCase()===u.toLowerCase())){y("Ya está en tu lista.",!0);break}x=wa({name:u}),w(),y(`«${u}» añadido a tu rutina`);break}case"edit-habit":{const m=t.closest(".habit-stat-row"),k=m?.querySelector(".habit-stat-name strong"),D=x.find(z=>z.id===c);if(!k||!D)break;k.outerHTML=`<input class="habit-rename" maxlength="40" value="${d(D.name)}" aria-label="Renombrar hábito">`;const j=m.querySelector(".habit-rename");j.focus(),j.select(),j.addEventListener("keydown",z=>{z.key==="Enter"&&(z.preventDefault(),j.dataset.done="1",Ut(c,j.value)),z.key==="Escape"&&(j.dataset.done="1",w())}),j.addEventListener("blur",()=>{j.dataset.done!=="1"&&Ut(c,j.value)});break}case"routine-counter-plus":case"routine-counter-minus":{const m=document.querySelector(`[name="counter_${i}"]`);if(!m)break;const k=s==="routine-counter-plus"?1:-1,D=parseFloat(p)||1,j=Math.min(parseFloat(m.max),Math.max(parseFloat(m.min),(parseFloat(m.value)||0)+k*D));m.value=Math.round(j*10)/10,Yn(m,i,parseFloat(m.value)),clearTimeout(Rt),Rt=setTimeout(Jn,400);break}case"add-goal-routine":{ne();const m=Ya().filter(Boolean);m.push("");try{Oe(v,{goals:m}),w();const k=document.querySelectorAll("#routine-goals .task-input");k[k.length-1]?.focus()}catch(k){y(k.message||"No se pudo añadir la tarea.",!0)}break}case"remove-goal-routine":{const m=Ya().filter((D,j)=>j!==+f),k=S.find(D=>D.date===v);try{Oe(v,{goals:m.filter(Boolean),tomorrow:document.querySelector("#routine-tomorrow")?.value.trim()??(k?.tomorrow||"")}),w()}catch(D){y(D.message||"No se pudo quitar la tarea.",!0)}break}case"open-bottle":Ja(N);break;case"recast-bottle":{H=cs(N),w(),y("Vuelve a estar en el agua");break}case"delete-bottle":or(N);break;case"toggle-more-details":{We=!We;const m=document.querySelector("#extras-accordion");m&&(m.classList.toggle("is-open",We),t.setAttribute("aria-expanded",String(We)));break}case"quick-number":{const m=document.querySelector(`#${B}`);m&&I!==void 0&&(m.value=I,m.classList.remove("num-bump"),m.offsetWidth,m.classList.add("num-bump"),m.dispatchEvent(new Event("input",{bubbles:!0})));break}case"cycle-theme":{const m=V.findIndex(Re=>Re.id===h.theme),k=V[(m+1)%V.length];h=oe({theme:k.id}),Se(h.theme,h);const D=document.querySelector(".theme-pill > span:last-child"),j=document.querySelector(".topbar-favicon-mini"),z=document.querySelector(".ex-libris-icon");D&&(D.textContent=k.name),j&&(j.innerHTML=ce(h.theme,h)),z&&(z.innerHTML=ce(h.theme,h)),y(`Tema: ${k.name}`);break}case"open-setup-wizard":xr(1);break;case"dismiss-setup-banner":h=oe({completed:!0}),document.querySelector(".setup-welcome-banner")?.remove();break;case"open-crisis-modal":Gs($||"help");break;case"dismiss-crisis-banner":za=!0,document.querySelector("#crisis-alert-slot").innerHTML="";break;case"next-daily-word":bt++,_a(".word-of-day-card");break;case"next-daily-tip":ft++,_a(".tip-of-day-card");break;case"next-quote":vt++,Yt();break;case"save-quote":{if(!M)break;const m=h.savedQuotes||[],k=m.includes(M),D=k?m.filter(j=>j!==M):[M,...m];h=oe({savedQuotes:D}),Yt(),y(k?"Frase quitada de tus guardadas":"Frase guardada en tu perfil");break}case"add-custom-quote":{const k=document.querySelector("#new-custom-quote")?.value.trim();if(!k){y("Escribe una frase primero.",!0);break}h=oe({savedQuotes:[k,...h.savedQuotes||[]]}),w(),y("Frase añadida");break}case"remove-saved-quote":{const m=parseInt(f,10),k=(h.savedQuotes||[]).filter((D,j)=>j!==m);h=oe({savedQuotes:k}),w(),y("Frase eliminada");break}case"toggle-focus-writing":{Ve=!Ve,document.querySelector(".diary-layout")?.classList.toggle("is-focus-writing",Ve);break}case"history-layout":{ma=E||"grid",w();break}case"use-daily-word":{const m=document.querySelector("#wordOfDay");m&&g&&(m.value=g,K=!0,m.dispatchEvent(new Event("input",{bubbles:!0})),m.classList.add("highlight-flash"),setTimeout(()=>m.classList.remove("highlight-flash"),900),_a(),y(`«${g}» anotada`));break}case"inspire-prompt":{Te=!Te;const m=document.querySelector("#writing-prompt-box");m&&(m.hidden=!Te,m.classList.toggle("is-open",Te));break}case"next-writing-prompt":{ba++;const m=document.querySelector("#writing-prompt-text");m&&(m.classList.remove("text-swap"),m.offsetWidth,m.textContent=Va(v,ba),m.classList.add("text-swap"));break}case"insert-writing-prompt":{const m=Va(v,ba),k=document.querySelector("#generalDay");if(k){const D=k.value.trim();k.value=D?`${D}

— ${m}
`:`— ${m}
`,k.focus(),k.setSelectionRange(k.value.length,k.value.length),k.dispatchEvent(new Event("input",{bubbles:!0}))}break}case"quick-save":{const m=document.querySelector("#diary-form");m&&m.requestSubmit();break}case"previous":re(A(v,-1),"prev");break;case"next":re(A(v,1),"next");break;case"today":re(b());break;case"open-day":re(o);break;case"read":kr(o);break;case"delete":Us(o);break;case"add-goal":document.querySelector("#goals").insertAdjacentHTML("beforeend",En()),document.querySelector("#goals .goal-row:last-child input")?.focus(),K=!0;break;case"remove-goal":t.closest(".goal-row").remove(),K=!0;break;case"counter-plus":case"counter-minus":{const m=document.querySelector(`[name="counter_${i}"]`);if(!m)break;const k=s==="counter-plus"?1:-1,D=parseFloat(p)||1,j=Math.min(parseFloat(m.max),Math.max(parseFloat(m.min),(parseFloat(m.value)||0)+k*D));m.value=Math.round(j*10)/10,m.classList.remove("num-bump"),m.offsetWidth,m.classList.add("num-bump"),m.dispatchEvent(new Event("input",{bubbles:!0}));break}case"add-habit":{const k=document.querySelector("#new-habit")?.value.trim();if(!k){y("Escribe un nombre para el hábito.",!0);break}if(x.length>=30){y("Máximo 30 hábitos.",!0);break}if(x.some(D=>D.name.toLowerCase()===k.toLowerCase())){y("Ya existe un hábito con ese nombre.",!0);break}x=wa({name:k}),w(),document.querySelector("#new-habit")?.focus(),y(`Hábito «${k}» añadido`);break}case"delete-habit":{await Ze({title:"¿Eliminar este hábito?",text:`Se quitará «${u}» de tu lista actual.`,confirmLabel:"Eliminar",danger:!0})&&(x=So(c),w(),y("Hábito eliminado"));break}case"month-prev":r==="1"?ia=Ee(ia,-1):J=Ee(J,-1),w();break;case"month-next":r==="1"?ia=Ee(ia,1):J=Ee(J,1),w();break;case"period-prev":U==="1"?J=Ee(J,-1):v=A(v,-7),w();break;case"period-next":U==="1"?J=Ee(J,1):v=A(v,7),w();break;case"range":je=+n,w();break;case"export":case"backup":qr(`diario-${b()}.json`,Lo(S,x,h)),y("Copia descargada");break;case"import":document.querySelector("#import-file").click();break;case"clear":await Ze({title:"¿Borrar todos los datos?",text:"Se eliminarán todas las entradas, hábitos y preferencias de este navegador.",confirmLabel:"Borrar todo",danger:!0})&&(wo(),Ga(),v=b(),P="diary",w(),y("Datos eliminados"));break}});C.addEventListener("change",e=>{if(e.target.id==="import-file"){const a=e.target.files[0];if(!a)return;const t=new FileReader;t.onload=()=>{try{Le=Do(t.result);const s=Me(`<div class="modal-card">
          <h2>Importar copia</h2>
          <p>El archivo contiene <strong>${Le.entries.length}</strong> ${Le.entries.length===1?"entrada":"entradas"} y <strong>${Le.habits.length}</strong> ${Le.habits.length===1?"hábito":"hábitos"}.</p>
          <div class="modal-actions">
            <button class="button outline" data-modal="cancel">Cancelar</button>
            <button class="button solid" data-modal="confirm">Importar</button>
          </div>
        </div>`);s.onclick=o=>{const n=o.target.closest("[data-modal]")?.dataset.modal;n==="confirm"&&(jo(Le),Ga(),y("Copia importada")),(n||o.target===s)&&(s.close(),w())}}catch(s){y(s.message||"No se ha podido importar el archivo.",!0)}e.target.value=""},t.readAsText(a)}e.target.id==="history-mood"&&(ua=e.target.value,w()),e.target.id==="history-tag"&&(pa=e.target.value,w())});C.addEventListener("input",e=>{if(e.target.id==="history-search"){ca=e.target.value;const a=document.activeElement===e.target;if(w(),a){const t=document.querySelector("#history-search");t.focus(),t.setSelectionRange(t.value.length,t.value.length)}}});window.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="b"&&(e.preventDefault(),Rs())});window.addEventListener("beforeunload",e=>{Xa(),O==="error"&&(e.preventDefault(),e.returnValue="")});window.addEventListener("storage",e=>{if(!(!e.key||!String(e.key).startsWith("diario.")))try{Ga(),w(),y("Otra pestaña cambió el cuaderno: lo he actualizado")}catch(a){y("No pude refrescar los datos: "+a.message,!0)}});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});w();R("idle");const at=Da(H).filter(e=>e.seen!==!0);at.length&&setTimeout(()=>{y(at.length===1?"Ha vuelto una de tus botellas.":"Han vuelto un par de tus botellas."),document.querySelectorAll(".shore-bottle").forEach((e,a)=>{e.style.setProperty("--wash-delay",`${a*140}ms`),e.classList.add("is-washing")}),document.querySelector(".sea-panel")?.classList.add("is-rising"),setTimeout(()=>document.querySelector(".sea-panel")?.classList.remove("is-rising"),2600)},820);Mr();function Mr(){const e=we();if(!e.total)return e;const a=[];return e.entries&&a.push(`${e.entries} ${e.entries===1?"entrada":"entradas"}`),e.bottles&&a.push(`${e.bottles} ${e.bottles===1?"botella":"botellas"} a medio escribir`),a.length&&setTimeout(()=>y(`Recuperado lo que dejaste a medias: ${a.join(" y ")}`),at.length?2400:1100),e}

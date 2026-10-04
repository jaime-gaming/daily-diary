(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const T=[{value:1,emoji:"😫",label:"Fatal",color:"#a8442c"},{value:2,emoji:"😕",label:"Flojo",color:"#c2743a"},{value:3,emoji:"😐",label:"Normal",color:"#98938a"},{value:4,emoji:"🙂",label:"Bien",color:"#4e6f52"},{value:5,emoji:"🤩",label:"Genial",color:"#254d32"}],Rt=["L","M","X","J","V","S","D"],lt=["","Muy baja","Baja","Normal","Alta","Muy alta"],dt=["","Muy bajo","Bajo","Normal","Alto","Muy alto"],It=["Productivo","Tranquilo","Ajetreado","Social","Solitario","Creativo","Cansado","Motivado","Ansioso","Emocionado","Nostálgico","Aburrido"],le=[{key:"water",label:"Agua",unit:"vasos",min:0,max:40,step:1,icon:"drop"},{key:"exercise",label:"Ejercicio",unit:"min",min:0,max:1440,step:5,icon:"run"},{key:"reading",label:"Lectura",unit:"min",min:0,max:1440,step:5,icon:"book"},{key:"mindfulness",label:"Pausa consciente",unit:"min",min:0,max:1440,step:5,icon:"leaf"}],Ut=["bestOfDay","differentToday","generalDay","tomorrow","wordOfDay"],Le=[{id:"teen",min:10,max:18,label:"12 – 18 años",title:"Instituto y descubrimiento",desc:"Pensado para tu ritmo de clases, exámenes, amigos, aficiones y empezar a guardar tu propia historia.",sleepRecommended:8.5,studyRecommended:2,focusLabel:"Horas de estudio",focusQuestion:"¿Cuánto tiempo has dedicado hoy a estudiar, repasar o hacer tareas?",tags:["Clases","Exámenes","Amigos","Deporte","Música","Videojuegos","Tarde libre","Tranquilo","Cansado","Motivado","Creativo","Social"],habits:["Hacer tareas sin mirar el móvil","Leer 15 minutos antes de dormir","Moverme o entrenar un rato","Dejar la mochila lista para mañana","Dejar el móvil fuera de la cama","Salir a tomar el aire"],placeholders:{bestOfDay:"Una risa en clase, una partida con amigos, una canción en el bus, quitarme un examen de encima...",differentToday:"Algo curioso que pasó en el insti, una charla que no esperaba o un plan improvisado...",generalDay:"Cuenta cómo te has sentido hoy de verdad, qué te ha dado rabia, qué te ha hecho gracia...",tomorrow:"Repasar ese tema a tiempo, quedar un rato, acostarme sin quedarme pegado a la pantalla..."}},{id:"young",min:19,max:26,label:"19 – 26 años",title:"Universidad, proyectos y primeros pasos",desc:"Adaptado a años de carrera, primeros trabajos, independencia, amigos y construir tu propio camino.",sleepRecommended:8,studyRecommended:3,focusLabel:"Horas de estudio y foco",focusQuestion:"¿Cuántas horas has dedicado a estudiar, formarte o sacar adelante tus proyectos?",tags:["Productivo","Uni / Trabajo","Amigos","Entreno","Creativo","Tranquilo","Cansado","Motivado","Social","Solitario","Nostálgico","Ajetreado"],habits:["Bloque de estudio sin distracciones","Entrenar o caminar 30 min","Leer 20 páginas","Cocinar algo casero","Sin pantallas 30 min antes de dormir","Ordenar mi mesa al acabar"],placeholders:{bestOfDay:"Un café a media mañana, avanzar de verdad con mis cosas, entrenar, una charla hasta tarde...",differentToday:"Una idea que me vino de repente, alguien con quien coincidí, un cambio de planes...",generalDay:"Escribe para ti cómo ha ido el día, qué tienes en la cabeza y cómo llevas la semana...",tomorrow:"Aprovechar la mañana, quitarme esa tarea pendiente, guardar tiempo para descansar..."}},{id:"adult",min:27,max:49,label:"27 – 49 años",title:"Equilibrio, oficio y vida propia",desc:"Diseñado para compaginar trabajo o proyectos, descanso mental, salud, casa y tiempo de calidad.",sleepRecommended:7.5,studyRecommended:1.5,focusLabel:"Horas de enfoque o aprendizaje",focusQuestion:"¿Cuánto tiempo has dedicado hoy a aprender, leer o avanzar en proyectos propios?",tags:["Enfocado","Tranquilo","Trabajo","Familia","Deporte","Lectura","Cansado","Motivado","Social","Creativo","Desconexión","Ajetreado"],habits:["Cerrar el trabajo a mi hora","Caminar 30 minutos sin prisas","Leer antes de apagar la luz","Estirar espalda y cuello","Beber agua durante la jornada","Media hora sin notificaciones"],placeholders:{bestOfDay:"Una sobremesa tranquila, resolver un asunto pendiente, cerrar el ordenador y desconectar...",differentToday:"Algo que rompió la inercia de la semana o un detalle cotidiano que hoy noté distinto...",generalDay:"Cómo ha ido la jornada, qué energía te queda esta noche y qué necesitas soltar...",tomorrow:"Centrarme en lo prioritario, no llenarme la agenda de más, salir a estirar las piernas..."}},{id:"senior",min:50,max:120,label:"50+ años",title:"Serenidad, bienestar y perspectiva",desc:"Orientado a saborear el ritmo diario, cuidar la salud, los paseos, la lectura y la memoria de lo vivido.",sleepRecommended:7.5,studyRecommended:1,focusLabel:"Tiempo de lectura o dedicación",focusQuestion:"¿Cuánto tiempo has dedicado hoy a la lectura, aprender o cultivar tus aficiones?",tags:["Sereno","Paseo","Lectura","Familia","Naturaleza","Salud","Agradecido","Activo","Creativo","Social","Tranquilo","Nostálgico"],habits:["Paseo matutino al aire libre","Rato de lectura tranquila","Ejercicios de movilidad suave","Llamar o ver a alguien querido","Cuidar el descanso nocturno","Un momento de silencio y calma"],placeholders:{bestOfDay:"La luz de la mañana en el paseo, una buena conversación, avanzar con el libro que estoy leyendo...",differentToday:"Una visita grata, un recuerdo que volvió con nitidez, un paseo por un sitio distinto...",generalDay:"Anota con sosiego cómo ha transcurrido el día y con qué sensación te quedas hoy...",tomorrow:"Salir a caminar temprano, dedicar un rato a la lectura, disfrutar del día sin prisa..."}}],ia=[{id:"reading",label:"Lectura y escritura",icon:"book",habit:"Leer 20 minutos con calma",tag:"Lectura"},{id:"sport",label:"Deporte y movimiento",icon:"run",habit:"Entrenar o moverme 30 min",tag:"Deporte"},{id:"study",label:"Estudio y aprendizaje",icon:"study",habit:"Sesión de estudio sin móvil",tag:"Productivo"},{id:"music",label:"Música, cine y arte",icon:"spark",habit:"Escuchar un álbum o crear algo",tag:"Creativo"},{id:"nature",label:"Naturaleza y aire libre",icon:"leaf",habit:"Salir a caminar al aire libre",tag:"Naturaleza"},{id:"social",label:"Amigos y gente querida",icon:"heart",habit:"Hablar con alguien que quiero",tag:"Social"},{id:"calm",label:"Calma y descanso",icon:"moon",habit:"Apagar pantallas 30 min antes de dormir",tag:"Tranquilo"},{id:"projects",label:"Proyectos personales",icon:"bolt",habit:"Dedicar 30 min a mi propio proyecto",tag:"Enfocado"},{id:"gaming",label:"Tecnología y videojuegos",icon:"target",habit:"Parar a tiempo para descansar la vista",tag:"Desconexión"},{id:"cooking",label:"Cocina y comer bien",icon:"flame",habit:"Preparar una comida casera y tranquila",tag:"Bienestar"}],je=[{id:"night",label:"Por la noche, al cerrar el día",icon:"moon"},{id:"morning",label:"Por la mañana, con café o té",icon:"sun"},{id:"afternoon",label:"A media tarde, haciendo una pausa",icon:"leaf"},{id:"anytime",label:"Cuando me pide el cuerpo escribir",icon:"pen"}],De=[{id:"warm",label:"Cálido y cercano",desc:"Como hablar con un buen amigo en calma"},{id:"literary",label:"Pausado y literario",desc:"Con gusto por las palabras y los detalles"},{id:"direct",label:"Directo y práctico",desc:"Al grano, claro y enfocado en tu día a día"},{id:"gentle",label:"Suave y compasivo",desc:"Especialmente amable para días de cansancio"}],W=[{id:"paper",name:"Papel Clásico",desc:"Cuaderno color crema y tinta estilográfica carbón",colors:["#F3EFE6","#211E17","#B34A2E"],favicon:{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"}},{id:"night",name:"Tinta Nocturna",desc:"Cuero oscuro y trazos cálidos para escribir de noche",colors:["#151412","#EDE6D8","#D96B4E"],favicon:{bg:"#151412",page:"#272420",accent:"#D96B4E",ink:"#EDE6D8"}},{id:"forest",name:"Bosque Sereno",desc:"Encuadernación salvia y papel natural de algodón",colors:["#EBF0EA","#19241D","#356343"],favicon:{bg:"#19241D",page:"#EBF0EA",accent:"#4C8B5E",ink:"#19241D"}},{id:"terracotta",name:"Atardecer Cálido",desc:"Arcilla cocida, papel hueso y acentos ocre",colors:["#F6ECE4","#261B15","#C45534"],favicon:{bg:"#261B15",page:"#F6ECE4",accent:"#C45534",ink:"#261B15"}},{id:"ocean",name:"Azul Atlántico",desc:"Papel marfil frío y tinta azul de cuaderno de viaje",colors:["#EDF2F6","#16222F","#2B5F8C"],favicon:{bg:"#16222F",page:"#EDF2F6",accent:"#2B5F8C",ink:"#16222F"}},{id:"lavender",name:"Bruma Lavanda",desc:"Lino malva suave y tinta ciruela",colors:["#F2EEF6","#221B2B","#6E4B8E"],favicon:{bg:"#221B2B",page:"#F2EEF6",accent:"#6E4B8E",ink:"#221B2B"}}],Qt=[{id:"calm",label:"Calma y desahogo",icon:"leaf",desc:"Soltar el ruido del día y quedarme más tranquilo/a."},{id:"focus",label:"Constancia y hábitos",icon:"study",desc:"Cuidar mi estudio, mi descanso y mis rutinas diarias."},{id:"memory",label:"Guardar mi historia",icon:"book",desc:"Que los meses no pasen sin recordar lo que he vivido."},{id:"growth",label:"Conocerme mejor",icon:"spark",desc:"Ver qué cosas me sientan bien y cuáles me quitan energía."}],Wt=["Leer 20 minutos","Caminar al aire libre","Pausa sin pantallas","Beber 8 vasos de agua","Respirar 5 minutos en calma","Dormir a buena hora","Estirar el cuerpo","Ordenar mi espacio"],Ua=[{text:"No todos los días son buenos, pero siempre queda algún rincón que merece la pena guardar.",author:"Nota de cuaderno",tones:["warm","gentle"],ages:["teen","young","adult","senior"]},{text:"Cómo pasamos los días es, al final, cómo pasamos la vida.",author:"Annie Dillard",tones:["literary","direct"],ages:["young","adult","senior"],interests:["reading","projects"]},{text:"Escribir en un diario es hablar contigo sin tener que fingir que todo va perfecto.",author:"Apunte al margen",tones:["direct","warm"],ages:["teen","young","adult"]},{text:"La prisa casi nunca arregla lo que el descanso sí sabe colocar en su sitio.",author:"Cuaderno de calma",tones:["gentle","warm"],ages:["teen","young","adult","senior"],interests:["calm","nature"]},{text:"Un paso corto dado hoy vale más que diez planes perfectos que se quedan para el lunes.",author:"Bitácora personal",tones:["direct"],ages:["teen","young","adult"],interests:["study","sport","projects"]},{text:"Guardar memoria de las cosas pequeñas es la mejor forma de vivir dos veces.",author:"Tradición de lectura",tones:["literary"],ages:["young","adult","senior"],interests:["reading","music"]},{text:"Sé amable con tu propio ritmo: ni los árboles dan fruto todos los meses del año.",author:"Cuaderno de campo",tones:["gentle","literary"],ages:["teen","young","adult","senior"],interests:["nature","calm"]},{text:"Lo que hoy parece un examen gigante o un problema sin salida, dentro de un mes será solo una página pasada.",author:"Nota para días revueltos",tones:["warm","gentle"],ages:["teen","young"],interests:["study","gaming"]}],Qa=[{word:"Ataraxia",origin:"Griego clásico",meaning:"Tranquilidad de ánimo que nace cuando dejamos de pelear contra lo que no depende de nosotros.",prompt:"¿Qué preocupación podrías dejar en pausa por esta noche?"},{word:"Meraki",origin:"Griego moderno",meaning:"Hacer algo poniendo el corazón, el cuidado y una parte de ti en ello.",prompt:"¿En qué detalle pequeño de hoy has puesto ganas o cariño?"},{word:"Kintsugi",origin:"Japonés",meaning:"Oficio de reparar la cerámica rota con barniz de oro, sin esconder las grietas.",prompt:"¿Qué tropiezo reciente te ha servido para aprender algo útil?"},{word:"Komorebi",origin:"Japonés",meaning:"La luz del sol cuando se cuela entre las hojas de los árboles.",prompt:"¿Qué imagen o rincón bonito has visto hoy al pasar?"},{word:"Resiliencia",origin:"Latín",meaning:"La capacidad de encajar un golpe, recuperar el aliento y seguir adelante a tu paso.",prompt:"¿Cómo has tirado hacia delante hoy cuando algo se hacía cuesta arriba?"},{word:"Serendipia",origin:"Castellano",meaning:"Eso bueno que te encuentras por casualidad mientras ibas buscando otra cosa.",prompt:"¿Qué momento no planeado ha merecido la pena hoy?"},{word:"Ubuntu",origin:"Zulú · Xhosa",meaning:"La idea de que somos quienes somos gracias también a quienes nos rodean.",prompt:"¿Quién te ha hecho el día un poco más fácil o agradable hoy?"},{word:"Ikigai",origin:"Japonés",meaning:"Aquello que te da un motivo concreto para levantarte por la mañana.",prompt:"¿Qué plan o proyecto te apetece de verdad hacer pronto?"},{word:"Wabi-sabi",origin:"Japonés",meaning:"Gustar de las cosas sencillas, imperfectas y gastadas por la vida real.",prompt:"¿En qué cosa imperfecta de hoy puedes dejar de exigirte tanto?"},{word:"Apapachar",origin:"Náhuatl",meaning:"Dar abrigo y consuelo de verdad; cuidar con cercanía.",prompt:"¿Qué necesitas hoy para descansar a gusto?"},{word:"Sosiego",origin:"Castellano",meaning:"Ese silencio tranquilo que queda cuando por fin se acaba la prisa del día.",prompt:"¿En qué momento del día has notado más calma hoy?"},{word:"Epifanía",origin:"Griego",meaning:"Caer en la cuenta de golpe de algo que llevabas tiempo viendo sin entender.",prompt:"¿De qué cosa te has dado cuenta hoy?"},{word:"Bonhomía",origin:"Castellano",meaning:"Trato llano, honesto y amable que no necesita aparentar nada.",prompt:"¿Qué gesto sencillo de amabilidad has visto o tenido hoy?"},{word:"Nefelibata",origin:"Castellano",meaning:"Persona que de vez en cuando camina por las nubes y mira el mundo a su manera.",prompt:"¿En qué se te ha ido el santo al cielo hoy?"},{word:"Templanza",origin:"Latín",meaning:"Guardar el equilibrio y no perder los papeles cuando alrededor hay ruido.",prompt:"¿En qué situación de hoy has sabido mantener la calma?"},{word:"Alba",origin:"Latín",meaning:"La primera claridad de la mañana antes de que asome el sol.",prompt:"¿Cómo te gustaría empezar la mañana de mañana?"},{word:"Saudade",origin:"Portugués",meaning:"Echar de menos con cariño a alguien o a una época en la que fuiste feliz.",prompt:"¿Qué buen recuerdo te ha venido hoy a la cabeza?"},{word:"Lagom",origin:"Sueco",meaning:"Ni de más ni de menos: saber cuándo algo es ya suficiente.",prompt:"¿Con qué cosa de hoy puedes decir tranquilo/a «por hoy ya está bien»?"},{word:"Sisu",origin:"Finés",meaning:"Empuje tranquilo para terminar lo que empezaste aunque estés cansado.",prompt:"¿Qué cosa has sacado adelante hoy aunque te diera pereza?"},{word:"Hygge",origin:"Danés",meaning:"Estar a gusto en lo cotidiano: una charla tranquila, una manta, un rato en casa.",prompt:"¿Qué momento sencillo del día te ha sentado mejor?"},{word:"Querencia",origin:"Castellano",meaning:"El sitio o la gente a la que uno siempre tiene ganas de volver.",prompt:"¿Dónde o con quién te sientes más cómodo/a últimamente?"},{word:"Claridad",origin:"Latín",meaning:"Distinguir lo que de verdad importa de lo que solo hace ruido.",prompt:"Si te quedas con una sola cosa de hoy, ¿cuál eliges?"},{word:"Amparo",origin:"Latín",meaning:"Tener un lugar o una persona donde resguardarse cuando el día se tuerce.",prompt:"¿Qué te reconforta cuando tienes un día torcido?"},{word:"Gratitud",origin:"Latín",meaning:"No dar por supuesto lo bueno que tenemos cerca cada día.",prompt:"¿Qué cosa normal de tu rutina agradecerías si mañana faltara?"}],Wa=[{category:"Autocompasión",title:"No te hables peor que a un amigo",tip:"Cuando estás cansado o algo sale regular, es fácil machacarse. Prueba a decirte exactamente lo que le dirías a alguien a quien aprecias.",action:"Anota algo que hoy hayas hecho lo mejor que podías.",icon:"heart",ages:["teen","young","adult","senior"],interests:["calm","social"]},{category:"Descanso",title:"Bajar el brillo antes de acostarte",tip:"Dejar el móvil o las pantallas un rato antes de meterte en la cama ayuda a que la cabeza deje de saltar de un tema a otro.",action:"Pon la alarma y deja el teléfono lejos de la almohada.",icon:"moon",ages:["teen","young","adult","senior"],interests:["calm","gaming"]},{category:"Calma",title:"Soltar el aire más despacio",tip:"Cuando notes prisa o nudo en el estómago, toma aire contando 4 y suéltalo despacio contando 6. El cuerpo entiende enseguida el mensaje.",action:"Respira hondo tres veces antes de cerrar el cuaderno.",icon:"leaf",ages:["teen","young","adult","senior"],interests:["calm","nature"]},{category:"Enfoque",title:"La regla de los primeros cinco minutos",tip:"Casi siempre cuesta más ponerse que hacerlo. Ponte solo 5 minutos con eso que estás posponiendo; luego decides si sigues.",action:"Deja escrita una sola tarea concreta para mañana.",icon:"study",ages:["teen","young","adult"],interests:["study","projects"]},{category:"Escritura",title:"Aquí nadie te va a poner nota",tip:"No hace falta escribir bonito ni llenar la página. Tres líneas sinceras sobre lo que te ha pasado hoy bastan.",action:"Escribe lo primero que te salga sin borrar.",icon:"pen",ages:["teen","young","adult","senior"],interests:["reading"]},{category:"Hábitos",title:"Un día suelto no rompe nada",tip:"Si ayer no pudiste cumplir un hábito, no pasa nada. Lo que cuenta es retomarlo hoy con naturalidad y sin culpa.",action:"Empieza por el hábito más fácil de tu lista.",icon:"flame",ages:["teen","young","adult","senior"],interests:["projects","sport"]},{category:"Bienestar",title:"A veces el cansancio es sed",tip:"Gran parte del embotamiento de media tarde viene de llevar horas sin beber agua mientras estudias o trabajas.",action:"Ten un vaso o botella a mano mañana por la mañana.",icon:"drop",ages:["teen","young","adult","senior"],interests:["sport","study","cooking"]},{category:"Calma",title:"Sacar el ruido de la cabeza al papel",tip:"Cuando una preocupación da vueltas en bucle, escribirla en una frase la vuelve manejable y libera espacio mental.",action:"Apunta qué te preocupa hoy y qué parte sí está en tu mano.",icon:"book",ages:["teen","young","adult","senior"],interests:["reading","calm"]},{category:"Movimiento",title:"Caminar también ordena las ideas",tip:"Quince minutos andando sin mirar el teléfono despejan más la mente que media hora intentando concentrarse a la fuerza.",action:"Sal a dar una vuelta corta mañana cuando te satures.",icon:"run",ages:["teen","young","adult","senior"],interests:["sport","nature"]},{category:"Estudio y memoria",title:"Lo que estudias se fija mientras duermes",tip:"Quitarle horas al sueño para estudiar a última hora suele salir caro: el cerebro consolida lo aprendido durante el descanso.",action:"Prioriza dormir bien hoy para rendir mejor mañana.",icon:"study",ages:["teen","young"],interests:["study"]},{category:"Equilibrio",title:"Cerrar la jornada de verdad",tip:"Tener un pequeño ritual al terminar tus obligaciones —recoger la mesa, ducharte o salir a caminar— separa el deber del descanso.",action:"Elige a qué hora vas a desconectar mañana.",icon:"sun",ages:["young","adult"],interests:["projects","calm"]},{category:"Perspectiva",title:"Cuidar el contacto con los tuyos",tip:"A veces un mensaje corto o una llamada de cinco minutos a alguien que quieres cambia por completo el tono de la semana.",action:"Piensa en alguien con quien te apetezca hablar mañana.",icon:"heart",ages:["teen","young","adult","senior"],interests:["social"]}],_a=["¿Qué rato de hoy te ha dejado buen sabor de boca, aunque haya sido breve?","¿Qué te ha dado más pereza o respeto hoy y cómo lo has llevado?","¿Qué conversación, canción o momento tranquilo te ha acompañado hoy?","¿Qué te gustaría quitarte de la cabeza antes de apagar la luz?","Si un amigo hubiera tenido exactamente tu día de hoy, ¿qué le dirías?","¿En qué momento del día te has sentido más cómodo/a siendo tú?","¿Qué detalle pequeño de hoy no querrías que se te olvidara dentro de un año?","¿Cómo notas el cuerpo esta noche: cansado, inquieto, ligero, tranquilo?","¿Qué cosa sencilla ha salido mejor de lo que esperabas esta mañana?","¿Qué necesitas mañana para que sea un día llevadero y amable?"],_t=[{number:"024",tel:"tel:024",name:"Línea 024 · Atención a la conducta suicida",detail:"Ministerio de Sanidad (España) · Gratuita, confidencial, anónima y abierta las 24 horas.",primary:!0},{number:"717 003 717",tel:"tel:717003717",name:"Teléfono de la Esperanza",detail:"Escucha y apoyo emocional en momentos de crisis · 24 horas todos los días.",primary:!0},{number:"900 20 20 10",tel:"tel:900202010",name:"Fundación ANAR (Menores y jóvenes)",detail:"Atención gratuita, confidencial y 24h para jóvenes y adolescentes. No deja rastro en la factura.",primary:!1,youth:!0},{number:"112",tel:"tel:112",name:"Emergencias 112",detail:"Atención inmediata de urgencia sanitaria o seguridad · 24 horas.",primary:!1}];function b(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function de(e){return new Date(`${e}T12:00:00`)}function E(e,a){const t=de(e);return t.setDate(t.getDate()+a),b(t)}function z(e,a){return Math.round((Date.UTC(...a.split("-").map((t,s)=>+t-(s===1?1:0)))-Date.UTC(...e.split("-").map((t,s)=>+t-(s===1?1:0))))/864e5)}function Be(e,a){const t=[e,...a.map(s=>s.date)].sort()[0];return z(t,e)+1}function L(e,a={weekday:"long",day:"numeric",month:"long",year:"numeric"}){return de(e).toLocaleDateString("es-ES",a)}function te(e){const a=de(e).getDay();return E(e,-((a+6)%7))}function ct(e){const a=de(e);return[b(new Date(a.getFullYear(),a.getMonth(),1)),b(new Date(a.getFullYear(),a.getMonth()+1,0))]}function ue(e,a){const t=de(e);return b(new Date(t.getFullYear(),t.getMonth()+a,1))}function Vt(e){const[a,t]=ct(e),s=E(a,-((de(a).getDay()+6)%7)),o=Math.ceil((z(s,t)+1)/7)*7;return Array.from({length:o},(n,r)=>({date:E(s,r),inMonth:E(s,r).slice(0,7)===e.slice(0,7)}))}const x=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e);function U(e){const a=e.filter(t=>Number.isFinite(t));return a.length?a.reduce((t,s)=>t+s,0)/a.length:0}function V(e,a,t){return e.filter(s=>s.date>=a&&s.date<=t).sort((s,o)=>s.date.localeCompare(o.date))}function ut(e){let a=0,t=0,s;for(const o of[...new Set(e.map(n=>n.date))].sort())t=s&&z(s,o)===1?t+1:1,a=Math.max(a,t),s=o;return a}function aa(e,a=b()){const t=new Set(e.map(n=>n.date));let s=t.has(a)?a:E(a,-1),o=0;for(;t.has(s);)o++,s=E(s,-1);return o}function oe(e){const a=[e.bestOfDay,e.differentToday,e.generalDay,e.tomorrow,...e.gratitude||[]].join(" ").trim();return a?a.split(/\s+/).length:0}function Zt(e){return e.reduce((a,t)=>a+oe(t),0)}function Va(e,a){return e.filter(t=>t.habits?.[a]).length}function pt(e,a){return[...new Set(e.filter(t=>t.habits?.[a]).map(t=>t.date))].sort()}function mt(e,a){const t=pt(e,a);let s=0,o=0,n;for(const r of t)o=n&&z(n,r)===1?o+1:1,s=Math.max(s,o),n=r;return s}function la(e,a,t=b()){const s=new Set(pt(e,a));if(!s.size)return 0;let o=s.has(t)?t:E(t,-1),n=0;for(;s.has(o);)n++,o=E(o,-1);return n}function ht(e,a,t=28,s=b()){const o=E(s,1-t),n=e.filter(c=>c.habits?.[a]&&c.date>=o&&c.date<=s).length,r=e.filter(c=>c.date>=o&&c.date<=s).length,d=Math.min(t,z(o,s)+1);return{done:n,tracked:r,window:d,pct:d?Math.round(n/d*100):0}}function Jt(e,a,t=28,s=b(),o=b()){const n=Array.from({length:t},(d,c)=>E(s,c-t+1)),r=new Map(e.map(d=>[d.date,d]));return{dates:n,rows:a.map(d=>({habit:d,cells:n.map(c=>({date:c,done:!!r.get(c)?.habits?.[d.id],future:c>o,recorded:r.has(c)}))}))}}function Za(e){const a=new Map;for(const t of e)for(const s of t.tags||[])a.set(s,(a.get(s)||0)+1);return[...a.entries()].sort((t,s)=>s[1]-t[1])}function ne(e){const a=[...e].sort((s,o)=>s.date.localeCompare(o.date)),t=s=>a.reduce((o,n)=>!o||n[s]>o[s]?n:o,null);return{count:e.length,mood:U(e.map(s=>s.mood)),energy:U(e.map(s=>s.energy)),stress:U(e.map(s=>s.stress)),sleep:U(e.map(s=>s.sleepHours)),study:U(e.map(s=>s.studyHours)),totalSleep:e.reduce((s,o)=>s+o.sleepHours,0),totalStudy:e.reduce((s,o)=>s+o.studyHours,0),words:Zt(e),best:t("mood"),worst:a.reduce((s,o)=>!s||o.mood<s.mood?o:s,null),mostStudy:t("studyHours"),mostSleep:t("sleepHours"),maxStreak:ut(e),moods:[1,2,3,4,5].map(s=>e.filter(o=>o.mood===s).length),counters:Object.fromEntries(le.map(s=>[s.key,{total:e.reduce((o,n)=>o+(n.counters?.[s.key]||0),0),average:U(e.map(o=>o.counters?.[s.key]))}]))}}function gt(e){return e<6?"Has dormido poco.":e<7?"Una cantidad algo baja.":e<=9?"Un descanso razonable.":"Has dormido bastante."}function Yt(e){return e===0?"Hoy no has dedicado tiempo al estudio.":e<1?"Has hecho un poco de estudio.":e<3?"Has tenido una sesión de estudio considerable.":e<5?"Has dedicado bastante tiempo.":"Ha sido un día de estudio intenso."}function da(e,a){switch(e){case"water":return a===0?"Sin registrar agua hoy.":a<4?"Poca agua registrada.":a<8?"Una hidratación razonable.":"Buen nivel de hidratación.";case"exercise":return a===0?"Sin ejercicio registrado hoy.":a<20?"Un poco de movimiento.":a<60?"Una sesión de ejercicio notable.":"Un día muy activo.";case"reading":return a===0?"Sin lectura registrada hoy.":a<20?"Unas páginas para hoy.":a<60?"Una buena sesión de lectura.":"Un día de mucha lectura.";default:return a===0?"Sin pausa consciente registrada.":a<10?"Un momento de pausa.":a<30?"Una práctica considerable.":"Una práctica muy constante hoy."}}const Kt=["","Hoy ha sido un día difícil.","Hoy ha sido un día flojo.","Hoy ha sido un día normal.","Hoy ha sido un día bueno.","Hoy ha sido un día genial."];function Xt(e){const a=[Kt[e.mood],`Has dormido ${x(e.sleepHours)} horas y has dedicado ${x(e.studyHours)} horas al estudio.`,gt(e.sleepHours),Yt(e.studyHours)];e.energy&&a.push(`Tu energía se ha sentido ${["","muy baja","baja","normal","alta","muy alta"][e.energy].toLowerCase()}.`),e.stress&&a.push(`El estrés ha sido ${["","muy bajo","bajo","normal","alto","muy alto"][e.stress].toLowerCase()}.`);const t=Object.values(e.habits||{}).filter(Boolean).length;t&&a.push(`Has cumplido ${t} de tus hábitos de hoy.`);const s=e.counters?.water||0;return s>=6&&a.push(`Además, has bebido ${s} vasos de agua.`),a.join(" ")}function es(e,a=!1){if(!e.count)return"Aún no hay entradas en este período. Cada día que escribas irá dando forma a tu historia.";const t=a?`Durante este mes has registrado ${e.count} ${e.count===1?"día":"días"}. Tu valoración media ha sido de ${x(e.mood)}/5. Has estudiado un total de ${x(e.totalStudy)} horas y tu media de sueño ha sido de ${x(e.sleep)} horas.`:`Esta semana has registrado ${e.count} ${e.count===1?"día":"días"}. Tu estado medio ha sido ${["","difícil","flojo","normal","bueno","genial"][Math.round(e.mood)]}. Has dormido una media de ${x(e.sleep)} horas y estudiado ${x(e.study)} horas por día registrado.`,s=[];return Number.isFinite(e.energy)&&s.push(`Tu energía media ha sido ${x(e.energy)}/5`),Number.isFinite(e.stress)&&s.push(`el estrés medio ${x(e.stress)}/5`),e.words&&s.push(`has escrito ${x(e.words)} palabras`),s.length?`${t} ${s.join(", ")}.`:t}function as(e,a=b()){const t=V(e,E(a,-6),a),s=V(e,E(a,-13),E(a,-7)),o=[];if(t.length>=3&&s.length>=3){const p=ne(t),g=ne(s);p.sleep<g.sleep-.3&&o.push("Tu cantidad media de sueño ha disminuido respecto a los 7 días anteriores."),p.sleep>g.sleep+.3&&o.push("En tus registros, has dormido más que en los 7 días anteriores."),p.study>g.study+.3&&o.push("Has aumentado tus horas medias de estudio respecto a los 7 días anteriores."),p.study<g.study-.3&&o.push("Tu tiempo medio de estudio ha disminuido respecto a los 7 días anteriores."),p.mood>g.mood+.2&&o.push("Tu valoración diaria ha mejorado recientemente."),p.mood<g.mood-.2&&o.push("Tu valoración diaria ha bajado respecto a los 7 días anteriores."),Number.isFinite(p.energy)&&Number.isFinite(g.energy)&&(p.energy>g.energy+.2&&o.push("Se observa una tendencia al alza en tu energía."),p.energy<g.energy-.2&&o.push("Tu energía media ha bajado respecto a la semana anterior.")),Number.isFinite(p.stress)&&Number.isFinite(g.stress)&&p.stress>g.stress+.2&&o.push("Tu estrés medio ha subido respecto a la semana anterior. Quizá convenga cuidar tus ratos de pausa."),o.length||o.push("Tus medias se han mantenido bastante estables respecto a los 7 días anteriores.")}const n=V(e,E(a,-29),a),r=n.filter(p=>p.sleepHours>7),d=n.filter(p=>p.sleepHours<=7);r.length>=3&&d.length>=3&&U(r.map(p=>p.mood))>U(d.map(p=>p.mood))+.3&&o.push("En tus registros de los últimos 30 días, dormir más de 7 horas parece coincidir con una valoración más alta. Es una relación entre registros, no una causa demostrada.");const c=n.filter(p=>(p.counters?.exercise||0)>=20),u=n.filter(p=>(p.counters?.exercise||0)<20);return c.length>=3&&u.length>=3&&U(c.map(p=>p.mood))>U(u.map(p=>p.mood))+.3&&o.push("En tus registros, los días con 20 minutos o más de ejercicio suelen tener una valoración algo más alta. Parece coincidir, sin más."),o}const he=29.530588853,ts="2000-01-06",Ja=2.5,ta=[{id:"shore",label:"A la orilla",desc:"Muy cerca: vuelve en cuanto suba la marea.",min:2,max:7,chance:.94,miles:9,reach:"se ve desde la arena"},{id:"breeze",label:"Brisa costera",desc:"Un par de semanas dando tumbos por la bahía.",min:9,max:28,chance:.8,miles:17,reach:"cruza la bahía"},{id:"current",label:"Corriente del norte",desc:"Semanas de travesía; ya no se ve desde la playa.",min:28,max:80,chance:.63,miles:34,reach:"dobló el cabo"},{id:"deep",label:"Alta mar",desc:"Meses lejos. Puede que no vuelva nunca.",min:80,max:240,chance:.42,miles:58,reach:"más allá del mapa"}],ss=["la corriente del Golfo","el Noroeste","los Alisios","la deriva de Levante","el canal viejo","la corriente fría","el remolino de poniente","la resaca del faro"],sa=[{id:"amber",name:"ámbar",hex:"#B4762E"},{id:"green",name:"verde botella",hex:"#3E6B4F"},{id:"blue",name:"azul cobalto",hex:"#3B5F86"},{id:"smoke",name:"humo",hex:"#6E6257"},{id:"rose",name:"rosa viejo",hex:"#A65B4E"},{id:"clear",name:"cristal",hex:"#7F8E93"}],Ya={near:["aún se divisa desde la orilla","rebota en la rompiente, perezosa","a un par de brazas de la arena"],mid:["cruza la bahía con la marea","dobló el cabo al atardecer","navega entre barcos que no se detienen","persigue una bandada de gaviotas"],far:["en aguas que ya no consultas","se perdió de vista hace días","anda más lejos que tu última carta","viaja con los barcos lentos"],home:["la rompiente la devolvió a tu playa","apareció entre las algas al amanecer","el mar te la dejó en los pies","volvió, con la arena pegada al cristal"],lost:["se hundió despacio, sin testigos","el mar se la quedó para siempre","se fue a pique antes de tocar tierra","nadie la vio llegar a ninguna orilla"]};function bt(e=""){let a=2166136261;const t=String(e);for(let s=0;s<t.length;s++)a^=t.charCodeAt(s),a=Math.imul(a,16777619);return a>>>0}function os(e=0){let a=e>>>0;return()=>{a=a+1831565813>>>0;let t=Math.imul(a^a>>>15,1|a);return t=t+Math.imul(t^t>>>7,61|t)^t>>>0,((t^t>>>14)>>>0)/4294967296}}const Me=(e,a)=>(e%a+a)%a,Ka=(e,a)=>e[Math.floor(a()*e.length)%e.length],ns=["luna nueva","luna creciente","cuarto creciente","gibosa creciente","luna llena","gibosa menguante","cuarto menguante","luna menguante"],vt=e=>Math.min(1,Math.max(0,e));function rs(e=b()){return Me(z(ts,e)+.765,he)}function Oe(e=b()){const a=rs(e),t=he/2,s=Math.min(Me(a,t),t-Me(a,t)),o=a<t;let n="swell",r="Marea en movimiento",d=.6;s<=Ja?(n="spring",r="Marea viva",d=1):Math.abs(Me(a,t)-t/2)<=Ja?(n="neap",r="Marea muerta",d=.28):o?(n="rising",r="Marea creciente",d=.7):(n="falling",r="Marea menguante",d=.5);const c=vt((1-Math.cos(2*Math.PI*a/he))/2),u=ns[Math.floor(Me(a+he/16,he)/(he/8))%8];return{age:a,key:n,name:r,strength:d,rising:o,illum:c,moon:Math.round(c*100)/100,phase:u}}function is(e=b()){return Oe(e).key==="spring"}function ls(e,a=16){for(let t=0;t<=a;t++){const s=E(e,t);if(is(s))return s}return e}function Pe(e="breeze"){return ta.find(a=>a.id===e)||ta.find(a=>a.id==="breeze")}function ds({text:e="",castAt:a=b(),sea:t="breeze",id:s=""}={}){const o=Pe(t),n=os(bt(`${a}|${o.id}|${s}|${String(e).trim().slice(0,220)}`)),r=n(),d=n(),c=n(),u=n(),p=Math.max(1,Math.round(o.min+r*(o.max-o.min))),g=d<o.chance,w=Math.max(4,Math.round(o.miles*(.7+c*.6))),M=E(a,p),v=g?ls(M):M,j=Math.max(3,Math.round(p*.22));return{sea:o.id,returns:g,speed:w,driftDays:Math.max(1,z(a,v)),arriveOn:v,lostOn:g?null:E(a,p+j),current:Ka(ss,n),glass:Ka(sa,n),mottoSeed:Math.floor(u*1e6)}}function ft(e,a=b()){return Math.max(0,z(e.castAt,a))}function ca(e,a=b()){return e.status&&e.status!=="drifting"?e.status:e.returns?a>=(e.arriveOn||e.castAt)?"returned":"drifting":e.lostOn&&a>=e.lostOn?"lost":"drifting"}function cs(e,a=b()){if(!e||typeof e!="object")return e;const t=ca(e,a);if(t===e.status)return e;const s=new Date().toISOString();return t==="returned"?{...e,status:"returned",returnedAt:e.arriveOn||b(),seen:!1,updatedAt:s}:t==="lost"?{...e,status:"lost",lostAt:e.lostOn||b(),seen:!1,updatedAt:s}:e}function us(e){return!e.returns&&e.lostOn?e.lostOn:e.arriveOn||e.castAt}function we(e,a=b()){const t=us(e),s=Math.max(1,z(e.castAt,t)),o=ft(e,a),n=ca(e,a),r=n==="drifting"?vt(o/s):1,d=Math.round(o*(e.speed||10)),c=n==="drifting"&&!e.returns?null:Math.max(0,s-o)*(e.speed||10);return{fate:n,pct:r,atSea:o,total:s,horizon:t,miles:d,milesHome:c===null?null:Math.round(c),label:n==="drifting"?`día ${o} de ${s}`:n==="returned"?"de vuelta a casa":"a pique",phase:n==="returned"?"home":n==="lost"?"lost":r<.18?"near":r<.62?"mid":"far"}}function yt(e,a=b()){const{phase:t}=we(e,a),s=Ya[t]||Ya.mid,o=bt(`${e.id||""}|${e.mottoSeed||0}|${t}`);return s[o%s.length]}function $t(e,a=b()){const t=we(e,a);if(t.fate==="returned")return"en la orilla";if(t.fate==="lost")return"perdida";const s=Math.max(0,t.total-t.atSea);return s<=1?"casi llega":s<=7?`${s} días para la orilla`:`${s} días de travesía`}function ce(e=[],a=b()){const t={drifting:[],returned:[],lost:[],kept:[]};for(const s of e)t[ca(s,a)]?.push(s);t.kept=e.filter(s=>s.kept),t.drifting.sort((s,o)=>s.castAt.localeCompare(o.castAt));for(const s of["returned","lost"])t[s].sort((o,n)=>String(n.returnedAt||n.lostAt||n.castAt).localeCompare(String(o.returnedAt||o.lostAt||o.castAt)));return t.returned.sort((s,o)=>(s.seen===!0)-(o.seen===!0)||String(o.returnedAt||"").localeCompare(String(s.returnedAt||""))),t.kept.sort((s,o)=>String(o.keptOn||"").localeCompare(String(s.keptOn||""))),t}function ye(e=[],a=b()){return e.filter(t=>ca(t,a)==="returned")}function ps(e=[],a=b()){const t=ce(e,a),s=e.reduce((d,c)=>d+wt(c.text),0),o=e.reduce((d,c)=>{const u=Math.round(ft(c,a)*(c.speed||10));return u>(d?.miles||0)?{miles:u,bottle:c}:d},null),n=e.filter(d=>d.status!=="drifting"),r=n.length?Math.round(n.reduce((d,c)=>d+Math.max(1,z(c.castAt,c.returnedAt||c.lostAt||c.castAt)),0)/n.length):0;return{total:e.length,drifting:t.drifting.length,returned:t.returned.length,lost:t.lost.length,kept:t.kept.length,words:s,avgDays:r,farthest:o||{miles:0,bottle:null}}}function wt(e=""){const a=String(e||"").trim();return a?a.split(/\s+/).length:0}function Aa(e=b()){const a=Oe(e);return a.key==="spring"?"Marea viva: hoy el mar devuelve lo que guardó.":a.key==="neap"?"Marea muerta: el agua apenas se mueve, ten paciencia.":a.key==="rising"?"La marea sube: algo podría acercarse a la orilla.":"La marea baja: buen momento para escribir y soltar."}const Ca="diario.entries.v1",La="diario.habits.v1",ja="diario.setup.v1",ua="diario.thoughts.v1",I={completed:!1,name:"",age:null,ageGroup:"young",interests:[],ritual:"night",tone:"warm",savedQuotes:[],purpose:"calm",motto:"Un día a la vez.",theme:"paper",sleepGoal:7.5,studyGoal:2,waterGoal:8,showDailyWord:!0,showDailyTip:!0,crisisAlertsEnabled:!0,trustedContactName:"",trustedContactPhone:"",sidebarCollapsed:!1,updatedAt:null};function pa(e,a="young"){const t=Number(e);return!Number.isFinite(t)||t<=0?a:t<=18?"teen":t<=26?"young":t<=49?"adult":"senior"}function se(e,a){if(typeof e!="string")throw new Error(`${a} debe ser texto.`);if(e.length>2e4)throw new Error(`${a} debe tener como máximo 20.000 caracteres.`);return e}function ms(e,a){const t=le.find(o=>o.key===a);if(e==null||e==="")return 0;const s=Number(e);if(!Number.isFinite(s)||s<t.min||s>t.max)throw new Error(`${t.label} debe estar entre ${t.min} y ${t.max}.`);return Math.round(s*10)/10}function Xa(e){if(e==null||e==="")return null;const a=Number(e);if(!Number.isInteger(a)||a<1||a>5)throw new Error("Las escalas van de 1 a 5.");return a}function ma(e){if(!e||typeof e!="object"||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(new Date(e.date+"T12:00:00").getTime())||b(new Date(e.date+"T12:00:00"))!==e.date)throw new Error("Hay una fecha no válida.");if(e.date>b())throw new Error("No se pueden registrar días futuros.");if(!Number.isInteger(e.mood)||e.mood<1||e.mood>5)throw new Error("Selecciona cómo te ha ido el día.");for(const r of["sleepHours","studyHours"]){const d=e[r];if(typeof d!="number"||!Number.isFinite(d)||d<0||d>24)throw new Error("Las horas deben estar entre 0 y 24.")}const a=Object.fromEntries(Ut.map(r=>[r,se(e[r]??"",r)]));if(!a.generalDay.trim())throw new Error("Escribe cómo ha ido tu día en general.");const t=se(e.capsule??"","La cápsula del día").slice(0,300);if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(r=>typeof r!="string"||r.length>2e4))throw new Error("El agradecimiento debe tener tres campos de texto.");if(e.goals!==void 0&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(r=>typeof r!="string"||r.length>500)))throw new Error("La lista de objetivos no es válida.");const s=Array.isArray(e.tags)?e.tags:[];if(s.length>20)throw new Error("Puedes elegir como máximo 20 etiquetas.");for(const r of s)if(typeof r!="string"||!r.trim()||r.length>40)throw new Error("Hay una etiqueta no válida.");const o={};for(const r of le)o[r.key]=ms(e.counters?.[r.key],r.key);const n={};if(e.habits!==void 0&&(typeof e.habits!="object"||e.habits===null||Array.isArray(e.habits)))throw new Error("Los hábitos no son válidos.");for(const[r,d]of Object.entries(e.habits||{}))typeof r=="string"&&r.length<=60&&(n[r]=d===!0);return{id:typeof e.id=="string"?e.id:crypto.randomUUID(),date:e.date,mood:e.mood,sleepHours:e.sleepHours,studyHours:e.studyHours,energy:Xa(e.energy),stress:Xa(e.stress),...a,capsule:t,gratitude:e.gratitude.map(r=>se(r??"","El agradecimiento")),goals:(e.goals||[]).map(r=>se(r,"Un objetivo")),tags:[...new Set(s.map(r=>r.trim()))],counters:o,habits:n,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function Da(e){const a=e.map(ma).sort((t,s)=>t.date.localeCompare(s.date));return a.map(t=>({...t,dayNumber:Be(t.date,a)}))}function ha(){const e=localStorage.getItem(Ca);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se han podido leer tus entradas.");return Da(a)}function Ta(e){const a=Da(e);return localStorage.setItem(Ca,JSON.stringify(a)),a}function St(e){const a=ma(e);a.updatedAt=new Date().toISOString();const t=ha();return Ta([...t.filter(s=>s.date!==a.date),a])}function hs(e){return Ta(ha().filter(a=>a.date!==e))}function gs(){localStorage.removeItem(Ca),localStorage.removeItem(La),localStorage.removeItem(ja),localStorage.removeItem(ua)}function Se(e){if(!e||typeof e!="object")throw new Error("Hábito no válido.");const a=se(e.name??"","El nombre del hábito").trim();if(!a)throw new Error("El hábito necesita un nombre.");if(a.length>40)throw new Error("El nombre del hábito debe tener 40 caracteres o menos.");return{id:typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),name:a,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString()}}function ze(){const e=localStorage.getItem(La);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se han podido leer tus hábitos.");return a.map(Se)}function Ha(e){const a=e.map(Se);return localStorage.setItem(La,JSON.stringify(a)),a}function oa(e){const a=Se(e),t=ze();return Ha([...t.filter(s=>s.id!==a.id),a])}function bs(e){return Ha(ze().filter(a=>a.id!==e))}const vs=new Set(ta.map(e=>e.id)),fs=new Set(sa.map(e=>e.id)),ys=new Set(["drifting","returned","lost"]);function pe(e){return typeof e=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e)}function xe(e){if(!e||typeof e!="object")throw new Error("El pensamiento no es válido.");const a=se(e.text??"","El pensamiento").trim().slice(0,1200);if(!a)throw new Error("Escribe un pensamiento antes de echar la botella al mar.");const t=pe(e.castAt)&&e.castAt<=b()?e.castAt:b(),s=vs.has(e.sea)?e.sea:"breeze",o=Number.isInteger(e.mood)&&e.mood>=1&&e.mood<=5?e.mood:null,n=typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),r=Number.isInteger(e.driftDays)&&pe(e.arriveOn)?{returns:e.returns===!0,speed:Number.isFinite(e.speed)?Math.max(1,Math.round(e.speed)):10,driftDays:Math.max(1,e.driftDays),arriveOn:e.arriveOn,lostOn:pe(e.lostOn)?e.lostOn:null,current:typeof e.current=="string"?e.current.slice(0,60):"",mottoSeed:Number.isFinite(e.mottoSeed)?Math.round(e.mottoSeed):0}:ds({text:a,castAt:t,sea:s,id:n});return{id:n,text:a,castAt:t,mood:o,sea:s,...r,status:ys.has(e.status)?e.status:"drifting",glass:fs.has(e.glass)?e.glass:"amber",returnedAt:pe(e.returnedAt)?e.returnedAt:null,lostAt:pe(e.lostAt)?e.lostAt:null,reply:se(e.reply??"","La respuesta").trim().slice(0,1200),kept:!!e.kept,keptOn:pe(e.keptOn)?e.keptOn:null,seen:e.seen===!0,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function ga(e){const a=b(),t=e.map(xe).map(s=>s.castAt>a?{...s,castAt:a}:s).sort((s,o)=>s.castAt.localeCompare(o.castAt)||s.id.localeCompare(o.id));return localStorage.setItem(ua,JSON.stringify(t)),X()}function $s(e){const a=b();let t=!1;const s=e.map(o=>{const n=cs(o,a);return n!==o&&(t=!0),n});return t&&localStorage.setItem(ua,JSON.stringify(s)),s}function X(){const e=localStorage.getItem(ua);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se ha podido leer tu mar de pensamientos.");return $s(a.map(xe))}function ws(e){const a=X().find(o=>o.id===e?.id)||null,t=a?Object.fromEntries(["sea","returns","speed","driftDays","arriveOn","lostOn","current","glass","mottoSeed","status"].map(o=>[o,a[o]])):{},s=xe({...a,...e,...t,updatedAt:new Date().toISOString()});return ga([...X().filter(o=>o.id!==s.id),s])}function Y(e,a={}){const t=X();return ga(t.map(s=>s.id===e?{...s,...a,updatedAt:new Date().toISOString()}:s))}function Ss(e){return ga(X().filter(a=>a.id!==e))}function xt(e){return Y(e,{status:"drifting",castAt:b(),driftDays:null,arriveOn:null,lostOn:null,returnedAt:null,lostAt:null,seen:!1,reply:"",kept:!1,keptOn:null})}function ba(e={}){const a=e&&typeof e=="object"?e:{},t=new Set(W.map(v=>v.id)),s=new Set(Qt.map(v=>v.id)),o=new Set(Le.map(v=>v.id)),n=new Set(ia.map(v=>v.id)),r=new Set(je.map(v=>v.id)),d=new Set(De.map(v=>v.id)),c=(v,j,J,F)=>{const R=Number(v);return Number.isFinite(R)?Math.min(J,Math.max(j,Math.round(R*10)/10)):F};let u=null;if(a.age!==void 0&&a.age!==null&&a.age!==""){const v=Math.round(Number(a.age));Number.isFinite(v)&&v>=8&&v<=115&&(u=v)}const p=o.has(a.ageGroup)?a.ageGroup:I.ageGroup,g=u!==null?pa(u,p):p,w=Array.isArray(a.interests)?[...new Set(a.interests.filter(v=>n.has(v)))]:[],M=Array.isArray(a.savedQuotes)?[...new Set(a.savedQuotes.filter(v=>typeof v=="string"&&v.trim().length>0).map(v=>v.trim().slice(0,260)))].slice(0,40):[];return{completed:!!a.completed,name:String(a.name??"").trim().slice(0,50),age:u,ageGroup:g,interests:w,ritual:r.has(a.ritual)?a.ritual:I.ritual,tone:d.has(a.tone)?a.tone:I.tone,savedQuotes:M,purpose:s.has(a.purpose)?a.purpose:I.purpose,motto:String(a.motto??I.motto).trim().slice(0,140)||I.motto,theme:t.has(a.theme)?a.theme:I.theme,sleepGoal:c(a.sleepGoal,4,14,I.sleepGoal),studyGoal:c(a.studyGoal,0,16,I.studyGoal),waterGoal:c(a.waterGoal,1,25,I.waterGoal),showDailyWord:a.showDailyWord===void 0?!0:!!a.showDailyWord,showDailyTip:a.showDailyTip===void 0?!0:!!a.showDailyTip,crisisAlertsEnabled:a.crisisAlertsEnabled===void 0?!0:!!a.crisisAlertsEnabled,trustedContactName:String(a.trustedContactName??"").trim().slice(0,60),trustedContactPhone:String(a.trustedContactPhone??"").trim().slice(0,30),sidebarCollapsed:!!a.sidebarCollapsed,updatedAt:typeof a.updatedAt=="string"?a.updatedAt:new Date().toISOString()}}function va(){const e=localStorage.getItem(ja);if(!e)return{...I};try{const a=JSON.parse(e);return ba(a)}catch{return{...I}}}function K(e={}){const a=va(),t=ba({...a,...e,updatedAt:new Date().toISOString()});return localStorage.setItem(ja,JSON.stringify(t)),t}function xs(e,a=ze(),t=va(),s=X()){return JSON.stringify({app:"diario",version:1,exportedAt:new Date().toISOString(),entries:Da(e),habits:a.map(Se),thoughts:s.map(xe),setup:ba(t)},null,2)}function ks(e){let a;try{a=JSON.parse(e)}catch{throw new Error("El archivo no es una copia JSON válida.")}if(!a||typeof a!="object"||a.version!==1||!Array.isArray(a.entries))throw new Error("Selecciona una copia JSON de Diario (versión 1).");const t=a.entries.map(ma);if(new Set(t.map(r=>r.date)).size!==t.length)throw new Error("La copia contiene fechas duplicadas.");const s=Array.isArray(a.habits)?a.habits.map(Se):[],o=Array.isArray(a.thoughts)?a.thoughts.map(xe):[],n=a.setup?ba(a.setup):null;return{entries:t,habits:s,thoughts:o,setup:n}}function qs(e){const a=ha(),t=new Map(a.map(n=>[n.date,n]));for(const n of e.entries)t.set(n.date,ma(n));const s=new Map(ze().map(n=>[n.id,n]));for(const n of e.habits)s.set(n.id,Se(n));Ha([...s.values()]);const o=new Map(X().map(n=>[n.id,n]));for(const n of e.thoughts||[])o.set(n.id,xe(n));return ga([...o.values()]),e.setup&&K(e.setup),Ta([...t.values()])}function Ms(e=""){return String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim()}function re(e="paper",a={}){const t=W.find(u=>u.id===e)||W[0],{bg:s,page:o,accent:n,ink:r}=t.favicon||{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"},d=String(a?.name||"").trim().slice(0,1).toUpperCase(),c=d?`<text x="36" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="18" fill="${r}">${d.replace(/[<>&"']/g,"")}</text>`:`<path d="M29 29h14M29 36h10" stroke="${r}" stroke-width="2.6" stroke-linecap="round"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="16" fill="${s}"/>
    <rect x="14" y="11" width="38" height="42" rx="5" fill="${o}"/>
    <rect x="14" y="11" width="7" height="42" rx="2" fill="${n}"/>
    <path d="M41 11v12l-4-3-4 3V11" fill="${n}"/>
    ${c}
    <circle cx="46" cy="46" r="3" fill="${n}"/>
  </svg>`.replace(/\s+/g," ").trim()}function Es(e="paper",a={}){const t=re(e,a);return`data:image/svg+xml;utf8,${encodeURIComponent(t)}`}const As=[{label:"suicidio",regex:/\b(suicid(io|arme|arse|a)|conducta suicida)\b/},{label:"quitarme la vida",regex:/\b(quitar(me|se) la vida|acabar con mi vida|terminar con mi vida)\b/},{label:"no quiero vivir",regex:/\b(no quiero (seguir viviendo|vivir)|no merece la pena vivir|no vale la pena vivir)\b/},{label:"quiero morir",regex:/\b(quiero morir(me)?|me quiero morir|deseo morir(me)?|prefiero estar muert[oa]|mejor muert[oa])\b/},{label:"autolesión",regex:/\b(autolesion(arme|arse|es)?|hacerme dano|hacerme sangre|cortarme las venas|cortarme el brazo|cortarme la piel)\b/},{label:"acabar con todo",regex:/\b(acabar con todo para siempre|desaparecer para siempre|ojala no despertar|no despertar manana|matarme|tirarme (por la ventana|al tren|desde un puente)|sobredosis)\b/}];function Cs(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"){const a=Array.isArray(e.gratitude)?e.gratitude.join(" "):"",t=Array.isArray(e.goals)?e.goals.join(" "):"",s=Array.isArray(e.tags)?e.tags.join(" "):"";return[e.bestOfDay,e.differentToday,e.generalDay,e.wordOfDay,e.capsule,e.tomorrow,a,t,s].filter(Boolean).join(" ")}return""}function B(e={}){const a=e?.age?pa(e.age,e.ageGroup||"young"):e?.ageGroup||"young",t=Le.find(j=>j.id===a)||Le[1],s=Array.isArray(e?.interests)?e.interests:[],o=ia.filter(j=>s.includes(j.id)),n=je.find(j=>j.id===e?.ritual)||je[0],r=De.find(j=>j.id===e?.tone)||De[0];let d=t.focusLabel,c=t.focusQuestion;s.includes("study")?(d="Estudio",c="Tiempo de estudio o repaso"):s.includes("projects")&&t.id!=="teen"&&(d="Proyectos y enfoque",c="Tiempo dedicado a tus proyectos");const u=[...new Set([...o.map(j=>j.habit),...t.habits,...Wt])].slice(0,8),p=[...new Set([...o.map(j=>j.tag),...t.tags,...It])].slice(0,12),g=Number.isFinite(Number(e?.age))&&Number(e.age)>0&&Number(e.age)<18;let w="Nota al margen (canción, lectura, lugar...)",M="Una canción, un libro, una película o un detalle que quieras recordar...";s.includes("music")?(w="Canción, película o escena del día",M="¿Qué has escuchado o visto hoy?"):s.includes("reading")?(w="Lectura o cita del día",M="Un libro que estés leyendo o una frase que te haya gustado..."):s.includes("gaming")&&(w="Partida, serie o tema del día",M="A qué has jugado hoy o qué serie estás viendo...");const v=["water"];return(s.includes("sport")||s.includes("nature")||!s.length)&&v.push("exercise"),(s.includes("reading")||s.includes("study")||!s.length)&&v.push("reading"),(s.includes("calm")||!s.length)&&v.push("mindfulness"),{group:t,age:e?.age||null,isMinor:g,interests:o,ritual:n,tone:r,focusLabel:d,focusQuestion:c,capsuleLabel:w,capsulePlaceholder:M,activeCounterKeys:v,sleepRecommended:t.sleepRecommended,studyRecommended:t.studyRecommended,suggestedHabits:u,tags:p,placeholders:t.placeholders}}function Na(e){const a=Cs(e),t=Ms(a),s=[];if(t)for(const o of As)o.regex.test(t)&&s.push(o.label);return s.length>0?{triggered:!0,level:"high",matchedTerms:s,reason:"Si estás pasando por un momento muy difícil, no tienes por qué llevarlo a solas. El 024 es gratuito, confidencial y atiende las 24 horas."}:{triggered:!1,level:"none",matchedTerms:[],reason:""}}function Te(e=b()){const a=String(e||"").replace(/[^0-9]/g,"");let t=0;for(let s=0;s<a.length;s++)t=t*31+a.charCodeAt(s)>>>0;return t||1}function Ls(e=b(),a=0){const t=(Te(e)+Math.abs(a))%Qa.length;return Qa[t]}function js(e=b(),a=0,t={}){const o=B(t).group.id,n=new Set(t?.interests||[]),r=Wa.filter(u=>{const p=!u.ageGroups||u.ageGroups.includes(o),g=!u.interests||u.interests.some(w=>n.has(w));return p||g}),d=r.length?r:Wa,c=(Te(e)*7+Math.abs(a))%d.length;return d[c]}function Ds(e=b(),a=0,t={}){const o=B(t).group.id,n=t?.tone||"warm",r=new Set(t?.interests||[]),d=Array.isArray(t?.savedQuotes)?t.savedQuotes:[];if(d.length>0&&a%3===0){const M=(Te(e)+Math.abs(a))%d.length;return{text:d[M],author:t?.name?`Guardada por ${t.name}`:"De tu colección",isCustom:!0}}const c=Ua.map(M=>{let v=0;return M.tones?.includes(n)&&(v+=3),M.ageGroups?.includes(o)&&(v+=2),M.interests?.some(j=>r.has(j))&&(v+=4),{q:M,score:v}}),u=Math.max(...c.map(M=>M.score),0),p=c.filter(M=>M.score>=Math.max(2,u-2)).map(M=>M.q),g=p.length>=4?p:Ua,w=(Te(e)*5+Math.abs(a))%g.length;return g[w]}function ka(e=b(),a=0){const t=(Te(e)*13+Math.abs(a))%_a.length;return _a[t]}function Ts(e={},a={}){const t=[],s=B(a),o=Number(a?.sleepGoal)||s.sleepRecommended||7.5,n=Number(e?.sleepHours),r=Number(e?.stress),d=Number(e?.mood);return Number.isFinite(n)&&n>0&&n<o-1.5&&t.push({icon:"moon",title:"Descanso corto",text:`Has dormido ${n} h (tu meta es ${o} h). Intenta bajar el ritmo esta tarde.`}),Number.isFinite(r)&&r>=4&&t.push({icon:"wind",title:"Día cargado",text:"Con este nivel de tensión, prioriza una sola cosa hoy y deja el resto para mañana."}),Number.isFinite(d)&&d===1&&t.push({icon:"heart",title:"Día cuesta arriba",text:"En los días pesados basta con descansar y cubrir lo básico."}),t.slice(0,2)}function Hs(e=[],a={}){const t=B(a),s=Number(a?.sleepGoal)||t.sleepRecommended||7.5,o=Number(a?.studyGoal)??t.studyRecommended??2,n=Number(a?.waterGoal)||8,r=e.length;if(!r)return{total:0,sleepGoal:s,studyGoal:o,waterGoal:n,sleepMet:0,studyMet:0,waterMet:0,sleepPct:0,studyPct:0,waterPct:0,moodWhenSleepMet:null,moodWhenSleepMissed:null};const d=e.filter(g=>g.sleepHours>=s),c=e.filter(g=>g.sleepHours<s),u=e.filter(g=>g.studyHours>=o),p=e.filter(g=>(g.counters?.water||0)>=n);return{total:r,sleepGoal:s,studyGoal:o,waterGoal:n,sleepMet:d.length,studyMet:u.length,waterMet:p.length,sleepPct:Math.round(d.length/r*100),studyPct:Math.round(u.length/r*100),waterPct:Math.round(p.length/r*100),moodWhenSleepMet:d.length?x(U(d.map(g=>g.mood))):null,moodWhenSleepMissed:c.length?x(U(c.map(g=>g.mood))):null}}function Ns(e="",a=new Date().getHours()){const t=String(e||"").trim(),s=t?`, ${t}`:"";return a>=5&&a<13?`Buenos días${s}`:a>=13&&a<20?`Buenas tardes${s}`:`Buenas noches${s}`}const Bs={pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',week:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 9h18M8 14h8"/>',month:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9"/>',history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-5 3-7 1 2 2 3 2 3 0-3-1-4 0-6Z"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',study:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',check:'<path d="M20 6 9 17l-5-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',download:'<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3"/>',upload:'<path d="M12 15V3m0 0-4 4m4-4 4 4M4 17v3h16v-3"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 5.1-6C9.5 14.5 12 13 13 12"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',bolt:'<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',storm:'<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/><path d="m13 11-3 5h4l-2 5"/>',drop:'<path d="M12 2.7 6.4 8.3a8 8 0 1 0 11.3 0Z"/>',run:'<circle cx="15" cy="4" r="2"/><path d="m10.5 9.5-3 3L5 11m5.5-1.5 3.5 2 3 2M9 14l-2 6m5-4 3 5"/>',book:'<path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',stamp:'<path d="M5 21h14M6 17h12v2H6zM9 17v-3a3 3 0 1 1 6 0v3"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',refresh:'<path d="M21 12a9 9 0 0 0-15.4-6.4L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15.4 6.4L21 16"/><path d="M21 21v-5h-5"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5-4.5-8.6-10-8.6Z"/>',spark:'<path d="m12 3 1.9 5.8L20 10.8l-6.1 1.9L12 18.5l-1.9-5.8L4 10.8l6.1-2Z"/>',quote:'<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/>',expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',wave:'<path d="M2 9.5c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/><path d="M2 15c2 0 2 1.8 4 1.8S8 15 10 15s2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/>',tide:'<path d="M3 16.5c1.7 0 1.7 1.5 3.4 1.5s1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5 1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5"/><circle cx="17" cy="6" r="3"/><path d="M4 11c1.7 0 1.7 1.5 3.4 1.5S9.1 11 10.8 11"/>',send:'<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z"/>',anchor:'<circle cx="12" cy="5" r="2.6"/><path d="M12 7.6V21"/><path d="M8.5 10h7"/><path d="M3 14a9 9 0 0 0 18 0"/><path d="M3 14h3M18 14h3"/>',bookmark:'<path d="M6.5 3h11a1 1 0 0 1 1 1v17l-6.5-4.6L5.5 21V4a1 1 0 0 1 1-1Z"/>',reply:'<path d="M9 14 4 9l5-5"/><path d="M4 9h9.5A6.5 6.5 0 0 1 20 15.5V20"/>',seal:'<circle cx="12" cy="12" r="8"/><path d="m12 7.6 1.5 2.9 3.2.4-2.3 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.3-2.3 3.2-.4Z"/>',eye:'<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',grid:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',listChecks:'<path d="M11 6h10M11 12h10M11 18h10"/><path d="m3 6 1.6 1.6L7.2 5M3 12l1.6 1.6 2.6-2.6M3 18l1.6 1.6 2.6-2.6"/>',sail:'<path d="M3 18.5h18l-2.6 3.2H5.6Z"/><path d="M12.5 15V3.5L20 15Z"/><path d="M10.5 15 6 8.5 3.8 15Z"/>'},i=e=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Bs[e]||""}</svg>`,l=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]);function Os(e={},a=0){const t=B(e),s=e.name?l(e.name):"Personalizar perfil",o=e.age?`${e.age} años`:t.group.label;return`<button type="button" class="ex-libris-card" data-action="open-setup-wizard" title="Editar perfil y preferencias">
    <span class="ex-libris-icon">${re(e.theme||"paper",e)}</span>
    <div class="ex-libris-meta">
      <strong>${s}</strong>
      <small>${l(o)} · ${a} ${a===1?"día":"días"}</small>
    </div>
  </button>`}function et(e,a,t,s,o,n,r){return`<div class="scale-field">
    <p class="field-title">${i(s)} ${o}</p>
    <p class="field-caption">${n}</p>
    <div class="level-scale" role="radiogroup" aria-label="${o}">
      ${[1,2,3,4,5].map(d=>`<label class="level-option">
        <input type="radio" name="${e}" value="${d}" ${t===d?"checked":""}>
        <span class="level-num">${d}</span>
        <span class="level-text">${a[d]}</span>
      </label>`).join("")}
    </div>
    <small id="${e}-hint">${t?a[t]+".":r}</small>
  </div>`}function Ps(e=[],a=[]){const t=new Set(e);return`<div class="tag-picker">
    ${[...new Set([...a,...e])].map(o=>`<label class="tag-chip">
      <input type="checkbox" name="tags" value="${l(o)}" ${t.has(o)?"checked":""}>
      <span>${l(o)}</span>
    </label>`).join("")}
    <label class="tag-chip ghost">
      <span>+ Otra:</span>
      <input type="text" name="tagCustom" id="tagCustom" maxlength="24" placeholder="Escribe y pulsa Enter" aria-label="Añadir etiqueta personalizada">
    </label>
  </div>`}function zs(e={},a=[],t={},s={}){const o=B(t),n=new Set(o.activeCounterKeys||["water"]),r=a.filter(u=>n.has(u.key)||(Number(e?.[u.key])||0)>0),d=r.length?r:a,c=s.action?`${s.action}-`:"";return`<div class="counters-grid">${d.map(u=>{const p=Number(e?.[u.key])||0,w=u.key==="water"?t.waterGoal||8:0,M=w?Math.min(100,Math.round(p/w*100)):0;return`<div class="counter-row" data-counter="${u.key}">
      <div>
        <p class="field-title">${i(u.icon)} ${u.label} ${w?`<small class="counter-goal-pill ${p>=w?"met":""}">Meta: ${p}/${w}</small>`:""}</p>
        <p class="field-caption" id="hint-${u.key}">${da(u.key,p)}</p>
        ${w?`<div class="counter-progress"><i style="width:${M}%"></i></div>`:""}
      </div>
      <div class="stepper">
        <button type="button" class="icon-button" data-action="${c}counter-minus" data-key="${u.key}" data-step="${u.step}" aria-label="Restar ${u.label}">${i("minus")}</button>
        <div class="stepper-value">
          <input type="number" name="counter_${u.key}" min="0" max="${u.max}" step="${u.step}" value="${p}" aria-label="${u.label}" data-counter-input="${u.key}">
          <span>${u.unit}</span>
        </div>
        <button type="button" class="icon-button" data-action="${c}counter-plus" data-key="${u.key}" data-step="${u.step}" aria-label="Sumar ${u.label}">${i("plus")}</button>
      </div>
    </div>`}).join("")}</div>`}function Gs(e,a,{mini:t=!1,selected:s=b()}={}){const o=new Map(a.map(d=>[d.date,d])),n=b(),r=Vt(e).map(d=>{const c=o.get(d.date),u=c?T[c.mood-1]:null,p=d.date>n,g=["calendar-day",!d.inMonth&&"outside",d.date===n&&"today",d.date===s&&"selected",c&&"recorded"].filter(Boolean).join(" "),w=`${L(d.date)}${u?`, ${u.label}`:", sin entrada"}`;return`<button type="button" class="${g}" data-action="open-day" data-date="${d.date}" ${p?"disabled":""} aria-label="${w}" style="${u?`--mood:${u.color}`:""}">
      <span>${d.day}</span>${u?'<i aria-hidden="true"></i>':""}
    </button>`}).join("");return`<div class="calendar ${t?"mini":""}">
    <div class="calendar-heading">
      <button type="button" class="icon-button ghost" data-action="month-prev" data-mini="${t?"1":"0"}" aria-label="Mes anterior">${i("left")}</button>
      <strong>${L(e,{month:"long",year:"numeric"})}</strong>
      <button type="button" class="icon-button ghost" data-action="month-next" data-mini="${t?"1":"0"}" aria-label="Mes siguiente">${i("right")}</button>
    </div>
    <div class="calendar-grid">
      ${Rt.map(d=>`<span class="weekday">${d}</span>`).join("")}
      ${r}
    </div>
  </div>`}function Fs(e,a,t,s={}){const o=new Map(e.map(m=>[m.date,m])),n=680,r=230,d=36,c=26,u=n-d*2,p=r-c*2,g=m=>d+(t===1?u/2:m*u/(t-1)),w=m=>c+(5-m)*p/4,M=m=>c+p-Math.min(12,Math.max(0,m||0))/12*p,v=[],j=[],J=Math.max(6,Math.min(18,Math.floor(u/t)-6));for(let m=0;m<t;m++){const S=E(a,m),A=o.get(S);if(A){v.push({x:g(m),y:w(A.mood),e:A,d:S});const D=M(A.sleepHours),O=Math.max(2,c+p-D);j.push(`<rect x="${(g(m)-J/2).toFixed(1)}" y="${D.toFixed(1)}" width="${J}" height="${O.toFixed(1)}" rx="2" fill="color-mix(in srgb,var(--green) 22%,transparent)"><title>${L(S)}: ${x(A.sleepHours)} h de sueño</title></rect>`)}}const F=v.map((m,S)=>`${S?"L":"M"}${m.x.toFixed(1)},${m.y.toFixed(1)}`).join(" "),R=v.length>1?`${F} L${v[v.length-1].x.toFixed(1)},${r-c} L${v[0].x.toFixed(1)},${r-c} Z`:"",H=s?.sleepGoal||7.5,ee=M(H);return`<div class="chart-wrap">
    <svg viewBox="0 0 ${n} ${r}" class="mood-chart" role="img" aria-label="Evolución del estado de ánimo y horas de sueño">
      <defs>
        <linearGradient id="moodAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--red)" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="var(--red)" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      ${[1,2,3,4,5].map(m=>`<line x1="${d}" x2="${n-d}" y1="${w(m)}" y2="${w(m)}" stroke="var(--rule)" stroke-dasharray="3 5"/>
      <text x="10" y="${w(m)+4}" fill="var(--ink-faint)" font-size="11" font-family="var(--font-mono)">${m}</text>`).join("")}
      <line x1="${d}" x2="${n-d}" y1="${ee.toFixed(1)}" y2="${ee.toFixed(1)}" stroke="var(--green)" stroke-width="1" stroke-dasharray="6 4" opacity="0.55"/>
      ${j.join("")}
      ${R?`<path class="chart-area-path" d="${R}" fill="url(#moodAreaGrad)"/>`:""}
      ${F?`<path class="chart-line-path" d="${F}" fill="none" stroke="var(--red)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`:""}
      ${v.map((m,S)=>`<g>
        <circle class="chart-dot" style="--dot-i:${S}" cx="${m.x}" cy="${m.y}" r="5.5" fill="${T[m.e.mood-1].color}" stroke="var(--paper-2)" stroke-width="2">
          <title>${L(m.d)} · ${T[m.e.mood-1].label} (${m.e.mood}/5) · ${x(m.e.sleepHours)} h sueño</title>
        </circle>
      </g>`).join("")}
    </svg>
    <div class="chart-legend-inline">
      <span><i class="legend-line"></i> Ánimo (1–5)</span>
      <span><i class="legend-bar"></i> Horas de sueño (meta: ${x(H)} h)</span>
    </div>
  </div>`}function Rs(e=[],a=b(),t=28){const s=new Map(e.map(r=>[r.date,r])),o=E(a,1-t),n=[];for(let r=0;r<t;r++){const d=E(o,r),c=s.get(d),u=c?T[c.mood-1]:null;n.push(`<button type="button" class="heatmap-cell ${c?"filled":""}" data-action="open-day" data-date="${d}" style="${u?`--mood:${u.color}`:""}" title="${L(d)}${u?`: ${u.label} (${c.mood}/5) · ${x(c.sleepHours)} h sueño`:": sin registro"}">
      <span>${d.slice(8)}</span>
      ${u?`<small>${u.emoji}</small>`:""}
    </button>`)}return`<div class="heatmap-strip">${n.join("")}</div>`}function kt(e=[],a={}){const t=Hs(e,a),s=B(a);return t.total?`<section class="card personal-goals-card">
    <div class="section-heading">
      <div>
        <h2>Cumplimiento de tus metas</h2>
      </div>
      <button type="button" class="text-button" data-action="open-setup-wizard">${i("sliders")} Ajustar metas</button>
    </div>
    <div class="goals-meter-grid">
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${i("moon")} Sueño (≥ ${x(t.sleepGoal)} h)</span>
          <strong>${t.sleepPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${t.sleepPct}%;background:var(--green)"></i></div>
        <small>${t.sleepMet} de ${t.total} días cumplidos</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${i("study")} ${l(s.focusLabel)} (≥ ${x(t.studyGoal)} h)</span>
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
        <p>Cuando alcanzas tu meta de <b>${x(t.sleepGoal)} h</b> de sueño, tu estado medio es <b>${t.moodWhenSleepMet}/5</b> (frente a <b>${t.moodWhenSleepMissed}/5</b> los días que duermes menos).</p>
      </div>
    `:""}
  </section>`:`<section class="card personal-goals-card">
      <div class="section-heading">
        <h2>Tus metas personales</h2>
        <button type="button" class="text-button" data-action="open-setup-wizard">${i("sliders")} Ajustar</button>
      </div>
      <p class="habit-empty">Guarda tu primer día para ver cómo evolucionan tus metas de sueño (${x(t.sleepGoal)} h), ${l(s.focusLabel.toLowerCase())} (${x(t.studyGoal)} h) y agua (${t.waterGoal} vasos).</p>
    </section>`}function qt(e,a=0,t={}){const s=Ds(e,a,t),o=(t?.savedQuotes||[]).includes(s.text);return`<section class="card quote-card">
    <div class="quote-top">
      <span class="eyebrow">${i("quote")} ${s.isCustom?"Tu colección":"Frase del día"}</span>
      <div class="quote-actions">
        <button type="button" class="icon-button ghost ${o?"is-saved":""}" data-action="save-quote" data-quote="${l(s.text)}" title="${o?"Guardada en tus frases":"Guardar en mis frases"}" aria-label="Guardar frase">${i("heart")}</button>
        <button type="button" class="icon-button ghost" data-action="next-quote" title="Otra frase" aria-label="Otra frase">${i("refresh")}</button>
      </div>
    </div>
    <p class="quote-text">«${l(s.text)}»</p>
    <small class="quote-author">— ${l(s.author)}</small>
  </section>`}function P(e,a,t="",s=""){return`<div class="ledger-cell">
    <span class="ledger-label">${e}</span>
    <div class="ledger-value">${a}${t?`<small>${t}</small>`:""}</div>
    ${s?`<span class="ledger-hint">${s}</span>`:""}
  </div>`}function Re(e,a,t="mood"){if(!a)return`<div class="rank-row"><span class="rank-label">${e}</span><strong>—</strong><small>Sin datos aún</small></div>`;const s=t==="mood"?`${T[a.mood-1].emoji} ${T[a.mood-1].label} (${a.mood}/5)`:`${x(a[t])} h`;return`<div class="rank-row">
    <span class="rank-label">${e}</span>
    <strong>${L(a.date,{weekday:"short",day:"numeric",month:"short"})}</strong>
    <small>${s}</small>
  </div>`}function na(e,a,t=""){return`<div class="empty-state">
    ${i("leaf")}
    <h3>${e}</h3>
    <p>${a}</p>
    ${t}
  </div>`}function Ba(e){return`<div class="meter-list">${e.map(a=>{const t=a.total?Math.round(a.count/a.total*100):0;return`<div class="meter-row">
      <span>${a.label}</span>
      <div class="meter-track"><i style="width:${t}%;background:${a.color||"var(--ink)"}"></i></div>
      <strong>${a.count}</strong>
    </div>`}).join("")}</div>`}function Mt(e,a={}){if(!e?.triggered||e.level!=="high")return"";const t=a?.trustedContactName?.trim(),s=a?.trustedContactPhone?.trim();return`<section class="crisis-banner high" role="region" aria-label="Apoyo emocional disponible">
    <div class="crisis-banner-head">
      <span class="crisis-badge">${i("heart")} No estás a solas</span>
      <button type="button" class="icon-button ghost crisis-dismiss" data-action="dismiss-crisis-banner" aria-label="Ocultar este aviso">${i("close")}</button>
    </div>
    <p class="crisis-reason">${l(e.reason)}</p>
    <div class="crisis-quick-actions">
      <a href="tel:024" class="button solid crisis-call-btn">${i("phone")} Llamar al 024 (24h, gratuito y confidencial)</a>
      ${t&&s?`<a href="tel:${l(s.replace(/\s+/g,""))}" class="button outline">${i("user")} Llamar a ${l(t)}</a>`:""}
      <button type="button" class="button outline" data-action="open-crisis-modal" data-tab="breathe">${i("wind")} Respiración guiada</button>
    </div>
  </section>`}function Is(e={},a="help"){const t=B(e),s=e?.trustedContactName?.trim(),o=e?.trustedContactPhone?.trim();return`<div class="modal-card crisis-modal">
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
            <h3>${l(s)}</h3>
            <p>${l(o)}</p>
          </div>
          <a href="tel:${l(o.replace(/\s+/g,""))}" class="button solid">${i("phone")} Llamar</a>
        </div>
      `:""}
      <div class="helpline-grid">
        ${_t.map(n=>{const r=t.isMinor&&n.youth;return`
          <div class="helpline-card ${n.primary||r?"primary":""}">
            <div class="helpline-info">
              <h3>${l(n.name)}</h3>
              <p>${l(n.detail)}</p>
            </div>
            <a href="${l(n.tel)}" class="helpline-phone">${i("phone")} <span>${l(n.number)}</span></a>
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
              <strong>${l(n.sense)}</strong>
              <p>${l(n.prompt)}</p>
            </div>
          </label>
        `).join("")}
      </div>
    </div>

    <div class="modal-actions">
      <button type="button" class="button outline" data-modal="close">Cerrar</button>
    </div>
  </div>`}function Et(e,a,t,s={},o={},n=""){const r=s?.showDailyWord!==!1,d=s?.showDailyTip!==!1;if(!r&&!d)return"";const c=Ls(e,a),u=js(e,t,s),p=Ts(o,s),g=n&&n.toLowerCase()===c.word.toLowerCase();return`<div class="daily-inspiration-grid">
    ${r?`
      <article class="card inspiration-card word-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${i("book")} Palabra del día</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-word" title="Ver otra palabra" aria-label="Ver otra palabra">${i("refresh")}</button>
        </div>
        <div class="daily-word-main">
          <div>
            <h2 class="daily-word-title">${l(c.word)}</h2>
            <span class="daily-word-origin">${l(c.type)} · ${l(c.origin)}</span>
          </div>
          <button type="button" class="button ${g?"solid":"outline"} small-btn" data-action="use-daily-word" data-word="${l(c.word)}">
            ${i(g?"check":"pen")} ${g?"Elegida hoy":"Usar hoy"}
          </button>
        </div>
        <p class="daily-word-meaning">${l(c.meaning)}</p>
      </article>
    `:""}

    ${d?`
      <article class="card inspiration-card tip-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${i("spark")} Consejo · ${l(u.category)}</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-tip" title="Ver otro consejo" aria-label="Ver otro consejo">${i("refresh")}</button>
        </div>
        <h2 class="daily-tip-title">${l(u.title)}</h2>
        <p class="daily-tip-body">${l(u.tip)}</p>
        ${p.length?`
          <div class="contextual-advice-list">
            ${p.map(w=>`
              <div class="contextual-advice-item">
                ${i(w.icon)}
                <div><strong>${l(w.title)}:</strong> ${l(w.text)}</div>
              </div>
            `).join("")}
          </div>
        `:""}
      </article>
    `:""}
  </div>`}function Us(e={},a=[],t=1){const s=B(e),o=new Set(a.map(r=>r.name.toLowerCase())),n=new Set(e.interests||[]);return`<div class="modal-card setup-wizard-modal" data-current-step="${t}">
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
            <input id="setup-name" name="name" maxlength="50" placeholder="Tu nombre o apodo..." value="${l(e.name||"")}">
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
            ${Le.map(r=>`
              <label class="age-group-card ${s.group.id===r.id?"is-selected":""}" data-age-group-card="${r.id}">
                <input type="radio" name="ageGroup" value="${r.id}" ${s.group.id===r.id?"checked":""}>
                <span class="age-range-badge">${l(r.label)}</span>
                <strong>${l(r.title)}</strong>
                <small>${l(r.desc)}</small>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="setup-field">
          <label>¿Qué cosas te gustan o te importan más?</label>
          <p class="setup-caption">El diario mostrará solo los bloques, etiquetas y frases que encajen contigo:</p>
          <div class="interests-grid">
            ${ia.map(r=>`
              <label class="interest-chip">
                <input type="checkbox" name="interests" value="${r.id}" ${n.has(r.id)?"checked":""}>
                <span>${i(r.icon)} ${l(r.label)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${t===2?"active":""}" data-step="2" ${t===2?"":"hidden"}>
        <div class="age-adaptation-callout" id="wiz-adaptation-callout">
          ${i("compass")}
          <div>
            <strong>Adaptado a: ${l(s.group.title)} (${l(s.group.label)})</strong>
            <p>Hemos ajustado tus metas recomendadas de sueño (${x(s.sleepRecommended)} h) y dedicación (${x(s.studyRecommended)} h).</p>
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
              ${je.map(r=>`
                <label class="purpose-card compact">
                  <input type="radio" name="ritual" value="${r.id}" ${(e.ritual||"night")===r.id?"checked":""}>
                  <span class="purpose-icon">${i(r.icon)}</span>
                  <div><strong>${l(r.label)}</strong></div>
                </label>
              `).join("")}
            </div>
          </div>
          <div class="setup-field" style="margin-top:0">
            <label>Tono de las frases</label>
            <div class="ritual-stack">
              ${De.map(r=>`
                <label class="purpose-card compact">
                  <input type="radio" name="tone" value="${r.id}" ${(e.tone||"warm")===r.id?"checked":""}>
                  <div><strong>${l(r.label)}</strong><small>${l(r.desc)}</small></div>
                </label>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="setup-field">
          <label>Hábitos sugeridos para ti</label>
          <div class="tag-picker" id="wiz-suggested-habits">
            ${s.suggestedHabits.map(r=>{const d=o.has(r.toLowerCase());return`<label class="tag-chip">
                <input type="checkbox" name="suggestedHabits" value="${l(r)}" ${d?"checked":""}>
                <span>${l(r)}</span>
              </label>`}).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${t===3?"active":""}" data-step="3" ${t===3?"":"hidden"}>
        <div class="setup-field">
          <label>${i("palette")} Elige el papel y el icono de tu pestaña</label>
          <div class="theme-picker-grid">
            ${W.map(r=>`
              <label class="theme-card">
                <input type="radio" name="theme" value="${r.id}" ${(e.theme||"paper")===r.id?"checked":""}>
                <div class="theme-card-top">
                  <span class="theme-favicon-preview">${re(r.id,e)}</span>
                  <div class="theme-swatches">
                    ${r.colors.map(d=>`<i style="background:${d}"></i>`).join("")}
                  </div>
                </div>
                <strong>${l(r.name)}</strong>
                <small>${l(r.desc)}</small>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="setup-field">
          <label for="setup-motto">Frase de portada (opcional)</label>
          <input id="setup-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${l(e.motto||"Un día a la vez.")}">
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
  </div>`}const Ge=e=>sa.find(a=>a.id===e?.glass)||sa[0];function $e(e={},a={}){const t=Ge(e),s=a.class?` ${a.class}`:"",o=a.paper===!1?"":`<path class="bottle-paper" d="M10.6 13.4h6.2M10.6 15.6h4.4" stroke="${t.hex}" stroke-width="1.1" stroke-linecap="round" opacity=".85"/>`;return`<svg class="bottle-glyph${s}" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <g transform="rotate(-24 14 14)">
      <path d="M11 4.2h6v3.1c0 1 .3 1.6 1 2.3l1.5 1.6c.9 1 1.4 2 1.4 3.3v7.2c0 1.4-1.1 2.5-2.5 2.5h-8.8c-1.4 0-2.5-1.1-2.5-2.5v-7.2c0-1.3.5-2.3 1.4-3.3l1.5-1.6c.7-.7 1-1.3 1-2.3Z" fill="color-mix(in srgb,${t.hex} 26%,transparent)" stroke="${t.hex}" stroke-width="1.3"/>
      <path d="M11.6 6.6h4.8" stroke="${t.hex}" stroke-width="1.1" opacity=".7"/>
      <rect x="12.2" y="2.4" width="3.6" height="2.4" rx="1" fill="${t.hex}" opacity=".9"/>
      ${o}
      <path class="bottle-shine" d="M9.6 15.4v6.4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".55"/>
    </g>
  </svg>`}function Qs(e=2400,a=8,t=110,s=240){let o=`M0 ${t}`;for(let n=0;n<e;n+=s)o+=` q ${s/4} ${-a} ${s/2} 0 q ${s/4} ${a} ${s/2} 0`;return`${o} L${e} 240 L0 240 Z`}function qa(e=0){const a=(t,s,o,n,r)=>{const d=e%7*9;return`<path class="${n}" style="--wave-dur:${r}s;--wave-shift:${d}px" d="${Qs(2400,t,s,o)}"/>`};return`<svg class="sea-wave-svg" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden="true">
    ${a(7,126,300,"wave wave-4",26)}
    ${a(9,142,240,"wave wave-3",19)}
    ${a(11,160,190,"wave wave-2",14)}
    ${a(13,182,150,"wave wave-1",10)}
  </svg>`}function At(){let e="M0 15";for(let a=0;a<2400;a+=120)e+=" q30 -9 60 0 q30 9 60 0";return`<svg class="tide-rule" viewBox="0 0 1200 30" preserveAspectRatio="none" aria-hidden="true">
    <path class="tide-rule-path" d="${e}"/>
  </svg>`}function Ws(e=[],a=b(),t={}){const s=ce(e,a),o=Oe(a),n=s.drifting.map(c=>{const u=we(c,a),p=Ge(c),g=z("2020-01-01",c.castAt)%4*3;return`<li class="sea-float" style="--x:${(6+u.pct*84).toFixed(1)}%;--tint:${p.hex};--lift:${52+g}%;--delay:${(z("2020-01-01",c.castAt)%9*.4).toFixed(2)}s">
      <button type="button" class="sea-float-btn" data-action="open-bottle" data-id="${c.id}" title="${l((c.text||"").slice(0,70))}">
        ${$e(c)}
        <span class="sea-float-tag">${u.atSea} d en el mar</span>
      </button>
    </li>`}).join(""),r=s.returned.slice(0,4).map(c=>`
    <button type="button" class="shore-bottle ${c.seen?"":"is-new"}" data-action="open-bottle" data-id="${c.id}">
      <span class="shore-bottle-glow">${$e(c,{class:"is-landed"})}</span>
      <span class="shore-bottle-meta">
        <strong>${z(c.castAt,c.returnedAt||a)} días después</strong>
        <small>${l((c.text||"").slice(0,54))}${(c.text||"").length>54?"…":""}</small>
      </span>
      ${c.seen?"":'<span class="shore-new-dot" aria-label="Sin abrir"></span>'}
    </button>`).join(""),d=s.lost.length?`<span class="sea-lost-note">${i("anchor")} ${s.lost.length} ${s.lost.length===1?"botella perdida":"botellas perdidas"} en el mar</span>`:"";return`<section class="sea-panel ${s.returned.length?"has-shore":""}" data-tide="${o.key}">
    <header class="sea-sky">
      <span class="sea-tide-pill">${i("tide")} ${l(o.name)} · luna al ${Math.round(o.moon*100)}%</span>
      <h2 class="sea-headline">${_s(s)}</h2>
      <p class="sea-sub">${l(Aa(a))}</p>
    </header>
    <div class="sea-water">
      ${qa(z("2020-01-01",a))}
      <span class="sea-lighthouse" aria-hidden="true">${Vs()}</span>
      <ul class="sea-fleet">${n}</ul>
      <span class="sea-horizon-line"></span>
    </div>
    ${r?`<div class="sea-shore"><span class="sea-shore-label">${i("anchor")} La orilla</span><div class="shore-list">${r}</div></div>`:""}
    ${d?`<footer class="sea-foot">${d}<button type="button" class="text-button" data-view="thoughts" data-action="thoughts-tab" data-tab="lost">Ver el archivo ${i("arrow")}</button></footer>`:""}
  </section>`}function _s(e,a){const t=e.drifting.length,s=e.returned.length;return s>0?`El mar te ha devuelto ${s} ${s===1?"pensamiento":"pensamientos"}`:t>0?`${t} ${t===1?"pensamiento navega":"pensamientos navegan"} ${Pe(e.drifting[0].sea).reach}`:"El mar está en calma"}function Vs(){return`<svg viewBox="0 0 60 96" fill="none" aria-hidden="true">
    <path d="M22 88 26 30h8l4 58Z" fill="color-mix(in srgb,var(--ink) 62%,transparent)" stroke="var(--ink)" stroke-width="1.4"/>
    <path d="M26.4 44h7.2M27.6 60h4.8" stroke="var(--paper-2)" stroke-width="3" opacity=".55"/>
    <rect x="24" y="20" width="12" height="10" rx="1.5" fill="color-mix(in srgb,var(--ochre) 70%,var(--paper-2))" stroke="var(--ink)" stroke-width="1.4"/>
    <path d="M23 20h14l-7-8Z" fill="var(--ink)"/>
    <circle class="sea-beacon" cx="30" cy="25" r="2.6" fill="var(--ochre)"/>
    <path class="sea-beam" d="M36 25h22l-6 5h-16Z" fill="var(--ochre)" opacity=".35"/>
    <path d="M14 88h32" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>
  </svg>`}function Zs(e={},a=b(),t={}){const s=String(t.text||""),o=s.trim()?s.trim().split(/\s+/).length:0;return`<form id="bottle-form" class="card bottle-composer">
    <div class="section-heading">
      <p class="section-index">${i("pen")} Escribe tu pensamiento</p>
      <span class="field-caption">máx. 1200 caracteres</span>
    </div>
    <label class="sr-only" for="bottle-text">Pensamiento para la botella</label>
    <textarea id="bottle-text" name="text" class="bottle-text" maxlength="1200" rows="4"
      placeholder="Lo que hoy no quieres guardar en el cuaderno... escríbelo y déjalo ir.">${l(s)}</textarea>
    <p class="composer-foot-note">${i("wave")} Una vez en el agua, el viaje ya está escrito: ni tú ni nadie podrá cambiarlo.</p>
    <div class="composer-bar">
      <div class="composer-moods" role="radiogroup" aria-label="¿Con qué ánimo lo escribes?">
        <span class="composer-bar-label">Ánimo</span>
        ${T.map(n=>`<label class="mini-mood" style="--mood-color:${n.color}" title="${n.label}">
          <input type="radio" name="mood" value="${n.value}" ${t.mood===n.value?"checked":""}>
          <span>${n.emoji}</span>
        </label>`).join("")}
      </div>
      <span class="word-count" id="bottle-words">${o} palabras</span>
    </div>

    <p class="section-index" style="margin-top:22px">${i("wave")} ¿Hasta dónde lo lanzas?</p>
    <div class="sea-picker">
      ${ta.map(n=>`<label class="sea-option" style="--sea-min:${n.min};--sea-max:${n.max}">
        <input type="radio" name="sea" value="${n.id}" ${(t.sea||"breeze")===n.id?"checked":""}>
        <span class="sea-option-top">
          <strong>${l(n.label)}</strong>
          <small>${n.min}–${n.max} días</small>
        </span>
        <span class="sea-option-desc">${l(n.desc)}</span>
        <span class="sea-option-odds"><i style="width:${Math.round(n.chance*100)}%"></i></span>
        <span class="sea-option-note">vuelve ${Math.round(n.chance*100)} de cada 100 veces</span>
      </label>`).join("")}
    </div>

    <div class="save-area">
      <span>${i("lock")} Nada sale de este navegador: el azar lo calcula tu propio cuaderno.</span>
      <button type="submit" class="button solid save-button">${i("send")} Echar al mar</button>
    </div>
  </form>`}function Js(e,a=b(),t=0){const s=we(e,a),o=Ge(e),n=Pe(e.sea),r=e.mood?T[e.mood-1]:null,d=s.fate==="drifting"?"en el mar":s.fate==="returned"?"en la orilla":"perdida";return`<article class="card bottle-card is-${s.fate}" style="--tint:${o.hex};--i:${Math.min(9,t)}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${$e(e)}</span>
      <div class="bottle-card-who">
        <p class="eyebrow">escrito el ${l(L(e.castAt,{day:"numeric",month:"long",year:"numeric"}))}</p>
        <h3>${l(n.label)} <span class="bottle-card-status s-${s.fate}">${d}</span></h3>
      </div>
      ${r?`<span class="mood-tag" style="--mood:${r.color}">${r.emoji} ${r.label}</span>`:""}
    </header>
    <p class="bottle-card-text ${wt(e.text)<=26?"is-short":""}">${l(e.text)}</p>
    ${e.reply?`<p class="bottle-card-reply"><span>${i("reply")} Tu respuesta de entonces:</span> ${l(e.reply)}</p>`:""}

    <div class="drift-track" style="--pct:${Math.round(s.pct*100)}%">
      <span class="drift-line"></span>
      <span class="drift-marker">${s.fate==="lost"?i("anchor"):i("wave")}</span>
      <span class="drift-caption">${l(yt(e,a))}</span>
    </div>

    <footer class="bottle-card-foot">
      <span class="chiplet">${i("compass")} ${l(e.current||"a la deriva")}</span>
      <span class="chiplet">${i("wind")} ${s.miles} millas</span>
      ${s.milesHome!==null&&s.fate==="drifting"?`<span class="chiplet">${i("anchor")} a ${s.milesHome} millas de casa</span>`:""}
      <span class="chiplet">${i("week")} ${$t(e,a)}</span>
      <div class="bottle-card-actions">
        ${s.fate==="drifting"?`<button type="button" class="text-button" data-action="recall-bottle" data-id="${e.id}">${i("wind")} Traer a la orilla</button>`:""}
        ${s.fate==="returned"?`<button type="button" class="text-button" data-action="open-bottle" data-id="${e.id}">${i("stamp")} Abrir</button>`:""}
        ${s.fate==="lost"?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${e.id}">${i("refresh")} Volver a lanzar</button>`:""}
        <button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${e.id}" aria-label="Romper la botella">${i("trash")}</button>
      </div>
    </footer>
  </article>`}function Ys(e,a=b(),t={}){const s=we(e,a),o=Ge(e),n=Pe(e.sea),r=e.mood?T[e.mood-1]:null,d=e.returnedAt?Oe(e.returnedAt):null,c=Math.max(1,z(e.castAt,e.returnedAt||e.lostAt||a)),u=t.name?`Cuaderno de ${l(t.name)}`:"Tu cuaderno";return`<div class="modal-card bottle-modal" style="--tint:${o.hex}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${i("close")}</button>
    <span class="bottle-wax" aria-hidden="true">${$e(e,{paper:!1})}</span>
    <p class="eyebrow">${u} · botella del ${l(L(e.castAt,{day:"numeric",month:"long",year:"numeric"}))}</p>
    <h2 class="bottle-modal-title">${s.fate==="returned"?"El mar te la devolvió":s.fate==="lost"?"Se perdió en el mar":"Sigue en el mar"}</h2>
    ${r?`<p class="bottle-modal-mood">${r.emoji} Lo escribiste sintiendo: <b>${r.label.toLowerCase()}</b></p>`:""}
    <blockquote class="bottle-modal-text">${l(e.text)}</blockquote>
    <div class="bottle-modal-voyage">
      ${P("Días a la deriva",c,"días")}
      ${P("Millas navegadas",s.miles,"millas")}
      ${P("Mar elegido",l(n.label.split(" ")[0]),"",n.desc)}
      ${P("Marea",d?l(d.name.replace("Marea ","")):"—","","las botellas vuelven en marea viva")}
    </div>
    ${s.fate==="returned"?`<p class="bottle-modal-foot-note">${i("check")} Volvió el ${l(L(e.returnedAt||a,{day:"numeric",month:"long"}))}, ${c} días después de soltarla.</p>`:""}
    ${s.fate==="lost"?`<p class="bottle-modal-foot-note is-lost">${i("anchor")} Nunca llegó a ninguna orilla. Lo que escribiste sigue aquí, si lo quieres leer.</p>`:""}
    ${e.reply?`<div class="bottle-reply-box"><span>${i("reply")} Respondiste a tu yo de entonces</span><p>${l(e.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">¿Qué le dirías hoy a quien escribió esto?</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" placeholder="Respóndele con la calma que te da el tiempo..."></textarea>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${e.reply?"":`<button class="button outline" data-modal="reply">${i("reply")} Responder</button>`}
      ${e.reply?`<button class="button outline" data-modal="reply-clear">${i("close")} Quitar respuesta</button>`:""}
      ${s.fate==="lost"?`<button class="button outline" data-modal="recast">${i("refresh")} Volver a lanzar</button>`:""}
      <button class="button outline" data-modal="keep">${i("bookmark")} ${e.kept?"Desanclar":"Anclar a la colección"}</button>
      <button class="button solid" data-modal="to-entry">${i("pen")} Copiar en la entrada de hoy</button>
      ${s.fate==="drifting"?`<button class="button solid" data-modal="recall">${i("wind")} Traer a la orilla</button>`:""}
    </div>
  </div>`}function Ks(e=[],a=b()){const t=ps(e,a);return`<div class="ledger-grid">
    ${P("Botellas en el mar",t.drifting,"activas",t.returned?`${t.returned} esperando en la orilla`:"el agua está tranquila")}
    ${P("De vueltas a casa",t.returned,"recibidas",`media de ${t.avgDays} días de viaje`)}
    ${P("Perdidas",t.lost,"a pique","también forman parte del mar")}
    ${P("Palabras soltadas",t.words,"palabras",t.farthest.miles?`el viaje más largo: ${t.farthest.miles} millas`:"aún no hay travesías")}
  </div>`}function Xs(e=[]){const a=b(),t=ce(e,a),s=t.returned[0],o=t.drifting.length;return s?`<section class="card sea-teaser is-arrival" style="--tint:${Ge(s).hex}">
      <div class="sea-teaser-waves">${qa(2)}</div>
      <p class="eyebrow">${i("wave")} El mar</p>
      <h2>Te ha vuelto una botella</h2>
      <p class="sea-teaser-quote">«${l(s.text.slice(0,120))}${s.text.length>120?"…":""}»</p>
      <div class="sea-teaser-actions">
        <button type="button" class="button solid small-btn" data-action="open-bottle" data-id="${s.id}">${i("stamp")} Abrir la botella</button>
        ${o?`<span class="sea-teaser-count">${o} ${o===1?"botella sigue":"botellas siguen"} en el agua</span>`:""}
      </div>
    </section>`:`<section class="card sea-teaser">
    <div class="sea-teaser-waves">${qa(5)}</div>
    <p class="eyebrow">${i("wave")} El mar</p>
    <h2>${o?`${o} ${o===1?"pensamiento navega":"pensamientos navegan"}`:"Nada escrito en el agua"}</h2>
    <p class="sea-teaser-quote">${o?`${l(yt(t.drifting[0],a))} · ${l($t(t.drifting[0],a))}`:"Escribe un pensamiento, séllalo y echa la botella al mar. Puede que vuelva a ti."}</p>
    <div class="sea-teaser-actions">
      <button type="button" class="button outline small-btn" data-view="thoughts">${i("pen")} ${o?"Ver la travesía":"Escribir un pensamiento"}</button>
    </div>
  </section>`}function eo(){return`<div class="empty-state sea-empty">
    <span class="sea-empty-art">${$e({})}<i class="sea-empty-ripple"></i></span>
    <h3>El mar está vacío</h3>
    <p>Escribe lo que no quieres guardar, échalo a la deriva y deja que la marea decida si devolvértelo.</p>
  </div>`}const Ct=["L","M","X","J","V","S","D"],at=e=>Ct[(de(e).getDay()+6)%7];function Lt(e,a,t=""){const o=2*Math.PI*26,n=(Math.min(100,Math.max(0,e))/100*o).toFixed(2);return`<div class="ring-widget ${e>=100?"is-full":""}">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle class="ring-track" cx="32" cy="32" r="26"/>
      <circle class="ring-fill" cx="32" cy="32" r="26" stroke-dasharray="${n} ${o.toFixed(2)}"/>
    </svg>
    <span class="ring-value">${a}</span>
    ${t?`<span class="ring-sub">${l(t)}</span>`:""}
  </div>`}function ao(e=[],a=null,t=[],s=b(),o=b()){return e.length?`<div class="habit-board">${e.map((n,r)=>{const d=!!a?.habits?.[n.id],c=la(t,n.id,s>o?s:o),u=ht(t,n.id,7,s);return`<button type="button" class="habit-toggle ${d?"is-done":""}" style="--habit-i:${r}"
      data-action="toggle-habit" data-habit="${n.id}" data-date="${s}" aria-pressed="${d}">
      <span class="habit-tick" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.8 11.8 12.8 4.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span class="habit-copy">
        <strong>${l(n.name)}</strong>
        <small>${d?"hecho hoy":s===o?"toca para marcarlo":"aún por hacer"}</small>
      </span>
      <span class="habit-dots" aria-hidden="true">
        ${Array.from({length:7},(p,g)=>{const w=E(s,g-6);return`<i class="${!!t.find(v=>v.date===w)?.habits?.[n.id]?"on":""} ${w>o?"future":""}"></i>`}).join("")}
      </span>
      <span class="habit-streak ${c?"is-hot":""}" title="Racha actual">${c?`${i("flame")} ${c}`:`${u.done}/7`}</span>
    </button>`}).join("")}</div>`:""}function to(e=[],a=[],{days:t=28,end:s=b(),today:o=b(),title:n="Tus últimas 4 semanas"}={}){if(!a.length)return"";const{dates:r,rows:d}=Jt(e,a,t,s,o),c=L(r[0],{day:"numeric",month:"short"}).replace(/\./g,"");return`<section class="card momentum-card">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${i("grid")} Constancia</p>
        <h2>${l(n)}</h2>
      </div>
      <span class="field-caption">${l(c)} → ${l(L(r[r.length-1],{day:"numeric",month:"short"}))}</span>
    </div>
    <p class="momentum-hint">Toca cualquier casilla para anotar o quitar un hábito de ese día. Solo días pasados o el de hoy.</p>
    <div class="momentum-scroll">
      <div class="momentum-grid" style="--cols:${t}">
        <span class="momentum-corner"></span>
        ${r.map(u=>`<span class="momentum-day ${u===o?"is-today":""}">${u.slice(8,10)}</span>`).join("")}
        ${d.map(u=>`
          <span class="momentum-name" title="${l(u.habit.name)}">${l(u.habit.name)}</span>
          ${u.cells.map(p=>`<button type="button" class="momentum-cell ${p.done?"is-done":""} ${p.future?"is-future":""} ${p.recorded?"":"is-blank"}"
            ${p.future?"disabled":""} data-action="toggle-habit" data-habit="${u.habit.id}" data-date="${p.date}" aria-pressed="${p.done}"
            aria-label="${l(u.habit.name)} · ${L(p.date)} · ${p.done?"cumplido":"sin cumplir"}">
            <i></i>
          </button>`).join("")}
        `).join("")}
      </div>
      <div class="momentum-weekdays" style="--cols:${t}">
        <span class="momentum-corner"></span>
        ${r.map(u=>`<span class="${at(u)==="L"?"is-mon":""}">${at(u)}</span>`).join("")}
      </div>
    </div>
    <div class="momentum-legend">
      <span><i class="lg done"></i> cumplido</span>
      <span><i class="lg"></i> sin registrar</span>
      <span><i class="lg blank"></i> día sin entrada</span>
      <span class="momentum-weekday-note">${Ct.join(" ")} · cada lunes resaltado</span>
    </div>
  </section>`}function so(e=[],a=[],t=b()){return e.length?`<section class="card habit-stats-card">
    <div class="section-heading"><div><p class="eyebrow">${i("chart")}constancia por hábito</p><h2>Cada uno a su ritmo</h2></div><span class="field-caption">últimos 28 días</span></div>
    <ul class="habit-stats-list">
      ${e.map(s=>{const o=ht(a,s.id,28,t),n=la(a,s.id,t),r=mt(a,s.id);return`<li class="habit-stat-row">
          <div class="habit-stat-name">
            <strong>${l(s.name)}</strong>
            <small>${Va(a,s.id)} ${Va(a,s.id)===1?"día marcado":"días marcados"} en total</small>
          </div>
          <div class="habit-stat-meter"><i style="width:${o.pct}%"></i><span>${o.pct}%</span></div>
          <div class="habit-stat-figures">
            <span title="Racha actual">${i("flame")} <b>${n}</b> d</span>
            <span title="Mejor racha">${i("seal")} <b>${r}</b> d</span>
          </div>
          <div class="habit-stat-actions">
            <button type="button" class="icon-button ghost" data-action="edit-habit" data-habit="${s.id}" aria-label="Renombrar ${l(s.name)}">${i("pen")}</button>
            <button type="button" class="icon-button ghost delete-button" data-action="delete-habit" data-habit="${s.id}" data-name="${l(s.name)}" aria-label="Eliminar ${l(s.name)}">${i("trash")}</button>
          </div>
        </li>`}).join("")}
    </ul>
  </section>`:""}function oo(e={},a=[]){const t=new Set(a.map(o=>o.name.toLowerCase())),s=(e.suggestedHabits||[]).filter(o=>!t.has(o.toLowerCase())).slice(0,6);return`<section class="card habit-composer">
    <div class="section-heading"><div><p class="eyebrow">${i("plus")}Nueva rutina</p><h2>Añade un hábito</h2></div><span class="field-caption">${a.length}/30</span></div>
    <div class="habit-add">
      <input id="new-habit" maxlength="40" placeholder="Nombre del hábito (ej. Leer 20 minutos)" aria-label="Nuevo hábito">
      <button type="button" class="button solid small-btn" data-action="add-habit">${i("plus")} Añadir</button>
    </div>
    ${s.length?`
      <p class="field-caption" style="margin-top:16px">Sugerencias para tu etapa · toca para añadir</p>
      <div class="tag-picker">
        ${s.map(o=>`<button type="button" class="tag-chip" data-action="add-suggested-habit" data-name="${l(o)}"><span>+ ${l(o)}</span></button>`).join("")}
      </div>`:""}
    ${a.length?"":'<p class="habit-empty">Aún no tienes hábitos. Añade uno, o marca algunos en tu perfil y aparecerán aquí.</p>'}
  </section>`}function no(e={},a={},t=[]){return`<section class="card counters-board">
    <div class="section-heading">
      <div><p class="eyebrow">${i("drop")} Contadores</p><h2>Lo de hoy, en cifras</h2></div>
      <span class="field-caption">se guarda al instante</span>
    </div>
    ${zs(e?.counters||{},le,a,{action:"routine"})}
    ${t.length?`<p class="sleep-mood-insight">${i("spark")} ${l(t[0])}</p>`:""}
  </section>`}function ro(e={},a=b()){const t=e?.goals||[];return`<section class="card tomorrow-board">
    <div class="section-heading">
      <div><p class="eyebrow">${i("sail")} Para mañana</p><h2>La lista de la próxima marea</h2></div>
      <button type="button" class="text-button" data-action="add-goal-routine">${i("plus")} Añadir tarea</button>
    </div>
    <label class="sr-only" for="routine-tomorrow">Intención para mañana</label>
    <textarea id="routine-tomorrow" class="tomorrow-intent" name="tomorrow" maxlength="600" rows="2"
      placeholder="Mañana quiero... (una frase basta)">${l(e?.tomorrow||"")}</textarea>
    <div class="task-list" id="routine-goals">
      ${t.length?t.map((s,o)=>`<div class="task-row">
        <span class="task-index">${String(o+1).padStart(2,"0")}</span>
        <input class="task-input" data-index="${o}" value="${l(s)}" maxlength="200" aria-label="Tarea ${o+1}">
        <button type="button" class="icon-button ghost delete-button" data-action="remove-goal-routine" data-index="${o}" aria-label="Quitar tarea">${i("close")}</button>
      </div>`).join(""):'<p class="habit-empty">Nada apuntado para mañana. Tres tareas concretas suelen funcionar mejor que diez genéricas.</p>'}
    </div>
  </section>`}function io(e=[],a=null,t=[],s=b()){const o=e.filter(c=>a?.habits?.[c.id]).length,n=e.length?Math.round(o/e.length*100):0,r=e.length?Math.max(0,...e.map(c=>la(t,c.id,s))):0,d=L(te(s),{day:"numeric",month:"short"});return`<section class="card routine-teaser">
    <div class="section-heading">
      <div><p class="eyebrow">${i("listChecks")} Rutina de hoy</p><h2>${o}/${e.length||0} ${e.length===1?"hábito":"hábitos"}</h2></div>
      ${Lt(n,`${n}%`)}
    </div>
    <p class="routine-teaser-note">${e.length?`La lista completa, los contadores y tus rachas viven ahora en su propia pestaña. Semana del ${l(d)}.`:"Todavía no hay hábitos: crea tu lista en la pestaña Rutina."}</p>
    <button type="button" class="text-button full-link" data-view="routine">Ir a Rutina ${i("arrow")}</button>
    ${r?`<span class="routine-teaser-flame">${i("flame")} racha de ${r} días</span>`:""}
  </section>`}const fa=document.querySelector("#app");let k=[],$=[],C=[],h=va(),He="",Z="diary",f=b(),_=b(),Ie=b(),Ne="shore",Ae="hoy",Oa={text:"",mood:null,sea:"breeze"},ge=7,G=!1,Q=!1,N=!1,Ue="",Qe="",We="",_e="grid",Ve="list",be="pulse",Ze="personal",Ee=!1,me=null,Pa=0,za=0,Je=0,Ga=0,ve=!1,Ce=!1,ya=!1,Ye=null,Ke="";function ie(e,a=h){const t=W.find(s=>s.id===e)||W[0];document.documentElement.dataset.theme=t.id;try{const s=Es(t.id,a);let o=document.querySelector('link[rel="icon"]');o||(o=document.createElement("link"),o.rel="icon",document.head.appendChild(o)),o.type="image/svg+xml",o.href=s;const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",t.colors[0]),document.title=a?.name?`Cuaderno de ${a.name}`:"Diario"}catch{}}function Fa(){k=ha(),$=ze(),C=X(),h=va(),N=!!h.sidebarCollapsed,ie(h.theme,h)}try{Fa()}catch(e){He="No se han podido leer los datos guardados. Revisa el almacenamiento del navegador o recupera una copia. "+e.message}const jt=[{label:"El cuaderno",items:[["diary","pen","Hoy"],["thoughts","wave","Pensamientos"],["archive","book","Archivo"]]},{label:"Constancia",items:[["routine","listChecks","Rutina"],["stats","chart","Progreso"]]},{label:"Tuyo",items:[["setup","sliders","Perfil"]]}],lo=["diary","thoughts","routine","archive","stats"];function Dt(){return jt.flatMap(e=>e.items)}const co=e=>Dt().find(a=>a[0]===e)?.[2]||"Hoy";function Tt(e){if(e!=="thoughts")return"";const a=ye(C).length;return a?`<span class="nav-badge ${ye(C).filter(s=>s.seen!==!0).length?"is-new":""}">${a}</span>`:""}function uo([e,a,t],s){return`<button class="nav-item ${Z===e?"active":""}" style="--nav-i:${s}" data-view="${e}" title="${l(t)}" data-tooltip="${l(t)}" ${Z===e?'aria-current="page"':""}>
    ${i(a)}<span class="nav-label">${l(t)}</span>${Tt(e)}
  </button>`}function po(){let e=0;return jt.map(a=>`<div class="nav-group">
    <p class="nav-group-label">${l(a.label)}</p>
    ${a.items.map(t=>uo(t,e++)).join("")}
  </div>`).join("")}function mo(){return`<nav class="tabbar" aria-label="Navegación inferior">
    ${lo.map(e=>{const a=Dt().find(t=>t[0]===e);return a?`<button type="button" class="tabbar-item ${Z===e?"active":""}" data-view="${e}">
        <span class="tabbar-icon">${i(a[1])}${Tt(e)}</span>
        <span>${l(a[2])}</span>
      </button>`:""}).join("")}
  </nav>`}function q(){ie(h.theme,h);const e=W.find(t=>t.id===h.theme)||W[0],a=Ke?`page-turn-${Ke}`:"view-enter";Ke="",fa.innerHTML=`
  <div class="sidebar-backdrop ${Q?"is-visible":""}" data-action="close-menu" aria-hidden="true"></div>
  <aside class="sidebar ${Q?"is-open":""} ${N?"is-collapsed":""}" aria-label="Menú principal">
    <div class="sidebar-top-row">
      <a href="#" class="brand" data-action="today" title="Ir a hoy">
        <span class="brand-mark"><span class="brand-full">diario</span><span class="brand-short">d</span><span class="brand-period">.</span></span>
      </a>
      <button type="button" class="icon-button sidebar-collapse-btn" data-action="toggle-sidebar" title="${N?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)"}" aria-label="${N?"Desplegar menú":"Plegar menú"}" aria-expanded="${!N}">
        ${i(N?"right":"left")}
      </button>
    </div>
    <div class="brand-rule"></div>
    ${Os(h,k.length)}
    <nav class="sidebar-nav" aria-label="Navegación principal">${po()}</nav>
    <div class="sidebar-bottom">
      <div class="local-note">${i("lock")}<div><strong>Guardado en tu dispositivo</strong>${h.name?`Cuaderno de ${l(h.name)}.`:"Sin cuentas ni servidores externos."}</div></div>
    </div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <div class="topbar-left">
        <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="${Q}">${i("menu")}</button>
        <button class="icon-button ghost desktop-sidebar-toggle" data-action="toggle-sidebar" title="${N?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)"}" aria-label="Alternar barra lateral">${i("sidebar")}</button>
        <span class="breadcrumb">${h.name?`Cuaderno de ${l(h.name)}`:"Diario"} <span>/</span> ${l(co(Z))}</span>
      </div>
      <div class="topbar-right">
        <button type="button" class="sea-quick ${ye(C).some(t=>t.seen!==!0)?"has-new":""}" data-view="thoughts" title="Pensamientos en el mar">
          ${i("wave")}
          <span>${ye(C).length||ce(C).drifting.length||""}</span>
        </button>
        <button type="button" class="theme-pill" data-action="cycle-theme" title="Cambiar papel e icono (${l(e.name)})">
          <span class="topbar-favicon-mini">${re(h.theme,h)}</span>
          <span>${l(e.name)}</span>
        </button>
        <button type="button" class="avatar" data-action="open-setup-wizard" title="Personalizar mi perfil, edad y gustos" aria-label="Personalizar mi perfil">
          ${h.name?`<span class="avatar-initial">${l(h.name.slice(0,1).toUpperCase())}</span>`:i("user")}
        </button>
      </div>
    </header>
    <main id="main" class="${a}">
      ${He?`<div class="error-banner" role="alert">${l(He)}</div>`:""}
      ${ho()}
    </main>
    ${mo()}
    <footer class="page-footer">
      <span>${i("leaf")} ${l(h.motto||"Un día a la vez.")}</span>
      <span>${h.name?`Cuaderno de ${l(h.name)}`:"Guardado localmente en este navegador"}</span>
    </footer>
  </div>
  <div id="floating-save" class="floating-save-bar ${G?"is-visible":""}" aria-live="polite">
    <span>${i("pen")} Cambios sin guardar</span>
    <button type="button" class="button solid small-btn" data-action="quick-save">${i("stamp")} Guardar</button>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <dialog id="modal"></dialog>`,Yo(),Vo(),Fo()}function Fe(e,a,t,s=""){return`<div class="page-heading">
    <div>${e?`<p class="eyebrow">${e}</p>`:""}<h1>${a}</h1>${t?`<p class="page-subtitle">${t}</p>`:""}</div>
    ${s}
  </div>`}function ho(){switch(Z){case"diary":return tt();case"thoughts":return wo();case"routine":return Mo();case"archive":return Ho();case"stats":return No();case"setup":return Oo();default:return tt()}}function go(){return`<div class="day-navigation">
    <button type="button" data-action="previous" aria-label="Día anterior">${i("left")}<span>Anterior</span></button>
    <button type="button" data-action="today" class="today-button">Hoy</button>
    <button type="button" data-action="next" ${f>=b()?"disabled":""}><span>Siguiente</span>${i("right")}</button>
  </div>`}function bo(){return h.completed?"":`<section class="card setup-welcome-banner">
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
  </section>`}function vo(e,a){const t=e?oe(e):0,s=e?Object.values(e.habits||{}).filter(Boolean).length:0,o=Ns(h.name),n=ce(C,f),r=n.drifting.length,d=n.returned.length;return`<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Día</small><span>${Be(f,k)}</span></div>
      <div class="hero-meta">
        <p class="hero-greeting">${l(o)} <span class="age-stage-tag">${h.age?`· ${h.age} años`:""}</span></p>
        <span class="date-line">${L(f)}</span>
        <div class="hero-chips">
          ${aa(k)>0?`<span class="chip hot">${i("flame")} ${aa(k)} d seguidos</span>`:""}
          <span class="chip" id="hero-words-chip">${t} palabras</span>
          ${$.length?`<button type="button" class="chip chip-link" data-view="routine" id="hero-routine-chip">${i("listChecks")} ${s}/${$.length} rutina</button>`:""}
          ${d?`<button type="button" class="chip chip-link is-new" data-view="thoughts">${i("anchor")} ${d} ${d===1?"botella":"botellas"} en la orilla</button>`:r?`<button type="button" class="chip chip-link" data-view="thoughts">${i("wave")} ${r} en el mar</button>`:`<button type="button" class="chip chip-link" data-view="thoughts">${i("pen")} Echar un pensamiento al mar</button>`}
          ${a.interests.slice(0,2).map(c=>`<span class="chip personal-interest-chip">${i(c.icon)} ${l(c.label.split(" ")[0])}</span>`).join("")}
          ${e?`<span class="entry-status">${i("check")} Guardado</span>`:'<span class="entry-status pending">Borrador</span>'}
        </div>
      </div>
    </div>
    <div class="hero-right">
      ${go()}
      <p class="hero-tide">${i("tide")} <span>${l(Aa(f))}</span></p>
    </div>
  </div>`}function wa(e,a,t,s,o=!0){const n=s?String(s).trim().split(/\s+/).length:0;return`<div class="writing-field" data-field="${e}">
    <label for="${e}">${a}<span class="word-count">${n} palabras</span></label>
    <textarea id="${e}" name="${e}" maxlength="20000" placeholder="${l(t)}" class="${o?"large":""}">${l(s||"")}</textarea>
  </div>`}function fo(e=""){return`<div class="goal-row"><span class="goal-circle"></span>
    <input name="goal" aria-label="Objetivo para mañana" placeholder="Un objetivo concreto..." maxlength="500" value="${l(e)}">
    <button type="button" class="icon-button ghost" data-action="remove-goal" aria-label="Eliminar objetivo">${i("close")}</button>
  </div>`}function yo(e,a){if(!e)return"";const t=$.filter(o=>e.habits?.[o.id]),s=h.name?`Cuaderno de ${h.name}`:"Resumen guardado";return`<section class="card daily-summary notebook-sheet reveal">
    <div class="sheet-header">
      <div>
        <p class="eyebrow">${i("book")} Día ${Be(e.date,k)}</p>
        <h2>${L(e.date)}</h2>
      </div>
      <span class="mood-tag" style="--mood:${T[e.mood-1].color}">${T[e.mood-1].emoji} ${T[e.mood-1].label}</span>
    </div>
    ${e.wordOfDay||e.capsule?`
      <div class="sheet-capsules">
        ${e.wordOfDay?`<div class="sheet-capsule-item"><span>Palabra del día</span><strong>«${l(e.wordOfDay)}»</strong></div>`:""}
        ${e.capsule?`<div class="sheet-capsule-item"><span>${l(a.capsuleLabel)}</span><strong>${l(e.capsule)}</strong></div>`:""}
      </div>
    `:""}
    <p class="sheet-narrative">${Xt(e)}</p>
    ${e.bestOfDay?`<div class="sheet-quote-note"><span>Lo mejor:</span> «${l(e.bestOfDay)}»</div>`:""}
    ${t.length?`<div class="sheet-habits-line">${i("check")} ${t.map(o=>`<b>${l(o.name)}</b>`).join(" · ")}</div>`:""}
    <div class="sheet-footer">
      <small>${l(s)} · ${oe(e)} palabras</small>
      <button type="button" class="text-button" data-action="read" data-date="${e.date}">Ver hoja completa ${i("arrow")}</button>
    </div>
  </section>`}function $o(e){return e?!!(e.bestOfDay||e.differentToday||e.tomorrow||e.energy||e.stress||e.tags&&e.tags.length||e.gratitude&&e.gratitude.some(Boolean)):!1}function tt(){const e=k.find(p=>p.date===f),a=B(h),t=ya?{triggered:!1}:Na(e||{}),s=ka(f,Je),o=e?.mood?T[e.mood-1].color:"",n=e?.sleepHours??h.sleepGoal??a.sleepRecommended??7.5,r=e?.studyHours??0,d=Ee||$o(e),c=[6,7,7.5,8,9],u=[0,1,2,3,4];return`
  ${bo()}
  ${vo(e,a)}
  <div class="tide-rule-wrap">${At()}</div>
  <div id="crisis-alert-slot">${Mt(t,h)}</div>
  <div class="diary-layout ${Ce?"is-focus-writing":""}">
    <div class="diary-main">
      <form id="diary-form" style="${o?`--active-mood:${o}`:""}">

        <!-- 1 · CAPTURA RÁPIDA -->
        <section class="card mood-card-section quick-capture" style="--i:1">
          <div class="section-heading">
            <p class="section-index" style="margin-bottom:0">¿Cómo ha ido hoy?</p>
            <span class="capture-hint">${i("spark")} un clic vale como entrada</span>
          </div>
          <div class="mood-scale" role="radiogroup" aria-label="¿Cómo te ha ido?">
            ${T.map(p=>`<label class="mood-option" style="--mood-color:${p.color}">
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
                  ${c.map(p=>`<button type="button" class="quick-pill ${Number(n)===p?"active":""}" data-action="quick-number" data-target="sleepHours" data-val="${p}">${x(p)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="sleepHours" name="sleepHours" type="number" min="0" max="24" step="0.5" value="${n}">
                <span>horas (meta: ${x(h.sleepGoal||a.sleepRecommended)} h)</span>
              </div>
            </div>

            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="studyHours">${i("study")} ${l(a.focusLabel)}</label>
                <div class="quick-pills" role="group" aria-label="Atajos de dedicación">
                  ${u.map(p=>`<button type="button" class="quick-pill ${Number(r)===p?"active":""}" data-action="quick-number" data-target="studyHours" data-val="${p}">${x(p)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="studyHours" name="studyHours" type="number" min="0" max="24" step="0.5" value="${r}">
                <span>horas (meta: ${x(h.studyGoal??a.studyRecommended)} h)</span>
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
              <button type="button" class="icon-button ghost" data-action="toggle-focus-writing" title="${Ce?"Salir del modo enfoque":"Ampliar zona de escritura"}" aria-label="Modo enfoque">
                ${i("expand")}
              </button>
            </div>
          </div>
          <div id="writing-prompt-box" class="writing-prompt-banner ${ve?"is-open":""}" ${ve?"":"hidden"}>
            <div>
              <p id="writing-prompt-text">${l(s)}</p>
            </div>
            <div class="writing-prompt-actions">
              <button type="button" class="button outline small-btn" data-action="next-writing-prompt">${i("refresh")} Otra</button>
              <button type="button" class="button solid small-btn" data-action="insert-writing-prompt">${i("pen")} Usar</button>
            </div>
          </div>
          ${wa("generalDay","Notas del día (opcional si solo quieres un registro rápido)",a.placeholders.generalDay,e?.generalDay,!0)}
          <div class="capsule-word-grid">
            <div class="writing-field" data-field="capsule">
              <label for="capsule">${i("spark")} ${l(a.capsuleLabel)}</label>
              <input id="capsule" name="capsule" class="clean-line-input" maxlength="300" placeholder="${l(a.capsulePlaceholder)}" value="${l(e?.capsule||"")}">
            </div>
            <div class="writing-field" data-field="wordOfDay">
              <label for="wordOfDay">${i("book")} Palabra del día</label>
              <input id="wordOfDay" name="wordOfDay" class="clean-line-input" maxlength="60" placeholder="Una palabra que resuma hoy..." value="${l(e?.wordOfDay||"")}">
            </div>
          </div>
        </section>

        <!-- 3 · MÁS DETALLES (etiquetas, momentos, gratitud) -->
        <div class="extras-accordion ${d?"is-open":""}" id="extras-accordion">
          <button type="button" class="extras-toggle-btn" data-action="toggle-more-details" aria-expanded="${d}">
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
                ${Ps(e?.tags||[],a.tags)}
              </section>

              <section class="card">
                <p class="section-index">Momentos y energía</p>
                <div class="scale-block" style="margin-bottom:16px">
                  ${et("energy",lt,e?.energy,"bolt","Energía","Del 1 al 5","Opcional")}
                  ${et("stress",dt,e?.stress,"storm","Estrés","Del 1 al 5","Opcional")}
                </div>
                ${wa("bestOfDay","Lo mejor del día",a.placeholders.bestOfDay,e?.bestOfDay,!1)}
                ${wa("differentToday","¿Qué ha sido distinto hoy?",a.placeholders.differentToday,e?.differentToday,!1)}
              </section>

              <section class="card">
                <p class="section-index">Tres cosas buenas</p>
                <div class="gratitude-fields">
                  ${["1. Hoy agradezco o valoro...","2. También...","3. Y además..."].map((p,g)=>`<label><span>0${g+1}</span><input name="gratitude${g}" aria-label="${p}" placeholder="${p}" maxlength="20000" value="${l(e?.gratitude?.[g]||"")}"></label>`).join("")}
                </div>
                <p class="aside-note" style="margin-top:14px">${i("listChecks")}<span>Lo de mañana (intención y tareas) se apunta en la pestaña <button type="button" class="inline-link" data-view="routine">Rutina</button>.</span></p>
              </section>
            </div>
          </div>
        </div>

        <div class="save-area">
          <span>${i("lock")} Se guarda al instante en tu navegador.</span>
          <button class="button solid save-button" type="submit" ${He?"disabled":""}>${i("stamp")} Guardar día</button>
        </div>
      </form>
      ${yo(e,a)}
    </div>

    <aside class="diary-aside">
      ${Xs(C)}
      <div id="inspiration-slot">${Et(f,Pa,za,h,e,e?.wordOfDay||"")}</div>
      ${io($,e,k,f)}
      ${Ht()}
      <div id="quote-slot">${qt(f,Ga,h)}</div>
    </aside>
  </div>`}function Ht(){const e=te(f),a=E(e,6),t=V(k,e,a),s=ne(t);return`<section class="card week-preview">
    <div class="section-heading"><h2>Esta semana</h2><span class="tag">${t.length}/7 días</span></div>
    <div class="week-dots">
      ${Array.from({length:7},(o,n)=>{const r=E(e,n),d=t.find(c=>c.date===r);return`<button type="button" data-action="open-day" data-date="${r}" ${r>b()?"disabled":""} aria-label="${L(r)}${d?", "+T[d.mood-1].label:""}">
          <span>${["L","M","X","J","V","S","D"][n]}</span>
          <i class="${d?"filled":""} ${r===b()?"current":""}" style="--mood:${d?T[d.mood-1].color:""}">${d?i("check"):"·"}</i>
        </button>`}).join("")}
    </div>
    <div class="mini-metrics">
      <div>${i("heart")}<strong>${s.count?x(s.mood):"—"}<small>/5</small></strong><span>Ánimo</span></div>
      <div>${i("moon")}<strong>${s.count?x(s.sleep):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${i("study")}<strong>${s.count?x(s.study):"—"}<small>h</small></strong><span>Enfoque</span></div>
    </div>
    <button class="text-button full-link" data-view="stats">Ver progreso completo ${i("arrow")}</button>
  </section>`}function wo(){const e=b(),a=ce(C,e),t=[["shore","anchor","La orilla",a.returned.length],["sea","wave","En el mar",a.drifting.length],["kept","bookmark","Ancladas",a.kept.length],["lost","storm","Perdidas",a.lost.length]];return`${Fe("Pensamientos",h.name?`El mar de ${l(h.name)}`:"El mar de los pensamientos","Escribe lo que no quieres guardar, séllalo en una botella y échalo al mar. Cuando la marea quiera, puede volver a ti.",`
    <span class="count-badge">${C.length} ${C.length===1?"botella":"botellas"} en tu mar</span>
  `)}
  ${Ws(C,e)}
  <div class="tide-rule-wrap is-after-sea">${At()}</div>
  <div class="ocean-layout">
    <div class="ocean-main">
      <div id="composer-slot">${Zs(h,e,Oa)}</div>
      <div class="segmented ocean-tabs">
        ${t.map(([s,o,n,r])=>`<button type="button" data-action="thoughts-tab" data-tab="${s}" class="${Ne===s?"active":""}">
          ${i(o)} ${l(n)}${r?`<span class="seg-count">${r}</span>`:""}
        </button>`).join("")}
      </div>
      <div id="ocean-body" class="tab-panel-enter">${So(a,e)}</div>
    </div>
    <aside class="ocean-aside">
      ${ko(e)}
      ${qo(a,e)}
      ${Ks(C,e)}
    </aside>
  </div>`}function So(e,a){if(!C.length)return eo();const s={shore:e.returned,sea:e.drifting,kept:e.kept,lost:e.lost}[Ne]??e.returned;return s.length?`<div class="bottle-grid">${s.map((o,n)=>Js(o,a,n)).join("")}</div>`:xo(Ne)}function xo(e){const a={shore:["La orilla está seca","Ninguna botella ha vuelto todavía. Cuando la marea viva traiga una, aparecerá aquí y en tu portada."],sea:["No hay nada a la deriva","Echa una botella al mar y la verás alejarse por esta pantalla."],kept:["Nada anclado","Al abrir una botella puedes guardarla en el cuaderno para que se quede contigo."],lost:["El mar no se ha quedado nada","Todavía ninguna botella se ha perdido. Suerte, o paciencia."]},[t,s]=a[e]||a.shore;return`${na(t,s,e==="lost"?"":`<button type="button" class="button outline" data-action="focus-composer">${i("pen")} Escribir un pensamiento</button>`)}`}function ko(e){const a=Oe(e),t=14.765,s=Math.round((a.age%t+t)%t/t*100);return`<section class="card tide-card" data-tide="${a.key}">
    <div class="section-heading">
      <p class="section-index" style="margin-bottom:0">La marea</p>
      <span class="tag">${l(a.name)}</span>
    </div>
    <p class="tide-headline">${l(Aa(e))}</p>
    <div class="tide-dial">
      <span class="tide-track" style="--pct:${s}%"><i style="width:${s}%"></i><b class="tide-pin"></b></span>
      <span class="tide-track-labels"><small>${i("moon")} Luna nueva</small><small class="tide-now">${l(a.phase)}</small><small>${i("moon")} Luna llena</small></span>
    </div>
    <p class="field-caption">Las botellas que vuelven lo hacen con la marea viva, cerca de la luna nueva o de la llena.</p>
  </section>`}function qo(e,a){const t=e.drifting[0],s=t?we(t,a):null;return`<section class="card sea-rules">
    <p class="section-index">${i("compass")} Cómo funciona</p>
    <ol class="sea-rules-list">
      <li><b>Escribe</b> un pensamiento suelto: una duda, un deseo, una rabia, una frase que no va a ningún sitio.</li>
      <li><b>Elige el mar.</b> Cuanto más lejos lo lances, más tarda y más fácil es que no regrese.</li>
      <li><b>El azar se calcula aquí.</b> Sale de tus propias palabras y de la fecha; no hay servidores, ni cuentas, ni IA.</li>
      <li><b>Espérate a la marea.</b> En marea viva puede aparecer en la orilla; tú decides si la abres o la vuelves a lanzar.</li>
    </ol>
    ${t?`<p class="sea-rules-now">${i("wave")} <span>La más cercana: <b>${l(Pe(t.sea).label.toLowerCase())}</b>, ${s.total-s.atSea<=1?"a un día de la orilla":`${s.total-s.atSea} días por delante`}.</span></p>`:'<p class="sea-rules-now"><span>Nada en el agua ahora mismo.</span></p>'}
  </section>`}function Mo(){const e=k.find(t=>t.date===f);return`${Fe("Rutina","Hábitos, contadores y la lista de mañana","Todo lo que se marca en un toque y se guarda al instante, sin escribir una sola línea.",`
    <div class="segmented">
      ${[["hoy","listChecks","Hoy"],["week","grid","Semana"],["counters","drop","Contadores"],["streaks","flame","Rachas"]].map(([t,s,o])=>`<button type="button" data-action="routine-tab" data-tab="${t}" class="${Ae===t?"active":""}">${i(s)} ${l(o)}</button>`).join("")}
    </div>
  `)}
  <div class="routine-layout">
    <div class="routine-main tab-panel-enter">
      ${Ao(e)}
      <div id="routine-body">${Co(e)}</div>
    </div>
    <aside class="routine-aside">${To(e)}</aside>
  </div>`}function Eo(){return`<div class="day-navigation">
    <button type="button" data-action="shift-day" data-delta="-1" aria-label="Día anterior">${i("left")}<span>Anterior</span></button>
    <button type="button" data-action="today-routine" ${f===b()?"disabled":""}>${i("sun")} Hoy</button>
    <button type="button" data-action="shift-day" data-delta="1" ${f>=b()?"disabled":""}><span>Siguiente</span>${i("right")}</button>
  </div>`}function Ao(e){const a=$.filter(n=>e?.habits?.[n.id]).length,t=$.length?Math.round(a/$.length*100):0,s=$.length?a===0?"Aún no has marcado nada":a===$.length?"Rutina completa":`Vas a ${a} de ${$.length}`:"Tu lista está vacía",o=t>=100?"Todos los casilleros llenos: eso también se lee en tus estadísticas.":t>0?"Cada casilla cuenta igual que un párrafo entero.":"Si hoy no puedes con todo, marca uno y da el día por bueno.";return`<section class="card routine-hero">
    <div class="routine-hero-copy">
      <p class="eyebrow">${i("sun")} ${l(L(f,{weekday:"long",day:"numeric",month:"long"}))}</p>
      <h2>${l(s)}</h2>
      <p class="routine-hero-note">${l(o)}</p>
      ${Eo()}
    </div>
    ${Lt(t,$.length?`${t}%`:"—","de hoy")}
  </section>`}function Co(e){const a=B(h),t=b();if(Ae==="week")return`${to(k,$,{days:35,end:t,today:t,title:"Tus últimas cinco semanas"})}${Lo()}`;if(Ae==="counters"){const s=V(k,E(t,-27),t);return`${no(e,h,[])||""}${kt(s,h)}`}return Ae==="streaks"?$.length?`${so($,k,t)}${jo()}`:na("Todavía no hay hábitos","Añade el primero y en unos días verás aquí sus rachas y su constancia.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="hoy">${i("plus")} Crear hábitos</button>`):`${$.length?`<section class="card habit-board-card">
    <div class="section-heading">
      <div><p class="eyebrow">${i("listChecks")} La tasklist de hoy</p><h2>Marcar y seguir</h2></div>
      <span class="field-caption">${$.filter(s=>e?.habits?.[s.id]).length}/${$.length}</span>
    </div>
    ${ao($,e,k,f,t)}
    <p class="board-hint">${i("spark")} Toca un hábito para marcarlo: se guarda solo, sin botón de guardar.</p>
  </section>`:na("Sin hábitos todavía","Crea tu lista abajo o toma prestados los sugeridos para tu etapa.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="streaks">${i("flame")} Ver rachas</button>`)}
  ${ro(e,f)}
  ${oo(a,$)}`}function Lo(){const e=te(f),a=E(e,6),t=V(k,e,a),s=$.map(o=>{const n=t.filter(r=>r.habits?.[o.id]).length;return{label:o.name,count:n,total:7,color:n>=5?"var(--green)":n>=3?"var(--ochre)":"var(--red)"}});return`<section class="card">
    <div class="section-heading"><div><p class="eyebrow">${i("week")}Esta semana</p><h2>${l(L(e,{day:"numeric",month:"short"}))} → ${l(L(a,{day:"numeric",month:"short"}))}</h2></div>
      <span class="tag">${t.length}/7 días con entrada</span></div>
    ${$.length?Ba(s):'<p class="habit-empty">Añade hábitos para ver su semana.</p>'}
  </section>`}function jo(){const e=$.map(t=>({h:t,best:mt(k,t.id),live:la(k,t.id)})).filter(t=>t.best>0).sort((t,s)=>s.best-t.best).slice(0,6);if(!e.length)return"";const a=e[0].best||1;return`<section class="card streak-board">
    <div class="section-heading"><div><p class="eyebrow">${i("flame")}El muro de las rachas</p><h2>Tus mejores series</h2></div><span class="field-caption">días seguidos</span></div>
    <ol class="streak-ranks">
      ${e.map((t,s)=>`<li>
        <span class="streak-rank">${String(s+1).padStart(2,"0")}</span>
        <span class="streak-name">${l(t.h.name)}</span>
        <span class="streak-bar"><i style="width:${Math.max(6,Math.round(t.best/a*100))}%"></i></span>
        <span class="streak-num"><b>${t.best}</b> d${t.live?` · viva ${t.live}`:""}</span>
      </li>`).join("")}
    </ol>
  </section>`}function Do(){return $.length?k.filter(e=>$.every(a=>e.habits?.[a.id])).length:0}function To(e){const a=b(),t=V(k,E(a,-27),a),s=e?Math.min(100,Math.round(e.sleepHours/(h.sleepGoal||7.5)*100)):0;return`
  <section class="card routine-day-card">
    <div class="section-heading"><h2>El día en cifras</h2><span class="tag">${l(L(f,{day:"numeric",month:"short"}))}</span></div>
    <div class="mini-metrics">
      <div>${i("moon")}<strong>${e?x(e.sleepHours):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${i("study")}<strong>${e?x(e.studyHours):"—"}<small>h</small></strong><span>Enfoque</span></div>
      <div>${i("drop")}<strong>${e?.counters?.water||0}<small>v</small></strong><span>Agua</span></div>
    </div>
    ${e?`<div class="sleep-goal-bar"><span style="width:${s}%"></span></div>
      <p class="field-caption">${l(gt(e.sleepHours))}</p>`:'<p class="habit-empty">Este día no tiene entrada en el cuaderno.</p>'}
    <button type="button" class="text-button full-link" data-action="open-day" data-date="${f}">Escribir sobre este día ${i("arrow")}</button>
  </section>
  <section class="card">
    <div class="section-heading"><h2>Rachas del cuaderno</h2><span class="field-caption">28 días</span></div>
    <div class="streak-lines">
      <div><span>${i("flame")} Días seguidos escribiendo</span><strong>${aa(k)}</strong></div>
      <div><span>${i("seal")} Mejor racha histórica</span><strong>${ut(k)}</strong></div>
      <div><span>${i("check")} Días con toda la rutina</span><strong>${Do()}</strong></div>
      <div><span>${i("moon")} Sueño medio</span><strong>${t.length?x(ne(t).sleep):"—"} h</strong></div>
    </div>
  </section>
  ${Ht()}`}function Ho(){const e=[...new Set(k.flatMap(t=>t.tags||[]))],a=k.filter(t=>(!Qe||t.mood===+Qe)&&(!We||(t.tags||[]).includes(We))&&(!Ue||[t.date,t.generalDay,t.bestOfDay,t.differentToday,t.tomorrow,t.wordOfDay,t.capsule,...t.gratitude,...t.goals||[],...t.tags||[]].join(" ").toLocaleLowerCase().includes(Ue.toLocaleLowerCase()))).sort((t,s)=>s.date.localeCompare(t.date));return`${Fe("Archivo",h.name?`Recuerdos de ${l(h.name)}`:"Tus días guardados",`${k.length} ${k.length===1?"entrada":"entradas"} · ${x(k.reduce((t,s)=>t+oe(s),0))} palabras`,`
    <div class="segmented">
      <button type="button" data-action="archive-tab" data-tab="list" class="${Ve==="list"?"active":""}">${i("book")} Lista</button>
      <button type="button" data-action="archive-tab" data-tab="calendar" class="${Ve==="calendar"?"active":""}">${i("calendar")} Calendario</button>
    </div>
  `)}

  ${Ve==="calendar"?`
    <div class="tab-panel-enter">
      <section class="card full-calendar">
        ${Gs(_,k,{selected:f})}
        <div class="mood-legend">
          ${T.map(t=>`<span><i style="background:${t.color}"></i>${t.label}</span>`).join("")}
        </div>
      </section>
    </div>
  `:`
    <div class="tab-panel-enter">
      <div class="history-controls">
        <label class="search-box">${i("search")}<input id="history-search" aria-label="Buscar en el diario" placeholder="Buscar por palabra, nota o etiqueta..." value="${l(Ue)}"></label>
        <select id="history-mood" aria-label="Filtrar por estado de ánimo">
          <option value="">Todos los estados</option>
          ${T.map(t=>`<option value="${t.value}" ${Qe==t.value?"selected":""}>${t.emoji} ${t.label}</option>`).join("")}
        </select>
        ${e.length?`
          <select id="history-tag" aria-label="Filtrar por etiqueta">
            <option value="">Todas las etiquetas</option>
            ${e.map(t=>`<option value="${l(t)}" ${We===t?"selected":""}>#${l(t)}</option>`).join("")}
          </select>
        `:""}
        <div class="segmented">
          <button type="button" data-action="history-layout" data-layout="grid" class="${_e==="grid"?"active":""}">Tarjetas</button>
          <button type="button" data-action="history-layout" data-layout="timeline" class="${_e==="timeline"?"active":""}">Hilo</button>
        </div>
      </div>
      <div class="${_e==="timeline"?"history-timeline":"history-grid"}">
        ${a.length?a.map((t,s)=>{const o=Object.values(t.habits||{}).filter(Boolean).length;return`<article class="card history-card" style="--mood:${T[t.mood-1].color};--i:${Math.min(s,10)}">
            <div class="section-heading">
              <p class="eyebrow">Día ${Be(t.date,k)}</p>
              <span class="mood-tag" style="--mood:${T[t.mood-1].color}">${T[t.mood-1].emoji} ${T[t.mood-1].label}</span>
            </div>
            <h2>${L(t.date,{day:"numeric",month:"long",year:"numeric"})}</h2>
            <p class="entry-excerpt">${l(t.generalDay)}</p>
            ${t.wordOfDay||t.capsule?`
              <div class="history-capsules">
                ${t.wordOfDay?`<span class="history-word-pill">«${l(t.wordOfDay)}»</span>`:""}
                ${t.capsule?`<span class="history-capsule-pill">${i("spark")} ${l(t.capsule)}</span>`:""}
              </div>
            `:""}
            <div class="history-numbers">
              <span class="chiplet">${i("moon")} ${x(t.sleepHours)} h</span>
              <span class="chiplet">${i("study")} ${x(t.studyHours)} h</span>
              ${$.length?`<span class="chiplet">${i("check")} ${o}/${$.length}</span>`:""}
              <span class="chiplet">${i("pen")} ${oe(t)} pal.</span>
            </div>
            <div class="history-actions">
              <button class="text-button" data-action="read" data-date="${t.date}">Abrir ${i("arrow")}</button>
              <button class="icon-button ghost" data-action="open-day" data-date="${t.date}" aria-label="Editar">${i("pen")}</button>
              <button class="icon-button ghost delete-button" data-action="delete" data-date="${t.date}" aria-label="Eliminar">${i("trash")}</button>
            </div>
          </article>`}).join(""):na(k.length?"Sin resultados":"Aún no hay entradas guardadas","Las páginas que guardes aparecerán aquí.")}
      </div>
    </div>
  `}`}function No(){return`${Fe("Progreso",h.name?`Tu evolución, ${l(h.name.split(" ")[0])}`:"Tu evolución","Tus patrones de descanso, ánimo, hábitos y metas personales.",`
    <div class="segmented">
      <button type="button" data-action="stats-tab" data-tab="pulse" class="${be==="pulse"?"active":""}">Pulso y metas</button>
      <button type="button" data-action="stats-tab" data-tab="week" class="${be==="week"?"active":""}">Semana</button>
      <button type="button" data-action="stats-tab" data-tab="month" class="${be==="month"?"active":""}">Mes</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${be==="week"?st(!1):be==="month"?st(!0):Bo()}
  </div>`}function Bo(){const e=b(),a=E(e,1-ge),t=V(k,a,e),s=V(k,E(a,-ge),E(a,-1)),o=ne(t),n=ne(s),r=as(k),d=B(h),c=(u,p)=>{if(t.length<3||s.length<3||!Number.isFinite(o[u])||!Number.isFinite(n[u]))return"";const g=o[u]-n[u];return`${g>0?"↑":g<0?"↓":"→"} ${x(Math.abs(g))}${p} vs. anterior`};return`
  <div class="ledger-grid">
    ${P("Estado medio",o.count?x(o.mood):"—","/ 5",c("mood",""))}
    ${P("Sueño medio",o.count?x(o.sleep):"—","h",c("sleep"," h"))}
    ${P(d.focusLabel,o.count?x(o.study):"—","h",c("study"," h"))}
    ${P("Racha actual",aa(k),"días",`${o.count} días registrados`)}
  </div>
  ${kt(t,h)}
  <section class="card chart-card">
    <div class="section-heading">
      <h2>Ánimo y horas de sueño</h2>
      <div class="segmented">
        <button type="button" data-action="range" data-range="7" class="${ge===7?"active":""}">7 días</button>
        <button type="button" data-action="range" data-range="30" class="${ge===30?"active":""}">30 días</button>
      </div>
    </div>
    ${Fs(t,a,ge,h)}
    <div class="chart-dates"><span>${L(a,{day:"numeric",month:"short"})}</span><span>${L(e,{day:"numeric",month:"short"})}</span></div>
  </section>
  <section class="card">
    <div class="section-heading">
      <h2>Últimos 28 días</h2>
      <span class="field-caption">Pulsa cualquier día para abrirlo</span>
    </div>
    ${Rs(k,e,28)}
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
      ${Za(t).length?Ba(Za(t).slice(0,6).map(([u,p])=>({label:u,count:p,total:t.length,color:"var(--red)"}))):'<p class="habit-empty">Aún no hay etiquetas en este período.</p>'}
    </section>
  </div>`}function st(e){const[a,t]=e?ct(_):[te(f),E(te(f),6)],s=V(k,a,t),o=ne(s);return`
  <div class="section-heading" style="margin-bottom:16px">
    <h2>${e?L(_,{month:"long",year:"numeric"}):`${L(te(f),{day:"numeric",month:"short"})} – ${L(E(te(f),6),{day:"numeric",month:"short",year:"numeric"})}`}</h2>
    <div class="period-controls">
      <button class="icon-button ghost" data-action="period-prev" data-monthly="${e?"1":"0"}" aria-label="Anterior">${i("left")}</button>
      <button class="icon-button ghost" data-action="period-next" data-monthly="${e?"1":"0"}" aria-label="Siguiente">${i("right")}</button>
    </div>
  </div>
  <div class="ledger-grid">
    ${P("Días registrados",o.count,e?"días":"/ 7")}
    ${P("Estado medio",o.count?x(o.mood):"—","/ 5")}
    ${P("Sueño medio",o.count?x(o.sleep):"—","h")}
    ${P("Dedicación media",o.count?x(o.study):"—","h")}
  </div>
  <section class="card period-summary">
    <span class="soft-icon">${i("leaf")}</span>
    <div>
      <p>${es(o,e)}</p>
    </div>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Días destacados</h2>
      <div class="highlights" style="grid-template-columns:1fr 1fr">
        ${Re("Mejor día",o.best)}
        ${Re("Más sueño",o.mostSleep,"sleepHours")}
        ${Re("Más dedicación",o.mostStudy,"studyHours")}
        ${Re("Día más difícil",o.worst)}
      </div>
    </section>
    <section class="card">
      <h2>Distribución de estados</h2>
      <div style="margin-top:14px">
        ${Ba(T.map((n,r)=>({label:`${n.emoji} ${n.label}`,count:o.moods[r],total:o.count,color:n.color})))}
      </div>
    </section>
  </div>`}function Oo(){return`${Fe("Perfil y ajustes","Hecho a tu medida","Personaliza tu identidad, tus gustos, el papel del cuaderno o haz una copia de seguridad.",`
    <div class="segmented">
      <button type="button" data-action="profile-tab" data-tab="personal" class="${Ze==="personal"?"active":""}">${i("sliders")} Mi perfil</button>
      <button type="button" data-action="profile-tab" data-tab="data" class="${Ze==="data"?"active":""}">${i("shield")} Datos y copias</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${Ze==="data"?zo():Po()}
  </div>`}function Po(){const e=B(h),a=new Set($.map(s=>s.name.toLowerCase())),t=new Set(h.interests||[]);return`<form id="setup-page-form" class="setup-page-grid">
    <section class="card" style="--i:1">
      <h2>Identidad y etapa vital</h2>
      <div class="setup-name-age-row">
        <div class="setup-field">
          <label for="sp-name">${i("user")} Tu nombre o apodo</label>
          <input id="sp-name" name="name" maxlength="50" placeholder="Tu nombre..." value="${l(h.name)}">
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
          ${Le.map(s=>`
            <label class="age-group-card ${e.group.id===s.id?"is-selected":""}" data-age-group-card="${s.id}">
              <input type="radio" name="ageGroup" value="${s.id}" ${e.group.id===s.id?"checked":""}>
              <span class="age-range-badge">${l(s.label)}</span>
              <strong>${l(s.title)}</strong>
              <small>${l(s.desc)}</small>
            </label>
          `).join("")}
        </div>
      </div>

      <div class="setup-field">
        <label for="sp-motto">Frase de pie de página</label>
        <input id="sp-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${l(h.motto)}">
      </div>
    </section>

    <section class="card" style="--i:2">
      <h2>Tus gustos y estilo</h2>
      <p class="field-caption" style="margin:6px 0 8px">El diario adapta sus contadores, etiquetas y frases a lo que marques aquí:</p>
      <div class="interests-grid">
        ${ia.map(s=>`
          <label class="interest-chip">
            <input type="checkbox" name="interests" value="${s.id}" ${t.has(s.id)?"checked":""}>
            <span>${i(s.icon)} ${l(s.label)}</span>
          </label>
        `).join("")}
      </div>

      <div class="two-columns" style="margin-top:16px">
        <div class="setup-field" style="margin-top:0">
          <label>Momento habitual</label>
          <div class="ritual-stack">
            ${je.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="ritual" value="${s.id}" ${(h.ritual||"night")===s.id?"checked":""}>
                <span class="purpose-icon">${i(s.icon)}</span>
                <div><strong>${l(s.label)}</strong></div>
              </label>
            `).join("")}
          </div>
        </div>
        <div class="setup-field" style="margin-top:0">
          <label>Tono de las frases</label>
          <div class="ritual-stack">
            ${De.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="tone" value="${s.id}" ${(h.tone||"warm")===s.id?"checked":""}>
                <div><strong>${l(s.label)}</strong><small>${l(s.desc)}</small></div>
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
          <strong>Etapa activa: ${l(e.group.title)} (${l(e.group.label)})</strong>
          <p>Sueño recomendado: <b>${x(e.sleepRecommended)} h</b> · Dedicación sugerida: <b>${x(e.studyRecommended)} h</b>.</p>
        </div>
      </div>
      <div class="goals-setup-grid">
        <div class="setup-field">
          <label for="sp-sleep">${i("moon")} Meta de sueño (h)</label>
          <input id="sp-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${h.sleepGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-study">${i("study")} Meta de dedicación (h)</label>
          <input id="sp-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${h.studyGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-water">${i("drop")} Meta de agua (vasos)</label>
          <input id="sp-water" name="waterGoal" type="number" min="1" max="25" step="1" value="${h.waterGoal}">
        </div>
      </div>
      <div class="setup-field" style="margin-top:16px">
        <label>Hábitos sugeridos para tu perfil</label>
        <div class="tag-picker" id="sp-suggested-habits">
          ${e.suggestedHabits.map(s=>{const o=a.has(s.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${l(s)}" ${o?"checked":""}><span>${o?"✓ ":"+ "}${l(s)}</span></label>`}).join("")}
        </div>
      </div>
      <div class="setup-field" style="margin-top:18px">
        <label>${i("quote")} Tus frases guardadas (${(h.savedQuotes||[]).length})</label>
        ${(h.savedQuotes||[]).length?`
          <div class="saved-quotes-list">
            ${h.savedQuotes.map((s,o)=>`
              <div class="saved-quote-item">
                <span>«${l(s)}»</span>
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
          ${W.map(s=>`
            <label class="theme-card">
              <input type="radio" name="theme" value="${s.id}" ${h.theme===s.id?"checked":""}>
              <div class="theme-card-top">
                <span class="theme-favicon-preview">${re(s.id,h)}</span>
                <div class="theme-swatches">${s.colors.map(o=>`<i style="background:${o}"></i>`).join("")}</div>
              </div>
              <strong>${l(s.name)}</strong>
              <small>${l(s.desc)}</small>
            </label>
          `).join("")}
        </div>
      </div>
      <div class="setup-toggles" style="margin-top:16px">
        <label class="toggle-row">
          <input type="checkbox" name="sidebarCollapsed" ${N?"checked":""}>
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
      <span>${i("lock")} Guardado localmente en este dispositivo.</span>
      <button type="submit" class="button solid save-button">${i("check")} Guardar perfil</button>
    </div>
  </form>`}function zo(){return`
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
  </section>`}function Go(e){const a=k.find(s=>s.date===e),t=B(h);return a?{...a}:{date:e,mood:3,sleepHours:h.sleepGoal||t.sleepRecommended||7.5,studyHours:0,energy:null,stress:null,bestOfDay:"",differentToday:"",generalDay:"Registro rápido desde la rutina.",wordOfDay:"",capsule:"",gratitude:["","",""],tomorrow:"",goals:[],tags:[],counters:{},habits:{}}}function fe(e,a){if(e>b())throw new Error("Ese día todavía no ha llegado.");k=St({...Go(e),...a})}function Ma(){return[...document.querySelectorAll("#routine-goals .task-input")].map(e=>e.value.trim())}function Xe(){const e=document.querySelector("#routine-tomorrow");if(!e)return;const a=Ma().filter(Boolean);try{fe(f,{tomorrow:e.value.trim(),goals:a})}catch(t){y(t.message||"No se pudo guardar la lista.",!0)}}function Fo(){const e=document.querySelector("#routine-tomorrow");e&&(e.addEventListener("change",Xe),document.querySelectorAll("#routine-goals .task-input").forEach(a=>{a.addEventListener("change",Xe),a.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),Xe(),q()),t.key==="Escape"&&q()})}))}let ot=null;function Ro(e,a,t){const s=e.closest(".counter-row"),o=document.querySelector(`#hint-${a}`);if(o&&(o.textContent=da(a,t)),e.classList.remove("num-bump"),e.offsetWidth,e.classList.add("num-bump"),a==="water"){const n=h.waterGoal||8,r=s?.querySelector(".counter-goal-pill"),d=s?.querySelector(".counter-progress i");r&&(r.textContent=`Meta: ${t}/${n}`,r.classList.toggle("met",t>=n)),d&&(d.style.width=`${Math.min(100,Math.round(t/n*100))}%`)}}function Io(){const e={},a=k.find(t=>t.date===f);for(const t of le){const s=document.querySelector(`[name="counter_${t.key}"]`);e[t.key]=s?parseFloat(s.value)||0:Number(a?.counters?.[t.key])||0}try{fe(f,{counters:e})}catch(t){y(t.message||"No se pudo guardar el contador.",!0)}}function nt(e,a){const t=String(a||"").trim().slice(0,40),s=$.find(o=>o.id===e);if(s){if(!t){y("El hábito necesita un nombre.",!0);return}if(t.toLowerCase()!==s.name.toLowerCase()&&$.some(o=>o.name.toLowerCase()===t.toLowerCase())){y("Ya tienes un hábito con ese nombre.",!0);return}t!==s.name&&($=oa({...s,name:t}),q(),y("Hábito renombrado"))}}function Uo(){const e=ye(C),a=e.length,t=e.some(o=>o.seen!==!0);document.querySelectorAll(".nav-badge").forEach(o=>{o.textContent=a,o.classList.toggle("is-new",t),o.hidden=!a});const s=document.querySelector(".sea-quick");if(s){const o=s.querySelector("span");o&&(o.textContent=a||ce(C).drifting.length||""),s.classList.toggle("has-new",t)}}function Ea(e){const a=C.find(o=>o.id===e);if(!a)return;a.status==="returned"&&a.seen!==!0&&(C=Y(e,{seen:!0}),Uo());const t=ke(Ys(a,b(),h)),s=()=>{t.close(),q()};t.onclick=o=>{const n=o.target.closest("[data-modal]")?.dataset.modal;if(!n){o.target===t&&t.close();return}if(n==="close"){s();return}if(n==="reply"){const r=(t.querySelector("#bottle-reply")?.value||"").trim();if(!r){y("Escribe primero lo que quieres contestarte.",!0);return}C=Y(e,{reply:r,seen:!0}),t.close(),q(),Ea(e),y("Le has respondido a tu yo de entonces");return}if(n==="reply-clear"){C=Y(e,{reply:""}),t.close(),q(),Ea(e);return}if(n==="keep"){const r=!a.kept;C=Y(e,{kept:r,keptOn:r?b():null,seen:!0}),s(),y(r?"Botella anclada a tu cuaderno":"Botella desanclada");return}if(n==="to-entry"){try{Qo(a),s(),y("Copiado en la entrada de hoy")}catch(r){y(r.message||"No se pudo copiar.",!0)}return}if(n==="recall"){C=Y(e,{status:"returned",returnedAt:b(),seen:!0}),s(),y("La marea te la trajo antes de tiempo");return}if(n==="recast"){C=xt(e),s(),y("La botella vuelve a navegar");return}}}function Qo(e){const a=b(),t=k.find(n=>n.date===a),s=`Del mar (botella del ${L(e.castAt,{day:"numeric",month:"long"})}): «${e.text}»`,o=[t?.generalDay,s].filter(Boolean).join(`

`);fe(a,{generalDay:o,capsule:t?.capsule||String(e.text).slice(0,240),tags:[...new Set([...t?.tags||[],"Pensamiento"])].slice(0,20)}),C=Y(e.id,{kept:!0,keptOn:a,seen:!0}),f=a,Z="diary"}function Wo(e){let a=document.querySelector("#ocean-fx");a||(a=document.createElement("div"),a.id="ocean-fx",a.className="ocean-fx",document.body.appendChild(a));const s=document.querySelector("#bottle-form")?.getBoundingClientRect(),o=document.createElement("div");o.className="sail-away",o.innerHTML=`<span class="sail-bottle">${$e(e)}</span>`,o.style.left=`${Math.round((s?.left||80)+52)}px`,o.style.top=`${Math.round((s?.top||160)+40)}px`,a.appendChild(o),setTimeout(()=>o.remove(),1500)}function _o(e){const a=new FormData(e),t=(a.get("text")||"").toString().trim();if(t.length<2){y("Escribe algo antes de soltar la botella.",!0);return}const s=a.get("mood"),o=a.get("sea")||"breeze";try{const n=crypto.randomUUID();C=ws({id:n,text:t,mood:s?+s:null,sea:o,castAt:b()});const r=C.find(d=>d.id===n);Oa={text:"",mood:null,sea:o},Ne="sea",Wo(r||{}),setTimeout(()=>q(),950),y(r?`Botella al mar · la orilla la espera hacia el ${L(r.arriveOn,{day:"numeric",month:"long"})}`:"Botella al mar")}catch(n){y(n.message||"No se pudo echar la botella al mar.",!0)}}function Vo(){const e=document.querySelector("#bottle-form");if(!e)return;const a=e.querySelector("#bottle-text"),t=e.querySelector("#bottle-words"),s=()=>{const o=e.querySelector('[name="mood"]:checked');Oa={text:a?.value||"",mood:o?+o.value:null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"},t&&(t.textContent=`${Nt(a?.value||"")} palabras`)};a?.addEventListener("input",s),e.addEventListener("change",s),e.addEventListener("submit",o=>{o.preventDefault(),_o(e)})}function Zo(e){C.find(t=>t.id===e)&&ra({title:"¿Romper esta botella?",text:"El pensamiento se borrará de este navegador. No se puede deshacer.",confirmLabel:"Romperla",danger:!0}).then(t=>{t&&(C=Ss(e),q(),y("Botella rota"))})}function Nt(e){const a=String(e||"").trim();return a?a.split(/\s+/).length:0}function Ra(e){const a=new FormData(e),t=k.find(H=>H.date===f),s=B(h),o=(a.get("tagCustom")||"").toString().trim(),n=[...new Set([...a.getAll("tags").map(H=>H.toString().trim()),o].filter(Boolean))],r={};for(const H of le){const ee=e.querySelector(`[name="counter_${H.key}"]`);r[H.key]=ee?parseFloat(ee.value)||0:Number(t?.counters?.[H.key])||0}const d={},c=[...e.querySelectorAll('[name^="habit_"]')];for(const H of $)d[H.id]=c.length?!!e.querySelector(`[name="habit_${H.id}"]`)?.checked:!!t?.habits?.[H.id];const u=+a.get("mood")||t?.mood||3,p=a.get("sleepHours"),g=p!==null&&p!==""?parseFloat(p):h.sleepGoal||s.sleepRecommended||7.5,w=a.get("studyHours"),M=w!==null&&w!==""?parseFloat(w):0,v=(a.get("bestOfDay")||"").toString().trim(),j=(a.get("differentToday")||"").toString().trim(),J=(a.get("capsule")||"").toString().trim(),F=(a.get("wordOfDay")||"").toString().trim();let R=(a.get("generalDay")||"").toString().trim();return R||(R=v||J||(F?`Palabra del día: ${F}.`:`Día ${T[u-1].label.toLowerCase()}.`)),{id:t?.id,date:f,mood:u,sleepHours:g,studyHours:M,energy:a.get("energy")?+a.get("energy"):null,stress:a.get("stress")?+a.get("stress"):null,bestOfDay:v,differentToday:j,generalDay:R,wordOfDay:F,capsule:J,gratitude:[0,1,2].map(H=>(a.get(`gratitude${H}`)||"").toString().trim()),tomorrow:a.has("tomorrow")?(a.get("tomorrow")||"").toString().trim():t?.tomorrow||"",goals:e.querySelector('[name="goal"]')?a.getAll("goal").map(H=>H.toString().trim()).filter(Boolean):t?.goals||[],tags:n,counters:r,habits:d,createdAt:t?.createdAt}}function Jo(e){for(const[a,t]of[["sleepHours","horas de sueño"],["studyHours","horas de dedicación"]]){const s=e[a];if(!Number.isFinite(s)||s<0||s>24)throw new Error(`Escribe unas ${t} válidas, entre 0 y 24.`)}return e}function rt(e){if(!e)return;const a=Ra(e),t=document.querySelector("#hero-words-chip");t&&(t.textContent=`${oe(a)} palabras`);const s=document.querySelector("#floating-save");s&&s.classList.toggle("is-visible",G);const o=Na(a),n=document.querySelector("#crisis-alert-slot");n&&(o.triggered&&o.level==="high"&&!ya?n.innerHTML=Mt(o,h):o.triggered||(n.innerHTML=""))}function Bt(e,a){if(!e)return;const t=e.querySelector('[name="age"]'),s=()=>{const o=new FormData(e),n=o.get("age"),r=n?pa(n,o.get("ageGroup")||"young"):o.get("ageGroup")||"young",d=o.getAll("interests").map(String);e.querySelectorAll("[data-age-group-card]").forEach(M=>{const v=M.dataset.ageGroupCard===r;M.classList.toggle("is-selected",v);const j=M.querySelector('input[type="radio"]');j&&n&&(j.checked=v)});const c=B({age:n||null,ageGroup:r,interests:d}),u=e.querySelector('[name="sleepGoal"]'),p=e.querySelector('[name="studyGoal"]');u&&n&&(u.value=c.sleepRecommended),p&&n&&(p.value=c.studyRecommended);const g=e.querySelector(`#${a}-adaptation-callout`);g&&(g.innerHTML=`
        ${i("compass")}
        <div>
          <strong>Adaptado a: ${l(c.group.title)} (${l(c.group.label)})</strong>
          <p>Sueño recomendado: <b>${x(c.sleepRecommended)} h</b> · Dedicación sugerida: <b>${x(c.studyRecommended)} h</b>.</p>
        </div>`);const w=e.querySelector(`#${a}-suggested-habits`);if(w){const M=new Set($.map(v=>v.name.toLowerCase()));w.innerHTML=c.suggestedHabits.map(v=>{const j=M.has(v.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${l(v)}" ${j?"checked":""}><span>${j?"✓ ":"+ "}${l(v)}</span></label>`}).join("")}};t&&t.addEventListener("input",s),e.querySelectorAll('[name="ageGroup"], [name="interests"]').forEach(o=>{o.addEventListener("change",s)})}function Yo(){const e=document.querySelector("#setup-page-form");e&&(Bt(e,"sp"),e.addEventListener("submit",t=>{t.preventDefault(),Ot(e),q(),y("Perfil actualizado")}),e.addEventListener("change",t=>{t.target.name==="theme"&&ie(t.target.value,h)}));const a=document.querySelector("#diary-form");a&&(a.addEventListener("submit",t=>{if(t.preventDefault(),!He)try{const s=Jo(Ra(a)),o=Na(s);k=St(s),G=!1,q(),Xo(),y("Día guardado"),document.querySelector(".daily-summary")?.classList.add("reveal"),o.triggered&&o.level==="high"&&setTimeout(()=>Pt("help"),550)}catch(s){y(s.message||"No se ha podido guardar este día.",!0)}}),a.addEventListener("input",t=>{G=!0;const s=t.target;if(s.name==="mood"){const n=T[+s.value-1];a.style.setProperty("--active-mood",n.color)}if(s.name==="sleepHours"||s.name==="studyHours"){const n=parseFloat(s.value);a.querySelectorAll(`[data-action="quick-number"][data-target="${s.name}"]`).forEach(r=>{r.classList.toggle("active",parseFloat(r.dataset.val)===n)})}if(s.name==="energy"){const n=document.querySelector("#energy-hint");n&&(n.textContent=lt[+s.value]+".")}if(s.name==="stress"){const n=document.querySelector("#stress-hint");n&&(n.textContent=dt[+s.value]+".")}if(s.name?.startsWith("counter_")){const n=s.name.slice(8),r=parseFloat(s.value)||0,d=document.querySelector(`#hint-${n}`);if(d&&(d.textContent=da(n,r)),n==="water"){const c=h.waterGoal||8,u=s.closest(".counter-row"),p=u?.querySelector(".counter-goal-pill"),g=u?.querySelector(".counter-progress i");p&&(p.textContent=`Meta: ${r}/${c}`,p.classList.toggle("met",r>=c)),g&&(g.style.width=`${Math.min(100,Math.round(r/c*100))}%`)}}const o=s.closest(".writing-field");if(o){const n=o.querySelector(".word-count");n&&(n.textContent=`${Nt(s.value)} palabras`)}rt(a)}),a.addEventListener("keydown",t=>{if(t.target.id==="tagCustom"&&t.key==="Enter"){t.preventDefault();const s=t.target.value.trim();if(s){const o=a.querySelector(".tag-picker .tag-chip.ghost");o&&o.insertAdjacentHTML("beforebegin",`<label class="tag-chip"><input type="checkbox" name="tags" value="${l(s)}" checked><span>${l(s)}</span></label>`),t.target.value="",G=!0,rt(a)}}}),Ko())}function Ot(e){const a=new FormData(e),t=a.getAll("suggestedHabits").map(p=>p.toString().trim()).filter(Boolean),s=new Set($.map(p=>p.name.toLowerCase()));for(const p of t)!s.has(p.toLowerCase())&&$.length<30&&($=oa({name:p}),s.add(p.toLowerCase()));const o=e.querySelector('[name="sidebarCollapsed"]')!==null,n=a.get("age"),r=n!==null&&n!==""?parseInt(n.toString(),10):null,d=r?pa(r,a.get("ageGroup")||"young"):a.get("ageGroup")||h.ageGroup,c=a.getAll("interests").map(p=>p.toString().trim()).filter(Boolean);h=K({completed:!0,name:a.get("name")||"",age:Number.isFinite(r)?r:null,ageGroup:d,interests:c,ritual:a.get("ritual")||h.ritual,tone:a.get("tone")||h.tone,purpose:a.get("purpose")||h.purpose,motto:a.get("motto")||"Un día a la vez.",theme:a.get("theme")||h.theme,sleepGoal:parseFloat(a.get("sleepGoal"))||7.5,studyGoal:parseFloat(a.get("studyGoal"))??2,waterGoal:parseInt(a.get("waterGoal"),10)||8,showDailyWord:e.querySelector('[name="showDailyWord"]')?.checked??!0,showDailyTip:e.querySelector('[name="showDailyTip"]')?.checked??!0,sidebarCollapsed:o?!!e.querySelector('[name="sidebarCollapsed"]')?.checked:N}),N=!!h.sidebarCollapsed,ie(h.theme,h)}function Ko(){const e=document.querySelector("#diary-form");if(e)for(const a of le){const t=e.querySelector(`[name="counter_${a.key}"]`),s=document.querySelector(`#hint-${a.key}`);t&&s&&t.value!==""&&(s.textContent=da(a.key,parseFloat(t.value)||0))}}function Sa(e=""){const a=document.querySelector("#inspiration-slot");if(!a)return;const t=document.querySelector("#diary-form"),s=t?Ra(t):k.find(o=>o.date===f);if(a.innerHTML=Et(f,Pa,za,h,s,s?.wordOfDay||""),e){const o=a.querySelector(e);o&&(o.classList.remove("card-flip-in"),o.offsetWidth,o.classList.add("card-flip-in"))}}function it(){const e=document.querySelector("#quote-slot");if(!e)return;e.innerHTML=qt(f,Ga,h);const a=e.querySelector(".quote-card");a&&(a.classList.remove("card-flip-in"),a.offsetWidth,a.classList.add("card-flip-in"))}function Xo(){const e=document.querySelector("#stamp");if(!e)return;const a=h.name?`Cuaderno de ${l(h.name)}`:"Guardado";e.innerHTML=`<div class="stamp-face">${a}<small>${L(f)}</small></div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function y(e,a=!1){const t=document.querySelector("#toast");t&&(t.innerHTML=`<div class="${a?"error":""}">${i(a?"close":"check")}<span>${l(e)}</span></div>`,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),3e3))}function ea(){Ye&&(clearInterval(Ye),Ye=null)}function ke(e){ea();const a=document.querySelector("#modal");return a.innerHTML=e,a.open||a.showModal(),a}function Pt(e="help"){const a=ke(Is(h,e));let t=!1;const s=()=>{ea(),a.close()};a.onclick=o=>{if(o.target.closest('[data-modal="close"]')||o.target===a){s();return}const r=o.target.closest("[data-crisis-tab]");if(r){const c=r.dataset.crisisTab;a.querySelectorAll(".crisis-tab").forEach(u=>u.classList.toggle("active",u.dataset.crisisTab===c)),a.querySelectorAll(".crisis-tab-panel").forEach(u=>u.classList.toggle("active",u.dataset.panel===c)),c!=="breathe"&&ea();return}const d=o.target.closest('[data-action="toggle-breathing"]');if(d){const c=a.querySelector("#breathing-visual"),u=a.querySelector("#breathing-phase"),p=a.querySelector("#breathing-timer"),g=a.querySelector("#breathing-guide");if(t)t=!1,ea(),c?.classList.remove("inhale","hold","exhale"),u&&(u.textContent="En pausa"),p&&(p.textContent="4 — 4 — 6"),d.innerHTML=`${i("wind")} Seguir respirando`;else{t=!0,d.innerHTML=`${i("close")} Pausar`;let w=0;const M=()=>{const v=w%14;c?.classList.remove("inhale","hold","exhale"),v<4?(c?.classList.add("inhale"),u&&(u.textContent="Toma aire..."),p&&(p.textContent=`${4-v} s`),g&&(g.textContent="Inhala despacio por la nariz.")):v<8?(c?.classList.add("hold"),u&&(u.textContent="Mantén..."),p&&(p.textContent=`${8-v} s`),g&&(g.textContent="Sostén el aire sin tensar los hombros.")):(c?.classList.add("exhale"),u&&(u.textContent="Suelta..."),p&&(p.textContent=`${14-v} s`),g&&(g.textContent="Deja salir el aire poco a poco.")),w++};M(),Ye=setInterval(M,1e3)}}}}function en(e=1){let a=e;const t=ke(Us(h,$,a)),s=t.querySelector("#setup-wizard-form");Bt(s,"wiz");const o=n=>{a=Math.max(1,Math.min(3,n)),t.querySelectorAll(".wizard-step-body").forEach(p=>{const g=+p.dataset.step;p.classList.toggle("active",g===a),p.hidden=g!==a});const r=t.querySelector(".setup-wizard-header .eyebrow"),d=t.querySelector(".setup-wizard-header h2");r&&(r.innerHTML=`${i("sliders")} Paso ${a} de 3`),d&&(d.textContent=a===1?"Sobre ti, tu edad y tus gustos":a===2?"Tu ritmo y tus hábitos":"Papel e icono de tu cuaderno"),t.querySelectorAll(".wizard-steps-bar span").forEach((p,g)=>{p.classList.toggle("done",a>=g+1),p.classList.toggle("current",a===g+1)});const u=t.querySelector(".wizard-footer");u&&(u.innerHTML=`
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${i("left")} Anterior</button>`:'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${i("right")}</button>`:`<button type="submit" class="button solid">${i("check")} Guardar</button>`}`)};t.onchange=n=>{n.target.name==="theme"&&ie(n.target.value,h)},t.onsubmit=n=>{n.preventDefault(),s&&Ot(s),t.close(),q(),y("Tu cuaderno se ha adaptado a tus gustos")},t.onclick=n=>{if(n.target.closest('[data-modal="close"]')||n.target===t){ie(h.theme,h),t.close();return}const d=n.target.closest("[data-wizard]");if(d){const c=d.dataset.wizard;o(c==="next"?a+1:a-1)}}}function ra({title:e,text:a,confirmLabel:t,danger:s=!1}){return new Promise(o=>{const n=ke(`<div class="modal-card">
      <h2>${l(e)}</h2><p>${l(a)}</p>
      <div class="modal-actions">
        <button class="button outline" data-modal="cancel">Cancelar</button>
        <button class="button ${s?"danger":"solid"}" data-modal="confirm">${l(t)}</button>
      </div>
    </div>`);n.onclick=r=>{const d=r.target.closest("[data-modal]")?.dataset.modal;d?(n.close(),o(d==="confirm")):r.target===n&&(n.close(),o(!1))}})}function an(e){const a=k.find(n=>n.date===e);if(!a){ae(e);return}const t=B(h),s=$.filter(n=>a.habits?.[n.id]),o=ke(`<article class="modal-card entry-modal">
    <div class="section-heading">
      <div><p class="eyebrow">${h.name?`Cuaderno de ${l(h.name)} · `:""}Día ${Be(a.date,k)}</p><h2>${L(a.date)}</h2></div>
      <span class="mood-tag" style="--mood:${T[a.mood-1].color}">${T[a.mood-1].emoji} ${T[a.mood-1].label}</span>
    </div>
    <div class="read-metrics">
      <span class="chiplet">${i("moon")} ${x(a.sleepHours)} h sueño</span>
      <span class="chiplet">${i("study")} ${x(a.studyHours)} h dedicación</span>
      ${a.energy?`<span class="chiplet">${i("bolt")} energía ${a.energy}/5</span>`:""}
      ${a.stress?`<span class="chiplet">${i("storm")} estrés ${a.stress}/5</span>`:""}
      <span class="chiplet">${i("pen")} ${oe(a)} palabras</span>
    </div>
    ${(a.tags||[]).length?`<div class="read-metrics">${a.tags.map(n=>`<span class="chiplet">${i("hash")} ${l(n)}</span>`).join("")}</div>`:""}
    ${a.wordOfDay?`<div class="read-section"><h3>Palabra del día</h3><p>«${l(a.wordOfDay)}»</p></div>`:""}
    ${a.capsule?`<div class="read-section"><h3>${l(t.capsuleLabel)}</h3><p>${l(a.capsule)}</p></div>`:""}
    <div class="read-section"><h3>Notas del día</h3><p class="dropcap-paragraph">${l(a.generalDay)}</p></div>
    ${a.bestOfDay?`<div class="read-section"><h3>Lo mejor del día</h3><p>${l(a.bestOfDay)}</p></div>`:""}
    ${a.differentToday?`<div class="read-section"><h3>¿Qué ha sido distinto?</h3><p>${l(a.differentToday)}</p></div>`:""}
    ${a.gratitude?.some(Boolean)?`<div class="read-section"><h3>Agradecimientos</h3><ol>${a.gratitude.filter(Boolean).map(n=>`<li>${l(n)}</li>`).join("")}</ol></div>`:""}
    ${a.tomorrow||a.goals?.length?`<div class="read-section"><h3>Para mañana</h3><p>${l(a.tomorrow)}</p>${a.goals?.length?`<ul>${a.goals.map(n=>`<li>${l(n)}</li>`).join("")}</ul>`:""}</div>`:""}
    ${$.length&&s.length?`<div class="read-section"><h3>Hábitos cumplidos</h3><p>${s.map(n=>l(n.name)).join(" · ")}</p></div>`:""}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      <button class="button danger" data-modal="delete">Eliminar</button>
      <button class="button solid" data-modal="edit">${i("pen")} Editar</button>
    </div>
  </article>`);o.onclick=n=>{const r=n.target.closest("[data-modal]")?.dataset.modal,d=()=>o.close();(r==="close"||n.target===o)&&d(),r==="edit"&&(d(),ae(a.date)),r==="delete"&&(d(),Gt(a.date))}}function ae(e,a=""){if(e>b()){y("Ese día todavía no ha llegado.",!0);return}G&&!window.confirm("Tienes cambios sin guardar. ¿Quieres salir igualmente?")||(Ke=a||(e<f?"prev":e>f?"next":""),G=!1,f=e,Z="diary",Q=!1,ya=!1,q(),window.scrollTo({top:0,behavior:"smooth"}))}function zt(){if(window.innerWidth<=980){Q=!Q,document.querySelector(".sidebar")?.classList.toggle("is-open",Q),document.querySelector(".sidebar-backdrop")?.classList.toggle("is-visible",Q);return}N=!N,h=K({sidebarCollapsed:N});const e=document.querySelector(".sidebar");if(e){e.classList.toggle("is-collapsed",N);const a=e.querySelector(".sidebar-collapse-btn");a&&(a.innerHTML=i(N?"right":"left"),a.title=N?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)",a.setAttribute("aria-expanded",String(!N)))}}async function Gt(e){await ra({title:"¿Eliminar esta entrada?",text:`Se borrará del dispositivo el registro de ${L(e)}.`,confirmLabel:"Eliminar",danger:!0})&&(k=hs(e),q(),y("Entrada eliminada."))}function tn(e,a){const t=new Blob([a],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(t),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),1e3)}fa.addEventListener("click",async e=>{const a=e.target.closest("[data-view]"),t=e.target.closest("[data-action]");if(e.target.closest(".brand")){e.preventDefault(),ae(b());return}if(a&&!t){const m=a.dataset.view;if(G&&!window.confirm("Tienes cambios sin guardar. ¿Quieres salir igualmente?"))return;G=!1,Z=m,Q=!1,Z==="diary"&&(f=b()),q(),window.scrollTo({top:0,behavior:"smooth"});return}if(!t)return;const{action:s,date:o,range:n,mini:r,key:d,step:c,habit:u,name:p,word:g,tab:w,quote:M,index:v,layout:j,target:J,val:F,monthly:R,id:H,delta:ee}=t.dataset;switch(s){case"menu":Q=!Q,q();break;case"close-menu":Q=!1,q();break;case"toggle-sidebar":zt();break;case"archive-tab":Ve=w||"list",q();break;case"stats-tab":be=w||"pulse",q();break;case"profile-tab":Ze=w||"personal",q();break;case"thoughts-tab":Ne=w||"shore",q();break;case"routine-tab":Ae=w||"hoy",q();break;case"shift-day":{const m=E(f,parseInt(ee||"1",10));if(m>b()){y("Ese día todavía no ha llegado.",!0);break}f=m,q(),window.scrollTo({top:0,behavior:"smooth"});break}case"today-routine":f=b(),q();break;case"focus-composer":{const m=document.querySelector("#bottle-text");m&&(m.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>m.focus(),250));break}case"toggle-habit":{const m=o||f;if(m>b()){y("Ese día todavía no ha llegado.",!0);break}const S=k.find(O=>O.date===m),A={...S?.habits||{}},D=!A[u];A[u]=D;try{fe(m,{habits:A});const O=!S;q();const qe=$.find($a=>$a.id===u)?.name||"Hábito",Ia=$.length,Ft=$.filter($a=>A[$a.id]).length;D&&m===b()&&Ia&&Ft===Ia?y("Rutina de hoy completada"):y(O&&D?`«${qe}» marcado · creé una entrada mínima para ese día`:D?`«${qe}» marcado`:`«${qe}» desmarcado`)}catch(O){y(O.message||"No se pudo guardar el hábito.",!0)}break}case"add-suggested-habit":{if(!p)break;if($.length>=30){y("Máximo 30 hábitos.",!0);break}if($.some(m=>m.name.toLowerCase()===p.toLowerCase())){y("Ya está en tu lista.",!0);break}$=oa({name:p}),q(),y(`«${p}» añadido a tu rutina`);break}case"edit-habit":{const m=t.closest(".habit-stat-row"),S=m?.querySelector(".habit-stat-name strong"),A=$.find(O=>O.id===u);if(!S||!A)break;S.outerHTML=`<input class="habit-rename" maxlength="40" value="${l(A.name)}" aria-label="Renombrar hábito">`;const D=m.querySelector(".habit-rename");D.focus(),D.select(),D.addEventListener("keydown",O=>{O.key==="Enter"&&(O.preventDefault(),D.dataset.done="1",nt(u,D.value)),O.key==="Escape"&&(D.dataset.done="1",q())}),D.addEventListener("blur",()=>{D.dataset.done!=="1"&&nt(u,D.value)});break}case"routine-counter-plus":case"routine-counter-minus":{const m=document.querySelector(`[name="counter_${d}"]`);if(!m)break;const S=s==="routine-counter-plus"?1:-1,A=parseFloat(c)||1,D=Math.min(parseFloat(m.max),Math.max(parseFloat(m.min),(parseFloat(m.value)||0)+S*A));m.value=Math.round(D*10)/10,Ro(m,d,parseFloat(m.value)),clearTimeout(ot),ot=setTimeout(Io,400);break}case"add-goal-routine":{Xe();const m=Ma().filter(Boolean);m.push("");try{fe(f,{goals:m}),q();const S=document.querySelectorAll("#routine-goals .task-input");S[S.length-1]?.focus()}catch(S){y(S.message||"No se pudo añadir la tarea.",!0)}break}case"remove-goal-routine":{const m=Ma().filter((A,D)=>D!==+v),S=k.find(A=>A.date===f);try{fe(f,{goals:m.filter(Boolean),tomorrow:document.querySelector("#routine-tomorrow")?.value.trim()??(S?.tomorrow||"")}),q()}catch(A){y(A.message||"No se pudo quitar la tarea.",!0)}break}case"open-bottle":Ea(H);break;case"recall-bottle":{C=Y(H,{status:"returned",returnedAt:b(),seen:!0}),q(),y("Botella recogida en la orilla");break}case"recast-bottle":{C=xt(H),q(),y("Vuelve a estar en el agua");break}case"delete-bottle":Zo(H);break;case"toggle-more-details":{Ee=!Ee;const m=document.querySelector("#extras-accordion");m&&(m.classList.toggle("is-open",Ee),t.setAttribute("aria-expanded",String(Ee)));break}case"quick-number":{const m=document.querySelector(`#${J}`);m&&F!==void 0&&(m.value=F,m.classList.remove("num-bump"),m.offsetWidth,m.classList.add("num-bump"),m.dispatchEvent(new Event("input",{bubbles:!0})));break}case"cycle-theme":{const m=W.findIndex(qe=>qe.id===h.theme),S=W[(m+1)%W.length];h=K({theme:S.id}),ie(h.theme,h);const A=document.querySelector(".theme-pill > span:last-child"),D=document.querySelector(".topbar-favicon-mini"),O=document.querySelector(".ex-libris-icon");A&&(A.textContent=S.name),D&&(D.innerHTML=re(h.theme,h)),O&&(O.innerHTML=re(h.theme,h)),y(`Tema: ${S.name}`);break}case"open-setup-wizard":en(1);break;case"dismiss-setup-banner":h=K({completed:!0}),document.querySelector(".setup-welcome-banner")?.remove();break;case"open-crisis-modal":Pt(w||"help");break;case"dismiss-crisis-banner":ya=!0,document.querySelector("#crisis-alert-slot").innerHTML="";break;case"next-daily-word":Pa++,Sa(".word-of-day-card");break;case"next-daily-tip":za++,Sa(".tip-of-day-card");break;case"next-quote":Ga++,it();break;case"save-quote":{if(!M)break;const m=h.savedQuotes||[],S=m.includes(M),A=S?m.filter(D=>D!==M):[M,...m];h=K({savedQuotes:A}),it(),y(S?"Frase quitada de tus guardadas":"Frase guardada en tu perfil");break}case"add-custom-quote":{const S=document.querySelector("#new-custom-quote")?.value.trim();if(!S){y("Escribe una frase primero.",!0);break}h=K({savedQuotes:[S,...h.savedQuotes||[]]}),q(),y("Frase añadida");break}case"remove-saved-quote":{const m=parseInt(v,10),S=(h.savedQuotes||[]).filter((A,D)=>D!==m);h=K({savedQuotes:S}),q(),y("Frase eliminada");break}case"toggle-focus-writing":{Ce=!Ce,document.querySelector(".diary-layout")?.classList.toggle("is-focus-writing",Ce);break}case"history-layout":{_e=j||"grid",q();break}case"use-daily-word":{const m=document.querySelector("#wordOfDay");m&&g&&(m.value=g,G=!0,m.dispatchEvent(new Event("input",{bubbles:!0})),m.classList.add("highlight-flash"),setTimeout(()=>m.classList.remove("highlight-flash"),900),Sa(),y(`«${g}» anotada`));break}case"inspire-prompt":{ve=!ve;const m=document.querySelector("#writing-prompt-box");m&&(m.hidden=!ve,m.classList.toggle("is-open",ve));break}case"next-writing-prompt":{Je++;const m=document.querySelector("#writing-prompt-text");m&&(m.classList.remove("text-swap"),m.offsetWidth,m.textContent=ka(f,Je),m.classList.add("text-swap"));break}case"insert-writing-prompt":{const m=ka(f,Je),S=document.querySelector("#generalDay");if(S){const A=S.value.trim();S.value=A?`${A}

— ${m}
`:`— ${m}
`,S.focus(),S.setSelectionRange(S.value.length,S.value.length),S.dispatchEvent(new Event("input",{bubbles:!0}))}break}case"quick-save":{const m=document.querySelector("#diary-form");m&&m.requestSubmit();break}case"previous":ae(E(f,-1),"prev");break;case"next":ae(E(f,1),"next");break;case"today":ae(b());break;case"open-day":ae(o);break;case"read":an(o);break;case"delete":Gt(o);break;case"add-goal":document.querySelector("#goals").insertAdjacentHTML("beforeend",fo()),document.querySelector("#goals .goal-row:last-child input")?.focus(),G=!0;break;case"remove-goal":t.closest(".goal-row").remove(),G=!0;break;case"counter-plus":case"counter-minus":{const m=document.querySelector(`[name="counter_${d}"]`);if(!m)break;const S=s==="counter-plus"?1:-1,A=parseFloat(c)||1,D=Math.min(parseFloat(m.max),Math.max(parseFloat(m.min),(parseFloat(m.value)||0)+S*A));m.value=Math.round(D*10)/10,m.classList.remove("num-bump"),m.offsetWidth,m.classList.add("num-bump"),m.dispatchEvent(new Event("input",{bubbles:!0}));break}case"add-habit":{const S=document.querySelector("#new-habit")?.value.trim();if(!S){y("Escribe un nombre para el hábito.",!0);break}if($.length>=30){y("Máximo 30 hábitos.",!0);break}if($.some(A=>A.name.toLowerCase()===S.toLowerCase())){y("Ya existe un hábito con ese nombre.",!0);break}$=oa({name:S}),q(),document.querySelector("#new-habit")?.focus(),y(`Hábito «${S}» añadido`);break}case"delete-habit":{await ra({title:"¿Eliminar este hábito?",text:`Se quitará «${p}» de tu lista actual.`,confirmLabel:"Eliminar",danger:!0})&&($=bs(u),q(),y("Hábito eliminado"));break}case"month-prev":r==="1"?Ie=ue(Ie,-1):_=ue(_,-1),q();break;case"month-next":r==="1"?Ie=ue(Ie,1):_=ue(_,1),q();break;case"period-prev":R==="1"?_=ue(_,-1):f=E(f,-7),q();break;case"period-next":R==="1"?_=ue(_,1):f=E(f,7),q();break;case"range":ge=+n,q();break;case"export":case"backup":tn(`diario-${b()}.json`,xs(k,$,h)),y("Copia descargada");break;case"import":document.querySelector("#import-file").click();break;case"clear":await ra({title:"¿Borrar todos los datos?",text:"Se eliminarán todas las entradas, hábitos y preferencias de este navegador.",confirmLabel:"Borrar todo",danger:!0})&&(gs(),Fa(),f=b(),Z="diary",q(),y("Datos eliminados"));break}});fa.addEventListener("change",e=>{if(e.target.id==="import-file"){const a=e.target.files[0];if(!a)return;const t=new FileReader;t.onload=()=>{try{me=ks(t.result);const s=ke(`<div class="modal-card">
          <h2>Importar copia</h2>
          <p>El archivo contiene <strong>${me.entries.length}</strong> ${me.entries.length===1?"entrada":"entradas"} y <strong>${me.habits.length}</strong> ${me.habits.length===1?"hábito":"hábitos"}.</p>
          <div class="modal-actions">
            <button class="button outline" data-modal="cancel">Cancelar</button>
            <button class="button solid" data-modal="confirm">Importar</button>
          </div>
        </div>`);s.onclick=o=>{const n=o.target.closest("[data-modal]")?.dataset.modal;n==="confirm"&&(qs(me),Fa(),y("Copia importada")),(n||o.target===s)&&(s.close(),q())}}catch(s){y(s.message||"No se ha podido importar el archivo.",!0)}e.target.value=""},t.readAsText(a)}e.target.id==="history-mood"&&(Qe=e.target.value,q()),e.target.id==="history-tag"&&(We=e.target.value,q())});fa.addEventListener("input",e=>{if(e.target.id==="history-search"){Ue=e.target.value;const a=document.activeElement===e.target;if(q(),a){const t=document.querySelector("#history-search");t.focus(),t.setSelectionRange(t.value.length,t.value.length)}}});window.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="b"&&(e.preventDefault(),zt())});window.addEventListener("beforeunload",e=>{G&&(e.preventDefault(),e.returnValue="")});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});q();const xa=ye(C).filter(e=>e.seen!==!0);xa.length&&setTimeout(()=>y(`El mar te ha devuelto ${xa.length} ${xa.length===1?"pensamiento":"pensamientos"}`),820);

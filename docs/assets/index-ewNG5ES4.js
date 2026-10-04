(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const T=[{value:1,emoji:"😫",label:"Fatal",color:"#a8442c"},{value:2,emoji:"😕",label:"Flojo",color:"#c2743a"},{value:3,emoji:"😐",label:"Normal",color:"#98938a"},{value:4,emoji:"🙂",label:"Bien",color:"#4e6f52"},{value:5,emoji:"🤩",label:"Genial",color:"#254d32"}],io=["L","M","X","J","V","S","D"],is=["","Muy baja","Baja","Normal","Alta","Muy alta"],ls=["","Muy bajo","Bajo","Normal","Alto","Muy alto"],lo=["Productivo","Tranquilo","Ajetreado","Social","Solitario","Creativo","Cansado","Motivado","Ansioso","Emocionado","Nostálgico","Aburrido"],ca=[{key:"water",label:"Agua",unit:"vasos",min:0,max:40,step:1,icon:"drop"},{key:"exercise",label:"Ejercicio",unit:"min",min:0,max:1440,step:5,icon:"run"},{key:"reading",label:"Lectura",unit:"min",min:0,max:1440,step:5,icon:"book"},{key:"mindfulness",label:"Pausa consciente",unit:"min",min:0,max:1440,step:5,icon:"leaf"}],ds=["drop","run","book","leaf","moon","heart","bolt","sun","gauge","pen","paper","spark"],co=[{id:"text",label:"párrafo"},{id:"line",label:"una línea"}],cs=[{label:"Cómo responde el cuerpo",hint:"Tensión, digestión, sueño, energía.",type:"text"},{label:"Una idea que no quiero olvidar",hint:"",type:"line"},{label:"Con quién he hablado hoy",hint:"",type:"line"},{label:"Qué me ha costado",hint:"Sin juzgarlo: solo nombrarlo.",type:"text"}],Se=8,xe=12,us=e=>String(e??"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,24),Ye=(e,a,t,s)=>{const o=Number(e);return Number.isFinite(o)?Math.min(t,Math.max(a,o)):s},ps=e=>`${e}_${Date.now().toString(36).slice(-5)}${Math.floor(Math.random()*1296).toString(36).padStart(2,"0")}`;function uo(e={}){const a=ca.find(o=>o.key===e.key),t=us(e.key);if(!t)return null;const s={key:t,label:String(e.label??a?.label??"Contador").trim().slice(0,28)||a?.label||"Contador",unit:String(e.unit??a?.unit??"").trim().slice(0,14),min:Ye(e.min??a?.min,0,9999,0),max:0,step:Ye(e.step??a?.step,1,3600,a?a.step:1),goal:Ye(e.goal,0,99999,0),icon:ds.includes(e.icon)?e.icon:a?.icon||"gauge",builtin:!!a};return s.max=Math.max(Ye(e.max??a?.max,1,99999,a?a.max:99),s.min+s.step),s}const ct=(e,a={})=>e?.key==="water"?Ye(a?.waterGoal,0,25,8):Number(e?.goal)||0;function ne(e={}){const a=Array.isArray(e?.counters)&&e.counters.length?e.counters:ca,t=new Set;return a.map(uo).filter(s=>s&&!t.has(s.key)&&(t.add(s.key),!0)).slice(0,xe)}function po(e={}){const a=us(e.key),t=String(e.label||"").trim().slice(0,60);return!a||!t?null:{key:a,label:t,hint:String(e.hint||"").trim().slice(0,140),type:e.type==="line"?"line":"text"}}function K(e={}){const a=Array.isArray(e?.parts)?e.parts:[],t=new Set;return a.map(po).filter(s=>s&&!t.has(s.key)&&(t.add(s.key),!0)).slice(0,Se)}const mo=["bestOfDay","differentToday","generalDay","tomorrow","wordOfDay"],sa=[{id:"teen",min:10,max:18,label:"12 – 18 años",title:"Instituto y descubrimiento",desc:"Pensado para tu ritmo de clases, exámenes, amigos, aficiones y empezar a guardar tu propia historia.",sleepRecommended:8.5,studyRecommended:2,focusLabel:"Horas de estudio",focusQuestion:"¿Cuánto tiempo has dedicado hoy a estudiar, repasar o hacer tareas?",tags:["Clases","Exámenes","Amigos","Deporte","Música","Videojuegos","Tarde libre","Tranquilo","Cansado","Motivado","Creativo","Social"],habits:["Hacer tareas sin mirar el móvil","Leer 15 minutos antes de dormir","Moverme o entrenar un rato","Dejar la mochila lista para mañana","Dejar el móvil fuera de la cama","Salir a tomar el aire"],placeholders:{bestOfDay:"Una risa en clase, una partida con amigos, una canción en el bus, quitarme un examen de encima...",differentToday:"Algo curioso que pasó en el insti, una charla que no esperaba o un plan improvisado...",generalDay:"Cuenta cómo te has sentido hoy de verdad, qué te ha dado rabia, qué te ha hecho gracia...",tomorrow:"Repasar ese tema a tiempo, quedar un rato, acostarme sin quedarme pegado a la pantalla..."}},{id:"young",min:19,max:26,label:"19 – 26 años",title:"Universidad, proyectos y primeros pasos",desc:"Adaptado a años de carrera, primeros trabajos, independencia, amigos y construir tu propio camino.",sleepRecommended:8,studyRecommended:3,focusLabel:"Horas de estudio y foco",focusQuestion:"¿Cuántas horas has dedicado a estudiar, formarte o sacar adelante tus proyectos?",tags:["Productivo","Uni / Trabajo","Amigos","Entreno","Creativo","Tranquilo","Cansado","Motivado","Social","Solitario","Nostálgico","Ajetreado"],habits:["Bloque de estudio sin distracciones","Entrenar o caminar 30 min","Leer 20 páginas","Cocinar algo casero","Sin pantallas 30 min antes de dormir","Ordenar mi mesa al acabar"],placeholders:{bestOfDay:"Un café a media mañana, avanzar de verdad con mis cosas, entrenar, una charla hasta tarde...",differentToday:"Una idea que me vino de repente, alguien con quien coincidí, un cambio de planes...",generalDay:"Escribe para ti cómo ha ido el día, qué tienes en la cabeza y cómo llevas la semana...",tomorrow:"Aprovechar la mañana, quitarme esa tarea pendiente, guardar tiempo para descansar..."}},{id:"adult",min:27,max:49,label:"27 – 49 años",title:"Equilibrio, oficio y vida propia",desc:"Diseñado para compaginar trabajo o proyectos, descanso mental, salud, casa y tiempo de calidad.",sleepRecommended:7.5,studyRecommended:1.5,focusLabel:"Horas de enfoque o aprendizaje",focusQuestion:"¿Cuánto tiempo has dedicado hoy a aprender, leer o avanzar en proyectos propios?",tags:["Enfocado","Tranquilo","Trabajo","Familia","Deporte","Lectura","Cansado","Motivado","Social","Creativo","Desconexión","Ajetreado"],habits:["Cerrar el trabajo a mi hora","Caminar 30 minutos sin prisas","Leer antes de apagar la luz","Estirar espalda y cuello","Beber agua durante la jornada","Media hora sin notificaciones"],placeholders:{bestOfDay:"Una sobremesa tranquila, resolver un asunto pendiente, cerrar el ordenador y desconectar...",differentToday:"Algo que rompió la inercia de la semana o un detalle cotidiano que hoy noté distinto...",generalDay:"Cómo ha ido la jornada, qué energía te queda esta noche y qué necesitas soltar...",tomorrow:"Centrarme en lo prioritario, no llenarme la agenda de más, salir a estirar las piernas..."}},{id:"senior",min:50,max:120,label:"50+ años",title:"Serenidad, bienestar y perspectiva",desc:"Orientado a saborear el ritmo diario, cuidar la salud, los paseos, la lectura y la memoria de lo vivido.",sleepRecommended:7.5,studyRecommended:1,focusLabel:"Tiempo de lectura o dedicación",focusQuestion:"¿Cuánto tiempo has dedicado hoy a la lectura, aprender o cultivar tus aficiones?",tags:["Sereno","Paseo","Lectura","Familia","Naturaleza","Salud","Agradecido","Activo","Creativo","Social","Tranquilo","Nostálgico"],habits:["Paseo matutino al aire libre","Rato de lectura tranquila","Ejercicios de movilidad suave","Llamar o ver a alguien querido","Cuidar el descanso nocturno","Un momento de silencio y calma"],placeholders:{bestOfDay:"La luz de la mañana en el paseo, una buena conversación, avanzar con el libro que estoy leyendo...",differentToday:"Una visita grata, un recuerdo que volvió con nitidez, un paseo por un sitio distinto...",generalDay:"Anota con sosiego cómo ha transcurrido el día y con qué sensación te quedas hoy...",tomorrow:"Salir a caminar temprano, dedicar un rato a la lectura, disfrutar del día sin prisa..."}}],ja=[{id:"reading",label:"Lectura y escritura",icon:"book",habit:"Leer 20 minutos con calma",tag:"Lectura"},{id:"sport",label:"Deporte y movimiento",icon:"run",habit:"Entrenar o moverme 30 min",tag:"Deporte"},{id:"study",label:"Estudio y aprendizaje",icon:"study",habit:"Sesión de estudio sin móvil",tag:"Productivo"},{id:"music",label:"Música, cine y arte",icon:"spark",habit:"Escuchar un álbum o crear algo",tag:"Creativo"},{id:"nature",label:"Naturaleza y aire libre",icon:"leaf",habit:"Salir a caminar al aire libre",tag:"Naturaleza"},{id:"social",label:"Amigos y gente querida",icon:"heart",habit:"Hablar con alguien que quiero",tag:"Social"},{id:"calm",label:"Calma y descanso",icon:"moon",habit:"Apagar pantallas 30 min antes de dormir",tag:"Tranquilo"},{id:"projects",label:"Proyectos personales",icon:"bolt",habit:"Dedicar 30 min a mi propio proyecto",tag:"Enfocado"},{id:"gaming",label:"Tecnología y videojuegos",icon:"target",habit:"Parar a tiempo para descansar la vista",tag:"Desconexión"},{id:"cooking",label:"Cocina y comer bien",icon:"flame",habit:"Preparar una comida casera y tranquila",tag:"Bienestar"}],oa=[{id:"night",label:"Por la noche, al cerrar el día",icon:"moon"},{id:"morning",label:"Por la mañana, con café o té",icon:"sun"},{id:"afternoon",label:"A media tarde, haciendo una pausa",icon:"leaf"},{id:"anytime",label:"Cuando me pide el cuerpo escribir",icon:"pen"}],na=[{id:"warm",label:"Cálido y cercano",desc:"Como hablar con un buen amigo en calma"},{id:"literary",label:"Pausado y literario",desc:"Con gusto por las palabras y los detalles"},{id:"direct",label:"Directo y práctico",desc:"Al grano, claro y enfocado en tu día a día"},{id:"gentle",label:"Suave y compasivo",desc:"Especialmente amable para días de cansancio"}],V=[{id:"paper",name:"Papel Clásico",desc:"Cuaderno color crema y tinta estilográfica carbón",colors:["#F3EFE6","#211E17","#B34A2E"],favicon:{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"}},{id:"night",name:"Tinta Nocturna",desc:"Cuero oscuro y trazos cálidos para escribir de noche",colors:["#151412","#EDE6D8","#D96B4E"],favicon:{bg:"#151412",page:"#272420",accent:"#D96B4E",ink:"#EDE6D8"}},{id:"forest",name:"Bosque Sereno",desc:"Encuadernación salvia y papel natural de algodón",colors:["#EBF0EA","#19241D","#356343"],favicon:{bg:"#19241D",page:"#EBF0EA",accent:"#4C8B5E",ink:"#19241D"}},{id:"terracotta",name:"Atardecer Cálido",desc:"Arcilla cocida, papel hueso y acentos ocre",colors:["#F6ECE4","#261B15","#C45534"],favicon:{bg:"#261B15",page:"#F6ECE4",accent:"#C45534",ink:"#261B15"}},{id:"ocean",name:"Azul Atlántico",desc:"Papel marfil frío y tinta azul de cuaderno de viaje",colors:["#EDF2F6","#16222F","#2B5F8C"],favicon:{bg:"#16222F",page:"#EDF2F6",accent:"#2B5F8C",ink:"#16222F"}},{id:"lavender",name:"Bruma Lavanda",desc:"Lino malva suave y tinta ciruela",colors:["#F2EEF6","#221B2B","#6E4B8E"],favicon:{bg:"#221B2B",page:"#F2EEF6",accent:"#6E4B8E",ink:"#221B2B"}}],ho=[{id:"calm",label:"Calma y desahogo",icon:"leaf",desc:"Soltar el ruido del día y quedarme más tranquilo/a."},{id:"focus",label:"Constancia y hábitos",icon:"study",desc:"Cuidar mi estudio, mi descanso y mis rutinas diarias."},{id:"memory",label:"Guardar mi historia",icon:"book",desc:"Que los meses no pasen sin recordar lo que he vivido."},{id:"growth",label:"Conocerme mejor",icon:"spark",desc:"Ver qué cosas me sientan bien y cuáles me quitan energía."}],go=["Leer 20 minutos","Caminar al aire libre","Pausa sin pantallas","Beber 8 vasos de agua","Respirar 5 minutos en calma","Dormir a buena hora","Estirar el cuerpo","Ordenar mi espacio"],Tt=[{text:"No todos los días son buenos, pero siempre queda algún rincón que merece la pena guardar.",author:"Nota de cuaderno",tones:["warm","gentle"],ages:["teen","young","adult","senior"]},{text:"Cómo pasamos los días es, al final, cómo pasamos la vida.",author:"Annie Dillard",tones:["literary","direct"],ages:["young","adult","senior"],interests:["reading","projects"]},{text:"Escribir en un diario es hablar contigo sin tener que fingir que todo va perfecto.",author:"Apunte al margen",tones:["direct","warm"],ages:["teen","young","adult"]},{text:"La prisa casi nunca arregla lo que el descanso sí sabe colocar en su sitio.",author:"Cuaderno de calma",tones:["gentle","warm"],ages:["teen","young","adult","senior"],interests:["calm","nature"]},{text:"Un paso corto dado hoy vale más que diez planes perfectos que se quedan para el lunes.",author:"Bitácora personal",tones:["direct"],ages:["teen","young","adult"],interests:["study","sport","projects"]},{text:"Guardar memoria de las cosas pequeñas es la mejor forma de vivir dos veces.",author:"Tradición de lectura",tones:["literary"],ages:["young","adult","senior"],interests:["reading","music"]},{text:"Sé amable con tu propio ritmo: ni los árboles dan fruto todos los meses del año.",author:"Cuaderno de campo",tones:["gentle","literary"],ages:["teen","young","adult","senior"],interests:["nature","calm"]},{text:"Lo que hoy parece un examen gigante o un problema sin salida, dentro de un mes será solo una página pasada.",author:"Nota para días revueltos",tones:["warm","gentle"],ages:["teen","young"],interests:["study","gaming"]}],Ht=[{word:"Ataraxia",origin:"Griego clásico",meaning:"Tranquilidad de ánimo que nace cuando dejamos de pelear contra lo que no depende de nosotros.",prompt:"¿Qué preocupación podrías dejar en pausa por esta noche?"},{word:"Meraki",origin:"Griego moderno",meaning:"Hacer algo poniendo el corazón, el cuidado y una parte de ti en ello.",prompt:"¿En qué detalle pequeño de hoy has puesto ganas o cariño?"},{word:"Kintsugi",origin:"Japonés",meaning:"Oficio de reparar la cerámica rota con barniz de oro, sin esconder las grietas.",prompt:"¿Qué tropiezo reciente te ha servido para aprender algo útil?"},{word:"Komorebi",origin:"Japonés",meaning:"La luz del sol cuando se cuela entre las hojas de los árboles.",prompt:"¿Qué imagen o rincón bonito has visto hoy al pasar?"},{word:"Resiliencia",origin:"Latín",meaning:"La capacidad de encajar un golpe, recuperar el aliento y seguir adelante a tu paso.",prompt:"¿Cómo has tirado hacia delante hoy cuando algo se hacía cuesta arriba?"},{word:"Serendipia",origin:"Castellano",meaning:"Eso bueno que te encuentras por casualidad mientras ibas buscando otra cosa.",prompt:"¿Qué momento no planeado ha merecido la pena hoy?"},{word:"Ubuntu",origin:"Zulú · Xhosa",meaning:"La idea de que somos quienes somos gracias también a quienes nos rodean.",prompt:"¿Quién te ha hecho el día un poco más fácil o agradable hoy?"},{word:"Ikigai",origin:"Japonés",meaning:"Aquello que te da un motivo concreto para levantarte por la mañana.",prompt:"¿Qué plan o proyecto te apetece de verdad hacer pronto?"},{word:"Wabi-sabi",origin:"Japonés",meaning:"Gustar de las cosas sencillas, imperfectas y gastadas por la vida real.",prompt:"¿En qué cosa imperfecta de hoy puedes dejar de exigirte tanto?"},{word:"Apapachar",origin:"Náhuatl",meaning:"Dar abrigo y consuelo de verdad; cuidar con cercanía.",prompt:"¿Qué necesitas hoy para descansar a gusto?"},{word:"Sosiego",origin:"Castellano",meaning:"Ese silencio tranquilo que queda cuando por fin se acaba la prisa del día.",prompt:"¿En qué momento del día has notado más calma hoy?"},{word:"Epifanía",origin:"Griego",meaning:"Caer en la cuenta de golpe de algo que llevabas tiempo viendo sin entender.",prompt:"¿De qué cosa te has dado cuenta hoy?"},{word:"Bonhomía",origin:"Castellano",meaning:"Trato llano, honesto y amable que no necesita aparentar nada.",prompt:"¿Qué gesto sencillo de amabilidad has visto o tenido hoy?"},{word:"Nefelibata",origin:"Castellano",meaning:"Persona que de vez en cuando camina por las nubes y mira el mundo a su manera.",prompt:"¿En qué se te ha ido el santo al cielo hoy?"},{word:"Templanza",origin:"Latín",meaning:"Guardar el equilibrio y no perder los papeles cuando alrededor hay ruido.",prompt:"¿En qué situación de hoy has sabido mantener la calma?"},{word:"Alba",origin:"Latín",meaning:"La primera claridad de la mañana antes de que asome el sol.",prompt:"¿Cómo te gustaría empezar la mañana de mañana?"},{word:"Saudade",origin:"Portugués",meaning:"Echar de menos con cariño a alguien o a una época en la que fuiste feliz.",prompt:"¿Qué buen recuerdo te ha venido hoy a la cabeza?"},{word:"Lagom",origin:"Sueco",meaning:"Ni de más ni de menos: saber cuándo algo es ya suficiente.",prompt:"¿Con qué cosa de hoy puedes decir tranquilo/a «por hoy ya está bien»?"},{word:"Sisu",origin:"Finés",meaning:"Empuje tranquilo para terminar lo que empezaste aunque estés cansado.",prompt:"¿Qué cosa has sacado adelante hoy aunque te diera pereza?"},{word:"Hygge",origin:"Danés",meaning:"Estar a gusto en lo cotidiano: una charla tranquila, una manta, un rato en casa.",prompt:"¿Qué momento sencillo del día te ha sentado mejor?"},{word:"Querencia",origin:"Castellano",meaning:"El sitio o la gente a la que uno siempre tiene ganas de volver.",prompt:"¿Dónde o con quién te sientes más cómodo/a últimamente?"},{word:"Claridad",origin:"Latín",meaning:"Distinguir lo que de verdad importa de lo que solo hace ruido.",prompt:"Si te quedas con una sola cosa de hoy, ¿cuál eliges?"},{word:"Amparo",origin:"Latín",meaning:"Tener un lugar o una persona donde resguardarse cuando el día se tuerce.",prompt:"¿Qué te reconforta cuando tienes un día torcido?"},{word:"Gratitud",origin:"Latín",meaning:"No dar por supuesto lo bueno que tenemos cerca cada día.",prompt:"¿Qué cosa normal de tu rutina agradecerías si mañana faltara?"}],Nt=[{category:"Autocompasión",title:"No te hables peor que a un amigo",tip:"Cuando estás cansado o algo sale regular, es fácil machacarse. Prueba a decirte exactamente lo que le dirías a alguien a quien aprecias.",action:"Anota algo que hoy hayas hecho lo mejor que podías.",icon:"heart",ages:["teen","young","adult","senior"],interests:["calm","social"]},{category:"Descanso",title:"Bajar el brillo antes de acostarte",tip:"Dejar el móvil o las pantallas un rato antes de meterte en la cama ayuda a que la cabeza deje de saltar de un tema a otro.",action:"Pon la alarma y deja el teléfono lejos de la almohada.",icon:"moon",ages:["teen","young","adult","senior"],interests:["calm","gaming"]},{category:"Calma",title:"Soltar el aire más despacio",tip:"Cuando notes prisa o nudo en el estómago, toma aire contando 4 y suéltalo despacio contando 6. El cuerpo entiende enseguida el mensaje.",action:"Respira hondo tres veces antes de cerrar el cuaderno.",icon:"leaf",ages:["teen","young","adult","senior"],interests:["calm","nature"]},{category:"Enfoque",title:"La regla de los primeros cinco minutos",tip:"Casi siempre cuesta más ponerse que hacerlo. Ponte solo 5 minutos con eso que estás posponiendo; luego decides si sigues.",action:"Deja escrita una sola tarea concreta para mañana.",icon:"study",ages:["teen","young","adult"],interests:["study","projects"]},{category:"Escritura",title:"Aquí nadie te va a poner nota",tip:"No hace falta escribir bonito ni llenar la página. Tres líneas sinceras sobre lo que te ha pasado hoy bastan.",action:"Escribe lo primero que te salga sin borrar.",icon:"pen",ages:["teen","young","adult","senior"],interests:["reading"]},{category:"Hábitos",title:"Un día suelto no rompe nada",tip:"Si ayer no pudiste cumplir un hábito, no pasa nada. Lo que cuenta es retomarlo hoy con naturalidad y sin culpa.",action:"Empieza por el hábito más fácil de tu lista.",icon:"flame",ages:["teen","young","adult","senior"],interests:["projects","sport"]},{category:"Bienestar",title:"A veces el cansancio es sed",tip:"Gran parte del embotamiento de media tarde viene de llevar horas sin beber agua mientras estudias o trabajas.",action:"Ten un vaso o botella a mano mañana por la mañana.",icon:"drop",ages:["teen","young","adult","senior"],interests:["sport","study","cooking"]},{category:"Calma",title:"Sacar el ruido de la cabeza al papel",tip:"Cuando una preocupación da vueltas en bucle, escribirla en una frase la vuelve manejable y libera espacio mental.",action:"Apunta qué te preocupa hoy y qué parte sí está en tu mano.",icon:"book",ages:["teen","young","adult","senior"],interests:["reading","calm"]},{category:"Movimiento",title:"Caminar también ordena las ideas",tip:"Quince minutos andando sin mirar el teléfono despejan más la mente que media hora intentando concentrarse a la fuerza.",action:"Sal a dar una vuelta corta mañana cuando te satures.",icon:"run",ages:["teen","young","adult","senior"],interests:["sport","nature"]},{category:"Estudio y memoria",title:"Lo que estudias se fija mientras duermes",tip:"Quitarle horas al sueño para estudiar a última hora suele salir caro: el cerebro consolida lo aprendido durante el descanso.",action:"Prioriza dormir bien hoy para rendir mejor mañana.",icon:"study",ages:["teen","young"],interests:["study"]},{category:"Equilibrio",title:"Cerrar la jornada de verdad",tip:"Tener un pequeño ritual al terminar tus obligaciones —recoger la mesa, ducharte o salir a caminar— separa el deber del descanso.",action:"Elige a qué hora vas a desconectar mañana.",icon:"sun",ages:["young","adult"],interests:["projects","calm"]},{category:"Perspectiva",title:"Cuidar el contacto con los tuyos",tip:"A veces un mensaje corto o una llamada de cinco minutos a alguien que quieres cambia por completo el tono de la semana.",action:"Piensa en alguien con quien te apetezca hablar mañana.",icon:"heart",ages:["teen","young","adult","senior"],interests:["social"]}],Ot=["¿Qué rato de hoy te ha dejado buen sabor de boca, aunque haya sido breve?","¿Qué te ha dado más pereza o respeto hoy y cómo lo has llevado?","¿Qué conversación, canción o momento tranquilo te ha acompañado hoy?","¿Qué te gustaría quitarte de la cabeza antes de apagar la luz?","Si un amigo hubiera tenido exactamente tu día de hoy, ¿qué le dirías?","¿En qué momento del día te has sentido más cómodo/a siendo tú?","¿Qué detalle pequeño de hoy no querrías que se te olvidara dentro de un año?","¿Cómo notas el cuerpo esta noche: cansado, inquieto, ligero, tranquilo?","¿Qué cosa sencilla ha salido mejor de lo que esperabas esta mañana?","¿Qué necesitas mañana para que sea un día llevadero y amable?"],bo=[{number:"024",tel:"tel:024",name:"Línea 024 · Atención a la conducta suicida",detail:"Ministerio de Sanidad (España) · Gratuita, confidencial, anónima y abierta las 24 horas.",primary:!0},{number:"717 003 717",tel:"tel:717003717",name:"Teléfono de la Esperanza",detail:"Escucha y apoyo emocional en momentos de crisis · 24 horas todos los días.",primary:!0},{number:"900 20 20 10",tel:"tel:900202010",name:"Fundación ANAR (Menores y jóvenes)",detail:"Atención gratuita, confidencial y 24h para jóvenes y adolescentes. No deja rastro en la factura.",primary:!1,youth:!0},{number:"112",tel:"tel:112",name:"Emergencias 112",detail:"Atención inmediata de urgencia sanitaria o seguridad · 24 horas.",primary:!1}];function b(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function De(e){return new Date(`${e}T12:00:00`)}function L(e,a){const t=De(e);return t.setDate(t.getDate()+a),b(t)}function Y(e,a){return Math.round((Date.UTC(...a.split("-").map((t,s)=>+t-(s===1?1:0)))-Date.UTC(...e.split("-").map((t,s)=>+t-(s===1?1:0))))/864e5)}function ua(e,a){const t=[e,...a.map(s=>s.date)].sort()[0];return Y(t,e)+1}function D(e,a={weekday:"long",day:"numeric",month:"long",year:"numeric"}){return De(e).toLocaleDateString("es-ES",a)}function ve(e){const a=De(e).getDay();return L(e,-((a+6)%7))}function ms(e){const a=De(e);return[b(new Date(a.getFullYear(),a.getMonth(),1)),b(new Date(a.getFullYear(),a.getMonth()+1,0))]}function je(e,a){const t=De(e);return b(new Date(t.getFullYear(),t.getMonth()+a,1))}function fo(e){const[a,t]=ms(e),s=L(a,-((De(a).getDay()+6)%7)),o=Math.ceil((Y(s,t)+1)/7)*7;return Array.from({length:o},(n,r)=>({date:L(s,r),inMonth:L(s,r).slice(0,7)===e.slice(0,7)}))}const q=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e);function W(e){const a=e.filter(t=>Number.isFinite(t));return a.length?a.reduce((t,s)=>t+s,0)/a.length:0}function te(e,a,t){return e.filter(s=>s.date>=a&&s.date<=t).sort((s,o)=>s.date.localeCompare(o.date))}function hs(e){let a=0,t=0,s;for(const o of[...new Set(e.map(n=>n.date))].sort())t=s&&Y(s,o)===1?t+1:1,a=Math.max(a,t),s=o;return a}function gs(e,a=b()){const t=new Set(e.map(n=>n.date));let s=t.has(a)?a:L(a,-1),o=0;for(;t.has(s);)o++,s=L(s,-1);return o}function ke(e){const a=[e.bestOfDay,e.differentToday,e.generalDay,e.tomorrow,...e.gratitude||[],...Object.values(e.parts||{})].join(" ").trim();return a?a.split(/\s+/).length:0}function vo(e){return e.reduce((a,t)=>a+ke(t),0)}function Pt(e,a){return e.filter(t=>t.habits?.[a]).length}function bs(e,a){return[...new Set(e.filter(t=>t.habits?.[a]).map(t=>t.date))].sort()}function fs(e,a){const t=bs(e,a);let s=0,o=0,n;for(const r of t)o=n&&Y(n,r)===1?o+1:1,s=Math.max(s,o),n=r;return s}function Ta(e,a,t=b()){const s=new Set(bs(e,a));if(!s.size)return 0;let o=s.has(t)?t:L(t,-1),n=0;for(;s.has(o);)n++,o=L(o,-1);return n}function vs(e,a,t=28,s=b()){const o=L(s,1-t),n=e.filter(p=>p.habits?.[a]&&p.date>=o&&p.date<=s).length,r=e.filter(p=>p.date>=o&&p.date<=s).length,i=Math.min(t,Y(o,s)+1);return{done:n,tracked:r,window:i,pct:i?Math.round(n/i*100):0}}function yo(e,a,t=28,s=b(),o=b()){const n=Array.from({length:t},(i,p)=>L(s,p-t+1)),r=new Map(e.map(i=>[i.date,i]));return{dates:n,rows:a.map(i=>({habit:i,cells:n.map(p=>({date:p,done:!!r.get(p)?.habits?.[i.id],future:p>o,recorded:r.has(p)}))}))}}function Ft(e){const a=new Map;for(const t of e)for(const s of t.tags||[])a.set(s,(a.get(s)||0)+1);return[...a.entries()].sort((t,s)=>s[1]-t[1])}function qe(e){const a=[...e].sort((s,o)=>s.date.localeCompare(o.date)),t=s=>a.reduce((o,n)=>!o||n[s]>o[s]?n:o,null);return{count:e.length,mood:W(e.map(s=>s.mood)),energy:W(e.map(s=>s.energy)),stress:W(e.map(s=>s.stress)),sleep:W(e.map(s=>s.sleepHours)),study:W(e.map(s=>s.studyHours)),totalSleep:e.reduce((s,o)=>s+o.sleepHours,0),totalStudy:e.reduce((s,o)=>s+o.studyHours,0),words:vo(e),best:t("mood"),worst:a.reduce((s,o)=>!s||o.mood<s.mood?o:s,null),mostStudy:t("studyHours"),mostSleep:t("sleepHours"),maxStreak:hs(e),moods:[1,2,3,4,5].map(s=>e.filter(o=>o.mood===s).length),counters:Object.fromEntries(Object.keys(e.reduce((s,o)=>{for(const n of Object.keys(o.counters||{}))s[n]=1;return s},{})).map(s=>[s,{total:e.reduce((o,n)=>o+(n.counters?.[s]||0),0),average:W(e.map(o=>o.counters?.[s]))}]))}}function ys(e){return e<6?"Has dormido poco.":e<7?"Una cantidad algo baja.":e<=9?"Un descanso razonable.":"Has dormido bastante."}function $o(e){return e===0?"Hoy no has dedicado tiempo al estudio.":e<1?"Has hecho un poco de estudio.":e<3?"Has tenido una sesión de estudio considerable.":e<5?"Has dedicado bastante tiempo.":"Ha sido un día de estudio intenso."}function Ha(e,a,t=null){if(t&&!t.builtin)return wo(t,a);switch(e){case"water":return a===0?"Sin registrar agua hoy.":a<4?"Poca agua registrada.":a<8?"Una hidratación razonable.":"Buen nivel de hidratación.";case"exercise":return a===0?"Sin ejercicio registrado hoy.":a<20?"Un poco de movimiento.":a<60?"Una sesión de ejercicio notable.":"Un día muy activo.";case"reading":return a===0?"Sin lectura registrada hoy.":a<20?"Unas páginas para hoy.":a<60?"Una buena sesión de lectura.":"Un día de mucha lectura.";default:return a===0?"Sin pausa consciente registrada.":a<10?"Un momento de pausa.":a<30?"Una práctica considerable.":"Una práctica muy constante hoy."}}function wo(e,a){const t=e.unit?` ${e.unit}`:"",s=Number(e.goal)||0;return a?s&&a>=s?`Meta cumplida: ${a} de ${s}${t}.`:s?`Vas a ${a} de ${s}${t}.`:`${a}${t} hoy.`:"Sin registrar hoy."}const So=["","Hoy ha sido un día difícil.","Hoy ha sido un día flojo.","Hoy ha sido un día normal.","Hoy ha sido un día bueno.","Hoy ha sido un día genial."];function xo(e){const a=[So[e.mood],`Has dormido ${q(e.sleepHours)} horas y has dedicado ${q(e.studyHours)} horas al estudio.`,ys(e.sleepHours),$o(e.studyHours)];e.energy&&a.push(`Tu energía se ha sentido ${["","muy baja","baja","normal","alta","muy alta"][e.energy].toLowerCase()}.`),e.stress&&a.push(`El estrés ha sido ${["","muy bajo","bajo","normal","alto","muy alto"][e.stress].toLowerCase()}.`);const t=Object.values(e.habits||{}).filter(Boolean).length;t&&a.push(`Has cumplido ${t} de tus hábitos de hoy.`);const s=e.counters?.water||0;return s>=6&&a.push(`Además, has bebido ${s} vasos de agua.`),a.join(" ")}function ko(e,a=!1){if(!e.count)return"Aún no hay entradas en este período.";const t=a?`Durante este mes has registrado ${e.count} ${e.count===1?"día":"días"}. Tu valoración media ha sido de ${q(e.mood)}/5. Has estudiado un total de ${q(e.totalStudy)} horas y tu media de sueño ha sido de ${q(e.sleep)} horas.`:`Esta semana has registrado ${e.count} ${e.count===1?"día":"días"}. Tu estado medio ha sido ${["","difícil","flojo","normal","bueno","genial"][Math.round(e.mood)]}. Has dormido una media de ${q(e.sleep)} horas y estudiado ${q(e.study)} horas por día registrado.`,s=[];return Number.isFinite(e.energy)&&s.push(`Tu energía media ha sido ${q(e.energy)}/5`),Number.isFinite(e.stress)&&s.push(`el estrés medio ${q(e.stress)}/5`),e.words&&s.push(`has escrito ${q(e.words)} palabras`),s.length?`${t} ${s.join(", ")}.`:t}function qo(e,a=b()){const t=te(e,L(a,-6),a),s=te(e,L(a,-13),L(a,-7)),o=[];if(t.length>=3&&s.length>=3){const u=qe(t),g=qe(s);u.sleep<g.sleep-.3&&o.push("Tu cantidad media de sueño ha disminuido respecto a los 7 días anteriores."),u.sleep>g.sleep+.3&&o.push("En tus registros, has dormido más que en los 7 días anteriores."),u.study>g.study+.3&&o.push("Has aumentado tus horas medias de estudio respecto a los 7 días anteriores."),u.study<g.study-.3&&o.push("Tu tiempo medio de estudio ha disminuido respecto a los 7 días anteriores."),u.mood>g.mood+.2&&o.push("Tu valoración diaria ha mejorado recientemente."),u.mood<g.mood-.2&&o.push("Tu valoración diaria ha bajado respecto a los 7 días anteriores."),Number.isFinite(u.energy)&&Number.isFinite(g.energy)&&(u.energy>g.energy+.2&&o.push("Se observa una tendencia al alza en tu energía."),u.energy<g.energy-.2&&o.push("Tu energía media ha bajado respecto a la semana anterior.")),Number.isFinite(u.stress)&&Number.isFinite(g.stress)&&u.stress>g.stress+.2&&o.push("Tu estrés medio ha subido respecto a la semana anterior. Quizá convenga cuidar tus ratos de pausa."),o.length||o.push("Tus medias se han mantenido bastante estables respecto a los 7 días anteriores.")}const n=te(e,L(a,-29),a),r=n.filter(u=>u.sleepHours>7),i=n.filter(u=>u.sleepHours<=7);r.length>=3&&i.length>=3&&W(r.map(u=>u.mood))>W(i.map(u=>u.mood))+.3&&o.push("En tus registros de los últimos 30 días, dormir más de 7 horas parece coincidir con una valoración más alta. Es una relación entre registros, no una causa demostrada.");const p=n.filter(u=>(u.counters?.exercise||0)>=20),c=n.filter(u=>(u.counters?.exercise||0)<20);return p.length>=3&&c.length>=3&&W(p.map(u=>u.mood))>W(c.map(u=>u.mood))+.3&&o.push("En tus registros, los días con 20 minutos o más de ejercicio suelen tener una valoración algo más alta. Parece coincidir, sin más."),o}const Ne=29.530588853,Mo="2000-01-06",Bt=2.5,Ma=[{id:"shore",label:"A la orilla",desc:"Muy cerca: vuelve en cuanto suba la marea.",min:2,max:7,chance:.94,miles:9,reach:"se ve desde la arena"},{id:"breeze",label:"Brisa costera",desc:"Un par de semanas dando tumbos por la bahía.",min:9,max:28,chance:.8,miles:17,reach:"cruza la bahía"},{id:"current",label:"Corriente del norte",desc:"Semanas de travesía; ya no se ve desde la playa.",min:28,max:80,chance:.63,miles:34,reach:"dobló el cabo"},{id:"deep",label:"Alta mar",desc:"Meses lejos. Puede que no vuelva nunca.",min:80,max:240,chance:.42,miles:58,reach:"más allá del mapa"}],Eo=["la corriente del Golfo","el Noroeste","los Alisios","la deriva de Levante","el canal viejo","la corriente fría","el remolino de poniente","la resaca del faro"],Ea=[{id:"amber",name:"ámbar",hex:"#B4762E"},{id:"green",name:"verde botella",hex:"#3E6B4F"},{id:"blue",name:"azul cobalto",hex:"#3B5F86"},{id:"smoke",name:"humo",hex:"#6E6257"},{id:"rose",name:"rosa viejo",hex:"#A65B4E"},{id:"clear",name:"cristal",hex:"#7F8E93"}],zt={near:["aún se divisa desde la orilla","rebota en la rompiente, perezosa","a un par de brazas de la arena"],mid:["cruza la bahía con la marea","dobló el cabo al atardecer","navega entre barcos que no se detienen","persigue una bandada de gaviotas"],far:["en aguas que ya no consultas","se perdió de vista hace días","anda más lejos que tu última carta","viaja con los barcos lentos"],home:["la rompiente la devolvió a tu playa","apareció entre las algas al amanecer","el mar te la dejó en los pies","volvió, con la arena pegada al cristal"],lost:["se hundió despacio, sin testigos","el mar se la quedó para siempre","se fue a pique antes de tocar tierra","nadie la vio llegar a ninguna orilla"]};function ut(e=""){let a=2166136261;const t=String(e);for(let s=0;s<t.length;s++)a^=t.charCodeAt(s),a=Math.imul(a,16777619);return a>>>0}function $s(e=0){let a=e>>>0;return()=>{a=a+1831565813>>>0;let t=Math.imul(a^a>>>15,1|a);return t=t+Math.imul(t^t>>>7,61|t)^t>>>0,((t^t>>>14)>>>0)/4294967296}}const Je=(e,a)=>(e%a+a)%a,Rt=(e,a)=>e[Math.floor(a()*e.length)%e.length],Ao=["luna nueva","luna creciente","cuarto creciente","gibosa creciente","luna llena","gibosa menguante","cuarto menguante","luna menguante"],Ie=e=>Math.min(1,Math.max(0,e));function Lo(e=b()){return Je(Y(Mo,e)+.765,Ne)}function pt(e=b()){const a=Lo(e),t=Ne/2,s=Math.min(Je(a,t),t-Je(a,t)),o=a<t;let n="swell",r="Marea en movimiento",i=.6;s<=Bt?(n="spring",r="Marea viva",i=1):Math.abs(Je(a,t)-t/2)<=Bt?(n="neap",r="Marea muerta",i=.28):o?(n="rising",r="Marea creciente",i=.7):(n="falling",r="Marea menguante",i=.5);const p=Ie((1-Math.cos(2*Math.PI*a/Ne))/2),c=Ao[Math.floor(Je(a+Ne/16,Ne)/(Ne/8))%8];return{age:a,key:n,name:r,strength:i,rising:o,illum:p,moon:Math.round(p*100)/100,phase:c}}function Do(e=b()){return pt(e).key==="spring"}function Co(e,a=16){for(let t=0;t<=a;t++){const s=L(e,t);if(Do(s))return s}return e}const ba=[{id:"calm",label:"mar en calma",short:"calma",desc:"Agua plana: la botella avanza despacio, pero no se pierde de vista.",speed:.82,push:0,water:.34,rough:0},{id:"haze",label:"bruma",short:"bruma",desc:"Niebla espesa: se pierde la referencia de la orilla algún día más.",speed:.92,push:1,water:.3,rough:.25},{id:"wind",label:"viento a favor",short:"viento",desc:"Sopla hacia fuera y hacia casa: la travesía se acelera.",speed:1.24,push:0,water:.58,rough:.5},{id:"rain",label:"lluvia",short:"lluvia",desc:"Llueve sobre el agua: corrientes revueltas, llegadas inciertas.",speed:1.05,push:1,water:.66,rough:.62},{id:"gale",label:"temporal",short:"temporal",desc:"Con este mar no entra nada en la bahía: la botella espera fuera.",speed:1.42,push:2,water:.92,rough:1}],Ka=[{id:"levante",label:"levante"},{id:"poniente",label:"poniente"},{id:"noroeste",label:"el noroeste"},{id:"gallego",label:"el gallego"},{id:"suroeste",label:"suroeste"},{id:"mistral",label:"el mistral"},{id:"libeccio",label:"libeccio"},{id:"gregal",label:"gregal"}],Gt=new Set(["levante","el mistral","gregal","suroeste"]);function ws(e=b()){const a=$s(ut(`parte|${e}`)),t=a(),s=a(),o=a(),n=Math.min(ba.length-1,Math.floor(Math.pow(t,1.7)*ba.length)),r=ba[n],i=Ka[Math.floor(s*Ka.length)%Ka.length],p=Math.round(4+o*12+r.rough*38),c=pt(e);return{date:e,weather:r,wind:{...i,kmh:p,offshore:Gt.has(i.id)},level:Ie(r.water*.7+c.strength*.42),rough:Ie(r.rough*.72+(c.strength-.5)*.4),speed:r.speed,push:Gt.has(i.id)?r.push+1:r.push,tide:c}}function jo(e){return Ie(.05+Ie(e)*.86)}function mt(e="breeze"){return Ma.find(a=>a.id===e)||Ma.find(a=>a.id==="breeze")}function To({text:e="",castAt:a=b(),sea:t="breeze",id:s=""}={}){const o=mt(t),n=$s(ut(`${a}|${o.id}|${s}|${String(e).trim().slice(0,220)}`)),r=n(),i=n(),p=n(),c=n(),u=ws(a),g=Math.max(1,Math.round(o.min+r*(o.max-o.min))),S=i<o.chance,M=Math.max(4,Math.round(o.miles*(.7+p*.6)*u.speed)),f=L(a,g),E=u.push>0?L(f,u.push):f,P=S?Co(E):f,R=Math.max(3,Math.round(g*.22));return{sea:o.id,returns:S,speed:M,driftDays:Math.max(1,Y(a,P)),arriveOn:P,lostOn:S?null:L(a,g+R),current:Rt(Eo,n),glass:Rt(Ea,n),mottoSeed:Math.floor(c*1e6),weather:u.weather.id,wind:u.wind.label,windSpeed:u.wind.kmh,push:u.push}}function Ho(e,a=b()){return Math.max(0,Y(e.castAt,a))}function Na(e,a=b()){return e.status&&e.status!=="drifting"?e.status:e.returns?a>=(e.arriveOn||e.castAt)?"returned":"drifting":e.lostOn&&a>=e.lostOn?"lost":"drifting"}function No(e,a=b()){if(!e||typeof e!="object")return e;const t=Na(e,a);if(t===e.status)return e;const s=new Date().toISOString();return t==="returned"?{...e,status:"returned",returnedAt:e.arriveOn||b(),seen:!1,updatedAt:s}:t==="lost"?{...e,status:"lost",lostAt:e.lostOn||b(),seen:!1,updatedAt:s}:e}function Oo(e){return!e.returns&&e.lostOn?e.lostOn:e.arriveOn||e.castAt}function Oa(e,a=b()){const t=Oo(e),s=Math.max(1,Y(e.castAt,t)),o=Ho(e,a),n=Na(e,a),r=n==="drifting"?Ie(o/s):1,i=Math.round(o*(e.speed||10)),p=n==="drifting"&&!e.returns?null:Math.max(0,s-o)*(e.speed||10);return{fate:n,pct:r,atSea:o,total:s,horizon:t,miles:i,milesHome:p===null?null:Math.round(p),label:n==="drifting"?`día ${o} de ${s}`:n==="returned"?"de vuelta a casa":"a pique",phase:n==="returned"?"home":n==="lost"?"lost":r<.18?"near":r<.62?"mid":"far"}}function ht(e,a=b()){const{phase:t}=Oa(e,a),s=zt[t]||zt.mid,o=ut(`${e.id||""}|${e.mottoSeed||0}|${t}`);return s[o%s.length]}function Pa(e=[],a=b()){const t={drifting:[],returned:[],lost:[],kept:[]};for(const s of e)t[Na(s,a)]?.push(s);t.kept=e.filter(s=>s.kept),t.drifting.sort((s,o)=>s.castAt.localeCompare(o.castAt));for(const s of["returned","lost"])t[s].sort((o,n)=>String(n.returnedAt||n.lostAt||n.castAt).localeCompare(String(o.returnedAt||o.lostAt||o.castAt)));return t.returned.sort((s,o)=>(s.seen===!0)-(o.seen===!0)||String(o.returnedAt||"").localeCompare(String(s.returnedAt||""))),t.kept.sort((s,o)=>String(o.keptOn||"").localeCompare(String(s.keptOn||""))),t}function Fa(e=[],a=b()){return e.filter(t=>Na(t,a)==="returned")}function Po(e=""){const a=String(e||"").trim();return a?a.split(/\s+/).length:0}const gt="diario.entries.v1",bt="diario.habits.v1",ft="diario.setup.v1",Ba="diario.thoughts.v1",_={completed:!1,name:"",age:null,ageGroup:"young",interests:[],ritual:"night",tone:"warm",savedQuotes:[],purpose:"calm",motto:"Un día a la vez.",theme:"paper",sleepGoal:7.5,studyGoal:2,waterGoal:8,showDailyWord:!0,showDailyTip:!0,crisisAlertsEnabled:!0,trustedContactName:"",trustedContactPhone:"",sidebarCollapsed:!1,counters:[],parts:[],updatedAt:null};function za(e,a="young"){const t=Number(e);return!Number.isFinite(t)||t<=0?a:t<=18?"teen":t<=26?"young":t<=49?"adult":"senior"}function ye(e,a){if(typeof e!="string")throw new Error(`${a} debe ser texto.`);if(e.length>2e4)throw new Error(`${a} debe tener como máximo 20.000 caracteres.`);return e}function Fo(e,a){const t=ca.find(i=>i.key===a);if(e==null||e==="")return 0;const s=Number(e),o=t?.min??0,n=t?.max??99999,r=t?.label??a;if(!Number.isFinite(s)||s<o||s>n)throw new Error(`${r} debe estar entre ${o} y ${n}.`);return Math.round(s*10)/10}const Ss=/^[\w-]{1,24}$/;function It(e){if(e==null||e==="")return null;const a=Number(e);if(!Number.isInteger(a)||a<1||a>5)throw new Error("Las escalas van de 1 a 5.");return a}function Bo(e){const a={};if(e==null)return a;if(typeof e!="object"||Array.isArray(e))throw new Error("Las partes del diario no son válidas.");for(const[t,s]of Object.entries(e)){if(!Ss.test(t))continue;if(typeof s!="string")throw new Error(`La parte «${t}» debe ser texto.`);const o=s.trim();if(o){if(o.length>4e3)throw new Error("Cada parte del diario admite como máximo 4.000 caracteres.");if(a[t]=o,Object.keys(a).length>=Se)break}}return a}function Ra(e){if(!e||typeof e!="object"||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(new Date(e.date+"T12:00:00").getTime())||b(new Date(e.date+"T12:00:00"))!==e.date)throw new Error("Hay una fecha no válida.");if(e.date>b())throw new Error("No se pueden registrar días futuros.");if(!Number.isInteger(e.mood)||e.mood<1||e.mood>5)throw new Error("Selecciona cómo te ha ido el día.");for(const r of["sleepHours","studyHours"]){const i=e[r];if(typeof i!="number"||!Number.isFinite(i)||i<0||i>24)throw new Error("Las horas deben estar entre 0 y 24.")}const a=Object.fromEntries(mo.map(r=>[r,ye(e[r]??"",r)]));if(!a.generalDay.trim())throw new Error("Escribe cómo ha ido tu día en general.");const t=ye(e.capsule??"","La cápsula del día").slice(0,300);if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(r=>typeof r!="string"||r.length>2e4))throw new Error("El agradecimiento debe tener tres campos de texto.");if(e.goals!==void 0&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(r=>typeof r!="string"||r.length>500)))throw new Error("La lista de objetivos no es válida.");const s=Array.isArray(e.tags)?e.tags:[];if(s.length>20)throw new Error("Puedes elegir como máximo 20 etiquetas.");for(const r of s)if(typeof r!="string"||!r.trim()||r.length>40)throw new Error("Hay una etiqueta no válida.");const o={};for(const r of ca)o[r.key]=Fo(e.counters?.[r.key],r.key);for(const r of Object.keys(e.counters||{})){if(!Ss.test(r)||r in o)continue;const i=Number(e.counters[r]);Number.isFinite(i)&&i>=0&&i<=99999&&(o[r]=Math.round(i*10)/10)}if(Object.keys(o).length>xe)throw new Error(`No puedes tener más de ${xe} contadores.`);const n={};if(e.habits!==void 0&&(typeof e.habits!="object"||e.habits===null||Array.isArray(e.habits)))throw new Error("Los hábitos no son válidos.");for(const[r,i]of Object.entries(e.habits||{}))typeof r=="string"&&r.length<=60&&(n[r]=i===!0);return{id:typeof e.id=="string"?e.id:crypto.randomUUID(),date:e.date,mood:e.mood,sleepHours:e.sleepHours,studyHours:e.studyHours,energy:It(e.energy),stress:It(e.stress),...a,capsule:t,gratitude:e.gratitude.map(r=>ye(r??"","El agradecimiento")),goals:(e.goals||[]).map(r=>ye(r,"Un objetivo")),tags:[...new Set(s.map(r=>r.trim()))],counters:o,parts:Bo(e.parts),habits:n,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function vt(e){const a=e.map(Ra).sort((t,s)=>t.date.localeCompare(s.date));return a.map(t=>({...t,dayNumber:ua(t.date,a)}))}function Ga(){const e=localStorage.getItem(gt);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se han podido leer tus entradas.");return vt(a)}function yt(e){const a=vt(e);return localStorage.setItem(gt,JSON.stringify(a)),a}function xs(e){const a=Ra(e);a.updatedAt=new Date().toISOString();const t=Ga();return yt([...t.filter(s=>s.date!==a.date),a])}function zo(e){return yt(Ga().filter(a=>a.date!==e))}function Ro(){localStorage.removeItem(gt),localStorage.removeItem(bt),localStorage.removeItem(ft),localStorage.removeItem(Ba)}function _e(e){if(!e||typeof e!="object")throw new Error("Hábito no válido.");const a=ye(e.name??"","El nombre del hábito").trim();if(!a)throw new Error("El hábito necesita un nombre.");if(a.length>40)throw new Error("El nombre del hábito debe tener 40 caracteres o menos.");return{id:typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),name:a,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString()}}function pa(){const e=localStorage.getItem(bt);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se han podido leer tus hábitos.");return a.map(_e)}function $t(e){const a=e.map(_e);return localStorage.setItem(bt,JSON.stringify(a)),a}function Aa(e){const a=_e(e),t=pa();return $t([...t.filter(s=>s.id!==a.id),a])}function Go(e){return $t(pa().filter(a=>a.id!==e))}const Io=new Set(Ma.map(e=>e.id)),Uo=new Set(ba.map(e=>e.id)),_o=new Set(Ea.map(e=>e.id)),Wo=new Set(["drifting","returned","lost"]);function Te(e){return typeof e=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e)}function We(e){if(!e||typeof e!="object")throw new Error("El pensamiento no es válido.");const a=ye(e.text??"","El pensamiento").trim().slice(0,1200);if(!a)throw new Error("Escribe un pensamiento antes de echar la botella al mar.");const t=Te(e.castAt)&&e.castAt<=b()?e.castAt:b(),s=Io.has(e.sea)?e.sea:"breeze",o=Number.isInteger(e.mood)&&e.mood>=1&&e.mood<=5?e.mood:null,n=typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),r=Number.isInteger(e.driftDays)&&Te(e.arriveOn)?{returns:e.returns===!0,speed:Number.isFinite(e.speed)?Math.max(1,Math.round(e.speed)):10,driftDays:Math.max(1,e.driftDays),arriveOn:e.arriveOn,lostOn:Te(e.lostOn)?e.lostOn:null,current:typeof e.current=="string"?e.current.slice(0,60):"",mottoSeed:Number.isFinite(e.mottoSeed)?Math.round(e.mottoSeed):0,weather:Uo.has(e.weather)?e.weather:null,wind:typeof e.wind=="string"?e.wind.slice(0,24):"",windSpeed:Number.isFinite(e.windSpeed)?Math.max(0,Math.round(e.windSpeed)):null,push:Number.isInteger(e.push)?Math.max(0,Math.min(4,e.push)):0}:To({text:a,castAt:t,sea:s,id:n});return{id:n,text:a,castAt:t,mood:o,sea:s,...r,status:Wo.has(e.status)?e.status:"drifting",glass:_o.has(e.glass)?e.glass:"amber",returnedAt:Te(e.returnedAt)?e.returnedAt:null,lostAt:Te(e.lostAt)?e.lostAt:null,reply:ye(e.reply??"","La respuesta").trim().slice(0,1200),kept:!!e.kept,keptOn:Te(e.keptOn)?e.keptOn:null,seen:e.seen===!0,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function Ia(e){const a=b(),t=e.map(We).map(s=>s.castAt>a?{...s,castAt:a}:s).sort((s,o)=>s.castAt.localeCompare(o.castAt)||s.id.localeCompare(o.id));return localStorage.setItem(Ba,JSON.stringify(t)),he()}function Qo(e){const a=b();let t=!1;const s=e.map(o=>{const n=No(o,a);return n!==o&&(t=!0),n});return t&&localStorage.setItem(Ba,JSON.stringify(s)),s}function he(){const e=localStorage.getItem(Ba);if(!e)return[];const a=JSON.parse(e);if(!Array.isArray(a))throw new Error("No se ha podido leer tu mar de pensamientos.");return Qo(a.map(We))}function ks(e){const a=he().find(o=>o.id===e?.id)||null,t=a?Object.fromEntries(["sea","returns","speed","driftDays","arriveOn","lostOn","current","glass","mottoSeed","status"].map(o=>[o,a[o]])):{},s=We({...a,...e,...t,updatedAt:new Date().toISOString()});return Ia([...he().filter(o=>o.id!==s.id),s])}function $e(e,a={}){const t=he();return Ia(t.map(s=>s.id===e?{...s,...a,updatedAt:new Date().toISOString()}:s))}function Vo(e){return Ia(he().filter(a=>a.id!==e))}function qs(e){return $e(e,{status:"drifting",castAt:b(),driftDays:null,arriveOn:null,lostOn:null,returnedAt:null,lostAt:null,seen:!1,reply:"",kept:!1,keptOn:null})}function Ua(e={}){const a=e&&typeof e=="object"?e:{},t=new Set(V.map(f=>f.id)),s=new Set(ho.map(f=>f.id)),o=new Set(sa.map(f=>f.id)),n=new Set(ja.map(f=>f.id)),r=new Set(oa.map(f=>f.id)),i=new Set(na.map(f=>f.id)),p=(f,E,P,R)=>{const U=Number(f);return Number.isFinite(U)?Math.min(P,Math.max(E,Math.round(U*10)/10)):R};let c=null;if(a.age!==void 0&&a.age!==null&&a.age!==""){const f=Math.round(Number(a.age));Number.isFinite(f)&&f>=8&&f<=115&&(c=f)}const u=o.has(a.ageGroup)?a.ageGroup:_.ageGroup,g=c!==null?za(c,u):u,S=Array.isArray(a.interests)?[...new Set(a.interests.filter(f=>n.has(f)))]:[],M=Array.isArray(a.savedQuotes)?[...new Set(a.savedQuotes.filter(f=>typeof f=="string"&&f.trim().length>0).map(f=>f.trim().slice(0,260)))].slice(0,40):[];return{completed:!!a.completed,name:String(a.name??"").trim().slice(0,50),age:c,ageGroup:g,interests:S,ritual:r.has(a.ritual)?a.ritual:_.ritual,tone:i.has(a.tone)?a.tone:_.tone,savedQuotes:M,purpose:s.has(a.purpose)?a.purpose:_.purpose,motto:String(a.motto??_.motto).trim().slice(0,140)||_.motto,theme:t.has(a.theme)?a.theme:_.theme,sleepGoal:p(a.sleepGoal,4,14,_.sleepGoal),studyGoal:p(a.studyGoal,0,16,_.studyGoal),waterGoal:p(a.waterGoal,1,25,_.waterGoal),showDailyWord:a.showDailyWord===void 0?!0:!!a.showDailyWord,showDailyTip:a.showDailyTip===void 0?!0:!!a.showDailyTip,crisisAlertsEnabled:a.crisisAlertsEnabled===void 0?!0:!!a.crisisAlertsEnabled,trustedContactName:String(a.trustedContactName??"").trim().slice(0,60),trustedContactPhone:String(a.trustedContactPhone??"").trim().slice(0,30),sidebarCollapsed:!!a.sidebarCollapsed,counters:ne(a).slice(0,xe),parts:K(a).slice(0,Se),updatedAt:typeof a.updatedAt=="string"?a.updatedAt:new Date().toISOString()}}function _a(){const e=localStorage.getItem(ft);if(!e)return{..._};try{const a=JSON.parse(e);return Ua(a)}catch{return{..._}}}function re(e={}){const a=_a(),t=Ua({...a,...e,updatedAt:new Date().toISOString()});return localStorage.setItem(ft,JSON.stringify(t)),t}function Zo(e,a=pa(),t=_a(),s=he()){return JSON.stringify({app:"diario",version:1,exportedAt:new Date().toISOString(),entries:vt(e),habits:a.map(_e),thoughts:s.map(We),setup:Ua(t)},null,2)}function Yo(e){let a;try{a=JSON.parse(e)}catch{throw new Error("El archivo no es una copia JSON válida.")}if(!a||typeof a!="object"||a.version!==1||!Array.isArray(a.entries))throw new Error("Selecciona una copia JSON de Diario (versión 1).");const t=a.entries.map(Ra);if(new Set(t.map(r=>r.date)).size!==t.length)throw new Error("La copia contiene fechas duplicadas.");const s=Array.isArray(a.habits)?a.habits.map(_e):[],o=Array.isArray(a.thoughts)?a.thoughts.map(We):[],n=a.setup?Ua(a.setup):null;return{entries:t,habits:s,thoughts:o,setup:n}}function Jo(e){const a=Ga(),t=new Map(a.map(n=>[n.date,n]));for(const n of e.entries)t.set(n.date,Ra(n));const s=new Map(pa().map(n=>[n.id,n]));for(const n of e.habits)s.set(n.id,_e(n));$t([...s.values()]);const o=new Map(he().map(n=>[n.id,n]));for(const n of e.thoughts||[])o.set(n.id,We(n));return Ia([...o.values()]),e.setup&&re(e.setup),yt([...t.values()])}function Ko(e=""){return String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim()}function ge(e="paper",a={}){const t=V.find(c=>c.id===e)||V[0],{bg:s,page:o,accent:n,ink:r}=t.favicon||{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"},i=String(a?.name||"").trim().slice(0,1).toUpperCase(),p=i?`<text x="36" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="18" fill="${r}">${i.replace(/[<>&"']/g,"")}</text>`:`<path d="M29 29h14M29 36h10" stroke="${r}" stroke-width="2.6" stroke-linecap="round"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="16" fill="${s}"/>
    <rect x="14" y="11" width="38" height="42" rx="5" fill="${o}"/>
    <rect x="14" y="11" width="7" height="42" rx="2" fill="${n}"/>
    <path d="M41 11v12l-4-3-4 3V11" fill="${n}"/>
    ${p}
    <circle cx="46" cy="46" r="3" fill="${n}"/>
  </svg>`.replace(/\s+/g," ").trim()}function Xo(e="paper",a={}){const t=ge(e,a);return`data:image/svg+xml;utf8,${encodeURIComponent(t)}`}const en=[{label:"suicidio",regex:/\b(suicid(io|arme|arse|a)|conducta suicida)\b/},{label:"quitarme la vida",regex:/\b(quitar(me|se) la vida|acabar con mi vida|terminar con mi vida)\b/},{label:"no quiero vivir",regex:/\b(no quiero (seguir viviendo|vivir)|no merece la pena vivir|no vale la pena vivir)\b/},{label:"quiero morir",regex:/\b(quiero morir(me)?|me quiero morir|deseo morir(me)?|prefiero estar muert[oa]|mejor muert[oa])\b/},{label:"autolesión",regex:/\b(autolesion(arme|arse|es)?|hacerme dano|hacerme sangre|cortarme las venas|cortarme el brazo|cortarme la piel)\b/},{label:"acabar con todo",regex:/\b(acabar con todo para siempre|desaparecer para siempre|ojala no despertar|no despertar manana|matarme|tirarme (por la ventana|al tren|desde un puente)|sobredosis)\b/}];function an(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"){const a=Array.isArray(e.gratitude)?e.gratitude.join(" "):"",t=Array.isArray(e.goals)?e.goals.join(" "):"",s=Array.isArray(e.tags)?e.tags.join(" "):"";return[e.bestOfDay,e.differentToday,e.generalDay,e.wordOfDay,e.capsule,e.tomorrow,a,t,s].filter(Boolean).join(" ")}return""}function B(e={}){const a=e?.age?za(e.age,e.ageGroup||"young"):e?.ageGroup||"young",t=sa.find(E=>E.id===a)||sa[1],s=Array.isArray(e?.interests)?e.interests:[],o=ja.filter(E=>s.includes(E.id)),n=oa.find(E=>E.id===e?.ritual)||oa[0],r=na.find(E=>E.id===e?.tone)||na[0];let i=t.focusLabel,p=t.focusQuestion;s.includes("study")?(i="Estudio",p="Tiempo de estudio o repaso"):s.includes("projects")&&t.id!=="teen"&&(i="Proyectos y enfoque",p="Tiempo dedicado a tus proyectos");const c=[...new Set([...o.map(E=>E.habit),...t.habits,...go])].slice(0,8),u=[...new Set([...o.map(E=>E.tag),...t.tags,...lo])].slice(0,12),g=Number.isFinite(Number(e?.age))&&Number(e.age)>0&&Number(e.age)<18;let S="Nota al margen (canción, lectura, lugar...)",M="Una canción, un libro, una película o un detalle que quieras recordar...";s.includes("music")?(S="Canción, película o escena del día",M="¿Qué has escuchado o visto hoy?"):s.includes("reading")?(S="Lectura o cita del día",M="Un libro que estés leyendo o una frase que te haya gustado..."):s.includes("gaming")&&(S="Partida, serie o tema del día",M="A qué has jugado hoy o qué serie estás viendo...");const f=["water"];return(s.includes("sport")||s.includes("nature")||!s.length)&&f.push("exercise"),(s.includes("reading")||s.includes("study")||!s.length)&&f.push("reading"),(s.includes("calm")||!s.length)&&f.push("mindfulness"),{group:t,age:e?.age||null,isMinor:g,interests:o,ritual:n,tone:r,focusLabel:i,focusQuestion:p,capsuleLabel:S,capsulePlaceholder:M,activeCounterKeys:f,sleepRecommended:t.sleepRecommended,studyRecommended:t.studyRecommended,suggestedHabits:c,tags:u,placeholders:t.placeholders}}function wt(e){const a=an(e),t=Ko(a),s=[];if(t)for(const o of en)o.regex.test(t)&&s.push(o.label);return s.length>0?{triggered:!0,level:"high",matchedTerms:s,reason:"Si estás pasando por un momento muy difícil, no tienes por qué llevarlo a solas. El 024 es gratuito, confidencial y atiende las 24 horas."}:{triggered:!1,level:"none",matchedTerms:[],reason:""}}function ra(e=b()){const a=String(e||"").replace(/[^0-9]/g,"");let t=0;for(let s=0;s<a.length;s++)t=t*31+a.charCodeAt(s)>>>0;return t||1}function tn(e=b(),a=0){const t=(ra(e)+Math.abs(a))%Ht.length;return Ht[t]}function sn(e=b(),a=0,t={}){const o=B(t).group.id,n=new Set(t?.interests||[]),r=Nt.filter(c=>{const u=!c.ageGroups||c.ageGroups.includes(o),g=!c.interests||c.interests.some(S=>n.has(S));return u||g}),i=r.length?r:Nt,p=(ra(e)*7+Math.abs(a))%i.length;return i[p]}function on(e=b(),a=0,t={}){const o=B(t).group.id,n=t?.tone||"warm",r=new Set(t?.interests||[]),i=Array.isArray(t?.savedQuotes)?t.savedQuotes:[];if(i.length>0&&a%3===0){const M=(ra(e)+Math.abs(a))%i.length;return{text:i[M],author:t?.name?`Guardada por ${t.name}`:"De tu colección",isCustom:!0}}const p=Tt.map(M=>{let f=0;return M.tones?.includes(n)&&(f+=3),M.ageGroups?.includes(o)&&(f+=2),M.interests?.some(E=>r.has(E))&&(f+=4),{q:M,score:f}}),c=Math.max(...p.map(M=>M.score),0),u=p.filter(M=>M.score>=Math.max(2,c-2)).map(M=>M.q),g=u.length>=4?u:Tt,S=(ra(e)*5+Math.abs(a))%g.length;return g[S]}function tt(e=b(),a=0){const t=(ra(e)*13+Math.abs(a))%Ot.length;return Ot[t]}function nn(e={},a={}){const t=[],s=B(a),o=Number(a?.sleepGoal)||s.sleepRecommended||7.5,n=Number(e?.sleepHours),r=Number(e?.stress),i=Number(e?.mood);return Number.isFinite(n)&&n>0&&n<o-1.5&&t.push({icon:"moon",title:"Descanso corto",text:`Has dormido ${n} h (tu meta es ${o} h). Intenta bajar el ritmo esta tarde.`}),Number.isFinite(r)&&r>=4&&t.push({icon:"wind",title:"Día cargado",text:"Con este nivel de tensión, prioriza una sola cosa hoy y deja el resto para mañana."}),Number.isFinite(i)&&i===1&&t.push({icon:"heart",title:"Día cuesta arriba",text:"En los días pesados basta con descansar y cubrir lo básico."}),t.slice(0,2)}function rn(e=[],a={}){const t=B(a),s=Number(a?.sleepGoal)||t.sleepRecommended||7.5,o=Number(a?.studyGoal)??t.studyRecommended??2,n=Number(a?.waterGoal)||8,r=e.length;if(!r)return{total:0,sleepGoal:s,studyGoal:o,waterGoal:n,sleepMet:0,studyMet:0,waterMet:0,sleepPct:0,studyPct:0,waterPct:0,moodWhenSleepMet:null,moodWhenSleepMissed:null};const i=e.filter(g=>g.sleepHours>=s),p=e.filter(g=>g.sleepHours<s),c=e.filter(g=>g.studyHours>=o),u=e.filter(g=>(g.counters?.water||0)>=n);return{total:r,sleepGoal:s,studyGoal:o,waterGoal:n,sleepMet:i.length,studyMet:c.length,waterMet:u.length,sleepPct:Math.round(i.length/r*100),studyPct:Math.round(c.length/r*100),waterPct:Math.round(u.length/r*100),moodWhenSleepMet:i.length?q(W(i.map(g=>g.mood))):null,moodWhenSleepMissed:p.length?q(W(p.map(g=>g.mood))):null}}function ln(e="",a=new Date().getHours()){const t=String(e||"").trim(),s=t?`, ${t}`:"";return a>=5&&a<13?`Buenos días${s}`:a>=13&&a<20?`Buenas tardes${s}`:`Buenas noches${s}`}const dn={pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',week:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 9h18M8 14h8"/>',month:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9"/>',history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-5 3-7 1 2 2 3 2 3 0-3-1-4 0-6Z"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',study:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',check:'<path d="M20 6 9 17l-5-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',download:'<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3"/>',upload:'<path d="M12 15V3m0 0-4 4m4-4 4 4M4 17v3h16v-3"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 5.1-6C9.5 14.5 12 13 13 12"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',bolt:'<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',storm:'<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/><path d="m13 11-3 5h4l-2 5"/>',drop:'<path d="M12 2.7 6.4 8.3a8 8 0 1 0 11.3 0Z"/>',run:'<circle cx="15" cy="4" r="2"/><path d="m10.5 9.5-3 3L5 11m5.5-1.5 3.5 2 3 2M9 14l-2 6m5-4 3 5"/>',book:'<path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',stamp:'<path d="M5 21h14M6 17h12v2H6zM9 17v-3a3 3 0 1 1 6 0v3"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',refresh:'<path d="M21 12a9 9 0 0 0-15.4-6.4L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15.4 6.4L21 16"/><path d="M21 21v-5h-5"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5-4.5-8.6-10-8.6Z"/>',spark:'<path d="m12 3 1.9 5.8L20 10.8l-6.1 1.9L12 18.5l-1.9-5.8L4 10.8l6.1-2Z"/>',quote:'<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/>',expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',wave:'<path d="M2 9.5c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/><path d="M2 15c2 0 2 1.8 4 1.8S8 15 10 15s2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/>',tide:'<path d="M3 16.5c1.7 0 1.7 1.5 3.4 1.5s1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5 1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5"/><circle cx="17" cy="6" r="3"/><path d="M4 11c1.7 0 1.7 1.5 3.4 1.5S9.1 11 10.8 11"/>',send:'<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z"/>',anchor:'<circle cx="12" cy="5" r="2.6"/><path d="M12 7.6V21"/><path d="M8.5 10h7"/><path d="M3 14a9 9 0 0 0 18 0"/><path d="M3 14h3M18 14h3"/>',bookmark:'<path d="M6.5 3h11a1 1 0 0 1 1 1v17l-6.5-4.6L5.5 21V4a1 1 0 0 1 1-1Z"/>',reply:'<path d="M9 14 4 9l5-5"/><path d="M4 9h9.5A6.5 6.5 0 0 1 20 15.5V20"/>',seal:'<circle cx="12" cy="12" r="8"/><path d="m12 7.6 1.5 2.9 3.2.4-2.3 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.3-2.3 3.2-.4Z"/>',eye:'<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',grid:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',listChecks:'<path d="M11 6h10M11 12h10M11 18h10"/><path d="m3 6 1.6 1.6L7.2 5M3 12l1.6 1.6 2.6-2.6M3 18l1.6 1.6 2.6-2.6"/>',sail:'<path d="M3 18.5h18l-2.6 3.2H5.6Z"/><path d="M12.5 15V3.5L20 15Z"/><path d="M10.5 15 6 8.5 3.8 15Z"/>',fog:'<path d="M4 9h16M3 13h18M5 17h14"/><path d="M7 5.5c1.6-1.6 3.4-1.6 5 0"/>',rain:'<path d="M17.5 14a4 4 0 0 0-.6-7.9A5.5 5.5 0 0 0 6.3 7.4 3.8 3.8 0 0 0 7 14Z"/><path d="M9 17.5 8 20M13 17.5 12 20M17 17.5 16 20"/>',hourglass:'<path d="M7 3h10M7 21h10"/><path d="M7 3c0 4 5 5.4 5 9s-5 5-5 9M17 3c0 4-5 5.4-5 9s5 5 5 9"/>',gauge:'<path d="M12 20a8 8 0 1 1 8-8"/><path d="M12 12 16 9"/><circle cx="12" cy="12" r="1.2"/>',paper:'<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/>',splash:'<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.6 6.6l2.8 2.8M14.6 14.6l2.8 2.8M17.4 6.6l-2.8 2.8M9.4 14.6l-2.8 2.8"/>',save:'<path d="M5 4h11l3 3v13H5Z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'},d=e=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${dn[e]||""}</svg>`,l=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]);function Ms(e={},a=0){const t=B(e),s=e.name?l(e.name):"Personalizar perfil",o=e.age?`${e.age} años`:t.group.label;return`<button type="button" class="ex-libris-card" data-action="open-setup-wizard" title="Editar perfil y preferencias">
    <span class="ex-libris-icon">${ge(e.theme||"paper",e)}</span>
    <div class="ex-libris-meta">
      <strong>${s}</strong>
      <small>${l(o)} · ${a} ${a===1?"día":"días"}</small>
    </div>
  </button>`}function Ut(e,a,t,s,o,n,r){return`<div class="scale-field">
    <p class="field-title">${d(s)} ${o}</p>
    <p class="field-caption">${n}</p>
    <div class="level-scale" role="radiogroup" aria-label="${o}">
      ${[1,2,3,4,5].map(i=>`<label class="level-option">
        <input type="radio" name="${e}" value="${i}" ${t===i?"checked":""}>
        <span class="level-num">${i}</span>
        <span class="level-text">${a[i]}</span>
      </label>`).join("")}
    </div>
    <small id="${e}-hint">${t?a[t]+".":r}</small>
  </div>`}function cn(e=[],a=[]){const t=new Set(e);return`<div class="tag-picker">
    ${[...new Set([...a,...e])].map(o=>`<label class="tag-chip">
      <input type="checkbox" name="tags" value="${l(o)}" ${t.has(o)?"checked":""}>
      <span>${l(o)}</span>
    </label>`).join("")}
    <label class="tag-chip ghost">
      <span>+ Otra:</span>
      <input type="text" name="tagCustom" id="tagCustom" maxlength="24" placeholder="Escribe y pulsa Enter" aria-label="Añadir etiqueta personalizada">
    </label>
  </div>`}function un(e={},a=[],t={},s={}){const o=B(t),n=new Set(o.activeCounterKeys||["water"]),r=a.filter(c=>!c.builtin||n.has(c.key)||(Number(e?.[c.key])||0)>0),i=r.length?r:a,p=s.action?`${s.action}-`:"";return`<div class="counters-grid">${i.map(c=>{const u=Number(e?.[c.key])||0,g=ct(c,t),S=g?Math.min(100,Math.round(u/g*100)):0;return`<div class="counter-row" data-counter="${c.key}">
      <div>
        <p class="field-title">${d(c.icon)} ${c.label} ${g?`<small class="counter-goal-pill ${u>=g?"met":""}">Meta: ${u}/${g}</small>`:""}</p>
        <p class="field-caption" id="hint-${c.key}" data-counter-hint="${c.key}">${Ha(c.key,u,c)}</p>
        ${g?`<div class="counter-progress"><i style="width:${S}%"></i></div>`:""}
      </div>
      <div class="stepper">
        <button type="button" class="icon-button" data-action="${p}counter-minus" data-key="${c.key}" data-step="${c.step}" aria-label="Restar ${c.label}">${d("minus")}</button>
        <div class="stepper-value">
          <input type="number" name="counter_${c.key}" min="${c.min}" max="${c.max}" step="${c.step}" value="${u}" aria-label="${c.label}" data-counter-input="${c.key}">
          <span>${c.unit}</span>
        </div>
        <button type="button" class="icon-button" data-action="${p}counter-plus" data-key="${c.key}" data-step="${c.step}" aria-label="Sumar ${c.label}">${d("plus")}</button>
      </div>
    </div>`}).join("")}</div>`}function pn(e,a,{mini:t=!1,selected:s=b()}={}){const o=new Map(a.map(i=>[i.date,i])),n=b(),r=fo(e).map(i=>{const p=o.get(i.date),c=p?T[p.mood-1]:null,u=i.date>n,g=["calendar-day",!i.inMonth&&"outside",i.date===n&&"today",i.date===s&&"selected",p&&"recorded"].filter(Boolean).join(" "),S=`${D(i.date)}${c?`, ${c.label}`:", sin entrada"}`;return`<button type="button" class="${g}" data-action="open-day" data-date="${i.date}" ${u?"disabled":""} aria-label="${S}" style="${c?`--mood:${c.color}`:""}">
      <span>${i.day}</span>${c?'<i aria-hidden="true"></i>':""}
    </button>`}).join("");return`<div class="calendar ${t?"mini":""}">
    <div class="calendar-heading">
      <button type="button" class="icon-button ghost" data-action="month-prev" data-mini="${t?"1":"0"}" aria-label="Mes anterior">${d("left")}</button>
      <strong>${D(e,{month:"long",year:"numeric"})}</strong>
      <button type="button" class="icon-button ghost" data-action="month-next" data-mini="${t?"1":"0"}" aria-label="Mes siguiente">${d("right")}</button>
    </div>
    <div class="calendar-grid">
      ${io.map(i=>`<span class="weekday">${i}</span>`).join("")}
      ${r}
    </div>
  </div>`}function mn(e,a,t,s={}){const o=new Map(e.map(h=>[h.date,h])),n=680,r=230,i=36,p=26,c=n-i*2,u=r-p*2,g=h=>i+(t===1?c/2:h*c/(t-1)),S=h=>p+(5-h)*u/4,M=h=>p+u-Math.min(12,Math.max(0,h||0))/12*u,f=[],E=[],P=Math.max(6,Math.min(18,Math.floor(c/t)-6));for(let h=0;h<t;h++){const y=L(a,h),A=o.get(y);if(A){f.push({x:g(h),y:S(A.mood),e:A,d:y});const C=M(A.sleepHours),z=Math.max(2,p+u-C);E.push(`<rect x="${(g(h)-P/2).toFixed(1)}" y="${C.toFixed(1)}" width="${P}" height="${z.toFixed(1)}" rx="2" fill="color-mix(in srgb,var(--green) 22%,transparent)"><title>${D(y)}: ${q(A.sleepHours)} h de sueño</title></rect>`)}}const R=f.map((h,y)=>`${y?"L":"M"}${h.x.toFixed(1)},${h.y.toFixed(1)}`).join(" "),U=f.length>1?`${R} L${f[f.length-1].x.toFixed(1)},${r-p} L${f[0].x.toFixed(1)},${r-p} Z`:"",ee=s?.sleepGoal||7.5,H=M(ee);return`<div class="chart-wrap">
    <svg viewBox="0 0 ${n} ${r}" class="mood-chart" role="img" aria-label="Evolución del estado de ánimo y horas de sueño">
      <defs>
        <linearGradient id="moodAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--red)" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="var(--red)" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      ${[1,2,3,4,5].map(h=>`<line x1="${i}" x2="${n-i}" y1="${S(h)}" y2="${S(h)}" stroke="var(--rule)" stroke-dasharray="3 5"/>
      <text x="10" y="${S(h)+4}" fill="var(--ink-faint)" font-size="11" font-family="var(--font-mono)">${h}</text>`).join("")}
      <line x1="${i}" x2="${n-i}" y1="${H.toFixed(1)}" y2="${H.toFixed(1)}" stroke="var(--green)" stroke-width="1" stroke-dasharray="6 4" opacity="0.55"/>
      ${E.join("")}
      ${U?`<path class="chart-area-path" d="${U}" fill="url(#moodAreaGrad)"/>`:""}
      ${R?`<path class="chart-line-path" d="${R}" fill="none" stroke="var(--red)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`:""}
      ${f.map((h,y)=>`<g>
        <circle class="chart-dot" style="--dot-i:${y}" cx="${h.x}" cy="${h.y}" r="5.5" fill="${T[h.e.mood-1].color}" stroke="var(--paper-2)" stroke-width="2">
          <title>${D(h.d)} · ${T[h.e.mood-1].label} (${h.e.mood}/5) · ${q(h.e.sleepHours)} h sueño</title>
        </circle>
      </g>`).join("")}
    </svg>
    <div class="chart-legend-inline">
      <span><i class="legend-line"></i> Ánimo (1–5)</span>
      <span><i class="legend-bar"></i> Horas de sueño (meta: ${q(ee)} h)</span>
    </div>
  </div>`}function hn(e=[],a=b(),t=28){const s=new Map(e.map(r=>[r.date,r])),o=L(a,1-t),n=[];for(let r=0;r<t;r++){const i=L(o,r),p=s.get(i),c=p?T[p.mood-1]:null;n.push(`<button type="button" class="heatmap-cell ${p?"filled":""}" data-action="open-day" data-date="${i}" style="${c?`--mood:${c.color}`:""}" title="${D(i)}${c?`: ${c.label} (${p.mood}/5) · ${q(p.sleepHours)} h sueño`:": sin registro"}">
      <span>${i.slice(8)}</span>
      ${c?`<small>${c.emoji}</small>`:""}
    </button>`)}return`<div class="heatmap-strip">${n.join("")}</div>`}function Es(e=[],a={}){const t=rn(e,a),s=B(a);return t.total?`<section class="card personal-goals-card">
    <div class="section-heading">
      <div>
        <h2>Cumplimiento de tus metas</h2>
      </div>
      <button type="button" class="text-button" data-action="open-setup-wizard">${d("sliders")} Ajustar metas</button>
    </div>
    <div class="goals-meter-grid">
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${d("moon")} Sueño (≥ ${q(t.sleepGoal)} h)</span>
          <strong>${t.sleepPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${t.sleepPct}%;background:var(--green)"></i></div>
        <small>${t.sleepMet} de ${t.total} días cumplidos</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${d("study")} ${l(s.focusLabel)} (≥ ${q(t.studyGoal)} h)</span>
          <strong>${t.studyPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${t.studyPct}%;background:var(--red)"></i></div>
        <small>${t.studyMet} de ${t.total} días cumplidos</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${d("drop")} Agua (≥ ${t.waterGoal} vasos)</span>
          <strong>${t.waterPct}%</strong>
        </div>
        <div class="meter-track"><i style="width:${t.waterPct}%;background:var(--ochre)"></i></div>
        <small>${t.waterMet} de ${t.total} días cumplidos</small>
      </div>
    </div>
    ${t.moodWhenSleepMet&&t.moodWhenSleepMissed?`
      <div class="sleep-mood-insight">
        ${d("spark")}
        <p>Cuando alcanzas tu meta de <b>${q(t.sleepGoal)} h</b> de sueño, tu estado medio es <b>${t.moodWhenSleepMet}/5</b> (frente a <b>${t.moodWhenSleepMissed}/5</b> los días que duermes menos).</p>
      </div>
    `:""}
  </section>`:`<section class="card personal-goals-card">
      <div class="section-heading">
        <h2>Tus metas personales</h2>
        <button type="button" class="text-button" data-action="open-setup-wizard">${d("sliders")} Ajustar</button>
      </div>
      <p class="habit-empty">Guarda tu primer día para ver cómo evolucionan tus metas de sueño (${q(t.sleepGoal)} h), ${l(s.focusLabel.toLowerCase())} (${q(t.studyGoal)} h) y agua (${t.waterGoal} vasos).</p>
    </section>`}function As(e,a=0,t={}){const s=on(e,a,t),o=(t?.savedQuotes||[]).includes(s.text);return`<section class="card quote-card">
    <div class="quote-top">
      <span class="eyebrow">${d("quote")} ${s.isCustom?"Tu colección":"Frase del día"}</span>
      <div class="quote-actions">
        <button type="button" class="icon-button ghost ${o?"is-saved":""}" data-action="save-quote" data-quote="${l(s.text)}" title="${o?"Guardada en tus frases":"Guardar en mis frases"}" aria-label="Guardar frase">${d("heart")}</button>
        <button type="button" class="icon-button ghost" data-action="next-quote" title="Otra frase" aria-label="Otra frase">${d("refresh")}</button>
      </div>
    </div>
    <p class="quote-text">«${l(s.text)}»</p>
    <small class="quote-author">— ${l(s.author)}</small>
  </section>`}function ue(e,a,t="",s=""){return`<div class="ledger-cell">
    <span class="ledger-label">${e}</span>
    <div class="ledger-value">${a}${t?`<small>${t}</small>`:""}</div>
    ${s?`<span class="ledger-hint">${s}</span>`:""}
  </div>`}function ha(e,a,t="mood"){if(!a)return`<div class="rank-row"><span class="rank-label">${e}</span><strong>—</strong><small>Sin datos aún</small></div>`;const s=t==="mood"?`${T[a.mood-1].emoji} ${T[a.mood-1].label} (${a.mood}/5)`:`${q(a[t])} h`;return`<div class="rank-row">
    <span class="rank-label">${e}</span>
    <strong>${D(a.date,{weekday:"short",day:"numeric",month:"short"})}</strong>
    <small>${s}</small>
  </div>`}function La(e,a,t=""){return`<div class="empty-state">
    ${d("leaf")}
    <h3>${e}</h3>
    <p>${a}</p>
    ${t}
  </div>`}function St(e){return`<div class="meter-list">${e.map(a=>{const t=a.total?Math.round(a.count/a.total*100):0;return`<div class="meter-row">
      <span>${a.label}</span>
      <div class="meter-track"><i style="width:${t}%;background:${a.color||"var(--ink)"}"></i></div>
      <strong>${a.count}</strong>
    </div>`}).join("")}</div>`}function Ls(e,a={}){if(!e?.triggered||e.level!=="high")return"";const t=a?.trustedContactName?.trim(),s=a?.trustedContactPhone?.trim();return`<section class="crisis-banner high" role="region" aria-label="Apoyo emocional disponible">
    <div class="crisis-banner-head">
      <span class="crisis-badge">${d("heart")} No estás a solas</span>
      <button type="button" class="icon-button ghost crisis-dismiss" data-action="dismiss-crisis-banner" aria-label="Ocultar este aviso">${d("close")}</button>
    </div>
    <p class="crisis-reason">${l(e.reason)}</p>
    <div class="crisis-quick-actions">
      <a href="tel:024" class="button solid crisis-call-btn">${d("phone")} Llamar al 024 (24h, gratuito y confidencial)</a>
      ${t&&s?`<a href="tel:${l(s.replace(/\s+/g,""))}" class="button outline">${d("user")} Llamar a ${l(t)}</a>`:""}
      <button type="button" class="button outline" data-action="open-crisis-modal" data-tab="breathe">${d("wind")} Respiración guiada</button>
    </div>
  </section>`}function gn(e={},a="help"){const t=B(e),s=e?.trustedContactName?.trim(),o=e?.trustedContactPhone?.trim();return`<div class="modal-card crisis-modal">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${d("heart")} Apoyo y calma</p>
        <h2>Un espacio para respirar y pedir ayuda</h2>
      </div>
      <button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${d("close")}</button>
    </div>

    <div class="crisis-tabs" role="tablist">
      <button type="button" class="crisis-tab ${a==="help"?"active":""}" data-crisis-tab="help" role="tab">${d("phone")} Teléfonos 24h</button>
      <button type="button" class="crisis-tab ${a==="breathe"?"active":""}" data-crisis-tab="breathe" role="tab">${d("wind")} Respirar (4-4-6)</button>
      <button type="button" class="crisis-tab ${a==="ground"?"active":""}" data-crisis-tab="ground" role="tab">${d("compass")} Volver al presente</button>
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
          <a href="tel:${l(o.replace(/\s+/g,""))}" class="button solid">${d("phone")} Llamar</a>
        </div>
      `:""}
      <div class="helpline-grid">
        ${bo.map(n=>{const r=t.isMinor&&n.youth;return`
          <div class="helpline-card ${n.primary||r?"primary":""}">
            <div class="helpline-info">
              <h3>${l(n.name)}</h3>
              <p>${l(n.detail)}</p>
            </div>
            <a href="${l(n.tel)}" class="helpline-phone">${d("phone")} <span>${l(n.number)}</span></a>
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
        <button type="button" class="button solid" data-action="toggle-breathing" id="breathing-btn">${d("wind")} Empezar ejercicio</button>
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
  </div>`}function Ds(e,a,t,s={},o={},n=""){const r=s?.showDailyWord!==!1,i=s?.showDailyTip!==!1;if(!r&&!i)return"";const p=tn(e,a),c=sn(e,t,s),u=nn(o,s),g=n&&n.toLowerCase()===p.word.toLowerCase();return`<div class="daily-inspiration-grid">
    ${r?`
      <article class="card inspiration-card word-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${d("book")} Palabra del día</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-word" title="Ver otra palabra" aria-label="Ver otra palabra">${d("refresh")}</button>
        </div>
        <div class="daily-word-main">
          <div>
            <h2 class="daily-word-title">${l(p.word)}</h2>
            <span class="daily-word-origin">${l(p.type)} · ${l(p.origin)}</span>
          </div>
          <button type="button" class="button ${g?"solid":"outline"} small-btn" data-action="use-daily-word" data-word="${l(p.word)}">
            ${d(g?"check":"pen")} ${g?"Elegida hoy":"Usar hoy"}
          </button>
        </div>
        <p class="daily-word-meaning">${l(p.meaning)}</p>
      </article>
    `:""}

    ${i?`
      <article class="card inspiration-card tip-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${d("spark")} Consejo · ${l(c.category)}</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-tip" title="Ver otro consejo" aria-label="Ver otro consejo">${d("refresh")}</button>
        </div>
        <h2 class="daily-tip-title">${l(c.title)}</h2>
        <p class="daily-tip-body">${l(c.tip)}</p>
        ${u.length?`
          <div class="contextual-advice-list">
            ${u.map(S=>`
              <div class="contextual-advice-item">
                ${d(S.icon)}
                <div><strong>${l(S.title)}:</strong> ${l(S.text)}</div>
              </div>
            `).join("")}
          </div>
        `:""}
      </article>
    `:""}
  </div>`}function bn(e={},a=[],t=1){const s=B(e),o=new Set(a.map(r=>r.name.toLowerCase())),n=new Set(e.interests||[]);return`<div class="modal-card setup-wizard-modal" data-current-step="${t}">
    <div class="setup-wizard-header">
      <div>
        <p class="eyebrow">${d("sliders")} Paso ${t} de 3</p>
        <h2>${t===1?"Sobre ti, tu edad y tus gustos":t===2?"Tu ritmo y tus hábitos":"Papel e icono de tu cuaderno"}</h2>
      </div>
      <button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${d("close")}</button>
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
            <label for="setup-name">${d("user")} ¿Cómo te llamas?</label>
            <input id="setup-name" name="name" maxlength="50" placeholder="Tu nombre o apodo…" value="${l(e.name||"")}">
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
            ${sa.map(r=>`
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
            ${ja.map(r=>`
              <label class="interest-chip">
                <input type="checkbox" name="interests" value="${r.id}" ${n.has(r.id)?"checked":""}>
                <span>${d(r.icon)} ${l(r.label)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${t===2?"active":""}" data-step="2" ${t===2?"":"hidden"}>
        <div class="age-adaptation-callout" id="wiz-adaptation-callout">
          ${d("compass")}
          <div>
            <strong>Adaptado a: ${l(s.group.title)} (${l(s.group.label)})</strong>
            <p>Hemos ajustado tus metas recomendadas de sueño (${q(s.sleepRecommended)} h) y dedicación (${q(s.studyRecommended)} h).</p>
          </div>
        </div>

        <div class="goals-setup-grid">
          <div class="setup-field">
            <label for="setup-sleep">${d("moon")} Meta de sueño</label>
            <div class="number-wrap">
              <input id="setup-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${e.sleepGoal??s.sleepRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-study">${d("study")} Meta de dedicación</label>
            <div class="number-wrap">
              <input id="setup-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${e.studyGoal??s.studyRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-water">${d("drop")} Vasos de agua</label>
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
              ${oa.map(r=>`
                <label class="purpose-card compact">
                  <input type="radio" name="ritual" value="${r.id}" ${(e.ritual||"night")===r.id?"checked":""}>
                  <span class="purpose-icon">${d(r.icon)}</span>
                  <div><strong>${l(r.label)}</strong></div>
                </label>
              `).join("")}
            </div>
          </div>
          <div class="setup-field" style="margin-top:0">
            <label>Tono de las frases</label>
            <div class="ritual-stack">
              ${na.map(r=>`
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
            ${s.suggestedHabits.map(r=>{const i=o.has(r.toLowerCase());return`<label class="tag-chip">
                <input type="checkbox" name="suggestedHabits" value="${l(r)}" ${i?"checked":""}>
                <span>${l(r)}</span>
              </label>`}).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${t===3?"active":""}" data-step="3" ${t===3?"":"hidden"}>
        <div class="setup-field">
          <label>${d("palette")} Elige el papel y el icono de tu pestaña</label>
          <div class="theme-picker-grid">
            ${V.map(r=>`
              <label class="theme-card">
                <input type="radio" name="theme" value="${r.id}" ${(e.theme||"paper")===r.id?"checked":""}>
                <div class="theme-card-top">
                  <span class="theme-favicon-preview">${ge(r.id,e)}</span>
                  <div class="theme-swatches">
                    ${r.colors.map(i=>`<i style="background:${i}"></i>`).join("")}
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
        ${t>1?`<button type="button" class="button outline" data-wizard="prev">${d("left")} Anterior</button>`:'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${t<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${d("right")}</button>`:`<button type="submit" class="button solid">${d("check")} Guardar</button>`}
      </div>
    </form>
  </div>`}const Qe=e=>Ea.find(a=>a.id===e?.glass)||Ea[0],fa=(e,a=8)=>{const t=String(e||"").trim().split(/\s+/);return t.slice(0,a).join(" ")+(t.length>a?"…":"")};function Ue(e={},a={}){const t=Qe(e),s=a.class?` ${a.class}`:"",o=a.paper===!1?"":`<path class="bottle-paper" d="M10.6 13.4h6.2M10.6 15.6h4.4" stroke="${t.hex}" stroke-width="1.1" stroke-linecap="round" opacity=".8"/>`;return`<svg class="bottle-glyph${s}" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <g transform="rotate(-24 14 14)">
      <path d="M11 4.2h6v3.1c0 1 .3 1.6 1 2.3l1.5 1.6c.9 1 1.4 2 1.4 3.3v7.2c0 1.4-1.1 2.5-2.5 2.5h-8.8c-1.4 0-2.5-1.1-2.5-2.5v-7.2c0-1.3.5-2.3 1.4-3.3l1.5-1.6c.7-.7 1-1.3 1-2.3Z" fill="color-mix(in srgb,${t.hex} 22%,transparent)" stroke="${t.hex}" stroke-width="1.2"/>
      <path d="M11.6 6.6h4.8" stroke="${t.hex}" stroke-width="1" opacity=".6"/>
      <rect class="bottle-cork" x="12.2" y="2.4" width="3.6" height="2.4" rx="1" fill="${t.hex}" opacity=".85"/>
      ${o}
      <path class="bottle-shine" d="M9.6 15.4v6.4" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".4"/>
    </g>
  </svg>`}function fn(e=2400,a=8,t=110,s=240){let o=`M0 ${t}`;for(let n=0;n<e;n+=s)o+=` q ${s/4} ${-a} ${s/2} 0 q ${s/4} ${a} ${s/2} 0`;return`${o} L${e} 240 L0 240 Z`}function st(e=0,a=0){const t=(s,o,n,r,i)=>{const p=e%7*9,c=(i*(1-Math.min(.55,a*.45))).toFixed(1);return`<path class="${r}" style="--wave-dur:${c}s;--wave-delay:-${(p/100*c).toFixed(2)}s" d="${fn(2400,s,o,n)}"/>`};return`<svg class="sea-wave-svg" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden="true">
    ${t(7,126,300,"wave wave-4",28)}
    ${t(9,142,240,"wave wave-3",21)}
    ${t(11,160,190,"wave wave-2",16)}
    ${t(13,182,150,"wave wave-1",11)}
  </svg>`}function Cs(){let e="M0 15";for(let a=0;a<2400;a+=120)e+=" q30 -9 60 0 q30 9 60 0";return`<svg class="tide-rule" viewBox="0 0 1200 30" preserveAspectRatio="none" aria-hidden="true">
    <path class="tide-rule-path" d="${e}"/>
  </svg>`}function vn(e=[],a=b()){const t=Pa(e,a),s=ws(a),o=pt(a),n=Y("2020-01-01",a),r=t.drifting.map(c=>{const u=Oa(c,a),g=Qe(c),S=Y("2020-01-01",c.castAt);return`<li class="sea-float" style="--x:${(jo(u.pct)*100).toFixed(1)}%;--tint:${g.hex};--lift:${(48+S%5*2.4).toFixed(1)}%;--delay:${(S%9*.4).toFixed(2)}s;--dur:${(6-s.rough*2).toFixed(1)}s;--bob:${(2.5+S%3*1.2).toFixed(1)}px">
      <button type="button" class="sea-float-btn" data-action="open-bottle" data-id="${c.id}" aria-label="${l(fa(c.text,12))}">
        <span class="sea-wake" aria-hidden="true"></span>
        ${Ue(c)}
        <span class="sea-float-whisper">${l(fa(c.text,7))}</span>
      </button>
    </li>`}).join(""),i=t.returned.slice(0,3).map((c,u)=>`
    <button type="button" class="shore-bottle ${c.seen?"":"is-new"}" data-action="open-bottle" data-id="${c.id}">
      <span class="shore-bottle-glow">${Ue(c,{class:"is-landed"})}</span>
      <span class="shore-bottle-meta">
        <strong>${l(D(c.returnedAt||a,{day:"numeric",month:"long"}))}</strong>
        <small>${l(fa(c.text,10))}</small>
      </span>
      ${c.seen?"":'<span class="shore-new-dot" aria-label="sin leer"></span>'}
    </button>`).join(""),p=t.returned.length?`Volvió ${t.returned.length===1?"una":"algo"} que habías soltado`:t.drifting.length?`${t.drifting.length===1?"Una botella anda":"Andan por ahí "+t.drifting.length+" botellas"} por el agua`:"El mar está vacío";return`<section class="sea-panel ${t.returned.length?"has-shore":""}" data-tide="${o.key}" data-weather="${s.weather.id}"
    style="--water:${(s.level*100).toFixed(1)}%;--rough:${s.rough.toFixed(2)}">
    <header class="sea-sky">
      <span class="sea-wash sea-wash-1" aria-hidden="true"></span>
      <span class="sea-wash sea-wash-2" aria-hidden="true"></span>
      <h2 class="sea-headline">${l(p)}</h2>
      <p class="sea-sub">${l(yn(t,a,s))}</p>
    </header>
    <div class="sea-water">
      ${st(n,s.rough)}
      <span class="sea-lighthouse" aria-hidden="true">${$n()}</span>
      <ul class="sea-fleet">${r}</ul>
      <span class="sea-horizon-line"></span>
    </div>
    ${i?`<div class="sea-shore"><div class="shore-list">${i}</div>${t.returned.length>3?`<span class="shore-more">${t.returned.length-3} más en la orilla</span>`:""}</div>`:""}
  </section>`}function yn(e,a,t){return e.returned.length?"Está en la orilla, abierta cuando tú quieras.":e.drifting.length?t.weather.id==="gale"?"Con este mar no se ve ninguna desde la playa.":"No hace falta volver a mirar: si tiene que volver, vuelve.":"Escribe algo que no quieras guardar y suéltalo ahí fuera."}function $n(){return`<svg viewBox="0 0 60 96" fill="none" aria-hidden="true">
    <path d="M22 88 26 30h8l4 58Z" fill="color-mix(in srgb,var(--ink) 58%,transparent)" stroke="var(--ink)" stroke-width="1.3"/>
    <path d="M26.4 44h7.2M27.6 60h4.8" stroke="var(--paper-2)" stroke-width="3" opacity=".5"/>
    <rect x="24" y="20" width="12" height="10" rx="1.5" fill="color-mix(in srgb,var(--ochre) 62%,var(--paper-2))" stroke="var(--ink)" stroke-width="1.3"/>
    <path d="M23 20h14l-7-8Z" fill="var(--ink)"/>
    <circle class="sea-beacon" cx="30" cy="25" r="2.4" fill="var(--ochre)"/>
    <path d="M14 88h32" stroke="var(--ink)" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`}function wn(e={},a=b(),t={}){const s=String(t.text||"");return`<form id="bottle-form" class="card bottle-composer">
    ${t.restoredFrom?`<p class="draft-note" role="status">${d("pen")} Sigues con la misma de ${l(t.restoredFrom)}. <button type="button" class="text-button is-danger" data-action="discard-bottle-draft">empezar de cero</button></p>`:""}
    <label class="sr-only" for="bottle-text">Pensamiento</label>
    <textarea id="bottle-text" name="text" class="bottle-text" maxlength="1200" rows="3"
      placeholder="Lo que hoy no quieres dejar escrito en el cuaderno.">${l(s)}</textarea>

    <div class="composer-bar">
      <div class="composer-moods" role="radiogroup" aria-label="Ánimo">
        ${T.map(n=>`<label class="mini-mood" style="--mood-color:${n.color}" title="${n.label}">
          <input type="radio" name="mood" value="${n.value}" ${t.mood===n.value?"checked":""}>
          <span>${n.emoji}</span>
        </label>`).join("")}
      </div>
      <span class="word-count" id="bottle-words">${s.trim()?s.trim().split(/\s+/).length:0} palabras</span>
      <button type="submit" class="text-button cast-btn"${s.trim()?"":" disabled"}>${d("send")} echar al mar</button>
    </div>

    <div class="sea-picker" role="radiogroup" aria-label="¿Hasta dónde?">
      <span class="sea-picker-label">¿Hasta dónde?</span>
      ${Ma.map((n,r)=>`<label class="sea-option" style="--opt-i:${r}">
        <input type="radio" name="sea" value="${n.id}" ${(t.sea||"breeze")===n.id?"checked":""}>
        <span class="sea-option-name">${l(n.label)}</span>
        <span class="sea-option-days">${n.min}–${n.max} días</span>
      </label>`).join("")}
    </div>
  </form>`}function Sn(e,a=b(),t=0){const s=Oa(e,a),o=Qe(e),n=mt(e.sea),r=D(e.castAt,{day:"numeric",month:"short"}),i=s.fate==="drifting"?`en el agua desde el ${r}`:s.fate==="returned"?`soltada el ${r} · volvió el ${D(e.returnedAt||a,{day:"numeric",month:"long"})}`:`soltada el ${r} · nunca llegó`;return`<article class="card bottle-card is-${s.fate}" style="--tint:${o.hex};--i:${Math.min(9,t)}" data-bottle-id="${e.id}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${Ue(e)}</span>
      <div class="bottle-card-who">
        <p class="field-caption">${l(i)}</p>
        <h3>${l(n.label)}</h3>
      </div>
      ${e.kept?`<span class="kept-mark" title="anclada al cuaderno">${d("bookmark")}</span>`:""}
    </header>
    <p class="bottle-card-text ${Po(e.text)<=26?"is-short":""}">${l(e.text)}</p>
    ${s.fate==="drifting"?`<p class="bottle-card-quiet">${l(ht(e,a))}</p>`:""}
    ${e.reply?`<p class="bottle-card-reply"><span>le contestaste:</span> ${l(e.reply)}</p>`:""}
    <footer class="bottle-card-foot">
      ${s.fate==="returned"?`<button type="button" class="text-button" data-action="open-bottle" data-id="${e.id}">abrir</button>`:""}
      ${s.fate==="lost"?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${e.id}">volver a lanzarla</button>`:""}
      ${s.fate==="drifting"?`<button type="button" class="text-button" data-action="open-bottle" data-id="${e.id}">ver</button>`:""}
      <button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${e.id}" aria-label="romper la botella">${d("trash")}</button>
    </footer>
  </article>`}function xn(e,a=b(),t={}){const s=Oa(e,a),o=Qe(e),n=mt(e.sea),r=e.mood?T[e.mood-1]:null,i=Math.max(1,Y(e.castAt,e.returnedAt||e.lostAt||a)),p=s.fate==="returned"?`La soltaste el ${D(e.castAt,{day:"numeric",month:"long"})} y ha vuelto ${i} días después, en ${n.label.toLowerCase()}.`:s.fate==="lost"?`La soltaste el ${D(e.castAt,{day:"numeric",month:"long"})}. Este papel se quedó fuera; solo lo lees tú.`:`Suelta el ${D(e.castAt,{day:"numeric",month:"long"})}, día ${s.atSea} en el agua.`;return`<div class="modal-card bottle-modal ${e.seen===!1?"is-fresh":""}" style="--tint:${o.hex}" data-modal-bottle="${e.id}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${d("close")}</button>
    <span class="bottle-wax" aria-hidden="true">${Ue(e,{paper:!1})}<i class="wax-crack"></i></span>
    <p class="tale">${l(p)}</p>
    <div class="bottle-note" data-fate="${s.fate}">
      <blockquote class="bottle-modal-text">${l(e.text)}</blockquote>
      ${r?`<p class="bottle-modal-mood">${r.emoji} · ${r.label.toLowerCase()}</p>`:""}
    </div>
    ${s.fate==="drifting"?'<p class="field-caption modal-quiet">Todavía no se sabe si volverá. Puedes leerla aquí las veces que quieras.</p>':""}
    ${e.reply?`<div class="bottle-reply-box"><span>tu respuesta:</span><p>${l(e.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">¿Le contestas?</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" data-draft="respuesta:${e.id}:text" placeholder="Se guarda aquí aunque lo dejes a medias.">${l(e.replyDraft||"")}</textarea>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${e.reply?'<button class="button outline" data-modal="reply-clear">quitar la respuesta</button>':'<button class="button outline" data-modal="reply">contestar</button>'}
      <button class="button outline" data-modal="keep">${e.kept?"desanclar":"anclar al cuaderno"}</button>
      ${s.fate==="lost"?'<button class="button outline" data-modal="recast">volver a lanzar</button>':""}
      <button class="button solid" data-modal="to-entry">copiar en la entrada de hoy</button>
    </div>
  </div>`}function kn(e={}){return`<div class="splash-layer" style="--tint:${Qe(e).hex}">
    <span class="splash-arc">${Ue(e)}</span>
    <span class="splash-ring"></span>
    <span class="splash-ring is-2"></span>
    <span class="splash-drop"></span>
    <span class="splash-drop is-2"></span>
    <span class="splash-drop is-3"></span>
  </div>`}function qn(e=[]){const a=b(),t=Pa(e,a),s=t.returned[0];if(s)return`<section class="card sea-teaser is-arrival" style="--tint:${Qe(s).hex}">
      <div class="sea-teaser-waves">${st(2,0)}</div>
      <h2>Ha vuelto algo</h2>
      <p class="sea-teaser-quote">«${l(fa(s.text,18))}»</p>
      <div class="sea-teaser-actions">
        <button type="button" class="text-button" data-action="open-bottle" data-id="${s.id}">leerla</button>
        ${t.returned.length>1?`<span class="sea-teaser-count">y ${t.returned.length-1} más en la orilla</span>`:""}
      </div>
    </section>`;const o=t.drifting.length;return`<section class="card sea-teaser">
    <div class="sea-teaser-waves">${st(5,0)}</div>
    <h2>${o?`${o} ${o===1?"botella anda suelta":"botellas andan sueltas"}`:"El mar está vacío"}</h2>
    <p class="sea-teaser-quote">${o?l(ht(t.drifting[0],a))+".":"Escribe lo que no quieras guardar, ciérralo en una botella y tira. Si vuelve, aquí estará."}</p>
    <div class="sea-teaser-actions">
      <button type="button" class="text-button" data-view="thoughts">${o?"ver el agua":"echar una"}</button>
    </div>
  </section>`}function Mn(e="shore"){const a={shore:["La orilla está seca","Cuando vuelva alguna, aparecerá aquí."],sea:["Nada a la deriva","Echa una y olvídate hasta que el mar la traiga."],kept:["Nada anclado","Al abrir una botella puedes dejarla prendida del cuaderno."],lost:["El mar no se ha quedado nada","Por ahora."]}[e]||["El mar está vacío","Escribe, sella y tira."];return`<div class="empty-state sea-empty" data-tab="${e}">
    <span class="sea-empty-art">${Ue({})}<i class="sea-empty-ripple"></i></span>
    <h3>${l(a[0])}</h3>
    <p>${l(a[1])}</p>
  </div>`}const Da="diario.drafts.v1",En=6e3,_t=40,Z={entry:e=>`entrada:${e}`,bottle:()=>"botella",reply:e=>`respuesta:${e}`,tomorrow:()=>"manana",setup:()=>"perfil"};function Me(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Xa(e,a=En){const t=String(e??"");return t.length>a?t.slice(0,a):t}function Wa(){let e=null;try{e=localStorage.getItem(Da)}catch{return{}}if(!e)return{};try{const a=JSON.parse(e);return Me(a)?a:{}}catch{return{}}}function js(e){const a=Object.keys(e);if(!a.length){try{localStorage.removeItem(Da)}catch{}return!0}let t=e;a.length>_t&&(t=Object.fromEntries(a.sort((s,o)=>String(e[o]?.savedAt||"").localeCompare(String(e[s]?.savedAt||""))).slice(0,_t).map(s=>[s,e[s]])));try{return localStorage.setItem(Da,JSON.stringify(t)),!0}catch{return!1}}function Qa(e,a){if(!e)return null;const t={};let s=0;for(const[r,i]of Object.entries(Me(a)?a:{}))if(i!=null){if(typeof i=="string"){const p=Xa(i);if(!p.trim())continue;t[r]=p,s++}else if(typeof i=="number"||typeof i=="boolean")t[r]=i,s++;else if(Array.isArray(i)){const p=i.map(c=>typeof c=="string"?Xa(c,600):c).filter(c=>typeof c!="string"||c.trim());p.length&&(t[r]=p,s++)}else if(Me(i)){const p={};for(const[c,u]of Object.entries(i))typeof u=="number"||typeof u=="boolean"?p[c]=u:typeof u=="string"&&u.trim()&&(p[c]=Xa(u,600));Object.keys(p).length&&(t[r]=p)}}if(!s)return oe(e),null;const o=Wa(),n=new Date().toISOString();return o[e]={data:t,savedAt:n},{savedAt:n,ok:js(o)}}function xt(e){if(!e)return null;const a=Wa()[e];return Me(a)?a:null}function we(e){const a=xt(e);return a&&Me(a.data)?a.data:null}function oe(e){if(!e)return!1;const a=Wa();return e in a?(delete a[e],js(a),!0):!1}function kt(){const e=Wa();return Object.entries(e).filter(([,a])=>Me(a)&&Me(a.data)).map(([a,t])=>({scope:a,savedAt:t.savedAt||"",data:t.data})).sort((a,t)=>String(t.savedAt).localeCompare(String(a.savedAt)))}function Ts(e,a){const t=xt(e);return t?.savedAt?a?String(t.savedAt)>String(a):!0:!1}function Hs(e,a=Date.now()){const t=xt(e);if(!t?.savedAt)return null;const s=Date.parse(t.savedAt);return Number.isFinite(s)?Math.max(0,Math.round((a-s)/6e4)):null}function Ns(e,a=Date.now()){const t=we(e);if(!t)return null;const s=Object.values(t).filter(r=>typeof r=="string").join(" ").trim().split(/\s+/).filter(Boolean).length,o=Hs(e,a),n=o===null?"":o<1?"ahora mismo":o<60?`hace ${o} min`:`hace ${Math.round(o/60)} h`;return{words:s,when:n,minutes:o}}function Ee(){const e=kt();return{total:e.length,entries:e.filter(a=>a.scope.startsWith("entrada:")).length,bottles:e.filter(a=>a.scope==="botella").length,newest:e[0]?.savedAt||""}}function Wt(){try{localStorage.removeItem(Da)}catch{}return!0}const Os=["L","M","X","J","V","S","D"],Qt=e=>Os[(De(e).getDay()+6)%7];function Ps(e,a,t=""){const o=2*Math.PI*26,n=(Math.min(100,Math.max(0,e))/100*o).toFixed(2);return`<div class="ring-widget ${e>=100?"is-full":""}">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle class="ring-track" cx="32" cy="32" r="26"/>
      <circle class="ring-fill" cx="32" cy="32" r="26" stroke-dasharray="${n} ${o.toFixed(2)}"/>
    </svg>
    <span class="ring-value">${a}</span>
    ${t?`<span class="ring-sub">${l(t)}</span>`:""}
  </div>`}function An(e=[],a=null,t=[],s=b(),o=b()){return e.length?`<div class="habit-board">${e.map((n,r)=>{const i=!!a?.habits?.[n.id],p=Ta(t,n.id,s>o?s:o),c=vs(t,n.id,7,s);return`<button type="button" class="habit-toggle ${i?"is-done":""}" style="--habit-i:${r}"
      data-action="toggle-habit" data-habit="${n.id}" data-date="${s}" aria-pressed="${i}">
      <span class="habit-tick" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.8 11.8 12.8 4.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span class="habit-copy">
        <strong>${l(n.name)}</strong>
        <small>${i?"hecho hoy":s===o?"toca para marcarlo":"aún por hacer"}</small>
      </span>
      <span class="habit-dots" aria-hidden="true">
        ${Array.from({length:7},(u,g)=>{const S=L(s,g-6);return`<i class="${!!t.find(f=>f.date===S)?.habits?.[n.id]?"on":""} ${S>o?"future":""}"></i>`}).join("")}
      </span>
      <span class="habit-streak ${p?"is-hot":""}" title="Racha actual">${p?`${d("flame")} ${p}`:`${c.done}/7`}</span>
    </button>`}).join("")}</div>`:""}function Ln(e=[],a=[],{days:t=28,end:s=b(),today:o=b(),title:n="Tus últimas 4 semanas"}={}){if(!a.length)return"";const{dates:r,rows:i}=yo(e,a,t,s,o),p=D(r[0],{day:"numeric",month:"short"}).replace(/\./g,"");return`<section class="card momentum-card">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${d("grid")} Constancia</p>
        <h2>${l(n)}</h2>
      </div>
      <span class="field-caption">${l(p)} → ${l(D(r[r.length-1],{day:"numeric",month:"short"}))}</span>
    </div>
    <p class="momentum-hint">Toca cualquier casilla para anotar o quitar un hábito de ese día. Solo días pasados o el de hoy.</p>
    <div class="momentum-scroll">
      <div class="momentum-grid" style="--cols:${t}">
        <span class="momentum-corner"></span>
        ${r.map(c=>`<span class="momentum-day ${c===o?"is-today":""}">${c.slice(8,10)}</span>`).join("")}
        ${i.map(c=>`
          <span class="momentum-name" title="${l(c.habit.name)}">${l(c.habit.name)}</span>
          ${c.cells.map(u=>`<button type="button" class="momentum-cell ${u.done?"is-done":""} ${u.future?"is-future":""} ${u.recorded?"":"is-blank"}"
            ${u.future?"disabled":""} data-action="toggle-habit" data-habit="${c.habit.id}" data-date="${u.date}" aria-pressed="${u.done}"
            aria-label="${l(c.habit.name)} · ${D(u.date)} · ${u.done?"cumplido":"sin cumplir"}">
            <i></i>
          </button>`).join("")}
        `).join("")}
      </div>
      <div class="momentum-weekdays" style="--cols:${t}">
        <span class="momentum-corner"></span>
        ${r.map(c=>`<span class="${Qt(c)==="L"?"is-mon":""}">${Qt(c)}</span>`).join("")}
      </div>
    </div>
    <div class="momentum-legend">
      <span><i class="lg done"></i> cumplido</span>
      <span><i class="lg"></i> sin registrar</span>
      <span><i class="lg blank"></i> día sin entrada</span>
      <span class="momentum-weekday-note">${Os.join(" ")} · cada lunes resaltado</span>
    </div>
  </section>`}function Dn(e=[],a=[],t=b()){return e.length?`<section class="card habit-stats-card">
    <div class="section-heading"><div><p class="eyebrow">${d("chart")}constancia por hábito</p><h2>Cada uno a su ritmo</h2></div><span class="field-caption">últimos 28 días</span></div>
    <ul class="habit-stats-list">
      ${e.map(s=>{const o=vs(a,s.id,28,t),n=Ta(a,s.id,t),r=fs(a,s.id);return`<li class="habit-stat-row">
          <div class="habit-stat-name">
            <strong>${l(s.name)}</strong>
            <small>${Pt(a,s.id)} ${Pt(a,s.id)===1?"día marcado":"días marcados"} en total</small>
          </div>
          <div class="habit-stat-meter"><i style="width:${o.pct}%"></i><span>${o.pct}%</span></div>
          <div class="habit-stat-figures">
            <span title="Racha actual">${d("flame")} <b>${n}</b> d</span>
            <span title="Mejor racha">${d("seal")} <b>${r}</b> d</span>
          </div>
          <div class="habit-stat-actions">
            <button type="button" class="icon-button ghost" data-action="edit-habit" data-habit="${s.id}" aria-label="Renombrar ${l(s.name)}">${d("pen")}</button>
            <button type="button" class="icon-button ghost delete-button" data-action="delete-habit" data-habit="${s.id}" data-name="${l(s.name)}" aria-label="Eliminar ${l(s.name)}">${d("trash")}</button>
          </div>
        </li>`}).join("")}
    </ul>
  </section>`:""}function Cn(e={},a=[]){const t=new Set(a.map(o=>o.name.toLowerCase())),s=(e.suggestedHabits||[]).filter(o=>!t.has(o.toLowerCase())).slice(0,6);return`<section class="card habit-composer">
    <div class="section-heading"><div><p class="eyebrow">${d("plus")}Nueva rutina</p><h2>Añade un hábito</h2></div><span class="field-caption">${a.length}/30</span></div>
    <div class="habit-add">
      <input id="new-habit" maxlength="40" placeholder="Nombre del hábito (ej. Leer 20 minutos)" aria-label="Nuevo hábito">
      <button type="button" class="button solid small-btn" data-action="add-habit">${d("plus")} Añadir</button>
    </div>
    ${s.length?`
      <p class="field-caption" style="margin-top:16px">Sugerencias para tu etapa · toca para añadir</p>
      <div class="tag-picker">
        ${s.map(o=>`<button type="button" class="tag-chip" data-action="add-suggested-habit" data-name="${l(o)}"><span>+ ${l(o)}</span></button>`).join("")}
      </div>`:""}
    ${a.length?"":'<p class="habit-empty">Aún no tienes hábitos. Añade uno, o marca algunos en tu perfil y aparecerán aquí.</p>'}
  </section>`}function jn(e={},a={},t=[],s=null){return`<section class="card counters-board">
    <div class="section-heading">
      <div><p class="eyebrow">${d("drop")} Contadores</p><h2>Lo de hoy, en cifras</h2></div>
      <span class="field-caption">se guarda al instante</span>
    </div>
    ${un(e?.counters||{},s||ne(a),a,{action:"routine"})}
    ${t.length?`<p class="sleep-mood-insight">${d("spark")} ${l(t[0])}</p>`:""}
  </section>`}function Tn(e={},a=b()){const t=e?.goals||[];return`<section class="card tomorrow-board">
    <div class="section-heading">
      <div><p class="eyebrow">${d("sail")} Para mañana</p><h2>La lista de la próxima marea</h2></div>
      <button type="button" class="text-button" data-action="add-goal-routine">${d("plus")} Añadir tarea</button>
    </div>
    <label class="sr-only" for="routine-tomorrow">Intención para mañana</label>
    <textarea id="routine-tomorrow" class="tomorrow-intent" name="tomorrow" maxlength="600" rows="2"
      placeholder="Mañana quiero... (una frase basta)">${l(e?.tomorrow||"")}</textarea>
    <div class="task-list" id="routine-goals">
      ${t.length?t.map((s,o)=>`<div class="task-row">
        <span class="task-index">${String(o+1).padStart(2,"0")}</span>
        <input class="task-input" data-index="${o}" value="${l(s)}" maxlength="200" aria-label="Tarea ${o+1}">
        <button type="button" class="icon-button ghost delete-button" data-action="remove-goal-routine" data-index="${o}" aria-label="Quitar tarea">${d("close")}</button>
      </div>`).join(""):'<p class="habit-empty">Nada apuntado para mañana. Tres tareas concretas suelen funcionar mejor que diez genéricas.</p>'}
    </div>
  </section>`}function Hn(e=[],a=null,t=[],s=b()){const o=e.filter(p=>a?.habits?.[p.id]).length,n=e.length?Math.round(o/e.length*100):0,r=e.length?Math.max(0,...e.map(p=>Ta(t,p.id,s))):0,i=D(ve(s),{day:"numeric",month:"short"});return`<section class="card routine-teaser">
    <div class="section-heading">
      <div><p class="eyebrow">${d("listChecks")} Rutina de hoy</p><h2>${o}/${e.length||0} ${e.length===1?"hábito":"hábitos"}</h2></div>
      ${Ps(n,`${n}%`)}
    </div>
    <p class="routine-teaser-note">${e.length?`La lista completa, los contadores y tus rachas viven ahora en su propia pestaña. Semana del ${l(i)}.`:"Todavía no hay hábitos: crea tu lista en la pestaña Rutina."}</p>
    <button type="button" class="text-button full-link" data-view="routine">Ir a Rutina ${d("arrow")}</button>
    ${r?`<span class="routine-teaser-flame">${d("flame")} racha de ${r} días</span>`:""}
  </section>`}const j=document.querySelector("#app");let x=[],k=[],N=[],m=_a(),be="",F="diary",$=b(),J=b(),ga=b(),Re="shore",ea="hoy",ie={text:"",mood:null,sea:"breeze"},Oe=7,ae=!1,Q=!1,G=!1,va="",ya="",$a="",wa="grid",Sa="list",Pe="pulse",Fe="personal",Ke=!1,He=null,qt=0,Mt=0,xa=0,Et=0,Be=!1,aa=!1,Va=!1,ka=null,Xe="",Vt="",O="idle",ia=0,Zt=!1,X=!0,le=!0;try{const e=window.matchMedia("(prefers-reduced-motion: reduce)");X=!e.matches,e.addEventListener?.("change",a=>{X=!a.matches,document.documentElement.dataset.motion=X?"full":"calm"})}catch{}document.documentElement.dataset.motion=X?"full":"calm";function Ae(e,a=m){const t=V.find(s=>s.id===e)||V[0];document.documentElement.dataset.theme=t.id;try{const s=Xo(t.id,a);let o=document.querySelector('link[rel="icon"]');o||(o=document.createElement("link"),o.rel="icon",document.head.appendChild(o)),o.type="image/svg+xml",o.href=s;const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",t.colors[0]),document.title=a?.name?`Cuaderno de ${a.name}`:"Diario"}catch{}}function Za(){x=Ga(),k=pa(),N=he(),m=_a(),G=!!m.sidebarCollapsed,Ae(m.theme,m)}try{Za()}catch(e){be="No se han podido leer los datos guardados. Revisa el almacenamiento del navegador o recupera una copia. "+e.message}const Fs=[{label:"El cuaderno",items:[["diary","pen","Hoy"],["thoughts","wave","Pensamientos"],["archive","book","Archivo"]]},{label:"Constancia",items:[["routine","listChecks","Rutina"],["stats","chart","Progreso"]]},{label:"Tuyo",items:[["setup","sliders","Perfil"]]}],Nn=["diary","thoughts","routine","archive","stats"];function Bs(){return Fs.flatMap(e=>e.items)}const zs=e=>Bs().find(a=>a[0]===e)?.[2]||"Hoy";function Rs(e){if(e!=="thoughts")return"";const a=Fa(N).some(t=>t.seen!==!0);return`<span class="nav-dot ${a?"is-new":""}" ${a?"":"hidden"} title="hay algo sin leer en la orilla"></span>`}function On([e,a,t],s){const o=e==="thoughts"?Fa(N).filter(n=>n.seen!==!0).length:0;return`<button class="nav-item ${F===e?"active":""}" style="--nav-i:${s}" data-view="${e}" title="${l(t)}" data-tooltip="${l(t)}" ${F===e?'aria-current="page"':""}>
    <span class="nav-index">${String(s+1).padStart(2,"0")}</span>
    <span class="nav-item-icon">${d(a)}${o?'<i class="nav-icon-ping" aria-hidden="true"></i>':""}</span>
    <span class="nav-label">${l(t)}</span>${Rs(e)}
  </button>`}function Pn(){let e=0;return Fs.map(a=>`<div class="nav-group">
    <p class="nav-group-label">${l(a.label)}</p>
    ${a.items.map(t=>On(t,e++)).join("")}
  </div>`).join("")}function Fn(){return`<nav class="tabbar" aria-label="Navegación inferior">
    ${Nn.map(e=>{const a=Bs().find(t=>t[0]===e);return a?`<button type="button" class="tabbar-item ${F===e?"active":""}" data-view="${e}" ${F===e?'aria-current="page"':""}>
        <span class="tabbar-icon">${d(a[1])}${Rs(e)}</span>
        <span class="tabbar-label">${l(a[2])}</span>
      </button>`:""}).join("")}
  </nav>`}function Bn(){return`
  <div class="sidebar-backdrop" data-action="close-menu" aria-hidden="true"></div>
  <aside class="sidebar" aria-label="Menú principal">
    <div class="sidebar-top-row">
      <a href="#" class="brand" data-action="today" title="Ir a hoy">
        <span class="brand-mark"><span class="brand-full">diario</span><span class="brand-short">d</span><span class="brand-period">.</span></span>
      </a>
      <button type="button" class="icon-button sidebar-collapse-btn" data-action="toggle-sidebar" aria-label="Plegar o desplegar el menú">
        ${d("left")}
      </button>
    </div>
    <div class="brand-rule"></div>
    <div id="ex-libris-slot">${Ms(m,x.length)}</div>
    <div class="nav-wrap">
      <span class="nav-rail" aria-hidden="true"></span>
      <nav class="sidebar-nav" id="sidebar-nav" aria-label="Navegación principal">${Pn()}</nav>
    </div>
    <div class="sidebar-bottom" id="sidebar-bottom">${Gs()}</div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <div class="topbar-left">
        <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="false">${d("menu")}</button>
        <button class="icon-button ghost desktop-sidebar-toggle" data-action="toggle-sidebar" aria-label="Alternar barra lateral">${d("sidebar")}</button>
        <span class="breadcrumb"><span id="breadcrumb-owner">${m.name?`Cuaderno de ${l(m.name)}`:"Diario"}</span> <span>/</span> <span id="breadcrumb-view">${l(zs(F))}</span></span>
      </div>
      <div class="topbar-right">
        <span id="draft-chip-slot"></span>
        <button type="button" id="sea-quick" class="sea-quick" data-view="thoughts" title="El mar">
          ${d("wave")}
        </button>
        <button type="button" id="theme-pill" class="theme-pill" data-action="cycle-theme">
          <span class="topbar-favicon-mini" id="theme-pill-favicon">${ge(m.theme,m)}</span>
          <span id="theme-pill-label"></span>
        </button>
        <button type="button" class="avatar" id="avatar-slot" data-action="open-setup-wizard" title="Personalizar mi perfil, edad y gustos" aria-label="Personalizar mi perfil"></button>
      </div>
    </header>
    <main id="main"></main>
    <div class="tabbar-wrap">
      <span class="tabbar-rail" aria-hidden="true"></span>
      <nav class="tabbar" id="tabbar" aria-label="Navegación inferior">${Fn()}</nav>
    </div>
    <footer class="page-footer">
      <span id="footer-motto">${d("leaf")} ${l(m.motto||"Un día a la vez.")}</span>
      <span id="footer-owner">${m.name?`Cuaderno de ${l(m.name)}`:"Guardado localmente en este navegador"}</span>
    </footer>
  </div>
  <div id="floating-save" class="floating-save-bar" aria-live="polite">
    <span id="floating-save-text">${d("pen")} Cambios sin guardar</span>
    <button type="button" class="button solid small-btn" data-action="quick-save">${d("stamp")} Guardar</button>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <dialog id="modal"></dialog>`}function Gs(){const e=Ee();return`<div class="local-note">${d("lock")}<div><strong>Guardado en tu dispositivo</strong>${m.name?`Cuaderno de ${l(m.name)}.`:"Sin cuentas ni servidores externos."}</div></div>
    <div class="save-note ${e.total?"has-pending":""}" id="save-note">
      <span class="save-dot" data-state="${O}"></span>
      <div>
        <strong>${Is()}</strong>
        <small>${l(Us())}</small>
      </div>
    </div>`}function Is(){if(be)return"Sin guardar";switch(O){case"typing":case"saving":return"Guardando…";case"draft":return"Borrador guardado";case"error":return"No se pudo guardar";default:return ia?`Guardado ${_s(ia)}`:"Todo guardado"}}function Us(){const e=Ee();return O==="error"?"Tus palabras siguen en el borrador de este navegador.":O==="draft"&&e.total?`${e.total} ${e.total===1?"texto a medias":"textos a medias"} recuperables.`:be?"Revisa el almacenamiento del navegador o descarga una copia.":"Se guarda solo, sin nube ni cuentas."}function _s(e){const a=typeof e=="number"?e:Date.parse(e);if(!Number.isFinite(a))return"";const t=Math.round((Date.now()-a)/6e4);return t<1?"ahora mismo":t<60?`hace ${t} min`:t<1440?`hace ${Math.round(t/60)} h`:`el ${new Date(a).toLocaleDateString("es-ES",{day:"numeric",month:"short"})}`}function zn(){Or();const e=j.querySelector(".sidebar");e&&(e.classList.add("is-mounting"),setTimeout(()=>e.classList.remove("is-mounting"),900)),window.addEventListener("resize",()=>la()),document.fonts?.ready?.then(()=>la())}function la(){const e=j.querySelector(".nav-wrap"),a=j.querySelector(".nav-rail");if(e&&a){const o=e.querySelector(".nav-item.active")||e.querySelector(".nav-item");o&&(a.style.setProperty("--rail-y",`${o.offsetTop}px`),a.style.setProperty("--rail-h",`${o.offsetHeight}px`),a.classList.add("is-ready"))}const t=j.querySelector("#tabbar"),s=j.querySelector(".tabbar-rail");if(t&&s){const o=t.querySelector(".tabbar-item.active")||t.querySelector(".tabbar-item");o&&(s.style.setProperty("--rail-x",`${o.offsetLeft}px`),s.style.setProperty("--rail-w",`${o.offsetWidth}px`),s.classList.add("is-ready"))}}function Rn(){const e=V.find(E=>E.id===m.theme)||V[0],a=j.querySelector(".sidebar"),t=j.querySelector(".sidebar-backdrop"),s=j.querySelector(".mobile-menu");a&&(a.classList.toggle("is-open",Q),a.classList.toggle("is-collapsed",G),a.classList.toggle("is-ready",!0)),t&&t.classList.toggle("is-visible",Q),s&&s.setAttribute("aria-expanded",String(Q));for(const E of[".sidebar-collapse-btn",".desktop-sidebar-toggle"]){const P=j.querySelector(E);P&&(P.title=`${G?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)"}`,P.setAttribute("aria-expanded",String(!G)))}const o=j.querySelector(".sidebar-collapse-btn .icon");o&&(o.outerHTML=d(G?"right":"left")),j.querySelectorAll("#sidebar-nav .nav-item, #tabbar .tabbar-item").forEach(E=>{const P=E.dataset.view===F;E.classList.toggle("active",P),P?E.setAttribute("aria-current","page"):E.removeAttribute("aria-current")}),Vs();const n=j.querySelector("#ex-libris-slot");n&&(n.innerHTML=Ms(m,x.length));const r=j.querySelector("#sidebar-bottom");r&&(r.innerHTML=Gs());const i=j.querySelector("#breadcrumb-owner");i&&(i.textContent=m.name?`Cuaderno de ${m.name}`:"Diario");const p=j.querySelector("#breadcrumb-view");p&&(p.textContent=zs(F));const c=j.querySelector("#theme-pill-label");c&&(c.textContent=e.name);const u=j.querySelector("#theme-pill");u&&(u.title=`Cambiar papel e icono (${e.name})`);const g=j.querySelector("#theme-pill-favicon");g&&(g.innerHTML=ge(m.theme,m));const S=j.querySelector("#avatar-slot");S&&(S.innerHTML=m.name?`<span class="avatar-initial">${l(m.name.slice(0,1).toUpperCase())}</span>`:d("user"));const M=j.querySelector("#footer-motto");M&&(M.innerHTML=`${d("leaf")} ${l(m.motto||"Un día a la vez.")}`);const f=j.querySelector("#footer-owner");f&&(f.textContent=m.name?`Cuaderno de ${m.name}`:"Guardado localmente en este navegador"),Dt(),la()}function w(e={}){const a=()=>{Ae(m.theme,m),Zt||(j.innerHTML=Bn(),Zt=!0,zn()),Ws(e),Rn()};e.transition&&X&&typeof document.startViewTransition=="function"?document.startViewTransition(a):a()}function Ws(e={}){const a=document.querySelector("#main");if(!a)return;F==="thoughts"&&Br();const t=Vt!==F,o=t||!!Xe||le;le=!1;const n=window.scrollY,r=Xe?`page-turn-${Xe}`:t?"view-enter":"";Xe="",a.innerHTML=`
    ${be?`<div class="error-banner" role="alert">${l(be)}</div>`:""}
    ${In()}`,a.className=`${r}`,o?(a.classList.remove("view-enter"),a.offsetWidth,a.classList.add("view-enter"),Gn(a)):a.querySelectorAll(".tab-panel-enter").forEach(i=>i.classList.remove("tab-panel-enter")),Qr(),Lr(),wr(),Pr(),t?(Vt=F,window.scrollTo({top:0,behavior:e.instant?"auto":"smooth"})):n&&window.scrollTo(0,n),Ks()}function Gn(e){if(!X)return;[...e.querySelectorAll(".page-heading, .sea-panel, .card, .day-hero")].slice(0,12).forEach((t,s)=>{t.style.setProperty("--enter-i",s),t.classList.add("is-entering"),setTimeout(()=>t.classList.remove("is-entering"),520+s*55)})}function ma(e,a,t,s=""){return`<div class="page-heading">
    <div>${e?`<p class="eyebrow">${e}</p>`:""}<h1>${a}</h1>${t?`<p class="page-subtitle">${t}</p>`:""}</div>
    ${s}
  </div>`}function In(){switch(F){case"diary":return Yt();case"thoughts":return Kn();case"routine":return tr();case"archive":return cr();case"stats":return ur();case"setup":return mr();default:return Yt()}}function Un(){return`<div class="day-navigation">
    <button type="button" data-action="previous" aria-label="Día anterior">${d("left")}<span>Anterior</span></button>
    <button type="button" data-action="today" class="today-button">Hoy</button>
    <button type="button" data-action="next" ${$>=b()?"disabled":""}><span>Siguiente</span>${d("right")}</button>
  </div>`}function _n(){return m.completed?"":`<section class="card setup-welcome-banner">
    <div class="setup-welcome-content">
      <span class="soft-icon accent">${d("sliders")}</span>
      <div>
        <h2>Adapta el diario a tu edad y a tus gustos</h2>
        <p>En 30 segundos ajustamos las metas, los hábitos, las frases y el papel para que solo veas lo que te interesa.</p>
      </div>
    </div>
    <div class="setup-welcome-actions">
      <button type="button" class="button solid" data-action="open-setup-wizard">${d("sliders")} Personalizar ahora</button>
      <button type="button" class="button outline" data-action="dismiss-setup-banner">Omitir</button>
    </div>
  </section>`}function Wn(e,a){const t=e?Object.values(e.habits||{}).filter(Boolean).length:0,s=ln(m.name),o=Pa(N,$),n=o.drifting.length,r=o.returned.length;return`<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Día</small><span>${ua($,x)}</span></div>
      <div class="hero-meta">
        <p class="hero-greeting">${l(s)}</p>
        <span class="date-line">${D($)}</span>
        <p class="hero-line">
          <span class="entry-status ${e?"":"pending"}" id="hero-words-chip">${Ys(e)}</span>
          ${k.length?`<button type="button" class="hero-link" data-view="routine" id="hero-routine-chip">${t} de ${k.length} en la rutina</button><span class="hero-dot">·</span>`:""}
          ${r?`<button type="button" class="hero-link is-new" data-view="thoughts">${r} ${r===1?"botella":"botellas"} en la orilla</button>`:n?`<button type="button" class="hero-link" data-view="thoughts">${n} ${n===1?"botella":"botellas"} por ahí fuera</button>`:""}
          <span class="hero-dot">·</span>
          <span class="save-status" data-save-status>${Js()}</span>
        </p>
      </div>
    </div>
    <div class="hero-right">
      ${Un()}
    </div>
  </div>`}function et(e,a,t,s,o=!0){const n=s?String(s).trim().split(/\s+/).length:0;return`<div class="writing-field" data-field="${e}">
    <label for="${e}">${a}<span class="word-count">${n} palabras</span></label>
    <textarea id="${e}" name="${e}" maxlength="20000" placeholder="${l(t)}" class="${o?"large":""}">${l(s||"")}</textarea>
  </div>`}function Qn(e){const a=K(m);return a.length?`<div class="entry-parts">
    ${a.map(t=>{const s=`part_${t.key}`,o=e?.parts?.[t.key]||"",n=`<label for="${s}">${l(t.label)}${t.hint?`<small>${l(t.hint)}</small>`:""}</label>`,r=t.type==="line"?`<input id="${s}" name="${s}" class="clean-line-input" maxlength="600" placeholder="${l(t.hint||"…")}" value="${l(o)}">`:`<textarea id="${s}" name="${s}" maxlength="4000" rows="3" placeholder="${l(t.hint||"…")}">${l(o)}</textarea>`;return`<div class="writing-field part-field" data-part="${t.key}">${n}${r}</div>`}).join("")}
  </div>`:""}function Vn(e){const a=K(m).filter(t=>String(e?.parts?.[t.key]||"").trim());return a.length?`<div class="sheet-parts">${a.map(t=>`
    <div class="sheet-part"><span>${l(t.label)}</span><p>${l(e.parts[t.key])}</p></div>`).join("")}</div>`:""}function Zn(e=""){return`<div class="goal-row"><span class="goal-circle"></span>
    <input name="goal" aria-label="Objetivo para mañana" placeholder="Un objetivo concreto…" maxlength="500" value="${l(e)}">
    <button type="button" class="icon-button ghost" data-action="remove-goal" aria-label="Eliminar objetivo">${d("close")}</button>
  </div>`}function Yn(e,a){if(!e)return"";const t=k.filter(o=>e.habits?.[o.id]),s=m.name?`Cuaderno de ${m.name}`:"Resumen guardado";return`<section class="card daily-summary notebook-sheet reveal">
    <div class="sheet-header">
      <div>
        <p class="eyebrow">${d("book")} Día ${ua(e.date,x)}</p>
        <h2>${D(e.date)}</h2>
      </div>
      <span class="mood-tag" style="--mood:${T[e.mood-1].color}">${T[e.mood-1].emoji} ${T[e.mood-1].label}</span>
    </div>
    ${e.wordOfDay||e.capsule?`
      <div class="sheet-capsules">
        ${e.wordOfDay?`<div class="sheet-capsule-item"><span>Palabra del día</span><strong>«${l(e.wordOfDay)}»</strong></div>`:""}
        ${e.capsule?`<div class="sheet-capsule-item"><span>${l(a.capsuleLabel)}</span><strong>${l(e.capsule)}</strong></div>`:""}
      </div>
    `:""}
    <p class="sheet-narrative">${xo(e)}</p>
    ${e.bestOfDay?`<div class="sheet-quote-note"><span>Lo mejor:</span> «${l(e.bestOfDay)}»</div>`:""}
    ${Vn(e)}
    ${t.length?`<div class="sheet-habits-line">${d("check")} ${t.map(o=>`<b>${l(o.name)}</b>`).join(" · ")}</div>`:""}
    <div class="sheet-footer">
      <small>${l(s)} · ${ke(e)} palabras</small>
      <button type="button" class="text-button" data-action="read" data-date="${e.date}">Ver hoja completa ${d("arrow")}</button>
    </div>
  </section>`}function Jn(e){return e?!!(e.bestOfDay||e.differentToday||e.tomorrow||e.energy||e.stress||e.tags&&e.tags.length||e.gratitude&&e.gratitude.some(Boolean)):!1}function Yt(){const e=x.find(u=>u.date===$),a=B(m),t=Va?{triggered:!1}:wt(e||{}),s=tt($,xa),o=e?.mood?T[e.mood-1].color:"",n=e?.sleepHours??m.sleepGoal??a.sleepRecommended??7.5,r=e?.studyHours??0,i=Ke||Jn(e),p=[6,7,7.5,8,9],c=[0,1,2,3,4];return`
  ${_n()}
  ${Wn(e)}
  <div class="tide-rule-wrap">${Cs()}</div>
  <div id="crisis-alert-slot">${Ls(t,m)}</div>
  <div class="diary-layout ${aa?"is-focus-writing":""}">
    <div class="diary-main">
      <form id="diary-form" style="${o?`--active-mood:${o}`:""}" autocomplete="off">
        <div id="entry-draft-slot" data-live="1"></div>

        <!-- 1 · CAPTURA RÁPIDA -->
        <section class="card mood-card-section quick-capture">
          <div class="section-heading">
            <p class="section-index" style="margin-bottom:0">¿Cómo ha ido hoy?</p>
            <span class="capture-hint">${d("spark")} un clic vale como entrada</span>
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
                <label for="sleepHours">${d("moon")} Sueño</label>
                <div class="quick-pills" role="group" aria-label="Atajos de sueño">
                  ${p.map(u=>`<button type="button" class="quick-pill ${Number(n)===u?"active":""}" data-action="quick-number" data-target="sleepHours" data-val="${u}">${q(u)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="sleepHours" name="sleepHours" type="number" min="0" max="24" step="0.5" value="${n}">
                <span>horas (meta: ${q(m.sleepGoal||a.sleepRecommended)} h)</span>
              </div>
            </div>

            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="studyHours">${d("study")} ${l(a.focusLabel)}</label>
                <div class="quick-pills" role="group" aria-label="Atajos de dedicación">
                  ${c.map(u=>`<button type="button" class="quick-pill ${Number(r)===u?"active":""}" data-action="quick-number" data-target="studyHours" data-val="${u}">${q(u)}h</button>`).join("")}
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
        <section class="card writing-card-section">
          <div class="section-heading">
            <p class="section-index" style="flex:1">Tu página de hoy</p>
            <div class="writing-tools-bar">
              <button type="button" class="text-button prompt-trigger-btn" data-action="inspire-prompt">
                ${d("spark")} Sugerir tema
              </button>
              <button type="button" class="icon-button ghost" data-action="toggle-focus-writing" title="${aa?"Salir del modo enfoque":"Ampliar zona de escritura"}" aria-label="Modo enfoque">
                ${d("expand")}
              </button>
            </div>
          </div>
          <div id="writing-prompt-box" class="writing-prompt-banner ${Be?"is-open":""}" ${Be?"":"hidden"}>
            <div>
              <p id="writing-prompt-text">${l(s)}</p>
            </div>
            <div class="writing-prompt-actions">
              <button type="button" class="button outline small-btn" data-action="next-writing-prompt">${d("refresh")} Otra</button>
              <button type="button" class="button solid small-btn" data-action="insert-writing-prompt">${d("pen")} Usar</button>
            </div>
          </div>
          ${et("generalDay","Notas del día (opcional si solo quieres un registro rápido)",a.placeholders.generalDay,e?.generalDay,!0)}
          ${Qn(e)}
          <div class="capsule-word-grid">
            <div class="writing-field" data-field="capsule">
              <label for="capsule">${d("spark")} ${l(a.capsuleLabel)}</label>
              <input id="capsule" name="capsule" class="clean-line-input" maxlength="300" placeholder="${l(a.capsulePlaceholder)}" value="${l(e?.capsule||"")}">
            </div>
            <div class="writing-field" data-field="wordOfDay">
              <label for="wordOfDay">${d("book")} Palabra del día</label>
              <input id="wordOfDay" name="wordOfDay" class="clean-line-input" maxlength="60" placeholder="Una palabra que resuma hoy…" value="${l(e?.wordOfDay||"")}">
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
            <span class="extras-chevron">${d("chevronDown")}</span>
          </button>
          <div class="extras-Work-shell">
            <div class="extras-inner">
              <section class="card">
                <p class="section-index">Etiquetas de hoy</p>
                ${cn(e?.tags||[],a.tags)}
              </section>

              <section class="card">
                <p class="section-index">Momentos y energía</p>
                <div class="scale-block" style="margin-bottom:16px">
                  ${Ut("energy",is,e?.energy,"bolt","Energía","Del 1 al 5","Opcional")}
                  ${Ut("stress",ls,e?.stress,"storm","Estrés","Del 1 al 5","Opcional")}
                </div>
                ${et("bestOfDay","Lo mejor del día",a.placeholders.bestOfDay,e?.bestOfDay,!1)}
                ${et("differentToday","¿Qué ha sido distinto hoy?",a.placeholders.differentToday,e?.differentToday,!1)}
              </section>

              <section class="card">
                <p class="section-index">Tres cosas buenas</p>
                <div class="gratitude-fields">
                  ${["1. Hoy agradezco o valoro...","2. También...","3. Y además..."].map((u,g)=>`<label><span>0${g+1}</span><input name="gratitude${g}" aria-label="${u}" placeholder="${u}" maxlength="20000" value="${l(e?.gratitude?.[g]||"")}"></label>`).join("")}
                </div>
                <p class="aside-note" style="margin-top:14px">${d("listChecks")}<span>Lo de mañana (intención y tareas) se apunta en la pestaña <button type="button" class="inline-link" data-view="routine">Rutina</button>.</span></p>
              </section>
            </div>
          </div>
        </div>

        <div class="save-area">
          <span>${d("lock")} Se guarda al instante en tu navegador.</span>
          <button class="button solid save-button" type="submit" ${be?"disabled":""}>${d("stamp")} Guardar día</button>
        </div>
      </form>
      ${Yn(e,a)}
    </div>

    <aside class="diary-aside">
      ${qn(N)}
      <div id="inspiration-slot">${Ds($,qt,Mt,m,e,e?.wordOfDay||"")}</div>
      ${Hn(k,e,x,$)}
      ${Qs()}
      <div id="quote-slot">${As($,Et,m)}</div>
    </aside>
  </div>`}function Qs(){const e=ve($),a=L(e,6),t=te(x,e,a),s=qe(t);return`<section class="card week-preview">
    <div class="section-heading"><h2>Esta semana</h2><span class="tag">${t.length}/7 días</span></div>
    <div class="week-dots">
      ${Array.from({length:7},(o,n)=>{const r=L(e,n),i=t.find(p=>p.date===r);return`<button type="button" data-action="open-day" data-date="${r}" ${r>b()?"disabled":""} aria-label="${D(r)}${i?", "+T[i.mood-1].label:""}">
          <span>${["L","M","X","J","V","S","D"][n]}</span>
          <i class="${i?"filled":""} ${r===b()?"current":""}" style="--mood:${i?T[i.mood-1].color:""}">${i?d("check"):"·"}</i>
        </button>`}).join("")}
    </div>
    <div class="mini-metrics">
      <div>${d("heart")}<strong>${s.count?q(s.mood):"—"}<small>/5</small></strong><span>Ánimo</span></div>
      <div>${d("moon")}<strong>${s.count?q(s.sleep):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${d("study")}<strong>${s.count?q(s.study):"—"}<small>h</small></strong><span>Enfoque</span></div>
    </div>
    <button class="text-button full-link" data-view="stats">Ver progreso completo ${d("arrow")}</button>
  </section>`}function Kn(){const e=b(),a=Pa(N,e),t=[["shore","anchor","En la orilla",a.returned.length],["sea","wave","Por ahí fuera",a.drifting.length],["kept","bookmark","Ancladas",a.kept.length],["lost","storm","Nunca volvieron",a.lost.length]];return`${ma("Pensamientos","El mar","Lo que no quieres dejar escrito aquí lo cierras y lo tiras. De vez en cuando vuelve algo.")}
  ${vn(N,e)}
  <div class="tide-rule-wrap is-after-sea">${Cs()}</div>
  <div class="ocean-layout">
    <div class="ocean-main">
      <div id="composer-slot">${wn(m,e,ie)}</div>
      <div class="segmented ocean-tabs">
        ${t.map(([s,o,n,r])=>`<button type="button" data-action="thoughts-tab" data-tab="${s}" class="${Re===s?"active":""}">
          ${d(o)} ${l(n)}${r?`<span class="seg-count">${r}</span>`:""}
        </button>`).join("")}
      </div>
      <div id="ocean-body" class="tab-panel-enter">${Xn(a,e)}</div>
    </div>
    <aside class="ocean-aside">
      ${ar(a,e)}
    </aside>
  </div>`}function Xn(e,a){if(!N.length)return Mn(Re);const s={shore:e.returned,sea:e.drifting,kept:e.kept,lost:e.lost}[Re]??e.returned;return s.length?`<div class="bottle-grid">${s.map((o,n)=>Sn(o,a,n)).join("")}</div>`:er(Re)}function er(e){const a={shore:["La orilla está seca","Cuando vuelva alguna, aparecerá aquí y en la portada."],sea:["Nada a la deriva","Lo que eches se verá por aquí hasta que el mar lo devuelva."],kept:["Nada anclado","Al abrir una botella puedes dejarla prendida del cuaderno."],lost:["El mar no se ha quedado nada","Todavía."]},[t,s]=a[e]||a.shore;return`${La(t,s,e==="lost"?"":`<button type="button" class="button outline" data-action="focus-composer">${d("pen")} Escribir un pensamiento</button>`)}`}function ar(e,a){const t=e.drifting[0];return`<section class="card sea-rules">
    <p class="field-title">${d("wave")} Cómo va esto</p>
    <ol class="sea-rules-list">
      <li>Se escribe, se echa y se deja estar. No hay que volver a mirar.</li>
      <li>Cuanto más lejos la tires, más tarda y más fácil que no regrese.</li>
      <li>Lo decide este cuaderno, con tu texto y la fecha: sin servidores y sin IA.</li>
      <li>Si vuelve, la lees, la anclas o la tiras otra vez. Si no, se queda fuera.</li>
    </ol>
    ${t?`<p class="sea-rules-now">${l(ht(t,a))}.</p>`:'<p class="sea-rules-now">Nada en el agua ahora mismo.</p>'}
  </section>`}function tr(){const e=x.find(t=>t.date===$);return`${ma("Rutina","Hábitos, contadores y la lista de mañana","Todo lo que se marca en un toque y se guarda al instante, sin escribir una sola línea.",`
    <div class="segmented">
      ${[["hoy","listChecks","Hoy"],["week","grid","Semana"],["counters","drop","Contadores"],["streaks","flame","Rachas"]].map(([t,s,o])=>`<button type="button" data-action="routine-tab" data-tab="${t}" class="${ea===t?"active":""}">${d(s)} ${l(o)}</button>`).join("")}
    </div>
  `)}
  <div class="routine-layout">
    <div class="routine-main tab-panel-enter">
      ${or(e)}
      <div id="routine-body">${nr(e)}</div>
    </div>
    <aside class="routine-aside">${dr(e)}</aside>
  </div>`}function sr(){return`<div class="day-navigation">
    <button type="button" data-action="shift-day" data-delta="-1" aria-label="Día anterior">${d("left")}<span>Anterior</span></button>
    <button type="button" data-action="today-routine" ${$===b()?"disabled":""}>${d("sun")} Hoy</button>
    <button type="button" data-action="shift-day" data-delta="1" ${$>=b()?"disabled":""}><span>Siguiente</span>${d("right")}</button>
  </div>`}function or(e){const a=k.filter(n=>e?.habits?.[n.id]).length,t=k.length?Math.round(a/k.length*100):0,s=k.length?a===0?"Aún no has marcado nada":a===k.length?"Rutina completa":`Vas a ${a} de ${k.length}`:"Tu lista está vacía",o=t>=100?"Todos los casilleros llenos: eso también se lee en tus estadísticas.":t>0?"Cada casilla cuenta igual que un párrafo entero.":"Si hoy no puedes con todo, marca uno y da el día por bueno.";return`<section class="card routine-hero">
    <div class="routine-hero-copy">
      <p class="eyebrow">${d("sun")} ${l(D($,{weekday:"long",day:"numeric",month:"long"}))}</p>
      <h2>${l(s)}</h2>
      <p class="routine-hero-note">${l(o)}</p>
      ${sr()}
    </div>
    ${Ps(t,k.length?`${t}%`:"—","de hoy")}
  </section>`}function nr(e){const a=B(m),t=b();if(ea==="week")return`${Ln(x,k,{days:35,end:t,today:t,title:"Tus últimas cinco semanas"})}${rr()}`;if(ea==="counters"){const s=te(x,L(t,-27),t);return`${jn(e,m,[])||""}${Es(s,m)}`}return ea==="streaks"?k.length?`${Dn(k,x,t)}${ir()}`:La("Todavía no hay hábitos","Añade el primero y en unos días verás aquí sus rachas y su constancia.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="hoy">${d("plus")} Crear hábitos</button>`):`${k.length?`<section class="card habit-board-card">
    <div class="section-heading">
      <div><p class="eyebrow">${d("listChecks")} La tasklist de hoy</p><h2>Marcar y seguir</h2></div>
      <span class="field-caption">${k.filter(s=>e?.habits?.[s.id]).length}/${k.length}</span>
    </div>
    ${An(k,e,x,$,t)}
    <p class="board-hint">${d("spark")} Toca un hábito para marcarlo: se guarda solo, sin botón de guardar.</p>
  </section>`:La("Sin hábitos todavía","Crea tu lista abajo o toma prestados los sugeridos para tu etapa.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="streaks">${d("flame")} Ver rachas</button>`)}
  ${Tn(e,$)}
  ${Cn(a,k)}`}function rr(){const e=ve($),a=L(e,6),t=te(x,e,a),s=k.map(o=>{const n=t.filter(r=>r.habits?.[o.id]).length;return{label:o.name,count:n,total:7,color:n>=5?"var(--green)":n>=3?"var(--ochre)":"var(--red)"}});return`<section class="card">
    <div class="section-heading"><div><p class="eyebrow">${d("week")}Esta semana</p><h2>${l(D(e,{day:"numeric",month:"short"}))} → ${l(D(a,{day:"numeric",month:"short"}))}</h2></div>
      <span class="tag">${t.length}/7 días con entrada</span></div>
    ${k.length?St(s):'<p class="habit-empty">Añade hábitos para ver su semana.</p>'}
  </section>`}function ir(){const e=k.map(t=>({h:t,best:fs(x,t.id),live:Ta(x,t.id)})).filter(t=>t.best>0).sort((t,s)=>s.best-t.best).slice(0,6);if(!e.length)return"";const a=e[0].best||1;return`<section class="card streak-board">
    <div class="section-heading"><div><p class="eyebrow">${d("flame")}El muro de las rachas</p><h2>Tus mejores series</h2></div><span class="field-caption">días seguidos</span></div>
    <ol class="streak-ranks">
      ${e.map((t,s)=>`<li>
        <span class="streak-rank">${String(s+1).padStart(2,"0")}</span>
        <span class="streak-name">${l(t.h.name)}</span>
        <span class="streak-bar"><i style="width:${Math.max(6,Math.round(t.best/a*100))}%"></i></span>
        <span class="streak-num"><b>${t.best}</b> d${t.live?` · viva ${t.live}`:""}</span>
      </li>`).join("")}
    </ol>
  </section>`}function lr(){return k.length?x.filter(e=>k.every(a=>e.habits?.[a.id])).length:0}function dr(e){const a=b(),t=te(x,L(a,-27),a),s=e?Math.min(100,Math.round(e.sleepHours/(m.sleepGoal||7.5)*100)):0;return`
  <section class="card routine-day-card">
    <div class="section-heading"><h2>El día en cifras</h2><span class="tag">${l(D($,{day:"numeric",month:"short"}))}</span></div>
    <div class="mini-metrics">
      <div>${d("moon")}<strong>${e?q(e.sleepHours):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${d("study")}<strong>${e?q(e.studyHours):"—"}<small>h</small></strong><span>Enfoque</span></div>
      <div>${d("drop")}<strong>${e?.counters?.water||0}<small>v</small></strong><span>Agua</span></div>
    </div>
    ${e?`<div class="sleep-goal-bar"><span style="width:${s}%"></span></div>
      <p class="field-caption">${l(ys(e.sleepHours))}</p>`:'<p class="habit-empty">Este día no tiene entrada en el cuaderno.</p>'}
    <button type="button" class="text-button full-link" data-action="open-day" data-date="${$}">Escribir sobre este día ${d("arrow")}</button>
  </section>
  <section class="card">
    <div class="section-heading"><h2>Rachas del cuaderno</h2><span class="field-caption">28 días</span></div>
    <div class="streak-lines">
      <div><span>${d("flame")} Días seguidos escribiendo</span><strong>${gs(x)}</strong></div>
      <div><span>${d("seal")} Mejor racha histórica</span><strong>${hs(x)}</strong></div>
      <div><span>${d("check")} Días con toda la rutina</span><strong>${lr()}</strong></div>
      <div><span>${d("moon")} Sueño medio</span><strong>${t.length?q(qe(t).sleep):"—"} h</strong></div>
    </div>
  </section>
  ${Qs()}`}function cr(){const e=[...new Set(x.flatMap(t=>t.tags||[]))],a=x.filter(t=>(!ya||t.mood===+ya)&&(!$a||(t.tags||[]).includes($a))&&(!va||[t.date,t.generalDay,t.bestOfDay,t.differentToday,t.tomorrow,t.wordOfDay,t.capsule,...t.gratitude,...t.goals||[],...t.tags||[]].join(" ").toLocaleLowerCase().includes(va.toLocaleLowerCase()))).sort((t,s)=>s.date.localeCompare(t.date));return`${ma("Archivo",m.name?`Recuerdos de ${l(m.name)}`:"Tus días guardados",`${x.length} ${x.length===1?"entrada":"entradas"} · ${q(x.reduce((t,s)=>t+ke(s),0))} palabras`,`
    <div class="segmented">
      <button type="button" data-action="archive-tab" data-tab="list" class="${Sa==="list"?"active":""}">${d("book")} Lista</button>
      <button type="button" data-action="archive-tab" data-tab="calendar" class="${Sa==="calendar"?"active":""}">${d("calendar")} Calendario</button>
    </div>
  `)}

  ${Sa==="calendar"?`
    <div class="tab-panel-enter">
      <section class="card full-calendar">
        ${pn(J,x,{selected:$})}
        <div class="mood-legend">
          ${T.map(t=>`<span><i style="background:${t.color}"></i>${t.label}</span>`).join("")}
        </div>
      </section>
    </div>
  `:`
    <div class="tab-panel-enter">
      <div class="history-controls">
        <label class="search-box">${d("search")}<input id="history-search" aria-label="Buscar en el diario" placeholder="Buscar por palabra, nota o etiqueta…" value="${l(va)}"></label>
        <select id="history-mood" aria-label="Filtrar por estado de ánimo">
          <option value="">Todos los estados</option>
          ${T.map(t=>`<option value="${t.value}" ${ya==t.value?"selected":""}>${t.emoji} ${t.label}</option>`).join("")}
        </select>
        ${e.length?`
          <select id="history-tag" aria-label="Filtrar por etiqueta">
            <option value="">Todas las etiquetas</option>
            ${e.map(t=>`<option value="${l(t)}" ${$a===t?"selected":""}>#${l(t)}</option>`).join("")}
          </select>
        `:""}
        <div class="segmented">
          <button type="button" data-action="history-layout" data-layout="grid" class="${wa==="grid"?"active":""}">Tarjetas</button>
          <button type="button" data-action="history-layout" data-layout="timeline" class="${wa==="timeline"?"active":""}">Hilo</button>
        </div>
      </div>
      <div class="${wa==="timeline"?"history-timeline":"history-grid"}">
        ${a.length?a.map((t,s)=>{const o=Object.values(t.habits||{}).filter(Boolean).length;return`<article class="card history-card" style="--mood:${T[t.mood-1].color};--i:${Math.min(s,10)}">
            <div class="section-heading">
              <p class="eyebrow">Día ${ua(t.date,x)}</p>
              <span class="mood-tag" style="--mood:${T[t.mood-1].color}">${T[t.mood-1].emoji} ${T[t.mood-1].label}</span>
            </div>
            <h2>${D(t.date,{day:"numeric",month:"long",year:"numeric"})}</h2>
            <p class="entry-excerpt">${l(t.generalDay)}</p>
            ${t.wordOfDay||t.capsule?`
              <div class="history-capsules">
                ${t.wordOfDay?`<span class="history-word-pill">«${l(t.wordOfDay)}»</span>`:""}
                ${t.capsule?`<span class="history-capsule-pill">${d("spark")} ${l(t.capsule)}</span>`:""}
              </div>
            `:""}
            <div class="history-numbers">
              <span class="chiplet">${d("moon")} ${q(t.sleepHours)} h</span>
              <span class="chiplet">${d("study")} ${q(t.studyHours)} h</span>
              ${k.length?`<span class="chiplet">${d("check")} ${o}/${k.length}</span>`:""}
              <span class="chiplet">${d("pen")} ${ke(t)} pal.</span>
            </div>
            <div class="history-actions">
              <button class="text-button" data-action="read" data-date="${t.date}">Abrir ${d("arrow")}</button>
              <button class="icon-button ghost" data-action="open-day" data-date="${t.date}" aria-label="Editar">${d("pen")}</button>
              <button class="icon-button ghost delete-button" data-action="delete" data-date="${t.date}" aria-label="Eliminar">${d("trash")}</button>
            </div>
          </article>`}).join(""):La(x.length?"Sin resultados":"Aún no hay entradas guardadas","Las páginas que guardes aparecerán aquí.")}
      </div>
    </div>
  `}`}function ur(){return`${ma("Progreso",m.name?`Tu evolución, ${l(m.name.split(" ")[0])}`:"Tu evolución","Tus patrones de descanso, ánimo, hábitos y metas personales.",`
    <div class="segmented">
      <button type="button" data-action="stats-tab" data-tab="pulse" class="${Pe==="pulse"?"active":""}">Pulso y metas</button>
      <button type="button" data-action="stats-tab" data-tab="week" class="${Pe==="week"?"active":""}">Semana</button>
      <button type="button" data-action="stats-tab" data-tab="month" class="${Pe==="month"?"active":""}">Mes</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${Pe==="week"?Jt(!1):Pe==="month"?Jt(!0):pr()}
  </div>`}function pr(){const e=b(),a=L(e,1-Oe),t=te(x,a,e),s=te(x,L(a,-Oe),L(a,-1)),o=qe(t),n=qe(s),r=qo(x),i=B(m),p=(c,u)=>{if(t.length<3||s.length<3||!Number.isFinite(o[c])||!Number.isFinite(n[c]))return"";const g=o[c]-n[c];return`${g>0?"↑":g<0?"↓":"→"} ${q(Math.abs(g))}${u} vs. anterior`};return`
  <div class="ledger-grid">
    ${ue("Estado medio",o.count?q(o.mood):"—","/ 5",p("mood",""))}
    ${ue("Sueño medio",o.count?q(o.sleep):"—","h",p("sleep"," h"))}
    ${ue(i.focusLabel,o.count?q(o.study):"—","h",p("study"," h"))}
    ${ue("Racha actual",gs(x),"días",`${o.count} días registrados`)}
  </div>
  ${Es(t,m)}
  <section class="card chart-card">
    <div class="section-heading">
      <h2>Ánimo y horas de sueño</h2>
      <div class="segmented">
        <button type="button" data-action="range" data-range="7" class="${Oe===7?"active":""}">7 días</button>
        <button type="button" data-action="range" data-range="30" class="${Oe===30?"active":""}">30 días</button>
      </div>
    </div>
    ${mn(t,a,Oe,m)}
    <div class="chart-dates"><span>${D(a,{day:"numeric",month:"short"})}</span><span>${D(e,{day:"numeric",month:"short"})}</span></div>
  </section>
  <section class="card">
    <div class="section-heading">
      <h2>Últimos 28 días</h2>
      <span class="field-caption">Pulsa cualquier día para abrirlo</span>
    </div>
    ${hn(x,e,28)}
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Tendencias detectadas</h2>
      <div style="margin-top:10px">
        ${r.length?r.map(c=>`<p class="trend-item">${d("arrow")}<span>${c}</span></p>`).join(""):'<p class="habit-empty">Con 3 o más registros por semana verás comparativas automáticas aquí.</p>'}
      </div>
    </section>
    <section class="card">
      <h2>Etiquetas más frecuentes</h2>
      ${Ft(t).length?St(Ft(t).slice(0,6).map(([c,u])=>({label:c,count:u,total:t.length,color:"var(--red)"}))):'<p class="habit-empty">Aún no hay etiquetas en este período.</p>'}
    </section>
  </div>`}function Jt(e){const[a,t]=e?ms(J):[ve($),L(ve($),6)],s=te(x,a,t),o=qe(s);return`
  <div class="section-heading" style="margin-bottom:16px">
    <h2>${e?D(J,{month:"long",year:"numeric"}):`${D(ve($),{day:"numeric",month:"short"})} – ${D(L(ve($),6),{day:"numeric",month:"short",year:"numeric"})}`}</h2>
    <div class="period-controls">
      <button class="icon-button ghost" data-action="period-prev" data-monthly="${e?"1":"0"}" aria-label="Anterior">${d("left")}</button>
      <button class="icon-button ghost" data-action="period-next" data-monthly="${e?"1":"0"}" aria-label="Siguiente">${d("right")}</button>
    </div>
  </div>
  <div class="ledger-grid">
    ${ue("Días registrados",o.count,e?"días":"/ 7")}
    ${ue("Estado medio",o.count?q(o.mood):"—","/ 5")}
    ${ue("Sueño medio",o.count?q(o.sleep):"—","h")}
    ${ue("Dedicación media",o.count?q(o.study):"—","h")}
  </div>
  <section class="card period-summary">
    <span class="soft-icon">${d("leaf")}</span>
    <div>
      <p>${ko(o,e)}</p>
    </div>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Días destacados</h2>
      <div class="highlights" style="grid-template-columns:1fr 1fr">
        ${ha("Mejor día",o.best)}
        ${ha("Más sueño",o.mostSleep,"sleepHours")}
        ${ha("Más dedicación",o.mostStudy,"studyHours")}
        ${ha("Día más difícil",o.worst)}
      </div>
    </section>
    <section class="card">
      <h2>Distribución de estados</h2>
      <div style="margin-top:14px">
        ${St(T.map((n,r)=>({label:`${n.emoji} ${n.label}`,count:o.moods[r],total:o.count,color:n.color})))}
      </div>
    </section>
  </div>`}function mr(){return`${ma("Perfil y ajustes","Hecho a tu medida","Personaliza tu identidad, tus gustos, el papel del cuaderno o haz una copia de seguridad.",`
    <div class="segmented">
      <button type="button" data-action="profile-tab" data-tab="personal" class="${Fe==="personal"?"active":""}">${d("sliders")} Mi perfil</button>
      <button type="button" data-action="profile-tab" data-tab="custom" class="${Fe==="custom"?"active":""}">${d("paper")} Personalizar</button>
      <button type="button" data-action="profile-tab" data-tab="data" class="${Fe==="data"?"active":""}">${d("shield")} Datos y copias</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${Fe==="data"?yr():Fe==="custom"?fr():vr()}
  </div>`}function pe(e,a="Guardado."){try{m=re(e)}catch(t){v(t.message||"No se pudo guardar.",!0);return}w(),a&&v(a)}function hr(e,a){if(!X)return;const t=document.querySelector(`[data-${e}-row="${a}"]`);t&&(t.classList.add("is-fresh"),setTimeout(()=>t.classList.remove("is-fresh"),620))}function Ca(e,a,t="label"){const s=document.querySelector(`[data-edit="${e}"][data-key="${a}"][data-field="${t}"]`);s&&(s.focus(),s.select&&s.select())}function Kt(e=""){const a=K(m);if(a.length>=Se){v(`Con ${Se} partes es más que suficiente.`,!0);return}const t=cs.find(n=>n.label===e),s=t?t.label:String(document.querySelector("#new-part-label")?.value||"").trim().slice(0,60);if(!s){v("Escribe un título para la parte.",!0),document.querySelector("#new-part-label")?.focus();return}if(a.some(n=>n.label.toLowerCase()===s.toLowerCase())){v("Esa parte ya está en el diario.",!0);return}const o=ps("p");pe({parts:[...a,{key:o,label:s,hint:t?.hint||"",type:t?.type||"text"}]},"Añadida, ya está en la página de hoy."),hr("part",o),Ca("part",o)}function gr(){const e=ne(m);if(e.length>=xe){v(`No hacen falta más de ${xe} contadores.`,!0);return}const a=String(document.querySelector("#new-counter-label")?.value||"").trim().slice(0,28);if(!a){v("El contador necesita un nombre.",!0),document.querySelector("#new-counter-label")?.focus();return}if(e.some(s=>s.label.toLowerCase()===a.toLowerCase())){v("Ya tienes un contador con ese nombre.",!0);return}const t=ps("c");pe({counters:[...e,{key:t,label:a,unit:String(document.querySelector("#new-counter-unit")?.value||"").trim().slice(0,14),goal:parseFloat(document.querySelector("#new-counter-goal")?.value)||0,min:0,max:Math.max(20,(parseFloat(document.querySelector("#new-counter-goal")?.value)||0)*3),step:1,icon:"gauge"}]},"Contador añadido a la Rutina."),Ca("counter",t)}function br(e){const a=e.dataset.edit,t=e.dataset.key,s=e.dataset.field;if(a==="part"){if(s==="label"&&!String(e.value).trim()){v("Sin título no puede estar: escribe uno o quítala.",!0),w();return}pe({parts:K(m).map(o=>o.key===t?{...o,[s]:e.value}:o)},""),Ca("part",t,s);return}if(a==="counter"){const n={counters:ne(m).map(r=>r.key!==t?r:s==="goal"?r.key==="water"?r:{...r,goal:parseFloat(e.value)||0}:{...r,[s]:e.value})};s==="goal"&&t==="water"&&(n.waterGoal=Math.min(25,Math.max(0,parseFloat(e.value)||0))||8),pe(n,""),Ca("counter",t,s)}}function fr(){const e=K(m),a=ne(m);return`<div class="custom-grid">
    <section class="card custom-card">
      <div class="section-heading">
        <div><p class="eyebrow">${d("paper")} Partes del diario</p><h2>Qué quieres escribir cada día</h2></div>
        <span class="field-caption">${e.length} de ${Se}</span>
      </div>
      <p class="custom-lead">Cada parte es un campo con tu título dentro de «Tu página de hoy». Se guarda con el día y se lee en el archivo.</p>
      ${e.length?`<ul class="custom-list">
        ${e.map(t=>`<li class="custom-row custom-row--part" data-part-row="${t.key}">
          <input class="custom-input custom-input--label" value="${l(t.label)}" maxlength="60" aria-label="Título de la parte" data-edit="part" data-key="${t.key}" data-field="label">
          <input class="custom-input custom-input--hint" value="${l(t.hint)}" maxlength="140" placeholder="texto de ayuda, opcional" aria-label="Texto de ayuda" data-edit="part" data-key="${t.key}" data-field="hint">
          <div class="micro-seg">${co.map(s=>`<button type="button" class="${t.type===s.id?"active":""}" data-action="part-type" data-key="${t.key}" data-val="${s.id}">${s.label}</button>`).join("")}</div>
          <button type="button" class="icon-button ghost custom-remove" data-action="remove-part" data-key="${t.key}" aria-label="Quitar ${l(t.label)}">${d("close")}</button>
        </li>`).join("")}
      </ul>`:'<p class="custom-none">Nada por ahora: el diario se queda con sus campos de siempre.</p>'}
      <div class="custom-add">
        <input id="new-part-label" class="custom-input" maxlength="60" placeholder="Título de la parte…" aria-label="Título de la parte nueva">
        <button type="button" class="button outline" data-action="add-part">${d("plus")} Añadir parte</button>
      </div>
      ${e.length<Se?`<div class="custom-presets">
        <span class="custom-presets-label">O coge una ya escrita:</span>
        ${cs.filter(t=>!e.some(s=>s.label===t.label)).map(t=>`<button type="button" class="custom-preset" data-action="part-preset" data-val="${l(t.label)}">${l(t.label)}</button>`).join("")}
      </div>`:""}
    </section>

    <section class="card custom-card">
      <div class="section-heading">
        <div><p class="eyebrow">${d("gauge")} Contadores</p><h2>Qué cuentas</h2></div>
        <span class="field-caption">${a.length} de ${xe}</span>
      </div>
      <p class="custom-lead">Los de siempre se pueden renombrar o quitar. Los tuyos llevan unidad y meta, y aparecen en la pestaña de Rutina junto a los otros.</p>
      <ul class="custom-list custom-list--counters">
        <li class="custom-head"><span>Nombre</span><span>Unidad</span><span>Meta</span><span>Icono</span><span></span></li>
        ${a.map(t=>`<li class="custom-row custom-row--counter" data-counter-row="${t.key}">
          <input class="custom-input custom-input--label" value="${l(t.label)}" maxlength="28" aria-label="Nombre del contador" data-edit="counter" data-key="${t.key}" data-field="label">
          <input class="custom-input custom-input--unit" value="${l(t.unit)}" maxlength="14" aria-label="Unidad" data-edit="counter" data-key="${t.key}" data-field="unit">
          <input class="custom-input custom-input--goal" type="number" min="0" max="9999" step="1" value="${ct(t,m)||""}" placeholder="—" aria-label="Meta diaria" data-edit="counter" data-key="${t.key}" data-field="goal">
          <select class="custom-select" aria-label="Icono" data-edit="counter" data-key="${t.key}" data-field="icon">
            ${ds.map(s=>`<option value="${s}" ${t.icon===s?"selected":""}>${s}</option>`).join("")}
          </select>
          <button type="button" class="icon-button ghost custom-remove" data-action="remove-counter" data-key="${t.key}" aria-label="Quitar ${l(t.label)}">${d("close")}</button>
        </li>`).join("")}
      </ul>
      <div class="custom-add custom-add--counter">
        <input id="new-counter-label" class="custom-input" maxlength="28" placeholder="Nombre" aria-label="Nombre del contador nuevo">
        <input id="new-counter-unit" class="custom-input custom-input--unit" maxlength="14" placeholder="unidad" aria-label="Unidad del contador nuevo">
        <input id="new-counter-goal" class="custom-input custom-input--goal" type="number" min="0" max="9999" step="1" placeholder="meta" aria-label="Meta diaria del contador nuevo">
        <button type="button" class="button outline" data-action="add-counter">${d("plus")} Añadir contador</button>
      </div>
      <p class="custom-foot">
        <button type="button" class="text-button" data-action="reset-counters">${d("refresh")} Dejar los cuatro de siempre</button>
        <span>Las cifras ya anotadas se conservan aunque quites un contador.</span>
      </p>
    </section>
  </div>`}function vr(){const e=B(m),a=new Set(k.map(s=>s.name.toLowerCase())),t=new Set(m.interests||[]);return`<form id="setup-page-form" class="setup-page-grid">
    <section class="card">
      <h2>Identidad y etapa vital</h2>
      <div class="setup-name-age-row">
        <div class="setup-field">
          <label for="sp-name">${d("user")} Tu nombre o apodo</label>
          <input id="sp-name" name="name" maxlength="50" placeholder="Tu nombre…" value="${l(m.name)}">
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
          ${sa.map(s=>`
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
        <input id="sp-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${l(m.motto)}">
      </div>
    </section>

    <section class="card">
      <h2>Tus gustos y estilo</h2>
      <p class="field-caption" style="margin:6px 0 8px">El diario adapta sus contadores, etiquetas y frases a lo que marques aquí:</p>
      <div class="interests-grid">
        ${ja.map(s=>`
          <label class="interest-chip">
            <input type="checkbox" name="interests" value="${s.id}" ${t.has(s.id)?"checked":""}>
            <span>${d(s.icon)} ${l(s.label)}</span>
          </label>
        `).join("")}
      </div>

      <div class="two-columns" style="margin-top:16px">
        <div class="setup-field" style="margin-top:0">
          <label>Momento habitual</label>
          <div class="ritual-stack">
            ${oa.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="ritual" value="${s.id}" ${(m.ritual||"night")===s.id?"checked":""}>
                <span class="purpose-icon">${d(s.icon)}</span>
                <div><strong>${l(s.label)}</strong></div>
              </label>
            `).join("")}
          </div>
        </div>
        <div class="setup-field" style="margin-top:0">
          <label>Tono de las frases</label>
          <div class="ritual-stack">
            ${na.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="tone" value="${s.id}" ${(m.tone||"warm")===s.id?"checked":""}>
                <div><strong>${l(s.label)}</strong><small>${l(s.desc)}</small></div>
              </label>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="card">
      <h2>Metas, hábitos y frases propias</h2>
      <p class="field-caption" style="margin-top:6px">Los hábitos que elijas se marcan en su propia pestaña, <b>Rutina</b>, junto a los contadores.</p>
      <div class="age-adaptation-callout" id="sp-adaptation-callout" style="margin-top:12px">
        ${d("compass")}
        <div>
          <strong>Etapa activa: ${l(e.group.title)} (${l(e.group.label)})</strong>
          <p>Sueño recomendado: <b>${q(e.sleepRecommended)} h</b> · Dedicación sugerida: <b>${q(e.studyRecommended)} h</b>.</p>
        </div>
      </div>
      <div class="goals-setup-grid">
        <div class="setup-field">
          <label for="sp-sleep">${d("moon")} Meta de sueño (h)</label>
          <input id="sp-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${m.sleepGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-study">${d("study")} Meta de dedicación (h)</label>
          <input id="sp-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${m.studyGoal}">
        </div>
      </div>
      <div class="setup-field" style="margin-top:16px">
        <label>Hábitos sugeridos para tu perfil</label>
        <div class="tag-picker" id="sp-suggested-habits">
          ${e.suggestedHabits.map(s=>{const o=a.has(s.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${l(s)}" ${o?"checked":""}><span>${o?"✓ ":"+ "}${l(s)}</span></label>`}).join("")}
        </div>
      </div>
      <div class="setup-field" style="margin-top:18px">
        <label>${d("quote")} Tus frases guardadas (${(m.savedQuotes||[]).length})</label>
        ${(m.savedQuotes||[]).length?`
          <div class="saved-quotes-list">
            ${m.savedQuotes.map((s,o)=>`
              <div class="saved-quote-item">
                <span>«${l(s)}»</span>
                <button type="button" class="icon-button ghost" data-action="remove-saved-quote" data-index="${o}" aria-label="Quitar frase">${d("close")}</button>
              </div>
            `).join("")}
          </div>
        `:""}
        <div class="habit-add" style="margin-top:10px">
          <label class="sr-only" for="new-custom-quote">Frase propia</label>
          <input id="new-custom-quote" maxlength="240" placeholder="Añade una frase propia…" aria-label="Frase propia para tu cuaderno">
          <button type="button" class="icon-button" data-action="add-custom-quote" aria-label="Añadir frase">${d("plus")}</button>
        </div>
      </div>
    </section>

    <section class="card">
      <h2>Papel e icono de la pestaña</h2>
      <div class="setup-field">
        <div class="theme-picker-grid">
          ${V.map(s=>`
            <label class="theme-card">
              <input type="radio" name="theme" value="${s.id}" ${m.theme===s.id?"checked":""}>
              <div class="theme-card-top">
                <span class="theme-favicon-preview">${ge(s.id,m)}</span>
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
          <input type="checkbox" name="sidebarCollapsed" ${G?"checked":""}>
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
      <span>${d("lock")} Guardado localmente en este dispositivo.</span>
      <button type="submit" class="button solid save-button">${d("check")} Guardar perfil</button>
    </div>
  </form>`}function yr(){return`
  <div class="two-columns">
    <section class="card">
      <h2>Exportar copia de seguridad</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Descarga todas tus entradas, hábitos y tu perfil en un archivo JSON para guardarlo o llevarlo a otro dispositivo.</p>
      <button class="button solid" data-action="export">${d("download")} Descargar copia (.json)</button>
    </section>
    <section class="card">
      <h2>Importar copia</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Recupera un archivo JSON exportado previamente. Te pedirá confirmación antes de fusionar los datos.</p>
      <button class="button outline" data-action="import">${d("upload")} Seleccionar archivo</button>
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
    <button class="button danger" data-action="clear">${d("trash")} Borrar todo</button>
  </section>`}function $r(e){const a=x.find(s=>s.date===e),t=B(m);return a?{...a}:{date:e,mood:3,sleepHours:m.sleepGoal||t.sleepRecommended||7.5,studyHours:0,energy:null,stress:null,bestOfDay:"",differentToday:"",generalDay:"Registro rápido desde la rutina.",wordOfDay:"",capsule:"",gratitude:["","",""],tomorrow:"",goals:[],tags:[],counters:{},habits:{}}}function Ge(e,a){if(e>b())throw new Error("Ese día todavía no ha llegado.");x=xs({...$r(e),...a})}function ot(){return[...document.querySelectorAll("#routine-goals .task-input")].map(e=>e.value.trim())}function de(){const e=document.querySelector("#routine-tomorrow");if(!e)return;const a=ot().filter(Boolean);try{Ge($,{tomorrow:e.value.trim(),goals:a})}catch(t){v(t.message||"No se pudo guardar la lista.",!0)}}function wr(){const e=document.querySelector("#routine-tomorrow");e&&(e.addEventListener("change",de),e.addEventListener("input",()=>Le("manana",de,500)),document.querySelectorAll("#routine-goals .task-input").forEach(a=>{a.addEventListener("change",de),a.addEventListener("input",()=>Le("manana-tarea",de,600)),a.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),de(),w()),t.key==="Escape"&&w()})}))}let Xt=null;function Sr(e,a,t){const s=e.closest(".counter-row"),o=ne(m).find(i=>i.key===a)||{key:a},n=document.querySelector(`#hint-${a}`);n&&(n.textContent=Ha(a,t,o)),e.classList.remove("num-bump"),e.offsetWidth,e.classList.add("num-bump");const r=ct(o,m);if(r){const i=s?.querySelector(".counter-goal-pill"),p=s?.querySelector(".counter-progress i");i&&(i.textContent=`Meta: ${t}/${r}`,i.classList.toggle("met",t>=r)),p&&(p.style.width=`${Math.min(100,Math.round(t/r*100))}%`)}}function xr(){const e=x.find(t=>t.date===$),a={...e?.counters||{}};for(const t of ne(m)){const s=document.querySelector(`[name="counter_${t.key}"]`);(s||t.key in a)&&(a[t.key]=s?parseFloat(s.value)||0:Number(e?.counters?.[t.key])||0)}try{Ge($,{counters:a})}catch(t){v(t.message||"No se pudo guardar el contador.",!0)}}function es(e,a){const t=String(a||"").trim().slice(0,40),s=k.find(o=>o.id===e);if(s){if(!t){v("El hábito necesita un nombre.",!0);return}if(t.toLowerCase()!==s.name.toLowerCase()&&k.some(o=>o.name.toLowerCase()===t.toLowerCase())){v("Ya tienes un hábito con ese nombre.",!0);return}t!==s.name&&(k=Aa({...s,name:t}),w(),v("Hábito renombrado"))}}function kr(e){if(!X)return;const a=document.querySelector(`.habit-toggle[data-habit="${e}"]`);a&&(a.classList.add("is-flashed"),setTimeout(()=>a.classList.remove("is-flashed"),700));const t=document.querySelector(`.momentum-cell[data-habit="${e}"]`);t&&(t.classList.add("is-flashed"),setTimeout(()=>t.classList.remove("is-flashed"),700))}function Vs(){const e=Fa(N).some(a=>a.seen!==!0);document.querySelectorAll(".nav-dot").forEach(a=>{a.hidden=!e,a.classList.toggle("is-new",e)}),document.querySelectorAll('#sea-quick,.tabbar-item[data-view="thoughts"]').forEach(a=>{a.classList.toggle("has-new",e)})}function nt(e){const a=N.find(n=>n.id===e);if(!a)return;a.status==="returned"&&a.seen!==!0&&(N=$e(e,{seen:!0}),Vs());const t=a.reply?"":we(Z.reply(e))?.text||"",s=Ce(xn({...a,replyDraft:t},b(),m));Er(s);const o=()=>{s.close(),w()};s.onclick=n=>{const r=n.target.closest("[data-modal]")?.dataset.modal;if(!r){n.target===s&&s.close();return}if(r==="close"){o();return}if(r==="reply"){const i=(s.querySelector("#bottle-reply")?.value||"").trim();if(!i){v("Escribe primero lo que quieres contestarte.",!0);return}me(`respuesta:${e}`),N=$e(e,{reply:i,seen:!0,repliedAt:new Date().toISOString()}),oe(Z.reply(e)),s.close(),w(),nt(e),v("Contestada.");return}if(r==="reply-clear"){me(`respuesta:${e}`),oe(Z.reply(e)),N=$e(e,{reply:""}),s.close(),w(),nt(e);return}if(r==="keep"){const i=!a.kept;N=$e(e,{kept:i,keptOn:i?b():null,seen:!0}),o(),v(i?"Anclada.":"Desanclada.");return}if(r==="to-entry"){try{qr(a),o(),v("Copiado a la entrada de hoy.")}catch(i){v(i.message||"No se pudo copiar.",!0)}return}if(r==="recast"){N=qs(e),o(),v("Otra vez fuera.");return}}}function qr(e){const a=b(),t=x.find(n=>n.date===a),s=`Del mar (botella del ${D(e.castAt,{day:"numeric",month:"long"})}): «${e.text}»`,o=[t?.generalDay,s].filter(Boolean).join(`

`);Ge(a,{generalDay:o,capsule:t?.capsule||String(e.text).slice(0,240),tags:[...new Set([...t?.tags||[],"Pensamiento"])].slice(0,20)}),N=$e(e.id,{kept:!0,keptOn:a,seen:!0}),$=a,F="diary"}function Mr(e){if((document.querySelector("#ocean-fx")||document.body)===document.body){const r=document.createElement("div");r.id="ocean-fx",r.className="ocean-fx",document.body.appendChild(r)}const t=document.querySelector("#ocean-fx"),o=(document.querySelector(".sea-panel")||document.querySelector("#bottle-form"))?.getBoundingClientRect(),n=document.createElement("div");n.className="splash-wrap",n.innerHTML=kn(e),o&&(n.style.setProperty("--to-x",`${Math.round(o.left+o.width*.5)}px`),n.style.setProperty("--to-y",`${Math.round(o.top+o.height*.42)}px`)),t.appendChild(n),document.documentElement.classList.add("is-casting"),setTimeout(()=>document.documentElement.classList.remove("is-casting"),1400),setTimeout(()=>n.remove(),X?1500:60)}function Er(e){const a=e.querySelector(".bottle-modal");!a||!X||(a.classList.add("is-uncorking"),setTimeout(()=>a.classList.remove("is-uncorking"),1100))}function Ar(e){const a=new FormData(e),t=(a.get("text")||"").toString().trim();if(t.length<2){v("Escribe algo antes de soltar la botella.",!0);return}const s=a.get("mood"),o=a.get("sea")||"breeze";try{const n=crypto.randomUUID();N=ks({id:n,text:t,mood:s?+s:null,sea:o,castAt:b()});const r=N.find(i=>i.id===n);me("botella"),oe(Z.bottle()),ie={text:"",mood:null,sea:o},da="",Re="sea",Mr(r||{}),I("saved"),setTimeout(()=>w(),X?1150:0),v("Ya está fuera.")}catch(n){v(n.message||"No se pudo echar la botella al mar.",!0)}}function Lr(){const e=document.querySelector("#bottle-form");if(!e)return;const a=e.querySelector("#bottle-text"),t=e.querySelector("#bottle-words"),s=()=>{const r=e.querySelector('[name="mood"]:checked');ie={text:a?.value||"",mood:r?+r.value:null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"},t&&(t.textContent=`${Xs(a?.value||"")} palabras`)},o=e.querySelector('button[type="submit"]'),n=()=>{if(!o)return;const r=!!(a?.value||"").trim();o.disabled=!r,o.classList.toggle("is-armed",r)};s(),n(),a?.addEventListener("input",()=>{s(),n()}),e.addEventListener("change",()=>{s(),n()}),document.activeElement===a&&a.value&&a.setSelectionRange(a.value.length,a.value.length),e.addEventListener("submit",r=>{r.preventDefault(),Ar(e)})}function Dr(e){N.find(t=>t.id===e)&&ta({title:"¿Romper esta botella?",text:"El pensamiento se borrará de este navegador. No se puede deshacer.",confirmLabel:"Romperla",danger:!0}).then(t=>{t&&(N=Vo(e),w(),v("Rota."))})}const Cr=["generalDay","bestOfDay","differentToday","capsule","wordOfDay","tomorrow","gratitude0","gratitude1","gratitude2","tagCustom"];function Ya(){return[...Cr,...K(m).map(e=>`part_${e.key}`)]}const se=new Map;let da="",rt=!1;function me(e){const a=se.get(e);a&&(clearTimeout(a),se.delete(e))}function Le(e,a,t=460){clearTimeout(se.get(e)),se.set(e,setTimeout(()=>{se.delete(e),a()},t))}function ze(e,a){se.has(e)&&(clearTimeout(se.get(e)),se.delete(e),a())}function fe(){return Z.entry($)}function Zs(e){const a={};if(!e)return a;for(const r of Ya()){const i=e.querySelector(`[name="${r}"]`);i&&typeof i.value=="string"&&(a[r]=i.value)}for(const r of["mood","energy","stress"]){const i=e.querySelector(`[name="${r}"]:checked`);i&&(a[r]=Number(i.value))}for(const r of["sleepHours","studyHours"]){const i=e.querySelector(`[name="${r}"]`);i&&i.value!==""&&(a[r]=Number(i.value))}const t=[...e.querySelectorAll('[name="tags"]:checked')].map(r=>r.value);t.length&&(a.tags=t);const s={};for(const r of e.querySelectorAll('[name^="counter_"]'))s[r.name.slice(8)]=Number(r.value)||0;Object.keys(s).length&&(a.counters=s);const o={};for(const r of e.querySelectorAll('[name^="habit_"]'))o[r.name.slice(6)]=r.checked;Object.keys(o).length&&(a.habits=o);const n=[...e.querySelectorAll('[name="goal"]')].map(r=>r.value).filter(r=>r.trim());return n.length&&(a.goals=n),a}function jr(e){const a=x.find(o=>o.date===$);if(!a)return!Object.keys(e).length;for(const o of Ya()){if(!(o in e))continue;let n="";if(o.startsWith("gratitude"))n=(a.gratitude||[])[+o.slice(9)]||"";else{if(o==="tagCustom")continue;n=a[o]??""}if(String(e[o]??"").trim()!==String(n).trim())return!1}for(const o of["mood","energy","stress","sleepHours","studyHours"]){if(e[o]===void 0)continue;const n=a[o];if(n==null){if(Number(e[o])!==0&&e[o]!==3)return!1;continue}if(Number(e[o])!==Number(n))return!1}const t=a.counters||{};for(const[o,n]of Object.entries(e.counters||{}))if(Number(n)!==Number(t[o]||0))return!1;const s=a.habits||{};for(const[o,n]of Object.entries(e.habits||{}))if(!!n!=!!s[o])return!1;return!((a.tags||[]).slice().sort().join("|")!==(e.tags||[]).slice().sort().join("|")||(a.goals||[]).join("|")!==(e.goals||[]).join("|"))}function At(){const e=document.querySelector("#diary-form");if(!e)return;const a=Zs(e);if(jr(a)){const s=oe(fe());I(s||O==="typing"?"saved":O),lt();return}const t=Qa(fe(),a);t&&!t.ok?I("error"):t&&I("draft"),lt()}function Lt(){const e=document.querySelector("#bottle-form");if(!e)return;const a=Qa(Z.bottle(),{text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"});a&&!a.ok&&I("error")}function Tr(e,a){!a||!document.contains(a)||Qa(Z.reply(e),{text:a.value||""})}function as(){I("typing"),Le("entrada",At,420),Le("autosave",()=>Ve({silent:!0}),2400)}function ts(){const e=document.querySelector("#bottle-form");if(!e)return;ie={text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"},I("typing"),Le("botella",Lt,380)}function Hr(){const e=document.querySelector("#setup-page-form");if(!e)return;const a={};for(const s of e.querySelectorAll('textarea,input[type="text"],input:not([type])'))s.name&&(a[s.name]=s.value);const t=e.querySelector("#new-custom-quote");t?.value&&(a.customQuote=t.value),Qa(Z.setup(),a)}function Nr(){Le("perfil",Hr,700)}function Or(){j.addEventListener("input",e=>{const a=e.target;if(!(!a||!a.closest)){if(a.closest("#diary-form")){as();return}if(a.closest("#bottle-form")){ts();return}if(a.closest("#setup-page-form")){Nr();return}if(a.id==="bottle-reply"&&a.closest("#modal")){const t=a.closest("[data-modal-bottle]")?.dataset.modalBottle;t&&Le(`respuesta:${t}`,()=>Tr(t,a),360)}}}),j.addEventListener("change",e=>{const a=e.target;if(!(!a||!a.closest)){if(a.dataset?.edit){br(a);return}a.closest("#diary-form")&&as(),a.closest("#bottle-form")&&ts()}}),window.addEventListener("pagehide",it),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&it()})}function it(){ze("entrada",At),ze("botella",Lt),ze("manana",de),ze("manana-tarea",de);for(const[e,a]of[...se.entries()])e.startsWith("respuesta:")&&(clearTimeout(a),se.delete(e));document.querySelector("#diary-form")&&!rt&&O==="draft"&&Ve({silent:!0,final:!0})}function Pr(){Fr(),lt()}function ss(e,a,t){if(t==null)return;const s=e.querySelector(`[name="${a}"]`);if(s){if(s.type==="radio"){const o=e.querySelector(`[name="${a}"][value="${t}"]`);o&&(o.checked=!0);return}s.value=Array.isArray(t)?t.join(`
`):t}}function Fr(){const e=document.querySelector("#diary-form");if(!e)return;const a=x.find(s=>s.date===$);if(!Ts(fe(),a?.updatedAt))return;const t=we(fe());if(t){for(const s of Ya())ss(e,s,t[s]);for(const s of["mood","energy","stress","sleepHours","studyHours"])t[s]!==void 0&&ss(e,s,t[s]);if(Array.isArray(t.tags)&&e.querySelectorAll('[name="tags"]').forEach(s=>{s.checked=t.tags.includes(s.value)}),t.counters)for(const[s,o]of Object.entries(t.counters)){const n=e.querySelector(`[name="counter_${s}"]`);n&&(n.value=o)}if(t.habits)for(const[s,o]of Object.entries(t.habits)){const n=e.querySelector(`[name="habit_${s}"]`);n&&(n.checked=!!o)}Array.isArray(t.goals)&&[...e.querySelectorAll('[name="goal"]')].forEach((o,n)=>{t.goals[n]!==void 0&&(o.value=t.goals[n])}),e.dispatchEvent(new Event("input",{bubbles:!0})),I("draft")}}function lt(){const e=document.querySelector("#entry-draft-slot");if(!e)return;const a=x.find(o=>o.date===$),t=e.dataset.live==="1";if(!t&&!Ts(fe(),a?.updatedAt)){e.innerHTML="";return}const s=Ns(fe());if(!s){e.innerHTML="";return}e.innerHTML=`<div class="draft-note ${t?"is-live":""}" role="status">
    ${d(t?"pen":"refresh")}
    <span>${t?`Escribiendo: guardado <b>${l(s.when||"ahora mismo")}</b> · ${s.words} palabras`:`Recuperado de donde lo dejaste <b>${l(s.when)}</b> · ${s.words} palabras`}</span>
    <button type="button" class="text-button" data-action="commit-draft">${d("stamp")} Dejarlo escrito ya</button>
    <button type="button" class="text-button is-danger" data-action="discard-draft">${d("close")} Descartar</button>
  </div>`}function Br(){if(ie.text||da)return;const e=we(Z.bottle());e?.text&&(ie={text:e.text,mood:e.mood||null,sea:e.sea||"breeze"},da=Ns(Z.bottle())?.when||"")}function zr(e){return!!(Ya().map(t=>String(e[t]||"")).join(" ").trim().split(/\s+/).filter(Boolean).length>3||Object.values(e.counters||{}).some(t=>Number(t)>0)||Object.values(e.habits||{}).some(Boolean)||(e.tags||[]).length||(e.gratitude0||"").trim()||(e.gratitude1||"").trim()||(e.gratitude2||"").trim())}function Ve({silent:e=!1,final:a=!1}={}){const t=document.querySelector("#diary-form");if(!t||be)return!1;const s=Zs(t);if(e&&!zr(s))return!1;rt=!0,me("entrada"),me("autosave");try{const o=Wr(Ct(t));if(x=xs(o),oe(fe()),ae=!1,I(e?"autosaved":"saved"),Rr(x.find(n=>n.date===$)),e){if(a)try{localStorage.setItem("diario.lastflush.v1",JSON.stringify({at:new Date().toISOString(),date:$}))}catch{}}else{w(),Zr(),v("Día guardado"),document.querySelector(".daily-summary")?.classList.add("reveal");const n=wt(o);n.triggered&&n.level==="high"&&setTimeout(()=>to("help"),550)}return!0}catch(o){return I("error"),e?String(o.message||"").includes("Ese día")||v("No he podido autoguardar; tu texto sigue a salvo en el borrador.",!0):v(o.message||"No se ha podido guardar este día.",!0),!1}finally{rt=!1}}function Rr(e){const a=e||x.find(s=>s.date===$),t=document.querySelector("#hero-words-chip");t&&(t.innerHTML=Ys(a),t.classList.toggle("pending",!a),t.classList.remove("is-flash"),t.offsetWidth,t.classList.add("is-flash")),Dt()}function Ys(e){if(!e)return"todavía sin escribir";const a=ke(e);return`${a} ${a===1?"palabra":"palabras"} escritas`}function I(e){(e==="saved"||e==="autosaved")&&(ia=Date.now()),O=e,Ks()}function Js(){const e={typing:["pen","Escribiendo…","is-working"],saving:["save","Guardando…","is-working"],draft:["paper","Borrador guardado","is-draft"],error:["close","No se ha guardado","is-error"],autosaved:["check","Autoguardado","is-ok"],idle:["check",ia?`Guardado ${_s(ia)}`:"Todo guardado","is-ok"]},[a,t,s]=e[O]||e.idle;return`${d(a)}<span>${l(t)}</span>`}function Ks(){document.querySelectorAll("[data-save-status]").forEach(t=>{t.className=`save-status ${O==="draft"?"is-draft":""} ${O==="error"?"is-error":""} ${O==="typing"||O==="saving"?"is-working":""}`,t.innerHTML=Js()});const e=document.querySelector("#save-note");e&&(e.outerHTML=`<div class="save-note ${Ee().total?"has-pending":""}" id="save-note">
      <span class="save-dot ${O==="error"?"is-error":O==="draft"?"is-draft":"is-ok"}"></span>
      <div><strong>${Is()}</strong><small>${l(Us())}</small></div>
    </div>`);const a=document.querySelector("#floating-save");if(a){const t=O==="error"||ae;a.classList.toggle("is-visible",t);const s=document.querySelector("#floating-save-text");s&&(s.innerHTML=O==="error"?`${d("close")} El autoguardado falló · tu texto está en el borrador`:`${d("pen")} Cambios sin guardar`)}Dt()}function Dt(){const e=document.querySelector("#draft-chip-slot");if(!e)return;const a=Ee();if(!a.total){e.firstElementChild&&(e.innerHTML="");return}e.innerHTML=`<button type="button" class="draft-chip" data-action="show-drafts" title="${a.total} ${a.total===1?"texto a medias guardado":"textos a medias guardados"}">
    ${d("paper")}<span>${a.total}</span>
  </button>`}function Gr(e){const a=Object.entries(e.data||{}).filter(([,n])=>typeof n=="string").map(([,n])=>n).join(" ").replace(/\s+/g," ").trim(),t=a?a.split(/\s+/).length:0,s=Hs(e.scope),o=s===null?"":s<1?"hace un momento":s<60?`hace ${s} min`:`el ${new Date(e.savedAt).toLocaleDateString("es-ES",{day:"numeric",month:"short"})}`;return{scope:e.scope,label:Ir(e.scope),words:t,when:o,preview:a?`«${a.slice(0,76)}${a.length>76?"…":""}»`:"(solo cifras y marcas)",goto:e.scope.startsWith("entrada:")?e.scope.slice(8):""}}function os(){const e=kt().map(Gr),a=e.length?e.map(t=>`
    <li class="draft-row">
      <div class="draft-row-main">
        <strong>${l(t.label)}</strong>
        <small>${t.words} palabras · ${l(t.when)} · ${l(t.preview)}</small>
      </div>
      <div class="draft-row-actions">
        ${t.goto?`<button type="button" class="text-button" data-modal="goto" data-date="${l(t.goto)}">${d("arrow")} Ir a recuperarlo</button>`:""}
        <button type="button" class="text-button is-danger" data-modal="drop" data-scope="${l(t.scope)}">${d("close")} Descartar</button>
      </div>
    </li>`).join(""):`<li class="draft-row is-empty">${d("check")} No hay nada a medias: todo está escrito ya en el cuaderno.</li>`;return`<div class="modal-card drafts-modal">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${d("close")}</button>
    <p class="eyebrow">${d("paper")} Lo que se quedó a medias</p>
    <h2>Ni una palabra perdida</h2>
    <p class="modal-lead">Esto es lo que escribiste y todavía no está cerrado en el cuaderno. Se guarda solo en este dispositivo: nada viaja a ningún sitio.</p>
    <ul class="draft-list">${a}</ul>
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${e.length?`<button class="button danger" data-modal="drop-all">${d("trash")} Descartar todos</button>`:""}
      <button class="button solid" data-modal="save-all">${d("stamp")} Escribirlo todo ahora</button>
    </div>
  </div>`}function Ir(e){return e.startsWith("entrada:")?`La entrada del ${D(e.slice(8),{day:"numeric",month:"long"})}`:e==="botella"?"Una botella a medio escribir":e.startsWith("respuesta:")?"Una respuesta a una botella":e==="perfil"?"Tu perfil":"Un texto pendiente"}function Ur(){const e=Ce(os());e.onclick=a=>{const t=a.target.closest("[data-modal]"),s=t?.dataset.modal;if(!s){a.target===e&&e.close();return}if(s==="close"){e.close(),w();return}if(s==="drop"){oe(t.dataset.scope),e.innerHTML=os(),I(Ee().total?"draft":"saved"),w(),e.showModal(),v("Borrador descartado");return}if(s==="drop-all"){Wt(),e.close(),w(),v("Todos los borradores descartados");return}if(s==="save-all"){const o=Ee().total;for(const n of kt())if(n.scope.startsWith("entrada:"))$=n.scope.slice(8),F="diary",Ws(),Ve({silent:!1});else if(n.scope==="botella"&&we("botella")?.text)_r(we("botella"));else if(n.scope.startsWith("respuesta:")){const r=n.scope.slice(10),i=we(n.scope)?.text;i&&(N=$e(r,{reply:i,seen:!0,repliedAt:new Date().toISOString()}),v("Respuesta guardada"))}e.close(),Wt(),w(),v(o?`Cerrados ${o} textos a medias`:"No había nada que escribir");return}if(s==="goto"){e.close(),ce(t.dataset.date);return}}}function _r(e){if(e?.text)try{const a=crypto.randomUUID();N=ks({id:a,text:e.text,mood:e.mood||null,sea:e.sea||"breeze",castAt:b()}),oe(Z.bottle()),ie={text:"",mood:null,sea:e.sea||"breeze"},da="",v("Ya está fuera.")}catch(a){v(a.message||"No se pudo echar la botella al mar.",!0)}}function Xs(e){const a=String(e||"").trim();return a?a.split(/\s+/).length:0}function Ct(e){const a=new FormData(e),t=x.find(H=>H.date===$),s=B(m),o=(a.get("tagCustom")||"").toString().trim(),n=[...new Set([...a.getAll("tags").map(H=>H.toString().trim()),o].filter(Boolean))],r={...t?.counters||{}};for(const H of ne(m)){const h=e.querySelector(`[name="counter_${H.key}"]`);r[H.key]=h?parseFloat(h.value)||0:Number(t?.counters?.[H.key])||0}const i={...t?.parts||{}};for(const H of K(m)){const h=e.querySelector(`[name="part_${H.key}"]`);if(!h)continue;const y=h.value.trim();y?i[H.key]=y:delete i[H.key]}const p={},c=[...e.querySelectorAll('[name^="habit_"]')];for(const H of k)p[H.id]=c.length?!!e.querySelector(`[name="habit_${H.id}"]`)?.checked:!!t?.habits?.[H.id];const u=+a.get("mood")||t?.mood||3,g=a.get("sleepHours"),S=g!==null&&g!==""?parseFloat(g):m.sleepGoal||s.sleepRecommended||7.5,M=a.get("studyHours"),f=M!==null&&M!==""?parseFloat(M):0,E=(a.get("bestOfDay")||"").toString().trim(),P=(a.get("differentToday")||"").toString().trim(),R=(a.get("capsule")||"").toString().trim(),U=(a.get("wordOfDay")||"").toString().trim();let ee=(a.get("generalDay")||"").toString().trim();return ee||(ee=E||R||(U?`Palabra del día: ${U}.`:`Día ${T[u-1].label.toLowerCase()}.`)),{id:t?.id,date:$,mood:u,sleepHours:S,studyHours:f,energy:a.get("energy")?+a.get("energy"):null,stress:a.get("stress")?+a.get("stress"):null,bestOfDay:E,differentToday:P,generalDay:ee,wordOfDay:U,capsule:R,gratitude:[0,1,2].map(H=>(a.get(`gratitude${H}`)||"").toString().trim()),tomorrow:a.has("tomorrow")?(a.get("tomorrow")||"").toString().trim():t?.tomorrow||"",goals:e.querySelector('[name="goal"]')?a.getAll("goal").map(H=>H.toString().trim()).filter(Boolean):t?.goals||[],tags:n,counters:r,parts:i,habits:p,createdAt:t?.createdAt}}function Wr(e){for(const[a,t]of[["sleepHours","horas de sueño"],["studyHours","horas de dedicación"]]){const s=e[a];if(!Number.isFinite(s)||s<0||s>24)throw new Error(`Escribe unas ${t} válidas, entre 0 y 24.`)}return e}function ns(e){if(!e)return;const a=Ct(e),t=document.querySelector("#hero-words-chip");if(t){const p=ke(a),c=p?`${p} ${p===1?"palabra":"palabras"} escritas`:"todavía sin escribir";t.textContent!==c&&(t.textContent=c),t.classList.toggle("pending",!p)}const s=document.querySelector("#floating-save");s&&s.classList.toggle("is-visible",ae||O==="error");const o=wt(a),n=o.triggered&&o.level==="high"&&!Va,r=n?`high:${(o.reasons||[]).length}`:"none",i=document.querySelector("#crisis-alert-slot");i&&i.dataset.sig!==r&&(i.dataset.sig=r,i.innerHTML=n?Ls(o,m):"")}function eo(e,a){if(!e)return;const t=e.querySelector('[name="age"]'),s=()=>{const o=new FormData(e),n=o.get("age"),r=n?za(n,o.get("ageGroup")||"young"):o.get("ageGroup")||"young",i=o.getAll("interests").map(String);e.querySelectorAll("[data-age-group-card]").forEach(M=>{const f=M.dataset.ageGroupCard===r;M.classList.toggle("is-selected",f);const E=M.querySelector('input[type="radio"]');E&&n&&(E.checked=f)});const p=B({age:n||null,ageGroup:r,interests:i}),c=e.querySelector('[name="sleepGoal"]'),u=e.querySelector('[name="studyGoal"]');c&&n&&(c.value=p.sleepRecommended),u&&n&&(u.value=p.studyRecommended);const g=e.querySelector(`#${a}-adaptation-callout`);g&&(g.innerHTML=`
        ${d("compass")}
        <div>
          <strong>Adaptado a: ${l(p.group.title)} (${l(p.group.label)})</strong>
          <p>Sueño recomendado: <b>${q(p.sleepRecommended)} h</b> · Dedicación sugerida: <b>${q(p.studyRecommended)} h</b>.</p>
        </div>`);const S=e.querySelector(`#${a}-suggested-habits`);if(S){const M=new Set(k.map(f=>f.name.toLowerCase()));S.innerHTML=p.suggestedHabits.map(f=>{const E=M.has(f.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${l(f)}" ${E?"checked":""}><span>${E?"✓ ":"+ "}${l(f)}</span></label>`}).join("")}};t&&t.addEventListener("input",s),e.querySelectorAll('[name="ageGroup"], [name="interests"]').forEach(o=>{o.addEventListener("change",s)})}function Qr(){const e=document.querySelector("#setup-page-form");e&&(eo(e,"sp"),e.addEventListener("submit",t=>{t.preventDefault(),ao(e),w(),v("Perfil actualizado")}),e.addEventListener("change",t=>{t.target.name==="theme"&&Ae(t.target.value,m)}));const a=document.querySelector("#diary-form");a&&(a.addEventListener("submit",t=>{t.preventDefault(),!be&&Ve()}),a.addEventListener("input",t=>{ae=!0;const s=t.target;if(s.name==="mood"){const n=T[+s.value-1];a.style.setProperty("--active-mood",n.color)}if(s.name==="sleepHours"||s.name==="studyHours"){const n=parseFloat(s.value);a.querySelectorAll(`[data-action="quick-number"][data-target="${s.name}"]`).forEach(r=>{r.classList.toggle("active",parseFloat(r.dataset.val)===n)})}if(s.name==="energy"){const n=document.querySelector("#energy-hint");n&&(n.textContent=is[+s.value]+".")}if(s.name==="stress"){const n=document.querySelector("#stress-hint");n&&(n.textContent=ls[+s.value]+".")}if(s.name?.startsWith("counter_")){const n=s.name.slice(8),r=parseFloat(s.value)||0,i=document.querySelector(`#hint-${n}`);if(i&&(i.textContent=Ha(n,r)),n==="water"){const p=m.waterGoal||8,c=s.closest(".counter-row"),u=c?.querySelector(".counter-goal-pill"),g=c?.querySelector(".counter-progress i");u&&(u.textContent=`Meta: ${r}/${p}`,u.classList.toggle("met",r>=p)),g&&(g.style.width=`${Math.min(100,Math.round(r/p*100))}%`)}}const o=s.closest(".writing-field");if(o){const n=o.querySelector(".word-count");n&&(n.textContent=`${Xs(s.value)} palabras`)}ns(a)}),a.addEventListener("keydown",t=>{if(t.target.id==="tagCustom"&&t.key==="Enter"){t.preventDefault();const s=t.target.value.trim();if(s){const o=a.querySelector(".tag-picker .tag-chip.ghost");o&&o.insertAdjacentHTML("beforebegin",`<label class="tag-chip"><input type="checkbox" name="tags" value="${l(s)}" checked><span>${l(s)}</span></label>`),t.target.value="",ae=!0,ns(a)}}}),Vr())}function ao(e){const a=new FormData(e),t=a.getAll("suggestedHabits").map(u=>u.toString().trim()).filter(Boolean),s=new Set(k.map(u=>u.name.toLowerCase()));for(const u of t)!s.has(u.toLowerCase())&&k.length<30&&(k=Aa({name:u}),s.add(u.toLowerCase()));const o=e.querySelector('[name="sidebarCollapsed"]')!==null,n=a.get("age"),r=n!==null&&n!==""?parseInt(n.toString(),10):null,i=r?za(r,a.get("ageGroup")||"young"):a.get("ageGroup")||m.ageGroup,p=a.getAll("interests").map(u=>u.toString().trim()).filter(Boolean);m=re({completed:!0,name:a.get("name")||"",age:Number.isFinite(r)?r:null,ageGroup:i,interests:p,ritual:a.get("ritual")||m.ritual,tone:a.get("tone")||m.tone,purpose:a.get("purpose")||m.purpose,motto:a.get("motto")||"Un día a la vez.",theme:a.get("theme")||m.theme,sleepGoal:parseFloat(a.get("sleepGoal"))||7.5,studyGoal:parseFloat(a.get("studyGoal"))??2,showDailyWord:e.querySelector('[name="showDailyWord"]')?.checked??!0,showDailyTip:e.querySelector('[name="showDailyTip"]')?.checked??!0,sidebarCollapsed:o?!!e.querySelector('[name="sidebarCollapsed"]')?.checked:G}),G=!!m.sidebarCollapsed,Ae(m.theme,m)}function Vr(){const e=document.querySelector("#diary-form");if(e)for(const a of ne(m)){const t=e.querySelector(`[name="counter_${a.key}"]`),s=document.querySelector(`#hint-${a.key}`);t&&s&&t.value!==""&&(s.textContent=Ha(a.key,parseFloat(t.value)||0,a))}}function at(e=""){const a=document.querySelector("#inspiration-slot");if(!a)return;const t=document.querySelector("#diary-form"),s=t?Ct(t):x.find(o=>o.date===$);if(a.innerHTML=Ds($,qt,Mt,m,s,s?.wordOfDay||""),e){const o=a.querySelector(e);o&&(o.classList.remove("card-flip-in"),o.offsetWidth,o.classList.add("card-flip-in"))}}function rs(){const e=document.querySelector("#quote-slot");if(!e)return;e.innerHTML=As($,Et,m);const a=e.querySelector(".quote-card");a&&(a.classList.remove("card-flip-in"),a.offsetWidth,a.classList.add("card-flip-in"))}function Zr(){const e=document.querySelector("#stamp");if(!e)return;const a=m.name?`Cuaderno de ${l(m.name)}`:"Guardado";e.innerHTML=`<div class="stamp-face">${a}<small>${D($)}</small></div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function v(e,a=!1){const t=document.querySelector("#toast");t&&(t.innerHTML=`<div class="${a?"error":""}">${d(a?"close":"check")}<span>${l(e)}</span></div>`,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),3e3))}function qa(){ka&&(clearInterval(ka),ka=null)}function Ce(e){qa();const a=document.querySelector("#modal");return a.innerHTML=e,a.open||a.showModal(),a}function to(e="help"){const a=Ce(gn(m,e));let t=!1;const s=()=>{qa(),a.close()};a.onclick=o=>{if(o.target.closest('[data-modal="close"]')||o.target===a){s();return}const r=o.target.closest("[data-crisis-tab]");if(r){const p=r.dataset.crisisTab;a.querySelectorAll(".crisis-tab").forEach(c=>c.classList.toggle("active",c.dataset.crisisTab===p)),a.querySelectorAll(".crisis-tab-panel").forEach(c=>c.classList.toggle("active",c.dataset.panel===p)),p!=="breathe"&&qa();return}const i=o.target.closest('[data-action="toggle-breathing"]');if(i){const p=a.querySelector("#breathing-visual"),c=a.querySelector("#breathing-phase"),u=a.querySelector("#breathing-timer"),g=a.querySelector("#breathing-guide");if(t)t=!1,qa(),p?.classList.remove("inhale","hold","exhale"),c&&(c.textContent="En pausa"),u&&(u.textContent="4 — 4 — 6"),i.innerHTML=`${d("wind")} Seguir respirando`;else{t=!0,i.innerHTML=`${d("close")} Pausar`;let S=0;const M=()=>{const f=S%14;p?.classList.remove("inhale","hold","exhale"),f<4?(p?.classList.add("inhale"),c&&(c.textContent="Toma aire..."),u&&(u.textContent=`${4-f} s`),g&&(g.textContent="Inhala despacio por la nariz.")):f<8?(p?.classList.add("hold"),c&&(c.textContent="Mantén..."),u&&(u.textContent=`${8-f} s`),g&&(g.textContent="Sostén el aire sin tensar los hombros.")):(p?.classList.add("exhale"),c&&(c.textContent="Suelta..."),u&&(u.textContent=`${14-f} s`),g&&(g.textContent="Deja salir el aire poco a poco.")),S++};M(),ka=setInterval(M,1e3)}}}}function Yr(e=1){let a=e;const t=Ce(bn(m,k,a)),s=t.querySelector("#setup-wizard-form");eo(s,"wiz");const o=n=>{a=Math.max(1,Math.min(3,n)),t.querySelectorAll(".wizard-step-body").forEach(u=>{const g=+u.dataset.step;u.classList.toggle("active",g===a),u.hidden=g!==a});const r=t.querySelector(".setup-wizard-header .eyebrow"),i=t.querySelector(".setup-wizard-header h2");r&&(r.innerHTML=`${d("sliders")} Paso ${a} de 3`),i&&(i.textContent=a===1?"Sobre ti, tu edad y tus gustos":a===2?"Tu ritmo y tus hábitos":"Papel e icono de tu cuaderno"),t.querySelectorAll(".wizard-steps-bar span").forEach((u,g)=>{u.classList.toggle("done",a>=g+1),u.classList.toggle("current",a===g+1)});const c=t.querySelector(".wizard-footer");c&&(c.innerHTML=`
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${d("left")} Anterior</button>`:'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${d("right")}</button>`:`<button type="submit" class="button solid">${d("check")} Guardar</button>`}`)};t.onchange=n=>{n.target.name==="theme"&&Ae(n.target.value,m)},t.onsubmit=n=>{n.preventDefault(),s&&ao(s),t.close(),w(),v("Tu cuaderno se ha adaptado a tus gustos")},t.onclick=n=>{if(n.target.closest('[data-modal="close"]')||n.target===t){Ae(m.theme,m),t.close();return}const i=n.target.closest("[data-wizard]");if(i){const p=i.dataset.wizard;o(p==="next"?a+1:a-1)}}}function ta({title:e,text:a,confirmLabel:t,danger:s=!1}){return new Promise(o=>{const n=Ce(`<div class="modal-card">
      <h2>${l(e)}</h2><p>${l(a)}</p>
      <div class="modal-actions">
        <button class="button outline" data-modal="cancel">Cancelar</button>
        <button class="button ${s?"danger":"solid"}" data-modal="confirm">${l(t)}</button>
      </div>
    </div>`);n.onclick=r=>{const i=r.target.closest("[data-modal]")?.dataset.modal;i?(n.close(),o(i==="confirm")):r.target===n&&(n.close(),o(!1))}})}function Jr(e){const a=x.find(n=>n.date===e);if(!a){ce(e);return}const t=B(m),s=k.filter(n=>a.habits?.[n.id]),o=Ce(`<article class="modal-card entry-modal">
    <div class="section-heading">
      <div><p class="eyebrow">${m.name?`Cuaderno de ${l(m.name)} · `:""}Día ${ua(a.date,x)}</p><h2>${D(a.date)}</h2></div>
      <span class="mood-tag" style="--mood:${T[a.mood-1].color}">${T[a.mood-1].emoji} ${T[a.mood-1].label}</span>
    </div>
    <div class="read-metrics">
      <span class="chiplet">${d("moon")} ${q(a.sleepHours)} h sueño</span>
      <span class="chiplet">${d("study")} ${q(a.studyHours)} h dedicación</span>
      ${a.energy?`<span class="chiplet">${d("bolt")} energía ${a.energy}/5</span>`:""}
      ${a.stress?`<span class="chiplet">${d("storm")} estrés ${a.stress}/5</span>`:""}
      <span class="chiplet">${d("pen")} ${ke(a)} palabras</span>
    </div>
    ${(a.tags||[]).length?`<div class="read-metrics">${a.tags.map(n=>`<span class="chiplet">${d("hash")} ${l(n)}</span>`).join("")}</div>`:""}
    ${a.wordOfDay?`<div class="read-section"><h3>Palabra del día</h3><p>«${l(a.wordOfDay)}»</p></div>`:""}
    ${a.capsule?`<div class="read-section"><h3>${l(t.capsuleLabel)}</h3><p>${l(a.capsule)}</p></div>`:""}
    <div class="read-section"><h3>Notas del día</h3><p class="dropcap-paragraph">${l(a.generalDay)}</p></div>
    ${a.bestOfDay?`<div class="read-section"><h3>Lo mejor del día</h3><p>${l(a.bestOfDay)}</p></div>`:""}
    ${a.differentToday?`<div class="read-section"><h3>¿Qué ha sido distinto?</h3><p>${l(a.differentToday)}</p></div>`:""}
    ${a.gratitude?.some(Boolean)?`<div class="read-section"><h3>Agradecimientos</h3><ol>${a.gratitude.filter(Boolean).map(n=>`<li>${l(n)}</li>`).join("")}</ol></div>`:""}
    ${a.tomorrow||a.goals?.length?`<div class="read-section"><h3>Para mañana</h3><p>${l(a.tomorrow)}</p>${a.goals?.length?`<ul>${a.goals.map(n=>`<li>${l(n)}</li>`).join("")}</ul>`:""}</div>`:""}
    ${k.length&&s.length?`<div class="read-section"><h3>Hábitos cumplidos</h3><p>${s.map(n=>l(n.name)).join(" · ")}</p></div>`:""}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      <button class="button danger" data-modal="delete">Eliminar</button>
      <button class="button solid" data-modal="edit">${d("pen")} Editar</button>
    </div>
  </article>`);o.onclick=n=>{const r=n.target.closest("[data-modal]")?.dataset.modal,i=()=>o.close();(r==="close"||n.target===o)&&i(),r==="edit"&&(i(),ce(a.date)),r==="delete"&&(i(),no(a.date))}}function ce(e,a=""){if(e>b()){v("Ese día todavía no ha llegado.",!0);return}so(),Xe=a||(e<$?"prev":e>$?"next":""),ae=!1,$=e,F="diary",Q=!1,Va=!1,w({transition:!0})}function so(){ze("entrada",At),ze("botella",Lt),document.querySelector("#diary-form")&&O==="draft"&&Ve({silent:!0})}function oo(){if(window.innerWidth<=980){Q=!Q,document.querySelector(".sidebar")?.classList.toggle("is-open",Q),document.querySelector(".sidebar-backdrop")?.classList.toggle("is-visible",Q);return}G=!G,m=re({sidebarCollapsed:G});const e=document.querySelector(".sidebar");if(e){e.classList.toggle("is-collapsed",G);const a=e.querySelector(".sidebar-collapse-btn");a&&(a.innerHTML=d(G?"right":"left"),a.title=G?"Desplegar menú (Ctrl+B)":"Plegar menú (Ctrl+B)",a.setAttribute("aria-expanded",String(!G))),e.classList.add("is-animating"),setTimeout(()=>{e.classList.remove("is-animating"),la()},420),setTimeout(()=>la(),60)}}async function no(e){await ta({title:"¿Eliminar esta entrada?",text:`Se borrará del dispositivo el registro de ${D(e)}.`,confirmLabel:"Eliminar",danger:!0})&&(x=zo(e),w(),v("Entrada eliminada."))}function Kr(e,a){const t=new Blob([a],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(t),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),1e3)}j.addEventListener("click",async e=>{const a=e.target.closest("[data-view]"),t=e.target.closest("[data-action]");if(e.target.closest(".brand")){e.preventDefault(),ce(b());return}if(a&&!t){const h=a.dataset.view;so(),ae=!1,F=h,Q=!1,le=!0,F==="diary"&&($=b()),w({transition:!0});return}if(!t)return;const{action:s,date:o,range:n,mini:r,key:i,step:p,habit:c,name:u,word:g,tab:S,quote:M,index:f,layout:E,target:P,val:R,monthly:U,id:ee,delta:H}=t.dataset;switch(s){case"menu":Q=!Q,w();break;case"close-menu":Q=!1,w();break;case"toggle-sidebar":oo();break;case"archive-tab":Sa=S||"list",le=!0,w();break;case"stats-tab":Pe=S||"pulse",le=!0,w();break;case"profile-tab":Fe=S||"personal",le=!0,w();break;case"add-part":Kt();break;case"part-preset":Kt(R);break;case"part-type":{const h=K(m).map(y=>y.key===i?{...y,type:R==="line"?"line":"text"}:y);pe({parts:h},"");break}case"remove-part":{const h=K(m).find(y=>y.key===i);pe({parts:K(m).filter(y=>y.key!==i)},`«${h?.label||"Parte"}» fuera. Lo ya escrito se queda en sus días.`);break}case"add-counter":gr();break;case"remove-counter":{const h=ne(m);if(h.length<=1){v("Deja al menos un contador.",!0);break}const y=h.find(A=>A.key===i);pe({counters:h.filter(A=>A.key!==i)},`«${y?.label||"Contador"}» fuera. Las cifras ya anotadas se conservan.`);break}case"reset-counters":pe({counters:ca.map(h=>({...h}))},"Vuelta a los cuatro de siempre.");break;case"thoughts-tab":Re=S||"shore",le=!0,w();break;case"show-drafts":Ur();break;case"commit-draft":Ve();break;case"discard-draft":{ta({title:"¿Descartar lo escrito a medias?",text:"Se borrar el borrador de este día en este dispositivo. Lo que ya está guardado en el cuaderno se queda.",confirmLabel:"Descartarlo",danger:!0}).then(h=>{h&&(me("entrada"),me("autosave"),oe(fe()),I("saved"),w(),v("Borrador descartado"))});break}case"discard-bottle-draft":{me("botella"),oe(Z.bottle()),ie={text:"",mood:null,sea:ie.sea||"breeze"},da="",w(),v("Borrador de la botella descartado");break}case"routine-tab":ea=S||"hoy",le=!0,w();break;case"shift-day":{const h=L($,parseInt(H||"1",10));if(h>b()){v("Ese día todavía no ha llegado.",!0);break}$=h,w(),window.scrollTo({top:0,behavior:"smooth"});break}case"today-routine":$=b(),w();break;case"focus-composer":{const h=document.querySelector("#bottle-text");h&&(h.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>h.focus(),250));break}case"toggle-habit":{const h=o||$;if(h>b()){v("Ese día todavía no ha llegado.",!0);break}const y=x.find(z=>z.date===h),A={...y?.habits||{}},C=!A[c];A[c]=C;try{Ge(h,{habits:A});const z=!y;w(),kr(c);const Ze=k.find(Ja=>Ja.id===c)?.name||"Hábito",jt=k.length,ro=k.filter(Ja=>A[Ja.id]).length;C&&h===b()&&jt&&ro===jt?v("Rutina de hoy completada"):v(z&&C?`«${Ze}» marcado · creé una entrada mínima para ese día`:C?`«${Ze}» marcado`:`«${Ze}» desmarcado`)}catch(z){v(z.message||"No se pudo guardar el hábito.",!0)}break}case"add-suggested-habit":{if(!u)break;if(k.length>=30){v("Máximo 30 hábitos.",!0);break}if(k.some(h=>h.name.toLowerCase()===u.toLowerCase())){v("Ya está en tu lista.",!0);break}k=Aa({name:u}),w(),v(`«${u}» añadido a tu rutina`);break}case"edit-habit":{const h=t.closest(".habit-stat-row"),y=h?.querySelector(".habit-stat-name strong"),A=k.find(z=>z.id===c);if(!y||!A)break;y.outerHTML=`<input class="habit-rename" maxlength="40" value="${l(A.name)}" aria-label="Renombrar hábito">`;const C=h.querySelector(".habit-rename");C.focus(),C.select(),C.addEventListener("keydown",z=>{z.key==="Enter"&&(z.preventDefault(),C.dataset.done="1",es(c,C.value)),z.key==="Escape"&&(C.dataset.done="1",w())}),C.addEventListener("blur",()=>{C.dataset.done!=="1"&&es(c,C.value)});break}case"routine-counter-plus":case"routine-counter-minus":{const h=document.querySelector(`[name="counter_${i}"]`);if(!h)break;const y=s==="routine-counter-plus"?1:-1,A=parseFloat(p)||1,C=Math.min(parseFloat(h.max),Math.max(parseFloat(h.min),(parseFloat(h.value)||0)+y*A));h.value=Math.round(C*10)/10,Sr(h,i,parseFloat(h.value)),clearTimeout(Xt),Xt=setTimeout(xr,400);break}case"add-goal-routine":{de();const h=ot().filter(Boolean);h.push("");try{Ge($,{goals:h}),w();const y=document.querySelectorAll("#routine-goals .task-input");y[y.length-1]?.focus()}catch(y){v(y.message||"No se pudo añadir la tarea.",!0)}break}case"remove-goal-routine":{const h=ot().filter((A,C)=>C!==+f),y=x.find(A=>A.date===$);try{Ge($,{goals:h.filter(Boolean),tomorrow:document.querySelector("#routine-tomorrow")?.value.trim()??(y?.tomorrow||"")}),w()}catch(A){v(A.message||"No se pudo quitar la tarea.",!0)}break}case"open-bottle":nt(ee);break;case"recast-bottle":{N=qs(ee),w(),v("Vuelve a estar en el agua");break}case"delete-bottle":Dr(ee);break;case"toggle-more-details":{Ke=!Ke;const h=document.querySelector("#extras-accordion");h&&(h.classList.toggle("is-open",Ke),t.setAttribute("aria-expanded",String(Ke)));break}case"quick-number":{const h=document.querySelector(`#${P}`);h&&R!==void 0&&(h.value=R,h.classList.remove("num-bump"),h.offsetWidth,h.classList.add("num-bump"),h.dispatchEvent(new Event("input",{bubbles:!0})));break}case"cycle-theme":{const h=V.findIndex(Ze=>Ze.id===m.theme),y=V[(h+1)%V.length];m=re({theme:y.id}),Ae(m.theme,m);const A=document.querySelector(".theme-pill > span:last-child"),C=document.querySelector(".topbar-favicon-mini"),z=document.querySelector(".ex-libris-icon");A&&(A.textContent=y.name),C&&(C.innerHTML=ge(m.theme,m)),z&&(z.innerHTML=ge(m.theme,m)),v(`Tema: ${y.name}`);break}case"open-setup-wizard":Yr(1);break;case"dismiss-setup-banner":m=re({completed:!0}),document.querySelector(".setup-welcome-banner")?.remove();break;case"open-crisis-modal":to(S||"help");break;case"dismiss-crisis-banner":Va=!0,document.querySelector("#crisis-alert-slot").innerHTML="";break;case"next-daily-word":qt++,at(".word-of-day-card");break;case"next-daily-tip":Mt++,at(".tip-of-day-card");break;case"next-quote":Et++,rs();break;case"save-quote":{if(!M)break;const h=m.savedQuotes||[],y=h.includes(M),A=y?h.filter(C=>C!==M):[M,...h];m=re({savedQuotes:A}),rs(),v(y?"Frase quitada de tus guardadas":"Frase guardada en tu perfil");break}case"add-custom-quote":{const y=document.querySelector("#new-custom-quote")?.value.trim();if(!y){v("Escribe una frase primero.",!0);break}m=re({savedQuotes:[y,...m.savedQuotes||[]]}),w(),v("Frase añadida");break}case"remove-saved-quote":{const h=parseInt(f,10),y=(m.savedQuotes||[]).filter((A,C)=>C!==h);m=re({savedQuotes:y}),w(),v("Frase eliminada");break}case"toggle-focus-writing":{aa=!aa,document.querySelector(".diary-layout")?.classList.toggle("is-focus-writing",aa);break}case"history-layout":{wa=E||"grid",w();break}case"use-daily-word":{const h=document.querySelector("#wordOfDay");h&&g&&(h.value=g,ae=!0,h.dispatchEvent(new Event("input",{bubbles:!0})),h.classList.add("highlight-flash"),setTimeout(()=>h.classList.remove("highlight-flash"),900),at(),v(`«${g}» anotada`));break}case"inspire-prompt":{Be=!Be;const h=document.querySelector("#writing-prompt-box");h&&(h.hidden=!Be,h.classList.toggle("is-open",Be));break}case"next-writing-prompt":{xa++;const h=document.querySelector("#writing-prompt-text");h&&(h.classList.remove("text-swap"),h.offsetWidth,h.textContent=tt($,xa),h.classList.add("text-swap"));break}case"insert-writing-prompt":{const h=tt($,xa),y=document.querySelector("#generalDay");if(y){const A=y.value.trim();y.value=A?`${A}

— ${h}
`:`— ${h}
`,y.focus(),y.setSelectionRange(y.value.length,y.value.length),y.dispatchEvent(new Event("input",{bubbles:!0}))}break}case"quick-save":{const h=document.querySelector("#diary-form");h&&h.requestSubmit();break}case"previous":ce(L($,-1),"prev");break;case"next":ce(L($,1),"next");break;case"today":ce(b());break;case"open-day":ce(o);break;case"read":Jr(o);break;case"delete":no(o);break;case"add-goal":document.querySelector("#goals").insertAdjacentHTML("beforeend",Zn()),document.querySelector("#goals .goal-row:last-child input")?.focus(),ae=!0;break;case"remove-goal":t.closest(".goal-row").remove(),ae=!0;break;case"counter-plus":case"counter-minus":{const h=document.querySelector(`[name="counter_${i}"]`);if(!h)break;const y=s==="counter-plus"?1:-1,A=parseFloat(p)||1,C=Math.min(parseFloat(h.max),Math.max(parseFloat(h.min),(parseFloat(h.value)||0)+y*A));h.value=Math.round(C*10)/10,h.classList.remove("num-bump"),h.offsetWidth,h.classList.add("num-bump"),h.dispatchEvent(new Event("input",{bubbles:!0}));break}case"add-habit":{const y=document.querySelector("#new-habit")?.value.trim();if(!y){v("Escribe un nombre para el hábito.",!0);break}if(k.length>=30){v("Máximo 30 hábitos.",!0);break}if(k.some(A=>A.name.toLowerCase()===y.toLowerCase())){v("Ya existe un hábito con ese nombre.",!0);break}k=Aa({name:y}),w(),document.querySelector("#new-habit")?.focus(),v(`Hábito «${y}» añadido`);break}case"delete-habit":{await ta({title:"¿Eliminar este hábito?",text:`Se quitará «${u}» de tu lista actual.`,confirmLabel:"Eliminar",danger:!0})&&(k=Go(c),w(),v("Hábito eliminado"));break}case"month-prev":r==="1"?ga=je(ga,-1):J=je(J,-1),w();break;case"month-next":r==="1"?ga=je(ga,1):J=je(J,1),w();break;case"period-prev":U==="1"?J=je(J,-1):$=L($,-7),w();break;case"period-next":U==="1"?J=je(J,1):$=L($,7),w();break;case"range":Oe=+n,w();break;case"export":case"backup":Kr(`diario-${b()}.json`,Zo(x,k,m)),v("Copia descargada");break;case"import":document.querySelector("#import-file").click();break;case"clear":await ta({title:"¿Borrar todos los datos?",text:"Se eliminarán todas las entradas, hábitos y preferencias de este navegador.",confirmLabel:"Borrar todo",danger:!0})&&(Ro(),Za(),$=b(),F="diary",w(),v("Datos eliminados"));break}});j.addEventListener("change",e=>{if(e.target.id==="import-file"){const a=e.target.files[0];if(!a)return;const t=new FileReader;t.onload=()=>{try{He=Yo(t.result);const s=Ce(`<div class="modal-card">
          <h2>Importar copia</h2>
          <p>El archivo contiene <strong>${He.entries.length}</strong> ${He.entries.length===1?"entrada":"entradas"} y <strong>${He.habits.length}</strong> ${He.habits.length===1?"hábito":"hábitos"}.</p>
          <div class="modal-actions">
            <button class="button outline" data-modal="cancel">Cancelar</button>
            <button class="button solid" data-modal="confirm">Importar</button>
          </div>
        </div>`);s.onclick=o=>{const n=o.target.closest("[data-modal]")?.dataset.modal;n==="confirm"&&(Jo(He),Za(),v("Copia importada")),(n||o.target===s)&&(s.close(),w())}}catch(s){v(s.message||"No se ha podido importar el archivo.",!0)}e.target.value=""},t.readAsText(a)}e.target.id==="history-mood"&&(ya=e.target.value,w()),e.target.id==="history-tag"&&($a=e.target.value,w())});j.addEventListener("input",e=>{if(e.target.id==="history-search"){va=e.target.value;const a=document.activeElement===e.target;if(w(),a){const t=document.querySelector("#history-search");t.focus(),t.setSelectionRange(t.value.length,t.value.length)}}});window.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="b"&&(e.preventDefault(),oo())});window.addEventListener("beforeunload",e=>{it(),O==="error"&&(e.preventDefault(),e.returnValue="")});window.addEventListener("storage",e=>{if(!(!e.key||!String(e.key).startsWith("diario.")))try{Za(),w(),v("Otra pestaña cambió el cuaderno: lo he actualizado")}catch(a){v("No pude refrescar los datos: "+a.message,!0)}});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});w();I("idle");const dt=Fa(N).filter(e=>e.seen!==!0);dt.length&&setTimeout(()=>{v(dt.length===1?"Ha vuelto una de tus botellas.":"Han vuelto un par de tus botellas."),document.querySelectorAll(".shore-bottle").forEach((e,a)=>{e.style.setProperty("--wash-delay",`${a*140}ms`),e.classList.add("is-washing")}),document.querySelector(".sea-panel")?.classList.add("is-rising"),setTimeout(()=>document.querySelector(".sea-panel")?.classList.remove("is-rising"),2600)},820);Xr();function Xr(){const e=Ee();if(!e.total)return e;const a=[];return e.entries&&a.push(`${e.entries} ${e.entries===1?"entrada":"entradas"}`),e.bottles&&a.push(`${e.bottles} ${e.bottles===1?"botella":"botellas"} a medio escribir`),a.length&&setTimeout(()=>v(`Recuperado lo que dejaste a medias: ${a.join(" y ")}`),dt.length?2400:1100),e}

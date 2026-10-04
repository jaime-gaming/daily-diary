(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const N=[{value:1,emoji:"😫",label:"Fatal",color:"#a8442c"},{value:2,emoji:"😕",label:"Flojo",color:"#c2743a"},{value:3,emoji:"😐",label:"Normal",color:"#98938a"},{value:4,emoji:"🙂",label:"Bien",color:"#4e6f52"},{value:5,emoji:"🤩",label:"Genial",color:"#254d32"}],fo=["L","M","X","J","V","S","D"],Ss=["","Muy baja","Baja","Normal","Alta","Muy alta"],ks=["","Muy bajo","Bajo","Normal","Alto","Muy alto"],vo=["Productivo","Tranquilo","Ajetreado","Social","Solitario","Creativo","Cansado","Motivado","Ansioso","Emocionado","Nostálgico","Aburrido"],vt=[{key:"water",label:"Agua",unit:"vasos",min:0,max:40,step:1,icon:"drop"},{key:"exercise",label:"Ejercicio",unit:"min",min:0,max:1440,step:5,icon:"run"},{key:"reading",label:"Lectura",unit:"min",min:0,max:1440,step:5,icon:"book"},{key:"mindfulness",label:"Pausa consciente",unit:"min",min:0,max:1440,step:5,icon:"leaf"}],xs=["drop","run","book","leaf","moon","heart","bolt","sun","gauge","pen","paper","spark"],yo=[{id:"text",label:"párrafo"},{id:"line",label:"una línea"}],Ms=[{label:"Cómo responde el cuerpo",hint:"Tensión, digestión, sueño, energía.",type:"text"},{label:"Un pensamiento que no quiero olvidar",hint:"",type:"line"},{label:"Con quién he hablado hoy",hint:"",type:"line"},{label:"Qué me ha costado",hint:"Sin juzgarlo: solo nombrarlo.",type:"text"}],Le=8,De=12,qs=e=>String(e??"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,24),tt=(e,t,a,s)=>{const o=Number(e);return Number.isFinite(o)?Math.min(a,Math.max(t,o)):s},Es=e=>`${e}_${Date.now().toString(36).slice(-5)}${Math.floor(Math.random()*1296).toString(36).padStart(2,"0")}`;function $o(e={}){const t=vt.find(o=>o.key===e.key),a=qs(e.key);if(!a)return null;const s={key:a,label:String(e.label??t?.label??"Contador").trim().slice(0,28)||t?.label||"Contador",unit:String(e.unit??t?.unit??"").trim().slice(0,14),min:tt(e.min??t?.min,0,9999,0),max:0,step:tt(e.step??t?.step,1,3600,t?t.step:1),goal:tt(e.goal,0,99999,0),icon:xs.includes(e.icon)?e.icon:t?.icon||"gauge",builtin:!!t};return s.max=Math.max(tt(e.max??t?.max,1,99999,t?t.max:99),s.min+s.step),s}const ka=(e,t={})=>e?.key==="water"?tt(t?.waterGoal,0,25,8):Number(e?.goal)||0;function ue(e={}){const t=Array.isArray(e?.counters)&&e.counters.length?e.counters:vt,a=new Set;return t.map($o).filter(s=>s&&!a.has(s.key)&&(a.add(s.key),!0)).slice(0,De)}function wo(e={}){const t=qs(e.key),a=String(e.label||"").trim().slice(0,60);return!t||!a?null:{key:t,label:a,hint:String(e.hint||"").trim().slice(0,140),type:e.type==="line"?"line":"text"}}function ae(e={}){const t=Array.isArray(e?.parts)?e.parts:[],a=new Set;return t.map(wo).filter(s=>s&&!a.has(s.key)&&(a.add(s.key),!0)).slice(0,Le)}const So=["bestOfDay","differentToday","generalDay","tomorrow","wordOfDay"],lt=[{id:"teen",min:10,max:18,label:"10 – 18 años",title:"Instituto",desc:"Clases, amistades y aficiones.",sleepRecommended:8.5,studyRecommended:2,focusLabel:"Horas de estudio",focusQuestion:"¿Cuánto has estudiado hoy?",tags:["Clases","Exámenes","Amigos","Deporte","Música","Videojuegos","Tarde libre","Tranquilo","Cansado","Motivado","Creativo","Social"],habits:["Hacer tareas sin mirar el móvil","Leer 15 minutos antes de dormir","Moverme o entrenar un rato","Dejar la mochila lista para mañana","Dejar el móvil fuera de la cama","Salir a tomar el aire"],placeholders:{bestOfDay:"Una risa, una partida, una canción…",differentToday:"Algo curioso, una charla, un plan…",generalDay:"¿Cómo te has sentido hoy?",tomorrow:"Una tarea, un plan, un rato de descanso…"}},{id:"young",min:19,max:26,label:"19 – 26 años",title:"Universidad y primeros pasos",desc:"Estudios, trabajo e independencia.",sleepRecommended:8,studyRecommended:3,focusLabel:"Horas de estudio y foco",focusQuestion:"¿Cuánto has estudiado o avanzado en tus proyectos?",tags:["Productivo","Uni / Trabajo","Amigos","Entreno","Creativo","Tranquilo","Cansado","Motivado","Social","Solitario","Nostálgico","Ajetreado"],habits:["Bloque de estudio sin distracciones","Entrenar o caminar 30 min","Leer 20 páginas","Cocinar algo casero","Sin pantallas 30 min antes de dormir","Ordenar mi mesa al acabar"],placeholders:{bestOfDay:"Un avance, un café, una charla…",differentToday:"Un detalle, un encuentro, un cambio…",generalDay:"¿Qué te ronda la cabeza?",tomorrow:"Una tarea, una pausa, un plan…"}},{id:"adult",min:27,max:49,label:"27 – 49 años",title:"Equilibrio y vida propia",desc:"Trabajo, descanso, salud y tiempo personal.",sleepRecommended:7.5,studyRecommended:1.5,focusLabel:"Horas de enfoque o aprendizaje",focusQuestion:"¿Cuánto has aprendido o avanzado en tus proyectos?",tags:["Enfocado","Tranquilo","Trabajo","Familia","Deporte","Lectura","Cansado","Motivado","Social","Creativo","Desconexión","Ajetreado"],habits:["Cerrar el trabajo a mi hora","Caminar 30 minutos sin prisas","Leer antes de apagar la luz","Estirar espalda y cuello","Beber agua durante la jornada","Media hora sin notificaciones"],placeholders:{bestOfDay:"Una sobremesa, un logro, un rato tranquilo…",differentToday:"Un giro, un detalle, algo nuevo…",generalDay:"¿Cómo ha ido el día?",tomorrow:"Prioridades y descanso…"}},{id:"senior",min:50,max:120,label:"50+ años",title:"Bienestar y perspectiva",desc:"Salud, paseos, lectura y recuerdos.",sleepRecommended:7.5,studyRecommended:1,focusLabel:"Tiempo de lectura o dedicación",focusQuestion:"¿Cuánto has leído o dedicado a tus aficiones?",tags:["Sereno","Paseo","Lectura","Familia","Naturaleza","Salud","Agradecido","Activo","Creativo","Social","Tranquilo","Nostálgico"],habits:["Paseo matutino al aire libre","Rato de lectura tranquila","Ejercicios de movilidad suave","Llamar o ver a alguien querido","Cuidar el descanso nocturno","Un momento de silencio y calma"],placeholders:{bestOfDay:"Un paseo, una charla, una lectura…",differentToday:"Una visita, un recuerdo, otro camino…",generalDay:"¿Con qué sensación te quedas?",tomorrow:"Un paseo, una lectura, sin prisa…"}}],It=[{id:"reading",label:"Lectura",icon:"book",habit:"Leer 20 minutos con calma",tag:"Lectura"},{id:"sport",label:"Deporte",icon:"run",habit:"Entrenar o moverme 30 min",tag:"Deporte"},{id:"study",label:"Estudio",icon:"study",habit:"Sesión de estudio sin móvil",tag:"Productivo"},{id:"music",label:"Música y arte",icon:"spark",habit:"Escuchar un álbum o crear algo",tag:"Creativo"},{id:"nature",label:"Naturaleza",icon:"leaf",habit:"Salir a caminar al aire libre",tag:"Naturaleza"},{id:"social",label:"Amigos",icon:"heart",habit:"Hablar con alguien que quiero",tag:"Social"},{id:"calm",label:"Descanso",icon:"moon",habit:"Apagar pantallas 30 min antes de dormir",tag:"Tranquilo"},{id:"projects",label:"Proyectos",icon:"bolt",habit:"Dedicar 30 min a mi propio proyecto",tag:"Enfocado"},{id:"gaming",label:"Videojuegos",icon:"target",habit:"Parar a tiempo para descansar la vista",tag:"Desconexión"},{id:"cooking",label:"Cocina",icon:"flame",habit:"Preparar una comida casera y tranquila",tag:"Bienestar"}],ct=[{id:"night",label:"Por la noche",icon:"moon"},{id:"morning",label:"Por la mañana",icon:"sun"},{id:"afternoon",label:"A media tarde",icon:"leaf"},{id:"anytime",label:"Cuando quiera",icon:"pen"}],dt=[{id:"warm",label:"Cálido y cercano",desc:"Como hablar con un buen amigo"},{id:"literary",label:"Pausado y literario",desc:"Con gusto por los detalles"},{id:"direct",label:"Directo y práctico",desc:"Claro y al grano"},{id:"gentle",label:"Suave y compasivo",desc:"Amable en días difíciles"}],ee=[{id:"paper",name:"Papel Clásico",desc:"Crema y tinta carbón",colors:["#F3EFE6","#211E17","#B34A2E"],favicon:{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"}},{id:"night",name:"Tinta Nocturna",desc:"Tonos cálidos para la noche",colors:["#151412","#EDE6D8","#D96B4E"],favicon:{bg:"#151412",page:"#272420",accent:"#D96B4E",ink:"#EDE6D8"}},{id:"forest",name:"Bosque Sereno",desc:"Salvia y papel natural",colors:["#EBF0EA","#19241D","#356343"],favicon:{bg:"#19241D",page:"#EBF0EA",accent:"#4C8B5E",ink:"#19241D"}},{id:"terracotta",name:"Atardecer Cálido",desc:"Arcilla y acentos ocre",colors:["#F6ECE4","#261B15","#C45534"],favicon:{bg:"#261B15",page:"#F6ECE4",accent:"#C45534",ink:"#261B15"}},{id:"ocean",name:"Azul Atlántico",desc:"Marfil frío y tinta azul",colors:["#EDF2F6","#16222F","#2B5F8C"],favicon:{bg:"#16222F",page:"#EDF2F6",accent:"#2B5F8C",ink:"#16222F"}},{id:"lavender",name:"Bruma Lavanda",desc:"Lino malva y tinta ciruela",colors:["#F2EEF6","#221B2B","#6E4B8E"],favicon:{bg:"#221B2B",page:"#F2EEF6",accent:"#6E4B8E",ink:"#221B2B"}}],ko=[{id:"calm",label:"Calma y desahogo",icon:"leaf",desc:"Soltar el ruido del día y quedarme más tranquilo/a."},{id:"focus",label:"Constancia y hábitos",icon:"study",desc:"Cuidar mi estudio, mi descanso y mis rutinas diarias."},{id:"memory",label:"Guardar mi historia",icon:"book",desc:"Que los meses no pasen sin recordar lo que he vivido."},{id:"growth",label:"Conocerme mejor",icon:"spark",desc:"Ver qué cosas me sientan bien y cuáles me quitan energía."}],xo=["Leer 20 minutos","Caminar al aire libre","Pausa sin pantallas","Beber 8 vasos de agua","Respirar 5 minutos en calma","Dormir a buena hora","Estirar el cuerpo","Ordenar mi espacio"],_a=[{text:"No todos los días son buenos, pero siempre queda algún rincón que merece la pena guardar.",author:"Nota de cuaderno",tones:["warm","gentle"],ages:["teen","young","adult","senior"]},{text:"Cómo pasamos los días es, al final, cómo pasamos la vida.",author:"Annie Dillard",tones:["literary","direct"],ages:["young","adult","senior"],interests:["reading","projects"]},{text:"Escribir en un diario es hablar contigo sin tener que fingir que todo va perfecto.",author:"Apunte al margen",tones:["direct","warm"],ages:["teen","young","adult"]},{text:"La prisa casi nunca arregla lo que el descanso sí sabe colocar en su sitio.",author:"Cuaderno de calma",tones:["gentle","warm"],ages:["teen","young","adult","senior"],interests:["calm","nature"]},{text:"Un paso corto dado hoy vale más que diez planes perfectos que se quedan para el lunes.",author:"Bitácora personal",tones:["direct"],ages:["teen","young","adult"],interests:["study","sport","projects"]},{text:"Guardar memoria de las cosas pequeñas es la mejor forma de vivir dos veces.",author:"Tradición de lectura",tones:["literary"],ages:["young","adult","senior"],interests:["reading","music"]},{text:"Sé amable con tu propio ritmo: ni los árboles dan fruto todos los meses del año.",author:"Cuaderno de campo",tones:["gentle","literary"],ages:["teen","young","adult","senior"],interests:["nature","calm"]},{text:"Lo que hoy parece un examen gigante o un problema sin salida, dentro de un mes será solo una página pasada.",author:"Nota para días revueltos",tones:["warm","gentle"],ages:["teen","young"],interests:["study","gaming"]}],Qa=[{word:"Ataraxia",origin:"Griego clásico",meaning:"Tranquilidad de ánimo que nace cuando dejamos de pelear contra lo que no depende de nosotros.",prompt:"¿Qué preocupación podrías dejar en pausa por esta noche?"},{word:"Meraki",origin:"Griego moderno",meaning:"Hacer algo poniendo el corazón, el cuidado y una parte de ti en ello.",prompt:"¿En qué detalle pequeño de hoy has puesto ganas o cariño?"},{word:"Kintsugi",origin:"Japonés",meaning:"Oficio de reparar la cerámica rota con barniz de oro, sin esconder las grietas.",prompt:"¿Qué tropiezo reciente te ha servido para aprender algo útil?"},{word:"Komorebi",origin:"Japonés",meaning:"La luz del sol cuando se cuela entre las hojas de los árboles.",prompt:"¿Qué imagen o rincón bonito has visto hoy al pasar?"},{word:"Resiliencia",origin:"Latín",meaning:"La capacidad de encajar un golpe, recuperar el aliento y seguir adelante a tu paso.",prompt:"¿Cómo has tirado hacia delante hoy cuando algo se hacía cuesta arriba?"},{word:"Serendipia",origin:"Castellano",meaning:"Eso bueno que te encuentras por casualidad mientras ibas buscando otra cosa.",prompt:"¿Qué momento no planeado ha merecido la pena hoy?"},{word:"Ubuntu",origin:"Zulú · Xhosa",meaning:"El concepto de que somos quienes somos gracias también a quienes nos rodean.",prompt:"¿Quién te ha hecho el día un poco más fácil o agradable hoy?"},{word:"Ikigai",origin:"Japonés",meaning:"Aquello que te da un motivo concreto para levantarte por la mañana.",prompt:"¿Qué plan o proyecto te apetece de verdad hacer pronto?"},{word:"Wabi-sabi",origin:"Japonés",meaning:"Gustar de las cosas sencillas, imperfectas y gastadas por la vida real.",prompt:"¿En qué cosa imperfecta de hoy puedes dejar de exigirte tanto?"},{word:"Apapachar",origin:"Náhuatl",meaning:"Dar abrigo y consuelo de verdad; cuidar con cercanía.",prompt:"¿Qué necesitas hoy para descansar a gusto?"},{word:"Sosiego",origin:"Castellano",meaning:"Ese silencio tranquilo que queda cuando por fin se acaba la prisa del día.",prompt:"¿En qué momento del día has notado más calma hoy?"},{word:"Epifanía",origin:"Griego",meaning:"Caer en la cuenta de golpe de algo que llevabas tiempo viendo sin entender.",prompt:"¿De qué cosa te has dado cuenta hoy?"},{word:"Bonhomía",origin:"Castellano",meaning:"Trato llano, honesto y amable que no necesita aparentar nada.",prompt:"¿Qué gesto sencillo de amabilidad has visto o tenido hoy?"},{word:"Nefelibata",origin:"Castellano",meaning:"Persona que de vez en cuando camina por las nubes y mira el mundo a su manera.",prompt:"¿En qué se te ha ido el santo al cielo hoy?"},{word:"Templanza",origin:"Latín",meaning:"Guardar el equilibrio y no perder los papeles cuando alrededor hay ruido.",prompt:"¿En qué situación de hoy has sabido mantener la calma?"},{word:"Alba",origin:"Latín",meaning:"La primera claridad de la mañana antes de que asome el sol.",prompt:"¿Cómo te gustaría empezar la mañana de mañana?"},{word:"Saudade",origin:"Portugués",meaning:"Echar de menos con cariño a alguien o a una época en la que fuiste feliz.",prompt:"¿Qué buen recuerdo te ha venido hoy a la cabeza?"},{word:"Lagom",origin:"Sueco",meaning:"Ni de más ni de menos: saber cuándo algo es ya suficiente.",prompt:"¿Con qué cosa de hoy puedes decir tranquilo/a «por hoy ya está bien»?"},{word:"Sisu",origin:"Finés",meaning:"Empuje tranquilo para terminar lo que empezaste aunque estés cansado.",prompt:"¿Qué cosa has sacado adelante hoy aunque te diera pereza?"},{word:"Hygge",origin:"Danés",meaning:"Estar a gusto en lo cotidiano: una charla tranquila, una manta, un rato en casa.",prompt:"¿Qué momento sencillo del día te ha sentado mejor?"},{word:"Querencia",origin:"Castellano",meaning:"El sitio o la gente a la que uno siempre tiene ganas de volver.",prompt:"¿Dónde o con quién te sientes más cómodo/a últimamente?"},{word:"Claridad",origin:"Latín",meaning:"Distinguir lo que de verdad importa de lo que solo hace ruido.",prompt:"Si te quedas con una sola cosa de hoy, ¿cuál eliges?"},{word:"Amparo",origin:"Latín",meaning:"Tener un lugar o una persona donde resguardarse cuando el día se tuerce.",prompt:"¿Qué te reconforta cuando tienes un día torcido?"},{word:"Gratitud",origin:"Latín",meaning:"No dar por supuesto lo bueno que tenemos cerca cada día.",prompt:"¿Qué cosa normal de tu rutina agradecerías si mañana faltara?"}],Wa=[{category:"Autocompasión",title:"No te hables peor que a un amigo",tip:"Cuando estás cansado o algo sale regular, es fácil machacarse. Prueba a decirte exactamente lo que le dirías a alguien a quien aprecias.",action:"Anota algo que hoy hayas hecho lo mejor que podías.",icon:"heart",ages:["teen","young","adult","senior"],interests:["calm","social"]},{category:"Descanso",title:"Bajar el brillo antes de acostarte",tip:"Dejar el móvil o las pantallas un rato antes de meterte en la cama ayuda a que la cabeza deje de saltar de un tema a otro.",action:"Pon la alarma y deja el teléfono lejos de la almohada.",icon:"moon",ages:["teen","young","adult","senior"],interests:["calm","gaming"]},{category:"Calma",title:"Soltar el aire más despacio",tip:"Cuando notes prisa o nudo en el estómago, toma aire contando 4 y suéltalo despacio contando 6. El cuerpo entiende enseguida el mensaje.",action:"Respira hondo tres veces antes de cerrar el cuaderno.",icon:"leaf",ages:["teen","young","adult","senior"],interests:["calm","nature"]},{category:"Enfoque",title:"La regla de los primeros cinco minutos",tip:"Casi siempre cuesta más ponerse que hacerlo. Ponte solo 5 minutos con eso que estás posponiendo; luego decides si sigues.",action:"Deja escrita una sola tarea concreta para mañana.",icon:"study",ages:["teen","young","adult"],interests:["study","projects"]},{category:"Escritura",title:"Aquí nadie te va a poner nota",tip:"No hace falta escribir bonito ni llenar la página. Tres líneas sinceras sobre lo que te ha pasado hoy bastan.",action:"Escribe lo primero que te salga sin borrar.",icon:"pen",ages:["teen","young","adult","senior"],interests:["reading"]},{category:"Hábitos",title:"Un día suelto no rompe nada",tip:"Si ayer no pudiste cumplir un hábito, no pasa nada. Lo que cuenta es retomarlo hoy con naturalidad y sin culpa.",action:"Empieza por el hábito más fácil de tu lista.",icon:"flame",ages:["teen","young","adult","senior"],interests:["projects","sport"]},{category:"Bienestar",title:"A veces el cansancio es sed",tip:"Gran parte del embotamiento de media tarde viene de llevar horas sin beber agua mientras estudias o trabajas.",action:"Ten un vaso o botella a mano mañana por la mañana.",icon:"drop",ages:["teen","young","adult","senior"],interests:["sport","study","cooking"]},{category:"Calma",title:"Sacar el ruido de la cabeza al papel",tip:"Cuando una preocupación da vueltas en bucle, escribirla en una frase la vuelve manejable y libera espacio mental.",action:"Apunta qué te preocupa hoy y qué parte sí está en tu mano.",icon:"book",ages:["teen","young","adult","senior"],interests:["reading","calm"]},{category:"Movimiento",title:"Caminar también ordena los pensamientos",tip:"Quince minutos andando sin mirar el teléfono despejan más la mente que media hora intentando concentrarse a la fuerza.",action:"Sal a dar una vuelta corta mañana cuando te satures.",icon:"run",ages:["teen","young","adult","senior"],interests:["sport","nature"]},{category:"Estudio y memoria",title:"Lo que estudias se fija mientras duermes",tip:"Quitarle horas al sueño para estudiar a última hora suele salir caro: el cerebro consolida lo aprendido durante el descanso.",action:"Prioriza dormir bien hoy para rendir mejor mañana.",icon:"study",ages:["teen","young"],interests:["study"]},{category:"Equilibrio",title:"Cerrar la jornada de verdad",tip:"Tener un pequeño ritual al terminar tus obligaciones —recoger la mesa, ducharte o salir a caminar— separa el deber del descanso.",action:"Elige a qué hora vas a desconectar mañana.",icon:"sun",ages:["young","adult"],interests:["projects","calm"]},{category:"Perspectiva",title:"Cuidar el contacto con los tuyos",tip:"A veces un mensaje corto o una llamada de cinco minutos a alguien que quieres cambia por completo el tono de la semana.",action:"Piensa en alguien con quien te apetezca hablar mañana.",icon:"heart",ages:["teen","young","adult","senior"],interests:["social"]}],Za=["¿Qué rato de hoy te ha dejado buen sabor de boca, aunque haya sido breve?","¿Qué te ha dado más pereza o respeto hoy y cómo lo has llevado?","¿Qué conversación, canción o momento tranquilo te ha acompañado hoy?","¿Qué te gustaría quitarte de la cabeza antes de apagar la luz?","Si un amigo hubiera tenido exactamente tu día de hoy, ¿qué le dirías?","¿En qué momento del día te has sentido más cómodo/a siendo tú?","¿Qué detalle pequeño de hoy no querrías que se te olvidara dentro de un año?","¿Cómo notas el cuerpo esta noche: cansado, inquieto, ligero, tranquilo?","¿Qué cosa sencilla ha salido mejor de lo que esperabas esta mañana?","¿Qué necesitas mañana para que sea un día llevadero y amable?"],Mo=[{number:"024",tel:"tel:024",name:"Línea 024 · Atención a la conducta suicida",detail:"Ministerio de Sanidad · España · gratuita, confidencial y anónima · 24 h.",primary:!0},{number:"717 003 717",tel:"tel:717003717",name:"Teléfono de la Esperanza",detail:"Escucha y apoyo emocional · 24 h.",primary:!0},{number:"900 20 20 10",tel:"tel:900202010",name:"Fundación ANAR · menores y jóvenes",detail:"Gratuita y confidencial · 24 h para jóvenes. Sin rastro en la factura.",primary:!1,youth:!0},{number:"112",tel:"tel:112",name:"Emergencias 112",detail:"Urgencias sanitarias o de seguridad · 24 h.",primary:!1}];function v(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function He(e){return new Date(`${e}T12:00:00`)}function D(e,t){const a=He(e);return a.setDate(a.getDate()+t),v(a)}function qe(e,t){return Math.round((Date.UTC(...t.split("-").map((a,s)=>+a-(s===1?1:0)))-Date.UTC(...e.split("-").map((a,s)=>+a-(s===1?1:0))))/864e5)}function yt(e,t){const a=[e,...t.map(s=>s.date)].sort()[0];return qe(a,e)+1}function P(e,t={weekday:"long",day:"numeric",month:"long",year:"numeric"}){return He(e).toLocaleDateString("es-ES",t)}function me(e){const t=He(e).getDay();return D(e,-((t+6)%7))}function As(e){const t=He(e);return[v(new Date(t.getFullYear(),t.getMonth(),1)),v(new Date(t.getFullYear(),t.getMonth()+1,0))]}function Ee(e,t){const a=He(e);return v(new Date(a.getFullYear(),a.getMonth()+t,1))}function qo(e){const[t,a]=As(e),s=D(t,-((He(t).getDay()+6)%7)),o=Math.ceil((qe(s,a)+1)/7)*7;return Array.from({length:o},(n,r)=>({date:D(s,r),inMonth:D(s,r).slice(0,7)===e.slice(0,7)}))}const pa=Object.freeze({"/":Object.freeze({view:"diary"}),"/pensamientos":Object.freeze({view:"thoughts",thoughtsTab:"shore"}),"/pensamientos/pendientes":Object.freeze({view:"thoughts",thoughtsTab:"sea"}),"/pensamientos/guardados":Object.freeze({view:"thoughts",thoughtsTab:"kept"}),"/pensamientos/archivados":Object.freeze({view:"thoughts",thoughtsTab:"lost"}),"/rutina":Object.freeze({view:"routine",routineTab:"hoy"}),"/rutina/semana":Object.freeze({view:"routine",routineTab:"week"}),"/rutina/contadores":Object.freeze({view:"routine",routineTab:"counters"}),"/rutina/rachas":Object.freeze({view:"routine",routineTab:"streaks"}),"/archivo":Object.freeze({view:"archive",archiveTab:"list"}),"/archivo/calendario":Object.freeze({view:"archive",archiveTab:"calendar"}),"/progreso":Object.freeze({view:"stats",statsTab:"pulse"}),"/progreso/semana":Object.freeze({view:"stats",statsTab:"week"}),"/progreso/mes":Object.freeze({view:"stats",statsTab:"month"}),"/ajustes":Object.freeze({view:"setup",profileTab:"personal"}),"/ajustes/apariencia":Object.freeze({view:"setup",profileTab:"appearance"}),"/ajustes/contenido":Object.freeze({view:"setup",profileTab:"custom"}),"/ajustes/datos":Object.freeze({view:"setup",profileTab:"data"})});Object.freeze(Object.keys(pa));const Va=e=>{const t=`/${String(e||"").replace(/^\/+|\/+$/g,"")}`;return t==="/"?"/":t};function xa(e=""){const t=String(e||"").trim();return!t||t==="/"?"":`/${t.replace(/^\/+|\/+$/g,"")}`}function Eo(e="/",t=""){const a=Va(e),s=xa(t);return s?a===s?"/":a.startsWith(`${s}/`)?Va(a.slice(s.length)):a:a}function Ao(e="/",t=""){const a=Eo(e,t);return{...pa[a]||pa["/"],path:a}}function Cs(e={}){switch(e.view){case"thoughts":return{sea:"/pensamientos/pendientes",kept:"/pensamientos/guardados",lost:"/pensamientos/archivados"}[e.thoughtsTab]||"/pensamientos";case"routine":return{week:"/rutina/semana",counters:"/rutina/contadores",streaks:"/rutina/rachas"}[e.routineTab]||"/rutina";case"archive":return e.archiveTab==="calendar"?"/archivo/calendario":"/archivo";case"stats":return{week:"/progreso/semana",month:"/progreso/mes"}[e.statsTab]||"/progreso";case"setup":return{appearance:"/ajustes/apariencia",custom:"/ajustes/contenido",data:"/ajustes/datos"}[e.profileTab]||"/ajustes";default:return"/"}}function Ma(e={},t=""){const a=xa(t),s=Cs(e);return`${a}${s==="/"?"/":`${s}/`}`}function Co(e=[],t="http://localhost"){for(const a of e){let s;try{s=new URL(a,t).pathname}catch{continue}for(const o of["/assets/","/src/"]){const n=s.lastIndexOf(o);if(n>=0)return xa(s.slice(0,n))}}return""}const E=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e),he=e=>e.filter(t=>Number.isFinite(t));function st(e){const t=he(e);return t.length?t.reduce((a,s)=>a+s,0)/t.length:0}function ot(e){const t=he(e);return t.length?t.reduce((a,s)=>a+s,0)/t.length:null}function $e(e){const t=he(e).sort((s,o)=>s-o);if(!t.length)return null;const a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function Ya(e){const t=he(e);if(!t.length)return null;const a=st(t);return Math.sqrt(st(t.map(s=>(s-a)**2)))}function ie(e,t,a){return e.filter(s=>s.date>=t&&s.date<=a).sort((s,o)=>s.date.localeCompare(o.date))}function Ls(e,t,a,s=v()){const o=a>s?s:a,n=t<=o?qe(t,o)+1:0,r=new Set(e.filter(i=>i.date>=t&&i.date<=o).map(i=>i.date)).size;return{recorded:r,days:n,pct:n?Math.round(r/n*100):0}}function qa(e){let t=0,a=0,s;for(const o of[...new Set(e.map(n=>n.date))].sort())a=s&&qe(s,o)===1?a+1:1,t=Math.max(t,a),s=o;return t}function Ds(e,t=v()){const a=new Set(e.map(n=>n.date));let s=a.has(t)?t:D(t,-1),o=0;for(;a.has(s);)o++,s=D(s,-1);return o}function $t(e){const t=[e.bestOfDay,e.differentToday,e.generalDay,e.tomorrow,...e.gratitude||[],...Object.values(e.parts||{})].join(" ").trim();return t?t.split(/\s+/).length:0}function Lo(e){return e.reduce((t,a)=>t+$t(a),0)}function Ka(e,t){return e.filter(a=>a.habits?.[t]).length}function Ts(e,t){return[...new Set(e.filter(a=>a.habits?.[t]).map(a=>a.date))].sort()}function js(e,t){const a=Ts(e,t);let s=0,o=0,n;for(const r of a)o=n&&qe(n,r)===1?o+1:1,s=Math.max(s,o),n=r;return s}function Gt(e,t,a=v()){const s=new Set(Ts(e,t));if(!s.size)return 0;let o=s.has(a)?a:D(a,-1),n=0;for(;s.has(o);)n++,o=D(o,-1);return n}function Hs(e,t,a=28,s=v()){const o=D(s,1-a),n=e.filter(d=>d.habits?.[t]&&d.date>=o&&d.date<=s).length,r=e.filter(d=>d.date>=o&&d.date<=s).length,i=Math.min(a,qe(o,s)+1);return{done:n,tracked:r,window:i,pct:i?Math.round(n/i*100):0}}function Do(e,t,a=28,s=v(),o=v()){const n=Array.from({length:a},(i,d)=>D(s,d-a+1)),r=new Map(e.map(i=>[i.date,i]));return{dates:n,rows:t.map(i=>({habit:i,cells:n.map(d=>({date:d,done:!!r.get(d)?.habits?.[i.id],future:d>o,recorded:r.has(d)}))}))}}function Ja(e){const t=new Map;for(const a of e)for(const s of a.tags||[])t.set(s,(t.get(s)||0)+1);return[...t.entries()].sort((a,s)=>s[1]-a[1])}function Te(e=[]){const t=new Map;for(const h of e)h?.date&&t.set(h.date,h);const a=[...t.values()].sort((h,g)=>h.date.localeCompare(g.date)),s=h=>a.map(g=>g[h]),o=h=>he(s(h)).length,n=h=>a.filter(g=>Number.isFinite(g[h])).reduce((g,y)=>!g||y[h]>g[h]?y:g,null),r=s("mood"),i=s("sleepHours"),d=s("studyHours"),u=[...new Set(a.flatMap(h=>Object.keys(h.counters||{})))],m=Object.fromEntries(u.map(h=>{const g=a.map(y=>y.counters?.[h]);return[h,{total:he(g).reduce((y,f)=>y+f,0),average:ot(g),median:$e(g),count:he(g).length}]}));return{count:a.length,mood:st(r),energy:ot(s("energy")),stress:ot(s("stress")),sleep:st(i),study:st(d),moodMedian:$e(r),sleepMedian:$e(i),studyMedian:$e(d),moodStdDev:Ya(r),sleepStdDev:Ya(i),metricCounts:{mood:o("mood"),sleep:o("sleepHours"),study:o("studyHours"),energy:o("energy"),stress:o("stress")},totalSleep:he(i).reduce((h,g)=>h+g,0),totalStudy:he(d).reduce((h,g)=>h+g,0),words:Lo(a),best:n("mood"),worst:a.filter(h=>Number.isFinite(h.mood)).reduce((h,g)=>!h||g.mood<h.mood?g:h,null),mostStudy:n("studyHours"),mostSleep:n("sleepHours"),maxStreak:qa(a),moods:[1,2,3,4,5].map(h=>a.filter(g=>g.mood===h).length),counters:m}}function Os(e){return e<6?"Has dormido poco.":e<7?"Una cantidad algo baja.":e<=9?"Un descanso razonable.":"Has dormido bastante."}function To(e){return e===0?"Hoy no has dedicado tiempo al estudio.":e<1?"Has hecho un poco de estudio.":e<3?"Has tenido una sesión de estudio considerable.":e<5?"Has dedicado bastante tiempo.":"Ha sido un día de estudio intenso."}function Ut(e,t,a=null){if(a&&!a.builtin)return jo(a,t);switch(e){case"water":return t===0?"Sin registrar agua hoy.":t<4?"Poca agua registrada.":t<8?"Una hidratación razonable.":"Buen nivel de hidratación.";case"exercise":return t===0?"Sin ejercicio registrado hoy.":t<20?"Un poco de movimiento.":t<60?"Una sesión de ejercicio notable.":"Un día muy activo.";case"reading":return t===0?"Sin lectura registrada hoy.":t<20?"Unas páginas para hoy.":t<60?"Una buena sesión de lectura.":"Un día de mucha lectura.";default:return t===0?"Sin pausa consciente registrada.":t<10?"Un momento de pausa.":t<30?"Una práctica considerable.":"Una práctica muy constante hoy."}}function jo(e,t){const a=e.unit?` ${e.unit}`:"",s=Number(e.goal)||0;return t?s&&t>=s?`Meta cumplida: ${t} de ${s}${a}.`:s?`Vas a ${t} de ${s}${a}.`:`${t}${a} hoy.`:"Sin registrar hoy."}const Ho=["","Hoy ha sido un día difícil.","Hoy ha sido un día flojo.","Hoy ha sido un día normal.","Hoy ha sido un día bueno.","Hoy ha sido un día genial."];function Oo(e){const t=[Ho[e.mood],`Has dormido ${E(e.sleepHours)} horas y has dedicado ${E(e.studyHours)} horas al estudio.`,Os(e.sleepHours),To(e.studyHours)];e.energy&&t.push(`Tu energía se ha sentido ${["","muy baja","baja","normal","alta","muy alta"][e.energy].toLowerCase()}.`),e.stress&&t.push(`El estrés ha sido ${["","muy bajo","bajo","normal","alto","muy alto"][e.stress].toLowerCase()}.`);const a=Object.values(e.habits||{}).filter(Boolean).length;a&&t.push(`Has cumplido ${a} de tus hábitos de hoy.`);const s=e.counters?.water||0;return s>=6&&t.push(`Además, has bebido ${s} vasos de agua.`),t.join(" ")}function No(e,t=!1){if(!e.count)return"Aún no hay entradas en este período.";const a=e.metricCounts?.mood?`${E(e.mood)}/5`:"sin valoración registrada",s=e.metricCounts?.sleep?`${E(e.sleep)} h de media`:"sin datos de sueño",o=e.metricCounts?.study?`${E(e.study)} h por día con dato`:"sin datos de dedicación",n=e.count===1?"día":"días",r=e.metricCounts?.study?`${E(e.totalStudy)} horas en total`:"sin datos de dedicación",i=t?`En el período has registrado ${e.count} ${n}. Tu valoración media ha sido ${a}. Estudio: ${r}; sueño: ${s}.`:`En la semana has registrado ${e.count} ${n}. Tu valoración media ha sido ${a}; el sueño, ${s}, y la dedicación, ${o}.`,d=[];return Number.isFinite(e.energy)&&d.push(`Tu energía media ha sido ${E(e.energy)}/5`),Number.isFinite(e.stress)&&d.push(`el estrés medio ${E(e.stress)}/5`),e.words&&d.push(`has escrito ${E(e.words)} palabras`),d.length?`${i} ${d.join(", ")}.`:i}function Po(e,t=v()){const a=ie(e,D(t,-6),t),s=ie(e,D(t,-13),D(t,-7)),o=[];if(a.length>=3&&s.length>=3){const g=Te(a),y=Te(s),f=(A,F,Q,z)=>{const[L,T]=A;if(g.metricCounts[T]<3||y.metricCounts[T]<3)return;const U=g[L]-y[L];U>=F?o.push(Q):U<=-F&&o.push(z)};f(["sleepMedian","sleep"],.5,"En tus registros recientes, el valor habitual de sueño ha subido respecto a la semana anterior.","En tus registros recientes, el valor habitual de sueño ha bajado respecto a la semana anterior."),f(["studyMedian","study"],.5,"Has dedicado más tiempo al estudio o enfoque que en los 7 días anteriores.","Has dedicado menos tiempo al estudio o enfoque que en los 7 días anteriores."),f(["moodMedian","mood"],.4,"Tu valoración habitual del día ha subido respecto a la semana anterior.","Tu valoración habitual del día ha bajado respecto a la semana anterior."),f(["energy","energy"],.4,"Tu energía registrada ha sido mayor que en la semana anterior.","Tu energía registrada ha sido menor que en la semana anterior."),f(["stress","stress"],.4,"Tu estrés registrado ha sido mayor que en la semana anterior.","Tu estrés registrado ha sido menor que en la semana anterior."),!o.length&&g.metricCounts.mood>=3&&y.metricCounts.mood>=3&&o.push("Tus registros de ánimo se han mantenido bastante estables respecto a los 7 días anteriores.")}const n=ie(e,D(t,-29),t),r=g=>g.filter(y=>Number.isFinite(y.mood)).length>=5,i=n.filter(g=>Number.isFinite(g.sleepHours)&&g.sleepHours>7),d=n.filter(g=>Number.isFinite(g.sleepHours)&&g.sleepHours<=7);r(i)&&r(d)&&$e(i.map(y=>y.mood))-$e(d.map(y=>y.mood))>=.5&&o.push("En tus registros del último mes, dormir más de 7 horas coincide con una valoración habitual algo más alta. Es una asociación, no una causa demostrada.");const u=n.filter(g=>Number.isFinite(g.counters?.exercise)),m=u.filter(g=>g.counters.exercise>=20),h=u.filter(g=>g.counters.exercise<20);return r(m)&&r(h)&&$e(m.map(y=>y.mood))-$e(h.map(y=>y.mood))>=.5&&o.push("En tus registros, los días con 20 minutos o más de ejercicio coinciden con una valoración habitual algo más alta. Es una asociación, no una causa demostrada."),o}const Pe=29.530588853,Fo="2000-01-06",Xa=2.5,ma=[{id:"shore",label:"A la orilla",desc:"Muy cerca: vuelve en cuanto suba la marea.",min:2,max:7,chance:.94,miles:9,reach:"se ve desde la arena"},{id:"breeze",label:"Brisa costera",desc:"Un par de semanas dando tumbos por la bahía.",min:9,max:28,chance:.8,miles:17,reach:"cruza la bahía"},{id:"current",label:"Corriente del norte",desc:"Semanas de travesía; ya no se ve desde la playa.",min:28,max:80,chance:.63,miles:34,reach:"dobló el cabo"},{id:"deep",label:"Alta mar",desc:"Meses lejos. Puede que no vuelva nunca.",min:80,max:240,chance:.42,miles:58,reach:"más allá del mapa"}],Bo=["la corriente del Golfo","el Noroeste","los Alisios","la deriva de Levante","el canal viejo","la corriente fría","el remolino de poniente","la resaca del faro"],Ot=[{id:"amber",name:"ámbar",hex:"#B4762E"},{id:"green",name:"verde botella",hex:"#3E6B4F"},{id:"blue",name:"azul cobalto",hex:"#3B5F86"},{id:"smoke",name:"humo",hex:"#6E6257"},{id:"rose",name:"rosa viejo",hex:"#A65B4E"},{id:"clear",name:"cristal",hex:"#7F8E93"}];function Nt(e=""){let t=2166136261;const a=String(e);for(let s=0;s<a.length;s++)t^=a.charCodeAt(s),t=Math.imul(t,16777619);return t>>>0}function Ns(e=0){let t=e>>>0;return()=>{t=t+1831565813>>>0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a>>>0,((a^a>>>14)>>>0)/4294967296}}const at=(e,t)=>(e%t+t)%t,es=(e,t)=>e[Math.floor(t()*e.length)%e.length],zo=["luna nueva","luna creciente","cuarto creciente","gibosa creciente","luna llena","gibosa menguante","cuarto menguante","luna menguante"],ha=e=>Math.min(1,Math.max(0,e));function Ps(e=new Date){const t=e.getHours()+e.getMinutes()/60+e.getSeconds()/3600,a=6,s=18,o=r=>Math.round(r*10)/10;if(t>=a&&t<s){const r=(t-a)/(s-a);return{x:o(8+84*r),y:o(46-6*Math.sin(Math.PI*r)),moonX:50,moonY:42,phase:r<.22?"morning":r>.78?"evening":"day",progress:o(r)}}const n=t>=s?(t-s)/12:(t+6)/12;return{x:t<a?8:92,y:94,moonX:o(8+84*n),moonY:o(58-20*Math.sin(Math.PI*n)),phase:"night",progress:o(n)}}function Ro(e=v()){return at(qe(Fo,e)+.765,Pe)}function Fs(e=v()){const t=Ro(e),a=Pe/2,s=Math.min(at(t,a),a-at(t,a)),o=t<a;let n="swell",r="Marea en movimiento",i=.6;s<=Xa?(n="spring",r="Marea viva",i=1):Math.abs(at(t,a)-a/2)<=Xa?(n="neap",r="Marea muerta",i=.28):o?(n="rising",r="Marea creciente",i=.7):(n="falling",r="Marea menguante",i=.5);const d=ha((1-Math.cos(2*Math.PI*t/Pe))/2),u=zo[Math.floor(at(t+Pe/16,Pe)/(Pe/8))%8];return{age:t,key:n,name:r,strength:i,rising:o,illum:d,moon:Math.round(d*100)/100,phase:u}}function Io(e=v()){return Fs(e).key==="spring"}function Go(e,t=16){for(let a=0;a<=t;a++){const s=D(e,a);if(Io(s))return s}return e}const Et=[{id:"calm",label:"mar en calma",short:"calma",desc:"Agua plana: la botella avanza despacio, pero no se pierde de vista.",speed:.82,push:0,water:.34,rough:0},{id:"haze",label:"bruma",short:"bruma",desc:"Niebla espesa: se pierde la referencia de la orilla algún día más.",speed:.92,push:1,water:.3,rough:.25},{id:"wind",label:"viento a favor",short:"viento",desc:"Sopla hacia fuera y hacia casa: la travesía se acelera.",speed:1.24,push:0,water:.58,rough:.5},{id:"rain",label:"lluvia",short:"lluvia",desc:"Llueve sobre el agua: corrientes revueltas, llegadas inciertas.",speed:1.05,push:1,water:.66,rough:.62},{id:"gale",label:"temporal",short:"temporal",desc:"Con este mar no entra nada en la bahía: la botella espera fuera.",speed:1.42,push:2,water:.92,rough:1}],ia=[{id:"levante",label:"levante"},{id:"poniente",label:"poniente"},{id:"noroeste",label:"el noroeste"},{id:"gallego",label:"el gallego"},{id:"suroeste",label:"suroeste"},{id:"mistral",label:"el mistral"},{id:"libeccio",label:"libeccio"},{id:"gregal",label:"gregal"}],ts=new Set(["levante","el mistral","gregal","suroeste"]);function Bs(e=v()){const t=Ns(Nt(`parte|${e}`)),a=t(),s=t(),o=t(),n=Math.min(Et.length-1,Math.floor(Math.pow(a,1.7)*Et.length)),r=Et[n],i=ia[Math.floor(s*ia.length)%ia.length],d=Math.round(4+o*12+r.rough*38),u=Fs(e);return{date:e,weather:r,wind:{...i,kmh:d,offshore:ts.has(i.id)},level:ha(r.water*.7+u.strength*.42),rough:ha(r.rough*.72+(u.strength-.5)*.4),speed:r.speed,push:ts.has(i.id)?r.push+1:r.push,tide:u}}function Uo(e="breeze"){return ma.find(t=>t.id===e)||ma.find(t=>t.id==="breeze")}function _o({text:e="",castAt:t=v(),sea:a="breeze",id:s=""}={}){const o=Uo(a),n=Ns(Nt(`${t}|${o.id}|${s}|${String(e).trim().slice(0,220)}`)),r=n(),i=n(),d=n(),u=n(),m=Bs(t),h=Math.max(1,Math.round(o.min+r*(o.max-o.min))),g=i<o.chance,y=Math.max(4,Math.round(o.miles*(.7+d*.6)*m.speed)),f=D(t,h),A=m.push>0?D(f,m.push):f,F=g?Go(A):f,Q=Math.max(3,Math.round(h*.22));return{sea:o.id,returns:g,speed:y,driftDays:Math.max(1,qe(t,F)),arriveOn:F,lostOn:g?null:D(t,h+Q),current:es(Bo,n),glass:es(Ot,n),mottoSeed:Math.floor(u*1e6),weather:m.weather.id,wind:m.wind.label,windSpeed:m.wind.kmh,push:m.push}}function Qe(e,t=v()){return e.status&&e.status!=="drifting"?e.status:e.returns?t>=(e.arriveOn||e.castAt)?"returned":"drifting":e.lostOn&&t>=e.lostOn?"lost":"drifting"}function zs(e,t=v()){return!!e&&Qe(e,t)==="returned"}function Qo(e,t=v()){if(!e||typeof e!="object")return e;const a=Qe(e,t);if(a===e.status)return e;const s=new Date().toISOString();return a==="returned"?{...e,status:"returned",returnedAt:e.arriveOn||v(),seen:!1,updatedAt:s}:a==="lost"?{...e,status:"lost",lostAt:e.lostOn||v(),seen:!1,updatedAt:s}:e}function _t(e=[],t=v()){const a={drifting:[],returned:[],lost:[],kept:[]};for(const s of e)a[Qe(s,t)]?.push(s);a.kept=e.filter(s=>s.kept&&Qe(s,t)==="returned"),a.drifting.sort((s,o)=>s.castAt.localeCompare(o.castAt));for(const s of["returned","lost"])a[s].sort((o,n)=>String(n.returnedAt||n.lostAt||n.castAt).localeCompare(String(o.returnedAt||o.lostAt||o.castAt)));return a.returned.sort((s,o)=>(s.seen===!0)-(o.seen===!0)||String(o.returnedAt||"").localeCompare(String(s.returnedAt||""))),a.kept.sort((s,o)=>String(o.keptOn||"").localeCompare(String(s.keptOn||""))),a}function Qt(e=[],t=v()){return e.filter(a=>Qe(a,t)==="returned")}function Wo(e=""){const t=String(e||"").trim();return t?t.split(/\s+/).length:0}const Ea="diario.entries.v1",Aa="diario.habits.v1",Ca="diario.setup.v1",Wt="diario.thoughts.v1",K={completed:!1,name:"",age:null,ageGroup:"young",interests:[],ritual:"night",tone:"warm",savedQuotes:[],purpose:"calm",motto:"Un día a la vez.",theme:"paper",sleepGoal:7.5,studyGoal:2,waterGoal:8,showDailyWord:!0,showDailyTip:!0,crisisAlertsEnabled:!0,trustedContactName:"",trustedContactPhone:"",sidebarCollapsed:!1,reduceMotion:!1,counters:[],parts:[],updatedAt:null};function Zt(e,t="young"){const a=Number(e);return!Number.isFinite(a)||a<=0?t:a<=18?"teen":a<=26?"young":a<=49?"adult":"senior"}function Ce(e,t){if(typeof e!="string")throw new Error(`${t} debe ser texto.`);if(e.length>2e4)throw new Error(`${t} debe tener como máximo 20.000 caracteres.`);return e}function Zo(e,t){const a=vt.find(i=>i.key===t);if(e==null||e==="")return 0;const s=Number(e),o=a?.min??0,n=a?.max??99999,r=a?.label??t;if(!Number.isFinite(s)||s<o||s>n)throw new Error(`${r} debe estar entre ${o} y ${n}.`);return Math.round(s*10)/10}const Rs=/^[\w-]{1,24}$/;function as(e){if(e==null||e==="")return null;const t=Number(e);if(!Number.isInteger(t)||t<1||t>5)throw new Error("Las escalas van de 1 a 5.");return t}function Vo(e){const t={};if(e==null)return t;if(typeof e!="object"||Array.isArray(e))throw new Error("Las partes del diario no son válidas.");for(const[a,s]of Object.entries(e)){if(!Rs.test(a))continue;if(typeof s!="string")throw new Error(`La parte «${a}» debe ser texto.`);const o=s.trim();if(o){if(o.length>4e3)throw new Error("Cada parte del diario admite como máximo 4.000 caracteres.");if(t[a]=o,Object.keys(t).length>=Le)break}}return t}function Vt(e){if(!e||typeof e!="object"||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(new Date(e.date+"T12:00:00").getTime())||v(new Date(e.date+"T12:00:00"))!==e.date)throw new Error("Hay una fecha no válida.");if(e.date>v())throw new Error("No se pueden registrar días futuros.");if(!Number.isInteger(e.mood)||e.mood<1||e.mood>5)throw new Error("Selecciona cómo te ha ido el día.");for(const r of["sleepHours","studyHours"]){const i=e[r];if(typeof i!="number"||!Number.isFinite(i)||i<0||i>24)throw new Error("Las horas deben estar entre 0 y 24.")}const t=Object.fromEntries(So.map(r=>[r,Ce(e[r]??"",r)]));if(!t.generalDay.trim())throw new Error("Escribe cómo ha ido tu día en general.");const a=Ce(e.capsule??"","La cápsula del día").slice(0,300);if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(r=>typeof r!="string"||r.length>2e4))throw new Error("El agradecimiento debe tener tres campos de texto.");if(e.goals!==void 0&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(r=>typeof r!="string"||r.length>500)))throw new Error("La lista de objetivos no es válida.");const s=Array.isArray(e.tags)?e.tags:[];if(s.length>20)throw new Error("Puedes elegir como máximo 20 etiquetas.");for(const r of s)if(typeof r!="string"||!r.trim()||r.length>40)throw new Error("Hay una etiqueta no válida.");const o={};for(const r of vt)o[r.key]=Zo(e.counters?.[r.key],r.key);for(const r of Object.keys(e.counters||{})){if(!Rs.test(r)||r in o)continue;const i=Number(e.counters[r]);Number.isFinite(i)&&i>=0&&i<=99999&&(o[r]=Math.round(i*10)/10)}if(Object.keys(o).length>De)throw new Error(`No puedes tener más de ${De} contadores.`);const n={};if(e.habits!==void 0&&(typeof e.habits!="object"||e.habits===null||Array.isArray(e.habits)))throw new Error("Los hábitos no son válidos.");for(const[r,i]of Object.entries(e.habits||{}))typeof r=="string"&&r.length<=60&&(n[r]=i===!0);return{id:typeof e.id=="string"?e.id:crypto.randomUUID(),date:e.date,mood:e.mood,sleepHours:e.sleepHours,studyHours:e.studyHours,energy:as(e.energy),stress:as(e.stress),...t,capsule:a,gratitude:e.gratitude.map(r=>Ce(r??"","El agradecimiento")),goals:(e.goals||[]).map(r=>Ce(r,"Un objetivo")),tags:[...new Set(s.map(r=>r.trim()))],counters:o,parts:Vo(e.parts),habits:n,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function La(e){const t=e.map(Vt).sort((a,s)=>a.date.localeCompare(s.date));return t.map(a=>({...a,dayNumber:yt(a.date,t)}))}function Yt(){const e=localStorage.getItem(Ea);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se han podido leer tus entradas.");return La(t)}function Da(e){const t=La(e);return localStorage.setItem(Ea,JSON.stringify(t)),t}function Is(e){const t=Vt(e);t.updatedAt=new Date().toISOString();const a=Yt();return Da([...a.filter(s=>s.date!==t.date),t])}function Yo(e){return Da(Yt().filter(t=>t.date!==e))}function Ko(){localStorage.removeItem(Ea),localStorage.removeItem(Aa),localStorage.removeItem(Ca),localStorage.removeItem(Wt)}function Ke(e){if(!e||typeof e!="object")throw new Error("Hábito no válido.");const t=Ce(e.name??"","El nombre del hábito").trim();if(!t)throw new Error("El hábito necesita un nombre.");if(t.length>40)throw new Error("El nombre del hábito debe tener 40 caracteres o menos.");return{id:typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),name:t,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString()}}function wt(){const e=localStorage.getItem(Aa);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se han podido leer tus hábitos.");return t.map(Ke)}function Ta(e){const t=e.map(Ke);return localStorage.setItem(Aa,JSON.stringify(t)),t}function Pt(e){const t=Ke(e),a=wt();return Ta([...a.filter(s=>s.id!==t.id),t])}function Jo(e){return Ta(wt().filter(t=>t.id!==e))}const Xo=new Set(ma.map(e=>e.id)),en=new Set(Et.map(e=>e.id)),tn=new Set(Ot.map(e=>e.id)),an=new Set(["drifting","returned","lost"]);function Oe(e){return typeof e=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e)}function Je(e){if(!e||typeof e!="object")throw new Error("El pensamiento no es válido.");const t=Ce(e.text??"","El pensamiento").trim().slice(0,1200);if(!t)throw new Error("Escribe un pensamiento antes de echar la botella al mar.");const a=Oe(e.castAt)&&e.castAt<=v()?e.castAt:v(),s=Xo.has(e.sea)?e.sea:"breeze",o=Number.isInteger(e.mood)&&e.mood>=1&&e.mood<=5?e.mood:null,n=typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),r=Number.isInteger(e.driftDays)&&Oe(e.arriveOn)?{returns:e.returns===!0,speed:Number.isFinite(e.speed)?Math.max(1,Math.round(e.speed)):10,driftDays:Math.max(1,e.driftDays),arriveOn:e.arriveOn,lostOn:Oe(e.lostOn)?e.lostOn:null,current:typeof e.current=="string"?e.current.slice(0,60):"",mottoSeed:Number.isFinite(e.mottoSeed)?Math.round(e.mottoSeed):0,weather:en.has(e.weather)?e.weather:null,wind:typeof e.wind=="string"?e.wind.slice(0,24):"",windSpeed:Number.isFinite(e.windSpeed)?Math.max(0,Math.round(e.windSpeed)):null,push:Number.isInteger(e.push)?Math.max(0,Math.min(4,e.push)):0}:_o({text:t,castAt:a,sea:s,id:n});return{id:n,text:t,castAt:a,mood:o,sea:s,...r,status:an.has(e.status)?e.status:"drifting",glass:tn.has(e.glass)?e.glass:"amber",returnedAt:Oe(e.returnedAt)?e.returnedAt:null,lostAt:Oe(e.lostAt)?e.lostAt:null,reply:Ce(e.reply??"","La respuesta").trim().slice(0,1200),kept:!!e.kept,keptOn:Oe(e.keptOn)?e.keptOn:null,seen:e.seen===!0,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function Kt(e){const t=v(),a=e.map(Je).map(s=>s.castAt>t?{...s,castAt:t}:s).sort((s,o)=>s.castAt.localeCompare(o.castAt)||s.id.localeCompare(o.id));return localStorage.setItem(Wt,JSON.stringify(a)),ke()}function sn(e){const t=v();let a=!1;const s=e.map(o=>{const n=Qo(o,t);return n!==o&&(a=!0),n});return a&&localStorage.setItem(Wt,JSON.stringify(s)),s}function ke(){const e=localStorage.getItem(Wt);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se ha podido leer tu mar de pensamientos.");return sn(t.map(Je))}function on(e){const t=ke().find(o=>o.id===e?.id)||null,a=t?Object.fromEntries(["sea","returns","speed","driftDays","arriveOn","lostOn","current","glass","mottoSeed","status"].map(o=>[o,t[o]])):{},s=Je({...t,...e,...a,updatedAt:new Date().toISOString()});return Kt([...ke().filter(o=>o.id!==s.id),s])}function Be(e,t={}){const a=ke();return Kt(a.map(s=>s.id===e?{...s,...t,updatedAt:new Date().toISOString()}:s))}function nn(e){return Kt(ke().filter(t=>t.id!==e))}function Gs(e){return Be(e,{status:"drifting",castAt:v(),driftDays:null,arriveOn:null,lostOn:null,returnedAt:null,lostAt:null,seen:!1,reply:"",kept:!1,keptOn:null})}function Jt(e={}){const t=e&&typeof e=="object"?e:{},a=new Set(ee.map(f=>f.id)),s=new Set(ko.map(f=>f.id)),o=new Set(lt.map(f=>f.id)),n=new Set(It.map(f=>f.id)),r=new Set(ct.map(f=>f.id)),i=new Set(dt.map(f=>f.id)),d=(f,A,F,Q)=>{const z=Number(f);return Number.isFinite(z)?Math.min(F,Math.max(A,Math.round(z*10)/10)):Q};let u=null;if(t.age!==void 0&&t.age!==null&&t.age!==""){const f=Math.round(Number(t.age));Number.isFinite(f)&&f>=8&&f<=115&&(u=f)}const m=o.has(t.ageGroup)?t.ageGroup:K.ageGroup,h=u!==null?Zt(u,m):m,g=Array.isArray(t.interests)?[...new Set(t.interests.filter(f=>n.has(f)))]:[],y=Array.isArray(t.savedQuotes)?[...new Set(t.savedQuotes.filter(f=>typeof f=="string"&&f.trim().length>0).map(f=>f.trim().slice(0,260)))].slice(0,40):[];return{completed:!!t.completed,name:String(t.name??"").trim().slice(0,50),age:u,ageGroup:h,interests:g,ritual:r.has(t.ritual)?t.ritual:K.ritual,tone:i.has(t.tone)?t.tone:K.tone,savedQuotes:y,purpose:s.has(t.purpose)?t.purpose:K.purpose,motto:String(t.motto??K.motto).trim().slice(0,140)||K.motto,theme:a.has(t.theme)?t.theme:K.theme,sleepGoal:d(t.sleepGoal,4,14,K.sleepGoal),studyGoal:d(t.studyGoal,0,16,K.studyGoal),waterGoal:d(t.waterGoal,1,25,K.waterGoal),showDailyWord:t.showDailyWord===void 0?!0:!!t.showDailyWord,showDailyTip:t.showDailyTip===void 0?!0:!!t.showDailyTip,crisisAlertsEnabled:t.crisisAlertsEnabled===void 0?!0:!!t.crisisAlertsEnabled,trustedContactName:String(t.trustedContactName??"").trim().slice(0,60),trustedContactPhone:String(t.trustedContactPhone??"").trim().slice(0,30),sidebarCollapsed:!!t.sidebarCollapsed,reduceMotion:!!t.reduceMotion,counters:ue(t).slice(0,De),parts:ae(t).slice(0,Le),updatedAt:typeof t.updatedAt=="string"?t.updatedAt:new Date().toISOString()}}function Xt(){const e=localStorage.getItem(Ca);if(!e)return{...K};try{const t=JSON.parse(e);return Jt(t)}catch{return{...K}}}function be(e={}){const t=Xt(),a=Jt({...t,...e,updatedAt:new Date().toISOString()});return localStorage.setItem(Ca,JSON.stringify(a)),a}function rn(e,t=wt(),a=Xt(),s=ke()){return JSON.stringify({app:"diario",version:1,exportedAt:new Date().toISOString(),entries:La(e),habits:t.map(Ke),thoughts:s.map(Je),setup:Jt(a)},null,2)}function ln(e){let t;try{t=JSON.parse(e)}catch{throw new Error("El archivo no es una copia JSON válida.")}if(!t||typeof t!="object"||t.version!==1||!Array.isArray(t.entries))throw new Error("Selecciona una copia JSON de Diario (versión 1).");const a=t.entries.map(Vt);if(new Set(a.map(r=>r.date)).size!==a.length)throw new Error("La copia contiene fechas duplicadas.");const s=Array.isArray(t.habits)?t.habits.map(Ke):[],o=Array.isArray(t.thoughts)?t.thoughts.map(Je):[],n=t.setup?Jt(t.setup):null;return{entries:a,habits:s,thoughts:o,setup:n}}function cn(e){const t=Yt(),a=new Map(t.map(n=>[n.date,n]));for(const n of e.entries)a.set(n.date,Vt(n));const s=new Map(wt().map(n=>[n.id,n]));for(const n of e.habits)s.set(n.id,Ke(n));Ta([...s.values()]);const o=new Map(ke().map(n=>[n.id,n]));for(const n of e.thoughts||[])o.set(n.id,Je(n));return Kt([...o.values()]),e.setup&&be(e.setup),Da([...a.values()])}function dn(e=""){return String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim()}function xe(e="paper",t={}){const a=ee.find(u=>u.id===e)||ee[0],{bg:s,page:o,accent:n,ink:r}=a.favicon||{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"},i=String(t?.name||"").trim().slice(0,1).toUpperCase(),d=i?`<text x="36" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="18" fill="${r}">${i.replace(/[<>&"']/g,"")}</text>`:`<path d="M29 29h14M29 36h10" stroke="${r}" stroke-width="2.6" stroke-linecap="round"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="16" fill="${s}"/>
    <rect x="14" y="11" width="38" height="42" rx="5" fill="${o}"/>
    <rect x="14" y="11" width="7" height="42" rx="2" fill="${n}"/>
    <path d="M41 11v12l-4-3-4 3V11" fill="${n}"/>
    ${d}
    <circle cx="46" cy="46" r="3" fill="${n}"/>
  </svg>`.replace(/\s+/g," ").trim()}function un(e="paper",t={}){const a=xe(e,t);return`data:image/svg+xml;utf8,${encodeURIComponent(a)}`}const pn=[{label:"suicidio",regex:/\b(suicid(io|arme|arse|a)|conducta suicida)\b/},{label:"quitarme la vida",regex:/\b(quitar(me|se) la vida|acabar con mi vida|terminar con mi vida)\b/},{label:"no quiero vivir",regex:/\b(no quiero (seguir viviendo|vivir)|no merece la pena vivir|no vale la pena vivir)\b/},{label:"quiero morir",regex:/\b(quiero morir(me)?|me quiero morir|deseo morir(me)?|prefiero estar muert[oa]|mejor muert[oa])\b/},{label:"autolesión",regex:/\b(autolesion(arme|arse|es)?|hacerme dano|hacerme sangre|cortarme las venas|cortarme el brazo|cortarme la piel)\b/},{label:"acabar con todo",regex:/\b(acabar con todo para siempre|desaparecer para siempre|ojala no despertar|no despertar manana|matarme|tirarme (por la ventana|al tren|desde un puente)|sobredosis)\b/}];function mn(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"){const t=Array.isArray(e.gratitude)?e.gratitude.join(" "):"",a=Array.isArray(e.goals)?e.goals.join(" "):"",s=Array.isArray(e.tags)?e.tags.join(" "):"";return[e.bestOfDay,e.differentToday,e.generalDay,e.wordOfDay,e.capsule,e.tomorrow,t,a,s].filter(Boolean).join(" ")}return""}function _(e={}){const t=e?.age?Zt(e.age,e.ageGroup||"young"):e?.ageGroup||"young",a=lt.find(A=>A.id===t)||lt[1],s=Array.isArray(e?.interests)?e.interests:[],o=It.filter(A=>s.includes(A.id)),n=ct.find(A=>A.id===e?.ritual)||ct[0],r=dt.find(A=>A.id===e?.tone)||dt[0];let i=a.focusLabel,d=a.focusQuestion;s.includes("study")?(i="Estudio",d="Tiempo de estudio o repaso"):s.includes("projects")&&a.id!=="teen"&&(i="Proyectos y enfoque",d="Tiempo dedicado a tus proyectos");const u=[...new Set([...o.map(A=>A.habit),...a.habits,...xo])].slice(0,8),m=[...new Set([...o.map(A=>A.tag),...a.tags,...vo])].slice(0,12),h=Number.isFinite(Number(e?.age))&&Number(e.age)>0&&Number(e.age)<18;let g="Nota del día",y="Algo que quieras recordar hoy…";s.includes("music")?(g="Canción o escena del día",y="¿Qué has escuchado o visto hoy?"):s.includes("reading")?(g="Lectura o cita",y="Un libro o una frase…"):s.includes("gaming")&&(g="Partida o serie del día",y="Un juego o una serie…");const f=["water"];return(s.includes("sport")||s.includes("nature")||!s.length)&&f.push("exercise"),(s.includes("reading")||s.includes("study")||!s.length)&&f.push("reading"),(s.includes("calm")||!s.length)&&f.push("mindfulness"),{group:a,age:e?.age||null,isMinor:h,interests:o,ritual:n,tone:r,focusLabel:i,focusQuestion:d,capsuleLabel:g,capsulePlaceholder:y,activeCounterKeys:f,sleepRecommended:a.sleepRecommended,studyRecommended:a.studyRecommended,suggestedHabits:u,tags:m,placeholders:a.placeholders}}function ja(e){const t=mn(e),a=dn(t),s=[];if(a)for(const o of pn)o.regex.test(a)&&s.push(o.label);return s.length>0?{triggered:!0,level:"high",matchedTerms:s,reason:"Si estás pasando por un momento muy difícil, no tienes por qué llevarlo a solas. El 024 es gratuito, confidencial y atiende las 24 horas."}:{triggered:!1,level:"none",matchedTerms:[],reason:""}}function ut(e=v()){const t=String(e||"").replace(/[^0-9]/g,"");let a=0;for(let s=0;s<t.length;s++)a=a*31+t.charCodeAt(s)>>>0;return a||1}function hn(e=v(),t=0){const a=(ut(e)+Math.abs(t))%Qa.length;return Qa[a]}function gn(e=v(),t=0,a={}){const o=_(a).group.id,n=new Set(a?.interests||[]),r=Wa.filter(u=>{const m=!u.ageGroups||u.ageGroups.includes(o),h=!u.interests||u.interests.some(g=>n.has(g));return m||h}),i=r.length?r:Wa,d=(ut(e)*7+Math.abs(t))%i.length;return i[d]}function bn(e=v(),t=0,a={}){const o=_(a).group.id,n=a?.tone||"warm",r=new Set(a?.interests||[]),i=Array.isArray(a?.savedQuotes)?a.savedQuotes:[];if(i.length>0&&t%3===0){const y=(ut(e)+Math.abs(t))%i.length;return{text:i[y],author:a?.name?`Guardada por ${a.name}`:"De tu colección",isCustom:!0}}const d=_a.map(y=>{let f=0;return y.tones?.includes(n)&&(f+=3),y.ageGroups?.includes(o)&&(f+=2),y.interests?.some(A=>r.has(A))&&(f+=4),{q:y,score:f}}),u=Math.max(...d.map(y=>y.score),0),m=d.filter(y=>y.score>=Math.max(2,u-2)).map(y=>y.q),h=m.length>=4?m:_a,g=(ut(e)*5+Math.abs(t))%h.length;return h[g]}function ga(e=v(),t=0){const a=(ut(e)*13+Math.abs(t))%Za.length;return Za[a]}function fn(e={},t={}){const a=[],s=_(t),o=Number(t?.sleepGoal)||s.sleepRecommended||7.5,n=Number(e?.sleepHours),r=Number(e?.stress),i=Number(e?.mood);return Number.isFinite(n)&&n>0&&n<o-1.5&&a.push({icon:"moon",title:"Descanso corto",text:`Sueño: ${n} h · meta ${o} h. Ve con calma esta tarde.`}),Number.isFinite(r)&&r>=4&&a.push({icon:"wind",title:"Día cargado",text:"Prioriza una cosa hoy. Lo demás puede esperar."}),Number.isFinite(i)&&i===1&&a.push({icon:"heart",title:"Día cuesta arriba",text:"Descansar y cubrir lo básico es suficiente."}),a.slice(0,2)}function vn(e=[],t={}){const a=_(t),s=(L,T)=>{const U=Number(L);return Number.isFinite(U)&&U>0?U:T},o=s(t?.sleepGoal,a.sleepRecommended||7.5),n=s(t?.studyGoal,a.studyRecommended||2),r=s(t?.waterGoal,8),i=[...new Map(e.filter(L=>L?.date).map(L=>[L.date,L])).values()],d=i.length;if(!d)return{total:0,sleepGoal:o,studyGoal:n,waterGoal:r,sleepMet:0,studyMet:0,waterMet:0,sleepTracked:0,studyTracked:0,waterTracked:0,sleepPct:null,studyPct:null,waterPct:null,moodWhenSleepMet:null,moodWhenSleepMissed:null};const u=i.filter(L=>Number.isFinite(L.sleepHours)),m=i.filter(L=>Number.isFinite(L.studyHours)),h=i.filter(L=>Number.isFinite(L.counters?.water)),g=u.filter(L=>L.sleepHours>=o),y=u.filter(L=>L.sleepHours<o),f=m.filter(L=>L.studyHours>=n),A=h.filter(L=>L.counters.water>=r),F=(L,T)=>T?Math.round(L/T*100):null,Q=ot(g.map(L=>L.mood)),z=ot(y.map(L=>L.mood));return{total:d,sleepGoal:o,studyGoal:n,waterGoal:r,sleepMet:g.length,studyMet:f.length,waterMet:A.length,sleepTracked:u.length,studyTracked:m.length,waterTracked:h.length,sleepPct:F(g.length,u.length),studyPct:F(f.length,m.length),waterPct:F(A.length,h.length),moodWhenSleepMet:Number.isFinite(Q)?E(Q):null,moodWhenSleepMissed:Number.isFinite(z)?E(z):null}}function yn(e="",t=new Date().getHours()){const a=String(e||"").trim(),s=a?`, ${a}`:"";return t>=5&&t<13?`Buenos días${s}`:t>=13&&t<20?`Buenas tardes${s}`:`Buenas noches${s}`}const $n={pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',week:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 9h18M8 14h8"/>',month:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9"/>',history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-5 3-7 1 2 2 3 2 3 0-3-1-4 0-6Z"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',study:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',check:'<path d="M20 6 9 17l-5-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',download:'<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3"/>',upload:'<path d="M12 15V3m0 0-4 4m4-4 4 4M4 17v3h16v-3"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 5.1-6C9.5 14.5 12 13 13 12"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',bolt:'<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',storm:'<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/><path d="m13 11-3 5h4l-2 5"/>',drop:'<path d="M12 2.7 6.4 8.3a8 8 0 1 0 11.3 0Z"/>',run:'<circle cx="15" cy="4" r="2"/><path d="m10.5 9.5-3 3L5 11m5.5-1.5 3.5 2 3 2M9 14l-2 6m5-4 3 5"/>',book:'<path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',stamp:'<path d="M5 21h14M6 17h12v2H6zM9 17v-3a3 3 0 1 1 6 0v3"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',refresh:'<path d="M21 12a9 9 0 0 0-15.4-6.4L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15.4 6.4L21 16"/><path d="M21 21v-5h-5"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5-4.5-8.6-10-8.6Z"/>',spark:'<path d="m12 3 1.9 5.8L20 10.8l-6.1 1.9L12 18.5l-1.9-5.8L4 10.8l6.1-2Z"/>',quote:'<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/>',expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',wave:'<path d="M2 9.5c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/><path d="M2 15c2 0 2 1.8 4 1.8S8 15 10 15s2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/>',tide:'<path d="M3 16.5c1.7 0 1.7 1.5 3.4 1.5s1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5 1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5"/><circle cx="17" cy="6" r="3"/><path d="M4 11c1.7 0 1.7 1.5 3.4 1.5S9.1 11 10.8 11"/>',send:'<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z"/>',anchor:'<circle cx="12" cy="5" r="2.6"/><path d="M12 7.6V21"/><path d="M8.5 10h7"/><path d="M3 14a9 9 0 0 0 18 0"/><path d="M3 14h3M18 14h3"/>',bookmark:'<path d="M6.5 3h11a1 1 0 0 1 1 1v17l-6.5-4.6L5.5 21V4a1 1 0 0 1 1-1Z"/>',reply:'<path d="M9 14 4 9l5-5"/><path d="M4 9h9.5A6.5 6.5 0 0 1 20 15.5V20"/>',seal:'<circle cx="12" cy="12" r="8"/><path d="m12 7.6 1.5 2.9 3.2.4-2.3 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.3-2.3 3.2-.4Z"/>',eye:'<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',grid:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',listChecks:'<path d="M11 6h10M11 12h10M11 18h10"/><path d="m3 6 1.6 1.6L7.2 5M3 12l1.6 1.6 2.6-2.6M3 18l1.6 1.6 2.6-2.6"/>',sail:'<path d="M3 18.5h18l-2.6 3.2H5.6Z"/><path d="M12.5 15V3.5L20 15Z"/><path d="M10.5 15 6 8.5 3.8 15Z"/>',fog:'<path d="M4 9h16M3 13h18M5 17h14"/><path d="M7 5.5c1.6-1.6 3.4-1.6 5 0"/>',rain:'<path d="M17.5 14a4 4 0 0 0-.6-7.9A5.5 5.5 0 0 0 6.3 7.4 3.8 3.8 0 0 0 7 14Z"/><path d="M9 17.5 8 20M13 17.5 12 20M17 17.5 16 20"/>',hourglass:'<path d="M7 3h10M7 21h10"/><path d="M7 3c0 4 5 5.4 5 9s-5 5-5 9M17 3c0 4-5 5.4-5 9s5 5 5 9"/>',gauge:'<path d="M12 20a8 8 0 1 1 8-8"/><path d="M12 12 16 9"/><circle cx="12" cy="12" r="1.2"/>',paper:'<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/>',splash:'<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.6 6.6l2.8 2.8M14.6 14.6l2.8 2.8M17.4 6.6l-2.8 2.8M9.4 14.6l-2.8 2.8"/>',save:'<path d="M5 4h11l3 3v13H5Z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'},l=e=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${$n[e]||""}</svg>`,c=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Us(e={},t=0){const a=_(e),s=e.name?c(e.name):"Personalizar perfil",o=e.age?`${e.age} años`:a.group.label;return`<button type="button" class="ex-libris-card" data-action="open-setup-wizard" title="Editar perfil y preferencias">
    <span class="ex-libris-icon">${xe(e.theme||"paper",e)}</span>
    <div class="ex-libris-meta">
      <strong>${s}</strong>
      <small>${c(o)} · ${t} ${t===1?"día":"días"}</small>
    </div>
  </button>`}function ss(e,t,a,s,o,n,r){return`<div class="scale-field">
    <p class="field-title">${l(s)} ${o}</p>
    <p class="field-caption">${n}</p>
    <div class="level-scale" role="radiogroup" aria-label="${o}">
      ${[1,2,3,4,5].map(i=>`<label class="level-option">
        <input type="radio" name="${e}" value="${i}" ${a===i?"checked":""}>
        <span class="level-num">${i}</span>
        <span class="level-text">${t[i]}</span>
      </label>`).join("")}
    </div>
    <small id="${e}-hint">${a?t[a]+".":r}</small>
  </div>`}function wn(e=[],t=[]){const a=new Set(e);return`<div class="tag-picker">
    ${[...new Set([...t,...e])].map(o=>`<label class="tag-chip">
      <input type="checkbox" name="tags" value="${c(o)}" ${a.has(o)?"checked":""}>
      <span>${c(o)}</span>
    </label>`).join("")}
    <label class="tag-chip ghost">
      <span>+ Otra:</span>
      <input type="text" name="tagCustom" id="tagCustom" maxlength="24" placeholder="Escribe y pulsa Enter" aria-label="Añadir etiqueta personalizada">
    </label>
  </div>`}function Sn(e={},t=[],a={},s={}){const o=_(a),n=new Set(o.activeCounterKeys||["water"]),r=t.filter(u=>!u.builtin||n.has(u.key)||(Number(e?.[u.key])||0)>0),i=r.length?r:t,d=s.action?`${s.action}-`:"";return`<div class="counters-grid">${i.map(u=>{const m=Number(e?.[u.key])||0,h=ka(u,a),g=h?Math.min(100,Math.round(m/h*100)):0;return`<div class="counter-row" data-counter="${u.key}">
      <div>
        <p class="field-title">${l(u.icon)} ${u.label} ${h?`<small class="counter-goal-pill ${m>=h?"met":""}">Meta: ${m}/${h}</small>`:""}</p>
        <p class="field-caption" id="hint-${u.key}" data-counter-hint="${u.key}">${Ut(u.key,m,u)}</p>
        ${h?`<div class="counter-progress"><i style="width:${g}%"></i></div>`:""}
      </div>
      <div class="stepper">
        <button type="button" class="icon-button" data-action="${d}counter-minus" data-key="${u.key}" data-step="${u.step}" aria-label="Restar ${u.label}">${l("minus")}</button>
        <div class="stepper-value">
          <input type="number" name="counter_${u.key}" min="${u.min}" max="${u.max}" step="${u.step}" value="${m}" aria-label="${u.label}" data-counter-input="${u.key}">
          <span>${u.unit}</span>
        </div>
        <button type="button" class="icon-button" data-action="${d}counter-plus" data-key="${u.key}" data-step="${u.step}" aria-label="Sumar ${u.label}">${l("plus")}</button>
      </div>
    </div>`}).join("")}</div>`}function kn(e,t,{mini:a=!1,selected:s=v()}={}){const o=new Map(t.map(i=>[i.date,i])),n=v(),r=qo(e).map(i=>{const d=o.get(i.date),u=d?N[d.mood-1]:null,m=i.date>n,h=["calendar-day",!i.inMonth&&"outside",i.date===n&&"today",i.date===s&&"selected",d&&"recorded"].filter(Boolean).join(" "),g=`${P(i.date)}${u?`, ${u.label}`:", sin entrada"}`;return`<button type="button" class="${h}" data-action="open-day" data-date="${i.date}" ${m?"disabled":""} aria-label="${g}" style="${u?`--mood:${u.color}`:""}">
      <span>${i.day}</span>${u?'<i aria-hidden="true"></i>':""}
    </button>`}).join("");return`<div class="calendar ${a?"mini":""}">
    <div class="calendar-heading">
      <button type="button" class="icon-button ghost" data-action="month-prev" data-mini="${a?"1":"0"}" aria-label="Mes anterior">${l("left")}</button>
      <strong>${P(e,{month:"long",year:"numeric"})}</strong>
      <button type="button" class="icon-button ghost" data-action="month-next" data-mini="${a?"1":"0"}" aria-label="Mes siguiente">${l("right")}</button>
    </div>
    <div class="calendar-grid">
      ${fo.map(i=>`<span class="weekday">${i}</span>`).join("")}
      ${r}
    </div>
  </div>`}function xn(e,t,a,s={}){const o=Math.max(1,Math.floor(Number(a)||1)),n=new Map(e.map(M=>[M.date,M])),r=760,i=260,d=42,u=48,m=22,h=208,g=r-d-u,y=h-m,f=M=>d+(o===1?g/2:M*g/(o-1)),A=M=>m+(5-M)*y/4,F=M=>h-Math.max(0,Math.min(12,Number(M)||0))*y/12,Q=Array.from({length:o},(M,I)=>{const G=D(t,I),pe=n.get(G);return{date:G,entry:pe,index:I,x:f(I),y:pe&&Number.isFinite(pe.mood)?A(pe.mood):null}}),z=Q.filter(M=>M.entry&&M.y!==null),L=Math.max(3,Math.min(14,g/o*.56)),T=z.filter(M=>Number.isFinite(M.entry.sleepHours)).map(M=>{const I=F(M.entry.sleepHours),G=Math.max(2,h-I);return`<rect class="sleep-bar" x="${(M.x-L/2).toFixed(1)}" y="${I.toFixed(1)}" width="${L.toFixed(1)}" height="${G.toFixed(1)}" rx="2"><title>${P(M.date)}: ${E(M.entry.sleepHours)} h de sueño</title></rect>`}),U=[];let b=[];for(const M of Q){if(M.y===null){b.length&&U.push(b),b=[];continue}b.push(M)}b.length&&U.push(b);const $=U.filter(M=>M.length>1),C=$.map(M=>`<path class="chart-line-path" d="${M.map((I,G)=>`${G?"L":"M"}${I.x.toFixed(1)},${I.y.toFixed(1)}`).join(" ")}"/>`),j=$.map(M=>`<path class="chart-area-path" d="${M.map((G,pe)=>`${pe?"L":"M"}${G.x.toFixed(1)},${G.y.toFixed(1)}`).join(" ")} L${M.at(-1).x.toFixed(1)},${h} L${M[0].x.toFixed(1)},${h} Z"/>`),R=Number.isFinite(Number(s?.sleepGoal))?Number(s.sleepGoal):7.5,se=F(R),kt=o<=7?[...Array(o)].map((M,I)=>I):[0,Math.round((o-1)*.17),Math.round((o-1)*.34),Math.round((o-1)*.5),Math.round((o-1)*.67),Math.round((o-1)*.83),o-1],ra=[...new Set(kt)],et=M=>{const I=Q[M]?.date||t,G=Number(I.slice(8)),pe=P(I,{month:"short"}).replace(/[0-9.,]/g,"").trim();return o<=7?`${G} ${pe}`:G===1?`${G} ${pe}`:String(G)},go=Array.from({length:5},(M,I)=>{const G=m+I*y/4;return`<line class="chart-grid-row" x1="${d}" x2="${r-u}" y1="${G.toFixed(1)}" y2="${G.toFixed(1)}"/>`}).join(""),bo=ra.map(M=>{const I=o===1?"center":M===0?"first":M===o-1?"last":"middle",G=o===1?50:M/(o-1)*100;return`<span class="chart-x-tick ${I}" style="left:${G.toFixed(2)}%">${et(M)}</span>`}).join(""),Ua=`--axis-top:${(m/i*100).toFixed(2)}%;--axis-bottom:${((i-h)/i*100).toFixed(2)}%`;return`<div class="chart-wrap">
    <div class="chart-plot">
      <svg viewBox="0 0 ${r} ${i}" class="mood-chart" role="img" aria-label="Ánimo del 1 al 5 y horas de sueño en ${o} días; hay ${z.length} días con registro">
        <defs>
          <linearGradient id="moodAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--red)" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="var(--red)" stop-opacity="0.01"/>
          </linearGradient>
        </defs>
        ${go}
        ${T.join("")}
        ${j.join("")}
        <line class="chart-goal-line" x1="${d}" x2="${r-u}" y1="${se.toFixed(1)}" y2="${se.toFixed(1)}"/>
        ${C.join("")}
        ${z.map((M,I)=>`<circle class="chart-dot" style="--dot-i:${I}" cx="${M.x.toFixed(1)}" cy="${M.y.toFixed(1)}" r="5.2" fill="${N[M.entry.mood-1]?.color||"var(--red)"}" stroke="var(--paper-2)" stroke-width="2">
          <title>${P(M.date)} · ${N[M.entry.mood-1]?.label||"Ánimo"} · ${M.entry.mood}/5 · ${E(M.entry.sleepHours)} h de sueño</title>
        </circle>`).join("")}
      </svg>
      <div class="chart-y-axis mood-axis" style="${Ua}" aria-hidden="true">${[5,4,3,2,1].map(M=>`<span>${M}</span>`).join("")}</div>
      <div class="chart-y-axis sleep-axis" style="${Ua}" aria-hidden="true">${[12,9,6,3,0].map(M=>`<span>${M}h</span>`).join("")}</div>
      <div class="chart-x-axis" aria-hidden="true">${bo}</div>
    </div>
    ${z.length?`<div class="chart-legend-inline">
      <span><i class="legend-line"></i> Ánimo · escala 1–5</span>
      <span><i class="legend-bar"></i> Sueño · escala 0–12 h</span>
      <span><i class="legend-goal"></i> Meta de sueño: ${E(R)} h</span>
    </div>`:'<p class="chart-empty">Sin registros en este período.</p>'}
  </div>`}function Mn(e=[],t=v(),a=28){const s=new Map(e.map(r=>[r.date,r])),o=D(t,1-a),n=[];for(let r=0;r<a;r++){const i=D(o,r),d=s.get(i),u=d?N[d.mood-1]:null,m=`${P(i)}${u?`: ${u.label} · ${d.mood}/5 · ${E(d.sleepHours)} h de sueño`:": sin registro"}`;n.push(`<button type="button" class="heatmap-cell ${d?"filled":""}" data-action="open-day" data-date="${i}" style="${u?`--mood:${u.color}`:""}" title="${m}" aria-label="${m}">
      <span>${i.slice(8)}</span>
      ${u?`<small>${u.emoji}</small>`:""}
    </button>`)}return`<div class="heatmap-strip">${n.join("")}</div>`}function _s(e=[],t={}){const a=vn(e,t),s=_(t);return a.total?`<section class="card personal-goals-card">
    <div class="section-heading">
      <div>
        <h2>Tus metas</h2>
      </div>
      <button type="button" class="text-button" data-action="open-setup-wizard">${l("sliders")} Ajustar metas</button>
    </div>
    <div class="goals-meter-grid">
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${l("moon")} Sueño · meta ${E(a.sleepGoal)} h</span>
          <strong>${a.sleepTracked?`${a.sleepPct}%`:"—"}</strong>
        </div>
        <div class="meter-track" role="meter" aria-label="Días que alcanzan la meta de sueño" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${a.sleepPct??0}"><i style="width:${a.sleepPct||0}%;background:var(--green)"></i></div>
        <small>${a.sleepMet} de ${a.sleepTracked} días con registro</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${l("study")} ${c(s.focusLabel)} · meta ${E(a.studyGoal)} h</span>
          <strong>${a.studyTracked?`${a.studyPct}%`:"—"}</strong>
        </div>
        <div class="meter-track" role="meter" aria-label="Días que alcanzan la meta de dedicación" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${a.studyPct??0}"><i style="width:${a.studyPct||0}%;background:var(--red)"></i></div>
        <small>${a.studyMet} de ${a.studyTracked} días con registro</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${l("drop")} Agua · meta ${a.waterGoal} vasos</span>
          <strong>${a.waterTracked?`${a.waterPct}%`:"—"}</strong>
        </div>
        <div class="meter-track" role="meter" aria-label="Días que alcanzan la meta de agua" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${a.waterPct??0}"><i style="width:${a.waterPct||0}%;background:var(--ochre)"></i></div>
        <small>${a.waterMet} de ${a.waterTracked} días con registro</small>
      </div>
    </div>
    ${a.moodWhenSleepMet&&a.moodWhenSleepMissed?`
      <div class="sleep-mood-insight">
        ${l("spark")}
        <p>Ánimo medio · ${a.moodWhenSleepMet}/5 con tu meta · ${a.moodWhenSleepMissed}/5 sin alcanzarla.</p>
      </div>
    `:""}
  </section>`:`<section class="card personal-goals-card">
      <div class="section-heading">
        <h2>Tus metas personales</h2>
        <button type="button" class="text-button" data-action="open-setup-wizard">${l("sliders")} Ajustar</button>
      </div>
      <p class="habit-empty">Sin datos aún.</p>
    </section>`}function Qs(e,t=0,a={}){const s=bn(e,t,a),o=(a?.savedQuotes||[]).includes(s.text);return`<section class="card quote-card">
    <div class="quote-top">
      <span class="eyebrow">${l("quote")} ${s.isCustom?"Tu colección":"Frase del día"}</span>
      <div class="quote-actions">
        <button type="button" class="icon-button ghost ${o?"is-saved":""}" data-action="save-quote" data-quote="${c(s.text)}" title="${o?"Guardada en tus frases":"Guardar en mis frases"}" aria-label="Guardar frase">${l("heart")}</button>
        <button type="button" class="icon-button ghost" data-action="next-quote" title="Otra frase" aria-label="Otra frase">${l("refresh")}</button>
      </div>
    </div>
    <p class="quote-text">«${c(s.text)}»</p>
    <small class="quote-author">— ${c(s.author)}</small>
  </section>`}function ge(e,t,a="",s=""){return`<div class="ledger-cell">
    <span class="ledger-label">${e}</span>
    <div class="ledger-value">${t}${a?`<small>${a}</small>`:""}</div>
    ${s?`<span class="ledger-hint">${s}</span>`:""}
  </div>`}function xt(e,t,a="mood"){if(!t)return`<div class="rank-row"><span class="rank-label">${e}</span><strong>—</strong><small>Sin datos aún</small></div>`;const s=a==="mood"?`${N[t.mood-1].emoji} ${N[t.mood-1].label} · ${t.mood}/5`:`${E(t[a])} h`;return`<div class="rank-row">
    <span class="rank-label">${e}</span>
    <strong>${P(t.date,{weekday:"short",day:"numeric",month:"short"})}</strong>
    <small>${s}</small>
  </div>`}function Ft(e,t,a=""){return`<div class="empty-state">
    ${l("leaf")}
    <h3>${e}</h3>
    <p>${t}</p>
    ${a}
  </div>`}function Ha(e){return`<div class="meter-list">${e.map(t=>{const a=t.total?Math.round(t.count/t.total*100):0;return`<div class="meter-row">
      <span>${t.label}</span>
      <div class="meter-track"><i style="width:${a}%;background:${t.color||"var(--ink)"}"></i></div>
      <strong>${t.count}</strong>
    </div>`}).join("")}</div>`}function Ws(e,t={}){if(!e?.triggered||e.level!=="high")return"";const a=t?.trustedContactName?.trim(),s=t?.trustedContactPhone?.trim();return`<section class="crisis-banner high" role="region" aria-label="Apoyo emocional disponible">
    <div class="crisis-banner-head">
      <span class="crisis-badge">${l("heart")} No estás a solas</span>
      <button type="button" class="icon-button ghost crisis-dismiss" data-action="dismiss-crisis-banner" aria-label="Ocultar este aviso">${l("close")}</button>
    </div>
    <p class="crisis-reason">${c(e.reason)}</p>
    <div class="crisis-quick-actions">
      <a href="tel:024" class="button solid crisis-call-btn">${l("phone")} Llamar al 024 · gratis · 24 h</a>
      ${a&&s?`<a href="tel:${c(s.replace(/\s+/g,""))}" class="button outline">${l("user")} Llamar a ${c(a)}</a>`:""}
      <button type="button" class="button outline" data-action="open-crisis-modal" data-tab="breathe">${l("wind")} Respiración guiada</button>
    </div>
  </section>`}function qn(e={},t="help"){const a=_(e),s=e?.trustedContactName?.trim(),o=e?.trustedContactPhone?.trim();return`<div class="modal-card crisis-modal">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${l("heart")} Apoyo y calma</p>
        <h2>Respirar y pedir ayuda</h2>
      </div>
      <button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${l("close")}</button>
    </div>

    <div class="crisis-tabs" role="tablist">
      <button type="button" class="crisis-tab ${t==="help"?"active":""}" data-crisis-tab="help" role="tab">${l("phone")} Teléfonos · 24 h</button>
      <button type="button" class="crisis-tab ${t==="breathe"?"active":""}" data-crisis-tab="breathe" role="tab">${l("wind")} Respirar · 4-4-6</button>
      <button type="button" class="crisis-tab ${t==="ground"?"active":""}" data-crisis-tab="ground" role="tab">${l("compass")} Volver al presente</button>
    </div>

    <div class="crisis-tab-panel ${t==="help"?"active":""}" data-panel="help">
      <p class="crisis-intro">Apoyo gratuito y confidencial, disponible las 24 horas.</p>
      ${s&&o?`
        <div class="trusted-contact-card">
          <div>
            <span class="eyebrow">Tu persona de confianza</span>
            <h3>${c(s)}</h3>
            <p>${c(o)}</p>
          </div>
          <a href="tel:${c(o.replace(/\s+/g,""))}" class="button solid">${l("phone")} Llamar</a>
        </div>
      `:""}
      <div class="helpline-grid">
        ${Mo.map(n=>{const r=a.isMinor&&n.youth;return`
          <div class="helpline-card ${n.primary||r?"primary":""}">
            <div class="helpline-info">
              <h3>${c(n.name)}</h3>
              <p>${c(n.detail)}</p>
            </div>
            <a href="${c(n.tel)}" class="helpline-phone">${l("phone")} <span>${c(n.number)}</span></a>
          </div>
        `}).join("")}
      </div>
    </div>

    <div class="crisis-tab-panel ${t==="breathe"?"active":""}" data-panel="breathe">
      <div class="breathing-box">
        <div class="breathing-circle-wrap">
          <div class="breathing-circle" id="breathing-visual">
            <span id="breathing-phase">Preparado</span>
            <small id="breathing-timer">4 — 4 — 6</small>
          </div>
        </div>
        <p class="breathing-instructions" id="breathing-guide">Inhala 4 segundos por la nariz, mantén el aire 4 segundos y suelta despacio durante 6 segundos.</p>
        <button type="button" class="button solid" data-action="toggle-breathing" id="breathing-btn">${l("wind")} Empezar</button>
      </div>
    </div>

    <div class="crisis-tab-panel ${t==="ground"?"active":""}" data-panel="ground">
      <p class="crisis-intro">Cuando la cabeza va demasiado deprisa, nombrar lo que tienes alrededor ayuda a bajar el ritmo:</p>
      <div class="grounding-list">
        ${[{count:5,sense:"Cosas que puedas ver",prompt:"Fíjate en 5 objetos a tu alrededor."},{count:4,sense:"Cosas que puedas tocar",prompt:"Nota el tacto de 4 superficies cercanas."},{count:3,sense:"Sonidos que puedas oír",prompt:"Escucha 3 sonidos del entorno."},{count:2,sense:"Olores que percibas",prompt:"Identifica 2 aromas cercanos."},{count:1,sense:"Una respiración profunda",prompt:"Toma aire hondo y suéltalo despacio."}].map(n=>`
          <label class="grounding-step">
            <input type="checkbox">
            <span class="grounding-num"><b>${n.count}</b></span>
            <div>
              <strong>${c(n.sense)}</strong>
              <p>${c(n.prompt)}</p>
            </div>
          </label>
        `).join("")}
      </div>
    </div>

    <div class="modal-actions">
      <button type="button" class="button outline" data-modal="close">Cerrar</button>
    </div>
  </div>`}function Zs(e,t,a,s={},o={},n=""){const r=s?.showDailyWord!==!1,i=s?.showDailyTip!==!1;if(!r&&!i)return"";const d=hn(e,t),u=gn(e,a,s),m=fn(o,s),h=n&&n.toLowerCase()===d.word.toLowerCase();return`<div class="daily-inspiration-grid">
    ${r?`
      <article class="card inspiration-card word-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${l("book")} Palabra del día</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-word" title="Ver otra palabra" aria-label="Ver otra palabra">${l("refresh")}</button>
        </div>
        <div class="daily-word-main">
          <div>
            <h2 class="daily-word-title">${c(d.word)}</h2>
            <span class="daily-word-origin">${c(d.type)} · ${c(d.origin)}</span>
          </div>
          <button type="button" class="button ${h?"solid":"outline"} small-btn" data-action="use-daily-word" data-word="${c(d.word)}">
            ${l(h?"check":"pen")} ${h?"Elegida hoy":"Usar hoy"}
          </button>
        </div>
        <p class="daily-word-meaning">${c(d.meaning)}</p>
      </article>
    `:""}

    ${i?`
      <article class="card inspiration-card tip-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${l("spark")} Consejo · ${c(u.category)}</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-tip" title="Ver otro consejo" aria-label="Ver otro consejo">${l("refresh")}</button>
        </div>
        <h2 class="daily-tip-title">${c(u.title)}</h2>
        <p class="daily-tip-body">${c(u.tip)}</p>
        ${m.length?`
          <div class="contextual-advice-list">
            ${m.map(g=>`
              <div class="contextual-advice-item">
                ${l(g.icon)}
                <div><strong>${c(g.title)}:</strong> ${c(g.text)}</div>
              </div>
            `).join("")}
          </div>
        `:""}
      </article>
    `:""}
  </div>`}function En(e={},t=[],a=1,s=!1){const o=_(e),n=new Set(t.map(i=>i.name.toLowerCase())),r=new Set(e.interests||[]);return`<div class="modal-card setup-wizard-modal ${s?"is-mandatory":""}" data-current-step="${a}">
    <div class="setup-wizard-header">
      <div>
        <p class="eyebrow">${l("sliders")} Paso ${a} de 3</p>
        <h2>${a===1?"Tu perfil":a===2?"Tu ritmo":"Tu papel"}</h2>
      </div>
      ${s?"":`<button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${l("close")}</button>`}
    </div>

    <div class="wizard-steps-bar" aria-hidden="true">
      <span class="${a>=1?"done":""} ${a===1?"current":""}">1. Perfil</span>
      <span class="${a>=2?"done":""} ${a===2?"current":""}">2. Rutina</span>
      <span class="${a>=3?"done":""} ${a===3?"current":""}">3. Papel</span>
    </div>

    <form id="setup-wizard-form">
      <div class="wizard-step-body ${a===1?"active":""}" data-step="1" ${a===1?"":"hidden"}>
        <div class="setup-name-age-row">
          <div class="setup-field">
            <label for="setup-name">${l("user")} ¿Cómo te llamas?</label>
            <input id="setup-name" name="name" maxlength="50" placeholder="Tu nombre o apodo…" value="${c(e.name||"")}">
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
            ${lt.map(i=>`
              <label class="age-group-card ${o.group.id===i.id?"is-selected":""}" data-age-group-card="${i.id}">
                <input type="radio" name="ageGroup" value="${i.id}" ${o.group.id===i.id?"checked":""}>
                <span class="age-range-badge">${c(i.label)}</span>
                <strong>${c(i.title)}</strong>
                <small>${c(i.desc)}</small>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="setup-field">
          <label>Tus intereses</label>
          <div class="interests-grid">
            ${It.map(i=>`
              <label class="interest-chip">
                <input type="checkbox" name="interests" value="${i.id}" ${r.has(i.id)?"checked":""}>
                <span>${l(i.icon)} ${c(i.label)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${a===2?"active":""}" data-step="2" ${a===2?"":"hidden"}>
        <div class="age-adaptation-callout" id="wiz-adaptation-callout">
          ${l("compass")}
          <div>
            <strong>${c(o.group.title)} · ${c(o.group.label)}</strong>
            <p>Sueño ${E(o.sleepRecommended)} h · dedicación ${E(o.studyRecommended)} h.</p>
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
              ${ct.map(i=>`
                <label class="purpose-card compact">
                  <input type="radio" name="ritual" value="${i.id}" ${(e.ritual||"night")===i.id?"checked":""}>
                  <span class="purpose-icon">${l(i.icon)}</span>
                  <div><strong>${c(i.label)}</strong></div>
                </label>
              `).join("")}
            </div>
          </div>
          <div class="setup-field" style="margin-top:0">
            <label>Tono de las frases</label>
            <div class="ritual-stack">
              ${dt.map(i=>`
                <label class="purpose-card compact">
                  <input type="radio" name="tone" value="${i.id}" ${(e.tone||"warm")===i.id?"checked":""}>
                  <div><strong>${c(i.label)}</strong><small>${c(i.desc)}</small></div>
                </label>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="setup-field">
          <label>Hábitos sugeridos</label>
          <div class="tag-picker" id="wiz-suggested-habits">
            ${o.suggestedHabits.map(i=>{const d=n.has(i.toLowerCase());return`<label class="tag-chip">
                <input type="checkbox" name="suggestedHabits" value="${c(i)}" ${d?"checked":""}>
                <span>${c(i)}</span>
              </label>`}).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${a===3?"active":""}" data-step="3" ${a===3?"":"hidden"}>
        <div class="setup-field">
          <label>${l("palette")} Elige tu papel e icono</label>
          <div class="theme-picker-grid">
            ${ee.map(i=>`
              <label class="theme-card">
                <input type="radio" name="theme" value="${i.id}" ${(e.theme||"paper")===i.id?"checked":""}>
                <div class="theme-card-top">
                  <span class="theme-favicon-preview">${xe(i.id,e)}</span>
                  <div class="theme-swatches">
                    ${i.colors.map(d=>`<i style="background:${d}"></i>`).join("")}
                  </div>
                </div>
                <strong>${c(i.name)}</strong>
                <small>${c(i.desc)}</small>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="setup-field">
          <label for="setup-motto">Frase de portada</label>
          <input id="setup-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${c(e.motto||"Un día a la vez.")}">
        </div>

        <div class="setup-toggles">
          <label class="toggle-row">
            <input type="checkbox" name="showDailyWord" ${e.showDailyWord!==!1?"checked":""}>
            <span><strong>Palabra del día</strong></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="showDailyTip" ${e.showDailyTip!==!1?"checked":""}>
            <span><strong>Consejo del día</strong></span>
          </label>
        </div>
      </div>

      <div class="modal-actions wizard-footer">
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${l("left")} Anterior</button>`:s?"":'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${l("right")}</button>`:`<button type="submit" class="button solid">${l("check")} Guardar</button>`}
      </div>
    </form>
  </div>`}const St=e=>Ot.find(t=>t.id===e?.glass)||Ot[0];function We(e={},t={}){const a=St(e),s=t.class?` ${t.class}`:"",o=t.paper===!1?"":`<path class="bottle-paper" d="M10.6 13.4h6.2M10.6 15.6h4.4" stroke="${a.hex}" stroke-width="1.1" stroke-linecap="round" opacity=".8"/>`;return`<svg class="bottle-glyph${s}" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <g transform="rotate(-24 14 14)">
      <path d="M11 4.2h6v3.1c0 1 .3 1.6 1 2.3l1.5 1.6c.9 1 1.4 2 1.4 3.3v7.2c0 1.4-1.1 2.5-2.5 2.5h-8.8c-1.4 0-2.5-1.1-2.5-2.5v-7.2c0-1.3.5-2.3 1.4-3.3l1.5-1.6c.7-.7 1-1.3 1-2.3Z" fill="color-mix(in srgb,${a.hex} 22%,transparent)" stroke="${a.hex}" stroke-width="1.2"/>
      <path d="M11.6 6.6h4.8" stroke="${a.hex}" stroke-width="1" opacity=".6"/>
      <rect class="bottle-cork" x="12.2" y="2.4" width="3.6" height="2.4" rx="1" fill="${a.hex}" opacity=".85"/>
      ${o}
      <path class="bottle-shine" d="M9.6 15.4v6.4" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".4"/>
    </g>
  </svg>`}function An(e=2400,t=8,a=110,s=240){let o=`M0 ${a}`;for(let n=0;n<e;n+=s)o+=` q ${s/4} ${-t} ${s/2} 0 q ${s/4} ${t} ${s/2} 0`;return`${o} L${e} 240 L0 240 Z`}function Vs(e=0,t=0){const a=(s,o,n,r,i)=>{const d=e%7*9,u=(i*(1-Math.min(.55,t*.45))).toFixed(1);return`<path class="${r}" style="--wave-dur:${u}s;--wave-delay:-${(d/100*u).toFixed(2)}s" d="${An(2400,s,o,n)}"/>`};return`<svg class="sea-wave-svg" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden="true">
    ${a(7,126,300,"wave wave-4",28)}
    ${a(9,142,240,"wave wave-3",21)}
    ${a(11,160,190,"wave wave-2",16)}
    ${a(13,182,150,"wave wave-1",11)}
  </svg>`}function Cn(){return`<svg class="thoughts-island-scenery" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <ellipse class="scene-island-shadow" cx="720" cy="548" rx="610" ry="42"/>
    <path class="scene-island-foliage scene-island-foliage-back" d="M0 496c40-36 83-48 125-37 11-53 53-83 101-74 12-55 60-78 107-51 21-66 84-84 132-43 31-70 102-82 149-32 45-70 114-76 155-21 46-65 118-68 158-16 44-60 110-51 141-5 45-47 107-37 137 4 47-30 102-23 135 19 40-5 77 7 110 36v324H0Z"/>
    <path class="scene-island-foliage scene-island-foliage-front" d="M28 503c51-57 111-75 169-54 19-59 72-84 125-53 26-65 91-82 142-37 41-68 108-74 151-22 47-61 116-61 158-8 51-50 117-40 148 15 50-40 110-20 130 31 58-25 111-2 139 39 54-4 108 17 150 63v256H28Z"/>
    <path class="scene-island-beach" d="M0 440c88-34 160-43 235-23 69 18 140 15 213-1 85-19 159-14 240 6 87 21 172 18 251-1 91-21 178-11 261 12 81 22 160 27 240 15v172H0Z"/>
    <path class="scene-island-beach-highlight scene-island-shoreline" d="M0 441c88-34 160-43 235-23 69 18 140 15 213-1 85-19 159-14 240 6 87 21 172 18 251-1 91-21 178-11 261 12 81 22 160 27 240 15"/>

    <g class="scene-palm scene-palm-left" transform="translate(535 496)">
      <path class="scene-palm-trunk" d="M0 16c-27-44-34-109-25-174 5-37 17-74 34-112"/>
      <g transform="translate(9 -270)"><g class="scene-palm-crown">
        <path class="scene-palm-leaf leaf-a" d="M0 0c-59-53-133-63-192-27 57-6 105 7 146 28 23 12 40 13 46-1Z"/>
        <path class="scene-palm-leaf leaf-b" d="M0 0c-31-72-91-107-159-94 49 17 87 43 117 74 18 18 33 24 42 20Z"/>
        <path class="scene-palm-leaf leaf-c" d="M0 0c-1-77 35-136 101-159-28 45-41 91-47 133-4 25-15 42-31 47Z"/>
        <path class="scene-palm-leaf leaf-d" d="M0 0c42-67 108-98 177-79-56 17-96 47-129 79-19 19-36 26-48 18Z"/>
        <path class="scene-palm-leaf leaf-e" d="M0 0c65-36 138-30 187 13-59-11-108-5-153 10-25 8-42 5-47-7Z"/>
        <path class="scene-palm-leaf leaf-f" d="M0 0c8-51 36-91 82-116-18 39-26 77-28 111-1 20-12 34-32 35Z"/>
      </g></g>
    </g>
    <g class="scene-palm scene-palm-right" transform="translate(900 500)">
      <path class="scene-palm-trunk" d="M0 14c-25-48-31-116-17-181 8-40 24-77 46-111"/>
      <g transform="translate(29 -287)"><g class="scene-palm-crown">
        <path class="scene-palm-leaf leaf-a" d="M0 0c-47-51-109-68-163-40 48-1 90 13 126 35 19 12 33 14 37 5Z"/>
        <path class="scene-palm-leaf leaf-b" d="M0 0c-21-65-70-103-130-100 43 17 75 42 100 69 15 16 27 22 35 19Z"/>
        <path class="scene-palm-leaf leaf-c" d="M0 0c7-69 44-118 102-132-28 38-43 78-51 115-5 22-16 35-31 39Z"/>
        <path class="scene-palm-leaf leaf-d" d="M0 0c42-56 101-77 158-57-48 10-84 33-114 57-18 14-33 18-44 10Z"/>
        <path class="scene-palm-leaf leaf-e" d="M0 0c56-26 117-17 156 21-48-13-88-12-125-3-20 5-33 1-31-18Z"/>
      </g></g>
    </g>

    <g class="scene-island-grass" aria-hidden="true">
      <path d="M188 479q-24-43-23-75 26 31 31 71 10-43 37-66-14 46-34 77Z"/>
      <path d="M1052 481q-18-40-12-70 23 30 22 66 15-38 42-55-19 42-43 67Z"/>
      <path d="M1137 483q-12-31-7-53 17 24 17 50 12-30 33-43-14 34-35 53Z"/>
    </g>

    <g class="scene-house" transform="translate(650 399)">
      <ellipse class="scene-house-shadow" cx="73" cy="142" rx="100" ry="13"/>
      <path class="scene-house-roof-shadow" d="m-17 50 90-75 91 75-11 13-80-65-79 65Z"/>
      <path class="scene-house-wall" d="M4 48h138v93H4z"/>
      <path class="scene-house-roof" d="m-8 47 81-67 82 67-12 11-70-56-69 56Z"/>
      <path class="scene-house-door" d="M59 91h31v50H59z"/>
      <g class="scene-house-window"><path d="M18 65h24v24H18zM109 65h24v24h-24z"/><path d="M30 65v24m-12-12h24m79-12v24m-12-12h24"/></g>
    </g>

    <path class="scene-shore-foam" d="M16 494c102-14 157 22 258 15 97-7 141-30 235-17 92 12 134 35 227 26 97-10 143-32 234-18 89 14 131 34 222 27 82-7 152-23 232-12"/>
    <g class="scene-birds" aria-hidden="true">
      <path d="M1045 194q13-14 26 0 13-14 26 0"/><path d="M1110 224q10-11 20 0 10-11 20 0"/>
    </g>
  </svg>`}function Ln(e=[],t=v(),a=new Date){const s=_t(e,t),o=s.drifting,n=s.returned,r=Bs(t),i=Ps(a),d=o.length?`${o.length} ${o.length===1?"botella":"botellas"} en el agua`:n.length?`${n.length} ${n.length===1?"botella de vuelta":"botellas de vuelta"}`:"Mar en calma",u=o.length?`${o.length} ${o.length===1?"botella":"botellas"} en el mar`:n.length?`${n.length} ${n.length===1?"botella en la orilla":"botellas en la orilla"}`:"La orilla está tranquila",m=o.slice(0,7).map((g,y)=>{const f=Nt(`${g.id}|${g.castAt}`);return`<li class="vault-float" style="--x:${17+f%68}%;--lift:${28+(f>>>4)%12}%;--float-delay:${(y*.24).toFixed(2)}s;--tint:${St(g).hex}">${We(g)}</li>`}).join(""),h=n.slice(0,5).map((g,y)=>`
    <button type="button" class="vault-arrival ${g.seen?"":"is-new"}" style="--arrival-x:${28+y*11}%" data-action="open-bottle" data-id="${g.id}" aria-label="Abrir pensamiento de vuelta">
      ${We(g,{class:"is-landed"})}<span class="sr-only">Abrir</span>
    </button>`).join("");return`<section id="thoughts-top" class="sea-panel thought-vault thoughts-ocean-stage ${n.length?"has-arrivals":""}"
    data-dayphase="${i.phase}"
    style="--sun-x:${i.x}%;--sun-y:${i.y}%;--moon-x:${i.moonX}%;--moon-y:${i.moonY}%;--water-level:${Math.round(49+r.level*4)}%"
    aria-label="Mar de Pensamientos">
    <span class="thoughts-sky-glow" aria-hidden="true"></span>
    <span class="thoughts-cloud thoughts-cloud-left" aria-hidden="true"></span>
    <span class="thoughts-cloud thoughts-cloud-right" aria-hidden="true"></span>
    <span class="thoughts-sun" aria-hidden="true"></span>
    <span class="thoughts-moon" aria-hidden="true"></span>
    <header class="sea-sky thoughts-hero-copy">
      <p class="thoughts-kicker">${l("wave")} Un lugar para soltar</p>
      <h1>Pensamientos</h1>
      <p class="thoughts-lead">Escribe. Suelta. Sigue.</p>
      <p class="thoughts-state-pill">${c(d)}</p>
    </header>
    <div class="sea-water vault-water" aria-hidden="true">
      ${Vs(Nt(t),r.rough)}
    </div>
    ${Cn()}
    ${m?`<ul class="sea-fleet vault-fleet" aria-label="Botellas en el mar">${m}</ul>`:""}
    ${h?`<div class="vault-arrivals" aria-label="De vuelta">${h}</div>`:""}
    <div class="thoughts-stage-actions">
      <span class="thoughts-stage-note">${c(u)}</span>
      <button type="button" class="thoughts-scroll-button" data-action="thoughts-island">Bajar a la isla ${l("chevronDown")}</button>
    </div>
  </section>`}function Dn(e={},t=v(),a={}){const s=String(a.text||"");return`<form id="bottle-form" class="card bottle-composer">
    <label class="sr-only" for="bottle-text">Pensamiento</label>
    <textarea id="bottle-text" name="text" class="bottle-text" maxlength="1200" rows="3"
      placeholder="Escribe aquí…">${c(s)}</textarea>
    <div class="composer-bar">
      <div class="composer-moods" role="radiogroup" aria-label="Ánimo">
        ${N.map(o=>`<label class="mini-mood" style="--mood-color:${o.color}" title="${o.label}">
          <input type="radio" name="mood" value="${o.value}" ${a.mood===o.value?"checked":""}>
          <span>${o.emoji}</span>
        </label>`).join("")}
      </div>
      <button type="submit" class="button solid cast-btn"${s.trim()?"":" disabled"}>${l("send")} Soltar</button>
    </div>
  </form>`}function la(e,t=v(),a=0){const s=Qe(e,t),o=St(e),n=`<button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${e.id}" aria-label="Eliminar">${l("trash")}</button>`;if(s!=="returned"){const r=s==="lost"?"Perdida":"En camino";return`<article class="card bottle-card is-${s} is-locked" style="--tint:${o.hex};--i:${Math.min(9,a)}" data-bottle-id="${e.id}" aria-label="${r}">
      <header class="bottle-card-head">
        <span class="bottle-card-mark">${We(e,{paper:!1})}</span>
        <div class="bottle-card-who"><h3>${r}</h3></div>
      </header>
      <footer class="bottle-card-foot">
        ${s==="lost"?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${e.id}">Soltar otra vez</button>`:""}
        ${n}
      </footer>
    </article>`}return`<article class="card bottle-card is-returned" style="--tint:${o.hex};--i:${Math.min(9,a)}" data-bottle-id="${e.id}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${We(e)}</span>
      <div class="bottle-card-who"><p class="field-caption">De vuelta</p><h3>Pensamiento</h3></div>
      ${e.kept?`<span class="kept-mark" title="Guardado">${l("bookmark")}</span>`:""}
    </header>
    <p class="bottle-card-text ${Wo(e.text)<=26?"is-short":""}">${c(e.text)}</p>
    ${e.reply?`<p class="bottle-card-reply"><span>Respuesta</span> ${c(e.reply)}</p>`:""}
    <footer class="bottle-card-foot">
      <button type="button" class="button outline small-btn" data-action="open-bottle" data-id="${e.id}">Abrir</button>
      ${n}
    </footer>
  </article>`}function Tn(e,t=v(),a={}){if(!zs(e,t))return"";const s=St(e),o=e.mood?N[e.mood-1]:null;return`<div class="modal-card bottle-modal ${e.seen===!1?"is-fresh":""}" style="--tint:${s.hex}" data-modal-bottle="${e.id}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${l("close")}</button>
    <span class="bottle-wax" aria-hidden="true">${We(e,{paper:!1})}<i class="wax-crack"></i></span>
    <p class="tale">De vuelta</p>
    <div class="bottle-note" data-fate="returned">
      <blockquote class="bottle-modal-text">${c(e.text)}</blockquote>
      ${o?`<p class="bottle-modal-mood">${o.emoji} · ${o.label.toLowerCase()}</p>`:""}
    </div>
    ${e.reply?`<div class="bottle-reply-box"><span>Respuesta</span><p>${c(e.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">Responder</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" data-draft="respuesta:${e.id}:text" placeholder="Tu respuesta…">${c(e.replyDraft||"")}</textarea>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${e.reply?'<button class="button outline" data-modal="reply-clear">Quitar respuesta</button>':'<button class="button outline" data-modal="reply">Responder</button>'}
      <button class="button outline" data-modal="keep">${e.kept?"Quitar de guardados":"Guardar"}</button>
      <button class="button solid" data-modal="to-entry">Guardar hoy</button>
    </div>
  </div>`}function jn(e={}){return`<div class="splash-layer" style="--tint:${St(e).hex}">
    <span class="splash-arc">${We(e)}</span>
    <span class="splash-ring"></span>
    <span class="splash-ring is-2"></span>
    <span class="splash-drop"></span>
    <span class="splash-drop is-2"></span>
    <span class="splash-drop is-3"></span>
  </div>`}const Bt="diario.drafts.v1",Hn=6e3,os=40,fe={entry:e=>`entrada:${e}`,bottle:()=>"botella",reply:e=>`respuesta:${e}`,tomorrow:()=>"manana",setup:()=>"perfil"};function pt(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function ca(e,t=Hn){const a=String(e??"");return a.length>t?a.slice(0,t):a}function Oa(){let e=null;try{e=localStorage.getItem(Bt)}catch{return{}}if(!e)return{};try{const t=JSON.parse(e);return pt(t)?t:{}}catch{return{}}}function Ys(e){const t=Object.keys(e);if(!t.length){try{localStorage.removeItem(Bt)}catch{}return!0}let a=e;t.length>os&&(a=Object.fromEntries(t.sort((s,o)=>String(e[o]?.savedAt||"").localeCompare(String(e[s]?.savedAt||""))).slice(0,os).map(s=>[s,e[s]])));try{return localStorage.setItem(Bt,JSON.stringify(a)),!0}catch{return!1}}function ea(e,t){if(!e)return null;const a={};let s=0;for(const[r,i]of Object.entries(pt(t)?t:{}))if(i!=null){if(typeof i=="string"){const d=ca(i);if(!d.trim())continue;a[r]=d,s++}else if(typeof i=="number"||typeof i=="boolean")a[r]=i,s++;else if(Array.isArray(i)){const d=i.map(u=>typeof u=="string"?ca(u,600):u).filter(u=>typeof u!="string"||u.trim());d.length&&(a[r]=d,s++)}else if(pt(i)){const d={};for(const[u,m]of Object.entries(i))typeof m=="number"||typeof m=="boolean"?d[u]=m:typeof m=="string"&&m.trim()&&(d[u]=ca(m,600));Object.keys(d).length&&(a[r]=d)}}if(!s)return Ze(e),null;const o=Oa(),n=new Date().toISOString();return o[e]={data:a,savedAt:n},{savedAt:n,ok:Ys(o)}}function Ks(e){if(!e)return null;const t=Oa()[e];return pt(t)?t:null}function Na(e){const t=Ks(e);return t&&pt(t.data)?t.data:null}function Ze(e){if(!e)return!1;const t=Oa();return e in t?(delete t[e],Ys(t),!0):!1}function On(e,t){const a=Ks(e);return a?.savedAt?t?String(a.savedAt)>String(t):!0:!1}function Nn(){try{localStorage.removeItem(Bt)}catch{}return!0}const Js=["L","M","X","J","V","S","D"],ns=e=>Js[(He(e).getDay()+6)%7];function Xs(e,t,a=""){const o=2*Math.PI*26,n=(Math.min(100,Math.max(0,e))/100*o).toFixed(2);return`<div class="ring-widget ${e>=100?"is-full":""}">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle class="ring-track" cx="32" cy="32" r="26"/>
      <circle class="ring-fill" cx="32" cy="32" r="26" stroke-dasharray="${n} ${o.toFixed(2)}"/>
    </svg>
    <span class="ring-value">${t}</span>
    ${a?`<span class="ring-sub">${c(a)}</span>`:""}
  </div>`}function Pn(e=[],t=null,a=[],s=v(),o=v()){return e.length?`<div class="habit-board">${e.map((n,r)=>{const i=!!t?.habits?.[n.id],d=Gt(a,n.id,s>o?s:o),u=Hs(a,n.id,7,s);return`<button type="button" class="habit-toggle ${i?"is-done":""}" style="--habit-i:${r}"
      data-action="toggle-habit" data-habit="${n.id}" data-date="${s}" aria-pressed="${i}">
      <span class="habit-tick" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.8 11.8 12.8 4.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span class="habit-copy">
        <strong>${c(n.name)}</strong>
        <small>${i?"hecho hoy":s===o?"toca para marcarlo":"aún por hacer"}</small>
      </span>
      <span class="habit-dots" aria-hidden="true">
        ${Array.from({length:7},(m,h)=>{const g=D(s,h-6);return`<i class="${!!a.find(f=>f.date===g)?.habits?.[n.id]?"on":""} ${g>o?"future":""}"></i>`}).join("")}
      </span>
      <span class="habit-streak ${d?"is-hot":""}" title="Racha actual">${d?`${l("flame")} ${d}`:`${u.done}/7`}</span>
    </button>`}).join("")}</div>`:""}function Fn(e=[],t=[],{days:a=28,end:s=v(),today:o=v(),title:n="Tus últimas 4 semanas"}={}){if(!t.length)return"";const{dates:r,rows:i}=Do(e,t,a,s,o),d=P(r[0],{day:"numeric",month:"short"}).replace(/\./g,"");return`<section class="card momentum-card">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${l("grid")} Constancia</p>
        <h2>${c(n)}</h2>
      </div>
      <span class="field-caption">${c(d)} → ${c(P(r[r.length-1],{day:"numeric",month:"short"}))}</span>
    </div>
    <p class="momentum-hint">Marca o quita un hábito.</p>
    <div class="momentum-scroll">
      <div class="momentum-grid" style="--cols:${a}">
        <span class="momentum-corner"></span>
        ${r.map(u=>`<span class="momentum-day ${u===o?"is-today":""}">${u.slice(8,10)}</span>`).join("")}
        ${i.map(u=>`
          <span class="momentum-name" title="${c(u.habit.name)}">${c(u.habit.name)}</span>
          ${u.cells.map(m=>`<button type="button" class="momentum-cell ${m.done?"is-done":""} ${m.future?"is-future":""} ${m.recorded?"":"is-blank"}"
            ${m.future?"disabled":""} data-action="toggle-habit" data-habit="${u.habit.id}" data-date="${m.date}" aria-pressed="${m.done}"
            aria-label="${c(u.habit.name)} · ${P(m.date)} · ${m.done?"cumplido":"sin cumplir"}">
            <i></i>
          </button>`).join("")}
        `).join("")}
      </div>
      <div class="momentum-weekdays" style="--cols:${a}">
        <span class="momentum-corner"></span>
        ${r.map(u=>`<span class="${ns(u)==="L"?"is-mon":""}">${ns(u)}</span>`).join("")}
      </div>
    </div>
    <div class="momentum-legend">
      <span><i class="lg done"></i> cumplido</span>
      <span><i class="lg"></i> sin registrar</span>
      <span><i class="lg blank"></i> día sin entrada</span>
      <span class="momentum-weekday-note">${Js.join(" ")} · cada lunes resaltado</span>
    </div>
  </section>`}function Bn(e=[],t=[],a=v()){return e.length?`<section class="card habit-stats-card">
    <div class="section-heading"><div><p class="eyebrow">${l("chart")}constancia por hábito</p><h2>Cada uno a su ritmo</h2></div><span class="field-caption">últimos 28 días</span></div>
    <ul class="habit-stats-list">
      ${e.map(s=>{const o=Hs(t,s.id,28,a),n=Gt(t,s.id,a),r=js(t,s.id);return`<li class="habit-stat-row">
          <div class="habit-stat-name">
            <strong>${c(s.name)}</strong>
            <small>${Ka(t,s.id)} ${Ka(t,s.id)===1?"día marcado":"días marcados"} en total</small>
          </div>
          <div class="habit-stat-meter"><i style="width:${o.pct}%"></i><span>${o.pct}%</span></div>
          <div class="habit-stat-figures">
            <span title="Racha actual">${l("flame")} <b>${n}</b> d</span>
            <span title="Mejor racha">${l("seal")} <b>${r}</b> d</span>
          </div>
          <div class="habit-stat-actions">
            <button type="button" class="icon-button ghost" data-action="edit-habit" data-habit="${s.id}" aria-label="Renombrar ${c(s.name)}">${l("pen")}</button>
            <button type="button" class="icon-button ghost delete-button" data-action="delete-habit" data-habit="${s.id}" data-name="${c(s.name)}" aria-label="Eliminar ${c(s.name)}">${l("trash")}</button>
          </div>
        </li>`}).join("")}
    </ul>
  </section>`:""}function zn(e={},t=[]){const a=new Set(t.map(o=>o.name.toLowerCase())),s=(e.suggestedHabits||[]).filter(o=>!a.has(o.toLowerCase())).slice(0,6);return`<section class="card habit-composer">
    <div class="section-heading"><div><p class="eyebrow">${l("plus")}Nueva rutina</p><h2>Añade un hábito</h2></div><span class="field-caption">${t.length}/30</span></div>
    <div class="habit-add">
      <input id="new-habit" maxlength="40" placeholder="Nombre del hábito" aria-label="Nuevo hábito">
      <button type="button" class="button solid small-btn" data-action="add-habit">${l("plus")} Añadir</button>
    </div>
    ${s.length?`
      <p class="field-caption" style="margin-top:16px">Sugerencias</p>
      <div class="tag-picker">
        ${s.map(o=>`<button type="button" class="tag-chip" data-action="add-suggested-habit" data-name="${c(o)}"><span>+ ${c(o)}</span></button>`).join("")}
      </div>`:""}
    ${t.length?"":'<p class="habit-empty">Sin hábitos.</p>'}
  </section>`}function Rn(e={},t={},a=[],s=null){return`<section class="card counters-board">
    <div class="section-heading">
      <div><p class="eyebrow">${l("drop")} Contadores</p><h2>Lo de hoy, en cifras</h2></div>

    </div>
    ${Sn(e?.counters||{},s||ue(t),t,{action:"routine"})}
    ${a.length?`<p class="sleep-mood-insight">${l("spark")} ${c(a[0])}</p>`:""}
  </section>`}function In(e={},t=v()){const a=e?.goals||[];return`<section class="card tomorrow-board">
    <div class="section-heading">
      <div><p class="eyebrow">${l("sail")} Para mañana</p><h2>Tareas de mañana</h2></div>
      <button type="button" class="text-button" data-action="add-goal-routine">${l("plus")} Añadir tarea</button>
    </div>
    <label class="sr-only" for="routine-tomorrow">Intención para mañana</label>
    <textarea id="routine-tomorrow" class="tomorrow-intent" name="tomorrow" maxlength="600" rows="2"
      placeholder="Mañana quiero…">${c(e?.tomorrow||"")}</textarea>
    <div class="task-list" id="routine-goals">
      ${a.length?a.map((s,o)=>`<div class="task-row">
        <span class="task-index">${String(o+1).padStart(2,"0")}</span>
        <input class="task-input" data-index="${o}" value="${c(s)}" maxlength="200" aria-label="Tarea ${o+1}">
        <button type="button" class="icon-button ghost delete-button" data-action="remove-goal-routine" data-index="${o}" aria-label="Quitar tarea">${l("close")}</button>
      </div>`).join(""):'<p class="habit-empty">Sin tareas para mañana.</p>'}
    </div>
  </section>`}function Gn(e=[],t=null,a=[],s=v()){const o=e.filter(d=>t?.habits?.[d.id]).length,n=e.length?Math.round(o/e.length*100):0,r=e.length?Math.max(0,...e.map(d=>Gt(a,d.id,s))):0,i=P(me(s),{day:"numeric",month:"short"});return`<section class="card routine-teaser">
    <div class="section-heading">
      <div><p class="eyebrow">${l("listChecks")} Rutina de hoy</p><h2>${o}/${e.length||0} ${e.length===1?"hábito":"hábitos"}</h2></div>
      ${Xs(n,`${n}%`)}
    </div>
    <p class="routine-teaser-note">${e.length?`Semana del ${c(i)}.`:"Sin hábitos."}</p>
    <button type="button" class="text-button full-link" data-view="routine">Ir a Rutina ${l("arrow")}</button>
    ${r?`<span class="routine-teaser-flame">${l("flame")} racha de ${r} días</span>`:""}
  </section>`}const O=document.querySelector("#app"),mt=Co([...document.querySelectorAll("script[src]")].map(e=>e.src),window.location.origin);let q=[],x=[],B=[],p=Xt(),Ve="",H="diary",S=v(),J=v(),Mt=v(),V="shore",le="hoy",Ye={text:"",mood:null,sea:"breeze"},Fe=7,Y=!1,W=!1,At="",Ct="",Lt="",Dt="grid",ve="list",te="pulse",de="personal",ze=null,Ne=null,Pa=0,Fa=0,Tt=0,Ba=0,Re=!1,nt=!1,ta=!1,jt=null,rs=0,is="",ht="idle",ls=!1,Z=!0,re=!0,qt=null,oe=null,we=null,ba=!1,rt=!1,fa=null;function Ge(){Z=!!!fa?.matches&&!p.reduceMotion,document.documentElement.dataset.motion=Z?"full":"calm"}try{fa=window.matchMedia("(prefers-reduced-motion: reduce)"),Ge(),fa.addEventListener?.("change",Ge)}catch{Ge()}function Me(e,t=p){const a=ee.find(s=>s.id===e)||ee[0];document.documentElement.dataset.theme=a.id;try{const s=un(a.id,t);let o=document.querySelector('link[rel="icon"]');o||(o=document.createElement("link"),o.rel="icon",document.head.appendChild(o)),o.type="image/svg+xml",o.href=s;const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",a.colors[0]),document.title=t?.name?`Cuaderno de ${t.name}`:"Diario"}catch{}}function aa(){q=Yt(),x=wt(),B=ke(),p=Xt(),W=!!p.sidebarCollapsed,Ge(),Me(p.theme,p)}try{aa()}catch(e){Ve="No se han podido leer los datos guardados. Revisa el almacenamiento del navegador o recupera una copia. "+e.message}const eo=[{label:"Cuaderno",items:[["diary","pen","Hoy"],["archive","book","Archivo"]]},{label:"Bienestar",items:[["routine","listChecks","Rutina"],["stats","chart","Progreso"]]},{label:"Tu espacio",items:[["thoughts","spark","Pensamientos"],["setup","sliders","Ajustes"]]}],Un=["diary","routine","thoughts","archive","stats"];function to(){return eo.flatMap(e=>e.items)}const it=e=>to().find(t=>t[0]===e)?.[2]||"Hoy";function va(){return{view:H,thoughtsTab:V,routineTab:le,archiveTab:ve,statsTab:te,profileTab:de}}function Ue(e){return Ma({view:e},mt)}function ne(e=!1){const t=Ma(va(),mt);window.location.pathname!==t&&window.history[e?"replaceState":"pushState"]({view:H,thoughtsTab:V,routineTab:le,archiveTab:ve,statsTab:te,profileTab:de},"",t)}function ao(){const e=Ao(window.location.pathname,mt);H=e.view,V=e.thoughtsTab||"shore",le=e.routineTab||"hoy",ve=e.archiveTab||"list",te=e.statsTab||"pulse",de=e.profileTab||"personal";const t=Ma(va(),mt);(e.path!==Cs(va())||window.location.pathname!==t)&&window.history.replaceState({view:H,thoughtsTab:V,routineTab:le,archiveTab:ve,statsTab:te,profileTab:de},"",t)}function _n(e,{transition:t=!0,replace:a=!1}={}){Ga(),H=e,Y=!1,re=!0,H==="diary"&&(S=v()),H==="thoughts"&&(V="shore"),H==="routine"&&(le="hoy"),H==="archive"&&(ve="list"),H==="stats"&&(te="pulse"),H==="setup"&&(de="personal"),ne(a),k({transition:t})}function so(e){if(e!=="thoughts")return"";const t=Qt(B).some(a=>a.seen!==!0);return`<span class="nav-dot ${t?"is-new":""}" ${t?"":"hidden"} title="hay pensamientos sin leer"></span>`}function Qn([e,t,a],s){const o=e==="thoughts"?Qt(B).filter(n=>n.seen!==!0).length:0;return`<a class="nav-item ${H===e?"active":""}" style="--nav-i:${s}" data-view="${e}" href="${Ue(e)}" title="${c(a)}" data-tooltip="${c(a)}" ${H===e?'aria-current="page"':""}>
    <span class="nav-index">${String(s+1).padStart(2,"0")}</span>
    <span class="nav-item-icon">${l(t)}${o?'<i class="nav-icon-ping" aria-hidden="true"></i>':""}</span>
    <span class="nav-label">${c(a)}</span>${so(e)}
  </a>`}function Wn(){let e=0;return eo.map(t=>`<div class="nav-group">
    <p class="nav-group-label">${c(t.label)}</p>
    ${t.items.map(a=>Qn(a,e++)).join("")}
  </div>`).join("")}function Zn(){return`<nav class="tabbar" aria-label="Navegación inferior">
    ${Un.map(e=>{const t=to().find(s=>s[0]===e);if(!t)return"";const a=t[2];return`<a class="tabbar-item ${H===e?"active":""}" data-view="${e}" href="${Ue(e)}" ${H===e?'aria-current="page"':""}>
        <span class="tabbar-icon">${l(t[1])}${so(e)}</span>
        <span class="tabbar-label">${c(a)}</span>
      </a>`}).join("")}
  </nav>`}function Vn(){return`
  <div class="sidebar-backdrop" data-action="close-menu" aria-hidden="true"></div>
  <aside class="sidebar" aria-label="Menú principal">
    <div class="sidebar-top-row">
      <a href="${Ue("diary")}" class="brand" data-action="today" title="Ir a hoy">
        <span class="brand-mark"><span class="brand-full">diario</span><span class="brand-short">d</span><span class="brand-period">.</span></span>
      </a>
      <button type="button" class="icon-button sidebar-collapse-btn" data-action="toggle-sidebar" aria-label="Plegar o desplegar el menú">
        ${l("left")}
      </button>
    </div>
    <div class="brand-rule"></div>
    <div id="ex-libris-slot">${Us(p,q.length)}</div>
    <div class="nav-wrap">
      <span class="nav-rail" aria-hidden="true"></span>
      <nav class="sidebar-nav" id="sidebar-nav" aria-label="Navegación principal">${Wn()}</nav>
    </div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <div class="topbar-left">
        <a class="mobile-brand" data-view="diary" href="${Ue("diary")}" aria-label="Ir a Hoy">diario<span>.</span></a>
        <span class="mobile-page-name" id="mobile-page-name">${c(it(H))}</span>
        <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="false">${l("menu")}</button>
        <button class="icon-button ghost desktop-sidebar-toggle" data-action="toggle-sidebar" aria-label="Alternar barra lateral">${l("sidebar")}</button>
        <span class="breadcrumb"><span id="breadcrumb-owner">${p.name?`Cuaderno de ${c(p.name)}`:"Diario"}</span> <span>/</span> <span id="breadcrumb-view">${c(it(H))}</span></span>
      </div>
      <div class="topbar-right">
        <a class="icon-button mobile-settings-link" data-view="setup" href="${Ue("setup")}" aria-label="Ajustes" title="Ajustes">${l("sliders")}</a>
        <button type="button" id="theme-pill" class="theme-pill" data-action="cycle-theme">
          <span class="topbar-favicon-mini" id="theme-pill-favicon">${xe(p.theme,p)}</span>
          <span id="theme-pill-label"></span>
        </button>
        <button type="button" class="avatar" id="avatar-slot" data-action="open-setup-wizard" title="Personalizar mi perfil, edad y gustos" aria-label="Personalizar mi perfil"></button>
      </div>
    </header>
    <main id="main"></main>
    <div class="tabbar-wrap">
      <span class="tabbar-rail" aria-hidden="true"></span>
      <nav class="tabbar" id="tabbar" aria-label="Navegación inferior">${Zn()}</nav>
    </div>
    <footer class="page-footer">
      <span id="footer-motto">${l("leaf")} ${c(p.motto||"Un día a la vez.")}</span>
      <span id="footer-owner">${p.name?`Cuaderno de ${c(p.name)}`:"Diario personal"}</span>
    </footer>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <dialog id="modal"></dialog>`}function Yn(){Zr();const e=O.querySelector(".sidebar");e&&(e.classList.add("is-mounting"),setTimeout(()=>e.classList.remove("is-mounting"),900)),window.addEventListener("resize",()=>gt()),document.fonts?.ready?.then(()=>gt())}function gt(){const e=O.querySelector(".nav-wrap"),t=O.querySelector(".nav-rail");if(e&&t){const o=e.querySelector(".nav-item.active")||e.querySelector(".nav-item");o&&(t.style.setProperty("--rail-y",`${o.offsetTop}px`),t.style.setProperty("--rail-h",`${o.offsetHeight}px`),t.classList.add("is-ready"))}const a=O.querySelector("#tabbar"),s=O.querySelector(".tabbar-rail");if(a&&s){const o=a.querySelector(".tabbar-item.active")||a.querySelector(".tabbar-item");o&&(s.style.setProperty("--rail-x",`${o.offsetLeft}px`),s.style.setProperty("--rail-w",`${o.offsetWidth}px`),s.classList.add("is-ready"))}}function Kn(){O.classList.toggle("is-thoughts-immersive",H==="thoughts");const e=ee.find(A=>A.id===p.theme)||ee[0],t=O.querySelector(".sidebar"),a=O.querySelector(".sidebar-backdrop"),s=O.querySelector(".mobile-menu");t&&(t.classList.toggle("is-open",Y),t.classList.toggle("is-collapsed",W),t.classList.toggle("is-ready",!0)),a&&a.classList.toggle("is-visible",Y),s&&s.setAttribute("aria-expanded",String(Y));for(const A of[".sidebar-collapse-btn",".desktop-sidebar-toggle"]){const F=O.querySelector(A);F&&(F.title=`${W?"Desplegar menú · Ctrl+B":"Plegar menú · Ctrl+B"}`,F.setAttribute("aria-expanded",String(!W)))}const o=O.querySelector(".sidebar-collapse-btn .icon");o&&(o.outerHTML=l(W?"right":"left")),O.querySelectorAll("#sidebar-nav .nav-item, #tabbar .tabbar-item").forEach(A=>{const F=A.dataset.view===H;A.classList.toggle("active",F),F?A.setAttribute("aria-current","page"):A.removeAttribute("aria-current")}),ro();const n=O.querySelector("#ex-libris-slot");n&&(n.innerHTML=Us(p,q.length));const r=O.querySelector("#breadcrumb-owner");r&&(r.textContent=p.name?`Cuaderno de ${p.name}`:"Diario");const i=O.querySelector("#breadcrumb-view");i&&(i.textContent=it(H)),document.title=`${it(H)} · ${p.name?`Cuaderno de ${p.name}`:"Diario personal"}`;const d=O.querySelector("#mobile-page-name");d&&(d.textContent=it(H));const u=O.querySelector("#theme-pill-label");u&&(u.textContent=e.name);const m=O.querySelector("#theme-pill");m&&(m.title=`Cambiar papel e icono · ${e.name}`);const h=O.querySelector("#theme-pill-favicon");h&&(h.innerHTML=xe(p.theme,p));const g=O.querySelector("#avatar-slot");g&&(g.innerHTML=p.name?`<span class="avatar-initial">${c(p.name.slice(0,1).toUpperCase())}</span>`:l("user"));const y=O.querySelector("#footer-motto");y&&(y.innerHTML=`${l("leaf")} ${c(p.motto||"Un día a la vez.")}`);const f=O.querySelector("#footer-owner");f&&(f.textContent=p.name?`Cuaderno de ${p.name}`:"Diario personal"),gt()}function k(e={}){Me(p.theme,p),ls||(O.innerHTML=Vn(),ls=!0,Yn()),Xn(e),Kn(),!p.completed&&!rt&&(rt=!0,po(1,{mandatory:!0}))}function oo(){if(!Z)return;document.querySelector(".thoughts-entry-wave")?.remove();const e=document.createElement("div");e.className="thoughts-entry-wave",e.setAttribute("aria-hidden","true"),e.innerHTML=`<svg class="thoughts-entry-water" viewBox="0 0 1440 1800" preserveAspectRatio="none" aria-hidden="true">
    <defs><linearGradient id="thoughts-entry-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop class="entry-stop entry-stop-surface" offset="0%"/><stop class="entry-stop entry-stop-mid" offset="32%"/><stop class="entry-stop entry-stop-deep" offset="100%"/>
    </linearGradient></defs>
    <path class="thoughts-entry-sea" d="M0 820C160 760 280 860 430 810S730 840 880 800 1190 850 1440 790v1010H0Z"/>
    <path class="thoughts-entry-swell" d="M0 879c176-64 274-11 418-41s276-25 405 11 268 12 385-17 164-5 232 13v955H0Z"/>
    <path class="thoughts-entry-crest" d="M-30 823c140-56 268 36 418-9s273-23 413 17 275 3 407-28 204-13 268 8"/>
    <path class="thoughts-entry-foam" d="M-20 851c124-35 206 13 304-4s203-34 304-3 191 22 288 1 197-20 292 6 190 10 322-13"/>
  </svg>`,document.body.appendChild(e);const t=e.querySelector(".thoughts-entry-water"),a=setTimeout(()=>e.remove(),2100);t?.addEventListener("animationend",()=>{clearTimeout(a),e.remove()},{once:!0})}function Jn(){oe?.disconnect(),we?.disconnect(),oe=null,we=null;const e=document.querySelector("#thoughts-island");if(!e)return;const t=()=>{ba=!0,e.classList.add("is-visible")};if(ba||!("IntersectionObserver"in window)?t():(oe=new IntersectionObserver(([a])=>{a?.isIntersecting&&(t(),oe?.disconnect(),oe=null)},{threshold:.15}),oe.observe(e)),"IntersectionObserver"in window){const a=e.closest(".thoughts-world");we=new IntersectionObserver(([s])=>{a?.classList.toggle("island-in-view",(s?.intersectionRatio||0)>=.15)},{threshold:[0,.15]}),we.observe(e)}}function cs(){const e=document.querySelector(".thoughts-ocean-stage");if(!e)return;const t=Ps(new Date);e.dataset.dayphase=t.phase,e.style.setProperty("--sun-x",`${t.x}%`),e.style.setProperty("--sun-y",`${t.y}%`),e.style.setProperty("--moon-x",`${t.moonX}%`),e.style.setProperty("--moon-y",`${t.moonY}%`)}function ds(){qt&&(clearInterval(qt),qt=null),H==="thoughts"&&(cs(),qt=setInterval(cs,6e4))}function Xn(e={}){const t=document.querySelector("#main");if(!t)return;H==="thoughts"&&Kr();const a=is!==H,s=a&&H==="thoughts";a&&(ba=!1,oe?.disconnect(),we?.disconnect(),oe=null,we=null);const o=Z&&!e.instant&&!s&&(!!e.transition||a||re);re=!1;const n=window.scrollY;t.innerHTML=`
    ${Ve?`<div class="error-banner" role="alert">${c(Ve)}</div>`:""}
    ${er()}`,t.className="",o&&(t.offsetWidth,t.classList.add("page-enter")),ti(),Rr(),jr(),Vr(),a?(is=H,window.scrollTo({top:0,behavior:"auto"})):n&&window.scrollTo(0,n),H==="thoughts"?(Jn(),ds(),s&&!e.instant&&oo()):(oe?.disconnect(),we?.disconnect(),oe=null,we=null,ds())}function sa(e,t,a,s=""){return`<div class="page-heading">
    <div>${e?`<p class="eyebrow">${e}</p>`:""}<h1>${t}</h1></div>
    ${s}
  </div>`}function er(){switch(H){case"diary":return us();case"thoughts":return dr();case"routine":return mr();case"archive":return wr();case"stats":return Sr();case"setup":return xr();default:return us()}}function tr(){return`<div class="day-navigation">
    <button type="button" data-action="previous" aria-label="Día anterior">${l("left")}<span>Anterior</span></button>
    <button type="button" data-action="today" class="today-button">Hoy</button>
    <button type="button" data-action="next" ${S>=v()?"disabled":""}><span>Siguiente</span>${l("right")}</button>
  </div>`}function ar(){return p.completed?"":`<section class="card setup-welcome-banner">
    <div class="setup-welcome-content">
      <span class="soft-icon accent">${l("sliders")}</span>
      <div>
        <h2>Personaliza tu diario</h2>
        <p>Elige tus metas, hábitos y papel.</p>
      </div>
    </div>
    <div class="setup-welcome-actions">
      <button type="button" class="button solid" data-action="open-setup-wizard">${l("sliders")} Personalizar ahora</button>
    </div>
  </section>`}function sr(e,t){const a=e?Object.values(e.habits||{}).filter(Boolean).length:0,s=yn(p.name),o=_t(B,S).returned.length;return`<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Día</small><span>${yt(S,q)}</span></div>
      <div class="hero-meta">
        <p class="hero-greeting">${c(s)}</p>
        <span class="date-line">${P(S)}</span>
        ${x.length||o?`<p class="hero-line">
          ${x.length?`<button type="button" class="hero-link" data-view="routine">${a}/${x.length} hábitos</button>`:""}
          ${o?`<button type="button" class="hero-link is-new" data-view="thoughts">${o===1?"De vuelta":"De vuelta · "+o}</button>`:""}
        </p>`:""}
      </div>
    </div>
    <div class="hero-right">
      ${tr()}
    </div>
  </div>`}function da(e,t,a,s,o=!0){const n=s?String(s).trim().split(/\s+/).length:0;return`<div class="writing-field" data-field="${e}">
    <label for="${e}">${t}<span class="word-count">${n} palabras</span></label>
    <textarea id="${e}" name="${e}" maxlength="20000" placeholder="${c(a)}" class="${o?"large":""}">${c(s||"")}</textarea>
  </div>`}function or(e){const t=ae(p);return t.length?`<div class="entry-parts">
    ${t.map(a=>{const s=`part_${a.key}`,o=e?.parts?.[a.key]||"",n=`<label for="${s}">${c(a.label)}${a.hint?`<small>${c(a.hint)}</small>`:""}</label>`,r=a.type==="line"?`<input id="${s}" name="${s}" class="clean-line-input" maxlength="600" value="${c(o)}">`:`<textarea id="${s}" name="${s}" maxlength="4000" rows="3">${c(o)}</textarea>`;return`<div class="writing-field part-field" data-part="${a.key}">${n}${r}</div>`}).join("")}
  </div>`:""}function nr(e){const t=ae(p).filter(a=>String(e?.parts?.[a.key]||"").trim());return t.length?`<div class="sheet-parts">${t.map(a=>`
    <div class="sheet-part"><span>${c(a.label)}</span><p>${c(e.parts[a.key])}</p></div>`).join("")}</div>`:""}function rr(e=""){return`<div class="goal-row"><span class="goal-circle"></span>
    <input name="goal" aria-label="Objetivo para mañana" placeholder="Un objetivo concreto…" maxlength="500" value="${c(e)}">
    <button type="button" class="icon-button ghost" data-action="remove-goal" aria-label="Eliminar objetivo">${l("close")}</button>
  </div>`}function ir(e,t){if(!e)return"";const a=x.filter(o=>e.habits?.[o.id]),s=p.name?`Cuaderno de ${p.name}`:"Resumen del día";return`<section class="card daily-summary notebook-sheet reveal">
    <div class="sheet-header">
      <div>
        <p class="eyebrow">${l("book")} Día ${yt(e.date,q)}</p>
        <h2>${P(e.date)}</h2>
      </div>
      <span class="mood-tag" style="--mood:${N[e.mood-1].color}">${N[e.mood-1].emoji} ${N[e.mood-1].label}</span>
    </div>
    ${e.wordOfDay||e.capsule?`
      <div class="sheet-capsules">
        ${e.wordOfDay?`<div class="sheet-capsule-item"><span>Palabra del día</span><strong>«${c(e.wordOfDay)}»</strong></div>`:""}
        ${e.capsule?`<div class="sheet-capsule-item"><span>${c(t.capsuleLabel)}</span><strong>${c(e.capsule)}</strong></div>`:""}
      </div>
    `:""}
    <p class="sheet-narrative">${Oo(e)}</p>
    ${e.bestOfDay?`<div class="sheet-quote-note"><span>Lo mejor:</span> «${c(e.bestOfDay)}»</div>`:""}
    ${nr(e)}
    ${a.length?`<div class="sheet-habits-line">${l("check")} ${a.map(o=>`<b>${c(o.name)}</b>`).join(" · ")}</div>`:""}
    <div class="sheet-footer">
      <small>${c(s)} · ${$t(e)} palabras</small>
      <button type="button" class="text-button" data-action="read" data-date="${e.date}">Ver hoja completa ${l("arrow")}</button>
    </div>
  </section>`}function lr(e){return e?!!(e.bestOfDay||e.differentToday||e.tomorrow||e.energy||e.stress||e.tags&&e.tags.length||e.gratitude&&e.gratitude.some(Boolean)):!1}function us(){const e=q.find(m=>m.date===S),t=_(p),a=ta?{triggered:!1}:ja(e||{}),s=ga(S,Tt),o=e?.mood?N[e.mood-1].color:"",n=e?.sleepHours??p.sleepGoal??t.sleepRecommended??7.5,r=e?.studyHours??0,i=ze===null?lr(e):ze,d=[6,7,7.5,8,9],u=[0,1,2,3,4];return`
  ${ar()}
  ${sr(e)}
  <div class="section-rule" aria-hidden="true"></div>
  <div id="crisis-alert-slot">${Ws(a,p)}</div>
  <div class="diary-layout ${nt?"is-focus-writing":""}">
    <div class="diary-main">
      <form id="diary-form" style="${o?`--active-mood:${o}`:""}" autocomplete="off">
        <!-- 1 · CAPTURA RÁPIDA -->
        <section class="card mood-card-section quick-capture">
          <div class="section-heading">
            <p class="section-index" style="margin-bottom:0">¿Cómo ha ido hoy?</p>
          </div>
          <div class="mood-scale" role="radiogroup" aria-label="¿Cómo te ha ido?">
            ${N.map(m=>`<label class="mood-option" style="--mood-color:${m.color}">
              <input type="radio" name="mood" value="${m.value}" ${(e?.mood||0)===m.value?"checked":""}>
              <span class="mood-face">${m.emoji}</span>
              <span class="mood-label">${m.label}</span>
            </label>`).join("")}
          </div>

          <div class="quick-hours-strip">
            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="sleepHours">${l("moon")} Sueño</label>
                <div class="quick-pills" role="group" aria-label="Atajos de sueño">
                  ${d.map(m=>`<button type="button" class="quick-pill ${Number(n)===m?"active":""}" data-action="quick-number" data-target="sleepHours" data-val="${m}">${E(m)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="sleepHours" name="sleepHours" type="number" min="0" max="24" step="0.5" value="${n}">
                <span>h · Meta ${E(p.sleepGoal||t.sleepRecommended)}</span>
              </div>
            </div>

            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="studyHours">${l("study")} ${c(t.focusLabel)}</label>
                <div class="quick-pills" role="group" aria-label="Atajos de dedicación">
                  ${u.map(m=>`<button type="button" class="quick-pill ${Number(r)===m?"active":""}" data-action="quick-number" data-target="studyHours" data-val="${m}">${E(m)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="studyHours" name="studyHours" type="number" min="0" max="24" step="0.5" value="${r}">
                <span>h · Meta ${E(p.studyGoal??t.studyRecommended)}</span>
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
                ${l("spark")} Sugerir tema
              </button>
              <button type="button" class="icon-button ghost" data-action="toggle-focus-writing" title="${nt?"Salir del modo enfoque":"Ampliar zona de escritura"}" aria-label="Modo enfoque">
                ${l("expand")}
              </button>
            </div>
          </div>
          <div id="writing-prompt-box" class="writing-prompt-banner ${Re?"is-open":""}" ${Re?"":"hidden"}>
            <div>
              <p id="writing-prompt-text">${c(s)}</p>
            </div>
            <div class="writing-prompt-actions">
              <button type="button" class="button outline small-btn" data-action="next-writing-prompt">${l("refresh")} Otra</button>
              <button type="button" class="button solid small-btn" data-action="insert-writing-prompt">${l("pen")} Usar</button>
            </div>
          </div>
          ${da("generalDay","Notas del día",t.placeholders.generalDay,e?.generalDay,!0)}
          ${or(e)}
          <div class="capsule-word-grid">
            <div class="writing-field" data-field="capsule">
              <label for="capsule">${l("spark")} ${c(t.capsuleLabel)}</label>
              <input id="capsule" name="capsule" class="clean-line-input" maxlength="300" placeholder="${c(t.capsulePlaceholder)}" value="${c(e?.capsule||"")}">
            </div>
            <div class="writing-field" data-field="wordOfDay">
              <label for="wordOfDay">${l("book")} Palabra del día</label>
              <input id="wordOfDay" name="wordOfDay" class="clean-line-input" maxlength="60" placeholder="Una palabra que resuma hoy…" value="${c(e?.wordOfDay||"")}">
            </div>
          </div>
        </section>

        <!-- 3 · MÁS DETALLES (etiquetas, momentos, gratitud) -->
        <div class="extras-accordion ${i?"is-open":""}" id="extras-accordion">
          <button type="button" class="extras-toggle-btn" data-action="toggle-more-details" aria-expanded="${i}" aria-controls="extras-panel">
            <div>
              <strong>Añadir más detalles al día</strong>
              <small>Etiquetas, energía y gratitud</small>
            </div>
            <span class="extras-chevron">${l("chevronDown")}</span>
          </button>
          <div id="extras-panel" class="extras-work-shell" ${i?"":"hidden"}>
            <div class="extras-inner">
              <section class="card">
                <p class="section-index">Etiquetas de hoy</p>
                ${wn(e?.tags||[],t.tags)}
              </section>

              <section class="card">
                <p class="section-index">Momentos y energía</p>
                <div class="scale-block" style="margin-bottom:16px">
                  ${ss("energy",Ss,e?.energy,"bolt","Energía","Del 1 al 5","Opcional")}
                  ${ss("stress",ks,e?.stress,"storm","Estrés","Del 1 al 5","Opcional")}
                </div>
                ${da("bestOfDay","Lo mejor del día",t.placeholders.bestOfDay,e?.bestOfDay,!1)}
                ${da("differentToday","¿Qué ha sido distinto hoy?",t.placeholders.differentToday,e?.differentToday,!1)}
              </section>

              <section class="card">
                <p class="section-index">Tres cosas buenas</p>
                <div class="gratitude-fields">
                  ${["1. Hoy agradezco o valoro...","2. También...","3. Y además..."].map((m,h)=>`<label><span>0${h+1}</span><input name="gratitude${h}" aria-label="${m}" placeholder="${m}" maxlength="20000" value="${c(e?.gratitude?.[h]||"")}"></label>`).join("")}
                </div>
              </section>
            </div>
          </div>
        </div>

        <div class="save-area">
          <button class="button solid save-button" type="submit" ${Ve?"disabled":""}>${l("stamp")} Guardar día</button>
        </div>
      </form>
      ${ir(e,t)}
    </div>

    <aside class="diary-aside">
      ${cr()}
      <div id="inspiration-slot">${Zs(S,Pa,Fa,p,e,e?.wordOfDay||"")}</div>
      ${Gn(x,e,q,S)}
      ${no()}
      <div id="quote-slot">${Qs(S,Ba,p)}</div>
    </aside>
  </div>`}function cr(){const t=_t(B,S).returned.filter(n=>n.seen!==!0).length,a=t?"De vuelta":"Pensamientos",s=t?`${t} ${t===1?"nuevo":"nuevos"}`:"",o=B.length?`${B.length} ${B.length===1?"nota":"notas"}`:"Vacío";return`<section class="card thoughts-teaser ${t?"has-new":""}">
    <div class="thoughts-teaser-heading">
      <span class="soft-icon ${t?"accent":""}">${l("spark")}</span>
      <div><p class="eyebrow">Pensamientos</p><h2>${c(a)}</h2></div>
    </div>
    ${s?`<p class="thoughts-teaser-copy">${c(s)}</p>`:""}
    <div class="thoughts-teaser-footer">
      <span>${c(o)}</span>
      <button type="button" class="text-button" data-view="thoughts">Abrir ${l("arrow")}</button>
    </div>
  </section>`}function no(){const e=me(S),t=D(e,6),a=ie(q,e,t),s=Te(a);return`<section class="card week-preview">
    <div class="section-heading"><h2>Esta semana</h2><span class="tag">${a.length}/7 días</span></div>
    <div class="week-dots">
      ${Array.from({length:7},(o,n)=>{const r=D(e,n),i=a.find(d=>d.date===r);return`<button type="button" data-action="open-day" data-date="${r}" ${r>v()?"disabled":""} aria-label="${P(r)}${i?", "+N[i.mood-1].label:""}">
          <span>${["L","M","X","J","V","S","D"][n]}</span>
          <i class="${i?"filled":""} ${r===v()?"current":""}" style="--mood:${i?N[i.mood-1].color:""}">${i?l("check"):"·"}</i>
        </button>`}).join("")}
    </div>
    <div class="mini-metrics">
      <div>${l("heart")}<strong>${s.count?E(s.mood):"—"}<small>/5</small></strong><span>Ánimo</span></div>
      <div>${l("moon")}<strong>${s.count?E(s.sleep):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${l("study")}<strong>${s.count?E(s.study):"—"}<small>h</small></strong><span>Enfoque</span></div>
    </div>
    <button class="text-button full-link" data-view="stats">Ver progreso ${l("arrow")}</button>
  </section>`}function dr(){const e=v(),t=_t(B,e),a=[["shore","spark","De vuelta",t.returned.length],["sea","hourglass","En camino",t.drifting.length],["kept","bookmark","Guardados",t.kept.length],["lost","history","Perdidas",t.lost.length]];return`<div class="thoughts-world">
    <div class="thoughts-world-tide" aria-hidden="true">${Vs(7,.16)}</div>
    <a class="thoughts-exit" data-view="diary" href="${Ue("diary")}" aria-label="Volver al diario" title="Volver al diario">
      ${l("left")}<span>Volver al diario</span>
    </a>
    ${Ln(B,e)}
    <section id="thoughts-island" class="thoughts-island" aria-label="Isla de Pensamientos">
      <svg class="thoughts-island-art" viewBox="0 0 1200 220" preserveAspectRatio="none" aria-hidden="true">
        <path class="island-art-water" d="M0 98c90-30 138 15 222-4s128-31 207-8 120 17 194-4 130 14 208-3 159-17 231 8 93 16 138 3v130H0Z"/>
        <path class="island-art-sand" d="M0 130c94-30 183-36 276-15 93 20 164-14 255-18 84-4 142 21 233 19 96-2 164-29 261-22 78 6 116 23 175 34v92H0Z"/>
        <path class="island-art-beach" d="M0 153c84-19 166-24 260-8 105 18 182-15 277-17 85-2 156 19 247 16 108-4 185-26 287-14 57 7 96 18 129 28v62H0Z"/>
        <g class="shore-palm" transform="translate(912 168)">
          <path class="island-art-trunk" d="M0 4c-5-21-3-44 6-66 4-10 9-18 16-26"/>
          <g transform="translate(22 -89)"><g class="shore-palm-crown">
            <path class="island-art-leaf leaf-a" d="M0 0c-25-28-59-37-89-24 28 2 48 12 64 24 10 7 18 10 25 8Z"/>
            <path class="island-art-leaf leaf-b" d="M0 0c-11-34-38-53-70-51 22 11 38 25 50 42 7 9 14 14 20 13Z"/>
            <path class="island-art-leaf leaf-c" d="M0 0c4-35 22-60 53-67-15 20-24 40-30 59-4 11-10 18-17 20Z"/>
            <path class="island-art-leaf leaf-d" d="M0 0c21-29 51-41 81-33-25 8-43 21-57 36-9 8-17 11-24 8Z"/>
            <path class="island-art-leaf leaf-e" d="M0 0c28-16 60-14 82 5-25-3-46 1-66 8-11 4-19 3-25-1Z"/>
          </g>
          </g>
        </g>
      </svg>
      <div class="thoughts-island-header">
        <div><p class="island-kicker">La orilla</p><h2>Tu isla</h2></div>
        <button type="button" class="island-back-top" data-action="thoughts-top">${l("arrow")} Volver arriba</button>
      </div>
      <div class="thoughts-island-workspace">
        <section class="thoughts-island-compose" aria-label="Hacer una botella">
          <div class="island-section-heading"><h3>Escribe una botella</h3></div>
          <div id="composer-slot">${Dn(p,e,Ye)}</div>
        </section>
        <section class="thoughts-island-bottles" aria-label="Botellas">
          <div class="island-section-heading"><h3>Botellas</h3></div>
          <div class="segmented ocean-tabs" role="tablist" aria-label="Pensamientos">
            ${a.map(([s,o,n,r])=>`<button type="button" role="tab" aria-selected="${V===s}" data-action="thoughts-tab" data-tab="${s}" class="${V===s?"active":""}">
              ${l(o)} ${c(n)}${r?`<span class="seg-count">${r}</span>`:""}
            </button>`).join("")}
          </div>
          <div id="ocean-body">${ur(t,e)}</div>
        </section>
      </div>
    </section>
  </div>`}function ur(e,t){if(V==="sea"&&e.drifting.length)return`<div class="sealed-stack" aria-label="En camino">
      ${e.drifting.map(o=>la(o,t)).join("")}
    </div>`;if(V==="lost"&&e.lost.length)return`<div class="sealed-stack" aria-label="Perdidas">
      ${e.lost.map(o=>la(o,t)).join("")}
    </div>`;const s={shore:e.returned,sea:[],kept:e.kept,lost:[]}[V]??e.returned;return s.length?`<div class="bottle-grid">${s.map((o,n)=>la(o,t,n)).join("")}</div>`:pr(V)}function pr(e){const t={shore:["Sin novedades",""],sea:["Todo tranquilo",""],kept:["Sin guardados",""],lost:["Sin pérdidas",""]},[a,s]=t[e]||t.shore,o=e==="shore"?`<button type="button" class="button outline" data-action="focus-composer">${l("pen")} Escribir</button>`:"";return`${Ft(a,s,o)}`}function mr(){const e=q.find(a=>a.date===S);return`${sa("Hoy","Rutina","",`
    <div class="segmented">
      ${[["hoy","listChecks","Hoy"],["week","grid","Semana"],["counters","drop","Contadores"],["streaks","flame","Rachas"]].map(([a,s,o])=>`<button type="button" data-action="routine-tab" data-tab="${a}" class="${le===a?"active":""}">${l(s)} ${c(o)}</button>`).join("")}
    </div>
  `)}
  <div class="routine-layout">
    <div class="routine-main tab-panel-enter">
      ${gr(e)}
      <div id="routine-body">${br(e)}</div>
    </div>
    <aside class="routine-aside">${$r(e)}</aside>
  </div>`}function hr(){return`<div class="day-navigation">
    <button type="button" data-action="shift-day" data-delta="-1" aria-label="Día anterior">${l("left")}<span>Anterior</span></button>
    <button type="button" data-action="today-routine" ${S===v()?"disabled":""}>${l("sun")} Hoy</button>
    <button type="button" data-action="shift-day" data-delta="1" ${S>=v()?"disabled":""}><span>Siguiente</span>${l("right")}</button>
  </div>`}function gr(e){const t=x.filter(n=>e?.habits?.[n.id]).length,a=x.length?Math.round(t/x.length*100):0,s=x.length?t===0?"Aún no has marcado nada":t===x.length?"Rutina completa":`Vas a ${t} de ${x.length}`:"Tu lista está vacía",o=a>=100?"Lista completa.":a>0?"Buen ritmo.":"Un paso basta.";return`<section class="card routine-hero">
    <div class="routine-hero-copy">
      <p class="eyebrow">${l("sun")} ${c(P(S,{weekday:"long",day:"numeric",month:"long"}))}</p>
      <h2>${c(s)}</h2>
      <p class="routine-hero-note">${c(o)}</p>
      ${hr()}
    </div>
    ${Xs(a,x.length?`${a}%`:"—","de hoy")}
  </section>`}function br(e){const t=_(p),a=v();if(le==="week")return`${Fn(q,x,{days:35,end:a,today:a,title:"Tus últimas cinco semanas"})}${fr()}`;if(le==="counters"){const s=ie(q,D(a,-27),a);return`${Rn(e,p,[])||""}${_s(s,p)}`}return le==="streaks"?x.length?`${Bn(x,q,a)}${vr()}`:Ft("Sin hábitos","Añade uno.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="hoy">${l("plus")} Añadir</button>`):`${x.length?`<section class="card habit-board-card">
    <div class="section-heading">
      <div><p class="eyebrow">${l("listChecks")} Hoy</p><h2>Hábitos</h2></div>
      <span class="field-caption">${x.filter(s=>e?.habits?.[s.id]).length}/${x.length}</span>
    </div>
    ${Pn(x,e,q,S,a)}
  </section>`:Ft("Sin hábitos","Añade uno.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="streaks">${l("flame")} Rachas</button>`)}
  ${In(e,S)}
  ${zn(t,x)}`}function fr(){const e=me(S),t=D(e,6),a=ie(q,e,t),s=x.map(o=>{const n=a.filter(r=>r.habits?.[o.id]).length;return{label:o.name,count:n,total:7,color:n>=5?"var(--green)":n>=3?"var(--ochre)":"var(--red)"}});return`<section class="card">
    <div class="section-heading"><div><p class="eyebrow">${l("week")}Esta semana</p><h2>${c(P(e,{day:"numeric",month:"short"}))} → ${c(P(t,{day:"numeric",month:"short"}))}</h2></div>
      <span class="tag">${a.length}/7 días con entrada</span></div>
    ${x.length?Ha(s):'<p class="habit-empty">Añade hábitos para ver su semana.</p>'}
  </section>`}function vr(){const e=x.map(a=>({h:a,best:js(q,a.id),live:Gt(q,a.id)})).filter(a=>a.best>0).sort((a,s)=>s.best-a.best).slice(0,6);if(!e.length)return"";const t=e[0].best||1;return`<section class="card streak-board">
    <div class="section-heading"><div><p class="eyebrow">${l("flame")}El muro de las rachas</p><h2>Tus mejores series</h2></div><span class="field-caption">días seguidos</span></div>
    <ol class="streak-ranks">
      ${e.map((a,s)=>`<li>
        <span class="streak-rank">${String(s+1).padStart(2,"0")}</span>
        <span class="streak-name">${c(a.h.name)}</span>
        <span class="streak-bar"><i style="width:${Math.max(6,Math.round(a.best/t*100))}%"></i></span>
        <span class="streak-num"><b>${a.best}</b> d${a.live?` · viva ${a.live}`:""}</span>
      </li>`).join("")}
    </ol>
  </section>`}function yr(){return x.length?q.filter(e=>x.every(t=>e.habits?.[t.id])).length:0}function $r(e){const t=v(),a=ie(q,D(t,-27),t),s=e?Math.min(100,Math.round(e.sleepHours/(p.sleepGoal||7.5)*100)):0;return`
  <section class="card routine-day-card">
    <div class="section-heading"><h2>El día en cifras</h2><span class="tag">${c(P(S,{day:"numeric",month:"short"}))}</span></div>
    <div class="mini-metrics">
      <div>${l("moon")}<strong>${e?E(e.sleepHours):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${l("study")}<strong>${e?E(e.studyHours):"—"}<small>h</small></strong><span>Enfoque</span></div>
      <div>${l("drop")}<strong>${e?.counters?.water||0}<small>v</small></strong><span>Agua</span></div>
    </div>
    ${e?`<div class="sleep-goal-bar"><span style="width:${s}%"></span></div>
      <p class="field-caption">${c(Os(e.sleepHours))}</p>`:'<p class="habit-empty">Este día no tiene entrada en el cuaderno.</p>'}
    <button type="button" class="text-button full-link" data-action="open-day" data-date="${S}">Escribir sobre este día ${l("arrow")}</button>
  </section>
  <section class="card">
    <div class="section-heading"><h2>Rachas del cuaderno</h2><span class="field-caption">28 días</span></div>
    <div class="streak-lines">
      <div><span>${l("flame")} Días seguidos escribiendo</span><strong>${Ds(q)}</strong></div>
      <div><span>${l("seal")} Mejor racha histórica</span><strong>${qa(q)}</strong></div>
      <div><span>${l("check")} Días con toda la rutina</span><strong>${yr()}</strong></div>
      <div><span>${l("moon")} Sueño medio</span><strong>${a.length?E(Te(a).sleep):"—"} h</strong></div>
    </div>
  </section>
  ${no()}`}function wr(){const e=[...new Set(q.flatMap(a=>a.tags||[]))],t=q.filter(a=>(!Ct||a.mood===+Ct)&&(!Lt||(a.tags||[]).includes(Lt))&&(!At||[a.date,a.generalDay,a.bestOfDay,a.differentToday,a.tomorrow,a.wordOfDay,a.capsule,...a.gratitude,...a.goals||[],...a.tags||[]].join(" ").toLocaleLowerCase().includes(At.toLocaleLowerCase()))).sort((a,s)=>s.date.localeCompare(a.date));return`${sa("Cuaderno","Archivo","",`
    <div class="segmented">
      <button type="button" data-action="archive-tab" data-tab="list" class="${ve==="list"?"active":""}">${l("book")} Lista</button>
      <button type="button" data-action="archive-tab" data-tab="calendar" class="${ve==="calendar"?"active":""}">${l("calendar")} Calendario</button>
    </div>
  `)}

  ${ve==="calendar"?`
    <div class="tab-panel-enter">
      <section class="card full-calendar">
        ${kn(J,q,{selected:S})}
        <div class="mood-legend">
          ${N.map(a=>`<span><i style="background:${a.color}"></i>${a.label}</span>`).join("")}
        </div>
      </section>
    </div>
  `:`
    <div class="tab-panel-enter">
      <div class="history-controls">
        <label class="search-box">${l("search")}<input id="history-search" aria-label="Buscar en el diario" placeholder="Buscar por palabra, nota o etiqueta…" value="${c(At)}"></label>
        <select id="history-mood" aria-label="Filtrar por estado de ánimo">
          <option value="">Todos los estados</option>
          ${N.map(a=>`<option value="${a.value}" ${Ct==a.value?"selected":""}>${a.emoji} ${a.label}</option>`).join("")}
        </select>
        ${e.length?`
          <select id="history-tag" aria-label="Filtrar por etiqueta">
            <option value="">Todas las etiquetas</option>
            ${e.map(a=>`<option value="${c(a)}" ${Lt===a?"selected":""}>#${c(a)}</option>`).join("")}
          </select>
        `:""}
        <div class="segmented">
          <button type="button" data-action="history-layout" data-layout="grid" class="${Dt==="grid"?"active":""}">Tarjetas</button>
          <button type="button" data-action="history-layout" data-layout="timeline" class="${Dt==="timeline"?"active":""}">Hilo</button>
        </div>
      </div>
      <div class="${Dt==="timeline"?"history-timeline":"history-grid"}">
        ${t.length?t.map((a,s)=>{const o=Object.values(a.habits||{}).filter(Boolean).length;return`<article class="card history-card" style="--mood:${N[a.mood-1].color};--i:${Math.min(s,10)}">
            <div class="section-heading">
              <p class="eyebrow">Día ${yt(a.date,q)}</p>
              <span class="mood-tag" style="--mood:${N[a.mood-1].color}">${N[a.mood-1].emoji} ${N[a.mood-1].label}</span>
            </div>
            <h2>${P(a.date,{day:"numeric",month:"long",year:"numeric"})}</h2>
            <p class="entry-excerpt">${c(a.generalDay)}</p>
            ${a.wordOfDay||a.capsule?`
              <div class="history-capsules">
                ${a.wordOfDay?`<span class="history-word-pill">«${c(a.wordOfDay)}»</span>`:""}
                ${a.capsule?`<span class="history-capsule-pill">${l("spark")} ${c(a.capsule)}</span>`:""}
              </div>
            `:""}
            <div class="history-numbers">
              <span class="chiplet">${l("moon")} ${E(a.sleepHours)} h</span>
              <span class="chiplet">${l("study")} ${E(a.studyHours)} h</span>
              ${x.length?`<span class="chiplet">${l("check")} ${o}/${x.length}</span>`:""}
              <span class="chiplet">${l("pen")} ${$t(a)} pal.</span>
            </div>
            <div class="history-actions">
              <button class="text-button" data-action="read" data-date="${a.date}">Abrir ${l("arrow")}</button>
              <button class="icon-button ghost" data-action="open-day" data-date="${a.date}" aria-label="Editar">${l("pen")}</button>
              <button class="icon-button ghost delete-button" data-action="delete" data-date="${a.date}" aria-label="Eliminar">${l("trash")}</button>
            </div>
          </article>`}).join(""):Ft(q.length?"Sin resultados":"Sin entradas","")}
      </div>
    </div>
  `}`}function Sr(){return`${sa("Cuaderno","Progreso","",`
    <div class="segmented">
      <button type="button" data-action="stats-tab" data-tab="pulse" class="${te==="pulse"?"active":""}">Pulso y metas</button>
      <button type="button" data-action="stats-tab" data-tab="week" class="${te==="week"?"active":""}">Semana</button>
      <button type="button" data-action="stats-tab" data-tab="month" class="${te==="month"?"active":""}">Mes</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${te==="week"?ps(!1):te==="month"?ps(!0):kr()}
  </div>`}function kr(){const e=v(),t=D(e,1-Fe),a=ie(q,t,e),s=ie(q,D(t,-Fe),D(t,-1)),o=Te(a),n=Te(s),r=Po(q),i=Ls(q,t,e,e),d=_(p),u=(m,h)=>{if(a.length<3||s.length<3||o.metricCounts[m]<3||n.metricCounts[m]<3||!Number.isFinite(o[m])||!Number.isFinite(n[m]))return"";const g=o[m]-n[m];return`${g>0?"↑":g<0?"↓":"→"} ${E(Math.abs(g))}${h} vs. anterior`};return`
  <div class="ledger-grid">
    ${ge("Registro",`${i.recorded}/${i.days}`,"días",`${i.pct}% de los días anotados`)}
    ${ge("Ánimo medio",o.metricCounts.mood?E(o.mood):"—","/ 5",u("mood",""))}
    ${ge("Sueño habitual",o.metricCounts.sleep?E(o.sleepMedian):"—","h",o.metricCounts.sleep?`media ${E(o.sleep)} h`:"sin datos")}
    ${ge(d.focusLabel,o.metricCounts.study?E(o.study):"—","h",u("study"," h"))}
    ${ge("Racha actual",Ds(q),"días",`${qa(q)} días · mejor racha`)}
  </div>
  <p class="analytics-footnote">Solo días registrados.</p>
  ${_s(a,p)}
  <section class="card chart-card">
    <div class="section-heading">
      <h2>Ánimo y sueño</h2>
      <div class="segmented">
        <button type="button" data-action="range" data-range="7" class="${Fe===7?"active":""}">7 días</button>
        <button type="button" data-action="range" data-range="30" class="${Fe===30?"active":""}">30 días</button>
      </div>
    </div>
    ${xn(a,t,Fe,p)}
  </section>
  <section class="card">
    <div class="section-heading">
      <h2>Últimos 28 días</h2>
      <span class="field-caption">Ánimo por día</span>
    </div>
    ${Mn(q,e,28)}
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Tendencias detectadas</h2>
      <div style="margin-top:10px">
        ${r.length?r.map(m=>`<p class="trend-item">${l("arrow")}<span>${m}</span></p>`).join(""):'<p class="habit-empty">Sin tendencias.</p>'}
      </div>
    </section>
    <section class="card">
      <h2>Etiquetas más frecuentes</h2>
      ${Ja(a).length?Ha(Ja(a).slice(0,6).map(([m,h])=>({label:m,count:h,total:a.length,color:"var(--red)"}))):'<p class="habit-empty">Sin etiquetas.</p>'}
    </section>
  </div>`}function ps(e){const t=v(),[a,s]=e?As(J):[me(S),D(me(S),6)],o=s>t?t:s,n=a<=o?ie(q,a,o):[],r=Te(n),i=Ls(q,a,s,t),d=e?Ee(J,1).slice(0,7)>t.slice(0,7):D(me(S),7)>me(t),u=_(p),m=e?P(J,{month:"long",year:"numeric"}):`${P(me(S),{day:"numeric",month:"short"})} – ${P(D(me(S),6),{day:"numeric",month:"short",year:"numeric"})}`;return`
  <div class="section-heading period-heading">
    <div><p class="eyebrow">${e?"Resumen mensual":"Resumen semanal"}</p><h2>${m}</h2></div>
    <div class="period-controls">
      <button class="icon-button ghost" data-action="period-prev" data-monthly="${e?"1":"0"}" aria-label="Período anterior">${l("left")}</button>
      <button class="icon-button ghost" data-action="period-next" data-monthly="${e?"1":"0"}" aria-label="Período siguiente" ${d?"disabled":""}>${l("right")}</button>
    </div>
  </div>
  <div class="ledger-grid">
    ${ge("Registro",`${i.recorded}/${i.days}`,"días",i.days?`${i.pct}% de los días transcurridos`:"sin días transcurridos")}
    ${ge("Ánimo medio",r.metricCounts.mood?E(r.mood):"—","/ 5")}
    ${ge("Sueño habitual",r.metricCounts.sleep?E(r.sleepMedian):"—","h",r.metricCounts.sleep?`media ${E(r.sleep)} h`:"sin datos")}
    ${ge(u.focusLabel,r.metricCounts.study?E(r.study):"—","h")}
  </div>
  <p class="analytics-footnote">Solo días transcurridos.</p>
  <section class="card period-summary">
    <span class="soft-icon">${l("leaf")}</span>
    <div>
      <p>${No(r,e)}</p>
    </div>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Días destacados</h2>
      <div class="highlights" style="grid-template-columns:1fr 1fr">
        ${xt("Mejor día",r.best)}
        ${xt("Más sueño",r.mostSleep,"sleepHours")}
        ${xt("Más dedicación",r.mostStudy,"studyHours")}
        ${xt("Día más difícil",r.worst)}
      </div>
    </section>
    <section class="card">
      <h2>Distribución de estados</h2>
      <div style="margin-top:14px">
        ${Ha(N.map((h,g)=>({label:`${h.emoji} ${h.label}`,count:r.moods[g],total:r.count,color:h.color})))}
      </div>
    </section>
  </div>`}function xr(){const e=[["personal","user","Perfil"],["appearance","palette","Apariencia"],["custom","paper","Contenido"],["data","shield","Datos"]],t=e.some(([s])=>s===de)?de:"personal",a={personal:Cr,appearance:Lr,custom:Ar,data:Dr};return`${sa("","Ajustes")}
    <div class="settings-layout">
      <nav class="settings-subnav" role="tablist" aria-label="Ajustes">
        ${e.map(([s,o,n])=>`<button type="button" class="settings-subnav-item ${t===s?"active":""}"
          id="settings-tab-${s}" role="tab" aria-selected="${t===s}" aria-controls="settings-panel"
          tabindex="${t===s?"0":"-1"}" data-action="profile-tab" data-tab="${s}">
          <span class="settings-subnav-icon">${l(o)}</span>
          <span><strong>${c(n)}</strong></span>
        </button>`).join("")}
      </nav>
      <section id="settings-panel" class="settings-page-panel tab-panel-enter" role="tabpanel" aria-labelledby="settings-tab-${t}">
        ${a[t]()}
      </section>
    </div>`}function Se(e,t="Guardado."){try{p=be(e)}catch(a){w(a.message||"No se pudo guardar.",!0);return}k(),t&&w(t)}function Mr(e,t){if(!Z)return;const a=document.querySelector(`[data-${e}-row="${t}"]`);a&&(a.classList.add("is-fresh"),setTimeout(()=>a.classList.remove("is-fresh"),620))}function zt(e,t,a="label"){const s=document.querySelector(`[data-edit="${e}"][data-key="${t}"][data-field="${a}"]`);s&&(s.focus(),s.select&&s.select())}function ms(e=""){const t=ae(p);if(t.length>=Le){w(`Con ${Le} partes es más que suficiente.`,!0);return}const a=Ms.find(n=>n.label===e),s=a?a.label:String(document.querySelector("#new-part-label")?.value||"").trim().slice(0,60);if(!s){w("Escribe un título para la parte.",!0),document.querySelector("#new-part-label")?.focus();return}if(t.some(n=>n.label.toLowerCase()===s.toLowerCase())){w("Esa parte ya está en el diario.",!0);return}const o=Es("p");Se({parts:[...t,{key:o,label:s,hint:a?.hint||"",type:a?.type||"text"}]},"Parte añadida."),Mr("part",o),zt("part",o)}function qr(){const e=ue(p);if(e.length>=De){w(`No hacen falta más de ${De} contadores.`,!0);return}const t=String(document.querySelector("#new-counter-label")?.value||"").trim().slice(0,28);if(!t){w("El contador necesita un nombre.",!0),document.querySelector("#new-counter-label")?.focus();return}if(e.some(s=>s.label.toLowerCase()===t.toLowerCase())){w("Ya tienes un contador con ese nombre.",!0);return}const a=Es("c");Se({counters:[...e,{key:a,label:t,unit:String(document.querySelector("#new-counter-unit")?.value||"").trim().slice(0,14),goal:parseFloat(document.querySelector("#new-counter-goal")?.value)||0,min:0,max:Math.max(20,(parseFloat(document.querySelector("#new-counter-goal")?.value)||0)*3),step:1,icon:"gauge"}]},"Contador añadido."),zt("counter",a)}function Er(e){const t=e.dataset.edit,a=e.dataset.key,s=e.dataset.field;if(t==="part"){if(s==="label"&&!String(e.value).trim()){w("Sin título no puede estar: escribe uno o quítala.",!0),k();return}Se({parts:ae(p).map(o=>o.key===a?{...o,[s]:e.value}:o)},""),zt("part",a,s);return}if(t==="counter"){const n={counters:ue(p).map(r=>r.key!==a?r:s==="goal"?r.key==="water"?r:{...r,goal:parseFloat(e.value)||0}:{...r,[s]:e.value})};s==="goal"&&a==="water"&&(n.waterGoal=Math.min(25,Math.max(0,parseFloat(e.value)||0))||8),Se(n,""),zt("counter",a,s)}}function Ar(){const e=ae(p),t=ue(p);return`<div class="custom-grid">
    <section class="card custom-card">
      <div class="section-heading">
        <div><p class="eyebrow">${l("paper")} Partes del diario</p><h2>Qué quieres escribir cada día</h2></div>
        <span class="field-caption">${e.length} de ${Le}</span>
      </div>
      ${e.length?`<ul class="custom-list">
        ${e.map(a=>`<li class="custom-row custom-row--part" data-part-row="${a.key}">
          <input class="custom-input custom-input--label" value="${c(a.label)}" maxlength="60" aria-label="Título de la parte" data-edit="part" data-key="${a.key}" data-field="label">
          <input class="custom-input custom-input--hint" value="${c(a.hint)}" maxlength="140" placeholder="Ayuda" aria-label="Texto de ayuda" data-edit="part" data-key="${a.key}" data-field="hint">
          <div class="micro-seg">${yo.map(s=>`<button type="button" class="${a.type===s.id?"active":""}" data-action="part-type" data-key="${a.key}" data-val="${s.id}">${s.label}</button>`).join("")}</div>
          <button type="button" class="icon-button ghost custom-remove" data-action="remove-part" data-key="${a.key}" aria-label="Quitar ${c(a.label)}">${l("close")}</button>
        </li>`).join("")}
      </ul>`:'<p class="custom-none">Sin partes propias.</p>'}
      <div class="custom-add">
        <input id="new-part-label" class="custom-input" maxlength="60" placeholder="Título de la parte…" aria-label="Título de la parte nueva">
        <button type="button" class="button outline" data-action="add-part">${l("plus")} Añadir parte</button>
      </div>
      ${e.length<Le?`<div class="custom-presets">
        <span class="custom-presets-label">Sugerencias</span>
        ${Ms.filter(a=>!e.some(s=>s.label===a.label)).map(a=>`<button type="button" class="custom-preset" data-action="part-preset" data-val="${c(a.label)}">${c(a.label)}</button>`).join("")}
      </div>`:""}
    </section>

    <section class="card custom-card">
      <div class="section-heading">
        <div><p class="eyebrow">${l("gauge")} Contadores</p><h2>Qué cuentas</h2></div>
        <span class="field-caption">${t.length} de ${De}</span>
      </div>
      <ul class="custom-list custom-list--counters">
        <li class="custom-head"><span>Nombre</span><span>Unidad</span><span>Meta</span><span>Icono</span><span></span></li>
        ${t.map(a=>`<li class="custom-row custom-row--counter" data-counter-row="${a.key}">
          <input class="custom-input custom-input--label" value="${c(a.label)}" maxlength="28" aria-label="Nombre del contador" data-edit="counter" data-key="${a.key}" data-field="label">
          <input class="custom-input custom-input--unit" value="${c(a.unit)}" maxlength="14" aria-label="Unidad" data-edit="counter" data-key="${a.key}" data-field="unit">
          <input class="custom-input custom-input--goal" type="number" min="0" max="9999" step="1" value="${ka(a,p)||""}" placeholder="—" aria-label="Meta diaria" data-edit="counter" data-key="${a.key}" data-field="goal">
          <select class="custom-select" aria-label="Icono" data-edit="counter" data-key="${a.key}" data-field="icon">
            ${xs.map(s=>`<option value="${s}" ${a.icon===s?"selected":""}>${s}</option>`).join("")}
          </select>
          <button type="button" class="icon-button ghost custom-remove" data-action="remove-counter" data-key="${a.key}" aria-label="Quitar ${c(a.label)}">${l("close")}</button>
        </li>`).join("")}
      </ul>
      <div class="custom-add custom-add--counter">
        <input id="new-counter-label" class="custom-input" maxlength="28" placeholder="Nombre" aria-label="Nombre del contador nuevo">
        <input id="new-counter-unit" class="custom-input custom-input--unit" maxlength="14" placeholder="unidad" aria-label="Unidad del contador nuevo">
        <input id="new-counter-goal" class="custom-input custom-input--goal" type="number" min="0" max="9999" step="1" placeholder="meta" aria-label="Meta diaria del contador nuevo">
        <button type="button" class="button outline" data-action="add-counter">${l("plus")} Añadir contador</button>
      </div>
      <p class="custom-foot">
        <button type="button" class="text-button" data-action="reset-counters">${l("refresh")} Dejar los cuatro de siempre</button>
        <span>El historial se conserva al quitar un contador.</span>
      </p>
    </section>
  </div>`}function Cr(){const e=_(p),t=new Set(x.map(s=>s.name.toLowerCase())),a=new Set(p.interests||[]);return`<form id="setup-page-form" class="setup-page-grid">
    <section class="card">
      <h2>Perfil</h2>
      <div class="setup-name-age-row">
        <div class="setup-field">
          <label for="sp-name">${l("user")} Tu nombre o apodo</label>
          <input id="sp-name" name="name" maxlength="50" placeholder="Tu nombre…" value="${c(p.name)}">
        </div>
        <div class="setup-field">
          <label for="sp-age">Tu edad</label>
          <div class="age-input-wrap">
            <input id="sp-age" name="age" type="number" min="10" max="110" step="1" placeholder="Ej. 20" value="${p.age??""}">
            <span>años</span>
          </div>
        </div>
      </div>

      <div class="setup-field">
        <label>Grupo de edad</label>
        <div class="age-group-grid" id="sp-age-groups">
          ${lt.map(s=>`
            <label class="age-group-card ${e.group.id===s.id?"is-selected":""}" data-age-group-card="${s.id}">
              <input type="radio" name="ageGroup" value="${s.id}" ${e.group.id===s.id?"checked":""}>
              <span class="age-range-badge">${c(s.label)}</span>
              <strong>${c(s.title)}</strong>
              <small>${c(s.desc)}</small>
            </label>
          `).join("")}
        </div>
      </div>

      <div class="setup-field">
        <label for="sp-motto">Frase de pie de página</label>
        <input id="sp-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${c(p.motto)}">
      </div>
    </section>

    <section class="card">
      <h2>Intereses y estilo</h2>
      <div class="interests-grid">
        ${It.map(s=>`
          <label class="interest-chip">
            <input type="checkbox" name="interests" value="${s.id}" ${a.has(s.id)?"checked":""}>
            <span>${l(s.icon)} ${c(s.label)}</span>
          </label>
        `).join("")}
      </div>

      <div class="two-columns" style="margin-top:16px">
        <div class="setup-field" style="margin-top:0">
          <label>Momento habitual</label>
          <div class="ritual-stack">
            ${ct.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="ritual" value="${s.id}" ${(p.ritual||"night")===s.id?"checked":""}>
                <span class="purpose-icon">${l(s.icon)}</span>
                <div><strong>${c(s.label)}</strong></div>
              </label>
            `).join("")}
          </div>
        </div>
        <div class="setup-field" style="margin-top:0">
          <label>Tono de las frases</label>
          <div class="ritual-stack">
            ${dt.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="tone" value="${s.id}" ${(p.tone||"warm")===s.id?"checked":""}>
                <div><strong>${c(s.label)}</strong><small>${c(s.desc)}</small></div>
              </label>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="card">
      <h2>Metas y hábitos</h2>
      <div class="age-adaptation-callout" id="sp-adaptation-callout" style="margin-top:12px">
        ${l("compass")}
        <div>
          <strong>${c(e.group.title)} · ${c(e.group.label)}</strong>
          <p>Sueño ${E(e.sleepRecommended)} h · dedicación ${E(e.studyRecommended)} h.</p>
        </div>
      </div>
      <div class="goals-setup-grid">
        <div class="setup-field">
          <label for="sp-sleep">${l("moon")} Meta de sueño · h</label>
          <input id="sp-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${p.sleepGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-study">${l("study")} Meta de dedicación · h</label>
          <input id="sp-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${p.studyGoal}">
        </div>
      </div>
      <div class="setup-field" style="margin-top:16px">
        <label>Hábitos sugeridos</label>
        <div class="tag-picker" id="sp-suggested-habits">
          ${e.suggestedHabits.map(s=>{const o=t.has(s.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${c(s)}" ${o?"checked":""}><span>${o?"✓ ":"+ "}${c(s)}</span></label>`}).join("")}
        </div>
      </div>
      <div class="setup-field" style="margin-top:18px">
        <label>${l("quote")} Frases guardadas · ${(p.savedQuotes||[]).length}</label>
        ${(p.savedQuotes||[]).length?`
          <div class="saved-quotes-list">
            ${p.savedQuotes.map((s,o)=>`
              <div class="saved-quote-item">
                <span>«${c(s)}»</span>
                <button type="button" class="icon-button ghost" data-action="remove-saved-quote" data-index="${o}" aria-label="Quitar frase">${l("close")}</button>
              </div>
            `).join("")}
          </div>
        `:""}
        <div class="habit-add" style="margin-top:10px">
          <label class="sr-only" for="new-custom-quote">Frase propia</label>
          <input id="new-custom-quote" maxlength="240" placeholder="Añade una frase propia…" aria-label="Frase propia para tu cuaderno">
          <button type="button" class="icon-button" data-action="add-custom-quote" aria-label="Añadir frase">${l("plus")}</button>
        </div>
      </div>
    </section>

    <div class="save-area" style="grid-column:1/-1">
      <button type="submit" class="button solid save-button">${l("check")} Guardar perfil</button>
    </div>
  </form>`}function Lr(){return`<form id="appearance-form" class="appearance-page">
    <div class="appearance-settings-grid">
      <section class="card">
        <div class="section-heading">
          <div><p class="eyebrow">${l("palette")} Apariencia</p><h2>Tu tema</h2></div>
        </div>
        <div class="theme-picker-grid">
          ${ee.map(e=>`
            <label class="theme-card">
              <input type="radio" name="theme" value="${e.id}" ${p.theme===e.id?"checked":""}>
              <div class="theme-card-top">
                <span class="theme-favicon-preview">${xe(e.id,p)}</span>
                <div class="theme-swatches">${e.colors.map(t=>`<i style="background:${t}"></i>`).join("")}</div>
              </div>
              <strong>${c(e.name)}</strong>
              <small>${c(e.desc)}</small>
            </label>
          `).join("")}
        </div>
      </section>

      <section class="card">
        <div class="section-heading">
          <div><h2>Preferencias</h2></div>
        </div>
        <div class="setup-toggles">
          <label class="toggle-row">
            <input type="checkbox" name="sidebarCollapsed" ${W?"checked":""}>
            <span><strong>Menú compacto</strong><small>Solo iconos en escritorio · Ctrl+B.</small></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="showDailyWord" ${p.showDailyWord!==!1?"checked":""}>
            <span><strong>Palabra del día</strong></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="showDailyTip" ${p.showDailyTip!==!1?"checked":""}>
            <span><strong>Sugerencia diaria</strong></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="reduceMotion" ${p.reduceMotion?"checked":""}>
            <span><strong>Reducir animaciones</strong></span>
          </label>
        </div>
      </section>
    </div>
    <div class="save-area">
      <button type="submit" class="button solid save-button">${l("check")} Guardar apariencia</button>
    </div>
  </form>`}function Dr(){return`
  <div class="two-columns">
    <section class="card">
      <h2>Exportar copia</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Entradas, hábitos y perfil en un JSON.</p>
      <button class="button solid" data-action="export">${l("download")} Descargar JSON</button>
    </section>
    <section class="card">
      <h2>Importar copia</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Elige un JSON y confirma la importación.</p>
      <button class="button outline" data-action="import">${l("upload")} Seleccionar archivo</button>
      <input type="file" id="import-file" accept=".json,application/json" hidden>
    </section>
  </div>
  <section class="card">
    <h2>Privacidad local</h2>
    <ul class="privacy-list">
      <li>Tus datos se quedan en este navegador.</li>
      <li>Sin cuentas ni envíos a terceros.</li>
      <li>Disponible sin conexión tras la primera carga.</li>
    </ul>
  </section>
  <section class="card danger-zone">
    <div>
      <h2>Borrar todos los datos</h2>
      <p>Borra entradas, hábitos y ajustes de este navegador.</p>
    </div>
    <button class="button danger" data-action="clear">${l("trash")} Borrar todo</button>
  </section>`}function Tr(e){const t=q.find(s=>s.date===e),a=_(p);return t?{...t}:{date:e,mood:3,sleepHours:p.sleepGoal||a.sleepRecommended||7.5,studyHours:0,energy:null,stress:null,bestOfDay:"",differentToday:"",generalDay:"Registro rápido desde la rutina.",wordOfDay:"",capsule:"",gratitude:["","",""],tomorrow:"",goals:[],tags:[],counters:{},habits:{}}}function _e(e,t){if(e>v())throw new Error("Ese día todavía no ha llegado.");q=Is({...Tr(e),...t})}function ya(){return[...document.querySelectorAll("#routine-goals .task-input")].map(e=>e.value.trim())}function ye(){const e=document.querySelector("#routine-tomorrow");if(!e)return;const t=ya().filter(Boolean);try{_e(S,{tomorrow:e.value.trim(),goals:t})}catch(a){w(a.message||"No se pudo guardar la lista.",!0)}}function jr(){const e=document.querySelector("#routine-tomorrow");e&&(e.addEventListener("change",ye),e.addEventListener("input",()=>je("manana",ye,500)),document.querySelectorAll("#routine-goals .task-input").forEach(t=>{t.addEventListener("change",ye),t.addEventListener("input",()=>je("manana-tarea",ye,600)),t.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),ye(),k()),a.key==="Escape"&&k()})}))}let hs=null;function Hr(e,t,a){const s=e.closest(".counter-row"),o=ue(p).find(i=>i.key===t)||{key:t},n=document.querySelector(`#hint-${t}`);n&&(n.textContent=Ut(t,a,o)),e.classList.remove("num-bump"),e.offsetWidth,e.classList.add("num-bump");const r=ka(o,p);if(r){const i=s?.querySelector(".counter-goal-pill"),d=s?.querySelector(".counter-progress i");i&&(i.textContent=`Meta: ${a}/${r}`,i.classList.toggle("met",a>=r)),d&&(d.style.width=`${Math.min(100,Math.round(a/r*100))}%`)}}function Or(){const e=q.find(a=>a.date===S),t={...e?.counters||{}};for(const a of ue(p)){const s=document.querySelector(`[name="counter_${a.key}"]`);(s||a.key in t)&&(t[a.key]=s?parseFloat(s.value)||0:Number(e?.counters?.[a.key])||0)}try{_e(S,{counters:t})}catch(a){w(a.message||"No se pudo guardar el contador.",!0)}}function gs(e,t){const a=String(t||"").trim().slice(0,40),s=x.find(o=>o.id===e);if(s){if(!a){w("El hábito necesita un nombre.",!0);return}if(a.toLowerCase()!==s.name.toLowerCase()&&x.some(o=>o.name.toLowerCase()===a.toLowerCase())){w("Ya tienes un hábito con ese nombre.",!0);return}a!==s.name&&(x=Pt({...s,name:a}),k(),w("Hábito renombrado"))}}function Nr(e){if(!Z)return;const t=document.querySelector(`.habit-toggle[data-habit="${e}"]`);t&&(t.classList.add("is-flashed"),setTimeout(()=>t.classList.remove("is-flashed"),700));const a=document.querySelector(`.momentum-cell[data-habit="${e}"]`);a&&(a.classList.add("is-flashed"),setTimeout(()=>a.classList.remove("is-flashed"),700))}function ro(){const e=Qt(B).some(t=>t.seen!==!0);document.querySelectorAll(".nav-dot").forEach(t=>{t.hidden=!e,t.classList.toggle("is-new",e)}),document.querySelectorAll('.tabbar-item[data-view="thoughts"]').forEach(t=>{t.classList.toggle("has-new",e)})}function $a(e){const t=B.find(n=>n.id===e);if(!zs(t,v()))return;t.status==="returned"&&t.seen!==!0&&(B=Be(e,{seen:!0}),ro());const a=t.reply?"":Na(fe.reply(e))?.text||"",s=Xe(Tn({...t,replyDraft:a},v(),p));Br(s);const o=()=>{s.close(),k()};s.onclick=n=>{const r=n.target.closest("[data-modal]")?.dataset.modal;if(!r){n.target===s&&s.close();return}if(r==="close"){o();return}if(r==="reply"){const i=(s.querySelector("#bottle-reply")?.value||"").trim();if(!i){w("Escribe primero lo que quieres contestarte.",!0);return}bt(`respuesta:${e}`),B=Be(e,{reply:i,seen:!0,repliedAt:new Date().toISOString()}),Ze(fe.reply(e)),s.close(),k(),$a(e),w("Contestada.");return}if(r==="reply-clear"){bt(`respuesta:${e}`),Ze(fe.reply(e)),B=Be(e,{reply:""}),s.close(),k(),$a(e);return}if(r==="keep"){const i=!t.kept;B=Be(e,{kept:i,keptOn:i?v():null,seen:!0}),o(),w(i?"Anclada.":"Desanclada.");return}if(r==="to-entry"){try{Pr(t),o(),w("Copiado a la entrada de hoy.")}catch(i){w(i.message||"No se pudo copiar.",!0)}return}if(r==="recast"){B=Gs(e),o(),w("Otra vez fuera.");return}}}function Pr(e){const t=v(),a=q.find(n=>n.date===t),s=`Del mar · botella del ${P(e.castAt,{day:"numeric",month:"long"})}: «${e.text}»`,o=[a?.generalDay,s].filter(Boolean).join(`

`);_e(t,{generalDay:o,capsule:a?.capsule||String(e.text).slice(0,240),tags:[...new Set([...a?.tags||[],"Pensamiento"])].slice(0,20)}),B=Be(e.id,{kept:!0,keptOn:t,seen:!0}),S=t,H="diary",ne()}function Fr(e){if((document.querySelector("#ocean-fx")||document.body)===document.body){const r=document.createElement("div");r.id="ocean-fx",r.className="ocean-fx",document.body.appendChild(r)}const a=document.querySelector("#ocean-fx"),o=(document.querySelector(".thought-vault")||document.querySelector("#bottle-form"))?.getBoundingClientRect(),n=document.createElement("div");n.className="splash-wrap",n.innerHTML=jn(e),o&&(n.style.setProperty("--to-x",`${Math.round(o.left+o.width*.5)}px`),n.style.setProperty("--to-y",`${Math.round(o.top+o.height*.42)}px`)),a.appendChild(n),document.documentElement.classList.add("is-casting"),setTimeout(()=>document.documentElement.classList.remove("is-casting"),1400),setTimeout(()=>n.remove(),Z?1500:60)}function Br(e){const t=e.querySelector(".bottle-modal");!t||!Z||(t.classList.add("is-uncorking"),setTimeout(()=>t.classList.remove("is-uncorking"),1100))}function zr(e){const t=new FormData(e),a=(t.get("text")||"").toString().trim();if(a.length<2){w("Escribe algo antes de soltar la botella.",!0);return}const s=t.get("mood"),o="breeze";try{const n=crypto.randomUUID();B=on({id:n,text:a,mood:s?+s:null,sea:o,castAt:v()});const r=B.find(i=>i.id===n);bt("botella"),Ze(fe.bottle()),Ye={text:"",mood:null,sea:o},V="sea",Fr(r||{}),X("saved"),setTimeout(()=>k(),Z?1150:0),w("Ya está fuera.")}catch(n){w(n.message||"No se pudo echar la botella al mar.",!0)}}function Rr(){const e=document.querySelector("#bottle-form");if(!e)return;const t=e.querySelector("#bottle-text"),a=()=>{const n=e.querySelector('[name="mood"]:checked');Ye={text:t?.value||"",mood:n?+n.value:null,sea:"breeze"}},s=e.querySelector('button[type="submit"]'),o=()=>{s&&(s.disabled=!(t?.value||"").trim())};a(),o(),t?.addEventListener("input",()=>{a(),o()}),e.addEventListener("change",()=>{a(),o()}),document.activeElement===t&&t.value&&t.setSelectionRange(t.value.length,t.value.length),e.addEventListener("submit",n=>{n.preventDefault(),zr(e)})}function Ir(e){B.find(a=>a.id===e)&&Rt({title:"¿Romper esta botella?",text:"El pensamiento se borrará de este navegador. No se puede deshacer.",confirmLabel:"Romperla",danger:!0}).then(a=>{a&&(B=nn(e),k(),w("Rota."))})}const Gr=["generalDay","bestOfDay","differentToday","capsule","wordOfDay","tomorrow","gratitude0","gratitude1","gratitude2","tagCustom"];function oa(){return[...Gr,...ae(p).map(e=>`part_${e.key}`)]}const ce=new Map;let wa=!1;function bt(e){const t=ce.get(e);t&&(clearTimeout(t),ce.delete(e))}function je(e,t,a=460){clearTimeout(ce.get(e)),ce.set(e,setTimeout(()=>{ce.delete(e),t()},a))}function Ie(e,t){ce.has(e)&&(clearTimeout(ce.get(e)),ce.delete(e),t())}function ft(){return fe.entry(S)}function io(e){const t={};if(!e)return t;for(const r of oa()){const i=e.querySelector(`[name="${r}"]`);i&&typeof i.value=="string"&&(t[r]=i.value)}for(const r of["mood","energy","stress"]){const i=e.querySelector(`[name="${r}"]:checked`);i&&(t[r]=Number(i.value))}for(const r of["sleepHours","studyHours"]){const i=e.querySelector(`[name="${r}"]`);i&&i.value!==""&&(t[r]=Number(i.value))}const a=[...e.querySelectorAll('[name="tags"]:checked')].map(r=>r.value);a.length&&(t.tags=a);const s={};for(const r of e.querySelectorAll('[name^="counter_"]'))s[r.name.slice(8)]=Number(r.value)||0;Object.keys(s).length&&(t.counters=s);const o={};for(const r of e.querySelectorAll('[name^="habit_"]'))o[r.name.slice(6)]=r.checked;Object.keys(o).length&&(t.habits=o);const n=[...e.querySelectorAll('[name="goal"]')].map(r=>r.value).filter(r=>r.trim());return n.length&&(t.goals=n),t}function Ur(e){const t=q.find(o=>o.date===S);if(!t)return!Object.keys(e).length;for(const o of oa()){if(!(o in e))continue;let n="";if(o.startsWith("gratitude"))n=(t.gratitude||[])[+o.slice(9)]||"";else{if(o==="tagCustom")continue;n=t[o]??""}if(String(e[o]??"").trim()!==String(n).trim())return!1}for(const o of["mood","energy","stress","sleepHours","studyHours"]){if(e[o]===void 0)continue;const n=t[o];if(n==null){if(Number(e[o])!==0&&e[o]!==3)return!1;continue}if(Number(e[o])!==Number(n))return!1}const a=t.counters||{};for(const[o,n]of Object.entries(e.counters||{}))if(Number(n)!==Number(a[o]||0))return!1;const s=t.habits||{};for(const[o,n]of Object.entries(e.habits||{}))if(!!n!=!!s[o])return!1;return!((t.tags||[]).slice().sort().join("|")!==(e.tags||[]).slice().sort().join("|")||(t.goals||[]).join("|")!==(e.goals||[]).join("|"))}function za(){const e=document.querySelector("#diary-form");if(!e)return;const t=io(e);if(Ur(t)){const s=Ze(ft());X(s||ht==="typing"?"saved":ht);return}const a=ea(ft(),t);a&&!a.ok?X("error"):a&&X("draft")}function Ra(){const e=document.querySelector("#bottle-form");if(!e)return;const t=ea(fe.bottle(),{text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"});t&&!t.ok&&X("error")}function _r(e,t){!t||!document.contains(t)||ea(fe.reply(e),{text:t.value||""})}function bs(){X("typing"),je("entrada",za,420),je("autosave",()=>na({silent:!0}),2400)}function fs(){const e=document.querySelector("#bottle-form");if(!e)return;Ye={text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze"},X("typing"),je("botella",Ra,380)}function Qr(){const e=document.querySelector("#setup-page-form");if(!e)return;const t={};for(const s of e.querySelectorAll('textarea,input[type="text"],input:not([type])'))s.name&&(t[s.name]=s.value);const a=e.querySelector("#new-custom-quote");a?.value&&(t.customQuote=a.value),ea(fe.setup(),t)}function Wr(){je("perfil",Qr,700)}function Zr(){O.addEventListener("input",e=>{const t=e.target;if(!(!t||!t.closest)){if(t.closest("#diary-form")){bs();return}if(t.closest("#bottle-form")){fs();return}if(t.closest("#setup-page-form")){Wr();return}if(t.id==="bottle-reply"&&t.closest("#modal")){const a=t.closest("[data-modal-bottle]")?.dataset.modalBottle;a&&je(`respuesta:${a}`,()=>_r(a,t),360)}}}),O.addEventListener("change",e=>{const t=e.target;if(!(!t||!t.closest)){if(t.dataset?.edit){Er(t);return}t.closest("#diary-form")&&bs(),t.closest("#bottle-form")&&fs()}}),window.addEventListener("pagehide",Sa),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Sa()})}function Sa(){Ie("entrada",za),Ie("botella",Ra),Ie("manana",ye),Ie("manana-tarea",ye);for(const[e,t]of[...ce.entries()])e.startsWith("respuesta:")&&(clearTimeout(t),ce.delete(e));document.querySelector("#diary-form")&&!wa&&ht==="draft"&&na({silent:!0,final:!0})}function Vr(){Yr()}function vs(e,t,a){if(a==null)return;const s=e.querySelector(`[name="${t}"]`);if(s){if(s.type==="radio"){const o=e.querySelector(`[name="${t}"][value="${a}"]`);o&&(o.checked=!0);return}s.value=Array.isArray(a)?a.join(`
`):a}}function Yr(){const e=document.querySelector("#diary-form");if(!e)return;const t=q.find(s=>s.date===S);if(!On(ft(),t?.updatedAt))return;const a=Na(ft());if(a){for(const s of oa())vs(e,s,a[s]);for(const s of["mood","energy","stress","sleepHours","studyHours"])a[s]!==void 0&&vs(e,s,a[s]);if(Array.isArray(a.tags)&&e.querySelectorAll('[name="tags"]').forEach(s=>{s.checked=a.tags.includes(s.value)}),a.counters)for(const[s,o]of Object.entries(a.counters)){const n=e.querySelector(`[name="counter_${s}"]`);n&&(n.value=o)}if(a.habits)for(const[s,o]of Object.entries(a.habits)){const n=e.querySelector(`[name="habit_${s}"]`);n&&(n.checked=!!o)}Array.isArray(a.goals)&&[...e.querySelectorAll('[name="goal"]')].forEach((o,n)=>{a.goals[n]!==void 0&&(o.value=a.goals[n])}),e.dispatchEvent(new Event("input",{bubbles:!0})),X("draft")}}function Kr(){if(Ye.text)return;const e=Na(fe.bottle());e?.text&&(Ye={text:e.text,mood:e.mood||null,sea:e.sea||"breeze"})}function Jr(e){return!!(oa().map(a=>String(e[a]||"")).join(" ").trim().split(/\s+/).filter(Boolean).length>3||Object.values(e.counters||{}).some(a=>Number(a)>0)||Object.values(e.habits||{}).some(Boolean)||(e.tags||[]).length||(e.gratitude0||"").trim()||(e.gratitude1||"").trim()||(e.gratitude2||"").trim())}function na({silent:e=!1,final:t=!1}={}){const a=document.querySelector("#diary-form");if(!a||Ve)return!1;const s=io(a);if(e&&!Jr(s))return!1;wa=!0,bt("entrada"),bt("autosave");try{const o=ei(Ia(a));if(q=Is(o),Ze(ft()),X(e?"autosaved":"saved"),e){if(t)try{localStorage.setItem("diario.lastflush.v1",JSON.stringify({at:new Date().toISOString(),date:S}))}catch{}}else{k(),oi(),w("Día guardado"),document.querySelector(".daily-summary")?.classList.add("reveal");const n=ja(o);n.triggered&&n.level==="high"&&setTimeout(()=>uo("help"),550)}return!0}catch(o){return X("error"),e||w(o.message||"No se ha podido guardar.",!0),!1}finally{wa=!1}}function X(e){ht=e}function Xr(e){const t=String(e||"").trim();return t?t.split(/\s+/).length:0}function Ia(e){const t=new FormData(e),a=q.find(T=>T.date===S),s=_(p),o=(t.get("tagCustom")||"").toString().trim(),n=[...new Set([...t.getAll("tags").map(T=>T.toString().trim()),o].filter(Boolean))],r={...a?.counters||{}};for(const T of ue(p)){const U=e.querySelector(`[name="counter_${T.key}"]`);r[T.key]=U?parseFloat(U.value)||0:Number(a?.counters?.[T.key])||0}const i={...a?.parts||{}};for(const T of ae(p)){const U=e.querySelector(`[name="part_${T.key}"]`);if(!U)continue;const b=U.value.trim();b?i[T.key]=b:delete i[T.key]}const d={},u=[...e.querySelectorAll('[name^="habit_"]')];for(const T of x)d[T.id]=u.length?!!e.querySelector(`[name="habit_${T.id}"]`)?.checked:!!a?.habits?.[T.id];const m=+t.get("mood")||a?.mood||3,h=t.get("sleepHours"),g=h!==null&&h!==""?parseFloat(h):p.sleepGoal||s.sleepRecommended||7.5,y=t.get("studyHours"),f=y!==null&&y!==""?parseFloat(y):0,A=(t.get("bestOfDay")||"").toString().trim(),F=(t.get("differentToday")||"").toString().trim(),Q=(t.get("capsule")||"").toString().trim(),z=(t.get("wordOfDay")||"").toString().trim();let L=(t.get("generalDay")||"").toString().trim();return L||(L=A||Q||(z?`Palabra del día: ${z}.`:`Día ${N[m-1].label.toLowerCase()}.`)),{id:a?.id,date:S,mood:m,sleepHours:g,studyHours:f,energy:t.get("energy")?+t.get("energy"):null,stress:t.get("stress")?+t.get("stress"):null,bestOfDay:A,differentToday:F,generalDay:L,wordOfDay:z,capsule:Q,gratitude:[0,1,2].map(T=>(t.get(`gratitude${T}`)||"").toString().trim()),tomorrow:t.has("tomorrow")?(t.get("tomorrow")||"").toString().trim():a?.tomorrow||"",goals:e.querySelector('[name="goal"]')?t.getAll("goal").map(T=>T.toString().trim()).filter(Boolean):a?.goals||[],tags:n,counters:r,parts:i,habits:d,createdAt:a?.createdAt}}function ei(e){for(const[t,a]of[["sleepHours","horas de sueño"],["studyHours","horas de dedicación"]]){const s=e[t];if(!Number.isFinite(s)||s<0||s>24)throw new Error(`Escribe unas ${a} válidas, entre 0 y 24.`)}return e}function ys(e){if(!e)return;const t=Ia(e),a=document.querySelector("#hero-words-chip");if(a){const i=$t(t),d=i?`${i} ${i===1?"palabra":"palabras"} escritas`:"todavía sin escribir";a.textContent!==d&&(a.textContent=d),a.classList.toggle("pending",!i)}const s=ja(t),o=s.triggered&&s.level==="high"&&!ta,n=o?`high:${(s.reasons||[]).length}`:"none",r=document.querySelector("#crisis-alert-slot");r&&r.dataset.sig!==n&&(r.dataset.sig=n,r.innerHTML=o?Ws(s,p):"")}function lo(e,t){if(!e)return;const a=e.querySelector('[name="age"]'),s=()=>{const o=new FormData(e),n=o.get("age"),r=n?Zt(n,o.get("ageGroup")||"young"):o.get("ageGroup")||"young",i=o.getAll("interests").map(String);e.querySelectorAll("[data-age-group-card]").forEach(y=>{const f=y.dataset.ageGroupCard===r;y.classList.toggle("is-selected",f);const A=y.querySelector('input[type="radio"]');A&&n&&(A.checked=f)});const d=_({age:n||null,ageGroup:r,interests:i}),u=e.querySelector('[name="sleepGoal"]'),m=e.querySelector('[name="studyGoal"]');u&&n&&(u.value=d.sleepRecommended),m&&n&&(m.value=d.studyRecommended);const h=e.querySelector(`#${t}-adaptation-callout`);h&&(h.innerHTML=`
        ${l("compass")}
        <div>
          <strong>${c(d.group.title)} · ${c(d.group.label)}</strong>
          <p>Sueño ${E(d.sleepRecommended)} h · dedicación ${E(d.studyRecommended)} h.</p>
        </div>`);const g=e.querySelector(`#${t}-suggested-habits`);if(g){const y=new Set(x.map(f=>f.name.toLowerCase()));g.innerHTML=d.suggestedHabits.map(f=>{const A=y.has(f.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${c(f)}" ${A?"checked":""}><span>${A?"✓ ":"+ "}${c(f)}</span></label>`}).join("")}};a&&a.addEventListener("input",s),e.querySelectorAll('[name="ageGroup"], [name="interests"]').forEach(o=>{o.addEventListener("change",s)})}function ti(){const e=document.querySelector("#setup-page-form");e&&(lo(e,"sp"),e.addEventListener("submit",s=>{s.preventDefault(),co(e),k(),w("Perfil actualizado")}));const t=document.querySelector("#appearance-form");t&&(t.addEventListener("change",s=>{s.target.name==="theme"&&Me(s.target.value,{...p,theme:s.target.value})}),t.addEventListener("submit",s=>{s.preventDefault(),ai(t)}));const a=document.querySelector("#diary-form");a&&(a.addEventListener("submit",s=>{s.preventDefault(),!Ve&&na()}),a.addEventListener("input",s=>{const o=s.target;if(o.name==="mood"){const r=N[+o.value-1];a.style.setProperty("--active-mood",r.color)}if(o.name==="sleepHours"||o.name==="studyHours"){const r=parseFloat(o.value);a.querySelectorAll(`[data-action="quick-number"][data-target="${o.name}"]`).forEach(i=>{i.classList.toggle("active",parseFloat(i.dataset.val)===r)})}if(o.name==="energy"){const r=document.querySelector("#energy-hint");r&&(r.textContent=Ss[+o.value]+".")}if(o.name==="stress"){const r=document.querySelector("#stress-hint");r&&(r.textContent=ks[+o.value]+".")}if(o.name?.startsWith("counter_")){const r=o.name.slice(8),i=parseFloat(o.value)||0,d=document.querySelector(`#hint-${r}`);if(d&&(d.textContent=Ut(r,i)),r==="water"){const u=p.waterGoal||8,m=o.closest(".counter-row"),h=m?.querySelector(".counter-goal-pill"),g=m?.querySelector(".counter-progress i");h&&(h.textContent=`Meta: ${i}/${u}`,h.classList.toggle("met",i>=u)),g&&(g.style.width=`${Math.min(100,Math.round(i/u*100))}%`)}}const n=o.closest(".writing-field");if(n){const r=n.querySelector(".word-count");r&&(r.textContent=`${Xr(o.value)} palabras`)}ys(a)}),a.addEventListener("keydown",s=>{if(s.target.id==="tagCustom"&&s.key==="Enter"){s.preventDefault();const o=s.target.value.trim();if(o){const n=a.querySelector(".tag-picker .tag-chip.ghost");n&&n.insertAdjacentHTML("beforebegin",`<label class="tag-chip"><input type="checkbox" name="tags" value="${c(o)}" checked><span>${c(o)}</span></label>`),s.target.value="",ys(a)}}}),si())}function ai(e){p=be({theme:e.querySelector('[name="theme"]:checked')?.value||p.theme,sidebarCollapsed:!!e.querySelector('[name="sidebarCollapsed"]')?.checked,showDailyWord:!!e.querySelector('[name="showDailyWord"]')?.checked,showDailyTip:!!e.querySelector('[name="showDailyTip"]')?.checked,reduceMotion:!!e.querySelector('[name="reduceMotion"]')?.checked}),W=!!p.sidebarCollapsed,Ge(),Me(p.theme,p),k(),w("Apariencia actualizada")}function co(e){const t=new FormData(e),a=t.getAll("suggestedHabits").map(m=>m.toString().trim()).filter(Boolean),s=new Set(x.map(m=>m.name.toLowerCase()));for(const m of a)!s.has(m.toLowerCase())&&x.length<30&&(x=Pt({name:m}),s.add(m.toLowerCase()));const o=e.querySelector('[name="sidebarCollapsed"]')!==null,n=t.get("age"),r=n!==null&&n!==""?parseInt(n.toString(),10):null,i=r?Zt(r,t.get("ageGroup")||"young"):t.get("ageGroup")||p.ageGroup,d=t.getAll("interests").map(m=>m.toString().trim()).filter(Boolean);p=be({completed:!0,name:t.get("name")||"",age:Number.isFinite(r)?r:null,ageGroup:i,interests:d,ritual:t.get("ritual")||p.ritual,tone:t.get("tone")||p.tone,purpose:t.get("purpose")||p.purpose,motto:t.get("motto")||"Un día a la vez.",theme:t.get("theme")||p.theme,sleepGoal:parseFloat(t.get("sleepGoal"))||7.5,studyGoal:parseFloat(t.get("studyGoal"))??2,showDailyWord:e.querySelector('[name="showDailyWord"]')?.checked??p.showDailyWord,showDailyTip:e.querySelector('[name="showDailyTip"]')?.checked??p.showDailyTip,sidebarCollapsed:o?!!e.querySelector('[name="sidebarCollapsed"]')?.checked:p.sidebarCollapsed,reduceMotion:e.querySelector('[name="reduceMotion"]')?.checked??p.reduceMotion}),W=!!p.sidebarCollapsed,Ge(),Me(p.theme,p)}function si(){const e=document.querySelector("#diary-form");if(e)for(const t of ue(p)){const a=e.querySelector(`[name="counter_${t.key}"]`),s=document.querySelector(`#hint-${t.key}`);a&&s&&a.value!==""&&(s.textContent=Ut(t.key,parseFloat(a.value)||0,t))}}function ua(e=""){const t=document.querySelector("#inspiration-slot");if(!t)return;const a=document.querySelector("#diary-form"),s=a?Ia(a):q.find(o=>o.date===S);if(t.innerHTML=Zs(S,Pa,Fa,p,s,s?.wordOfDay||""),e){const o=t.querySelector(e);o&&(o.classList.remove("card-flip-in"),o.offsetWidth,o.classList.add("card-flip-in"))}}function $s(){const e=document.querySelector("#quote-slot");if(!e)return;e.innerHTML=Qs(S,Ba,p);const t=e.querySelector(".quote-card");t&&(t.classList.remove("card-flip-in"),t.offsetWidth,t.classList.add("card-flip-in"))}function oi(){const e=document.querySelector("#stamp");if(!e)return;const t=p.name?`Cuaderno de ${c(p.name)}`:"Guardado";e.innerHTML=`<div class="stamp-face">${t}<small>${P(S)}</small></div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function w(e,t=!1){const a=document.querySelector("#toast");a&&(a.innerHTML=`<div class="${t?"error":""}">${l(t?"close":"check")}<span>${c(e)}</span></div>`,a.classList.add("show"),setTimeout(()=>a.classList.remove("show"),3e3))}function Ht(){jt&&(clearInterval(jt),jt=null)}function Xe(e){Ht();const t=document.querySelector("#modal");return t.innerHTML=e,t.open||t.showModal(),t}function uo(e="help"){const t=Xe(qn(p,e));let a=!1;const s=()=>{Ht(),t.close()};t.onclick=o=>{if(o.target.closest('[data-modal="close"]')||o.target===t){s();return}const r=o.target.closest("[data-crisis-tab]");if(r){const d=r.dataset.crisisTab;t.querySelectorAll(".crisis-tab").forEach(u=>u.classList.toggle("active",u.dataset.crisisTab===d)),t.querySelectorAll(".crisis-tab-panel").forEach(u=>u.classList.toggle("active",u.dataset.panel===d)),d!=="breathe"&&Ht();return}const i=o.target.closest('[data-action="toggle-breathing"]');if(i){const d=t.querySelector("#breathing-visual"),u=t.querySelector("#breathing-phase"),m=t.querySelector("#breathing-timer"),h=t.querySelector("#breathing-guide");if(a)a=!1,Ht(),d?.classList.remove("inhale","hold","exhale"),u&&(u.textContent="En pausa"),m&&(m.textContent="4 — 4 — 6"),i.innerHTML=`${l("wind")} Seguir respirando`;else{a=!0,i.innerHTML=`${l("close")} Pausar`;let g=0;const y=()=>{const f=g%14;d?.classList.remove("inhale","hold","exhale"),f<4?(d?.classList.add("inhale"),u&&(u.textContent="Toma aire..."),m&&(m.textContent=`${4-f} s`),h&&(h.textContent="Inhala despacio por la nariz.")):f<8?(d?.classList.add("hold"),u&&(u.textContent="Mantén..."),m&&(m.textContent=`${8-f} s`),h&&(h.textContent="Sostén el aire sin tensar los hombros.")):(d?.classList.add("exhale"),u&&(u.textContent="Suelta..."),m&&(m.textContent=`${14-f} s`),h&&(h.textContent="Deja salir el aire poco a poco.")),g++};y(),jt=setInterval(y,1e3)}}}}function po(e=1,{mandatory:t=!1}={}){let a=e;const s=Xe(En(p,x,a,t));rt=t,s.oncancel=t?r=>r.preventDefault():null,s.onclose=()=>{t&&!p.completed&&(rt=!1,queueMicrotask(()=>k()))};const o=s.querySelector("#setup-wizard-form");lo(o,"wiz");const n=r=>{a=Math.max(1,Math.min(3,r)),s.querySelectorAll(".wizard-step-body").forEach(h=>{const g=+h.dataset.step;h.classList.toggle("active",g===a),h.hidden=g!==a});const i=s.querySelector(".setup-wizard-header .eyebrow"),d=s.querySelector(".setup-wizard-header h2");i&&(i.innerHTML=`${l("sliders")} Paso ${a} de 3`),d&&(d.textContent=a===1?"Tu perfil":a===2?"Tu ritmo":"Tu papel"),s.querySelectorAll(".wizard-steps-bar span").forEach((h,g)=>{h.classList.toggle("done",a>=g+1),h.classList.toggle("current",a===g+1)});const m=s.querySelector(".wizard-footer");m&&(m.innerHTML=`
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${l("left")} Anterior</button>`:t?"":'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${l("right")}</button>`:`<button type="submit" class="button solid">${l("check")} Guardar</button>`}`)};s.onchange=r=>{r.target.name==="theme"&&Me(r.target.value,p)},s.onsubmit=r=>{r.preventDefault(),o&&co(o);const i=t;rt=!1,s.oncancel=null,s.close(),k(),i&&H==="thoughts"&&requestAnimationFrame(()=>oo()),w("Perfil actualizado")},s.onclick=r=>{if(r.target.closest('[data-modal="close"]')||r.target===s){if(t){r.preventDefault();return}Me(p.theme,p),s.oncancel=null,s.close();return}const d=r.target.closest("[data-wizard]");if(d){const u=d.dataset.wizard;n(u==="next"?a+1:a-1)}}}function Rt({title:e,text:t,confirmLabel:a,danger:s=!1}){return new Promise(o=>{const n=Xe(`<div class="modal-card">
      <h2>${c(e)}</h2><p>${c(t)}</p>
      <div class="modal-actions">
        <button class="button outline" data-modal="cancel">Cancelar</button>
        <button class="button ${s?"danger":"solid"}" data-modal="confirm">${c(a)}</button>
      </div>
    </div>`);n.onclick=r=>{const i=r.target.closest("[data-modal]")?.dataset.modal;i?(n.close(),o(i==="confirm")):r.target===n&&(n.close(),o(!1))}})}function ni(e){const t=q.find(n=>n.date===e);if(!t){Ae(e);return}const a=_(p),s=x.filter(n=>t.habits?.[n.id]),o=Xe(`<article class="modal-card entry-modal">
    <div class="section-heading">
      <div><p class="eyebrow">${p.name?`Cuaderno de ${c(p.name)} · `:""}Día ${yt(t.date,q)}</p><h2>${P(t.date)}</h2></div>
      <span class="mood-tag" style="--mood:${N[t.mood-1].color}">${N[t.mood-1].emoji} ${N[t.mood-1].label}</span>
    </div>
    <div class="read-metrics">
      <span class="chiplet">${l("moon")} ${E(t.sleepHours)} h sueño</span>
      <span class="chiplet">${l("study")} ${E(t.studyHours)} h dedicación</span>
      ${t.energy?`<span class="chiplet">${l("bolt")} energía ${t.energy}/5</span>`:""}
      ${t.stress?`<span class="chiplet">${l("storm")} estrés ${t.stress}/5</span>`:""}
      <span class="chiplet">${l("pen")} ${$t(t)} palabras</span>
    </div>
    ${(t.tags||[]).length?`<div class="read-metrics">${t.tags.map(n=>`<span class="chiplet">${l("hash")} ${c(n)}</span>`).join("")}</div>`:""}
    ${t.wordOfDay?`<div class="read-section"><h3>Palabra del día</h3><p>«${c(t.wordOfDay)}»</p></div>`:""}
    ${t.capsule?`<div class="read-section"><h3>${c(a.capsuleLabel)}</h3><p>${c(t.capsule)}</p></div>`:""}
    <div class="read-section"><h3>Notas del día</h3><p class="dropcap-paragraph">${c(t.generalDay)}</p></div>
    ${t.bestOfDay?`<div class="read-section"><h3>Lo mejor del día</h3><p>${c(t.bestOfDay)}</p></div>`:""}
    ${t.differentToday?`<div class="read-section"><h3>¿Qué ha sido distinto?</h3><p>${c(t.differentToday)}</p></div>`:""}
    ${t.gratitude?.some(Boolean)?`<div class="read-section"><h3>Agradecimientos</h3><ol>${t.gratitude.filter(Boolean).map(n=>`<li>${c(n)}</li>`).join("")}</ol></div>`:""}
    ${t.tomorrow||t.goals?.length?`<div class="read-section"><h3>Para mañana</h3><p>${c(t.tomorrow)}</p>${t.goals?.length?`<ul>${t.goals.map(n=>`<li>${c(n)}</li>`).join("")}</ul>`:""}</div>`:""}
    ${x.length&&s.length?`<div class="read-section"><h3>Hábitos cumplidos</h3><p>${s.map(n=>c(n.name)).join(" · ")}</p></div>`:""}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      <button class="button danger" data-modal="delete">Eliminar</button>
      <button class="button solid" data-modal="edit">${l("pen")} Editar</button>
    </div>
  </article>`);o.onclick=n=>{const r=n.target.closest("[data-modal]")?.dataset.modal,i=()=>o.close();(r==="close"||n.target===o)&&i(),r==="edit"&&(i(),Ae(t.date)),r==="delete"&&(i(),ho(t.date))}}function Ae(e){if(e>v()){w("Aún no ha llegado.",!0);return}Ga(),S=e,H="diary",Y=!1,ta=!1,ne(),k({transition:!0})}function Ga(){Ie("entrada",za),Ie("botella",Ra),document.querySelector("#diary-form")&&ht==="draft"&&na({silent:!0})}function mo(){if(window.innerWidth<=980){Y=!Y,document.querySelector(".sidebar")?.classList.toggle("is-open",Y),document.querySelector(".sidebar-backdrop")?.classList.toggle("is-visible",Y);return}W=!W,p=be({sidebarCollapsed:W});const e=document.querySelector(".sidebar");if(e){e.classList.toggle("is-collapsed",W);const t=e.querySelector(".sidebar-collapse-btn");t&&(t.innerHTML=l(W?"right":"left"),t.title=W?"Desplegar menú · Ctrl+B":"Plegar menú · Ctrl+B",t.setAttribute("aria-expanded",String(!W))),e.classList.add("is-animating"),setTimeout(()=>{e.classList.remove("is-animating"),gt()},420),setTimeout(()=>gt(),60)}}async function ho(e){await Rt({title:"¿Eliminar esta entrada?",text:`Se borrará del dispositivo el registro de ${P(e)}.`,confirmLabel:"Eliminar",danger:!0})&&(q=Yo(e),k(),w("Entrada eliminada."))}function ri(e,t){const a=new Blob([t],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(a),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),1e3)}O.addEventListener("click",async e=>{const t=e.target.closest("[data-view]"),a=e.target.closest("[data-action]");if(e.target.closest(".brand")){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;e.preventDefault(),Ae(v());return}if(t&&!a){if(t.tagName==="A"&&(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0))return;e.preventDefault(),_n(t.dataset.view,{transition:!0});return}if(!a)return;const{action:o,date:n,range:r,mini:i,key:d,step:u,habit:m,name:h,word:g,tab:y,quote:f,index:A,layout:F,target:Q,val:z,monthly:L,id:T,delta:U}=a.dataset;switch(o){case"menu":Y=!Y,k();break;case"close-menu":Y=!1,k();break;case"toggle-sidebar":mo();break;case"archive-tab":ve=y||"list",ne(),re=!0,k();break;case"stats-tab":te=y||"pulse",ne(),re=!0,k();break;case"profile-tab":de=y||"personal",ne(),re=!0,k();break;case"add-part":ms();break;case"part-preset":ms(z);break;case"part-type":{const b=ae(p).map($=>$.key===d?{...$,type:z==="line"?"line":"text"}:$);Se({parts:b},"");break}case"remove-part":{const b=ae(p).find($=>$.key===d);Se({parts:ae(p).filter($=>$.key!==d)},`«${b?.label||"Parte"}» fuera. Lo ya escrito se queda en sus días.`);break}case"add-counter":qr();break;case"remove-counter":{const b=ue(p);if(b.length<=1){w("Deja al menos un contador.",!0);break}const $=b.find(C=>C.key===d);Se({counters:b.filter(C=>C.key!==d)},`«${$?.label||"Contador"}» fuera. Las cifras ya anotadas se conservan.`);break}case"reset-counters":Se({counters:vt.map(b=>({...b}))},"Vuelta a los cuatro de siempre.");break;case"thoughts-tab":V=y||"shore",ne(),re=!0,k();break;case"routine-tab":le=y||"hoy",ne(),re=!0,k();break;case"shift-day":{const b=D(S,parseInt(U||"1",10));if(b>v()){w("Ese día todavía no ha llegado.",!0);break}S=b,k(),window.scrollTo({top:0,behavior:"smooth"});break}case"today-routine":S=v(),k();break;case"thoughts-island":document.querySelector("#thoughts-island")?.scrollIntoView({behavior:Z?"smooth":"auto",block:"start"});break;case"thoughts-top":document.querySelector("#thoughts-top")?.scrollIntoView({behavior:Z?"smooth":"auto",block:"start"});break;case"focus-composer":{const b=document.querySelector("#bottle-text");b&&(b.scrollIntoView({behavior:Z?"smooth":"auto",block:"center"}),setTimeout(()=>b.focus(),Z?250:0));break}case"toggle-habit":{const b=n||S;if(b>v()){w("Ese día todavía no ha llegado.",!0);break}const $=q.find(R=>R.date===b),C={...$?.habits||{}},j=!C[m];C[m]=j;try{_e(b,{habits:C});const R=!$;k(),Nr(m);const se=x.find(et=>et.id===m)?.name||"Hábito",kt=x.length,ra=x.filter(et=>C[et.id]).length;j&&b===v()&&kt&&ra===kt?w("Rutina de hoy completada"):w(R&&j?`«${se}» marcado · creé una entrada mínima para ese día`:j?`«${se}» marcado`:`«${se}» desmarcado`)}catch(R){w(R.message||"No se pudo guardar el hábito.",!0)}break}case"add-suggested-habit":{if(!h)break;if(x.length>=30){w("Máximo 30 hábitos.",!0);break}if(x.some(b=>b.name.toLowerCase()===h.toLowerCase())){w("Ya está en tu lista.",!0);break}x=Pt({name:h}),k(),w(`«${h}» añadido a tu rutina`);break}case"edit-habit":{const b=a.closest(".habit-stat-row"),$=b?.querySelector(".habit-stat-name strong"),C=x.find(R=>R.id===m);if(!$||!C)break;$.outerHTML=`<input class="habit-rename" maxlength="40" value="${c(C.name)}" aria-label="Renombrar hábito">`;const j=b.querySelector(".habit-rename");j.focus(),j.select(),j.addEventListener("keydown",R=>{R.key==="Enter"&&(R.preventDefault(),j.dataset.done="1",gs(m,j.value)),R.key==="Escape"&&(j.dataset.done="1",k())}),j.addEventListener("blur",()=>{j.dataset.done!=="1"&&gs(m,j.value)});break}case"routine-counter-plus":case"routine-counter-minus":{const b=document.querySelector(`[name="counter_${d}"]`);if(!b)break;const $=o==="routine-counter-plus"?1:-1,C=parseFloat(u)||1,j=Math.min(parseFloat(b.max),Math.max(parseFloat(b.min),(parseFloat(b.value)||0)+$*C));b.value=Math.round(j*10)/10,Hr(b,d,parseFloat(b.value)),clearTimeout(hs),hs=setTimeout(Or,400);break}case"add-goal-routine":{ye();const b=ya().filter(Boolean);b.push("");try{_e(S,{goals:b}),k();const $=document.querySelectorAll("#routine-goals .task-input");$[$.length-1]?.focus()}catch($){w($.message||"No se pudo añadir la tarea.",!0)}break}case"remove-goal-routine":{const b=ya().filter((C,j)=>j!==+A),$=q.find(C=>C.date===S);try{_e(S,{goals:b.filter(Boolean),tomorrow:document.querySelector("#routine-tomorrow")?.value.trim()??($?.tomorrow||"")}),k()}catch(C){w(C.message||"No se pudo quitar la tarea.",!0)}break}case"open-bottle":$a(T);break;case"recast-bottle":{B=Gs(T),k(),w("Vuelve a estar en el agua");break}case"delete-bottle":Ir(T);break;case"toggle-more-details":{ze=a.getAttribute("aria-expanded")!=="true";const b=++rs,$=document.querySelector("#extras-accordion"),C=document.querySelector("#extras-panel");if(a.setAttribute("aria-expanded",String(ze)),!$||!C)break;if(ze)C.hidden=!1,$.classList.remove("is-closing"),$.classList.add("is-open","is-revealing"),setTimeout(()=>$.classList.remove("is-revealing"),360);else{$.classList.remove("is-open","is-revealing"),$.classList.add("is-closing");const j=()=>{!ze&&b===rs&&(C.hidden=!0,$.classList.remove("is-closing"))};if(!Z){j();break}const R=se=>{se.target===C&&(C.removeEventListener("animationend",R),j())};C.addEventListener("animationend",R),setTimeout(()=>{C.removeEventListener("animationend",R),j()},260)}break}case"quick-number":{const b=document.querySelector(`#${Q}`);b&&z!==void 0&&(b.value=z,b.classList.remove("num-bump"),b.offsetWidth,b.classList.add("num-bump"),b.dispatchEvent(new Event("input",{bubbles:!0})));break}case"cycle-theme":{const b=ee.findIndex(se=>se.id===p.theme),$=ee[(b+1)%ee.length];p=be({theme:$.id}),Me(p.theme,p);const C=document.querySelector(".theme-pill > span:last-child"),j=document.querySelector(".topbar-favicon-mini"),R=document.querySelector(".ex-libris-icon");C&&(C.textContent=$.name),j&&(j.innerHTML=xe(p.theme,p)),R&&(R.innerHTML=xe(p.theme,p)),w(`Tema: ${$.name}`);break}case"open-setup-wizard":po(1);break;case"open-crisis-modal":uo(y||"help");break;case"dismiss-crisis-banner":ta=!0,document.querySelector("#crisis-alert-slot").innerHTML="";break;case"next-daily-word":Pa++,ua(".word-of-day-card");break;case"next-daily-tip":Fa++,ua(".tip-of-day-card");break;case"next-quote":Ba++,$s();break;case"save-quote":{if(!f)break;const b=p.savedQuotes||[],$=b.includes(f),C=$?b.filter(j=>j!==f):[f,...b];p=be({savedQuotes:C}),$s(),w($?"Frase quitada de tus guardadas":"Frase guardada en tu perfil");break}case"add-custom-quote":{const $=document.querySelector("#new-custom-quote")?.value.trim();if(!$){w("Escribe una frase primero.",!0);break}p=be({savedQuotes:[$,...p.savedQuotes||[]]}),k(),w("Frase añadida");break}case"remove-saved-quote":{const b=parseInt(A,10),$=(p.savedQuotes||[]).filter((C,j)=>j!==b);p=be({savedQuotes:$}),k(),w("Frase eliminada");break}case"toggle-focus-writing":{nt=!nt,document.querySelector(".diary-layout")?.classList.toggle("is-focus-writing",nt);break}case"history-layout":{Dt=F||"grid",k();break}case"use-daily-word":{const b=document.querySelector("#wordOfDay");b&&g&&(b.value=g,b.dispatchEvent(new Event("input",{bubbles:!0})),b.classList.add("highlight-flash"),setTimeout(()=>b.classList.remove("highlight-flash"),900),ua(),w(`«${g}» anotada`));break}case"inspire-prompt":{Re=!Re;const b=document.querySelector("#writing-prompt-box");b&&(b.hidden=!Re,b.classList.toggle("is-open",Re));break}case"next-writing-prompt":{Tt++;const b=document.querySelector("#writing-prompt-text");b&&(b.classList.remove("text-swap"),b.offsetWidth,b.textContent=ga(S,Tt),b.classList.add("text-swap"));break}case"insert-writing-prompt":{const b=ga(S,Tt),$=document.querySelector("#generalDay");if($){const C=$.value.trim();$.value=C?`${C}

— ${b}
`:`— ${b}
`,$.focus(),$.setSelectionRange($.value.length,$.value.length),$.dispatchEvent(new Event("input",{bubbles:!0}))}break}case"previous":Ae(D(S,-1));break;case"next":Ae(D(S,1));break;case"today":Ae(v());break;case"open-day":Ae(n);break;case"read":ni(n);break;case"delete":ho(n);break;case"add-goal":document.querySelector("#goals").insertAdjacentHTML("beforeend",rr()),document.querySelector("#goals .goal-row:last-child input")?.focus();break;case"remove-goal":a.closest(".goal-row").remove();break;case"counter-plus":case"counter-minus":{const b=document.querySelector(`[name="counter_${d}"]`);if(!b)break;const $=o==="counter-plus"?1:-1,C=parseFloat(u)||1,j=Math.min(parseFloat(b.max),Math.max(parseFloat(b.min),(parseFloat(b.value)||0)+$*C));b.value=Math.round(j*10)/10,b.classList.remove("num-bump"),b.offsetWidth,b.classList.add("num-bump"),b.dispatchEvent(new Event("input",{bubbles:!0}));break}case"add-habit":{const $=document.querySelector("#new-habit")?.value.trim();if(!$){w("Escribe un nombre para el hábito.",!0);break}if(x.length>=30){w("Máximo 30 hábitos.",!0);break}if(x.some(C=>C.name.toLowerCase()===$.toLowerCase())){w("Ya existe un hábito con ese nombre.",!0);break}x=Pt({name:$}),k(),document.querySelector("#new-habit")?.focus(),w(`Hábito «${$}» añadido`);break}case"delete-habit":{await Rt({title:"¿Eliminar este hábito?",text:`Se quitará «${h}» de tu lista actual.`,confirmLabel:"Eliminar",danger:!0})&&(x=Jo(m),k(),w("Hábito eliminado"));break}case"month-prev":i==="1"?Mt=Ee(Mt,-1):J=Ee(J,-1),k();break;case"month-next":i==="1"?Mt=Ee(Mt,1):J=Ee(J,1),k();break;case"period-prev":L==="1"?J=Ee(J,-1):S=D(S,-7),k();break;case"period-next":L==="1"?J=Ee(J,1):S=D(S,7),k();break;case"range":Fe=+r,k();break;case"export":case"backup":ri(`diario-${v()}.json`,rn(q,x,p)),w("Copia descargada");break;case"import":document.querySelector("#import-file").click();break;case"clear":await Rt({title:"¿Borrar todos los datos?",text:"Se eliminarán todas las entradas, hábitos y preferencias de este navegador.",confirmLabel:"Borrar todo",danger:!0})&&(Ko(),Nn(),aa(),S=v(),H="diary",ne(),k(),w("Datos eliminados"));break}});O.addEventListener("keydown",e=>{const t=e.target.closest('.settings-subnav-item[role="tab"]');if(!t)return;const a=[...O.querySelectorAll('.settings-subnav-item[role="tab"]')],s=a.indexOf(t),o=["ArrowDown","ArrowRight"].includes(e.key)?1:["ArrowUp","ArrowLeft"].includes(e.key)?-1:0;if(!o)return;e.preventDefault(),de=a[(s+o+a.length)%a.length].dataset.tab,ne(),re=!0,k(),O.querySelector(`#settings-tab-${de}`)?.focus()});O.addEventListener("change",e=>{if(e.target.id==="import-file"){const t=e.target.files[0];if(!t)return;const a=new FileReader;a.onload=()=>{try{Ne=ln(a.result);const s=Xe(`<div class="modal-card">
          <h2>Importar copia</h2>
          <p>El archivo contiene <strong>${Ne.entries.length}</strong> ${Ne.entries.length===1?"entrada":"entradas"} y <strong>${Ne.habits.length}</strong> ${Ne.habits.length===1?"hábito":"hábitos"}.</p>
          <div class="modal-actions">
            <button class="button outline" data-modal="cancel">Cancelar</button>
            <button class="button solid" data-modal="confirm">Importar</button>
          </div>
        </div>`);s.onclick=o=>{const n=o.target.closest("[data-modal]")?.dataset.modal;n==="confirm"&&(cn(Ne),aa(),w("Copia importada")),(n||o.target===s)&&(s.close(),k())}}catch(s){w(s.message||"No se ha podido importar el archivo.",!0)}e.target.value=""},a.readAsText(t)}e.target.id==="history-mood"&&(Ct=e.target.value,k()),e.target.id==="history-tag"&&(Lt=e.target.value,k())});O.addEventListener("input",e=>{if(e.target.id==="history-search"){At=e.target.value;const t=document.activeElement===e.target;if(k(),t){const a=document.querySelector("#history-search");a.focus(),a.setSelectionRange(a.value.length,a.value.length)}}});window.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="b"&&(e.preventDefault(),mo())});window.addEventListener("beforeunload",Sa);window.addEventListener("storage",e=>{if(!(!e.key||!String(e.key).startsWith("diario.")))try{aa(),k(),w("Otra pestaña cambió el cuaderno: lo he actualizado")}catch(t){w("No pude refrescar los datos: "+t.message,!0)}});"serviceWorker"in navigator&&window.addEventListener("load",()=>{const e=`${mt}/`,t=`${e}sw.js`;navigator.serviceWorker.register(t,{scope:e}).catch(()=>{})});ao();window.addEventListener("popstate",()=>{Ga(),Y=!1,ao(),re=!0,k({instant:!0})});k();X("idle");const ws=Qt(B).filter(e=>e.seen!==!0);ws.length&&setTimeout(()=>{w(ws.length===1?"Ha vuelto una de tus botellas.":"Han vuelto un par de tus botellas."),document.querySelectorAll(".vault-arrival").forEach((t,a)=>{t.style.setProperty("--wash-delay",`${a*140}ms`),t.classList.add("is-washing")});const e=document.querySelector(".thought-vault");e?.classList.add("is-rising"),setTimeout(()=>e?.classList.remove("is-rising"),1400)},820);

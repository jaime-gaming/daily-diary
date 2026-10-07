(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const F=[{value:1,emoji:"😫",label:"Fatal",color:"#a8442c"},{value:2,emoji:"😕",label:"Flojo",color:"#c2743a"},{value:3,emoji:"😐",label:"Normal",color:"#98938a"},{value:4,emoji:"🙂",label:"Bien",color:"#4e6f52"},{value:5,emoji:"🤩",label:"Genial",color:"#254d32"}],ko=["L","M","X","J","V","S","D"],un=["","Muy baja","Baja","Normal","Alta","Muy alta"],pn=["","Muy bajo","Bajo","Normal","Alto","Muy alto"],xo=["Productivo","Tranquilo","Ajetreado","Social","Solitario","Creativo","Cansado","Motivado","Ansioso","Emocionado","Nostálgico","Aburrido"],Bt=[{key:"water",label:"Agua",unit:"vasos",min:0,max:40,step:1,icon:"drop"},{key:"exercise",label:"Ejercicio",unit:"min",min:0,max:1440,step:5,icon:"run"},{key:"reading",label:"Lectura",unit:"min",min:0,max:1440,step:5,icon:"book"},{key:"mindfulness",label:"Pausa consciente",unit:"min",min:0,max:1440,step:5,icon:"leaf"}],mn=["drop","run","book","leaf","moon","heart","bolt","sun","gauge","pen","paper","spark"],Mo=[{id:"text",label:"párrafo"},{id:"line",label:"una línea"}],hn=[{label:"Cómo responde el cuerpo",hint:"Tensión, digestión, sueño, energía.",type:"text"},{label:"Un pensamiento que no quiero olvidar",hint:"",type:"line"},{label:"Con quién he hablado hoy",hint:"",type:"line"},{label:"Qué me ha costado",hint:"Sin juzgarlo: solo nombrarlo.",type:"text"}],Ie=8,Ue=12,fn=e=>String(e??"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,24),St=(e,t,a,s)=>{const n=Number(e);return Number.isFinite(n)?Math.min(a,Math.max(t,n)):s},gn=e=>`${e}_${Date.now().toString(36).slice(-5)}${Math.floor(Math.random()*1296).toString(36).padStart(2,"0")}`;function qo(e={}){const t=Bt.find(n=>n.key===e.key),a=fn(e.key);if(!a)return null;const s={key:a,label:String(e.label??t?.label??"Contador").trim().slice(0,28)||t?.label||"Contador",unit:String(e.unit??t?.unit??"").trim().slice(0,14),min:St(e.min??t?.min,0,9999,0),max:0,step:St(e.step??t?.step,1,3600,t?t.step:1),goal:St(e.goal,0,99999,0),icon:mn.includes(e.icon)?e.icon:t?.icon||"gauge",builtin:!!t};return s.max=Math.max(St(e.max??t?.max,1,99999,t?t.max:99),s.min+s.step),s}const ss=(e,t={})=>e?.key==="water"?St(t?.waterGoal,0,25,8):Number(e?.goal)||0;function $e(e={}){const t=Array.isArray(e?.counters)&&e.counters.length?e.counters:Bt,a=new Set;return t.map(qo).filter(s=>s&&!a.has(s.key)&&(a.add(s.key),!0)).slice(0,Ue)}function Eo(e={}){const t=fn(e.key),a=String(e.label||"").trim().slice(0,60);return!t||!a?null:{key:t,label:a,hint:String(e.hint||"").trim().slice(0,140),type:e.type==="line"?"line":"text"}}function he(e={}){const t=Array.isArray(e?.parts)?e.parts:[],a=new Set;return t.map(Eo).filter(s=>s&&!a.has(s.key)&&(a.add(s.key),!0)).slice(0,Ie)}const Ao=["bestOfDay","differentToday","generalDay","tomorrow","wordOfDay"],lt=[{id:"teen",min:10,max:18,label:"10 – 18 años",title:"Instituto",desc:"Clases, amistades y aficiones.",sleepRecommended:8.5,studyRecommended:2,focusLabel:"Horas de estudio",focusQuestion:"¿Cuánto has estudiado hoy?",tags:["Clases","Exámenes","Amigos","Deporte","Música","Videojuegos","Tarde libre","Tranquilo","Cansado","Motivado","Creativo","Social"],habits:["Hacer tareas sin mirar el móvil","Leer 15 minutos antes de dormir","Moverme o entrenar un rato","Dejar la mochila lista para mañana","Dejar el móvil fuera de la cama","Salir a tomar el aire"],placeholders:{bestOfDay:"Una risa, una partida, una canción…",differentToday:"Algo curioso, una charla, un plan…",generalDay:"¿Cómo te has sentido hoy?",tomorrow:"Una tarea, un plan, un rato de descanso…"}},{id:"young",min:19,max:26,label:"19 – 26 años",title:"Universidad y primeros pasos",desc:"Estudios, trabajo e independencia.",sleepRecommended:8,studyRecommended:3,focusLabel:"Horas de estudio y foco",focusQuestion:"¿Cuánto has estudiado o avanzado en tus proyectos?",tags:["Productivo","Uni / Trabajo","Amigos","Entreno","Creativo","Tranquilo","Cansado","Motivado","Social","Solitario","Nostálgico","Ajetreado"],habits:["Bloque de estudio sin distracciones","Entrenar o caminar 30 min","Leer 20 páginas","Cocinar algo casero","Sin pantallas 30 min antes de dormir","Ordenar mi mesa al acabar"],placeholders:{bestOfDay:"Un avance, un café, una charla…",differentToday:"Un detalle, un encuentro, un cambio…",generalDay:"¿Qué te ronda la cabeza?",tomorrow:"Una tarea, una pausa, un plan…"}},{id:"adult",min:27,max:49,label:"27 – 49 años",title:"Equilibrio y vida propia",desc:"Trabajo, descanso, salud y tiempo personal.",sleepRecommended:7.5,studyRecommended:1.5,focusLabel:"Horas de enfoque o aprendizaje",focusQuestion:"¿Cuánto has aprendido o avanzado en tus proyectos?",tags:["Enfocado","Tranquilo","Trabajo","Familia","Deporte","Lectura","Cansado","Motivado","Social","Creativo","Desconexión","Ajetreado"],habits:["Cerrar el trabajo a mi hora","Caminar 30 minutos sin prisas","Leer antes de apagar la luz","Estirar espalda y cuello","Beber agua durante la jornada","Media hora sin notificaciones"],placeholders:{bestOfDay:"Una sobremesa, un logro, un rato tranquilo…",differentToday:"Un giro, un detalle, algo nuevo…",generalDay:"¿Cómo ha ido el día?",tomorrow:"Prioridades y descanso…"}},{id:"senior",min:50,max:120,label:"50+ años",title:"Bienestar y perspectiva",desc:"Salud, paseos, lectura y recuerdos.",sleepRecommended:7.5,studyRecommended:1,focusLabel:"Tiempo de lectura o dedicación",focusQuestion:"¿Cuánto has leído o dedicado a tus aficiones?",tags:["Sereno","Paseo","Lectura","Familia","Naturaleza","Salud","Agradecido","Activo","Creativo","Social","Tranquilo","Nostálgico"],habits:["Paseo matutino al aire libre","Rato de lectura tranquila","Ejercicios de movilidad suave","Llamar o ver a alguien querido","Cuidar el descanso nocturno","Un momento de silencio y calma"],placeholders:{bestOfDay:"Un paseo, una charla, una lectura…",differentToday:"Una visita, un recuerdo, otro camino…",generalDay:"¿Con qué sensación te quedas?",tomorrow:"Un paseo, una lectura, sin prisa…"}}],Rt=[{id:"reading",label:"Lectura",icon:"book",habit:"Leer 20 minutos con calma",tag:"Lectura"},{id:"sport",label:"Deporte",icon:"run",habit:"Entrenar o moverme 30 min",tag:"Deporte"},{id:"study",label:"Estudio",icon:"study",habit:"Sesión de estudio sin móvil",tag:"Productivo"},{id:"music",label:"Música y arte",icon:"spark",habit:"Escuchar un álbum o crear algo",tag:"Creativo"},{id:"nature",label:"Naturaleza",icon:"leaf",habit:"Salir a caminar al aire libre",tag:"Naturaleza"},{id:"social",label:"Amigos",icon:"heart",habit:"Hablar con alguien que quiero",tag:"Social"},{id:"calm",label:"Descanso",icon:"moon",habit:"Apagar pantallas 30 min antes de dormir",tag:"Tranquilo"},{id:"projects",label:"Proyectos",icon:"bolt",habit:"Dedicar 30 min a mi propio proyecto",tag:"Enfocado"},{id:"gaming",label:"Videojuegos",icon:"target",habit:"Parar a tiempo para descansar la vista",tag:"Desconexión"},{id:"cooking",label:"Cocina",icon:"flame",habit:"Preparar una comida casera y tranquila",tag:"Bienestar"}],ct=[{id:"night",label:"Por la noche",icon:"moon"},{id:"morning",label:"Por la mañana",icon:"sun"},{id:"afternoon",label:"A media tarde",icon:"leaf"},{id:"anytime",label:"Cuando quiera",icon:"pen"}],dt=[{id:"warm",label:"Cálido y cercano",desc:"Como hablar con un buen amigo"},{id:"literary",label:"Pausado y literario",desc:"Con gusto por los detalles"},{id:"direct",label:"Directo y práctico",desc:"Claro y al grano"},{id:"gentle",label:"Suave y compasivo",desc:"Amable en días difíciles"}],se=[{id:"paper",name:"Papel Clásico",desc:"Crema y tinta carbón",colors:["#F3EFE6","#211E17","#B34A2E"],favicon:{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"}},{id:"night",name:"Tinta Nocturna",desc:"Tonos cálidos para la noche",colors:["#151412","#EDE6D8","#D96B4E"],favicon:{bg:"#151412",page:"#272420",accent:"#D96B4E",ink:"#EDE6D8"}},{id:"forest",name:"Bosque Sereno",desc:"Salvia y papel natural",colors:["#EBF0EA","#19241D","#356343"],favicon:{bg:"#19241D",page:"#EBF0EA",accent:"#4C8B5E",ink:"#19241D"}},{id:"terracotta",name:"Atardecer Cálido",desc:"Arcilla y acentos ocre",colors:["#F6ECE4","#261B15","#C45534"],favicon:{bg:"#261B15",page:"#F6ECE4",accent:"#C45534",ink:"#261B15"}},{id:"ocean",name:"Azul Atlántico",desc:"Marfil frío y tinta azul",colors:["#EDF2F6","#16222F","#2B5F8C"],favicon:{bg:"#16222F",page:"#EDF2F6",accent:"#2B5F8C",ink:"#16222F"}},{id:"lavender",name:"Bruma Lavanda",desc:"Lino malva y tinta ciruela",colors:["#F2EEF6","#221B2B","#6E4B8E"],favicon:{bg:"#221B2B",page:"#F2EEF6",accent:"#6E4B8E",ink:"#221B2B"}}],bn=[{id:"calm",label:"Calma y desahogo",icon:"leaf",desc:"Soltar el ruido del día y quedarme más tranquilo/a."},{id:"focus",label:"Constancia y hábitos",icon:"study",desc:"Cuidar mi estudio, mi descanso y mis rutinas diarias."},{id:"memory",label:"Guardar mi historia",icon:"book",desc:"Que los meses no pasen sin recordar lo que he vivido."},{id:"growth",label:"Conocerme mejor",icon:"spark",desc:"Ver qué cosas me sientan bien y cuáles me quitan energía."}],Lo=["Leer 20 minutos","Caminar al aire libre","Pausa sin pantallas","Beber 8 vasos de agua","Respirar 5 minutos en calma","Dormir a buena hora","Estirar el cuerpo","Ordenar mi espacio"],As=[{text:"No todos los días son buenos, pero siempre queda algún rincón que merece la pena guardar.",author:"Nota de cuaderno",tones:["warm","gentle"],ages:["teen","young","adult","senior"]},{text:"Cómo pasamos los días es, al final, cómo pasamos la vida.",author:"Annie Dillard",tones:["literary","direct"],ages:["young","adult","senior"],interests:["reading","projects"]},{text:"Escribir en un diario es hablar contigo sin tener que fingir que todo va perfecto.",author:"Apunte al margen",tones:["direct","warm"],ages:["teen","young","adult"]},{text:"La prisa casi nunca arregla lo que el descanso sí sabe colocar en su sitio.",author:"Cuaderno de calma",tones:["gentle","warm"],ages:["teen","young","adult","senior"],interests:["calm","nature"]},{text:"Un paso corto dado hoy vale más que diez planes perfectos que se quedan para el lunes.",author:"Bitácora personal",tones:["direct"],ages:["teen","young","adult"],interests:["study","sport","projects"]},{text:"Guardar memoria de las cosas pequeñas es la mejor forma de vivir dos veces.",author:"Tradición de lectura",tones:["literary"],ages:["young","adult","senior"],interests:["reading","music"]},{text:"Sé amable con tu propio ritmo: ni los árboles dan fruto todos los meses del año.",author:"Cuaderno de campo",tones:["gentle","literary"],ages:["teen","young","adult","senior"],interests:["nature","calm"]},{text:"Lo que hoy parece un examen gigante o un problema sin salida, dentro de un mes será solo una página pasada.",author:"Nota para días revueltos",tones:["warm","gentle"],ages:["teen","young"],interests:["study","gaming"]}],Ls=[{word:"Ataraxia",origin:"Griego clásico",meaning:"Tranquilidad de ánimo que nace cuando dejamos de pelear contra lo que no depende de nosotros.",prompt:"¿Qué preocupación podrías dejar en pausa por esta noche?"},{word:"Meraki",origin:"Griego moderno",meaning:"Hacer algo poniendo el corazón, el cuidado y una parte de ti en ello.",prompt:"¿En qué detalle pequeño de hoy has puesto ganas o cariño?"},{word:"Kintsugi",origin:"Japonés",meaning:"Oficio de reparar la cerámica rota con barniz de oro, sin esconder las grietas.",prompt:"¿Qué tropiezo reciente te ha servido para aprender algo útil?"},{word:"Komorebi",origin:"Japonés",meaning:"La luz del sol cuando se cuela entre las hojas de los árboles.",prompt:"¿Qué imagen o rincón bonito has visto hoy al pasar?"},{word:"Resiliencia",origin:"Latín",meaning:"La capacidad de encajar un golpe, recuperar el aliento y seguir adelante a tu paso.",prompt:"¿Cómo has tirado hacia delante hoy cuando algo se hacía cuesta arriba?"},{word:"Serendipia",origin:"Castellano",meaning:"Eso bueno que te encuentras por casualidad mientras ibas buscando otra cosa.",prompt:"¿Qué momento no planeado ha merecido la pena hoy?"},{word:"Ubuntu",origin:"Zulú · Xhosa",meaning:"El concepto de que somos quienes somos gracias también a quienes nos rodean.",prompt:"¿Quién te ha hecho el día un poco más fácil o agradable hoy?"},{word:"Ikigai",origin:"Japonés",meaning:"Aquello que te da un motivo concreto para levantarte por la mañana.",prompt:"¿Qué plan o proyecto te apetece de verdad hacer pronto?"},{word:"Wabi-sabi",origin:"Japonés",meaning:"Gustar de las cosas sencillas, imperfectas y gastadas por la vida real.",prompt:"¿En qué cosa imperfecta de hoy puedes dejar de exigirte tanto?"},{word:"Apapachar",origin:"Náhuatl",meaning:"Dar abrigo y consuelo de verdad; cuidar con cercanía.",prompt:"¿Qué necesitas hoy para descansar a gusto?"},{word:"Sosiego",origin:"Castellano",meaning:"Ese silencio tranquilo que queda cuando por fin se acaba la prisa del día.",prompt:"¿En qué momento del día has notado más calma hoy?"},{word:"Epifanía",origin:"Griego",meaning:"Caer en la cuenta de golpe de algo que llevabas tiempo viendo sin entender.",prompt:"¿De qué cosa te has dado cuenta hoy?"},{word:"Bonhomía",origin:"Castellano",meaning:"Trato llano, honesto y amable que no necesita aparentar nada.",prompt:"¿Qué gesto sencillo de amabilidad has visto o tenido hoy?"},{word:"Nefelibata",origin:"Castellano",meaning:"Persona que de vez en cuando camina por las nubes y mira el mundo a su manera.",prompt:"¿En qué se te ha ido el santo al cielo hoy?"},{word:"Templanza",origin:"Latín",meaning:"Guardar el equilibrio y no perder los papeles cuando alrededor hay ruido.",prompt:"¿En qué situación de hoy has sabido mantener la calma?"},{word:"Alba",origin:"Latín",meaning:"La primera claridad de la mañana antes de que asome el sol.",prompt:"¿Cómo te gustaría empezar la mañana de mañana?"},{word:"Saudade",origin:"Portugués",meaning:"Echar de menos con cariño a alguien o a una época en la que fuiste feliz.",prompt:"¿Qué buen recuerdo te ha venido hoy a la cabeza?"},{word:"Lagom",origin:"Sueco",meaning:"Ni de más ni de menos: saber cuándo algo es ya suficiente.",prompt:"¿Con qué cosa de hoy puedes decir tranquilo/a «por hoy ya está bien»?"},{word:"Sisu",origin:"Finés",meaning:"Empuje tranquilo para terminar lo que empezaste aunque estés cansado.",prompt:"¿Qué cosa has sacado adelante hoy aunque te diera pereza?"},{word:"Hygge",origin:"Danés",meaning:"Estar a gusto en lo cotidiano: una charla tranquila, una manta, un rato en casa.",prompt:"¿Qué momento sencillo del día te ha sentado mejor?"},{word:"Querencia",origin:"Castellano",meaning:"El sitio o la gente a la que uno siempre tiene ganas de volver.",prompt:"¿Dónde o con quién te sientes más cómodo/a últimamente?"},{word:"Claridad",origin:"Latín",meaning:"Distinguir lo que de verdad importa de lo que solo hace ruido.",prompt:"Si te quedas con una sola cosa de hoy, ¿cuál eliges?"},{word:"Amparo",origin:"Latín",meaning:"Tener un lugar o una persona donde resguardarse cuando el día se tuerce.",prompt:"¿Qué te reconforta cuando tienes un día torcido?"},{word:"Gratitud",origin:"Latín",meaning:"No dar por supuesto lo bueno que tenemos cerca cada día.",prompt:"¿Qué cosa normal de tu rutina agradecerías si mañana faltara?"}],Cs=[{category:"Autocompasión",title:"No te hables peor que a un amigo",tip:"Cuando estás cansado o algo sale regular, es fácil machacarse. Prueba a decirte exactamente lo que le dirías a alguien a quien aprecias.",action:"Anota algo que hoy hayas hecho lo mejor que podías.",icon:"heart",ages:["teen","young","adult","senior"],interests:["calm","social"]},{category:"Descanso",title:"Bajar el brillo antes de acostarte",tip:"Dejar el móvil o las pantallas un rato antes de meterte en la cama ayuda a que la cabeza deje de saltar de un tema a otro.",action:"Pon la alarma y deja el teléfono lejos de la almohada.",icon:"moon",ages:["teen","young","adult","senior"],interests:["calm","gaming"]},{category:"Calma",title:"Soltar el aire más despacio",tip:"Cuando notes prisa o nudo en el estómago, toma aire contando 4 y suéltalo despacio contando 6. El cuerpo entiende enseguida el mensaje.",action:"Respira hondo tres veces antes de cerrar el cuaderno.",icon:"leaf",ages:["teen","young","adult","senior"],interests:["calm","nature"]},{category:"Enfoque",title:"La regla de los primeros cinco minutos",tip:"Casi siempre cuesta más ponerse que hacerlo. Ponte solo 5 minutos con eso que estás posponiendo; luego decides si sigues.",action:"Deja escrita una sola tarea concreta para mañana.",icon:"study",ages:["teen","young","adult"],interests:["study","projects"]},{category:"Escritura",title:"Aquí nadie te va a poner nota",tip:"No hace falta escribir bonito ni llenar la página. Tres líneas sinceras sobre lo que te ha pasado hoy bastan.",action:"Escribe lo primero que te salga sin borrar.",icon:"pen",ages:["teen","young","adult","senior"],interests:["reading"]},{category:"Hábitos",title:"Un día suelto no rompe nada",tip:"Si ayer no pudiste cumplir un hábito, no pasa nada. Lo que cuenta es retomarlo hoy con naturalidad y sin culpa.",action:"Empieza por el hábito más fácil de tu lista.",icon:"flame",ages:["teen","young","adult","senior"],interests:["projects","sport"]},{category:"Bienestar",title:"A veces el cansancio es sed",tip:"Gran parte del embotamiento de media tarde viene de llevar horas sin beber agua mientras estudias o trabajas.",action:"Ten un vaso o botella a mano mañana por la mañana.",icon:"drop",ages:["teen","young","adult","senior"],interests:["sport","study","cooking"]},{category:"Calma",title:"Sacar el ruido de la cabeza al papel",tip:"Cuando una preocupación da vueltas en bucle, escribirla en una frase la vuelve manejable y libera espacio mental.",action:"Apunta qué te preocupa hoy y qué parte sí está en tu mano.",icon:"book",ages:["teen","young","adult","senior"],interests:["reading","calm"]},{category:"Movimiento",title:"Caminar también ordena los pensamientos",tip:"Quince minutos andando sin mirar el teléfono despejan más la mente que media hora intentando concentrarse a la fuerza.",action:"Sal a dar una vuelta corta mañana cuando te satures.",icon:"run",ages:["teen","young","adult","senior"],interests:["sport","nature"]},{category:"Estudio y memoria",title:"Lo que estudias se fija mientras duermes",tip:"Quitarle horas al sueño para estudiar a última hora suele salir caro: el cerebro consolida lo aprendido durante el descanso.",action:"Prioriza dormir bien hoy para rendir mejor mañana.",icon:"study",ages:["teen","young"],interests:["study"]},{category:"Equilibrio",title:"Cerrar la jornada de verdad",tip:"Tener un pequeño ritual al terminar tus obligaciones —recoger la mesa, ducharte o salir a caminar— separa el deber del descanso.",action:"Elige a qué hora vas a desconectar mañana.",icon:"sun",ages:["young","adult"],interests:["projects","calm"]},{category:"Perspectiva",title:"Cuidar el contacto con los tuyos",tip:"A veces un mensaje corto o una llamada de cinco minutos a alguien que quieres cambia por completo el tono de la semana.",action:"Piensa en alguien con quien te apetezca hablar mañana.",icon:"heart",ages:["teen","young","adult","senior"],interests:["social"]}],Ts=["¿Qué rato de hoy te ha dejado buen sabor de boca, aunque haya sido breve?","¿Qué te ha dado más pereza o respeto hoy y cómo lo has llevado?","¿Qué conversación, canción o momento tranquilo te ha acompañado hoy?","¿Qué te gustaría quitarte de la cabeza antes de apagar la luz?","Si un amigo hubiera tenido exactamente tu día de hoy, ¿qué le dirías?","¿En qué momento del día te has sentido más cómodo/a siendo tú?","¿Qué detalle pequeño de hoy no querrías que se te olvidara dentro de un año?","¿Cómo notas el cuerpo esta noche: cansado, inquieto, ligero, tranquilo?","¿Qué cosa sencilla ha salido mejor de lo que esperabas esta mañana?","¿Qué necesitas mañana para que sea un día llevadero y amable?"],Co=[{number:"024",tel:"tel:024",name:"Línea 024 · Atención a la conducta suicida",detail:"Ministerio de Sanidad · España · gratuita, confidencial y anónima · 24 h.",primary:!0},{number:"717 003 717",tel:"tel:717003717",name:"Teléfono de la Esperanza",detail:"Escucha y apoyo emocional · 24 h.",primary:!0},{number:"900 20 20 10",tel:"tel:900202010",name:"Fundación ANAR · menores y jóvenes",detail:"Gratuita y confidencial · 24 h para jóvenes. Sin rastro en la factura.",primary:!1,youth:!0},{number:"112",tel:"tel:112",name:"Emergencias 112",detail:"Urgencias sanitarias o de seguridad · 24 h.",primary:!1}];function y(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function ze(e){return new Date(`${e}T12:00:00`)}function D(e,t){const a=ze(e);return a.setDate(a.getDate()+t),y(a)}function ne(e,t){return Math.round((Date.UTC(...t.split("-").map((a,s)=>+a-(s===1?1:0)))-Date.UTC(...e.split("-").map((a,s)=>+a-(s===1?1:0))))/864e5)}function Gt(e,t){const a=[e,...t.map(s=>s.date)].sort()[0];return ne(a,e)+1}function R(e,t={weekday:"long",day:"numeric",month:"long",year:"numeric"}){return ze(e).toLocaleDateString("es-ES",t)}function Se(e){const t=ze(e).getDay();return D(e,-((t+6)%7))}function vn(e){const t=ze(e);return[y(new Date(t.getFullYear(),t.getMonth(),1)),y(new Date(t.getFullYear(),t.getMonth()+1,0))]}function Be(e,t){const a=ze(e);return y(new Date(a.getFullYear(),a.getMonth()+t,1))}function To(e){const[t,a]=vn(e),s=D(t,-((ze(t).getDay()+6)%7)),n=Math.ceil((ne(s,a)+1)/7)*7;return Array.from({length:n},(o,r)=>({date:D(s,r),inMonth:D(s,r).slice(0,7)===e.slice(0,7)}))}const Ua=Object.freeze({"/":Object.freeze({view:"diary"}),"/pensamientos":Object.freeze({view:"thoughts",thoughtsTab:"shore"}),"/pensamientos/pendientes":Object.freeze({view:"thoughts",thoughtsTab:"sea"}),"/pensamientos/guardados":Object.freeze({view:"thoughts",thoughtsTab:"kept"}),"/pensamientos/archivados":Object.freeze({view:"thoughts",thoughtsTab:"lost"}),"/rutina":Object.freeze({view:"routine",routineTab:"hoy"}),"/rutina/semana":Object.freeze({view:"routine",routineTab:"week"}),"/rutina/contadores":Object.freeze({view:"routine",routineTab:"counters"}),"/rutina/rachas":Object.freeze({view:"routine",routineTab:"streaks"}),"/archivo":Object.freeze({view:"archive",archiveTab:"list"}),"/archivo/calendario":Object.freeze({view:"archive",archiveTab:"calendar"}),"/progreso":Object.freeze({view:"stats",statsTab:"pulse"}),"/progreso/semana":Object.freeze({view:"stats",statsTab:"week"}),"/progreso/mes":Object.freeze({view:"stats",statsTab:"month"}),"/ajustes":Object.freeze({view:"setup",profileTab:"personal"}),"/ajustes/apariencia":Object.freeze({view:"setup",profileTab:"appearance"}),"/ajustes/contenido":Object.freeze({view:"setup",profileTab:"custom"}),"/ajustes/datos":Object.freeze({view:"setup",profileTab:"data"})});Object.freeze(Object.keys(Ua));const js=e=>{const t=`/${String(e||"").replace(/^\/+|\/+$/g,"")}`;return t==="/"?"/":t};function ns(e=""){const t=String(e||"").trim();return!t||t==="/"?"":`/${t.replace(/^\/+|\/+$/g,"")}`}function jo(e="/",t=""){const a=js(e),s=ns(t);return s?a===s?"/":a.startsWith(`${s}/`)?js(a.slice(s.length)):a:a}function Do(e="/",t=""){const a=jo(e,t);return{...Ua[a]||Ua["/"],path:a}}function yn(e={}){switch(e.view){case"thoughts":return{sea:"/pensamientos/pendientes",kept:"/pensamientos/guardados",lost:"/pensamientos/archivados"}[e.thoughtsTab]||"/pensamientos";case"routine":return{week:"/rutina/semana",counters:"/rutina/contadores",streaks:"/rutina/rachas"}[e.routineTab]||"/rutina";case"archive":return e.archiveTab==="calendar"?"/archivo/calendario":"/archivo";case"stats":return{week:"/progreso/semana",month:"/progreso/mes"}[e.statsTab]||"/progreso";case"setup":return{appearance:"/ajustes/apariencia",custom:"/ajustes/contenido",data:"/ajustes/datos"}[e.profileTab]||"/ajustes";default:return"/"}}function os(e={},t=""){const a=ns(t),s=yn(e);return`${a}${s==="/"?"/":`${s}/`}`}function No(e=[],t="http://localhost"){for(const a of e){let s;try{s=new URL(a,t).pathname}catch{continue}for(const n of["/assets/","/src/"]){const o=s.lastIndexOf(n);if(o>=0)return ns(s.slice(0,o))}}return""}function Oo(){let e=0;return{begin(){return++e},cancel(){e++},isCurrent(t){return t===e}}}const E=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e),ke=e=>e.filter(t=>Number.isFinite(t));function xt(e){const t=ke(e);return t.length?t.reduce((a,s)=>a+s,0)/t.length:0}function Mt(e){const t=ke(e);return t.length?t.reduce((a,s)=>a+s,0)/t.length:null}function Ae(e){const t=ke(e).sort((s,n)=>s-n);if(!t.length)return null;const a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function Ds(e){const t=ke(e);if(!t.length)return null;const a=xt(t);return Math.sqrt(xt(t.map(s=>(s-a)**2)))}function ve(e,t,a){return e.filter(s=>s.date>=t&&s.date<=a).sort((s,n)=>s.date.localeCompare(n.date))}function $n(e,t,a,s=y()){const n=a>s?s:a,o=t<=n?ne(t,n)+1:0,r=new Set(e.filter(i=>i.date>=t&&i.date<=n).map(i=>i.date)).size;return{recorded:r,days:o,pct:o?Math.round(r/o*100):0}}function rs(e){let t=0,a=0,s;for(const n of[...new Set(e.map(o=>o.date))].sort())a=s&&ne(s,n)===1?a+1:1,t=Math.max(t,a),s=n;return t}function wn(e,t=y()){const a=new Set(e.map(o=>o.date));let s=a.has(t)?t:D(t,-1),n=0;for(;a.has(s);)n++,s=D(s,-1);return n}function It(e){const t=[e.bestOfDay,e.differentToday,e.generalDay,e.tomorrow,...e.gratitude||[],...Object.values(e.parts||{})].join(" ").trim();return t?t.split(/\s+/).length:0}function Ho(e){return e.reduce((t,a)=>t+It(a),0)}function Ns(e,t){return e.filter(a=>a.habits?.[t]).length}function Sn(e,t){return[...new Set(e.filter(a=>a.habits?.[t]).map(a=>a.date))].sort()}function kn(e,t){const a=Sn(e,t);let s=0,n=0,o;for(const r of a)n=o&&ne(o,r)===1?n+1:1,s=Math.max(s,n),o=r;return s}function ga(e,t,a=y()){const s=new Set(Sn(e,t));if(!s.size)return 0;let n=s.has(a)?a:D(a,-1),o=0;for(;s.has(n);)o++,n=D(n,-1);return o}function xn(e,t,a=28,s=y()){const n=D(s,1-a),o=e.filter(c=>c.date>=n&&c.date<=s),r=o.filter(c=>c.habits?.[t]).length,i=o.length,l=Math.min(a,ne(n,s)+1);return{done:r,tracked:i,window:l,pct:i?Math.min(100,Math.round(r/i*100)):0}}function Po(e,t,a=28,s=y(),n=y()){const o=Array.from({length:a},(i,l)=>D(s,l-a+1)),r=new Map(e.map(i=>[i.date,i]));return{dates:o,rows:t.map(i=>({habit:i,cells:o.map(l=>({date:l,done:!!r.get(l)?.habits?.[i.id],future:l>n,recorded:r.has(l)}))}))}}function Os(e){const t=new Map;for(const a of e)for(const s of a.tags||[])t.set(s,(t.get(s)||0)+1);return[...t.entries()].sort((a,s)=>s[1]-a[1])}function _e(e=[]){const t=new Map;for(const h of e)h?.date&&t.set(h.date,h);const a=[...t.values()].sort((h,p)=>h.date.localeCompare(p.date)),s=h=>a.map(p=>p[h]),n=h=>ke(s(h)).length,o=h=>a.filter(p=>Number.isFinite(p[h])).reduce((p,v)=>!p||v[h]>p[h]?v:p,null),r=s("mood"),i=s("sleepHours"),l=s("studyHours"),c=[...new Set(a.flatMap(h=>Object.keys(h.counters||{})))],m=Object.fromEntries(c.map(h=>{const p=a.map(v=>v.counters?.[h]);return[h,{total:ke(p).reduce((v,b)=>v+b,0),average:Mt(p),median:Ae(p),count:ke(p).length}]}));return{count:a.length,mood:xt(r),energy:Mt(s("energy")),stress:Mt(s("stress")),sleep:xt(i),study:xt(l),moodMedian:Ae(r),sleepMedian:Ae(i),studyMedian:Ae(l),moodStdDev:Ds(r),sleepStdDev:Ds(i),metricCounts:{mood:n("mood"),sleep:n("sleepHours"),study:n("studyHours"),energy:n("energy"),stress:n("stress")},totalSleep:ke(i).reduce((h,p)=>h+p,0),totalStudy:ke(l).reduce((h,p)=>h+p,0),words:Ho(a),best:o("mood"),worst:a.filter(h=>Number.isFinite(h.mood)).reduce((h,p)=>!h||p.mood<h.mood?p:h,null),mostStudy:o("studyHours"),mostSleep:o("sleepHours"),maxStreak:rs(a),moods:[1,2,3,4,5].map(h=>a.filter(p=>p.mood===h).length),counters:m}}function Mn(e){return e<6?"Has dormido poco.":e<7?"Una cantidad algo baja.":e<=9?"Un descanso razonable.":"Has dormido bastante."}function zo(e){return e===0?"Hoy no has dedicado tiempo al estudio.":e<1?"Has hecho un poco de estudio.":e<3?"Has tenido una sesión de estudio considerable.":e<5?"Has dedicado bastante tiempo.":"Ha sido un día de estudio intenso."}function ba(e,t,a=null){if(a&&!a.builtin)return Fo(a,t);switch(e){case"water":return t===0?"Sin registrar agua hoy.":t<4?"Poca agua registrada.":t<8?"Una hidratación razonable.":"Buen nivel de hidratación.";case"exercise":return t===0?"Sin ejercicio registrado hoy.":t<20?"Un poco de movimiento.":t<60?"Una sesión de ejercicio notable.":"Un día muy activo.";case"reading":return t===0?"Sin lectura registrada hoy.":t<20?"Unas páginas para hoy.":t<60?"Una buena sesión de lectura.":"Un día de mucha lectura.";default:return t===0?"Sin pausa consciente registrada.":t<10?"Un momento de pausa.":t<30?"Una práctica considerable.":"Una práctica muy constante hoy."}}function Fo(e,t){const a=e.unit?` ${e.unit}`:"",s=Number(e.goal)||0;return t?s&&t>=s?`Meta cumplida: ${t} de ${s}${a}.`:s?`Vas a ${t} de ${s}${a}.`:`${t}${a} hoy.`:"Sin registrar hoy."}const Bo=["","Hoy ha sido un día difícil.","Hoy ha sido un día flojo.","Hoy ha sido un día normal.","Hoy ha sido un día bueno.","Hoy ha sido un día genial."];function Ro(e){const t=[Bo[e.mood],`Has dormido ${E(e.sleepHours)} horas y has dedicado ${E(e.studyHours)} horas al estudio.`,Mn(e.sleepHours),zo(e.studyHours)];e.energy&&t.push(`Tu energía se ha sentido ${["","muy baja","baja","normal","alta","muy alta"][e.energy].toLowerCase()}.`),e.stress&&t.push(`El estrés ha sido ${["","muy bajo","bajo","normal","alto","muy alto"][e.stress].toLowerCase()}.`);const a=Object.values(e.habits||{}).filter(Boolean).length;a&&t.push(`Has cumplido ${a} de tus hábitos de hoy.`);const s=e.counters?.water||0;return s>=6&&t.push(`Además, has bebido ${s} vasos de agua.`),t.join(" ")}function Go(e,t=!1){if(!e.count)return"Aún no hay entradas en este período.";const a=e.metricCounts?.mood?`${E(e.mood)}/5`:"sin valoración registrada",s=e.metricCounts?.sleep?`${E(e.sleep)} h de media`:"sin datos de sueño",n=e.metricCounts?.study?`${E(e.study)} h por día con dato`:"sin datos de dedicación",o=e.count===1?"día":"días",r=e.metricCounts?.study?`${E(e.totalStudy)} horas en total`:"sin datos de dedicación",i=t?`En el período has registrado ${e.count} ${o}. Tu valoración media ha sido ${a}. Estudio: ${r}; sueño: ${s}.`:`En la semana has registrado ${e.count} ${o}. Tu valoración media ha sido ${a}; el sueño, ${s}, y la dedicación, ${n}.`,l=[];return Number.isFinite(e.energy)&&l.push(`Tu energía media ha sido ${E(e.energy)}/5`),Number.isFinite(e.stress)&&l.push(`el estrés medio ${E(e.stress)}/5`),e.words&&l.push(`has escrito ${E(e.words)} palabras`),l.length?`${i} ${l.join(", ")}.`:i}function Io(e,t=y()){const a=ve(e,D(t,-6),t),s=ve(e,D(t,-13),D(t,-7)),n=[];if(a.length>=3&&s.length>=3){const p=_e(a),v=_e(s),b=(S,H,O,j)=>{const[M,T]=S;if(p.metricCounts[T]<3||v.metricCounts[T]<3)return;const _=p[M]-v[M];_>=H?n.push(O):_<=-H&&n.push(j)};b(["sleepMedian","sleep"],.5,"En tus registros recientes, el valor habitual de sueño ha subido respecto a la semana anterior.","En tus registros recientes, el valor habitual de sueño ha bajado respecto a la semana anterior."),b(["studyMedian","study"],.5,"Has dedicado más tiempo al estudio o enfoque que en los 7 días anteriores.","Has dedicado menos tiempo al estudio o enfoque que en los 7 días anteriores."),b(["moodMedian","mood"],.4,"Tu valoración habitual del día ha subido respecto a la semana anterior.","Tu valoración habitual del día ha bajado respecto a la semana anterior."),b(["energy","energy"],.4,"Tu energía registrada ha sido mayor que en la semana anterior.","Tu energía registrada ha sido menor que en la semana anterior."),b(["stress","stress"],.4,"Tu estrés registrado ha sido mayor que en la semana anterior.","Tu estrés registrado ha sido menor que en la semana anterior."),!n.length&&p.metricCounts.mood>=3&&v.metricCounts.mood>=3&&n.push("Tus registros de ánimo se han mantenido bastante estables respecto a los 7 días anteriores.")}const o=ve(e,D(t,-29),t),r=p=>p.filter(v=>Number.isFinite(v.mood)).length>=5,i=o.filter(p=>Number.isFinite(p.sleepHours)&&p.sleepHours>7),l=o.filter(p=>Number.isFinite(p.sleepHours)&&p.sleepHours<=7);r(i)&&r(l)&&Ae(i.map(v=>v.mood))-Ae(l.map(v=>v.mood))>=.5&&n.push("En tus registros del último mes, dormir más de 7 horas coincide con una valoración habitual algo más alta. Es una asociación, no una causa demostrada.");const c=o.filter(p=>Number.isFinite(p.counters?.exercise)),m=c.filter(p=>p.counters.exercise>=20),h=c.filter(p=>p.counters.exercise<20);return r(m)&&r(h)&&Ae(m.map(v=>v.mood))-Ae(h.map(v=>v.mood))>=.5&&n.push("En tus registros, los días con 20 minutos o más de ejercicio coinciden con una valoración habitual algo más alta. Es una asociación, no una causa demostrada."),n}const Uo=["lunes","martes","miércoles","jueves","viernes","sábado","domingo"];function _o(e){return(ze(e).getDay()+6)%7}function Wo(e=[],t=[],a=y()){const s=[...new Map(e.filter(o=>o?.date&&o.date<=a).map(o=>[o.date,o])).values()],n=Uo.map((o,r)=>({index:r,name:o,entries:0,moodTotal:0,moodCount:0,habitDone:0,habitSlots:0}));for(const o of s){const r=n[_o(o.date)];r.entries++,Number.isFinite(o.mood)&&(r.moodTotal+=o.mood,r.moodCount++);for(const i of t)r.habitSlots++,o.habits?.[i.id]&&r.habitDone++}return n.map(o=>({index:o.index,name:o.name,entries:o.entries,mood:o.moodCount?o.moodTotal/o.moodCount:null,moodCount:o.moodCount,habitPct:o.habitSlots?Math.round(o.habitDone/o.habitSlots*100):null,habitDays:o.habitDone}))}function Hs(e=[],t="mood",a=3){const s=c=>t==="habit"?c.habitPct:c.mood,n=c=>t==="habit"?c.habitSlots:c.moodCount,o=e.filter(c=>n(c)>=a&&Number.isFinite(s(c)));if(o.length<3)return"";const r=[...o].sort((c,m)=>s(m)-s(c)),i=r[0],l=r[r.length-1];return t==="habit"?i.habitPct-l.habitPct<15?"Cumples la rutina parecido todos los días de la semana.":`Los ${i.name} cumples la rutina más a menudo (${i.habitPct}%) y los ${l.name}, menos (${l.habitPct}%).`:s(i)-s(l)<.4?"Tu ánimo se parece bastante todos los días de la semana.":`Los ${i.name} es cuando mejor te sientes (${E(s(i))}/5 de media) y los ${l.name}, cuando más te cuesta (${E(s(l))}/5).`}const Ke=29.530588853,Qo="2000-01-06",Ps=2.5,_a=[{id:"shore",label:"A la orilla",desc:"Muy cerca: vuelve en cuanto suba la marea.",min:2,max:7,chance:.94,miles:9,reach:"se ve desde la arena"},{id:"breeze",label:"Brisa costera",desc:"Un par de semanas dando tumbos por la bahía.",min:9,max:28,chance:.8,miles:17,reach:"cruza la bahía"},{id:"current",label:"Corriente del norte",desc:"Semanas de travesía; ya no se ve desde la playa.",min:28,max:80,chance:.63,miles:34,reach:"dobló el cabo"},{id:"deep",label:"Alta mar",desc:"Meses lejos. Puede que no vuelva nunca.",min:80,max:240,chance:.42,miles:58,reach:"más allá del mapa"}],Vo=["la corriente del Golfo","el Noroeste","los Alisios","la deriva de Levante","el canal viejo","la corriente fría","el remolino de poniente","la resaca del faro"],la=[{id:"amber",name:"ámbar",hex:"#B4762E"},{id:"green",name:"verde botella",hex:"#3E6B4F"},{id:"blue",name:"azul cobalto",hex:"#3B5F86"},{id:"smoke",name:"humo",hex:"#6E6257"},{id:"rose",name:"rosa viejo",hex:"#A65B4E"},{id:"clear",name:"cristal",hex:"#7F8E93"}];function va(e=""){let t=2166136261;const a=String(e);for(let s=0;s<a.length;s++)t^=a.charCodeAt(s),t=Math.imul(t,16777619);return t>>>0}function qn(e=0){let t=e>>>0;return()=>{t=t+1831565813>>>0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a>>>0,((a^a>>>14)>>>0)/4294967296}}const kt=(e,t)=>(e%t+t)%t,zs=(e,t)=>e[Math.floor(t()*e.length)%e.length],Zo=["luna nueva","luna creciente","cuarto creciente","gibosa creciente","luna llena","gibosa menguante","cuarto menguante","luna menguante"],ca=e=>Math.min(1,Math.max(0,e));function En(e=new Date){const t=e.getHours()+e.getMinutes()/60+e.getSeconds()/3600,a=6,s=18,n=r=>Math.round(r*10)/10;if(t>=a&&t<s){const r=(t-a)/(s-a);return{x:n(8+84*r),y:n(46-6*Math.sin(Math.PI*r)),moonX:50,moonY:42,phase:r<.22?"morning":r>.78?"evening":"day",progress:n(r)}}const o=t>=s?(t-s)/12:(t+6)/12;return{x:t<a?8:92,y:94,moonX:n(8+84*o),moonY:n(58-20*Math.sin(Math.PI*o)),phase:"night",progress:n(o)}}function Yo(e=y()){return kt(ne(Qo,e)+.765,Ke)}function is(e=y()){const t=Yo(e),a=Ke/2,s=Math.min(kt(t,a),a-kt(t,a)),n=t<a;let o="swell",r="Marea en movimiento",i=.6;s<=Ps?(o="spring",r="Marea viva",i=1):Math.abs(kt(t,a)-a/2)<=Ps?(o="neap",r="Marea muerta",i=.28):n?(o="rising",r="Marea creciente",i=.7):(o="falling",r="Marea menguante",i=.5);const l=ca((1-Math.cos(2*Math.PI*t/Ke))/2),c=Zo[Math.floor(kt(t+Ke/16,Ke)/(Ke/8))%8];return{age:t,key:o,name:r,strength:i,rising:n,illum:l,moon:Math.round(l*100)/100,phase:c}}function Jo(e=y()){return is(e).key==="spring"}function Ko(e,t=16){for(let a=0;a<=t;a++){const s=D(e,a);if(Jo(s))return s}return e}const Kt=[{id:"calm",label:"mar en calma",short:"calma",desc:"Agua plana: la botella avanza despacio, pero no se pierde de vista.",speed:.82,push:0,water:.34,rough:0},{id:"haze",label:"bruma",short:"bruma",desc:"Niebla espesa: se pierde la referencia de la orilla algún día más.",speed:.92,push:1,water:.3,rough:.25},{id:"wind",label:"viento a favor",short:"viento",desc:"Sopla hacia fuera y hacia casa: la travesía se acelera.",speed:1.24,push:0,water:.58,rough:.5},{id:"rain",label:"lluvia",short:"lluvia",desc:"Llueve sobre el agua: corrientes revueltas, llegadas inciertas.",speed:1.05,push:1,water:.66,rough:.62},{id:"gale",label:"temporal",short:"temporal",desc:"Con este mar no entra nada en la bahía: la botella espera fuera.",speed:1.42,push:2,water:.92,rough:1}],za=[{id:"levante",label:"levante"},{id:"poniente",label:"poniente"},{id:"noroeste",label:"el noroeste"},{id:"gallego",label:"el gallego"},{id:"suroeste",label:"suroeste"},{id:"mistral",label:"el mistral"},{id:"libeccio",label:"libeccio"},{id:"gregal",label:"gregal"}],Fs=new Set(["levante","el mistral","gregal","suroeste"]);function An(e=y()){const t=qn(va(`parte|${e}`)),a=t(),s=t(),n=t(),o=Math.min(Kt.length-1,Math.floor(Math.pow(a,1.7)*Kt.length)),r=Kt[o],i=za[Math.floor(s*za.length)%za.length],l=Math.round(4+n*12+r.rough*38),c=is(e);return{date:e,weather:r,wind:{...i,kmh:l,offshore:Fs.has(i.id)},level:ca(r.water*.7+c.strength*.42),rough:ca(r.rough*.72+(c.strength-.5)*.4),speed:r.speed,push:Fs.has(i.id)?r.push+1:r.push,tide:c}}function Xo(e="breeze"){return _a.find(t=>t.id===e)||_a.find(t=>t.id==="breeze")}function Ln(e=3){if(e==null||e==="")return 3;const t=Number(e);return Number.isFinite(t)?Math.max(1,Math.min(5,Math.round(t))):3}function er({text:e="",castAt:t=y(),sea:a="breeze",id:s="",force:n=3}={}){const o=Xo(a),r=Ln(n),i=qn(va(`${t}|${o.id}|${s}|${String(e).trim().slice(0,220)}`)),l=i(),c=i(),m=i(),h=i(),p=An(t),v=.7+(r-1)*.225,b=Math.max(1,Math.round((o.min+l*(o.max-o.min))*v)),S=c<o.chance,H=Math.max(4,Math.round(o.miles*(.7+m*.6)*p.speed)),O=D(t,b),j=p.push>0?D(O,p.push):O,M=S?Ko(j):O,T=Math.max(3,Math.round(b*.22));return{sea:o.id,force:r,returns:S,speed:H,driftDays:Math.max(1,ne(t,M)),arriveOn:M,lostOn:S?null:D(t,b+T),current:zs(Vo,i),glass:zs(la,i).id,mottoSeed:Math.floor(h*1e6),weather:p.weather.id,wind:p.wind.label,windSpeed:p.wind.kmh,push:p.push}}const qt=e=>typeof e=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e);function Wa(e,t=y()){return!e||!qt(e.castAt)||!qt(t)?0:Math.max(0,ne(e.castAt,t))}function Ne(e,t=y()){return e?e.status&&e.status!=="drifting"?e.status:e.returns?t>=(e.arriveOn||e.castAt)?"returned":"drifting":e.lostOn&&t>=e.lostOn?"lost":"drifting":"drifting"}function ls(e,t=y()){return!!e&&Ne(e,t)==="returned"}function Cn(e,t=y()){if(!e||typeof e!="object")return e;const a=Ne(e,t);if(a===e.status)return e;const s=new Date().toISOString();return a==="returned"?{...e,status:"returned",returnedAt:e.arriveOn||y(),seen:!1,updatedAt:s}:a==="lost"?{...e,status:"lost",lostAt:e.lostOn||y(),seen:!1,updatedAt:s}:e}function Qa(e){return e?!e.returns&&qt(e.lostOn)?e.lostOn:qt(e.arriveOn)?e.arriveOn:qt(e.castAt)?e.castAt:null:null}function tr(e,t=y()){const a=Qa(e);if(!a)return{fate:Ne(e,t),pct:0,atSea:0,total:0,horizon:null,miles:0,milesHome:null,label:"sin fecha de salida",phase:"mid"};const s=Math.max(1,ne(e.castAt,a)),n=Wa(e,t),o=Ne(e,t),r=o==="drifting"?ca(n/s):1,i=Math.round(n*(e.speed||10)),l=o==="drifting"&&!e.returns?null:Math.max(0,s-n)*(e.speed||10);return{fate:o,pct:r,atSea:n,total:s,horizon:a,miles:i,milesHome:l===null?null:Math.round(l),label:o==="drifting"?`día ${n} de ${s}`:o==="returned"?"de vuelta a casa":"a pique",phase:o==="returned"?"home":o==="lost"?"lost":r<.18?"near":r<.62?"mid":"far"}}function Ut(e=[],t=y()){const a={drifting:[],returned:[],lost:[],kept:[]};for(const s of e)a[Ne(s,t)]?.push(s);a.kept=e.filter(s=>s.kept&&Ne(s,t)==="returned"),a.drifting.sort((s,n)=>s.castAt.localeCompare(n.castAt));for(const s of["returned","lost"])a[s].sort((n,o)=>String(o.returnedAt||o.lostAt||o.castAt).localeCompare(String(n.returnedAt||n.lostAt||n.castAt)));return a.returned.sort((s,n)=>(s.seen===!0)-(n.seen===!0)||String(n.returnedAt||"").localeCompare(String(s.returnedAt||""))),a.kept.sort((s,n)=>String(n.keptOn||"").localeCompare(String(s.keptOn||""))),a}function ya(e=[],t=y()){return e.filter(a=>Ne(a,t)==="returned")}function Bs(e,t=y()){if(!e)return"";const a=tr(e,t);if(!a.total)return"Sin fecha de salida.";if(a.fate==="returned"){const s=Math.max(0,ne(e.castAt,Qa(e)));return s<=1?"Volvió al día siguiente.":`Volvió a los ${s} días, con la marea viva.`}if(a.fate==="lost"){const s=Math.max(0,ne(e.castAt,Qa(e)));return s<=1?"Se perdió en la primera noche.":`Se perdió a los ${s} días de viaje.`}return`Lleva ${a.atSea===1?"un día":`${a.atSea} días`} en el mar.`}function ar(e=[],t=y()){const a=Array.isArray(e)?e.filter(Boolean):[],s=Ut(a,t),n=a.length,o=s.returned.length+s.lost.length,r=a.reduce((c,m)=>c+Math.round(Wa(m,t)*(m.speed||0)),0),i=s.returned.filter(c=>String(c.reply||"").trim()).length,l=s.drifting.reduce((c,m)=>{const h=Wa(m,t);return!c||h>c.days?{bottle:m,days:h}:c},null);return{sent:n,drifting:s.drifting.length,returned:s.returned.length,lost:s.lost.length,kept:s.kept.length,waiting:s.returned.filter(c=>c.seen!==!0).length,answered:i,returnPct:o?Math.round(s.returned.length/o*100):null,miles:r,oldestAtSea:l,latestReturn:s.returned[0]||null}}function sr(e=""){const t=String(e||"").trim();return t?t.split(/\s+/).length:0}const Va=new Set,I=new Map;let ie=null;const et="diario.pendiente.v1";function nr(){const e={};for(const[t,a]of I)e[t]={value:a.value,label:a.label};return e}function Ct(){const e=I.size?JSON.stringify(nr()):null;Wt(et)!==e&&je(et,e)}function or(){const e=Wt(et);if(!e)return;let t=null;try{t=JSON.parse(e)}catch{je(et,null);return}if(!t||typeof t!="object"){je(et,null);return}for(const[n,o]of Object.entries(t))!o||typeof o!="object"||I.has(n)||I.set(n,{value:o.value??null,label:String(o.label||"Los datos"),prune:null});if(!I.size){je(et,null);return}const[a,s]=[...I.entries()][I.size-1];ie={key:a,label:s.label,reason:"unknown",at:new Date().toISOString(),message:`${s.label}: quedó algo sin guardar la última vez, se sigue intentando.`}}function rr(e){const a=`${String(e?.name||"")} ${e?.message||""}`;return/quota|QuotaExceeded|NS_ERROR_DOM_QUOTA_REACHED|storage.*full|lleno|exceeded/i.test(a)?"full":/security|SecurityError|denied|blocked|not allowed|insecure/i.test(a)?"blocked":"unknown"}function cs(e){return e==="full"?"El almacenamiento del navegador está lleno.":e==="blocked"?"El navegador tiene bloqueado el almacenamiento para esta página.":"El navegador no ha podido guardar los datos."}function Tn(){return ie}function jn(){return I.size}function _t(){return I.size>0}function ir(e){return typeof e!="function"?()=>{}:(Va.add(e),()=>Va.delete(e))}function Tt(){const e={issue:ie,pending:I.size};for(const t of[...Va])try{t(e)}catch{}}function Wt(e){try{return localStorage.getItem(e)}catch{return null}}function je(e,t){try{if(t===null)localStorage.removeItem(e);else if(localStorage.setItem(e,t),localStorage.getItem(e)!==t)return{ok:!1,reason:"full"};return{ok:!0}}catch(a){return{ok:!1,reason:rr(a),error:a}}}function We(e,t,{label:a="Los datos",prune:s=null}={}){let n=je(e,t);if(!n.ok&&n.reason==="full"&&typeof s=="function"){try{s()}catch{}n=je(e,t)}return n.ok?(I.delete(e),I.size||(ie=null),Ct(),Tt(),{ok:!0}):(I.set(e,{value:t,label:a,prune:s}),ie={key:e,label:a,reason:n.reason,at:new Date().toISOString(),message:`${a}: ${cs(n.reason)}`},Ct(),Tt(),{ok:!1,reason:n.reason,queued:!0,message:ie.message})}function Dn(){if(!I.size)return{ok:!0,remaining:0,recovered:0};let e=0;for(const[t,a]of[...I.entries()]){let s=je(t,a.value);if(!s.ok&&s.reason==="full"&&typeof a.prune=="function"){try{a.prune()}catch{}s=je(t,a.value)}s.ok&&(I.delete(t),e++)}if(!I.size)ie=null;else{const[t,a]=[...I.entries()][I.size-1];ie={key:t,label:a.label,reason:ie?.reason||"unknown",at:new Date().toISOString(),message:`${a.label}: ${cs(ie?.reason||"unknown")}`}}return Ct(),Tt(),{ok:!I.size,remaining:I.size,recovered:e}}function lr(e){return I.delete(e)?(I.size||(ie=null),Ct(),Tt(),!0):!1}function cr(){I.clear(),ie=null,Ct(),Tt()}or();const ut="diario.drafts.v1",dr=6e3,ur=60,Q={entry:e=>`entrada:${e}`,bottle:()=>"botella",reply:e=>`respuesta:${e}`,tomorrow:()=>"manana",setup:()=>"perfil",wizard:()=>"asistente"};function le(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Xt(e,t=dr){const a=String(e??"");return a.length>t?a.slice(0,t):a}function gt(){const e=Wt(ut);if(!e)return{};try{const t=JSON.parse(e);return le(t)?t:{}}catch{return{}}}function pr(e,t,a=null){const s=Object.keys(e);if(s.length<=t)return e;const n=s.filter(i=>i!==a).sort((i,l)=>String(e[l]?.savedAt||"").localeCompare(String(e[i]?.savedAt||""))),o=Math.max(0,t-(a&&a in e?1:0)),r=Object.fromEntries(n.slice(0,o).map(i=>[i,e[i]]));return a&&a in e&&(r[a]=e[a]),r}function ds(e,t=null){const a=Object.keys(e);if(!a.length){const i=We(ut,null,{label:"Los borradores"});return{ok:i.ok,map:{},reason:i.reason}}const s=[];for(const i of[1,2,4,8])s.push(Math.max(1,Math.ceil(a.length/i)));s.push(1);let n=1/0,o=e,r={ok:!1,reason:"unknown"};for(const i of s){const l=Math.min(i,a.length);if(!(l>=n)){if(n=l,o=pr(e,Math.min(l,ur),t),r=We(ut,JSON.stringify(o),{label:"Los borradores"}),r.ok)return{ok:!0,map:o};if(l===1)break}}return{ok:!1,map:o,reason:r.reason}}function $a(e,t){if(!e)return null;const a={};let s=0;for(const[i,l]of Object.entries(le(t)?t:{}))if(l!=null){if(typeof l=="string"){const c=Xt(l);if(!c.trim())continue;a[i]=c,s++}else if(typeof l=="number"||typeof l=="boolean")a[i]=l,s++;else if(Array.isArray(l)){const c=l.map(m=>typeof m=="string"?Xt(m,600):m).filter(m=>typeof m!="string"||m.trim());c.length&&(a[i]=c,s++)}else if(le(l)){const c={};for(const[m,h]of Object.entries(l))typeof h=="number"||typeof h=="boolean"?c[m]=h:typeof h=="string"&&h.trim()&&(c[m]=Xt(h,600));Object.keys(c).length&&(a[i]=c)}}if(!s)return ce(e),null;const n=gt(),o=new Date().toISOString();n[e]={data:a,savedAt:o};const r=ds(n,e);return{savedAt:o,ok:r.ok,reason:r.reason}}function us(e){if(!e)return null;const t=gt()[e];return le(t)?t:null}function bt(e){const t=us(e);return t&&le(t.data)?t.data:null}function ce(e){if(!e)return!1;const t=gt();return e in t?(delete t[e],ds(t),!0):!1}function mr(){const e=gt();return Object.entries(e).filter(([,t])=>le(t)&&le(t.data)).map(([t,a])=>({scope:t,savedAt:a.savedAt||"",data:a.data})).sort((t,a)=>String(a.savedAt).localeCompare(String(t.savedAt)))}function Nn(e,t){const a=us(e);return a?.savedAt?t?String(a.savedAt)>String(t):!0:!1}function hr(e,t=Date.now()){const a=us(e);if(!a?.savedAt)return null;const s=Date.parse(a.savedAt);return Number.isFinite(s)?Math.max(0,Math.round((t-s)/6e4)):null}function fr(e,t=Date.now()){const a=bt(e);if(!a)return null;const s=Object.values(a).filter(r=>typeof r=="string").join(" ").trim().split(/\s+/).filter(Boolean).length,n=hr(e,t),o=n===null?"":n<1?"ahora mismo":n<60?`hace ${n} min`:`hace ${Math.round(n/60)} h`;return{words:s,when:o,minutes:n}}function Rs(e){if(e==="botella")return"Una botella sin soltar";if(e==="perfil")return"Tu perfil, a medio editar";if(e==="asistente")return"La bienvenida, a medio rellenar";if(e==="manana")return"La lista de mañana";if(e.startsWith("respuesta:"))return"Una respuesta a una botella";if(e.startsWith("entrada:")){const t=e.slice(8);return/^\d{4}-\d{2}-\d{2}$/.test(t)?`La entrada de ${R(t)}`:"Una entrada sin terminar"}return"Un texto a medias"}function gr(){const e=gt();return Object.fromEntries(Object.entries(e).filter(([,t])=>le(t)&&le(t.data)))}function br(e){const t=le(e)?e:{},a=gt();let s=!1;for(const[o,r]of Object.entries(t)){if(!le(r)||!le(r.data))continue;const i=typeof r.savedAt=="string"?r.savedAt:"";if(!i)continue;const l=a[o];if(l&&String(l.savedAt||"")>=i)continue;const c={};for(const[m,h]of Object.entries(r.data))if(typeof h=="string"){const p=Xt(h);p.trim()&&(c[m]=p)}else(typeof h=="number"||typeof h=="boolean")&&(c[m]=h);Object.keys(c).length&&(a[o]={data:c,savedAt:i},s=!0)}if(!s)return{ok:!0,map:a,merged:0};const n=ds(a);return{ok:n.ok,map:n.map,merged:Object.keys(t).length}}function vr(){return We(ut,null,{label:"Los borradores"}),!0}const wa="diario.entries.v1",Sa="diario.habits.v1",ka="diario.setup.v1",Qt="diario.thoughts.v1";class Za extends Error{constructor(t,{key:a,reason:s}={}){super(`${t}: no se ha podido guardar. ${cs(s)} Lo intento otra vez en cuanto pueda, pero no cierres la pestaña si acabas de escribir algo largo.`),this.name="SaveError",this.key=a,this.reason=s,this.queued=!0}}function xa(e,t,{label:a="Los datos",prune:s=null}={}){const n=We(e,t,{label:a,prune:s});if(!n.ok)throw new Za(a,{key:e,reason:n.reason});return n}function Ma(e){return Wt(e)}function On(e){const t=new Map(e.map(([s])=>[s,Ma(s)])),a=[];for(const[s,n,o="Los datos"]of e){const r=We(s,n,{label:o});if(!r.ok){lr(s);let i=!1;for(const l of a.reverse())We(l,t.get(l),{label:"La copia anterior"}).ok||(i=!0);throw i?new Za("La copia de seguridad",{key:s,reason:r.reason}):new Za(o,{key:s,reason:r.reason})}a.push(s)}}const X={completed:!1,name:"",age:null,ageGroup:"young",interests:[],ritual:"night",tone:"warm",savedQuotes:[],purpose:"calm",motto:"Un día a la vez.",theme:"paper",sleepGoal:7.5,studyGoal:2,waterGoal:8,showDailyWord:!0,showDailyTip:!0,crisisAlertsEnabled:!0,trustedContactName:"",trustedContactPhone:"",sidebarCollapsed:!1,reduceMotion:!1,counters:[],parts:[],updatedAt:null};function qa(e,t="young"){const a=Number(e);return!Number.isFinite(a)||a<=0?t:a<=18?"teen":a<=26?"young":a<=49?"adult":"senior"}function Re(e,t){if(typeof e!="string")throw new Error(`${t} debe ser texto.`);if(e.length>2e4)throw new Error(`${t} debe tener como máximo 20.000 caracteres.`);return e}function yr(e,t){const a=Bt.find(i=>i.key===t);if(e==null||e==="")return 0;const s=Number(e),n=a?.min??0,o=a?.max??99999,r=a?.label??t;if(!Number.isFinite(s)||s<n||s>o)throw new Error(`${r} debe estar entre ${n} y ${o}.`);return Math.round(s*10)/10}const Hn=/^[\w-]{1,24}$/;function Gs(e){if(e==null||e==="")return null;const t=Number(e);if(!Number.isInteger(t)||t<1||t>5)throw new Error("Las escalas van de 1 a 5.");return t}function $r(e){const t={};if(e==null)return t;if(typeof e!="object"||Array.isArray(e))throw new Error("Las partes del diario no son válidas.");for(const[a,s]of Object.entries(e)){if(!Hn.test(a))continue;if(typeof s!="string")throw new Error(`La parte «${a}» debe ser texto.`);const n=s.trim();if(n){if(n.length>4e3)throw new Error("Cada parte del diario admite como máximo 4.000 caracteres.");if(t[a]=n,Object.keys(t).length>=Ie)break}}return t}function Ea(e){if(!e||typeof e!="object"||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(new Date(e.date+"T12:00:00").getTime())||y(new Date(e.date+"T12:00:00"))!==e.date)throw new Error("Hay una fecha no válida.");if(e.date>y())throw new Error("No se pueden registrar días futuros.");if(!Number.isInteger(e.mood)||e.mood<1||e.mood>5)throw new Error("Selecciona cómo te ha ido el día.");for(const r of["sleepHours","studyHours"]){const i=e[r];if(typeof i!="number"||!Number.isFinite(i)||i<0||i>24)throw new Error("Las horas deben estar entre 0 y 24.")}const t=Object.fromEntries(Ao.map(r=>[r,Re(e[r]??"",r)]));if(!t.generalDay.trim())throw new Error("Escribe cómo ha ido tu día en general.");const a=Re(e.capsule??"","La cápsula del día").slice(0,300);if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(r=>typeof r!="string"||r.length>2e4))throw new Error("El agradecimiento debe tener tres campos de texto.");if(e.goals!==void 0&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(r=>typeof r!="string"||r.length>500)))throw new Error("La lista de objetivos no es válida.");const s=Array.isArray(e.tags)?e.tags:[];if(s.length>20)throw new Error("Puedes elegir como máximo 20 etiquetas.");for(const r of s)if(typeof r!="string"||!r.trim()||r.length>40)throw new Error("Hay una etiqueta no válida.");const n={};for(const r of Bt)n[r.key]=yr(e.counters?.[r.key],r.key);for(const r of Object.keys(e.counters||{})){if(!Hn.test(r)||r in n)continue;const i=Number(e.counters[r]);Number.isFinite(i)&&i>=0&&i<=99999&&(n[r]=Math.round(i*10)/10)}if(Object.keys(n).length>Ue)throw new Error(`No puedes tener más de ${Ue} contadores.`);const o={};if(e.habits!==void 0&&(typeof e.habits!="object"||e.habits===null||Array.isArray(e.habits)))throw new Error("Los hábitos no son válidos.");for(const[r,i]of Object.entries(e.habits||{}))typeof r=="string"&&r.length<=60&&(o[r]=i===!0);return{id:typeof e.id=="string"?e.id:crypto.randomUUID(),date:e.date,mood:e.mood,sleepHours:e.sleepHours,studyHours:e.studyHours,energy:Gs(e.energy),stress:Gs(e.stress),...t,capsule:a,gratitude:e.gratitude.map(r=>Re(r??"","El agradecimiento")),goals:(e.goals||[]).map(r=>Re(r,"Un objetivo")),tags:[...new Set(s.map(r=>r.trim()))],counters:n,parts:$r(e.parts),habits:o,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function Aa(e){const t=e.map(Ea).sort((a,s)=>a.date.localeCompare(s.date));return t.map(a=>({...a,dayNumber:Gt(a.date,t)}))}function La(){const e=Ma(wa);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se han podido leer tus entradas.");return Aa(t)}function Pn(e){const t=Aa(e);return xa(wa,JSON.stringify(t),{label:"El cuaderno"}),t}function zn(e){const t=Ea(e);t.updatedAt=new Date().toISOString();const a=La();return Pn([...a.filter(s=>s.date!==t.date),t])}function wr(e){return Pn(La().filter(t=>t.date!==e))}function Sr(){On([[wa,null,"El cuaderno"],[Sa,null,"Los hábitos"],[ka,null,"El perfil"],[Qt,null,"El mar"]]),cr()}function Qe(e){if(!e||typeof e!="object")throw new Error("Hábito no válido.");const t=Re(e.name??"","El nombre del hábito").trim();if(!t)throw new Error("El hábito necesita un nombre.");if(t.length>40)throw new Error("El nombre del hábito debe tener 40 caracteres o menos.");return{id:typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),name:t,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString()}}function Vt(){const e=Ma(Sa);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se han podido leer tus hábitos.");return t.map(Qe)}function Fn(e){const t=e.map(Qe);return xa(Sa,JSON.stringify(t),{label:"Los hábitos"}),t}function da(e){const t=Qe(e),a=Vt();return Fn([...a.filter(s=>s.id!==t.id),t])}function kr(e){return Fn(Vt().filter(t=>t.id!==e))}const xr=new Set(_a.map(e=>e.id)),Mr=new Set(Kt.map(e=>e.id)),Is=new Set(la.map(e=>e.id)),qr=new Set(["drifting","returned","lost"]);function Fe(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;const t=new Date(`${e}T12:00:00`);return Number.isFinite(t.getTime())&&y(t)===e}function vt(e){if(!e||typeof e!="object")throw new Error("El pensamiento no es válido.");const t=Re(e.text??"","El pensamiento").trim().slice(0,1200);if(!t)throw new Error("Escribe un pensamiento antes de echar la botella al mar.");const a=Fe(e.castAt)&&e.castAt<=y()?e.castAt:y(),s=xr.has(e.sea)?e.sea:"breeze",n=Ln(e.force),o=Number.isInteger(e.mood)&&e.mood>=1&&e.mood<=5?e.mood:null,r=typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),i=e.returns===!0,l=Fe(e.arriveOn)?ne(a,e.arriveOn):null,c=Number.isInteger(e.driftDays)&&e.driftDays>=1&&l===e.driftDays&&(i||Fe(e.lostOn)&&e.lostOn>e.arriveOn),m=typeof e.glass=="object"&&e.glass?e.glass.id:e.glass,h=c?{force:n,returns:i,speed:Number.isFinite(e.speed)?Math.max(1,Math.round(e.speed)):10,driftDays:Math.max(1,e.driftDays),arriveOn:e.arriveOn,lostOn:Fe(e.lostOn)?e.lostOn:null,current:typeof e.current=="string"?e.current.slice(0,60):"",mottoSeed:Number.isFinite(e.mottoSeed)?Math.round(e.mottoSeed):0,weather:Mr.has(e.weather)?e.weather:null,wind:typeof e.wind=="string"?e.wind.slice(0,24):"",windSpeed:Number.isFinite(e.windSpeed)?Math.max(0,Math.round(e.windSpeed)):null,push:Number.isInteger(e.push)?Math.max(0,Math.min(4,e.push)):0}:er({text:t,castAt:a,sea:s,id:r,force:n});return{id:r,text:t,castAt:a,mood:o,sea:s,...h,status:qr.has(e.status)?e.status:"drifting",glass:Is.has(m)?m:Is.has(h.glass)?h.glass:"amber",returnedAt:Fe(e.returnedAt)?e.returnedAt:null,lostAt:Fe(e.lostAt)?e.lostAt:null,reply:Re(e.reply??"","La respuesta").trim().slice(0,1200),kept:!!e.kept,keptOn:Fe(e.keptOn)?e.keptOn:null,seen:e.seen===!0,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function Bn(e,t=y()){return e.map(vt).map(a=>a.castAt>t?{...a,castAt:t}:a).map(a=>Cn(a,t)).sort((a,s)=>a.castAt.localeCompare(s.castAt)||a.id.localeCompare(s.id))}function ps(e){const t=Bn(e);return xa(Qt,JSON.stringify(t),{label:"El mar"}),t}function Er(e){const t=y();let a=!1;const s=e.map(n=>{const o=Cn(n,t);return o!==n&&(a=!0),o});return a&&We(Qt,JSON.stringify(s),{label:"El mar"}),s}function Ve(){const e=Ma(Qt);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se ha podido leer tu mar de pensamientos.");return Er(t.map(vt))}function Ar(e){const t=Ve().find(n=>n.id===e?.id)||null,a=t?Object.fromEntries(["sea","force","returns","speed","driftDays","arriveOn","lostOn","current","glass","mottoSeed","status"].map(n=>[n,t[n]])):{},s=vt({...t,...e,...a,updatedAt:new Date().toISOString()});return ps([...Ve().filter(n=>n.id!==s.id),s])}function tt(e,t={}){const a=Ve();return ps(a.map(s=>s.id===e?{...s,...t,updatedAt:new Date().toISOString()}:s))}function Lr(e){return ps(Ve().filter(t=>t.id!==e))}function Rn(e){return tt(e,{status:"drifting",castAt:y(),driftDays:null,arriveOn:null,lostOn:null,returnedAt:null,lostAt:null,seen:!1,reply:"",kept:!1,keptOn:null})}function Ze(e={}){const t=e&&typeof e=="object"?e:{},a=new Set(se.map(b=>b.id)),s=new Set(bn.map(b=>b.id)),n=new Set(lt.map(b=>b.id)),o=new Set(Rt.map(b=>b.id)),r=new Set(ct.map(b=>b.id)),i=new Set(dt.map(b=>b.id)),l=(b,S,H,O)=>{const j=Number(b);return Number.isFinite(j)?Math.min(H,Math.max(S,Math.round(j*10)/10)):O};let c=null;if(t.age!==void 0&&t.age!==null&&t.age!==""){const b=Math.round(Number(t.age));Number.isFinite(b)&&b>=8&&b<=115&&(c=b)}const m=n.has(t.ageGroup)?t.ageGroup:X.ageGroup,h=c!==null?qa(c,m):m,p=Array.isArray(t.interests)?[...new Set(t.interests.filter(b=>o.has(b)))]:[],v=Array.isArray(t.savedQuotes)?[...new Set(t.savedQuotes.filter(b=>typeof b=="string"&&b.trim().length>0).map(b=>b.trim().slice(0,260)))].slice(0,40):[];return{completed:!!t.completed,name:String(t.name??"").trim().slice(0,50),age:c,ageGroup:h,interests:p,ritual:r.has(t.ritual)?t.ritual:X.ritual,tone:i.has(t.tone)?t.tone:X.tone,savedQuotes:v,purpose:s.has(t.purpose)?t.purpose:X.purpose,motto:String(t.motto??X.motto).trim().slice(0,140)||X.motto,theme:a.has(t.theme)?t.theme:X.theme,sleepGoal:l(t.sleepGoal,4,14,X.sleepGoal),studyGoal:l(t.studyGoal,0,16,X.studyGoal),waterGoal:l(t.waterGoal,1,25,X.waterGoal),showDailyWord:t.showDailyWord===void 0?!0:!!t.showDailyWord,showDailyTip:t.showDailyTip===void 0?!0:!!t.showDailyTip,crisisAlertsEnabled:t.crisisAlertsEnabled===void 0?!0:!!t.crisisAlertsEnabled,trustedContactName:String(t.trustedContactName??"").trim().slice(0,60),trustedContactPhone:String(t.trustedContactPhone??"").trim().slice(0,30),sidebarCollapsed:!!t.sidebarCollapsed,reduceMotion:!!t.reduceMotion,counters:$e(t).slice(0,Ue),parts:he(t).slice(0,Ie),updatedAt:typeof t.updatedAt=="string"?t.updatedAt:new Date().toISOString()}}function Ca(){const e=Wt(ka);if(!e)return{...X};try{const t=JSON.parse(e);return Ze(t)}catch{return{...X}}}function Le(e={}){const t=Ca(),a=Ze({...t,...e,updatedAt:new Date().toISOString()});return xa(ka,JSON.stringify(a),{label:"El perfil"}),a}function Cr(e,t=Vt(),a=Ca(),s=Ve(),n=gr()){return JSON.stringify({app:"diario",version:1,exportedAt:new Date().toISOString(),entries:Aa(e),habits:t.map(Qe),thoughts:s.map(vt),setup:Ze(a),drafts:n},null,2)}function Tr(e){let t;try{t=JSON.parse(e)}catch{throw new Error("El archivo no es una copia JSON válida.")}if(!t||typeof t!="object"||Array.isArray(t)||t.version!==1||!Array.isArray(t.entries))throw new Error("Selecciona una copia JSON de Diario (versión 1).");if(t.habits!==void 0&&!Array.isArray(t.habits))throw new Error("La lista de hábitos de la copia no es válida.");if(t.thoughts!==void 0&&!Array.isArray(t.thoughts))throw new Error("La lista de pensamientos de la copia no es válida.");if(t.setup!==void 0&&t.setup!==null&&(typeof t.setup!="object"||Array.isArray(t.setup)))throw new Error("Los ajustes de la copia no son válidos.");if(t.drafts!==void 0&&t.drafts!==null&&(typeof t.drafts!="object"||Array.isArray(t.drafts)))throw new Error("Los borradores de la copia no son válidos.");const a=t.entries.map(Ea);if(new Set(a.map(i=>i.date)).size!==a.length)throw new Error("La copia contiene fechas duplicadas.");const s=(t.habits||[]).map(Qe);if(new Set(s.map(i=>i.id)).size!==s.length)throw new Error("La copia contiene hábitos duplicados.");const n=(t.thoughts||[]).map(vt);if(new Set(n.map(i=>i.id)).size!==n.length)throw new Error("La copia contiene pensamientos duplicados.");const o=t.setup?Ze(t.setup):null,r=t.drafts?t.drafts:null;return{entries:a,habits:s,thoughts:n,setup:o,drafts:r}}function jr(e){if(!e||!Array.isArray(e.entries)||!Array.isArray(e.habits))throw new Error("La copia no contiene listas de entradas y hábitos válidas.");if(e.thoughts!==void 0&&!Array.isArray(e.thoughts))throw new Error("La lista de pensamientos de la copia no es válida.");if(e.setup!==void 0&&e.setup!==null&&(typeof e.setup!="object"||Array.isArray(e.setup)))throw new Error("Los ajustes de la copia no son válidos.");const t=e.entries.map(Ea);if(new Set(t.map(p=>p.date)).size!==t.length)throw new Error("La copia contiene fechas duplicadas.");const a=e.habits.map(Qe);if(new Set(a.map(p=>p.id)).size!==a.length)throw new Error("La copia contiene hábitos duplicados.");const s=(e.thoughts||[]).map(vt);if(new Set(s.map(p=>p.id)).size!==s.length)throw new Error("La copia contiene pensamientos duplicados.");const n=e.setup?Ze(e.setup):null,o=new Map(La().map(p=>[p.date,p]));for(const p of t)o.set(p.date,p);const r=new Map(Vt().map(p=>[p.id,p]));for(const p of a)r.set(p.id,p);const i=new Map(Ve().map(p=>[p.id,p]));for(const p of s)i.set(p.id,p);const l=Aa([...o.values()]),c=[...r.values()].map(Qe),m=Bn([...i.values()]),h=[[Sa,JSON.stringify(c),"Los hábitos"],[Qt,JSON.stringify(m),"El mar"]];if(n){const p=Ze({...Ca(),...n,updatedAt:new Date().toISOString()});h.push([ka,JSON.stringify(p),"El perfil"])}if(e.drafts){const p=br(e.drafts);p.ok&&h.push([ut,JSON.stringify(p.map),"Los borradores"])}return h.push([wa,JSON.stringify(l),"El cuaderno"]),On(h),l}const Dr={age:{min:8,max:115,step:1,reject:!0,adjusted:()=>"La edad no se ha guardado: el cuaderno admite entre 8 y 115 años. Corrígela o déjala en blanco."},sleepGoal:{min:4,max:14,step:.5,adjusted:e=>`La meta de sueño se ha ajustado a ${e} h (entre 4 y 14).`},studyGoal:{min:0,max:16,step:.5,adjusted:e=>`La meta de dedicación se ha ajustado a ${e} h (entre 0 y 16).`},waterGoal:{min:1,max:25,step:1,adjusted:e=>`Los vasos de agua se han ajustado a ${e} (entre 1 y 25).`}},Gn={1:["name","age","ageGroup","interests"],2:["sleepGoal","studyGoal","waterGoal","ritual","tone"],3:["motto","theme"]},Fa=new WeakMap;function In(e){return Fa.has(e)||Fa.set(e,new Set(e.map(t=>t.id))),Fa.get(e)}function wt(e,t){return typeof t=="string"&&In(e).has(t)?t:null}function Nr(e){if(e==null)return null;const t=String(e).trim();if(!t)return null;const a=Number(t.replace(",","."));return Number.isFinite(a)?a:null}function jt(e,t,a=null){const s=Dr[e],n=Nr(t);if(n===null)return{value:a,note:"",adjusted:!1,rejected:!1};const o=Math.min(s.max,Math.max(s.min,Math.round(n*10)/10));return o!==n?s.reject?{value:a,adjusted:!0,rejected:!0,note:s.adjusted(o)}:{value:o,adjusted:!0,rejected:!1,note:s.adjusted(o)}:{value:o,note:"",adjusted:!1,rejected:!1}}function Un(e,t=new Set){const a=n=>{const o=e.get(n);return o===null?null:String(o)},s={};for(const n of["showDailyWord","showDailyTip","sidebarCollapsed","reduceMotion"])s[n]=t.size&&!t.has(n)?null:e.get(n)!==null&&e.get(n)!=="";return{name:a("name"),age:a("age"),ageGroup:wt(lt,e.get("ageGroup")),interests:e.getAll("interests").map(String).filter(n=>In(Rt).has(n)),ritual:wt(ct,e.get("ritual")),tone:wt(dt,e.get("tone")),purpose:wt(bn,e.get("purpose")),motto:a("motto"),theme:wt(se,e.get("theme")),sleepGoal:a("sleepGoal"),studyGoal:a("studyGoal"),waterGoal:a("waterGoal"),toggles:s}}function Or(e={},t={}){const a=[],s={completed:!0},n=e.toggles||{};for(const i of["showDailyWord","showDailyTip","sidebarCollapsed","reduceMotion"])n[i]!==null&&n[i]!==void 0&&(s[i]=n[i]);e.name!==null&&e.name!==void 0&&(s.name=String(e.name).slice(0,50).trim()),e.motto!==null&&e.motto!==void 0&&(s.motto=String(e.motto).slice(0,140).trim()||"Un día a la vez."),e.theme&&(s.theme=e.theme),e.ritual&&(s.ritual=e.ritual),e.tone&&(s.tone=e.tone),e.purpose&&(s.purpose=e.purpose),Array.isArray(e.interests)&&(s.interests=e.interests);const o=jt("age",e.age,t.age??null);o.note&&a.push(o.note),!o.rejected&&e.age!==null&&e.age!==void 0&&e.age!==""&&o.value===null&&a.push("La edad no se ha podido leer: se queda sin rellenar."),s.age=o.value??null;const r=e.ageGroup||t.ageGroup||"young";s.ageGroup=s.age!==null?qa(s.age,r):r;for(const i of["sleepGoal","studyGoal","waterGoal"]){const l=e[i],c=Number.isFinite(Number(t[i]))?Number(t[i]):null,m=jt(i,l,c);m.note&&a.push(m.note),m.value!==null&&(s[i]=m.value)}return{patch:s,notes:a}}function Hr(e,t,a={}){const s=new Set(Gn[e]||[]),n=[];if(s.has("age")){const o=jt("age",t.age,a.age??null);o.note&&n.push(o.note)}for(const o of["sleepGoal","studyGoal","waterGoal"]){if(!s.has(o))continue;const r=jt(o,t[o],a[o]??null);r.note&&n.push(r.note)}return n}function Pr(e,t,a={}){const s=new Set(Gn[e]||[]),n={};for(const o of["age","sleepGoal","studyGoal","waterGoal"]){if(!s.has(o))continue;const r=jt(o,t[o],a[o]??null);r.rejected||r.value!==null&&(n[o]=r.value)}return n}function zr(e=""){return String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim()}function Oe(e="paper",t={}){const a=se.find(c=>c.id===e)||se[0],{bg:s,page:n,accent:o,ink:r}=a.favicon||{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"},i=String(t?.name||"").trim().slice(0,1).toUpperCase(),l=i?`<text x="36" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="18" fill="${r}">${i.replace(/[<>&"']/g,"")}</text>`:`<path d="M29 29h14M29 36h10" stroke="${r}" stroke-width="2.6" stroke-linecap="round"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="16" fill="${s}"/>
    <rect x="14" y="11" width="38" height="42" rx="5" fill="${n}"/>
    <rect x="14" y="11" width="7" height="42" rx="2" fill="${o}"/>
    <path d="M41 11v12l-4-3-4 3V11" fill="${o}"/>
    ${l}
    <circle cx="46" cy="46" r="3" fill="${o}"/>
  </svg>`.replace(/\s+/g," ").trim()}function Fr(e="paper",t={}){const a=Oe(e,t);return`data:image/svg+xml;utf8,${encodeURIComponent(a)}`}const Br=[{label:"suicidio",regex:/\b(suicid(io|arme|arse|a)|conducta suicida)\b/},{label:"quitarme la vida",regex:/\b(quitar(me|se) la vida|acabar con mi vida|terminar con mi vida)\b/},{label:"no quiero vivir",regex:/\b(no quiero (seguir viviendo|vivir)|no merece la pena vivir|no vale la pena vivir)\b/},{label:"quiero morir",regex:/\b(quiero morir(me)?|me quiero morir|deseo morir(me)?|prefiero estar muert[oa]|mejor muert[oa])\b/},{label:"autolesión",regex:/\b(autolesion(arme|arse|es)?|hacerme dano|hacerme sangre|cortarme las venas|cortarme el brazo|cortarme la piel)\b/},{label:"acabar con todo",regex:/\b(acabar con todo para siempre|desaparecer para siempre|ojala no despertar|no despertar manana|matarme|tirarme (por la ventana|al tren|desde un puente)|sobredosis)\b/}];function Rr(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"){const t=Array.isArray(e.gratitude)?e.gratitude.join(" "):"",a=Array.isArray(e.goals)?e.goals.join(" "):"",s=Array.isArray(e.tags)?e.tags.join(" "):"";return[e.bestOfDay,e.differentToday,e.generalDay,e.wordOfDay,e.capsule,e.tomorrow,t,a,s].filter(Boolean).join(" ")}return""}function V(e={}){const t=e?.age?qa(e.age,e.ageGroup||"young"):e?.ageGroup||"young",a=lt.find(S=>S.id===t)||lt[1],s=Array.isArray(e?.interests)?e.interests:[],n=Rt.filter(S=>s.includes(S.id)),o=ct.find(S=>S.id===e?.ritual)||ct[0],r=dt.find(S=>S.id===e?.tone)||dt[0];let i=a.focusLabel,l=a.focusQuestion;s.includes("study")?(i="Estudio",l="Tiempo de estudio o repaso"):s.includes("projects")&&a.id!=="teen"&&(i="Proyectos y enfoque",l="Tiempo dedicado a tus proyectos");const c=[...new Set([...n.map(S=>S.habit),...a.habits,...Lo])].slice(0,8),m=[...new Set([...n.map(S=>S.tag),...a.tags,...xo])].slice(0,12),h=Number.isFinite(Number(e?.age))&&Number(e.age)>0&&Number(e.age)<18;let p="Nota del día",v="Algo que quieras recordar hoy…";s.includes("music")?(p="Canción o escena del día",v="¿Qué has escuchado o visto hoy?"):s.includes("reading")?(p="Lectura o cita",v="Un libro o una frase…"):s.includes("gaming")&&(p="Partida o serie del día",v="Un juego o una serie…");const b=["water"];return(s.includes("sport")||s.includes("nature")||!s.length)&&b.push("exercise"),(s.includes("reading")||s.includes("study")||!s.length)&&b.push("reading"),(s.includes("calm")||!s.length)&&b.push("mindfulness"),{group:a,age:e?.age||null,isMinor:h,interests:n,ritual:o,tone:r,focusLabel:i,focusQuestion:l,capsuleLabel:p,capsulePlaceholder:v,activeCounterKeys:b,sleepRecommended:a.sleepRecommended,studyRecommended:a.studyRecommended,suggestedHabits:c,tags:m,placeholders:a.placeholders}}function ms(e){const t=Rr(e),a=zr(t),s=[];if(a)for(const n of Br)n.regex.test(a)&&s.push(n.label);return s.length>0?{triggered:!0,level:"high",matchedTerms:s,reason:"Si estás pasando por un momento muy difícil, no tienes por qué llevarlo a solas. El 024 es gratuito, confidencial y atiende las 24 horas."}:{triggered:!1,level:"none",matchedTerms:[],reason:""}}function Dt(e=y()){const t=String(e||"").replace(/[^0-9]/g,"");let a=0;for(let s=0;s<t.length;s++)a=a*31+t.charCodeAt(s)>>>0;return a||1}function Gr(e=y(),t=0){const a=(Dt(e)+Math.abs(t))%Ls.length;return Ls[a]}function Ir(e=y(),t=0,a={}){const n=V(a).group.id,o=new Set(a?.interests||[]),r=Cs.filter(c=>{const m=!c.ageGroups||c.ageGroups.includes(n),h=!c.interests||c.interests.some(p=>o.has(p));return m||h}),i=r.length?r:Cs,l=(Dt(e)*7+Math.abs(t))%i.length;return i[l]}function Ur(e=y(),t=0,a={}){const n=V(a).group.id,o=a?.tone||"warm",r=new Set(a?.interests||[]),i=Array.isArray(a?.savedQuotes)?a.savedQuotes:[];if(i.length>0&&t%3===0){const v=(Dt(e)+Math.abs(t))%i.length;return{text:i[v],author:a?.name?`Guardada por ${a.name}`:"De tu colección",isCustom:!0}}const l=As.map(v=>{let b=0;return v.tones?.includes(o)&&(b+=3),v.ageGroups?.includes(n)&&(b+=2),v.interests?.some(S=>r.has(S))&&(b+=4),{q:v,score:b}}),c=Math.max(...l.map(v=>v.score),0),m=l.filter(v=>v.score>=Math.max(2,c-2)).map(v=>v.q),h=m.length>=4?m:As,p=(Dt(e)*5+Math.abs(t))%h.length;return h[p]}function Ya(e=y(),t=0){const a=(Dt(e)*13+Math.abs(t))%Ts.length;return Ts[a]}function _r(e={},t={}){const a=[],s=V(t),n=Number(t?.sleepGoal)||s.sleepRecommended||7.5,o=Number(e?.sleepHours),r=Number(e?.stress),i=Number(e?.mood);return Number.isFinite(o)&&o>0&&o<n-1.5&&a.push({icon:"moon",title:"Descanso corto",text:`Sueño: ${o} h · meta ${n} h. Ve con calma esta tarde.`}),Number.isFinite(r)&&r>=4&&a.push({icon:"wind",title:"Día cargado",text:"Prioriza una cosa hoy. Lo demás puede esperar."}),Number.isFinite(i)&&i===1&&a.push({icon:"heart",title:"Día cuesta arriba",text:"Descansar y cubrir lo básico es suficiente."}),a.slice(0,2)}function Wr(e=[],t={}){const a=V(t),s=(M,T)=>{const _=Number(M);return Number.isFinite(_)&&_>0?_:T},n=s(t?.sleepGoal,a.sleepRecommended||7.5),o=s(t?.studyGoal,a.studyRecommended||2),r=s(t?.waterGoal,8),i=[...new Map(e.filter(M=>M?.date).map(M=>[M.date,M])).values()],l=i.length;if(!l)return{total:0,sleepGoal:n,studyGoal:o,waterGoal:r,sleepMet:0,studyMet:0,waterMet:0,sleepTracked:0,studyTracked:0,waterTracked:0,sleepPct:null,studyPct:null,waterPct:null,moodWhenSleepMet:null,moodWhenSleepMissed:null};const c=i.filter(M=>Number.isFinite(M.sleepHours)),m=i.filter(M=>Number.isFinite(M.studyHours)),h=i.filter(M=>Number.isFinite(M.counters?.water)),p=c.filter(M=>M.sleepHours>=n),v=c.filter(M=>M.sleepHours<n),b=m.filter(M=>M.studyHours>=o),S=h.filter(M=>M.counters.water>=r),H=(M,T)=>T?Math.round(M/T*100):null,O=Mt(p.map(M=>M.mood)),j=Mt(v.map(M=>M.mood));return{total:l,sleepGoal:n,studyGoal:o,waterGoal:r,sleepMet:p.length,studyMet:b.length,waterMet:S.length,sleepTracked:c.length,studyTracked:m.length,waterTracked:h.length,sleepPct:H(p.length,c.length),studyPct:H(b.length,m.length),waterPct:H(S.length,h.length),moodWhenSleepMet:Number.isFinite(O)?E(O):null,moodWhenSleepMissed:Number.isFinite(j)?E(j):null}}function Qr(e="",t=new Date().getHours()){const a=String(e||"").trim(),s=a?`, ${a}`:"";return t>=5&&t<13?`Buenos días${s}`:t>=13&&t<20?`Buenas tardes${s}`:`Buenas noches${s}`}const Vr={pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',week:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 9h18M8 14h8"/>',month:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9"/>',history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-5 3-7 1 2 2 3 2 3 0-3-1-4 0-6Z"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',study:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',check:'<path d="M20 6 9 17l-5-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',download:'<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3"/>',upload:'<path d="M12 15V3m0 0-4 4m4-4 4 4M4 17v3h16v-3"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 5.1-6C9.5 14.5 12 13 13 12"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',bolt:'<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',storm:'<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/><path d="m13 11-3 5h4l-2 5"/>',drop:'<path d="M12 2.7 6.4 8.3a8 8 0 1 0 11.3 0Z"/>',run:'<circle cx="15" cy="4" r="2"/><path d="m10.5 9.5-3 3L5 11m5.5-1.5 3.5 2 3 2M9 14l-2 6m5-4 3 5"/>',book:'<path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',stamp:'<path d="M5 21h14M6 17h12v2H6zM9 17v-3a3 3 0 1 1 6 0v3"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',refresh:'<path d="M21 12a9 9 0 0 0-15.4-6.4L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15.4 6.4L21 16"/><path d="M21 21v-5h-5"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5-4.5-8.6-10-8.6Z"/>',spark:'<path d="m12 3 1.9 5.8L20 10.8l-6.1 1.9L12 18.5l-1.9-5.8L4 10.8l6.1-2Z"/>',quote:'<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/>',expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',wave:'<path d="M2 9.5c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/><path d="M2 15c2 0 2 1.8 4 1.8S8 15 10 15s2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/>',tide:'<path d="M3 16.5c1.7 0 1.7 1.5 3.4 1.5s1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5 1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5"/><circle cx="17" cy="6" r="3"/><path d="M4 11c1.7 0 1.7 1.5 3.4 1.5S9.1 11 10.8 11"/>',send:'<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z"/>',anchor:'<circle cx="12" cy="5" r="2.6"/><path d="M12 7.6V21"/><path d="M8.5 10h7"/><path d="M3 14a9 9 0 0 0 18 0"/><path d="M3 14h3M18 14h3"/>',bookmark:'<path d="M6.5 3h11a1 1 0 0 1 1 1v17l-6.5-4.6L5.5 21V4a1 1 0 0 1 1-1Z"/>',reply:'<path d="M9 14 4 9l5-5"/><path d="M4 9h9.5A6.5 6.5 0 0 1 20 15.5V20"/>',seal:'<circle cx="12" cy="12" r="8"/><path d="m12 7.6 1.5 2.9 3.2.4-2.3 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.3-2.3 3.2-.4Z"/>',eye:'<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',grid:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',listChecks:'<path d="M11 6h10M11 12h10M11 18h10"/><path d="m3 6 1.6 1.6L7.2 5M3 12l1.6 1.6 2.6-2.6M3 18l1.6 1.6 2.6-2.6"/>',sail:'<path d="M3 18.5h18l-2.6 3.2H5.6Z"/><path d="M12.5 15V3.5L20 15Z"/><path d="M10.5 15 6 8.5 3.8 15Z"/>',fog:'<path d="M4 9h16M3 13h18M5 17h14"/><path d="M7 5.5c1.6-1.6 3.4-1.6 5 0"/>',rain:'<path d="M17.5 14a4 4 0 0 0-.6-7.9A5.5 5.5 0 0 0 6.3 7.4 3.8 3.8 0 0 0 7 14Z"/><path d="M9 17.5 8 20M13 17.5 12 20M17 17.5 16 20"/>',hourglass:'<path d="M7 3h10M7 21h10"/><path d="M7 3c0 4 5 5.4 5 9s-5 5-5 9M17 3c0 4-5 5.4-5 9s5 5 5 9"/>',gauge:'<path d="M12 20a8 8 0 1 1 8-8"/><path d="M12 12 16 9"/><circle cx="12" cy="12" r="1.2"/>',paper:'<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/>',splash:'<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.6 6.6l2.8 2.8M14.6 14.6l2.8 2.8M17.4 6.6l-2.8 2.8M9.4 14.6l-2.8 2.8"/>',save:'<path d="M5 4h11l3 3v13H5Z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'},d=e=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Vr[e]||""}</svg>`,u=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function _n(e={},t=0){const a=V(e),s=e.name?u(e.name):"Personalizar perfil",n=e.age?`${e.age} años`:a.group.label;return`<button type="button" class="ex-libris-card" data-action="open-setup-wizard" title="Editar perfil y preferencias">
    <span class="ex-libris-icon">${Oe(e.theme||"paper",e)}</span>
    <div class="ex-libris-meta">
      <strong>${s}</strong>
      <small>${u(n)} · ${t} ${t===1?"día":"días"}</small>
    </div>
  </button>`}function Us(e,t,a,s,n,o,r){return`<div class="scale-field">
    <p class="field-title">${d(s)} ${n}</p>
    <p class="field-caption">${o}</p>
    <div class="level-scale" role="radiogroup" aria-label="${n}">
      ${[1,2,3,4,5].map(i=>`<label class="level-option">
        <input type="radio" name="${e}" value="${i}" ${a===i?"checked":""}>
        <span class="level-num">${i}</span>
        <span class="level-text">${t[i]}</span>
      </label>`).join("")}
    </div>
    <small id="${e}-hint">${a?t[a]+".":r}</small>
  </div>`}function Zr(e=[],t=[]){const a=new Set(e);return`<div class="tag-picker">
    ${[...new Set([...t,...e])].map(n=>`<label class="tag-chip">
      <input type="checkbox" name="tags" value="${u(n)}" ${a.has(n)?"checked":""}>
      <span>${u(n)}</span>
    </label>`).join("")}
    <label class="tag-chip ghost">
      <span>+ Otra:</span>
      <input type="text" name="tagCustom" id="tagCustom" maxlength="24" placeholder="Escribe y pulsa Enter" aria-label="Añadir etiqueta personalizada">
    </label>
  </div>`}function Yr(e={},t=[],a={},s={}){const n=V(a),o=new Set(n.activeCounterKeys||["water"]),r=t.filter(c=>!c.builtin||o.has(c.key)||(Number(e?.[c.key])||0)>0),i=r.length?r:t,l=s.action?`${s.action}-`:"";return`<div class="counters-grid">${i.map(c=>{const m=Number(e?.[c.key])||0,h=ss(c,a),p=h?Math.min(100,Math.round(m/h*100)):0;return`<div class="counter-row" data-counter="${c.key}">
      <div>
        <p class="field-title">${d(c.icon)} ${c.label} ${h?`<small class="counter-goal-pill ${m>=h?"met":""}">Meta: ${m}/${h}</small>`:""}</p>
        <p class="field-caption" id="hint-${c.key}" data-counter-hint="${c.key}">${ba(c.key,m,c)}</p>
        ${h?`<div class="counter-progress"><i style="width:${p}%"></i></div>`:""}
      </div>
      <div class="stepper">
        <button type="button" class="icon-button" data-action="${l}counter-minus" data-key="${c.key}" data-step="${c.step}" aria-label="Restar ${c.label}">${d("minus")}</button>
        <div class="stepper-value">
          <input type="number" name="counter_${c.key}" min="${c.min}" max="${c.max}" step="${c.step}" value="${m}" aria-label="${c.label}" data-counter-input="${c.key}">
          <span>${c.unit}</span>
        </div>
        <button type="button" class="icon-button" data-action="${l}counter-plus" data-key="${c.key}" data-step="${c.step}" aria-label="Sumar ${c.label}">${d("plus")}</button>
      </div>
    </div>`}).join("")}</div>`}function Jr(e,t,{mini:a=!1,selected:s=y()}={}){const n=new Map(t.map(i=>[i.date,i])),o=y(),r=To(e).map(i=>{const l=n.get(i.date),c=l?F[l.mood-1]:null,m=i.date>o,h=["calendar-day",!i.inMonth&&"outside",i.date===o&&"today",i.date===s&&"selected",l&&"recorded"].filter(Boolean).join(" "),p=`${R(i.date)}${c?`, ${c.label}`:", sin entrada"}`;return`<button type="button" class="${h}" data-action="open-day" data-date="${i.date}" ${m?"disabled":""} aria-label="${p}" style="${c?`--mood:${c.color}`:""}">
      <span>${i.day}</span>${c?'<i aria-hidden="true"></i>':""}
    </button>`}).join("");return`<div class="calendar ${a?"mini":""}">
    <div class="calendar-heading">
      <button type="button" class="icon-button ghost" data-action="month-prev" data-mini="${a?"1":"0"}" aria-label="Mes anterior">${d("left")}</button>
      <strong>${R(e,{month:"long",year:"numeric"})}</strong>
      <button type="button" class="icon-button ghost" data-action="month-next" data-mini="${a?"1":"0"}" aria-label="Mes siguiente">${d("right")}</button>
    </div>
    <div class="calendar-grid">
      ${ko.map(i=>`<span class="weekday">${i}</span>`).join("")}
      ${r}
    </div>
  </div>`}function Kr(e,t,a,s={}){const n=Math.max(1,Math.floor(Number(a)||1)),o=new Map(e.map(A=>[A.date,A])),r=760,i=260,l=42,c=48,m=22,h=208,p=r-l-c,v=h-m,b=A=>l+(n===1?p/2:A*p/(n-1)),S=A=>m+(5-A)*v/4,H=A=>h-Math.max(0,Math.min(12,Number(A)||0))*v/12,O=Array.from({length:n},(A,U)=>{const W=D(t,U),we=o.get(W);return{date:W,entry:we,index:U,x:b(U),y:we&&Number.isFinite(we.mood)?S(we.mood):null}}),j=O.filter(A=>A.entry&&A.y!==null),M=Math.max(3,Math.min(14,p/n*.56)),T=j.filter(A=>Number.isFinite(A.entry.sleepHours)).map(A=>{const U=H(A.entry.sleepHours),W=Math.max(2,h-U);return`<rect class="sleep-bar" x="${(A.x-M/2).toFixed(1)}" y="${U.toFixed(1)}" width="${M.toFixed(1)}" height="${W.toFixed(1)}" rx="2"><title>${R(A.date)}: ${E(A.entry.sleepHours)} h de sueño</title></rect>`}),_=[];let g=[];for(const A of O){if(A.y===null){g.length&&_.push(g),g=[];continue}g.push(A)}g.length&&_.push(g);const w=_.filter(A=>A.length>1),C=w.map(A=>`<path class="chart-line-path" d="${A.map((U,W)=>`${W?"L":"M"}${U.x.toFixed(1)},${U.y.toFixed(1)}`).join(" ")}"/>`),P=w.map(A=>`<path class="chart-area-path" d="${A.map((W,we)=>`${we?"L":"M"}${W.x.toFixed(1)},${W.y.toFixed(1)}`).join(" ")} L${A.at(-1).x.toFixed(1)},${h} L${A[0].x.toFixed(1)},${h} Z"/>`),G=Number.isFinite(Number(s?.sleepGoal))?Number(s.sleepGoal):7.5,pe=H(G),Je=n<=7?[...Array(n)].map((A,U)=>U):[0,Math.round((n-1)*.17),Math.round((n-1)*.34),Math.round((n-1)*.5),Math.round((n-1)*.67),Math.round((n-1)*.83),n-1],Pa=[...new Set(Je)],$t=A=>{const U=O[A]?.date||t,W=Number(U.slice(8)),we=R(U,{month:"short"}).replace(/[0-9.,]/g,"").trim();return n<=7?`${W} ${we}`:W===1?`${W} ${we}`:String(W)},wo=Array.from({length:5},(A,U)=>{const W=m+U*v/4;return`<line class="chart-grid-row" x1="${l}" x2="${r-c}" y1="${W.toFixed(1)}" y2="${W.toFixed(1)}"/>`}).join(""),So=Pa.map(A=>{const U=n===1?"center":A===0?"first":A===n-1?"last":"middle",W=n===1?50:A/(n-1)*100;return`<span class="chart-x-tick ${U}" style="left:${W.toFixed(2)}%">${$t(A)}</span>`}).join(""),Es=`--axis-top:${(m/i*100).toFixed(2)}%;--axis-bottom:${((i-h)/i*100).toFixed(2)}%`;return`<div class="chart-wrap">
    <div class="chart-plot">
      <svg viewBox="0 0 ${r} ${i}" class="mood-chart" role="img" aria-label="Ánimo del 1 al 5 y horas de sueño en ${n} días; hay ${j.length} días con registro">
        <defs>
          <linearGradient id="moodAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--red)" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="var(--red)" stop-opacity="0.01"/>
          </linearGradient>
        </defs>
        ${wo}
        ${T.join("")}
        ${P.join("")}
        <line class="chart-goal-line" x1="${l}" x2="${r-c}" y1="${pe.toFixed(1)}" y2="${pe.toFixed(1)}"/>
        ${C.join("")}
        ${j.map((A,U)=>`<circle class="chart-dot" style="--dot-i:${U}" cx="${A.x.toFixed(1)}" cy="${A.y.toFixed(1)}" r="5.2" fill="${F[A.entry.mood-1]?.color||"var(--red)"}" stroke="var(--paper-2)" stroke-width="2">
          <title>${R(A.date)} · ${F[A.entry.mood-1]?.label||"Ánimo"} · ${A.entry.mood}/5 · ${E(A.entry.sleepHours)} h de sueño</title>
        </circle>`).join("")}
      </svg>
      <div class="chart-y-axis mood-axis" style="${Es}" aria-hidden="true">${[5,4,3,2,1].map(A=>`<span>${A}</span>`).join("")}</div>
      <div class="chart-y-axis sleep-axis" style="${Es}" aria-hidden="true">${[12,9,6,3,0].map(A=>`<span>${A}h</span>`).join("")}</div>
      <div class="chart-x-axis" aria-hidden="true">${So}</div>
    </div>
    ${j.length?`<div class="chart-legend-inline">
      <span><i class="legend-line"></i> Ánimo · escala 1–5</span>
      <span><i class="legend-bar"></i> Sueño · escala 0–12 h</span>
      <span><i class="legend-goal"></i> Meta de sueño: ${E(G)} h</span>
    </div>`:'<p class="chart-empty">Sin registros en este período.</p>'}
  </div>`}function Xr(e=[],t=y(),a=28){const s=new Map(e.map(r=>[r.date,r])),n=D(t,1-a),o=[];for(let r=0;r<a;r++){const i=D(n,r),l=s.get(i),c=l?F[l.mood-1]:null,m=`${R(i)}${c?`: ${c.label} · ${l.mood}/5 · ${E(l.sleepHours)} h de sueño`:": sin registro"}`;o.push(`<button type="button" class="heatmap-cell ${l?"filled":""}" data-action="open-day" data-date="${i}" style="${c?`--mood:${c.color}`:""}" title="${m}" aria-label="${m}">
      <span>${i.slice(8)}</span>
      ${c?`<small>${c.emoji}</small>`:""}
    </button>`)}return`<div class="heatmap-strip">${o.join("")}</div>`}function Wn(e=[],t={}){const a=Wr(e,t),s=V(t);return a.total?`<section class="card personal-goals-card">
    <div class="section-heading">
      <div>
        <h2>Tus metas</h2>
      </div>
      <button type="button" class="text-button" data-action="open-setup-wizard">${d("sliders")} Ajustar metas</button>
    </div>
    <div class="goals-meter-grid">
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${d("moon")} Sueño · meta ${E(a.sleepGoal)} h</span>
          <strong>${a.sleepTracked?`${a.sleepPct}%`:"—"}</strong>
        </div>
        <div class="meter-track" role="meter" aria-label="Días que alcanzan la meta de sueño" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${a.sleepPct??0}"><i style="width:${a.sleepPct||0}%;background:var(--green)"></i></div>
        <small>${a.sleepMet} de ${a.sleepTracked} días con registro</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${d("study")} ${u(s.focusLabel)} · meta ${E(a.studyGoal)} h</span>
          <strong>${a.studyTracked?`${a.studyPct}%`:"—"}</strong>
        </div>
        <div class="meter-track" role="meter" aria-label="Días que alcanzan la meta de dedicación" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${a.studyPct??0}"><i style="width:${a.studyPct||0}%;background:var(--red)"></i></div>
        <small>${a.studyMet} de ${a.studyTracked} días con registro</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${d("drop")} Agua · meta ${a.waterGoal} vasos</span>
          <strong>${a.waterTracked?`${a.waterPct}%`:"—"}</strong>
        </div>
        <div class="meter-track" role="meter" aria-label="Días que alcanzan la meta de agua" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${a.waterPct??0}"><i style="width:${a.waterPct||0}%;background:var(--ochre)"></i></div>
        <small>${a.waterMet} de ${a.waterTracked} días con registro</small>
      </div>
    </div>
    ${a.moodWhenSleepMet&&a.moodWhenSleepMissed?`
      <div class="sleep-mood-insight">
        ${d("spark")}
        <p>Ánimo medio · ${a.moodWhenSleepMet}/5 con tu meta · ${a.moodWhenSleepMissed}/5 sin alcanzarla.</p>
      </div>
    `:""}
  </section>`:`<section class="card personal-goals-card">
      <div class="section-heading">
        <h2>Tus metas personales</h2>
        <button type="button" class="text-button" data-action="open-setup-wizard">${d("sliders")} Ajustar</button>
      </div>
      <p class="habit-empty">Sin datos aún.</p>
    </section>`}function Qn(e,t=0,a={}){const s=Ur(e,t,a),n=(a?.savedQuotes||[]).includes(s.text);return`<section class="card quote-card">
    <div class="quote-top">
      <span class="eyebrow">${d("quote")} ${s.isCustom?"Tu colección":"Frase del día"}</span>
      <div class="quote-actions">
        <button type="button" class="icon-button ghost ${n?"is-saved":""}" data-action="save-quote" data-quote="${u(s.text)}" title="${n?"Guardada en tus frases":"Guardar en mis frases"}" aria-label="Guardar frase">${d("heart")}</button>
        <button type="button" class="icon-button ghost" data-action="next-quote" title="Otra frase" aria-label="Otra frase">${d("refresh")}</button>
      </div>
    </div>
    <p class="quote-text">«${u(s.text)}»</p>
    <small class="quote-author">— ${u(s.author)}</small>
  </section>`}function be(e,t,a="",s=""){return`<div class="ledger-cell">
    <span class="ledger-label">${e}</span>
    <div class="ledger-value">${t}${a?`<small>${a}</small>`:""}</div>
    ${s?`<span class="ledger-hint">${s}</span>`:""}
  </div>`}function Zt(e,t,a="mood"){if(!t)return`<div class="rank-row"><span class="rank-label">${e}</span><strong>—</strong><small>Sin datos aún</small></div>`;const s=a==="mood"?`${F[t.mood-1].emoji} ${F[t.mood-1].label} · ${t.mood}/5`:`${E(t[a])} h`;return`<div class="rank-row">
    <span class="rank-label">${e}</span>
    <strong>${R(t.date,{weekday:"short",day:"numeric",month:"short"})}</strong>
    <small>${s}</small>
  </div>`}function ei(e=[],t=[],a=y()){const s=Wo(e,t,a),n=s.filter(l=>l.moodCount>0).length,o=t.length?s.filter(l=>l.entries>0).length:0,r=l=>l===null?"var(--rule-strong)":F[Math.min(4,Math.max(0,Math.round(l)-1))].color,i=n<2&&o<2?'<p class="habit-empty">Con unos cuantos días más podrás ver aquí qué días de la semana se te dan mejor.</p>':`<div class="weekday-grid" role="table" aria-label="Ánimo y rutina por día de la semana">
        <span class="weekday-head" role="columnheader">Día</span>
        <span class="weekday-head" role="columnheader">Ánimo</span>
        <span class="weekday-head" role="columnheader">Rutina</span>
        ${s.map(l=>`<span class="weekday-name" role="rowheader">${l.name}</span>
          <span class="weekday-cell">
            <span class="weekday-bar" role="img" aria-label="${l.moodCount?`Ánimo medio ${E(l.mood)} de 5 en ${l.entries} ${l.entries===1?"día":"días"}`:"sin datos de ánimo"}"><i style="width:${l.mood===null?0:Math.round(l.mood/5*100)}%;background:${r(l.mood)}"></i></span>
            <strong>${l.mood===null?"—":E(l.mood)}</strong>
          </span>
          <span class="weekday-cell">
            <span class="weekday-bar is-habit" role="img" aria-label="${l.habitPct===null?"sin días registrados":`Rutina cumplida el ${l.habitPct}% de las casillas`}"><i style="width:${l.habitPct??0}%"></i></span>
            <strong>${l.habitPct===null?"—":`${l.habitPct}%`}</strong>
          </span>`).join("")}
      </div>
      <p class="weekday-insight">${u(Hs(s,"mood")||"Tu ánimo se parece bastante todos los días.")}${t.length?` ${u(Hs(s,"habit"))}`:""}</p>`;return`<section class="card weekday-card">
    <div class="section-heading">
      <div><p class="eyebrow">${d("chart")} Tu semana</p><h2>Qué días se te dan mejor</h2></div>
      <span class="field-caption">solo días registrados</span>
    </div>
    ${i}
  </section>`}function ua(e,t,a=""){return`<div class="empty-state">
    ${d("leaf")}
    <h3>${e}</h3>
    <p>${t}</p>
    ${a}
  </div>`}function hs(e){return`<div class="meter-list">${e.map(t=>{const a=t.total?Math.round(t.count/t.total*100):0;return`<div class="meter-row">
      <span>${t.label}</span>
      <div class="meter-track"><i style="width:${a}%;background:${t.color||"var(--ink)"}"></i></div>
      <strong>${t.count}</strong>
    </div>`}).join("")}</div>`}function Vn(e,t={}){if(!e?.triggered||e.level!=="high")return"";const a=t?.trustedContactName?.trim(),s=t?.trustedContactPhone?.trim();return`<section class="crisis-banner high" role="region" aria-label="Apoyo emocional disponible">
    <div class="crisis-banner-head">
      <span class="crisis-badge">${d("heart")} No estás a solas</span>
      <button type="button" class="icon-button ghost crisis-dismiss" data-action="dismiss-crisis-banner" aria-label="Ocultar este aviso">${d("close")}</button>
    </div>
    <p class="crisis-reason">${u(e.reason)}</p>
    <div class="crisis-quick-actions">
      <a href="tel:024" class="button solid crisis-call-btn">${d("phone")} Llamar al 024 · gratis · 24 h</a>
      ${a&&s?`<a href="tel:${u(s.replace(/\s+/g,""))}" class="button outline">${d("user")} Llamar a ${u(a)}</a>`:""}
      <button type="button" class="button outline" data-action="open-crisis-modal" data-tab="breathe">${d("wind")} Respiración guiada</button>
    </div>
  </section>`}function ti(e={},t="help"){const a=V(e),s=e?.trustedContactName?.trim(),n=e?.trustedContactPhone?.trim();return`<div class="modal-card crisis-modal">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${d("heart")} Apoyo y calma</p>
        <h2>Respirar y pedir ayuda</h2>
      </div>
      <button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${d("close")}</button>
    </div>

    <div class="crisis-tabs" role="tablist">
      <button type="button" class="crisis-tab ${t==="help"?"active":""}" data-crisis-tab="help" role="tab">${d("phone")} Teléfonos · 24 h</button>
      <button type="button" class="crisis-tab ${t==="breathe"?"active":""}" data-crisis-tab="breathe" role="tab">${d("wind")} Respirar · 4-4-6</button>
      <button type="button" class="crisis-tab ${t==="ground"?"active":""}" data-crisis-tab="ground" role="tab">${d("compass")} Volver al presente</button>
    </div>

    <div class="crisis-tab-panel ${t==="help"?"active":""}" data-panel="help">
      <p class="crisis-intro">Apoyo gratuito y confidencial, disponible las 24 horas.</p>
      ${s&&n?`
        <div class="trusted-contact-card">
          <div>
            <span class="eyebrow">Tu persona de confianza</span>
            <h3>${u(s)}</h3>
            <p>${u(n)}</p>
          </div>
          <a href="tel:${u(n.replace(/\s+/g,""))}" class="button solid">${d("phone")} Llamar</a>
        </div>
      `:""}
      <div class="helpline-grid">
        ${Co.map(o=>{const r=a.isMinor&&o.youth;return`
          <div class="helpline-card ${o.primary||r?"primary":""}">
            <div class="helpline-info">
              <h3>${u(o.name)}</h3>
              <p>${u(o.detail)}</p>
            </div>
            <a href="${u(o.tel)}" class="helpline-phone">${d("phone")} <span>${u(o.number)}</span></a>
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
        <button type="button" class="button solid" data-action="toggle-breathing" id="breathing-btn">${d("wind")} Empezar</button>
      </div>
    </div>

    <div class="crisis-tab-panel ${t==="ground"?"active":""}" data-panel="ground">
      <p class="crisis-intro">Cuando la cabeza va demasiado deprisa, nombrar lo que tienes alrededor ayuda a bajar el ritmo:</p>
      <div class="grounding-list">
        ${[{count:5,sense:"Cosas que puedas ver",prompt:"Fíjate en 5 objetos a tu alrededor."},{count:4,sense:"Cosas que puedas tocar",prompt:"Nota el tacto de 4 superficies cercanas."},{count:3,sense:"Sonidos que puedas oír",prompt:"Escucha 3 sonidos del entorno."},{count:2,sense:"Olores que percibas",prompt:"Identifica 2 aromas cercanos."},{count:1,sense:"Una respiración profunda",prompt:"Toma aire hondo y suéltalo despacio."}].map(o=>`
          <label class="grounding-step">
            <input type="checkbox">
            <span class="grounding-num"><b>${o.count}</b></span>
            <div>
              <strong>${u(o.sense)}</strong>
              <p>${u(o.prompt)}</p>
            </div>
          </label>
        `).join("")}
      </div>
    </div>

    <div class="modal-actions">
      <button type="button" class="button outline" data-modal="close">Cerrar</button>
    </div>
  </div>`}function Zn(e,t,a,s={},n={},o=""){const r=s?.showDailyWord!==!1,i=s?.showDailyTip!==!1;if(!r&&!i)return"";const l=Gr(e,t),c=Ir(e,a,s),m=_r(n,s),h=o&&o.toLowerCase()===l.word.toLowerCase();return`<div class="daily-inspiration-grid">
    ${r?`
      <article class="card inspiration-card word-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${d("book")} Palabra del día</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-word" title="Ver otra palabra" aria-label="Ver otra palabra">${d("refresh")}</button>
        </div>
        <div class="daily-word-main">
          <div>
            <h2 class="daily-word-title">${u(l.word)}</h2>
            <span class="daily-word-origin">${u(l.type)} · ${u(l.origin)}</span>
          </div>
          <button type="button" class="button ${h?"solid":"outline"} small-btn" data-action="use-daily-word" data-word="${u(l.word)}">
            ${d(h?"check":"pen")} ${h?"Elegida hoy":"Usar hoy"}
          </button>
        </div>
        <p class="daily-word-meaning">${u(l.meaning)}</p>
      </article>
    `:""}

    ${i?`
      <article class="card inspiration-card tip-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${d("spark")} Consejo · ${u(c.category)}</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-tip" title="Ver otro consejo" aria-label="Ver otro consejo">${d("refresh")}</button>
        </div>
        <h2 class="daily-tip-title">${u(c.title)}</h2>
        <p class="daily-tip-body">${u(c.tip)}</p>
        ${m.length?`
          <div class="contextual-advice-list">
            ${m.map(p=>`
              <div class="contextual-advice-item">
                ${d(p.icon)}
                <div><strong>${u(p.title)}:</strong> ${u(p.text)}</div>
              </div>
            `).join("")}
          </div>
        `:""}
      </article>
    `:""}
  </div>`}function ai(e={},t=[],a=1,s=!1){const n=V(e),o=new Set(t.map(i=>i.name.toLowerCase())),r=new Set(e.interests||[]);return`<div class="modal-card setup-wizard-modal ${s?"is-mandatory":""}" data-current-step="${a}">
    <div class="setup-wizard-header">
      <div>
        <p class="eyebrow">${d("sliders")} Paso ${a} de 3</p>
        <h2>${a===1?"Tu perfil":a===2?"Tu ritmo":"Tu papel"}</h2>
      </div>
      ${s?"":`<button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${d("close")}</button>`}
    </div>

    <div class="wizard-steps-bar" aria-hidden="true">
      <span class="${a>=1?"done":""} ${a===1?"current":""}">1. Perfil</span>
      <span class="${a>=2?"done":""} ${a===2?"current":""}">2. Rutina</span>
      <span class="${a>=3?"done":""} ${a===3?"current":""}">3. Papel</span>
    </div>

    <form id="setup-wizard-form" novalidate>
      <p class="form-alert" id="setup-wizard-alert" role="alert" hidden></p>
      <div class="wizard-step-body ${a===1?"active":""}" data-step="1" ${a===1?"":"hidden"}>
        <div class="setup-name-age-row">
          <div class="setup-field">
            <label for="setup-name">${d("user")} ¿Cómo te llamas?</label>
            <input id="setup-name" name="name" maxlength="50" placeholder="Tu nombre o apodo…" value="${u(e.name||"")}">
          </div>
          <div class="setup-field">
            <label for="setup-age">¿Cuántos años tienes?</label>
            <div class="age-input-wrap">
              <input id="setup-age" name="age" type="number" min="8" max="115" step="1" inputmode="numeric" placeholder="Ej. 20" value="${e.age??""}" aria-describedby="setup-age-hint">
              <span>años</span>
            </div>
            <small class="field-hint" id="setup-age-hint">Opcional · entre 8 y 115 años</small>
          </div>
        </div>

        <div class="setup-field">
          <label>Tu etapa vital</label>
          <div class="age-group-grid" id="wizard-age-groups">
            ${lt.map(i=>`
              <label class="age-group-card ${n.group.id===i.id?"is-selected":""}" data-age-group-card="${i.id}">
                <input type="radio" name="ageGroup" value="${i.id}" ${n.group.id===i.id?"checked":""}>
                <span class="age-range-badge">${u(i.label)}</span>
                <strong>${u(i.title)}</strong>
                <small>${u(i.desc)}</small>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="setup-field">
          <label>Tus intereses</label>
          <div class="interests-grid">
            ${Rt.map(i=>`
              <label class="interest-chip">
                <input type="checkbox" name="interests" value="${i.id}" ${r.has(i.id)?"checked":""}>
                <span>${d(i.icon)} ${u(i.label)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${a===2?"active":""}" data-step="2" ${a===2?"":"hidden"}>
        <div class="age-adaptation-callout" id="wiz-adaptation-callout">
          ${d("compass")}
          <div>
            <strong>${u(n.group.title)} · ${u(n.group.label)}</strong>
            <p>Sueño ${E(n.sleepRecommended)} h · dedicación ${E(n.studyRecommended)} h.</p>
          </div>
        </div>

        <div class="goals-setup-grid">
          <div class="setup-field">
            <label for="setup-sleep">${d("moon")} Meta de sueño</label>
            <div class="number-wrap">
              <input id="setup-sleep" name="sleepGoal" type="number" min="4" max="14" step="any" inputmode="decimal" value="${e.sleepGoal??n.sleepRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-study">${d("study")} Meta de dedicación</label>
            <div class="number-wrap">
              <input id="setup-study" name="studyGoal" type="number" min="0" max="16" step="any" inputmode="decimal" value="${e.studyGoal??n.studyRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-water">${d("drop")} Vasos de agua</label>
            <div class="number-wrap">
              <input id="setup-water" name="waterGoal" type="number" min="1" max="25" step="any" inputmode="numeric" value="${e.waterGoal??8}">
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
                  <span class="purpose-icon">${d(i.icon)}</span>
                  <div><strong>${u(i.label)}</strong></div>
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
                  <div><strong>${u(i.label)}</strong><small>${u(i.desc)}</small></div>
                </label>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="setup-field">
          <label>Hábitos sugeridos</label>
          <div class="tag-picker" id="wiz-suggested-habits">
            ${n.suggestedHabits.map(i=>{const l=o.has(i.toLowerCase());return`<label class="tag-chip">
                <input type="checkbox" name="suggestedHabits" value="${u(i)}" ${l?"checked":""}>
                <span>${u(i)}</span>
              </label>`}).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${a===3?"active":""}" data-step="3" ${a===3?"":"hidden"}>
        <div class="setup-field">
          <label>${d("palette")} Elige tu papel e icono</label>
          <div class="theme-picker-grid">
            ${se.map(i=>`
              <label class="theme-card">
                <input type="radio" name="theme" value="${i.id}" ${(e.theme||"paper")===i.id?"checked":""}>
                <div class="theme-card-top">
                  <span class="theme-favicon-preview">${Oe(i.id,e)}</span>
                  <div class="theme-swatches">
                    ${i.colors.map(l=>`<i style="background:${l}"></i>`).join("")}
                  </div>
                </div>
                <strong>${u(i.name)}</strong>
                <small>${u(i.desc)}</small>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="setup-field">
          <label for="setup-motto">Frase de portada</label>
          <input id="setup-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${u(e.motto||"Un día a la vez.")}">
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
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${d("left")} Anterior</button>`:s?"":'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${d("right")}</button>`:`<button type="submit" class="button solid">${d("check")} Guardar</button>`}
      </div>
    </form>
  </div>`}const Ta=e=>la.find(t=>t.id===e?.glass)||la[0];function Nt(e={},t={}){const a=Ta(e),s=t.class?` ${t.class}`:"",n=t.paper===!1?"":`<path class="bottle-paper" d="M10.6 13.4h6.2M10.6 15.6h4.4" stroke="${a.hex}" stroke-width="1.1" stroke-linecap="round" opacity=".8"/>`;return`<svg class="bottle-glyph${s}" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <g transform="rotate(-24 14 14)">
      <path d="M11 4.2h6v3.1c0 1 .3 1.6 1 2.3l1.5 1.6c.9 1 1.4 2 1.4 3.3v7.2c0 1.4-1.1 2.5-2.5 2.5h-8.8c-1.4 0-2.5-1.1-2.5-2.5v-7.2c0-1.3.5-2.3 1.4-3.3l1.5-1.6c.7-.7 1-1.3 1-2.3Z" fill="color-mix(in srgb,${a.hex} 22%,transparent)" stroke="${a.hex}" stroke-width="1.2"/>
      <path d="M11.6 6.6h4.8" stroke="${a.hex}" stroke-width="1" opacity=".6"/>
      <rect class="bottle-cork" x="12.2" y="2.4" width="3.6" height="2.4" rx="1" fill="${a.hex}" opacity=".85"/>
      ${n}
      <path class="bottle-shine" d="M9.6 15.4v6.4" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".4"/>
    </g>
  </svg>`}function si(e=1440,t=4,a=40,s=480,n=0){const o=-s+n;let r=`M${o} ${a}`;for(let i=o;i<e+s;i+=s)r+=` C${i+s*.25} ${a-t} ${i+s*.25} ${a-t} ${i+s*.5} ${a}`,r+=` C${i+s*.75} ${a+t} ${i+s*.75} ${a+t} ${i+s} ${a}`;return r}function ni(e=0,t=0){const a=Math.abs(Number(e)||0)%7*11,s=Math.max(0,Math.min(1,Number(t)||0)),n=(o,r,i,l,c,m)=>{const h=Math.round(i+s*i*.75),p=(c*(1-Math.min(.35,s*.2))).toFixed(1);return`<path class="thoughts-wave-line ${o}" style="--wave-dur:${p}s;--wave-delay:${m}s" d="${si(1440,h,r,l,a)}"/>`};return`<svg class="sea-wave-svg thoughts-wave-scene" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
    ${n("wave-line-surface",22,3,480,8,-1.7)}
    ${n("wave-line-middle",69,4,400,10,-4.1)}
    ${n("wave-line-distance",123,3,360,12,-7.3)}
  </svg>`}function oi(e={}){const t=va(`${e.id||""}|${e.castAt||""}`),a=(t&1)===1,s=(t>>>3)%14;return{x:a?79+s:8+s,depth:13+(t>>>7)%8}}function ri(){return`<svg class="thoughts-island-scenery" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <defs>
      <linearGradient id="island-reef-shade" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#365c60"/><stop offset="1" stop-color="#153744"/></linearGradient>
      <linearGradient id="island-green-shade" x1="0" y1="0" x2="0.15" y2="1"><stop stop-color="#397c68"/><stop offset="1" stop-color="#164d4b"/></linearGradient>
      <linearGradient id="island-sand-shade" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#f0e3c6"/><stop offset=".48" stop-color="#d7d9c8"/><stop offset="1" stop-color="#b8c9be"/></linearGradient>
      <linearGradient id="island-house-wall" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fbf0d8"/><stop offset="1" stop-color="#c4d3ce"/></linearGradient>
    </defs>
    <ellipse class="scene-island-shadow" cx="720" cy="580" rx="555" ry="36"/>
    <path class="scene-island-reef" d="M151 523
      C226 488 294 477 373 486
      C448 452 521 450 601 478
      C690 445 769 450 851 478
      C937 445 1031 454 1093 486
      C1183 470 1252 491 1300 528
      L1371 620H75Z"/>
    <path class="scene-island-foliage scene-island-foliage-back" d="M203 526
      C244 477 306 449 372 467
      C421 414 515 399 593 438
      C647 391 737 378 812 422
      C882 383 984 403 1034 448
      C1115 426 1205 456 1268 510
      L1322 620H142Z"/>
    <path class="scene-island-foliage scene-island-foliage-front" d="M233 527
      C285 487 343 471 402 485
      C449 446 522 438 584 466
      C640 430 711 429 769 461
      C831 429 906 434 961 467
      C1024 443 1100 458 1151 488
      C1207 477 1252 494 1291 523
      L1320 620H144Z"/>
    <path class="scene-island-beach" d="M165 507
      C244 478 331 466 411 479
      C499 455 577 465 654 485
      C735 457 826 455 906 478
      C987 500 1076 465 1161 477
      C1237 488 1290 506 1340 531
      C1311 568 1304 589 1320 620H95
      C116 578 132 541 165 507Z"/>
    <path class="scene-island-shoreline" d="M165 507
      C244 478 331 466 411 479
      C499 455 577 465 654 485
      C735 457 826 455 906 478
      C987 500 1076 465 1161 477
      C1237 488 1290 506 1340 531"/>
    <path class="scene-island-path" d="M706 514
      C690 532 723 545 711 560
      C697 578 728 589 716 620H765
      C752 590 779 577 759 557
      C743 541 766 529 743 514Z"/>

    <g class="scene-palm scene-palm-left" transform="translate(535 488)">
      <path class="scene-palm-trunk" d="M0 16c-27-44-34-109-25-174 5-37 17-74 34-112"/>
      <path class="scene-palm-trunk-highlight" d="M-4-30c-12-44-12-96-2-142"/>
      <g transform="translate(9 -270)"><g class="scene-palm-crown">
        <path class="scene-palm-leaf leaf-a" d="M0 0c-59-53-133-63-192-27 57-6 105 7 146 28 23 12 40 13 46-1Z"/>
        <path class="scene-palm-leaf leaf-b" d="M0 0c-31-72-91-107-159-94 49 17 87 43 117 74 18 18 33 24 42 20Z"/>
        <path class="scene-palm-leaf leaf-c" d="M0 0c-1-77 35-136 101-159-28 45-41 91-47 133-4 25-15 42-31 47Z"/>
        <path class="scene-palm-leaf leaf-d" d="M0 0c42-67 108-98 177-79-56 17-96 47-129 79-19 19-36 26-48 18Z"/>
        <path class="scene-palm-leaf leaf-e" d="M0 0c65-36 138-30 187 13-59-11-108-5-153 10-25 8-42 5-47-7Z"/>
        <path class="scene-palm-leaf leaf-f" d="M0 0c8-51 36-91 82-116-18 39-26 77-28 111-1 20-12 34-32 35Z"/>
      </g></g>
    </g>
    <g class="scene-palm scene-palm-right" transform="translate(900 490)">
      <path class="scene-palm-trunk" d="M0 14c-25-48-31-116-17-181 8-40 24-77 46-111"/>
      <path class="scene-palm-trunk-highlight" d="M-3-30c-10-44-6-96 12-144"/>
      <g transform="translate(29 -287)"><g class="scene-palm-crown">
        <path class="scene-palm-leaf leaf-a" d="M0 0c-47-51-109-68-163-40 48-1 90 13 126 35 19 12 33 14 37 5Z"/>
        <path class="scene-palm-leaf leaf-b" d="M0 0c-21-65-70-103-130-100 43 17 75 42 100 69 15 16 27 22 35 19Z"/>
        <path class="scene-palm-leaf leaf-c" d="M0 0c7-69 44-118 102-132-28 38-43 78-51 115-5 22-16 35-31 39Z"/>
        <path class="scene-palm-leaf leaf-d" d="M0 0c42-56 101-77 158-57-48 10-84 33-114 57-18 14-33 18-44 10Z"/>
        <path class="scene-palm-leaf leaf-e" d="M0 0c56-26 117-17 156 21-48-13-88-12-125-3-20 5-33 1-31-18Z"/>
      </g></g>
    </g>

    <g class="scene-island-rocks" aria-hidden="true">
      <path d="M196 539q13-19 28-2 15-14 26 2l-5 9h-45Z"/>
      <path d="M1183 528q11-15 24-2 12-13 24 1l-3 8h-44Z"/>
      <path d="M1260 549q8-12 19-2 10-9 18 2l-3 7h-34Z"/>
      <ellipse cx="1051" cy="527" rx="7" ry="3"/><ellipse cx="458" cy="536" rx="5" ry="2.4"/>
    </g>
    <g class="scene-island-grass" aria-hidden="true">
      <path d="M320 493q-24-43-23-75 26 31 31 71 10-43 37-66-14 46-34 77Z"/>
      <path d="M1033 491q-18-40-12-70 23 30 22 66 15-38 42-55-19 42-43 67Z"/>
      <path d="M1110 500q-12-31-7-53 17 24 17 50 12-30 33-43-14 34-35 53Z"/>
      <path d="M406 512q-11-22-8-39 14 17 17 35 8-20 22-28-9 24-24 39Z"/>
    </g>

    <g class="scene-house" transform="translate(650 385)">
      <ellipse class="scene-house-shadow" cx="73" cy="143" rx="104" ry="15"/>
      <path class="scene-house-chimney" d="M118 0h17v38h-17z"/>
      <path class="scene-house-wall" d="M4 48h138v86H4z"/>
      <path class="scene-house-roof-shadow" d="m-17 50 90-75 91 75-11 13-80-65-79 65Z"/>
      <path class="scene-house-roof" d="m-8 47 81-67 82 67-12 11-70-56-69 56Z"/>
      <path class="scene-house-roof-seams" d="m8 43 65-54 65 54M21 49l52-43 54 43"/>
      <path class="scene-house-window-glass" d="M18 63h24v23H18zM109 63h24v23h-24z"/>
      <path class="scene-house-window-frame" d="M30 63v23m-12-11h24m79-12v23m-12-11h24"/>
      <path class="scene-house-door" d="M59 88h31v46H59z"/>
      <circle class="scene-house-door-knob" cx="83" cy="112" r="1.8"/>
      <path class="scene-house-step" d="M54 134h41v6H54zM49 140h51v5H49z"/>
      <circle class="scene-house-lamp" cx="101" cy="93" r="3"/>
      <path class="scene-house-sill" d="M14 89h32m61 0h32"/>
    </g>
    <path class="scene-shore-foam" d="M168 509c87-13 144 12 230 7 80-6 137-23 207-19 30 2 54 8 79 13"/>
    <path class="scene-shore-foam" d="M816 518c30 0 53-8 84-13 88-14 139-26 220-8 85 18 146 6 260 20"/>
    <g class="scene-birds" aria-hidden="true">
      <path d="M1045 194q13-14 26 0 13-14 26 0"/><path d="M1110 224q10-11 20 0 10-11 20 0"/>
    </g>
  </svg>`}function ii(e=[],t=y(),a=new Date){const s=Ut(e,t),n=s.drifting,o=s.returned,r=An(t),i=is(t),l=Math.round(i.strength*100),c=Math.round(45+r.level*10),m=Math.min(1,r.rough),h=En(a),p=o.filter(O=>O.seen!==!0).length,v=s.lost.length,b=n.length?"sent":p?"unread":o.length?"received":v?"lost":"calm",S=n.length?`${n.length} ${n.length===1?"botella en camino":"botellas en camino"}`:p?`${p} ${p===1?"botella nueva":"botellas nuevas"}`:o.length?`${o.length} ${o.length===1?"botella recibida":"botellas recibidas"}`:v?`${v} ${v===1?"botella perdida":"botellas perdidas"}`:"Mar en calma",H=o.slice(0,5).map((O,j)=>{const M=O.seen!==!0;return`<button type="button" class="vault-arrival${M?" is-new is-washing":""}" style="--arrival-x:${28+j*11}%;--wash-delay:${Math.min(j,4)*120}ms" data-action="open-bottle" data-id="${O.id}" aria-label="${M?"Abrir botella nueva recibida":"Abrir botella recibida"}">
      ${Nt(O,{class:M?"is-landed":""})}<span class="sr-only">${M?"Nueva":"Recibida"}</span>
    </button>`}).join("");return`<section id="thoughts-top" class="sea-panel thought-vault thoughts-ocean-stage ${o.length?"has-arrivals":""}${p?" has-unread":""}"
    data-dayphase="${h.phase}" data-tide="${i.key}" data-weather="${r.weather.id}" data-bottle-state="${b}"
    style="--sun-x:${h.x}%;--sun-y:${h.y}%;--moon-x:${h.moonX}%;--moon-y:${h.moonY}%;--water-level:${c}%;--tide-level:${l}%"
    aria-label="Mar de Pensamientos">
    <span class="thoughts-sky-glow" aria-hidden="true"></span>
    <span class="thoughts-cloud thoughts-cloud-left" aria-hidden="true"></span>
    <span class="thoughts-cloud thoughts-cloud-right" aria-hidden="true"></span>
    <span class="thoughts-sun" aria-hidden="true"></span>
    <span class="thoughts-moon" aria-hidden="true">
      <svg class="thoughts-moon-art" viewBox="0 0 48 48">
        <path class="thoughts-moon-crescent" d="M34 4C19 6 8 18 8 29c0 11 9 18 20 15 8-2 14-9 14-18-2 8-8 13-15 13-8 0-14-7-13-15C15 15 22 8 34 4Z"/>
        <circle class="thoughts-moon-crater" cx="22" cy="27" r="1.6"/>
        <circle class="thoughts-moon-crater" cx="29" cy="34" r="1"/>
      </svg>
    </span>
    <header class="sea-sky thoughts-hero-copy">
      <p class="thoughts-kicker">${d("wave")} Un lugar para soltar</p>
      <h1>Pensamientos</h1>
      <p class="thoughts-lead">Escribe. Suelta. Sigue.</p>
      <div class="thoughts-hero-meta">
        <p class="thoughts-state-pill" data-state="${b}" role="status"><span class="thoughts-state-mark" aria-hidden="true"></span>${u(S)}</p>
        <div class="thoughts-tide-status" role="status" aria-label="Estado de la marea: ${u(i.name)}. Fase: ${u(i.phase)}" title="Fase lunar: ${u(i.phase)}">
          <span class="thoughts-tide-icon" aria-hidden="true">${d("wave")}</span>
          <span class="thoughts-tide-name">${u(i.name)}</span>
          <span class="thoughts-tide-meter" role="meter" aria-label="Intensidad de la marea" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}"><i></i></span>
        </div>
      </div>
    </header>
    <div class="sea-water vault-water" aria-hidden="true">
      ${ni(va(t),m)}
      <span class="thoughts-water-reflection"></span>
    </div>
    ${ri()}
    ${H?`<div class="vault-arrivals" aria-label="Botellas recibidas">${H}</div>`:""}
  </section>`}function li(e){if(!e||!e.sent)return`<div class="ocean-figures is-empty">
      <p>Aún no has echado ninguna botella. Escribe algo y suéltalo: el mar se encarga del resto.</p>
    </div>`;const t=e.miles>=1e3?`${Math.round(e.miles/100)/10}k`:`${e.miles}`;return`<div class="ocean-figures">
    <div class="ocean-figure">
      <strong>${e.sent}</strong>
      <span>${e.sent===1?"botella echada":"botellas echadas"}</span>
    </div>
    <div class="ocean-figure">
      <strong>${e.drifting}</strong>
      <span>en camino</span>
    </div>
    <div class="ocean-figure">
      <strong>${e.returned}</strong>
      <span>${e.returned===1?"recibida":"recibidas"}</span>
    </div>
    <div class="ocean-figure">
      <strong>${e.lost}</strong>
      <span>${e.lost===1?"perdida":"perdidas"}</span>
    </div>
    <p class="ocean-figures-note">
      ${e.returnPct===null?"Todavía no ha vuelto ninguna.":`Han vuelto el ${e.returnPct}% de las que ya terminaron su viaje.`}
      ${e.miles?` Llevan ${t} millas navegadas en total.`:""}
      ${e.oldestAtSea?` La más vieja sigue en el agua desde hace ${e.oldestAtSea.days} ${e.oldestAtSea.days===1?"día":"días"}.`:""}
      ${e.answered?` Has respondido ${e.answered} ${e.answered===1?"botella":"botellas"}.`:""}
    </p>
  </div>`}function _s(e=0,t="sent"){const a=Number(e),s=Number.isFinite(a)?Math.max(0,Math.floor(a)):0;return`<p class="thoughts-bottle-count-only" role="status" aria-label="${s} ${t==="lost"?s===1?"botella perdida":"botellas perdidas":s===1?"botella enviada":"botellas enviadas"}">${s}</p>`}function ci(e={},t=y(),a={}){const s=String(a.text||""),n=Math.max(1,Math.min(5,Math.round(Number(a.force)||3)));return`<form id="bottle-form" class="card bottle-composer">
    <label class="sr-only" for="bottle-text">Pensamiento</label>
    <textarea id="bottle-text" name="text" class="bottle-text" maxlength="1200" rows="3"
      placeholder="Escribe aquí…">${u(s)}</textarea>
    <div class="cast-force">
      <div class="cast-force-head"><label for="bottle-force">Fuerza</label><output id="bottle-force-value" for="bottle-force" aria-live="polite">${n}</output></div>
      <input id="bottle-force" class="cast-force-slider" type="range" name="force" min="1" max="5" step="1" value="${n}" aria-label="Fuerza del lanzamiento">
      <div class="cast-force-scale" aria-hidden="true"><span>Vuelve antes</span><span>Tarda más</span></div>
    </div>
    <div class="composer-bar">
      <div class="composer-moods" role="radiogroup" aria-label="Ánimo">
        ${F.map(o=>`<label class="mini-mood" style="--mood-color:${o.color}" title="${o.label}">
          <input type="radio" name="mood" value="${o.value}" ${a.mood===o.value?"checked":""}>
          <span>${o.emoji}</span>
        </label>`).join("")}
      </div>
      <button type="submit" class="button solid cast-btn"${s.trim()?"":" disabled"}>${d("send")} Lanzar botella</button>
    </div>
  </form>`}function di(e,t=y(),a=0){const s=Ne(e,t),n=Ta(e),o=`<button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${e.id}" aria-label="Eliminar">${d("trash")}</button>`;if(s!=="returned"){const l=s==="lost"?"Perdida":"Enviada",c=s==="lost"?"No volvió":"En camino";return`<article class="card bottle-card is-${s} is-locked" style="--tint:${n.hex};--card-delay:${Math.min(9,a)*35}ms" data-bottle-id="${e.id}" aria-label="${l}. ${c}">
      <header class="bottle-card-head">
        <span class="bottle-card-mark">${Nt(e,{paper:!1})}</span>
        <div class="bottle-card-who"><p class="field-caption">${c}</p><h3>${l}</h3></div>
        ${s==="drifting"?`<span class="bottle-lock-mark" aria-hidden="true">${d("lock")}</span>`:""}
      </header>
      <p class="bottle-card-journey">${u(Bs(e,t))}</p>
      <footer class="bottle-card-foot">
        ${s==="lost"?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${e.id}">Soltar otra vez</button>`:""}
        ${o}
      </footer>
    </article>`}const r=e.seen!==!0,i=r?"Nueva · recibida":e.kept?"Recibida · guardada":"Recibida";return`<article class="card bottle-card is-returned${r?" is-unread":""}${e.kept?" is-kept":""}" style="--tint:${n.hex};--card-delay:${Math.min(9,a)*35}ms" data-bottle-id="${e.id}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${Nt(e)}</span>
      <div class="bottle-card-who"><p class="field-caption">${i}</p><h3>Pensamiento</h3></div>
      ${e.kept?`<span class="kept-mark" title="Guardado">${d("bookmark")}</span>`:""}
    </header>
    <p class="bottle-card-text ${sr(e.text)<=26?"is-short":""}">${u(e.text)}</p>
    <p class="bottle-card-journey">${u(Bs(e,t))}</p>
    ${e.reply?`<p class="bottle-card-reply"><span>Respuesta</span> ${u(e.reply)}</p>`:""}
    <footer class="bottle-card-foot">
      <button type="button" class="button outline small-btn" data-action="open-bottle" data-id="${e.id}" aria-label="${r?"Abrir botella nueva":"Abrir botella recibida"}">Abrir</button>
      ${o}
    </footer>
  </article>`}function ui(e,t=y(),a={}){if(!ls(e,t))return"";const s=Ta(e),n=e.mood?F[e.mood-1]:null;return`<div class="modal-card bottle-modal ${e.seen!==!0?"is-fresh":""}" style="--tint:${s.hex}" data-modal-bottle="${e.id}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${d("close")}</button>
    <span class="bottle-wax" aria-hidden="true">${Nt(e,{paper:!1})}<i class="wax-crack"></i></span>
    <p class="tale">Recibida</p>
    <div class="bottle-note" data-fate="returned">
      <blockquote class="bottle-modal-text">${u(e.text)}</blockquote>
      ${n?`<p class="bottle-modal-mood">${n.emoji} · ${n.label.toLowerCase()}</p>`:""}
    </div>
    ${e.reply?`<div class="bottle-reply-box"><span>Respuesta</span><p>${u(e.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">Tu respuesta</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" data-draft="respuesta:${e.id}:text" placeholder="Tu respuesta…">${u(e.replyDraft||"")}</textarea>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${e.reply?'<button class="button outline" data-modal="reply-clear">Quitar respuesta</button>':'<button class="button outline" data-modal="reply">Responder</button>'}
      <button class="button outline" data-modal="keep" title="Se queda en la isla, en tu lista de guardadas">${e.kept?"Quitar de guardadas":"Guardar en la isla"}</button>
      <button class="button solid" data-modal="to-entry" title="Añade este pensamiento al día de hoy">${d("pen")} Llevar al diario</button>
    </div>
  </div>`}function pi(e={}){return`<div class="splash-layer" style="--tint:${Ta(e).hex}">
    <span class="splash-arc">${Nt(e)}</span>
    <span class="splash-ring"></span>
    <span class="splash-ring is-2"></span>
    <span class="splash-drop"></span>
    <span class="splash-drop is-2"></span>
    <span class="splash-drop is-3"></span>
  </div>`}const Yn=["L","M","X","J","V","S","D"],Ws=e=>Yn[(ze(e).getDay()+6)%7];function Jn(e,t,a=""){const n=2*Math.PI*26,o=(Math.min(100,Math.max(0,e))/100*n).toFixed(2);return`<div class="ring-widget ${e>=100?"is-full":""}">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle class="ring-track" cx="32" cy="32" r="26"/>
      <circle class="ring-fill" cx="32" cy="32" r="26" stroke-dasharray="${o} ${n.toFixed(2)}"/>
    </svg>
    <span class="ring-value">${t}</span>
    ${a?`<span class="ring-sub">${u(a)}</span>`:""}
  </div>`}function mi(e=[],t=null,a=[],s=y(),n=y()){return e.length?`<div class="habit-board">${e.map((o,r)=>{const i=!!t?.habits?.[o.id],l=ga(a,o.id,s>n?s:n),c=xn(a,o.id,7,s);return`<button type="button" class="habit-toggle ${i?"is-done":""}" style="--habit-i:${r}"
      data-action="toggle-habit" data-habit="${o.id}" data-date="${s}" aria-pressed="${i}">
      <span class="habit-tick" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.8 11.8 12.8 4.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span class="habit-copy">
        <strong>${u(o.name)}</strong>
        <small>${i?"hecho hoy":s===n?"toca para marcarlo":"aún por hacer"}</small>
      </span>
      <span class="habit-dots" aria-hidden="true">
        ${Array.from({length:7},(m,h)=>{const p=D(s,h-6);return`<i class="${!!a.find(b=>b.date===p)?.habits?.[o.id]?"on":""} ${p>n?"future":""}"></i>`}).join("")}
      </span>
      <span class="habit-streak ${l?"is-hot":""}" title="Racha actual">${l?`${d("flame")} ${l}`:`${c.done}/7`}</span>
    </button>`}).join("")}</div>`:""}function hi(e=[],t=[],{days:a=28,end:s=y(),today:n=y(),title:o="Tus últimas 4 semanas"}={}){if(!t.length)return"";const{dates:r,rows:i}=Po(e,t,a,s,n),l=R(r[0],{day:"numeric",month:"short"}).replace(/\./g,"");return`<section class="card momentum-card">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${d("grid")} Constancia</p>
        <h2>${u(o)}</h2>
      </div>
      <span class="field-caption">${u(l)} → ${u(R(r[r.length-1],{day:"numeric",month:"short"}))}</span>
    </div>
    <p class="momentum-hint">Marca o quita un hábito.</p>
    <div class="momentum-scroll">
      <div class="momentum-grid" style="--cols:${a}">
        <span class="momentum-corner"></span>
        ${r.map(c=>`<span class="momentum-day ${c===n?"is-today":""}">${c.slice(8,10)}</span>`).join("")}
        ${i.map(c=>`
          <span class="momentum-name" title="${u(c.habit.name)}">${u(c.habit.name)}</span>
          ${c.cells.map(m=>`<button type="button" class="momentum-cell ${m.done?"is-done":""} ${m.future?"is-future":""} ${m.recorded?"":"is-blank"}"
            ${m.future?"disabled":""} data-action="toggle-habit" data-habit="${c.habit.id}" data-date="${m.date}" aria-pressed="${m.done}"
            aria-label="${u(c.habit.name)} · ${R(m.date)} · ${m.done?"cumplido":"sin cumplir"}">
            <i></i>
          </button>`).join("")}
        `).join("")}
      </div>
      <div class="momentum-weekdays" style="--cols:${a}">
        <span class="momentum-corner"></span>
        ${r.map(c=>`<span class="${Ws(c)==="L"?"is-mon":""}">${Ws(c)}</span>`).join("")}
      </div>
    </div>
    <div class="momentum-legend">
      <span><i class="lg done"></i> cumplido</span>
      <span><i class="lg"></i> sin registrar</span>
      <span><i class="lg blank"></i> día sin entrada</span>
      <span class="momentum-weekday-note">${Yn.join(" ")} · cada lunes resaltado</span>
    </div>
  </section>`}function fi(e=[],t=[],a=y()){return e.length?`<section class="card habit-stats-card">
    <div class="section-heading"><div><p class="eyebrow">${d("chart")}constancia por hábito</p><h2>Cada uno a su ritmo</h2></div><span class="field-caption">últimos 28 días</span></div>
    <ul class="habit-stats-list">
      ${e.map(s=>{const n=xn(t,s.id,28,a),o=ga(t,s.id,a),r=kn(t,s.id);return`<li class="habit-stat-row">
          <div class="habit-stat-name">
            <strong>${u(s.name)}</strong>
            <small>${Ns(t,s.id)} ${Ns(t,s.id)===1?"día marcado":"días marcados"} en total</small>
          </div>
          <div class="habit-stat-meter"><i style="width:${n.pct}%"></i><span>${n.pct}%</span></div>
          <div class="habit-stat-figures">
            <span title="Racha actual">${d("flame")} <b>${o}</b> d</span>
            <span title="Mejor racha">${d("seal")} <b>${r}</b> d</span>
          </div>
          <div class="habit-stat-actions">
            <button type="button" class="icon-button ghost" data-action="edit-habit" data-habit="${s.id}" aria-label="Renombrar ${u(s.name)}">${d("pen")}</button>
            <button type="button" class="icon-button ghost delete-button" data-action="delete-habit" data-habit="${s.id}" data-name="${u(s.name)}" aria-label="Eliminar ${u(s.name)}">${d("trash")}</button>
          </div>
        </li>`}).join("")}
    </ul>
  </section>`:""}function gi(e={},t=[]){const a=new Set(t.map(n=>n.name.toLowerCase())),s=(e.suggestedHabits||[]).filter(n=>!a.has(n.toLowerCase())).slice(0,6);return`<section class="card habit-composer">
    <div class="section-heading"><div><p class="eyebrow">${d("plus")}Nueva rutina</p><h2>Añade un hábito</h2></div><span class="field-caption">${t.length}/30</span></div>
    <div class="habit-add">
      <input id="new-habit" maxlength="40" placeholder="Nombre del hábito" aria-label="Nuevo hábito">
      <button type="button" class="button solid small-btn" data-action="add-habit">${d("plus")} Añadir</button>
    </div>
    ${s.length?`
      <p class="field-caption" style="margin-top:16px">Sugerencias</p>
      <div class="tag-picker">
        ${s.map(n=>`<button type="button" class="tag-chip" data-action="add-suggested-habit" data-name="${u(n)}"><span>+ ${u(n)}</span></button>`).join("")}
      </div>`:""}
    ${t.length?"":'<p class="habit-empty">Sin hábitos.</p>'}
  </section>`}function bi(e={},t={},a=[],s=null){return`<section class="card counters-board">
    <div class="section-heading">
      <div><p class="eyebrow">${d("drop")} Contadores</p><h2>Lo de hoy, en cifras</h2></div>

    </div>
    ${Yr(e?.counters||{},s||$e(t),t,{action:"routine"})}
    ${a.length?`<p class="sleep-mood-insight">${d("spark")} ${u(a[0])}</p>`:""}
  </section>`}function Kn(e=0,t=""){const a=Number(e)||0;return`<div class="task-row">
    <span class="task-index">${String(a+1).padStart(2,"0")}</span>
    <input class="task-input" data-index="${a}" value="${u(t||"")}" maxlength="200" aria-label="Tarea ${a+1}">
    <button type="button" class="icon-button ghost delete-button" data-action="remove-goal-routine" data-index="${a}" aria-label="Quitar tarea">${d("close")}</button>
  </div>`}function vi(e={},t=y()){const a=e?.goals||[];return`<section class="card tomorrow-board">
    <div class="section-heading">
      <div><p class="eyebrow">${d("sail")} Para mañana</p><h2>Tareas de mañana</h2></div>
      <button type="button" class="text-button" data-action="add-goal-routine">${d("plus")} Añadir tarea</button>
    </div>
    <label class="sr-only" for="routine-tomorrow">Intención para mañana</label>
    <textarea id="routine-tomorrow" class="tomorrow-intent" name="tomorrow" maxlength="600" rows="2"
      placeholder="Mañana quiero…">${u(e?.tomorrow||"")}</textarea>
    <div class="task-list" id="routine-goals">
      ${a.length?a.map((s,n)=>Kn(n,s)).join(""):'<p class="habit-empty">Sin tareas para mañana.</p>'}
    </div>
  </section>`}function yi(e=[],t=null,a=[],s=y()){const n=e.filter(l=>t?.habits?.[l.id]).length,o=e.length?Math.round(n/e.length*100):0,r=e.length?Math.max(0,...e.map(l=>ga(a,l.id,s))):0,i=R(Se(s),{day:"numeric",month:"short"});return`<section class="card routine-teaser">
    <div class="section-heading">
      <div><p class="eyebrow">${d("listChecks")} Rutina de hoy</p><h2>${n}/${e.length||0} ${e.length===1?"hábito":"hábitos"}</h2></div>
      ${Jn(o,`${o}%`)}
    </div>
    <p class="routine-teaser-note">${e.length?`Semana del ${u(i)}.`:"Sin hábitos."}</p>
    <button type="button" class="text-button full-link" data-view="routine">Ir a Rutina ${d("arrow")}</button>
    ${r?`<span class="routine-teaser-flame">${d("flame")} racha de ${r} días</span>`:""}
  </section>`}const z=document.querySelector("#app"),Ot=No([...document.querySelectorAll("script[src]")].map(e=>e.src),window.location.origin);let L=[],q=[],B=[],f={...X},pt="",N="diary",x=y(),oe=y(),Yt=y(),Y="shore",ye="hoy",mt={text:"",mood:null,sea:"breeze",force:3},ee=!1,Xe=7,ae=!1,J=!1,ea="",ta="",aa="",sa="grid",xe="list",me="pulse",de="personal",at=null,Me=null,fs=0,gs=0,na=0,bs=0,st=!1,Et=!1,ja=!1,oa=null,Qs=0,Vs="",ht="idle",Zs=!1,ue=!0,re=!0,Jt=null,De=!1,nt=!1,Ys=null,Js="",Ks=!1;const ra=Oo();let Ja=null;function ot(){ue=!!!Ja?.matches&&!f.reduceMotion,document.documentElement.dataset.motion=ue?"full":"calm"}try{Ja=window.matchMedia("(prefers-reduced-motion: reduce)"),ot(),Ja.addEventListener?.("change",ot)}catch{ot()}function He(e,t=f){const a=se.find(s=>s.id===e)||se[0];document.documentElement.dataset.theme=a.id;try{const s=Fr(a.id,t);let n=document.querySelector('link[rel="icon"]');n||(n=document.createElement("link"),n.rel="icon",document.head.appendChild(n)),n.type="image/svg+xml",n.href=s;const o=document.querySelector('meta[name="theme-color"]');o&&o.setAttribute("content",a.colors[0]),document.title=t?.name?`Cuaderno de ${t.name}`:"Diario"}catch{}}function Da(){L=La(),q=Vt(),B=Ve(),f=Ca(),J=!!f.sidebarCollapsed,ot(),He(f.theme,f)}try{Da()}catch(e){pt="No se han podido leer los datos guardados. Revisa el almacenamiento del navegador o recupera una copia. "+e.message}const Xn=[{label:"Cuaderno",items:[["diary","pen","Hoy"],["archive","book","Archivo"]]},{label:"Bienestar",items:[["routine","listChecks","Rutina"],["stats","chart","Progreso"]]},{label:"Tu espacio",items:[["thoughts","spark","Pensamientos"],["setup","sliders","Ajustes"]]}],$i=["diary","routine","thoughts","archive","stats"];function eo(){return Xn.flatMap(e=>e.items)}const At=e=>eo().find(t=>t[0]===e)?.[2]||"Hoy";function Ka(){return{view:N,thoughtsTab:Y,routineTab:ye,archiveTab:xe,statsTab:me,profileTab:de}}function rt(e){return os({view:e},Ot)}function te(e=!1){const t=os(Ka(),Ot);window.location.pathname!==t&&window.history[e?"replaceState":"pushState"]({view:N,thoughtsTab:Y,routineTab:ye,archiveTab:xe,statsTab:me,profileTab:de},"",t)}function to(){const e=Do(window.location.pathname,Ot);N=e.view,Y=e.thoughtsTab||"shore",De=e.view==="thoughts"&&Y!=="shore",ee=!1,ye=e.routineTab||"hoy",xe=e.archiveTab||"list",me=e.statsTab||"pulse",de=e.profileTab||"personal";const t=os(Ka(),Ot);(e.path!==yn(Ka())||window.location.pathname!==t)&&window.history.replaceState({view:N,thoughtsTab:Y,routineTab:ye,archiveTab:xe,statsTab:me,profileTab:de},"",t)}function Xs(e,{transition:t=!0,replace:a=!1,instant:s=!1}={}){N=e,ae=!1,re=!0,N==="diary"&&(x=y()),N==="thoughts"&&(Y="shore",De=!1,ee=!1),N!=="thoughts"&&(ee=!1),N==="routine"&&(ye="hoy"),N==="archive"&&(xe="list"),N==="stats"&&(me="pulse"),N==="setup"&&(de="personal"),te(a),k({transition:t,instant:s})}function wi(e,{transition:t=!0,replace:a=!1}={}){if(Ha(),document.querySelector(".thoughts-entry-wave")&&vs(),e==="thoughts"&&N!=="thoughts"&&t&&ue){so(()=>Xs(e,{replace:a,transition:!1,instant:!0}));return}Xs(e,{transition:t,replace:a})}function ao(e){if(e!=="thoughts")return"";const t=ya(B).some(a=>a.seen!==!0);return`<span class="nav-dot ${t?"is-new":""}" ${t?"":"hidden"} title="hay pensamientos sin leer"></span>`}function Si([e,t,a],s){const n=e==="thoughts"?ya(B).filter(o=>o.seen!==!0).length:0;return`<a class="nav-item ${N===e?"active":""}" style="--nav-i:${s}" data-view="${e}" href="${rt(e)}" title="${u(a)}" data-tooltip="${u(a)}" ${N===e?'aria-current="page"':""}>
    <span class="nav-index">${String(s+1).padStart(2,"0")}</span>
    <span class="nav-item-icon">${d(t)}${n?'<i class="nav-icon-ping" aria-hidden="true"></i>':""}</span>
    <span class="nav-label">${u(a)}</span>${ao(e)}
  </a>`}function ki(){let e=0;return Xn.map(t=>`<div class="nav-group">
    <p class="nav-group-label">${u(t.label)}</p>
    ${t.items.map(a=>Si(a,e++)).join("")}
  </div>`).join("")}function xi(){return`<nav class="tabbar" aria-label="Navegación inferior">
    ${$i.map(e=>{const t=eo().find(s=>s[0]===e);if(!t)return"";const a=t[2];return`<a class="tabbar-item ${N===e?"active":""}" data-view="${e}" href="${rt(e)}" ${N===e?'aria-current="page"':""}>
        <span class="tabbar-icon">${d(t[1])}${ao(e)}</span>
        <span class="tabbar-label">${u(a)}</span>
      </a>`}).join("")}
  </nav>`}function Mi(){return`
  <div class="sidebar-backdrop" data-action="close-menu" aria-hidden="true"></div>
  <aside class="sidebar" aria-label="Menú principal">
    <div class="sidebar-top-row">
      <a href="${rt("diary")}" class="brand" data-action="today" title="Ir a hoy">
        <span class="brand-mark"><span class="brand-full">diario</span><span class="brand-short">d</span><span class="brand-period">.</span></span>
      </a>
      <button type="button" class="icon-button sidebar-collapse-btn" data-action="toggle-sidebar" aria-label="Plegar o desplegar el menú">
        ${d("left")}
      </button>
    </div>
    <div class="brand-rule"></div>
    <div id="ex-libris-slot">${_n(f,L.length)}</div>
    <div class="nav-wrap">
      <span class="nav-rail" aria-hidden="true"></span>
      <nav class="sidebar-nav" id="sidebar-nav" aria-label="Navegación principal">${ki()}</nav>
    </div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <div class="topbar-left">
        <a class="mobile-brand" data-view="diary" href="${rt("diary")}" aria-label="Ir a Hoy">diario<span>.</span></a>
        <span class="mobile-page-name" id="mobile-page-name">${u(At(N))}</span>
        <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="false">${d("menu")}</button>
        <button class="icon-button ghost desktop-sidebar-toggle" data-action="toggle-sidebar" aria-label="Alternar barra lateral">${d("sidebar")}</button>
        <span class="breadcrumb"><span id="breadcrumb-owner">${f.name?`Cuaderno de ${u(f.name)}`:"Diario"}</span> <span>/</span> <span id="breadcrumb-view">${u(At(N))}</span></span>
      </div>
      <div class="topbar-right">
        <a class="icon-button mobile-settings-link" data-view="setup" href="${rt("setup")}" aria-label="Ajustes" title="Ajustes">${d("sliders")}</a>
        <button type="button" id="theme-pill" class="theme-pill" data-action="cycle-theme">
          <span class="topbar-favicon-mini" id="theme-pill-favicon">${Oe(f.theme,f)}</span>
          <span id="theme-pill-label"></span>
        </button>
        <button type="button" class="avatar" id="avatar-slot" data-action="open-setup-wizard" title="Personalizar mi perfil, edad y gustos" aria-label="Personalizar mi perfil"></button>
      </div>
    </header>
    <main id="main"></main>
    <div class="tabbar-wrap">
      <span class="tabbar-rail" aria-hidden="true"></span>
      <nav class="tabbar" id="tabbar" aria-label="Navegación inferior">${xi()}</nav>
    </div>
    <footer class="page-footer">
      <span id="footer-motto">${d("leaf")} ${u(f.motto||"Un día a la vez.")}</span>
      <span id="footer-owner">${f.name?`Cuaderno de ${u(f.name)}`:"Diario personal"}</span>
    </footer>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <div id="save-health" class="save-health" role="status" aria-live="polite" hidden></div>
  <dialog id="modal"></dialog>`}function qi(){Al();const e=z.querySelector(".sidebar");e&&(e.classList.add("is-mounting"),setTimeout(()=>e.classList.remove("is-mounting"),900)),window.addEventListener("resize",()=>Ht()),document.fonts?.ready?.then(()=>Ht())}function Ht(){const e=z.querySelector(".nav-wrap"),t=z.querySelector(".nav-rail");if(e&&t){const n=e.querySelector(".nav-item.active")||e.querySelector(".nav-item");n&&(t.style.setProperty("--rail-y",`${n.offsetTop}px`),t.style.setProperty("--rail-h",`${n.offsetHeight}px`),t.classList.add("is-ready"))}const a=z.querySelector("#tabbar"),s=z.querySelector(".tabbar-rail");if(a&&s){const n=a.querySelector(".tabbar-item.active")||a.querySelector(".tabbar-item");n&&(s.style.setProperty("--rail-x",`${n.offsetLeft}px`),s.style.setProperty("--rail-w",`${n.offsetWidth}px`),s.classList.add("is-ready"))}}function Ei(){z.classList.toggle("is-thoughts-immersive",N==="thoughts");const e=se.find(S=>S.id===f.theme)||se[0],t=z.querySelector(".sidebar"),a=z.querySelector(".sidebar-backdrop"),s=z.querySelector(".mobile-menu");t&&(t.classList.toggle("is-open",ae),t.classList.toggle("is-collapsed",J),t.classList.toggle("is-ready",!0)),a&&a.classList.toggle("is-visible",ae),s&&s.setAttribute("aria-expanded",String(ae));for(const S of[".sidebar-collapse-btn",".desktop-sidebar-toggle"]){const H=z.querySelector(S);H&&(H.title=`${J?"Desplegar menú · Ctrl+B":"Plegar menú · Ctrl+B"}`,H.setAttribute("aria-expanded",String(!J)))}const n=z.querySelector(".sidebar-collapse-btn .icon");n&&(n.outerHTML=d(J?"right":"left")),z.querySelectorAll("#sidebar-nav .nav-item, #tabbar .tabbar-item").forEach(S=>{const H=S.dataset.view===N;S.classList.toggle("active",H),H?S.setAttribute("aria-current","page"):S.removeAttribute("aria-current")}),ro();const o=z.querySelector("#ex-libris-slot");o&&(o.innerHTML=_n(f,L.length));const r=z.querySelector("#breadcrumb-owner");r&&(r.textContent=f.name?`Cuaderno de ${f.name}`:"Diario");const i=z.querySelector("#breadcrumb-view");i&&(i.textContent=At(N)),document.title=`${At(N)} · ${f.name?`Cuaderno de ${f.name}`:"Diario personal"}`;const l=z.querySelector("#mobile-page-name");l&&(l.textContent=At(N));const c=z.querySelector("#theme-pill-label");c&&(c.textContent=e.name);const m=z.querySelector("#theme-pill");m&&(m.title=`Cambiar papel e icono · ${e.name}`);const h=z.querySelector("#theme-pill-favicon");h&&(h.innerHTML=Oe(f.theme,f));const p=z.querySelector("#avatar-slot");p&&(p.innerHTML=f.name?`<span class="avatar-initial">${u(f.name.slice(0,1).toUpperCase())}</span>`:d("user"));const v=z.querySelector("#footer-motto");v&&(v.innerHTML=`${d("leaf")} ${u(f.motto||"Un día a la vez.")}`);const b=z.querySelector("#footer-owner");b&&(b.textContent=f.name?`Cuaderno de ${f.name}`:"Diario personal"),Ht()}let Ba=!1;function k(e={}){if(!Ba){Ba=!0;try{ft(),He(f.theme,f),Zs||(z.innerHTML=Mi(),Zs=!0,qi()),Ti(e),Ei(),Pe(),!f.completed&&!nt&&(nt=!0,qs(1,{mandatory:!0}))}finally{Ba=!1}}}function Ai(e){if(!e)return"";const t=e.reason==="full"?"el almacenamiento del navegador está lleno":e.reason==="blocked"?"el navegador tiene bloqueado el almacenamiento":"el navegador no ha aceptado la escritura",a=jn();return`${e.label} sin guardar: ${t}.${a>1?` (${a} escrituras en espera)`:""}`}function Pe(){const e=document.querySelector("#save-health"),t=Tn(),a=t?`${t.key}|${t.reason}|${jn()}`:"";return e&&a!==Js&&(Js=a,t?(e.hidden=!1,e.innerHTML=`
        <span class="save-health-dot" aria-hidden="true"></span>
        <span class="save-health-text">${u(Ai(t))}</span>
        <button type="button" class="text-button" data-action="retry-save">Reintentar</button>
        <button type="button" class="text-button" data-action="export">Descargar copia</button>`):(e.hidden=!0,e.innerHTML="")),t}function vs(){ra.cancel(),document.querySelector(".thoughts-entry-wave")?.remove()}function so(e=()=>{}){if(vs(),!ue){e();return}const t=ra.begin(),a=document.createElement("div");a.className="thoughts-entry-wave",a.setAttribute("aria-hidden","true"),a.innerHTML=`<svg class="thoughts-entry-water" viewBox="0 0 1440 1400" preserveAspectRatio="none" aria-hidden="true">
    <defs><linearGradient id="thoughts-entry-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop class="entry-stop entry-stop-surface" offset="0%"/><stop class="entry-stop entry-stop-mid" offset="36%"/><stop class="entry-stop entry-stop-deep" offset="100%"/>
    </linearGradient></defs>
    <path class="thoughts-entry-sea" d="M-40 112C75 80 166 83 276 105S478 137 602 103 816 72 943 102 1160 137 1284 103 1410 83 1480 108V1400H-40Z"/>
    <path class="thoughts-entry-crest" d="M-40 112C75 80 166 83 276 105S478 137 602 103 816 72 943 102 1160 137 1284 103 1410 83 1480 108"/>
    <path class="thoughts-entry-foam" d="M-40 132C100 110 201 114 330 128S559 146 682 125 902 109 1030 127 1260 145 1380 121 1450 116 1480 126"/>
  </svg>`,document.body.appendChild(a);const s=a.querySelector(".thoughts-entry-water");if(!s){e(),a.remove();return}let n="cover",o=setTimeout(l,900);const r=()=>{ra.isCurrent(t)&&(clearTimeout(o),a.remove())};function i(c){c.target!==s||c.propertyName!=="transform"||(n==="cover"?l():n==="reveal"&&r())}function l(){n!=="cover"||!ra.isCurrent(t)||(clearTimeout(o),n="covered",s.style.transition="none",s.style.transform="translateY(0)",e(),requestAnimationFrame(()=>{s.getBoundingClientRect(),s.style.transition="transform .78s cubic-bezier(.55,.05,.35,1)",n="reveal",s.addEventListener("transitionend",i),s.style.transform="translateY(-115%)",o=setTimeout(r,900)}))}s.addEventListener("transitionend",i),s.getBoundingClientRect(),requestAnimationFrame(()=>{s.style.transform="translateY(0)"})}function en(){const e=document.querySelector(".thoughts-ocean-stage");if(!e)return;const t=En(new Date);e.dataset.dayphase=t.phase,e.style.setProperty("--sun-x",`${t.x}%`),e.style.setProperty("--sun-y",`${t.y}%`),e.style.setProperty("--moon-x",`${t.moonX}%`),e.style.setProperty("--moon-y",`${t.moonY}%`)}function Li(){Jt&&(clearInterval(Jt),Jt=null),N==="thoughts"&&(en(),Jt=setInterval(en,6e4))}function Ci(){ee=!ee;const e=document.querySelector(".thoughts-world"),t=document.querySelector(".thoughts-landscape-toggle");if(e?.classList.toggle("is-landscape-only",ee),!t)return;const a=ee?"Mostrar interfaz":"Ocultar interfaz";t.setAttribute("aria-label",a),t.setAttribute("aria-pressed",String(ee)),t.title=ee?"Mostrar interfaz":"Ver paisaje sin interfaz";const s=t.querySelector(".icon");s&&(s.outerHTML=d(ee?"eye":"expand"))}function Ti(e={}){const t=document.querySelector("#main");if(!t)return;N==="thoughts"&&jl();const a=Vs!==N,s=a&&N==="thoughts",n=ue&&!e.instant&&!s&&(!!e.transition||a||re);re=!1;const o=window.scrollY;t.innerHTML=`
    ${pt?`<div class="error-banner" role="alert">${u(pt)}</div>`:""}
    ${ji()}`,t.className="",n&&(t.offsetWidth,t.classList.add("page-enter")),Pl(),yl(),ml(),Ll(),a?(Vs=N,window.scrollTo({top:0,behavior:"auto"})):o&&window.scrollTo(0,o),Li()}function Na(e,t,a,s=""){return`<div class="page-heading">
    <div>${e?`<p class="eyebrow">${e}</p>`:""}<h1>${t}</h1></div>
    ${s}
  </div>`}function ji(){switch(N){case"diary":return tn();case"thoughts":return Gi();case"routine":return _i();case"archive":return Xi();case"stats":return el();case"setup":return al();default:return tn()}}function Di(){return`<div class="day-navigation">
    <button type="button" data-action="previous" aria-label="Día anterior">${d("left")}<span>Anterior</span></button>
    <button type="button" data-action="today" class="today-button">Hoy</button>
    <button type="button" data-action="next" ${x>=y()?"disabled":""}><span>Siguiente</span>${d("right")}</button>
  </div>`}function Ni(){return f.completed?"":`<section class="card setup-welcome-banner">
    <div class="setup-welcome-content">
      <span class="soft-icon accent">${d("sliders")}</span>
      <div>
        <h2>Personaliza tu diario</h2>
        <p>Elige tus metas, hábitos y papel.</p>
      </div>
    </div>
    <div class="setup-welcome-actions">
      <button type="button" class="button solid" data-action="open-setup-wizard">${d("sliders")} Personalizar ahora</button>
    </div>
  </section>`}function Oi(e,t){const a=e?Object.values(e.habits||{}).filter(Boolean).length:0,s=Qr(f.name),n=Ut(B,x).returned.filter(o=>o.seen!==!0).length;return`<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Día</small><span>${Gt(x,L)}</span></div>
      <div class="hero-meta">
        <p class="hero-greeting">${u(s)}</p>
        <span class="date-line">${R(x)}</span>
        ${q.length||n?`<p class="hero-line">
          ${q.length?`<button type="button" class="hero-link" data-view="routine">${a}/${q.length} hábitos</button>`:""}
          ${n?`<button type="button" class="hero-link is-new" data-view="thoughts">${n===1?"1 botella nueva":n+" botellas nuevas"}</button>`:""}
        </p>`:""}
      </div>
    </div>
    <div class="hero-right">
      ${Di()}
    </div>
  </div>`}function Ra(e,t,a,s,n=!0){const o=s?String(s).trim().split(/\s+/).length:0;return`<div class="writing-field" data-field="${e}">
    <label for="${e}">${t}<span class="word-count">${o} palabras</span></label>
    <textarea id="${e}" name="${e}" maxlength="20000" placeholder="${u(a)}" class="${n?"large":""}">${u(s||"")}</textarea>
  </div>`}function Hi(e){const t=he(f);return t.length?`<div class="entry-parts">
    ${t.map(a=>{const s=`part_${a.key}`,n=e?.parts?.[a.key]||"",o=`<label for="${s}">${u(a.label)}${a.hint?`<small>${u(a.hint)}</small>`:""}</label>`,r=a.type==="line"?`<input id="${s}" name="${s}" class="clean-line-input" maxlength="600" value="${u(n)}">`:`<textarea id="${s}" name="${s}" maxlength="4000" rows="3">${u(n)}</textarea>`;return`<div class="writing-field part-field" data-part="${a.key}">${o}${r}</div>`}).join("")}
  </div>`:""}function Pi(e){const t=he(f).filter(a=>String(e?.parts?.[a.key]||"").trim());return t.length?`<div class="sheet-parts">${t.map(a=>`
    <div class="sheet-part"><span>${u(a.label)}</span><p>${u(e.parts[a.key])}</p></div>`).join("")}</div>`:""}function zi(e=""){return`<div class="goal-row"><span class="goal-circle"></span>
    <input name="goal" aria-label="Objetivo para mañana" placeholder="Un objetivo concreto…" maxlength="500" value="${u(e)}">
    <button type="button" class="icon-button ghost" data-action="remove-goal" aria-label="Eliminar objetivo">${d("close")}</button>
  </div>`}function Fi(e,t){if(!e)return"";const a=q.filter(n=>e.habits?.[n.id]),s=f.name?`Cuaderno de ${f.name}`:"Resumen del día";return`<section class="card daily-summary notebook-sheet reveal">
    <div class="sheet-header">
      <div>
        <p class="eyebrow">${d("book")} Día ${Gt(e.date,L)}</p>
        <h2>${R(e.date)}</h2>
      </div>
      <span class="mood-tag" style="--mood:${F[e.mood-1].color}">${F[e.mood-1].emoji} ${F[e.mood-1].label}</span>
    </div>
    ${e.wordOfDay||e.capsule?`
      <div class="sheet-capsules">
        ${e.wordOfDay?`<div class="sheet-capsule-item"><span>Palabra del día</span><strong>«${u(e.wordOfDay)}»</strong></div>`:""}
        ${e.capsule?`<div class="sheet-capsule-item"><span>${u(t.capsuleLabel)}</span><strong>${u(e.capsule)}</strong></div>`:""}
      </div>
    `:""}
    <p class="sheet-narrative">${Ro(e)}</p>
    ${e.bestOfDay?`<div class="sheet-quote-note"><span>Lo mejor:</span> «${u(e.bestOfDay)}»</div>`:""}
    ${Pi(e)}
    ${a.length?`<div class="sheet-habits-line">${d("check")} ${a.map(n=>`<b>${u(n.name)}</b>`).join(" · ")}</div>`:""}
    <div class="sheet-footer">
      <small>${u(s)} · ${It(e)} palabras</small>
      <button type="button" class="text-button" data-action="read" data-date="${e.date}">Ver hoja completa ${d("arrow")}</button>
    </div>
  </section>`}function Bi(e){return e?!!(e.bestOfDay||e.differentToday||e.tomorrow||e.energy||e.stress||e.tags&&e.tags.length||e.gratitude&&e.gratitude.some(Boolean)):!1}function tn(){const e=L.find(m=>m.date===x),t=V(f),a=ja?{triggered:!1}:ms(e||{}),s=Ya(x,na),n=e?.mood?F[e.mood-1].color:"",o=e?.sleepHours??f.sleepGoal??t.sleepRecommended??7.5,r=e?.studyHours??0,i=at===null?Bi(e):at,l=[6,7,7.5,8,9],c=[0,1,2,3,4];return`
  ${Ni()}
  ${Oi(e)}
  <div class="section-rule" aria-hidden="true"></div>
  <div id="crisis-alert-slot">${Vn(a,f)}</div>
  <div class="diary-layout ${Et?"is-focus-writing":""}">
    <div class="diary-main">
      <form id="diary-form" style="${n?`--active-mood:${n}`:""}" autocomplete="off">
        <!-- 1 · CAPTURA RÁPIDA -->
        <section class="card mood-card-section quick-capture">
          <div class="section-heading">
            <p class="section-index" style="margin-bottom:0">¿Cómo ha ido hoy?</p>
          </div>
          <div class="mood-scale" role="radiogroup" aria-label="¿Cómo te ha ido?">
            ${F.map(m=>`<label class="mood-option" style="--mood-color:${m.color}">
              <input type="radio" name="mood" value="${m.value}" ${(e?.mood||0)===m.value?"checked":""}>
              <span class="mood-face">${m.emoji}</span>
              <span class="mood-label">${m.label}</span>
            </label>`).join("")}
          </div>

          <div class="quick-hours-strip">
            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="sleepHours">${d("moon")} Sueño</label>
                <div class="quick-pills" role="group" aria-label="Atajos de sueño">
                  ${l.map(m=>`<button type="button" class="quick-pill ${Number(o)===m?"active":""}" data-action="quick-number" data-target="sleepHours" data-val="${m}">${E(m)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="sleepHours" name="sleepHours" type="number" min="0" max="24" step="0.5" value="${o}">
                <span>h · Meta ${E(f.sleepGoal||t.sleepRecommended)}</span>
              </div>
            </div>

            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="studyHours">${d("study")} ${u(t.focusLabel)}</label>
                <div class="quick-pills" role="group" aria-label="Atajos de dedicación">
                  ${c.map(m=>`<button type="button" class="quick-pill ${Number(r)===m?"active":""}" data-action="quick-number" data-target="studyHours" data-val="${m}">${E(m)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="studyHours" name="studyHours" type="number" min="0" max="24" step="0.5" value="${r}">
                <span>h · Meta ${E(f.studyGoal??t.studyRecommended)}</span>
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
              <button type="button" class="icon-button ghost" data-action="toggle-focus-writing" title="${Et?"Salir del modo enfoque":"Ampliar zona de escritura"}" aria-label="Modo enfoque">
                ${d("expand")}
              </button>
            </div>
          </div>
          <div id="writing-prompt-box" class="writing-prompt-banner ${st?"is-open":""}" ${st?"":"hidden"}>
            <div>
              <p id="writing-prompt-text">${u(s)}</p>
            </div>
            <div class="writing-prompt-actions">
              <button type="button" class="button outline small-btn" data-action="next-writing-prompt">${d("refresh")} Otra</button>
              <button type="button" class="button solid small-btn" data-action="insert-writing-prompt">${d("pen")} Usar</button>
            </div>
          </div>
          ${Ra("generalDay","Notas del día",t.placeholders.generalDay,e?.generalDay,!0)}
          ${Hi(e)}
          <div class="capsule-word-grid">
            <div class="writing-field" data-field="capsule">
              <label for="capsule">${d("spark")} ${u(t.capsuleLabel)}</label>
              <input id="capsule" name="capsule" class="clean-line-input" maxlength="300" placeholder="${u(t.capsulePlaceholder)}" value="${u(e?.capsule||"")}">
            </div>
            <div class="writing-field" data-field="wordOfDay">
              <label for="wordOfDay">${d("book")} Palabra del día</label>
              <input id="wordOfDay" name="wordOfDay" class="clean-line-input" maxlength="60" placeholder="Una palabra que resuma hoy…" value="${u(e?.wordOfDay||"")}">
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
            <span class="extras-chevron">${d("chevronDown")}</span>
          </button>
          <div id="extras-panel" class="extras-work-shell" ${i?"":"hidden"}>
            <div class="extras-inner">
              <section class="card">
                <p class="section-index">Etiquetas de hoy</p>
                ${Zr(e?.tags||[],t.tags)}
              </section>

              <section class="card">
                <p class="section-index">Momentos y energía</p>
                <div class="scale-block" style="margin-bottom:16px">
                  ${Us("energy",un,e?.energy,"bolt","Energía","Del 1 al 5","Opcional")}
                  ${Us("stress",pn,e?.stress,"storm","Estrés","Del 1 al 5","Opcional")}
                </div>
                ${Ra("bestOfDay","Lo mejor del día",t.placeholders.bestOfDay,e?.bestOfDay,!1)}
                ${Ra("differentToday","¿Qué ha sido distinto hoy?",t.placeholders.differentToday,e?.differentToday,!1)}
              </section>

              <section class="card">
                <p class="section-index">Tres cosas buenas</p>
                <div class="gratitude-fields">
                  ${["1. Hoy agradezco o valoro...","2. También...","3. Y además..."].map((m,h)=>`<label><span>0${h+1}</span><input name="gratitude${h}" aria-label="${m}" placeholder="${m}" maxlength="20000" value="${u(e?.gratitude?.[h]||"")}"></label>`).join("")}
                </div>
              </section>
            </div>
          </div>
        </div>

        <div class="save-area">
          <button class="button solid save-button" type="submit" ${pt?"disabled":""}>${d("stamp")} Guardar día</button>
        </div>
      </form>
      ${Fi(e,t)}
    </div>

    <aside class="diary-aside">
      ${Ri()}
      <div id="inspiration-slot">${Zn(x,fs,gs,f,e,e?.wordOfDay||"")}</div>
      ${yi(q,e,L,x)}
      ${no()}
      <div id="quote-slot">${Qn(x,bs,f)}</div>
    </aside>
  </div>`}function Ri(){const t=Ut(B,x).returned.filter(o=>o.seen!==!0).length,a=t?"Recibidas":"Pensamientos",s=t?`${t} ${t===1?"nueva":"nuevas"}`:"",n=B.length?`${B.length} ${B.length===1?"nota":"notas"}`:"Vacío";return`<section class="card thoughts-teaser ${t?"has-new":""}">
    <div class="thoughts-teaser-heading">
      <span class="soft-icon ${t?"accent":""}">${d("spark")}</span>
      <div><p class="eyebrow">Pensamientos</p><h2>${u(a)}</h2></div>
    </div>
    ${s?`<p class="thoughts-teaser-copy">${u(s)}</p>`:""}
    <div class="thoughts-teaser-footer">
      <span>${u(n)}</span>
      <button type="button" class="text-button" data-view="thoughts">Abrir ${d("arrow")}</button>
    </div>
  </section>`}function no(){const e=Se(x),t=D(e,6),a=ve(L,e,t),s=_e(a);return`<section class="card week-preview">
    <div class="section-heading"><h2>Esta semana</h2><span class="tag">${a.length}/7 días</span></div>
    <div class="week-dots">
      ${Array.from({length:7},(n,o)=>{const r=D(e,o),i=a.find(l=>l.date===r);return`<button type="button" data-action="open-day" data-date="${r}" ${r>y()?"disabled":""} aria-label="${R(r)}${i?", "+F[i.mood-1].label:""}">
          <span>${["L","M","X","J","V","S","D"][o]}</span>
          <i class="${i?"filled":""} ${r===y()?"current":""}" style="--mood:${i?F[i.mood-1].color:""}">${i?d("check"):"·"}</i>
        </button>`}).join("")}
    </div>
    <div class="mini-metrics">
      <div>${d("heart")}<strong>${s.count?E(s.mood):"—"}<small>/5</small></strong><span>Ánimo</span></div>
      <div>${d("moon")}<strong>${s.count?E(s.sleep):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${d("study")}<strong>${s.count?E(s.study):"—"}<small>h</small></strong><span>Enfoque</span></div>
    </div>
    <button class="text-button full-link" data-view="stats">Ver progreso ${d("arrow")}</button>
  </section>`}function Gi(){const e=y(),t=Ut(B,e),a=[["shore","spark","Recibidas",t.returned.length],["sea","send","Enviadas",t.drifting.length],["kept","bookmark","Guardadas",t.kept.length],["lost","history","Perdidas",t.lost.length]],s=B.length,n=t.returned.filter(r=>r.seen!==!0).length,o=n===1?"1 nueva":`${n} nuevas`;return`<div class="thoughts-world${ee?" is-landscape-only":""}">
    <a class="thoughts-exit" data-view="diary" href="${rt("diary")}" aria-label="Volver al diario" title="Volver al diario">
      ${d("left")}
    </a>
    <button type="button" class="thoughts-landscape-toggle" data-action="toggle-thoughts-landscape" aria-label="Ocultar interfaz" title="Ver paisaje sin interfaz" aria-pressed="${ee}">${d(ee?"eye":"expand")}</button>
    ${ii(B,e)}
    <section class="thoughts-compose-dock" aria-labelledby="thoughts-compose-title">
      <h2 id="thoughts-compose-title">Escribe una botella</h2>
      <div id="composer-slot">${ci(f,e,mt)}</div>
    </section>
    <details id="thoughts-bottles-drawer" class="thoughts-bottles-drawer"${De?" open":""}>
      <summary class="thoughts-drawer-toggle" aria-label="Ver tus botellas${n?`, ${o}`:""}">
        ${d("book")}<span>Botellas</span>
        ${n?`<span class="thoughts-drawer-new">${o}</span>`:""}
        <span class="thoughts-drawer-count">${s}</span>
        <span class="thoughts-drawer-chevron">${d("chevronDown")}</span>
      </summary>
      <section class="thoughts-drawer-panel" aria-label="Tu isla y tus botellas">
        <header class="thoughts-drawer-header">
          <div><p class="island-kicker">La orilla</p><h2>Tu isla</h2></div>
          <span class="thoughts-drawer-returned">${t.returned.length} recibidas</span>
        </header>
        ${li(ar(B,e))}
        <div class="thoughts-island-bottles">
          <div class="segmented ocean-tabs" role="tablist" aria-label="Estado de las botellas">
            ${a.map(([r,i,l,c])=>`<button type="button" id="thoughts-tab-${r}" role="tab" aria-controls="ocean-body" aria-selected="${Y===r}" data-action="thoughts-tab" data-tab="${r}" class="${Y===r?"active":""}">
              ${d(i)} <span>${u(l)}</span>${c||r==="sea"||r==="lost"?`<span class="seg-count">${c}</span>`:""}
            </button>`).join("")}
          </div>
          <div id="ocean-body" role="tabpanel" aria-labelledby="thoughts-tab-${Y}">${Ii(t,e)}</div>
        </div>
      </section>
    </details>
  </div>`}function Ii(e,t){if(Y==="sea")return _s(e.drifting.length,"sent");if(Y==="lost")return _s(e.lost.length,"lost");const s={shore:e.returned,sea:[],kept:e.kept,lost:[]}[Y]??e.returned;return s.length?`<div class="bottle-grid">${s.map((n,o)=>di(n,t,o)).join("")}</div>`:Ui(Y)}function Ui(e){const t={shore:["La orilla está vacía","Aquí aparecerán las botellas recibidas."],sea:["Mar en calma","Las botellas que envíes aparecerán aquí."],kept:["Sin botellas guardadas","Guarda las recibidas que quieras conservar."],lost:["Sin botellas perdidas",""]},[a,s]=t[e]||t.shore,n=e==="shore"||e==="sea"?`<button type="button" class="button outline" data-action="focus-composer">${d("pen")} Escribir</button>`:"";return`${ua(a,s,n)}`}function _i(){const e=L.find(a=>a.date===x);return`${Na("Hoy","Rutina","",`
    <div class="segmented">
      ${[["hoy","listChecks","Hoy"],["week","grid","Semana"],["counters","drop","Contadores"],["streaks","flame","Rachas"]].map(([a,s,n])=>`<button type="button" data-action="routine-tab" data-tab="${a}" class="${ye===a?"active":""}">${d(s)} ${u(n)}</button>`).join("")}
    </div>
  `)}
  <div class="routine-layout">
    <div class="routine-main tab-panel-enter">
      ${Qi(e)}
      <div id="routine-body">${Vi(e)}</div>
    </div>
    <aside class="routine-aside">${Ki(e)}</aside>
  </div>`}function Wi(){return`<div class="day-navigation">
    <button type="button" data-action="shift-day" data-delta="-1" aria-label="Día anterior">${d("left")}<span>Anterior</span></button>
    <button type="button" data-action="today-routine" ${x===y()?"disabled":""}>${d("sun")} Hoy</button>
    <button type="button" data-action="shift-day" data-delta="1" ${x>=y()?"disabled":""}><span>Siguiente</span>${d("right")}</button>
  </div>`}function Qi(e){const t=q.filter(o=>e?.habits?.[o.id]).length,a=q.length?Math.round(t/q.length*100):0,s=q.length?t===0?"Aún no has marcado nada":t===q.length?"Rutina completa":`Vas a ${t} de ${q.length}`:"Tu lista está vacía",n=a>=100?"Lista completa.":a>0?"Buen ritmo.":"Un paso basta.";return`<section class="card routine-hero">
    <div class="routine-hero-copy">
      <p class="eyebrow">${d("sun")} ${u(R(x,{weekday:"long",day:"numeric",month:"long"}))}</p>
      <h2>${u(s)}</h2>
      <p class="routine-hero-note">${u(n)}</p>
      ${Wi()}
    </div>
    ${Jn(a,q.length?`${a}%`:"—","de hoy")}
  </section>`}function Vi(e){const t=V(f),a=y();if(ye==="week")return`${hi(L,q,{days:35,end:a,today:a,title:"Tus últimas cinco semanas"})}${Zi()}`;if(ye==="counters"){const s=ve(L,D(a,-27),a);return`${bi(e,f,[])||""}${Wn(s,f)}`}return ye==="streaks"?q.length?`${fi(q,L,a)}${Yi()}`:ua("Sin hábitos","Añade uno.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="hoy">${d("plus")} Añadir</button>`):`${q.length?`<section class="card habit-board-card">
    <div class="section-heading">
      <div><p class="eyebrow">${d("listChecks")} Hoy</p><h2>Hábitos</h2></div>
      <span class="field-caption">${q.filter(s=>e?.habits?.[s.id]).length}/${q.length}</span>
    </div>
    ${mi(q,e,L,x,a)}
  </section>`:ua("Sin hábitos","Añade uno.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="streaks">${d("flame")} Rachas</button>`)}
  ${vi(e,x)}
  ${gi(t,q)}`}function Zi(){const e=Se(x),t=D(e,6),a=ve(L,e,t),s=q.map(n=>{const o=a.filter(r=>r.habits?.[n.id]).length;return{label:n.name,count:o,total:7,color:o>=5?"var(--green)":o>=3?"var(--ochre)":"var(--red)"}});return`<section class="card">
    <div class="section-heading"><div><p class="eyebrow">${d("week")}Esta semana</p><h2>${u(R(e,{day:"numeric",month:"short"}))} → ${u(R(t,{day:"numeric",month:"short"}))}</h2></div>
      <span class="tag">${a.length}/7 días con entrada</span></div>
    ${q.length?hs(s):'<p class="habit-empty">Añade hábitos para ver su semana.</p>'}
  </section>`}function Yi(){const e=q.map(a=>({h:a,best:kn(L,a.id),live:ga(L,a.id)})).filter(a=>a.best>0).sort((a,s)=>s.best-a.best).slice(0,6);if(!e.length)return"";const t=e[0].best||1;return`<section class="card streak-board">
    <div class="section-heading"><div><p class="eyebrow">${d("flame")}El muro de las rachas</p><h2>Tus mejores series</h2></div><span class="field-caption">días seguidos</span></div>
    <ol class="streak-ranks">
      ${e.map((a,s)=>`<li>
        <span class="streak-rank">${String(s+1).padStart(2,"0")}</span>
        <span class="streak-name">${u(a.h.name)}</span>
        <span class="streak-bar"><i style="width:${Math.max(6,Math.round(a.best/t*100))}%"></i></span>
        <span class="streak-num"><b>${a.best}</b> d${a.live?` · viva ${a.live}`:""}</span>
      </li>`).join("")}
    </ol>
  </section>`}function Ji(){return q.length?L.filter(e=>q.every(t=>e.habits?.[t.id])).length:0}function Ki(e){const t=y(),a=ve(L,D(t,-27),t),s=e?Math.min(100,Math.round(e.sleepHours/(f.sleepGoal||7.5)*100)):0;return`
  <section class="card routine-day-card">
    <div class="section-heading"><h2>El día en cifras</h2><span class="tag">${u(R(x,{day:"numeric",month:"short"}))}</span></div>
    <div class="mini-metrics">
      <div>${d("moon")}<strong>${e?E(e.sleepHours):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${d("study")}<strong>${e?E(e.studyHours):"—"}<small>h</small></strong><span>Enfoque</span></div>
      <div>${d("drop")}<strong>${e?.counters?.water||0}<small>v</small></strong><span>Agua</span></div>
    </div>
    ${e?`<div class="sleep-goal-bar"><span style="width:${s}%"></span></div>
      <p class="field-caption">${u(Mn(e.sleepHours))}</p>`:'<p class="habit-empty">Este día no tiene entrada en el cuaderno.</p>'}
    <button type="button" class="text-button full-link" data-action="open-day" data-date="${x}">Escribir sobre este día ${d("arrow")}</button>
  </section>
  <section class="card">
    <div class="section-heading"><h2>Rachas del cuaderno</h2><span class="field-caption">28 días</span></div>
    <div class="streak-lines">
      <div><span>${d("flame")} Días seguidos escribiendo</span><strong>${wn(L)}</strong></div>
      <div><span>${d("seal")} Mejor racha histórica</span><strong>${rs(L)}</strong></div>
      <div><span>${d("check")} Días con toda la rutina</span><strong>${Ji()}</strong></div>
      <div><span>${d("moon")} Sueño medio</span><strong>${a.length?E(_e(a).sleep):"—"} h</strong></div>
    </div>
  </section>
  ${no()}`}function Xi(){const e=[...new Set(L.flatMap(a=>a.tags||[]))],t=L.filter(a=>(!ta||a.mood===+ta)&&(!aa||(a.tags||[]).includes(aa))&&(!ea||[a.date,a.generalDay,a.bestOfDay,a.differentToday,a.tomorrow,a.wordOfDay,a.capsule,...a.gratitude,...a.goals||[],...a.tags||[]].join(" ").toLocaleLowerCase().includes(ea.toLocaleLowerCase()))).sort((a,s)=>s.date.localeCompare(a.date));return`${Na("Cuaderno","Archivo","",`
    <div class="segmented">
      <button type="button" data-action="archive-tab" data-tab="list" class="${xe==="list"?"active":""}">${d("book")} Lista</button>
      <button type="button" data-action="archive-tab" data-tab="calendar" class="${xe==="calendar"?"active":""}">${d("calendar")} Calendario</button>
    </div>
  `)}

  ${xe==="calendar"?`
    <div class="tab-panel-enter">
      <section class="card full-calendar">
        ${Jr(oe,L,{selected:x})}
        <div class="mood-legend">
          ${F.map(a=>`<span><i style="background:${a.color}"></i>${a.label}</span>`).join("")}
        </div>
      </section>
    </div>
  `:`
    <div class="tab-panel-enter">
      <div class="history-controls">
        <label class="search-box">${d("search")}<input id="history-search" aria-label="Buscar en el diario" placeholder="Buscar por palabra, nota o etiqueta…" value="${u(ea)}"></label>
        <select id="history-mood" aria-label="Filtrar por estado de ánimo">
          <option value="">Todos los estados</option>
          ${F.map(a=>`<option value="${a.value}" ${ta==a.value?"selected":""}>${a.emoji} ${a.label}</option>`).join("")}
        </select>
        ${e.length?`
          <select id="history-tag" aria-label="Filtrar por etiqueta">
            <option value="">Todas las etiquetas</option>
            ${e.map(a=>`<option value="${u(a)}" ${aa===a?"selected":""}>#${u(a)}</option>`).join("")}
          </select>
        `:""}
        <div class="segmented">
          <button type="button" data-action="history-layout" data-layout="grid" class="${sa==="grid"?"active":""}">Tarjetas</button>
          <button type="button" data-action="history-layout" data-layout="timeline" class="${sa==="timeline"?"active":""}">Hilo</button>
        </div>
      </div>
      <div class="${sa==="timeline"?"history-timeline":"history-grid"}">
        ${t.length?t.map((a,s)=>{const n=Object.values(a.habits||{}).filter(Boolean).length;return`<article class="card history-card" style="--mood:${F[a.mood-1].color};--i:${Math.min(s,10)}">
            <div class="section-heading">
              <p class="eyebrow">Día ${Gt(a.date,L)}</p>
              <span class="mood-tag" style="--mood:${F[a.mood-1].color}">${F[a.mood-1].emoji} ${F[a.mood-1].label}</span>
            </div>
            <h2>${R(a.date,{day:"numeric",month:"long",year:"numeric"})}</h2>
            <p class="entry-excerpt">${u(a.generalDay)}</p>
            ${a.wordOfDay||a.capsule?`
              <div class="history-capsules">
                ${a.wordOfDay?`<span class="history-word-pill">«${u(a.wordOfDay)}»</span>`:""}
                ${a.capsule?`<span class="history-capsule-pill">${d("spark")} ${u(a.capsule)}</span>`:""}
              </div>
            `:""}
            <div class="history-numbers">
              <span class="chiplet">${d("moon")} ${E(a.sleepHours)} h</span>
              <span class="chiplet">${d("study")} ${E(a.studyHours)} h</span>
              ${q.length?`<span class="chiplet">${d("check")} ${n}/${q.length}</span>`:""}
              <span class="chiplet">${d("pen")} ${It(a)} pal.</span>
            </div>
            <div class="history-actions">
              <button class="text-button" data-action="read" data-date="${a.date}">Abrir ${d("arrow")}</button>
              <button class="icon-button ghost" data-action="open-day" data-date="${a.date}" aria-label="Editar">${d("pen")}</button>
              <button class="icon-button ghost delete-button" data-action="delete" data-date="${a.date}" aria-label="Eliminar">${d("trash")}</button>
            </div>
          </article>`}).join(""):ua(L.length?"Sin resultados":"Sin entradas","")}
      </div>
    </div>
  `}`}function el(){return`${Na("Cuaderno","Progreso","",`
    <div class="segmented">
      <button type="button" data-action="stats-tab" data-tab="pulse" class="${me==="pulse"?"active":""}">Pulso y metas</button>
      <button type="button" data-action="stats-tab" data-tab="week" class="${me==="week"?"active":""}">Semana</button>
      <button type="button" data-action="stats-tab" data-tab="month" class="${me==="month"?"active":""}">Mes</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${me==="week"?an(!1):me==="month"?an(!0):tl()}
  </div>`}function tl(){const e=y(),t=D(e,1-Xe),a=ve(L,t,e),s=ve(L,D(t,-Xe),D(t,-1)),n=_e(a),o=_e(s),r=Io(L),i=$n(L,t,e,e),l=V(f),c=(m,h)=>{if(a.length<3||s.length<3||n.metricCounts[m]<3||o.metricCounts[m]<3||!Number.isFinite(n[m])||!Number.isFinite(o[m]))return"";const p=n[m]-o[m];return`${p>0?"↑":p<0?"↓":"→"} ${E(Math.abs(p))}${h} vs. anterior`};return`
  <div class="ledger-grid">
    ${be("Registro",`${i.recorded}/${i.days}`,"días",`${i.pct}% de los días anotados`)}
    ${be("Ánimo medio",n.metricCounts.mood?E(n.mood):"—","/ 5",c("mood",""))}
    ${be("Sueño habitual",n.metricCounts.sleep?E(n.sleepMedian):"—","h",n.metricCounts.sleep?`media ${E(n.sleep)} h`:"sin datos")}
    ${be(l.focusLabel,n.metricCounts.study?E(n.study):"—","h",c("study"," h"))}
    ${be("Racha actual",wn(L),"días",`${rs(L)} días · mejor racha`)}
    ${be("Palabras escritas",n.words?E(n.words):"—","",n.words?`${E(Math.round(n.words/n.count))} por día anotado`:"sin texto todavía")}
  </div>
  <p class="analytics-footnote">Solo días registrados.</p>
  ${Wn(a,f)}
  ${ei(L,q,e)}
  <section class="card chart-card">
    <div class="section-heading">
      <h2>Ánimo y sueño</h2>
      <div class="segmented">
        <button type="button" data-action="range" data-range="7" class="${Xe===7?"active":""}">7 días</button>
        <button type="button" data-action="range" data-range="30" class="${Xe===30?"active":""}">30 días</button>
      </div>
    </div>
    ${Kr(a,t,Xe,f)}
  </section>
  <section class="card">
    <div class="section-heading">
      <h2>Últimos 28 días</h2>
      <span class="field-caption">Ánimo por día</span>
    </div>
    ${Xr(L,e,28)}
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Tendencias detectadas</h2>
      <div style="margin-top:10px">
        ${r.length?r.map(m=>`<p class="trend-item">${d("arrow")}<span>${m}</span></p>`).join(""):'<p class="habit-empty">Todavía no hay tendencias claras: hacen falta unos cuantos días de cada semana para poder compararlas.</p>'}
      </div>
    </section>
    <section class="card">
      <h2>Etiquetas más frecuentes</h2>
      ${Os(a).length?hs(Os(a).slice(0,6).map(([m,h])=>({label:m,count:h,total:a.length,color:"var(--red)"}))):'<p class="habit-empty">Sin etiquetas en estos días: al escribir el día puedes marcar las que te representen.</p>'}
    </section>
  </div>`}function an(e){const t=y(),[a,s]=e?vn(oe):[Se(x),D(Se(x),6)],n=s>t?t:s,o=a<=n?ve(L,a,n):[],r=_e(o),i=$n(L,a,s,t),l=e?Be(oe,1).slice(0,7)>t.slice(0,7):D(Se(x),7)>Se(t),c=V(f),m=e?R(oe,{month:"long",year:"numeric"}):`${R(Se(x),{day:"numeric",month:"short"})} – ${R(D(Se(x),6),{day:"numeric",month:"short",year:"numeric"})}`;return`
  <div class="section-heading period-heading">
    <div><p class="eyebrow">${e?"Resumen mensual":"Resumen semanal"}</p><h2>${m}</h2></div>
    <div class="period-controls">
      <button class="icon-button ghost" data-action="period-prev" data-monthly="${e?"1":"0"}" aria-label="Período anterior">${d("left")}</button>
      <button class="icon-button ghost" data-action="period-next" data-monthly="${e?"1":"0"}" aria-label="Período siguiente" ${l?"disabled":""}>${d("right")}</button>
    </div>
  </div>
  <div class="ledger-grid">
    ${be("Registro",`${i.recorded}/${i.days}`,"días",i.days?`${i.pct}% de los días transcurridos`:"sin días transcurridos")}
    ${be("Ánimo medio",r.metricCounts.mood?E(r.mood):"—","/ 5")}
    ${be("Sueño habitual",r.metricCounts.sleep?E(r.sleepMedian):"—","h",r.metricCounts.sleep?`media ${E(r.sleep)} h`:"sin datos")}
    ${be(c.focusLabel,r.metricCounts.study?E(r.study):"—","h")}
  </div>
  <p class="analytics-footnote">Solo días transcurridos.</p>
  <section class="card period-summary">
    <span class="soft-icon">${d("leaf")}</span>
    <div>
      <p>${Go(r,e)}</p>
    </div>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Días destacados</h2>
      <div class="highlights" style="grid-template-columns:1fr 1fr">
        ${Zt("Mejor día",r.best)}
        ${Zt("Más sueño",r.mostSleep,"sleepHours")}
        ${Zt("Más dedicación",r.mostStudy,"studyHours")}
        ${Zt("Día más difícil",r.worst)}
      </div>
    </section>
    <section class="card">
      <h2>Distribución de estados</h2>
      <div style="margin-top:14px">
        ${hs(F.map((h,p)=>({label:`${h.emoji} ${h.label}`,count:r.moods[p],total:r.count,color:h.color})))}
      </div>
    </section>
  </div>`}function al(){const e=[["personal","user","Perfil"],["appearance","palette","Apariencia"],["custom","paper","Contenido"],["data","shield","Datos"]],t=e.some(([s])=>s===de)?de:"personal",a={personal:il,appearance:ll,custom:rl,data:ul};return`${Na("","Ajustes")}
    <div class="settings-layout">
      <nav class="settings-subnav" role="tablist" aria-label="Ajustes">
        ${e.map(([s,n,o])=>`<button type="button" class="settings-subnav-item ${t===s?"active":""}"
          id="settings-tab-${s}" role="tab" aria-selected="${t===s}" aria-controls="settings-panel"
          tabindex="${t===s?"0":"-1"}" data-action="profile-tab" data-tab="${s}">
          <span class="settings-subnav-icon">${d(n)}</span>
          <span><strong>${u(o)}</strong></span>
        </button>`).join("")}
      </nav>
      <section id="settings-panel" class="settings-page-panel tab-panel-enter" role="tabpanel" aria-labelledby="settings-tab-${t}">
        ${a[t]()}
      </section>
    </div>`}function Ce(e,t="Guardado."){try{f=Le(e)}catch(a){$(a.message||"No se pudo guardar.",!0);return}k(),t&&$(t)}function sl(e,t){if(!ue)return;const a=document.querySelector(`[data-${e}-row="${t}"]`);a&&(a.classList.add("is-fresh"),setTimeout(()=>a.classList.remove("is-fresh"),620))}function pa(e,t,a="label"){const s=document.querySelector(`[data-edit="${e}"][data-key="${t}"][data-field="${a}"]`);s&&(s.focus(),s.select&&s.select())}function sn(e=""){const t=he(f);if(t.length>=Ie){$(`Con ${Ie} partes es más que suficiente.`,!0);return}const a=hn.find(o=>o.label===e),s=a?a.label:String(document.querySelector("#new-part-label")?.value||"").trim().slice(0,60);if(!s){$("Escribe un título para la parte.",!0),document.querySelector("#new-part-label")?.focus();return}if(t.some(o=>o.label.toLowerCase()===s.toLowerCase())){$("Esa parte ya está en el diario.",!0);return}const n=gn("p");Ce({parts:[...t,{key:n,label:s,hint:a?.hint||"",type:a?.type||"text"}]},"Parte añadida."),sl("part",n),pa("part",n)}function nl(){const e=$e(f);if(e.length>=Ue){$(`No hacen falta más de ${Ue} contadores.`,!0);return}const t=String(document.querySelector("#new-counter-label")?.value||"").trim().slice(0,28);if(!t){$("El contador necesita un nombre.",!0),document.querySelector("#new-counter-label")?.focus();return}if(e.some(s=>s.label.toLowerCase()===t.toLowerCase())){$("Ya tienes un contador con ese nombre.",!0);return}const a=gn("c");Ce({counters:[...e,{key:a,label:t,unit:String(document.querySelector("#new-counter-unit")?.value||"").trim().slice(0,14),goal:parseFloat(document.querySelector("#new-counter-goal")?.value)||0,min:0,max:Math.max(20,(parseFloat(document.querySelector("#new-counter-goal")?.value)||0)*3),step:1,icon:"gauge"}]},"Contador añadido."),pa("counter",a)}function ol(e){const t=e.dataset.edit,a=e.dataset.key,s=e.dataset.field;if(t==="part"){if(s==="label"&&!String(e.value).trim()){$("Sin título no puede estar: escribe uno o quítala.",!0),k();return}Ce({parts:he(f).map(n=>n.key===a?{...n,[s]:e.value}:n)},""),pa("part",a,s);return}if(t==="counter"){const o={counters:$e(f).map(r=>r.key!==a?r:s==="goal"?r.key==="water"?r:{...r,goal:parseFloat(e.value)||0}:{...r,[s]:e.value})};s==="goal"&&a==="water"&&(o.waterGoal=Math.min(25,Math.max(0,parseFloat(e.value)||0))||8),Ce(o,""),pa("counter",a,s)}}function rl(){const e=he(f),t=$e(f);return`<div class="custom-grid">
    <section class="card custom-card">
      <div class="section-heading">
        <div><p class="eyebrow">${d("paper")} Partes del diario</p><h2>Qué quieres escribir cada día</h2></div>
        <span class="field-caption">${e.length} de ${Ie}</span>
      </div>
      ${e.length?`<ul class="custom-list">
        ${e.map(a=>`<li class="custom-row custom-row--part" data-part-row="${a.key}">
          <input class="custom-input custom-input--label" value="${u(a.label)}" maxlength="60" aria-label="Título de la parte" data-edit="part" data-key="${a.key}" data-field="label">
          <input class="custom-input custom-input--hint" value="${u(a.hint)}" maxlength="140" placeholder="Ayuda" aria-label="Texto de ayuda" data-edit="part" data-key="${a.key}" data-field="hint">
          <div class="micro-seg">${Mo.map(s=>`<button type="button" class="${a.type===s.id?"active":""}" data-action="part-type" data-key="${a.key}" data-val="${s.id}">${s.label}</button>`).join("")}</div>
          <button type="button" class="icon-button ghost custom-remove" data-action="remove-part" data-key="${a.key}" aria-label="Quitar ${u(a.label)}">${d("close")}</button>
        </li>`).join("")}
      </ul>`:'<p class="custom-none">Sin partes propias.</p>'}
      <div class="custom-add">
        <input id="new-part-label" class="custom-input" maxlength="60" placeholder="Título de la parte…" aria-label="Título de la parte nueva">
        <button type="button" class="button outline" data-action="add-part">${d("plus")} Añadir parte</button>
      </div>
      ${e.length<Ie?`<div class="custom-presets">
        <span class="custom-presets-label">Sugerencias</span>
        ${hn.filter(a=>!e.some(s=>s.label===a.label)).map(a=>`<button type="button" class="custom-preset" data-action="part-preset" data-val="${u(a.label)}">${u(a.label)}</button>`).join("")}
      </div>`:""}
    </section>

    <section class="card custom-card">
      <div class="section-heading">
        <div><p class="eyebrow">${d("gauge")} Contadores</p><h2>Qué cuentas</h2></div>
        <span class="field-caption">${t.length} de ${Ue}</span>
      </div>
      <ul class="custom-list custom-list--counters">
        <li class="custom-head"><span>Nombre</span><span>Unidad</span><span>Meta</span><span>Icono</span><span></span></li>
        ${t.map(a=>`<li class="custom-row custom-row--counter" data-counter-row="${a.key}">
          <input class="custom-input custom-input--label" value="${u(a.label)}" maxlength="28" aria-label="Nombre del contador" data-edit="counter" data-key="${a.key}" data-field="label">
          <input class="custom-input custom-input--unit" value="${u(a.unit)}" maxlength="14" aria-label="Unidad" data-edit="counter" data-key="${a.key}" data-field="unit">
          <input class="custom-input custom-input--goal" type="number" min="0" max="9999" step="1" value="${ss(a,f)||""}" placeholder="—" aria-label="Meta diaria" data-edit="counter" data-key="${a.key}" data-field="goal">
          <select class="custom-select" aria-label="Icono" data-edit="counter" data-key="${a.key}" data-field="icon">
            ${mn.map(s=>`<option value="${s}" ${a.icon===s?"selected":""}>${s}</option>`).join("")}
          </select>
          <button type="button" class="icon-button ghost custom-remove" data-action="remove-counter" data-key="${a.key}" aria-label="Quitar ${u(a.label)}">${d("close")}</button>
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
        <span>El historial se conserva al quitar un contador.</span>
      </p>
    </section>
  </div>`}function il(){const e=V(f),t=new Set(q.map(s=>s.name.toLowerCase())),a=new Set(f.interests||[]);return`<form id="setup-page-form" class="setup-page-grid" novalidate>
    <p class="form-alert" id="setup-page-alert" role="alert" hidden></p>
    <section class="card">
      <h2>Perfil</h2>
      <div class="setup-name-age-row">
        <div class="setup-field">
          <label for="sp-name">${d("user")} Tu nombre o apodo</label>
          <input id="sp-name" name="name" maxlength="50" placeholder="Tu nombre…" value="${u(f.name)}">
        </div>
        <div class="setup-field">
          <label for="sp-age">Tu edad</label>
          <div class="age-input-wrap">
            <input id="sp-age" name="age" type="number" min="8" max="115" step="1" inputmode="numeric" placeholder="Ej. 20" value="${f.age??""}" aria-describedby="sp-age-hint">
            <span>años</span>
          </div>
          <small class="field-hint" id="sp-age-hint">Opcional · entre 8 y 115 años</small>
        </div>
      </div>

      <div class="setup-field">
        <label>Grupo de edad</label>
        <div class="age-group-grid" id="sp-age-groups">
          ${lt.map(s=>`
            <label class="age-group-card ${e.group.id===s.id?"is-selected":""}" data-age-group-card="${s.id}">
              <input type="radio" name="ageGroup" value="${s.id}" ${e.group.id===s.id?"checked":""}>
              <span class="age-range-badge">${u(s.label)}</span>
              <strong>${u(s.title)}</strong>
              <small>${u(s.desc)}</small>
            </label>
          `).join("")}
        </div>
      </div>

      <div class="setup-field">
        <label for="sp-motto">Frase de pie de página</label>
        <input id="sp-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${u(f.motto)}">
      </div>
    </section>

    <section class="card">
      <h2>Intereses y estilo</h2>
      <div class="interests-grid">
        ${Rt.map(s=>`
          <label class="interest-chip">
            <input type="checkbox" name="interests" value="${s.id}" ${a.has(s.id)?"checked":""}>
            <span>${d(s.icon)} ${u(s.label)}</span>
          </label>
        `).join("")}
      </div>

      <div class="two-columns" style="margin-top:16px">
        <div class="setup-field" style="margin-top:0">
          <label>Momento habitual</label>
          <div class="ritual-stack">
            ${ct.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="ritual" value="${s.id}" ${(f.ritual||"night")===s.id?"checked":""}>
                <span class="purpose-icon">${d(s.icon)}</span>
                <div><strong>${u(s.label)}</strong></div>
              </label>
            `).join("")}
          </div>
        </div>
        <div class="setup-field" style="margin-top:0">
          <label>Tono de las frases</label>
          <div class="ritual-stack">
            ${dt.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="tone" value="${s.id}" ${(f.tone||"warm")===s.id?"checked":""}>
                <div><strong>${u(s.label)}</strong><small>${u(s.desc)}</small></div>
              </label>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="card">
      <h2>Metas y hábitos</h2>
      <div class="age-adaptation-callout" id="sp-adaptation-callout" style="margin-top:12px">
        ${d("compass")}
        <div>
          <strong>${u(e.group.title)} · ${u(e.group.label)}</strong>
          <p>Sueño ${E(e.sleepRecommended)} h · dedicación ${E(e.studyRecommended)} h.</p>
        </div>
      </div>
      <div class="goals-setup-grid">
        <div class="setup-field">
          <label for="sp-sleep">${d("moon")} Meta de sueño · h</label>
          <input id="sp-sleep" name="sleepGoal" type="number" min="4" max="14" step="any" inputmode="decimal" value="${f.sleepGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-study">${d("study")} Meta de dedicación · h</label>
          <input id="sp-study" name="studyGoal" type="number" min="0" max="16" step="any" inputmode="decimal" value="${f.studyGoal}">
        </div>
      </div>
      <div class="setup-field" style="margin-top:16px">
        <label>Hábitos sugeridos</label>
        <div class="tag-picker" id="sp-suggested-habits">
          ${e.suggestedHabits.map(s=>{const n=t.has(s.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${u(s)}" ${n?"checked":""}><span>${n?"✓ ":"+ "}${u(s)}</span></label>`}).join("")}
        </div>
      </div>
      <div class="setup-field" style="margin-top:18px">
        <label>${d("quote")} Frases guardadas · ${(f.savedQuotes||[]).length}</label>
        ${(f.savedQuotes||[]).length?`
          <div class="saved-quotes-list">
            ${f.savedQuotes.map((s,n)=>`
              <div class="saved-quote-item">
                <span>«${u(s)}»</span>
                <button type="button" class="icon-button ghost" data-action="remove-saved-quote" data-index="${n}" aria-label="Quitar frase">${d("close")}</button>
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

    <div class="save-area" style="grid-column:1/-1">
      <button type="submit" class="button solid save-button">${d("check")} Guardar perfil</button>
    </div>
  </form>`}function ll(){return`<form id="appearance-form" class="appearance-page">
    <div class="appearance-settings-grid">
      <section class="card">
        <div class="section-heading">
          <div><p class="eyebrow">${d("palette")} Apariencia</p><h2>Tu tema</h2></div>
        </div>
        <div class="theme-picker-grid">
          ${se.map(e=>`
            <label class="theme-card">
              <input type="radio" name="theme" value="${e.id}" ${f.theme===e.id?"checked":""}>
              <div class="theme-card-top">
                <span class="theme-favicon-preview">${Oe(e.id,f)}</span>
                <div class="theme-swatches">${e.colors.map(t=>`<i style="background:${t}"></i>`).join("")}</div>
              </div>
              <strong>${u(e.name)}</strong>
              <small>${u(e.desc)}</small>
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
            <input type="checkbox" name="sidebarCollapsed" ${J?"checked":""}>
            <span><strong>Menú compacto</strong><small>Solo iconos en escritorio · Ctrl+B.</small></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="showDailyWord" ${f.showDailyWord!==!1?"checked":""}>
            <span><strong>Palabra del día</strong></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="showDailyTip" ${f.showDailyTip!==!1?"checked":""}>
            <span><strong>Sugerencia diaria</strong></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="reduceMotion" ${f.reduceMotion?"checked":""}>
            <span><strong>Reducir animaciones</strong></span>
          </label>
        </div>
      </section>
    </div>
    <div class="save-area">
      <button type="submit" class="button solid save-button">${d("check")} Guardar apariencia</button>
    </div>
  </form>`}function cl(){const e=mr().filter(t=>t.data&&Object.keys(t.data).length);return e.length?`<section class="card drafts-card">
    <div class="section-heading">
      <div><p class="eyebrow">${d("pen")} Sin terminar</p><h2>Textos a medias</h2></div>
      <span class="field-caption">${e.length} ${e.length===1?"borrador":"borradores"}</span>
    </div>
    <p class="drafts-lead">Se guardan solos mientras escribes. Puedes volver a ellos cuando quieras o descartarlos.</p>
    <ul class="drafts-list">
      ${e.map(t=>{const a=fr(t.scope),s=a?[a.words?`${a.words} ${a.words===1?"palabra":"palabras"}`:"",a.when].filter(Boolean).join(" · "):"";return`<li class="drafts-row" data-draft-row="${u(t.scope)}">
          <div class="drafts-row-info">
            <strong>${u(Rs(t.scope))}</strong>
            ${s?`<small>${u(s)}</small>`:""}
          </div>
          <div class="drafts-row-actions">
            <button type="button" class="button outline small" data-action="open-draft" data-scope="${u(t.scope)}">Recuperar</button>
            <button type="button" class="icon-button ghost" data-action="discard-draft" data-scope="${u(t.scope)}" aria-label="Descartar ${u(Rs(t.scope))}">${d("close")}</button>
          </div>
        </li>`}).join("")}
    </ul>
  </section>`:""}function dl(e){if(e.startsWith("entrada:")){const t=e.slice(8);if(/^\d{4}-\d{2}-\d{2}$/.test(t)&&t<=y()){Ee(t),$("Ahí tienes lo que escribiste.");return}}if(e==="botella"){N="thoughts",Y="shore",te(),re=!0,k(),$("Tu botella sigue esperando, lista para soltar.");return}if(e==="perfil"){N="setup",de="personal",te(),re=!0,k(),$("Sigue donde lo dejaste.");return}if(e==="asistente"){qs(1);return}if(e.startsWith("respuesta:")){const t=e.slice(10),a=B.find(s=>s.id===t);if(a&&ls(a,y())){ma(t);return}$("Esa botella todavía no se puede abrir.",!0);return}$("No sé cómo recuperar ese borrador.",!0)}function ul(){return`${cl()}
  <div class="two-columns">
    <section class="card">
      <h2>Exportar copia</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Entradas, hábitos y perfil en un JSON.</p>
      <button class="button solid" data-action="export">${d("download")} Descargar JSON</button>
    </section>
    <section class="card">
      <h2>Importar copia</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Elige un JSON y confirma la importación.</p>
      <button class="button outline" data-action="import">${d("upload")} Seleccionar archivo</button>
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
    <button class="button danger" data-action="clear">${d("trash")} Borrar todo</button>
  </section>`}function pl(e){const t=L.find(s=>s.date===e),a=V(f);return t?{...t}:{date:e,mood:3,sleepHours:f.sleepGoal||a.sleepRecommended||7.5,studyHours:0,energy:null,stress:null,bestOfDay:"",differentToday:"",generalDay:"Registro rápido desde la rutina.",wordOfDay:"",capsule:"",gratitude:["","",""],tomorrow:"",goals:[],tags:[],counters:{},habits:{}}}function Pt(e,t){if(e>y())throw new Error("Ese día todavía no ha llegado.");return Z("el día",()=>(L=zn({...pl(e),...t}),L)).value}function oo(){return[...document.querySelectorAll("#routine-goals .task-input")].map(e=>e.value.trim())}function qe(){const e=document.querySelector("#routine-tomorrow");if(!e)return;const t=oo().filter(Boolean);try{Pt(x,{tomorrow:e.value.trim(),goals:t})}catch(a){$(a.message||"No se pudo guardar la lista.",!0)}}function ml(){document.querySelectorAll("#routine-body [data-counter-input]").forEach(t=>{const a=t.dataset.counterInput,s=()=>{clearTimeout(Lt),Xa(t,a,parseFloat(t.value)||0),es()};t.addEventListener("input",()=>{Xa(t,a,parseFloat(t.value)||0),clearTimeout(Lt),Lt=setTimeout(es,500)}),t.addEventListener("change",s),t.addEventListener("blur",s),t.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),s()),n.key==="Escape"&&k()})});const e=document.querySelector("#routine-tomorrow");e&&(e.addEventListener("change",qe),e.addEventListener("input",()=>Ye("manana",qe,500)),document.querySelectorAll("#routine-goals .task-input").forEach(t=>{t.addEventListener("change",qe),t.addEventListener("input",()=>Ye("manana-tarea",qe,600)),t.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),qe(),k()),a.key==="Escape"&&k()})}))}let Lt=null;function Xa(e,t,a){const s=e.closest(".counter-row"),n=$e(f).find(i=>i.key===t)||{key:t},o=document.querySelector(`#hint-${t}`);o&&(o.textContent=ba(t,a,n)),e.classList.remove("num-bump"),e.offsetWidth,e.classList.add("num-bump");const r=ss(n,f);if(r){const i=s?.querySelector(".counter-goal-pill"),l=s?.querySelector(".counter-progress i");i&&(i.textContent=`Meta: ${a}/${r}`,i.classList.toggle("met",a>=r)),l&&(l.style.width=`${Math.min(100,Math.round(a/r*100))}%`)}}function es(){const e=L.find(a=>a.date===x),t={...e?.counters||{}};for(const a of $e(f)){const s=document.querySelector(`[name="counter_${a.key}"]`);(s||a.key in t)&&(t[a.key]=s?parseFloat(s.value)||0:Number(e?.counters?.[a.key])||0)}try{Pt(x,{counters:t})}catch(a){$(a.message||"No se pudo guardar el contador.",!0)}}function nn(e,t){const a=String(t||"").trim().slice(0,40),s=q.find(o=>o.id===e);if(!s)return;if(!a){$("El hábito necesita un nombre.",!0);return}if(a.toLowerCase()!==s.name.toLowerCase()&&q.some(o=>o.name.toLowerCase()===a.toLowerCase())){$("Ya tienes un hábito con ese nombre.",!0);return}a===s.name||!Z("el hábito",()=>{q=da({...s,name:a})}).ok||(k(),$("Hábito renombrado"))}function hl(e){if(!ue)return;const t=document.querySelector(`.habit-toggle[data-habit="${e}"]`);t&&(t.classList.add("is-flashed"),setTimeout(()=>t.classList.remove("is-flashed"),700));const a=document.querySelector(`.momentum-cell[data-habit="${e}"]`);a&&(a.classList.add("is-flashed"),setTimeout(()=>a.classList.remove("is-flashed"),700))}function ro(){const e=ya(B).some(t=>t.seen!==!0);document.querySelectorAll(".nav-dot").forEach(t=>{t.hidden=!e,t.classList.toggle("is-new",e)}),document.querySelectorAll('.tabbar-item[data-view="thoughts"]').forEach(t=>{t.classList.toggle("has-new",e)})}function ma(e){const t=B.find(r=>r.id===e);if(!ls(t,y()))return;t.status==="returned"&&t.seen!==!0&&(Z("el pensamiento",()=>{B=tt(e,{seen:!0})}),ro());const a=t.reply?"":bt(Q.reply(e))?.text||"",s=yt(ui({...t,replyDraft:a},y(),f));bl(s);const n=()=>{s.close(),k()},o=r=>Z("el pensamiento",r);s.onclick=r=>{const i=r.target.closest("[data-modal]")?.dataset.modal;if(!i){r.target===s&&s.close();return}if(i==="close"){n();return}if(i==="reply"){const l=(s.querySelector("#bottle-reply")?.value||"").trim();if(!l){$("Escribe primero lo que quieres contestarte.",!0);return}if(ha(`respuesta:${e}`),!o(()=>{B=tt(e,{reply:l,seen:!0,repliedAt:new Date().toISOString()})}).ok)return;ce(Q.reply(e)),s.close(),k(),ma(e),$("Contestada.");return}if(i==="reply-clear"){if(ha(`respuesta:${e}`),ce(Q.reply(e)),!o(()=>{B=tt(e,{reply:""})}).ok)return;s.close(),k(),ma(e);return}if(i==="keep"){const l=!t.kept;if(!o(()=>{B=tt(e,{kept:l,keptOn:l?y():null,seen:!0})}).ok)return;n(),$(l?"Anclada.":"Desanclada.");return}if(i==="to-entry"){try{fl(t),n(),$("Copiado a la entrada de hoy.")}catch(l){$(l.message||"No se pudo copiar.",!0)}return}if(i==="recast"){if(!o(()=>{B=Rn(e)}).ok)return;n(),$("Otra vez fuera.");return}}}function fl(e){const t=y(),a=L.find(r=>r.date===t),s=`Del mar · botella del ${R(e.castAt,{day:"numeric",month:"long"})}: «${e.text}»`,n=[a?.generalDay,s].filter(Boolean).join(`

`);Z("el pensamiento",()=>{Pt(t,{generalDay:n,capsule:a?.capsule||String(e.text).slice(0,240),tags:[...new Set([...a?.tags||[],"Pensamiento"])].slice(0,20)}),B=tt(e.id,{kept:!0,keptOn:t,seen:!0})}).ok&&(x=t,N="diary",te())}function gl(e,t){const a=document.querySelector(".thought-vault"),s=a?.getBoundingClientRect(),n=a?.querySelector(".vault-water")?.getBoundingClientRect(),o=t?.querySelector('button[type="submit"]')?.getBoundingClientRect(),r=oi(e),i=s?.width||window.innerWidth,l=s?.left||0,c=o?o.left+o.width/2:window.innerWidth*.18,m=o?o.top+o.height/2:window.innerHeight*.72,h=l+i*r.x/100,p=n?n.top+n.height*r.depth/100:window.innerHeight*.52,v=h-c,b=p-m,S=v*.52,H=b*.52-Math.min(150,window.innerHeight*.2);if(!ue)return;if((document.querySelector("#ocean-fx")||document.body)===document.body){const T=document.createElement("div");T.id="ocean-fx",T.setAttribute("aria-hidden","true"),document.body.appendChild(T)}const j=document.querySelector("#ocean-fx"),M=document.createElement("div");M.className="splash-wrap",M.innerHTML=pi(e);for(const[T,_]of Object.entries({"--from-x":c,"--from-y":m,"--to-x":h,"--to-y":p,"--flight-x":v,"--flight-y":b,"--mid-x":S,"--mid-y":H}))M.style.setProperty(T,`${Math.round(_)}px`);j.appendChild(M),document.documentElement.classList.add("is-casting"),clearTimeout(Ys),Ys=setTimeout(()=>document.documentElement.classList.remove("is-casting"),1400),setTimeout(()=>M.remove(),1800)}function bl(e){const t=e.querySelector(".bottle-modal");!t||!ue||(t.classList.add("is-uncorking"),setTimeout(()=>t.classList.remove("is-uncorking"),1100))}function vl(e){const t=new FormData(e),a=(t.get("text")||"").toString().trim();if(a.length<2){$("Escribe algo antes de lanzar la botella.",!0);return}const s=t.get("mood"),n="breeze";try{const o=crypto.randomUUID(),r=Math.max(1,Math.min(5,Math.round(Number(t.get("force"))||3)));B=Ar({id:o,text:a,mood:s?+s:null,sea:n,force:r,castAt:y()});const i=B.find(c=>c.id===o);ha("botella"),ce(Q.bottle()),mt={text:"",mood:null,sea:n,force:3},Y="sea",De=!0,te(),gl(i||{},e);const l=e.querySelector('button[type="submit"]');l&&(l.disabled=!0,l.classList.add("is-launching"),l.innerHTML=`${d("send")} Lanzando…`),K("saved"),setTimeout(()=>k(),ue?1120:0),$("Botella lanzada al mar.")}catch(o){$(o.message||"No se pudo lanzar la botella.",!0)}}function yl(){const e=document.querySelector("#thoughts-bottles-drawer");e?.addEventListener("toggle",()=>{De=e.open});const t=document.querySelector("#bottle-form");if(!t)return;const a=t.querySelector("#bottle-text"),s=t.querySelector("#bottle-force"),n=t.querySelector("#bottle-force-value"),o=()=>{const l=t.querySelector('[name="mood"]:checked');mt={text:a?.value||"",mood:l?+l.value:null,sea:"breeze",force:Number(s?.value)||3}},r=t.querySelector('button[type="submit"]'),i=()=>{r&&(r.disabled=!(a?.value||"").trim())};o(),i(),a?.addEventListener("input",()=>{o(),i()}),s?.addEventListener("input",()=>{o(),n&&(n.value=s.value)}),t.addEventListener("change",()=>{o(),i()}),document.activeElement===a&&a.value&&a.setSelectionRange(a.value.length,a.value.length),t.addEventListener("submit",l=>{l.preventDefault(),vl(t)})}function $l(e){B.find(a=>a.id===e)&&fa({title:"¿Romper esta botella?",text:"El pensamiento se borrará de este navegador. No se puede deshacer.",confirmLabel:"Romperla",danger:!0}).then(a=>{!a||!Z("el pensamiento",()=>{B=Lr(e)}).ok||(k(),$("Rota."))})}const wl=["generalDay","bestOfDay","differentToday","capsule","wordOfDay","tomorrow","gratitude0","gratitude1","gratitude2","tagCustom"];function Oa(){return[...wl,...he(f).map(e=>`part_${e.key}`)]}const fe=new Map;let ts=!1;const Sl=1200,kl=12e3;let ge=null,it=null;function ys(){ge&&(clearTimeout(ge),ge=null),it&&(clearTimeout(it),it=null)}function xl(){ge&&clearTimeout(ge),ge=setTimeout(()=>{ge=null,ys(),Ft({silent:!0})},Sl),it||(it=setTimeout(()=>{it=null,ge&&(clearTimeout(ge),ge=null),Ft({silent:!0})},kl))}function ha(e){const t=fe.get(e);t&&(clearTimeout(t),fe.delete(e))}function Ye(e,t,a=460){clearTimeout(fe.get(e)),fe.set(e,setTimeout(()=>{fe.delete(e),t()},a))}function as(e,t){fe.has(e)&&(clearTimeout(fe.get(e)),fe.delete(e),t())}function Te(e,t){const a=fe.get(e);a&&(clearTimeout(a),fe.delete(e)),t()}function zt(){return Q.entry(x)}function io(e){const t={};if(!e)return t;for(const r of Oa()){const i=e.querySelector(`[name="${r}"]`);i&&typeof i.value=="string"&&(t[r]=i.value)}for(const r of["mood","energy","stress"]){const i=e.querySelector(`[name="${r}"]:checked`);i&&(t[r]=Number(i.value))}for(const r of["sleepHours","studyHours"]){const i=e.querySelector(`[name="${r}"]`);i&&i.value!==""&&(t[r]=Number(i.value))}const a=[...e.querySelectorAll('[name="tags"]:checked')].map(r=>r.value);a.length&&(t.tags=a);const s={};for(const r of e.querySelectorAll('[name^="counter_"]'))s[r.name.slice(8)]=Number(r.value)||0;Object.keys(s).length&&(t.counters=s);const n={};for(const r of e.querySelectorAll('[name^="habit_"]'))n[r.name.slice(6)]=r.checked;Object.keys(n).length&&(t.habits=n);const o=[...e.querySelectorAll('[name="goal"]')].map(r=>r.value).filter(r=>r.trim());return o.length&&(t.goals=o),t}function Ml(e){const t=L.find(n=>n.date===x);if(!t)return!Object.keys(e).length;for(const n of Oa()){if(!(n in e))continue;let o="";if(n.startsWith("gratitude"))o=(t.gratitude||[])[+n.slice(9)]||"";else{if(n==="tagCustom")continue;o=t[n]??""}if(String(e[n]??"").trim()!==String(o).trim())return!1}for(const n of["mood","energy","stress","sleepHours","studyHours"]){if(e[n]===void 0)continue;const o=t[n];if(o==null){if(Number(e[n])!==0&&e[n]!==3)return!1;continue}if(Number(e[n])!==Number(o))return!1}const a=t.counters||{};for(const[n,o]of Object.entries(e.counters||{}))if(Number(o)!==Number(a[n]||0))return!1;const s=t.habits||{};for(const[n,o]of Object.entries(e.habits||{}))if(!!o!=!!s[n])return!1;return!((t.tags||[]).slice().sort().join("|")!==(e.tags||[]).slice().sort().join("|")||(t.goals||[]).join("|")!==(e.goals||[]).join("|"))}function $s(){const e=document.querySelector("#diary-form");if(!e)return;const t=io(e);if(Ml(t)){const s=ce(zt());K(s||ht==="typing"?"saved":ht);return}const a=$a(zt(),t);a&&!a.ok?K("error"):a&&K("draft")}function ws(){const e=document.querySelector("#bottle-form");if(!e)return;const t=$a(Q.bottle(),{text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze",force:Number(e.querySelector("#bottle-force")?.value)||3});t&&!t.ok&&K("error")}function lo(e,t){!t||!document.contains(t)||$a(Q.reply(e),{text:t.value||""})}function on(){K("typing"),Ye("entrada",$s,420),xl()}function rn(){const e=document.querySelector("#bottle-form");if(!e)return;mt={text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze",force:Number(e.querySelector("#bottle-force")?.value)||3},K("typing"),Ye("botella",ws,380)}const ql='textarea,input[type="text"],input[type="number"],input:not([type])',co=/^[A-Za-z0-9_-]{1,40}$/;function uo(e,t){if(!e)return null;const a={};for(const o of e.querySelectorAll(ql))!o.name||!co.test(o.name)||(a[o.name]=o.value);const s=e.querySelector("#new-custom-quote");s?.value&&(a.customQuote=s.value);const n=$a(t,a);return n&&!n.ok&&K("error"),n}function po(e,t){if(!e||!t)return!1;let a=!1;for(const[s,n]of Object.entries(t)){if(s==="customQuote"||!co.test(s))continue;const o=e.querySelector(`[name="${s}"]`);!o||o.type==="checkbox"||o.type==="radio"||String(o.value)!==String(n)&&(o.value=n,a=!0)}if(t.customQuote){const s=e.querySelector("#new-custom-quote");s&&!s.value&&(s.value=t.customQuote,a=!0)}return a}function mo(e){const t=(s,n)=>String(s??"").trim()===String(n??"").trim();if(!t(e.name,f.name)||!t(e.motto??"Un día a la vez.",f.motto))return!1;const a=e.age===""||e.age===null||e.age===void 0?null:Number(e.age);if(a!==null&&a!==Number(f.age))return!1;for(const s of["sleepGoal","studyGoal","waterGoal"]){const n=e[s];if(!(n===""||n===null||n===void 0)&&Number(n)!==Number(f[s]))return!1}return!0}function Ss(){const e=document.querySelector("#setup-page-form");return e?!e.querySelector("#new-custom-quote")?.value.trim()&&mo(Ms(e))?(ce(Q.setup()),null):uo(e,Q.setup()):null}function ks(){const e=document.querySelector("#setup-wizard-form");return e?mo(Ms(e))?(ce(Q.wizard()),null):uo(e,Q.wizard()):null}function El(){if(document.querySelector("#setup-page-form")){Ye("perfil",Ss,700);return}document.querySelector("#setup-wizard-form")&&Ye("asistente",ks,700)}function Al(){z.addEventListener("input",e=>{const t=e.target;if(!(!t||!t.closest)){if(t.closest("#diary-form")){on();return}if(t.closest("#bottle-form")){rn();return}if(t.closest("#setup-page-form")||t.closest("#setup-wizard-form")){El();return}if(t.id==="bottle-reply"&&t.closest("#modal")){const a=t.closest("[data-modal-bottle]")?.dataset.modalBottle;a&&Ye(`respuesta:${a}`,()=>lo(a,t),360)}}}),z.addEventListener("change",e=>{const t=e.target;if(!(!t||!t.closest)){if(t.dataset?.edit){ol(t);return}t.closest("#diary-form")&&on(),t.closest("#bottle-form")&&rn()}}),z.addEventListener("focusout",e=>{const t=e.target;if(!t||!t.closest)return;const a=t.closest("#diary-form");if(!a)return;const s=e.relatedTarget;s&&a.contains(s)||Ha()}),window.addEventListener("pagehide",ft),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?ft():Ge()}),window.addEventListener("focus",Ge),window.addEventListener("online",Ge)}function ho(){for(const[e]of[...fe.entries()]){if(!e.startsWith("respuesta:"))continue;const t=e.slice(10),a=document.querySelector(`[data-modal-bottle="${t}"] #bottle-reply`);as(e,()=>lo(t,a))}}function ft(){Te("entrada",$s),Te("botella",ws),Te("perfil",Ss),Te("asistente",ks),as("manana",qe),as("manana-tarea",qe),ho(),ys(),document.querySelector("#diary-form")&&!ts&&ht==="draft"&&Ft({silent:!0,final:!0}),Ge()}function Ge(){if(!_t())return!1;const e=Dn();return Pe(),e.recovered&&!Tn()&&$("Guardado lo que quedaba pendiente."),e.ok}function Ll(){Tl(),Cl()}function Cl(){const e=document.querySelector("#setup-page-form");if(!e||!Nn(Q.setup(),f.updatedAt))return!1;const t=bt(Q.setup());return!t||!po(e,t)?!1:(K("draft"),Ks||(Ks=!0,$("He recuperado lo que estabas escribiendo en el perfil.")),!0)}function ln(e,t,a){if(a==null)return;const s=e.querySelector(`[name="${t}"]`);if(s){if(s.type==="radio"){const n=e.querySelector(`[name="${t}"][value="${a}"]`);n&&(n.checked=!0);return}s.value=Array.isArray(a)?a.join(`
`):a}}function Tl(){const e=document.querySelector("#diary-form");if(!e)return;const t=L.find(s=>s.date===x);if(!Nn(zt(),t?.updatedAt))return;const a=bt(zt());if(a){for(const s of Oa())ln(e,s,a[s]);for(const s of["mood","energy","stress","sleepHours","studyHours"])a[s]!==void 0&&ln(e,s,a[s]);if(Array.isArray(a.tags)&&e.querySelectorAll('[name="tags"]').forEach(s=>{s.checked=a.tags.includes(s.value)}),a.counters)for(const[s,n]of Object.entries(a.counters)){const o=e.querySelector(`[name="counter_${s}"]`);o&&(o.value=n)}if(a.habits)for(const[s,n]of Object.entries(a.habits)){const o=e.querySelector(`[name="habit_${s}"]`);o&&(o.checked=!!n)}Array.isArray(a.goals)&&[...e.querySelectorAll('[name="goal"]')].forEach((n,o)=>{a.goals[o]!==void 0&&(n.value=a.goals[o])}),e.dispatchEvent(new Event("input",{bubbles:!0})),K("draft")}}function jl(){if(mt.text)return;const e=bt(Q.bottle());e&&(mt={text:String(e.text||""),mood:e.mood||null,sea:e.sea||"breeze",force:Number(e.force)||3})}function Dl(e){return!!(Oa().map(a=>String(e[a]||"")).filter(a=>a.trim()).join(" ").trim().split(/\s+/).filter(Boolean).length>=2||Object.values(e.counters||{}).some(a=>Number(a)>0)||Object.values(e.habits||{}).some(Boolean)||(e.tags||[]).length||(e.gratitude0||"").trim()||(e.gratitude1||"").trim()||(e.gratitude2||"").trim())}function Ft({silent:e=!1,final:t=!1}={}){const a=document.querySelector("#diary-form");if(!a||pt)return!1;const s=io(a);if(e&&!Dl(s))return!1;ts=!0,ha("entrada"),ys();try{const n=Ol(xs(a));if(L=zn(n),ce(zt()),K(e?"autosaved":"saved"),e){if(t)try{localStorage.setItem("diario.lastflush.v1",JSON.stringify({at:new Date().toISOString(),date:x}))}catch{}}else{k(),Gl(),$("Día guardado"),document.querySelector(".daily-summary")?.classList.add("reveal");const o=ms(n);o.triggered&&o.level==="high"&&setTimeout(()=>vo("help"),550)}return!0}catch(n){return K("error"),$(n.message||"No se ha podido guardar.",!0),Pe(),!1}finally{ts=!1}}function K(e){ht=e}function Nl(e){const t=String(e||"").trim();return t?t.split(/\s+/).length:0}function xs(e){const t=new FormData(e),a=L.find(T=>T.date===x),s=V(f),n=(t.get("tagCustom")||"").toString().trim(),o=[...new Set([...t.getAll("tags").map(T=>T.toString().trim()),n].filter(Boolean))],r={...a?.counters||{}};for(const T of $e(f)){const _=e.querySelector(`[name="counter_${T.key}"]`);r[T.key]=_?parseFloat(_.value)||0:Number(a?.counters?.[T.key])||0}const i={...a?.parts||{}};for(const T of he(f)){const _=e.querySelector(`[name="part_${T.key}"]`);if(!_)continue;const g=_.value.trim();g?i[T.key]=g:delete i[T.key]}const l={},c=[...e.querySelectorAll('[name^="habit_"]')];for(const T of q)l[T.id]=c.length?!!e.querySelector(`[name="habit_${T.id}"]`)?.checked:!!a?.habits?.[T.id];const m=+t.get("mood")||a?.mood||3,h=t.get("sleepHours"),p=h!==null&&h!==""?parseFloat(h):f.sleepGoal||s.sleepRecommended||7.5,v=t.get("studyHours"),b=v!==null&&v!==""?parseFloat(v):0,S=(t.get("bestOfDay")||"").toString().trim(),H=(t.get("differentToday")||"").toString().trim(),O=(t.get("capsule")||"").toString().trim(),j=(t.get("wordOfDay")||"").toString().trim();let M=(t.get("generalDay")||"").toString().trim();return M||(M=S||O||(j?`Palabra del día: ${j}.`:`Día ${F[m-1].label.toLowerCase()}.`)),{id:a?.id,date:x,mood:m,sleepHours:p,studyHours:b,energy:t.get("energy")?+t.get("energy"):null,stress:t.get("stress")?+t.get("stress"):null,bestOfDay:S,differentToday:H,generalDay:M,wordOfDay:j,capsule:O,gratitude:[0,1,2].map(T=>(t.get(`gratitude${T}`)||"").toString().trim()),tomorrow:t.has("tomorrow")?(t.get("tomorrow")||"").toString().trim():a?.tomorrow||"",goals:e.querySelector('[name="goal"]')?t.getAll("goal").map(T=>T.toString().trim()).filter(Boolean):a?.goals||[],tags:o,counters:r,parts:i,habits:l,createdAt:a?.createdAt}}function Ol(e){for(const[t,a]of[["sleepHours","horas de sueño"],["studyHours","horas de dedicación"]]){const s=e[t];if(!Number.isFinite(s)||s<0||s>24)throw new Error(`Escribe unas ${a} válidas, entre 0 y 24.`)}return e}function cn(e){if(!e)return;const t=xs(e),a=document.querySelector("#hero-words-chip");if(a){const i=It(t),l=i?`${i} ${i===1?"palabra":"palabras"} escritas`:"todavía sin escribir";a.textContent!==l&&(a.textContent=l),a.classList.toggle("pending",!i)}const s=ms(t),n=s.triggered&&s.level==="high"&&!ja,o=n?`high:${(s.reasons||[]).length}`:"none",r=document.querySelector("#crisis-alert-slot");r&&r.dataset.sig!==o&&(r.dataset.sig=o,r.innerHTML=n?Vn(s,f):"")}function fo(e,t){if(!e)return;const a=e.querySelector('[name="age"]'),s=()=>{const n=new FormData(e),o=n.get("age"),r=o?qa(o,n.get("ageGroup")||"young"):n.get("ageGroup")||"young",i=n.getAll("interests").map(String);e.querySelectorAll("[data-age-group-card]").forEach(v=>{const b=v.dataset.ageGroupCard===r;v.classList.toggle("is-selected",b);const S=v.querySelector('input[type="radio"]');S&&o&&(S.checked=b)});const l=V({age:o||null,ageGroup:r,interests:i}),c=e.querySelector('[name="sleepGoal"]'),m=e.querySelector('[name="studyGoal"]');c&&o&&(c.value=l.sleepRecommended),m&&o&&(m.value=l.studyRecommended);const h=e.querySelector(`#${t}-adaptation-callout`);h&&(h.innerHTML=`
        ${d("compass")}
        <div>
          <strong>${u(l.group.title)} · ${u(l.group.label)}</strong>
          <p>Sueño ${E(l.sleepRecommended)} h · dedicación ${E(l.studyRecommended)} h.</p>
        </div>`);const p=e.querySelector(`#${t}-suggested-habits`);if(p){const v=new Set(q.map(b=>b.name.toLowerCase()));p.innerHTML=l.suggestedHabits.map(b=>{const S=v.has(b.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${u(b)}" ${S?"checked":""}><span>${S?"✓ ":"+ "}${u(b)}</span></label>`}).join("")}};a&&a.addEventListener("input",s),e.querySelectorAll('[name="ageGroup"], [name="interests"]').forEach(n=>{n.addEventListener("change",s)})}function Z(e,t){try{return{ok:!0,value:t()}}catch(a){return K("error"),$(a?.message||`No se ha podido guardar ${e}.`,!0),Pe(),{ok:!1,error:a}}}function Hl(e,t){const a=document.querySelector(e);a&&(a.hidden=!1,a.textContent=t)}function Pl(){const e=document.querySelector("#setup-page-form");e&&(fo(e,"sp"),e.addEventListener("submit",s=>{s.preventDefault();const n=bo(e);if(!n.ok){Hl("#setup-page-alert",n.error?.message||"No se ha podido guardar el perfil."),$(n.error?.message||"No se ha podido guardar el perfil.",!0);return}ce(Q.setup()),k(),$(n.notes.length?`Perfil guardado. ${n.notes.join(" ")}`:"Perfil actualizado")}));const t=document.querySelector("#appearance-form");t&&(t.addEventListener("change",s=>{s.target.name==="theme"&&He(s.target.value,{...f,theme:s.target.value})}),t.addEventListener("submit",s=>{s.preventDefault(),zl(t)}));const a=document.querySelector("#diary-form");a&&(a.addEventListener("submit",s=>{s.preventDefault(),!pt&&Ft()}),a.addEventListener("input",s=>{const n=s.target;if(n.name==="mood"){const r=F[+n.value-1];a.style.setProperty("--active-mood",r.color)}if(n.name==="sleepHours"||n.name==="studyHours"){const r=parseFloat(n.value);a.querySelectorAll(`[data-action="quick-number"][data-target="${n.name}"]`).forEach(i=>{i.classList.toggle("active",parseFloat(i.dataset.val)===r)})}if(n.name==="energy"){const r=document.querySelector("#energy-hint");r&&(r.textContent=un[+n.value]+".")}if(n.name==="stress"){const r=document.querySelector("#stress-hint");r&&(r.textContent=pn[+n.value]+".")}if(n.name?.startsWith("counter_")){const r=n.name.slice(8),i=parseFloat(n.value)||0,l=document.querySelector(`#hint-${r}`);if(l&&(l.textContent=ba(r,i)),r==="water"){const c=f.waterGoal||8,m=n.closest(".counter-row"),h=m?.querySelector(".counter-goal-pill"),p=m?.querySelector(".counter-progress i");h&&(h.textContent=`Meta: ${i}/${c}`,h.classList.toggle("met",i>=c)),p&&(p.style.width=`${Math.min(100,Math.round(i/c*100))}%`)}}const o=n.closest(".writing-field");if(o){const r=o.querySelector(".word-count");r&&(r.textContent=`${Nl(n.value)} palabras`)}cn(a)}),a.addEventListener("keydown",s=>{if(s.target.id==="tagCustom"&&s.key==="Enter"){s.preventDefault();const n=s.target.value.trim();if(n){const o=a.querySelector(".tag-picker .tag-chip.ghost");o&&o.insertAdjacentHTML("beforebegin",`<label class="tag-chip"><input type="checkbox" name="tags" value="${u(n)}" checked><span>${u(n)}</span></label>`),s.target.value="",cn(a)}}}),Rl())}function zl(e){f=Le({theme:e.querySelector('[name="theme"]:checked')?.value||f.theme,sidebarCollapsed:!!e.querySelector('[name="sidebarCollapsed"]')?.checked,showDailyWord:!!e.querySelector('[name="showDailyWord"]')?.checked,showDailyTip:!!e.querySelector('[name="showDailyTip"]')?.checked,reduceMotion:!!e.querySelector('[name="reduceMotion"]')?.checked}),J=!!f.sidebarCollapsed,ot(),He(f.theme,f),k(),$("Apariencia actualizada")}function go(e){return new Set([...e?.querySelectorAll("[name]")||[]].map(t=>t.name))}function Ms(e){return Un(new FormData(e),go(e))}function Fl(e){const t=Ze({...f,...e,updatedAt:new Date().toISOString()});try{return f=Le(e),{ok:!0}}catch(a){return f=t,{ok:!1,error:a}}}const Bl=30;function bo(e){if(!e)return{ok:!1,setup:f,notes:[],error:new Error("No encuentro el formulario del perfil.")};const a=new FormData(e).getAll("suggestedHabits").map(c=>c.toString().trim()).filter(Boolean),s=new Set(q.map(c=>c.name.toLowerCase())),n=[];try{for(const c of a)!s.has(c.toLowerCase())&&q.length<Bl&&(q=da({name:c}),s.add(c.toLowerCase()))}catch{n.push("Los hábitos sugeridos no se han podido añadir.")}const o=Ms(e),{patch:r,notes:i}=Or(o,f);n.push(...i);const l=Fl(r);return J=!!f.sidebarCollapsed,ot(),He(f.theme,f),{ok:l.ok,setup:f,notes:n,error:l.error}}function Rl(){const e=document.querySelector("#diary-form");if(e)for(const t of $e(f)){const a=e.querySelector(`[name="counter_${t.key}"]`),s=document.querySelector(`#hint-${t.key}`);a&&s&&a.value!==""&&(s.textContent=ba(t.key,parseFloat(a.value)||0,t))}}function Ga(e=""){const t=document.querySelector("#inspiration-slot");if(!t)return;const a=document.querySelector("#diary-form"),s=a?xs(a):L.find(n=>n.date===x);if(t.innerHTML=Zn(x,fs,gs,f,s,s?.wordOfDay||""),e){const n=t.querySelector(e);n&&(n.classList.remove("card-flip-in"),n.offsetWidth,n.classList.add("card-flip-in"))}}function dn(){const e=document.querySelector("#quote-slot");if(!e)return;e.innerHTML=Qn(x,bs,f);const t=e.querySelector(".quote-card");t&&(t.classList.remove("card-flip-in"),t.offsetWidth,t.classList.add("card-flip-in"))}function Gl(){const e=document.querySelector("#stamp");if(!e)return;const t=f.name?`Cuaderno de ${u(f.name)}`:"Guardado";e.innerHTML=`<div class="stamp-face">${t}<small>${R(x)}</small></div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function $(e,t=!1){const a=document.querySelector("#toast");a&&(a.innerHTML=`<div class="${t?"error":""}">${d(t?"close":"check")}<span>${u(e)}</span></div>`,a.classList.add("show"),setTimeout(()=>a.classList.remove("show"),3e3))}function ia(){oa&&(clearInterval(oa),oa=null)}function yt(e){ia();const t=document.querySelector("#modal");return t.innerHTML=e,t.open||t.showModal(),t}function vo(e="help"){const t=yt(ti(f,e));let a=!1;const s=()=>{ia(),t.close()};t.onclick=n=>{if(n.target.closest('[data-modal="close"]')||n.target===t){s();return}const r=n.target.closest("[data-crisis-tab]");if(r){const l=r.dataset.crisisTab;t.querySelectorAll(".crisis-tab").forEach(c=>c.classList.toggle("active",c.dataset.crisisTab===l)),t.querySelectorAll(".crisis-tab-panel").forEach(c=>c.classList.toggle("active",c.dataset.panel===l)),l!=="breathe"&&ia();return}const i=n.target.closest('[data-action="toggle-breathing"]');if(i){const l=t.querySelector("#breathing-visual"),c=t.querySelector("#breathing-phase"),m=t.querySelector("#breathing-timer"),h=t.querySelector("#breathing-guide");if(a)a=!1,ia(),l?.classList.remove("inhale","hold","exhale"),c&&(c.textContent="En pausa"),m&&(m.textContent="4 — 4 — 6"),i.innerHTML=`${d("wind")} Seguir respirando`;else{a=!0,i.innerHTML=`${d("close")} Pausar`;let p=0;const v=()=>{const b=p%14;l?.classList.remove("inhale","hold","exhale"),b<4?(l?.classList.add("inhale"),c&&(c.textContent="Toma aire..."),m&&(m.textContent=`${4-b} s`),h&&(h.textContent="Inhala despacio por la nariz.")):b<8?(l?.classList.add("hold"),c&&(c.textContent="Mantén..."),m&&(m.textContent=`${8-b} s`),h&&(h.textContent="Sostén el aire sin tensar los hombros.")):(l?.classList.add("exhale"),c&&(c.textContent="Suelta..."),m&&(m.textContent=`${14-b} s`),h&&(h.textContent="Deja salir el aire poco a poco.")),p++};v(),oa=setInterval(v,1e3)}}}}function qs(e=1,{mandatory:t=!1}={}){let a=e;const s=yt(ai(f,q,a,t));nt=t,s.oncancel=t?p=>p.preventDefault():null,s.onclose=()=>{t&&!f.completed&&(nt=!1,queueMicrotask(()=>k()))};const n=s.querySelector("#setup-wizard-form");fo(n,"wiz");const o=s.querySelector("#setup-wizard-alert"),r=(p,{escape:v=!1}={})=>{o&&(o.hidden=!1,o.className="form-alert is-visible",o.innerHTML=`<span>${u(p)}</span>${v?'<button type="button" class="text-button" data-wizard="skip">Seguir sin guardar</button>':""}`,o.scrollIntoView?.({block:"nearest"}))},i=()=>{o&&(o.hidden=!0,o.innerHTML="")},l=bt(Q.wizard());l&&po(n,l)&&r("He recuperado lo que habías empezado.");const c=p=>{const v=Un(new FormData(n),go(n)),b=Hr(p,v,f),S=Pr(p,v,f);for(const[H,O]of Object.entries(S)){const j=n?.querySelector(`[name="${H}"]`);j&&j.value!==String(O)&&(j.value=O)}return b.length?r(b.join(" ")):i(),b},m=p=>{a=Math.max(1,Math.min(3,p)),s.querySelectorAll(".wizard-step-body").forEach(O=>{const j=+O.dataset.step;O.classList.toggle("active",j===a),O.hidden=j!==a});const v=s.querySelector(".setup-wizard-header .eyebrow"),b=s.querySelector(".setup-wizard-header h2");v&&(v.innerHTML=`${d("sliders")} Paso ${a} de 3`),b&&(b.textContent=a===1?"Tu perfil":a===2?"Tu ritmo":"Tu papel"),s.querySelectorAll(".wizard-steps-bar span").forEach((O,j)=>{O.classList.toggle("done",a>=j+1),O.classList.toggle("current",a===j+1)});const H=s.querySelector(".wizard-footer");H&&(H.innerHTML=`
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${d("left")} Anterior</button>`:t?"":'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${d("right")}</button>`:`<button type="submit" class="button solid">${d("check")} Guardar</button>`}`)};s.onchange=p=>{p.target.name==="theme"&&He(p.target.value,f)};const h=()=>{const p=bo(n);if(!p.ok)return r(p.error?.message||"No se ha podido guardar el perfil.",{escape:t}),!1;ce(Q.wizard()),p.setup.completed&&ce(Q.setup());const v=t;return nt=!1,s.oncancel=null,s.close(),k(),v&&N==="thoughts"&&requestAnimationFrame(()=>so()),$(p.notes.length?`Perfil guardado. ${p.notes.join(" ")}`:"Perfil actualizado"),!0};s.onsubmit=p=>{if(p.preventDefault(),a<3){c(a),m(a+1);return}h()},s.onclick=p=>{if(p.target.closest('[data-modal="close"]')||p.target===s){if(t){p.preventDefault();return}He(f.theme,f),s.oncancel=null,s.close();return}const b=p.target.closest("[data-wizard]");if(b){const S=b.dataset.wizard;if(S==="skip"){nt=!1,s.oncancel=null,s.close(),k(),$("Sigo sin poder guardar el perfil: lo reintentaré solo.");return}S==="next"?(c(a),m(a+1)):m(a-1)}}}function fa({title:e,text:t,confirmLabel:a,danger:s=!1}){return new Promise(n=>{const o=yt(`<div class="modal-card">
      <h2>${u(e)}</h2><p>${u(t)}</p>
      <div class="modal-actions">
        <button class="button outline" data-modal="cancel">Cancelar</button>
        <button class="button ${s?"danger":"solid"}" data-modal="confirm">${u(a)}</button>
      </div>
    </div>`);o.onclick=r=>{const i=r.target.closest("[data-modal]")?.dataset.modal;i?(o.close(),n(i==="confirm")):r.target===o&&(o.close(),n(!1))}})}function Il(e){const t=L.find(o=>o.date===e);if(!t){Ee(e);return}const a=V(f),s=q.filter(o=>t.habits?.[o.id]),n=yt(`<article class="modal-card entry-modal">
    <div class="section-heading">
      <div><p class="eyebrow">${f.name?`Cuaderno de ${u(f.name)} · `:""}Día ${Gt(t.date,L)}</p><h2>${R(t.date)}</h2></div>
      <span class="mood-tag" style="--mood:${F[t.mood-1].color}">${F[t.mood-1].emoji} ${F[t.mood-1].label}</span>
    </div>
    <div class="read-metrics">
      <span class="chiplet">${d("moon")} ${E(t.sleepHours)} h sueño</span>
      <span class="chiplet">${d("study")} ${E(t.studyHours)} h dedicación</span>
      ${t.energy?`<span class="chiplet">${d("bolt")} energía ${t.energy}/5</span>`:""}
      ${t.stress?`<span class="chiplet">${d("storm")} estrés ${t.stress}/5</span>`:""}
      <span class="chiplet">${d("pen")} ${It(t)} palabras</span>
    </div>
    ${(t.tags||[]).length?`<div class="read-metrics">${t.tags.map(o=>`<span class="chiplet">${d("hash")} ${u(o)}</span>`).join("")}</div>`:""}
    ${t.wordOfDay?`<div class="read-section"><h3>Palabra del día</h3><p>«${u(t.wordOfDay)}»</p></div>`:""}
    ${t.capsule?`<div class="read-section"><h3>${u(a.capsuleLabel)}</h3><p>${u(t.capsule)}</p></div>`:""}
    <div class="read-section"><h3>Notas del día</h3><p class="dropcap-paragraph">${u(t.generalDay)}</p></div>
    ${t.bestOfDay?`<div class="read-section"><h3>Lo mejor del día</h3><p>${u(t.bestOfDay)}</p></div>`:""}
    ${t.differentToday?`<div class="read-section"><h3>¿Qué ha sido distinto?</h3><p>${u(t.differentToday)}</p></div>`:""}
    ${t.gratitude?.some(Boolean)?`<div class="read-section"><h3>Agradecimientos</h3><ol>${t.gratitude.filter(Boolean).map(o=>`<li>${u(o)}</li>`).join("")}</ol></div>`:""}
    ${t.tomorrow||t.goals?.length?`<div class="read-section"><h3>Para mañana</h3><p>${u(t.tomorrow)}</p>${t.goals?.length?`<ul>${t.goals.map(o=>`<li>${u(o)}</li>`).join("")}</ul>`:""}</div>`:""}
    ${q.length&&s.length?`<div class="read-section"><h3>Hábitos cumplidos</h3><p>${s.map(o=>u(o.name)).join(" · ")}</p></div>`:""}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      <button class="button danger" data-modal="delete">Eliminar</button>
      <button class="button solid" data-modal="edit">${d("pen")} Editar</button>
    </div>
  </article>`);n.onclick=o=>{const r=o.target.closest("[data-modal]")?.dataset.modal,i=()=>n.close();(r==="close"||o.target===n)&&i(),r==="edit"&&(i(),Ee(t.date)),r==="delete"&&(i(),$o(t.date))}}function Ee(e){if(e>y()){$("Aún no ha llegado.",!0);return}Ha(),x=e,N="diary",ae=!1,ja=!1,te(),k({transition:!0})}function Ha(){Te("entrada",$s),Te("botella",ws),Te("perfil",Ss),Te("asistente",ks),ho(),document.querySelector("#diary-form")&&ht==="draft"&&Ft({silent:!0}),Ge()}function yo(){if(window.innerWidth<=980){ae=!ae,document.querySelector(".sidebar")?.classList.toggle("is-open",ae),document.querySelector(".sidebar-backdrop")?.classList.toggle("is-visible",ae);return}J=!J,Z("el menú",()=>{f=Le({sidebarCollapsed:J})});const e=document.querySelector(".sidebar");if(e){e.classList.toggle("is-collapsed",J);const t=e.querySelector(".sidebar-collapse-btn");t&&(t.innerHTML=d(J?"right":"left"),t.title=J?"Desplegar menú · Ctrl+B":"Plegar menú · Ctrl+B",t.setAttribute("aria-expanded",String(!J))),e.classList.add("is-animating"),setTimeout(()=>{e.classList.remove("is-animating"),Ht()},420),setTimeout(()=>Ht(),60)}}async function $o(e){if(await fa({title:"¿Eliminar esta entrada?",text:`Se borrará del dispositivo el registro de ${R(e)}.`,confirmLabel:"Eliminar",danger:!0})){if(!Z("la entrada",()=>{L=wr(e)}).ok)return;k(),$("Entrada eliminada.")}}function Ul(e,t){const a=new Blob([t],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(a),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),1e3)}z.addEventListener("click",async e=>{const t=e.target.closest("[data-view]"),a=e.target.closest("[data-action]");if(e.target.closest(".brand")){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;e.preventDefault(),Ee(y());return}if(t&&!a){if(t.tagName==="A"&&(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0))return;e.preventDefault(),wi(t.dataset.view,{transition:!0});return}if(!a)return;const{action:n,date:o,range:r,mini:i,key:l,step:c,habit:m,name:h,word:p,tab:v,quote:b,index:S,layout:H,target:O,val:j,monthly:M,id:T,delta:_}=a.dataset;switch(n){case"menu":ae=!ae,k();break;case"close-menu":ae=!1,k();break;case"toggle-sidebar":yo();break;case"archive-tab":xe=v||"list",te(),re=!0,k();break;case"stats-tab":me=v||"pulse",te(),re=!0,k();break;case"profile-tab":de=v||"personal",te(),re=!0,k();break;case"add-part":sn();break;case"part-preset":sn(j);break;case"part-type":{const g=he(f).map(w=>w.key===l?{...w,type:j==="line"?"line":"text"}:w);Ce({parts:g},"");break}case"remove-part":{const g=he(f).find(w=>w.key===l);Ce({parts:he(f).filter(w=>w.key!==l)},`«${g?.label||"Parte"}» fuera. Lo ya escrito se queda en sus días.`);break}case"add-counter":nl();break;case"remove-counter":{const g=$e(f);if(g.length<=1){$("Deja al menos un contador.",!0);break}const w=g.find(C=>C.key===l);Ce({counters:g.filter(C=>C.key!==l)},`«${w?.label||"Contador"}» fuera. Las cifras ya anotadas se conservan.`);break}case"reset-counters":Ce({counters:Bt.map(g=>({...g}))},"Vuelta a los cuatro de siempre.");break;case"thoughts-tab":Y=v||"shore",De=!0,te(),re=!0,k();break;case"toggle-thoughts-landscape":Ci();break;case"routine-tab":ye=v||"hoy",te(),re=!0,k();break;case"shift-day":{const g=D(x,parseInt(_||"1",10));if(g>y()){$("Ese día todavía no ha llegado.",!0);break}x=g,k(),window.scrollTo({top:0,behavior:"smooth"});break}case"today-routine":x=y(),k();break;case"thoughts-island":{const g=document.querySelector("#thoughts-bottles-drawer");g&&(g.open=!0,De=!0);break}case"thoughts-top":window.scrollTo({top:0,behavior:ue?"smooth":"auto"});break;case"focus-composer":{const g=document.querySelector("#thoughts-bottles-drawer");g?.open&&(g.open=!1,De=!1);const w=document.querySelector("#bottle-text");w&&(w.focus(),w.setSelectionRange(w.value.length,w.value.length));break}case"toggle-habit":{const g=o||x;if(g>y()){$("Ese día todavía no ha llegado.",!0);break}const w=L.find(G=>G.date===g),C={...w?.habits||{}},P=!C[m];C[m]=P;try{Pt(g,{habits:C});const G=!w;k(),hl(m);const pe=q.find($t=>$t.id===m)?.name||"Hábito",Je=q.length,Pa=q.filter($t=>C[$t.id]).length;P&&g===y()&&Je&&Pa===Je?$("Rutina de hoy completada"):$(G&&P?`«${pe}» marcado · creé una entrada mínima para ese día`:P?`«${pe}» marcado`:`«${pe}» desmarcado`)}catch(G){$(G.message||"No se pudo guardar el hábito.",!0)}break}case"add-suggested-habit":{if(!h)break;if(q.length>=30){$("Máximo 30 hábitos.",!0);break}if(q.some(w=>w.name.toLowerCase()===h.toLowerCase())){$("Ya está en tu lista.",!0);break}if(!Z("los hábitos",()=>{q=da({name:h})}).ok)break;k(),$(`«${h}» añadido a tu rutina`);break}case"edit-habit":{const g=a.closest(".habit-stat-row"),w=g?.querySelector(".habit-stat-name strong"),C=q.find(G=>G.id===m);if(!w||!C)break;w.outerHTML=`<input class="habit-rename" maxlength="40" value="${u(C.name)}" aria-label="Renombrar hábito">`;const P=g.querySelector(".habit-rename");P.focus(),P.select(),P.addEventListener("keydown",G=>{G.key==="Enter"&&(G.preventDefault(),P.dataset.done="1",nn(m,P.value)),G.key==="Escape"&&(P.dataset.done="1",k())}),P.addEventListener("blur",()=>{P.dataset.done!=="1"&&nn(m,P.value)});break}case"routine-counter-plus":case"routine-counter-minus":{const g=document.querySelector(`[name="counter_${l}"]`);if(!g)break;const w=n==="routine-counter-plus"?1:-1,C=parseFloat(c)||1,P=Math.min(parseFloat(g.max),Math.max(parseFloat(g.min),(parseFloat(g.value)||0)+w*C));g.value=Math.round(P*10)/10,Xa(g,l,parseFloat(g.value)),clearTimeout(Lt),Lt=setTimeout(es,400);break}case"add-goal-routine":{qe();const g=document.querySelector("#routine-goals");if(!g)break;g.querySelector(".habit-empty")?.remove();const w=g.querySelectorAll(".task-input").length;g.insertAdjacentHTML("beforeend",Kn(w,""));const C=g.querySelectorAll(".task-input");C[C.length-1]?.focus();break}case"remove-goal-routine":{const g=oo().filter((C,P)=>P!==+S),w=L.find(C=>C.date===x);try{Pt(x,{goals:g.filter(Boolean),tomorrow:document.querySelector("#routine-tomorrow")?.value.trim()??(w?.tomorrow||"")}),k()}catch(C){$(C.message||"No se pudo quitar la tarea.",!0)}break}case"open-bottle":ma(T);break;case"recast-bottle":{if(!Z("el pensamiento",()=>{B=Rn(T)}).ok)break;k(),$("Botella enviada de nuevo.");break}case"delete-bottle":$l(T);break;case"toggle-more-details":{at=a.getAttribute("aria-expanded")!=="true";const g=++Qs,w=document.querySelector("#extras-accordion"),C=document.querySelector("#extras-panel");if(a.setAttribute("aria-expanded",String(at)),!w||!C)break;if(at)C.hidden=!1,w.classList.remove("is-closing"),w.classList.add("is-open","is-revealing"),setTimeout(()=>w.classList.remove("is-revealing"),360);else{w.classList.remove("is-open","is-revealing"),w.classList.add("is-closing");const P=()=>{!at&&g===Qs&&(C.hidden=!0,w.classList.remove("is-closing"))};if(!ue){P();break}const G=pe=>{pe.target===C&&(C.removeEventListener("animationend",G),P())};C.addEventListener("animationend",G),setTimeout(()=>{C.removeEventListener("animationend",G),P()},260)}break}case"quick-number":{const g=document.querySelector(`#${O}`);g&&j!==void 0&&(g.value=j,g.classList.remove("num-bump"),g.offsetWidth,g.classList.add("num-bump"),g.dispatchEvent(new Event("input",{bubbles:!0})));break}case"cycle-theme":{const g=se.findIndex(Je=>Je.id===f.theme),w=se[(g+1)%se.length];if(!Z("el tema",()=>{f=Le({theme:w.id})}).ok)break;He(f.theme,f);const P=document.querySelector(".theme-pill > span:last-child"),G=document.querySelector(".topbar-favicon-mini"),pe=document.querySelector(".ex-libris-icon");P&&(P.textContent=w.name),G&&(G.innerHTML=Oe(f.theme,f)),pe&&(pe.innerHTML=Oe(f.theme,f)),$(`Tema: ${w.name}`);break}case"open-setup-wizard":qs(1);break;case"open-crisis-modal":vo(v||"help");break;case"dismiss-crisis-banner":ja=!0,document.querySelector("#crisis-alert-slot").innerHTML="";break;case"next-daily-word":fs++,Ga(".word-of-day-card");break;case"next-daily-tip":gs++,Ga(".tip-of-day-card");break;case"next-quote":bs++,dn();break;case"save-quote":{if(!b)break;const g=f.savedQuotes||[],w=g.includes(b),C=w?g.filter(G=>G!==b):[b,...g];if(!Z("las frases",()=>{f=Le({savedQuotes:C})}).ok)break;dn(),$(w?"Frase quitada de tus guardadas":"Frase guardada en tu perfil");break}case"add-custom-quote":{const w=document.querySelector("#new-custom-quote")?.value.trim();if(!w){$("Escribe una frase primero.",!0);break}if(!Z("las frases",()=>{f=Le({savedQuotes:[w,...f.savedQuotes||[]]})}).ok)break;k(),$("Frase añadida");break}case"remove-saved-quote":{const g=parseInt(S,10),w=(f.savedQuotes||[]).filter((P,G)=>G!==g);if(!Z("las frases",()=>{f=Le({savedQuotes:w})}).ok)break;k(),$("Frase eliminada");break}case"toggle-focus-writing":{Et=!Et,document.querySelector(".diary-layout")?.classList.toggle("is-focus-writing",Et);break}case"history-layout":{sa=H||"grid",k();break}case"use-daily-word":{const g=document.querySelector("#wordOfDay");g&&p&&(g.value=p,g.dispatchEvent(new Event("input",{bubbles:!0})),g.classList.add("highlight-flash"),setTimeout(()=>g.classList.remove("highlight-flash"),900),Ga(),$(`«${p}» anotada`));break}case"inspire-prompt":{st=!st;const g=document.querySelector("#writing-prompt-box");g&&(g.hidden=!st,g.classList.toggle("is-open",st));break}case"next-writing-prompt":{na++;const g=document.querySelector("#writing-prompt-text");g&&(g.classList.remove("text-swap"),g.offsetWidth,g.textContent=Ya(x,na),g.classList.add("text-swap"));break}case"insert-writing-prompt":{const g=Ya(x,na),w=document.querySelector("#generalDay");if(w){const C=w.value.trim();w.value=C?`${C}

— ${g}
`:`— ${g}
`,w.focus(),w.setSelectionRange(w.value.length,w.value.length),w.dispatchEvent(new Event("input",{bubbles:!0}))}break}case"previous":Ee(D(x,-1));break;case"next":Ee(D(x,1));break;case"today":Ee(y());break;case"open-day":Ee(o);break;case"read":Il(o);break;case"delete":$o(o);break;case"add-goal":document.querySelector("#goals").insertAdjacentHTML("beforeend",zi()),document.querySelector("#goals .goal-row:last-child input")?.focus();break;case"remove-goal":a.closest(".goal-row").remove();break;case"counter-plus":case"counter-minus":{const g=document.querySelector(`[name="counter_${l}"]`);if(!g)break;const w=n==="counter-plus"?1:-1,C=parseFloat(c)||1,P=Math.min(parseFloat(g.max),Math.max(parseFloat(g.min),(parseFloat(g.value)||0)+w*C));g.value=Math.round(P*10)/10,g.classList.remove("num-bump"),g.offsetWidth,g.classList.add("num-bump"),g.dispatchEvent(new Event("input",{bubbles:!0}));break}case"add-habit":{const w=document.querySelector("#new-habit")?.value.trim();if(!w){$("Escribe un nombre para el hábito.",!0);break}if(q.length>=30){$("Máximo 30 hábitos.",!0);break}if(q.some(P=>P.name.toLowerCase()===w.toLowerCase())){$("Ya existe un hábito con ese nombre.",!0);break}if(!Z("los hábitos",()=>{q=da({name:w})}).ok)break;k(),document.querySelector("#new-habit")?.focus(),$(`Hábito «${w}» añadido`);break}case"delete-habit":{if(await fa({title:"¿Eliminar este hábito?",text:`Se quitará «${h}» de tu lista actual.`,confirmLabel:"Eliminar",danger:!0})){if(!Z("los hábitos",()=>{q=kr(m)}).ok)break;k(),$("Hábito eliminado")}break}case"month-prev":i==="1"?Yt=Be(Yt,-1):oe=Be(oe,-1),k();break;case"month-next":i==="1"?Yt=Be(Yt,1):oe=Be(oe,1),k();break;case"period-prev":M==="1"?oe=Be(oe,-1):x=D(x,-7),k();break;case"period-next":M==="1"?oe=Be(oe,1):x=D(x,7),k();break;case"range":Xe=+r,k();break;case"retry-save":{if(!_t()){$("No hay nada pendiente: todo está guardado."),Pe();break}const g=Dn();Pe(),$(g.ok?"Guardado. Ya está todo en su sitio.":"Sigo sin poder guardar. Descarga una copia para no perderlo.",!g.ok);break}case"open-draft":dl(a.dataset.scope||"");break;case"discard-draft":{const g=a.dataset.scope||"";ce(g),k(),$("Borrador descartado.");break}case"export":case"backup":Ul(`diario-${y()}.json`,Cr(L,q,f,B)),$("Copia descargada");break;case"import":document.querySelector("#import-file").click();break;case"clear":if(await fa({title:"¿Borrar todos los datos?",text:"Se eliminarán todas las entradas, hábitos y preferencias de este navegador.",confirmLabel:"Borrar todo",danger:!0}))try{Sr(),vr(),Da(),x=y(),N="diary",te(),k(),$("Datos eliminados")}catch(g){$(g.message||"No se han podido eliminar los datos.",!0)}break}});z.addEventListener("keydown",e=>{const t=e.target.closest('.settings-subnav-item[role="tab"]');if(!t)return;const a=[...z.querySelectorAll('.settings-subnav-item[role="tab"]')],s=a.indexOf(t),n=["ArrowDown","ArrowRight"].includes(e.key)?1:["ArrowUp","ArrowLeft"].includes(e.key)?-1:0;if(!n)return;e.preventDefault(),de=a[(s+n+a.length)%a.length].dataset.tab,te(),re=!0,k(),z.querySelector(`#settings-tab-${de}`)?.focus()});z.addEventListener("change",e=>{if(e.target.id==="import-file"){const t=e.target.files[0];if(!t)return;const a=new FileReader;a.onload=()=>{try{Me=Tr(a.result);const s=Me.drafts?Object.keys(Me.drafts).length:0,n=yt(`<div class="modal-card">
          <h2>Importar copia</h2>
          <p>El archivo contiene <strong>${Me.entries.length}</strong> ${Me.entries.length===1?"entrada":"entradas"} y <strong>${Me.habits.length}</strong> ${Me.habits.length===1?"hábito":"hábitos"}${s?` y <strong>${s}</strong> ${s===1?"texto a medias":"textos a medias"}`:""}.</p>
          <div class="modal-actions">
            <button class="button outline" data-modal="cancel">Cancelar</button>
            <button class="button solid" data-modal="confirm">Importar</button>
          </div>
        </div>`);n.onclick=o=>{const r=o.target.closest("[data-modal]")?.dataset.modal;if(r==="confirm")try{jr(Me),Da(),$("Copia importada")}catch(i){$(i.message||"No se ha podido importar la copia.",!0);return}(r||o.target===n)&&(n.close(),k())}}catch(s){$(s.message||"No se ha podido importar el archivo.",!0)}e.target.value=""},a.readAsText(t)}e.target.id==="history-mood"&&(ta=e.target.value,k()),e.target.id==="history-tag"&&(aa=e.target.value,k())});z.addEventListener("input",e=>{if(e.target.id==="history-search"){ea=e.target.value;const t=document.activeElement===e.target;if(k(),t){const a=document.querySelector("#history-search");a.focus(),a.setSelectionRange(a.value.length,a.value.length)}}});window.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="b"&&(e.preventDefault(),yo())});window.addEventListener("beforeunload",e=>{ft(),_t()&&(e.preventDefault(),e.returnValue="")});window.addEventListener("storage",e=>{const t=String(e.key||"");if(t.startsWith("diario.")){if(t===ut){N==="setup"&&de==="data"&&k();return}try{ft(),Da(),k(),$("Otra pestaña cambió el cuaderno: lo he actualizado")}catch(a){$("No pude refrescar los datos: "+a.message,!0)}}});setInterval(()=>{_t()&&Ge(),document.querySelector("#diary-form")&&ht==="draft"&&ft()},15e3);ir(()=>Pe());"serviceWorker"in navigator&&window.addEventListener("load",()=>{const e=`${Ot}/`,t=`${e}sw.js`;navigator.serviceWorker.register(t,{scope:e}).catch(()=>{})});to();window.addEventListener("popstate",()=>{Ha(),vs(),ae=!1,to(),re=!0,k({instant:!0})});k();K("idle");_t()&&Ge();Pe();const Ia=ya(B).filter(e=>e.seen!==!0);Ia.length&&setTimeout(()=>{$(Ia.length===1?"Has recibido una botella.":`${Ia.length} botellas recibidas.`),document.querySelectorAll(".vault-arrival").forEach((t,a)=>{t.style.setProperty("--wash-delay",`${a*140}ms`),t.classList.add("is-washing")});const e=document.querySelector(".thought-vault");e?.classList.add("is-rising"),setTimeout(()=>e?.classList.remove("is-rising"),1400)},820);

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const P=[{value:1,emoji:"😫",label:"Fatal",color:"#a8442c"},{value:2,emoji:"😕",label:"Flojo",color:"#c2743a"},{value:3,emoji:"😐",label:"Normal",color:"#98938a"},{value:4,emoji:"🙂",label:"Bien",color:"#4e6f52"},{value:5,emoji:"🤩",label:"Genial",color:"#254d32"}],So=["L","M","X","J","V","S","D"],ks=["","Muy baja","Baja","Normal","Alta","Muy alta"],xs=["","Muy bajo","Bajo","Normal","Alto","Muy alto"],ko=["Productivo","Tranquilo","Ajetreado","Social","Solitario","Creativo","Cansado","Motivado","Ansioso","Emocionado","Nostálgico","Aburrido"],yt=[{key:"water",label:"Agua",unit:"vasos",min:0,max:40,step:1,icon:"drop"},{key:"exercise",label:"Ejercicio",unit:"min",min:0,max:1440,step:5,icon:"run"},{key:"reading",label:"Lectura",unit:"min",min:0,max:1440,step:5,icon:"book"},{key:"mindfulness",label:"Pausa consciente",unit:"min",min:0,max:1440,step:5,icon:"leaf"}],Ms=["drop","run","book","leaf","moon","heart","bolt","sun","gauge","pen","paper","spark"],xo=[{id:"text",label:"párrafo"},{id:"line",label:"una línea"}],qs=[{label:"Cómo responde el cuerpo",hint:"Tensión, digestión, sueño, energía.",type:"text"},{label:"Un pensamiento que no quiero olvidar",hint:"",type:"line"},{label:"Con quién he hablado hoy",hint:"",type:"line"},{label:"Qué me ha costado",hint:"Sin juzgarlo: solo nombrarlo.",type:"text"}],Le=8,Te=12,Es=e=>String(e??"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,24),tt=(e,t,a,s)=>{const o=Number(e);return Number.isFinite(o)?Math.min(a,Math.max(t,o)):s},As=e=>`${e}_${Date.now().toString(36).slice(-5)}${Math.floor(Math.random()*1296).toString(36).padStart(2,"0")}`;function Mo(e={}){const t=yt.find(o=>o.key===e.key),a=Es(e.key);if(!a)return null;const s={key:a,label:String(e.label??t?.label??"Contador").trim().slice(0,28)||t?.label||"Contador",unit:String(e.unit??t?.unit??"").trim().slice(0,14),min:tt(e.min??t?.min,0,9999,0),max:0,step:tt(e.step??t?.step,1,3600,t?t.step:1),goal:tt(e.goal,0,99999,0),icon:Ms.includes(e.icon)?e.icon:t?.icon||"gauge",builtin:!!t};return s.max=Math.max(tt(e.max??t?.max,1,99999,t?t.max:99),s.min+s.step),s}const qa=(e,t={})=>e?.key==="water"?tt(t?.waterGoal,0,25,8):Number(e?.goal)||0;function ue(e={}){const t=Array.isArray(e?.counters)&&e.counters.length?e.counters:yt,a=new Set;return t.map(Mo).filter(s=>s&&!a.has(s.key)&&(a.add(s.key),!0)).slice(0,Te)}function qo(e={}){const t=Es(e.key),a=String(e.label||"").trim().slice(0,60);return!t||!a?null:{key:t,label:a,hint:String(e.hint||"").trim().slice(0,140),type:e.type==="line"?"line":"text"}}function oe(e={}){const t=Array.isArray(e?.parts)?e.parts:[],a=new Set;return t.map(qo).filter(s=>s&&!a.has(s.key)&&(a.add(s.key),!0)).slice(0,Le)}const Eo=["bestOfDay","differentToday","generalDay","tomorrow","wordOfDay"],lt=[{id:"teen",min:10,max:18,label:"10 – 18 años",title:"Instituto",desc:"Clases, amistades y aficiones.",sleepRecommended:8.5,studyRecommended:2,focusLabel:"Horas de estudio",focusQuestion:"¿Cuánto has estudiado hoy?",tags:["Clases","Exámenes","Amigos","Deporte","Música","Videojuegos","Tarde libre","Tranquilo","Cansado","Motivado","Creativo","Social"],habits:["Hacer tareas sin mirar el móvil","Leer 15 minutos antes de dormir","Moverme o entrenar un rato","Dejar la mochila lista para mañana","Dejar el móvil fuera de la cama","Salir a tomar el aire"],placeholders:{bestOfDay:"Una risa, una partida, una canción…",differentToday:"Algo curioso, una charla, un plan…",generalDay:"¿Cómo te has sentido hoy?",tomorrow:"Una tarea, un plan, un rato de descanso…"}},{id:"young",min:19,max:26,label:"19 – 26 años",title:"Universidad y primeros pasos",desc:"Estudios, trabajo e independencia.",sleepRecommended:8,studyRecommended:3,focusLabel:"Horas de estudio y foco",focusQuestion:"¿Cuánto has estudiado o avanzado en tus proyectos?",tags:["Productivo","Uni / Trabajo","Amigos","Entreno","Creativo","Tranquilo","Cansado","Motivado","Social","Solitario","Nostálgico","Ajetreado"],habits:["Bloque de estudio sin distracciones","Entrenar o caminar 30 min","Leer 20 páginas","Cocinar algo casero","Sin pantallas 30 min antes de dormir","Ordenar mi mesa al acabar"],placeholders:{bestOfDay:"Un avance, un café, una charla…",differentToday:"Un detalle, un encuentro, un cambio…",generalDay:"¿Qué te ronda la cabeza?",tomorrow:"Una tarea, una pausa, un plan…"}},{id:"adult",min:27,max:49,label:"27 – 49 años",title:"Equilibrio y vida propia",desc:"Trabajo, descanso, salud y tiempo personal.",sleepRecommended:7.5,studyRecommended:1.5,focusLabel:"Horas de enfoque o aprendizaje",focusQuestion:"¿Cuánto has aprendido o avanzado en tus proyectos?",tags:["Enfocado","Tranquilo","Trabajo","Familia","Deporte","Lectura","Cansado","Motivado","Social","Creativo","Desconexión","Ajetreado"],habits:["Cerrar el trabajo a mi hora","Caminar 30 minutos sin prisas","Leer antes de apagar la luz","Estirar espalda y cuello","Beber agua durante la jornada","Media hora sin notificaciones"],placeholders:{bestOfDay:"Una sobremesa, un logro, un rato tranquilo…",differentToday:"Un giro, un detalle, algo nuevo…",generalDay:"¿Cómo ha ido el día?",tomorrow:"Prioridades y descanso…"}},{id:"senior",min:50,max:120,label:"50+ años",title:"Bienestar y perspectiva",desc:"Salud, paseos, lectura y recuerdos.",sleepRecommended:7.5,studyRecommended:1,focusLabel:"Tiempo de lectura o dedicación",focusQuestion:"¿Cuánto has leído o dedicado a tus aficiones?",tags:["Sereno","Paseo","Lectura","Familia","Naturaleza","Salud","Agradecido","Activo","Creativo","Social","Tranquilo","Nostálgico"],habits:["Paseo matutino al aire libre","Rato de lectura tranquila","Ejercicios de movilidad suave","Llamar o ver a alguien querido","Cuidar el descanso nocturno","Un momento de silencio y calma"],placeholders:{bestOfDay:"Un paseo, una charla, una lectura…",differentToday:"Una visita, un recuerdo, otro camino…",generalDay:"¿Con qué sensación te quedas?",tomorrow:"Un paseo, una lectura, sin prisa…"}}],Ut=[{id:"reading",label:"Lectura",icon:"book",habit:"Leer 20 minutos con calma",tag:"Lectura"},{id:"sport",label:"Deporte",icon:"run",habit:"Entrenar o moverme 30 min",tag:"Deporte"},{id:"study",label:"Estudio",icon:"study",habit:"Sesión de estudio sin móvil",tag:"Productivo"},{id:"music",label:"Música y arte",icon:"spark",habit:"Escuchar un álbum o crear algo",tag:"Creativo"},{id:"nature",label:"Naturaleza",icon:"leaf",habit:"Salir a caminar al aire libre",tag:"Naturaleza"},{id:"social",label:"Amigos",icon:"heart",habit:"Hablar con alguien que quiero",tag:"Social"},{id:"calm",label:"Descanso",icon:"moon",habit:"Apagar pantallas 30 min antes de dormir",tag:"Tranquilo"},{id:"projects",label:"Proyectos",icon:"bolt",habit:"Dedicar 30 min a mi propio proyecto",tag:"Enfocado"},{id:"gaming",label:"Videojuegos",icon:"target",habit:"Parar a tiempo para descansar la vista",tag:"Desconexión"},{id:"cooking",label:"Cocina",icon:"flame",habit:"Preparar una comida casera y tranquila",tag:"Bienestar"}],ct=[{id:"night",label:"Por la noche",icon:"moon"},{id:"morning",label:"Por la mañana",icon:"sun"},{id:"afternoon",label:"A media tarde",icon:"leaf"},{id:"anytime",label:"Cuando quiera",icon:"pen"}],dt=[{id:"warm",label:"Cálido y cercano",desc:"Como hablar con un buen amigo"},{id:"literary",label:"Pausado y literario",desc:"Con gusto por los detalles"},{id:"direct",label:"Directo y práctico",desc:"Claro y al grano"},{id:"gentle",label:"Suave y compasivo",desc:"Amable en días difíciles"}],ee=[{id:"paper",name:"Papel Clásico",desc:"Crema y tinta carbón",colors:["#F3EFE6","#211E17","#B34A2E"],favicon:{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"}},{id:"night",name:"Tinta Nocturna",desc:"Tonos cálidos para la noche",colors:["#151412","#EDE6D8","#D96B4E"],favicon:{bg:"#151412",page:"#272420",accent:"#D96B4E",ink:"#EDE6D8"}},{id:"forest",name:"Bosque Sereno",desc:"Salvia y papel natural",colors:["#EBF0EA","#19241D","#356343"],favicon:{bg:"#19241D",page:"#EBF0EA",accent:"#4C8B5E",ink:"#19241D"}},{id:"terracotta",name:"Atardecer Cálido",desc:"Arcilla y acentos ocre",colors:["#F6ECE4","#261B15","#C45534"],favicon:{bg:"#261B15",page:"#F6ECE4",accent:"#C45534",ink:"#261B15"}},{id:"ocean",name:"Azul Atlántico",desc:"Marfil frío y tinta azul",colors:["#EDF2F6","#16222F","#2B5F8C"],favicon:{bg:"#16222F",page:"#EDF2F6",accent:"#2B5F8C",ink:"#16222F"}},{id:"lavender",name:"Bruma Lavanda",desc:"Lino malva y tinta ciruela",colors:["#F2EEF6","#221B2B","#6E4B8E"],favicon:{bg:"#221B2B",page:"#F2EEF6",accent:"#6E4B8E",ink:"#221B2B"}}],Ao=[{id:"calm",label:"Calma y desahogo",icon:"leaf",desc:"Soltar el ruido del día y quedarme más tranquilo/a."},{id:"focus",label:"Constancia y hábitos",icon:"study",desc:"Cuidar mi estudio, mi descanso y mis rutinas diarias."},{id:"memory",label:"Guardar mi historia",icon:"book",desc:"Que los meses no pasen sin recordar lo que he vivido."},{id:"growth",label:"Conocerme mejor",icon:"spark",desc:"Ver qué cosas me sientan bien y cuáles me quitan energía."}],Co=["Leer 20 minutos","Caminar al aire libre","Pausa sin pantallas","Beber 8 vasos de agua","Respirar 5 minutos en calma","Dormir a buena hora","Estirar el cuerpo","Ordenar mi espacio"],_a=[{text:"No todos los días son buenos, pero siempre queda algún rincón que merece la pena guardar.",author:"Nota de cuaderno",tones:["warm","gentle"],ages:["teen","young","adult","senior"]},{text:"Cómo pasamos los días es, al final, cómo pasamos la vida.",author:"Annie Dillard",tones:["literary","direct"],ages:["young","adult","senior"],interests:["reading","projects"]},{text:"Escribir en un diario es hablar contigo sin tener que fingir que todo va perfecto.",author:"Apunte al margen",tones:["direct","warm"],ages:["teen","young","adult"]},{text:"La prisa casi nunca arregla lo que el descanso sí sabe colocar en su sitio.",author:"Cuaderno de calma",tones:["gentle","warm"],ages:["teen","young","adult","senior"],interests:["calm","nature"]},{text:"Un paso corto dado hoy vale más que diez planes perfectos que se quedan para el lunes.",author:"Bitácora personal",tones:["direct"],ages:["teen","young","adult"],interests:["study","sport","projects"]},{text:"Guardar memoria de las cosas pequeñas es la mejor forma de vivir dos veces.",author:"Tradición de lectura",tones:["literary"],ages:["young","adult","senior"],interests:["reading","music"]},{text:"Sé amable con tu propio ritmo: ni los árboles dan fruto todos los meses del año.",author:"Cuaderno de campo",tones:["gentle","literary"],ages:["teen","young","adult","senior"],interests:["nature","calm"]},{text:"Lo que hoy parece un examen gigante o un problema sin salida, dentro de un mes será solo una página pasada.",author:"Nota para días revueltos",tones:["warm","gentle"],ages:["teen","young"],interests:["study","gaming"]}],Qa=[{word:"Ataraxia",origin:"Griego clásico",meaning:"Tranquilidad de ánimo que nace cuando dejamos de pelear contra lo que no depende de nosotros.",prompt:"¿Qué preocupación podrías dejar en pausa por esta noche?"},{word:"Meraki",origin:"Griego moderno",meaning:"Hacer algo poniendo el corazón, el cuidado y una parte de ti en ello.",prompt:"¿En qué detalle pequeño de hoy has puesto ganas o cariño?"},{word:"Kintsugi",origin:"Japonés",meaning:"Oficio de reparar la cerámica rota con barniz de oro, sin esconder las grietas.",prompt:"¿Qué tropiezo reciente te ha servido para aprender algo útil?"},{word:"Komorebi",origin:"Japonés",meaning:"La luz del sol cuando se cuela entre las hojas de los árboles.",prompt:"¿Qué imagen o rincón bonito has visto hoy al pasar?"},{word:"Resiliencia",origin:"Latín",meaning:"La capacidad de encajar un golpe, recuperar el aliento y seguir adelante a tu paso.",prompt:"¿Cómo has tirado hacia delante hoy cuando algo se hacía cuesta arriba?"},{word:"Serendipia",origin:"Castellano",meaning:"Eso bueno que te encuentras por casualidad mientras ibas buscando otra cosa.",prompt:"¿Qué momento no planeado ha merecido la pena hoy?"},{word:"Ubuntu",origin:"Zulú · Xhosa",meaning:"El concepto de que somos quienes somos gracias también a quienes nos rodean.",prompt:"¿Quién te ha hecho el día un poco más fácil o agradable hoy?"},{word:"Ikigai",origin:"Japonés",meaning:"Aquello que te da un motivo concreto para levantarte por la mañana.",prompt:"¿Qué plan o proyecto te apetece de verdad hacer pronto?"},{word:"Wabi-sabi",origin:"Japonés",meaning:"Gustar de las cosas sencillas, imperfectas y gastadas por la vida real.",prompt:"¿En qué cosa imperfecta de hoy puedes dejar de exigirte tanto?"},{word:"Apapachar",origin:"Náhuatl",meaning:"Dar abrigo y consuelo de verdad; cuidar con cercanía.",prompt:"¿Qué necesitas hoy para descansar a gusto?"},{word:"Sosiego",origin:"Castellano",meaning:"Ese silencio tranquilo que queda cuando por fin se acaba la prisa del día.",prompt:"¿En qué momento del día has notado más calma hoy?"},{word:"Epifanía",origin:"Griego",meaning:"Caer en la cuenta de golpe de algo que llevabas tiempo viendo sin entender.",prompt:"¿De qué cosa te has dado cuenta hoy?"},{word:"Bonhomía",origin:"Castellano",meaning:"Trato llano, honesto y amable que no necesita aparentar nada.",prompt:"¿Qué gesto sencillo de amabilidad has visto o tenido hoy?"},{word:"Nefelibata",origin:"Castellano",meaning:"Persona que de vez en cuando camina por las nubes y mira el mundo a su manera.",prompt:"¿En qué se te ha ido el santo al cielo hoy?"},{word:"Templanza",origin:"Latín",meaning:"Guardar el equilibrio y no perder los papeles cuando alrededor hay ruido.",prompt:"¿En qué situación de hoy has sabido mantener la calma?"},{word:"Alba",origin:"Latín",meaning:"La primera claridad de la mañana antes de que asome el sol.",prompt:"¿Cómo te gustaría empezar la mañana de mañana?"},{word:"Saudade",origin:"Portugués",meaning:"Echar de menos con cariño a alguien o a una época en la que fuiste feliz.",prompt:"¿Qué buen recuerdo te ha venido hoy a la cabeza?"},{word:"Lagom",origin:"Sueco",meaning:"Ni de más ni de menos: saber cuándo algo es ya suficiente.",prompt:"¿Con qué cosa de hoy puedes decir tranquilo/a «por hoy ya está bien»?"},{word:"Sisu",origin:"Finés",meaning:"Empuje tranquilo para terminar lo que empezaste aunque estés cansado.",prompt:"¿Qué cosa has sacado adelante hoy aunque te diera pereza?"},{word:"Hygge",origin:"Danés",meaning:"Estar a gusto en lo cotidiano: una charla tranquila, una manta, un rato en casa.",prompt:"¿Qué momento sencillo del día te ha sentado mejor?"},{word:"Querencia",origin:"Castellano",meaning:"El sitio o la gente a la que uno siempre tiene ganas de volver.",prompt:"¿Dónde o con quién te sientes más cómodo/a últimamente?"},{word:"Claridad",origin:"Latín",meaning:"Distinguir lo que de verdad importa de lo que solo hace ruido.",prompt:"Si te quedas con una sola cosa de hoy, ¿cuál eliges?"},{word:"Amparo",origin:"Latín",meaning:"Tener un lugar o una persona donde resguardarse cuando el día se tuerce.",prompt:"¿Qué te reconforta cuando tienes un día torcido?"},{word:"Gratitud",origin:"Latín",meaning:"No dar por supuesto lo bueno que tenemos cerca cada día.",prompt:"¿Qué cosa normal de tu rutina agradecerías si mañana faltara?"}],Wa=[{category:"Autocompasión",title:"No te hables peor que a un amigo",tip:"Cuando estás cansado o algo sale regular, es fácil machacarse. Prueba a decirte exactamente lo que le dirías a alguien a quien aprecias.",action:"Anota algo que hoy hayas hecho lo mejor que podías.",icon:"heart",ages:["teen","young","adult","senior"],interests:["calm","social"]},{category:"Descanso",title:"Bajar el brillo antes de acostarte",tip:"Dejar el móvil o las pantallas un rato antes de meterte en la cama ayuda a que la cabeza deje de saltar de un tema a otro.",action:"Pon la alarma y deja el teléfono lejos de la almohada.",icon:"moon",ages:["teen","young","adult","senior"],interests:["calm","gaming"]},{category:"Calma",title:"Soltar el aire más despacio",tip:"Cuando notes prisa o nudo en el estómago, toma aire contando 4 y suéltalo despacio contando 6. El cuerpo entiende enseguida el mensaje.",action:"Respira hondo tres veces antes de cerrar el cuaderno.",icon:"leaf",ages:["teen","young","adult","senior"],interests:["calm","nature"]},{category:"Enfoque",title:"La regla de los primeros cinco minutos",tip:"Casi siempre cuesta más ponerse que hacerlo. Ponte solo 5 minutos con eso que estás posponiendo; luego decides si sigues.",action:"Deja escrita una sola tarea concreta para mañana.",icon:"study",ages:["teen","young","adult"],interests:["study","projects"]},{category:"Escritura",title:"Aquí nadie te va a poner nota",tip:"No hace falta escribir bonito ni llenar la página. Tres líneas sinceras sobre lo que te ha pasado hoy bastan.",action:"Escribe lo primero que te salga sin borrar.",icon:"pen",ages:["teen","young","adult","senior"],interests:["reading"]},{category:"Hábitos",title:"Un día suelto no rompe nada",tip:"Si ayer no pudiste cumplir un hábito, no pasa nada. Lo que cuenta es retomarlo hoy con naturalidad y sin culpa.",action:"Empieza por el hábito más fácil de tu lista.",icon:"flame",ages:["teen","young","adult","senior"],interests:["projects","sport"]},{category:"Bienestar",title:"A veces el cansancio es sed",tip:"Gran parte del embotamiento de media tarde viene de llevar horas sin beber agua mientras estudias o trabajas.",action:"Ten un vaso o botella a mano mañana por la mañana.",icon:"drop",ages:["teen","young","adult","senior"],interests:["sport","study","cooking"]},{category:"Calma",title:"Sacar el ruido de la cabeza al papel",tip:"Cuando una preocupación da vueltas en bucle, escribirla en una frase la vuelve manejable y libera espacio mental.",action:"Apunta qué te preocupa hoy y qué parte sí está en tu mano.",icon:"book",ages:["teen","young","adult","senior"],interests:["reading","calm"]},{category:"Movimiento",title:"Caminar también ordena los pensamientos",tip:"Quince minutos andando sin mirar el teléfono despejan más la mente que media hora intentando concentrarse a la fuerza.",action:"Sal a dar una vuelta corta mañana cuando te satures.",icon:"run",ages:["teen","young","adult","senior"],interests:["sport","nature"]},{category:"Estudio y memoria",title:"Lo que estudias se fija mientras duermes",tip:"Quitarle horas al sueño para estudiar a última hora suele salir caro: el cerebro consolida lo aprendido durante el descanso.",action:"Prioriza dormir bien hoy para rendir mejor mañana.",icon:"study",ages:["teen","young"],interests:["study"]},{category:"Equilibrio",title:"Cerrar la jornada de verdad",tip:"Tener un pequeño ritual al terminar tus obligaciones —recoger la mesa, ducharte o salir a caminar— separa el deber del descanso.",action:"Elige a qué hora vas a desconectar mañana.",icon:"sun",ages:["young","adult"],interests:["projects","calm"]},{category:"Perspectiva",title:"Cuidar el contacto con los tuyos",tip:"A veces un mensaje corto o una llamada de cinco minutos a alguien que quieres cambia por completo el tono de la semana.",action:"Piensa en alguien con quien te apetezca hablar mañana.",icon:"heart",ages:["teen","young","adult","senior"],interests:["social"]}],Va=["¿Qué rato de hoy te ha dejado buen sabor de boca, aunque haya sido breve?","¿Qué te ha dado más pereza o respeto hoy y cómo lo has llevado?","¿Qué conversación, canción o momento tranquilo te ha acompañado hoy?","¿Qué te gustaría quitarte de la cabeza antes de apagar la luz?","Si un amigo hubiera tenido exactamente tu día de hoy, ¿qué le dirías?","¿En qué momento del día te has sentido más cómodo/a siendo tú?","¿Qué detalle pequeño de hoy no querrías que se te olvidara dentro de un año?","¿Cómo notas el cuerpo esta noche: cansado, inquieto, ligero, tranquilo?","¿Qué cosa sencilla ha salido mejor de lo que esperabas esta mañana?","¿Qué necesitas mañana para que sea un día llevadero y amable?"],Lo=[{number:"024",tel:"tel:024",name:"Línea 024 · Atención a la conducta suicida",detail:"Ministerio de Sanidad · España · gratuita, confidencial y anónima · 24 h.",primary:!0},{number:"717 003 717",tel:"tel:717003717",name:"Teléfono de la Esperanza",detail:"Escucha y apoyo emocional · 24 h.",primary:!0},{number:"900 20 20 10",tel:"tel:900202010",name:"Fundación ANAR · menores y jóvenes",detail:"Gratuita y confidencial · 24 h para jóvenes. Sin rastro en la factura.",primary:!1,youth:!0},{number:"112",tel:"tel:112",name:"Emergencias 112",detail:"Urgencias sanitarias o de seguridad · 24 h.",primary:!1}];function y(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function He(e){return new Date(`${e}T12:00:00`)}function D(e,t){const a=He(e);return a.setDate(a.getDate()+t),y(a)}function ve(e,t){return Math.round((Date.UTC(...t.split("-").map((a,s)=>+a-(s===1?1:0)))-Date.UTC(...e.split("-").map((a,s)=>+a-(s===1?1:0))))/864e5)}function $t(e,t){const a=[e,...t.map(s=>s.date)].sort()[0];return ve(a,e)+1}function B(e,t={weekday:"long",day:"numeric",month:"long",year:"numeric"}){return He(e).toLocaleDateString("es-ES",t)}function me(e){const t=He(e).getDay();return D(e,-((t+6)%7))}function Cs(e){const t=He(e);return[y(new Date(t.getFullYear(),t.getMonth(),1)),y(new Date(t.getFullYear(),t.getMonth()+1,0))]}function Ee(e,t){const a=He(e);return y(new Date(a.getFullYear(),a.getMonth()+t,1))}function To(e){const[t,a]=Cs(e),s=D(t,-((He(t).getDay()+6)%7)),o=Math.ceil((ve(s,a)+1)/7)*7;return Array.from({length:o},(n,r)=>({date:D(s,r),inMonth:D(s,r).slice(0,7)===e.slice(0,7)}))}const ba=Object.freeze({"/":Object.freeze({view:"diary"}),"/pensamientos":Object.freeze({view:"thoughts",thoughtsTab:"shore"}),"/pensamientos/pendientes":Object.freeze({view:"thoughts",thoughtsTab:"sea"}),"/pensamientos/guardados":Object.freeze({view:"thoughts",thoughtsTab:"kept"}),"/pensamientos/archivados":Object.freeze({view:"thoughts",thoughtsTab:"lost"}),"/rutina":Object.freeze({view:"routine",routineTab:"hoy"}),"/rutina/semana":Object.freeze({view:"routine",routineTab:"week"}),"/rutina/contadores":Object.freeze({view:"routine",routineTab:"counters"}),"/rutina/rachas":Object.freeze({view:"routine",routineTab:"streaks"}),"/archivo":Object.freeze({view:"archive",archiveTab:"list"}),"/archivo/calendario":Object.freeze({view:"archive",archiveTab:"calendar"}),"/progreso":Object.freeze({view:"stats",statsTab:"pulse"}),"/progreso/semana":Object.freeze({view:"stats",statsTab:"week"}),"/progreso/mes":Object.freeze({view:"stats",statsTab:"month"}),"/ajustes":Object.freeze({view:"setup",profileTab:"personal"}),"/ajustes/apariencia":Object.freeze({view:"setup",profileTab:"appearance"}),"/ajustes/contenido":Object.freeze({view:"setup",profileTab:"custom"}),"/ajustes/datos":Object.freeze({view:"setup",profileTab:"data"})});Object.freeze(Object.keys(ba));const Za=e=>{const t=`/${String(e||"").replace(/^\/+|\/+$/g,"")}`;return t==="/"?"/":t};function Ea(e=""){const t=String(e||"").trim();return!t||t==="/"?"":`/${t.replace(/^\/+|\/+$/g,"")}`}function Do(e="/",t=""){const a=Za(e),s=Ea(t);return s?a===s?"/":a.startsWith(`${s}/`)?Za(a.slice(s.length)):a:a}function jo(e="/",t=""){const a=Do(e,t);return{...ba[a]||ba["/"],path:a}}function Ls(e={}){switch(e.view){case"thoughts":return{sea:"/pensamientos/pendientes",kept:"/pensamientos/guardados",lost:"/pensamientos/archivados"}[e.thoughtsTab]||"/pensamientos";case"routine":return{week:"/rutina/semana",counters:"/rutina/contadores",streaks:"/rutina/rachas"}[e.routineTab]||"/rutina";case"archive":return e.archiveTab==="calendar"?"/archivo/calendario":"/archivo";case"stats":return{week:"/progreso/semana",month:"/progreso/mes"}[e.statsTab]||"/progreso";case"setup":return{appearance:"/ajustes/apariencia",custom:"/ajustes/contenido",data:"/ajustes/datos"}[e.profileTab]||"/ajustes";default:return"/"}}function Aa(e={},t=""){const a=Ea(t),s=Ls(e);return`${a}${s==="/"?"/":`${s}/`}`}function No(e=[],t="http://localhost"){for(const a of e){let s;try{s=new URL(a,t).pathname}catch{continue}for(const o of["/assets/","/src/"]){const n=s.lastIndexOf(o);if(n>=0)return Ea(s.slice(0,n))}}return""}function Oo(){let e=0;return{begin(){return++e},cancel(){e++},isCurrent(t){return t===e}}}const C=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e),he=e=>e.filter(t=>Number.isFinite(t));function st(e){const t=he(e);return t.length?t.reduce((a,s)=>a+s,0)/t.length:0}function ot(e){const t=he(e);return t.length?t.reduce((a,s)=>a+s,0)/t.length:null}function $e(e){const t=he(e).sort((s,o)=>s-o);if(!t.length)return null;const a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function Ya(e){const t=he(e);if(!t.length)return null;const a=st(t);return Math.sqrt(st(t.map(s=>(s-a)**2)))}function ie(e,t,a){return e.filter(s=>s.date>=t&&s.date<=a).sort((s,o)=>s.date.localeCompare(o.date))}function Ts(e,t,a,s=y()){const o=a>s?s:a,n=t<=o?ve(t,o)+1:0,r=new Set(e.filter(i=>i.date>=t&&i.date<=o).map(i=>i.date)).size;return{recorded:r,days:n,pct:n?Math.round(r/n*100):0}}function Ca(e){let t=0,a=0,s;for(const o of[...new Set(e.map(n=>n.date))].sort())a=s&&ve(s,o)===1?a+1:1,t=Math.max(t,a),s=o;return t}function Ds(e,t=y()){const a=new Set(e.map(n=>n.date));let s=a.has(t)?t:D(t,-1),o=0;for(;a.has(s);)o++,s=D(s,-1);return o}function wt(e){const t=[e.bestOfDay,e.differentToday,e.generalDay,e.tomorrow,...e.gratitude||[],...Object.values(e.parts||{})].join(" ").trim();return t?t.split(/\s+/).length:0}function Ho(e){return e.reduce((t,a)=>t+wt(a),0)}function Ja(e,t){return e.filter(a=>a.habits?.[t]).length}function js(e,t){return[...new Set(e.filter(a=>a.habits?.[t]).map(a=>a.date))].sort()}function Ns(e,t){const a=js(e,t);let s=0,o=0,n;for(const r of a)o=n&&ve(n,r)===1?o+1:1,s=Math.max(s,o),n=r;return s}function _t(e,t,a=y()){const s=new Set(js(e,t));if(!s.size)return 0;let o=s.has(a)?a:D(a,-1),n=0;for(;s.has(o);)n++,o=D(o,-1);return n}function Os(e,t,a=28,s=y()){const o=D(s,1-a),n=e.filter(l=>l.habits?.[t]&&l.date>=o&&l.date<=s).length,r=e.filter(l=>l.date>=o&&l.date<=s).length,i=Math.min(a,ve(o,s)+1);return{done:n,tracked:r,window:i,pct:i?Math.round(n/i*100):0}}function Fo(e,t,a=28,s=y(),o=y()){const n=Array.from({length:a},(i,l)=>D(s,l-a+1)),r=new Map(e.map(i=>[i.date,i]));return{dates:n,rows:t.map(i=>({habit:i,cells:n.map(l=>({date:l,done:!!r.get(l)?.habits?.[i.id],future:l>o,recorded:r.has(l)}))}))}}function Ka(e){const t=new Map;for(const a of e)for(const s of a.tags||[])t.set(s,(t.get(s)||0)+1);return[...t.entries()].sort((a,s)=>s[1]-a[1])}function De(e=[]){const t=new Map;for(const g of e)g?.date&&t.set(g.date,g);const a=[...t.values()].sort((g,p)=>g.date.localeCompare(p.date)),s=g=>a.map(p=>p[g]),o=g=>he(s(g)).length,n=g=>a.filter(p=>Number.isFinite(p[g])).reduce((p,v)=>!p||v[g]>p[g]?v:p,null),r=s("mood"),i=s("sleepHours"),l=s("studyHours"),u=[...new Set(a.flatMap(g=>Object.keys(g.counters||{})))],h=Object.fromEntries(u.map(g=>{const p=a.map(v=>v.counters?.[g]);return[g,{total:he(p).reduce((v,f)=>v+f,0),average:ot(p),median:$e(p),count:he(p).length}]}));return{count:a.length,mood:st(r),energy:ot(s("energy")),stress:ot(s("stress")),sleep:st(i),study:st(l),moodMedian:$e(r),sleepMedian:$e(i),studyMedian:$e(l),moodStdDev:Ya(r),sleepStdDev:Ya(i),metricCounts:{mood:o("mood"),sleep:o("sleepHours"),study:o("studyHours"),energy:o("energy"),stress:o("stress")},totalSleep:he(i).reduce((g,p)=>g+p,0),totalStudy:he(l).reduce((g,p)=>g+p,0),words:Ho(a),best:n("mood"),worst:a.filter(g=>Number.isFinite(g.mood)).reduce((g,p)=>!g||p.mood<g.mood?p:g,null),mostStudy:n("studyHours"),mostSleep:n("sleepHours"),maxStreak:Ca(a),moods:[1,2,3,4,5].map(g=>a.filter(p=>p.mood===g).length),counters:h}}function Hs(e){return e<6?"Has dormido poco.":e<7?"Una cantidad algo baja.":e<=9?"Un descanso razonable.":"Has dormido bastante."}function Po(e){return e===0?"Hoy no has dedicado tiempo al estudio.":e<1?"Has hecho un poco de estudio.":e<3?"Has tenido una sesión de estudio considerable.":e<5?"Has dedicado bastante tiempo.":"Ha sido un día de estudio intenso."}function Qt(e,t,a=null){if(a&&!a.builtin)return zo(a,t);switch(e){case"water":return t===0?"Sin registrar agua hoy.":t<4?"Poca agua registrada.":t<8?"Una hidratación razonable.":"Buen nivel de hidratación.";case"exercise":return t===0?"Sin ejercicio registrado hoy.":t<20?"Un poco de movimiento.":t<60?"Una sesión de ejercicio notable.":"Un día muy activo.";case"reading":return t===0?"Sin lectura registrada hoy.":t<20?"Unas páginas para hoy.":t<60?"Una buena sesión de lectura.":"Un día de mucha lectura.";default:return t===0?"Sin pausa consciente registrada.":t<10?"Un momento de pausa.":t<30?"Una práctica considerable.":"Una práctica muy constante hoy."}}function zo(e,t){const a=e.unit?` ${e.unit}`:"",s=Number(e.goal)||0;return t?s&&t>=s?`Meta cumplida: ${t} de ${s}${a}.`:s?`Vas a ${t} de ${s}${a}.`:`${t}${a} hoy.`:"Sin registrar hoy."}const Bo=["","Hoy ha sido un día difícil.","Hoy ha sido un día flojo.","Hoy ha sido un día normal.","Hoy ha sido un día bueno.","Hoy ha sido un día genial."];function Ro(e){const t=[Bo[e.mood],`Has dormido ${C(e.sleepHours)} horas y has dedicado ${C(e.studyHours)} horas al estudio.`,Hs(e.sleepHours),Po(e.studyHours)];e.energy&&t.push(`Tu energía se ha sentido ${["","muy baja","baja","normal","alta","muy alta"][e.energy].toLowerCase()}.`),e.stress&&t.push(`El estrés ha sido ${["","muy bajo","bajo","normal","alto","muy alto"][e.stress].toLowerCase()}.`);const a=Object.values(e.habits||{}).filter(Boolean).length;a&&t.push(`Has cumplido ${a} de tus hábitos de hoy.`);const s=e.counters?.water||0;return s>=6&&t.push(`Además, has bebido ${s} vasos de agua.`),t.join(" ")}function Go(e,t=!1){if(!e.count)return"Aún no hay entradas en este período.";const a=e.metricCounts?.mood?`${C(e.mood)}/5`:"sin valoración registrada",s=e.metricCounts?.sleep?`${C(e.sleep)} h de media`:"sin datos de sueño",o=e.metricCounts?.study?`${C(e.study)} h por día con dato`:"sin datos de dedicación",n=e.count===1?"día":"días",r=e.metricCounts?.study?`${C(e.totalStudy)} horas en total`:"sin datos de dedicación",i=t?`En el período has registrado ${e.count} ${n}. Tu valoración media ha sido ${a}. Estudio: ${r}; sueño: ${s}.`:`En la semana has registrado ${e.count} ${n}. Tu valoración media ha sido ${a}; el sueño, ${s}, y la dedicación, ${o}.`,l=[];return Number.isFinite(e.energy)&&l.push(`Tu energía media ha sido ${C(e.energy)}/5`),Number.isFinite(e.stress)&&l.push(`el estrés medio ${C(e.stress)}/5`),e.words&&l.push(`has escrito ${C(e.words)} palabras`),l.length?`${i} ${l.join(", ")}.`:i}function Io(e,t=y()){const a=ie(e,D(t,-6),t),s=ie(e,D(t,-13),D(t,-7)),o=[];if(a.length>=3&&s.length>=3){const p=De(a),v=De(s),f=(q,H,z,F)=>{const[k,L]=q;if(p.metricCounts[L]<3||v.metricCounts[L]<3)return;const U=p[k]-v[k];U>=H?o.push(z):U<=-H&&o.push(F)};f(["sleepMedian","sleep"],.5,"En tus registros recientes, el valor habitual de sueño ha subido respecto a la semana anterior.","En tus registros recientes, el valor habitual de sueño ha bajado respecto a la semana anterior."),f(["studyMedian","study"],.5,"Has dedicado más tiempo al estudio o enfoque que en los 7 días anteriores.","Has dedicado menos tiempo al estudio o enfoque que en los 7 días anteriores."),f(["moodMedian","mood"],.4,"Tu valoración habitual del día ha subido respecto a la semana anterior.","Tu valoración habitual del día ha bajado respecto a la semana anterior."),f(["energy","energy"],.4,"Tu energía registrada ha sido mayor que en la semana anterior.","Tu energía registrada ha sido menor que en la semana anterior."),f(["stress","stress"],.4,"Tu estrés registrado ha sido mayor que en la semana anterior.","Tu estrés registrado ha sido menor que en la semana anterior."),!o.length&&p.metricCounts.mood>=3&&v.metricCounts.mood>=3&&o.push("Tus registros de ánimo se han mantenido bastante estables respecto a los 7 días anteriores.")}const n=ie(e,D(t,-29),t),r=p=>p.filter(v=>Number.isFinite(v.mood)).length>=5,i=n.filter(p=>Number.isFinite(p.sleepHours)&&p.sleepHours>7),l=n.filter(p=>Number.isFinite(p.sleepHours)&&p.sleepHours<=7);r(i)&&r(l)&&$e(i.map(v=>v.mood))-$e(l.map(v=>v.mood))>=.5&&o.push("En tus registros del último mes, dormir más de 7 horas coincide con una valoración habitual algo más alta. Es una asociación, no una causa demostrada.");const u=n.filter(p=>Number.isFinite(p.counters?.exercise)),h=u.filter(p=>p.counters.exercise>=20),g=u.filter(p=>p.counters.exercise<20);return r(h)&&r(g)&&$e(h.map(v=>v.mood))-$e(g.map(v=>v.mood))>=.5&&o.push("En tus registros, los días con 20 minutos o más de ejercicio coinciden con una valoración habitual algo más alta. Es una asociación, no una causa demostrada."),o}const Pe=29.530588853,Uo="2000-01-06",Xa=2.5,fa=[{id:"shore",label:"A la orilla",desc:"Muy cerca: vuelve en cuanto suba la marea.",min:2,max:7,chance:.94,miles:9,reach:"se ve desde la arena"},{id:"breeze",label:"Brisa costera",desc:"Un par de semanas dando tumbos por la bahía.",min:9,max:28,chance:.8,miles:17,reach:"cruza la bahía"},{id:"current",label:"Corriente del norte",desc:"Semanas de travesía; ya no se ve desde la playa.",min:28,max:80,chance:.63,miles:34,reach:"dobló el cabo"},{id:"deep",label:"Alta mar",desc:"Meses lejos. Puede que no vuelva nunca.",min:80,max:240,chance:.42,miles:58,reach:"más allá del mapa"}],_o=["la corriente del Golfo","el Noroeste","los Alisios","la deriva de Levante","el canal viejo","la corriente fría","el remolino de poniente","la resaca del faro"],Pt=[{id:"amber",name:"ámbar",hex:"#B4762E"},{id:"green",name:"verde botella",hex:"#3E6B4F"},{id:"blue",name:"azul cobalto",hex:"#3B5F86"},{id:"smoke",name:"humo",hex:"#6E6257"},{id:"rose",name:"rosa viejo",hex:"#A65B4E"},{id:"clear",name:"cristal",hex:"#7F8E93"}];function Wt(e=""){let t=2166136261;const a=String(e);for(let s=0;s<a.length;s++)t^=a.charCodeAt(s),t=Math.imul(t,16777619);return t>>>0}function Fs(e=0){let t=e>>>0;return()=>{t=t+1831565813>>>0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a>>>0,((a^a>>>14)>>>0)/4294967296}}const at=(e,t)=>(e%t+t)%t,es=(e,t)=>e[Math.floor(t()*e.length)%e.length],Qo=["luna nueva","luna creciente","cuarto creciente","gibosa creciente","luna llena","gibosa menguante","cuarto menguante","luna menguante"],va=e=>Math.min(1,Math.max(0,e));function Ps(e=new Date){const t=e.getHours()+e.getMinutes()/60+e.getSeconds()/3600,a=6,s=18,o=r=>Math.round(r*10)/10;if(t>=a&&t<s){const r=(t-a)/(s-a);return{x:o(8+84*r),y:o(46-6*Math.sin(Math.PI*r)),moonX:50,moonY:42,phase:r<.22?"morning":r>.78?"evening":"day",progress:o(r)}}const n=t>=s?(t-s)/12:(t+6)/12;return{x:t<a?8:92,y:94,moonX:o(8+84*n),moonY:o(58-20*Math.sin(Math.PI*n)),phase:"night",progress:o(n)}}function Wo(e=y()){return at(ve(Uo,e)+.765,Pe)}function La(e=y()){const t=Wo(e),a=Pe/2,s=Math.min(at(t,a),a-at(t,a)),o=t<a;let n="swell",r="Marea en movimiento",i=.6;s<=Xa?(n="spring",r="Marea viva",i=1):Math.abs(at(t,a)-a/2)<=Xa?(n="neap",r="Marea muerta",i=.28):o?(n="rising",r="Marea creciente",i=.7):(n="falling",r="Marea menguante",i=.5);const l=va((1-Math.cos(2*Math.PI*t/Pe))/2),u=Qo[Math.floor(at(t+Pe/16,Pe)/(Pe/8))%8];return{age:t,key:n,name:r,strength:i,rising:o,illum:l,moon:Math.round(l*100)/100,phase:u}}function Vo(e=y()){return La(e).key==="spring"}function Zo(e,t=16){for(let a=0;a<=t;a++){const s=D(e,a);if(Vo(s))return s}return e}const Ct=[{id:"calm",label:"mar en calma",short:"calma",desc:"Agua plana: la botella avanza despacio, pero no se pierde de vista.",speed:.82,push:0,water:.34,rough:0},{id:"haze",label:"bruma",short:"bruma",desc:"Niebla espesa: se pierde la referencia de la orilla algún día más.",speed:.92,push:1,water:.3,rough:.25},{id:"wind",label:"viento a favor",short:"viento",desc:"Sopla hacia fuera y hacia casa: la travesía se acelera.",speed:1.24,push:0,water:.58,rough:.5},{id:"rain",label:"lluvia",short:"lluvia",desc:"Llueve sobre el agua: corrientes revueltas, llegadas inciertas.",speed:1.05,push:1,water:.66,rough:.62},{id:"gale",label:"temporal",short:"temporal",desc:"Con este mar no entra nada en la bahía: la botella espera fuera.",speed:1.42,push:2,water:.92,rough:1}],ua=[{id:"levante",label:"levante"},{id:"poniente",label:"poniente"},{id:"noroeste",label:"el noroeste"},{id:"gallego",label:"el gallego"},{id:"suroeste",label:"suroeste"},{id:"mistral",label:"el mistral"},{id:"libeccio",label:"libeccio"},{id:"gregal",label:"gregal"}],ts=new Set(["levante","el mistral","gregal","suroeste"]);function zs(e=y()){const t=Fs(Wt(`parte|${e}`)),a=t(),s=t(),o=t(),n=Math.min(Ct.length-1,Math.floor(Math.pow(a,1.7)*Ct.length)),r=Ct[n],i=ua[Math.floor(s*ua.length)%ua.length],l=Math.round(4+o*12+r.rough*38),u=La(e);return{date:e,weather:r,wind:{...i,kmh:l,offshore:ts.has(i.id)},level:va(r.water*.7+u.strength*.42),rough:va(r.rough*.72+(u.strength-.5)*.4),speed:r.speed,push:ts.has(i.id)?r.push+1:r.push,tide:u}}function Yo(e="breeze"){return fa.find(t=>t.id===e)||fa.find(t=>t.id==="breeze")}function Bs(e=3){if(e==null||e==="")return 3;const t=Number(e);return Number.isFinite(t)?Math.max(1,Math.min(5,Math.round(t))):3}function Jo({text:e="",castAt:t=y(),sea:a="breeze",id:s="",force:o=3}={}){const n=Yo(a),r=Bs(o),i=Fs(Wt(`${t}|${n.id}|${s}|${String(e).trim().slice(0,220)}`)),l=i(),u=i(),h=i(),g=i(),p=zs(t),v=.7+(r-1)*.225,f=Math.max(1,Math.round((n.min+l*(n.max-n.min))*v)),q=u<n.chance,H=Math.max(4,Math.round(n.miles*(.7+h*.6)*p.speed)),z=D(t,f),F=p.push>0?D(z,p.push):z,k=q?Zo(F):z,L=Math.max(3,Math.round(f*.22));return{sea:n.id,force:r,returns:q,speed:H,driftDays:Math.max(1,ve(t,k)),arriveOn:k,lostOn:q?null:D(t,f+L),current:es(_o,i),glass:es(Pt,i),mottoSeed:Math.floor(g*1e6),weather:p.weather.id,wind:p.wind.label,windSpeed:p.wind.kmh,push:p.push}}function We(e,t=y()){return e.status&&e.status!=="drifting"?e.status:e.returns?t>=(e.arriveOn||e.castAt)?"returned":"drifting":e.lostOn&&t>=e.lostOn?"lost":"drifting"}function Rs(e,t=y()){return!!e&&We(e,t)==="returned"}function Gs(e,t=y()){if(!e||typeof e!="object")return e;const a=We(e,t);if(a===e.status)return e;const s=new Date().toISOString();return a==="returned"?{...e,status:"returned",returnedAt:e.arriveOn||y(),seen:!1,updatedAt:s}:a==="lost"?{...e,status:"lost",lostAt:e.lostOn||y(),seen:!1,updatedAt:s}:e}function Vt(e=[],t=y()){const a={drifting:[],returned:[],lost:[],kept:[]};for(const s of e)a[We(s,t)]?.push(s);a.kept=e.filter(s=>s.kept&&We(s,t)==="returned"),a.drifting.sort((s,o)=>s.castAt.localeCompare(o.castAt));for(const s of["returned","lost"])a[s].sort((o,n)=>String(n.returnedAt||n.lostAt||n.castAt).localeCompare(String(o.returnedAt||o.lostAt||o.castAt)));return a.returned.sort((s,o)=>(s.seen===!0)-(o.seen===!0)||String(o.returnedAt||"").localeCompare(String(s.returnedAt||""))),a.kept.sort((s,o)=>String(o.keptOn||"").localeCompare(String(s.keptOn||""))),a}function Zt(e=[],t=y()){return e.filter(a=>We(a,t)==="returned")}function Ko(e=""){const t=String(e||"").trim();return t?t.split(/\s+/).length:0}const Yt="diario.entries.v1",Jt="diario.habits.v1",Kt="diario.setup.v1",St="diario.thoughts.v1";function Is(e){const t=new Map(e.map(([s])=>[s,localStorage.getItem(s)])),a=[];try{for(const[s,o]of e)a.push(s),o===null?localStorage.removeItem(s):localStorage.setItem(s,o)}catch(s){let o=!1;for(const n of a.reverse())try{const r=t.get(n);r===null?localStorage.removeItem(n):localStorage.setItem(n,r)}catch{o=!0}throw o?new Error("No se pudieron restaurar todos los datos tras el fallo. No cierres la página; exporta una copia si todavía puedes.",{cause:s}):s}}const J={completed:!1,name:"",age:null,ageGroup:"young",interests:[],ritual:"night",tone:"warm",savedQuotes:[],purpose:"calm",motto:"Un día a la vez.",theme:"paper",sleepGoal:7.5,studyGoal:2,waterGoal:8,showDailyWord:!0,showDailyTip:!0,crisisAlertsEnabled:!0,trustedContactName:"",trustedContactPhone:"",sidebarCollapsed:!1,reduceMotion:!1,counters:[],parts:[],updatedAt:null};function Xt(e,t="young"){const a=Number(e);return!Number.isFinite(a)||a<=0?t:a<=18?"teen":a<=26?"young":a<=49?"adult":"senior"}function Ce(e,t){if(typeof e!="string")throw new Error(`${t} debe ser texto.`);if(e.length>2e4)throw new Error(`${t} debe tener como máximo 20.000 caracteres.`);return e}function Xo(e,t){const a=yt.find(i=>i.key===t);if(e==null||e==="")return 0;const s=Number(e),o=a?.min??0,n=a?.max??99999,r=a?.label??t;if(!Number.isFinite(s)||s<o||s>n)throw new Error(`${r} debe estar entre ${o} y ${n}.`);return Math.round(s*10)/10}const Us=/^[\w-]{1,24}$/;function as(e){if(e==null||e==="")return null;const t=Number(e);if(!Number.isInteger(t)||t<1||t>5)throw new Error("Las escalas van de 1 a 5.");return t}function en(e){const t={};if(e==null)return t;if(typeof e!="object"||Array.isArray(e))throw new Error("Las partes del diario no son válidas.");for(const[a,s]of Object.entries(e)){if(!Us.test(a))continue;if(typeof s!="string")throw new Error(`La parte «${a}» debe ser texto.`);const o=s.trim();if(o){if(o.length>4e3)throw new Error("Cada parte del diario admite como máximo 4.000 caracteres.");if(t[a]=o,Object.keys(t).length>=Le)break}}return t}function ea(e){if(!e||typeof e!="object"||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(new Date(e.date+"T12:00:00").getTime())||y(new Date(e.date+"T12:00:00"))!==e.date)throw new Error("Hay una fecha no válida.");if(e.date>y())throw new Error("No se pueden registrar días futuros.");if(!Number.isInteger(e.mood)||e.mood<1||e.mood>5)throw new Error("Selecciona cómo te ha ido el día.");for(const r of["sleepHours","studyHours"]){const i=e[r];if(typeof i!="number"||!Number.isFinite(i)||i<0||i>24)throw new Error("Las horas deben estar entre 0 y 24.")}const t=Object.fromEntries(Eo.map(r=>[r,Ce(e[r]??"",r)]));if(!t.generalDay.trim())throw new Error("Escribe cómo ha ido tu día en general.");const a=Ce(e.capsule??"","La cápsula del día").slice(0,300);if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(r=>typeof r!="string"||r.length>2e4))throw new Error("El agradecimiento debe tener tres campos de texto.");if(e.goals!==void 0&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(r=>typeof r!="string"||r.length>500)))throw new Error("La lista de objetivos no es válida.");const s=Array.isArray(e.tags)?e.tags:[];if(s.length>20)throw new Error("Puedes elegir como máximo 20 etiquetas.");for(const r of s)if(typeof r!="string"||!r.trim()||r.length>40)throw new Error("Hay una etiqueta no válida.");const o={};for(const r of yt)o[r.key]=Xo(e.counters?.[r.key],r.key);for(const r of Object.keys(e.counters||{})){if(!Us.test(r)||r in o)continue;const i=Number(e.counters[r]);Number.isFinite(i)&&i>=0&&i<=99999&&(o[r]=Math.round(i*10)/10)}if(Object.keys(o).length>Te)throw new Error(`No puedes tener más de ${Te} contadores.`);const n={};if(e.habits!==void 0&&(typeof e.habits!="object"||e.habits===null||Array.isArray(e.habits)))throw new Error("Los hábitos no son válidos.");for(const[r,i]of Object.entries(e.habits||{}))typeof r=="string"&&r.length<=60&&(n[r]=i===!0);return{id:typeof e.id=="string"?e.id:crypto.randomUUID(),date:e.date,mood:e.mood,sleepHours:e.sleepHours,studyHours:e.studyHours,energy:as(e.energy),stress:as(e.stress),...t,capsule:a,gratitude:e.gratitude.map(r=>Ce(r??"","El agradecimiento")),goals:(e.goals||[]).map(r=>Ce(r,"Un objetivo")),tags:[...new Set(s.map(r=>r.trim()))],counters:o,parts:en(e.parts),habits:n,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function ta(e){const t=e.map(ea).sort((a,s)=>a.date.localeCompare(s.date));return t.map(a=>({...a,dayNumber:$t(a.date,t)}))}function aa(){const e=localStorage.getItem(Yt);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se han podido leer tus entradas.");return ta(t)}function _s(e){const t=ta(e);return localStorage.setItem(Yt,JSON.stringify(t)),t}function Qs(e){const t=ea(e);t.updatedAt=new Date().toISOString();const a=aa();return _s([...a.filter(s=>s.date!==t.date),t])}function tn(e){return _s(aa().filter(t=>t.date!==e))}function an(){Is([[Yt,null],[Jt,null],[Kt,null],[St,null]])}function je(e){if(!e||typeof e!="object")throw new Error("Hábito no válido.");const t=Ce(e.name??"","El nombre del hábito").trim();if(!t)throw new Error("El hábito necesita un nombre.");if(t.length>40)throw new Error("El nombre del hábito debe tener 40 caracteres o menos.");return{id:typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),name:t,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString()}}function kt(){const e=localStorage.getItem(Jt);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se han podido leer tus hábitos.");return t.map(je)}function Ws(e){const t=e.map(je);return localStorage.setItem(Jt,JSON.stringify(t)),t}function zt(e){const t=je(e),a=kt();return Ws([...a.filter(s=>s.id!==t.id),t])}function sn(e){return Ws(kt().filter(t=>t.id!==e))}const on=new Set(fa.map(e=>e.id)),nn=new Set(Ct.map(e=>e.id)),rn=new Set(Pt.map(e=>e.id)),ln=new Set(["drifting","returned","lost"]);function qe(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;const t=new Date(`${e}T12:00:00`);return Number.isFinite(t.getTime())&&y(t)===e}function Ke(e){if(!e||typeof e!="object")throw new Error("El pensamiento no es válido.");const t=Ce(e.text??"","El pensamiento").trim().slice(0,1200);if(!t)throw new Error("Escribe un pensamiento antes de echar la botella al mar.");const a=qe(e.castAt)&&e.castAt<=y()?e.castAt:y(),s=on.has(e.sea)?e.sea:"breeze",o=Bs(e.force),n=Number.isInteger(e.mood)&&e.mood>=1&&e.mood<=5?e.mood:null,r=typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),i=e.returns===!0,l=qe(e.arriveOn)?ve(a,e.arriveOn):null,h=Number.isInteger(e.driftDays)&&e.driftDays>=1&&l===e.driftDays&&(i||qe(e.lostOn)&&e.lostOn>e.arriveOn)?{force:o,returns:i,speed:Number.isFinite(e.speed)?Math.max(1,Math.round(e.speed)):10,driftDays:Math.max(1,e.driftDays),arriveOn:e.arriveOn,lostOn:qe(e.lostOn)?e.lostOn:null,current:typeof e.current=="string"?e.current.slice(0,60):"",mottoSeed:Number.isFinite(e.mottoSeed)?Math.round(e.mottoSeed):0,weather:nn.has(e.weather)?e.weather:null,wind:typeof e.wind=="string"?e.wind.slice(0,24):"",windSpeed:Number.isFinite(e.windSpeed)?Math.max(0,Math.round(e.windSpeed)):null,push:Number.isInteger(e.push)?Math.max(0,Math.min(4,e.push)):0}:Jo({text:t,castAt:a,sea:s,id:r,force:o});return{id:r,text:t,castAt:a,mood:n,sea:s,...h,status:ln.has(e.status)?e.status:"drifting",glass:rn.has(e.glass)?e.glass:"amber",returnedAt:qe(e.returnedAt)?e.returnedAt:null,lostAt:qe(e.lostAt)?e.lostAt:null,reply:Ce(e.reply??"","La respuesta").trim().slice(0,1200),kept:!!e.kept,keptOn:qe(e.keptOn)?e.keptOn:null,seen:e.seen===!0,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function Vs(e,t=y()){return e.map(Ke).map(a=>a.castAt>t?{...a,castAt:t}:a).map(a=>Gs(a,t)).sort((a,s)=>a.castAt.localeCompare(s.castAt)||a.id.localeCompare(s.id))}function Ta(e){const t=Vs(e);return localStorage.setItem(St,JSON.stringify(t)),t}function cn(e){const t=y();let a=!1;const s=e.map(o=>{const n=Gs(o,t);return n!==o&&(a=!0),n});return a&&localStorage.setItem(St,JSON.stringify(s)),s}function Ne(){const e=localStorage.getItem(St);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se ha podido leer tu mar de pensamientos.");return cn(t.map(Ke))}function dn(e){const t=Ne().find(o=>o.id===e?.id)||null,a=t?Object.fromEntries(["sea","force","returns","speed","driftDays","arriveOn","lostOn","current","glass","mottoSeed","status"].map(o=>[o,t[o]])):{},s=Ke({...t,...e,...a,updatedAt:new Date().toISOString()});return Ta([...Ne().filter(o=>o.id!==s.id),s])}function Be(e,t={}){const a=Ne();return Ta(a.map(s=>s.id===e?{...s,...t,updatedAt:new Date().toISOString()}:s))}function un(e){return Ta(Ne().filter(t=>t.id!==e))}function Zs(e){return Be(e,{status:"drifting",castAt:y(),driftDays:null,arriveOn:null,lostOn:null,returnedAt:null,lostAt:null,seen:!1,reply:"",kept:!1,keptOn:null})}function Ve(e={}){const t=e&&typeof e=="object"?e:{},a=new Set(ee.map(f=>f.id)),s=new Set(Ao.map(f=>f.id)),o=new Set(lt.map(f=>f.id)),n=new Set(Ut.map(f=>f.id)),r=new Set(ct.map(f=>f.id)),i=new Set(dt.map(f=>f.id)),l=(f,q,H,z)=>{const F=Number(f);return Number.isFinite(F)?Math.min(H,Math.max(q,Math.round(F*10)/10)):z};let u=null;if(t.age!==void 0&&t.age!==null&&t.age!==""){const f=Math.round(Number(t.age));Number.isFinite(f)&&f>=8&&f<=115&&(u=f)}const h=o.has(t.ageGroup)?t.ageGroup:J.ageGroup,g=u!==null?Xt(u,h):h,p=Array.isArray(t.interests)?[...new Set(t.interests.filter(f=>n.has(f)))]:[],v=Array.isArray(t.savedQuotes)?[...new Set(t.savedQuotes.filter(f=>typeof f=="string"&&f.trim().length>0).map(f=>f.trim().slice(0,260)))].slice(0,40):[];return{completed:!!t.completed,name:String(t.name??"").trim().slice(0,50),age:u,ageGroup:g,interests:p,ritual:r.has(t.ritual)?t.ritual:J.ritual,tone:i.has(t.tone)?t.tone:J.tone,savedQuotes:v,purpose:s.has(t.purpose)?t.purpose:J.purpose,motto:String(t.motto??J.motto).trim().slice(0,140)||J.motto,theme:a.has(t.theme)?t.theme:J.theme,sleepGoal:l(t.sleepGoal,4,14,J.sleepGoal),studyGoal:l(t.studyGoal,0,16,J.studyGoal),waterGoal:l(t.waterGoal,1,25,J.waterGoal),showDailyWord:t.showDailyWord===void 0?!0:!!t.showDailyWord,showDailyTip:t.showDailyTip===void 0?!0:!!t.showDailyTip,crisisAlertsEnabled:t.crisisAlertsEnabled===void 0?!0:!!t.crisisAlertsEnabled,trustedContactName:String(t.trustedContactName??"").trim().slice(0,60),trustedContactPhone:String(t.trustedContactPhone??"").trim().slice(0,30),sidebarCollapsed:!!t.sidebarCollapsed,reduceMotion:!!t.reduceMotion,counters:ue(t).slice(0,Te),parts:oe(t).slice(0,Le),updatedAt:typeof t.updatedAt=="string"?t.updatedAt:new Date().toISOString()}}function xt(){const e=localStorage.getItem(Kt);if(!e)return{...J};try{const t=JSON.parse(e);return Ve(t)}catch{return{...J}}}function we(e={}){const t=xt(),a=Ve({...t,...e,updatedAt:new Date().toISOString()});return localStorage.setItem(Kt,JSON.stringify(a)),a}function pn(e,t=kt(),a=xt(),s=Ne()){return JSON.stringify({app:"diario",version:1,exportedAt:new Date().toISOString(),entries:ta(e),habits:t.map(je),thoughts:s.map(Ke),setup:Ve(a)},null,2)}function mn(e){let t;try{t=JSON.parse(e)}catch{throw new Error("El archivo no es una copia JSON válida.")}if(!t||typeof t!="object"||Array.isArray(t)||t.version!==1||!Array.isArray(t.entries))throw new Error("Selecciona una copia JSON de Diario (versión 1).");if(t.habits!==void 0&&!Array.isArray(t.habits))throw new Error("La lista de hábitos de la copia no es válida.");if(t.thoughts!==void 0&&!Array.isArray(t.thoughts))throw new Error("La lista de pensamientos de la copia no es válida.");if(t.setup!==void 0&&t.setup!==null&&(typeof t.setup!="object"||Array.isArray(t.setup)))throw new Error("Los ajustes de la copia no son válidos.");const a=t.entries.map(ea);if(new Set(a.map(r=>r.date)).size!==a.length)throw new Error("La copia contiene fechas duplicadas.");const s=(t.habits||[]).map(je);if(new Set(s.map(r=>r.id)).size!==s.length)throw new Error("La copia contiene hábitos duplicados.");const o=(t.thoughts||[]).map(Ke);if(new Set(o.map(r=>r.id)).size!==o.length)throw new Error("La copia contiene pensamientos duplicados.");const n=t.setup?Ve(t.setup):null;return{entries:a,habits:s,thoughts:o,setup:n}}function hn(e){if(!e||!Array.isArray(e.entries)||!Array.isArray(e.habits))throw new Error("La copia no contiene listas de entradas y hábitos válidas.");if(e.thoughts!==void 0&&!Array.isArray(e.thoughts))throw new Error("La lista de pensamientos de la copia no es válida.");if(e.setup!==void 0&&e.setup!==null&&(typeof e.setup!="object"||Array.isArray(e.setup)))throw new Error("Los ajustes de la copia no son válidos.");const t=e.entries.map(ea);if(new Set(t.map(p=>p.date)).size!==t.length)throw new Error("La copia contiene fechas duplicadas.");const a=e.habits.map(je);if(new Set(a.map(p=>p.id)).size!==a.length)throw new Error("La copia contiene hábitos duplicados.");const s=(e.thoughts||[]).map(Ke);if(new Set(s.map(p=>p.id)).size!==s.length)throw new Error("La copia contiene pensamientos duplicados.");const o=e.setup?Ve(e.setup):null,n=new Map(aa().map(p=>[p.date,p]));for(const p of t)n.set(p.date,p);const r=new Map(kt().map(p=>[p.id,p]));for(const p of a)r.set(p.id,p);const i=new Map(Ne().map(p=>[p.id,p]));for(const p of s)i.set(p.id,p);const l=ta([...n.values()]),u=[...r.values()].map(je),h=Vs([...i.values()]),g=[[Jt,JSON.stringify(u)],[St,JSON.stringify(h)]];if(o){const p=Ve({...xt(),...o,updatedAt:new Date().toISOString()});g.push([Kt,JSON.stringify(p)])}return g.push([Yt,JSON.stringify(l)]),Is(g),l}function gn(e=""){return String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim()}function xe(e="paper",t={}){const a=ee.find(u=>u.id===e)||ee[0],{bg:s,page:o,accent:n,ink:r}=a.favicon||{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"},i=String(t?.name||"").trim().slice(0,1).toUpperCase(),l=i?`<text x="36" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="18" fill="${r}">${i.replace(/[<>&"']/g,"")}</text>`:`<path d="M29 29h14M29 36h10" stroke="${r}" stroke-width="2.6" stroke-linecap="round"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="16" fill="${s}"/>
    <rect x="14" y="11" width="38" height="42" rx="5" fill="${o}"/>
    <rect x="14" y="11" width="7" height="42" rx="2" fill="${n}"/>
    <path d="M41 11v12l-4-3-4 3V11" fill="${n}"/>
    ${l}
    <circle cx="46" cy="46" r="3" fill="${n}"/>
  </svg>`.replace(/\s+/g," ").trim()}function bn(e="paper",t={}){const a=xe(e,t);return`data:image/svg+xml;utf8,${encodeURIComponent(a)}`}const fn=[{label:"suicidio",regex:/\b(suicid(io|arme|arse|a)|conducta suicida)\b/},{label:"quitarme la vida",regex:/\b(quitar(me|se) la vida|acabar con mi vida|terminar con mi vida)\b/},{label:"no quiero vivir",regex:/\b(no quiero (seguir viviendo|vivir)|no merece la pena vivir|no vale la pena vivir)\b/},{label:"quiero morir",regex:/\b(quiero morir(me)?|me quiero morir|deseo morir(me)?|prefiero estar muert[oa]|mejor muert[oa])\b/},{label:"autolesión",regex:/\b(autolesion(arme|arse|es)?|hacerme dano|hacerme sangre|cortarme las venas|cortarme el brazo|cortarme la piel)\b/},{label:"acabar con todo",regex:/\b(acabar con todo para siempre|desaparecer para siempre|ojala no despertar|no despertar manana|matarme|tirarme (por la ventana|al tren|desde un puente)|sobredosis)\b/}];function vn(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"){const t=Array.isArray(e.gratitude)?e.gratitude.join(" "):"",a=Array.isArray(e.goals)?e.goals.join(" "):"",s=Array.isArray(e.tags)?e.tags.join(" "):"";return[e.bestOfDay,e.differentToday,e.generalDay,e.wordOfDay,e.capsule,e.tomorrow,t,a,s].filter(Boolean).join(" ")}return""}function Q(e={}){const t=e?.age?Xt(e.age,e.ageGroup||"young"):e?.ageGroup||"young",a=lt.find(q=>q.id===t)||lt[1],s=Array.isArray(e?.interests)?e.interests:[],o=Ut.filter(q=>s.includes(q.id)),n=ct.find(q=>q.id===e?.ritual)||ct[0],r=dt.find(q=>q.id===e?.tone)||dt[0];let i=a.focusLabel,l=a.focusQuestion;s.includes("study")?(i="Estudio",l="Tiempo de estudio o repaso"):s.includes("projects")&&a.id!=="teen"&&(i="Proyectos y enfoque",l="Tiempo dedicado a tus proyectos");const u=[...new Set([...o.map(q=>q.habit),...a.habits,...Co])].slice(0,8),h=[...new Set([...o.map(q=>q.tag),...a.tags,...ko])].slice(0,12),g=Number.isFinite(Number(e?.age))&&Number(e.age)>0&&Number(e.age)<18;let p="Nota del día",v="Algo que quieras recordar hoy…";s.includes("music")?(p="Canción o escena del día",v="¿Qué has escuchado o visto hoy?"):s.includes("reading")?(p="Lectura o cita",v="Un libro o una frase…"):s.includes("gaming")&&(p="Partida o serie del día",v="Un juego o una serie…");const f=["water"];return(s.includes("sport")||s.includes("nature")||!s.length)&&f.push("exercise"),(s.includes("reading")||s.includes("study")||!s.length)&&f.push("reading"),(s.includes("calm")||!s.length)&&f.push("mindfulness"),{group:a,age:e?.age||null,isMinor:g,interests:o,ritual:n,tone:r,focusLabel:i,focusQuestion:l,capsuleLabel:p,capsulePlaceholder:v,activeCounterKeys:f,sleepRecommended:a.sleepRecommended,studyRecommended:a.studyRecommended,suggestedHabits:u,tags:h,placeholders:a.placeholders}}function Da(e){const t=vn(e),a=gn(t),s=[];if(a)for(const o of fn)o.regex.test(a)&&s.push(o.label);return s.length>0?{triggered:!0,level:"high",matchedTerms:s,reason:"Si estás pasando por un momento muy difícil, no tienes por qué llevarlo a solas. El 024 es gratuito, confidencial y atiende las 24 horas."}:{triggered:!1,level:"none",matchedTerms:[],reason:""}}function ut(e=y()){const t=String(e||"").replace(/[^0-9]/g,"");let a=0;for(let s=0;s<t.length;s++)a=a*31+t.charCodeAt(s)>>>0;return a||1}function yn(e=y(),t=0){const a=(ut(e)+Math.abs(t))%Qa.length;return Qa[a]}function $n(e=y(),t=0,a={}){const o=Q(a).group.id,n=new Set(a?.interests||[]),r=Wa.filter(u=>{const h=!u.ageGroups||u.ageGroups.includes(o),g=!u.interests||u.interests.some(p=>n.has(p));return h||g}),i=r.length?r:Wa,l=(ut(e)*7+Math.abs(t))%i.length;return i[l]}function wn(e=y(),t=0,a={}){const o=Q(a).group.id,n=a?.tone||"warm",r=new Set(a?.interests||[]),i=Array.isArray(a?.savedQuotes)?a.savedQuotes:[];if(i.length>0&&t%3===0){const v=(ut(e)+Math.abs(t))%i.length;return{text:i[v],author:a?.name?`Guardada por ${a.name}`:"De tu colección",isCustom:!0}}const l=_a.map(v=>{let f=0;return v.tones?.includes(n)&&(f+=3),v.ageGroups?.includes(o)&&(f+=2),v.interests?.some(q=>r.has(q))&&(f+=4),{q:v,score:f}}),u=Math.max(...l.map(v=>v.score),0),h=l.filter(v=>v.score>=Math.max(2,u-2)).map(v=>v.q),g=h.length>=4?h:_a,p=(ut(e)*5+Math.abs(t))%g.length;return g[p]}function ya(e=y(),t=0){const a=(ut(e)*13+Math.abs(t))%Va.length;return Va[a]}function Sn(e={},t={}){const a=[],s=Q(t),o=Number(t?.sleepGoal)||s.sleepRecommended||7.5,n=Number(e?.sleepHours),r=Number(e?.stress),i=Number(e?.mood);return Number.isFinite(n)&&n>0&&n<o-1.5&&a.push({icon:"moon",title:"Descanso corto",text:`Sueño: ${n} h · meta ${o} h. Ve con calma esta tarde.`}),Number.isFinite(r)&&r>=4&&a.push({icon:"wind",title:"Día cargado",text:"Prioriza una cosa hoy. Lo demás puede esperar."}),Number.isFinite(i)&&i===1&&a.push({icon:"heart",title:"Día cuesta arriba",text:"Descansar y cubrir lo básico es suficiente."}),a.slice(0,2)}function kn(e=[],t={}){const a=Q(t),s=(k,L)=>{const U=Number(k);return Number.isFinite(U)&&U>0?U:L},o=s(t?.sleepGoal,a.sleepRecommended||7.5),n=s(t?.studyGoal,a.studyRecommended||2),r=s(t?.waterGoal,8),i=[...new Map(e.filter(k=>k?.date).map(k=>[k.date,k])).values()],l=i.length;if(!l)return{total:0,sleepGoal:o,studyGoal:n,waterGoal:r,sleepMet:0,studyMet:0,waterMet:0,sleepTracked:0,studyTracked:0,waterTracked:0,sleepPct:null,studyPct:null,waterPct:null,moodWhenSleepMet:null,moodWhenSleepMissed:null};const u=i.filter(k=>Number.isFinite(k.sleepHours)),h=i.filter(k=>Number.isFinite(k.studyHours)),g=i.filter(k=>Number.isFinite(k.counters?.water)),p=u.filter(k=>k.sleepHours>=o),v=u.filter(k=>k.sleepHours<o),f=h.filter(k=>k.studyHours>=n),q=g.filter(k=>k.counters.water>=r),H=(k,L)=>L?Math.round(k/L*100):null,z=ot(p.map(k=>k.mood)),F=ot(v.map(k=>k.mood));return{total:l,sleepGoal:o,studyGoal:n,waterGoal:r,sleepMet:p.length,studyMet:f.length,waterMet:q.length,sleepTracked:u.length,studyTracked:h.length,waterTracked:g.length,sleepPct:H(p.length,u.length),studyPct:H(f.length,h.length),waterPct:H(q.length,g.length),moodWhenSleepMet:Number.isFinite(z)?C(z):null,moodWhenSleepMissed:Number.isFinite(F)?C(F):null}}function xn(e="",t=new Date().getHours()){const a=String(e||"").trim(),s=a?`, ${a}`:"";return t>=5&&t<13?`Buenos días${s}`:t>=13&&t<20?`Buenas tardes${s}`:`Buenas noches${s}`}const Mn={pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',week:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 9h18M8 14h8"/>',month:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9"/>',history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-5 3-7 1 2 2 3 2 3 0-3-1-4 0-6Z"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',study:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',check:'<path d="M20 6 9 17l-5-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',download:'<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3"/>',upload:'<path d="M12 15V3m0 0-4 4m4-4 4 4M4 17v3h16v-3"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 5.1-6C9.5 14.5 12 13 13 12"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',bolt:'<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',storm:'<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/><path d="m13 11-3 5h4l-2 5"/>',drop:'<path d="M12 2.7 6.4 8.3a8 8 0 1 0 11.3 0Z"/>',run:'<circle cx="15" cy="4" r="2"/><path d="m10.5 9.5-3 3L5 11m5.5-1.5 3.5 2 3 2M9 14l-2 6m5-4 3 5"/>',book:'<path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',stamp:'<path d="M5 21h14M6 17h12v2H6zM9 17v-3a3 3 0 1 1 6 0v3"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',refresh:'<path d="M21 12a9 9 0 0 0-15.4-6.4L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15.4 6.4L21 16"/><path d="M21 21v-5h-5"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5-4.5-8.6-10-8.6Z"/>',spark:'<path d="m12 3 1.9 5.8L20 10.8l-6.1 1.9L12 18.5l-1.9-5.8L4 10.8l6.1-2Z"/>',quote:'<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/>',expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',wave:'<path d="M2 9.5c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/><path d="M2 15c2 0 2 1.8 4 1.8S8 15 10 15s2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/>',tide:'<path d="M3 16.5c1.7 0 1.7 1.5 3.4 1.5s1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5 1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5"/><circle cx="17" cy="6" r="3"/><path d="M4 11c1.7 0 1.7 1.5 3.4 1.5S9.1 11 10.8 11"/>',send:'<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z"/>',anchor:'<circle cx="12" cy="5" r="2.6"/><path d="M12 7.6V21"/><path d="M8.5 10h7"/><path d="M3 14a9 9 0 0 0 18 0"/><path d="M3 14h3M18 14h3"/>',bookmark:'<path d="M6.5 3h11a1 1 0 0 1 1 1v17l-6.5-4.6L5.5 21V4a1 1 0 0 1 1-1Z"/>',reply:'<path d="M9 14 4 9l5-5"/><path d="M4 9h9.5A6.5 6.5 0 0 1 20 15.5V20"/>',seal:'<circle cx="12" cy="12" r="8"/><path d="m12 7.6 1.5 2.9 3.2.4-2.3 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.3-2.3 3.2-.4Z"/>',eye:'<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',grid:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',listChecks:'<path d="M11 6h10M11 12h10M11 18h10"/><path d="m3 6 1.6 1.6L7.2 5M3 12l1.6 1.6 2.6-2.6M3 18l1.6 1.6 2.6-2.6"/>',sail:'<path d="M3 18.5h18l-2.6 3.2H5.6Z"/><path d="M12.5 15V3.5L20 15Z"/><path d="M10.5 15 6 8.5 3.8 15Z"/>',fog:'<path d="M4 9h16M3 13h18M5 17h14"/><path d="M7 5.5c1.6-1.6 3.4-1.6 5 0"/>',rain:'<path d="M17.5 14a4 4 0 0 0-.6-7.9A5.5 5.5 0 0 0 6.3 7.4 3.8 3.8 0 0 0 7 14Z"/><path d="M9 17.5 8 20M13 17.5 12 20M17 17.5 16 20"/>',hourglass:'<path d="M7 3h10M7 21h10"/><path d="M7 3c0 4 5 5.4 5 9s-5 5-5 9M17 3c0 4-5 5.4-5 9s5 5 5 9"/>',gauge:'<path d="M12 20a8 8 0 1 1 8-8"/><path d="M12 12 16 9"/><circle cx="12" cy="12" r="1.2"/>',paper:'<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/>',splash:'<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.6 6.6l2.8 2.8M14.6 14.6l2.8 2.8M17.4 6.6l-2.8 2.8M9.4 14.6l-2.8 2.8"/>',save:'<path d="M5 4h11l3 3v13H5Z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'},c=e=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Mn[e]||""}</svg>`,d=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Ys(e={},t=0){const a=Q(e),s=e.name?d(e.name):"Personalizar perfil",o=e.age?`${e.age} años`:a.group.label;return`<button type="button" class="ex-libris-card" data-action="open-setup-wizard" title="Editar perfil y preferencias">
    <span class="ex-libris-icon">${xe(e.theme||"paper",e)}</span>
    <div class="ex-libris-meta">
      <strong>${s}</strong>
      <small>${d(o)} · ${t} ${t===1?"día":"días"}</small>
    </div>
  </button>`}function ss(e,t,a,s,o,n,r){return`<div class="scale-field">
    <p class="field-title">${c(s)} ${o}</p>
    <p class="field-caption">${n}</p>
    <div class="level-scale" role="radiogroup" aria-label="${o}">
      ${[1,2,3,4,5].map(i=>`<label class="level-option">
        <input type="radio" name="${e}" value="${i}" ${a===i?"checked":""}>
        <span class="level-num">${i}</span>
        <span class="level-text">${t[i]}</span>
      </label>`).join("")}
    </div>
    <small id="${e}-hint">${a?t[a]+".":r}</small>
  </div>`}function qn(e=[],t=[]){const a=new Set(e);return`<div class="tag-picker">
    ${[...new Set([...t,...e])].map(o=>`<label class="tag-chip">
      <input type="checkbox" name="tags" value="${d(o)}" ${a.has(o)?"checked":""}>
      <span>${d(o)}</span>
    </label>`).join("")}
    <label class="tag-chip ghost">
      <span>+ Otra:</span>
      <input type="text" name="tagCustom" id="tagCustom" maxlength="24" placeholder="Escribe y pulsa Enter" aria-label="Añadir etiqueta personalizada">
    </label>
  </div>`}function En(e={},t=[],a={},s={}){const o=Q(a),n=new Set(o.activeCounterKeys||["water"]),r=t.filter(u=>!u.builtin||n.has(u.key)||(Number(e?.[u.key])||0)>0),i=r.length?r:t,l=s.action?`${s.action}-`:"";return`<div class="counters-grid">${i.map(u=>{const h=Number(e?.[u.key])||0,g=qa(u,a),p=g?Math.min(100,Math.round(h/g*100)):0;return`<div class="counter-row" data-counter="${u.key}">
      <div>
        <p class="field-title">${c(u.icon)} ${u.label} ${g?`<small class="counter-goal-pill ${h>=g?"met":""}">Meta: ${h}/${g}</small>`:""}</p>
        <p class="field-caption" id="hint-${u.key}" data-counter-hint="${u.key}">${Qt(u.key,h,u)}</p>
        ${g?`<div class="counter-progress"><i style="width:${p}%"></i></div>`:""}
      </div>
      <div class="stepper">
        <button type="button" class="icon-button" data-action="${l}counter-minus" data-key="${u.key}" data-step="${u.step}" aria-label="Restar ${u.label}">${c("minus")}</button>
        <div class="stepper-value">
          <input type="number" name="counter_${u.key}" min="${u.min}" max="${u.max}" step="${u.step}" value="${h}" aria-label="${u.label}" data-counter-input="${u.key}">
          <span>${u.unit}</span>
        </div>
        <button type="button" class="icon-button" data-action="${l}counter-plus" data-key="${u.key}" data-step="${u.step}" aria-label="Sumar ${u.label}">${c("plus")}</button>
      </div>
    </div>`}).join("")}</div>`}function An(e,t,{mini:a=!1,selected:s=y()}={}){const o=new Map(t.map(i=>[i.date,i])),n=y(),r=To(e).map(i=>{const l=o.get(i.date),u=l?P[l.mood-1]:null,h=i.date>n,g=["calendar-day",!i.inMonth&&"outside",i.date===n&&"today",i.date===s&&"selected",l&&"recorded"].filter(Boolean).join(" "),p=`${B(i.date)}${u?`, ${u.label}`:", sin entrada"}`;return`<button type="button" class="${g}" data-action="open-day" data-date="${i.date}" ${h?"disabled":""} aria-label="${p}" style="${u?`--mood:${u.color}`:""}">
      <span>${i.day}</span>${u?'<i aria-hidden="true"></i>':""}
    </button>`}).join("");return`<div class="calendar ${a?"mini":""}">
    <div class="calendar-heading">
      <button type="button" class="icon-button ghost" data-action="month-prev" data-mini="${a?"1":"0"}" aria-label="Mes anterior">${c("left")}</button>
      <strong>${B(e,{month:"long",year:"numeric"})}</strong>
      <button type="button" class="icon-button ghost" data-action="month-next" data-mini="${a?"1":"0"}" aria-label="Mes siguiente">${c("right")}</button>
    </div>
    <div class="calendar-grid">
      ${So.map(i=>`<span class="weekday">${i}</span>`).join("")}
      ${r}
    </div>
  </div>`}function Cn(e,t,a,s={}){const o=Math.max(1,Math.floor(Number(a)||1)),n=new Map(e.map(E=>[E.date,E])),r=760,i=260,l=42,u=48,h=22,g=208,p=r-l-u,v=g-h,f=E=>l+(o===1?p/2:E*p/(o-1)),q=E=>h+(5-E)*v/4,H=E=>g-Math.max(0,Math.min(12,Number(E)||0))*v/12,z=Array.from({length:o},(E,I)=>{const _=D(t,I),pe=n.get(_);return{date:_,entry:pe,index:I,x:f(I),y:pe&&Number.isFinite(pe.mood)?q(pe.mood):null}}),F=z.filter(E=>E.entry&&E.y!==null),k=Math.max(3,Math.min(14,p/o*.56)),L=F.filter(E=>Number.isFinite(E.entry.sleepHours)).map(E=>{const I=H(E.entry.sleepHours),_=Math.max(2,g-I);return`<rect class="sleep-bar" x="${(E.x-k/2).toFixed(1)}" y="${I.toFixed(1)}" width="${k.toFixed(1)}" height="${_.toFixed(1)}" rx="2"><title>${B(E.date)}: ${C(E.entry.sleepHours)} h de sueño</title></rect>`}),U=[];let b=[];for(const E of z){if(E.y===null){b.length&&U.push(b),b=[];continue}b.push(E)}b.length&&U.push(b);const $=U.filter(E=>E.length>1),T=$.map(E=>`<path class="chart-line-path" d="${E.map((I,_)=>`${_?"L":"M"}${I.x.toFixed(1)},${I.y.toFixed(1)}`).join(" ")}"/>`),N=$.map(E=>`<path class="chart-area-path" d="${E.map((_,pe)=>`${pe?"L":"M"}${_.x.toFixed(1)},${_.y.toFixed(1)}`).join(" ")} L${E.at(-1).x.toFixed(1)},${g} L${E[0].x.toFixed(1)},${g} Z"/>`),G=Number.isFinite(Number(s?.sleepGoal))?Number(s.sleepGoal):7.5,ne=H(G),Mt=o<=7?[...Array(o)].map((E,I)=>I):[0,Math.round((o-1)*.17),Math.round((o-1)*.34),Math.round((o-1)*.5),Math.round((o-1)*.67),Math.round((o-1)*.83),o-1],da=[...new Set(Mt)],et=E=>{const I=z[E]?.date||t,_=Number(I.slice(8)),pe=B(I,{month:"short"}).replace(/[0-9.,]/g,"").trim();return o<=7?`${_} ${pe}`:_===1?`${_} ${pe}`:String(_)},$o=Array.from({length:5},(E,I)=>{const _=h+I*v/4;return`<line class="chart-grid-row" x1="${l}" x2="${r-u}" y1="${_.toFixed(1)}" y2="${_.toFixed(1)}"/>`}).join(""),wo=da.map(E=>{const I=o===1?"center":E===0?"first":E===o-1?"last":"middle",_=o===1?50:E/(o-1)*100;return`<span class="chart-x-tick ${I}" style="left:${_.toFixed(2)}%">${et(E)}</span>`}).join(""),Ua=`--axis-top:${(h/i*100).toFixed(2)}%;--axis-bottom:${((i-g)/i*100).toFixed(2)}%`;return`<div class="chart-wrap">
    <div class="chart-plot">
      <svg viewBox="0 0 ${r} ${i}" class="mood-chart" role="img" aria-label="Ánimo del 1 al 5 y horas de sueño en ${o} días; hay ${F.length} días con registro">
        <defs>
          <linearGradient id="moodAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--red)" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="var(--red)" stop-opacity="0.01"/>
          </linearGradient>
        </defs>
        ${$o}
        ${L.join("")}
        ${N.join("")}
        <line class="chart-goal-line" x1="${l}" x2="${r-u}" y1="${ne.toFixed(1)}" y2="${ne.toFixed(1)}"/>
        ${T.join("")}
        ${F.map((E,I)=>`<circle class="chart-dot" style="--dot-i:${I}" cx="${E.x.toFixed(1)}" cy="${E.y.toFixed(1)}" r="5.2" fill="${P[E.entry.mood-1]?.color||"var(--red)"}" stroke="var(--paper-2)" stroke-width="2">
          <title>${B(E.date)} · ${P[E.entry.mood-1]?.label||"Ánimo"} · ${E.entry.mood}/5 · ${C(E.entry.sleepHours)} h de sueño</title>
        </circle>`).join("")}
      </svg>
      <div class="chart-y-axis mood-axis" style="${Ua}" aria-hidden="true">${[5,4,3,2,1].map(E=>`<span>${E}</span>`).join("")}</div>
      <div class="chart-y-axis sleep-axis" style="${Ua}" aria-hidden="true">${[12,9,6,3,0].map(E=>`<span>${E}h</span>`).join("")}</div>
      <div class="chart-x-axis" aria-hidden="true">${wo}</div>
    </div>
    ${F.length?`<div class="chart-legend-inline">
      <span><i class="legend-line"></i> Ánimo · escala 1–5</span>
      <span><i class="legend-bar"></i> Sueño · escala 0–12 h</span>
      <span><i class="legend-goal"></i> Meta de sueño: ${C(G)} h</span>
    </div>`:'<p class="chart-empty">Sin registros en este período.</p>'}
  </div>`}function Ln(e=[],t=y(),a=28){const s=new Map(e.map(r=>[r.date,r])),o=D(t,1-a),n=[];for(let r=0;r<a;r++){const i=D(o,r),l=s.get(i),u=l?P[l.mood-1]:null,h=`${B(i)}${u?`: ${u.label} · ${l.mood}/5 · ${C(l.sleepHours)} h de sueño`:": sin registro"}`;n.push(`<button type="button" class="heatmap-cell ${l?"filled":""}" data-action="open-day" data-date="${i}" style="${u?`--mood:${u.color}`:""}" title="${h}" aria-label="${h}">
      <span>${i.slice(8)}</span>
      ${u?`<small>${u.emoji}</small>`:""}
    </button>`)}return`<div class="heatmap-strip">${n.join("")}</div>`}function Js(e=[],t={}){const a=kn(e,t),s=Q(t);return a.total?`<section class="card personal-goals-card">
    <div class="section-heading">
      <div>
        <h2>Tus metas</h2>
      </div>
      <button type="button" class="text-button" data-action="open-setup-wizard">${c("sliders")} Ajustar metas</button>
    </div>
    <div class="goals-meter-grid">
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${c("moon")} Sueño · meta ${C(a.sleepGoal)} h</span>
          <strong>${a.sleepTracked?`${a.sleepPct}%`:"—"}</strong>
        </div>
        <div class="meter-track" role="meter" aria-label="Días que alcanzan la meta de sueño" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${a.sleepPct??0}"><i style="width:${a.sleepPct||0}%;background:var(--green)"></i></div>
        <small>${a.sleepMet} de ${a.sleepTracked} días con registro</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${c("study")} ${d(s.focusLabel)} · meta ${C(a.studyGoal)} h</span>
          <strong>${a.studyTracked?`${a.studyPct}%`:"—"}</strong>
        </div>
        <div class="meter-track" role="meter" aria-label="Días que alcanzan la meta de dedicación" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${a.studyPct??0}"><i style="width:${a.studyPct||0}%;background:var(--red)"></i></div>
        <small>${a.studyMet} de ${a.studyTracked} días con registro</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${c("drop")} Agua · meta ${a.waterGoal} vasos</span>
          <strong>${a.waterTracked?`${a.waterPct}%`:"—"}</strong>
        </div>
        <div class="meter-track" role="meter" aria-label="Días que alcanzan la meta de agua" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${a.waterPct??0}"><i style="width:${a.waterPct||0}%;background:var(--ochre)"></i></div>
        <small>${a.waterMet} de ${a.waterTracked} días con registro</small>
      </div>
    </div>
    ${a.moodWhenSleepMet&&a.moodWhenSleepMissed?`
      <div class="sleep-mood-insight">
        ${c("spark")}
        <p>Ánimo medio · ${a.moodWhenSleepMet}/5 con tu meta · ${a.moodWhenSleepMissed}/5 sin alcanzarla.</p>
      </div>
    `:""}
  </section>`:`<section class="card personal-goals-card">
      <div class="section-heading">
        <h2>Tus metas personales</h2>
        <button type="button" class="text-button" data-action="open-setup-wizard">${c("sliders")} Ajustar</button>
      </div>
      <p class="habit-empty">Sin datos aún.</p>
    </section>`}function Ks(e,t=0,a={}){const s=wn(e,t,a),o=(a?.savedQuotes||[]).includes(s.text);return`<section class="card quote-card">
    <div class="quote-top">
      <span class="eyebrow">${c("quote")} ${s.isCustom?"Tu colección":"Frase del día"}</span>
      <div class="quote-actions">
        <button type="button" class="icon-button ghost ${o?"is-saved":""}" data-action="save-quote" data-quote="${d(s.text)}" title="${o?"Guardada en tus frases":"Guardar en mis frases"}" aria-label="Guardar frase">${c("heart")}</button>
        <button type="button" class="icon-button ghost" data-action="next-quote" title="Otra frase" aria-label="Otra frase">${c("refresh")}</button>
      </div>
    </div>
    <p class="quote-text">«${d(s.text)}»</p>
    <small class="quote-author">— ${d(s.author)}</small>
  </section>`}function ge(e,t,a="",s=""){return`<div class="ledger-cell">
    <span class="ledger-label">${e}</span>
    <div class="ledger-value">${t}${a?`<small>${a}</small>`:""}</div>
    ${s?`<span class="ledger-hint">${s}</span>`:""}
  </div>`}function qt(e,t,a="mood"){if(!t)return`<div class="rank-row"><span class="rank-label">${e}</span><strong>—</strong><small>Sin datos aún</small></div>`;const s=a==="mood"?`${P[t.mood-1].emoji} ${P[t.mood-1].label} · ${t.mood}/5`:`${C(t[a])} h`;return`<div class="rank-row">
    <span class="rank-label">${e}</span>
    <strong>${B(t.date,{weekday:"short",day:"numeric",month:"short"})}</strong>
    <small>${s}</small>
  </div>`}function Bt(e,t,a=""){return`<div class="empty-state">
    ${c("leaf")}
    <h3>${e}</h3>
    <p>${t}</p>
    ${a}
  </div>`}function ja(e){return`<div class="meter-list">${e.map(t=>{const a=t.total?Math.round(t.count/t.total*100):0;return`<div class="meter-row">
      <span>${t.label}</span>
      <div class="meter-track"><i style="width:${a}%;background:${t.color||"var(--ink)"}"></i></div>
      <strong>${t.count}</strong>
    </div>`}).join("")}</div>`}function Xs(e,t={}){if(!e?.triggered||e.level!=="high")return"";const a=t?.trustedContactName?.trim(),s=t?.trustedContactPhone?.trim();return`<section class="crisis-banner high" role="region" aria-label="Apoyo emocional disponible">
    <div class="crisis-banner-head">
      <span class="crisis-badge">${c("heart")} No estás a solas</span>
      <button type="button" class="icon-button ghost crisis-dismiss" data-action="dismiss-crisis-banner" aria-label="Ocultar este aviso">${c("close")}</button>
    </div>
    <p class="crisis-reason">${d(e.reason)}</p>
    <div class="crisis-quick-actions">
      <a href="tel:024" class="button solid crisis-call-btn">${c("phone")} Llamar al 024 · gratis · 24 h</a>
      ${a&&s?`<a href="tel:${d(s.replace(/\s+/g,""))}" class="button outline">${c("user")} Llamar a ${d(a)}</a>`:""}
      <button type="button" class="button outline" data-action="open-crisis-modal" data-tab="breathe">${c("wind")} Respiración guiada</button>
    </div>
  </section>`}function Tn(e={},t="help"){const a=Q(e),s=e?.trustedContactName?.trim(),o=e?.trustedContactPhone?.trim();return`<div class="modal-card crisis-modal">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${c("heart")} Apoyo y calma</p>
        <h2>Respirar y pedir ayuda</h2>
      </div>
      <button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${c("close")}</button>
    </div>

    <div class="crisis-tabs" role="tablist">
      <button type="button" class="crisis-tab ${t==="help"?"active":""}" data-crisis-tab="help" role="tab">${c("phone")} Teléfonos · 24 h</button>
      <button type="button" class="crisis-tab ${t==="breathe"?"active":""}" data-crisis-tab="breathe" role="tab">${c("wind")} Respirar · 4-4-6</button>
      <button type="button" class="crisis-tab ${t==="ground"?"active":""}" data-crisis-tab="ground" role="tab">${c("compass")} Volver al presente</button>
    </div>

    <div class="crisis-tab-panel ${t==="help"?"active":""}" data-panel="help">
      <p class="crisis-intro">Apoyo gratuito y confidencial, disponible las 24 horas.</p>
      ${s&&o?`
        <div class="trusted-contact-card">
          <div>
            <span class="eyebrow">Tu persona de confianza</span>
            <h3>${d(s)}</h3>
            <p>${d(o)}</p>
          </div>
          <a href="tel:${d(o.replace(/\s+/g,""))}" class="button solid">${c("phone")} Llamar</a>
        </div>
      `:""}
      <div class="helpline-grid">
        ${Lo.map(n=>{const r=a.isMinor&&n.youth;return`
          <div class="helpline-card ${n.primary||r?"primary":""}">
            <div class="helpline-info">
              <h3>${d(n.name)}</h3>
              <p>${d(n.detail)}</p>
            </div>
            <a href="${d(n.tel)}" class="helpline-phone">${c("phone")} <span>${d(n.number)}</span></a>
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
        <button type="button" class="button solid" data-action="toggle-breathing" id="breathing-btn">${c("wind")} Empezar</button>
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
  </div>`}function eo(e,t,a,s={},o={},n=""){const r=s?.showDailyWord!==!1,i=s?.showDailyTip!==!1;if(!r&&!i)return"";const l=yn(e,t),u=$n(e,a,s),h=Sn(o,s),g=n&&n.toLowerCase()===l.word.toLowerCase();return`<div class="daily-inspiration-grid">
    ${r?`
      <article class="card inspiration-card word-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${c("book")} Palabra del día</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-word" title="Ver otra palabra" aria-label="Ver otra palabra">${c("refresh")}</button>
        </div>
        <div class="daily-word-main">
          <div>
            <h2 class="daily-word-title">${d(l.word)}</h2>
            <span class="daily-word-origin">${d(l.type)} · ${d(l.origin)}</span>
          </div>
          <button type="button" class="button ${g?"solid":"outline"} small-btn" data-action="use-daily-word" data-word="${d(l.word)}">
            ${c(g?"check":"pen")} ${g?"Elegida hoy":"Usar hoy"}
          </button>
        </div>
        <p class="daily-word-meaning">${d(l.meaning)}</p>
      </article>
    `:""}

    ${i?`
      <article class="card inspiration-card tip-of-day-card">
        <div class="inspiration-top">
          <span class="eyebrow">${c("spark")} Consejo · ${d(u.category)}</span>
          <button type="button" class="icon-button ghost" data-action="next-daily-tip" title="Ver otro consejo" aria-label="Ver otro consejo">${c("refresh")}</button>
        </div>
        <h2 class="daily-tip-title">${d(u.title)}</h2>
        <p class="daily-tip-body">${d(u.tip)}</p>
        ${h.length?`
          <div class="contextual-advice-list">
            ${h.map(p=>`
              <div class="contextual-advice-item">
                ${c(p.icon)}
                <div><strong>${d(p.title)}:</strong> ${d(p.text)}</div>
              </div>
            `).join("")}
          </div>
        `:""}
      </article>
    `:""}
  </div>`}function Dn(e={},t=[],a=1,s=!1){const o=Q(e),n=new Set(t.map(i=>i.name.toLowerCase())),r=new Set(e.interests||[]);return`<div class="modal-card setup-wizard-modal ${s?"is-mandatory":""}" data-current-step="${a}">
    <div class="setup-wizard-header">
      <div>
        <p class="eyebrow">${c("sliders")} Paso ${a} de 3</p>
        <h2>${a===1?"Tu perfil":a===2?"Tu ritmo":"Tu papel"}</h2>
      </div>
      ${s?"":`<button type="button" class="icon-button ghost" data-modal="close" aria-label="Cerrar">${c("close")}</button>`}
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
            <label for="setup-name">${c("user")} ¿Cómo te llamas?</label>
            <input id="setup-name" name="name" maxlength="50" placeholder="Tu nombre o apodo…" value="${d(e.name||"")}">
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
                <span class="age-range-badge">${d(i.label)}</span>
                <strong>${d(i.title)}</strong>
                <small>${d(i.desc)}</small>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="setup-field">
          <label>Tus intereses</label>
          <div class="interests-grid">
            ${Ut.map(i=>`
              <label class="interest-chip">
                <input type="checkbox" name="interests" value="${i.id}" ${r.has(i.id)?"checked":""}>
                <span>${c(i.icon)} ${d(i.label)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${a===2?"active":""}" data-step="2" ${a===2?"":"hidden"}>
        <div class="age-adaptation-callout" id="wiz-adaptation-callout">
          ${c("compass")}
          <div>
            <strong>${d(o.group.title)} · ${d(o.group.label)}</strong>
            <p>Sueño ${C(o.sleepRecommended)} h · dedicación ${C(o.studyRecommended)} h.</p>
          </div>
        </div>

        <div class="goals-setup-grid">
          <div class="setup-field">
            <label for="setup-sleep">${c("moon")} Meta de sueño</label>
            <div class="number-wrap">
              <input id="setup-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${e.sleepGoal??o.sleepRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-study">${c("study")} Meta de dedicación</label>
            <div class="number-wrap">
              <input id="setup-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${e.studyGoal??o.studyRecommended}">
              <span>h / día</span>
            </div>
          </div>
          <div class="setup-field">
            <label for="setup-water">${c("drop")} Vasos de agua</label>
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
                  <span class="purpose-icon">${c(i.icon)}</span>
                  <div><strong>${d(i.label)}</strong></div>
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
                  <div><strong>${d(i.label)}</strong><small>${d(i.desc)}</small></div>
                </label>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="setup-field">
          <label>Hábitos sugeridos</label>
          <div class="tag-picker" id="wiz-suggested-habits">
            ${o.suggestedHabits.map(i=>{const l=n.has(i.toLowerCase());return`<label class="tag-chip">
                <input type="checkbox" name="suggestedHabits" value="${d(i)}" ${l?"checked":""}>
                <span>${d(i)}</span>
              </label>`}).join("")}
          </div>
        </div>
      </div>

      <div class="wizard-step-body ${a===3?"active":""}" data-step="3" ${a===3?"":"hidden"}>
        <div class="setup-field">
          <label>${c("palette")} Elige tu papel e icono</label>
          <div class="theme-picker-grid">
            ${ee.map(i=>`
              <label class="theme-card">
                <input type="radio" name="theme" value="${i.id}" ${(e.theme||"paper")===i.id?"checked":""}>
                <div class="theme-card-top">
                  <span class="theme-favicon-preview">${xe(i.id,e)}</span>
                  <div class="theme-swatches">
                    ${i.colors.map(l=>`<i style="background:${l}"></i>`).join("")}
                  </div>
                </div>
                <strong>${d(i.name)}</strong>
                <small>${d(i.desc)}</small>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="setup-field">
          <label for="setup-motto">Frase de portada</label>
          <input id="setup-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${d(e.motto||"Un día a la vez.")}">
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
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${c("left")} Anterior</button>`:s?"":'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${c("right")}</button>`:`<button type="submit" class="button solid">${c("check")} Guardar</button>`}
      </div>
    </form>
  </div>`}const sa=e=>Pt.find(t=>t.id===e?.glass)||Pt[0];function pt(e={},t={}){const a=sa(e),s=t.class?` ${t.class}`:"",o=t.paper===!1?"":`<path class="bottle-paper" d="M10.6 13.4h6.2M10.6 15.6h4.4" stroke="${a.hex}" stroke-width="1.1" stroke-linecap="round" opacity=".8"/>`;return`<svg class="bottle-glyph${s}" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <g transform="rotate(-24 14 14)">
      <path d="M11 4.2h6v3.1c0 1 .3 1.6 1 2.3l1.5 1.6c.9 1 1.4 2 1.4 3.3v7.2c0 1.4-1.1 2.5-2.5 2.5h-8.8c-1.4 0-2.5-1.1-2.5-2.5v-7.2c0-1.3.5-2.3 1.4-3.3l1.5-1.6c.7-.7 1-1.3 1-2.3Z" fill="color-mix(in srgb,${a.hex} 22%,transparent)" stroke="${a.hex}" stroke-width="1.2"/>
      <path d="M11.6 6.6h4.8" stroke="${a.hex}" stroke-width="1" opacity=".6"/>
      <rect class="bottle-cork" x="12.2" y="2.4" width="3.6" height="2.4" rx="1" fill="${a.hex}" opacity=".85"/>
      ${o}
      <path class="bottle-shine" d="M9.6 15.4v6.4" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".4"/>
    </g>
  </svg>`}function jn(e=1440,t=4,a=40,s=480,o=0){const n=-s+o;let r=`M${n} ${a}`;for(let i=n;i<e+s;i+=s)r+=` C${i+s*.25} ${a-t} ${i+s*.25} ${a-t} ${i+s*.5} ${a}`,r+=` C${i+s*.75} ${a+t} ${i+s*.75} ${a+t} ${i+s} ${a}`;return r}function Nn(e=0,t=0){const a=Math.abs(Number(e)||0)%7*11,s=Math.max(0,Math.min(1,Number(t)||0)),o=(n,r,i,l,u,h)=>{const g=Math.round(i+s*i*.75),p=(u*(1-Math.min(.35,s*.2))).toFixed(1);return`<path class="thoughts-wave-line ${n}" style="--wave-dur:${p}s;--wave-delay:${h}s" d="${jn(1440,g,r,l,a)}"/>`};return`<svg class="sea-wave-svg thoughts-wave-scene" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
    ${o("wave-line-surface",22,3,480,8,-1.7)}
    ${o("wave-line-middle",69,4,400,10,-4.1)}
    ${o("wave-line-distance",123,3,360,12,-7.3)}
  </svg>`}function On(e={}){const t=Wt(`${e.id||""}|${e.castAt||""}`),a=(t&1)===1,s=(t>>>3)%14;return{x:a?79+s:8+s,depth:13+(t>>>7)%8}}function Hn(){return`<svg class="thoughts-island-scenery" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
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
  </svg>`}function Fn(e=[],t=y(),a=new Date){const s=Vt(e,t),o=s.drifting,n=s.returned,r=zs(t),i=La(t),l=Math.round(i.strength*100),u=Math.round(45+r.level*10),h=Math.min(1,r.rough),g=Ps(a),p=n.filter(z=>z.seen!==!0).length,v=s.lost.length,f=o.length?"sent":p?"unread":n.length?"received":v?"lost":"calm",q=o.length?`${o.length} ${o.length===1?"botella en camino":"botellas en camino"}`:p?`${p} ${p===1?"botella nueva":"botellas nuevas"}`:n.length?`${n.length} ${n.length===1?"botella recibida":"botellas recibidas"}`:v?`${v} ${v===1?"botella perdida":"botellas perdidas"}`:"Mar en calma",H=n.slice(0,5).map((z,F)=>{const k=z.seen!==!0;return`<button type="button" class="vault-arrival${k?" is-new is-washing":""}" style="--arrival-x:${28+F*11}%;--wash-delay:${Math.min(F,4)*120}ms" data-action="open-bottle" data-id="${z.id}" aria-label="${k?"Abrir botella nueva recibida":"Abrir botella recibida"}">
      ${pt(z,{class:k?"is-landed":""})}<span class="sr-only">${k?"Nueva":"Recibida"}</span>
    </button>`}).join("");return`<section id="thoughts-top" class="sea-panel thought-vault thoughts-ocean-stage ${n.length?"has-arrivals":""}${p?" has-unread":""}"
    data-dayphase="${g.phase}" data-tide="${i.key}" data-weather="${r.weather.id}" data-bottle-state="${f}"
    style="--sun-x:${g.x}%;--sun-y:${g.y}%;--moon-x:${g.moonX}%;--moon-y:${g.moonY}%;--water-level:${u}%;--tide-level:${l}%"
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
      <p class="thoughts-kicker">${c("wave")} Un lugar para soltar</p>
      <h1>Pensamientos</h1>
      <p class="thoughts-lead">Escribe. Suelta. Sigue.</p>
      <div class="thoughts-hero-meta">
        <p class="thoughts-state-pill" data-state="${f}" role="status"><span class="thoughts-state-mark" aria-hidden="true"></span>${d(q)}</p>
        <div class="thoughts-tide-status" role="status" aria-label="Estado de la marea: ${d(i.name)}. Fase: ${d(i.phase)}" title="Fase lunar: ${d(i.phase)}">
          <span class="thoughts-tide-icon" aria-hidden="true">${c("wave")}</span>
          <span class="thoughts-tide-name">${d(i.name)}</span>
          <span class="thoughts-tide-meter" role="meter" aria-label="Intensidad de la marea" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}"><i></i></span>
        </div>
      </div>
    </header>
    <div class="sea-water vault-water" aria-hidden="true">
      ${Nn(Wt(t),h)}
      <span class="thoughts-water-reflection"></span>
    </div>
    ${Hn()}
    ${H?`<div class="vault-arrivals" aria-label="Botellas recibidas">${H}</div>`:""}
  </section>`}function os(e=0,t="sent"){const a=Number(e),s=Number.isFinite(a)?Math.max(0,Math.floor(a)):0;return`<p class="thoughts-bottle-count-only" role="status" aria-label="${s} ${t==="lost"?s===1?"botella perdida":"botellas perdidas":s===1?"botella enviada":"botellas enviadas"}">${s}</p>`}function Pn(e={},t=y(),a={}){const s=String(a.text||""),o=Math.max(1,Math.min(5,Math.round(Number(a.force)||3)));return`<form id="bottle-form" class="card bottle-composer">
    <label class="sr-only" for="bottle-text">Pensamiento</label>
    <textarea id="bottle-text" name="text" class="bottle-text" maxlength="1200" rows="3"
      placeholder="Escribe aquí…">${d(s)}</textarea>
    <div class="cast-force">
      <div class="cast-force-head"><label for="bottle-force">Fuerza</label><output id="bottle-force-value" for="bottle-force" aria-live="polite">${o}</output></div>
      <input id="bottle-force" class="cast-force-slider" type="range" name="force" min="1" max="5" step="1" value="${o}" aria-label="Fuerza del lanzamiento">
      <div class="cast-force-scale" aria-hidden="true"><span>Vuelve antes</span><span>Tarda más</span></div>
    </div>
    <div class="composer-bar">
      <div class="composer-moods" role="radiogroup" aria-label="Ánimo">
        ${P.map(n=>`<label class="mini-mood" style="--mood-color:${n.color}" title="${n.label}">
          <input type="radio" name="mood" value="${n.value}" ${a.mood===n.value?"checked":""}>
          <span>${n.emoji}</span>
        </label>`).join("")}
      </div>
      <button type="submit" class="button solid cast-btn"${s.trim()?"":" disabled"}>${c("send")} Lanzar botella</button>
    </div>
  </form>`}function zn(e,t=y(),a=0){const s=We(e,t),o=sa(e),n=`<button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${e.id}" aria-label="Eliminar">${c("trash")}</button>`;if(s!=="returned"){const l=s==="lost"?"Perdida":"Enviada",u=s==="lost"?"No volvió":"En camino";return`<article class="card bottle-card is-${s} is-locked" style="--tint:${o.hex};--card-delay:${Math.min(9,a)*35}ms" data-bottle-id="${e.id}" aria-label="${l}. ${u}">
      <header class="bottle-card-head">
        <span class="bottle-card-mark">${pt(e,{paper:!1})}</span>
        <div class="bottle-card-who"><p class="field-caption">${u}</p><h3>${l}</h3></div>
        ${s==="drifting"?`<span class="bottle-lock-mark" aria-hidden="true">${c("lock")}</span>`:""}
      </header>
      <footer class="bottle-card-foot">
        ${s==="lost"?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${e.id}">Soltar otra vez</button>`:""}
        ${n}
      </footer>
    </article>`}const r=e.seen!==!0,i=r?"Nueva · recibida":e.kept?"Recibida · guardada":"Recibida";return`<article class="card bottle-card is-returned${r?" is-unread":""}${e.kept?" is-kept":""}" style="--tint:${o.hex};--card-delay:${Math.min(9,a)*35}ms" data-bottle-id="${e.id}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${pt(e)}</span>
      <div class="bottle-card-who"><p class="field-caption">${i}</p><h3>Pensamiento</h3></div>
      ${e.kept?`<span class="kept-mark" title="Guardado">${c("bookmark")}</span>`:""}
    </header>
    <p class="bottle-card-text ${Ko(e.text)<=26?"is-short":""}">${d(e.text)}</p>
    ${e.reply?`<p class="bottle-card-reply"><span>Respuesta</span> ${d(e.reply)}</p>`:""}
    <footer class="bottle-card-foot">
      <button type="button" class="button outline small-btn" data-action="open-bottle" data-id="${e.id}" aria-label="${r?"Abrir botella nueva":"Abrir botella recibida"}">Abrir</button>
      ${n}
    </footer>
  </article>`}function Bn(e,t=y(),a={}){if(!Rs(e,t))return"";const s=sa(e),o=e.mood?P[e.mood-1]:null;return`<div class="modal-card bottle-modal ${e.seen!==!0?"is-fresh":""}" style="--tint:${s.hex}" data-modal-bottle="${e.id}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${c("close")}</button>
    <span class="bottle-wax" aria-hidden="true">${pt(e,{paper:!1})}<i class="wax-crack"></i></span>
    <p class="tale">Recibida</p>
    <div class="bottle-note" data-fate="returned">
      <blockquote class="bottle-modal-text">${d(e.text)}</blockquote>
      ${o?`<p class="bottle-modal-mood">${o.emoji} · ${o.label.toLowerCase()}</p>`:""}
    </div>
    ${e.reply?`<div class="bottle-reply-box"><span>Respuesta</span><p>${d(e.reply)}</p></div>`:`
      <div class="bottle-reply-form">
        <label for="bottle-reply">Responder</label>
        <textarea id="bottle-reply" maxlength="1200" rows="3" data-draft="respuesta:${e.id}:text" placeholder="Tu respuesta…">${d(e.replyDraft||"")}</textarea>
      </div>`}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      ${e.reply?'<button class="button outline" data-modal="reply-clear">Quitar respuesta</button>':'<button class="button outline" data-modal="reply">Responder</button>'}
      <button class="button outline" data-modal="keep">${e.kept?"Quitar de guardados":"Guardar"}</button>
      <button class="button solid" data-modal="to-entry">Guardar hoy</button>
    </div>
  </div>`}function Rn(e={}){return`<div class="splash-layer" style="--tint:${sa(e).hex}">
    <span class="splash-arc">${pt(e)}</span>
    <span class="splash-ring"></span>
    <span class="splash-ring is-2"></span>
    <span class="splash-drop"></span>
    <span class="splash-drop is-2"></span>
    <span class="splash-drop is-3"></span>
  </div>`}const Rt="diario.drafts.v1",Gn=6e3,ns=40,be={entry:e=>`entrada:${e}`,bottle:()=>"botella",reply:e=>`respuesta:${e}`,tomorrow:()=>"manana",setup:()=>"perfil"};function mt(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function pa(e,t=Gn){const a=String(e??"");return a.length>t?a.slice(0,t):a}function Na(){let e=null;try{e=localStorage.getItem(Rt)}catch{return{}}if(!e)return{};try{const t=JSON.parse(e);return mt(t)?t:{}}catch{return{}}}function to(e){const t=Object.keys(e);if(!t.length){try{localStorage.removeItem(Rt)}catch{}return!0}let a=e;t.length>ns&&(a=Object.fromEntries(t.sort((s,o)=>String(e[o]?.savedAt||"").localeCompare(String(e[s]?.savedAt||""))).slice(0,ns).map(s=>[s,e[s]])));try{return localStorage.setItem(Rt,JSON.stringify(a)),!0}catch{return!1}}function oa(e,t){if(!e)return null;const a={};let s=0;for(const[r,i]of Object.entries(mt(t)?t:{}))if(i!=null){if(typeof i=="string"){const l=pa(i);if(!l.trim())continue;a[r]=l,s++}else if(typeof i=="number"||typeof i=="boolean")a[r]=i,s++;else if(Array.isArray(i)){const l=i.map(u=>typeof u=="string"?pa(u,600):u).filter(u=>typeof u!="string"||u.trim());l.length&&(a[r]=l,s++)}else if(mt(i)){const l={};for(const[u,h]of Object.entries(i))typeof h=="number"||typeof h=="boolean"?l[u]=h:typeof h=="string"&&h.trim()&&(l[u]=pa(h,600));Object.keys(l).length&&(a[r]=l)}}if(!s)return Ze(e),null;const o=Na(),n=new Date().toISOString();return o[e]={data:a,savedAt:n},{savedAt:n,ok:to(o)}}function ao(e){if(!e)return null;const t=Na()[e];return mt(t)?t:null}function Oa(e){const t=ao(e);return t&&mt(t.data)?t.data:null}function Ze(e){if(!e)return!1;const t=Na();return e in t?(delete t[e],to(t),!0):!1}function In(e,t){const a=ao(e);return a?.savedAt?t?String(a.savedAt)>String(t):!0:!1}function Un(){try{localStorage.removeItem(Rt)}catch{}return!0}const so=["L","M","X","J","V","S","D"],rs=e=>so[(He(e).getDay()+6)%7];function oo(e,t,a=""){const o=2*Math.PI*26,n=(Math.min(100,Math.max(0,e))/100*o).toFixed(2);return`<div class="ring-widget ${e>=100?"is-full":""}">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle class="ring-track" cx="32" cy="32" r="26"/>
      <circle class="ring-fill" cx="32" cy="32" r="26" stroke-dasharray="${n} ${o.toFixed(2)}"/>
    </svg>
    <span class="ring-value">${t}</span>
    ${a?`<span class="ring-sub">${d(a)}</span>`:""}
  </div>`}function _n(e=[],t=null,a=[],s=y(),o=y()){return e.length?`<div class="habit-board">${e.map((n,r)=>{const i=!!t?.habits?.[n.id],l=_t(a,n.id,s>o?s:o),u=Os(a,n.id,7,s);return`<button type="button" class="habit-toggle ${i?"is-done":""}" style="--habit-i:${r}"
      data-action="toggle-habit" data-habit="${n.id}" data-date="${s}" aria-pressed="${i}">
      <span class="habit-tick" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.8 11.8 12.8 4.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span class="habit-copy">
        <strong>${d(n.name)}</strong>
        <small>${i?"hecho hoy":s===o?"toca para marcarlo":"aún por hacer"}</small>
      </span>
      <span class="habit-dots" aria-hidden="true">
        ${Array.from({length:7},(h,g)=>{const p=D(s,g-6);return`<i class="${!!a.find(f=>f.date===p)?.habits?.[n.id]?"on":""} ${p>o?"future":""}"></i>`}).join("")}
      </span>
      <span class="habit-streak ${l?"is-hot":""}" title="Racha actual">${l?`${c("flame")} ${l}`:`${u.done}/7`}</span>
    </button>`}).join("")}</div>`:""}function Qn(e=[],t=[],{days:a=28,end:s=y(),today:o=y(),title:n="Tus últimas 4 semanas"}={}){if(!t.length)return"";const{dates:r,rows:i}=Fo(e,t,a,s,o),l=B(r[0],{day:"numeric",month:"short"}).replace(/\./g,"");return`<section class="card momentum-card">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${c("grid")} Constancia</p>
        <h2>${d(n)}</h2>
      </div>
      <span class="field-caption">${d(l)} → ${d(B(r[r.length-1],{day:"numeric",month:"short"}))}</span>
    </div>
    <p class="momentum-hint">Marca o quita un hábito.</p>
    <div class="momentum-scroll">
      <div class="momentum-grid" style="--cols:${a}">
        <span class="momentum-corner"></span>
        ${r.map(u=>`<span class="momentum-day ${u===o?"is-today":""}">${u.slice(8,10)}</span>`).join("")}
        ${i.map(u=>`
          <span class="momentum-name" title="${d(u.habit.name)}">${d(u.habit.name)}</span>
          ${u.cells.map(h=>`<button type="button" class="momentum-cell ${h.done?"is-done":""} ${h.future?"is-future":""} ${h.recorded?"":"is-blank"}"
            ${h.future?"disabled":""} data-action="toggle-habit" data-habit="${u.habit.id}" data-date="${h.date}" aria-pressed="${h.done}"
            aria-label="${d(u.habit.name)} · ${B(h.date)} · ${h.done?"cumplido":"sin cumplir"}">
            <i></i>
          </button>`).join("")}
        `).join("")}
      </div>
      <div class="momentum-weekdays" style="--cols:${a}">
        <span class="momentum-corner"></span>
        ${r.map(u=>`<span class="${rs(u)==="L"?"is-mon":""}">${rs(u)}</span>`).join("")}
      </div>
    </div>
    <div class="momentum-legend">
      <span><i class="lg done"></i> cumplido</span>
      <span><i class="lg"></i> sin registrar</span>
      <span><i class="lg blank"></i> día sin entrada</span>
      <span class="momentum-weekday-note">${so.join(" ")} · cada lunes resaltado</span>
    </div>
  </section>`}function Wn(e=[],t=[],a=y()){return e.length?`<section class="card habit-stats-card">
    <div class="section-heading"><div><p class="eyebrow">${c("chart")}constancia por hábito</p><h2>Cada uno a su ritmo</h2></div><span class="field-caption">últimos 28 días</span></div>
    <ul class="habit-stats-list">
      ${e.map(s=>{const o=Os(t,s.id,28,a),n=_t(t,s.id,a),r=Ns(t,s.id);return`<li class="habit-stat-row">
          <div class="habit-stat-name">
            <strong>${d(s.name)}</strong>
            <small>${Ja(t,s.id)} ${Ja(t,s.id)===1?"día marcado":"días marcados"} en total</small>
          </div>
          <div class="habit-stat-meter"><i style="width:${o.pct}%"></i><span>${o.pct}%</span></div>
          <div class="habit-stat-figures">
            <span title="Racha actual">${c("flame")} <b>${n}</b> d</span>
            <span title="Mejor racha">${c("seal")} <b>${r}</b> d</span>
          </div>
          <div class="habit-stat-actions">
            <button type="button" class="icon-button ghost" data-action="edit-habit" data-habit="${s.id}" aria-label="Renombrar ${d(s.name)}">${c("pen")}</button>
            <button type="button" class="icon-button ghost delete-button" data-action="delete-habit" data-habit="${s.id}" data-name="${d(s.name)}" aria-label="Eliminar ${d(s.name)}">${c("trash")}</button>
          </div>
        </li>`}).join("")}
    </ul>
  </section>`:""}function Vn(e={},t=[]){const a=new Set(t.map(o=>o.name.toLowerCase())),s=(e.suggestedHabits||[]).filter(o=>!a.has(o.toLowerCase())).slice(0,6);return`<section class="card habit-composer">
    <div class="section-heading"><div><p class="eyebrow">${c("plus")}Nueva rutina</p><h2>Añade un hábito</h2></div><span class="field-caption">${t.length}/30</span></div>
    <div class="habit-add">
      <input id="new-habit" maxlength="40" placeholder="Nombre del hábito" aria-label="Nuevo hábito">
      <button type="button" class="button solid small-btn" data-action="add-habit">${c("plus")} Añadir</button>
    </div>
    ${s.length?`
      <p class="field-caption" style="margin-top:16px">Sugerencias</p>
      <div class="tag-picker">
        ${s.map(o=>`<button type="button" class="tag-chip" data-action="add-suggested-habit" data-name="${d(o)}"><span>+ ${d(o)}</span></button>`).join("")}
      </div>`:""}
    ${t.length?"":'<p class="habit-empty">Sin hábitos.</p>'}
  </section>`}function Zn(e={},t={},a=[],s=null){return`<section class="card counters-board">
    <div class="section-heading">
      <div><p class="eyebrow">${c("drop")} Contadores</p><h2>Lo de hoy, en cifras</h2></div>

    </div>
    ${En(e?.counters||{},s||ue(t),t,{action:"routine"})}
    ${a.length?`<p class="sleep-mood-insight">${c("spark")} ${d(a[0])}</p>`:""}
  </section>`}function Yn(e={},t=y()){const a=e?.goals||[];return`<section class="card tomorrow-board">
    <div class="section-heading">
      <div><p class="eyebrow">${c("sail")} Para mañana</p><h2>Tareas de mañana</h2></div>
      <button type="button" class="text-button" data-action="add-goal-routine">${c("plus")} Añadir tarea</button>
    </div>
    <label class="sr-only" for="routine-tomorrow">Intención para mañana</label>
    <textarea id="routine-tomorrow" class="tomorrow-intent" name="tomorrow" maxlength="600" rows="2"
      placeholder="Mañana quiero…">${d(e?.tomorrow||"")}</textarea>
    <div class="task-list" id="routine-goals">
      ${a.length?a.map((s,o)=>`<div class="task-row">
        <span class="task-index">${String(o+1).padStart(2,"0")}</span>
        <input class="task-input" data-index="${o}" value="${d(s)}" maxlength="200" aria-label="Tarea ${o+1}">
        <button type="button" class="icon-button ghost delete-button" data-action="remove-goal-routine" data-index="${o}" aria-label="Quitar tarea">${c("close")}</button>
      </div>`).join(""):'<p class="habit-empty">Sin tareas para mañana.</p>'}
    </div>
  </section>`}function Jn(e=[],t=null,a=[],s=y()){const o=e.filter(l=>t?.habits?.[l.id]).length,n=e.length?Math.round(o/e.length*100):0,r=e.length?Math.max(0,...e.map(l=>_t(a,l.id,s))):0,i=B(me(s),{day:"numeric",month:"short"});return`<section class="card routine-teaser">
    <div class="section-heading">
      <div><p class="eyebrow">${c("listChecks")} Rutina de hoy</p><h2>${o}/${e.length||0} ${e.length===1?"hábito":"hábitos"}</h2></div>
      ${oo(n,`${n}%`)}
    </div>
    <p class="routine-teaser-note">${e.length?`Semana del ${d(i)}.`:"Sin hábitos."}</p>
    <button type="button" class="text-button full-link" data-view="routine">Ir a Rutina ${c("arrow")}</button>
    ${r?`<span class="routine-teaser-flame">${c("flame")} racha de ${r} días</span>`:""}
  </section>`}const O=document.querySelector("#app"),ht=No([...document.querySelectorAll("script[src]")].map(e=>e.src),window.location.origin);let A=[],M=[],R=[],m=xt(),Ye="",j="diary",S=y(),K=y(),Et=y(),V="shore",le="hoy",Je={text:"",mood:null,sea:"breeze",force:3},Z=!1,ze=7,Y=!1,W=!1,Lt="",Tt="",Dt="",jt="grid",fe="list",se="pulse",de="personal",Re=null,Fe=null,Ha=0,Fa=0,Nt=0,Pa=0,Ge=!1,nt=!1,na=!1,Ot=null,is=0,ls="",gt="idle",cs=!1,te=!0,re=!0,At=null,ke=!1,rt=!1,ds=null;const Ht=Oo();let $a=null;function Ue(){te=!!!$a?.matches&&!m.reduceMotion,document.documentElement.dataset.motion=te?"full":"calm"}try{$a=window.matchMedia("(prefers-reduced-motion: reduce)"),Ue(),$a.addEventListener?.("change",Ue)}catch{Ue()}function Me(e,t=m){const a=ee.find(s=>s.id===e)||ee[0];document.documentElement.dataset.theme=a.id;try{const s=bn(a.id,t);let o=document.querySelector('link[rel="icon"]');o||(o=document.createElement("link"),o.rel="icon",document.head.appendChild(o)),o.type="image/svg+xml",o.href=s;const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",a.colors[0]),document.title=t?.name?`Cuaderno de ${t.name}`:"Diario"}catch{}}function ra(){A=aa(),M=kt(),R=Ne(),m=xt(),W=!!m.sidebarCollapsed,Ue(),Me(m.theme,m)}try{ra()}catch(e){Ye="No se han podido leer los datos guardados. Revisa el almacenamiento del navegador o recupera una copia. "+e.message}const no=[{label:"Cuaderno",items:[["diary","pen","Hoy"],["archive","book","Archivo"]]},{label:"Bienestar",items:[["routine","listChecks","Rutina"],["stats","chart","Progreso"]]},{label:"Tu espacio",items:[["thoughts","spark","Pensamientos"],["setup","sliders","Ajustes"]]}],Kn=["diary","routine","thoughts","archive","stats"];function ro(){return no.flatMap(e=>e.items)}const it=e=>ro().find(t=>t[0]===e)?.[2]||"Hoy";function wa(){return{view:j,thoughtsTab:V,routineTab:le,archiveTab:fe,statsTab:se,profileTab:de}}function _e(e){return Aa({view:e},ht)}function ae(e=!1){const t=Aa(wa(),ht);window.location.pathname!==t&&window.history[e?"replaceState":"pushState"]({view:j,thoughtsTab:V,routineTab:le,archiveTab:fe,statsTab:se,profileTab:de},"",t)}function io(){const e=jo(window.location.pathname,ht);j=e.view,V=e.thoughtsTab||"shore",ke=e.view==="thoughts"&&V!=="shore",Z=!1,le=e.routineTab||"hoy",fe=e.archiveTab||"list",se=e.statsTab||"pulse",de=e.profileTab||"personal";const t=Aa(wa(),ht);(e.path!==Ls(wa())||window.location.pathname!==t)&&window.history.replaceState({view:j,thoughtsTab:V,routineTab:le,archiveTab:fe,statsTab:se,profileTab:de},"",t)}function us(e,{transition:t=!0,replace:a=!1,instant:s=!1}={}){j=e,Y=!1,re=!0,j==="diary"&&(S=y()),j==="thoughts"&&(V="shore",ke=!1,Z=!1),j!=="thoughts"&&(Z=!1),j==="routine"&&(le="hoy"),j==="archive"&&(fe="list"),j==="stats"&&(se="pulse"),j==="setup"&&(de="personal"),ae(a),x({transition:t,instant:s})}function Xn(e,{transition:t=!0,replace:a=!1}={}){if(Ia(),document.querySelector(".thoughts-entry-wave")&&za(),e==="thoughts"&&j!=="thoughts"&&t&&te){co(()=>us(e,{replace:a,transition:!1,instant:!0}));return}us(e,{transition:t,replace:a})}function lo(e){if(e!=="thoughts")return"";const t=Zt(R).some(a=>a.seen!==!0);return`<span class="nav-dot ${t?"is-new":""}" ${t?"":"hidden"} title="hay pensamientos sin leer"></span>`}function er([e,t,a],s){const o=e==="thoughts"?Zt(R).filter(n=>n.seen!==!0).length:0;return`<a class="nav-item ${j===e?"active":""}" style="--nav-i:${s}" data-view="${e}" href="${_e(e)}" title="${d(a)}" data-tooltip="${d(a)}" ${j===e?'aria-current="page"':""}>
    <span class="nav-index">${String(s+1).padStart(2,"0")}</span>
    <span class="nav-item-icon">${c(t)}${o?'<i class="nav-icon-ping" aria-hidden="true"></i>':""}</span>
    <span class="nav-label">${d(a)}</span>${lo(e)}
  </a>`}function tr(){let e=0;return no.map(t=>`<div class="nav-group">
    <p class="nav-group-label">${d(t.label)}</p>
    ${t.items.map(a=>er(a,e++)).join("")}
  </div>`).join("")}function ar(){return`<nav class="tabbar" aria-label="Navegación inferior">
    ${Kn.map(e=>{const t=ro().find(s=>s[0]===e);if(!t)return"";const a=t[2];return`<a class="tabbar-item ${j===e?"active":""}" data-view="${e}" href="${_e(e)}" ${j===e?'aria-current="page"':""}>
        <span class="tabbar-icon">${c(t[1])}${lo(e)}</span>
        <span class="tabbar-label">${d(a)}</span>
      </a>`}).join("")}
  </nav>`}function sr(){return`
  <div class="sidebar-backdrop" data-action="close-menu" aria-hidden="true"></div>
  <aside class="sidebar" aria-label="Menú principal">
    <div class="sidebar-top-row">
      <a href="${_e("diary")}" class="brand" data-action="today" title="Ir a hoy">
        <span class="brand-mark"><span class="brand-full">diario</span><span class="brand-short">d</span><span class="brand-period">.</span></span>
      </a>
      <button type="button" class="icon-button sidebar-collapse-btn" data-action="toggle-sidebar" aria-label="Plegar o desplegar el menú">
        ${c("left")}
      </button>
    </div>
    <div class="brand-rule"></div>
    <div id="ex-libris-slot">${Ys(m,A.length)}</div>
    <div class="nav-wrap">
      <span class="nav-rail" aria-hidden="true"></span>
      <nav class="sidebar-nav" id="sidebar-nav" aria-label="Navegación principal">${tr()}</nav>
    </div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <div class="topbar-left">
        <a class="mobile-brand" data-view="diary" href="${_e("diary")}" aria-label="Ir a Hoy">diario<span>.</span></a>
        <span class="mobile-page-name" id="mobile-page-name">${d(it(j))}</span>
        <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="false">${c("menu")}</button>
        <button class="icon-button ghost desktop-sidebar-toggle" data-action="toggle-sidebar" aria-label="Alternar barra lateral">${c("sidebar")}</button>
        <span class="breadcrumb"><span id="breadcrumb-owner">${m.name?`Cuaderno de ${d(m.name)}`:"Diario"}</span> <span>/</span> <span id="breadcrumb-view">${d(it(j))}</span></span>
      </div>
      <div class="topbar-right">
        <a class="icon-button mobile-settings-link" data-view="setup" href="${_e("setup")}" aria-label="Ajustes" title="Ajustes">${c("sliders")}</a>
        <button type="button" id="theme-pill" class="theme-pill" data-action="cycle-theme">
          <span class="topbar-favicon-mini" id="theme-pill-favicon">${xe(m.theme,m)}</span>
          <span id="theme-pill-label"></span>
        </button>
        <button type="button" class="avatar" id="avatar-slot" data-action="open-setup-wizard" title="Personalizar mi perfil, edad y gustos" aria-label="Personalizar mi perfil"></button>
      </div>
    </header>
    <main id="main"></main>
    <div class="tabbar-wrap">
      <span class="tabbar-rail" aria-hidden="true"></span>
      <nav class="tabbar" id="tabbar" aria-label="Navegación inferior">${ar()}</nav>
    </div>
    <footer class="page-footer">
      <span id="footer-motto">${c("leaf")} ${d(m.motto||"Un día a la vez.")}</span>
      <span id="footer-owner">${m.name?`Cuaderno de ${d(m.name)}`:"Diario personal"}</span>
    </footer>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <dialog id="modal"></dialog>`}function or(){si();const e=O.querySelector(".sidebar");e&&(e.classList.add("is-mounting"),setTimeout(()=>e.classList.remove("is-mounting"),900)),window.addEventListener("resize",()=>bt()),document.fonts?.ready?.then(()=>bt())}function bt(){const e=O.querySelector(".nav-wrap"),t=O.querySelector(".nav-rail");if(e&&t){const o=e.querySelector(".nav-item.active")||e.querySelector(".nav-item");o&&(t.style.setProperty("--rail-y",`${o.offsetTop}px`),t.style.setProperty("--rail-h",`${o.offsetHeight}px`),t.classList.add("is-ready"))}const a=O.querySelector("#tabbar"),s=O.querySelector(".tabbar-rail");if(a&&s){const o=a.querySelector(".tabbar-item.active")||a.querySelector(".tabbar-item");o&&(s.style.setProperty("--rail-x",`${o.offsetLeft}px`),s.style.setProperty("--rail-w",`${o.offsetWidth}px`),s.classList.add("is-ready"))}}function nr(){O.classList.toggle("is-thoughts-immersive",j==="thoughts");const e=ee.find(q=>q.id===m.theme)||ee[0],t=O.querySelector(".sidebar"),a=O.querySelector(".sidebar-backdrop"),s=O.querySelector(".mobile-menu");t&&(t.classList.toggle("is-open",Y),t.classList.toggle("is-collapsed",W),t.classList.toggle("is-ready",!0)),a&&a.classList.toggle("is-visible",Y),s&&s.setAttribute("aria-expanded",String(Y));for(const q of[".sidebar-collapse-btn",".desktop-sidebar-toggle"]){const H=O.querySelector(q);H&&(H.title=`${W?"Desplegar menú · Ctrl+B":"Plegar menú · Ctrl+B"}`,H.setAttribute("aria-expanded",String(!W)))}const o=O.querySelector(".sidebar-collapse-btn .icon");o&&(o.outerHTML=c(W?"right":"left")),O.querySelectorAll("#sidebar-nav .nav-item, #tabbar .tabbar-item").forEach(q=>{const H=q.dataset.view===j;q.classList.toggle("active",H),H?q.setAttribute("aria-current","page"):q.removeAttribute("aria-current")}),po();const n=O.querySelector("#ex-libris-slot");n&&(n.innerHTML=Ys(m,A.length));const r=O.querySelector("#breadcrumb-owner");r&&(r.textContent=m.name?`Cuaderno de ${m.name}`:"Diario");const i=O.querySelector("#breadcrumb-view");i&&(i.textContent=it(j)),document.title=`${it(j)} · ${m.name?`Cuaderno de ${m.name}`:"Diario personal"}`;const l=O.querySelector("#mobile-page-name");l&&(l.textContent=it(j));const u=O.querySelector("#theme-pill-label");u&&(u.textContent=e.name);const h=O.querySelector("#theme-pill");h&&(h.title=`Cambiar papel e icono · ${e.name}`);const g=O.querySelector("#theme-pill-favicon");g&&(g.innerHTML=xe(m.theme,m));const p=O.querySelector("#avatar-slot");p&&(p.innerHTML=m.name?`<span class="avatar-initial">${d(m.name.slice(0,1).toUpperCase())}</span>`:c("user"));const v=O.querySelector("#footer-motto");v&&(v.innerHTML=`${c("leaf")} ${d(m.motto||"Un día a la vez.")}`);const f=O.querySelector("#footer-owner");f&&(f.textContent=m.name?`Cuaderno de ${m.name}`:"Diario personal"),bt()}function x(e={}){Me(m.theme,m),cs||(O.innerHTML=sr(),cs=!0,or()),lr(e),nr(),!m.completed&&!rt&&(rt=!0,fo(1,{mandatory:!0}))}function za(){Ht.cancel(),document.querySelector(".thoughts-entry-wave")?.remove()}function co(e=()=>{}){if(za(),!te){e();return}const t=Ht.begin(),a=document.createElement("div");a.className="thoughts-entry-wave",a.setAttribute("aria-hidden","true"),a.innerHTML=`<svg class="thoughts-entry-water" viewBox="0 0 1440 1400" preserveAspectRatio="none" aria-hidden="true">
    <defs><linearGradient id="thoughts-entry-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop class="entry-stop entry-stop-surface" offset="0%"/><stop class="entry-stop entry-stop-mid" offset="36%"/><stop class="entry-stop entry-stop-deep" offset="100%"/>
    </linearGradient></defs>
    <path class="thoughts-entry-sea" d="M-40 112C75 80 166 83 276 105S478 137 602 103 816 72 943 102 1160 137 1284 103 1410 83 1480 108V1400H-40Z"/>
    <path class="thoughts-entry-crest" d="M-40 112C75 80 166 83 276 105S478 137 602 103 816 72 943 102 1160 137 1284 103 1410 83 1480 108"/>
    <path class="thoughts-entry-foam" d="M-40 132C100 110 201 114 330 128S559 146 682 125 902 109 1030 127 1260 145 1380 121 1450 116 1480 126"/>
  </svg>`,document.body.appendChild(a);const s=a.querySelector(".thoughts-entry-water");if(!s){e(),a.remove();return}let o="cover",n=setTimeout(l,900);const r=()=>{Ht.isCurrent(t)&&(clearTimeout(n),a.remove())};function i(u){u.target!==s||u.propertyName!=="transform"||(o==="cover"?l():o==="reveal"&&r())}function l(){o!=="cover"||!Ht.isCurrent(t)||(clearTimeout(n),o="covered",s.style.transition="none",s.style.transform="translateY(0)",e(),requestAnimationFrame(()=>{s.getBoundingClientRect(),s.style.transition="transform .78s cubic-bezier(.55,.05,.35,1)",o="reveal",s.addEventListener("transitionend",i),s.style.transform="translateY(-115%)",n=setTimeout(r,900)}))}s.addEventListener("transitionend",i),s.getBoundingClientRect(),requestAnimationFrame(()=>{s.style.transform="translateY(0)"})}function ps(){const e=document.querySelector(".thoughts-ocean-stage");if(!e)return;const t=Ps(new Date);e.dataset.dayphase=t.phase,e.style.setProperty("--sun-x",`${t.x}%`),e.style.setProperty("--sun-y",`${t.y}%`),e.style.setProperty("--moon-x",`${t.moonX}%`),e.style.setProperty("--moon-y",`${t.moonY}%`)}function rr(){At&&(clearInterval(At),At=null),j==="thoughts"&&(ps(),At=setInterval(ps,6e4))}function ir(){Z=!Z;const e=document.querySelector(".thoughts-world"),t=document.querySelector(".thoughts-landscape-toggle");if(e?.classList.toggle("is-landscape-only",Z),!t)return;const a=Z?"Mostrar interfaz":"Ocultar interfaz";t.setAttribute("aria-label",a),t.setAttribute("aria-pressed",String(Z)),t.title=Z?"Mostrar interfaz":"Ver paisaje sin interfaz";const s=t.querySelector(".icon");s&&(s.outerHTML=c(Z?"eye":"expand"))}function lr(e={}){const t=document.querySelector("#main");if(!t)return;j==="thoughts"&&ri();const a=ls!==j,s=a&&j==="thoughts",o=te&&!e.instant&&!s&&(!!e.transition||a||re);re=!1;const n=window.scrollY;t.innerHTML=`
    ${Ye?`<div class="error-banner" role="alert">${d(Ye)}</div>`:""}
    ${cr()}`,t.className="",o&&(t.offsetWidth,t.classList.add("page-enter")),di(),Yr(),Gr(),oi(),a?(ls=j,window.scrollTo({top:0,behavior:"auto"})):n&&window.scrollTo(0,n),rr()}function ia(e,t,a,s=""){return`<div class="page-heading">
    <div>${e?`<p class="eyebrow">${e}</p>`:""}<h1>${t}</h1></div>
    ${s}
  </div>`}function cr(){switch(j){case"diary":return ms();case"thoughts":return yr();case"routine":return Sr();case"archive":return Lr();case"stats":return Tr();case"setup":return jr();default:return ms()}}function dr(){return`<div class="day-navigation">
    <button type="button" data-action="previous" aria-label="Día anterior">${c("left")}<span>Anterior</span></button>
    <button type="button" data-action="today" class="today-button">Hoy</button>
    <button type="button" data-action="next" ${S>=y()?"disabled":""}><span>Siguiente</span>${c("right")}</button>
  </div>`}function ur(){return m.completed?"":`<section class="card setup-welcome-banner">
    <div class="setup-welcome-content">
      <span class="soft-icon accent">${c("sliders")}</span>
      <div>
        <h2>Personaliza tu diario</h2>
        <p>Elige tus metas, hábitos y papel.</p>
      </div>
    </div>
    <div class="setup-welcome-actions">
      <button type="button" class="button solid" data-action="open-setup-wizard">${c("sliders")} Personalizar ahora</button>
    </div>
  </section>`}function pr(e,t){const a=e?Object.values(e.habits||{}).filter(Boolean).length:0,s=xn(m.name),o=Vt(R,S).returned.filter(n=>n.seen!==!0).length;return`<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Día</small><span>${$t(S,A)}</span></div>
      <div class="hero-meta">
        <p class="hero-greeting">${d(s)}</p>
        <span class="date-line">${B(S)}</span>
        ${M.length||o?`<p class="hero-line">
          ${M.length?`<button type="button" class="hero-link" data-view="routine">${a}/${M.length} hábitos</button>`:""}
          ${o?`<button type="button" class="hero-link is-new" data-view="thoughts">${o===1?"1 botella nueva":o+" botellas nuevas"}</button>`:""}
        </p>`:""}
      </div>
    </div>
    <div class="hero-right">
      ${dr()}
    </div>
  </div>`}function ma(e,t,a,s,o=!0){const n=s?String(s).trim().split(/\s+/).length:0;return`<div class="writing-field" data-field="${e}">
    <label for="${e}">${t}<span class="word-count">${n} palabras</span></label>
    <textarea id="${e}" name="${e}" maxlength="20000" placeholder="${d(a)}" class="${o?"large":""}">${d(s||"")}</textarea>
  </div>`}function mr(e){const t=oe(m);return t.length?`<div class="entry-parts">
    ${t.map(a=>{const s=`part_${a.key}`,o=e?.parts?.[a.key]||"",n=`<label for="${s}">${d(a.label)}${a.hint?`<small>${d(a.hint)}</small>`:""}</label>`,r=a.type==="line"?`<input id="${s}" name="${s}" class="clean-line-input" maxlength="600" value="${d(o)}">`:`<textarea id="${s}" name="${s}" maxlength="4000" rows="3">${d(o)}</textarea>`;return`<div class="writing-field part-field" data-part="${a.key}">${n}${r}</div>`}).join("")}
  </div>`:""}function hr(e){const t=oe(m).filter(a=>String(e?.parts?.[a.key]||"").trim());return t.length?`<div class="sheet-parts">${t.map(a=>`
    <div class="sheet-part"><span>${d(a.label)}</span><p>${d(e.parts[a.key])}</p></div>`).join("")}</div>`:""}function gr(e=""){return`<div class="goal-row"><span class="goal-circle"></span>
    <input name="goal" aria-label="Objetivo para mañana" placeholder="Un objetivo concreto…" maxlength="500" value="${d(e)}">
    <button type="button" class="icon-button ghost" data-action="remove-goal" aria-label="Eliminar objetivo">${c("close")}</button>
  </div>`}function br(e,t){if(!e)return"";const a=M.filter(o=>e.habits?.[o.id]),s=m.name?`Cuaderno de ${m.name}`:"Resumen del día";return`<section class="card daily-summary notebook-sheet reveal">
    <div class="sheet-header">
      <div>
        <p class="eyebrow">${c("book")} Día ${$t(e.date,A)}</p>
        <h2>${B(e.date)}</h2>
      </div>
      <span class="mood-tag" style="--mood:${P[e.mood-1].color}">${P[e.mood-1].emoji} ${P[e.mood-1].label}</span>
    </div>
    ${e.wordOfDay||e.capsule?`
      <div class="sheet-capsules">
        ${e.wordOfDay?`<div class="sheet-capsule-item"><span>Palabra del día</span><strong>«${d(e.wordOfDay)}»</strong></div>`:""}
        ${e.capsule?`<div class="sheet-capsule-item"><span>${d(t.capsuleLabel)}</span><strong>${d(e.capsule)}</strong></div>`:""}
      </div>
    `:""}
    <p class="sheet-narrative">${Ro(e)}</p>
    ${e.bestOfDay?`<div class="sheet-quote-note"><span>Lo mejor:</span> «${d(e.bestOfDay)}»</div>`:""}
    ${hr(e)}
    ${a.length?`<div class="sheet-habits-line">${c("check")} ${a.map(o=>`<b>${d(o.name)}</b>`).join(" · ")}</div>`:""}
    <div class="sheet-footer">
      <small>${d(s)} · ${wt(e)} palabras</small>
      <button type="button" class="text-button" data-action="read" data-date="${e.date}">Ver hoja completa ${c("arrow")}</button>
    </div>
  </section>`}function fr(e){return e?!!(e.bestOfDay||e.differentToday||e.tomorrow||e.energy||e.stress||e.tags&&e.tags.length||e.gratitude&&e.gratitude.some(Boolean)):!1}function ms(){const e=A.find(h=>h.date===S),t=Q(m),a=na?{triggered:!1}:Da(e||{}),s=ya(S,Nt),o=e?.mood?P[e.mood-1].color:"",n=e?.sleepHours??m.sleepGoal??t.sleepRecommended??7.5,r=e?.studyHours??0,i=Re===null?fr(e):Re,l=[6,7,7.5,8,9],u=[0,1,2,3,4];return`
  ${ur()}
  ${pr(e)}
  <div class="section-rule" aria-hidden="true"></div>
  <div id="crisis-alert-slot">${Xs(a,m)}</div>
  <div class="diary-layout ${nt?"is-focus-writing":""}">
    <div class="diary-main">
      <form id="diary-form" style="${o?`--active-mood:${o}`:""}" autocomplete="off">
        <!-- 1 · CAPTURA RÁPIDA -->
        <section class="card mood-card-section quick-capture">
          <div class="section-heading">
            <p class="section-index" style="margin-bottom:0">¿Cómo ha ido hoy?</p>
          </div>
          <div class="mood-scale" role="radiogroup" aria-label="¿Cómo te ha ido?">
            ${P.map(h=>`<label class="mood-option" style="--mood-color:${h.color}">
              <input type="radio" name="mood" value="${h.value}" ${(e?.mood||0)===h.value?"checked":""}>
              <span class="mood-face">${h.emoji}</span>
              <span class="mood-label">${h.label}</span>
            </label>`).join("")}
          </div>

          <div class="quick-hours-strip">
            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="sleepHours">${c("moon")} Sueño</label>
                <div class="quick-pills" role="group" aria-label="Atajos de sueño">
                  ${l.map(h=>`<button type="button" class="quick-pill ${Number(n)===h?"active":""}" data-action="quick-number" data-target="sleepHours" data-val="${h}">${C(h)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="sleepHours" name="sleepHours" type="number" min="0" max="24" step="0.5" value="${n}">
                <span>h · Meta ${C(m.sleepGoal||t.sleepRecommended)}</span>
              </div>
            </div>

            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="studyHours">${c("study")} ${d(t.focusLabel)}</label>
                <div class="quick-pills" role="group" aria-label="Atajos de dedicación">
                  ${u.map(h=>`<button type="button" class="quick-pill ${Number(r)===h?"active":""}" data-action="quick-number" data-target="studyHours" data-val="${h}">${C(h)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="studyHours" name="studyHours" type="number" min="0" max="24" step="0.5" value="${r}">
                <span>h · Meta ${C(m.studyGoal??t.studyRecommended)}</span>
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
                ${c("spark")} Sugerir tema
              </button>
              <button type="button" class="icon-button ghost" data-action="toggle-focus-writing" title="${nt?"Salir del modo enfoque":"Ampliar zona de escritura"}" aria-label="Modo enfoque">
                ${c("expand")}
              </button>
            </div>
          </div>
          <div id="writing-prompt-box" class="writing-prompt-banner ${Ge?"is-open":""}" ${Ge?"":"hidden"}>
            <div>
              <p id="writing-prompt-text">${d(s)}</p>
            </div>
            <div class="writing-prompt-actions">
              <button type="button" class="button outline small-btn" data-action="next-writing-prompt">${c("refresh")} Otra</button>
              <button type="button" class="button solid small-btn" data-action="insert-writing-prompt">${c("pen")} Usar</button>
            </div>
          </div>
          ${ma("generalDay","Notas del día",t.placeholders.generalDay,e?.generalDay,!0)}
          ${mr(e)}
          <div class="capsule-word-grid">
            <div class="writing-field" data-field="capsule">
              <label for="capsule">${c("spark")} ${d(t.capsuleLabel)}</label>
              <input id="capsule" name="capsule" class="clean-line-input" maxlength="300" placeholder="${d(t.capsulePlaceholder)}" value="${d(e?.capsule||"")}">
            </div>
            <div class="writing-field" data-field="wordOfDay">
              <label for="wordOfDay">${c("book")} Palabra del día</label>
              <input id="wordOfDay" name="wordOfDay" class="clean-line-input" maxlength="60" placeholder="Una palabra que resuma hoy…" value="${d(e?.wordOfDay||"")}">
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
            <span class="extras-chevron">${c("chevronDown")}</span>
          </button>
          <div id="extras-panel" class="extras-work-shell" ${i?"":"hidden"}>
            <div class="extras-inner">
              <section class="card">
                <p class="section-index">Etiquetas de hoy</p>
                ${qn(e?.tags||[],t.tags)}
              </section>

              <section class="card">
                <p class="section-index">Momentos y energía</p>
                <div class="scale-block" style="margin-bottom:16px">
                  ${ss("energy",ks,e?.energy,"bolt","Energía","Del 1 al 5","Opcional")}
                  ${ss("stress",xs,e?.stress,"storm","Estrés","Del 1 al 5","Opcional")}
                </div>
                ${ma("bestOfDay","Lo mejor del día",t.placeholders.bestOfDay,e?.bestOfDay,!1)}
                ${ma("differentToday","¿Qué ha sido distinto hoy?",t.placeholders.differentToday,e?.differentToday,!1)}
              </section>

              <section class="card">
                <p class="section-index">Tres cosas buenas</p>
                <div class="gratitude-fields">
                  ${["1. Hoy agradezco o valoro...","2. También...","3. Y además..."].map((h,g)=>`<label><span>0${g+1}</span><input name="gratitude${g}" aria-label="${h}" placeholder="${h}" maxlength="20000" value="${d(e?.gratitude?.[g]||"")}"></label>`).join("")}
                </div>
              </section>
            </div>
          </div>
        </div>

        <div class="save-area">
          <button class="button solid save-button" type="submit" ${Ye?"disabled":""}>${c("stamp")} Guardar día</button>
        </div>
      </form>
      ${br(e,t)}
    </div>

    <aside class="diary-aside">
      ${vr()}
      <div id="inspiration-slot">${eo(S,Ha,Fa,m,e,e?.wordOfDay||"")}</div>
      ${Jn(M,e,A,S)}
      ${uo()}
      <div id="quote-slot">${Ks(S,Pa,m)}</div>
    </aside>
  </div>`}function vr(){const t=Vt(R,S).returned.filter(n=>n.seen!==!0).length,a=t?"Recibidas":"Pensamientos",s=t?`${t} ${t===1?"nueva":"nuevas"}`:"",o=R.length?`${R.length} ${R.length===1?"nota":"notas"}`:"Vacío";return`<section class="card thoughts-teaser ${t?"has-new":""}">
    <div class="thoughts-teaser-heading">
      <span class="soft-icon ${t?"accent":""}">${c("spark")}</span>
      <div><p class="eyebrow">Pensamientos</p><h2>${d(a)}</h2></div>
    </div>
    ${s?`<p class="thoughts-teaser-copy">${d(s)}</p>`:""}
    <div class="thoughts-teaser-footer">
      <span>${d(o)}</span>
      <button type="button" class="text-button" data-view="thoughts">Abrir ${c("arrow")}</button>
    </div>
  </section>`}function uo(){const e=me(S),t=D(e,6),a=ie(A,e,t),s=De(a);return`<section class="card week-preview">
    <div class="section-heading"><h2>Esta semana</h2><span class="tag">${a.length}/7 días</span></div>
    <div class="week-dots">
      ${Array.from({length:7},(o,n)=>{const r=D(e,n),i=a.find(l=>l.date===r);return`<button type="button" data-action="open-day" data-date="${r}" ${r>y()?"disabled":""} aria-label="${B(r)}${i?", "+P[i.mood-1].label:""}">
          <span>${["L","M","X","J","V","S","D"][n]}</span>
          <i class="${i?"filled":""} ${r===y()?"current":""}" style="--mood:${i?P[i.mood-1].color:""}">${i?c("check"):"·"}</i>
        </button>`}).join("")}
    </div>
    <div class="mini-metrics">
      <div>${c("heart")}<strong>${s.count?C(s.mood):"—"}<small>/5</small></strong><span>Ánimo</span></div>
      <div>${c("moon")}<strong>${s.count?C(s.sleep):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${c("study")}<strong>${s.count?C(s.study):"—"}<small>h</small></strong><span>Enfoque</span></div>
    </div>
    <button class="text-button full-link" data-view="stats">Ver progreso ${c("arrow")}</button>
  </section>`}function yr(){const e=y(),t=Vt(R,e),a=[["shore","spark","Recibidas",t.returned.length],["sea","send","Enviadas",t.drifting.length],["kept","bookmark","Guardadas",t.kept.length],["lost","history","Perdidas",t.lost.length]],s=R.length,o=t.returned.filter(r=>r.seen!==!0).length,n=o===1?"1 nueva":`${o} nuevas`;return`<div class="thoughts-world${Z?" is-landscape-only":""}">
    <a class="thoughts-exit" data-view="diary" href="${_e("diary")}" aria-label="Volver al diario" title="Volver al diario">
      ${c("left")}
    </a>
    <button type="button" class="thoughts-landscape-toggle" data-action="toggle-thoughts-landscape" aria-label="Ocultar interfaz" title="Ver paisaje sin interfaz" aria-pressed="${Z}">${c(Z?"eye":"expand")}</button>
    ${Fn(R,e)}
    <section class="thoughts-compose-dock" aria-labelledby="thoughts-compose-title">
      <h2 id="thoughts-compose-title">Escribe una botella</h2>
      <div id="composer-slot">${Pn(m,e,Je)}</div>
    </section>
    <details id="thoughts-bottles-drawer" class="thoughts-bottles-drawer"${ke?" open":""}>
      <summary class="thoughts-drawer-toggle" aria-label="Ver tus botellas${o?`, ${n}`:""}">
        ${c("book")}<span>Botellas</span>
        ${o?`<span class="thoughts-drawer-new">${n}</span>`:""}
        <span class="thoughts-drawer-count">${s}</span>
        <span class="thoughts-drawer-chevron">${c("chevronDown")}</span>
      </summary>
      <section class="thoughts-drawer-panel" aria-label="Tu isla y tus botellas">
        <header class="thoughts-drawer-header">
          <div><p class="island-kicker">La orilla</p><h2>Tu isla</h2></div>
          <span class="thoughts-drawer-returned">${t.returned.length} recibidas</span>
        </header>
        <div class="thoughts-island-bottles">
          <div class="segmented ocean-tabs" role="tablist" aria-label="Estado de las botellas">
            ${a.map(([r,i,l,u])=>`<button type="button" id="thoughts-tab-${r}" role="tab" aria-controls="ocean-body" aria-selected="${V===r}" data-action="thoughts-tab" data-tab="${r}" class="${V===r?"active":""}">
              ${c(i)} <span>${d(l)}</span>${u||r==="sea"||r==="lost"?`<span class="seg-count">${u}</span>`:""}
            </button>`).join("")}
          </div>
          <div id="ocean-body" role="tabpanel" aria-labelledby="thoughts-tab-${V}">${$r(t,e)}</div>
        </div>
      </section>
    </details>
  </div>`}function $r(e,t){if(V==="sea")return os(e.drifting.length,"sent");if(V==="lost")return os(e.lost.length,"lost");const s={shore:e.returned,sea:[],kept:e.kept,lost:[]}[V]??e.returned;return s.length?`<div class="bottle-grid">${s.map((o,n)=>zn(o,t,n)).join("")}</div>`:wr(V)}function wr(e){const t={shore:["La orilla está vacía","Aquí aparecerán las botellas recibidas."],sea:["Mar en calma","Las botellas que envíes aparecerán aquí."],kept:["Sin botellas guardadas","Guarda las recibidas que quieras conservar."],lost:["Sin botellas perdidas",""]},[a,s]=t[e]||t.shore,o=e==="shore"||e==="sea"?`<button type="button" class="button outline" data-action="focus-composer">${c("pen")} Escribir</button>`:"";return`${Bt(a,s,o)}`}function Sr(){const e=A.find(a=>a.date===S);return`${ia("Hoy","Rutina","",`
    <div class="segmented">
      ${[["hoy","listChecks","Hoy"],["week","grid","Semana"],["counters","drop","Contadores"],["streaks","flame","Rachas"]].map(([a,s,o])=>`<button type="button" data-action="routine-tab" data-tab="${a}" class="${le===a?"active":""}">${c(s)} ${d(o)}</button>`).join("")}
    </div>
  `)}
  <div class="routine-layout">
    <div class="routine-main tab-panel-enter">
      ${xr(e)}
      <div id="routine-body">${Mr(e)}</div>
    </div>
    <aside class="routine-aside">${Cr(e)}</aside>
  </div>`}function kr(){return`<div class="day-navigation">
    <button type="button" data-action="shift-day" data-delta="-1" aria-label="Día anterior">${c("left")}<span>Anterior</span></button>
    <button type="button" data-action="today-routine" ${S===y()?"disabled":""}>${c("sun")} Hoy</button>
    <button type="button" data-action="shift-day" data-delta="1" ${S>=y()?"disabled":""}><span>Siguiente</span>${c("right")}</button>
  </div>`}function xr(e){const t=M.filter(n=>e?.habits?.[n.id]).length,a=M.length?Math.round(t/M.length*100):0,s=M.length?t===0?"Aún no has marcado nada":t===M.length?"Rutina completa":`Vas a ${t} de ${M.length}`:"Tu lista está vacía",o=a>=100?"Lista completa.":a>0?"Buen ritmo.":"Un paso basta.";return`<section class="card routine-hero">
    <div class="routine-hero-copy">
      <p class="eyebrow">${c("sun")} ${d(B(S,{weekday:"long",day:"numeric",month:"long"}))}</p>
      <h2>${d(s)}</h2>
      <p class="routine-hero-note">${d(o)}</p>
      ${kr()}
    </div>
    ${oo(a,M.length?`${a}%`:"—","de hoy")}
  </section>`}function Mr(e){const t=Q(m),a=y();if(le==="week")return`${Qn(A,M,{days:35,end:a,today:a,title:"Tus últimas cinco semanas"})}${qr()}`;if(le==="counters"){const s=ie(A,D(a,-27),a);return`${Zn(e,m,[])||""}${Js(s,m)}`}return le==="streaks"?M.length?`${Wn(M,A,a)}${Er()}`:Bt("Sin hábitos","Añade uno.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="hoy">${c("plus")} Añadir</button>`):`${M.length?`<section class="card habit-board-card">
    <div class="section-heading">
      <div><p class="eyebrow">${c("listChecks")} Hoy</p><h2>Hábitos</h2></div>
      <span class="field-caption">${M.filter(s=>e?.habits?.[s.id]).length}/${M.length}</span>
    </div>
    ${_n(M,e,A,S,a)}
  </section>`:Bt("Sin hábitos","Añade uno.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="streaks">${c("flame")} Rachas</button>`)}
  ${Yn(e,S)}
  ${Vn(t,M)}`}function qr(){const e=me(S),t=D(e,6),a=ie(A,e,t),s=M.map(o=>{const n=a.filter(r=>r.habits?.[o.id]).length;return{label:o.name,count:n,total:7,color:n>=5?"var(--green)":n>=3?"var(--ochre)":"var(--red)"}});return`<section class="card">
    <div class="section-heading"><div><p class="eyebrow">${c("week")}Esta semana</p><h2>${d(B(e,{day:"numeric",month:"short"}))} → ${d(B(t,{day:"numeric",month:"short"}))}</h2></div>
      <span class="tag">${a.length}/7 días con entrada</span></div>
    ${M.length?ja(s):'<p class="habit-empty">Añade hábitos para ver su semana.</p>'}
  </section>`}function Er(){const e=M.map(a=>({h:a,best:Ns(A,a.id),live:_t(A,a.id)})).filter(a=>a.best>0).sort((a,s)=>s.best-a.best).slice(0,6);if(!e.length)return"";const t=e[0].best||1;return`<section class="card streak-board">
    <div class="section-heading"><div><p class="eyebrow">${c("flame")}El muro de las rachas</p><h2>Tus mejores series</h2></div><span class="field-caption">días seguidos</span></div>
    <ol class="streak-ranks">
      ${e.map((a,s)=>`<li>
        <span class="streak-rank">${String(s+1).padStart(2,"0")}</span>
        <span class="streak-name">${d(a.h.name)}</span>
        <span class="streak-bar"><i style="width:${Math.max(6,Math.round(a.best/t*100))}%"></i></span>
        <span class="streak-num"><b>${a.best}</b> d${a.live?` · viva ${a.live}`:""}</span>
      </li>`).join("")}
    </ol>
  </section>`}function Ar(){return M.length?A.filter(e=>M.every(t=>e.habits?.[t.id])).length:0}function Cr(e){const t=y(),a=ie(A,D(t,-27),t),s=e?Math.min(100,Math.round(e.sleepHours/(m.sleepGoal||7.5)*100)):0;return`
  <section class="card routine-day-card">
    <div class="section-heading"><h2>El día en cifras</h2><span class="tag">${d(B(S,{day:"numeric",month:"short"}))}</span></div>
    <div class="mini-metrics">
      <div>${c("moon")}<strong>${e?C(e.sleepHours):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${c("study")}<strong>${e?C(e.studyHours):"—"}<small>h</small></strong><span>Enfoque</span></div>
      <div>${c("drop")}<strong>${e?.counters?.water||0}<small>v</small></strong><span>Agua</span></div>
    </div>
    ${e?`<div class="sleep-goal-bar"><span style="width:${s}%"></span></div>
      <p class="field-caption">${d(Hs(e.sleepHours))}</p>`:'<p class="habit-empty">Este día no tiene entrada en el cuaderno.</p>'}
    <button type="button" class="text-button full-link" data-action="open-day" data-date="${S}">Escribir sobre este día ${c("arrow")}</button>
  </section>
  <section class="card">
    <div class="section-heading"><h2>Rachas del cuaderno</h2><span class="field-caption">28 días</span></div>
    <div class="streak-lines">
      <div><span>${c("flame")} Días seguidos escribiendo</span><strong>${Ds(A)}</strong></div>
      <div><span>${c("seal")} Mejor racha histórica</span><strong>${Ca(A)}</strong></div>
      <div><span>${c("check")} Días con toda la rutina</span><strong>${Ar()}</strong></div>
      <div><span>${c("moon")} Sueño medio</span><strong>${a.length?C(De(a).sleep):"—"} h</strong></div>
    </div>
  </section>
  ${uo()}`}function Lr(){const e=[...new Set(A.flatMap(a=>a.tags||[]))],t=A.filter(a=>(!Tt||a.mood===+Tt)&&(!Dt||(a.tags||[]).includes(Dt))&&(!Lt||[a.date,a.generalDay,a.bestOfDay,a.differentToday,a.tomorrow,a.wordOfDay,a.capsule,...a.gratitude,...a.goals||[],...a.tags||[]].join(" ").toLocaleLowerCase().includes(Lt.toLocaleLowerCase()))).sort((a,s)=>s.date.localeCompare(a.date));return`${ia("Cuaderno","Archivo","",`
    <div class="segmented">
      <button type="button" data-action="archive-tab" data-tab="list" class="${fe==="list"?"active":""}">${c("book")} Lista</button>
      <button type="button" data-action="archive-tab" data-tab="calendar" class="${fe==="calendar"?"active":""}">${c("calendar")} Calendario</button>
    </div>
  `)}

  ${fe==="calendar"?`
    <div class="tab-panel-enter">
      <section class="card full-calendar">
        ${An(K,A,{selected:S})}
        <div class="mood-legend">
          ${P.map(a=>`<span><i style="background:${a.color}"></i>${a.label}</span>`).join("")}
        </div>
      </section>
    </div>
  `:`
    <div class="tab-panel-enter">
      <div class="history-controls">
        <label class="search-box">${c("search")}<input id="history-search" aria-label="Buscar en el diario" placeholder="Buscar por palabra, nota o etiqueta…" value="${d(Lt)}"></label>
        <select id="history-mood" aria-label="Filtrar por estado de ánimo">
          <option value="">Todos los estados</option>
          ${P.map(a=>`<option value="${a.value}" ${Tt==a.value?"selected":""}>${a.emoji} ${a.label}</option>`).join("")}
        </select>
        ${e.length?`
          <select id="history-tag" aria-label="Filtrar por etiqueta">
            <option value="">Todas las etiquetas</option>
            ${e.map(a=>`<option value="${d(a)}" ${Dt===a?"selected":""}>#${d(a)}</option>`).join("")}
          </select>
        `:""}
        <div class="segmented">
          <button type="button" data-action="history-layout" data-layout="grid" class="${jt==="grid"?"active":""}">Tarjetas</button>
          <button type="button" data-action="history-layout" data-layout="timeline" class="${jt==="timeline"?"active":""}">Hilo</button>
        </div>
      </div>
      <div class="${jt==="timeline"?"history-timeline":"history-grid"}">
        ${t.length?t.map((a,s)=>{const o=Object.values(a.habits||{}).filter(Boolean).length;return`<article class="card history-card" style="--mood:${P[a.mood-1].color};--i:${Math.min(s,10)}">
            <div class="section-heading">
              <p class="eyebrow">Día ${$t(a.date,A)}</p>
              <span class="mood-tag" style="--mood:${P[a.mood-1].color}">${P[a.mood-1].emoji} ${P[a.mood-1].label}</span>
            </div>
            <h2>${B(a.date,{day:"numeric",month:"long",year:"numeric"})}</h2>
            <p class="entry-excerpt">${d(a.generalDay)}</p>
            ${a.wordOfDay||a.capsule?`
              <div class="history-capsules">
                ${a.wordOfDay?`<span class="history-word-pill">«${d(a.wordOfDay)}»</span>`:""}
                ${a.capsule?`<span class="history-capsule-pill">${c("spark")} ${d(a.capsule)}</span>`:""}
              </div>
            `:""}
            <div class="history-numbers">
              <span class="chiplet">${c("moon")} ${C(a.sleepHours)} h</span>
              <span class="chiplet">${c("study")} ${C(a.studyHours)} h</span>
              ${M.length?`<span class="chiplet">${c("check")} ${o}/${M.length}</span>`:""}
              <span class="chiplet">${c("pen")} ${wt(a)} pal.</span>
            </div>
            <div class="history-actions">
              <button class="text-button" data-action="read" data-date="${a.date}">Abrir ${c("arrow")}</button>
              <button class="icon-button ghost" data-action="open-day" data-date="${a.date}" aria-label="Editar">${c("pen")}</button>
              <button class="icon-button ghost delete-button" data-action="delete" data-date="${a.date}" aria-label="Eliminar">${c("trash")}</button>
            </div>
          </article>`}).join(""):Bt(A.length?"Sin resultados":"Sin entradas","")}
      </div>
    </div>
  `}`}function Tr(){return`${ia("Cuaderno","Progreso","",`
    <div class="segmented">
      <button type="button" data-action="stats-tab" data-tab="pulse" class="${se==="pulse"?"active":""}">Pulso y metas</button>
      <button type="button" data-action="stats-tab" data-tab="week" class="${se==="week"?"active":""}">Semana</button>
      <button type="button" data-action="stats-tab" data-tab="month" class="${se==="month"?"active":""}">Mes</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${se==="week"?hs(!1):se==="month"?hs(!0):Dr()}
  </div>`}function Dr(){const e=y(),t=D(e,1-ze),a=ie(A,t,e),s=ie(A,D(t,-ze),D(t,-1)),o=De(a),n=De(s),r=Io(A),i=Ts(A,t,e,e),l=Q(m),u=(h,g)=>{if(a.length<3||s.length<3||o.metricCounts[h]<3||n.metricCounts[h]<3||!Number.isFinite(o[h])||!Number.isFinite(n[h]))return"";const p=o[h]-n[h];return`${p>0?"↑":p<0?"↓":"→"} ${C(Math.abs(p))}${g} vs. anterior`};return`
  <div class="ledger-grid">
    ${ge("Registro",`${i.recorded}/${i.days}`,"días",`${i.pct}% de los días anotados`)}
    ${ge("Ánimo medio",o.metricCounts.mood?C(o.mood):"—","/ 5",u("mood",""))}
    ${ge("Sueño habitual",o.metricCounts.sleep?C(o.sleepMedian):"—","h",o.metricCounts.sleep?`media ${C(o.sleep)} h`:"sin datos")}
    ${ge(l.focusLabel,o.metricCounts.study?C(o.study):"—","h",u("study"," h"))}
    ${ge("Racha actual",Ds(A),"días",`${Ca(A)} días · mejor racha`)}
  </div>
  <p class="analytics-footnote">Solo días registrados.</p>
  ${Js(a,m)}
  <section class="card chart-card">
    <div class="section-heading">
      <h2>Ánimo y sueño</h2>
      <div class="segmented">
        <button type="button" data-action="range" data-range="7" class="${ze===7?"active":""}">7 días</button>
        <button type="button" data-action="range" data-range="30" class="${ze===30?"active":""}">30 días</button>
      </div>
    </div>
    ${Cn(a,t,ze,m)}
  </section>
  <section class="card">
    <div class="section-heading">
      <h2>Últimos 28 días</h2>
      <span class="field-caption">Ánimo por día</span>
    </div>
    ${Ln(A,e,28)}
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Tendencias detectadas</h2>
      <div style="margin-top:10px">
        ${r.length?r.map(h=>`<p class="trend-item">${c("arrow")}<span>${h}</span></p>`).join(""):'<p class="habit-empty">Sin tendencias.</p>'}
      </div>
    </section>
    <section class="card">
      <h2>Etiquetas más frecuentes</h2>
      ${Ka(a).length?ja(Ka(a).slice(0,6).map(([h,g])=>({label:h,count:g,total:a.length,color:"var(--red)"}))):'<p class="habit-empty">Sin etiquetas.</p>'}
    </section>
  </div>`}function hs(e){const t=y(),[a,s]=e?Cs(K):[me(S),D(me(S),6)],o=s>t?t:s,n=a<=o?ie(A,a,o):[],r=De(n),i=Ts(A,a,s,t),l=e?Ee(K,1).slice(0,7)>t.slice(0,7):D(me(S),7)>me(t),u=Q(m),h=e?B(K,{month:"long",year:"numeric"}):`${B(me(S),{day:"numeric",month:"short"})} – ${B(D(me(S),6),{day:"numeric",month:"short",year:"numeric"})}`;return`
  <div class="section-heading period-heading">
    <div><p class="eyebrow">${e?"Resumen mensual":"Resumen semanal"}</p><h2>${h}</h2></div>
    <div class="period-controls">
      <button class="icon-button ghost" data-action="period-prev" data-monthly="${e?"1":"0"}" aria-label="Período anterior">${c("left")}</button>
      <button class="icon-button ghost" data-action="period-next" data-monthly="${e?"1":"0"}" aria-label="Período siguiente" ${l?"disabled":""}>${c("right")}</button>
    </div>
  </div>
  <div class="ledger-grid">
    ${ge("Registro",`${i.recorded}/${i.days}`,"días",i.days?`${i.pct}% de los días transcurridos`:"sin días transcurridos")}
    ${ge("Ánimo medio",r.metricCounts.mood?C(r.mood):"—","/ 5")}
    ${ge("Sueño habitual",r.metricCounts.sleep?C(r.sleepMedian):"—","h",r.metricCounts.sleep?`media ${C(r.sleep)} h`:"sin datos")}
    ${ge(u.focusLabel,r.metricCounts.study?C(r.study):"—","h")}
  </div>
  <p class="analytics-footnote">Solo días transcurridos.</p>
  <section class="card period-summary">
    <span class="soft-icon">${c("leaf")}</span>
    <div>
      <p>${Go(r,e)}</p>
    </div>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Días destacados</h2>
      <div class="highlights" style="grid-template-columns:1fr 1fr">
        ${qt("Mejor día",r.best)}
        ${qt("Más sueño",r.mostSleep,"sleepHours")}
        ${qt("Más dedicación",r.mostStudy,"studyHours")}
        ${qt("Día más difícil",r.worst)}
      </div>
    </section>
    <section class="card">
      <h2>Distribución de estados</h2>
      <div style="margin-top:14px">
        ${ja(P.map((g,p)=>({label:`${g.emoji} ${g.label}`,count:r.moods[p],total:r.count,color:g.color})))}
      </div>
    </section>
  </div>`}function jr(){const e=[["personal","user","Perfil"],["appearance","palette","Apariencia"],["custom","paper","Contenido"],["data","shield","Datos"]],t=e.some(([s])=>s===de)?de:"personal",a={personal:Pr,appearance:zr,custom:Fr,data:Br};return`${ia("","Ajustes")}
    <div class="settings-layout">
      <nav class="settings-subnav" role="tablist" aria-label="Ajustes">
        ${e.map(([s,o,n])=>`<button type="button" class="settings-subnav-item ${t===s?"active":""}"
          id="settings-tab-${s}" role="tab" aria-selected="${t===s}" aria-controls="settings-panel"
          tabindex="${t===s?"0":"-1"}" data-action="profile-tab" data-tab="${s}">
          <span class="settings-subnav-icon">${c(o)}</span>
          <span><strong>${d(n)}</strong></span>
        </button>`).join("")}
      </nav>
      <section id="settings-panel" class="settings-page-panel tab-panel-enter" role="tabpanel" aria-labelledby="settings-tab-${t}">
        ${a[t]()}
      </section>
    </div>`}function Se(e,t="Guardado."){try{m=we(e)}catch(a){w(a.message||"No se pudo guardar.",!0);return}x(),t&&w(t)}function Nr(e,t){if(!te)return;const a=document.querySelector(`[data-${e}-row="${t}"]`);a&&(a.classList.add("is-fresh"),setTimeout(()=>a.classList.remove("is-fresh"),620))}function Gt(e,t,a="label"){const s=document.querySelector(`[data-edit="${e}"][data-key="${t}"][data-field="${a}"]`);s&&(s.focus(),s.select&&s.select())}function gs(e=""){const t=oe(m);if(t.length>=Le){w(`Con ${Le} partes es más que suficiente.`,!0);return}const a=qs.find(n=>n.label===e),s=a?a.label:String(document.querySelector("#new-part-label")?.value||"").trim().slice(0,60);if(!s){w("Escribe un título para la parte.",!0),document.querySelector("#new-part-label")?.focus();return}if(t.some(n=>n.label.toLowerCase()===s.toLowerCase())){w("Esa parte ya está en el diario.",!0);return}const o=As("p");Se({parts:[...t,{key:o,label:s,hint:a?.hint||"",type:a?.type||"text"}]},"Parte añadida."),Nr("part",o),Gt("part",o)}function Or(){const e=ue(m);if(e.length>=Te){w(`No hacen falta más de ${Te} contadores.`,!0);return}const t=String(document.querySelector("#new-counter-label")?.value||"").trim().slice(0,28);if(!t){w("El contador necesita un nombre.",!0),document.querySelector("#new-counter-label")?.focus();return}if(e.some(s=>s.label.toLowerCase()===t.toLowerCase())){w("Ya tienes un contador con ese nombre.",!0);return}const a=As("c");Se({counters:[...e,{key:a,label:t,unit:String(document.querySelector("#new-counter-unit")?.value||"").trim().slice(0,14),goal:parseFloat(document.querySelector("#new-counter-goal")?.value)||0,min:0,max:Math.max(20,(parseFloat(document.querySelector("#new-counter-goal")?.value)||0)*3),step:1,icon:"gauge"}]},"Contador añadido."),Gt("counter",a)}function Hr(e){const t=e.dataset.edit,a=e.dataset.key,s=e.dataset.field;if(t==="part"){if(s==="label"&&!String(e.value).trim()){w("Sin título no puede estar: escribe uno o quítala.",!0),x();return}Se({parts:oe(m).map(o=>o.key===a?{...o,[s]:e.value}:o)},""),Gt("part",a,s);return}if(t==="counter"){const n={counters:ue(m).map(r=>r.key!==a?r:s==="goal"?r.key==="water"?r:{...r,goal:parseFloat(e.value)||0}:{...r,[s]:e.value})};s==="goal"&&a==="water"&&(n.waterGoal=Math.min(25,Math.max(0,parseFloat(e.value)||0))||8),Se(n,""),Gt("counter",a,s)}}function Fr(){const e=oe(m),t=ue(m);return`<div class="custom-grid">
    <section class="card custom-card">
      <div class="section-heading">
        <div><p class="eyebrow">${c("paper")} Partes del diario</p><h2>Qué quieres escribir cada día</h2></div>
        <span class="field-caption">${e.length} de ${Le}</span>
      </div>
      ${e.length?`<ul class="custom-list">
        ${e.map(a=>`<li class="custom-row custom-row--part" data-part-row="${a.key}">
          <input class="custom-input custom-input--label" value="${d(a.label)}" maxlength="60" aria-label="Título de la parte" data-edit="part" data-key="${a.key}" data-field="label">
          <input class="custom-input custom-input--hint" value="${d(a.hint)}" maxlength="140" placeholder="Ayuda" aria-label="Texto de ayuda" data-edit="part" data-key="${a.key}" data-field="hint">
          <div class="micro-seg">${xo.map(s=>`<button type="button" class="${a.type===s.id?"active":""}" data-action="part-type" data-key="${a.key}" data-val="${s.id}">${s.label}</button>`).join("")}</div>
          <button type="button" class="icon-button ghost custom-remove" data-action="remove-part" data-key="${a.key}" aria-label="Quitar ${d(a.label)}">${c("close")}</button>
        </li>`).join("")}
      </ul>`:'<p class="custom-none">Sin partes propias.</p>'}
      <div class="custom-add">
        <input id="new-part-label" class="custom-input" maxlength="60" placeholder="Título de la parte…" aria-label="Título de la parte nueva">
        <button type="button" class="button outline" data-action="add-part">${c("plus")} Añadir parte</button>
      </div>
      ${e.length<Le?`<div class="custom-presets">
        <span class="custom-presets-label">Sugerencias</span>
        ${qs.filter(a=>!e.some(s=>s.label===a.label)).map(a=>`<button type="button" class="custom-preset" data-action="part-preset" data-val="${d(a.label)}">${d(a.label)}</button>`).join("")}
      </div>`:""}
    </section>

    <section class="card custom-card">
      <div class="section-heading">
        <div><p class="eyebrow">${c("gauge")} Contadores</p><h2>Qué cuentas</h2></div>
        <span class="field-caption">${t.length} de ${Te}</span>
      </div>
      <ul class="custom-list custom-list--counters">
        <li class="custom-head"><span>Nombre</span><span>Unidad</span><span>Meta</span><span>Icono</span><span></span></li>
        ${t.map(a=>`<li class="custom-row custom-row--counter" data-counter-row="${a.key}">
          <input class="custom-input custom-input--label" value="${d(a.label)}" maxlength="28" aria-label="Nombre del contador" data-edit="counter" data-key="${a.key}" data-field="label">
          <input class="custom-input custom-input--unit" value="${d(a.unit)}" maxlength="14" aria-label="Unidad" data-edit="counter" data-key="${a.key}" data-field="unit">
          <input class="custom-input custom-input--goal" type="number" min="0" max="9999" step="1" value="${qa(a,m)||""}" placeholder="—" aria-label="Meta diaria" data-edit="counter" data-key="${a.key}" data-field="goal">
          <select class="custom-select" aria-label="Icono" data-edit="counter" data-key="${a.key}" data-field="icon">
            ${Ms.map(s=>`<option value="${s}" ${a.icon===s?"selected":""}>${s}</option>`).join("")}
          </select>
          <button type="button" class="icon-button ghost custom-remove" data-action="remove-counter" data-key="${a.key}" aria-label="Quitar ${d(a.label)}">${c("close")}</button>
        </li>`).join("")}
      </ul>
      <div class="custom-add custom-add--counter">
        <input id="new-counter-label" class="custom-input" maxlength="28" placeholder="Nombre" aria-label="Nombre del contador nuevo">
        <input id="new-counter-unit" class="custom-input custom-input--unit" maxlength="14" placeholder="unidad" aria-label="Unidad del contador nuevo">
        <input id="new-counter-goal" class="custom-input custom-input--goal" type="number" min="0" max="9999" step="1" placeholder="meta" aria-label="Meta diaria del contador nuevo">
        <button type="button" class="button outline" data-action="add-counter">${c("plus")} Añadir contador</button>
      </div>
      <p class="custom-foot">
        <button type="button" class="text-button" data-action="reset-counters">${c("refresh")} Dejar los cuatro de siempre</button>
        <span>El historial se conserva al quitar un contador.</span>
      </p>
    </section>
  </div>`}function Pr(){const e=Q(m),t=new Set(M.map(s=>s.name.toLowerCase())),a=new Set(m.interests||[]);return`<form id="setup-page-form" class="setup-page-grid">
    <section class="card">
      <h2>Perfil</h2>
      <div class="setup-name-age-row">
        <div class="setup-field">
          <label for="sp-name">${c("user")} Tu nombre o apodo</label>
          <input id="sp-name" name="name" maxlength="50" placeholder="Tu nombre…" value="${d(m.name)}">
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
          ${lt.map(s=>`
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

    <section class="card">
      <h2>Intereses y estilo</h2>
      <div class="interests-grid">
        ${Ut.map(s=>`
          <label class="interest-chip">
            <input type="checkbox" name="interests" value="${s.id}" ${a.has(s.id)?"checked":""}>
            <span>${c(s.icon)} ${d(s.label)}</span>
          </label>
        `).join("")}
      </div>

      <div class="two-columns" style="margin-top:16px">
        <div class="setup-field" style="margin-top:0">
          <label>Momento habitual</label>
          <div class="ritual-stack">
            ${ct.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="ritual" value="${s.id}" ${(m.ritual||"night")===s.id?"checked":""}>
                <span class="purpose-icon">${c(s.icon)}</span>
                <div><strong>${d(s.label)}</strong></div>
              </label>
            `).join("")}
          </div>
        </div>
        <div class="setup-field" style="margin-top:0">
          <label>Tono de las frases</label>
          <div class="ritual-stack">
            ${dt.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="tone" value="${s.id}" ${(m.tone||"warm")===s.id?"checked":""}>
                <div><strong>${d(s.label)}</strong><small>${d(s.desc)}</small></div>
              </label>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="card">
      <h2>Metas y hábitos</h2>
      <div class="age-adaptation-callout" id="sp-adaptation-callout" style="margin-top:12px">
        ${c("compass")}
        <div>
          <strong>${d(e.group.title)} · ${d(e.group.label)}</strong>
          <p>Sueño ${C(e.sleepRecommended)} h · dedicación ${C(e.studyRecommended)} h.</p>
        </div>
      </div>
      <div class="goals-setup-grid">
        <div class="setup-field">
          <label for="sp-sleep">${c("moon")} Meta de sueño · h</label>
          <input id="sp-sleep" name="sleepGoal" type="number" min="4" max="14" step="0.5" value="${m.sleepGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-study">${c("study")} Meta de dedicación · h</label>
          <input id="sp-study" name="studyGoal" type="number" min="0" max="16" step="0.5" value="${m.studyGoal}">
        </div>
      </div>
      <div class="setup-field" style="margin-top:16px">
        <label>Hábitos sugeridos</label>
        <div class="tag-picker" id="sp-suggested-habits">
          ${e.suggestedHabits.map(s=>{const o=t.has(s.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${d(s)}" ${o?"checked":""}><span>${o?"✓ ":"+ "}${d(s)}</span></label>`}).join("")}
        </div>
      </div>
      <div class="setup-field" style="margin-top:18px">
        <label>${c("quote")} Frases guardadas · ${(m.savedQuotes||[]).length}</label>
        ${(m.savedQuotes||[]).length?`
          <div class="saved-quotes-list">
            ${m.savedQuotes.map((s,o)=>`
              <div class="saved-quote-item">
                <span>«${d(s)}»</span>
                <button type="button" class="icon-button ghost" data-action="remove-saved-quote" data-index="${o}" aria-label="Quitar frase">${c("close")}</button>
              </div>
            `).join("")}
          </div>
        `:""}
        <div class="habit-add" style="margin-top:10px">
          <label class="sr-only" for="new-custom-quote">Frase propia</label>
          <input id="new-custom-quote" maxlength="240" placeholder="Añade una frase propia…" aria-label="Frase propia para tu cuaderno">
          <button type="button" class="icon-button" data-action="add-custom-quote" aria-label="Añadir frase">${c("plus")}</button>
        </div>
      </div>
    </section>

    <div class="save-area" style="grid-column:1/-1">
      <button type="submit" class="button solid save-button">${c("check")} Guardar perfil</button>
    </div>
  </form>`}function zr(){return`<form id="appearance-form" class="appearance-page">
    <div class="appearance-settings-grid">
      <section class="card">
        <div class="section-heading">
          <div><p class="eyebrow">${c("palette")} Apariencia</p><h2>Tu tema</h2></div>
        </div>
        <div class="theme-picker-grid">
          ${ee.map(e=>`
            <label class="theme-card">
              <input type="radio" name="theme" value="${e.id}" ${m.theme===e.id?"checked":""}>
              <div class="theme-card-top">
                <span class="theme-favicon-preview">${xe(e.id,m)}</span>
                <div class="theme-swatches">${e.colors.map(t=>`<i style="background:${t}"></i>`).join("")}</div>
              </div>
              <strong>${d(e.name)}</strong>
              <small>${d(e.desc)}</small>
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
            <input type="checkbox" name="showDailyWord" ${m.showDailyWord!==!1?"checked":""}>
            <span><strong>Palabra del día</strong></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="showDailyTip" ${m.showDailyTip!==!1?"checked":""}>
            <span><strong>Sugerencia diaria</strong></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="reduceMotion" ${m.reduceMotion?"checked":""}>
            <span><strong>Reducir animaciones</strong></span>
          </label>
        </div>
      </section>
    </div>
    <div class="save-area">
      <button type="submit" class="button solid save-button">${c("check")} Guardar apariencia</button>
    </div>
  </form>`}function Br(){return`
  <div class="two-columns">
    <section class="card">
      <h2>Exportar copia</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Entradas, hábitos y perfil en un JSON.</p>
      <button class="button solid" data-action="export">${c("download")} Descargar JSON</button>
    </section>
    <section class="card">
      <h2>Importar copia</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Elige un JSON y confirma la importación.</p>
      <button class="button outline" data-action="import">${c("upload")} Seleccionar archivo</button>
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
    <button class="button danger" data-action="clear">${c("trash")} Borrar todo</button>
  </section>`}function Rr(e){const t=A.find(s=>s.date===e),a=Q(m);return t?{...t}:{date:e,mood:3,sleepHours:m.sleepGoal||a.sleepRecommended||7.5,studyHours:0,energy:null,stress:null,bestOfDay:"",differentToday:"",generalDay:"Registro rápido desde la rutina.",wordOfDay:"",capsule:"",gratitude:["","",""],tomorrow:"",goals:[],tags:[],counters:{},habits:{}}}function Qe(e,t){if(e>y())throw new Error("Ese día todavía no ha llegado.");A=Qs({...Rr(e),...t})}function Sa(){return[...document.querySelectorAll("#routine-goals .task-input")].map(e=>e.value.trim())}function ye(){const e=document.querySelector("#routine-tomorrow");if(!e)return;const t=Sa().filter(Boolean);try{Qe(S,{tomorrow:e.value.trim(),goals:t})}catch(a){w(a.message||"No se pudo guardar la lista.",!0)}}function Gr(){const e=document.querySelector("#routine-tomorrow");e&&(e.addEventListener("change",ye),e.addEventListener("input",()=>Oe("manana",ye,500)),document.querySelectorAll("#routine-goals .task-input").forEach(t=>{t.addEventListener("change",ye),t.addEventListener("input",()=>Oe("manana-tarea",ye,600)),t.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),ye(),x()),a.key==="Escape"&&x()})}))}let bs=null;function Ir(e,t,a){const s=e.closest(".counter-row"),o=ue(m).find(i=>i.key===t)||{key:t},n=document.querySelector(`#hint-${t}`);n&&(n.textContent=Qt(t,a,o)),e.classList.remove("num-bump"),e.offsetWidth,e.classList.add("num-bump");const r=qa(o,m);if(r){const i=s?.querySelector(".counter-goal-pill"),l=s?.querySelector(".counter-progress i");i&&(i.textContent=`Meta: ${a}/${r}`,i.classList.toggle("met",a>=r)),l&&(l.style.width=`${Math.min(100,Math.round(a/r*100))}%`)}}function Ur(){const e=A.find(a=>a.date===S),t={...e?.counters||{}};for(const a of ue(m)){const s=document.querySelector(`[name="counter_${a.key}"]`);(s||a.key in t)&&(t[a.key]=s?parseFloat(s.value)||0:Number(e?.counters?.[a.key])||0)}try{Qe(S,{counters:t})}catch(a){w(a.message||"No se pudo guardar el contador.",!0)}}function fs(e,t){const a=String(t||"").trim().slice(0,40),s=M.find(o=>o.id===e);if(s){if(!a){w("El hábito necesita un nombre.",!0);return}if(a.toLowerCase()!==s.name.toLowerCase()&&M.some(o=>o.name.toLowerCase()===a.toLowerCase())){w("Ya tienes un hábito con ese nombre.",!0);return}a!==s.name&&(M=zt({...s,name:a}),x(),w("Hábito renombrado"))}}function _r(e){if(!te)return;const t=document.querySelector(`.habit-toggle[data-habit="${e}"]`);t&&(t.classList.add("is-flashed"),setTimeout(()=>t.classList.remove("is-flashed"),700));const a=document.querySelector(`.momentum-cell[data-habit="${e}"]`);a&&(a.classList.add("is-flashed"),setTimeout(()=>a.classList.remove("is-flashed"),700))}function po(){const e=Zt(R).some(t=>t.seen!==!0);document.querySelectorAll(".nav-dot").forEach(t=>{t.hidden=!e,t.classList.toggle("is-new",e)}),document.querySelectorAll('.tabbar-item[data-view="thoughts"]').forEach(t=>{t.classList.toggle("has-new",e)})}function ka(e){const t=R.find(n=>n.id===e);if(!Rs(t,y()))return;t.status==="returned"&&t.seen!==!0&&(R=Be(e,{seen:!0}),po());const a=t.reply?"":Oa(be.reply(e))?.text||"",s=Xe(Bn({...t,replyDraft:a},y(),m));Vr(s);const o=()=>{s.close(),x()};s.onclick=n=>{const r=n.target.closest("[data-modal]")?.dataset.modal;if(!r){n.target===s&&s.close();return}if(r==="close"){o();return}if(r==="reply"){const i=(s.querySelector("#bottle-reply")?.value||"").trim();if(!i){w("Escribe primero lo que quieres contestarte.",!0);return}ft(`respuesta:${e}`),R=Be(e,{reply:i,seen:!0,repliedAt:new Date().toISOString()}),Ze(be.reply(e)),s.close(),x(),ka(e),w("Contestada.");return}if(r==="reply-clear"){ft(`respuesta:${e}`),Ze(be.reply(e)),R=Be(e,{reply:""}),s.close(),x(),ka(e);return}if(r==="keep"){const i=!t.kept;R=Be(e,{kept:i,keptOn:i?y():null,seen:!0}),o(),w(i?"Anclada.":"Desanclada.");return}if(r==="to-entry"){try{Qr(t),o(),w("Copiado a la entrada de hoy.")}catch(i){w(i.message||"No se pudo copiar.",!0)}return}if(r==="recast"){R=Zs(e),o(),w("Otra vez fuera.");return}}}function Qr(e){const t=y(),a=A.find(n=>n.date===t),s=`Del mar · botella del ${B(e.castAt,{day:"numeric",month:"long"})}: «${e.text}»`,o=[a?.generalDay,s].filter(Boolean).join(`

`);Qe(t,{generalDay:o,capsule:a?.capsule||String(e.text).slice(0,240),tags:[...new Set([...a?.tags||[],"Pensamiento"])].slice(0,20)}),R=Be(e.id,{kept:!0,keptOn:t,seen:!0}),S=t,j="diary",ae()}function Wr(e,t){const a=document.querySelector(".thought-vault"),s=a?.getBoundingClientRect(),o=a?.querySelector(".vault-water")?.getBoundingClientRect(),n=t?.querySelector('button[type="submit"]')?.getBoundingClientRect(),r=On(e),i=s?.width||window.innerWidth,l=s?.left||0,u=n?n.left+n.width/2:window.innerWidth*.18,h=n?n.top+n.height/2:window.innerHeight*.72,g=l+i*r.x/100,p=o?o.top+o.height*r.depth/100:window.innerHeight*.52,v=g-u,f=p-h,q=v*.52,H=f*.52-Math.min(150,window.innerHeight*.2);if(!te)return;if((document.querySelector("#ocean-fx")||document.body)===document.body){const L=document.createElement("div");L.id="ocean-fx",L.setAttribute("aria-hidden","true"),document.body.appendChild(L)}const F=document.querySelector("#ocean-fx"),k=document.createElement("div");k.className="splash-wrap",k.innerHTML=Rn(e);for(const[L,U]of Object.entries({"--from-x":u,"--from-y":h,"--to-x":g,"--to-y":p,"--flight-x":v,"--flight-y":f,"--mid-x":q,"--mid-y":H}))k.style.setProperty(L,`${Math.round(U)}px`);F.appendChild(k),document.documentElement.classList.add("is-casting"),clearTimeout(ds),ds=setTimeout(()=>document.documentElement.classList.remove("is-casting"),1400),setTimeout(()=>k.remove(),1800)}function Vr(e){const t=e.querySelector(".bottle-modal");!t||!te||(t.classList.add("is-uncorking"),setTimeout(()=>t.classList.remove("is-uncorking"),1100))}function Zr(e){const t=new FormData(e),a=(t.get("text")||"").toString().trim();if(a.length<2){w("Escribe algo antes de lanzar la botella.",!0);return}const s=t.get("mood"),o="breeze";try{const n=crypto.randomUUID(),r=Math.max(1,Math.min(5,Math.round(Number(t.get("force"))||3)));R=dn({id:n,text:a,mood:s?+s:null,sea:o,force:r,castAt:y()});const i=R.find(u=>u.id===n);ft("botella"),Ze(be.bottle()),Je={text:"",mood:null,sea:o,force:3},V="sea",ke=!0,ae(),Wr(i||{},e);const l=e.querySelector('button[type="submit"]');l&&(l.disabled=!0,l.classList.add("is-launching"),l.innerHTML=`${c("send")} Lanzando…`),X("saved"),setTimeout(()=>x(),te?1120:0),w("Botella lanzada al mar.")}catch(n){w(n.message||"No se pudo lanzar la botella.",!0)}}function Yr(){const e=document.querySelector("#thoughts-bottles-drawer");e?.addEventListener("toggle",()=>{ke=e.open});const t=document.querySelector("#bottle-form");if(!t)return;const a=t.querySelector("#bottle-text"),s=t.querySelector("#bottle-force"),o=t.querySelector("#bottle-force-value"),n=()=>{const l=t.querySelector('[name="mood"]:checked');Je={text:a?.value||"",mood:l?+l.value:null,sea:"breeze",force:Number(s?.value)||3}},r=t.querySelector('button[type="submit"]'),i=()=>{r&&(r.disabled=!(a?.value||"").trim())};n(),i(),a?.addEventListener("input",()=>{n(),i()}),s?.addEventListener("input",()=>{n(),o&&(o.value=s.value)}),t.addEventListener("change",()=>{n(),i()}),document.activeElement===a&&a.value&&a.setSelectionRange(a.value.length,a.value.length),t.addEventListener("submit",l=>{l.preventDefault(),Zr(t)})}function Jr(e){R.find(a=>a.id===e)&&It({title:"¿Romper esta botella?",text:"El pensamiento se borrará de este navegador. No se puede deshacer.",confirmLabel:"Romperla",danger:!0}).then(a=>{a&&(R=un(e),x(),w("Rota."))})}const Kr=["generalDay","bestOfDay","differentToday","capsule","wordOfDay","tomorrow","gratitude0","gratitude1","gratitude2","tagCustom"];function la(){return[...Kr,...oe(m).map(e=>`part_${e.key}`)]}const ce=new Map;let xa=!1;function ft(e){const t=ce.get(e);t&&(clearTimeout(t),ce.delete(e))}function Oe(e,t,a=460){clearTimeout(ce.get(e)),ce.set(e,setTimeout(()=>{ce.delete(e),t()},a))}function Ie(e,t){ce.has(e)&&(clearTimeout(ce.get(e)),ce.delete(e),t())}function vt(){return be.entry(S)}function mo(e){const t={};if(!e)return t;for(const r of la()){const i=e.querySelector(`[name="${r}"]`);i&&typeof i.value=="string"&&(t[r]=i.value)}for(const r of["mood","energy","stress"]){const i=e.querySelector(`[name="${r}"]:checked`);i&&(t[r]=Number(i.value))}for(const r of["sleepHours","studyHours"]){const i=e.querySelector(`[name="${r}"]`);i&&i.value!==""&&(t[r]=Number(i.value))}const a=[...e.querySelectorAll('[name="tags"]:checked')].map(r=>r.value);a.length&&(t.tags=a);const s={};for(const r of e.querySelectorAll('[name^="counter_"]'))s[r.name.slice(8)]=Number(r.value)||0;Object.keys(s).length&&(t.counters=s);const o={};for(const r of e.querySelectorAll('[name^="habit_"]'))o[r.name.slice(6)]=r.checked;Object.keys(o).length&&(t.habits=o);const n=[...e.querySelectorAll('[name="goal"]')].map(r=>r.value).filter(r=>r.trim());return n.length&&(t.goals=n),t}function Xr(e){const t=A.find(o=>o.date===S);if(!t)return!Object.keys(e).length;for(const o of la()){if(!(o in e))continue;let n="";if(o.startsWith("gratitude"))n=(t.gratitude||[])[+o.slice(9)]||"";else{if(o==="tagCustom")continue;n=t[o]??""}if(String(e[o]??"").trim()!==String(n).trim())return!1}for(const o of["mood","energy","stress","sleepHours","studyHours"]){if(e[o]===void 0)continue;const n=t[o];if(n==null){if(Number(e[o])!==0&&e[o]!==3)return!1;continue}if(Number(e[o])!==Number(n))return!1}const a=t.counters||{};for(const[o,n]of Object.entries(e.counters||{}))if(Number(n)!==Number(a[o]||0))return!1;const s=t.habits||{};for(const[o,n]of Object.entries(e.habits||{}))if(!!n!=!!s[o])return!1;return!((t.tags||[]).slice().sort().join("|")!==(e.tags||[]).slice().sort().join("|")||(t.goals||[]).join("|")!==(e.goals||[]).join("|"))}function Ba(){const e=document.querySelector("#diary-form");if(!e)return;const t=mo(e);if(Xr(t)){const s=Ze(vt());X(s||gt==="typing"?"saved":gt);return}const a=oa(vt(),t);a&&!a.ok?X("error"):a&&X("draft")}function Ra(){const e=document.querySelector("#bottle-form");if(!e)return;const t=oa(be.bottle(),{text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze",force:Number(e.querySelector("#bottle-force")?.value)||3});t&&!t.ok&&X("error")}function ei(e,t){!t||!document.contains(t)||oa(be.reply(e),{text:t.value||""})}function vs(){X("typing"),Oe("entrada",Ba,420),Oe("autosave",()=>ca({silent:!0}),2400)}function ys(){const e=document.querySelector("#bottle-form");if(!e)return;Je={text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze",force:Number(e.querySelector("#bottle-force")?.value)||3},X("typing"),Oe("botella",Ra,380)}function ti(){const e=document.querySelector("#setup-page-form");if(!e)return;const t={};for(const s of e.querySelectorAll('textarea,input[type="text"],input:not([type])'))s.name&&(t[s.name]=s.value);const a=e.querySelector("#new-custom-quote");a?.value&&(t.customQuote=a.value),oa(be.setup(),t)}function ai(){Oe("perfil",ti,700)}function si(){O.addEventListener("input",e=>{const t=e.target;if(!(!t||!t.closest)){if(t.closest("#diary-form")){vs();return}if(t.closest("#bottle-form")){ys();return}if(t.closest("#setup-page-form")){ai();return}if(t.id==="bottle-reply"&&t.closest("#modal")){const a=t.closest("[data-modal-bottle]")?.dataset.modalBottle;a&&Oe(`respuesta:${a}`,()=>ei(a,t),360)}}}),O.addEventListener("change",e=>{const t=e.target;if(!(!t||!t.closest)){if(t.dataset?.edit){Hr(t);return}t.closest("#diary-form")&&vs(),t.closest("#bottle-form")&&ys()}}),window.addEventListener("pagehide",Ma),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ma()})}function Ma(){Ie("entrada",Ba),Ie("botella",Ra),Ie("manana",ye),Ie("manana-tarea",ye);for(const[e,t]of[...ce.entries()])e.startsWith("respuesta:")&&(clearTimeout(t),ce.delete(e));document.querySelector("#diary-form")&&!xa&&gt==="draft"&&ca({silent:!0,final:!0})}function oi(){ni()}function $s(e,t,a){if(a==null)return;const s=e.querySelector(`[name="${t}"]`);if(s){if(s.type==="radio"){const o=e.querySelector(`[name="${t}"][value="${a}"]`);o&&(o.checked=!0);return}s.value=Array.isArray(a)?a.join(`
`):a}}function ni(){const e=document.querySelector("#diary-form");if(!e)return;const t=A.find(s=>s.date===S);if(!In(vt(),t?.updatedAt))return;const a=Oa(vt());if(a){for(const s of la())$s(e,s,a[s]);for(const s of["mood","energy","stress","sleepHours","studyHours"])a[s]!==void 0&&$s(e,s,a[s]);if(Array.isArray(a.tags)&&e.querySelectorAll('[name="tags"]').forEach(s=>{s.checked=a.tags.includes(s.value)}),a.counters)for(const[s,o]of Object.entries(a.counters)){const n=e.querySelector(`[name="counter_${s}"]`);n&&(n.value=o)}if(a.habits)for(const[s,o]of Object.entries(a.habits)){const n=e.querySelector(`[name="habit_${s}"]`);n&&(n.checked=!!o)}Array.isArray(a.goals)&&[...e.querySelectorAll('[name="goal"]')].forEach((o,n)=>{a.goals[n]!==void 0&&(o.value=a.goals[n])}),e.dispatchEvent(new Event("input",{bubbles:!0})),X("draft")}}function ri(){if(Je.text)return;const e=Oa(be.bottle());e&&(Je={text:String(e.text||""),mood:e.mood||null,sea:e.sea||"breeze",force:Number(e.force)||3})}function ii(e){return!!(la().map(a=>String(e[a]||"")).join(" ").trim().split(/\s+/).filter(Boolean).length>3||Object.values(e.counters||{}).some(a=>Number(a)>0)||Object.values(e.habits||{}).some(Boolean)||(e.tags||[]).length||(e.gratitude0||"").trim()||(e.gratitude1||"").trim()||(e.gratitude2||"").trim())}function ca({silent:e=!1,final:t=!1}={}){const a=document.querySelector("#diary-form");if(!a||Ye)return!1;const s=mo(a);if(e&&!ii(s))return!1;xa=!0,ft("entrada"),ft("autosave");try{const o=ci(Ga(a));if(A=Qs(o),Ze(vt()),X(e?"autosaved":"saved"),e){if(t)try{localStorage.setItem("diario.lastflush.v1",JSON.stringify({at:new Date().toISOString(),date:S}))}catch{}}else{x(),mi(),w("Día guardado"),document.querySelector(".daily-summary")?.classList.add("reveal");const n=Da(o);n.triggered&&n.level==="high"&&setTimeout(()=>bo("help"),550)}return!0}catch(o){return X("error"),e||w(o.message||"No se ha podido guardar.",!0),!1}finally{xa=!1}}function X(e){gt=e}function li(e){const t=String(e||"").trim();return t?t.split(/\s+/).length:0}function Ga(e){const t=new FormData(e),a=A.find(L=>L.date===S),s=Q(m),o=(t.get("tagCustom")||"").toString().trim(),n=[...new Set([...t.getAll("tags").map(L=>L.toString().trim()),o].filter(Boolean))],r={...a?.counters||{}};for(const L of ue(m)){const U=e.querySelector(`[name="counter_${L.key}"]`);r[L.key]=U?parseFloat(U.value)||0:Number(a?.counters?.[L.key])||0}const i={...a?.parts||{}};for(const L of oe(m)){const U=e.querySelector(`[name="part_${L.key}"]`);if(!U)continue;const b=U.value.trim();b?i[L.key]=b:delete i[L.key]}const l={},u=[...e.querySelectorAll('[name^="habit_"]')];for(const L of M)l[L.id]=u.length?!!e.querySelector(`[name="habit_${L.id}"]`)?.checked:!!a?.habits?.[L.id];const h=+t.get("mood")||a?.mood||3,g=t.get("sleepHours"),p=g!==null&&g!==""?parseFloat(g):m.sleepGoal||s.sleepRecommended||7.5,v=t.get("studyHours"),f=v!==null&&v!==""?parseFloat(v):0,q=(t.get("bestOfDay")||"").toString().trim(),H=(t.get("differentToday")||"").toString().trim(),z=(t.get("capsule")||"").toString().trim(),F=(t.get("wordOfDay")||"").toString().trim();let k=(t.get("generalDay")||"").toString().trim();return k||(k=q||z||(F?`Palabra del día: ${F}.`:`Día ${P[h-1].label.toLowerCase()}.`)),{id:a?.id,date:S,mood:h,sleepHours:p,studyHours:f,energy:t.get("energy")?+t.get("energy"):null,stress:t.get("stress")?+t.get("stress"):null,bestOfDay:q,differentToday:H,generalDay:k,wordOfDay:F,capsule:z,gratitude:[0,1,2].map(L=>(t.get(`gratitude${L}`)||"").toString().trim()),tomorrow:t.has("tomorrow")?(t.get("tomorrow")||"").toString().trim():a?.tomorrow||"",goals:e.querySelector('[name="goal"]')?t.getAll("goal").map(L=>L.toString().trim()).filter(Boolean):a?.goals||[],tags:n,counters:r,parts:i,habits:l,createdAt:a?.createdAt}}function ci(e){for(const[t,a]of[["sleepHours","horas de sueño"],["studyHours","horas de dedicación"]]){const s=e[t];if(!Number.isFinite(s)||s<0||s>24)throw new Error(`Escribe unas ${a} válidas, entre 0 y 24.`)}return e}function ws(e){if(!e)return;const t=Ga(e),a=document.querySelector("#hero-words-chip");if(a){const i=wt(t),l=i?`${i} ${i===1?"palabra":"palabras"} escritas`:"todavía sin escribir";a.textContent!==l&&(a.textContent=l),a.classList.toggle("pending",!i)}const s=Da(t),o=s.triggered&&s.level==="high"&&!na,n=o?`high:${(s.reasons||[]).length}`:"none",r=document.querySelector("#crisis-alert-slot");r&&r.dataset.sig!==n&&(r.dataset.sig=n,r.innerHTML=o?Xs(s,m):"")}function ho(e,t){if(!e)return;const a=e.querySelector('[name="age"]'),s=()=>{const o=new FormData(e),n=o.get("age"),r=n?Xt(n,o.get("ageGroup")||"young"):o.get("ageGroup")||"young",i=o.getAll("interests").map(String);e.querySelectorAll("[data-age-group-card]").forEach(v=>{const f=v.dataset.ageGroupCard===r;v.classList.toggle("is-selected",f);const q=v.querySelector('input[type="radio"]');q&&n&&(q.checked=f)});const l=Q({age:n||null,ageGroup:r,interests:i}),u=e.querySelector('[name="sleepGoal"]'),h=e.querySelector('[name="studyGoal"]');u&&n&&(u.value=l.sleepRecommended),h&&n&&(h.value=l.studyRecommended);const g=e.querySelector(`#${t}-adaptation-callout`);g&&(g.innerHTML=`
        ${c("compass")}
        <div>
          <strong>${d(l.group.title)} · ${d(l.group.label)}</strong>
          <p>Sueño ${C(l.sleepRecommended)} h · dedicación ${C(l.studyRecommended)} h.</p>
        </div>`);const p=e.querySelector(`#${t}-suggested-habits`);if(p){const v=new Set(M.map(f=>f.name.toLowerCase()));p.innerHTML=l.suggestedHabits.map(f=>{const q=v.has(f.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${d(f)}" ${q?"checked":""}><span>${q?"✓ ":"+ "}${d(f)}</span></label>`}).join("")}};a&&a.addEventListener("input",s),e.querySelectorAll('[name="ageGroup"], [name="interests"]').forEach(o=>{o.addEventListener("change",s)})}function di(){const e=document.querySelector("#setup-page-form");e&&(ho(e,"sp"),e.addEventListener("submit",s=>{s.preventDefault(),go(e),x(),w("Perfil actualizado")}));const t=document.querySelector("#appearance-form");t&&(t.addEventListener("change",s=>{s.target.name==="theme"&&Me(s.target.value,{...m,theme:s.target.value})}),t.addEventListener("submit",s=>{s.preventDefault(),ui(t)}));const a=document.querySelector("#diary-form");a&&(a.addEventListener("submit",s=>{s.preventDefault(),!Ye&&ca()}),a.addEventListener("input",s=>{const o=s.target;if(o.name==="mood"){const r=P[+o.value-1];a.style.setProperty("--active-mood",r.color)}if(o.name==="sleepHours"||o.name==="studyHours"){const r=parseFloat(o.value);a.querySelectorAll(`[data-action="quick-number"][data-target="${o.name}"]`).forEach(i=>{i.classList.toggle("active",parseFloat(i.dataset.val)===r)})}if(o.name==="energy"){const r=document.querySelector("#energy-hint");r&&(r.textContent=ks[+o.value]+".")}if(o.name==="stress"){const r=document.querySelector("#stress-hint");r&&(r.textContent=xs[+o.value]+".")}if(o.name?.startsWith("counter_")){const r=o.name.slice(8),i=parseFloat(o.value)||0,l=document.querySelector(`#hint-${r}`);if(l&&(l.textContent=Qt(r,i)),r==="water"){const u=m.waterGoal||8,h=o.closest(".counter-row"),g=h?.querySelector(".counter-goal-pill"),p=h?.querySelector(".counter-progress i");g&&(g.textContent=`Meta: ${i}/${u}`,g.classList.toggle("met",i>=u)),p&&(p.style.width=`${Math.min(100,Math.round(i/u*100))}%`)}}const n=o.closest(".writing-field");if(n){const r=n.querySelector(".word-count");r&&(r.textContent=`${li(o.value)} palabras`)}ws(a)}),a.addEventListener("keydown",s=>{if(s.target.id==="tagCustom"&&s.key==="Enter"){s.preventDefault();const o=s.target.value.trim();if(o){const n=a.querySelector(".tag-picker .tag-chip.ghost");n&&n.insertAdjacentHTML("beforebegin",`<label class="tag-chip"><input type="checkbox" name="tags" value="${d(o)}" checked><span>${d(o)}</span></label>`),s.target.value="",ws(a)}}}),pi())}function ui(e){m=we({theme:e.querySelector('[name="theme"]:checked')?.value||m.theme,sidebarCollapsed:!!e.querySelector('[name="sidebarCollapsed"]')?.checked,showDailyWord:!!e.querySelector('[name="showDailyWord"]')?.checked,showDailyTip:!!e.querySelector('[name="showDailyTip"]')?.checked,reduceMotion:!!e.querySelector('[name="reduceMotion"]')?.checked}),W=!!m.sidebarCollapsed,Ue(),Me(m.theme,m),x(),w("Apariencia actualizada")}function go(e){const t=new FormData(e),a=t.getAll("suggestedHabits").map(h=>h.toString().trim()).filter(Boolean),s=new Set(M.map(h=>h.name.toLowerCase()));for(const h of a)!s.has(h.toLowerCase())&&M.length<30&&(M=zt({name:h}),s.add(h.toLowerCase()));const o=e.querySelector('[name="sidebarCollapsed"]')!==null,n=t.get("age"),r=n!==null&&n!==""?parseInt(n.toString(),10):null,i=r?Xt(r,t.get("ageGroup")||"young"):t.get("ageGroup")||m.ageGroup,l=t.getAll("interests").map(h=>h.toString().trim()).filter(Boolean);m=we({completed:!0,name:t.get("name")||"",age:Number.isFinite(r)?r:null,ageGroup:i,interests:l,ritual:t.get("ritual")||m.ritual,tone:t.get("tone")||m.tone,purpose:t.get("purpose")||m.purpose,motto:t.get("motto")||"Un día a la vez.",theme:t.get("theme")||m.theme,sleepGoal:parseFloat(t.get("sleepGoal"))||7.5,studyGoal:parseFloat(t.get("studyGoal"))??2,showDailyWord:e.querySelector('[name="showDailyWord"]')?.checked??m.showDailyWord,showDailyTip:e.querySelector('[name="showDailyTip"]')?.checked??m.showDailyTip,sidebarCollapsed:o?!!e.querySelector('[name="sidebarCollapsed"]')?.checked:m.sidebarCollapsed,reduceMotion:e.querySelector('[name="reduceMotion"]')?.checked??m.reduceMotion}),W=!!m.sidebarCollapsed,Ue(),Me(m.theme,m)}function pi(){const e=document.querySelector("#diary-form");if(e)for(const t of ue(m)){const a=e.querySelector(`[name="counter_${t.key}"]`),s=document.querySelector(`#hint-${t.key}`);a&&s&&a.value!==""&&(s.textContent=Qt(t.key,parseFloat(a.value)||0,t))}}function ha(e=""){const t=document.querySelector("#inspiration-slot");if(!t)return;const a=document.querySelector("#diary-form"),s=a?Ga(a):A.find(o=>o.date===S);if(t.innerHTML=eo(S,Ha,Fa,m,s,s?.wordOfDay||""),e){const o=t.querySelector(e);o&&(o.classList.remove("card-flip-in"),o.offsetWidth,o.classList.add("card-flip-in"))}}function Ss(){const e=document.querySelector("#quote-slot");if(!e)return;e.innerHTML=Ks(S,Pa,m);const t=e.querySelector(".quote-card");t&&(t.classList.remove("card-flip-in"),t.offsetWidth,t.classList.add("card-flip-in"))}function mi(){const e=document.querySelector("#stamp");if(!e)return;const t=m.name?`Cuaderno de ${d(m.name)}`:"Guardado";e.innerHTML=`<div class="stamp-face">${t}<small>${B(S)}</small></div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function w(e,t=!1){const a=document.querySelector("#toast");a&&(a.innerHTML=`<div class="${t?"error":""}">${c(t?"close":"check")}<span>${d(e)}</span></div>`,a.classList.add("show"),setTimeout(()=>a.classList.remove("show"),3e3))}function Ft(){Ot&&(clearInterval(Ot),Ot=null)}function Xe(e){Ft();const t=document.querySelector("#modal");return t.innerHTML=e,t.open||t.showModal(),t}function bo(e="help"){const t=Xe(Tn(m,e));let a=!1;const s=()=>{Ft(),t.close()};t.onclick=o=>{if(o.target.closest('[data-modal="close"]')||o.target===t){s();return}const r=o.target.closest("[data-crisis-tab]");if(r){const l=r.dataset.crisisTab;t.querySelectorAll(".crisis-tab").forEach(u=>u.classList.toggle("active",u.dataset.crisisTab===l)),t.querySelectorAll(".crisis-tab-panel").forEach(u=>u.classList.toggle("active",u.dataset.panel===l)),l!=="breathe"&&Ft();return}const i=o.target.closest('[data-action="toggle-breathing"]');if(i){const l=t.querySelector("#breathing-visual"),u=t.querySelector("#breathing-phase"),h=t.querySelector("#breathing-timer"),g=t.querySelector("#breathing-guide");if(a)a=!1,Ft(),l?.classList.remove("inhale","hold","exhale"),u&&(u.textContent="En pausa"),h&&(h.textContent="4 — 4 — 6"),i.innerHTML=`${c("wind")} Seguir respirando`;else{a=!0,i.innerHTML=`${c("close")} Pausar`;let p=0;const v=()=>{const f=p%14;l?.classList.remove("inhale","hold","exhale"),f<4?(l?.classList.add("inhale"),u&&(u.textContent="Toma aire..."),h&&(h.textContent=`${4-f} s`),g&&(g.textContent="Inhala despacio por la nariz.")):f<8?(l?.classList.add("hold"),u&&(u.textContent="Mantén..."),h&&(h.textContent=`${8-f} s`),g&&(g.textContent="Sostén el aire sin tensar los hombros.")):(l?.classList.add("exhale"),u&&(u.textContent="Suelta..."),h&&(h.textContent=`${14-f} s`),g&&(g.textContent="Deja salir el aire poco a poco.")),p++};v(),Ot=setInterval(v,1e3)}}}}function fo(e=1,{mandatory:t=!1}={}){let a=e;const s=Xe(Dn(m,M,a,t));rt=t,s.oncancel=t?r=>r.preventDefault():null,s.onclose=()=>{t&&!m.completed&&(rt=!1,queueMicrotask(()=>x()))};const o=s.querySelector("#setup-wizard-form");ho(o,"wiz");const n=r=>{a=Math.max(1,Math.min(3,r)),s.querySelectorAll(".wizard-step-body").forEach(g=>{const p=+g.dataset.step;g.classList.toggle("active",p===a),g.hidden=p!==a});const i=s.querySelector(".setup-wizard-header .eyebrow"),l=s.querySelector(".setup-wizard-header h2");i&&(i.innerHTML=`${c("sliders")} Paso ${a} de 3`),l&&(l.textContent=a===1?"Tu perfil":a===2?"Tu ritmo":"Tu papel"),s.querySelectorAll(".wizard-steps-bar span").forEach((g,p)=>{g.classList.toggle("done",a>=p+1),g.classList.toggle("current",a===p+1)});const h=s.querySelector(".wizard-footer");h&&(h.innerHTML=`
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${c("left")} Anterior</button>`:t?"":'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${c("right")}</button>`:`<button type="submit" class="button solid">${c("check")} Guardar</button>`}`)};s.onchange=r=>{r.target.name==="theme"&&Me(r.target.value,m)},s.onsubmit=r=>{r.preventDefault(),o&&go(o);const i=t;rt=!1,s.oncancel=null,s.close(),x(),i&&j==="thoughts"&&requestAnimationFrame(()=>co()),w("Perfil actualizado")},s.onclick=r=>{if(r.target.closest('[data-modal="close"]')||r.target===s){if(t){r.preventDefault();return}Me(m.theme,m),s.oncancel=null,s.close();return}const l=r.target.closest("[data-wizard]");if(l){const u=l.dataset.wizard;n(u==="next"?a+1:a-1)}}}function It({title:e,text:t,confirmLabel:a,danger:s=!1}){return new Promise(o=>{const n=Xe(`<div class="modal-card">
      <h2>${d(e)}</h2><p>${d(t)}</p>
      <div class="modal-actions">
        <button class="button outline" data-modal="cancel">Cancelar</button>
        <button class="button ${s?"danger":"solid"}" data-modal="confirm">${d(a)}</button>
      </div>
    </div>`);n.onclick=r=>{const i=r.target.closest("[data-modal]")?.dataset.modal;i?(n.close(),o(i==="confirm")):r.target===n&&(n.close(),o(!1))}})}function hi(e){const t=A.find(n=>n.date===e);if(!t){Ae(e);return}const a=Q(m),s=M.filter(n=>t.habits?.[n.id]),o=Xe(`<article class="modal-card entry-modal">
    <div class="section-heading">
      <div><p class="eyebrow">${m.name?`Cuaderno de ${d(m.name)} · `:""}Día ${$t(t.date,A)}</p><h2>${B(t.date)}</h2></div>
      <span class="mood-tag" style="--mood:${P[t.mood-1].color}">${P[t.mood-1].emoji} ${P[t.mood-1].label}</span>
    </div>
    <div class="read-metrics">
      <span class="chiplet">${c("moon")} ${C(t.sleepHours)} h sueño</span>
      <span class="chiplet">${c("study")} ${C(t.studyHours)} h dedicación</span>
      ${t.energy?`<span class="chiplet">${c("bolt")} energía ${t.energy}/5</span>`:""}
      ${t.stress?`<span class="chiplet">${c("storm")} estrés ${t.stress}/5</span>`:""}
      <span class="chiplet">${c("pen")} ${wt(t)} palabras</span>
    </div>
    ${(t.tags||[]).length?`<div class="read-metrics">${t.tags.map(n=>`<span class="chiplet">${c("hash")} ${d(n)}</span>`).join("")}</div>`:""}
    ${t.wordOfDay?`<div class="read-section"><h3>Palabra del día</h3><p>«${d(t.wordOfDay)}»</p></div>`:""}
    ${t.capsule?`<div class="read-section"><h3>${d(a.capsuleLabel)}</h3><p>${d(t.capsule)}</p></div>`:""}
    <div class="read-section"><h3>Notas del día</h3><p class="dropcap-paragraph">${d(t.generalDay)}</p></div>
    ${t.bestOfDay?`<div class="read-section"><h3>Lo mejor del día</h3><p>${d(t.bestOfDay)}</p></div>`:""}
    ${t.differentToday?`<div class="read-section"><h3>¿Qué ha sido distinto?</h3><p>${d(t.differentToday)}</p></div>`:""}
    ${t.gratitude?.some(Boolean)?`<div class="read-section"><h3>Agradecimientos</h3><ol>${t.gratitude.filter(Boolean).map(n=>`<li>${d(n)}</li>`).join("")}</ol></div>`:""}
    ${t.tomorrow||t.goals?.length?`<div class="read-section"><h3>Para mañana</h3><p>${d(t.tomorrow)}</p>${t.goals?.length?`<ul>${t.goals.map(n=>`<li>${d(n)}</li>`).join("")}</ul>`:""}</div>`:""}
    ${M.length&&s.length?`<div class="read-section"><h3>Hábitos cumplidos</h3><p>${s.map(n=>d(n.name)).join(" · ")}</p></div>`:""}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      <button class="button danger" data-modal="delete">Eliminar</button>
      <button class="button solid" data-modal="edit">${c("pen")} Editar</button>
    </div>
  </article>`);o.onclick=n=>{const r=n.target.closest("[data-modal]")?.dataset.modal,i=()=>o.close();(r==="close"||n.target===o)&&i(),r==="edit"&&(i(),Ae(t.date)),r==="delete"&&(i(),yo(t.date))}}function Ae(e){if(e>y()){w("Aún no ha llegado.",!0);return}Ia(),S=e,j="diary",Y=!1,na=!1,ae(),x({transition:!0})}function Ia(){Ie("entrada",Ba),Ie("botella",Ra),document.querySelector("#diary-form")&&gt==="draft"&&ca({silent:!0})}function vo(){if(window.innerWidth<=980){Y=!Y,document.querySelector(".sidebar")?.classList.toggle("is-open",Y),document.querySelector(".sidebar-backdrop")?.classList.toggle("is-visible",Y);return}W=!W,m=we({sidebarCollapsed:W});const e=document.querySelector(".sidebar");if(e){e.classList.toggle("is-collapsed",W);const t=e.querySelector(".sidebar-collapse-btn");t&&(t.innerHTML=c(W?"right":"left"),t.title=W?"Desplegar menú · Ctrl+B":"Plegar menú · Ctrl+B",t.setAttribute("aria-expanded",String(!W))),e.classList.add("is-animating"),setTimeout(()=>{e.classList.remove("is-animating"),bt()},420),setTimeout(()=>bt(),60)}}async function yo(e){await It({title:"¿Eliminar esta entrada?",text:`Se borrará del dispositivo el registro de ${B(e)}.`,confirmLabel:"Eliminar",danger:!0})&&(A=tn(e),x(),w("Entrada eliminada."))}function gi(e,t){const a=new Blob([t],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(a),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),1e3)}O.addEventListener("click",async e=>{const t=e.target.closest("[data-view]"),a=e.target.closest("[data-action]");if(e.target.closest(".brand")){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;e.preventDefault(),Ae(y());return}if(t&&!a){if(t.tagName==="A"&&(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0))return;e.preventDefault(),Xn(t.dataset.view,{transition:!0});return}if(!a)return;const{action:o,date:n,range:r,mini:i,key:l,step:u,habit:h,name:g,word:p,tab:v,quote:f,index:q,layout:H,target:z,val:F,monthly:k,id:L,delta:U}=a.dataset;switch(o){case"menu":Y=!Y,x();break;case"close-menu":Y=!1,x();break;case"toggle-sidebar":vo();break;case"archive-tab":fe=v||"list",ae(),re=!0,x();break;case"stats-tab":se=v||"pulse",ae(),re=!0,x();break;case"profile-tab":de=v||"personal",ae(),re=!0,x();break;case"add-part":gs();break;case"part-preset":gs(F);break;case"part-type":{const b=oe(m).map($=>$.key===l?{...$,type:F==="line"?"line":"text"}:$);Se({parts:b},"");break}case"remove-part":{const b=oe(m).find($=>$.key===l);Se({parts:oe(m).filter($=>$.key!==l)},`«${b?.label||"Parte"}» fuera. Lo ya escrito se queda en sus días.`);break}case"add-counter":Or();break;case"remove-counter":{const b=ue(m);if(b.length<=1){w("Deja al menos un contador.",!0);break}const $=b.find(T=>T.key===l);Se({counters:b.filter(T=>T.key!==l)},`«${$?.label||"Contador"}» fuera. Las cifras ya anotadas se conservan.`);break}case"reset-counters":Se({counters:yt.map(b=>({...b}))},"Vuelta a los cuatro de siempre.");break;case"thoughts-tab":V=v||"shore",ke=!0,ae(),re=!0,x();break;case"toggle-thoughts-landscape":ir();break;case"routine-tab":le=v||"hoy",ae(),re=!0,x();break;case"shift-day":{const b=D(S,parseInt(U||"1",10));if(b>y()){w("Ese día todavía no ha llegado.",!0);break}S=b,x(),window.scrollTo({top:0,behavior:"smooth"});break}case"today-routine":S=y(),x();break;case"thoughts-island":{const b=document.querySelector("#thoughts-bottles-drawer");b&&(b.open=!0,ke=!0);break}case"thoughts-top":window.scrollTo({top:0,behavior:te?"smooth":"auto"});break;case"focus-composer":{const b=document.querySelector("#thoughts-bottles-drawer");b?.open&&(b.open=!1,ke=!1);const $=document.querySelector("#bottle-text");$&&($.focus(),$.setSelectionRange($.value.length,$.value.length));break}case"toggle-habit":{const b=n||S;if(b>y()){w("Ese día todavía no ha llegado.",!0);break}const $=A.find(G=>G.date===b),T={...$?.habits||{}},N=!T[h];T[h]=N;try{Qe(b,{habits:T});const G=!$;x(),_r(h);const ne=M.find(et=>et.id===h)?.name||"Hábito",Mt=M.length,da=M.filter(et=>T[et.id]).length;N&&b===y()&&Mt&&da===Mt?w("Rutina de hoy completada"):w(G&&N?`«${ne}» marcado · creé una entrada mínima para ese día`:N?`«${ne}» marcado`:`«${ne}» desmarcado`)}catch(G){w(G.message||"No se pudo guardar el hábito.",!0)}break}case"add-suggested-habit":{if(!g)break;if(M.length>=30){w("Máximo 30 hábitos.",!0);break}if(M.some(b=>b.name.toLowerCase()===g.toLowerCase())){w("Ya está en tu lista.",!0);break}M=zt({name:g}),x(),w(`«${g}» añadido a tu rutina`);break}case"edit-habit":{const b=a.closest(".habit-stat-row"),$=b?.querySelector(".habit-stat-name strong"),T=M.find(G=>G.id===h);if(!$||!T)break;$.outerHTML=`<input class="habit-rename" maxlength="40" value="${d(T.name)}" aria-label="Renombrar hábito">`;const N=b.querySelector(".habit-rename");N.focus(),N.select(),N.addEventListener("keydown",G=>{G.key==="Enter"&&(G.preventDefault(),N.dataset.done="1",fs(h,N.value)),G.key==="Escape"&&(N.dataset.done="1",x())}),N.addEventListener("blur",()=>{N.dataset.done!=="1"&&fs(h,N.value)});break}case"routine-counter-plus":case"routine-counter-minus":{const b=document.querySelector(`[name="counter_${l}"]`);if(!b)break;const $=o==="routine-counter-plus"?1:-1,T=parseFloat(u)||1,N=Math.min(parseFloat(b.max),Math.max(parseFloat(b.min),(parseFloat(b.value)||0)+$*T));b.value=Math.round(N*10)/10,Ir(b,l,parseFloat(b.value)),clearTimeout(bs),bs=setTimeout(Ur,400);break}case"add-goal-routine":{ye();const b=Sa().filter(Boolean);b.push("");try{Qe(S,{goals:b}),x();const $=document.querySelectorAll("#routine-goals .task-input");$[$.length-1]?.focus()}catch($){w($.message||"No se pudo añadir la tarea.",!0)}break}case"remove-goal-routine":{const b=Sa().filter((T,N)=>N!==+q),$=A.find(T=>T.date===S);try{Qe(S,{goals:b.filter(Boolean),tomorrow:document.querySelector("#routine-tomorrow")?.value.trim()??($?.tomorrow||"")}),x()}catch(T){w(T.message||"No se pudo quitar la tarea.",!0)}break}case"open-bottle":ka(L);break;case"recast-bottle":{R=Zs(L),x(),w("Botella enviada de nuevo.");break}case"delete-bottle":Jr(L);break;case"toggle-more-details":{Re=a.getAttribute("aria-expanded")!=="true";const b=++is,$=document.querySelector("#extras-accordion"),T=document.querySelector("#extras-panel");if(a.setAttribute("aria-expanded",String(Re)),!$||!T)break;if(Re)T.hidden=!1,$.classList.remove("is-closing"),$.classList.add("is-open","is-revealing"),setTimeout(()=>$.classList.remove("is-revealing"),360);else{$.classList.remove("is-open","is-revealing"),$.classList.add("is-closing");const N=()=>{!Re&&b===is&&(T.hidden=!0,$.classList.remove("is-closing"))};if(!te){N();break}const G=ne=>{ne.target===T&&(T.removeEventListener("animationend",G),N())};T.addEventListener("animationend",G),setTimeout(()=>{T.removeEventListener("animationend",G),N()},260)}break}case"quick-number":{const b=document.querySelector(`#${z}`);b&&F!==void 0&&(b.value=F,b.classList.remove("num-bump"),b.offsetWidth,b.classList.add("num-bump"),b.dispatchEvent(new Event("input",{bubbles:!0})));break}case"cycle-theme":{const b=ee.findIndex(ne=>ne.id===m.theme),$=ee[(b+1)%ee.length];m=we({theme:$.id}),Me(m.theme,m);const T=document.querySelector(".theme-pill > span:last-child"),N=document.querySelector(".topbar-favicon-mini"),G=document.querySelector(".ex-libris-icon");T&&(T.textContent=$.name),N&&(N.innerHTML=xe(m.theme,m)),G&&(G.innerHTML=xe(m.theme,m)),w(`Tema: ${$.name}`);break}case"open-setup-wizard":fo(1);break;case"open-crisis-modal":bo(v||"help");break;case"dismiss-crisis-banner":na=!0,document.querySelector("#crisis-alert-slot").innerHTML="";break;case"next-daily-word":Ha++,ha(".word-of-day-card");break;case"next-daily-tip":Fa++,ha(".tip-of-day-card");break;case"next-quote":Pa++,Ss();break;case"save-quote":{if(!f)break;const b=m.savedQuotes||[],$=b.includes(f),T=$?b.filter(N=>N!==f):[f,...b];m=we({savedQuotes:T}),Ss(),w($?"Frase quitada de tus guardadas":"Frase guardada en tu perfil");break}case"add-custom-quote":{const $=document.querySelector("#new-custom-quote")?.value.trim();if(!$){w("Escribe una frase primero.",!0);break}m=we({savedQuotes:[$,...m.savedQuotes||[]]}),x(),w("Frase añadida");break}case"remove-saved-quote":{const b=parseInt(q,10),$=(m.savedQuotes||[]).filter((T,N)=>N!==b);m=we({savedQuotes:$}),x(),w("Frase eliminada");break}case"toggle-focus-writing":{nt=!nt,document.querySelector(".diary-layout")?.classList.toggle("is-focus-writing",nt);break}case"history-layout":{jt=H||"grid",x();break}case"use-daily-word":{const b=document.querySelector("#wordOfDay");b&&p&&(b.value=p,b.dispatchEvent(new Event("input",{bubbles:!0})),b.classList.add("highlight-flash"),setTimeout(()=>b.classList.remove("highlight-flash"),900),ha(),w(`«${p}» anotada`));break}case"inspire-prompt":{Ge=!Ge;const b=document.querySelector("#writing-prompt-box");b&&(b.hidden=!Ge,b.classList.toggle("is-open",Ge));break}case"next-writing-prompt":{Nt++;const b=document.querySelector("#writing-prompt-text");b&&(b.classList.remove("text-swap"),b.offsetWidth,b.textContent=ya(S,Nt),b.classList.add("text-swap"));break}case"insert-writing-prompt":{const b=ya(S,Nt),$=document.querySelector("#generalDay");if($){const T=$.value.trim();$.value=T?`${T}

— ${b}
`:`— ${b}
`,$.focus(),$.setSelectionRange($.value.length,$.value.length),$.dispatchEvent(new Event("input",{bubbles:!0}))}break}case"previous":Ae(D(S,-1));break;case"next":Ae(D(S,1));break;case"today":Ae(y());break;case"open-day":Ae(n);break;case"read":hi(n);break;case"delete":yo(n);break;case"add-goal":document.querySelector("#goals").insertAdjacentHTML("beforeend",gr()),document.querySelector("#goals .goal-row:last-child input")?.focus();break;case"remove-goal":a.closest(".goal-row").remove();break;case"counter-plus":case"counter-minus":{const b=document.querySelector(`[name="counter_${l}"]`);if(!b)break;const $=o==="counter-plus"?1:-1,T=parseFloat(u)||1,N=Math.min(parseFloat(b.max),Math.max(parseFloat(b.min),(parseFloat(b.value)||0)+$*T));b.value=Math.round(N*10)/10,b.classList.remove("num-bump"),b.offsetWidth,b.classList.add("num-bump"),b.dispatchEvent(new Event("input",{bubbles:!0}));break}case"add-habit":{const $=document.querySelector("#new-habit")?.value.trim();if(!$){w("Escribe un nombre para el hábito.",!0);break}if(M.length>=30){w("Máximo 30 hábitos.",!0);break}if(M.some(T=>T.name.toLowerCase()===$.toLowerCase())){w("Ya existe un hábito con ese nombre.",!0);break}M=zt({name:$}),x(),document.querySelector("#new-habit")?.focus(),w(`Hábito «${$}» añadido`);break}case"delete-habit":{await It({title:"¿Eliminar este hábito?",text:`Se quitará «${g}» de tu lista actual.`,confirmLabel:"Eliminar",danger:!0})&&(M=sn(h),x(),w("Hábito eliminado"));break}case"month-prev":i==="1"?Et=Ee(Et,-1):K=Ee(K,-1),x();break;case"month-next":i==="1"?Et=Ee(Et,1):K=Ee(K,1),x();break;case"period-prev":k==="1"?K=Ee(K,-1):S=D(S,-7),x();break;case"period-next":k==="1"?K=Ee(K,1):S=D(S,7),x();break;case"range":ze=+r,x();break;case"export":case"backup":gi(`diario-${y()}.json`,pn(A,M,m)),w("Copia descargada");break;case"import":document.querySelector("#import-file").click();break;case"clear":if(await It({title:"¿Borrar todos los datos?",text:"Se eliminarán todas las entradas, hábitos y preferencias de este navegador.",confirmLabel:"Borrar todo",danger:!0}))try{an(),Un(),ra(),S=y(),j="diary",ae(),x(),w("Datos eliminados")}catch(b){w(b.message||"No se han podido eliminar los datos.",!0)}break}});O.addEventListener("keydown",e=>{const t=e.target.closest('.settings-subnav-item[role="tab"]');if(!t)return;const a=[...O.querySelectorAll('.settings-subnav-item[role="tab"]')],s=a.indexOf(t),o=["ArrowDown","ArrowRight"].includes(e.key)?1:["ArrowUp","ArrowLeft"].includes(e.key)?-1:0;if(!o)return;e.preventDefault(),de=a[(s+o+a.length)%a.length].dataset.tab,ae(),re=!0,x(),O.querySelector(`#settings-tab-${de}`)?.focus()});O.addEventListener("change",e=>{if(e.target.id==="import-file"){const t=e.target.files[0];if(!t)return;const a=new FileReader;a.onload=()=>{try{Fe=mn(a.result);const s=Xe(`<div class="modal-card">
          <h2>Importar copia</h2>
          <p>El archivo contiene <strong>${Fe.entries.length}</strong> ${Fe.entries.length===1?"entrada":"entradas"} y <strong>${Fe.habits.length}</strong> ${Fe.habits.length===1?"hábito":"hábitos"}.</p>
          <div class="modal-actions">
            <button class="button outline" data-modal="cancel">Cancelar</button>
            <button class="button solid" data-modal="confirm">Importar</button>
          </div>
        </div>`);s.onclick=o=>{const n=o.target.closest("[data-modal]")?.dataset.modal;if(n==="confirm")try{hn(Fe),ra(),w("Copia importada")}catch(r){w(r.message||"No se ha podido importar la copia.",!0);return}(n||o.target===s)&&(s.close(),x())}}catch(s){w(s.message||"No se ha podido importar el archivo.",!0)}e.target.value=""},a.readAsText(t)}e.target.id==="history-mood"&&(Tt=e.target.value,x()),e.target.id==="history-tag"&&(Dt=e.target.value,x())});O.addEventListener("input",e=>{if(e.target.id==="history-search"){Lt=e.target.value;const t=document.activeElement===e.target;if(x(),t){const a=document.querySelector("#history-search");a.focus(),a.setSelectionRange(a.value.length,a.value.length)}}});window.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="b"&&(e.preventDefault(),vo())});window.addEventListener("beforeunload",Ma);window.addEventListener("storage",e=>{if(!(!e.key||!String(e.key).startsWith("diario.")))try{ra(),x(),w("Otra pestaña cambió el cuaderno: lo he actualizado")}catch(t){w("No pude refrescar los datos: "+t.message,!0)}});"serviceWorker"in navigator&&window.addEventListener("load",()=>{const e=`${ht}/`,t=`${e}sw.js`;navigator.serviceWorker.register(t,{scope:e}).catch(()=>{})});io();window.addEventListener("popstate",()=>{Ia(),za(),Y=!1,io(),re=!0,x({instant:!0})});x();X("idle");const ga=Zt(R).filter(e=>e.seen!==!0);ga.length&&setTimeout(()=>{w(ga.length===1?"Has recibido una botella.":`${ga.length} botellas recibidas.`),document.querySelectorAll(".vault-arrival").forEach((t,a)=>{t.style.setProperty("--wash-delay",`${a*140}ms`),t.classList.add("is-washing")});const e=document.querySelector(".thought-vault");e?.classList.add("is-rising"),setTimeout(()=>e?.classList.remove("is-rising"),1400)},820);

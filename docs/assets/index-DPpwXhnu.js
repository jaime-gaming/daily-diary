(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const R=[{value:1,emoji:"😫",label:"Fatal",color:"#a8442c"},{value:2,emoji:"😕",label:"Flojo",color:"#c2743a"},{value:3,emoji:"😐",label:"Normal",color:"#98938a"},{value:4,emoji:"🙂",label:"Bien",color:"#4e6f52"},{value:5,emoji:"🤩",label:"Genial",color:"#254d32"}],Wo=["L","M","X","J","V","S","D"],kn=["","Muy baja","Baja","Normal","Alta","Muy alta"],xn=["","Muy bajo","Bajo","Normal","Alto","Muy alto"],Qo=["Productivo","Tranquilo","Ajetreado","Social","Solitario","Creativo","Cansado","Motivado","Ansioso","Emocionado","Nostálgico","Aburrido"],Ut=[{key:"water",label:"Agua",unit:"vasos",min:0,max:40,step:1,icon:"drop"},{key:"exercise",label:"Ejercicio",unit:"min",min:0,max:1440,step:5,icon:"run"},{key:"reading",label:"Lectura",unit:"min",min:0,max:1440,step:5,icon:"book"},{key:"mindfulness",label:"Pausa consciente",unit:"min",min:0,max:1440,step:5,icon:"leaf"}],Mn=["drop","run","book","leaf","moon","heart","bolt","sun","gauge","pen","paper","spark"],Vo=[{id:"text",label:"párrafo"},{id:"line",label:"una línea"}],An=[{label:"Cómo responde el cuerpo",hint:"Tensión, digestión, sueño, energía.",type:"text"},{label:"Un pensamiento que no quiero olvidar",hint:"",type:"line"},{label:"Con quién he hablado hoy",hint:"",type:"line"},{label:"Qué me ha costado",hint:"Sin juzgarlo: solo nombrarlo.",type:"text"}],_e=8,We=12,qn=e=>String(e??"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,24),Et=(e,t,a,s)=>{const n=Number(e);return Number.isFinite(n)?Math.min(a,Math.max(t,n)):s},En=e=>`${e}_${Date.now().toString(36).slice(-5)}${Math.floor(Math.random()*1296).toString(36).padStart(2,"0")}`;function Zo(e={}){const t=Ut.find(n=>n.key===e.key),a=qn(e.key);if(!a)return null;const s={key:a,label:String(e.label??t?.label??"Contador").trim().slice(0,28)||t?.label||"Contador",unit:String(e.unit??t?.unit??"").trim().slice(0,14),min:Et(e.min??t?.min,0,9999,0),max:0,step:Et(e.step??t?.step,1,3600,t?t.step:1),goal:Et(e.goal,0,99999,0),icon:Mn.includes(e.icon)?e.icon:t?.icon||"gauge",builtin:!!t};return s.max=Math.max(Et(e.max??t?.max,1,99999,t?t.max:99),s.min+s.step),s}const ka=(e,t={})=>e?.key==="water"?Et(t?.waterGoal,0,25,8):Number(e?.goal)||0;function ye(e={}){const t=Array.isArray(e?.counters)&&e.counters.length?e.counters:Ut,a=new Set;return t.map(Zo).filter(s=>s&&!a.has(s.key)&&(a.add(s.key),!0)).slice(0,We)}function Yo(e={}){const t=qn(e.key),a=String(e.label||"").trim().slice(0,60);return!t||!a?null:{key:t,label:a,hint:String(e.hint||"").trim().slice(0,140),type:e.type==="line"?"line":"text"}}function de(e={}){const t=Array.isArray(e?.parts)?e.parts:[],a=new Set;return t.map(Yo).filter(s=>s&&!a.has(s.key)&&(a.add(s.key),!0)).slice(0,_e)}const Jo=["bestOfDay","differentToday","generalDay","tomorrow","wordOfDay"],ut=[{id:"teen",min:10,max:18,label:"10 – 18 años",title:"Instituto",desc:"Clases, amistades y aficiones.",sleepRecommended:8.5,studyRecommended:2,focusLabel:"Horas de estudio",focusQuestion:"¿Cuánto has estudiado hoy?",tags:["Clases","Exámenes","Amigos","Deporte","Música","Videojuegos","Tarde libre","Tranquilo","Cansado","Motivado","Creativo","Social"],habits:["Hacer tareas sin mirar el móvil","Leer 15 minutos antes de dormir","Moverme o entrenar un rato","Dejar la mochila lista para mañana","Dejar el móvil fuera de la cama","Salir a tomar el aire"],placeholders:{bestOfDay:"Una risa, una partida, una canción…",differentToday:"Algo curioso, una charla, un plan…",generalDay:"¿Cómo te has sentido hoy?",tomorrow:"Una tarea, un plan, un rato de descanso…"}},{id:"young",min:19,max:26,label:"19 – 26 años",title:"Universidad y primeros pasos",desc:"Estudios, trabajo e independencia.",sleepRecommended:8,studyRecommended:3,focusLabel:"Horas de estudio y foco",focusQuestion:"¿Cuánto has estudiado o avanzado en tus proyectos?",tags:["Productivo","Uni / Trabajo","Amigos","Entreno","Creativo","Tranquilo","Cansado","Motivado","Social","Solitario","Nostálgico","Ajetreado"],habits:["Bloque de estudio sin distracciones","Entrenar o caminar 30 min","Leer 20 páginas","Cocinar algo casero","Sin pantallas 30 min antes de dormir","Ordenar mi mesa al acabar"],placeholders:{bestOfDay:"Un avance, un café, una charla…",differentToday:"Un detalle, un encuentro, un cambio…",generalDay:"¿Qué te ronda la cabeza?",tomorrow:"Una tarea, una pausa, un plan…"}},{id:"adult",min:27,max:49,label:"27 – 49 años",title:"Equilibrio y vida propia",desc:"Trabajo, descanso, salud y tiempo personal.",sleepRecommended:7.5,studyRecommended:1.5,focusLabel:"Horas de enfoque o aprendizaje",focusQuestion:"¿Cuánto has aprendido o avanzado en tus proyectos?",tags:["Enfocado","Tranquilo","Trabajo","Familia","Deporte","Lectura","Cansado","Motivado","Social","Creativo","Desconexión","Ajetreado"],habits:["Cerrar el trabajo a mi hora","Caminar 30 minutos sin prisas","Leer antes de apagar la luz","Estirar espalda y cuello","Beber agua durante la jornada","Media hora sin notificaciones"],placeholders:{bestOfDay:"Una sobremesa, un logro, un rato tranquilo…",differentToday:"Un giro, un detalle, algo nuevo…",generalDay:"¿Cómo ha ido el día?",tomorrow:"Prioridades y descanso…"}},{id:"senior",min:50,max:120,label:"50+ años",title:"Bienestar y perspectiva",desc:"Salud, paseos, lectura y recuerdos.",sleepRecommended:7.5,studyRecommended:1,focusLabel:"Tiempo de lectura o dedicación",focusQuestion:"¿Cuánto has leído o dedicado a tus aficiones?",tags:["Sereno","Paseo","Lectura","Familia","Naturaleza","Salud","Agradecido","Activo","Creativo","Social","Tranquilo","Nostálgico"],habits:["Paseo matutino al aire libre","Rato de lectura tranquila","Ejercicios de movilidad suave","Llamar o ver a alguien querido","Cuidar el descanso nocturno","Un momento de silencio y calma"],placeholders:{bestOfDay:"Un paseo, una charla, una lectura…",differentToday:"Una visita, un recuerdo, otro camino…",generalDay:"¿Con qué sensación te quedas?",tomorrow:"Un paseo, una lectura, sin prisa…"}}],_t=[{id:"reading",label:"Lectura",icon:"book",habit:"Leer 20 minutos con calma",tag:"Lectura"},{id:"sport",label:"Deporte",icon:"run",habit:"Entrenar o moverme 30 min",tag:"Deporte"},{id:"study",label:"Estudio",icon:"study",habit:"Sesión de estudio sin móvil",tag:"Productivo"},{id:"music",label:"Música y arte",icon:"spark",habit:"Escuchar un álbum o crear algo",tag:"Creativo"},{id:"nature",label:"Naturaleza",icon:"leaf",habit:"Salir a caminar al aire libre",tag:"Naturaleza"},{id:"social",label:"Amigos",icon:"heart",habit:"Hablar con alguien que quiero",tag:"Social"},{id:"calm",label:"Descanso",icon:"moon",habit:"Apagar pantallas 30 min antes de dormir",tag:"Tranquilo"},{id:"projects",label:"Proyectos",icon:"bolt",habit:"Dedicar 30 min a mi propio proyecto",tag:"Enfocado"},{id:"gaming",label:"Videojuegos",icon:"target",habit:"Parar a tiempo para descansar la vista",tag:"Desconexión"},{id:"cooking",label:"Cocina",icon:"flame",habit:"Preparar una comida casera y tranquila",tag:"Bienestar"}],pt=[{id:"night",label:"Por la noche",icon:"moon"},{id:"morning",label:"Por la mañana",icon:"sun"},{id:"afternoon",label:"A media tarde",icon:"leaf"},{id:"anytime",label:"Cuando quiera",icon:"pen"}],mt=[{id:"warm",label:"Cálido y cercano",desc:"Como hablar con un buen amigo"},{id:"literary",label:"Pausado y literario",desc:"Con gusto por los detalles"},{id:"direct",label:"Directo y práctico",desc:"Claro y al grano"},{id:"gentle",label:"Suave y compasivo",desc:"Amable en días difíciles"}],ne=[{id:"paper",name:"Papel Clásico",desc:"Crema y tinta carbón",colors:["#F3EFE6","#211E17","#B34A2E"],favicon:{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"}},{id:"night",name:"Tinta Nocturna",desc:"Tonos cálidos para la noche",colors:["#151412","#EDE6D8","#D96B4E"],favicon:{bg:"#151412",page:"#272420",accent:"#D96B4E",ink:"#EDE6D8"}},{id:"forest",name:"Bosque Sereno",desc:"Salvia y papel natural",colors:["#EBF0EA","#19241D","#356343"],favicon:{bg:"#19241D",page:"#EBF0EA",accent:"#4C8B5E",ink:"#19241D"}},{id:"terracotta",name:"Atardecer Cálido",desc:"Arcilla y acentos ocre",colors:["#F6ECE4","#261B15","#C45534"],favicon:{bg:"#261B15",page:"#F6ECE4",accent:"#C45534",ink:"#261B15"}},{id:"ocean",name:"Azul Atlántico",desc:"Marfil frío y tinta azul",colors:["#EDF2F6","#16222F","#2B5F8C"],favicon:{bg:"#16222F",page:"#EDF2F6",accent:"#2B5F8C",ink:"#16222F"}},{id:"lavender",name:"Bruma Lavanda",desc:"Lino malva y tinta ciruela",colors:["#F2EEF6","#221B2B","#6E4B8E"],favicon:{bg:"#221B2B",page:"#F2EEF6",accent:"#6E4B8E",ink:"#221B2B"}}],Ln=[{id:"calm",label:"Calma y desahogo",icon:"leaf",desc:"Soltar el ruido del día y quedarme más tranquilo/a."},{id:"focus",label:"Constancia y hábitos",icon:"study",desc:"Cuidar mi estudio, mi descanso y mis rutinas diarias."},{id:"memory",label:"Guardar mi historia",icon:"book",desc:"Que los meses no pasen sin recordar lo que he vivido."},{id:"growth",label:"Conocerme mejor",icon:"spark",desc:"Ver qué cosas me sientan bien y cuáles me quitan energía."}],Ko=["Leer 20 minutos","Caminar al aire libre","Pausa sin pantallas","Beber 8 vasos de agua","Respirar 5 minutos en calma","Dormir a buena hora","Estirar el cuerpo","Ordenar mi espacio"],Hs=[{text:"No todos los días son buenos, pero siempre queda algún rincón que merece la pena guardar.",author:"Nota de cuaderno",tones:["warm","gentle"],ages:["teen","young","adult","senior"]},{text:"Cómo pasamos los días es, al final, cómo pasamos la vida.",author:"Annie Dillard",tones:["literary","direct"],ages:["young","adult","senior"],interests:["reading","projects"]},{text:"Escribir en un diario es hablar contigo sin tener que fingir que todo va perfecto.",author:"Apunte al margen",tones:["direct","warm"],ages:["teen","young","adult"]},{text:"La prisa casi nunca arregla lo que el descanso sí sabe colocar en su sitio.",author:"Cuaderno de calma",tones:["gentle","warm"],ages:["teen","young","adult","senior"],interests:["calm","nature"]},{text:"Un paso corto dado hoy vale más que diez planes perfectos que se quedan para el lunes.",author:"Bitácora personal",tones:["direct"],ages:["teen","young","adult"],interests:["study","sport","projects"]},{text:"Guardar memoria de las cosas pequeñas es la mejor forma de vivir dos veces.",author:"Tradición de lectura",tones:["literary"],ages:["young","adult","senior"],interests:["reading","music"]},{text:"Sé amable con tu propio ritmo: ni los árboles dan fruto todos los meses del año.",author:"Cuaderno de campo",tones:["gentle","literary"],ages:["teen","young","adult","senior"],interests:["nature","calm"]},{text:"Lo que hoy parece un examen gigante o un problema sin salida, dentro de un mes será solo una página pasada.",author:"Nota para días revueltos",tones:["warm","gentle"],ages:["teen","young"],interests:["study","gaming"]}],Ps=[{word:"Ataraxia",origin:"Griego clásico",meaning:"Tranquilidad de ánimo que nace cuando dejamos de pelear contra lo que no depende de nosotros.",prompt:"¿Qué preocupación podrías dejar en pausa por esta noche?"},{word:"Meraki",origin:"Griego moderno",meaning:"Hacer algo poniendo el corazón, el cuidado y una parte de ti en ello.",prompt:"¿En qué detalle pequeño de hoy has puesto ganas o cariño?"},{word:"Kintsugi",origin:"Japonés",meaning:"Oficio de reparar la cerámica rota con barniz de oro, sin esconder las grietas.",prompt:"¿Qué tropiezo reciente te ha servido para aprender algo útil?"},{word:"Komorebi",origin:"Japonés",meaning:"La luz del sol cuando se cuela entre las hojas de los árboles.",prompt:"¿Qué imagen o rincón bonito has visto hoy al pasar?"},{word:"Resiliencia",origin:"Latín",meaning:"La capacidad de encajar un golpe, recuperar el aliento y seguir adelante a tu paso.",prompt:"¿Cómo has tirado hacia delante hoy cuando algo se hacía cuesta arriba?"},{word:"Serendipia",origin:"Castellano",meaning:"Eso bueno que te encuentras por casualidad mientras ibas buscando otra cosa.",prompt:"¿Qué momento no planeado ha merecido la pena hoy?"},{word:"Ubuntu",origin:"Zulú · Xhosa",meaning:"El concepto de que somos quienes somos gracias también a quienes nos rodean.",prompt:"¿Quién te ha hecho el día un poco más fácil o agradable hoy?"},{word:"Ikigai",origin:"Japonés",meaning:"Aquello que te da un motivo concreto para levantarte por la mañana.",prompt:"¿Qué plan o proyecto te apetece de verdad hacer pronto?"},{word:"Wabi-sabi",origin:"Japonés",meaning:"Gustar de las cosas sencillas, imperfectas y gastadas por la vida real.",prompt:"¿En qué cosa imperfecta de hoy puedes dejar de exigirte tanto?"},{word:"Apapachar",origin:"Náhuatl",meaning:"Dar abrigo y consuelo de verdad; cuidar con cercanía.",prompt:"¿Qué necesitas hoy para descansar a gusto?"},{word:"Sosiego",origin:"Castellano",meaning:"Ese silencio tranquilo que queda cuando por fin se acaba la prisa del día.",prompt:"¿En qué momento del día has notado más calma hoy?"},{word:"Epifanía",origin:"Griego",meaning:"Caer en la cuenta de golpe de algo que llevabas tiempo viendo sin entender.",prompt:"¿De qué cosa te has dado cuenta hoy?"},{word:"Bonhomía",origin:"Castellano",meaning:"Trato llano, honesto y amable que no necesita aparentar nada.",prompt:"¿Qué gesto sencillo de amabilidad has visto o tenido hoy?"},{word:"Nefelibata",origin:"Castellano",meaning:"Persona que de vez en cuando camina por las nubes y mira el mundo a su manera.",prompt:"¿En qué se te ha ido el santo al cielo hoy?"},{word:"Templanza",origin:"Latín",meaning:"Guardar el equilibrio y no perder los papeles cuando alrededor hay ruido.",prompt:"¿En qué situación de hoy has sabido mantener la calma?"},{word:"Alba",origin:"Latín",meaning:"La primera claridad de la mañana antes de que asome el sol.",prompt:"¿Cómo te gustaría empezar la mañana de mañana?"},{word:"Saudade",origin:"Portugués",meaning:"Echar de menos con cariño a alguien o a una época en la que fuiste feliz.",prompt:"¿Qué buen recuerdo te ha venido hoy a la cabeza?"},{word:"Lagom",origin:"Sueco",meaning:"Ni de más ni de menos: saber cuándo algo es ya suficiente.",prompt:"¿Con qué cosa de hoy puedes decir tranquilo/a «por hoy ya está bien»?"},{word:"Sisu",origin:"Finés",meaning:"Empuje tranquilo para terminar lo que empezaste aunque estés cansado.",prompt:"¿Qué cosa has sacado adelante hoy aunque te diera pereza?"},{word:"Hygge",origin:"Danés",meaning:"Estar a gusto en lo cotidiano: una charla tranquila, una manta, un rato en casa.",prompt:"¿Qué momento sencillo del día te ha sentado mejor?"},{word:"Querencia",origin:"Castellano",meaning:"El sitio o la gente a la que uno siempre tiene ganas de volver.",prompt:"¿Dónde o con quién te sientes más cómodo/a últimamente?"},{word:"Claridad",origin:"Latín",meaning:"Distinguir lo que de verdad importa de lo que solo hace ruido.",prompt:"Si te quedas con una sola cosa de hoy, ¿cuál eliges?"},{word:"Amparo",origin:"Latín",meaning:"Tener un lugar o una persona donde resguardarse cuando el día se tuerce.",prompt:"¿Qué te reconforta cuando tienes un día torcido?"},{word:"Gratitud",origin:"Latín",meaning:"No dar por supuesto lo bueno que tenemos cerca cada día.",prompt:"¿Qué cosa normal de tu rutina agradecerías si mañana faltara?"}],Fs=[{category:"Autocompasión",title:"No te hables peor que a un amigo",tip:"Cuando estás cansado o algo sale regular, es fácil machacarse. Prueba a decirte exactamente lo que le dirías a alguien a quien aprecias.",action:"Anota algo que hoy hayas hecho lo mejor que podías.",icon:"heart",ages:["teen","young","adult","senior"],interests:["calm","social"]},{category:"Descanso",title:"Bajar el brillo antes de acostarte",tip:"Dejar el móvil o las pantallas un rato antes de meterte en la cama ayuda a que la cabeza deje de saltar de un tema a otro.",action:"Pon la alarma y deja el teléfono lejos de la almohada.",icon:"moon",ages:["teen","young","adult","senior"],interests:["calm","gaming"]},{category:"Calma",title:"Soltar el aire más despacio",tip:"Cuando notes prisa o nudo en el estómago, toma aire contando 4 y suéltalo despacio contando 6. El cuerpo entiende enseguida el mensaje.",action:"Respira hondo tres veces antes de cerrar el cuaderno.",icon:"leaf",ages:["teen","young","adult","senior"],interests:["calm","nature"]},{category:"Enfoque",title:"La regla de los primeros cinco minutos",tip:"Casi siempre cuesta más ponerse que hacerlo. Ponte solo 5 minutos con eso que estás posponiendo; luego decides si sigues.",action:"Deja escrita una sola tarea concreta para mañana.",icon:"study",ages:["teen","young","adult"],interests:["study","projects"]},{category:"Escritura",title:"Aquí nadie te va a poner nota",tip:"No hace falta escribir bonito ni llenar la página. Tres líneas sinceras sobre lo que te ha pasado hoy bastan.",action:"Escribe lo primero que te salga sin borrar.",icon:"pen",ages:["teen","young","adult","senior"],interests:["reading"]},{category:"Hábitos",title:"Un día suelto no rompe nada",tip:"Si ayer no pudiste cumplir un hábito, no pasa nada. Lo que cuenta es retomarlo hoy con naturalidad y sin culpa.",action:"Empieza por el hábito más fácil de tu lista.",icon:"flame",ages:["teen","young","adult","senior"],interests:["projects","sport"]},{category:"Bienestar",title:"A veces el cansancio es sed",tip:"Gran parte del embotamiento de media tarde viene de llevar horas sin beber agua mientras estudias o trabajas.",action:"Ten un vaso o botella a mano mañana por la mañana.",icon:"drop",ages:["teen","young","adult","senior"],interests:["sport","study","cooking"]},{category:"Calma",title:"Sacar el ruido de la cabeza al papel",tip:"Cuando una preocupación da vueltas en bucle, escribirla en una frase la vuelve manejable y libera espacio mental.",action:"Apunta qué te preocupa hoy y qué parte sí está en tu mano.",icon:"book",ages:["teen","young","adult","senior"],interests:["reading","calm"]},{category:"Movimiento",title:"Caminar también ordena los pensamientos",tip:"Quince minutos andando sin mirar el teléfono despejan más la mente que media hora intentando concentrarse a la fuerza.",action:"Sal a dar una vuelta corta mañana cuando te satures.",icon:"run",ages:["teen","young","adult","senior"],interests:["sport","nature"]},{category:"Estudio y memoria",title:"Lo que estudias se fija mientras duermes",tip:"Quitarle horas al sueño para estudiar a última hora suele salir caro: el cerebro consolida lo aprendido durante el descanso.",action:"Prioriza dormir bien hoy para rendir mejor mañana.",icon:"study",ages:["teen","young"],interests:["study"]},{category:"Equilibrio",title:"Cerrar la jornada de verdad",tip:"Tener un pequeño ritual al terminar tus obligaciones —recoger la mesa, ducharte o salir a caminar— separa el deber del descanso.",action:"Elige a qué hora vas a desconectar mañana.",icon:"sun",ages:["young","adult"],interests:["projects","calm"]},{category:"Perspectiva",title:"Cuidar el contacto con los tuyos",tip:"A veces un mensaje corto o una llamada de cinco minutos a alguien que quieres cambia por completo el tono de la semana.",action:"Piensa en alguien con quien te apetezca hablar mañana.",icon:"heart",ages:["teen","young","adult","senior"],interests:["social"]}],zs=["¿Qué rato de hoy te ha dejado buen sabor de boca, aunque haya sido breve?","¿Qué te ha dado más pereza o respeto hoy y cómo lo has llevado?","¿Qué conversación, canción o momento tranquilo te ha acompañado hoy?","¿Qué te gustaría quitarte de la cabeza antes de apagar la luz?","Si un amigo hubiera tenido exactamente tu día de hoy, ¿qué le dirías?","¿En qué momento del día te has sentido más cómodo/a siendo tú?","¿Qué detalle pequeño de hoy no querrías que se te olvidara dentro de un año?","¿Cómo notas el cuerpo esta noche: cansado, inquieto, ligero, tranquilo?","¿Qué cosa sencilla ha salido mejor de lo que esperabas esta mañana?","¿Qué necesitas mañana para que sea un día llevadero y amable?"],Xo=[{number:"024",tel:"tel:024",name:"Línea 024 · Atención a la conducta suicida",detail:"Ministerio de Sanidad · España · gratuita, confidencial y anónima · 24 h.",primary:!0},{number:"717 003 717",tel:"tel:717003717",name:"Teléfono de la Esperanza",detail:"Escucha y apoyo emocional · 24 h.",primary:!0},{number:"900 20 20 10",tel:"tel:900202010",name:"Fundación ANAR · menores y jóvenes",detail:"Gratuita y confidencial · 24 h para jóvenes. Sin rastro en la factura.",primary:!1,youth:!0},{number:"112",tel:"tel:112",name:"Emergencias 112",detail:"Urgencias sanitarias o de seguridad · 24 h.",primary:!1}];function v(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Re(e){return new Date(`${e}T12:00:00`)}function D(e,t){const a=Re(e);return a.setDate(a.getDate()+t),v(a)}function oe(e,t){return Math.round((Date.UTC(...t.split("-").map((a,s)=>+a-(s===1?1:0)))-Date.UTC(...e.split("-").map((a,s)=>+a-(s===1?1:0))))/864e5)}function Wt(e,t){const a=[e,...t.map(s=>s.date)].sort()[0];return oe(a,e)+1}function z(e,t={weekday:"long",day:"numeric",month:"long",year:"numeric"}){return Re(e).toLocaleDateString("es-ES",t)}function xe(e){const t=Re(e).getDay();return D(e,-((t+6)%7))}function Cn(e){const t=Re(e);return[v(new Date(t.getFullYear(),t.getMonth(),1)),v(new Date(t.getFullYear(),t.getMonth()+1,0))]}function Ie(e,t){const a=Re(e);return v(new Date(a.getFullYear(),a.getMonth()+t,1))}function er(e){const[t,a]=Cn(e),s=D(t,-((Re(t).getDay()+6)%7)),n=Math.ceil((oe(s,a)+1)/7)*7;return Array.from({length:n},(o,r)=>({date:D(s,r),inMonth:D(s,r).slice(0,7)===e.slice(0,7)}))}const as=Object.freeze({"/":Object.freeze({view:"diary"}),"/pensamientos":Object.freeze({view:"thoughts",thoughtsTab:"shore"}),"/pensamientos/pendientes":Object.freeze({view:"thoughts",thoughtsTab:"sea"}),"/pensamientos/guardados":Object.freeze({view:"thoughts",thoughtsTab:"kept"}),"/pensamientos/archivados":Object.freeze({view:"thoughts",thoughtsTab:"lost"}),"/rutina":Object.freeze({view:"routine",routineTab:"hoy"}),"/rutina/semana":Object.freeze({view:"routine",routineTab:"week"}),"/rutina/contadores":Object.freeze({view:"routine",routineTab:"counters"}),"/rutina/rachas":Object.freeze({view:"routine",routineTab:"streaks"}),"/archivo":Object.freeze({view:"archive",archiveTab:"list"}),"/archivo/calendario":Object.freeze({view:"archive",archiveTab:"calendar"}),"/progreso":Object.freeze({view:"stats",statsTab:"pulse"}),"/progreso/semana":Object.freeze({view:"stats",statsTab:"week"}),"/progreso/mes":Object.freeze({view:"stats",statsTab:"month"}),"/ajustes":Object.freeze({view:"setup",profileTab:"personal"}),"/ajustes/apariencia":Object.freeze({view:"setup",profileTab:"appearance"}),"/ajustes/contenido":Object.freeze({view:"setup",profileTab:"custom"}),"/ajustes/datos":Object.freeze({view:"setup",profileTab:"data"})});Object.freeze(Object.keys(as));const Bs=e=>{const t=`/${String(e||"").replace(/^\/+|\/+$/g,"")}`;return t==="/"?"/":t};function ms(e=""){const t=String(e||"").trim();return!t||t==="/"?"":`/${t.replace(/^\/+|\/+$/g,"")}`}function tr(e="/",t=""){const a=Bs(e),s=ms(t);return s?a===s?"/":a.startsWith(`${s}/`)?Bs(a.slice(s.length)):a:a}function ar(e="/",t=""){const a=tr(e,t);return{...as[a]||as["/"],path:a}}function Dn(e={}){switch(e.view){case"thoughts":return{sea:"/pensamientos/pendientes",kept:"/pensamientos/guardados",lost:"/pensamientos/archivados"}[e.thoughtsTab]||"/pensamientos";case"routine":return{week:"/rutina/semana",counters:"/rutina/contadores",streaks:"/rutina/rachas"}[e.routineTab]||"/rutina";case"archive":return e.archiveTab==="calendar"?"/archivo/calendario":"/archivo";case"stats":return{week:"/progreso/semana",month:"/progreso/mes"}[e.statsTab]||"/progreso";case"setup":return{appearance:"/ajustes/apariencia",custom:"/ajustes/contenido",data:"/ajustes/datos"}[e.profileTab]||"/ajustes";default:return"/"}}function hs(e={},t=""){const a=ms(t),s=Dn(e);return`${a}${s==="/"?"/":`${s}/`}`}function sr(e=[],t="http://localhost"){for(const a of e){let s;try{s=new URL(a,t).pathname}catch{continue}for(const n of["/assets/","/src/"]){const o=s.lastIndexOf(n);if(o>=0)return ms(s.slice(0,o))}}return""}function nr(){let e=0;return{begin(){return++e},cancel(){e++},isCurrent(t){return t===e}}}const A=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e),Me=e=>e.filter(t=>Number.isFinite(t));function Ct(e){const t=Me(e);return t.length?t.reduce((a,s)=>a+s,0)/t.length:0}function Dt(e){const t=Me(e);return t.length?t.reduce((a,s)=>a+s,0)/t.length:null}function De(e){const t=Me(e).sort((s,n)=>s-n);if(!t.length)return null;const a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function Rs(e){const t=Me(e);if(!t.length)return null;const a=Ct(t);return Math.sqrt(Ct(t.map(s=>(s-a)**2)))}function ge(e,t,a){return e.filter(s=>s.date>=t&&s.date<=a).sort((s,n)=>s.date.localeCompare(n.date))}function jn(e,t,a,s=v()){const n=a>s?s:a,o=t<=n?oe(t,n)+1:0,r=new Set(e.filter(i=>i.date>=t&&i.date<=n).map(i=>i.date)).size;return{recorded:r,days:o,pct:o?Math.round(r/o*100):0}}function fs(e){let t=0,a=0,s;for(const n of[...new Set(e.map(o=>o.date))].sort())a=s&&oe(s,n)===1?a+1:1,t=Math.max(t,a),s=n;return t}function Tn(e,t=v()){const a=new Set(e.map(o=>o.date));let s=a.has(t)?t:D(t,-1),n=0;for(;a.has(s);)n++,s=D(s,-1);return n}function Qt(e){const t=[e.bestOfDay,e.differentToday,e.generalDay,e.tomorrow,...e.gratitude||[],...Object.values(e.parts||{})].join(" ").trim();return t?t.split(/\s+/).length:0}function or(e){return e.reduce((t,a)=>t+Qt(a),0)}function Gs(e,t){return e.filter(a=>a.habits?.[t]).length}function Nn(e,t){return[...new Set(e.filter(a=>a.habits?.[t]).map(a=>a.date))].sort()}function On(e,t){const a=Nn(e,t);let s=0,n=0,o;for(const r of a)n=o&&oe(o,r)===1?n+1:1,s=Math.max(s,n),o=r;return s}function xa(e,t,a=v()){const s=new Set(Nn(e,t));if(!s.size)return 0;let n=s.has(a)?a:D(a,-1),o=0;for(;s.has(n);)o++,n=D(n,-1);return o}function Hn(e,t,a=28,s=v()){const n=D(s,1-a),o=e.filter(c=>c.date>=n&&c.date<=s),r=o.filter(c=>c.habits?.[t]).length,i=o.length,l=Math.min(a,oe(n,s)+1);return{done:r,tracked:i,window:l,pct:i?Math.min(100,Math.round(r/i*100)):0}}function rr(e,t,a=28,s=v(),n=v()){const o=Array.from({length:a},(i,l)=>D(s,l-a+1)),r=new Map(e.map(i=>[i.date,i]));return{dates:o,rows:t.map(i=>({habit:i,cells:o.map(l=>({date:l,done:!!r.get(l)?.habits?.[i.id],future:l>n,recorded:r.has(l)}))}))}}function Is(e){const t=new Map;for(const a of e)for(const s of a.tags||[])t.set(s,(t.get(s)||0)+1);return[...t.entries()].sort((a,s)=>s[1]-a[1])}function Qe(e=[]){const t=new Map;for(const m of e)m?.date&&t.set(m.date,m);const a=[...t.values()].sort((m,p)=>m.date.localeCompare(p.date)),s=m=>a.map(p=>p[m]),n=m=>Me(s(m)).length,o=m=>a.filter(p=>Number.isFinite(p[m])).reduce((p,y)=>!p||y[m]>p[m]?y:p,null),r=s("mood"),i=s("sleepHours"),l=s("studyHours"),c=[...new Set(a.flatMap(m=>Object.keys(m.counters||{})))],f=Object.fromEntries(c.map(m=>{const p=a.map(y=>y.counters?.[m]);return[m,{total:Me(p).reduce((y,b)=>y+b,0),average:Dt(p),median:De(p),count:Me(p).length}]}));return{count:a.length,mood:Ct(r),energy:Dt(s("energy")),stress:Dt(s("stress")),sleep:Ct(i),study:Ct(l),moodMedian:De(r),sleepMedian:De(i),studyMedian:De(l),moodStdDev:Rs(r),sleepStdDev:Rs(i),metricCounts:{mood:n("mood"),sleep:n("sleepHours"),study:n("studyHours"),energy:n("energy"),stress:n("stress")},totalSleep:Me(i).reduce((m,p)=>m+p,0),totalStudy:Me(l).reduce((m,p)=>m+p,0),words:or(a),best:o("mood"),worst:a.filter(m=>Number.isFinite(m.mood)).reduce((m,p)=>!m||p.mood<m.mood?p:m,null),mostStudy:o("studyHours"),mostSleep:o("sleepHours"),maxStreak:fs(a),moods:[1,2,3,4,5].map(m=>a.filter(p=>p.mood===m).length),counters:f}}function Pn(e){return e<6?"Has dormido poco.":e<7?"Una cantidad algo baja.":e<=9?"Un descanso razonable.":"Has dormido bastante."}function ir(e){return e===0?"Hoy no has dedicado tiempo al estudio.":e<1?"Has hecho un poco de estudio.":e<3?"Has tenido una sesión de estudio considerable.":e<5?"Has dedicado bastante tiempo.":"Ha sido un día de estudio intenso."}function Ma(e,t,a=null){if(a&&!a.builtin)return lr(a,t);switch(e){case"water":return t===0?"Sin registrar agua hoy.":t<4?"Poca agua registrada.":t<8?"Una hidratación razonable.":"Buen nivel de hidratación.";case"exercise":return t===0?"Sin ejercicio registrado hoy.":t<20?"Un poco de movimiento.":t<60?"Una sesión de ejercicio notable.":"Un día muy activo.";case"reading":return t===0?"Sin lectura registrada hoy.":t<20?"Unas páginas para hoy.":t<60?"Una buena sesión de lectura.":"Un día de mucha lectura.";default:return t===0?"Sin pausa consciente registrada.":t<10?"Un momento de pausa.":t<30?"Una práctica considerable.":"Una práctica muy constante hoy."}}function lr(e,t){const a=e.unit?` ${e.unit}`:"",s=Number(e.goal)||0;return t?s&&t>=s?`Meta cumplida: ${t} de ${s}${a}.`:s?`Vas a ${t} de ${s}${a}.`:`${t}${a} hoy.`:"Sin registrar hoy."}const cr=["","Hoy ha sido un día difícil.","Hoy ha sido un día flojo.","Hoy ha sido un día normal.","Hoy ha sido un día bueno.","Hoy ha sido un día genial."];function dr(e){const t=[cr[e.mood],`Has dormido ${A(e.sleepHours)} horas y has dedicado ${A(e.studyHours)} horas al estudio.`,Pn(e.sleepHours),ir(e.studyHours)];e.energy&&t.push(`Tu energía se ha sentido ${["","muy baja","baja","normal","alta","muy alta"][e.energy].toLowerCase()}.`),e.stress&&t.push(`El estrés ha sido ${["","muy bajo","bajo","normal","alto","muy alto"][e.stress].toLowerCase()}.`);const a=Object.values(e.habits||{}).filter(Boolean).length;a&&t.push(`Has cumplido ${a} de tus hábitos de hoy.`);const s=e.counters?.water||0;return s>=6&&t.push(`Además, has bebido ${s} vasos de agua.`),t.join(" ")}function ur(e,t=!1){if(!e.count)return"Aún no hay entradas en este período.";const a=e.metricCounts?.mood?`${A(e.mood)}/5`:"sin valoración registrada",s=e.metricCounts?.sleep?`${A(e.sleep)} h de media`:"sin datos de sueño",n=e.metricCounts?.study?`${A(e.study)} h por día con dato`:"sin datos de dedicación",o=e.count===1?"día":"días",r=e.metricCounts?.study?`${A(e.totalStudy)} horas en total`:"sin datos de dedicación",i=t?`En el período has registrado ${e.count} ${o}. Tu valoración media ha sido ${a}. Estudio: ${r}; sueño: ${s}.`:`En la semana has registrado ${e.count} ${o}. Tu valoración media ha sido ${a}; el sueño, ${s}, y la dedicación, ${n}.`,l=[];return Number.isFinite(e.energy)&&l.push(`Tu energía media ha sido ${A(e.energy)}/5`),Number.isFinite(e.stress)&&l.push(`el estrés medio ${A(e.stress)}/5`),e.words&&l.push(`has escrito ${A(e.words)} palabras`),l.length?`${i} ${l.join(", ")}.`:i}function pr(e,t=v()){const a=ge(e,D(t,-6),t),s=ge(e,D(t,-13),D(t,-7)),n=[];if(a.length>=3&&s.length>=3){const p=Qe(a),y=Qe(s),b=(x,N,T,j)=>{const[q,_]=x;if(p.metricCounts[_]<3||y.metricCounts[_]<3)return;const O=p[q]-y[q];O>=N?n.push(T):O<=-N&&n.push(j)};b(["sleepMedian","sleep"],.5,"En tus registros recientes, el valor habitual de sueño ha subido respecto a la semana anterior.","En tus registros recientes, el valor habitual de sueño ha bajado respecto a la semana anterior."),b(["studyMedian","study"],.5,"Has dedicado más tiempo al estudio o enfoque que en los 7 días anteriores.","Has dedicado menos tiempo al estudio o enfoque que en los 7 días anteriores."),b(["moodMedian","mood"],.4,"Tu valoración habitual del día ha subido respecto a la semana anterior.","Tu valoración habitual del día ha bajado respecto a la semana anterior."),b(["energy","energy"],.4,"Tu energía registrada ha sido mayor que en la semana anterior.","Tu energía registrada ha sido menor que en la semana anterior."),b(["stress","stress"],.4,"Tu estrés registrado ha sido mayor que en la semana anterior.","Tu estrés registrado ha sido menor que en la semana anterior."),!n.length&&p.metricCounts.mood>=3&&y.metricCounts.mood>=3&&n.push("Tus registros de ánimo se han mantenido bastante estables respecto a los 7 días anteriores.")}const o=ge(e,D(t,-29),t),r=p=>p.filter(y=>Number.isFinite(y.mood)).length>=5,i=o.filter(p=>Number.isFinite(p.sleepHours)&&p.sleepHours>7),l=o.filter(p=>Number.isFinite(p.sleepHours)&&p.sleepHours<=7);r(i)&&r(l)&&De(i.map(y=>y.mood))-De(l.map(y=>y.mood))>=.5&&n.push("En tus registros del último mes, dormir más de 7 horas coincide con una valoración habitual algo más alta. Es una asociación, no una causa demostrada.");const c=o.filter(p=>Number.isFinite(p.counters?.exercise)),f=c.filter(p=>p.counters.exercise>=20),m=c.filter(p=>p.counters.exercise<20);return r(f)&&r(m)&&De(f.map(y=>y.mood))-De(m.map(y=>y.mood))>=.5&&n.push("En tus registros, los días con 20 minutos o más de ejercicio coinciden con una valoración habitual algo más alta. Es una asociación, no una causa demostrada."),n}const mr=["lunes","martes","miércoles","jueves","viernes","sábado","domingo"];function hr(e){return(Re(e).getDay()+6)%7}function fr(e=[],t=[],a=v()){const s=[...new Map(e.filter(o=>o?.date&&o.date<=a).map(o=>[o.date,o])).values()],n=mr.map((o,r)=>({index:r,name:o,entries:0,moodTotal:0,moodCount:0,habitDone:0,habitSlots:0}));for(const o of s){const r=n[hr(o.date)];r.entries++,Number.isFinite(o.mood)&&(r.moodTotal+=o.mood,r.moodCount++);for(const i of t)r.habitSlots++,o.habits?.[i.id]&&r.habitDone++}return n.map(o=>({index:o.index,name:o.name,entries:o.entries,mood:o.moodCount?o.moodTotal/o.moodCount:null,moodCount:o.moodCount,habitPct:o.habitSlots?Math.round(o.habitDone/o.habitSlots*100):null,habitDays:o.habitDone}))}function Us(e=[],t="mood",a=3){const s=c=>t==="habit"?c.habitPct:c.mood,n=c=>t==="habit"?c.habitSlots:c.moodCount,o=e.filter(c=>n(c)>=a&&Number.isFinite(s(c)));if(o.length<3)return"";const r=[...o].sort((c,f)=>s(f)-s(c)),i=r[0],l=r[r.length-1];return t==="habit"?i.habitPct-l.habitPct<15?"Cumples la rutina parecido todos los días de la semana.":`Los ${i.name} cumples la rutina más a menudo (${i.habitPct}%) y los ${l.name}, menos (${l.habitPct}%).`:s(i)-s(l)<.4?"Tu ánimo se parece bastante todos los días de la semana.":`Los ${i.name} es cuando mejor te sientes (${A(s(i))}/5 de media) y los ${l.name}, cuando más te cuesta (${A(s(l))}/5).`}const et=29.530588853,gr="2000-01-06",_s=2.5,ss=[{id:"shore",label:"A la orilla",desc:"Muy cerca: vuelve en cuanto suba la marea.",min:2,max:7,chance:.94,miles:9,reach:"se ve desde la arena"},{id:"breeze",label:"Brisa costera",desc:"Un par de semanas dando tumbos por la bahía.",min:9,max:28,chance:.8,miles:17,reach:"cruza la bahía"},{id:"current",label:"Corriente del norte",desc:"Semanas de travesía; ya no se ve desde la playa.",min:28,max:80,chance:.63,miles:34,reach:"dobló el cabo"},{id:"deep",label:"Alta mar",desc:"Meses lejos. Puede que no vuelva nunca.",min:80,max:240,chance:.42,miles:58,reach:"más allá del mapa"}],br=["la corriente del Golfo","el Noroeste","los Alisios","la deriva de Levante","el canal viejo","la corriente fría","el remolino de poniente","la resaca del faro"],ha=[{id:"amber",name:"ámbar",hex:"#B4762E"},{id:"green",name:"verde botella",hex:"#3E6B4F"},{id:"blue",name:"azul cobalto",hex:"#3B5F86"},{id:"smoke",name:"humo",hex:"#6E6257"},{id:"rose",name:"rosa viejo",hex:"#A65B4E"},{id:"clear",name:"cristal",hex:"#7F8E93"}];function Aa(e=""){let t=2166136261;const a=String(e);for(let s=0;s<a.length;s++)t^=a.charCodeAt(s),t=Math.imul(t,16777619);return t>>>0}function Fn(e=0){let t=e>>>0;return()=>{t=t+1831565813>>>0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a>>>0,((a^a>>>14)>>>0)/4294967296}}const Lt=(e,t)=>(e%t+t)%t,Ws=(e,t)=>e[Math.floor(t()*e.length)%e.length],yr=["luna nueva","luna creciente","cuarto creciente","gibosa creciente","luna llena","gibosa menguante","cuarto menguante","luna menguante"],fa=e=>Math.min(1,Math.max(0,e));function zn(e=new Date){const t=e.getHours()+e.getMinutes()/60+e.getSeconds()/3600,a=6,s=18,n=r=>Math.round(r*10)/10;if(t>=a&&t<s){const r=(t-a)/(s-a);return{x:n(8+84*r),y:n(46-6*Math.sin(Math.PI*r)),moonX:50,moonY:42,phase:r<.22?"morning":r>.78?"evening":"day",progress:n(r)}}const o=t>=s?(t-s)/12:(t+6)/12;return{x:t<a?8:92,y:94,moonX:n(8+84*o),moonY:n(58-20*Math.sin(Math.PI*o)),phase:"night",progress:n(o)}}function vr(e=v()){return Lt(oe(gr,e)+.765,et)}function gs(e=v()){const t=vr(e),a=et/2,s=Math.min(Lt(t,a),a-Lt(t,a)),n=t<a;let o="swell",r="Marea en movimiento",i=.6;s<=_s?(o="spring",r="Marea viva",i=1):Math.abs(Lt(t,a)-a/2)<=_s?(o="neap",r="Marea muerta",i=.28):n?(o="rising",r="Marea creciente",i=.7):(o="falling",r="Marea menguante",i=.5);const l=fa((1-Math.cos(2*Math.PI*t/et))/2),c=yr[Math.floor(Lt(t+et/16,et)/(et/8))%8];return{age:t,key:o,name:r,strength:i,rising:n,illum:l,moon:Math.round(l*100)/100,phase:c}}function $r(e=v()){return gs(e).key==="spring"}function wr(e,t=16){for(let a=0;a<=t;a++){const s=D(e,a);if($r(s))return s}return e}const na=[{id:"calm",label:"mar en calma",short:"calma",desc:"Agua plana: la botella avanza despacio, pero no se pierde de vista.",speed:.82,push:0,water:.34,rough:0},{id:"haze",label:"bruma",short:"bruma",desc:"Niebla espesa: se pierde la referencia de la orilla algún día más.",speed:.92,push:1,water:.3,rough:.25},{id:"wind",label:"viento a favor",short:"viento",desc:"Sopla hacia fuera y hacia casa: la travesía se acelera.",speed:1.24,push:0,water:.58,rough:.5},{id:"rain",label:"lluvia",short:"lluvia",desc:"Llueve sobre el agua: corrientes revueltas, llegadas inciertas.",speed:1.05,push:1,water:.66,rough:.62},{id:"gale",label:"temporal",short:"temporal",desc:"Con este mar no entra nada en la bahía: la botella espera fuera.",speed:1.42,push:2,water:.92,rough:1}],Za=[{id:"levante",label:"levante"},{id:"poniente",label:"poniente"},{id:"noroeste",label:"el noroeste"},{id:"gallego",label:"el gallego"},{id:"suroeste",label:"suroeste"},{id:"mistral",label:"el mistral"},{id:"libeccio",label:"libeccio"},{id:"gregal",label:"gregal"}],Qs=new Set(["levante","el mistral","gregal","suroeste"]);function Bn(e=v()){const t=Fn(Aa(`parte|${e}`)),a=t(),s=t(),n=t(),o=Math.min(na.length-1,Math.floor(Math.pow(a,1.7)*na.length)),r=na[o],i=Za[Math.floor(s*Za.length)%Za.length],l=Math.round(4+n*12+r.rough*38),c=gs(e);return{date:e,weather:r,wind:{...i,kmh:l,offshore:Qs.has(i.id)},level:fa(r.water*.7+c.strength*.42),rough:fa(r.rough*.72+(c.strength-.5)*.4),speed:r.speed,push:Qs.has(i.id)?r.push+1:r.push,tide:c}}function Sr(e="breeze"){return ss.find(t=>t.id===e)||ss.find(t=>t.id==="breeze")}function Rn(e=3){if(e==null||e==="")return 3;const t=Number(e);return Number.isFinite(t)?Math.max(1,Math.min(5,Math.round(t))):3}function kr({text:e="",castAt:t=v(),sea:a="breeze",id:s="",force:n=3}={}){const o=Sr(a),r=Rn(n),i=Fn(Aa(`${t}|${o.id}|${s}|${String(e).trim().slice(0,220)}`)),l=i(),c=i(),f=i(),m=i(),p=Bn(t),y=.7+(r-1)*.225,b=Math.max(1,Math.round((o.min+l*(o.max-o.min))*y)),x=c<o.chance,N=Math.max(4,Math.round(o.miles*(.7+f*.6)*p.speed)),T=D(t,b),j=p.push>0?D(T,p.push):T,q=x?wr(j):T,_=Math.max(3,Math.round(b*.22));return{sea:o.id,force:r,returns:x,speed:N,driftDays:Math.max(1,oe(t,q)),arriveOn:q,lostOn:x?null:D(t,b+_),current:Ws(br,i),glass:Ws(ha,i).id,mottoSeed:Math.floor(m*1e6),weather:p.weather.id,wind:p.wind.label,windSpeed:p.wind.kmh,push:p.push}}const jt=e=>typeof e=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e);function ns(e,t=v()){return!e||!jt(e.castAt)||!jt(t)?0:Math.max(0,oe(e.castAt,t))}function Pe(e,t=v()){return e?e.status&&e.status!=="drifting"?e.status:e.returns?t>=(e.arriveOn||e.castAt)?"returned":"drifting":e.lostOn&&t>=e.lostOn?"lost":"drifting":"drifting"}function bs(e,t=v()){return!!e&&Pe(e,t)==="returned"}function Gn(e,t=v()){if(!e||typeof e!="object")return e;const a=Pe(e,t);if(a===e.status)return e;const s=new Date().toISOString();return a==="returned"?{...e,status:"returned",returnedAt:e.arriveOn||v(),seen:!1,updatedAt:s}:a==="lost"?{...e,status:"lost",lostAt:e.lostOn||v(),seen:!1,updatedAt:s}:e}function os(e){return e?!e.returns&&jt(e.lostOn)?e.lostOn:jt(e.arriveOn)?e.arriveOn:jt(e.castAt)?e.castAt:null:null}function xr(e,t=v()){const a=os(e);if(!a)return{fate:Pe(e,t),pct:0,atSea:0,total:0,horizon:null,miles:0,milesHome:null,label:"sin fecha de salida",phase:"mid"};const s=Math.max(1,oe(e.castAt,a)),n=ns(e,t),o=Pe(e,t),r=o==="drifting"?fa(n/s):1,i=Math.round(n*(e.speed||10)),l=o==="drifting"&&!e.returns?null:Math.max(0,s-n)*(e.speed||10);return{fate:o,pct:r,atSea:n,total:s,horizon:a,miles:i,milesHome:l===null?null:Math.round(l),label:o==="drifting"?`día ${n} de ${s}`:o==="returned"?"de vuelta a casa":"a pique",phase:o==="returned"?"home":o==="lost"?"lost":r<.18?"near":r<.62?"mid":"far"}}function Vt(e=[],t=v()){const a={drifting:[],returned:[],lost:[],kept:[]};for(const s of e)a[Pe(s,t)]?.push(s);a.kept=e.filter(s=>s.kept&&Pe(s,t)==="returned"),a.drifting.sort((s,n)=>s.castAt.localeCompare(n.castAt));for(const s of["returned","lost"])a[s].sort((n,o)=>String(o.returnedAt||o.lostAt||o.castAt).localeCompare(String(n.returnedAt||n.lostAt||n.castAt)));return a.returned.sort((s,n)=>(s.seen===!0)-(n.seen===!0)||String(n.returnedAt||"").localeCompare(String(s.returnedAt||""))),a.kept.sort((s,n)=>String(n.keptOn||"").localeCompare(String(s.keptOn||""))),a}function qa(e=[],t=v()){return e.filter(a=>Pe(a,t)==="returned")}function Vs(e,t=v()){if(!e)return"";const a=xr(e,t);if(!a.total)return"Sin fecha de salida.";if(a.fate==="returned"){const s=Math.max(0,oe(e.castAt,os(e)));return s<=1?"Volvió al día siguiente.":`Volvió a los ${s} días, con la marea viva.`}if(a.fate==="lost"){const s=Math.max(0,oe(e.castAt,os(e)));return s<=1?"Se perdió en la primera noche.":`Se perdió a los ${s} días de viaje.`}return`Lleva ${a.atSea===1?"un día":`${a.atSea} días`} en el mar.`}function Mr(e=[],t=v()){const a=Array.isArray(e)?e.filter(Boolean):[],s=Vt(a,t),n=a.length,o=s.returned.length+s.lost.length,r=a.reduce((c,f)=>c+Math.round(ns(f,t)*(f.speed||0)),0),i=s.returned.filter(c=>String(c.reply||"").trim()).length,l=s.drifting.reduce((c,f)=>{const m=ns(f,t);return!c||m>c.days?{bottle:f,days:m}:c},null);return{sent:n,drifting:s.drifting.length,returned:s.returned.length,lost:s.lost.length,kept:s.kept.length,waiting:s.returned.filter(c=>c.seen!==!0).length,answered:i,returnPct:o?Math.round(s.returned.length/o*100):null,miles:r,oldestAtSea:l,latestReturn:s.returned[0]||null}}function Ar(e=""){const t=String(e||"").trim();return t?t.split(/\s+/).length:0}const rs=new Set,U=new Map;let ce=null;const at="diario.pendiente.v1";function qr(){const e={};for(const[t,a]of U)e[t]={value:a.value,label:a.label};return e}function Ot(){const e=U.size?JSON.stringify(qr()):null;bt(at)!==e&&Ne(at,e)}function Er(){const e=bt(at);if(!e)return;let t=null;try{t=JSON.parse(e)}catch{Ne(at,null);return}if(!t||typeof t!="object"){Ne(at,null);return}for(const[n,o]of Object.entries(t))!o||typeof o!="object"||U.has(n)||U.set(n,{value:o.value??null,label:String(o.label||"Los datos"),prune:null});if(!U.size){Ne(at,null);return}const[a,s]=[...U.entries()][U.size-1];ce={key:a,label:s.label,reason:"unknown",at:new Date().toISOString(),message:`${s.label}: quedó algo sin guardar la última vez, se sigue intentando.`}}function Lr(e){const a=`${String(e?.name||"")} ${e?.message||""}`;return/quota|QuotaExceeded|NS_ERROR_DOM_QUOTA_REACHED|storage.*full|lleno|exceeded/i.test(a)?"full":/security|SecurityError|denied|blocked|not allowed|insecure/i.test(a)?"blocked":"unknown"}function ys(e){return e==="full"?"El almacenamiento del navegador está lleno.":e==="blocked"?"El navegador tiene bloqueado el almacenamiento para esta página.":"El navegador no ha podido guardar los datos."}function vs(){return ce}function In(){return U.size}function Zt(){return U.size>0}function Cr(e){return typeof e!="function"?()=>{}:(rs.add(e),()=>rs.delete(e))}function Ht(){const e={issue:ce,pending:U.size};for(const t of[...rs])try{t(e)}catch{}}function bt(e){try{return localStorage.getItem(e)}catch{return null}}function Ne(e,t){try{if(t===null)localStorage.removeItem(e);else if(localStorage.setItem(e,t),localStorage.getItem(e)!==t)return{ok:!1,reason:"full"};return{ok:!0}}catch(a){return{ok:!1,reason:Lr(a),error:a}}}function Se(e,t,{label:a="Los datos",prune:s=null}={}){let n=Ne(e,t);if(!n.ok&&n.reason==="full"&&typeof s=="function"){try{s()}catch{}n=Ne(e,t)}return n.ok?(U.delete(e),U.size||(ce=null),Ot(),Ht(),{ok:!0}):(U.set(e,{value:t,label:a,prune:s}),ce={key:e,label:a,reason:n.reason,at:new Date().toISOString(),message:`${a}: ${ys(n.reason)}`},Ot(),Ht(),{ok:!1,reason:n.reason,queued:!0,message:ce.message})}function Un(){if(!U.size)return{ok:!0,remaining:0,recovered:0};let e=0;for(const[t,a]of[...U.entries()]){let s=Ne(t,a.value);if(!s.ok&&s.reason==="full"&&typeof a.prune=="function"){try{a.prune()}catch{}s=Ne(t,a.value)}s.ok&&(U.delete(t),e++)}if(!U.size)ce=null;else{const[t,a]=[...U.entries()][U.size-1];ce={key:t,label:a.label,reason:ce?.reason||"unknown",at:new Date().toISOString(),message:`${a.label}: ${ys(ce?.reason||"unknown")}`}}return Ot(),Ht(),{ok:!U.size,remaining:U.size,recovered:e}}function Dr(e){return U.delete(e)?(U.size||(ce=null),Ot(),Ht(),!0):!1}function jr(){U.clear(),ce=null,Ot(),Ht()}Er();const ht="diario.drafts.v1",Tr=6e3,Nr=60,G={entry:e=>`entrada:${e}`,bottle:()=>"botella",reply:e=>`respuesta:${e}`,tomorrow:()=>"manana",setup:()=>"perfil",wizard:()=>"asistente"};function ue(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function oa(e,t=Tr){const a=String(e??"");return a.length>t?a.slice(0,t):a}function yt(){const e=bt(ht);if(!e)return{};try{const t=JSON.parse(e);return ue(t)?t:{}}catch{return{}}}function Or(e,t,a=null){const s=Object.keys(e);if(s.length<=t)return e;const n=s.filter(i=>i!==a).sort((i,l)=>String(e[l]?.savedAt||"").localeCompare(String(e[i]?.savedAt||""))),o=Math.max(0,t-(a&&a in e?1:0)),r=Object.fromEntries(n.slice(0,o).map(i=>[i,e[i]]));return a&&a in e&&(r[a]=e[a]),r}function $s(e,t=null){const a=Object.keys(e);if(!a.length){const i=Se(ht,null,{label:"Los borradores"});return{ok:i.ok,map:{},reason:i.reason}}const s=[];for(const i of[1,2,4,8])s.push(Math.max(1,Math.ceil(a.length/i)));s.push(1);let n=1/0,o=e,r={ok:!1,reason:"unknown"};for(const i of s){const l=Math.min(i,a.length);if(!(l>=n)){if(n=l,o=Or(e,Math.min(l,Nr),t),r=Se(ht,JSON.stringify(o),{label:"Los borradores"}),r.ok)return{ok:!0,map:o};if(l===1)break}}return{ok:!1,map:o,reason:r.reason}}function Ea(e,t){if(!e)return null;const a={};let s=0;for(const[i,l]of Object.entries(ue(t)?t:{}))if(l!=null){if(typeof l=="string"){const c=oa(l);if(!c.trim())continue;a[i]=c,s++}else if(typeof l=="number"||typeof l=="boolean")a[i]=l,s++;else if(Array.isArray(l)){const c=l.map(f=>typeof f=="string"?oa(f,600):f).filter(f=>typeof f!="string"||f.trim());c.length&&(a[i]=c,s++)}else if(ue(l)){const c={};for(const[f,m]of Object.entries(l))typeof m=="number"||typeof m=="boolean"?c[f]=m:typeof m=="string"&&m.trim()&&(c[f]=oa(m,600));Object.keys(c).length&&(a[i]=c)}}if(!s)return re(e),null;const n=yt(),o=new Date().toISOString();n[e]={data:a,savedAt:o};const r=$s(n,e);return{savedAt:o,ok:r.ok,reason:r.reason}}function ws(e){if(!e)return null;const t=yt()[e];return ue(t)?t:null}function qe(e){const t=ws(e);return t&&ue(t.data)?t.data:null}function re(e){if(!e)return!1;const t=yt();return e in t?(delete t[e],$s(t),!0):!1}function Hr(){const e=yt();return Object.entries(e).filter(([,t])=>ue(t)&&ue(t.data)).map(([t,a])=>({scope:t,savedAt:a.savedAt||"",data:a.data})).sort((t,a)=>String(a.savedAt).localeCompare(String(t.savedAt)))}function _n(e,t){const a=ws(e);return a?.savedAt?t?String(a.savedAt)>String(t):!0:!1}function Pr(e,t=Date.now()){const a=ws(e);if(!a?.savedAt)return null;const s=Date.parse(a.savedAt);return Number.isFinite(s)?Math.max(0,Math.round((t-s)/6e4)):null}function Fr(e,t=Date.now()){const a=qe(e);if(!a)return null;const s=Object.values(a).filter(r=>typeof r=="string").join(" ").trim().split(/\s+/).filter(Boolean).length,n=Pr(e,t),o=n===null?"":n<1?"ahora mismo":n<60?`hace ${n} min`:`hace ${Math.round(n/60)} h`;return{words:s,when:o,minutes:n}}function Zs(e){if(e==="botella")return"Una botella sin soltar";if(e==="perfil")return"Tu perfil, a medio editar";if(e==="asistente")return"La bienvenida, a medio rellenar";if(e==="manana")return"La lista de mañana";if(e.startsWith("respuesta:"))return"Una respuesta a una botella";if(e.startsWith("entrada:")){const t=e.slice(8);return/^\d{4}-\d{2}-\d{2}$/.test(t)?`La entrada de ${z(t)}`:"Una entrada sin terminar"}return"Un texto a medias"}function zr(){const e=yt();return Object.fromEntries(Object.entries(e).filter(([,t])=>ue(t)&&ue(t.data)))}function Br(e){const t=ue(e)?e:{},a=yt();let s=!1;for(const[o,r]of Object.entries(t)){if(!ue(r)||!ue(r.data))continue;const i=typeof r.savedAt=="string"?r.savedAt:"";if(!i)continue;const l=a[o];if(l&&String(l.savedAt||"")>=i)continue;const c={};for(const[f,m]of Object.entries(r.data))if(typeof m=="string"){const p=oa(m);p.trim()&&(c[f]=p)}else(typeof m=="number"||typeof m=="boolean")&&(c[f]=m);Object.keys(c).length&&(a[o]={data:c,savedAt:i},s=!0)}if(!s)return{ok:!0,map:a,merged:0};const n=$s(a);return{ok:n.ok,map:n.map,merged:Object.keys(t).length}}function Rr(){return Se(ht,null,{label:"Los borradores"}),!0}const Ve="diario.pendiente-dia.v1",Ys=60,Wn=2e4,Gr=4e3,Ir=20,Ur=30,Js=/^[\w-]{1,24}$/,La=["bestOfDay","differentToday","generalDay","tomorrow","wordOfDay","capsule"],Ca=["mood","energy","stress"],Da=["sleepHours","studyHours"];function Q(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function vt(e){return typeof e=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e)}function At(e,t=Wn){const a=String(e??"");return a.length>t?a.slice(0,t):a}function $t(){const e=bt(Ve);if(!e)return{};try{const t=JSON.parse(e);return Q(t)?t:{}}catch{return{}}}function Qn(){return Object.keys($t()).filter(vt).sort()}function Yt(e){if(!vt(e))return null;const t=$t()[e];return Q(t)&&Q(t.patch)?t.patch:null}function Vn(e){const t={};if(!Q(e))return t;for(const a of La)typeof e[a]=="string"&&(t[a]=At(e[a],a==="capsule"?300:Wn));for(const a of Ca){const s=e[a];if(s==null)continue;const n=Number(s);Number.isInteger(n)&&n>=1&&n<=5&&(t[a]=n)}for(const a of Da){const s=e[a];if(s==null)continue;const n=Number(s);Number.isFinite(n)&&n>=0&&n<=24&&(t[a]=n)}if(Array.isArray(e.gratitude)&&(t.gratitude=[0,1,2].map(a=>typeof e.gratitude[a]=="string"?At(e.gratitude[a]):"")),Array.isArray(e.tags)&&(t.tags=[...new Set(e.tags.map(a=>At(a,40).trim()).filter(Boolean))].slice(0,Ir)),Array.isArray(e.goals)&&(t.goals=e.goals.map(a=>At(a,500).trim()).filter(Boolean).slice(0,Ur)),Q(e.counters)){const a={};for(const[s,n]of Object.entries(e.counters)){if(!Js.test(s))continue;const o=Number(n);Number.isFinite(o)&&o>=0&&o<=99999&&(a[s]=Math.round(o*10)/10)}Object.keys(a).length&&(t.counters=a)}if(Q(e.habits)){const a={};for(const[s,n]of Object.entries(e.habits))typeof s=="string"&&s.length<=60&&(a[s]=n===!0);Object.keys(a).length&&(t.habits=a)}if(Q(e.parts)){const a={};for(const[s,n]of Object.entries(e.parts))!Js.test(s)||typeof n!="string"||(a[s]=At(n,Gr));Object.keys(a).length&&(t.parts=a)}return t}function _r(e){if(!Q(e))return!1;if(La.some(t=>typeof e[t]=="string")||Array.isArray(e.gratitude)||Array.isArray(e.tags)||Array.isArray(e.goals))return!0;for(const t of["counters","habits","parts"])if(Q(e[t])&&Object.keys(e[t]).length)return!0;return[...Ca,...Da].some(t=>e[t]!==void 0&&e[t]!==null)}const Ks=(e,t)=>Number.isFinite(Number(e))&&Number.isFinite(Number(t))&&Number(e)===Number(t),Xs=(e=[],t=[])=>e.length===t.length&&e.every((a,s)=>String(a)===String(t[s]));function Wr(e=null,t=null){if(!Q(t)||!Object.keys(t).length)return!0;if(!e)return!_r(t);for(const a of La)if(typeof t[a]=="string"&&t[a]!==String(e[a]??""))return!1;if(Array.isArray(t.gratitude)){const a=e.gratitude||[];if([0,1,2].some(s=>typeof t.gratitude[s]=="string"&&t.gratitude[s]!==String(a[s]??"")))return!1}if(Array.isArray(t.tags)&&!Xs(t.tags,e.tags||[])||Array.isArray(t.goals)&&!Xs(t.goals,e.goals||[]))return!1;for(const a of[...Ca,...Da])if(!(t[a]===void 0||t[a]===null)&&!Ks(t[a],e[a]))return!1;if(Q(t.counters)){const a=e.counters||{};for(const[s,n]of Object.entries(t.counters))if(!Ks(n,a[s]===void 0?0:a[s]))return!1}if(Q(t.habits)){const a=e.habits||{};for(const[s,n]of Object.entries(t.habits))if(!!n!=!!a[s])return!1}if(Q(t.parts)){const a=e.parts||{};for(const[s,n]of Object.entries(t.parts)){const o=String(a[s]??"").trim(),r=String(n??"").trim();if(o!==r)return!1}}return!0}function Zn(e,t=null){const a=Object.keys(e);if(a.length<=Ys)return e;const s=a.filter(r=>r!==t).sort((r,i)=>String(e[i]?.savedAt||"").localeCompare(String(e[r]?.savedAt||""))),n=Math.max(0,Ys-(t&&t in e?1:0)),o=Object.fromEntries(s.slice(0,n).map(r=>[r,e[r]]));return t&&t in e&&(o[t]=e[t]),o}function Ss(e,t=null){const a=Object.keys(e);if(!a.length){const r=Se(Ve,null,{label:"Los cambios del día"});return{ok:r.ok,reason:r.reason}}const s=[a.length,Math.ceil(a.length/2),Math.ceil(a.length/4),1];let n=1/0,o={ok:!1,reason:"unknown"};for(const r of s){const i=Math.min(r,a.length);if(i>=n)continue;n=i;const c={...Zn(e,t)};if(Object.keys(c).length>i){const f=Object.keys(c).filter(m=>m!==t).sort((m,p)=>String(c[m]?.savedAt||"").localeCompare(String(c[p]?.savedAt||""))).slice(0,Object.keys(c).length-i);for(const m of f)delete c[m]}if(o=Se(Ve,JSON.stringify(c),{label:"Los cambios del día"}),o.ok)return{ok:!0,map:c};if(i===1)break}return{ok:!1,reason:o.reason}}function Qr(e,t){if(!vt(e))return null;const a=Vn(t);if(!Object.keys(a).length)return null;const s=Yt(e)||{},n={...s};for(const[l,c]of Object.entries(a))n[l]=Q(c)&&Q(s[l])?{...s[l],...c}:c;const o=new Date().toISOString(),r=$t();r[e]={patch:n,savedAt:o};const i=Ss(r,e);return{ok:i.ok,reason:i.reason,savedAt:o,patch:n}}function ks(e){if(!vt(e))return!1;const t=$t();return e in t?(delete t[e],Ss(t),!0):!1}function Vr(){return Se(Ve,null,{label:"Los cambios del día"}).ok}function Zr(){const e=$t();return Object.fromEntries(Object.entries(e).filter(([t,a])=>vt(t)&&Q(a)&&Q(a.patch)))}function Yr(e){const t=Q(e)?e:{},a=$t(),s={...a};let n=!1;for(const[r,i]of Object.entries(t)){if(!vt(r)||!Q(i))continue;const l=Vn(i.patch);if(!Object.keys(l).length)continue;const c=typeof i.savedAt=="string"?i.savedAt:new Date().toISOString(),f=s[r];f&&String(f.savedAt||"")>=c||(s[r]={patch:l,savedAt:c},n=!0)}if(!n)return{ok:!0,map:a,changed:!1};const o=Ss(Zn(s));return{ok:o.ok,map:s,changed:!0,reason:o.reason}}function Jr(e){return{date:e,mood:null,sleepHours:null,studyHours:null,energy:null,stress:null,bestOfDay:"",differentToday:"",generalDay:"",wordOfDay:"",capsule:"",gratitude:["","",""],goals:[],tags:[],counters:{},parts:{},habits:{},createdAt:null,updatedAt:null,pending:!0}}function Yn(e,t=null,a=null){if(!t&&!a)return null;if(!a)return t;const s=t?{...t}:Jr(e),n={...s,date:e,pending:!0};for(const o of La)typeof a[o]=="string"&&(n[o]=a[o]);for(const o of[...Ca,...Da])a[o]!==void 0&&a[o]!==null&&(n[o]=a[o]);if(Array.isArray(a.gratitude)&&(n.gratitude=[0,1,2].map(o=>typeof a.gratitude[o]=="string"?a.gratitude[o]:(s.gratitude||[])[o]||"")),Array.isArray(a.tags)&&(n.tags=[...a.tags]),Array.isArray(a.goals)&&(n.goals=[...a.goals]),n.counters={...s.counters||{},...a.counters||{}},n.habits={...s.habits||{},...a.habits||{}},Q(a.parts)){const o={...s.parts||{}};for(const[r,i]of Object.entries(a.parts))typeof i=="string"&&(i.trim()?o[r]=i:delete o[r]);n.parts=o}return n}const ja="diario.entries.v1",Ta="diario.habits.v1",Na="diario.setup.v1",Jt="diario.thoughts.v1";class ga extends Error{constructor(t,{key:a,reason:s}={}){super(`${t}: no se ha podido guardar. ${ys(s)} Lo intento otra vez en cuanto pueda, pero no cierres la pestaña si acabas de escribir algo largo.`),this.name="SaveError",this.key=a,this.reason=s,this.queued=!0}}function Oa(e,t,{label:a="Los datos",prune:s=null}={}){const n=Se(e,t,{label:a,prune:s});if(!n.ok)throw new ga(a,{key:e,reason:n.reason});return n}function Ha(e){return bt(e)}function Jn(e){const t=new Map(e.map(([s])=>[s,Ha(s)])),a=[];for(const[s,n,o="Los datos"]of e){const r=Se(s,n,{label:o});if(!r.ok){Dr(s);let i=!1;for(const l of a.reverse())Se(l,t.get(l),{label:"La copia anterior"}).ok||(i=!0);throw i?new ga("La copia de seguridad",{key:s,reason:r.reason}):new ga(o,{key:s,reason:r.reason})}a.push(s)}}const ee={completed:!1,name:"",age:null,ageGroup:"young",interests:[],ritual:"night",tone:"warm",savedQuotes:[],purpose:"calm",motto:"Un día a la vez.",theme:"paper",sleepGoal:7.5,studyGoal:2,waterGoal:8,showDailyWord:!0,showDailyTip:!0,crisisAlertsEnabled:!0,trustedContactName:"",trustedContactPhone:"",sidebarCollapsed:!1,reduceMotion:!1,counters:[],parts:[],updatedAt:null};function Pa(e,t="young"){const a=Number(e);return!Number.isFinite(a)||a<=0?t:a<=18?"teen":a<=26?"young":a<=49?"adult":"senior"}function Ue(e,t){if(typeof e!="string")throw new Error(`${t} debe ser texto.`);if(e.length>2e4)throw new Error(`${t} debe tener como máximo 20.000 caracteres.`);return e}function Kr(e,t){const a=Ut.find(i=>i.key===t);if(e==null||e==="")return 0;const s=Number(e),n=a?.min??0,o=a?.max??99999,r=a?.label??t;if(!Number.isFinite(s)||s<n||s>o)throw new Error(`${r} debe estar entre ${n} y ${o}.`);return Math.round(s*10)/10}const Kn=/^[\w-]{1,24}$/;function en(e){if(e==null||e==="")return null;const t=Number(e);if(!Number.isInteger(t)||t<1||t>5)throw new Error("Las escalas van de 1 a 5.");return t}function Xr(e){const t={};if(e==null)return t;if(typeof e!="object"||Array.isArray(e))throw new Error("Las partes del diario no son válidas.");for(const[a,s]of Object.entries(e)){if(!Kn.test(a))continue;if(typeof s!="string")throw new Error(`La parte «${a}» debe ser texto.`);const n=s.trim();if(n){if(n.length>4e3)throw new Error("Cada parte del diario admite como máximo 4.000 caracteres.");if(t[a]=n,Object.keys(t).length>=_e)break}}return t}function Fa(e){if(!e||typeof e!="object"||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)||!Number.isFinite(new Date(e.date+"T12:00:00").getTime())||v(new Date(e.date+"T12:00:00"))!==e.date)throw new Error("Hay una fecha no válida.");if(e.date>v())throw new Error("No se pueden registrar días futuros.");if(!Number.isInteger(e.mood)||e.mood<1||e.mood>5)throw new Error("Selecciona cómo te ha ido el día.");for(const r of["sleepHours","studyHours"]){const i=e[r];if(typeof i!="number"||!Number.isFinite(i)||i<0||i>24)throw new Error("Las horas deben estar entre 0 y 24.")}const t=Object.fromEntries(Jo.map(r=>[r,Ue(e[r]??"",r)])),a=Ue(e.capsule??"","La cápsula del día").slice(0,300);if(!Array.isArray(e.gratitude)||e.gratitude.length!==3||e.gratitude.some(r=>typeof r!="string"||r.length>2e4))throw new Error("El agradecimiento debe tener tres campos de texto.");if(e.goals!==void 0&&(!Array.isArray(e.goals)||e.goals.length>30||e.goals.some(r=>typeof r!="string"||r.length>500)))throw new Error("La lista de objetivos no es válida.");const s=Array.isArray(e.tags)?e.tags:[];if(s.length>20)throw new Error("Puedes elegir como máximo 20 etiquetas.");for(const r of s)if(typeof r!="string"||!r.trim()||r.length>40)throw new Error("Hay una etiqueta no válida.");const n={};for(const r of Ut)n[r.key]=Kr(e.counters?.[r.key],r.key);for(const r of Object.keys(e.counters||{})){if(!Kn.test(r)||r in n)continue;const i=Number(e.counters[r]);Number.isFinite(i)&&i>=0&&i<=99999&&(n[r]=Math.round(i*10)/10)}if(Object.keys(n).length>We)throw new Error(`No puedes tener más de ${We} contadores.`);const o={};if(e.habits!==void 0&&(typeof e.habits!="object"||e.habits===null||Array.isArray(e.habits)))throw new Error("Los hábitos no son válidos.");for(const[r,i]of Object.entries(e.habits||{}))typeof r=="string"&&r.length<=60&&(o[r]=i===!0);return{id:typeof e.id=="string"?e.id:crypto.randomUUID(),date:e.date,mood:e.mood,sleepHours:e.sleepHours,studyHours:e.studyHours,energy:en(e.energy),stress:en(e.stress),...t,capsule:a,gratitude:e.gratitude.map(r=>Ue(r??"","El agradecimiento")),goals:(e.goals||[]).map(r=>Ue(r,"Un objetivo")),tags:[...new Set(s.map(r=>r.trim()))],counters:n,parts:Xr(e.parts),habits:o,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function za(e){const t=e.map(Fa).sort((a,s)=>a.date.localeCompare(s.date));return t.map(a=>({...a,dayNumber:Wt(a.date,t)}))}function Ba(){const e=Ha(ja);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se han podido leer tus entradas.");return za(t)}function Xn(e){const t=za(e);return Oa(ja,JSON.stringify(t),{label:"El cuaderno"}),t}function ei(e){const t=Fa(e);t.updatedAt=new Date().toISOString();const a=Ba();return Xn([...a.filter(s=>s.date!==t.date),t])}function ti(e){return Xn(Ba().filter(t=>t.date!==e))}function ai(){Jn([[ja,null,"El cuaderno"],[Ta,null,"Los hábitos"],[Na,null,"El perfil"],[Jt,null,"El mar"],[Ve,null,"Los cambios del día"]]),jr()}function Ze(e){if(!e||typeof e!="object")throw new Error("Hábito no válido.");const t=Ue(e.name??"","El nombre del hábito").trim();if(!t)throw new Error("El hábito necesita un nombre.");if(t.length>40)throw new Error("El nombre del hábito debe tener 40 caracteres o menos.");return{id:typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),name:t,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString()}}function Kt(){const e=Ha(Ta);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se han podido leer tus hábitos.");return t.map(Ze)}function eo(e){const t=e.map(Ze);return Oa(Ta,JSON.stringify(t),{label:"Los hábitos"}),t}function ba(e){const t=Ze(e),a=Kt();return eo([...a.filter(s=>s.id!==t.id),t])}function si(e){return eo(Kt().filter(t=>t.id!==e))}const ni=new Set(ss.map(e=>e.id)),oi=new Set(na.map(e=>e.id)),tn=new Set(ha.map(e=>e.id)),ri=new Set(["drifting","returned","lost"]);function Ge(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;const t=new Date(`${e}T12:00:00`);return Number.isFinite(t.getTime())&&v(t)===e}function wt(e){if(!e||typeof e!="object")throw new Error("El pensamiento no es válido.");const t=Ue(e.text??"","El pensamiento").trim().slice(0,1200);if(!t)throw new Error("Escribe un pensamiento antes de echar la botella al mar.");const a=Ge(e.castAt)&&e.castAt<=v()?e.castAt:v(),s=ni.has(e.sea)?e.sea:"breeze",n=Rn(e.force),o=Number.isInteger(e.mood)&&e.mood>=1&&e.mood<=5?e.mood:null,r=typeof e.id=="string"&&e.id?e.id:crypto.randomUUID(),i=e.returns===!0,l=Ge(e.arriveOn)?oe(a,e.arriveOn):null,c=Number.isInteger(e.driftDays)&&e.driftDays>=1&&l===e.driftDays&&(i||Ge(e.lostOn)&&e.lostOn>e.arriveOn),f=typeof e.glass=="object"&&e.glass?e.glass.id:e.glass,m=c?{force:n,returns:i,speed:Number.isFinite(e.speed)?Math.max(1,Math.round(e.speed)):10,driftDays:Math.max(1,e.driftDays),arriveOn:e.arriveOn,lostOn:Ge(e.lostOn)?e.lostOn:null,current:typeof e.current=="string"?e.current.slice(0,60):"",mottoSeed:Number.isFinite(e.mottoSeed)?Math.round(e.mottoSeed):0,weather:oi.has(e.weather)?e.weather:null,wind:typeof e.wind=="string"?e.wind.slice(0,24):"",windSpeed:Number.isFinite(e.windSpeed)?Math.max(0,Math.round(e.windSpeed)):null,push:Number.isInteger(e.push)?Math.max(0,Math.min(4,e.push)):0}:kr({text:t,castAt:a,sea:s,id:r,force:n});return{id:r,text:t,castAt:a,mood:o,sea:s,...m,status:ri.has(e.status)?e.status:"drifting",glass:tn.has(f)?f:tn.has(m.glass)?m.glass:"amber",returnedAt:Ge(e.returnedAt)?e.returnedAt:null,lostAt:Ge(e.lostAt)?e.lostAt:null,reply:Ue(e.reply??"","La respuesta").trim().slice(0,1200),kept:!!e.kept,keptOn:Ge(e.keptOn)?e.keptOn:null,seen:e.seen===!0,createdAt:typeof e.createdAt=="string"?e.createdAt:new Date().toISOString(),updatedAt:typeof e.updatedAt=="string"?e.updatedAt:new Date().toISOString()}}function to(e,t=v()){return e.map(wt).map(a=>a.castAt>t?{...a,castAt:t}:a).map(a=>Gn(a,t)).sort((a,s)=>a.castAt.localeCompare(s.castAt)||a.id.localeCompare(s.id))}function xs(e){const t=to(e);return Oa(Jt,JSON.stringify(t),{label:"El mar"}),t}function ii(e){const t=v();let a=!1;const s=e.map(n=>{const o=Gn(n,t);return o!==n&&(a=!0),o});return a&&Se(Jt,JSON.stringify(s),{label:"El mar"}),s}function Ye(){const e=Ha(Jt);if(!e)return[];const t=JSON.parse(e);if(!Array.isArray(t))throw new Error("No se ha podido leer tu mar de pensamientos.");return ii(t.map(wt))}function li(e){const t=Ye().find(n=>n.id===e?.id)||null,a=t?Object.fromEntries(["sea","force","returns","speed","driftDays","arriveOn","lostOn","current","glass","mottoSeed","status"].map(n=>[n,t[n]])):{},s=wt({...t,...e,...a,updatedAt:new Date().toISOString()});return xs([...Ye().filter(n=>n.id!==s.id),s])}function st(e,t={}){const a=Ye();return xs(a.map(s=>s.id===e?{...s,...t,updatedAt:new Date().toISOString()}:s))}function ci(e){return xs(Ye().filter(t=>t.id!==e))}function ao(e){return st(e,{status:"drifting",castAt:v(),driftDays:null,arriveOn:null,lostOn:null,returnedAt:null,lostAt:null,seen:!1,reply:"",kept:!1,keptOn:null})}function Je(e={}){const t=e&&typeof e=="object"?e:{},a=new Set(ne.map(b=>b.id)),s=new Set(Ln.map(b=>b.id)),n=new Set(ut.map(b=>b.id)),o=new Set(_t.map(b=>b.id)),r=new Set(pt.map(b=>b.id)),i=new Set(mt.map(b=>b.id)),l=(b,x,N,T)=>{const j=Number(b);return Number.isFinite(j)?Math.min(N,Math.max(x,Math.round(j*10)/10)):T};let c=null;if(t.age!==void 0&&t.age!==null&&t.age!==""){const b=Math.round(Number(t.age));Number.isFinite(b)&&b>=8&&b<=115&&(c=b)}const f=n.has(t.ageGroup)?t.ageGroup:ee.ageGroup,m=c!==null?Pa(c,f):f,p=Array.isArray(t.interests)?[...new Set(t.interests.filter(b=>o.has(b)))]:[],y=Array.isArray(t.savedQuotes)?[...new Set(t.savedQuotes.filter(b=>typeof b=="string"&&b.trim().length>0).map(b=>b.trim().slice(0,260)))].slice(0,40):[];return{completed:!!t.completed,name:String(t.name??"").trim().slice(0,50),age:c,ageGroup:m,interests:p,ritual:r.has(t.ritual)?t.ritual:ee.ritual,tone:i.has(t.tone)?t.tone:ee.tone,savedQuotes:y,purpose:s.has(t.purpose)?t.purpose:ee.purpose,motto:String(t.motto??ee.motto).trim().slice(0,140)||ee.motto,theme:a.has(t.theme)?t.theme:ee.theme,sleepGoal:l(t.sleepGoal,4,14,ee.sleepGoal),studyGoal:l(t.studyGoal,0,16,ee.studyGoal),waterGoal:l(t.waterGoal,1,25,ee.waterGoal),showDailyWord:t.showDailyWord===void 0?!0:!!t.showDailyWord,showDailyTip:t.showDailyTip===void 0?!0:!!t.showDailyTip,crisisAlertsEnabled:t.crisisAlertsEnabled===void 0?!0:!!t.crisisAlertsEnabled,trustedContactName:String(t.trustedContactName??"").trim().slice(0,60),trustedContactPhone:String(t.trustedContactPhone??"").trim().slice(0,30),sidebarCollapsed:!!t.sidebarCollapsed,reduceMotion:!!t.reduceMotion,counters:ye(t).slice(0,We),parts:de(t).slice(0,_e),updatedAt:typeof t.updatedAt=="string"?t.updatedAt:new Date().toISOString()}}function Ra(){const e=bt(Na);if(!e)return{...ee};try{const t=JSON.parse(e);return Je(t)}catch{return{...ee}}}function je(e={}){const t=Ra(),a=Je({...t,...e,updatedAt:new Date().toISOString()});return Oa(Na,JSON.stringify(a),{label:"El perfil"}),a}function di(e,t=Kt(),a=Ra(),s=Ye(),n=zr(),o=Zr()){return JSON.stringify({app:"diario",version:1,exportedAt:new Date().toISOString(),entries:za(e),habits:t.map(Ze),thoughts:s.map(wt),setup:Je(a),drafts:n,pendingDays:o},null,2)}function ui(e){let t;try{t=JSON.parse(e)}catch{throw new Error("El archivo no es una copia JSON válida.")}if(!t||typeof t!="object"||Array.isArray(t)||t.version!==1||!Array.isArray(t.entries))throw new Error("Selecciona una copia JSON de Diario (versión 1).");if(t.habits!==void 0&&!Array.isArray(t.habits))throw new Error("La lista de hábitos de la copia no es válida.");if(t.thoughts!==void 0&&!Array.isArray(t.thoughts))throw new Error("La lista de pensamientos de la copia no es válida.");if(t.setup!==void 0&&t.setup!==null&&(typeof t.setup!="object"||Array.isArray(t.setup)))throw new Error("Los ajustes de la copia no son válidos.");if(t.drafts!==void 0&&t.drafts!==null&&(typeof t.drafts!="object"||Array.isArray(t.drafts)))throw new Error("Los borradores de la copia no son válidos.");if(t.pendingDays!==void 0&&t.pendingDays!==null&&(typeof t.pendingDays!="object"||Array.isArray(t.pendingDays)))throw new Error("Los cambios de día de la copia no son válidos.");const a=t.entries.map(Fa);if(new Set(a.map(l=>l.date)).size!==a.length)throw new Error("La copia contiene fechas duplicadas.");const s=(t.habits||[]).map(Ze);if(new Set(s.map(l=>l.id)).size!==s.length)throw new Error("La copia contiene hábitos duplicados.");const n=(t.thoughts||[]).map(wt);if(new Set(n.map(l=>l.id)).size!==n.length)throw new Error("La copia contiene pensamientos duplicados.");const o=t.setup?Je(t.setup):null,r=t.drafts?t.drafts:null,i=t.pendingDays?t.pendingDays:null;return{entries:a,habits:s,thoughts:n,setup:o,drafts:r,pendingDays:i}}function pi(e){if(!e||!Array.isArray(e.entries)||!Array.isArray(e.habits))throw new Error("La copia no contiene listas de entradas y hábitos válidas.");if(e.thoughts!==void 0&&!Array.isArray(e.thoughts))throw new Error("La lista de pensamientos de la copia no es válida.");if(e.setup!==void 0&&e.setup!==null&&(typeof e.setup!="object"||Array.isArray(e.setup)))throw new Error("Los ajustes de la copia no son válidos.");const t=e.entries.map(Fa);if(new Set(t.map(p=>p.date)).size!==t.length)throw new Error("La copia contiene fechas duplicadas.");const a=e.habits.map(Ze);if(new Set(a.map(p=>p.id)).size!==a.length)throw new Error("La copia contiene hábitos duplicados.");const s=(e.thoughts||[]).map(wt);if(new Set(s.map(p=>p.id)).size!==s.length)throw new Error("La copia contiene pensamientos duplicados.");const n=e.setup?Je(e.setup):null,o=new Map(Ba().map(p=>[p.date,p]));for(const p of t)o.set(p.date,p);const r=new Map(Kt().map(p=>[p.id,p]));for(const p of a)r.set(p.id,p);const i=new Map(Ye().map(p=>[p.id,p]));for(const p of s)i.set(p.id,p);const l=za([...o.values()]),c=[...r.values()].map(Ze),f=to([...i.values()]),m=[[Ta,JSON.stringify(c),"Los hábitos"],[Jt,JSON.stringify(f),"El mar"]];if(n){const p=Je({...Ra(),...n,updatedAt:new Date().toISOString()});m.push([Na,JSON.stringify(p),"El perfil"])}if(e.drafts){const p=Br(e.drafts);p.ok&&m.push([ht,JSON.stringify(p.map),"Los borradores"])}if(e.pendingDays){const p=Yr(e.pendingDays);p.ok&&m.push([Ve,JSON.stringify(p.map),"Los cambios del día"])}return m.push([ja,JSON.stringify(l),"El cuaderno"]),Jn(m),l}const mi={age:{min:8,max:115,step:1,reject:!0,adjusted:()=>"La edad no se ha guardado: el cuaderno admite entre 8 y 115 años. Corrígela o déjala en blanco."},sleepGoal:{min:4,max:14,step:.5,adjusted:e=>`La meta de sueño se ha ajustado a ${e} h (entre 4 y 14).`},studyGoal:{min:0,max:16,step:.5,adjusted:e=>`La meta de dedicación se ha ajustado a ${e} h (entre 0 y 16).`},waterGoal:{min:1,max:25,step:1,adjusted:e=>`Los vasos de agua se han ajustado a ${e} (entre 1 y 25).`}},so={1:["name","age","ageGroup","interests"],2:["sleepGoal","studyGoal","waterGoal","ritual","tone"],3:["motto","theme"]},Ya=new WeakMap;function no(e){return Ya.has(e)||Ya.set(e,new Set(e.map(t=>t.id))),Ya.get(e)}function qt(e,t){return typeof t=="string"&&no(e).has(t)?t:null}function hi(e){if(e==null)return null;const t=String(e).trim();if(!t)return null;const a=Number(t.replace(",","."));return Number.isFinite(a)?a:null}function Pt(e,t,a=null){const s=mi[e],n=hi(t);if(n===null)return{value:a,note:"",adjusted:!1,rejected:!1};const o=Math.min(s.max,Math.max(s.min,Math.round(n*10)/10));return o!==n?s.reject?{value:a,adjusted:!0,rejected:!0,note:s.adjusted(o)}:{value:o,adjusted:!0,rejected:!1,note:s.adjusted(o)}:{value:o,note:"",adjusted:!1,rejected:!1}}function oo(e,t=new Set){const a=n=>{const o=e.get(n);return o===null?null:String(o)},s={};for(const n of["showDailyWord","showDailyTip","sidebarCollapsed","reduceMotion"])s[n]=t.size&&!t.has(n)?null:e.get(n)!==null&&e.get(n)!=="";return{name:a("name"),age:a("age"),ageGroup:qt(ut,e.get("ageGroup")),interests:e.getAll("interests").map(String).filter(n=>no(_t).has(n)),ritual:qt(pt,e.get("ritual")),tone:qt(mt,e.get("tone")),purpose:qt(Ln,e.get("purpose")),motto:a("motto"),theme:qt(ne,e.get("theme")),sleepGoal:a("sleepGoal"),studyGoal:a("studyGoal"),waterGoal:a("waterGoal"),toggles:s}}function fi(e={},t={}){const a=[],s={completed:!0},n=e.toggles||{};for(const i of["showDailyWord","showDailyTip","sidebarCollapsed","reduceMotion"])n[i]!==null&&n[i]!==void 0&&(s[i]=n[i]);e.name!==null&&e.name!==void 0&&(s.name=String(e.name).slice(0,50).trim()),e.motto!==null&&e.motto!==void 0&&(s.motto=String(e.motto).slice(0,140).trim()||"Un día a la vez."),e.theme&&(s.theme=e.theme),e.ritual&&(s.ritual=e.ritual),e.tone&&(s.tone=e.tone),e.purpose&&(s.purpose=e.purpose),Array.isArray(e.interests)&&(s.interests=e.interests);const o=Pt("age",e.age,t.age??null);o.note&&a.push(o.note),!o.rejected&&e.age!==null&&e.age!==void 0&&e.age!==""&&o.value===null&&a.push("La edad no se ha podido leer: se queda sin rellenar."),s.age=o.value??null;const r=e.ageGroup||t.ageGroup||"young";s.ageGroup=s.age!==null?Pa(s.age,r):r;for(const i of["sleepGoal","studyGoal","waterGoal"]){const l=e[i],c=Number.isFinite(Number(t[i]))?Number(t[i]):null,f=Pt(i,l,c);f.note&&a.push(f.note),f.value!==null&&(s[i]=f.value)}return{patch:s,notes:a}}function gi(e,t,a={}){const s=new Set(so[e]||[]),n=[];if(s.has("age")){const o=Pt("age",t.age,a.age??null);o.note&&n.push(o.note)}for(const o of["sleepGoal","studyGoal","waterGoal"]){if(!s.has(o))continue;const r=Pt(o,t[o],a[o]??null);r.note&&n.push(r.note)}return n}function bi(e,t,a={}){const s=new Set(so[e]||[]),n={};for(const o of["age","sleepGoal","studyGoal","waterGoal"]){if(!s.has(o))continue;const r=Pt(o,t[o],a[o]??null);r.rejected||r.value!==null&&(n[o]=r.value)}return n}function yi(e=""){return String(e||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim()}function Fe(e="paper",t={}){const a=ne.find(c=>c.id===e)||ne[0],{bg:s,page:n,accent:o,ink:r}=a.favicon||{bg:"#211E17",page:"#F3EFE6",accent:"#B34A2E",ink:"#211E17"},i=String(t?.name||"").trim().slice(0,1).toUpperCase(),l=i?`<text x="36" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="18" fill="${r}">${i.replace(/[<>&"']/g,"")}</text>`:`<path d="M29 29h14M29 36h10" stroke="${r}" stroke-width="2.6" stroke-linecap="round"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="16" fill="${s}"/>
    <rect x="14" y="11" width="38" height="42" rx="5" fill="${n}"/>
    <rect x="14" y="11" width="7" height="42" rx="2" fill="${o}"/>
    <path d="M41 11v12l-4-3-4 3V11" fill="${o}"/>
    ${l}
    <circle cx="46" cy="46" r="3" fill="${o}"/>
  </svg>`.replace(/\s+/g," ").trim()}function vi(e="paper",t={}){const a=Fe(e,t);return`data:image/svg+xml;utf8,${encodeURIComponent(a)}`}const $i=[{label:"suicidio",regex:/\b(suicid(io|arme|arse|a)|conducta suicida)\b/},{label:"quitarme la vida",regex:/\b(quitar(me|se) la vida|acabar con mi vida|terminar con mi vida)\b/},{label:"no quiero vivir",regex:/\b(no quiero (seguir viviendo|vivir)|no merece la pena vivir|no vale la pena vivir)\b/},{label:"quiero morir",regex:/\b(quiero morir(me)?|me quiero morir|deseo morir(me)?|prefiero estar muert[oa]|mejor muert[oa])\b/},{label:"autolesión",regex:/\b(autolesion(arme|arse|es)?|hacerme dano|hacerme sangre|cortarme las venas|cortarme el brazo|cortarme la piel)\b/},{label:"acabar con todo",regex:/\b(acabar con todo para siempre|desaparecer para siempre|ojala no despertar|no despertar manana|matarme|tirarme (por la ventana|al tren|desde un puente)|sobredosis)\b/}];function wi(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"){const t=Array.isArray(e.gratitude)?e.gratitude.join(" "):"",a=Array.isArray(e.goals)?e.goals.join(" "):"",s=Array.isArray(e.tags)?e.tags.join(" "):"";return[e.bestOfDay,e.differentToday,e.generalDay,e.wordOfDay,e.capsule,e.tomorrow,t,a,s].filter(Boolean).join(" ")}return""}function Z(e={}){const t=e?.age?Pa(e.age,e.ageGroup||"young"):e?.ageGroup||"young",a=ut.find(x=>x.id===t)||ut[1],s=Array.isArray(e?.interests)?e.interests:[],n=_t.filter(x=>s.includes(x.id)),o=pt.find(x=>x.id===e?.ritual)||pt[0],r=mt.find(x=>x.id===e?.tone)||mt[0];let i=a.focusLabel,l=a.focusQuestion;s.includes("study")?(i="Estudio",l="Tiempo de estudio o repaso"):s.includes("projects")&&a.id!=="teen"&&(i="Proyectos y enfoque",l="Tiempo dedicado a tus proyectos");const c=[...new Set([...n.map(x=>x.habit),...a.habits,...Ko])].slice(0,8),f=[...new Set([...n.map(x=>x.tag),...a.tags,...Qo])].slice(0,12),m=Number.isFinite(Number(e?.age))&&Number(e.age)>0&&Number(e.age)<18;let p="Nota del día",y="Algo que quieras recordar hoy…";s.includes("music")?(p="Canción o escena del día",y="¿Qué has escuchado o visto hoy?"):s.includes("reading")?(p="Lectura o cita",y="Un libro o una frase…"):s.includes("gaming")&&(p="Partida o serie del día",y="Un juego o una serie…");const b=["water"];return(s.includes("sport")||s.includes("nature")||!s.length)&&b.push("exercise"),(s.includes("reading")||s.includes("study")||!s.length)&&b.push("reading"),(s.includes("calm")||!s.length)&&b.push("mindfulness"),{group:a,age:e?.age||null,isMinor:m,interests:n,ritual:o,tone:r,focusLabel:i,focusQuestion:l,capsuleLabel:p,capsulePlaceholder:y,activeCounterKeys:b,sleepRecommended:a.sleepRecommended,studyRecommended:a.studyRecommended,suggestedHabits:c,tags:f,placeholders:a.placeholders}}function Ms(e){const t=wi(e),a=yi(t),s=[];if(a)for(const n of $i)n.regex.test(a)&&s.push(n.label);return s.length>0?{triggered:!0,level:"high",matchedTerms:s,reason:"Si estás pasando por un momento muy difícil, no tienes por qué llevarlo a solas. El 024 es gratuito, confidencial y atiende las 24 horas."}:{triggered:!1,level:"none",matchedTerms:[],reason:""}}function Ft(e=v()){const t=String(e||"").replace(/[^0-9]/g,"");let a=0;for(let s=0;s<t.length;s++)a=a*31+t.charCodeAt(s)>>>0;return a||1}function Si(e=v(),t=0){const a=(Ft(e)+Math.abs(t))%Ps.length;return Ps[a]}function ki(e=v(),t=0,a={}){const n=Z(a).group.id,o=new Set(a?.interests||[]),r=Fs.filter(c=>{const f=!c.ageGroups||c.ageGroups.includes(n),m=!c.interests||c.interests.some(p=>o.has(p));return f||m}),i=r.length?r:Fs,l=(Ft(e)*7+Math.abs(t))%i.length;return i[l]}function xi(e=v(),t=0,a={}){const n=Z(a).group.id,o=a?.tone||"warm",r=new Set(a?.interests||[]),i=Array.isArray(a?.savedQuotes)?a.savedQuotes:[];if(i.length>0&&t%3===0){const y=(Ft(e)+Math.abs(t))%i.length;return{text:i[y],author:a?.name?`Guardada por ${a.name}`:"De tu colección",isCustom:!0}}const l=Hs.map(y=>{let b=0;return y.tones?.includes(o)&&(b+=3),y.ageGroups?.includes(n)&&(b+=2),y.interests?.some(x=>r.has(x))&&(b+=4),{q:y,score:b}}),c=Math.max(...l.map(y=>y.score),0),f=l.filter(y=>y.score>=Math.max(2,c-2)).map(y=>y.q),m=f.length>=4?f:Hs,p=(Ft(e)*5+Math.abs(t))%m.length;return m[p]}function is(e=v(),t=0){const a=(Ft(e)*13+Math.abs(t))%zs.length;return zs[a]}function Mi(e={},t={}){const a=[],s=Z(t),n=Number(t?.sleepGoal)||s.sleepRecommended||7.5,o=Number(e?.sleepHours),r=Number(e?.stress),i=Number(e?.mood);return Number.isFinite(o)&&o>0&&o<n-1.5&&a.push({icon:"moon",title:"Descanso corto",text:`Sueño: ${o} h · meta ${n} h. Ve con calma esta tarde.`}),Number.isFinite(r)&&r>=4&&a.push({icon:"wind",title:"Día cargado",text:"Prioriza una cosa hoy. Lo demás puede esperar."}),Number.isFinite(i)&&i===1&&a.push({icon:"heart",title:"Día cuesta arriba",text:"Descansar y cubrir lo básico es suficiente."}),a.slice(0,2)}function Ai(e=[],t={}){const a=Z(t),s=(q,_)=>{const O=Number(q);return Number.isFinite(O)&&O>0?O:_},n=s(t?.sleepGoal,a.sleepRecommended||7.5),o=s(t?.studyGoal,a.studyRecommended||2),r=s(t?.waterGoal,8),i=[...new Map(e.filter(q=>q?.date).map(q=>[q.date,q])).values()],l=i.length;if(!l)return{total:0,sleepGoal:n,studyGoal:o,waterGoal:r,sleepMet:0,studyMet:0,waterMet:0,sleepTracked:0,studyTracked:0,waterTracked:0,sleepPct:null,studyPct:null,waterPct:null,moodWhenSleepMet:null,moodWhenSleepMissed:null};const c=i.filter(q=>Number.isFinite(q.sleepHours)),f=i.filter(q=>Number.isFinite(q.studyHours)),m=i.filter(q=>Number.isFinite(q.counters?.water)),p=c.filter(q=>q.sleepHours>=n),y=c.filter(q=>q.sleepHours<n),b=f.filter(q=>q.studyHours>=o),x=m.filter(q=>q.counters.water>=r),N=(q,_)=>_?Math.round(q/_*100):null,T=Dt(p.map(q=>q.mood)),j=Dt(y.map(q=>q.mood));return{total:l,sleepGoal:n,studyGoal:o,waterGoal:r,sleepMet:p.length,studyMet:b.length,waterMet:x.length,sleepTracked:c.length,studyTracked:f.length,waterTracked:m.length,sleepPct:N(p.length,c.length),studyPct:N(b.length,f.length),waterPct:N(x.length,m.length),moodWhenSleepMet:Number.isFinite(T)?A(T):null,moodWhenSleepMissed:Number.isFinite(j)?A(j):null}}function qi(e="",t=new Date().getHours()){const a=String(e||"").trim(),s=a?`, ${a}`:"";return t>=5&&t<13?`Buenos días${s}`:t>=13&&t<20?`Buenas tardes${s}`:`Buenas noches${s}`}const Ei={pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',week:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 9h18M8 14h8"/>',month:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9"/>',history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-5 3-7 1 2 2 3 2 3 0-3-1-4 0-6Z"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',study:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',check:'<path d="M20 6 9 17l-5-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',download:'<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3"/>',upload:'<path d="M12 15V3m0 0-4 4m4-4 4 4M4 17v3h16v-3"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 5.1-6C9.5 14.5 12 13 13 12"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',bolt:'<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',storm:'<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/><path d="m13 11-3 5h4l-2 5"/>',drop:'<path d="M12 2.7 6.4 8.3a8 8 0 1 0 11.3 0Z"/>',run:'<circle cx="15" cy="4" r="2"/><path d="m10.5 9.5-3 3L5 11m5.5-1.5 3.5 2 3 2M9 14l-2 6m5-4 3 5"/>',book:'<path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2Z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',hash:'<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',stamp:'<path d="M5 21h14M6 17h12v2H6zM9 17v-3a3 3 0 1 1 6 0v3"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',refresh:'<path d="M21 12a9 9 0 0 0-15.4-6.4L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15.4 6.4L21 16"/><path d="M21 21v-5h-5"/>',wind:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5-4.5-8.6-10-8.6Z"/>',spark:'<path d="m12 3 1.9 5.8L20 10.8l-6.1 1.9L12 18.5l-1.9-5.8L4 10.8l6.1-2Z"/>',quote:'<path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/><path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.7-1.3 4.4-4 5"/>',expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',wave:'<path d="M2 9.5c2 0 2 1.8 4 1.8s2-1.8 4-1.8 2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/><path d="M2 15c2 0 2 1.8 4 1.8S8 15 10 15s2 1.8 4 1.8 2-1.8 4-1.8 2 1.8 4 1.8"/>',tide:'<path d="M3 16.5c1.7 0 1.7 1.5 3.4 1.5s1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5 1.7-1.5 3.4-1.5 1.7 1.5 3.4 1.5"/><circle cx="17" cy="6" r="3"/><path d="M4 11c1.7 0 1.7 1.5 3.4 1.5S9.1 11 10.8 11"/>',send:'<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4Z"/>',anchor:'<circle cx="12" cy="5" r="2.6"/><path d="M12 7.6V21"/><path d="M8.5 10h7"/><path d="M3 14a9 9 0 0 0 18 0"/><path d="M3 14h3M18 14h3"/>',bookmark:'<path d="M6.5 3h11a1 1 0 0 1 1 1v17l-6.5-4.6L5.5 21V4a1 1 0 0 1 1-1Z"/>',reply:'<path d="M9 14 4 9l5-5"/><path d="M4 9h9.5A6.5 6.5 0 0 1 20 15.5V20"/>',seal:'<circle cx="12" cy="12" r="8"/><path d="m12 7.6 1.5 2.9 3.2.4-2.3 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.3-2.3 3.2-.4Z"/>',eye:'<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',grid:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',listChecks:'<path d="M11 6h10M11 12h10M11 18h10"/><path d="m3 6 1.6 1.6L7.2 5M3 12l1.6 1.6 2.6-2.6M3 18l1.6 1.6 2.6-2.6"/>',sail:'<path d="M3 18.5h18l-2.6 3.2H5.6Z"/><path d="M12.5 15V3.5L20 15Z"/><path d="M10.5 15 6 8.5 3.8 15Z"/>',fog:'<path d="M4 9h16M3 13h18M5 17h14"/><path d="M7 5.5c1.6-1.6 3.4-1.6 5 0"/>',rain:'<path d="M17.5 14a4 4 0 0 0-.6-7.9A5.5 5.5 0 0 0 6.3 7.4 3.8 3.8 0 0 0 7 14Z"/><path d="M9 17.5 8 20M13 17.5 12 20M17 17.5 16 20"/>',hourglass:'<path d="M7 3h10M7 21h10"/><path d="M7 3c0 4 5 5.4 5 9s-5 5-5 9M17 3c0 4-5 5.4-5 9s5 5 5 9"/>',gauge:'<path d="M12 20a8 8 0 1 1 8-8"/><path d="M12 12 16 9"/><circle cx="12" cy="12" r="1.2"/>',paper:'<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/>',splash:'<path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4M6.6 6.6l2.8 2.8M14.6 14.6l2.8 2.8M17.4 6.6l-2.8 2.8M9.4 14.6l-2.8 2.8"/>',save:'<path d="M5 4h11l3 3v13H5Z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>'},d=e=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Ei[e]||""}</svg>`,u=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function ro(e={},t=0){const a=Z(e),s=e.name?u(e.name):"Personalizar perfil",n=e.age?`${e.age} años`:a.group.label;return`<button type="button" class="ex-libris-card" data-action="open-setup-wizard" title="Editar perfil y preferencias">
    <span class="ex-libris-icon">${Fe(e.theme||"paper",e)}</span>
    <div class="ex-libris-meta">
      <strong>${s}</strong>
      <small>${u(n)} · ${t} ${t===1?"día":"días"}</small>
    </div>
  </button>`}function an(e,t,a,s,n,o,r){return`<div class="scale-field">
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
  </div>`}function Li(e=[],t=[]){const a=new Set(e);return`<div class="tag-picker">
    ${[...new Set([...t,...e])].map(n=>`<label class="tag-chip">
      <input type="checkbox" name="tags" value="${u(n)}" ${a.has(n)?"checked":""}>
      <span>${u(n)}</span>
    </label>`).join("")}
    <label class="tag-chip ghost">
      <span>+ Otra:</span>
      <input type="text" name="tagCustom" id="tagCustom" maxlength="24" placeholder="Escribe y pulsa Enter" aria-label="Añadir etiqueta personalizada">
    </label>
  </div>`}function Ci(e={},t=[],a={},s={}){const n=Z(a),o=new Set(n.activeCounterKeys||["water"]),r=t.filter(c=>!c.builtin||o.has(c.key)||(Number(e?.[c.key])||0)>0),i=r.length?r:t,l=s.action?`${s.action}-`:"";return`<div class="counters-grid">${i.map(c=>{const f=Number(e?.[c.key])||0,m=ka(c,a),p=m?Math.min(100,Math.round(f/m*100)):0;return`<div class="counter-row" data-counter="${c.key}">
      <div>
        <p class="field-title">${d(c.icon)} ${c.label} ${m?`<small class="counter-goal-pill ${f>=m?"met":""}">Meta: ${f}/${m}</small>`:""}</p>
        <p class="field-caption" id="hint-${c.key}" data-counter-hint="${c.key}">${Ma(c.key,f,c)}</p>
        ${m?`<div class="counter-progress"><i style="width:${p}%"></i></div>`:""}
      </div>
      <div class="stepper">
        <button type="button" class="icon-button" data-action="${l}counter-minus" data-key="${c.key}" data-step="${c.step}" aria-label="Restar ${c.label}">${d("minus")}</button>
        <div class="stepper-value">
          <input type="number" name="counter_${c.key}" min="${c.min}" max="${c.max}" step="${c.step}" value="${f}" aria-label="${c.label}" data-counter-input="${c.key}">
          <span>${c.unit}</span>
        </div>
        <button type="button" class="icon-button" data-action="${l}counter-plus" data-key="${c.key}" data-step="${c.step}" aria-label="Sumar ${c.label}">${d("plus")}</button>
      </div>
    </div>`}).join("")}</div>`}function Di(e,t,{mini:a=!1,selected:s=v()}={}){const n=new Map(t.map(i=>[i.date,i])),o=v(),r=er(e).map(i=>{const l=n.get(i.date),c=l?R[l.mood-1]:null,f=i.date>o,m=["calendar-day",!i.inMonth&&"outside",i.date===o&&"today",i.date===s&&"selected",l&&"recorded"].filter(Boolean).join(" "),p=`${z(i.date)}${c?`, ${c.label}`:", sin entrada"}`;return`<button type="button" class="${m}" data-action="open-day" data-date="${i.date}" ${f?"disabled":""} aria-label="${p}" style="${c?`--mood:${c.color}`:""}">
      <span>${i.day}</span>${c?'<i aria-hidden="true"></i>':""}
    </button>`}).join("");return`<div class="calendar ${a?"mini":""}">
    <div class="calendar-heading">
      <button type="button" class="icon-button ghost" data-action="month-prev" data-mini="${a?"1":"0"}" aria-label="Mes anterior">${d("left")}</button>
      <strong>${z(e,{month:"long",year:"numeric"})}</strong>
      <button type="button" class="icon-button ghost" data-action="month-next" data-mini="${a?"1":"0"}" aria-label="Mes siguiente">${d("right")}</button>
    </div>
    <div class="calendar-grid">
      ${Wo.map(i=>`<span class="weekday">${i}</span>`).join("")}
      ${r}
    </div>
  </div>`}function ji(e,t,a,s={}){const n=Math.max(1,Math.floor(Number(a)||1)),o=new Map(e.map(E=>[E.date,E])),r=760,i=260,l=42,c=48,f=22,m=208,p=r-l-c,y=m-f,b=E=>l+(n===1?p/2:E*p/(n-1)),x=E=>f+(5-E)*y/4,N=E=>m-Math.max(0,Math.min(12,Number(E)||0))*y/12,T=Array.from({length:n},(E,W)=>{const V=D(t,W),ke=o.get(V);return{date:V,entry:ke,index:W,x:b(W),y:ke&&Number.isFinite(ke.mood)?x(ke.mood):null}}),j=T.filter(E=>E.entry&&E.y!==null),q=Math.max(3,Math.min(14,p/n*.56)),_=j.filter(E=>Number.isFinite(E.entry.sleepHours)).map(E=>{const W=N(E.entry.sleepHours),V=Math.max(2,m-W);return`<rect class="sleep-bar" x="${(E.x-q/2).toFixed(1)}" y="${W.toFixed(1)}" width="${q.toFixed(1)}" height="${V.toFixed(1)}" rx="2"><title>${z(E.date)}: ${A(E.entry.sleepHours)} h de sueño</title></rect>`}),O=[];let g=[];for(const E of T){if(E.y===null){g.length&&O.push(g),g=[];continue}g.push(E)}g.length&&O.push(g);const w=O.filter(E=>E.length>1),L=w.map(E=>`<path class="chart-line-path" d="${E.map((W,V)=>`${V?"L":"M"}${W.x.toFixed(1)},${W.y.toFixed(1)}`).join(" ")}"/>`),H=w.map(E=>`<path class="chart-area-path" d="${E.map((V,ke)=>`${ke?"L":"M"}${V.x.toFixed(1)},${V.y.toFixed(1)}`).join(" ")} L${E.at(-1).x.toFixed(1)},${m} L${E[0].x.toFixed(1)},${m} Z"/>`),I=Number.isFinite(Number(s?.sleepGoal))?Number(s.sleepGoal):7.5,ve=N(I),xt=n<=7?[...Array(n)].map((E,W)=>W):[0,Math.round((n-1)*.17),Math.round((n-1)*.34),Math.round((n-1)*.5),Math.round((n-1)*.67),Math.round((n-1)*.83),n-1],Mt=[...new Set(xt)],Io=E=>{const W=T[E]?.date||t,V=Number(W.slice(8)),ke=z(W,{month:"short"}).replace(/[0-9.,]/g,"").trim();return n<=7?`${V} ${ke}`:V===1?`${V} ${ke}`:String(V)},Uo=Array.from({length:5},(E,W)=>{const V=f+W*y/4;return`<line class="chart-grid-row" x1="${l}" x2="${r-c}" y1="${V.toFixed(1)}" y2="${V.toFixed(1)}"/>`}).join(""),_o=Mt.map(E=>{const W=n===1?"center":E===0?"first":E===n-1?"last":"middle",V=n===1?50:E/(n-1)*100;return`<span class="chart-x-tick ${W}" style="left:${V.toFixed(2)}%">${Io(E)}</span>`}).join(""),Os=`--axis-top:${(f/i*100).toFixed(2)}%;--axis-bottom:${((i-m)/i*100).toFixed(2)}%`;return`<div class="chart-wrap">
    <div class="chart-plot">
      <svg viewBox="0 0 ${r} ${i}" class="mood-chart" role="img" aria-label="Ánimo del 1 al 5 y horas de sueño en ${n} días; hay ${j.length} días con registro">
        <defs>
          <linearGradient id="moodAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--red)" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="var(--red)" stop-opacity="0.01"/>
          </linearGradient>
        </defs>
        ${Uo}
        ${_.join("")}
        ${H.join("")}
        <line class="chart-goal-line" x1="${l}" x2="${r-c}" y1="${ve.toFixed(1)}" y2="${ve.toFixed(1)}"/>
        ${L.join("")}
        ${j.map((E,W)=>`<circle class="chart-dot" style="--dot-i:${W}" cx="${E.x.toFixed(1)}" cy="${E.y.toFixed(1)}" r="5.2" fill="${R[E.entry.mood-1]?.color||"var(--red)"}" stroke="var(--paper-2)" stroke-width="2">
          <title>${z(E.date)} · ${R[E.entry.mood-1]?.label||"Ánimo"} · ${E.entry.mood}/5 · ${A(E.entry.sleepHours)} h de sueño</title>
        </circle>`).join("")}
      </svg>
      <div class="chart-y-axis mood-axis" style="${Os}" aria-hidden="true">${[5,4,3,2,1].map(E=>`<span>${E}</span>`).join("")}</div>
      <div class="chart-y-axis sleep-axis" style="${Os}" aria-hidden="true">${[12,9,6,3,0].map(E=>`<span>${E}h</span>`).join("")}</div>
      <div class="chart-x-axis" aria-hidden="true">${_o}</div>
    </div>
    ${j.length?`<div class="chart-legend-inline">
      <span><i class="legend-line"></i> Ánimo · escala 1–5</span>
      <span><i class="legend-bar"></i> Sueño · escala 0–12 h</span>
      <span><i class="legend-goal"></i> Meta de sueño: ${A(I)} h</span>
    </div>`:'<p class="chart-empty">Sin registros en este período.</p>'}
  </div>`}function Ti(e=[],t=v(),a=28){const s=new Map(e.map(r=>[r.date,r])),n=D(t,1-a),o=[];for(let r=0;r<a;r++){const i=D(n,r),l=s.get(i),c=l?R[l.mood-1]:null,f=`${z(i)}${c?`: ${c.label} · ${l.mood}/5 · ${A(l.sleepHours)} h de sueño`:": sin registro"}`;o.push(`<button type="button" class="heatmap-cell ${l?"filled":""}" data-action="open-day" data-date="${i}" style="${c?`--mood:${c.color}`:""}" title="${f}" aria-label="${f}">
      <span>${i.slice(8)}</span>
      ${c?`<small>${c.emoji}</small>`:""}
    </button>`)}return`<div class="heatmap-strip">${o.join("")}</div>`}function io(e=[],t={}){const a=Ai(e,t),s=Z(t);return a.total?`<section class="card personal-goals-card">
    <div class="section-heading">
      <div>
        <h2>Tus metas</h2>
      </div>
      <button type="button" class="text-button" data-action="open-setup-wizard">${d("sliders")} Ajustar metas</button>
    </div>
    <div class="goals-meter-grid">
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${d("moon")} Sueño · meta ${A(a.sleepGoal)} h</span>
          <strong>${a.sleepTracked?`${a.sleepPct}%`:"—"}</strong>
        </div>
        <div class="meter-track" role="meter" aria-label="Días que alcanzan la meta de sueño" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${a.sleepPct??0}"><i style="width:${a.sleepPct||0}%;background:var(--green)"></i></div>
        <small>${a.sleepMet} de ${a.sleepTracked} días con registro</small>
      </div>
      <div class="goal-meter-item">
        <div class="goal-meter-top">
          <span>${d("study")} ${u(s.focusLabel)} · meta ${A(a.studyGoal)} h</span>
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
    </section>`}function lo(e,t=0,a={}){const s=xi(e,t,a),n=(a?.savedQuotes||[]).includes(s.text);return`<section class="card quote-card">
    <div class="quote-top">
      <span class="eyebrow">${d("quote")} ${s.isCustom?"Tu colección":"Frase del día"}</span>
      <div class="quote-actions">
        <button type="button" class="icon-button ghost ${n?"is-saved":""}" data-action="save-quote" data-quote="${u(s.text)}" title="${n?"Guardada en tus frases":"Guardar en mis frases"}" aria-label="Guardar frase">${d("heart")}</button>
        <button type="button" class="icon-button ghost" data-action="next-quote" title="Otra frase" aria-label="Otra frase">${d("refresh")}</button>
      </div>
    </div>
    <p class="quote-text">«${u(s.text)}»</p>
    <small class="quote-author">— ${u(s.author)}</small>
  </section>`}function $e(e,t,a="",s=""){return`<div class="ledger-cell">
    <span class="ledger-label">${e}</span>
    <div class="ledger-value">${t}${a?`<small>${a}</small>`:""}</div>
    ${s?`<span class="ledger-hint">${s}</span>`:""}
  </div>`}function ea(e,t,a="mood"){if(!t)return`<div class="rank-row"><span class="rank-label">${e}</span><strong>—</strong><small>Sin datos aún</small></div>`;const s=a==="mood"?`${R[t.mood-1].emoji} ${R[t.mood-1].label} · ${t.mood}/5`:`${A(t[a])} h`;return`<div class="rank-row">
    <span class="rank-label">${e}</span>
    <strong>${z(t.date,{weekday:"short",day:"numeric",month:"short"})}</strong>
    <small>${s}</small>
  </div>`}function Ni(e=[],t=[],a=v()){const s=fr(e,t,a),n=s.filter(l=>l.moodCount>0).length,o=t.length?s.filter(l=>l.entries>0).length:0,r=l=>l===null?"var(--rule-strong)":R[Math.min(4,Math.max(0,Math.round(l)-1))].color,i=n<2&&o<2?'<p class="habit-empty">Con unos cuantos días más podrás ver aquí qué días de la semana se te dan mejor.</p>':`<div class="weekday-grid" role="table" aria-label="Ánimo y rutina por día de la semana">
        <span class="weekday-head" role="columnheader">Día</span>
        <span class="weekday-head" role="columnheader">Ánimo</span>
        <span class="weekday-head" role="columnheader">Rutina</span>
        ${s.map(l=>`<span class="weekday-name" role="rowheader">${l.name}</span>
          <span class="weekday-cell">
            <span class="weekday-bar" role="img" aria-label="${l.moodCount?`Ánimo medio ${A(l.mood)} de 5 en ${l.entries} ${l.entries===1?"día":"días"}`:"sin datos de ánimo"}"><i style="width:${l.mood===null?0:Math.round(l.mood/5*100)}%;background:${r(l.mood)}"></i></span>
            <strong>${l.mood===null?"—":A(l.mood)}</strong>
          </span>
          <span class="weekday-cell">
            <span class="weekday-bar is-habit" role="img" aria-label="${l.habitPct===null?"sin días registrados":`Rutina cumplida el ${l.habitPct}% de las casillas`}"><i style="width:${l.habitPct??0}%"></i></span>
            <strong>${l.habitPct===null?"—":`${l.habitPct}%`}</strong>
          </span>`).join("")}
      </div>
      <p class="weekday-insight">${u(Us(s,"mood")||"Tu ánimo se parece bastante todos los días.")}${t.length?` ${u(Us(s,"habit"))}`:""}</p>`;return`<section class="card weekday-card">
    <div class="section-heading">
      <div><p class="eyebrow">${d("chart")} Tu semana</p><h2>Qué días se te dan mejor</h2></div>
      <span class="field-caption">solo días registrados</span>
    </div>
    ${i}
  </section>`}function ya(e,t,a=""){return`<div class="empty-state">
    ${d("leaf")}
    <h3>${e}</h3>
    <p>${t}</p>
    ${a}
  </div>`}function As(e){return`<div class="meter-list">${e.map(t=>{const a=t.total?Math.round(t.count/t.total*100):0;return`<div class="meter-row">
      <span>${t.label}</span>
      <div class="meter-track"><i style="width:${a}%;background:${t.color||"var(--ink)"}"></i></div>
      <strong>${t.count}</strong>
    </div>`}).join("")}</div>`}function co(e,t={}){if(!e?.triggered||e.level!=="high")return"";const a=t?.trustedContactName?.trim(),s=t?.trustedContactPhone?.trim();return`<section class="crisis-banner high" role="region" aria-label="Apoyo emocional disponible">
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
  </section>`}function Oi(e={},t="help"){const a=Z(e),s=e?.trustedContactName?.trim(),n=e?.trustedContactPhone?.trim();return`<div class="modal-card crisis-modal">
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
        ${Xo.map(o=>{const r=a.isMinor&&o.youth;return`
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
  </div>`}function uo(e,t,a,s={},n={},o=""){const r=s?.showDailyWord!==!1,i=s?.showDailyTip!==!1;if(!r&&!i)return"";const l=Si(e,t),c=ki(e,a,s),f=Mi(n,s),m=o&&o.toLowerCase()===l.word.toLowerCase();return`<div class="daily-inspiration-grid">
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
          <button type="button" class="button ${m?"solid":"outline"} small-btn" data-action="use-daily-word" data-word="${u(l.word)}">
            ${d(m?"check":"pen")} ${m?"Elegida hoy":"Usar hoy"}
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
        ${f.length?`
          <div class="contextual-advice-list">
            ${f.map(p=>`
              <div class="contextual-advice-item">
                ${d(p.icon)}
                <div><strong>${u(p.title)}:</strong> ${u(p.text)}</div>
              </div>
            `).join("")}
          </div>
        `:""}
      </article>
    `:""}
  </div>`}function Hi(e={},t=[],a=1,s=!1){const n=Z(e),o=new Set(t.map(i=>i.name.toLowerCase())),r=new Set(e.interests||[]);return`<div class="modal-card setup-wizard-modal ${s?"is-mandatory":""}" data-current-step="${a}">
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
            ${ut.map(i=>`
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
            ${_t.map(i=>`
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
            <p>Sueño ${A(n.sleepRecommended)} h · dedicación ${A(n.studyRecommended)} h.</p>
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
              ${pt.map(i=>`
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
              ${mt.map(i=>`
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
            ${ne.map(i=>`
              <label class="theme-card">
                <input type="radio" name="theme" value="${i.id}" ${(e.theme||"paper")===i.id?"checked":""}>
                <div class="theme-card-top">
                  <span class="theme-favicon-preview">${Fe(i.id,e)}</span>
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
  </div>`}const Ga=e=>ha.find(t=>t.id===e?.glass)||ha[0];function zt(e={},t={}){const a=Ga(e),s=t.class?` ${t.class}`:"",n=t.paper===!1?"":`<path class="bottle-paper" d="M10.6 13.4h6.2M10.6 15.6h4.4" stroke="${a.hex}" stroke-width="1.1" stroke-linecap="round" opacity=".8"/>`;return`<svg class="bottle-glyph${s}" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <g transform="rotate(-24 14 14)">
      <path d="M11 4.2h6v3.1c0 1 .3 1.6 1 2.3l1.5 1.6c.9 1 1.4 2 1.4 3.3v7.2c0 1.4-1.1 2.5-2.5 2.5h-8.8c-1.4 0-2.5-1.1-2.5-2.5v-7.2c0-1.3.5-2.3 1.4-3.3l1.5-1.6c.7-.7 1-1.3 1-2.3Z" fill="color-mix(in srgb,${a.hex} 22%,transparent)" stroke="${a.hex}" stroke-width="1.2"/>
      <path d="M11.6 6.6h4.8" stroke="${a.hex}" stroke-width="1" opacity=".6"/>
      <rect class="bottle-cork" x="12.2" y="2.4" width="3.6" height="2.4" rx="1" fill="${a.hex}" opacity=".85"/>
      ${n}
      <path class="bottle-shine" d="M9.6 15.4v6.4" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".4"/>
    </g>
  </svg>`}function Pi(e=1440,t=4,a=40,s=480,n=0){const o=-s+n;let r=`M${o} ${a}`;for(let i=o;i<e+s;i+=s)r+=` C${i+s*.25} ${a-t} ${i+s*.25} ${a-t} ${i+s*.5} ${a}`,r+=` C${i+s*.75} ${a+t} ${i+s*.75} ${a+t} ${i+s} ${a}`;return r}function Fi(e=0,t=0){const a=Math.abs(Number(e)||0)%7*11,s=Math.max(0,Math.min(1,Number(t)||0)),n=(o,r,i,l,c,f)=>{const m=Math.round(i+s*i*.75),p=(c*(1-Math.min(.35,s*.2))).toFixed(1);return`<path class="thoughts-wave-line ${o}" style="--wave-dur:${p}s;--wave-delay:${f}s" d="${Pi(1440,m,r,l,a)}"/>`};return`<svg class="sea-wave-svg thoughts-wave-scene" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
    ${n("wave-line-surface",22,3,480,8,-1.7)}
    ${n("wave-line-middle",69,4,400,10,-4.1)}
    ${n("wave-line-distance",123,3,360,12,-7.3)}
  </svg>`}function zi(e={}){const t=Aa(`${e.id||""}|${e.castAt||""}`),a=(t&1)===1,s=(t>>>3)%14;return{x:a?79+s:8+s,depth:13+(t>>>7)%8}}function Bi(){return`<svg class="thoughts-island-scenery" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
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
  </svg>`}function Ri(e=[],t=v(),a=new Date){const s=Vt(e,t),n=s.drifting,o=s.returned,r=Bn(t),i=gs(t),l=Math.round(i.strength*100),c=Math.round(45+r.level*10),f=Math.min(1,r.rough),m=zn(a),p=o.filter(T=>T.seen!==!0).length,y=s.lost.length,b=n.length?"sent":p?"unread":o.length?"received":y?"lost":"calm",x=n.length?`${n.length} ${n.length===1?"botella en camino":"botellas en camino"}`:p?`${p} ${p===1?"botella nueva":"botellas nuevas"}`:o.length?`${o.length} ${o.length===1?"botella recibida":"botellas recibidas"}`:y?`${y} ${y===1?"botella perdida":"botellas perdidas"}`:"Mar en calma",N=o.slice(0,5).map((T,j)=>{const q=T.seen!==!0;return`<button type="button" class="vault-arrival${q?" is-new is-washing":""}" style="--arrival-x:${28+j*11}%;--wash-delay:${Math.min(j,4)*120}ms" data-action="open-bottle" data-id="${T.id}" aria-label="${q?"Abrir botella nueva recibida":"Abrir botella recibida"}">
      ${zt(T,{class:q?"is-landed":""})}<span class="sr-only">${q?"Nueva":"Recibida"}</span>
    </button>`}).join("");return`<section id="thoughts-top" class="sea-panel thought-vault thoughts-ocean-stage ${o.length?"has-arrivals":""}${p?" has-unread":""}"
    data-dayphase="${m.phase}" data-tide="${i.key}" data-weather="${r.weather.id}" data-bottle-state="${b}"
    style="--sun-x:${m.x}%;--sun-y:${m.y}%;--moon-x:${m.moonX}%;--moon-y:${m.moonY}%;--water-level:${c}%;--tide-level:${l}%"
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
        <p class="thoughts-state-pill" data-state="${b}" role="status"><span class="thoughts-state-mark" aria-hidden="true"></span>${u(x)}</p>
        <div class="thoughts-tide-status" role="status" aria-label="Estado de la marea: ${u(i.name)}. Fase: ${u(i.phase)}" title="Fase lunar: ${u(i.phase)}">
          <span class="thoughts-tide-icon" aria-hidden="true">${d("wave")}</span>
          <span class="thoughts-tide-name">${u(i.name)}</span>
          <span class="thoughts-tide-meter" role="meter" aria-label="Intensidad de la marea" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}"><i></i></span>
        </div>
      </div>
    </header>
    <div class="sea-water vault-water" aria-hidden="true">
      ${Fi(Aa(t),f)}
      <span class="thoughts-water-reflection"></span>
    </div>
    ${Bi()}
    ${N?`<div class="vault-arrivals" aria-label="Botellas recibidas">${N}</div>`:""}
  </section>`}function Gi(e){if(!e||!e.sent)return`<div class="ocean-figures is-empty">
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
  </div>`}function sn(e=0,t="sent"){const a=Number(e),s=Number.isFinite(a)?Math.max(0,Math.floor(a)):0;return`<p class="thoughts-bottle-count-only" role="status" aria-label="${s} ${t==="lost"?s===1?"botella perdida":"botellas perdidas":s===1?"botella enviada":"botellas enviadas"}">${s}</p>`}function Ii(e={},t=v(),a={}){const s=String(a.text||""),n=Math.max(1,Math.min(5,Math.round(Number(a.force)||3)));return`<form id="bottle-form" class="card bottle-composer">
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
        ${R.map(o=>`<label class="mini-mood" style="--mood-color:${o.color}" title="${o.label}">
          <input type="radio" name="mood" value="${o.value}" ${a.mood===o.value?"checked":""}>
          <span>${o.emoji}</span>
        </label>`).join("")}
      </div>
      <button type="submit" class="button solid cast-btn"${s.trim()?"":" disabled"}>${d("send")} Lanzar botella</button>
    </div>
  </form>`}function Ui(e,t=v(),a=0){const s=Pe(e,t),n=Ga(e),o=`<button type="button" class="icon-button ghost delete-button" data-action="delete-bottle" data-id="${e.id}" aria-label="Eliminar">${d("trash")}</button>`;if(s!=="returned"){const l=s==="lost"?"Perdida":"Enviada",c=s==="lost"?"No volvió":"En camino";return`<article class="card bottle-card is-${s} is-locked" style="--tint:${n.hex};--card-delay:${Math.min(9,a)*35}ms" data-bottle-id="${e.id}" aria-label="${l}. ${c}">
      <header class="bottle-card-head">
        <span class="bottle-card-mark">${zt(e,{paper:!1})}</span>
        <div class="bottle-card-who"><p class="field-caption">${c}</p><h3>${l}</h3></div>
        ${s==="drifting"?`<span class="bottle-lock-mark" aria-hidden="true">${d("lock")}</span>`:""}
      </header>
      <p class="bottle-card-journey">${u(Vs(e,t))}</p>
      <footer class="bottle-card-foot">
        ${s==="lost"?`<button type="button" class="text-button" data-action="recast-bottle" data-id="${e.id}">Soltar otra vez</button>`:""}
        ${o}
      </footer>
    </article>`}const r=e.seen!==!0,i=r?"Nueva · recibida":e.kept?"Recibida · guardada":"Recibida";return`<article class="card bottle-card is-returned${r?" is-unread":""}${e.kept?" is-kept":""}" style="--tint:${n.hex};--card-delay:${Math.min(9,a)*35}ms" data-bottle-id="${e.id}">
    <header class="bottle-card-head">
      <span class="bottle-card-mark">${zt(e)}</span>
      <div class="bottle-card-who"><p class="field-caption">${i}</p><h3>Pensamiento</h3></div>
      ${e.kept?`<span class="kept-mark" title="Guardado">${d("bookmark")}</span>`:""}
    </header>
    <p class="bottle-card-text ${Ar(e.text)<=26?"is-short":""}">${u(e.text)}</p>
    <p class="bottle-card-journey">${u(Vs(e,t))}</p>
    ${e.reply?`<p class="bottle-card-reply"><span>Respuesta</span> ${u(e.reply)}</p>`:""}
    <footer class="bottle-card-foot">
      <button type="button" class="button outline small-btn" data-action="open-bottle" data-id="${e.id}" aria-label="${r?"Abrir botella nueva":"Abrir botella recibida"}">Abrir</button>
      ${o}
    </footer>
  </article>`}function _i(e,t=v(),a={}){if(!bs(e,t))return"";const s=Ga(e),n=e.mood?R[e.mood-1]:null;return`<div class="modal-card bottle-modal ${e.seen!==!0?"is-fresh":""}" style="--tint:${s.hex}" data-modal-bottle="${e.id}">
    <button type="button" class="icon-button ghost bottle-close" data-modal="close" aria-label="Cerrar">${d("close")}</button>
    <span class="bottle-wax" aria-hidden="true">${zt(e,{paper:!1})}<i class="wax-crack"></i></span>
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
  </div>`}function Wi(e={}){return`<div class="splash-layer" style="--tint:${Ga(e).hex}">
    <span class="splash-arc">${zt(e)}</span>
    <span class="splash-ring"></span>
    <span class="splash-ring is-2"></span>
    <span class="splash-drop"></span>
    <span class="splash-drop is-2"></span>
    <span class="splash-drop is-3"></span>
  </div>`}const po=["L","M","X","J","V","S","D"],nn=e=>po[(Re(e).getDay()+6)%7];function mo(e,t,a=""){const n=2*Math.PI*26,o=(Math.min(100,Math.max(0,e))/100*n).toFixed(2);return`<div class="ring-widget ${e>=100?"is-full":""}">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle class="ring-track" cx="32" cy="32" r="26"/>
      <circle class="ring-fill" cx="32" cy="32" r="26" stroke-dasharray="${o} ${n.toFixed(2)}"/>
    </svg>
    <span class="ring-value">${t}</span>
    ${a?`<span class="ring-sub">${u(a)}</span>`:""}
  </div>`}function Qi(e=[],t=null,a=[],s=v(),n=v()){return e.length?`<div class="habit-board">${e.map((o,r)=>{const i=!!t?.habits?.[o.id],l=xa(a,o.id,s>n?s:n),c=Hn(a,o.id,7,s);return`<button type="button" class="habit-toggle ${i?"is-done":""}" style="--habit-i:${r}"
      data-action="toggle-habit" data-habit="${o.id}" data-date="${s}" aria-pressed="${i}">
      <span class="habit-tick" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5 6.8 11.8 12.8 4.8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span class="habit-copy">
        <strong>${u(o.name)}</strong>
        <small>${i?"hecho hoy":s===n?"toca para marcarlo":"aún por hacer"}</small>
      </span>
      <span class="habit-dots" aria-hidden="true">
        ${Array.from({length:7},(f,m)=>{const p=D(s,m-6);return`<i class="${!!a.find(b=>b.date===p)?.habits?.[o.id]?"on":""} ${p>n?"future":""}"></i>`}).join("")}
      </span>
      <span class="habit-streak ${l?"is-hot":""}" title="Racha actual">${l?`${d("flame")} ${l}`:`${c.done}/7`}</span>
    </button>`}).join("")}</div>`:""}function Vi(e=[],t=[],{days:a=28,end:s=v(),today:n=v(),title:o="Tus últimas 4 semanas"}={}){if(!t.length)return"";const{dates:r,rows:i}=rr(e,t,a,s,n),l=z(r[0],{day:"numeric",month:"short"}).replace(/\./g,"");return`<section class="card momentum-card">
    <div class="section-heading">
      <div>
        <p class="eyebrow">${d("grid")} Constancia</p>
        <h2>${u(o)}</h2>
      </div>
      <span class="field-caption">${u(l)} → ${u(z(r[r.length-1],{day:"numeric",month:"short"}))}</span>
    </div>
    <p class="momentum-hint">Marca o quita un hábito.</p>
    <div class="momentum-scroll">
      <div class="momentum-grid" style="--cols:${a}">
        <span class="momentum-corner"></span>
        ${r.map(c=>`<span class="momentum-day ${c===n?"is-today":""}">${c.slice(8,10)}</span>`).join("")}
        ${i.map(c=>`
          <span class="momentum-name" title="${u(c.habit.name)}">${u(c.habit.name)}</span>
          ${c.cells.map(f=>`<button type="button" class="momentum-cell ${f.done?"is-done":""} ${f.future?"is-future":""} ${f.recorded?"":"is-blank"}"
            ${f.future?"disabled":""} data-action="toggle-habit" data-habit="${c.habit.id}" data-date="${f.date}" aria-pressed="${f.done}"
            aria-label="${u(c.habit.name)} · ${z(f.date)} · ${f.done?"cumplido":"sin cumplir"}">
            <i></i>
          </button>`).join("")}
        `).join("")}
      </div>
      <div class="momentum-weekdays" style="--cols:${a}">
        <span class="momentum-corner"></span>
        ${r.map(c=>`<span class="${nn(c)==="L"?"is-mon":""}">${nn(c)}</span>`).join("")}
      </div>
    </div>
    <div class="momentum-legend">
      <span><i class="lg done"></i> cumplido</span>
      <span><i class="lg"></i> sin registrar</span>
      <span><i class="lg blank"></i> día sin entrada</span>
      <span class="momentum-weekday-note">${po.join(" ")} · cada lunes resaltado</span>
    </div>
  </section>`}function Zi(e=[],t=[],a=v()){return e.length?`<section class="card habit-stats-card">
    <div class="section-heading"><div><p class="eyebrow">${d("chart")}constancia por hábito</p><h2>Cada uno a su ritmo</h2></div><span class="field-caption">últimos 28 días</span></div>
    <ul class="habit-stats-list">
      ${e.map(s=>{const n=Hn(t,s.id,28,a),o=xa(t,s.id,a),r=On(t,s.id);return`<li class="habit-stat-row">
          <div class="habit-stat-name">
            <strong>${u(s.name)}</strong>
            <small>${Gs(t,s.id)} ${Gs(t,s.id)===1?"día marcado":"días marcados"} en total</small>
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
  </section>`:""}function Yi(e={},t=[]){const a=new Set(t.map(n=>n.name.toLowerCase())),s=(e.suggestedHabits||[]).filter(n=>!a.has(n.toLowerCase())).slice(0,6);return`<section class="card habit-composer">
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
  </section>`}function Ji(e={},t={},a=[],s=null){return`<section class="card counters-board">
    <div class="section-heading">
      <div><p class="eyebrow">${d("drop")} Contadores</p><h2>Lo de hoy, en cifras</h2></div>

    </div>
    ${Ci(e?.counters||{},s||ye(t),t,{action:"routine"})}
    ${a.length?`<p class="sleep-mood-insight">${d("spark")} ${u(a[0])}</p>`:""}
  </section>`}function ho(e=0,t=""){const a=Number(e)||0;return`<div class="task-row">
    <span class="task-index">${String(a+1).padStart(2,"0")}</span>
    <input class="task-input" data-index="${a}" value="${u(t||"")}" maxlength="200" aria-label="Tarea ${a+1}">
    <button type="button" class="icon-button ghost delete-button" data-action="remove-goal-routine" data-index="${a}" aria-label="Quitar tarea">${d("close")}</button>
  </div>`}function Ki(e={},t=v()){const a=e?.goals||[];return`<section class="card tomorrow-board">
    <div class="section-heading">
      <div><p class="eyebrow">${d("sail")} Para mañana</p><h2>Tareas de mañana</h2></div>
      <button type="button" class="text-button" data-action="add-goal-routine">${d("plus")} Añadir tarea</button>
    </div>
    <label class="sr-only" for="routine-tomorrow">Intención para mañana</label>
    <textarea id="routine-tomorrow" class="tomorrow-intent" name="tomorrow" maxlength="600" rows="2"
      placeholder="Mañana quiero…">${u(e?.tomorrow||"")}</textarea>
    <div class="task-list" id="routine-goals">
      ${a.length?a.map((s,n)=>ho(n,s)).join(""):'<p class="habit-empty">Sin tareas para mañana.</p>'}
    </div>
  </section>`}function Xi(e=[],t=null,a=[],s=v()){const n=e.filter(l=>t?.habits?.[l.id]).length,o=e.length?Math.round(n/e.length*100):0,r=e.length?Math.max(0,...e.map(l=>xa(a,l.id,s))):0,i=z(xe(s),{day:"numeric",month:"short"});return`<section class="card routine-teaser">
    <div class="section-heading">
      <div><p class="eyebrow">${d("listChecks")} Rutina de hoy</p><h2>${n}/${e.length||0} ${e.length===1?"hábito":"hábitos"}</h2></div>
      ${mo(o,`${o}%`)}
    </div>
    <p class="routine-teaser-note">${e.length?`Semana del ${u(i)}.`:"Sin hábitos."}</p>
    <button type="button" class="text-button full-link" data-view="routine">Ir a Rutina ${d("arrow")}</button>
    ${r?`<span class="routine-teaser-flame">${d("flame")} racha de ${r} días</span>`:""}
  </section>`}const F=document.querySelector("#app"),Bt=sr([...document.querySelectorAll("script[src]")].map(e=>e.src),window.location.origin);let P=[],M=[],B=[],h={...ee},Ke="",C="diary",S=v(),ie=v(),ta=v(),Y="shore",we="hoy",ft={text:"",mood:null,sea:"breeze",force:3},te=!1,tt=7,se=!1,K=!1,ra="",ia="",la="",ca="grid",Ae="list",fe="pulse",pe="personal",nt=null,Ee=null,qs=0,Es=0,da=0,Ls=0,ot=!1,Tt=!1,Ia=!1,ua=null,on=0,rn="",fo="idle",ln=!1,me=!0,le=!0,aa=null,Oe=!1,rt=!1,cn=null,dn="",un=!1,go=null;const pa=nr();let ls=null;function it(){me=!!!ls?.matches&&!h.reduceMotion,document.documentElement.dataset.motion=me?"full":"calm"}try{ls=window.matchMedia("(prefers-reduced-motion: reduce)"),it(),ls.addEventListener?.("change",it)}catch{it()}function ze(e,t=h){const a=ne.find(s=>s.id===e)||ne[0];document.documentElement.dataset.theme=a.id;try{const s=vi(a.id,t);let n=document.querySelector('link[rel="icon"]');n||(n=document.createElement("link"),n.rel="icon",document.head.appendChild(n)),n.type="image/svg+xml",n.href=s;const o=document.querySelector('meta[name="theme-color"]');o&&o.setAttribute("content",a.colors[0]),document.title=t?.name?`Cuaderno de ${t.name}`:"Diario"}catch{}}function Ua(){P=Ba(),M=Kt(),B=Ye(),h=Ra(),K=!!h.sidebarCollapsed,it(),ze(h.theme,h)}try{Ua()}catch(e){Ke="No se han podido leer los datos guardados. Revisa el almacenamiento del navegador o recupera una copia. "+e.message}const bo=[{label:"Cuaderno",items:[["diary","pen","Hoy"],["archive","book","Archivo"]]},{label:"Bienestar",items:[["routine","listChecks","Rutina"],["stats","chart","Progreso"]]},{label:"Tu espacio",items:[["thoughts","spark","Pensamientos"],["setup","sliders","Ajustes"]]}],el=["diary","routine","thoughts","archive","stats"];function yo(){return bo.flatMap(e=>e.items)}const Nt=e=>yo().find(t=>t[0]===e)?.[2]||"Hoy";function cs(){return{view:C,thoughtsTab:Y,routineTab:we,archiveTab:Ae,statsTab:fe,profileTab:pe}}function lt(e){return hs({view:e},Bt)}function ae(e=!1){const t=hs(cs(),Bt);window.location.pathname!==t&&window.history[e?"replaceState":"pushState"]({view:C,thoughtsTab:Y,routineTab:we,archiveTab:Ae,statsTab:fe,profileTab:pe},"",t)}function vo(){const e=ar(window.location.pathname,Bt);C=e.view,Y=e.thoughtsTab||"shore",Oe=e.view==="thoughts"&&Y!=="shore",te=!1,we=e.routineTab||"hoy",Ae=e.archiveTab||"list",fe=e.statsTab||"pulse",pe=e.profileTab||"personal";const t=hs(cs(),Bt);(e.path!==Dn(cs())||window.location.pathname!==t)&&window.history.replaceState({view:C,thoughtsTab:Y,routineTab:we,archiveTab:Ae,statsTab:fe,profileTab:pe},"",t)}function pn(e,{transition:t=!0,replace:a=!1,instant:s=!1}={}){C=e,se=!1,le=!0,C==="diary"&&(S=v()),C==="thoughts"&&(Y="shore",Oe=!1,te=!1),C!=="thoughts"&&(te=!1),C==="routine"&&(we="hoy"),C==="archive"&&(Ae="list"),C==="stats"&&(fe="pulse"),C==="setup"&&(pe="personal"),ae(a),k({transition:t,instant:s})}function tl(e,{transition:t=!0,replace:a=!1}={}){if(Va(),document.querySelector(".thoughts-entry-wave")&&Cs(),e==="thoughts"&&C!=="thoughts"&&t&&me){wo(()=>pn(e,{replace:a,transition:!1,instant:!0}));return}pn(e,{transition:t,replace:a})}function $o(e){if(e!=="thoughts")return"";const t=qa(B).some(a=>a.seen!==!0);return`<span class="nav-dot ${t?"is-new":""}" ${t?"":"hidden"} title="hay pensamientos sin leer"></span>`}function al([e,t,a],s){const n=e==="thoughts"?qa(B).filter(o=>o.seen!==!0).length:0;return`<a class="nav-item ${C===e?"active":""}" style="--nav-i:${s}" data-view="${e}" href="${lt(e)}" title="${u(a)}" data-tooltip="${u(a)}" ${C===e?'aria-current="page"':""}>
    <span class="nav-index">${String(s+1).padStart(2,"0")}</span>
    <span class="nav-item-icon">${d(t)}${n?'<i class="nav-icon-ping" aria-hidden="true"></i>':""}</span>
    <span class="nav-label">${u(a)}</span>${$o(e)}
  </a>`}function sl(){let e=0;return bo.map(t=>`<div class="nav-group">
    <p class="nav-group-label">${u(t.label)}</p>
    ${t.items.map(a=>al(a,e++)).join("")}
  </div>`).join("")}function nl(){return`<nav class="tabbar" aria-label="Navegación inferior">
    ${el.map(e=>{const t=yo().find(s=>s[0]===e);if(!t)return"";const a=t[2];return`<a class="tabbar-item ${C===e?"active":""}" data-view="${e}" href="${lt(e)}" ${C===e?'aria-current="page"':""}>
        <span class="tabbar-icon">${d(t[1])}${$o(e)}</span>
        <span class="tabbar-label">${u(a)}</span>
      </a>`}).join("")}
  </nav>`}function ol(){return`
  <div class="sidebar-backdrop" data-action="close-menu" aria-hidden="true"></div>
  <aside class="sidebar" aria-label="Menú principal">
    <div class="sidebar-top-row">
      <a href="${lt("diary")}" class="brand" data-action="today" title="Ir a hoy">
        <span class="brand-mark"><span class="brand-full">diario</span><span class="brand-short">d</span><span class="brand-period">.</span></span>
      </a>
      <button type="button" class="icon-button sidebar-collapse-btn" data-action="toggle-sidebar" aria-label="Plegar o desplegar el menú">
        ${d("left")}
      </button>
    </div>
    <div class="brand-rule"></div>
    <div id="ex-libris-slot">${ro(h,P.length)}</div>
    <div class="nav-wrap">
      <span class="nav-rail" aria-hidden="true"></span>
      <nav class="sidebar-nav" id="sidebar-nav" aria-label="Navegación principal">${sl()}</nav>
    </div>
  </aside>
  <div class="shell">
    <header class="topbar">
      <div class="topbar-left">
        <a class="mobile-brand" data-view="diary" href="${lt("diary")}" aria-label="Ir a Hoy">diario<span>.</span></a>
        <span class="mobile-page-name" id="mobile-page-name">${u(Nt(C))}</span>
        <button class="icon-button ghost mobile-menu" data-action="menu" aria-label="Abrir navegación" aria-expanded="false">${d("menu")}</button>
        <button class="icon-button ghost desktop-sidebar-toggle" data-action="toggle-sidebar" aria-label="Alternar barra lateral">${d("sidebar")}</button>
        <span class="breadcrumb"><span id="breadcrumb-owner">${h.name?`Cuaderno de ${u(h.name)}`:"Diario"}</span> <span>/</span> <span id="breadcrumb-view">${u(Nt(C))}</span></span>
      </div>
      <div class="topbar-right">
        <a class="icon-button mobile-settings-link" data-view="setup" href="${lt("setup")}" aria-label="Ajustes" title="Ajustes">${d("sliders")}</a>
        <button type="button" id="theme-pill" class="theme-pill" data-action="cycle-theme">
          <span class="topbar-favicon-mini" id="theme-pill-favicon">${Fe(h.theme,h)}</span>
          <span id="theme-pill-label"></span>
        </button>
        <button type="button" class="avatar" id="avatar-slot" data-action="open-setup-wizard" title="Personalizar mi perfil, edad y gustos" aria-label="Personalizar mi perfil"></button>
      </div>
    </header>
    <main id="main"></main>
    <div class="tabbar-wrap">
      <span class="tabbar-rail" aria-hidden="true"></span>
      <nav class="tabbar" id="tabbar" aria-label="Navegación inferior">${nl()}</nav>
    </div>
    <footer class="page-footer">
      <span id="footer-motto">${d("leaf")} ${u(h.motto||"Un día a la vez.")}</span>
      <span id="footer-owner">${h.name?`Cuaderno de ${u(h.name)}`:"Diario personal"}</span>
    </footer>
  </div>
  <div id="toast" role="status" aria-live="polite"></div>
  <div id="stamp" aria-hidden="true"></div>
  <div id="save-health" class="save-health" role="status" aria-live="polite" hidden></div>
  <dialog id="modal"></dialog>`}function rl(){dc();const e=F.querySelector(".sidebar");e&&(e.classList.add("is-mounting"),setTimeout(()=>e.classList.remove("is-mounting"),900)),window.addEventListener("resize",()=>Rt()),document.fonts?.ready?.then(()=>Rt())}function Rt(){const e=F.querySelector(".nav-wrap"),t=F.querySelector(".nav-rail");if(e&&t){const n=e.querySelector(".nav-item.active")||e.querySelector(".nav-item");n&&(t.style.setProperty("--rail-y",`${n.offsetTop}px`),t.style.setProperty("--rail-h",`${n.offsetHeight}px`),t.classList.add("is-ready"))}const a=F.querySelector("#tabbar"),s=F.querySelector(".tabbar-rail");if(a&&s){const n=a.querySelector(".tabbar-item.active")||a.querySelector(".tabbar-item");n&&(s.style.setProperty("--rail-x",`${n.offsetLeft}px`),s.style.setProperty("--rail-w",`${n.offsetWidth}px`),s.classList.add("is-ready"))}}function il(){F.classList.toggle("is-thoughts-immersive",C==="thoughts");const e=ne.find(x=>x.id===h.theme)||ne[0],t=F.querySelector(".sidebar"),a=F.querySelector(".sidebar-backdrop"),s=F.querySelector(".mobile-menu");t&&(t.classList.toggle("is-open",se),t.classList.toggle("is-collapsed",K),t.classList.toggle("is-ready",!0)),a&&a.classList.toggle("is-visible",se),s&&s.setAttribute("aria-expanded",String(se));for(const x of[".sidebar-collapse-btn",".desktop-sidebar-toggle"]){const N=F.querySelector(x);N&&(N.title=`${K?"Desplegar menú · Ctrl+B":"Plegar menú · Ctrl+B"}`,N.setAttribute("aria-expanded",String(!K)))}const n=F.querySelector(".sidebar-collapse-btn .icon");n&&(n.outerHTML=d(K?"right":"left")),F.querySelectorAll("#sidebar-nav .nav-item, #tabbar .tabbar-item").forEach(x=>{const N=x.dataset.view===C;x.classList.toggle("active",N),N?x.setAttribute("aria-current","page"):x.removeAttribute("aria-current")}),Mo();const o=F.querySelector("#ex-libris-slot");o&&(o.innerHTML=ro(h,P.length));const r=F.querySelector("#breadcrumb-owner");r&&(r.textContent=h.name?`Cuaderno de ${h.name}`:"Diario");const i=F.querySelector("#breadcrumb-view");i&&(i.textContent=Nt(C)),document.title=`${Nt(C)} · ${h.name?`Cuaderno de ${h.name}`:"Diario personal"}`;const l=F.querySelector("#mobile-page-name");l&&(l.textContent=Nt(C));const c=F.querySelector("#theme-pill-label");c&&(c.textContent=e.name);const f=F.querySelector("#theme-pill");f&&(f.title=`Cambiar papel e icono · ${e.name}`);const m=F.querySelector("#theme-pill-favicon");m&&(m.innerHTML=Fe(h.theme,h));const p=F.querySelector("#avatar-slot");p&&(p.innerHTML=h.name?`<span class="avatar-initial">${u(h.name.slice(0,1).toUpperCase())}</span>`:d("user"));const y=F.querySelector("#footer-motto");y&&(y.innerHTML=`${d("leaf")} ${u(h.motto||"Un día a la vez.")}`);const b=F.querySelector("#footer-owner");b&&(b.textContent=h.name?`Cuaderno de ${h.name}`:"Diario personal"),Rt()}let Ja=!1;function k(e={}){if(!Ja){Ja=!0;try{He&&(clearTimeout(He),He=null,$a()),gt(),ze(h.theme,h),ln||(F.innerHTML=ol(),ln=!0,rl()),ml(e),il(),Be(),ct(),!h.completed&&!rt&&(rt=!0,Ns(1,{mandatory:!0}))}finally{Ja=!1}}}function ll(e){if(!e)return"";const t=e.reason==="full"?"el almacenamiento del navegador está lleno":e.reason==="blocked"?"el navegador tiene bloqueado el almacenamiento":"el navegador no ha aceptado la escritura",a=In();return`${e.label} sin guardar: ${t}.${a>1?` (${a} escrituras en espera)`:""}`}function Be(){const e=document.querySelector("#save-health"),t=vs(),a=t?`${t.key}|${t.reason}|${In()}`:"";return e&&a!==dn&&(dn=a,t?(e.hidden=!1,e.innerHTML=`
        <span class="save-health-dot" aria-hidden="true"></span>
        <span class="save-health-text">${u(ll(t))}</span>
        <button type="button" class="text-button" data-action="retry-save">Reintentar</button>
        <button type="button" class="text-button" data-action="export">Descargar copia</button>`):(e.hidden=!0,e.innerHTML="")),t}function cl(e){const t=new Date(e||"");if(Number.isNaN(t.getTime()))return"";try{return t.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})}catch{return""}}function dl(){if(Ke)return{tone:"error",text:"Los datos guardados no se pueden leer."};if(vs())return{tone:"error",text:"Hay algo sin guardar en el navegador."};const e=Xt(S);if(Jl(S))return e?{tone:"pending",text:"Cambios sin guardar"}:{tone:"pending",text:"Este día aún no está en el cuaderno"};if(e){const t=cl(e.updatedAt);return{tone:"saved",text:t?`Guardado a las ${t}`:"Guardado"}}return{tone:"idle",text:"Nada escrito todavía"}}function ct(){const e=document.querySelector("#save-status");if(!e)return;const t=dl(),a=`${t.tone}|${t.text}`;e.dataset.state!==a&&(e.dataset.state=a,e.className=`save-status is-${t.tone}`,e.textContent=t.text)}function Cs(){pa.cancel(),document.querySelector(".thoughts-entry-wave")?.remove()}function wo(e=()=>{}){if(Cs(),!me){e();return}const t=pa.begin(),a=document.createElement("div");a.className="thoughts-entry-wave",a.setAttribute("aria-hidden","true"),a.innerHTML=`<svg class="thoughts-entry-water" viewBox="0 0 1440 1400" preserveAspectRatio="none" aria-hidden="true">
    <defs><linearGradient id="thoughts-entry-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop class="entry-stop entry-stop-surface" offset="0%"/><stop class="entry-stop entry-stop-mid" offset="36%"/><stop class="entry-stop entry-stop-deep" offset="100%"/>
    </linearGradient></defs>
    <path class="thoughts-entry-sea" d="M-40 112C75 80 166 83 276 105S478 137 602 103 816 72 943 102 1160 137 1284 103 1410 83 1480 108V1400H-40Z"/>
    <path class="thoughts-entry-crest" d="M-40 112C75 80 166 83 276 105S478 137 602 103 816 72 943 102 1160 137 1284 103 1410 83 1480 108"/>
    <path class="thoughts-entry-foam" d="M-40 132C100 110 201 114 330 128S559 146 682 125 902 109 1030 127 1260 145 1380 121 1450 116 1480 126"/>
  </svg>`,document.body.appendChild(a);const s=a.querySelector(".thoughts-entry-water");if(!s){e(),a.remove();return}let n="cover",o=setTimeout(l,900);const r=()=>{pa.isCurrent(t)&&(clearTimeout(o),a.remove())};function i(c){c.target!==s||c.propertyName!=="transform"||(n==="cover"?l():n==="reveal"&&r())}function l(){n!=="cover"||!pa.isCurrent(t)||(clearTimeout(o),n="covered",s.style.transition="none",s.style.transform="translateY(0)",e(),requestAnimationFrame(()=>{s.getBoundingClientRect(),s.style.transition="transform .78s cubic-bezier(.55,.05,.35,1)",n="reveal",s.addEventListener("transitionend",i),s.style.transform="translateY(-115%)",o=setTimeout(r,900)}))}s.addEventListener("transitionend",i),s.getBoundingClientRect(),requestAnimationFrame(()=>{s.style.transform="translateY(0)"})}function mn(){const e=document.querySelector(".thoughts-ocean-stage");if(!e)return;const t=zn(new Date);e.dataset.dayphase=t.phase,e.style.setProperty("--sun-x",`${t.x}%`),e.style.setProperty("--sun-y",`${t.y}%`),e.style.setProperty("--moon-x",`${t.moonX}%`),e.style.setProperty("--moon-y",`${t.moonY}%`)}function ul(){aa&&(clearInterval(aa),aa=null),C==="thoughts"&&(mn(),aa=setInterval(mn,6e4))}function pl(){te=!te;const e=document.querySelector(".thoughts-world"),t=document.querySelector(".thoughts-landscape-toggle");if(e?.classList.toggle("is-landscape-only",te),!t)return;const a=te?"Mostrar interfaz":"Ocultar interfaz";t.setAttribute("aria-label",a),t.setAttribute("aria-pressed",String(te)),t.title=te?"Mostrar interfaz":"Ver paisaje sin interfaz";const s=t.querySelector(".icon");s&&(s.outerHTML=d(te?"eye":"expand"))}function ml(e={}){const t=document.querySelector("#main");if(!t)return;C==="thoughts"&&fc();const a=rn!==C,s=a&&C==="thoughts",n=me&&!e.instant&&!s&&(!!e.transition||a||le);le=!1;const o=window.scrollY;go=C==="diary"?S:null,t.innerHTML=`
    ${Ke?`<div class="error-banner" role="alert">${u(Ke)}</div>`:""}
    ${hl()}`,t.className="",n&&(t.offsetWidth,t.classList.add("page-enter")),$c(),nc(),Kl(),pc(),a?(rn=C,window.scrollTo({top:0,behavior:"auto"})):o&&window.scrollTo(0,o),ul()}function _a(e,t,a,s=""){return`<div class="page-heading">
    <div>${e?`<p class="eyebrow">${e}</p>`:""}<h1>${t}</h1></div>
    ${s}
  </div>`}function hl(){switch(C){case"diary":return hn();case"thoughts":return xl();case"routine":return ql();case"archive":return Ol();case"stats":return Hl();case"setup":return Fl();default:return hn()}}function fl(){return`<div class="day-navigation">
    <button type="button" data-action="previous" aria-label="Día anterior">${d("left")}<span>Anterior</span></button>
    <button type="button" data-action="today" class="today-button">Hoy</button>
    <button type="button" data-action="next" ${S>=v()?"disabled":""}><span>Siguiente</span>${d("right")}</button>
  </div>`}function gl(){return h.completed?"":`<section class="card setup-welcome-banner">
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
  </section>`}function bl(e,t){const a=e?Object.values(e.habits||{}).filter(Boolean).length:0,s=qi(h.name),n=Vt(B,S).returned.filter(o=>o.seen!==!0).length;return`<div class="day-hero">
    <div class="hero-left">
      <div class="hero-day-number"><small>Día</small><span>${Wt(S,P)}</span></div>
      <div class="hero-meta">
        <p class="hero-greeting">${u(s)}</p>
        <span class="date-line">${z(S)}</span>
        ${M.length||n?`<p class="hero-line">
          ${M.length?`<button type="button" class="hero-link" data-view="routine">${a}/${M.length} hábitos</button>`:""}
          ${n?`<button type="button" class="hero-link is-new" data-view="thoughts">${n===1?"1 botella nueva":n+" botellas nuevas"}</button>`:""}
        </p>`:""}
      </div>
    </div>
    <div class="hero-right">
      ${fl()}
    </div>
  </div>`}function Ka(e,t,a,s,n=!0){const o=s?String(s).trim().split(/\s+/).length:0;return`<div class="writing-field" data-field="${e}">
    <label for="${e}">${t}<span class="word-count">${o} palabras</span></label>
    <textarea id="${e}" name="${e}" maxlength="20000" placeholder="${u(a)}" class="${n?"large":""}">${u(s||"")}</textarea>
  </div>`}function yl(e){const t=de(h);return t.length?`<div class="entry-parts">
    ${t.map(a=>{const s=`part_${a.key}`,n=e?.parts?.[a.key]||"",o=`<label for="${s}">${u(a.label)}${a.hint?`<small>${u(a.hint)}</small>`:""}</label>`,r=a.type==="line"?`<input id="${s}" name="${s}" class="clean-line-input" maxlength="600" value="${u(n)}">`:`<textarea id="${s}" name="${s}" maxlength="4000" rows="3">${u(n)}</textarea>`;return`<div class="writing-field part-field" data-part="${a.key}">${o}${r}</div>`}).join("")}
  </div>`:""}function vl(e){const t=de(h).filter(a=>String(e?.parts?.[a.key]||"").trim());return t.length?`<div class="sheet-parts">${t.map(a=>`
    <div class="sheet-part"><span>${u(a.label)}</span><p>${u(e.parts[a.key])}</p></div>`).join("")}</div>`:""}function $l(e=""){return`<div class="goal-row"><span class="goal-circle"></span>
    <input name="goal" aria-label="Objetivo para mañana" placeholder="Un objetivo concreto…" maxlength="500" value="${u(e)}">
    <button type="button" class="icon-button ghost" data-action="remove-goal" aria-label="Eliminar objetivo">${d("close")}</button>
  </div>`}function wl(e,t){if(!e)return"";const a=M.filter(n=>e.habits?.[n.id]),s=h.name?`Cuaderno de ${h.name}`:"Resumen del día";return`<section class="card daily-summary notebook-sheet reveal">
    <div class="sheet-header">
      <div>
        <p class="eyebrow">${d("book")} Día ${Wt(e.date,P)}</p>
        <h2>${z(e.date)}</h2>
      </div>
      <span class="mood-tag" style="--mood:${R[e.mood-1].color}">${R[e.mood-1].emoji} ${R[e.mood-1].label}</span>
    </div>
    ${e.wordOfDay||e.capsule?`
      <div class="sheet-capsules">
        ${e.wordOfDay?`<div class="sheet-capsule-item"><span>Palabra del día</span><strong>«${u(e.wordOfDay)}»</strong></div>`:""}
        ${e.capsule?`<div class="sheet-capsule-item"><span>${u(t.capsuleLabel)}</span><strong>${u(e.capsule)}</strong></div>`:""}
      </div>
    `:""}
    <p class="sheet-narrative">${dr(e)}</p>
    ${e.bestOfDay?`<div class="sheet-quote-note"><span>Lo mejor:</span> «${u(e.bestOfDay)}»</div>`:""}
    ${vl(e)}
    ${a.length?`<div class="sheet-habits-line">${d("check")} ${a.map(n=>`<b>${u(n.name)}</b>`).join(" · ")}</div>`:""}
    <div class="sheet-footer">
      <small>${u(s)} · ${Qt(e)} palabras</small>
      <button type="button" class="text-button" data-action="read" data-date="${e.date}">Ver hoja completa ${d("arrow")}</button>
    </div>
  </section>`}function Sl(e){return e?!!(e.bestOfDay||e.differentToday||e.tomorrow||e.energy||e.stress||e.tags&&e.tags.length||e.gratitude&&e.gratitude.some(Boolean)):!1}function hn(){const e=he(S),t=Xt(S),a=Z(h),s=Ia?{triggered:!1}:Ms(e||{}),n=is(S,da),o=e?.mood?R[e.mood-1].color:"",r=e?.sleepHours??h.sleepGoal??a.sleepRecommended??7.5,i=e?.studyHours??0,l=nt===null?Sl(e):nt,c=[6,7,7.5,8,9],f=[0,1,2,3,4];return`
  ${gl()}
  ${bl(e)}
  <div class="section-rule" aria-hidden="true"></div>
  <div id="crisis-alert-slot">${co(s,h)}</div>
  <div class="diary-layout ${Tt?"is-focus-writing":""}">
    <div class="diary-main">
      <form id="diary-form" style="${o?`--active-mood:${o}`:""}" autocomplete="off">
        <!-- 1 · CAPTURA RÁPIDA -->
        <section class="card mood-card-section quick-capture">
          <div class="section-heading">
            <p class="section-index" style="margin-bottom:0">¿Cómo ha ido hoy?</p>
          </div>
          <div class="mood-scale" role="radiogroup" aria-label="¿Cómo te ha ido?">
            ${R.map(m=>`<label class="mood-option" style="--mood-color:${m.color}">
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
                  ${c.map(m=>`<button type="button" class="quick-pill ${Number(r)===m?"active":""}" data-action="quick-number" data-target="sleepHours" data-val="${m}">${A(m)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="sleepHours" name="sleepHours" type="number" min="0" max="24" step="0.5" value="${r}">
                <span>h · Meta ${A(h.sleepGoal||a.sleepRecommended)}</span>
              </div>
            </div>

            <div class="quick-hour-box">
              <div class="quick-hour-head">
                <label for="studyHours">${d("study")} ${u(a.focusLabel)}</label>
                <div class="quick-pills" role="group" aria-label="Atajos de dedicación">
                  ${f.map(m=>`<button type="button" class="quick-pill ${Number(i)===m?"active":""}" data-action="quick-number" data-target="studyHours" data-val="${m}">${A(m)}h</button>`).join("")}
                </div>
              </div>
              <div class="number-wrap compact">
                <input id="studyHours" name="studyHours" type="number" min="0" max="24" step="0.5" value="${i}">
                <span>h · Meta ${A(h.studyGoal??a.studyRecommended)}</span>
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
              <button type="button" class="icon-button ghost" data-action="toggle-focus-writing" title="${Tt?"Salir del modo enfoque":"Ampliar zona de escritura"}" aria-label="Modo enfoque">
                ${d("expand")}
              </button>
            </div>
          </div>
          <div id="writing-prompt-box" class="writing-prompt-banner ${ot?"is-open":""}" ${ot?"":"hidden"}>
            <div>
              <p id="writing-prompt-text">${u(n)}</p>
            </div>
            <div class="writing-prompt-actions">
              <button type="button" class="button outline small-btn" data-action="next-writing-prompt">${d("refresh")} Otra</button>
              <button type="button" class="button solid small-btn" data-action="insert-writing-prompt">${d("pen")} Usar</button>
            </div>
          </div>
          ${Ka("generalDay","Notas del día",a.placeholders.generalDay,e?.generalDay,!0)}
          ${yl(e)}
          <div class="capsule-word-grid">
            <div class="writing-field" data-field="capsule">
              <label for="capsule">${d("spark")} ${u(a.capsuleLabel)}</label>
              <input id="capsule" name="capsule" class="clean-line-input" maxlength="300" placeholder="${u(a.capsulePlaceholder)}" value="${u(e?.capsule||"")}">
            </div>
            <div class="writing-field" data-field="wordOfDay">
              <label for="wordOfDay">${d("book")} Palabra del día</label>
              <input id="wordOfDay" name="wordOfDay" class="clean-line-input" maxlength="60" placeholder="Una palabra que resuma hoy…" value="${u(e?.wordOfDay||"")}">
            </div>
          </div>
        </section>

        <!-- 3 · MÁS DETALLES (etiquetas, momentos, gratitud) -->
        <div class="extras-accordion ${l?"is-open":""}" id="extras-accordion">
          <button type="button" class="extras-toggle-btn" data-action="toggle-more-details" aria-expanded="${l}" aria-controls="extras-panel">
            <div>
              <strong>Añadir más detalles al día</strong>
              <small>Etiquetas, energía y gratitud</small>
            </div>
            <span class="extras-chevron">${d("chevronDown")}</span>
          </button>
          <div id="extras-panel" class="extras-work-shell" ${l?"":"hidden"}>
            <div class="extras-inner">
              <section class="card">
                <p class="section-index">Etiquetas de hoy</p>
                ${Li(e?.tags||[],a.tags)}
              </section>

              <section class="card">
                <p class="section-index">Momentos y energía</p>
                <div class="scale-block" style="margin-bottom:16px">
                  ${an("energy",kn,e?.energy,"bolt","Energía","Del 1 al 5","Opcional")}
                  ${an("stress",xn,e?.stress,"storm","Estrés","Del 1 al 5","Opcional")}
                </div>
                ${Ka("bestOfDay","Lo mejor del día",a.placeholders.bestOfDay,e?.bestOfDay,!1)}
                ${Ka("differentToday","¿Qué ha sido distinto hoy?",a.placeholders.differentToday,e?.differentToday,!1)}
              </section>

              <section class="card">
                <p class="section-index">Tres cosas buenas</p>
                <div class="gratitude-fields">
                  ${["1. Hoy agradezco o valoro...","2. También...","3. Y además..."].map((m,p)=>`<label><span>0${p+1}</span><input name="gratitude${p}" aria-label="${m}" placeholder="${m}" maxlength="20000" value="${u(e?.gratitude?.[p]||"")}"></label>`).join("")}
                </div>
              </section>
            </div>
          </div>
        </div>

        <div class="save-area">
          <p class="save-status is-idle" id="save-status" role="status" aria-live="polite"></p>
          <button class="button solid save-button" type="submit" ${Ke?"disabled":""}>${d("stamp")} Guardar día</button>
        </div>
      </form>
      ${wl(t,a)}
    </div>

    <aside class="diary-aside">
      ${kl()}
      <div id="inspiration-slot">${uo(S,qs,Es,h,e,e?.wordOfDay||"")}</div>
      ${Xi(M,e,P,S)}
      ${So()}
      <div id="quote-slot">${lo(S,Ls,h)}</div>
    </aside>
  </div>`}function kl(){const t=Vt(B,S).returned.filter(o=>o.seen!==!0).length,a=t?"Recibidas":"Pensamientos",s=t?`${t} ${t===1?"nueva":"nuevas"}`:"",n=B.length?`${B.length} ${B.length===1?"nota":"notas"}`:"Vacío";return`<section class="card thoughts-teaser ${t?"has-new":""}">
    <div class="thoughts-teaser-heading">
      <span class="soft-icon ${t?"accent":""}">${d("spark")}</span>
      <div><p class="eyebrow">Pensamientos</p><h2>${u(a)}</h2></div>
    </div>
    ${s?`<p class="thoughts-teaser-copy">${u(s)}</p>`:""}
    <div class="thoughts-teaser-footer">
      <span>${u(n)}</span>
      <button type="button" class="text-button" data-view="thoughts">Abrir ${d("arrow")}</button>
    </div>
  </section>`}function So(){const e=xe(S),t=D(e,6),a=ge(P,e,t),s=Qe(a);return`<section class="card week-preview">
    <div class="section-heading"><h2>Esta semana</h2><span class="tag">${a.length}/7 días</span></div>
    <div class="week-dots">
      ${Array.from({length:7},(n,o)=>{const r=D(e,o),i=a.find(l=>l.date===r);return`<button type="button" data-action="open-day" data-date="${r}" ${r>v()?"disabled":""} aria-label="${z(r)}${i?", "+R[i.mood-1].label:""}">
          <span>${["L","M","X","J","V","S","D"][o]}</span>
          <i class="${i?"filled":""} ${r===v()?"current":""}" style="--mood:${i?R[i.mood-1].color:""}">${i?d("check"):"·"}</i>
        </button>`}).join("")}
    </div>
    <div class="mini-metrics">
      <div>${d("heart")}<strong>${s.count?A(s.mood):"—"}<small>/5</small></strong><span>Ánimo</span></div>
      <div>${d("moon")}<strong>${s.count?A(s.sleep):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${d("study")}<strong>${s.count?A(s.study):"—"}<small>h</small></strong><span>Enfoque</span></div>
    </div>
    <button class="text-button full-link" data-view="stats">Ver progreso ${d("arrow")}</button>
  </section>`}function xl(){const e=v(),t=Vt(B,e),a=[["shore","spark","Recibidas",t.returned.length],["sea","send","Enviadas",t.drifting.length],["kept","bookmark","Guardadas",t.kept.length],["lost","history","Perdidas",t.lost.length]],s=B.length,n=t.returned.filter(r=>r.seen!==!0).length,o=n===1?"1 nueva":`${n} nuevas`;return`<div class="thoughts-world${te?" is-landscape-only":""}">
    <a class="thoughts-exit" data-view="diary" href="${lt("diary")}" aria-label="Volver al diario" title="Volver al diario">
      ${d("left")}
    </a>
    <button type="button" class="thoughts-landscape-toggle" data-action="toggle-thoughts-landscape" aria-label="Ocultar interfaz" title="Ver paisaje sin interfaz" aria-pressed="${te}">${d(te?"eye":"expand")}</button>
    ${Ri(B,e)}
    <section class="thoughts-compose-dock" aria-labelledby="thoughts-compose-title">
      <h2 id="thoughts-compose-title">Escribe una botella</h2>
      <div id="composer-slot">${Ii(h,e,ft)}</div>
    </section>
    <details id="thoughts-bottles-drawer" class="thoughts-bottles-drawer"${Oe?" open":""}>
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
        ${Gi(Mr(B,e))}
        <div class="thoughts-island-bottles">
          <div class="segmented ocean-tabs" role="tablist" aria-label="Estado de las botellas">
            ${a.map(([r,i,l,c])=>`<button type="button" id="thoughts-tab-${r}" role="tab" aria-controls="ocean-body" aria-selected="${Y===r}" data-action="thoughts-tab" data-tab="${r}" class="${Y===r?"active":""}">
              ${d(i)} <span>${u(l)}</span>${c||r==="sea"||r==="lost"?`<span class="seg-count">${c}</span>`:""}
            </button>`).join("")}
          </div>
          <div id="ocean-body" role="tabpanel" aria-labelledby="thoughts-tab-${Y}">${Ml(t,e)}</div>
        </div>
      </section>
    </details>
  </div>`}function Ml(e,t){if(Y==="sea")return sn(e.drifting.length,"sent");if(Y==="lost")return sn(e.lost.length,"lost");const s={shore:e.returned,sea:[],kept:e.kept,lost:[]}[Y]??e.returned;return s.length?`<div class="bottle-grid">${s.map((n,o)=>Ui(n,t,o)).join("")}</div>`:Al(Y)}function Al(e){const t={shore:["La orilla está vacía","Aquí aparecerán las botellas recibidas."],sea:["Mar en calma","Las botellas que envíes aparecerán aquí."],kept:["Sin botellas guardadas","Guarda las recibidas que quieras conservar."],lost:["Sin botellas perdidas",""]},[a,s]=t[e]||t.shore,n=e==="shore"||e==="sea"?`<button type="button" class="button outline" data-action="focus-composer">${d("pen")} Escribir</button>`:"";return`${ya(a,s,n)}`}function ql(){const e=he(S),t=St();return`${_a("Hoy","Rutina","",`
    <div class="segmented">
      ${[["hoy","listChecks","Hoy"],["week","grid","Semana"],["counters","drop","Contadores"],["streaks","flame","Rachas"]].map(([s,n,o])=>`<button type="button" data-action="routine-tab" data-tab="${s}" class="${we===s?"active":""}">${d(n)} ${u(o)}</button>`).join("")}
    </div>
  `)}
  <div class="routine-layout">
    <div class="routine-main tab-panel-enter">
      ${Ll(e)}
      <div id="routine-body">${Cl(e,t)}</div>
    </div>
    <aside class="routine-aside">${Nl(e,t)}</aside>
  </div>`}function El(){return`<div class="day-navigation">
    <button type="button" data-action="shift-day" data-delta="-1" aria-label="Día anterior">${d("left")}<span>Anterior</span></button>
    <button type="button" data-action="today-routine" ${S===v()?"disabled":""}>${d("sun")} Hoy</button>
    <button type="button" data-action="shift-day" data-delta="1" ${S>=v()?"disabled":""}><span>Siguiente</span>${d("right")}</button>
  </div>`}function Ll(e){const t=M.filter(r=>e?.habits?.[r.id]).length,a=M.length?Math.round(t/M.length*100):0,s=M.length?t===0?"Aún no has marcado nada":t===M.length?"Rutina completa":`Vas a ${t} de ${M.length}`:"Tu lista está vacía",n=a>=100?"Lista completa.":a>0?"Buen ritmo.":"Un paso basta.",o=!!Wa(S);return`<section class="card routine-hero">
    <div class="routine-hero-copy">
      <p class="eyebrow">${d("sun")} ${u(z(S,{weekday:"long",day:"numeric",month:"long"}))}</p>
      <h2>${u(s)}</h2>
      <p class="routine-hero-note">${u(n)}</p>
      ${El()}
      ${o?`<p class="routine-hero-pending">${d("pen")} Estos cambios aún no están en el cuaderno.
        <button type="button" class="text-button" data-action="open-day" data-date="${S}">Guardar el día en Hoy ${d("arrow")}</button></p>`:""}
    </div>
    ${mo(a,M.length?`${a}%`:"—","de hoy")}
  </section>`}function Cl(e,t=St()){const a=Z(h),s=v();if(we==="week")return`${Vi(t,M,{days:35,end:s,today:s,title:"Tus últimas cinco semanas"})}${Dl(t)}`;if(we==="counters"){const n=ge(t,D(s,-27),s);return`${Ji(e,h,[])||""}${io(n,h)}`}return we==="streaks"?M.length?`${Zi(M,t,s)}${jl(t)}`:ya("Sin hábitos","Añade uno.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="hoy">${d("plus")} Añadir</button>`):`${M.length?`<section class="card habit-board-card">
    <div class="section-heading">
      <div><p class="eyebrow">${d("listChecks")} Hoy</p><h2>Hábitos</h2></div>
      <span class="field-caption">${M.filter(n=>e?.habits?.[n.id]).length}/${M.length}</span>
    </div>
    ${Qi(M,e,t,S,s)}
  </section>`:ya("Sin hábitos","Añade uno.",`<button type="button" class="button outline" data-action="routine-tab" data-tab="streaks">${d("flame")} Rachas</button>`)}
  ${Ki(e,S)}
  ${Yi(a,M)}`}function Dl(e=St()){const t=xe(S),a=D(t,6),s=ge(e,t,a),n=ge(P,t,a).length,o=M.map(r=>{const i=s.filter(l=>l.habits?.[r.id]).length;return{label:r.name,count:i,total:7,color:i>=5?"var(--green)":i>=3?"var(--ochre)":"var(--red)"}});return`<section class="card">
    <div class="section-heading"><div><p class="eyebrow">${d("week")}Esta semana</p><h2>${u(z(t,{day:"numeric",month:"short"}))} → ${u(z(a,{day:"numeric",month:"short"}))}</h2></div>
      <span class="tag">${n}/7 días con entrada</span></div>
    ${M.length?As(o):'<p class="habit-empty">Añade hábitos para ver su semana.</p>'}
  </section>`}function jl(e=St()){const t=M.map(s=>({h:s,best:On(e,s.id),live:xa(e,s.id)})).filter(s=>s.best>0).sort((s,n)=>n.best-s.best).slice(0,6);if(!t.length)return"";const a=t[0].best||1;return`<section class="card streak-board">
    <div class="section-heading"><div><p class="eyebrow">${d("flame")}El muro de las rachas</p><h2>Tus mejores series</h2></div><span class="field-caption">días seguidos</span></div>
    <ol class="streak-ranks">
      ${t.map((s,n)=>`<li>
        <span class="streak-rank">${String(n+1).padStart(2,"0")}</span>
        <span class="streak-name">${u(s.h.name)}</span>
        <span class="streak-bar"><i style="width:${Math.max(6,Math.round(s.best/a*100))}%"></i></span>
        <span class="streak-num"><b>${s.best}</b> d${s.live?` · viva ${s.live}`:""}</span>
      </li>`).join("")}
    </ol>
  </section>`}function Tl(e=St()){return M.length?e.filter(t=>M.every(a=>t.habits?.[a.id])).length:0}function Nl(e,t=St()){const a=v(),s=ge(P,D(a,-27),a),n=e?Math.min(100,Math.round((e.sleepHours||0)/(h.sleepGoal||7.5)*100)):0;return`
  <section class="card routine-day-card">
    <div class="section-heading"><h2>El día en cifras</h2><span class="tag">${u(z(S,{day:"numeric",month:"short"}))}</span></div>
    <div class="mini-metrics">
      <div>${d("moon")}<strong>${e?A(e.sleepHours):"—"}<small>h</small></strong><span>Sueño</span></div>
      <div>${d("study")}<strong>${e?A(e.studyHours):"—"}<small>h</small></strong><span>Enfoque</span></div>
      <div>${d("drop")}<strong>${e?.counters?.water||0}<small>v</small></strong><span>Agua</span></div>
    </div>
    ${e?`<div class="sleep-goal-bar"><span style="width:${n}%"></span></div>
      <p class="field-caption">${u(Pn(e.sleepHours))}</p>`:'<p class="habit-empty">Este día no tiene entrada en el cuaderno.</p>'}
    <button type="button" class="text-button full-link" data-action="open-day" data-date="${S}">Escribir sobre este día ${d("arrow")}</button>
  </section>
  <section class="card">
    <div class="section-heading"><h2>Rachas del cuaderno</h2><span class="field-caption">28 días</span></div>
    <div class="streak-lines">
      <div><span>${d("flame")} Días seguidos escribiendo</span><strong>${Tn(P)}</strong></div>
      <div><span>${d("seal")} Mejor racha histórica</span><strong>${fs(P)}</strong></div>
      <div><span>${d("check")} Días con toda la rutina</span><strong>${Tl(t)}</strong></div>
      <div><span>${d("moon")} Sueño medio</span><strong>${s.length?A(Qe(s).sleep):"—"} h</strong></div>
    </div>
  </section>
  ${So()}`}function Ol(){const e=[...new Set(P.flatMap(a=>a.tags||[]))],t=P.filter(a=>(!ia||a.mood===+ia)&&(!la||(a.tags||[]).includes(la))&&(!ra||[a.date,a.generalDay,a.bestOfDay,a.differentToday,a.tomorrow,a.wordOfDay,a.capsule,...a.gratitude,...a.goals||[],...a.tags||[]].join(" ").toLocaleLowerCase().includes(ra.toLocaleLowerCase()))).sort((a,s)=>s.date.localeCompare(a.date));return`${_a("Cuaderno","Archivo","",`
    <div class="segmented">
      <button type="button" data-action="archive-tab" data-tab="list" class="${Ae==="list"?"active":""}">${d("book")} Lista</button>
      <button type="button" data-action="archive-tab" data-tab="calendar" class="${Ae==="calendar"?"active":""}">${d("calendar")} Calendario</button>
    </div>
  `)}

  ${Ae==="calendar"?`
    <div class="tab-panel-enter">
      <section class="card full-calendar">
        ${Di(ie,P,{selected:S})}
        <div class="mood-legend">
          ${R.map(a=>`<span><i style="background:${a.color}"></i>${a.label}</span>`).join("")}
        </div>
      </section>
    </div>
  `:`
    <div class="tab-panel-enter">
      <div class="history-controls">
        <label class="search-box">${d("search")}<input id="history-search" aria-label="Buscar en el diario" placeholder="Buscar por palabra, nota o etiqueta…" value="${u(ra)}"></label>
        <select id="history-mood" aria-label="Filtrar por estado de ánimo">
          <option value="">Todos los estados</option>
          ${R.map(a=>`<option value="${a.value}" ${ia==a.value?"selected":""}>${a.emoji} ${a.label}</option>`).join("")}
        </select>
        ${e.length?`
          <select id="history-tag" aria-label="Filtrar por etiqueta">
            <option value="">Todas las etiquetas</option>
            ${e.map(a=>`<option value="${u(a)}" ${la===a?"selected":""}>#${u(a)}</option>`).join("")}
          </select>
        `:""}
        <div class="segmented">
          <button type="button" data-action="history-layout" data-layout="grid" class="${ca==="grid"?"active":""}">Tarjetas</button>
          <button type="button" data-action="history-layout" data-layout="timeline" class="${ca==="timeline"?"active":""}">Hilo</button>
        </div>
      </div>
      <div class="${ca==="timeline"?"history-timeline":"history-grid"}">
        ${t.length?t.map((a,s)=>{const n=Object.values(a.habits||{}).filter(Boolean).length;return`<article class="card history-card" style="--mood:${R[a.mood-1].color};--i:${Math.min(s,10)}">
            <div class="section-heading">
              <p class="eyebrow">Día ${Wt(a.date,P)}</p>
              <span class="mood-tag" style="--mood:${R[a.mood-1].color}">${R[a.mood-1].emoji} ${R[a.mood-1].label}</span>
            </div>
            <h2>${z(a.date,{day:"numeric",month:"long",year:"numeric"})}</h2>
            <p class="entry-excerpt">${u(a.generalDay)}</p>
            ${a.wordOfDay||a.capsule?`
              <div class="history-capsules">
                ${a.wordOfDay?`<span class="history-word-pill">«${u(a.wordOfDay)}»</span>`:""}
                ${a.capsule?`<span class="history-capsule-pill">${d("spark")} ${u(a.capsule)}</span>`:""}
              </div>
            `:""}
            <div class="history-numbers">
              <span class="chiplet">${d("moon")} ${A(a.sleepHours)} h</span>
              <span class="chiplet">${d("study")} ${A(a.studyHours)} h</span>
              ${M.length?`<span class="chiplet">${d("check")} ${n}/${M.length}</span>`:""}
              <span class="chiplet">${d("pen")} ${Qt(a)} pal.</span>
            </div>
            <div class="history-actions">
              <button class="text-button" data-action="read" data-date="${a.date}">Abrir ${d("arrow")}</button>
              <button class="icon-button ghost" data-action="open-day" data-date="${a.date}" aria-label="Editar">${d("pen")}</button>
              <button class="icon-button ghost delete-button" data-action="delete" data-date="${a.date}" aria-label="Eliminar">${d("trash")}</button>
            </div>
          </article>`}).join(""):ya(P.length?"Sin resultados":"Sin entradas","")}
      </div>
    </div>
  `}`}function Hl(){return`${_a("Cuaderno","Progreso","",`
    <div class="segmented">
      <button type="button" data-action="stats-tab" data-tab="pulse" class="${fe==="pulse"?"active":""}">Pulso y metas</button>
      <button type="button" data-action="stats-tab" data-tab="week" class="${fe==="week"?"active":""}">Semana</button>
      <button type="button" data-action="stats-tab" data-tab="month" class="${fe==="month"?"active":""}">Mes</button>
    </div>
  `)}
  <div class="tab-panel-enter">
    ${fe==="week"?fn(!1):fe==="month"?fn(!0):Pl()}
  </div>`}function Pl(){const e=v(),t=D(e,1-tt),a=ge(P,t,e),s=ge(P,D(t,-tt),D(t,-1)),n=Qe(a),o=Qe(s),r=pr(P),i=jn(P,t,e,e),l=Z(h),c=(f,m)=>{if(a.length<3||s.length<3||n.metricCounts[f]<3||o.metricCounts[f]<3||!Number.isFinite(n[f])||!Number.isFinite(o[f]))return"";const p=n[f]-o[f];return`${p>0?"↑":p<0?"↓":"→"} ${A(Math.abs(p))}${m} vs. anterior`};return`
  <div class="ledger-grid">
    ${$e("Registro",`${i.recorded}/${i.days}`,"días",`${i.pct}% de los días anotados`)}
    ${$e("Ánimo medio",n.metricCounts.mood?A(n.mood):"—","/ 5",c("mood",""))}
    ${$e("Sueño habitual",n.metricCounts.sleep?A(n.sleepMedian):"—","h",n.metricCounts.sleep?`media ${A(n.sleep)} h`:"sin datos")}
    ${$e(l.focusLabel,n.metricCounts.study?A(n.study):"—","h",c("study"," h"))}
    ${$e("Racha actual",Tn(P),"días",`${fs(P)} días · mejor racha`)}
    ${$e("Palabras escritas",n.words?A(n.words):"—","",n.words?`${A(Math.round(n.words/n.count))} por día anotado`:"sin texto todavía")}
  </div>
  <p class="analytics-footnote">Solo días registrados.</p>
  ${io(a,h)}
  ${Ni(P,M,e)}
  <section class="card chart-card">
    <div class="section-heading">
      <h2>Ánimo y sueño</h2>
      <div class="segmented">
        <button type="button" data-action="range" data-range="7" class="${tt===7?"active":""}">7 días</button>
        <button type="button" data-action="range" data-range="30" class="${tt===30?"active":""}">30 días</button>
      </div>
    </div>
    ${ji(a,t,tt,h)}
  </section>
  <section class="card">
    <div class="section-heading">
      <h2>Últimos 28 días</h2>
      <span class="field-caption">Ánimo por día</span>
    </div>
    ${Ti(P,e,28)}
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Tendencias detectadas</h2>
      <div style="margin-top:10px">
        ${r.length?r.map(f=>`<p class="trend-item">${d("arrow")}<span>${f}</span></p>`).join(""):'<p class="habit-empty">Todavía no hay tendencias claras: hacen falta unos cuantos días de cada semana para poder compararlas.</p>'}
      </div>
    </section>
    <section class="card">
      <h2>Etiquetas más frecuentes</h2>
      ${Is(a).length?As(Is(a).slice(0,6).map(([f,m])=>({label:f,count:m,total:a.length,color:"var(--red)"}))):'<p class="habit-empty">Sin etiquetas en estos días: al escribir el día puedes marcar las que te representen.</p>'}
    </section>
  </div>`}function fn(e){const t=v(),[a,s]=e?Cn(ie):[xe(S),D(xe(S),6)],n=s>t?t:s,o=a<=n?ge(P,a,n):[],r=Qe(o),i=jn(P,a,s,t),l=e?Ie(ie,1).slice(0,7)>t.slice(0,7):D(xe(S),7)>xe(t),c=Z(h),f=e?z(ie,{month:"long",year:"numeric"}):`${z(xe(S),{day:"numeric",month:"short"})} – ${z(D(xe(S),6),{day:"numeric",month:"short",year:"numeric"})}`;return`
  <div class="section-heading period-heading">
    <div><p class="eyebrow">${e?"Resumen mensual":"Resumen semanal"}</p><h2>${f}</h2></div>
    <div class="period-controls">
      <button class="icon-button ghost" data-action="period-prev" data-monthly="${e?"1":"0"}" aria-label="Período anterior">${d("left")}</button>
      <button class="icon-button ghost" data-action="period-next" data-monthly="${e?"1":"0"}" aria-label="Período siguiente" ${l?"disabled":""}>${d("right")}</button>
    </div>
  </div>
  <div class="ledger-grid">
    ${$e("Registro",`${i.recorded}/${i.days}`,"días",i.days?`${i.pct}% de los días transcurridos`:"sin días transcurridos")}
    ${$e("Ánimo medio",r.metricCounts.mood?A(r.mood):"—","/ 5")}
    ${$e("Sueño habitual",r.metricCounts.sleep?A(r.sleepMedian):"—","h",r.metricCounts.sleep?`media ${A(r.sleep)} h`:"sin datos")}
    ${$e(c.focusLabel,r.metricCounts.study?A(r.study):"—","h")}
  </div>
  <p class="analytics-footnote">Solo días transcurridos.</p>
  <section class="card period-summary">
    <span class="soft-icon">${d("leaf")}</span>
    <div>
      <p>${ur(r,e)}</p>
    </div>
  </section>
  <div class="two-columns">
    <section class="card">
      <h2>Días destacados</h2>
      <div class="highlights" style="grid-template-columns:1fr 1fr">
        ${ea("Mejor día",r.best)}
        ${ea("Más sueño",r.mostSleep,"sleepHours")}
        ${ea("Más dedicación",r.mostStudy,"studyHours")}
        ${ea("Día más difícil",r.worst)}
      </div>
    </section>
    <section class="card">
      <h2>Distribución de estados</h2>
      <div style="margin-top:14px">
        ${As(R.map((m,p)=>({label:`${m.emoji} ${m.label}`,count:r.moods[p],total:r.count,color:m.color})))}
      </div>
    </section>
  </div>`}function Fl(){const e=[["personal","user","Perfil"],["appearance","palette","Apariencia"],["custom","paper","Contenido"],["data","shield","Datos"]],t=e.some(([s])=>s===pe)?pe:"personal",a={personal:Ul,appearance:_l,custom:Il,data:Yl};return`${_a("","Ajustes")}
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
    </div>`}function Te(e,t="Guardado.",{rerender:a=!0}={}){try{h=je(e)}catch(s){return $(s.message||"No se pudo guardar.",!0),!1}return a&&k(),t&&$(t),!0}function zl(e,t){if(!me)return;const a=document.querySelector(`[data-${e}-row="${t}"]`);a&&(a.classList.add("is-fresh"),setTimeout(()=>a.classList.remove("is-fresh"),620))}function va(e,t,a="label"){const s=document.querySelector(`[data-edit="${e}"][data-key="${t}"][data-field="${a}"]`);s&&(s.focus(),s.select&&s.select())}function gn(e=""){const t=de(h);if(t.length>=_e){$(`Con ${_e} partes es más que suficiente.`,!0);return}const a=An.find(o=>o.label===e),s=a?a.label:String(document.querySelector("#new-part-label")?.value||"").trim().slice(0,60);if(!s){$("Escribe un título para la parte.",!0),document.querySelector("#new-part-label")?.focus();return}if(t.some(o=>o.label.toLowerCase()===s.toLowerCase())){$("Esa parte ya está en el diario.",!0);return}const n=En("p");Te({parts:[...t,{key:n,label:s,hint:a?.hint||"",type:a?.type||"text"}]},"Parte añadida."),zl("part",n),va("part",n)}function Bl(){const e=ye(h);if(e.length>=We){$(`No hacen falta más de ${We} contadores.`,!0);return}const t=String(document.querySelector("#new-counter-label")?.value||"").trim().slice(0,28);if(!t){$("El contador necesita un nombre.",!0),document.querySelector("#new-counter-label")?.focus();return}if(e.some(s=>s.label.toLowerCase()===t.toLowerCase())){$("Ya tienes un contador con ese nombre.",!0);return}const a=En("c");Te({counters:[...e,{key:a,label:t,unit:String(document.querySelector("#new-counter-unit")?.value||"").trim().slice(0,14),goal:parseFloat(document.querySelector("#new-counter-goal")?.value)||0,min:0,max:Math.max(20,(parseFloat(document.querySelector("#new-counter-goal")?.value)||0)*3),step:1,icon:"gauge"}]},"Contador añadido."),va("counter",a)}function Rl(e,t,a){if(e==="part"){const n=de(h).find(o=>o.key===t);return n?n[a]:null}const s=ye(h).find(n=>n.key===t);return s?a==="goal"?ka(s,h)||"":s[a]??"":null}function Xa(e,t,a,s){const n=Rl(t,a,s);if(n===null)return;const o=String(n);String(e.value)!==o&&(e.value=o)}function Gl(e){const t=e.dataset.edit,a=e.dataset.key,s=e.dataset.field;if(t==="part"){if(s==="label"&&!String(e.value).trim()){$("Sin título no puede estar: escribe uno o quítala.",!0),Xa(e,"part",a,s);return}const n=de(h).map(o=>o.key===a?{...o,[s]:e.value}:o);if(!Te({parts:n},"",{rerender:!1}))return;Xa(e,"part",a,s),va("part",a,s);return}if(t==="counter"){const n=Number.parseFloat(e.value),r={counters:ye(h).map(i=>{if(i.key!==a)return i;if(s==="goal"){if(i.key==="water")return i;const l=Number.isFinite(n)?Math.max(0,n):0;return{...i,goal:l,max:Math.max(i.max,l,20)}}return{...i,[s]:e.value}})};if(s==="goal"&&a==="water"&&Number.isFinite(n)&&n>0&&(r.waterGoal=Math.min(25,Math.max(1,Math.round(n*10)/10))),!Te(r,"",{rerender:!1}))return;Xa(e,"counter",a,s),va("counter",a,s)}}function Il(){const e=de(h),t=ye(h);return`<div class="custom-grid">
    <section class="card custom-card">
      <div class="section-heading">
        <div><p class="eyebrow">${d("paper")} Partes del diario</p><h2>Qué quieres escribir cada día</h2></div>
        <span class="field-caption">${e.length} de ${_e}</span>
      </div>
      ${e.length?`<ul class="custom-list">
        ${e.map(a=>`<li class="custom-row custom-row--part" data-part-row="${a.key}">
          <input class="custom-input custom-input--label" value="${u(a.label)}" maxlength="60" aria-label="Título de la parte" data-edit="part" data-key="${a.key}" data-field="label">
          <input class="custom-input custom-input--hint" value="${u(a.hint)}" maxlength="140" placeholder="Ayuda" aria-label="Texto de ayuda" data-edit="part" data-key="${a.key}" data-field="hint">
          <div class="micro-seg">${Vo.map(s=>`<button type="button" class="${a.type===s.id?"active":""}" data-action="part-type" data-key="${a.key}" data-val="${s.id}">${s.label}</button>`).join("")}</div>
          <button type="button" class="icon-button ghost custom-remove" data-action="remove-part" data-key="${a.key}" aria-label="Quitar ${u(a.label)}">${d("close")}</button>
        </li>`).join("")}
      </ul>`:'<p class="custom-none">Sin partes propias.</p>'}
      <div class="custom-add">
        <input id="new-part-label" class="custom-input" maxlength="60" placeholder="Título de la parte…" aria-label="Título de la parte nueva">
        <button type="button" class="button outline" data-action="add-part">${d("plus")} Añadir parte</button>
      </div>
      ${e.length<_e?`<div class="custom-presets">
        <span class="custom-presets-label">Sugerencias</span>
        ${An.filter(a=>!e.some(s=>s.label===a.label)).map(a=>`<button type="button" class="custom-preset" data-action="part-preset" data-val="${u(a.label)}">${u(a.label)}</button>`).join("")}
      </div>`:""}
    </section>

    <section class="card custom-card">
      <div class="section-heading">
        <div><p class="eyebrow">${d("gauge")} Contadores</p><h2>Qué cuentas</h2></div>
        <span class="field-caption">${t.length} de ${We}</span>
      </div>
      <ul class="custom-list custom-list--counters">
        <li class="custom-head"><span>Nombre</span><span>Unidad</span><span>Meta</span><span>Icono</span><span></span></li>
        ${t.map(a=>`<li class="custom-row custom-row--counter" data-counter-row="${a.key}">
          <input class="custom-input custom-input--label" value="${u(a.label)}" maxlength="28" aria-label="Nombre del contador" data-edit="counter" data-key="${a.key}" data-field="label">
          <input class="custom-input custom-input--unit" value="${u(a.unit)}" maxlength="14" aria-label="Unidad" data-edit="counter" data-key="${a.key}" data-field="unit">
          <input class="custom-input custom-input--goal" type="number" min="0" max="9999" step="1" value="${ka(a,h)||""}" placeholder="—" aria-label="Meta diaria" data-edit="counter" data-key="${a.key}" data-field="goal">
          <select class="custom-select" aria-label="Icono" data-edit="counter" data-key="${a.key}" data-field="icon">
            ${Mn.map(s=>`<option value="${s}" ${a.icon===s?"selected":""}>${s}</option>`).join("")}
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
  </div>`}function Ul(){const e=Z(h),t=new Set(M.map(s=>s.name.toLowerCase())),a=new Set(h.interests||[]);return`<form id="setup-page-form" class="setup-page-grid" novalidate>
    <p class="form-alert" id="setup-page-alert" role="alert" hidden></p>
    <section class="card">
      <h2>Perfil</h2>
      <div class="setup-name-age-row">
        <div class="setup-field">
          <label for="sp-name">${d("user")} Tu nombre o apodo</label>
          <input id="sp-name" name="name" maxlength="50" placeholder="Tu nombre…" value="${u(h.name)}">
        </div>
        <div class="setup-field">
          <label for="sp-age">Tu edad</label>
          <div class="age-input-wrap">
            <input id="sp-age" name="age" type="number" min="8" max="115" step="1" inputmode="numeric" placeholder="Ej. 20" value="${h.age??""}" aria-describedby="sp-age-hint">
            <span>años</span>
          </div>
          <small class="field-hint" id="sp-age-hint">Opcional · entre 8 y 115 años</small>
        </div>
      </div>

      <div class="setup-field">
        <label>Grupo de edad</label>
        <div class="age-group-grid" id="sp-age-groups">
          ${ut.map(s=>`
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
        <input id="sp-motto" name="motto" maxlength="140" placeholder="Un día a la vez." value="${u(h.motto)}">
      </div>
    </section>

    <section class="card">
      <h2>Intereses y estilo</h2>
      <div class="interests-grid">
        ${_t.map(s=>`
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
            ${pt.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="ritual" value="${s.id}" ${(h.ritual||"night")===s.id?"checked":""}>
                <span class="purpose-icon">${d(s.icon)}</span>
                <div><strong>${u(s.label)}</strong></div>
              </label>
            `).join("")}
          </div>
        </div>
        <div class="setup-field" style="margin-top:0">
          <label>Tono de las frases</label>
          <div class="ritual-stack">
            ${mt.map(s=>`
              <label class="purpose-card compact">
                <input type="radio" name="tone" value="${s.id}" ${(h.tone||"warm")===s.id?"checked":""}>
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
          <p>Sueño ${A(e.sleepRecommended)} h · dedicación ${A(e.studyRecommended)} h.</p>
        </div>
      </div>
      <div class="goals-setup-grid">
        <div class="setup-field">
          <label for="sp-sleep">${d("moon")} Meta de sueño · h</label>
          <input id="sp-sleep" name="sleepGoal" type="number" min="4" max="14" step="any" inputmode="decimal" value="${h.sleepGoal}">
        </div>
        <div class="setup-field">
          <label for="sp-study">${d("study")} Meta de dedicación · h</label>
          <input id="sp-study" name="studyGoal" type="number" min="0" max="16" step="any" inputmode="decimal" value="${h.studyGoal}">
        </div>
      </div>
      <div class="setup-field" style="margin-top:16px">
        <label>Hábitos sugeridos</label>
        <div class="tag-picker" id="sp-suggested-habits">
          ${e.suggestedHabits.map(s=>{const n=t.has(s.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${u(s)}" ${n?"checked":""}><span>${n?"✓ ":"+ "}${u(s)}</span></label>`}).join("")}
        </div>
      </div>
      <div class="setup-field" style="margin-top:18px">
        <label>${d("quote")} Frases guardadas · ${(h.savedQuotes||[]).length}</label>
        ${(h.savedQuotes||[]).length?`
          <div class="saved-quotes-list">
            ${h.savedQuotes.map((s,n)=>`
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
  </form>`}function _l(){return`<form id="appearance-form" class="appearance-page">
    <div class="appearance-settings-grid">
      <section class="card">
        <div class="section-heading">
          <div><p class="eyebrow">${d("palette")} Apariencia</p><h2>Tu tema</h2></div>
        </div>
        <div class="theme-picker-grid">
          ${ne.map(e=>`
            <label class="theme-card">
              <input type="radio" name="theme" value="${e.id}" ${h.theme===e.id?"checked":""}>
              <div class="theme-card-top">
                <span class="theme-favicon-preview">${Fe(e.id,h)}</span>
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
            <input type="checkbox" name="sidebarCollapsed" ${K?"checked":""}>
            <span><strong>Menú compacto</strong><small>Solo iconos en escritorio · Ctrl+B.</small></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="showDailyWord" ${h.showDailyWord!==!1?"checked":""}>
            <span><strong>Palabra del día</strong></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="showDailyTip" ${h.showDailyTip!==!1?"checked":""}>
            <span><strong>Sugerencia diaria</strong></span>
          </label>
          <label class="toggle-row">
            <input type="checkbox" name="reduceMotion" ${h.reduceMotion?"checked":""}>
            <span><strong>Reducir animaciones</strong></span>
          </label>
        </div>
      </section>
    </div>
    <div class="save-area">
      <button type="submit" class="button solid save-button">${d("check")} Guardar apariencia</button>
    </div>
  </form>`}function Wl(){return Qn().map(e=>({date:e,patch:Wa(e)})).filter(e=>!!e.patch).sort((e,t)=>t.date.localeCompare(e.date))}function Ql(e){const t=Yt(e)||{},a=[],s=Object.values(t.habits||{}).filter(Boolean).length;s&&a.push(`${s} ${s===1?"hábito":"hábitos"}`);const n=Object.values(t.counters||{}).filter(o=>Number(o)>0).length;return n&&a.push(`${n} ${n===1?"contador":"contadores"}`),(t.goals||[]).length&&a.push(`${t.goals.length} ${t.goals.length===1?"tarea":"tareas"}`),String(t.tomorrow||"").trim()&&a.push("la lista de mañana"),(String(t.generalDay||"").trim()||String(t.capsule||"").trim())&&a.push("texto escrito"),a.length?`Sin guardar: ${a.join(" · ")}`:"Cambios sin guardar"}function Vl(){const e=Hr().filter(a=>a.data&&Object.keys(a.data).length),t=Wl();return!e.length&&!t.length?"":`${t.length?`<section class="card drafts-card">
    <div class="section-heading">
      <div><p class="eyebrow">${d("stamp")} Sin guardar</p><h2>Días a medias</h2></div>
      <span class="field-caption">${t.length} ${t.length===1?"día":"días"}</span>
    </div>
    <p class="drafts-lead">Tienen cambios apuntados (hábitos, contadores, tareas…) que todavía no están en el cuaderno. Se guardan cuando pulsas «Guardar día».</p>
    <ul class="drafts-list">
      ${t.map(({date:a})=>`<li class="drafts-row" data-pending-day="${a}">
        <div class="drafts-row-info">
          <strong>${u(z(a))}</strong>
          <small>${u(Ql(a))}</small>
        </div>
        <div class="drafts-row-actions">
          <button type="button" class="button outline small" data-action="open-day" data-date="${a}">Terminar el día</button>
          <button type="button" class="icon-button ghost" data-action="discard-day-patch" data-date="${a}" aria-label="Descartar los cambios de ${u(z(a))}">${d("close")}</button>
        </div>
      </li>`).join("")}
    </ul>
  </section>`:""}
  ${e.length?`<section class="card drafts-card">
    <div class="section-heading">
      <div><p class="eyebrow">${d("pen")} Sin terminar</p><h2>Textos a medias</h2></div>
      <span class="field-caption">${e.length} ${e.length===1?"borrador":"borradores"}</span>
    </div>
    <p class="drafts-lead">Se guardan solos mientras escribes, pero el día no entra en el cuaderno hasta que pulsas «Guardar día».</p>
    <ul class="drafts-list">
      ${e.map(a=>{const s=Fr(a.scope),n=s?[s.words?`${s.words} ${s.words===1?"palabra":"palabras"}`:"",s.when].filter(Boolean).join(" · "):"";return`<li class="drafts-row" data-draft-row="${u(a.scope)}">
          <div class="drafts-row-info">
            <strong>${u(Zs(a.scope))}</strong>
            ${n?`<small>${u(n)}</small>`:""}
          </div>
          <div class="drafts-row-actions">
            <button type="button" class="button outline small" data-action="open-draft" data-scope="${u(a.scope)}">Recuperar</button>
            <button type="button" class="icon-button ghost" data-action="discard-draft" data-scope="${u(a.scope)}" aria-label="Descartar ${u(Zs(a.scope))}">${d("close")}</button>
          </div>
        </li>`}).join("")}
    </ul>
  </section>`:""}`}function Zl(e){if(e.startsWith("entrada:")){const t=e.slice(8);if(/^\d{4}-\d{2}-\d{2}$/.test(t)&&t<=v()){Ce(t),$("Ahí tienes lo que escribiste.");return}}if(e==="botella"){C="thoughts",Y="shore",ae(),le=!0,k(),$("Tu botella sigue esperando, lista para soltar.");return}if(e==="perfil"){C="setup",pe="personal",ae(),le=!0,k(),$("Sigue donde lo dejaste.");return}if(e==="asistente"){Ns(1);return}if(e.startsWith("respuesta:")){const t=e.slice(10),a=B.find(s=>s.id===t);if(a&&bs(a,v())){wa(t);return}$("Esa botella todavía no se puede abrir.",!0);return}$("No sé cómo recuperar ese borrador.",!0)}function Yl(){return`${Vl()}
  <div class="two-columns">
    <section class="card">
      <h2>Exportar copia</h2>
      <p style="margin:8px 0 16px;color:var(--ink-soft)">Entradas, hábitos, perfil y lo que tengas a medias en un JSON.</p>
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
  </section>`}function Gt(e,t){if(e>v())throw new Error("Ese día todavía no ha llegado.");const a=Qr(e,t);if(!a||!a.ok)throw new ga("Los cambios del día",{key:Ve,reason:a?.reason||"unknown"});return a.patch}function Xt(e=S){return P.find(t=>t.date===e)||null}function he(e=S){return Yn(e,Xt(e),Yt(e))}function St(){const e=new Map(P.map(t=>[t.date,t]));for(const t of Qn()){const a=Yn(t,e.get(t)||null,Yt(t));a&&e.set(t,a)}return[...e.values()].sort((t,a)=>t.date.localeCompare(a.date))}function ds(e=he()){const t=Z(h);return{sleepHours:e?.sleepHours??h.sleepGoal??t.sleepRecommended??7.5,studyHours:e?.studyHours??0}}function Wa(e=S){const t=Yt(e);return Wr(Xt(e),t)?null:t}function Jl(e=S){return!!(qe(G.entry(e))||Wa(e))}function ko(){return[...document.querySelectorAll("#routine-goals .task-input")].map(e=>e.value.trim())}function Le(){const e=document.querySelector("#routine-tomorrow");if(!e)return;const t=e.value.trim(),a=ko().filter(Boolean),s=he(S)||{};if(!((s.tomorrow||"")===t&&(s.goals||[]).join("\0")===a.join("\0")))try{Gt(S,{tomorrow:t,goals:a})}catch(n){$(n.message||"No se pudo guardar la lista.",!0)}}function Kl(){document.querySelectorAll("#routine-body [data-counter-input]").forEach(t=>{const a=t.dataset.counterInput,s=()=>{clearTimeout(He),us(t,a,parseFloat(t.value)||0),$a()};t.addEventListener("input",()=>{us(t,a,parseFloat(t.value)||0),clearTimeout(He),He=setTimeout($a,500)}),t.addEventListener("change",s),t.addEventListener("blur",s),t.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),s()),n.key==="Escape"&&k()})});const e=document.querySelector("#routine-tomorrow");e&&(e.addEventListener("change",Le),e.addEventListener("input",()=>Xe("manana",Le,500)),document.querySelectorAll("#routine-goals .task-input").forEach(t=>{t.addEventListener("change",Le),t.addEventListener("input",()=>Xe("manana-tarea",Le,600)),t.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),Le(),k()),a.key==="Escape"&&k()})}))}let He=null;function xo(e,t){const a=Number(t),s=Number.isFinite(a)?a:0,n=Number.isFinite(e?.min)?e.min:0,o=Number.isFinite(e?.max)?e.max:99999;return Math.min(o,Math.max(n,Math.round(s*10)/10))}function us(e,t,a){const s=e.closest(".counter-row"),n=ye(h).find(i=>i.key===t)||{key:t},o=document.querySelector(`#hint-${t}`);o&&(o.textContent=Ma(t,a,n)),e.classList.remove("num-bump"),e.offsetWidth,e.classList.add("num-bump");const r=ka(n,h);if(r){const i=s?.querySelector(".counter-goal-pill"),l=s?.querySelector(".counter-progress i");i&&(i.textContent=`Meta: ${a}/${r}`,i.classList.toggle("met",a>=r)),l&&(l.style.width=`${Math.min(100,Math.round(a/r*100))}%`)}}function $a(){const t=(he(S)||{}).counters||{},a={...t};for(const n of ye(h)){const o=document.querySelector(`[name="counter_${n.key}"]`);(o||n.key in a)&&(a[n.key]=o?xo(n,o.value):Number(t[n.key])||0)}if(!Object.keys(a).every(n=>Number(a[n])===Number(t[n]||0)))try{Gt(S,{counters:a})}catch(n){$(n.message||"No se pudo guardar el contador.",!0)}}function bn(e,t){const a=String(t||"").trim().slice(0,40),s=M.find(o=>o.id===e);if(!s)return;if(!a){$("El hábito necesita un nombre.",!0);return}if(a.toLowerCase()!==s.name.toLowerCase()&&M.some(o=>o.name.toLowerCase()===a.toLowerCase())){$("Ya tienes un hábito con ese nombre.",!0);return}a===s.name||!J("el hábito",()=>{M=ba({...s,name:a})}).ok||(k(),$("Hábito renombrado"))}function Xl(e){if(!me)return;const t=document.querySelector(`.habit-toggle[data-habit="${e}"]`);t&&(t.classList.add("is-flashed"),setTimeout(()=>t.classList.remove("is-flashed"),700));const a=document.querySelector(`.momentum-cell[data-habit="${e}"]`);a&&(a.classList.add("is-flashed"),setTimeout(()=>a.classList.remove("is-flashed"),700))}function Mo(){const e=qa(B).some(t=>t.seen!==!0);document.querySelectorAll(".nav-dot").forEach(t=>{t.hidden=!e,t.classList.toggle("is-new",e)}),document.querySelectorAll('.tabbar-item[data-view="thoughts"]').forEach(t=>{t.classList.toggle("has-new",e)})}function wa(e){const t=B.find(r=>r.id===e);if(!bs(t,v()))return;t.status==="returned"&&t.seen!==!0&&(J("el pensamiento",()=>{B=st(e,{seen:!0})}),Mo());const a=t.reply?"":qe(G.reply(e))?.text||"",s=kt(_i({...t,replyDraft:a},v(),h));ac(s);const n=()=>{s.close(),k()},o=r=>J("el pensamiento",r);s.onclick=r=>{const i=r.target.closest("[data-modal]")?.dataset.modal;if(!i){r.target===s&&s.close();return}if(i==="close"){n();return}if(i==="reply"){const l=(s.querySelector("#bottle-reply")?.value||"").trim();if(!l){$("Escribe primero lo que quieres contestarte.",!0);return}if(It(`respuesta:${e}`),!o(()=>{B=st(e,{reply:l,seen:!0,repliedAt:new Date().toISOString()})}).ok)return;re(G.reply(e)),s.close(),k(),wa(e),$("Contestada.");return}if(i==="reply-clear"){if(It(`respuesta:${e}`),re(G.reply(e)),!o(()=>{B=st(e,{reply:""})}).ok)return;s.close(),k(),wa(e);return}if(i==="keep"){const l=!t.kept;if(!o(()=>{B=st(e,{kept:l,keptOn:l?v():null,seen:!0})}).ok)return;n(),$(l?"Anclada.":"Desanclada.");return}if(i==="to-entry"){try{ec(t)&&$("Añadido a la entrada de hoy. Pulsa «Guardar día» para conservarlo."),n()}catch(l){$(l.message||"No se pudo copiar.",!0)}return}if(i==="recast"){if(!o(()=>{B=ao(e)}).ok)return;n(),$("Otra vez fuera.");return}}}function ec(e){const t=v(),a=he(t),s=qe(G.entry(t))||{},n=typeof s.generalDay=="string"&&s.generalDay.trim()?s.generalDay:a?.generalDay||"",o=`Del mar · botella del ${z(e.castAt,{day:"numeric",month:"long"})}: «${e.text}»`,r=[n,o].filter(Boolean).join(`

`);return Gt(t,{generalDay:r,capsule:a?.capsule||s.capsule||String(e.text).slice(0,240),tags:[...new Set([...a?.tags||[],...s.tags||[],"Pensamiento"])].slice(0,20)}),J("el pensamiento",()=>{B=st(e.id,{kept:!0,keptOn:t,seen:!0})}).ok?(S=t,C="diary",ae(),!0):!1}function tc(e,t){const a=document.querySelector(".thought-vault"),s=a?.getBoundingClientRect(),n=a?.querySelector(".vault-water")?.getBoundingClientRect(),o=t?.querySelector('button[type="submit"]')?.getBoundingClientRect(),r=zi(e),i=s?.width||window.innerWidth,l=s?.left||0,c=o?o.left+o.width/2:window.innerWidth*.18,f=o?o.top+o.height/2:window.innerHeight*.72,m=l+i*r.x/100,p=n?n.top+n.height*r.depth/100:window.innerHeight*.52,y=m-c,b=p-f,x=y*.52,N=b*.52-Math.min(150,window.innerHeight*.2);if(!me)return;if((document.querySelector("#ocean-fx")||document.body)===document.body){const _=document.createElement("div");_.id="ocean-fx",_.setAttribute("aria-hidden","true"),document.body.appendChild(_)}const j=document.querySelector("#ocean-fx"),q=document.createElement("div");q.className="splash-wrap",q.innerHTML=Wi(e);for(const[_,O]of Object.entries({"--from-x":c,"--from-y":f,"--to-x":m,"--to-y":p,"--flight-x":y,"--flight-y":b,"--mid-x":x,"--mid-y":N}))q.style.setProperty(_,`${Math.round(O)}px`);j.appendChild(q),document.documentElement.classList.add("is-casting"),clearTimeout(cn),cn=setTimeout(()=>document.documentElement.classList.remove("is-casting"),1400),setTimeout(()=>q.remove(),1800)}function ac(e){const t=e.querySelector(".bottle-modal");!t||!me||(t.classList.add("is-uncorking"),setTimeout(()=>t.classList.remove("is-uncorking"),1100))}function sc(e){const t=new FormData(e),a=(t.get("text")||"").toString().trim();if(a.length<2){$("Escribe algo antes de lanzar la botella.",!0);return}const s=t.get("mood"),n="breeze";try{const o=crypto.randomUUID(),r=Math.max(1,Math.min(5,Math.round(Number(t.get("force"))||3)));B=li({id:o,text:a,mood:s?+s:null,sea:n,force:r,castAt:v()});const i=B.find(c=>c.id===o);It("botella"),re(G.bottle()),ft={text:"",mood:null,sea:n,force:3},Y="sea",Oe=!0,ae(),tc(i||{},e);const l=e.querySelector('button[type="submit"]');l&&(l.disabled=!0,l.classList.add("is-launching"),l.innerHTML=`${d("send")} Lanzando…`),X("saved"),setTimeout(()=>k(),me?1120:0),$("Botella lanzada al mar.")}catch(o){$(o.message||"No se pudo lanzar la botella.",!0)}}function nc(){const e=document.querySelector("#thoughts-bottles-drawer");e?.addEventListener("toggle",()=>{Oe=e.open});const t=document.querySelector("#bottle-form");if(!t)return;const a=t.querySelector("#bottle-text"),s=t.querySelector("#bottle-force"),n=t.querySelector("#bottle-force-value"),o=()=>{const l=t.querySelector('[name="mood"]:checked');ft={text:a?.value||"",mood:l?+l.value:null,sea:"breeze",force:Number(s?.value)||3}},r=t.querySelector('button[type="submit"]'),i=()=>{r&&(r.disabled=!(a?.value||"").trim())};o(),i(),a?.addEventListener("input",()=>{o(),i()}),s?.addEventListener("input",()=>{o(),n&&(n.value=s.value)}),t.addEventListener("change",()=>{o(),i()}),document.activeElement===a&&a.value&&a.setSelectionRange(a.value.length,a.value.length),t.addEventListener("submit",l=>{l.preventDefault(),sc(t)})}function oc(e){B.find(a=>a.id===e)&&Sa({title:"¿Romper esta botella?",text:"El pensamiento se borrará de este navegador. No se puede deshacer.",confirmLabel:"Romperla",danger:!0}).then(a=>{!a||!J("el pensamiento",()=>{B=ci(e)}).ok||(k(),$("Rota."))})}const rc=["generalDay","bestOfDay","differentToday","capsule","wordOfDay","tomorrow","gratitude0","gratitude1","gratitude2","tagCustom"];function Qa(){return[...rc,...de(h).map(e=>`part_${e.key}`)]}const be=new Map;function It(e){const t=be.get(e);t&&(clearTimeout(t),be.delete(e))}function Xe(e,t,a=460){clearTimeout(be.get(e)),be.set(e,setTimeout(()=>{be.delete(e),t()},a))}function ps(e,t){be.has(e)&&(clearTimeout(be.get(e)),be.delete(e),t())}function sa(e,t){const a=be.get(e);a&&(clearTimeout(a),be.delete(e)),t()}function Ds(){return go||S}function Ao(e){const t={};if(!e)return t;for(const r of Qa()){const i=e.querySelector(`[name="${r}"]`);i&&typeof i.value=="string"&&(t[r]=i.value)}for(const r of["mood","energy","stress"]){const i=e.querySelector(`[name="${r}"]:checked`);i&&(t[r]=Number(i.value))}for(const r of["sleepHours","studyHours"]){const i=e.querySelector(`[name="${r}"]`);i&&i.value!==""&&(t[r]=Number(i.value))}const a=[...e.querySelectorAll('[name="tags"]:checked')].map(r=>r.value);a.length&&(t.tags=a);const s={};for(const r of e.querySelectorAll('[name^="counter_"]'))s[r.name.slice(8)]=Number(r.value)||0;Object.keys(s).length&&(t.counters=s);const n={};for(const r of e.querySelectorAll('[name^="habit_"]'))n[r.name.slice(6)]=r.checked;Object.keys(n).length&&(t.habits=n);const o=[...e.querySelectorAll('[name="goal"]')].map(r=>r.value).filter(r=>r.trim());return o.length&&(t.goals=o),t}function ic(e,t,a){const s=r=>r.startsWith("gratitude")?(t?.gratitude||[])[+r.slice(9)]||"":r.startsWith("part_")?(t?.parts||{})[r.slice(5)]||"":r==="tagCustom"?"":t?.[r]??"";for(const r of Qa())if(!(!(r in e)||r==="tagCustom")&&String(e[r]??"").trim()!==String(s(r)).trim())return!1;for(const r of["mood","energy","stress"]){if(e[r]===void 0)continue;const i=t?.[r];if(i==null||Number(e[r])!==Number(i))return!1}for(const r of["sleepHours","studyHours"]){if(e[r]===void 0||e[r]===null)continue;const i=t?.[r],l=i??a[r];if(Number(e[r])!==Number(l))return!1}const n=(e.tags||[]).slice().sort().join("|");if(n&&n!==(t?.tags||[]).slice().sort().join("|"))return!1;const o=(e.goals||[]).join("|");return!(o&&o!==(t?.goals||[]).join("|"))}function qo(e,t={}){return!!(Qa().some(a=>String(e[a]??"").trim())||["mood","energy","stress"].some(a=>e[a]!==void 0&&e[a]!==null)||Object.values(e.counters||{}).some(a=>Number(a)>0)||Object.values(e.habits||{}).some(Boolean)||(e.tags||[]).length||(e.goals||[]).length||["sleepHours","studyHours"].some(a=>e[a]!==void 0&&e[a]!==null&&Number(e[a])!==Number(t?.[a])))}function Eo(){const e=document.querySelector("#diary-form");if(!e)return;const t=Ds(),a=Ao(e),s=he(t);if(ic(a,s,ds(s))){re(G.entry(t))&&fo!=="error"&&X("saved"),ct();return}const n=G.entry(t);if(!!!qe(n)&&!qo(a,ds(s))){ct();return}const r=Ea(n,a);r&&!r.ok?X("error"):r&&X("draft"),ct()}function Lo(){const e=document.querySelector("#bottle-form");if(!e)return;const t=Ea(G.bottle(),{text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze",force:Number(e.querySelector("#bottle-force")?.value)||3});t&&!t.ok&&X("error")}function Co(e,t){!t||!document.contains(t)||Ea(G.reply(e),{text:t.value||""})}function yn(){X("typing"),Xe("entrada",Eo,420),ct()}function vn(){const e=document.querySelector("#bottle-form");if(!e)return;ft={text:e.querySelector("#bottle-text")?.value||"",mood:+(e.querySelector('[name="mood"]:checked')?.value||0)||null,sea:e.querySelector('[name="sea"]:checked')?.value||"breeze",force:Number(e.querySelector("#bottle-force")?.value)||3},X("typing"),Xe("botella",Lo,380)}const lc='textarea,input[type="text"],input[type="number"],input:not([type])',Do=/^[A-Za-z0-9_-]{1,40}$/;function jo(e,t){if(!e)return null;const a={};for(const o of e.querySelectorAll(lc))!o.name||!Do.test(o.name)||(a[o.name]=o.value);const s=e.querySelector("#new-custom-quote");s?.value&&(a.customQuote=s.value);const n=Ea(t,a);return n&&!n.ok&&X("error"),n}function To(e,t){if(!e||!t)return!1;let a=!1;for(const[s,n]of Object.entries(t)){if(s==="customQuote"||!Do.test(s))continue;const o=e.querySelector(`[name="${s}"]`);!o||o.type==="checkbox"||o.type==="radio"||String(o.value)!==String(n)&&(o.value=n,a=!0)}if(t.customQuote){const s=e.querySelector("#new-custom-quote");s&&!s.value&&(s.value=t.customQuote,a=!0)}return a}function No(e){const t=(s,n)=>String(s??"").trim()===String(n??"").trim();if(!t(e.name,h.name)||!t(e.motto??"Un día a la vez.",h.motto))return!1;const a=e.age===""||e.age===null||e.age===void 0?null:Number(e.age);if(a!==null&&a!==Number(h.age))return!1;for(const s of["sleepGoal","studyGoal","waterGoal"]){const n=e[s];if(!(n===""||n===null||n===void 0)&&Number(n)!==Number(h[s]))return!1}return!0}function Oo(){const e=document.querySelector("#setup-page-form");return e?!e.querySelector("#new-custom-quote")?.value.trim()&&No(Ts(e))?(re(G.setup()),null):jo(e,G.setup()):null}function Ho(){const e=document.querySelector("#setup-wizard-form");return e?No(Ts(e))?(re(G.wizard()),null):jo(e,G.wizard()):null}function cc(){if(document.querySelector("#setup-page-form")){Xe("perfil",Oo,700);return}document.querySelector("#setup-wizard-form")&&Xe("asistente",Ho,700)}function dc(){F.addEventListener("input",e=>{const t=e.target;if(!(!t||!t.closest)){if(t.closest("#diary-form")){yn();return}if(t.closest("#bottle-form")){vn();return}if(t.closest("#setup-page-form")||t.closest("#setup-wizard-form")){cc();return}if(t.id==="bottle-reply"&&t.closest("#modal")){const a=t.closest("[data-modal-bottle]")?.dataset.modalBottle;a&&Xe(`respuesta:${a}`,()=>Co(a,t),360)}}}),F.addEventListener("change",e=>{const t=e.target;if(!(!t||!t.closest)){if(t.dataset?.edit){Gl(t);return}t.closest("#diary-form")&&yn(),t.closest("#bottle-form")&&vn()}}),F.addEventListener("focusout",e=>{const t=e.target;if(!t||!t.closest)return;const a=t.closest("#diary-form");if(!a)return;const s=e.relatedTarget;s&&a.contains(s)||Va()}),window.addEventListener("pagehide",gt),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?gt():dt()}),window.addEventListener("focus",dt),window.addEventListener("online",dt)}function uc(){for(const[e]of[...be.entries()]){if(!e.startsWith("respuesta:"))continue;const t=e.slice(10),a=document.querySelector(`[data-modal-bottle="${t}"] #bottle-reply`);ps(e,()=>Co(t,a))}}function gt(){sa("entrada",Eo),sa("botella",Lo),sa("perfil",Oo),sa("asistente",Ho),ps("manana",Le),ps("manana-tarea",Le),uc(),dt()}function dt(){if(!Zt())return!1;const e=Un();return Be(),e.recovered&&!vs()&&$("Guardado lo que quedaba pendiente."),e.ok}function pc(){hc(),mc()}function mc(){const e=document.querySelector("#setup-page-form");if(!e||!_n(G.setup(),h.updatedAt))return!1;const t=qe(G.setup());return!t||!To(e,t)?!1:(X("draft"),un||(un=!0,$("He recuperado lo que estabas escribiendo en el perfil.")),!0)}function $n(e,t,a){if(a==null)return;const s=e.querySelector(`[name="${t}"]`);if(s){if(s.type==="radio"){const n=e.querySelector(`[name="${t}"][value="${a}"]`);n&&(n.checked=!0);return}s.value=Array.isArray(a)?a.join(`
`):a}}function hc(){const e=document.querySelector("#diary-form");if(!e)return;const t=Ds();if(t!==S)return;const a=Xt(t);if(!_n(G.entry(t),a?.updatedAt))return;const s=qe(G.entry(t));if(s){for(const n of Qa())$n(e,n,s[n]);for(const n of["mood","energy","stress","sleepHours","studyHours"])s[n]!==void 0&&$n(e,n,s[n]);if(Array.isArray(s.tags)&&e.querySelectorAll('[name="tags"]').forEach(n=>{n.checked=s.tags.includes(n.value)}),s.counters)for(const[n,o]of Object.entries(s.counters)){const r=e.querySelector(`[name="counter_${n}"]`);r&&(r.value=o)}if(s.habits)for(const[n,o]of Object.entries(s.habits)){const r=e.querySelector(`[name="habit_${n}"]`);r&&(r.checked=!!o)}Array.isArray(s.goals)&&[...e.querySelectorAll('[name="goal"]')].forEach((o,r)=>{s.goals[r]!==void 0&&(o.value=s.goals[r])}),e.dispatchEvent(new Event("input",{bubbles:!0})),X("draft"),ct()}}function fc(){if(ft.text)return;const e=qe(G.bottle());e&&(ft={text:String(e.text||""),mood:e.mood||null,sea:e.sea||"breeze",force:Number(e.force)||3})}function gc(){const e=document.querySelector("#diary-form");if(!e||Ke)return!1;const t=Ds(),a=Ao(e),s=he(t);if(!qo(a,ds(s))&&!Wa(t))return $("Todavía no hay nada que guardar en este día.",!0),!1;It("entrada");try{const n=yc(js(e,t));P=ei(n),re(G.entry(t)),ks(t),X("saved"),k(),Mc(),$("Día guardado"),document.querySelector(".daily-summary")?.classList.add("reveal");const o=Ms(n);return o.triggered&&o.level==="high"&&setTimeout(()=>Bo("help"),550),!0}catch(n){return X("error"),$(n.message||"No se ha podido guardar.",!0),Be(),!1}}function X(e){fo=e}function bc(e){const t=String(e||"").trim();return t?t.split(/\s+/).length:0}function js(e,t=S){const a=new FormData(e),s=he(t)||{},n=Z(h),o=(a.get("tagCustom")||"").toString().trim(),r=[...new Set([...a.getAll("tags").map(O=>O.toString().trim()),o].filter(Boolean))],i={...s.counters||{}};for(const O of ye(h)){const g=e.querySelector(`[name="counter_${O.key}"]`);g&&(i[O.key]=xo(O,g.value))}const l={...s.parts||{}};for(const O of de(h)){const g=e.querySelector(`[name="part_${O.key}"]`);if(!g)continue;const w=g.value.trim();w?l[O.key]=w:delete l[O.key]}const c={},f=[...e.querySelectorAll('[name^="habit_"]')];for(const O of M)c[O.id]=f.length?!!e.querySelector(`[name="habit_${O.id}"]`)?.checked:!!s.habits?.[O.id];const m=+a.get("mood")||s.mood||3,p=a.get("sleepHours"),y=p!==null&&p!==""?parseFloat(p):s.sleepHours??h.sleepGoal??n.sleepRecommended??7.5,b=a.get("studyHours"),x=b!==null&&b!==""?parseFloat(b):s.studyHours??0,N=(a.get("bestOfDay")||"").toString().trim(),T=(a.get("differentToday")||"").toString().trim(),j=(a.get("capsule")||"").toString().trim(),q=(a.get("wordOfDay")||"").toString().trim(),_=(a.get("generalDay")||"").toString().trim();return{id:s.id,date:t,mood:m,sleepHours:y,studyHours:x,energy:a.get("energy")?+a.get("energy"):s.energy??null,stress:a.get("stress")?+a.get("stress"):s.stress??null,bestOfDay:N,differentToday:T,generalDay:_,wordOfDay:q,capsule:j,gratitude:[0,1,2].map(O=>{const g=a.get(`gratitude${O}`);return g==null?(s.gratitude||[])[O]||"":g.toString().trim()}),tomorrow:a.has("tomorrow")?(a.get("tomorrow")||"").toString().trim():s.tomorrow||"",goals:e.querySelector('[name="goal"]')?a.getAll("goal").map(O=>O.toString().trim()).filter(Boolean):s.goals||[],tags:r,counters:i,parts:l,habits:c,createdAt:s.createdAt}}function yc(e){for(const[t,a]of[["sleepHours","horas de sueño"],["studyHours","horas de dedicación"]]){const s=e[t];if(!Number.isFinite(s)||s<0||s>24)throw new Error(`Escribe unas ${a} válidas, entre 0 y 24.`)}return e}function wn(e){if(!e)return;const t=js(e),a=document.querySelector("#hero-words-chip");if(a){const i=Qt(t),l=i?`${i} ${i===1?"palabra":"palabras"} escritas`:"todavía sin escribir";a.textContent!==l&&(a.textContent=l),a.classList.toggle("pending",!i)}const s=Ms(t),n=s.triggered&&s.level==="high"&&!Ia,o=n?`high:${(s.reasons||[]).length}`:"none",r=document.querySelector("#crisis-alert-slot");r&&r.dataset.sig!==o&&(r.dataset.sig=o,r.innerHTML=n?co(s,h):"")}function Po(e,t){if(!e)return;const a=e.querySelector('[name="age"]'),s=()=>{const n=new FormData(e),o=n.get("age"),r=o?Pa(o,n.get("ageGroup")||"young"):n.get("ageGroup")||"young",i=n.getAll("interests").map(String);e.querySelectorAll("[data-age-group-card]").forEach(y=>{const b=y.dataset.ageGroupCard===r;y.classList.toggle("is-selected",b);const x=y.querySelector('input[type="radio"]');x&&o&&(x.checked=b)});const l=Z({age:o||null,ageGroup:r,interests:i}),c=e.querySelector('[name="sleepGoal"]'),f=e.querySelector('[name="studyGoal"]');c&&o&&(c.value=l.sleepRecommended),f&&o&&(f.value=l.studyRecommended);const m=e.querySelector(`#${t}-adaptation-callout`);m&&(m.innerHTML=`
        ${d("compass")}
        <div>
          <strong>${u(l.group.title)} · ${u(l.group.label)}</strong>
          <p>Sueño ${A(l.sleepRecommended)} h · dedicación ${A(l.studyRecommended)} h.</p>
        </div>`);const p=e.querySelector(`#${t}-suggested-habits`);if(p){const y=new Set(M.map(b=>b.name.toLowerCase()));p.innerHTML=l.suggestedHabits.map(b=>{const x=y.has(b.toLowerCase());return`<label class="tag-chip"><input type="checkbox" name="suggestedHabits" value="${u(b)}" ${x?"checked":""}><span>${x?"✓ ":"+ "}${u(b)}</span></label>`}).join("")}};a&&a.addEventListener("input",s),e.querySelectorAll('[name="ageGroup"], [name="interests"]').forEach(n=>{n.addEventListener("change",s)})}function J(e,t){try{return{ok:!0,value:t()}}catch(a){return X("error"),$(a?.message||`No se ha podido guardar ${e}.`,!0),Be(),{ok:!1,error:a}}}function vc(e,t){const a=document.querySelector(e);a&&(a.hidden=!1,a.textContent=t)}function $c(){const e=document.querySelector("#setup-page-form");e&&(Po(e,"sp"),e.addEventListener("submit",s=>{s.preventDefault();const n=zo(e);if(!n.ok){vc("#setup-page-alert",n.error?.message||"No se ha podido guardar el perfil."),$(n.error?.message||"No se ha podido guardar el perfil.",!0);return}re(G.setup()),k(),$(n.notes.length?`Perfil guardado. ${n.notes.join(" ")}`:"Perfil actualizado")}));const t=document.querySelector("#appearance-form");t&&(t.addEventListener("change",s=>{s.target.name==="theme"&&ze(s.target.value,{...h,theme:s.target.value})}),t.addEventListener("submit",s=>{s.preventDefault(),wc(t)}));const a=document.querySelector("#diary-form");a&&(a.addEventListener("submit",s=>{s.preventDefault(),!Ke&&gc()}),a.addEventListener("input",s=>{const n=s.target;if(n.name==="mood"){const r=R[+n.value-1];a.style.setProperty("--active-mood",r.color)}if(n.name==="sleepHours"||n.name==="studyHours"){const r=parseFloat(n.value);a.querySelectorAll(`[data-action="quick-number"][data-target="${n.name}"]`).forEach(i=>{i.classList.toggle("active",parseFloat(i.dataset.val)===r)})}if(n.name==="energy"){const r=document.querySelector("#energy-hint");r&&(r.textContent=kn[+n.value]+".")}if(n.name==="stress"){const r=document.querySelector("#stress-hint");r&&(r.textContent=xn[+n.value]+".")}if(n.name?.startsWith("counter_")){const r=n.name.slice(8),i=parseFloat(n.value)||0,l=document.querySelector(`#hint-${r}`);if(l&&(l.textContent=Ma(r,i)),r==="water"){const c=h.waterGoal||8,f=n.closest(".counter-row"),m=f?.querySelector(".counter-goal-pill"),p=f?.querySelector(".counter-progress i");m&&(m.textContent=`Meta: ${i}/${c}`,m.classList.toggle("met",i>=c)),p&&(p.style.width=`${Math.min(100,Math.round(i/c*100))}%`)}}const o=n.closest(".writing-field");if(o){const r=o.querySelector(".word-count");r&&(r.textContent=`${bc(n.value)} palabras`)}wn(a)}),a.addEventListener("keydown",s=>{if(s.target.id==="tagCustom"&&s.key==="Enter"){s.preventDefault();const n=s.target.value.trim();if(n){const o=a.querySelector(".tag-picker .tag-chip.ghost");o&&o.insertAdjacentHTML("beforebegin",`<label class="tag-chip"><input type="checkbox" name="tags" value="${u(n)}" checked><span>${u(n)}</span></label>`),s.target.value="",wn(a)}}}),xc())}function wc(e){h=je({theme:e.querySelector('[name="theme"]:checked')?.value||h.theme,sidebarCollapsed:!!e.querySelector('[name="sidebarCollapsed"]')?.checked,showDailyWord:!!e.querySelector('[name="showDailyWord"]')?.checked,showDailyTip:!!e.querySelector('[name="showDailyTip"]')?.checked,reduceMotion:!!e.querySelector('[name="reduceMotion"]')?.checked}),K=!!h.sidebarCollapsed,it(),ze(h.theme,h),k(),$("Apariencia actualizada")}function Fo(e){return new Set([...e?.querySelectorAll("[name]")||[]].map(t=>t.name))}function Ts(e){return oo(new FormData(e),Fo(e))}function Sc(e){const t=Je({...h,...e,updatedAt:new Date().toISOString()});try{return h=je(e),{ok:!0}}catch(a){return h=t,{ok:!1,error:a}}}const kc=30;function zo(e){if(!e)return{ok:!1,setup:h,notes:[],error:new Error("No encuentro el formulario del perfil.")};const a=new FormData(e).getAll("suggestedHabits").map(c=>c.toString().trim()).filter(Boolean),s=new Set(M.map(c=>c.name.toLowerCase())),n=[];try{for(const c of a)!s.has(c.toLowerCase())&&M.length<kc&&(M=ba({name:c}),s.add(c.toLowerCase()))}catch{n.push("Los hábitos sugeridos no se han podido añadir.")}const o=Ts(e),{patch:r,notes:i}=fi(o,h);n.push(...i);const l=Sc(r);return K=!!h.sidebarCollapsed,it(),ze(h.theme,h),{ok:l.ok,setup:h,notes:n,error:l.error}}function xc(){const e=document.querySelector("#diary-form");if(e)for(const t of ye(h)){const a=e.querySelector(`[name="counter_${t.key}"]`),s=document.querySelector(`#hint-${t.key}`);a&&s&&a.value!==""&&(s.textContent=Ma(t.key,parseFloat(a.value)||0,t))}}function es(e=""){const t=document.querySelector("#inspiration-slot");if(!t)return;const a=document.querySelector("#diary-form"),s=a?js(a):he(S);if(t.innerHTML=uo(S,qs,Es,h,s,s?.wordOfDay||""),e){const n=t.querySelector(e);n&&(n.classList.remove("card-flip-in"),n.offsetWidth,n.classList.add("card-flip-in"))}}function Sn(){const e=document.querySelector("#quote-slot");if(!e)return;e.innerHTML=lo(S,Ls,h);const t=e.querySelector(".quote-card");t&&(t.classList.remove("card-flip-in"),t.offsetWidth,t.classList.add("card-flip-in"))}function Mc(){const e=document.querySelector("#stamp");if(!e)return;const t=h.name?`Cuaderno de ${u(h.name)}`:"Guardado";e.innerHTML=`<div class="stamp-face">${t}<small>${z(S)}</small></div>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function $(e,t=!1){const a=document.querySelector("#toast");a&&(a.innerHTML=`<div class="${t?"error":""}">${d(t?"close":"check")}<span>${u(e)}</span></div>`,a.classList.add("show"),setTimeout(()=>a.classList.remove("show"),3e3))}function ma(){ua&&(clearInterval(ua),ua=null)}function kt(e){ma();const t=document.querySelector("#modal");return t.innerHTML=e,t.open||t.showModal(),t}function Bo(e="help"){const t=kt(Oi(h,e));let a=!1;const s=()=>{ma(),t.close()};t.onclick=n=>{if(n.target.closest('[data-modal="close"]')||n.target===t){s();return}const r=n.target.closest("[data-crisis-tab]");if(r){const l=r.dataset.crisisTab;t.querySelectorAll(".crisis-tab").forEach(c=>c.classList.toggle("active",c.dataset.crisisTab===l)),t.querySelectorAll(".crisis-tab-panel").forEach(c=>c.classList.toggle("active",c.dataset.panel===l)),l!=="breathe"&&ma();return}const i=n.target.closest('[data-action="toggle-breathing"]');if(i){const l=t.querySelector("#breathing-visual"),c=t.querySelector("#breathing-phase"),f=t.querySelector("#breathing-timer"),m=t.querySelector("#breathing-guide");if(a)a=!1,ma(),l?.classList.remove("inhale","hold","exhale"),c&&(c.textContent="En pausa"),f&&(f.textContent="4 — 4 — 6"),i.innerHTML=`${d("wind")} Seguir respirando`;else{a=!0,i.innerHTML=`${d("close")} Pausar`;let p=0;const y=()=>{const b=p%14;l?.classList.remove("inhale","hold","exhale"),b<4?(l?.classList.add("inhale"),c&&(c.textContent="Toma aire..."),f&&(f.textContent=`${4-b} s`),m&&(m.textContent="Inhala despacio por la nariz.")):b<8?(l?.classList.add("hold"),c&&(c.textContent="Mantén..."),f&&(f.textContent=`${8-b} s`),m&&(m.textContent="Sostén el aire sin tensar los hombros.")):(l?.classList.add("exhale"),c&&(c.textContent="Suelta..."),f&&(f.textContent=`${14-b} s`),m&&(m.textContent="Deja salir el aire poco a poco.")),p++};y(),ua=setInterval(y,1e3)}}}}function Ns(e=1,{mandatory:t=!1}={}){let a=e;const s=kt(Hi(h,M,a,t));rt=t,s.oncancel=t?p=>p.preventDefault():null,s.onclose=()=>{t&&!h.completed&&(rt=!1,queueMicrotask(()=>k()))};const n=s.querySelector("#setup-wizard-form");Po(n,"wiz");const o=s.querySelector("#setup-wizard-alert"),r=(p,{escape:y=!1}={})=>{o&&(o.hidden=!1,o.className="form-alert is-visible",o.innerHTML=`<span>${u(p)}</span>${y?'<button type="button" class="text-button" data-wizard="skip">Seguir sin guardar</button>':""}`,o.scrollIntoView?.({block:"nearest"}))},i=()=>{o&&(o.hidden=!0,o.innerHTML="")},l=qe(G.wizard());l&&To(n,l)&&r("He recuperado lo que habías empezado.");const c=p=>{const y=oo(new FormData(n),Fo(n)),b=gi(p,y,h),x=bi(p,y,h);for(const[N,T]of Object.entries(x)){const j=n?.querySelector(`[name="${N}"]`);j&&j.value!==String(T)&&(j.value=T)}return b.length?r(b.join(" ")):i(),b},f=p=>{a=Math.max(1,Math.min(3,p)),s.querySelectorAll(".wizard-step-body").forEach(T=>{const j=+T.dataset.step;T.classList.toggle("active",j===a),T.hidden=j!==a});const y=s.querySelector(".setup-wizard-header .eyebrow"),b=s.querySelector(".setup-wizard-header h2");y&&(y.innerHTML=`${d("sliders")} Paso ${a} de 3`),b&&(b.textContent=a===1?"Tu perfil":a===2?"Tu ritmo":"Tu papel"),s.querySelectorAll(".wizard-steps-bar span").forEach((T,j)=>{T.classList.toggle("done",a>=j+1),T.classList.toggle("current",a===j+1)});const N=s.querySelector(".wizard-footer");N&&(N.innerHTML=`
        ${a>1?`<button type="button" class="button outline" data-wizard="prev">${d("left")} Anterior</button>`:t?"":'<button type="button" class="button outline" data-modal="close">Ahora no</button>'}
        <div style="flex:1"></div>
        ${a<3?`<button type="button" class="button solid" data-wizard="next">Siguiente ${d("right")}</button>`:`<button type="submit" class="button solid">${d("check")} Guardar</button>`}`)};s.onchange=p=>{p.target.name==="theme"&&ze(p.target.value,h)};const m=()=>{const p=zo(n);if(!p.ok)return r(p.error?.message||"No se ha podido guardar el perfil.",{escape:t}),!1;re(G.wizard()),p.setup.completed&&re(G.setup());const y=t;return rt=!1,s.oncancel=null,s.close(),k(),y&&C==="thoughts"&&requestAnimationFrame(()=>wo()),$(p.notes.length?`Perfil guardado. ${p.notes.join(" ")}`:"Perfil actualizado"),!0};s.onsubmit=p=>{if(p.preventDefault(),a<3){c(a),f(a+1);return}m()},s.onclick=p=>{if(p.target.closest('[data-modal="close"]')||p.target===s){if(t){p.preventDefault();return}ze(h.theme,h),s.oncancel=null,s.close();return}const b=p.target.closest("[data-wizard]");if(b){const x=b.dataset.wizard;if(x==="skip"){rt=!1,s.oncancel=null,s.close(),k(),$("Sigo sin poder guardar el perfil: lo reintentaré solo.");return}x==="next"?(c(a),f(a+1)):f(a-1)}}}function Sa({title:e,text:t,confirmLabel:a,danger:s=!1}){return new Promise(n=>{const o=kt(`<div class="modal-card">
      <h2>${u(e)}</h2><p>${u(t)}</p>
      <div class="modal-actions">
        <button class="button outline" data-modal="cancel">Cancelar</button>
        <button class="button ${s?"danger":"solid"}" data-modal="confirm">${u(a)}</button>
      </div>
    </div>`);o.onclick=r=>{const i=r.target.closest("[data-modal]")?.dataset.modal;i?(o.close(),n(i==="confirm")):r.target===o&&(o.close(),n(!1))}})}function Ac(e){const t=P.find(o=>o.date===e);if(!t){Ce(e);return}const a=Z(h),s=M.filter(o=>t.habits?.[o.id]),n=kt(`<article class="modal-card entry-modal">
    <div class="section-heading">
      <div><p class="eyebrow">${h.name?`Cuaderno de ${u(h.name)} · `:""}Día ${Wt(t.date,P)}</p><h2>${z(t.date)}</h2></div>
      <span class="mood-tag" style="--mood:${R[t.mood-1].color}">${R[t.mood-1].emoji} ${R[t.mood-1].label}</span>
    </div>
    <div class="read-metrics">
      <span class="chiplet">${d("moon")} ${A(t.sleepHours)} h sueño</span>
      <span class="chiplet">${d("study")} ${A(t.studyHours)} h dedicación</span>
      ${t.energy?`<span class="chiplet">${d("bolt")} energía ${t.energy}/5</span>`:""}
      ${t.stress?`<span class="chiplet">${d("storm")} estrés ${t.stress}/5</span>`:""}
      <span class="chiplet">${d("pen")} ${Qt(t)} palabras</span>
    </div>
    ${(t.tags||[]).length?`<div class="read-metrics">${t.tags.map(o=>`<span class="chiplet">${d("hash")} ${u(o)}</span>`).join("")}</div>`:""}
    ${t.wordOfDay?`<div class="read-section"><h3>Palabra del día</h3><p>«${u(t.wordOfDay)}»</p></div>`:""}
    ${t.capsule?`<div class="read-section"><h3>${u(a.capsuleLabel)}</h3><p>${u(t.capsule)}</p></div>`:""}
    <div class="read-section"><h3>Notas del día</h3><p class="dropcap-paragraph">${u(t.generalDay)}</p></div>
    ${t.bestOfDay?`<div class="read-section"><h3>Lo mejor del día</h3><p>${u(t.bestOfDay)}</p></div>`:""}
    ${t.differentToday?`<div class="read-section"><h3>¿Qué ha sido distinto?</h3><p>${u(t.differentToday)}</p></div>`:""}
    ${t.gratitude?.some(Boolean)?`<div class="read-section"><h3>Agradecimientos</h3><ol>${t.gratitude.filter(Boolean).map(o=>`<li>${u(o)}</li>`).join("")}</ol></div>`:""}
    ${t.tomorrow||t.goals?.length?`<div class="read-section"><h3>Para mañana</h3><p>${u(t.tomorrow)}</p>${t.goals?.length?`<ul>${t.goals.map(o=>`<li>${u(o)}</li>`).join("")}</ul>`:""}</div>`:""}
    ${M.length&&s.length?`<div class="read-section"><h3>Hábitos cumplidos</h3><p>${s.map(o=>u(o.name)).join(" · ")}</p></div>`:""}
    <div class="modal-actions">
      <button class="button outline" data-modal="close">Cerrar</button>
      <button class="button danger" data-modal="delete">Eliminar</button>
      <button class="button solid" data-modal="edit">${d("pen")} Editar</button>
    </div>
  </article>`);n.onclick=o=>{const r=o.target.closest("[data-modal]")?.dataset.modal,i=()=>n.close();(r==="close"||o.target===n)&&i(),r==="edit"&&(i(),Ce(t.date)),r==="delete"&&(i(),Go(t.date))}}function Ce(e){if(e>v()){$("Aún no ha llegado.",!0);return}Va(),S=e,C="diary",se=!1,Ia=!1,ae(),k({transition:!0})}const Va=gt;function Ro(){if(window.innerWidth<=980){se=!se,document.querySelector(".sidebar")?.classList.toggle("is-open",se),document.querySelector(".sidebar-backdrop")?.classList.toggle("is-visible",se);return}K=!K,J("el menú",()=>{h=je({sidebarCollapsed:K})});const e=document.querySelector(".sidebar");if(e){e.classList.toggle("is-collapsed",K);const t=e.querySelector(".sidebar-collapse-btn");t&&(t.innerHTML=d(K?"right":"left"),t.title=K?"Desplegar menú · Ctrl+B":"Plegar menú · Ctrl+B",t.setAttribute("aria-expanded",String(!K))),e.classList.add("is-animating"),setTimeout(()=>{e.classList.remove("is-animating"),Rt()},420),setTimeout(()=>Rt(),60)}}async function Go(e){if(await Sa({title:"¿Eliminar esta entrada?",text:`Se borrará del dispositivo el registro de ${z(e)}.`,confirmLabel:"Eliminar",danger:!0})){if(!J("la entrada",()=>{P=ti(e)}).ok)return;It("entrada"),re(G.entry(e)),ks(e),k(),$("Entrada eliminada.")}}function qc(e,t){const a=new Blob([t],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(a),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),1e3)}F.addEventListener("click",async e=>{const t=e.target.closest("[data-view]"),a=e.target.closest("[data-action]");if(e.target.closest(".brand")){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;e.preventDefault(),Ce(v());return}if(t&&!a){if(t.tagName==="A"&&(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0))return;e.preventDefault(),tl(t.dataset.view,{transition:!0});return}if(!a)return;const{action:n,date:o,range:r,mini:i,key:l,step:c,habit:f,name:m,word:p,tab:y,quote:b,index:x,layout:N,target:T,val:j,monthly:q,id:_,delta:O}=a.dataset;switch(n){case"menu":se=!se,k();break;case"close-menu":se=!1,k();break;case"toggle-sidebar":Ro();break;case"archive-tab":Ae=y||"list",ae(),le=!0,k();break;case"stats-tab":fe=y||"pulse",ae(),le=!0,k();break;case"profile-tab":pe=y||"personal",ae(),le=!0,k();break;case"add-part":gn();break;case"part-preset":gn(j);break;case"part-type":{const g=de(h).map(w=>w.key===l?{...w,type:j==="line"?"line":"text"}:w);Te({parts:g},"");break}case"remove-part":{const g=de(h).find(w=>w.key===l);Te({parts:de(h).filter(w=>w.key!==l)},`«${g?.label||"Parte"}» fuera. Lo ya escrito se queda en sus días.`);break}case"add-counter":Bl();break;case"remove-counter":{const g=ye(h);if(g.length<=1){$("Deja al menos un contador.",!0);break}const w=g.find(L=>L.key===l);Te({counters:g.filter(L=>L.key!==l)},`«${w?.label||"Contador"}» fuera. Las cifras ya anotadas se conservan.`);break}case"reset-counters":Te({counters:Ut.map(g=>({...g}))},"Vuelta a los cuatro de siempre.");break;case"thoughts-tab":Y=y||"shore",Oe=!0,ae(),le=!0,k();break;case"toggle-thoughts-landscape":pl();break;case"routine-tab":we=y||"hoy",ae(),le=!0,k();break;case"shift-day":{const g=D(S,parseInt(O||"1",10));if(g>v()){$("Ese día todavía no ha llegado.",!0);break}S=g,k(),window.scrollTo({top:0,behavior:"smooth"});break}case"today-routine":S=v(),k();break;case"thoughts-island":{const g=document.querySelector("#thoughts-bottles-drawer");g&&(g.open=!0,Oe=!0);break}case"thoughts-top":window.scrollTo({top:0,behavior:me?"smooth":"auto"});break;case"focus-composer":{const g=document.querySelector("#thoughts-bottles-drawer");g?.open&&(g.open=!1,Oe=!1);const w=document.querySelector("#bottle-text");w&&(w.focus(),w.setSelectionRange(w.value.length,w.value.length));break}case"toggle-habit":{const g=o||S;if(g>v()){$("Ese día todavía no ha llegado.",!0);break}const L={...he(g)?.habits||{}},H=!L[f];L[f]=H;try{Gt(g,{habits:L}),k(),Xl(f);const I=M.find(Mt=>Mt.id===f)?.name||"Hábito",ve=M.length,xt=M.filter(Mt=>L[Mt.id]).length;H&&g===v()&&ve&&xt===ve?$("Rutina de hoy completada"):$(H?`«${I}» marcado`:`«${I}» desmarcado`)}catch(I){$(I.message||"No se pudo guardar el hábito.",!0)}break}case"add-suggested-habit":{if(!m)break;if(M.length>=30){$("Máximo 30 hábitos.",!0);break}if(M.some(w=>w.name.toLowerCase()===m.toLowerCase())){$("Ya está en tu lista.",!0);break}if(!J("los hábitos",()=>{M=ba({name:m})}).ok)break;k(),$(`«${m}» añadido a tu rutina`);break}case"edit-habit":{const g=a.closest(".habit-stat-row"),w=g?.querySelector(".habit-stat-name strong"),L=M.find(I=>I.id===f);if(!w||!L)break;w.outerHTML=`<input class="habit-rename" maxlength="40" value="${u(L.name)}" aria-label="Renombrar hábito">`;const H=g.querySelector(".habit-rename");H.focus(),H.select(),H.addEventListener("keydown",I=>{I.key==="Enter"&&(I.preventDefault(),H.dataset.done="1",bn(f,H.value)),I.key==="Escape"&&(H.dataset.done="1",k())}),H.addEventListener("blur",()=>{H.dataset.done!=="1"&&bn(f,H.value)});break}case"routine-counter-plus":case"routine-counter-minus":{const g=document.querySelector(`[name="counter_${l}"]`);if(!g)break;const w=n==="routine-counter-plus"?1:-1,L=parseFloat(c)||1,H=Math.min(parseFloat(g.max),Math.max(parseFloat(g.min),(parseFloat(g.value)||0)+w*L));g.value=Math.round(H*10)/10,us(g,l,parseFloat(g.value)),clearTimeout(He),He=setTimeout($a,400);break}case"add-goal-routine":{Le();const g=document.querySelector("#routine-goals");if(!g)break;g.querySelector(".habit-empty")?.remove();const w=g.querySelectorAll(".task-input").length;g.insertAdjacentHTML("beforeend",ho(w,""));const L=g.querySelectorAll(".task-input");L[L.length-1]?.focus();break}case"remove-goal-routine":{const g=ko().filter((L,H)=>H!==+x),w=he(S)||{};try{Gt(S,{goals:g.filter(Boolean),tomorrow:document.querySelector("#routine-tomorrow")?.value.trim()??(w.tomorrow||"")}),k()}catch(L){$(L.message||"No se pudo quitar la tarea.",!0)}break}case"open-bottle":wa(_);break;case"recast-bottle":{if(!J("el pensamiento",()=>{B=ao(_)}).ok)break;k(),$("Botella enviada de nuevo.");break}case"delete-bottle":oc(_);break;case"toggle-more-details":{nt=a.getAttribute("aria-expanded")!=="true";const g=++on,w=document.querySelector("#extras-accordion"),L=document.querySelector("#extras-panel");if(a.setAttribute("aria-expanded",String(nt)),!w||!L)break;if(nt)L.hidden=!1,w.classList.remove("is-closing"),w.classList.add("is-open","is-revealing"),setTimeout(()=>w.classList.remove("is-revealing"),360);else{w.classList.remove("is-open","is-revealing"),w.classList.add("is-closing");const H=()=>{!nt&&g===on&&(L.hidden=!0,w.classList.remove("is-closing"))};if(!me){H();break}const I=ve=>{ve.target===L&&(L.removeEventListener("animationend",I),H())};L.addEventListener("animationend",I),setTimeout(()=>{L.removeEventListener("animationend",I),H()},260)}break}case"quick-number":{const g=document.querySelector(`#${T}`);g&&j!==void 0&&(g.value=j,g.classList.remove("num-bump"),g.offsetWidth,g.classList.add("num-bump"),g.dispatchEvent(new Event("input",{bubbles:!0})));break}case"cycle-theme":{const g=ne.findIndex(xt=>xt.id===h.theme),w=ne[(g+1)%ne.length];if(!J("el tema",()=>{h=je({theme:w.id})}).ok)break;ze(h.theme,h);const H=document.querySelector(".theme-pill > span:last-child"),I=document.querySelector(".topbar-favicon-mini"),ve=document.querySelector(".ex-libris-icon");H&&(H.textContent=w.name),I&&(I.innerHTML=Fe(h.theme,h)),ve&&(ve.innerHTML=Fe(h.theme,h)),$(`Tema: ${w.name}`);break}case"open-setup-wizard":Ns(1);break;case"open-crisis-modal":Bo(y||"help");break;case"dismiss-crisis-banner":Ia=!0,document.querySelector("#crisis-alert-slot").innerHTML="";break;case"next-daily-word":qs++,es(".word-of-day-card");break;case"next-daily-tip":Es++,es(".tip-of-day-card");break;case"next-quote":Ls++,Sn();break;case"save-quote":{if(!b)break;const g=h.savedQuotes||[],w=g.includes(b),L=w?g.filter(I=>I!==b):[b,...g];if(!J("las frases",()=>{h=je({savedQuotes:L})}).ok)break;Sn(),$(w?"Frase quitada de tus guardadas":"Frase guardada en tu perfil");break}case"add-custom-quote":{const w=document.querySelector("#new-custom-quote")?.value.trim();if(!w){$("Escribe una frase primero.",!0);break}if(!J("las frases",()=>{h=je({savedQuotes:[w,...h.savedQuotes||[]]})}).ok)break;k(),$("Frase añadida");break}case"remove-saved-quote":{const g=parseInt(x,10),w=(h.savedQuotes||[]).filter((H,I)=>I!==g);if(!J("las frases",()=>{h=je({savedQuotes:w})}).ok)break;k(),$("Frase eliminada");break}case"toggle-focus-writing":{Tt=!Tt,document.querySelector(".diary-layout")?.classList.toggle("is-focus-writing",Tt);break}case"history-layout":{ca=N||"grid",k();break}case"use-daily-word":{const g=document.querySelector("#wordOfDay");g&&p&&(g.value=p,g.dispatchEvent(new Event("input",{bubbles:!0})),g.classList.add("highlight-flash"),setTimeout(()=>g.classList.remove("highlight-flash"),900),es(),$(`«${p}» anotada`));break}case"inspire-prompt":{ot=!ot;const g=document.querySelector("#writing-prompt-box");g&&(g.hidden=!ot,g.classList.toggle("is-open",ot));break}case"next-writing-prompt":{da++;const g=document.querySelector("#writing-prompt-text");g&&(g.classList.remove("text-swap"),g.offsetWidth,g.textContent=is(S,da),g.classList.add("text-swap"));break}case"insert-writing-prompt":{const g=is(S,da),w=document.querySelector("#generalDay");if(w){const L=w.value.trim();w.value=L?`${L}

— ${g}
`:`— ${g}
`,w.focus(),w.setSelectionRange(w.value.length,w.value.length),w.dispatchEvent(new Event("input",{bubbles:!0}))}break}case"previous":Ce(D(S,-1));break;case"next":Ce(D(S,1));break;case"today":Ce(v());break;case"open-day":Ce(o);break;case"read":Ac(o);break;case"delete":Go(o);break;case"add-goal":document.querySelector("#goals").insertAdjacentHTML("beforeend",$l()),document.querySelector("#goals .goal-row:last-child input")?.focus();break;case"remove-goal":a.closest(".goal-row").remove();break;case"counter-plus":case"counter-minus":{const g=document.querySelector(`[name="counter_${l}"]`);if(!g)break;const w=n==="counter-plus"?1:-1,L=parseFloat(c)||1,H=Math.min(parseFloat(g.max),Math.max(parseFloat(g.min),(parseFloat(g.value)||0)+w*L));g.value=Math.round(H*10)/10,g.classList.remove("num-bump"),g.offsetWidth,g.classList.add("num-bump"),g.dispatchEvent(new Event("input",{bubbles:!0}));break}case"add-habit":{const w=document.querySelector("#new-habit")?.value.trim();if(!w){$("Escribe un nombre para el hábito.",!0);break}if(M.length>=30){$("Máximo 30 hábitos.",!0);break}if(M.some(H=>H.name.toLowerCase()===w.toLowerCase())){$("Ya existe un hábito con ese nombre.",!0);break}if(!J("los hábitos",()=>{M=ba({name:w})}).ok)break;k(),document.querySelector("#new-habit")?.focus(),$(`Hábito «${w}» añadido`);break}case"delete-habit":{if(await Sa({title:"¿Eliminar este hábito?",text:`Se quitará «${m}» de tu lista actual.`,confirmLabel:"Eliminar",danger:!0})){if(!J("los hábitos",()=>{M=si(f)}).ok)break;k(),$("Hábito eliminado")}break}case"month-prev":i==="1"?ta=Ie(ta,-1):ie=Ie(ie,-1),k();break;case"month-next":i==="1"?ta=Ie(ta,1):ie=Ie(ie,1),k();break;case"period-prev":q==="1"?ie=Ie(ie,-1):S=D(S,-7),k();break;case"period-next":q==="1"?ie=Ie(ie,1):S=D(S,7),k();break;case"range":tt=+r,k();break;case"retry-save":{if(!Zt()){$("No hay nada pendiente: todo está guardado."),Be();break}const g=Un();Be(),$(g.ok?"Guardado. Ya está todo en su sitio.":"Sigo sin poder guardar. Descarga una copia para no perderlo.",!g.ok);break}case"open-draft":Zl(a.dataset.scope||"");break;case"discard-draft":{const g=a.dataset.scope||"";re(g),k(),$("Borrador descartado.");break}case"discard-day-patch":{if(!o||!ks(o))break;k(),$("Cambios descartados.");break}case"export":case"backup":qc(`diario-${v()}.json`,di(P,M,h,B)),$("Copia descargada");break;case"import":document.querySelector("#import-file").click();break;case"clear":if(await Sa({title:"¿Borrar todos los datos?",text:"Se eliminarán todas las entradas, hábitos y preferencias de este navegador.",confirmLabel:"Borrar todo",danger:!0}))try{ai(),Rr(),Vr(),Ua(),S=v(),C="diary",ae(),k(),$("Datos eliminados")}catch(g){$(g.message||"No se han podido eliminar los datos.",!0)}break}});F.addEventListener("keydown",e=>{const t=e.target.closest('.settings-subnav-item[role="tab"]');if(!t)return;const a=[...F.querySelectorAll('.settings-subnav-item[role="tab"]')],s=a.indexOf(t),n=["ArrowDown","ArrowRight"].includes(e.key)?1:["ArrowUp","ArrowLeft"].includes(e.key)?-1:0;if(!n)return;e.preventDefault(),pe=a[(s+n+a.length)%a.length].dataset.tab,ae(),le=!0,k(),F.querySelector(`#settings-tab-${pe}`)?.focus()});F.addEventListener("change",e=>{if(e.target.id==="import-file"){const t=e.target.files[0];if(!t)return;const a=new FileReader;a.onload=()=>{try{Ee=ui(a.result);const s=Ee.drafts?Object.keys(Ee.drafts).length:0,n=kt(`<div class="modal-card">
          <h2>Importar copia</h2>
          <p>El archivo contiene <strong>${Ee.entries.length}</strong> ${Ee.entries.length===1?"entrada":"entradas"} y <strong>${Ee.habits.length}</strong> ${Ee.habits.length===1?"hábito":"hábitos"}${s?` y <strong>${s}</strong> ${s===1?"texto a medias":"textos a medias"}`:""}.</p>
          <div class="modal-actions">
            <button class="button outline" data-modal="cancel">Cancelar</button>
            <button class="button solid" data-modal="confirm">Importar</button>
          </div>
        </div>`);n.onclick=o=>{const r=o.target.closest("[data-modal]")?.dataset.modal;if(r==="confirm")try{pi(Ee),Ua(),$("Copia importada")}catch(i){$(i.message||"No se ha podido importar la copia.",!0);return}(r||o.target===n)&&(n.close(),k())}}catch(s){$(s.message||"No se ha podido importar el archivo.",!0)}e.target.value=""},a.readAsText(t)}e.target.id==="history-mood"&&(ia=e.target.value,k()),e.target.id==="history-tag"&&(la=e.target.value,k())});F.addEventListener("input",e=>{if(e.target.id==="history-search"){ra=e.target.value;const t=document.activeElement===e.target;if(k(),t){const a=document.querySelector("#history-search");a.focus(),a.setSelectionRange(a.value.length,a.value.length)}}});window.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="b"&&(e.preventDefault(),Ro())});window.addEventListener("beforeunload",e=>{gt(),Zt()&&(e.preventDefault(),e.returnValue="")});window.addEventListener("storage",e=>{const t=String(e.key||"");if(t.startsWith("diario.")){if(t===ht){C==="setup"&&pe==="data"&&k();return}try{gt(),Ua(),k(),$("Otra pestaña cambió el cuaderno: lo he actualizado")}catch(a){$("No pude refrescar los datos: "+a.message,!0)}}});setInterval(()=>{Zt()&&dt()},15e3);Cr(()=>Be());"serviceWorker"in navigator&&window.addEventListener("load",()=>{const e=`${Bt}/`,t=`${e}sw.js`;navigator.serviceWorker.register(t,{scope:e}).catch(()=>{})});vo();window.addEventListener("popstate",()=>{Va(),Cs(),se=!1,vo(),le=!0,k({instant:!0})});k();X("idle");Zt()&&dt();Be();const ts=qa(B).filter(e=>e.seen!==!0);ts.length&&setTimeout(()=>{$(ts.length===1?"Has recibido una botella.":`${ts.length} botellas recibidas.`),document.querySelectorAll(".vault-arrival").forEach((t,a)=>{t.style.setProperty("--wash-delay",`${a*140}ms`),t.classList.add("is-washing")});const e=document.querySelector(".thought-vault");e?.classList.add("is-rising"),setTimeout(()=>e?.classList.remove("is-rising"),1400)},820);

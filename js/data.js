/* ============================================================
   DATA.JS — Contenido del curso "Inglés Técnico para Electricistas"
   Español → Inglés | Basado en terminología del oficio y del
   Código Eléctrico Nacional (NEC / NFPA 70).

   NOTA: Las referencias al NEC son citas educativas de números
   de artículo con explicación propia (no reproducen el texto
   del código). Verifica siempre la edición vigente en tu estado.

   Guía de pronunciación: sílabas al estilo español.
   - MAYÚSCULAS = sílaba acentuada
   - "j" suena como la h inglesa (hand = jand)
   - "sh", "ch", "z" (= th inglesa) según se indica
   ============================================================ */

const COURSE = {
  title: "Inglés Técnico para Electricistas",
  subtitle: "De Ayudante a Foreman — Español → English",

  levels: [

    /* ================================================================
       SECCIÓN ESPECIAL — CONSEGUIR TRABAJO
       Siempre desbloqueada: buscar trabajo no espera a nadie.
       ================================================================ */
    {
      id: "job",
      num: 0,
      title: "Conseguir trabajo",
      en: "Getting Hired",
      icon: { svg: "talk" },
      color: "red",
      alwaysUnlocked: true,
      desc: "Cuando suena el teléfono no hay tiempo de estudiar. Aquí están las frases exactas para contestarle a un reclutador, entenderle aunque hable rápido, responder sus preguntas y negociar tu tarifa.",
      modules: [

        {
          id: "jm1",
          title: "Llamada de trabajo",
          en: "Job Phone Call",
          icon: "📞",
          desc: "La llamada del reclutador, de principio a fin: contestar, sobrevivir cuando no entiendes, responder lo que siempre preguntan, preguntar tú, negociar y cerrar.",
          tip: "Antes de contestar, respira. Tienes derecho a pedir que hablen despacio — eso no te resta valor, te hace ver profesional. Y si algo no lo entiendes por teléfono, pídelo por escrito: esa es tu red de seguridad.",
          items: [

            /* ---- Contestar ---- */
            { kind: "phrase", es: "Hola, habla Cesar.", en: "Hello, this is Cesar.", pron: "je-LÓU, dis is SÉ-sar", icon: { emoji: "📞" },
              exEs: "Así se contesta una llamada de trabajo en EE.UU. Di tu nombre, no solo 'hello'.", exEn: "Hello, this is Cesar. — Hi Cesar, this is Robert from Electrical Alliances.",
              note: "Cambia 'Cesar' por tu nombre. Si te preguntan '¿Is this Cesar?' contesta: 'Yes, speaking' (yes, SPÍ-king) = Sí, con él." },

            { kind: "phrase", es: "Gracias por llamar.", en: "Thank you for calling.", pron: "zenk yu for KÓ-ling", icon: { emoji: "🙏" },
              exEs: "Lo primero que dices después del saludo. Suena profesional y te da un segundo para acomodarte.", exEn: "Thank you for calling. I sent my email on Friday." },

            /* ---- Supervivencia ---- */
            { kind: "phrase", es: "¿Me lo puede mandar por texto o correo, por favor?", en: "Could you send me that by text or email, please?", pron: "kud yu SEND mi dat bai TEKST or Í-meil, plis", icon: { emoji: "📩" },
              exEs: "LA FRASE MÁS IMPORTANTE. Si no entendiste una dirección, una fecha o un nombre, pídelo por escrito y lo lees con calma.", exEn: "Could you send me the address by text, please?",
              note: "Esta frase te salva de cualquier apuro. Apréndela primero que todas." },

            { kind: "phrase", es: "¿Puede hablar más despacio, por favor?", en: "Could you speak slower, please?", pron: "kud yu SPIK SLÓU-er, plis", icon: { emoji: "🐢" },
              exEs: "Pídelo sin pena, desde el principio de la llamada.", exEn: "Sorry, could you speak a little slower, please?" },

            { kind: "phrase", es: "¿Puede repetir, por favor?", en: "Could you repeat that, please?", pron: "kud yu ri-PÍT dat, plis", icon: { emoji: "🔁" },
              exEs: "Úsala las veces que necesites. Es mil veces mejor que decir 'yes' sin entender.", exEn: "I'm sorry, could you repeat that, please?" },

            { kind: "phrase", es: "Sigo aprendiendo inglés, pero entiendo el trabajo.", en: "I'm still learning English, but I understand the work.", pron: "aim stil LÉR-ning ÍN-glish, bot ai on-der-STAND da UERK", icon: { emoji: "💪" },
              exEs: "Honestidad con seguridad. A un reclutador de obra esto le suena bien, no mal.", exEn: "I'm still learning English, but I understand the work and I learn fast." },

            { kind: "phrase", es: "¿Cómo se escribe?", en: "How do you spell that?", pron: "JAU du yu SPEL dat", icon: { emoji: "🔤" },
              exEs: "Para nombres, calles o correos. Te lo van a deletrear letra por letra.", exEn: "How do you spell that? — E-L-E-C-T-R-I-C-A-L." },

            { kind: "phrase", es: "Déjeme anotarlo.", en: "Let me write that down.", pron: "let mi RAIT dat DAUN", icon: { emoji: "✍️" },
              exEs: "Te da tiempo y demuestra que eres organizado. Ten siempre papel y lápiz cerca del teléfono.", exEn: "One moment, let me write that down." },

            /* ---- Lo que el reclutador pregunta ---- */
            { kind: "phrase", es: "Tengo cuatro años de experiencia como electricista.", en: "I have four years of experience as an electrician.", pron: "ai jav FOR YIRS of eks-PÍ-riens as an i-lek-TRÍ-shan", icon: { emoji: "⚡" },
              exEs: "Cambia el número por el tuyo. Es la primera pregunta que hacen siempre.", exEn: "I have four years of experience, more than eight thousand field hours." },

            { kind: "phrase", es: "Trabajé en un proyecto de data center en Phoenix, Arizona.", en: "I worked on a data center project in Phoenix, Arizona.", pron: "ai UERKD on a DÉI-ta SÉN-ter PRÓ-chekt in FÍ-niks, a-ri-SÓU-na", icon: { emoji: "🏢" },
              exEs: "Tu carta más fuerte. Dila temprano en la llamada.", exEn: "I worked on a data center project in Phoenix: PDUs, conduit, cable tray, and megger testing." },

            { kind: "phrase", es: "Sí, tengo mi tarjeta de OSHA 10.", en: "Yes, I have my OSHA 10 card.", pron: "yes, ai JAV mai ÓU-sha TEN kard", icon: { emoji: "🦺" },
              exEs: "Requisito para entrar a casi cualquier obra. Tenla a la mano.", exEn: "Yes, I have my OSHA 10 card. I can send you a picture." },

            { kind: "phrase", es: "Sí, estoy disponible de inmediato.", en: "Yes, I'm available immediately.", pron: "yes, aim a-VÉI-la-bol i-MÍ-dia-tli", icon: { emoji: "✅" },
              exEs: "Si puedes empezar ya, dilo claro: es lo que quieren oír.", exEn: "Yes, I'm available immediately. I can start next Monday." },

            { kind: "phrase", es: "Sí, puedo trabajar de noche.", en: "Yes, I can work the night shift.", pron: "yes, ai kan UERK da NAIT SHIFT", icon: { emoji: "🌙" },
              exEs: "'Night shift' = turno nocturno. 'Day shift' = turno de día.", exEn: "Yes, I can work the night shift and weekends." },

            { kind: "phrase", es: "Sí, tengo mis propias herramientas.", en: "Yes, I have my own tools.", pron: "yes, ai jav mai OUN TULS", icon: { svg: "toolPouch" },
              exEs: "Casi siempre lo preguntan. También: 'my own transportation' = transporte propio.", exEn: "Yes, I have my own tools and my own transportation." },

            /* ---- Lo que TÚ preguntas ---- */
            { kind: "phrase", es: "¿Cuál es el rango de tarifa para este puesto?", en: "What's the rate range for this position?", pron: "juats da REIT REINCH for dis po-SÍ-shon", icon: { emoji: "💵" },
              exEs: "HAZ ESTA PREGUNTA ANTES de decir tu número. Si su rango empieza más arriba de lo que ibas a pedir, ganaste.", exEn: "Before we continue, what's the rate range for this position?",
              note: "Es una pregunta totalmente normal en agencias de personal. No te da pena hacerla." },

            { kind: "phrase", es: "Estoy buscando treinta y cinco dólares por hora.", en: "I'm looking for thirty-five dollars an hour.", pron: "aim LÚ-king for ZÉR-ti-faiv DÓ-lars an ÁUR", icon: { emoji: "🤝" },
              exEs: "Cambia el número por el tuyo. Dilo con calma y sin disculparte.", exEn: "I'm looking for thirty-five an hour for night shift.",
              note: "En obra basta decir el número: 'thirty-five an hour'." },

            { kind: "phrase", es: "¿Dónde queda el proyecto?", en: "Where is the project located?", pron: "juer is da PRÓ-chekt lo-KÉI-ted", icon: { emoji: "📍" },
              exEs: "Pregúntalo siempre, sobre todo si pagan viáticos: puede estar en otro estado.", exEn: "Where is the project located? Is it local or out of town?" },

            { kind: "phrase", es: "¿Cuándo empieza el proyecto?", en: "When does the project start?", pron: "juen dos da PRÓ-chekt START", icon: { svg: "calendar" },
              exEs: "También: '¿How long is the project?' = ¿cuánto dura?", exEn: "When does the project start, and how long will it last?" },

            { kind: "phrase", es: "¿Cuántas horas por semana?", en: "How many hours per week?", pron: "jau MÉ-ni ÁURS per UÍK", icon: { emoji: "⏰" },
              exEs: "Importa mucho: define tu cheque y tu descanso.", exEn: "How many hours per week, and is there overtime?" },

            { kind: "phrase", es: "¿Pagan viáticos?", en: "Is there per diem?", pron: "is der per DÍ-em", icon: { emoji: "🏨" },
              exEs: "'Per diem' es el dinero diario para hotel y comida cuando el trabajo es fuera.", exEn: "Is there per diem, and how much per day?" },

            /* ---- Cerrar la llamada ---- */
            { kind: "phrase", es: "¿Cuál es el siguiente paso?", en: "What's the next step?", pron: "juats da NEKST STEP", icon: { emoji: "➡️" },
              exEs: "Cierra siempre con esto: sales de la llamada sabiendo qué va a pasar.", exEn: "Thank you. What's the next step?" },

            { kind: "phrase", es: "Quedo pendiente de su correo.", en: "I'll wait for your email.", pron: "ail UÉIT for yor Í-meil", icon: { emoji: "📬" },
              exEs: "Despedida profesional.", exEn: "Perfect. I'll wait for your email. Thank you for your time." },

            { kind: "phrase", es: "Gracias por su tiempo. Que tenga buen día.", en: "Thank you for your time. Have a good day.", pron: "zenk yu for yor TAIM. jav a gud DÉI", icon: { emoji: "👋" },
              exEs: "Cierre estándar de cualquier llamada de trabajo en EE.UU.", exEn: "Thank you for your time, Robert. Have a good day." }
          ]
        },

        {
          id: "jm2",
          title: "La entrevista",
          en: "The Job Interview",
          icon: "🤝",
          desc: "Frente al foreman o al superintendente: presentarte, contar tu experiencia, responder las preguntas de siempre y hacer las tuyas.",
          tip: "En una entrevista de obra nadie espera un inglés perfecto: esperan que sepas trabajar, que llegues a tiempo y que seas seguro. Contesta corto, mira a los ojos y da la mano firme. Si no entiendes una pregunta, pídela otra vez — eso se ve mejor que contestar cualquier cosa.",
          items: [

            { kind: "phrase", es: "Mucho gusto.", en: "Nice to meet you.", pron: "NAIS tu MIT yu", icon: { emoji: "🤝" },
              exEs: "Con la mano firme y mirando a los ojos. Así se saluda en EE.UU.", exEn: "Nice to meet you. I'm Cesar.",
              note: "Al despedirte se dice diferente: 'It was nice meeting you' (it uas nais MÍ-ting yu)." },

            { kind: "phrase", es: "Gracias por la oportunidad.", en: "Thank you for the opportunity.", pron: "zenk yu for da o-por-TÚ-ni-ti", icon: { emoji: "🙏" },
              exEs: "Para empezar o cerrar la entrevista. Siempre queda bien.", exEn: "Thank you for the opportunity to interview." },

            { kind: "phrase", es: "Tengo cuatro años trabajando como electricista.", en: "I have four years working as an electrician.", pron: "ai jav FOR YIRS UÉR-king as an i-lek-TRÍ-shan", icon: { emoji: "⚡" },
              exEs: "Respuesta a 'Tell me about yourself' (háblame de ti). Empieza siempre por tu experiencia.", exEn: "I have four years working as an electrician, mostly commercial and data center." },

            { kind: "phrase", es: "Trabajé principalmente en obra comercial y data centers.", en: "I worked mostly on commercial and data center projects.", pron: "ai UERKD MÓUST-li on ko-MÉR-shal and DÉI-ta SÉN-ter PRÓ-chekts", icon: { emoji: "🏢" },
              exEs: "'Mostly' = principalmente. Di el tipo de obra que más has hecho.", exEn: "I worked mostly on commercial projects, and one year on a data center." },

            { kind: "phrase", es: "Sé leer planos.", en: "I can read blueprints.", pron: "ai kan RID BLU-prints", icon: { svg: "blueprint" },
              exEs: "Fórmula clave: 'I can + habilidad'. Con ella dices todo lo que sabes hacer.", exEn: "I can read blueprints and lay out from prints." },

            { kind: "phrase", es: "Sé doblar tubería, EMT y rígido.", en: "I can bend conduit, EMT and rigid.", pron: "ai kan BEND KÁN-du-it, i-em-TÍ and RÍ-chid", icon: { svg: "bender" },
              exEs: "Si te preguntan hasta qué medida, sé honesto: 'up to one inch' o 'up to four inch'.", exEn: "I can bend EMT up to one inch, and I've worked with rigid up to two." },

            { kind: "phrase", es: "Siempre sigo los procedimientos de seguridad.", en: "I always follow safety procedures.", pron: "ai ÓL-ueis FÓ-lou SÉIF-ti pro-SÍ-chers", icon: { svg: "hardHat" },
              exEs: "En EE.UU. la seguridad es lo primero que evalúan. Menciónala tú, sin que te pregunten.", exEn: "I always follow safety procedures. I have my OSHA 10 card." },

            { kind: "phrase", es: "Aprendo rápido y trabajo duro.", en: "I learn fast and I'm a hard worker.", pron: "ai LERN FAST and aim a JARD UÉR-ker", icon: { emoji: "💪" },
              exEs: "'Hard worker' es el mayor elogio en la construcción de EE.UU.", exEn: "I learn fast, I'm a hard worker, and I show up on time." },

            { kind: "phrase", es: "Llego puntual todos los días.", en: "I show up on time every day.", pron: "ai SHOU op on TAIM É-vri DEI", icon: { emoji: "⏰" },
              exEs: "'Show up' = presentarse. Para un foreman, esto vale oro.", exEn: "I show up on time every day, and I don't miss work." },

            { kind: "phrase", es: "Se terminó el proyecto.", en: "The project ended.", pron: "da PRÓ-chekt ÉN-ded", icon: { emoji: "🏁" },
              exEs: "Respuesta a '¿por qué dejaste tu último trabajo?'. Es la más común y honesta en construcción.", exEn: "Why did you leave? — The project ended and they laid off the crew.",
              note: "Nunca hables mal de un jefe anterior: eso sí espanta a un contratista." },

            { kind: "phrase", es: "Busco trabajo estable y oportunidad de crecer.", en: "I'm looking for steady work and a chance to grow.", pron: "aim LÚ-king for STÉ-di UERK and a CHANS tu GROU", icon: { emoji: "📈" },
              exEs: "Respuesta a '¿qué estás buscando?'. 'Steady work' = trabajo constante.", exEn: "I'm looking for steady work and a chance to grow into a foreman role." },

            { kind: "phrase", es: "Mi inglés todavía es básico, pero entiendo el trabajo y pregunto cuando no entiendo.", en: "My English is still basic, but I understand the work and I ask when I don't understand.", pron: "mai ÍN-glish is stil BÉI-sik, bot ai on-der-STAND da UERK and ai ASK juen ai dont on-der-STAND", icon: { emoji: "🗣️" },
              exEs: "Adelántate al tema. Esta respuesta transmite honestidad y responsabilidad, no debilidad.", exEn: "My English is still basic, but I understand the work and I always ask when I don't understand.",
              note: "Un trabajador que pregunta cuesta menos que uno que adivina. Los foremen lo saben." },

            { kind: "phrase", es: "¿Cuál sería mi horario?", en: "What would my schedule be?", pron: "juat wud mai SKÉ-chul BI", icon: { svg: "calendar" },
              exEs: "Pregunta normal y esperada. Muestra que vas en serio.", exEn: "What would my schedule be? Is there overtime?" },

            { kind: "phrase", es: "¿A quién le reportaría?", en: "Who would I report to?", pron: "JU wud ai ri-PORT tu", icon: { svg: "foreman" },
              exEs: "Sirve para saber quién es tu foreman directo.", exEn: "Who would I report to on site?" },

            { kind: "phrase", es: "¿Hay examen antidopaje?", en: "Is there a drug test?", pron: "is der a DROG TEST", icon: { emoji: "🧪" },
              exEs: "Casi siempre lo hay. Preguntarlo no tiene nada de malo.", exEn: "Is there a drug test before I start?" },

            { kind: "phrase", es: "¿Cuándo quieren que empiece?", en: "When would you like me to start?", pron: "juen wud yu LAIK mi tu START", icon: { emoji: "📅" },
              exEs: "Pregunta de cierre: da por hecho que avanzas, sin sonar arrogante.", exEn: "When would you like me to start? I'm available immediately." },

            { kind: "phrase", es: "Me interesa este puesto.", en: "I'm interested in this position.", pron: "aim ÍN-tres-ted in dis po-SÍ-shon", icon: { emoji: "✅" },
              exEs: "Dilo claramente antes de irte. Muchos no lo dicen y se quedan fuera.", exEn: "I'm very interested in this position. I hope to hear from you." },

            { kind: "phrase", es: "¿Cuál es el siguiente paso?", en: "What's the next step?", pron: "juats da NEKST STEP", icon: { emoji: "➡️" },
              exEs: "Nunca salgas de una entrevista sin saber qué sigue.", exEn: "Thank you. What's the next step in the process?" }
          ]
        },

        {
          id: "jm3",
          title: "Primer día en la obra",
          en: "First Day on the Job",
          icon: "🏗️",
          desc: "Llegar, reportarte, entender lo que te piden y sobrevivir el primer día sin perderte: dónde estacionar, quién es tu foreman, qué hacer cuando terminas una tarea.",
          tip: "El primer día nadie espera que sepas dónde está todo. Lo que sí califican es que llegues temprano, preguntes en vez de adivinar, y no te quedes parado sin hacer nada. Si terminas algo, avisa y pide lo siguiente.",
          items: [

            { kind: "phrase", es: "Soy el electricista nuevo.", en: "I'm the new electrician.", pron: "aim da NU i-lek-TRÍ-shan", icon: { emoji: "👷" },
              exEs: "Tu presentación al llegar a la caseta de la obra.", exEn: "Good morning. I'm the new electrician. It's my first day." },

            { kind: "phrase", es: "Es mi primer día.", en: "It's my first day.", pron: "its mai FERST DEI", icon: { emoji: "🌅" },
              exEs: "Dilo sin pena: hace que la gente te explique con calma.", exEn: "It's my first day. Where do I check in?" },

            { kind: "phrase", es: "¿Dónde me reporto?", en: "Where do I check in?", pron: "juer du ai CHEK IN", icon: { emoji: "📋" },
              exEs: "'Check in' = reportarse al llegar. También: 'Where do I sign in?' (dónde firmo).", exEn: "Where do I check in? Is there a sign-in sheet?" },

            { kind: "phrase", es: "¿Dónde está la oficina de la obra?", en: "Where's the job trailer?", pron: "juers da CHOB TRÉI-ler", icon: { emoji: "🚛" },
              exEs: "'Job trailer' es el remolque-oficina de la obra. También: 'the office'.", exEn: "Where's the job trailer? I need to sign my paperwork." },

            { kind: "phrase", es: "¿Dónde me estaciono?", en: "Where do I park?", pron: "juer du ai PARK", icon: { emoji: "🅿️" },
              exEs: "En obras grandes hay estacionamiento asignado a los trabajadores.", exEn: "Where do I park? Is there a lot for workers?" },

            { kind: "phrase", es: "¿Quién es mi foreman?", en: "Who's my foreman?", pron: "JUS mai FÓR-man", icon: { svg: "foreman" },
              exEs: "Lo primero que necesitas saber: de quién recibes órdenes.", exEn: "Who's my foreman? Where can I find him?" },

            { kind: "phrase", es: "¿A qué hora empezamos?", en: "What time do we start?", pron: "juat TAIM du ui START", icon: { emoji: "⏰" },
              exEs: "También: 'What time is break?' (el descanso) y 'What time is lunch?' (la comida).", exEn: "What time do we start, and what time is lunch?" },

            { kind: "phrase", es: "¿Qué quiere que haga?", en: "What do you want me to do?", pron: "juat du yu UANT mi tu DU", icon: { emoji: "🙋" },
              exEs: "La frase del trabajador que no se queda parado. Úsala apenas llegues.", exEn: "I'm ready. What do you want me to do?" },

            { kind: "phrase", es: "¿Dónde me quiere?", en: "Where do you want me?", pron: "juer du yu UANT mi", icon: { emoji: "📍" },
              exEs: "Pregunta corta de obra: en qué área te toca trabajar.", exEn: "Where do you want me today — second floor or the basement?" },

            { kind: "phrase", es: "Enséñeme cómo lo quiere.", en: "Show me how you want it.", pron: "SHOU mi jau yu UANT it", icon: { emoji: "👀" },
              exEs: "Mejor pedir que te muestren una vez, que hacer cincuenta piezas mal.", exEn: "Show me how you want it, and I'll do the rest the same way." },

            { kind: "phrase", es: "No entiendo. ¿Me puede mostrar?", en: "I don't understand. Can you show me?", pron: "ai dont on-der-STAND. ken yu SHOU mi", icon: { emoji: "🙏" },
              exEs: "En la obra, señalar y mostrar resuelve el 90% del idioma.", exEn: "Sorry, I don't understand. Can you show me what you mean?" },

            { kind: "phrase", es: "¿Este circuito está muerto?", en: "Is this circuit dead?", pron: "is dis SÉR-kit DED", icon: { emoji: "⚡" },
              exEs: "LA PREGUNTA DE SEGURIDAD. Antes de tocar cualquier cable, pregunta y comprueba tú mismo.", exEn: "Is this circuit dead? Did anyone lock it out?",
              note: "Aunque te digan que sí, pruébalo con tu probador. 'Test before you touch.'" },

            /* ---- Bloqueo y etiquetado (LOTO) ---- */
            { kind: "phrase", es: "¿Está bloqueado y etiquetado?", en: "Is this locked out?", pron: "is dis LOKT ÁUT", icon: { svg: "lockout" },
              exEs: "Lo primero que preguntas antes de meter mano a cualquier equipo.", exEn: "Is this locked out? Where's the disconnect?",
              note: "OSHA 29 CFR 1910.147 lo exige. No es opcional, es ley." },

            { kind: "phrase", es: "Voy a poner mi candado.", en: "I need to put my lock on.", pron: "ai nid tu put mai LOK on", icon: { svg: "lockout" },
              exEs: "Aunque ya haya otros candados, TÚ pones el tuyo. Siempre.", exEn: "Before I start, I need to put my lock on.",
              note: "Regla de oro: si no tienes tu candado puesto, no metas las manos." },

            { kind: "phrase", es: "Ese es mi candado, no lo corte.", en: "That's my lock — don't cut it.", pron: "dats mai LOK — dont KOT it", icon: { svg: "lockout" },
              exEs: "Tu candado es personal e intransferible. Nadie más lo quita.", exEn: "That's my lock — don't cut it. I'm still working on that circuit.",
              note: "Cortar el candado de otro sin procedimiento firmado es falta grave, y puede matar a alguien." },

            { kind: "phrase", es: "Solo yo puedo quitar mi candado.", en: "Only I can remove my lock.", pron: "ÓUN-li ai kan ri-MÚV mai LOK", icon: { emoji: "🔑" },
              exEs: "Una llave, un dueño. Así funciona el sistema.", exEn: "Only I can remove my lock. I have the only key." },

            { kind: "phrase", es: "¿De quién es este candado?", en: "Who owns this lock?", pron: "JU ÓUNS dis LOK", icon: { emoji: "❔" },
              exEs: "Antes de reenergizar hay que ubicar al dueño de cada candado.", exEn: "Who owns this lock? We can't energize until it's clear.",
              note: "Por eso escribes tu nombre y teléfono en tus etiquetas." },

            { kind: "phrase", es: "¿Dónde está el desconectador?", en: "Where's the disconnect?", pron: "juers da dis-ko-NÉKT", icon: { svg: "switch" },
              exEs: "El interruptor que corta la energía del equipo. Ahí va tu candado.", exEn: "Where's the disconnect for this unit?" },

            { kind: "phrase", es: "Prueba antes de tocar.", en: "Test before you touch.", pron: "TEST bi-FÓR yu TOCH", icon: { svg: "voltTester" },
              exEs: "El lema del oficio. Compruébalo tú mismo, siempre, aunque te juren que está muerto.", exEn: "Test before you touch. Always.",
              note: "El método correcto: prueba tu probador en un circuito vivo conocido, prueba el tuyo, y vuelve a probar el probador." },

            { kind: "phrase", es: "¿Ya verificaste que está sin energía?", en: "Did you verify it's de-energized?", pron: "did yu VÉ-ri-fai its di-É-ner-chaisd", icon: { emoji: "✅" },
              exEs: "Verificar es más que apagar: es medir y comprobar.", exEn: "Did you verify it's de-energized, or just turn it off?",
              note: "'Zero energy state' = estado de energía cero, cuando ya no queda nada almacenado." },

            { kind: "phrase", es: "Trata de arrancarlo (para comprobar).", en: "Try to start it.", pron: "TRAI tu START it", icon: { emoji: "🔘" },
              exEs: "El paso final del LOTO: intentar encender el equipo para confirmar que no arranca.", exEn: "Lock it, tag it, then try to start it.",
              note: "En inglés le dicen el paso 'try': bloquear, etiquetar y PROBAR que no enciende." },

            { kind: "phrase", es: "el bloqueo grupal", en: "group lockout", pron: "GRUP LÓK-aut", icon: { svg: "lockout" },
              exEs: "Cuando varios trabajan en el mismo equipo: cada uno pone su candado en el cerrojo.", exEn: "This is a group lockout — everybody puts a lock on the hasp.",
              note: "El cerrojo (hasp) permite hasta seis candados. El último en salir es el último en quitar." },

            /* ---- Seguridad general ---- */
            { kind: "phrase", es: "No me siento seguro haciendo eso.", en: "I don't feel safe doing that.", pron: "ai dont fil SÉIF DÚ-ing dat", icon: { svg: "hardHat" },
              exEs: "Tienes derecho a decirlo, y nadie puede castigarte por eso.", exEn: "I don't feel safe doing that without fall protection.",
              note: "En EE.UU. todo trabajador tiene 'stop work authority': autoridad para detener el trabajo si es inseguro. Úsala sin miedo." },

            { kind: "phrase", es: "¿Quién es el de seguridad?", en: "Who's the safety guy?", pron: "JUS da SÉIF-ti GAI", icon: { emoji: "🦺" },
              exEs: "En obras grandes siempre hay un encargado de seguridad. Ubícalo el primer día.", exEn: "Who's the safety guy on this site?" },

            { kind: "phrase", es: "¿Dónde es el punto de reunión?", en: "Where's the muster point?", pron: "juers da MÓS-ter POINT", icon: { emoji: "🚨" },
              exEs: "A dónde correr si suena la alarma. Pregúntalo el primer día, no el día del incendio.", exEn: "Where's the muster point if there's an evacuation?" },

            { kind: "phrase", es: "¿Dónde está el panel de esta área?", en: "Where's the panel for this area?", pron: "juers da PÁ-nel for dis É-ria", icon: { svg: "panel" },
              exEs: "Necesario para apagar el circuito antes de trabajar.", exEn: "Where's the panel for this area? I need to shut off the circuit." },

            { kind: "phrase", es: "¿Dónde recojo el material?", en: "Where do I get the material?", pron: "juer du ai GUET da ma-TÍ-rial", icon: { svg: "materialsList" },
              exEs: "El material suele estar en un conex, la troca o el almacén de la obra.", exEn: "Where do I get the material? Is it in the conex?" },

            { kind: "phrase", es: "Necesito más material.", en: "I need more material.", pron: "ai NID mor ma-TÍ-rial", icon: { svg: "wireSpool" },
              exEs: "Avisa ANTES de quedarte sin nada, no cuando ya te paraste.", exEn: "I'm running low. I need more material for tomorrow." },

            { kind: "phrase", es: "¿Me presta una escalera?", en: "Can I borrow a ladder?", pron: "ken ai BÓ-rrou a LÁ-der", icon: { svg: "ladder" },
              exEs: "Devuélvela siempre a su lugar. Los foremen se fijan en eso.", exEn: "Can I borrow a ladder? I'll bring it right back." },

            { kind: "phrase", es: "Ya terminé. ¿Qué sigue?", en: "I'm done. What's next?", pron: "aim DON. juats NEKST", icon: { emoji: "✅" },
              exEs: "La frase que hace que te vuelvan a llamar. Nunca te quedes parado esperando.", exEn: "I'm done with that room. What's next?" },

            { kind: "phrase", es: "¿Necesita ayuda?", en: "Do you need help?", pron: "du yu NID JELP", icon: { emoji: "🤝" },
              exEs: "Ofrecerte solo te toma tres palabras y te construye fama de buen compañero.", exEn: "Do you need help with that pull?" },

            { kind: "phrase", es: "¿Dónde está el baño?", en: "Where's the restroom?", pron: "juers da REST-rum", icon: { emoji: "🚻" },
              exEs: "En obra son casetas portátiles: 'porta-potty' (POR-ta PÓ-ti).", exEn: "Where's the restroom? — The porta-potties are by the gate." },

            { kind: "phrase", es: "Nos vemos mañana.", en: "See you tomorrow.", pron: "SI yu tu-MÓ-rrou", icon: { emoji: "👋" },
              exEs: "Despedida del final del día. Y limpia tu área antes de irte.", exEn: "All cleaned up. See you tomorrow." }
          ]
        },

        {
          id: "jm4",
          title: "Mis herramientas",
          en: "My Tools",
          icon: "🧰",
          desc: "Los nombres en inglés del equipo que traes en tu troca, tal como se piden en la obra. Si un mecánico te pide algo o tú necesitas pedirlo, esto es lo que vas a oír y decir.",
          tip: "Truco de obra: casi todas las herramientas se piden por su marca. 'Kleins' son las pinzas, 'Sawzall' la sierra sable, 'Channellocks' las pinzas de extensión, 'Packout' tus cajas. Si dices la marca, todos te entienden al instante.",
          items: [

            /* ---- Cajas y organización ---- */
            { es: "la caja de herramientas rodante", en: "rolling tool box", pron: "RÓU-ling TUL BOKS", icon: { svg: "toolPouch" },
              exEs: "La tuya es una Milwaukee PACKOUT: en la obra todos le dicen 'my Packout'.", exEn: "My rolling tool box is a Milwaukee Packout.",
              note: "'Gang box' es la caja grande de la obra donde se guarda todo (marca Knaack). La tuya es personal: 'rolling tool box' o 'tool chest'." },

            { es: "el cinturón portaherramientas", en: "tool belt / tool pouch", pron: "TUL BELT / TUL PAUCH", icon: { svg: "toolPouch" },
              exEs: "Lo primero que te pones al bajarte de la troca.", exEn: "Grab your tool belt, we're going up to the third floor." },

            { es: "la batería y el cargador", en: "battery and charger", pron: "BÁ-te-ri and CHÁR-cher", icon: { emoji: "🔋" },
              exEs: "Las tuyas son M18. Pon a cargar todas antes de irte.", exEn: "Put the batteries on the charger before you leave.",
              note: "'Is your battery dead?' = ¿se te acabó la batería? 'It's dead' = está descargada." },

            /* ---- Herramientas eléctricas ---- */
            { es: "el taladro percutor", en: "hammer drill", pron: "JÁ-mer DRIL", icon: { svg: "hammerDrill" },
              exEs: "El M18 para concreto y block.", exEn: "Bring the hammer drill and a masonry bit." },

            { es: "el atornillador de impacto", en: "impact driver", pron: "ÍM-pakt DRÁI-ver", icon: { svg: "drill" },
              exEs: "En la obra le dicen nomás 'the impact'.", exEn: "Hand me the impact and a quarter-inch nut driver." },

            { es: "la sierra sable", en: "reciprocating saw / Sawzall", pron: "re-SÍ-pro-kei-ting SO / SÓ-sol", icon: { svg: "recipSaw" },
              exEs: "Nadie dice 'reciprocating saw': todos dicen 'Sawzall'.", exEn: "Grab the Sawzall and a metal blade." },

            { es: "la broca", en: "drill bit", pron: "DRIL BIT", icon: { svg: "drillBit" },
              exEs: "Para madera con punta: 'spade bit'. Para concreto: 'masonry bit'.", exEn: "I need a 7/8 spade bit for the studs." },

            { es: "la sierra copa", en: "hole saw", pron: "JÓUL SO", icon: { emoji: "⭕" },
              exEs: "Para hacer los agujeros de las cajas y los tubos.", exEn: "What size hole saw do you need? — Two and a half inch." },

            /* ---- Medición y prueba ---- */
            { es: "el amperímetro de gancho", en: "clamp meter", pron: "KLAMP MÍ-ter", icon: { svg: "clampMeter" },
              exEs: "El tuyo es Fluke: 'my Fluke' se entiende igual.", exEn: "Let me check the amps with my clamp meter." },

            { es: "el probador de voltaje sin contacto", en: "non-contact voltage tester", pron: "non-KON-takt VÓL-tich TES-ter", icon: { svg: "voltTester" },
              exEs: "En la obra: 'tick tracer' (tik TRÉI-ser) o 'my tester'.", exEn: "Hit it with the tick tracer before you touch it." },

            { es: "el trazador de circuitos", en: "circuit tracer", pron: "SÉR-kit TRÉI-ser", icon: { svg: "troubleshoot" },
              exEs: "El tuyo es el Klein ET450. Sirve para saber qué breaker es cuál.", exEn: "I'll find the breaker with the circuit tracer." },

            { es: "la cinta métrica", en: "tape measure", pron: "TEIP MÉ-shur", icon: { svg: "tapeMeasure" },
              exEs: "También le dicen 'my tape'. La tuya es de 25 pies.", exEn: "Let me borrow your tape for a second." },

            { es: "el nivel de torpedo", en: "torpedo level", pron: "tor-PÍ-dou LÉ-vol", icon: { svg: "level" },
              exEs: "El chiquito con imán que cabe en el cinturón.", exEn: "Check it with the torpedo level before you screw it down." },

            { es: "la escuadra", en: "speed square", pron: "SPID SKUÉR", icon: { svg: "blueprint" },
              exEs: "Para marcar cortes a escuadra y a 45 grados.", exEn: "Mark it with the speed square." },

            /* ---- Herramientas de mano ---- */
            { es: "las pinzas de electricista", en: "lineman's pliers / Kleins", pron: "LÁIN-mans PLÁI-ers / KLAINS", icon: { svg: "pliers" },
              exEs: "Se piden como 'Kleins' aunque no sean de esa marca.", exEn: "Hand me your Kleins." },

            { es: "el pelacables", en: "wire strippers", pron: "UÁ-yer STRÍ-pers", icon: { svg: "stripper" },
              exEs: "Los tuyos amarillos. También: 'strippers' a secas.", exEn: "Pass me the strippers." },

            { es: "las pinzas de extensión", en: "pump pliers / Channellocks", pron: "POMP PLÁI-ers / CHÁ-nel-loks", icon: { svg: "pliers" },
              exEs: "Todos dicen 'Channellocks' por la marca.", exEn: "Grab the Channellocks for that coupling." },

            { es: "el juego de dados", en: "socket set", pron: "SÓ-ket SET", icon: { emoji: "🔩" },
              exEs: "Los largos son 'deep sockets'; los cortos, 'shallow' o 'standard sockets'.", exEn: "Do you have a deep socket in three-eighths?" },

            { es: "el dado de tuerca (mango)", en: "nut driver", pron: "NOT DRÁI-ver", icon: { svg: "screwdriverFlat" },
              exEs: "Los de 1/4, 5/16 y 3/8 son los del strut y las cajas.", exEn: "Hand me the quarter-inch nut driver." },

            { es: "el torquímetro", en: "torque wrench", pron: "TORK RENCH", icon: { emoji: "🔧" },
              exEs: "El de matraca, para zapatas y tornillos grandes.", exEn: "Torque it to spec with the torque wrench.",
              nec: "NEC 110.14(D): las terminaciones se aprietan al torque del fabricante, con herramienta calibrada." },

            { es: "el destornillador de torque", en: "torque screwdriver", pron: "TORK SKRÚ-drai-ver", icon: { svg: "screwdriverFlat" },
              exEs: "El de mano, para dispositivos y breakers chicos (10–50 in-lb).", exEn: "Use the torque screwdriver on the devices, not the wrench.",
              note: "El tuyo se desliza al llegar al valor: por eso no puede sobre-apretar." },

            { es: "apretar al torque especificado", en: "to torque to spec", pron: "tu TORK tu SPEK", icon: { emoji: "🎯" },
              exEs: "La frase que más vas a oír al conectar equipo.", exEn: "Did you torque those lugs to spec?",
              note: "'Spec' viene de 'specification'. El valor está en la etiqueta del equipo." },

            { es: "libras-pulgada / libras-pie", en: "inch-pounds / foot-pounds", pron: "INCH-paunds / FUT-paunds", icon: { emoji: "📊" },
              exEs: "Se abrevian in-lb y ft-lb. 12 in-lb = 1 ft-lb.", exEn: "Is that fifty inch-pounds or fifty foot-pounds?",
              note: "Confundirlos es peligroso: 50 ft-lb es doce veces más que 50 in-lb. Pregunta siempre." },

            { es: "el certificado de calibración", en: "calibration certificate", pron: "ka-li-BRÉI-shon ser-TÍ-fi-ket", icon: { svg: "inspection" },
              exEs: "El papel con número de serie que prueba que tu herramienta mide bien.", exEn: "Is your torque wrench calibrated? — Yes, here's the certificate.",
              note: "En comisionamiento de data center te lo pueden pedir. Guárdalo con la herramienta." },

            { es: "recalibrar", en: "to recalibrate", pron: "tu ri-KÁ-li-breit", icon: { emoji: "🔁" },
              exEs: "Se hace una vez al año si la usas a diario.", exEn: "My torque wrench is out for recalibration this week." },

            { es: "el cuadro (del dado)", en: "drive size", pron: "DRÁIV SAIS", icon: { emoji: "⬜" },
              exEs: "El cuadradito donde se enchufa el dado: 1/4\", 3/8\" o 1/2\".", exEn: "What drive size is that socket? — Three eighths.",
              note: "OJO: el cuadro NO es el tamaño del tornillo. Son cosas distintas." },

            { es: "el dado hexagonal (punta Allen)", en: "hex bit socket", pron: "JEKS BIT SÓ-ket", icon: { svg: "allenKey" },
              exEs: "Une tu llave Allen con el torquímetro. Sin esto no torqueas zapatas.", exEn: "Hand me the five-sixteenths hex bit socket." },

            { es: "el dado largo / el dado corto", en: "deep socket / shallow socket", pron: "DIP SÓ-ket / SHÁ-lou SÓ-ket", icon: { emoji: "🔩" },
              exEs: "El largo para tornillos hundidos; el corto para espacios apretados.", exEn: "That's too deep — give me the deep socket." },

            { es: "la extensión", en: "extension bar", pron: "eks-TÉN-shon BAR", icon: { svg: "conduitEmt" },
              exEs: "La barra que aleja el torquímetro de la tapa o del equipo de al lado.", exEn: "Hand me the six-inch extension.",
              note: "Una extensión RECTA no cambia el torque. Las acodadas y las juntas universales sí: no las uses para el apriete final." },

            { es: "el adaptador / el reductor", en: "adapter / reducer", pron: "a-DÁP-ter / ri-DIÚ-ser", icon: { svg: "coupling" },
              exEs: "Conecta un cuadro con otro, por ejemplo 1/4\" con 3/8\".", exEn: "I need an adapter to run a three-eighths socket on this wrench.",
              note: "Respeta el límite del cuadro más chico de la cadena, o lo truenas." },

            { es: "las llaves Allen", en: "Allen wrenches / hex keys", pron: "Á-len RÉN-ches / JEKS KIS", icon: { svg: "allenKey" },
              exEs: "Las tuyas de mariposa dan mejor apriete en las zapatas.", exEn: "The lugs take a hex key." },

            { es: "la navaja", en: "utility knife", pron: "iu-TÍ-li-ti NAIF", icon: { svg: "utilityKnife" },
              exEs: "También 'box cutter'. Cambia la hoja seguido: filosa corta mejor y es más segura.", exEn: "Anybody got a fresh blade for my utility knife?" },

            { es: "el martillo", en: "hammer", pron: "JÁ-mer", icon: { emoji: "🔨" },
              exEs: "Para grapas, taquetes y ajustar cajas.", exEn: "Pass me the hammer." },

            { es: "la cinta de aislar", en: "electrical tape", pron: "e-LÉK-tri-kal TEIP", icon: { svg: "tape" },
              exEs: "Los colores sirven para marcar fases: 'phase tape'.", exEn: "Wrap it with a couple turns of electrical tape." },

            { es: "el marcador / el lápiz de carpintero", en: "marker / carpenter pencil", pron: "MÁR-ker / KÁR-pen-ter PÉN-sol", icon: { emoji: "✏️" },
              exEs: "Para marcar alturas y cortes en el muro.", exEn: "Mark your layout with the marker." },

            /* ---- Doblado y jalado ---- */
            { es: "la dobladora de mano", en: "hand bender", pron: "JAND BÉN-der", icon: { svg: "bender" },
              exEs: "La tuya azul, para EMT. Las grandes son de la compañía.", exEn: "What size is your hand bender? — Three quarter." },

            { es: "la guía / pescador", en: "fish tape", pron: "FISH TEIP", icon: { svg: "fishTape" },
              exEs: "El carrete azul. 'Fish it through' = pásalo por el tubo.", exEn: "Run the fish tape through and I'll tie on." },

            /* ---- EPP ---- */
            { es: "el casco", en: "hard hat", pron: "JARD JAT", icon: { svg: "hardHat" },
              exEs: "El tuyo blanco con tu nombre. En obra el color a veces marca el oficio.", exEn: "You can't be on site without a hard hat." },

            { es: "la lámpara de casco", en: "headlamp", pron: "JED-lamp", icon: { svg: "flashlight" },
              exEs: "Clave en turno nocturno. Lleva pilas de repuesto.", exEn: "My headlamp died. Do you have extra batteries?" },

            { es: "los lentes de seguridad", en: "safety glasses", pron: "SÉIF-ti GLÁ-ses", icon: { svg: "safetyGlasses" },
              exEs: "Ten dos pares: claros para la noche, oscuros para el día.", exEn: "Put your safety glasses on before you drill." },

            { es: "las rodilleras", en: "knee pads", pron: "NI PADS", icon: { emoji: "🦵" },
              exEs: "Tus rodillas te lo van a agradecer en diez años.", exEn: "Grab your knee pads, we're working on the floor all day." },

            { es: "la camisa resistente al fuego", en: "FR shirt / arc-rated shirt", pron: "ef-AR SHERT / ARK-rei-ted SHERT", icon: { svg: "vest" },
              exEs: "FR = Flame Resistant. AR = Arc Rated, la que de verdad protege del arco.", exEn: "Do we need FR on this job? — Yes, Cat 2 minimum.",
              note: "Busca en la etiqueta 'Arc Rated', el valor ATPV en cal/cm² y la norma ASTM F1506. Si solo dice 'reflective', NO protege." }
          ]
        },

        {
          id: "jm5",
          title: "Materiales de data center",
          en: "Data Center Materials",
          icon: "🏢",
          desc: "El vocabulario que te va a caer encima el primer día en un data center: los espacios, el equipo de potencia, la infraestructura de soporte y el proceso de comisionamiento.",
          tip: "Un data center es obra eléctrica normal, pero en grande y con nombres propios. Domina estas palabras y dejas de ser el nuevo en dos días. Casi todo se dice en siglas: pregunta sin pena qué significan, hasta los americanos lo hacen.",
          items: [

            /* ---- Los espacios ---- */
            { es: "la sala de servidores", en: "data hall", pron: "DÉI-ta JOL", icon: { emoji: "🏢" },
              exEs: "El corazón del edificio: donde viven los racks de servidores.", exEn: "We're pulling whips in data hall two today." },

            { es: "el área blanca (de servidores)", en: "white space", pron: "UÁIT SPÉIS", icon: { emoji: "⬜" },
              exEs: "El área de los servidores; la de equipo de apoyo es 'gray space'.", exEn: "White space is finished; we're moving to gray space.",
              note: "'White space' = donde está el cliente y sus racks. 'Gray space' = generadores, UPS, chillers." },

            { es: "el cuarto eléctrico", en: "electrical room", pron: "e-LÉK-tri-kal RUM", icon: { svg: "panel" },
              exEs: "Donde están los tableros, PDUs y UPS.", exEn: "The gear is in the electrical room on level two." },

            { es: "el pasillo caliente / pasillo frío", en: "hot aisle / cold aisle", pron: "JOT ÁI-sol / KÓULD ÁI-sol", icon: { emoji: "🌡️" },
              exEs: "Los racks se acomodan para que el aire frío entre por un lado y el caliente salga por otro.", exEn: "Run the conduit above the cold aisle, not through the containment." },

            { es: "el piso falso / piso técnico", en: "raised floor", pron: "RÉISD FLOR", icon: { emoji: "🔲" },
              exEs: "Piso elevado con losetas removibles; por debajo van cables y aire.", exEn: "The feeders run under the raised floor.",
              note: "La ventosa para levantar losetas se llama 'floor tile lifter'." },

            { es: "el rack / gabinete", en: "rack / cabinet", pron: "RAK / KÁ-bi-net", icon: { svg: "panel" },
              exEs: "El mueble metálico donde se montan los servidores.", exEn: "Each rack gets two whips, A side and B side." },

            /* ---- Equipo de potencia ---- */
            { es: "el tablero principal / la gear", en: "switchgear / gear", pron: "SUICH-guir / GUIR", icon: { svg: "panel" },
              exEs: "El equipo grande de distribución. En obra nomás dicen 'the gear'.", exEn: "The gear lands Monday; we need the pad ready.",
              note: "'Heavy gear' es lo que decía tu currículo: equipo de gran capacidad." },

            { es: "el ducto de barras", en: "busway / bus duct", pron: "BÓS-uei / BOS DOKT", icon: { svg: "conduitEmt" },
              exEs: "Canal metálico con barras de cobre que reparte energía a lo largo del techo.", exEn: "We're hanging busway all week." },

            { es: "la toma del ducto de barras", en: "bus plug / tap box", pron: "BOS PLOG / TAP BOKS", icon: { svg: "connector" },
              exEs: "El módulo que se cuelga del busway para sacar un circuito.", exEn: "Install a 100-amp bus plug at column line D." },

            { es: "la unidad de distribución (PDU)", en: "PDU (power distribution unit)", pron: "pi-di-IÚ", icon: { svg: "panel" },
              exEs: "Toma la energía grande y la reparte a los racks. Ya las instalaste en Phoenix.", exEn: "How many PDUs on this floor? — Twelve." },

            { es: "el panel remoto de potencia (RPP)", en: "RPP (remote power panel)", pron: "ar-pi-PÍ", icon: { svg: "panel" },
              exEs: "Panel que alimenta racks desde más cerca que el PDU.", exEn: "The RPPs feed the racks in row twelve." },

            { es: "el sistema ininterrumpido (UPS)", en: "UPS (uninterruptible power supply)", pron: "iu-pi-ÉS", icon: { emoji: "🔋" },
              exEs: "Sostiene la energía los segundos que tarda en arrancar el generador.", exEn: "Don't touch that: the UPS is live even with the main off.",
              note: "OJO: un UPS tiene baterías. Sigue energizado aunque bajes el interruptor principal." },

            { es: "el banco de baterías", en: "battery bank", pron: "BÁ-te-ri BANK", icon: { emoji: "🔋" },
              exEs: "El cuarto de baterías del UPS. Siempre está vivo.", exEn: "The battery room is always energized. Treat it as live." },

            { es: "el interruptor de transferencia automática (ATS)", en: "ATS (automatic transfer switch)", pron: "ei-ti-ÉS", icon: { svg: "switch" },
              exEs: "Cambia solo de la calle al generador cuando se va la luz.", exEn: "The ATS transfers to generator in ten seconds." },

            { es: "el generador", en: "generator / genset", pron: "CHÉ-ne-rei-tor / CHÉN-set", icon: { emoji: "⛽" },
              exEs: "Los data centers tienen varios, enormes, y se prueban seguido.", exEn: "Generator testing is Saturday night." },

            { es: "el transformador", en: "transformer", pron: "trans-FÓR-mer", icon: { svg: "transformer" },
              exEs: "Baja el voltaje de media tensión al que usan los equipos.", exEn: "The transformer steps 480 down to 208." },

            /* ---- Cableado ---- */
            { es: "el latiguillo (al rack)", en: "whip", pron: "UÍP", icon: { svg: "extensionCord" },
              exEs: "El flexible con conector que va del RPP al rack. Se instalan por cientos.", exEn: "We pulled sixty whips today.",
              note: "Es de las palabras que más vas a oír. 'Whip' literalmente es látigo." },

            { es: "el alimentador", en: "feeder", pron: "FÍ-der", icon: { svg: "wireSpool" },
              exEs: "El cable grueso que alimenta un tablero o PDU.", exEn: "The feeders are 500 MCM, four per phase." },

            { es: "el cable de media tensión", en: "MV cable / medium voltage", pron: "em-VÍ KÉI-bol / MÍ-diom VÓL-tich", icon: { svg: "singleWire" },
              exEs: "De 15 kV y 35 kV: es lo que pedía la vacante con certificación 3M.", exEn: "Who's certified for the 15kV terminations?",
              note: "Las terminaciones de media tensión requieren certificación. Por eso daban prioridad a quien la tuviera." },

            { es: "el kit de terminación", en: "termination kit", pron: "ter-mi-NÉI-shon KIT", icon: { svg: "connector" },
              exEs: "Los de 3M son el estándar para media tensión.", exEn: "Open a 3M termination kit for that run." },

            { es: "la zapata / terminal", en: "lug", pron: "LOG", icon: { svg: "allenKey" },
              exEs: "Donde se atornilla el cable grueso. Todas se torquean.", exEn: "Torque the lugs and mark them.",
              nec: "NEC 110.14(D): apriete al torque del fabricante, con herramienta calibrada." },

            { es: "la cuerda de jalado", en: "mule tape / pull rope", pron: "MIÚL TEIP / PUL ROUP", icon: { svg: "fishTape" },
              exEs: "Cinta plana muy resistente para jalar cables pesados.", exEn: "Send the mule tape through, we'll pull in the morning." },

            /* ---- Soporte ---- */
            { es: "la charola portacables", en: "cable tray", pron: "KÉI-bol TREI", icon: { svg: "strap" },
              exEs: "Kilómetros de esto en un data center. Ya lo trabajaste.", exEn: "Cable tray goes at eleven feet to the bottom." },

            { es: "la escalerilla portacables", en: "ladder rack", pron: "LÁ-der RAK", icon: { svg: "ladder" },
              exEs: "Charola tipo escalera, común arriba de los racks.", exEn: "Ladder rack ties into the cabinet tops." },

            { es: "el riel de soporte (Unistrut)", en: "strut / Unistrut", pron: "STROT / IÚ-ni-strot", icon: { svg: "strap" },
              exEs: "El canal metálico perforado con el que se cuelga todo.", exEn: "Cut me four pieces of strut, forty-two inches." },

            { es: "la varilla roscada", en: "all-thread / threaded rod", pron: "OL-zred / ZRÉ-ded ROD", icon: { svg: "screws" },
              exEs: "De ahí cuelga la charola y el tubo desde la losa.", exEn: "Drop all-thread every eight feet." },

            { es: "el sello cortafuego", en: "firestop / fire caulk", pron: "FÁIR-stop / FÁIR KOK", icon: { emoji: "🧯" },
              exEs: "Se sella cada penetración de muro o losa. El inspector lo revisa siempre.", exEn: "Firestop every penetration before they close the wall.",
              nec: "NEC 300.21: las aberturas deben sellarse para no propagar el fuego." },

            /* ---- El proceso ---- */
            { es: "el comisionamiento", en: "commissioning", pron: "ko-MÍ-sio-ning", icon: { svg: "inspection" },
              exEs: "Las pruebas por etapas antes de entregar. En data center es larguísimo y muy estricto.", exEn: "We start commissioning next month.",
              note: "Va por niveles: L1 fábrica, L2 en sitio sin energía, L3 arranque, L4 sistemas, L5 integrado. Por eso a veces oyes 'Level 2.2'." },

            { es: "el procedimiento de trabajo (MOP)", en: "MOP (method of procedure)", pron: "MOP", icon: { svg: "materialsList" },
              exEs: "Documento paso a paso, aprobado y firmado, para trabajar en sistemas vivos.", exEn: "No work on that gear without an approved MOP.",
              note: "En data center NO se improvisa: sin MOP firmado, no se toca nada energizado." },

            { es: "el paro de emergencia (EPO)", en: "EPO (emergency power off)", pron: "i-pi-ÓU", icon: { emoji: "🛑" },
              exEs: "El botón que corta TODO el data hall. Nunca lo toques ni te recargues cerca.", exEn: "Careful with that wall — that's the EPO button.",
              note: "Apretarlo por accidente tira el data center completo. Es de las peores cosas que puedes hacer." },

            { es: "la marca de torque", en: "torque stripe", pron: "TORK STRÁIP", icon: { emoji: "🖍️" },
              exEs: "La rayita de pintura que se pone tras apretar, para probar que ya se torqueó.", exEn: "Torque it and put a stripe on every lug." },

            { es: "la energización", en: "energization", pron: "e-ner-chai-SÉI-shon", icon: { emoji: "⚡" },
              exEs: "El día que se le da corriente al equipo. Se planea con semanas.", exEn: "Energization is scheduled for the fifteenth." },

            { es: "la redundancia (N+1, 2N)", en: "redundancy (N+1, 2N)", pron: "ri-DÓN-dan-si", icon: { svg: "circuit" },
              exEs: "Por qué todo está doble: si un lado falla, el otro sostiene. De ahí 'A side' y 'B side'.", exEn: "Every rack has A side and B side power. Never work both at once.",
              note: "Regla de oro del data center: nunca dejes sin energía los dos lados al mismo tiempo." }
          ]
        }
      ]
    },

    /* ================================================================
       NIVEL 1 — AYUDANTE (HELPER)
       ================================================================ */
    {
      id: "n1",
      num: 1,
      title: "Ayudante",
      en: "Helper",
      icon: { svg: "helper" },
      color: "amber",
      desc: "Tu primer día en la obra: herramientas de mano, equipo de seguridad, materiales básicos y las frases esenciales para entender y que te entiendan.",
      modules: [

        {
          id: "n1m1",
          title: "Herramientas de mano",
          en: "Hand Tools",
          icon: "🧰",
          desc: "Las herramientas que llevarás en tu cinturón todos los días. Si el mecánico te las pide, tienes que reconocerlas al instante.",
          tip: "Técnica de estudio: mira la imagen, escucha el audio en inglés 3 veces y repítelo en voz alta. Luego tapa el inglés y tradúcelo tú mismo.",
          items: [
            { es: "las pinzas / pinzas de electricista", en: "pliers / lineman's pliers", pron: "PLÁI-ers / LÁIN-mans PLÁI-ers", icon: { svg: "pliers" },
              exEs: "Pásame las pinzas, por favor.", exEn: "Hand me the pliers, please.",
              note: "En obra casi siempre se piden como 'linemans' o 'Kleins' (por la marca Klein)." },
            { es: "las pinzas de corte diagonal", en: "diagonal cutters / dikes", pron: "dai-Á-go-nal KÓ-ters / DÁIKS", icon: { svg: "cutters" },
              exEs: "Corta ese alambre con las pinzas de corte.", exEn: "Cut that wire with the dikes.",
              note: "'Dikes' es la palabra de obra. Suena rudo, pero es totalmente normal." },
            { es: "el pelacables", en: "wire strippers", pron: "UÁ-yer STRÍ-pers", icon: { svg: "stripper" },
              exEs: "Pela el cable con el pelacables, no con la navaja.", exEn: "Strip the wire with the wire strippers, not with the knife." },
            { es: "el desarmador plano", en: "flathead screwdriver", pron: "FLAT-jed SKRÚ-drai-ver", icon: { svg: "screwdriverFlat" },
              exEs: "Necesito un desarmador plano para esta terminal.", exEn: "I need a flathead screwdriver for this terminal." },
            { es: "el desarmador de cruz", en: "Phillips screwdriver", pron: "FÍ-lips SKRÚ-drai-ver", icon: { svg: "screwdriverPhillips" },
              exEs: "Aprieta el tornillo con el desarmador de cruz.", exEn: "Tighten the screw with the Phillips screwdriver." },
            { es: "el martillo", en: "hammer", pron: "JÁ-mer", icon: { emoji: "🔨" },
              exEs: "Clava la grapa con el martillo.", exEn: "Drive the staple with the hammer." },
            { es: "la cinta métrica", en: "tape measure", pron: "TEIP MÉ-shur", icon: { svg: "tapeMeasure" },
              exEs: "Mide 48 pulgadas con la cinta métrica.", exEn: "Measure 48 inches with the tape measure.",
              note: "En EE.UU. se mide en pies (feet) y pulgadas (inches). 1 foot = 12 inches." },
            { es: "el nivel", en: "level", pron: "LÉ-vol", icon: { svg: "level" },
              exEs: "Revisa la caja con el nivel antes de fijarla.", exEn: "Check the box with the level before you fasten it." },
            { es: "la navaja / cúter", en: "utility knife", pron: "iu-TÍ-li-ti NAIF", icon: { svg: "utilityKnife" },
              exEs: "Abre la caja de material con la navaja.", exEn: "Open the box of material with the utility knife." },
            { es: "la llave ajustable / perica", en: "adjustable wrench", pron: "a-CHÓS-ta-bol RENCH", icon: { emoji: "🔧" },
              exEs: "Aprieta el conector con la llave ajustable.", exEn: "Tighten the connector with the adjustable wrench.",
              note: "También se le dice 'Crescent wrench' (por la marca Crescent)." },
            { es: "la llave Allen", en: "Allen wrench / hex key", pron: "Á-len RENCH / JEKS KI", icon: { svg: "allenKey" },
              exEs: "Los bornes del panel llevan llave Allen.", exEn: "The panel lugs take an Allen wrench." },
            { es: "la segueta / arco con segueta", en: "hacksaw", pron: "JÁK-so", icon: { svg: "hacksaw" },
              exEs: "Corta el tubo con la segueta.", exEn: "Cut the conduit with the hacksaw." },
            { es: "la linterna", en: "flashlight", pron: "FLÁSH-lait", icon: { svg: "flashlight" },
              exEs: "Alúmbrame aquí con la linterna.", exEn: "Shine the flashlight over here for me." },
            { es: "el cinturón portaherramientas", en: "tool belt / tool pouch", pron: "TUL BELT / TUL PAUCH", icon: { svg: "toolPouch" },
              exEs: "Trae siempre tu cinturón con tus herramientas.", exEn: "Always bring your tool belt with your tools." }
          ]
        },

        {
          id: "n1m2",
          title: "Seguridad y equipo de protección",
          en: "Safety & PPE",
          icon: "🦺",
          desc: "PPE = Personal Protective Equipment (equipo de protección personal). Sin esto no entras a la obra. La seguridad es lo primero que te van a exigir en inglés.",
          tip: "OSHA es la agencia de seguridad laboral de EE.UU. En la obra escucharás mucho: 'OSHA requires...' (OSHA exige...).",
          necNote: "El NEC (NFPA 70) cubre la instalación; la seguridad del trabajador la cubren OSHA 29 CFR 1926 (construcción) y la NFPA 70E (seguridad eléctrica en el trabajo).",
          items: [
            { es: "el casco", en: "hard hat", pron: "JARD JAT", icon: { svg: "hardHat" },
              exEs: "Ponte el casco antes de entrar a la obra.", exEn: "Put on your hard hat before entering the jobsite." },
            { es: "los lentes de seguridad", en: "safety glasses", pron: "SÉIF-ti GLÁ-ses", icon: { svg: "safetyGlasses" },
              exEs: "Usa lentes de seguridad cuando taladres.", exEn: "Wear safety glasses when you drill." },
            { es: "los guantes", en: "gloves", pron: "GLAVS", icon: { svg: "gloves" },
              exEs: "Ponte los guantes para jalar cable.", exEn: "Put on your gloves to pull wire." },
            { es: "las botas con casquillo", en: "steel-toe boots", pron: "STIL-tou BUTS", icon: { svg: "boots" },
              exEs: "Se requieren botas con casquillo en la obra.", exEn: "Steel-toe boots are required on the jobsite." },
            { es: "el chaleco reflejante", en: "safety vest", pron: "SÉIF-ti VEST", icon: { svg: "vest" },
              exEs: "El chaleco reflejante es obligatorio.", exEn: "The safety vest is mandatory.",
              note: "También: 'high-visibility vest' o 'hi-vis' (jai-VIS)." },
            { es: "los tapones de oídos", en: "earplugs", pron: "ÍR-plogs", icon: { svg: "earMuffs" },
              exEs: "Usa tapones de oídos cerca del martillo neumático.", exEn: "Wear earplugs near the jackhammer." },
            { es: "la mascarilla contra polvo", en: "dust mask", pron: "DOST MASK", icon: { svg: "respirator" },
              exEs: "Ponte la mascarilla para cortar concreto.", exEn: "Put on a dust mask to cut concrete." },
            { es: "el arnés", en: "harness", pron: "JÁR-nes", icon: { svg: "harness" },
              exEs: "Arriba de 6 pies necesitas arnés.", exEn: "Above 6 feet you need a harness.",
              note: "Protección contra caídas = 'fall protection' (fol pro-TEK-shon)." },
            { es: "la escalera", en: "ladder", pron: "LÁ-der", icon: { svg: "ladder" },
              exEs: "Sujeta la escalera mientras subo.", exEn: "Hold the ladder while I climb.",
              note: "Para trabajo eléctrico usa escalera de fibra de vidrio: 'fiberglass ladder' — nunca de aluminio cerca de líneas vivas." },
            { es: "el candado de bloqueo (bloqueo y etiquetado)", en: "lockout/tagout (LOTO)", pron: "LÓK-aut TÁG-aut (LÓU-tou)", icon: { svg: "lockout" },
              exEs: "Pon tu candado en el breaker antes de trabajar.", exEn: "Put your lock on the breaker before you work.",
              note: "LOTO: bloquear y etiquetar la energía para que nadie la reconecte mientras trabajas." },
            { es: "el botiquín de primeros auxilios", en: "first aid kit", pron: "ferst EID KIT", icon: { svg: "firstAid" },
              exEs: "El botiquín está en la oficina de la obra.", exEn: "The first aid kit is in the jobsite office." },
            { es: "¡peligro! / ¡cuidado!", en: "danger! / watch out!", pron: "DÉIN-cher / uoch ÁUT", icon: { emoji: "⚠️" },
              exEs: "¡Cuidado! Cable vivo.", exEn: "Watch out! Live wire.",
              note: "'Heads up!' (jeds op) = ¡aguas! / ¡ahí te va! Se usa muchísimo." }
          ]
        },

        {
          id: "n1m3",
          title: "Conductores y cables",
          en: "Conductors & Wire",
          icon: "🔌",
          desc: "El material con el que trabajarás toda tu carrera. Aprende los nombres del NEC y también cómo se piden en la obra.",
          necNote: "NEC Art. 310: conductores. Tabla 310.16: ampacidad. Regla práctica con 240.4(D): 14 AWG → 15 A, 12 AWG → 20 A, 10 AWG → 30 A. Colores según 200.6 y 250.119: blanco/gris = neutro, verde o desnudo = tierra.",
          items: [
            { es: "el alambre / cable", en: "wire", pron: "UÁ-yer", icon: { svg: "singleWire" },
              exEs: "Necesito más alambre para este circuito.", exEn: "I need more wire for this circuit." },
            { es: "el conductor", en: "conductor", pron: "kon-DÓK-tor", icon: { svg: "singleWire" },
              exEs: "Este tubo lleva cuatro conductores.", exEn: "This conduit carries four conductors.",
              nec: "NEC Art. 100: el término técnico del código es 'conductor', no 'wire'." },
            { es: "el calibre", en: "gauge (AWG)", pron: "GUEICH (ei-do-bol-iu-CHÍ)", icon: { svg: "ampacity" },
              exEs: "¿Qué calibre lleva? — Calibre 12.", exEn: "What gauge does it take? — 12 gauge.",
              note: "AWG = American Wire Gauge. Número más chico = cable más grueso.",
              nec: "NEC Tabla 310.16: la ampacidad depende del calibre." },
            { es: "el cobre", en: "copper", pron: "KÓ-per", icon: { emoji: "🟠" },
              exEs: "Aquí todo el cableado es de cobre.", exEn: "All the wiring here is copper." },
            { es: "el aluminio", en: "aluminum", pron: "a-LÚ-mi-nom", icon: { emoji: "⚪" },
              exEs: "La acometida es de aluminio.", exEn: "The service entrance is aluminum." },
            { es: "el aislamiento / forro", en: "insulation / jacket", pron: "in-su-LÉI-shon / CHÁ-ket", icon: { svg: "romex" },
              exEs: "No dañes el forro del cable al engraparlo.", exEn: "Don't damage the cable jacket when you staple it." },
            { es: "el cable Romex (cable NM)", en: "Romex / NM cable", pron: "RÓU-meks / en-em KÉI-bol", icon: { svg: "romex" },
              exEs: "Tráeme un rollo de Romex 12-2.", exEn: "Bring me a roll of 12-2 Romex.",
              note: "Se pide por calibre-conductores: '12-2' se dice 'twelve-two' (tuelv-tu).",
              nec: "NEC Art. 334: cable NM (no metálico). Común en casas." },
            { es: "el alambre THHN", en: "THHN wire", pron: "ti-eich-eich-ÉN UÁ-yer", icon: { svg: "wireSpool" },
              exEs: "Jala THHN calibre 12 negro por ese tubo.", exEn: "Pull 12 gauge black THHN through that conduit.",
              nec: "THHN: aislamiento termoplástico resistente al calor. Es el alambre estándar dentro de conduit (NEC Tabla 310.4)." },
            { es: "el cable vivo / la fase", en: "hot wire", pron: "JOT UÁ-yer", icon: { emoji: "⚡" },
              exEs: "El cable negro es el vivo.", exEn: "The black wire is the hot.",
              nec: "Colores comunes de fase: negro y rojo. El código NO permite blanco, gris ni verde como fase (200.7)." },
            { es: "el neutro", en: "neutral", pron: "NÚ-tral", icon: { emoji: "⚪" },
              exEs: "Conecta el neutro a la barra del panel.", exEn: "Connect the neutral to the panel bar.",
              nec: "NEC 200.6: el neutro se identifica con blanco o gris." },
            { es: "la tierra (física)", en: "ground", pron: "GRAUND", icon: { svg: "groundWire" },
              exEs: "No olvides conectar la tierra a la caja.", exEn: "Don't forget to connect the ground to the box.",
              nec: "NEC Art. 250: puesta a tierra. Verde o desnudo (250.119)." },
            { es: "la extensión", en: "extension cord", pron: "eks-TÉN-shon KORD", icon: { svg: "extensionCord" },
              exEs: "Conecta la extensión al generador.", exEn: "Plug the extension cord into the generator.",
              nec: "NEC Art. 590: instalaciones temporales; en obra las extensiones deben protegerse con GFCI." }
          ]
        },

        {
          id: "n1m4",
          title: "Cajas, conectores y fijación",
          en: "Boxes, Fittings & Fasteners",
          icon: "📦",
          desc: "Todo lo que sujeta, une y encierra los cables. Estos son los materiales que más vas a acarrear como ayudante.",
          necNote: "NEC Art. 314: cajas. 314.16: llenado de caja (box fill) — cuántos conductores caben. 300.14: deja mínimo 6 pulgadas de conductor libre en cada caja.",
          items: [
            { es: "la caja eléctrica / chalupa", en: "electrical box / outlet box", pron: "e-LÉK-tri-kal BOKS", icon: { svg: "junctionBox" },
              exEs: "Fija la caja a 12 pulgadas del piso.", exEn: "Mount the box 12 inches off the floor.",
              note: "La 'chalupa' (caja de un dispositivo) = 'single-gang box' (SÍN-gol gang boks)." },
            { es: "la caja de registro / de paso", en: "junction box", pron: "CHÓNK-shon BOKS", icon: { svg: "junctionBox" },
              exEs: "Deja accesible la caja de registro.", exEn: "Keep the junction box accessible.",
              nec: "NEC 314.29: las cajas de registro deben quedar accesibles, nunca tapadas por el acabado." },
            { es: "la tapa / placa", en: "cover plate", pron: "KÓ-ver PLEIT", icon: { svg: "coverPlate" },
              exEs: "Ponle tapa a todas las cajas.", exEn: "Put a cover plate on all the boxes." },
            { es: "el capuchón / tuerca para cable", en: "wire nut", pron: "UÁ-yer NOT", icon: { svg: "wireNut" },
              exEs: "Une los cables con un capuchón amarillo.", exEn: "Join the wires with a yellow wire nut.",
              note: "También 'wire connector'. Los colores indican el rango de calibres." },
            { es: "el conector (de tubo o cable)", en: "connector", pron: "ko-NÉK-tor", icon: { svg: "connector" },
              exEs: "Ponle conector al Romex donde entra a la caja.", exEn: "Put a connector on the Romex where it enters the box.",
              nec: "NEC 300.4 y 314.17: el cable debe entrar a la caja asegurado con conector." },
            { es: "el cople", en: "coupling", pron: "KÓ-pling", icon: { svg: "coupling" },
              exEs: "Une los dos tubos con un cople.", exEn: "Join the two conduits with a coupling." },
            { es: "la abrazadera / omega", en: "strap", pron: "STRAP", icon: { svg: "strap" },
              exEs: "Sujeta el tubo con abrazaderas cada 10 pies.", exEn: "Support the conduit with straps every 10 feet.",
              nec: "NEC 358.30: el EMT se sujeta cada 10 pies y a 3 pies de cada caja." },
            { es: "la grapa (para cable)", en: "staple", pron: "STÉI-pol", icon: { svg: "strap" },
              exEs: "Engrapa el Romex cada 4½ pies.", exEn: "Staple the Romex every 4½ feet.",
              nec: "NEC 334.30: cable NM asegurado cada 4½ pies y a 12 pulgadas de cada caja." },
            { es: "el tornillo", en: "screw", pron: "SKRU", icon: { svg: "screws" },
              exEs: "Faltan tornillos para las tapas.", exEn: "We're missing screws for the cover plates." },
            { es: "el taquete / ancla", en: "anchor", pron: "ÁN-kor", icon: { svg: "anchor" },
              exEs: "Usa taquetes para fijar la caja al muro de concreto.", exEn: "Use anchors to mount the box to the concrete wall." },
            { es: "la cinta de aislar", en: "electrical tape", pron: "e-LÉK-tri-kal TEIP", icon: { svg: "tape" },
              exEs: "Encinta esa unión.", exEn: "Tape up that splice.",
              note: "'Tape it up' = encíntalo. Cinta negra = 'black tape'." },
            { es: "el empalme / la unión", en: "splice", pron: "SPLÁIS", icon: { svg: "wireNut" },
              exEs: "Todos los empalmes van dentro de una caja.", exEn: "All splices go inside a box.",
              nec: "NEC 300.15: todo empalme debe estar dentro de una caja aprobada." }
          ]
        },

        {
          id: "n1m5",
          title: "Dispositivos básicos",
          en: "Basic Devices",
          icon: "💡",
          desc: "Receptáculos, apagadores y lo que el cliente ve al final. Aquí está el vocabulario que más confusión causa — apréndelo bien desde el principio.",
          necNote: "NEC Art. 406: receptáculos. Art. 404: apagadores. 210.8: protección GFCI obligatoria en baños, cocinas, exteriores, garajes y sótanos.",
          items: [
            { es: "el receptáculo / tomacorriente / enchufe", en: "receptacle / outlet", pron: "ri-SÉP-ta-kol / ÁUT-let", icon: { svg: "receptacle" },
              exEs: "Instala un receptáculo doble junto a la puerta.", exEn: "Install a duplex receptacle next to the door.",
              nec: "NEC Art. 100 define 'receptacle'. En obra todos dicen 'outlet' o 'plug'." },
            { es: "el apagador / interruptor", en: "switch", pron: "SUICH", icon: { svg: "switch" },
              exEs: "El apagador va a 48 pulgadas del piso.", exEn: "The switch goes 48 inches off the floor." },
            { es: "el apagador de escalera (3 vías)", en: "three-way switch", pron: "ZRI-uei SUICH", icon: { svg: "switch3way" },
              exEs: "La sala lleva dos apagadores de tres vías.", exEn: "The living room takes two three-way switches.",
              note: "Controlan una luz desde dos puntos. Desde tres puntos: 'four-way' en medio." },
            { es: "el atenuador / dimmer", en: "dimmer", pron: "DÍ-mer", icon: { svg: "dimmer" },
              exEs: "El comedor lleva dimmer.", exEn: "The dining room takes a dimmer." },
            { es: "el receptáculo GFCI", en: "GFCI receptacle", pron: "chi-ef-si-ÁI ri-SÉP-ta-kol", icon: { svg: "gfci" },
              exEs: "Los baños llevan GFCI.", exEn: "Bathrooms take GFCIs.",
              nec: "GFCI = interruptor de falla a tierra. NEC 210.8 lista dónde es obligatorio: baños, cocina, exterior, garaje, sótano." },
            { es: "el foco", en: "light bulb", pron: "LAIT BOLB", icon: { svg: "bulb" },
              exEs: "Cambia el foco fundido.", exEn: "Change the burned-out light bulb." },
            { es: "la luminaria / lámpara", en: "light fixture", pron: "LAIT FÍKS-chur", icon: { svg: "lightFixture" },
              exEs: "Cuelga la luminaria en el centro del cuarto.", exEn: "Hang the light fixture in the center of the room.",
              nec: "El NEC usa el término 'luminaire' (Art. 410)." },
            { es: "el breaker / interruptor termomagnético", en: "circuit breaker", pron: "SÉR-kit BRÉI-ker", icon: { svg: "breaker" },
              exEs: "Apaga el breaker número 14.", exEn: "Turn off breaker number 14.",
              nec: "NEC Art. 240: protección contra sobrecorriente." },
            { es: "el panel / centro de carga", en: "panel / breaker box", pron: "PÁ-nel / BRÉI-ker boks", icon: { svg: "panel" },
              exEs: "Etiqueta todos los circuitos del panel.", exEn: "Label all the circuits in the panel.",
              nec: "NEC 110.26: deja espacio de trabajo libre frente al panel (36 pulg. de fondo, 30 de ancho)." },
            { es: "el medidor", en: "meter", pron: "MÍ-ter", icon: { svg: "meter" },
              exEs: "La compañía de luz instala el medidor.", exEn: "The power company installs the meter." },
            { es: "el detector de humo", en: "smoke detector", pron: "SMOUK di-TEK-tor", icon: { svg: "smokeDetector" },
              exEs: "Cada recámara lleva detector de humo.", exEn: "Each bedroom takes a smoke detector.",
              note: "Requisito de código residencial; se interconectan entre sí." },
            { es: "el timbre", en: "doorbell", pron: "DÓR-bel", icon: { emoji: "🔔" },
              exEs: "El transformador del timbre va en el clóset.", exEn: "The doorbell transformer goes in the closet." }
          ]
        },

        {
          id: "n1m6",
          title: "Frases de obra I — Pedir y entender",
          en: "Jobsite Phrases I",
          icon: "💬",
          desc: "Las frases que usarás desde el primer minuto: pedir herramientas, avisar peligro, y qué decir cuando no entiendes. Escucha el audio y repite en voz alta hasta que salga solo.",
          tip: "Regla de oro: si no entendiste, NUNCA digas 'yes'. Di: 'I don't understand. Can you show me?' (No entiendo. ¿Me puede mostrar?). Eso te hace ver profesional, no débil.",
          items: [
            { kind: "phrase", es: "Pásame las pinzas, por favor.", en: "Hand me the pliers, please.", pron: "JAND mi da PLÁI-ers, plis", icon: { emoji: "🤲" },
              exEs: "También: 'Pass me...' o 'Give me...'", exEn: "Pass me the wire strippers. / Give me the hammer." },
            { kind: "phrase", es: "Tráeme la escalera.", en: "Bring me the ladder.", pron: "BRING mi da LÁ-der", icon: { emoji: "🪜" },
              exEs: "Como ayudante, esta frase la escucharás mil veces al día.", exEn: "Bring me the drill and a 6-foot ladder." },
            { kind: "phrase", es: "Necesito más cable.", en: "I need more wire.", pron: "ai NID mor UÁ-yer", icon: { emoji: "🙋" },
              exEs: "Fórmula: I need + cosa.", exEn: "I need more wire nuts. / I need another box." },
            { kind: "phrase", es: "¿Me ayudas con esto?", en: "Can you help me with this?", pron: "ken yu JELP mi uiz DIS", icon: { emoji: "🤝" },
              exEs: "Para pedir ayuda con algo pesado o difícil.", exEn: "Can you help me with this panel? It's heavy." },
            { kind: "phrase", es: "¡Cuidado! / ¡Aguas!", en: "Watch out! / Heads up!", pron: "uoch ÁUT / jeds ÓP", icon: { emoji: "⚠️" },
              exEs: "'Heads up' se grita cuando algo cae desde arriba.", exEn: "Heads up! Material coming down!" },
            { kind: "phrase", es: "La corriente está apagada.", en: "The power is off.", pron: "da PÁU-er is OF", icon: { emoji: "🔋" },
              exEs: "Lo contrario: 'The power is on' / 'It's live' (está vivo).", exEn: "Don't touch it — it's still live!" },
            { kind: "phrase", es: "No entiendo. ¿Puede repetir?", en: "I don't understand. Can you repeat that?", pron: "ai dont on-der-STAND. ken yu ri-PÍT dat", icon: { emoji: "🙏" },
              exEs: "Frase de oro. Úsala sin pena.", exEn: "Sorry, I don't understand. Can you say it slower?" },
            { kind: "phrase", es: "¿Cómo se dice esto en inglés?", en: "How do you say this in English?", pron: "JAU du yu SEI dis in ÍN-glish", icon: { emoji: "❓" },
              exEs: "Señala el objeto y pregunta. Así aprenderás en la obra.", exEn: "How do you say this in English? — That's a coupling." },
            { kind: "phrase", es: "¿Dónde está el foreman?", en: "Where is the foreman?", pron: "juer IS da FÓR-man", icon: { emoji: "🧭" },
              exEs: "Fórmula: Where is + cosa/persona.", exEn: "Where is the material? / Where is the restroom?" },
            { kind: "phrase", es: "Ahorita voy. / Ya voy.", en: "I'm coming. / Be right there.", pron: "aim KÓ-ming / bi rait DER", icon: { emoji: "🏃" },
              exEs: "Cuando te llaman y vas en camino.", exEn: "Hey, helper! — Be right there!" },
            { kind: "phrase", es: "Ya terminé.", en: "I'm done. / I finished.", pron: "aim DON / ai FÍ-nishd", icon: { emoji: "✅" },
              exEs: "Para reportar que acabaste una tarea.", exEn: "I'm done with the boxes. What's next?" },
            { kind: "phrase", es: "¿Qué sigue?", en: "What's next?", pron: "juats NEKST", icon: { emoji: "➡️" },
              exEs: "La pregunta que más le gusta oír a un foreman.", exEn: "I finished sweeping. What's next?" },
            { kind: "phrase", es: "un pie / una pulgada", en: "a foot / an inch", pron: "a FUT / an INCH", icon: { emoji: "📏" },
              exEs: "Plural: feet (FIT) y inches (ÍN-ches). 10 pies = ten feet.", exEn: "Cut ten feet of wire. / Move it two inches to the left." },
            { kind: "phrase", es: "Dame diez pies de cable.", en: "Give me ten feet of wire.", pron: "guiv mi ten FIT of UÁ-yer", icon: { emoji: "📐" },
              exEs: "Combina números + medidas + material.", exEn: "Give me twenty feet of 12 gauge wire." }
          ]
        }
      ]
    },

    /* ================================================================
       NIVEL 2 — TOP HELPER
       ================================================================ */
    {
      id: "n2",
      num: 2,
      title: "Top Helper",
      en: "Top Helper",
      icon: { emoji: "🔧" },
      color: "sky",
      desc: "Ya conoces la obra. Ahora dominas las herramientas eléctricas, el conduit, el cableado en obra negra y reportas tu avance en inglés.",
      modules: [

        {
          id: "n2m1",
          title: "Herramientas eléctricas",
          en: "Power Tools",
          icon: "🔩",
          desc: "Power tools = herramientas con motor. Aquí también va la seguridad: nunca operes una sin conocer sus protecciones.",
          items: [
            { es: "el taladro", en: "drill", pron: "DRIL", icon: { svg: "drill" },
              exEs: "Perfora la madera con el taladro.", exEn: "Drill through the wood with the drill.",
              note: "'Drill' es herramienta y también el verbo perforar." },
            { es: "el taladro inalámbrico", en: "cordless drill", pron: "KORD-les DRIL", icon: { svg: "drill" },
              exEs: "Ponle batería al taladro inalámbrico.", exEn: "Put a battery in the cordless drill.",
              note: "Battery (BÁ-te-ri) = batería; charger (CHÁR-cher) = cargador." },
            { es: "la broca", en: "drill bit", pron: "DRIL BIT", icon: { svg: "drillBit" },
              exEs: "Necesito una broca de 7/8 para la madera.", exEn: "I need a 7/8 drill bit for the wood.",
              note: "Broca para madera con punta: 'spade bit' o 'auger bit'; para concreto: 'masonry bit'." },
            { es: "el rotomartillo", en: "hammer drill / rotary hammer", pron: "JÁ-mer DRIL / RÓU-ta-ri JÁ-mer", icon: { svg: "hammerDrill" },
              exEs: "Usa el rotomartillo para el concreto.", exEn: "Use the hammer drill for the concrete." },
            { es: "la sierra circular", en: "circular saw", pron: "SÉR-kiu-lar SO", icon: { svg: "circularSaw" },
              exEs: "Corta la tabla con la sierra circular.", exEn: "Cut the board with the circular saw.",
              note: "También le dicen 'Skilsaw' (por la marca Skil)." },
            { es: "la sierra recíproca / sable", en: "reciprocating saw / Sawzall", pron: "re-SÍ-pro-kei-ting SO / SÓ-sol", icon: { svg: "recipSaw" },
              exEs: "Abre el muro con la sierra sable.", exEn: "Open the wall with the Sawzall.",
              note: "'Sawzall' es marca de Milwaukee, pero todos la llaman así." },
            { es: "el esmeril / la pulidora", en: "grinder", pron: "GRÁIN-der", icon: { svg: "grinder" },
              exEs: "Quita la rebaba con el esmeril.", exEn: "Grind off the burr with the grinder." },
            { es: "la pistola de clavos / clavadora", en: "nail gun", pron: "NEIL GON", icon: { emoji: "🔫" },
              exEs: "Los carpinteros usan la clavadora.", exEn: "The carpenters use the nail gun." },
            { es: "el generador", en: "generator", pron: "CHÉ-ne-rei-tor", icon: { emoji: "⛽" },
              exEs: "Arranca el generador; no hay corriente todavía.", exEn: "Start the generator; there's no power yet." },
            { es: "cargar / la batería", en: "to charge / battery", pron: "tu CHARCH / BÁ-te-ri", icon: { emoji: "🔋" },
              exEs: "Pon a cargar las baterías antes de irte.", exEn: "Put the batteries on charge before you leave." },
            { es: "la ponchadora / crimpadora", en: "crimper / crimping tool", pron: "KRÍM-per", icon: { svg: "pliers" },
              exEs: "Poncha la terminal con la crimpadora.", exEn: "Crimp the lug with the crimper." },
            { es: "la pistola de calor", en: "heat gun", pron: "JIT GON", icon: { emoji: "🌡️" },
              exEs: "Encoge el termoencogible con la pistola de calor.", exEn: "Shrink the heat-shrink with the heat gun." }
          ]
        },

        {
          id: "n2m2",
          title: "Tubería (conduit) y doblado",
          en: "Conduit & Bending",
          icon: "🧲",
          desc: "El conduit es especialidad del electricista en EE.UU. Aprende los tipos, sus accesorios y los dobleces básicos.",
          necNote: "NEC Art. 358: EMT. Art. 352: PVC rígido. Art. 344: tubo rígido metálico (RMC). Art. 348: flexible (FMC). Regla clave 358.26: máximo 360° de curvas entre cajas (cuatro de 90°).",
          items: [
            { es: "la tubería / el conduit", en: "conduit", pron: "KÁN-du-it", icon: { svg: "conduitEmt" },
              exEs: "Toda la instalación va en tubería.", exEn: "The whole installation goes in conduit." },
            { es: "el tubo EMT (pared delgada)", en: "EMT (thin-wall)", pron: "i-em-TÍ (zin-uol)", icon: { svg: "conduitEmt" },
              exEs: "Corre EMT de media pulgada hasta esa caja.", exEn: "Run half-inch EMT to that box.",
              nec: "EMT = Electrical Metallic Tubing (NEC Art. 358). Medidas comunes: 1/2\", 3/4\", 1\"." },
            { es: "el tubo PVC", en: "PVC conduit", pron: "pi-vi-SÍ KÁN-du-it", icon: { svg: "conduitPvc" },
              exEs: "Bajo tierra va PVC cédula 40.", exEn: "Underground goes schedule 40 PVC.",
              nec: "NEC Art. 352. 'Schedule 40/80' (SKÉ-chul) = grosor de pared." },
            { es: "el tubo rígido", en: "rigid conduit", pron: "RÍ-chid KÁN-du-it", icon: { svg: "conduitEmt" },
              exEs: "La acometida lleva tubo rígido.", exEn: "The service takes rigid conduit.",
              nec: "RMC (NEC Art. 344): roscado, el más resistente." },
            { es: "el tubo flexible", en: "flex / flexible conduit", pron: "FLEKS", icon: { emoji: "🌀" },
              exEs: "Conecta el motor con flexible.", exEn: "Connect the motor with flex.",
              nec: "FMC (Art. 348) o LFMC 'liquidtight' (Art. 350) para intemperie." },
            { es: "la dobladora de tubo", en: "conduit bender", pron: "KÁN-du-it BÉN-der", icon: { svg: "bender" },
              exEs: "Presta la dobladora de media.", exEn: "Lend me the half-inch bender." },
            { es: "el doblez de 90 grados", en: "90-degree bend", pron: "NAIN-ti di-GRÍ BEND", icon: { svg: "bend90" },
              exEs: "Hazle un 90 al tubo para subir al techo.", exEn: "Put a 90 in the conduit to go up to the ceiling.",
              note: "El tramo vertical del 90 se llama 'stub' (stob). 'Stub up 8 inches' = súbelo 8 pulgadas." },
            { es: "el doblez de desnivel (offset)", en: "offset bend", pron: "ÓF-set BEND", icon: { svg: "bendOffset" },
              exEs: "Necesitas un offset para entrar a la caja.", exEn: "You need an offset to enter the box." },
            { es: "el doblez de silleta (saddle)", en: "saddle bend", pron: "SÁ-dol BEND", icon: { svg: "bendSaddle" },
              exEs: "Haz una silleta para brincar ese tubo.", exEn: "Make a saddle to jump over that pipe." },
            { es: "el escariador / quitar rebaba", en: "reamer / to ream", pron: "RÍ-mer / tu RIM", icon: { svg: "utilityKnife" },
              exEs: "Quita la rebaba del corte antes de meter cable.", exEn: "Ream the cut before pulling wire.",
              nec: "NEC 358.28: los extremos cortados deben escariarse para no dañar el aislamiento." },
            { es: "el niple", en: "nipple", pron: "NÍ-pol", icon: { svg: "coupling" },
              exEs: "Une los dos paneles con un niple.", exEn: "Join the two panels with a nipple.",
              note: "Tramo corto de tubo entre dos cajas o paneles." },
            { es: "el codo / la curva LB", en: "elbow / LB fitting", pron: "ÉL-bou / el-BI FÍ-ting", icon: { svg: "bend90" },
              exEs: "Ponle una LB donde el tubo atraviesa el muro.", exEn: "Put an LB where the conduit goes through the wall.",
              note: "La LB es un accesorio con tapa para jalar cable en cambios de dirección." }
          ]
        },

        {
          id: "n2m3",
          title: "Cableado y obra negra (rough-in)",
          en: "Wiring & Rough-in",
          icon: "🏗️",
          desc: "El 'rough-in' es la etapa antes de cerrar los muros: tubería, cajas y cables. Aquí es donde el helper se convierte en electricista.",
          necNote: "NEC 300.4: protege los cables que pasan por barrenos (a menos de 1¼\" del borde del madero, usa placa protectora). 300.14: deja 6 pulgadas de cola en cada caja.",
          items: [
            { es: "la obra negra (eléctrica)", en: "rough-in", pron: "ROF-in", icon: { svg: "scaffold" },
              exEs: "Empezamos el rough-in el lunes.", exEn: "We start the rough-in on Monday.",
              note: "Después viene el 'trim-out' o 'finish': instalar dispositivos y tapas." },
            { es: "jalar cable", en: "to pull wire", pron: "tu PUL UÁ-yer", icon: { svg: "fishTape" },
              exEs: "Hoy vamos a jalar cable todo el día.", exEn: "Today we're pulling wire all day." },
            { es: "la guía / pescador", en: "fish tape", pron: "FISH TEIP", icon: { svg: "fishTape" },
              exEs: "Mete la guía por el tubo.", exEn: "Push the fish tape through the conduit." },
            { es: "pescar cable (en muro cerrado)", en: "to fish wire", pron: "tu FISH UÁ-yer", icon: { svg: "fishTape" },
              exEs: "Hay que pescar el cable por el muro.", exEn: "We have to fish the wire through the wall." },
            { es: "pelar el cable", en: "to strip the wire", pron: "tu STRIP da UÁ-yer", icon: { svg: "stripper" },
              exEs: "Pela ¾ de pulgada para la terminal.", exEn: "Strip three quarters of an inch for the terminal." },
            { es: "hacer el empalme", en: "to splice / make up", pron: "tu SPLAIS / meik OP", icon: { svg: "wireNut" },
              exEs: "Haz los empalmes de esa caja.", exEn: "Make up that box.",
              note: "'Make up the box' = dejar los empalmes listos dentro de la caja." },
            { es: "el circuito", en: "circuit", pron: "SÉR-kit", icon: { svg: "circuit" },
              exEs: "¿Cuántos circuitos lleva la cocina?", exEn: "How many circuits does the kitchen take?",
              nec: "NEC 210.11: la cocina lleva mínimo dos circuitos de 20 A para electrodomésticos pequeños." },
            { es: "el circuito derivado", en: "branch circuit", pron: "BRANCH SÉR-kit", icon: { svg: "circuit" },
              exEs: "Cada recámara va en su circuito derivado.", exEn: "Each bedroom goes on its own branch circuit.",
              nec: "NEC Art. 100 y 210: del último breaker a las salidas." },
            { es: "el voltaje", en: "voltage", pron: "VÓL-tich", icon: { emoji: "⚡" },
              exEs: "¿Qué voltaje tiene esa línea? — 120.", exEn: "What's the voltage on that line? — 120.",
              note: "Residencial en EE.UU.: 120/240 V monofásico. Se dice 'one-twenty' y 'two-forty'." },
            { es: "el amperaje / la corriente", en: "amperage / current", pron: "ÁM-pe-rich / KÉ-rrent", icon: { svg: "ampacity" },
              exEs: "El circuito es de 20 amperes.", exEn: "The circuit is 20 amps.",
              note: "Amps (amps) = amperes. 'A 20-amp circuit'." },
            { es: "la salida (punto eléctrico)", en: "outlet (opening)", pron: "ÁUT-let (ÓU-pe-ning)", icon: { svg: "receptacle" },
              exEs: "Este cuarto lleva ocho salidas.", exEn: "This room takes eight openings.",
              nec: "NEC Art. 100: 'outlet' es cualquier punto donde se toma corriente (receptáculo, luz, etc.)." },
            { es: "de rasurar / empotrado vs. superficial", en: "flush vs. surface mounted", pron: "FLOSH vs SÉR-fas MÁUN-ted", icon: { svg: "junctionBox" },
              exEs: "La caja va empotrada, al ras del muro.", exEn: "The box goes flush with the wall." }
          ]
        },

        {
          id: "n2m4",
          title: "Medición y pruebas",
          en: "Testing & Measuring",
          icon: "🧪",
          desc: "Antes de tocar, se prueba. Estos instrumentos te salvan la vida y te hacen ver profesional.",
          tip: "Regla de seguridad: 'Test before you touch' (prueba antes de tocar). Verifica tu probador en un circuito vivo conocido, prueba el circuito, y vuelve a verificar el probador.",
          items: [
            { es: "el multímetro", en: "multimeter", pron: "MÓL-ti-mi-ter", icon: { svg: "multimeter" },
              exEs: "Mide el voltaje con el multímetro.", exEn: "Measure the voltage with the multimeter." },
            { es: "el probador de voltaje (sin contacto)", en: "non-contact voltage tester", pron: "non-KON-takt VÓL-tich TES-ter", icon: { svg: "voltTester" },
              exEs: "Pasa el probador antes de tocar los cables.", exEn: "Check with the voltage tester before touching the wires.",
              note: "También le dicen 'tester pen' o 'tick tracer'. Pita si hay voltaje." },
            { es: "el amperímetro de gancho", en: "clamp meter", pron: "KLAMP MÍ-ter", icon: { svg: "clampMeter" },
              exEs: "Mide la corriente del motor con el gancho.", exEn: "Measure the motor current with the clamp meter." },
            { es: "medir", en: "to measure / to check", pron: "tu MÉ-shur / tu CHEK", icon: { svg: "tapeMeasure" },
              exEs: "Checa el voltaje entre fase y neutro.", exEn: "Check the voltage between hot and neutral." },
            { es: "probar / la prueba", en: "to test / the test", pron: "tu TEST", icon: { svg: "voltTester" },
              exEs: "Prueba el circuito antes de cerrar la caja.", exEn: "Test the circuit before closing up the box." },
            { es: "vivo / energizado", en: "live / energized / hot", pron: "LAIV / É-ner-chaisd / JOT", icon: { emoji: "⚡" },
              exEs: "Ese panel está vivo. No lo toques.", exEn: "That panel is live. Don't touch it." },
            { es: "muerto / desenergizado", en: "dead / de-energized", pron: "DED / di-É-ner-chaisd", icon: { emoji: "🔌" },
              exEs: "Ya está muerto el circuito; puedes trabajar.", exEn: "The circuit is dead; you can work on it." },
            { es: "la continuidad", en: "continuity", pron: "kon-ti-NÚ-i-ti", icon: { svg: "circuit" },
              exEs: "Checa continuidad en ese cable.", exEn: "Check continuity on that wire.",
              note: "El multímetro pita si el cable está completo (sin cortarse)." },
            { es: "el corto circuito", en: "short circuit / a short", pron: "SHORT SÉR-kit / a SHORT", icon: { svg: "troubleshoot" },
              exEs: "El breaker bota: hay un corto.", exEn: "The breaker keeps tripping: there's a short." },
            { es: "botarse el breaker", en: "to trip (the breaker)", pron: "tu TRIP", icon: { svg: "breaker" },
              exEs: "Se botó el breaker de la cocina.", exEn: "The kitchen breaker tripped.",
              note: "'Reset the breaker' = restablecerlo (apagar por completo y encender)." }
          ]
        },

        {
          id: "n2m5",
          title: "Frases de obra II — Instrucciones y avance",
          en: "Jobsite Phrases II",
          icon: "🗣️",
          desc: "Recibir instrucciones completas, hacer preguntas inteligentes y reportar tu avance. Esto es lo que te separa del resto de los helpers.",
          items: [
            { kind: "phrase", es: "¿En qué te ayudo? / ¿Qué necesitas?", en: "What do you need?", pron: "juat du yu NID", icon: { emoji: "🙋" },
              exEs: "Ofrécete: 'Need a hand?' = ¿te echo la mano?", exEn: "Need a hand with that pull?" },
            { kind: "phrase", es: "Voy a la troca por material.", en: "I'm going to the truck for material.", pron: "aim GÓU-ing tu da TROK for ma-TÍ-rial", icon: { emoji: "🚚" },
              exEs: "'Truck' = troca/camioneta. El material vive en la troca.", exEn: "I'm going to the truck for a roll of Romex." },
            { kind: "phrase", es: "¿Dónde va esta caja?", en: "Where does this box go?", pron: "juer DOS dis BOKS gou", icon: { emoji: "📦" },
              exEs: "Fórmula: Where does ___ go?", exEn: "Where does this conduit go? / Where do these lights go?" },
            { kind: "phrase", es: "¿A qué altura la pongo?", en: "What height do I set it at?", pron: "juat JAIT du ai SET it at", icon: { emoji: "📏" },
              exEs: "Alturas típicas: receptáculos 12\"–18\", apagadores 48\".", exEn: "Set the boxes at 18 inches to center." },
            { kind: "phrase", es: "Ya terminé el segundo piso.", en: "I finished the second floor.", pron: "ai FÍ-nishd da SÉ-kond flor", icon: { emoji: "✅" },
              exEs: "Reporta sin que te pregunten: eso te hace 'top helper'.", exEn: "I finished the rough-in on the second floor." },
            { kind: "phrase", es: "Me falta material.", en: "I'm short on material. / I ran out.", pron: "aim SHORT on ma-TÍ-rial / ai ran ÁUT", icon: { emoji: "📉" },
              exEs: "'I ran out of straps' = se me acabaron las abrazaderas.", exEn: "I ran out of wire nuts. We need another box of them." },
            { kind: "phrase", es: "¿Está bien así?", en: "Does this look right? / Is this OK?", pron: "dos dis luk RAIT / is dis o-KEI", icon: { emoji: "👀" },
              exEs: "Pregunta antes de repetir un error cien veces.", exEn: "Does this look right before I do the rest?" },
            { kind: "phrase", es: "Se me olvidó la herramienta.", en: "I forgot my tool.", pron: "ai for-GOT mai TUL", icon: { emoji: "😅" },
              exEs: "Mejor aún: 'I'll go get it' = ahorita la traigo.", exEn: "I forgot my bender in the truck. I'll go get it." },
            { kind: "phrase", es: "¿Me prestas tu...?", en: "Can I borrow your...?", pron: "ken ai BÓ-rrou yor", icon: { emoji: "🤲" },
              exEs: "Devuélvela siempre: 'Here's your drill back. Thanks.'", exEn: "Can I borrow your level for a minute?" },
            { kind: "phrase", es: "a la izquierda / a la derecha", en: "to the left / to the right", pron: "tu da LEFT / tu da RAIT", icon: { emoji: "↔️" },
              exEs: "Más: up (arriba), down (abajo), higher (más arriba), lower (más abajo).", exEn: "Move it two inches to the left and a little higher." },
            { kind: "phrase", es: "derecho / nivelado / chueco", en: "straight / level / crooked", pron: "STREIT / LÉ-vol / KRÚ-ked", icon: { emoji: "📐" },
              exEs: "'That pipe looks crooked' = ese tubo se ve chueco.", exEn: "Make sure the conduit is straight and the boxes are level." },
            { kind: "phrase", es: "Al rato regreso. / Ya me voy.", en: "I'll be back later. / I'm leaving now.", pron: "ail bi bak LÉI-ter / aim LÍ-ving nau", icon: { emoji: "👋" },
              exEs: "Al salir: 'See you tomorrow' = nos vemos mañana.", exEn: "I'm leaving now. See you tomorrow at seven." },
            { kind: "phrase", es: "el descanso / la hora de comida", en: "break / lunch", pron: "BREIK / LONCH", icon: { emoji: "🌮" },
              exEs: "'Take five' = descansa 5 minutos. 'Lunch time!' = ¡hora de comer!", exEn: "We take lunch at noon. Break is at ten." },
            { kind: "phrase", es: "las horas extra", en: "overtime", pron: "ÓU-ver-taim", icon: { emoji: "⏰" },
              exEs: "'Time and a half' = tiempo y medio (pago de overtime).", exEn: "Are we working overtime this Saturday?" }
          ]
        }
      ]
    },

    /* ================================================================
       NIVEL 3 — MECÁNICO (MECHANIC / JOURNEYMAN)
       ================================================================ */
    {
      id: "n3",
      num: 3,
      title: "Mecánico",
      en: "Mechanic / Journeyman",
      icon: { emoji: "⚡" },
      color: "violet",
      desc: "Trabajas solo, conectas paneles, resuelves problemas y hablas de código. El inglés técnico del NEC se vuelve tu idioma de trabajo.",
      modules: [

        {
          id: "n3m1",
          title: "Paneles y distribución",
          en: "Panels & Distribution",
          icon: "🎛️",
          desc: "Del medidor al breaker: el corazón de la instalación. Vocabulario para armar y conectar centros de carga.",
          necNote: "NEC Art. 408: paneles. 110.26: espacio de trabajo (36\" fondo × 30\" ancho × 6½ pies alto). 240.4: protege los conductores según su ampacidad. 250.24: puesta a tierra del servicio.",
          items: [
            { es: "la acometida / el servicio", en: "service / service entrance", pron: "SÉR-vis / SÉR-vis ÉN-trans", icon: { svg: "meter" },
              exEs: "La acometida es de 200 amperes.", exEn: "The service is 200 amps.",
              nec: "NEC Art. 230: acometidas. Residencial típico: 100–200 A." },
            { es: "el interruptor principal", en: "main breaker", pron: "MEIN BRÉI-ker", icon: { svg: "breaker" },
              exEs: "Baja el principal antes de trabajar en el panel.", exEn: "Shut off the main breaker before working in the panel." },
            { es: "el subpanel", en: "subpanel", pron: "SOB-pá-nel", icon: { svg: "panel" },
              exEs: "El garaje lleva un subpanel de 60 amperes.", exEn: "The garage takes a 60-amp subpanel.",
              nec: "En subpaneles, neutro y tierra van SEPARADOS (250.24(A)(5) y 408.40)." },
            { es: "la barra de neutros", en: "neutral bar / bus", pron: "NÚ-tral BAR / BOS", icon: { svg: "panel" },
              exEs: "Aterriza cada neutro en su tornillo de la barra.", exEn: "Land each neutral on its own screw on the bar.",
              nec: "NEC 408.41: un neutro por terminal." },
            { es: "la barra de tierras", en: "ground bar", pron: "GRAUND BAR", icon: { svg: "groundWire" },
              exEs: "Instala una barra de tierras en el subpanel.", exEn: "Install a ground bar in the subpanel." },
            { es: "la zapata / terminal (borne)", en: "lug", pron: "LOG", icon: { svg: "allenKey" },
              exEs: "Aprieta las zapatas al torque indicado.", exEn: "Torque the lugs to spec.",
              nec: "NEC 110.14(D): apriete al torque del fabricante — se exige llave de torque." },
            { es: "el breaker de dos polos", en: "two-pole breaker", pron: "TU-poul BRÉI-ker", icon: { svg: "breaker" },
              exEs: "La secadora lleva breaker de dos polos de 30.", exEn: "The dryer takes a 30-amp two-pole breaker." },
            { es: "el breaker AFCI (antiarco)", en: "AFCI breaker", pron: "ei-ef-si-ÁI BRÉI-ker", icon: { svg: "breaker" },
              exEs: "Las recámaras llevan protección antiarco.", exEn: "Bedrooms take AFCI protection.",
              nec: "NEC 210.12: AFCI obligatorio en la mayoría de cuartos habitables." },
            { es: "la varilla de tierra", en: "ground rod", pron: "GRAUND ROD", icon: { svg: "groundRod" },
              exEs: "Clava dos varillas separadas 6 pies.", exEn: "Drive two ground rods 6 feet apart.",
              nec: "NEC 250.53: si una varilla no da 25 ohms o menos, se agrega la segunda." },
            { es: "el electrodo / sistema de tierras", en: "grounding electrode system", pron: "GRÁUN-ding e-LEK-troud SÍS-tem", icon: { svg: "groundRod" },
              exEs: "Une la varilla, el agua y el acero: es el sistema de tierras.", exEn: "Bond the rod, the water pipe, and the steel: that's the grounding electrode system.",
              nec: "NEC 250.50: todos los electrodos presentes se unen entre sí." },
            { es: "el puente de unión", en: "bonding jumper", pron: "BÓN-ding CHÓM-per", icon: { svg: "groundWire" },
              exEs: "Instala el puente de unión principal en el panel de servicio.", exEn: "Install the main bonding jumper in the service panel.",
              nec: "NEC 250.28: el puente principal une neutro y tierra SOLO en el equipo de servicio." },
            { es: "el transformador", en: "transformer", pron: "trans-FÓR-mer", icon: { svg: "transformer" },
              exEs: "El transformador baja de 480 a 208.", exEn: "The transformer steps down from 480 to 208.",
              nec: "NEC Art. 450: transformadores. Comercial común: 480/277 V y 208/120 V." }
          ]
        },

        {
          id: "n3m2",
          title: "Circuitos y NEC esencial",
          en: "Circuits & Essential NEC",
          icon: "📖",
          desc: "Los términos del código que un mecánico usa a diario. Con esto entiendes al inspector y lees los planos sin ayuda.",
          necNote: "El NEC se organiza así: Capítulos 1–4 aplican en general; 5–7 ocupaciones especiales; Cap. 9 tablas (llenado de tubo). El Art. 100 tiene las definiciones — léelo completo alguna vez.",
          items: [
            { es: "el Código Eléctrico Nacional", en: "National Electrical Code (NEC)", pron: "NÁ-sho-nal e-LÉK-tri-kal KOUD (en-i-SÍ)", icon: { svg: "necBook" },
              exEs: "Todo se instala según el NEC.", exEn: "Everything gets installed per the NEC.",
              note: "'Per code' = según código. 'Up to code' = cumple. 'Code violation' = violación." },
            { es: "la ampacidad", en: "ampacity", pron: "am-PÁ-si-ti", icon: { svg: "ampacity" },
              exEs: "Checa la ampacidad del conductor en la tabla.", exEn: "Check the conductor ampacity in the table.",
              nec: "NEC Tabla 310.16. Corriente máxima continua que aguanta un conductor." },
            { es: "el llenado de caja", en: "box fill", pron: "BOKS FIL", icon: { svg: "boxFill" },
              exEs: "Esa chalupa ya no da el llenado de caja.", exEn: "That box doesn't meet box fill anymore.",
              nec: "NEC 314.16: cada conductor cuenta un volumen según calibre." },
            { es: "el llenado de tubo", en: "conduit fill", pron: "KÁN-du-it FIL", icon: { svg: "conduitEmt" },
              exEs: "¿Cuántos THHN 12 caben en media? — Nueve.", exEn: "How many 12 THHN fit in half-inch? — Nine.",
              nec: "NEC Cap. 9, Tablas 1 y 4: máximo 40% de llenado con 3+ conductores." },
            { es: "la caída de voltaje", en: "voltage drop", pron: "VÓL-tich DROP", icon: { svg: "ampacity" },
              exEs: "En tramos largos calcula la caída de voltaje.", exEn: "On long runs, calculate the voltage drop.",
              nec: "Recomendación NEC (nota informativa 210.19): máx. 3% en circuito derivado, 5% total." },
            { es: "la carga (eléctrica)", en: "load", pron: "LOUD", icon: { emoji: "🏋️" },
              exEs: "¿Cuánta carga lleva ese circuito?", exEn: "How much load is on that circuit?",
              nec: "NEC Art. 220: cálculo de cargas. Carga continua: se dimensiona al 125% (210.19)." },
            { es: "el interruptor de seguridad / desconectador", en: "disconnect", pron: "dis-ko-NÉKT", icon: { svg: "switch" },
              exEs: "El aire acondicionado lleva desconectador a la vista.", exEn: "The AC unit takes a disconnect within sight.",
              nec: "NEC 440.14: desconectador a la vista del equipo." },
            { es: "a prueba de intemperie", en: "weatherproof (WP)", pron: "UÉ-der-pruf", icon: { emoji: "🌧️" },
              exEs: "Los receptáculos de afuera llevan tapa contra intemperie.", exEn: "Outdoor receptacles take weatherproof covers.",
              nec: "NEC 406.9: exterior = tapa 'in-use' (extra duty) + GFCI." },
            { es: "clasificado / listado (UL)", en: "listed / UL listed", pron: "LÍS-ted / iu-EL LÍS-ted", icon: { emoji: "✅" },
              exEs: "Usa solo material listado.", exEn: "Use only listed material.",
              nec: "NEC 110.3(B): el equipo se instala según su listado e instrucciones." },
            { es: "accesible / a la vista", en: "accessible / within sight", pron: "ak-SÉ-si-bol / ui-DÍN SAIT", icon: { emoji: "👁️" },
              exEs: "El registro debe quedar accesible.", exEn: "The junction box must remain accessible." },
            { es: "el diagrama unifilar", en: "one-line diagram", pron: "UÁN-lain DÁ-ia-gram", icon: { svg: "blueprint" },
              exEs: "Revisa el unifilar antes de pedir el material del servicio.", exEn: "Check the one-line diagram before ordering the service material." },
            { es: "el permiso (de obra)", en: "permit", pron: "PÉR-mit", icon: { emoji: "📄" },
              exEs: "No se empieza sin permiso.", exEn: "We don't start without a permit." }
          ]
        },

        {
          id: "n3m3",
          title: "Solución de problemas",
          en: "Troubleshooting",
          icon: "🔍",
          desc: "Encontrar la falla es lo que distingue al mecánico. Aprende a nombrar cada tipo de falla y a explicar qué encontraste.",
          items: [
            { es: "la falla / el problema", en: "fault / problem / issue", pron: "FOLT / PRÓ-blem / Í-shu", icon: { svg: "troubleshoot" },
              exEs: "Hay una falla en el circuito de la cocina.", exEn: "There's a fault on the kitchen circuit." },
            { es: "el circuito abierto", en: "open circuit / an open", pron: "ÓU-pen SÉR-kit", icon: { svg: "circuit" },
              exEs: "No llega corriente: hay un abierto en algún lado.", exEn: "No power at the outlet: there's an open somewhere." },
            { es: "la falla a tierra", en: "ground fault", pron: "GRAUND FOLT", icon: { svg: "groundWire" },
              exEs: "El GFCI se bota: busca una falla a tierra.", exEn: "The GFCI keeps tripping: look for a ground fault." },
            { es: "el falso contacto", en: "loose connection", pron: "LUS ko-NÉK-shon", icon: { svg: "wireNut" },
              exEs: "La luz parpadea: ha de ser un falso contacto.", exEn: "The light flickers: it's probably a loose connection." },
            { es: "sobrecargado", en: "overloaded", pron: "ou-ver-LÓU-ded", icon: { emoji: "🔥" },
              exEs: "El circuito está sobrecargado; hay que dividirlo.", exEn: "The circuit is overloaded; we need to split it." },
            { es: "quemado", en: "burned / burned out", pron: "BERND / bernd ÁUT", icon: { emoji: "🔥" },
              exEs: "El receptáculo está quemado; cámbialo.", exEn: "The receptacle is burned; replace it." },
            { es: "revisar / diagnosticar", en: "to troubleshoot", pron: "tu TRÓ-bol-shut", icon: { svg: "troubleshoot" },
              exEs: "Voy a diagnosticar por qué no hay luz.", exEn: "I'm going to troubleshoot why there's no power." },
            { es: "aislar el problema", en: "to isolate the problem", pron: "tu ÁI-so-leit da PRÓ-blem", icon: { emoji: "🎯" },
              exEs: "Divide el circuito para aislar el problema.", exEn: "Split the circuit to isolate the problem." },
            { es: "funciona / no funciona", en: "it works / it doesn't work", pron: "it UERKS / it DÓ-sent uerk", icon: { emoji: "🔁" },
              exEs: "El apagador no funciona.", exEn: "The switch doesn't work.",
              note: "También: 'It's not working' / 'It stopped working' (dejó de funcionar)." },
            { es: "la energía regresó", en: "the power is back on", pron: "da PÁU-er is bak ON", icon: { emoji: "💡" },
              exEs: "Listo, ya regresó la luz.", exEn: "All set, the power is back on." },
            { es: "reemplazar / cambiar", en: "to replace", pron: "tu ri-PLÉIS", icon: { emoji: "🔄" },
              exEs: "Hay que cambiar ese breaker dañado.", exEn: "We need to replace that bad breaker.",
              note: "'Bad' = dañado/malo. 'A bad breaker', 'a bad connection'." },
            { es: "apretar / aflojar", en: "to tighten / to loosen", pron: "tu TÁI-ten / tu LÚ-sen", icon: { emoji: "🔩" },
              exEs: "Aprieta todas las terminales del panel.", exEn: "Tighten all the terminals in the panel." }
          ]
        },

        {
          id: "n3m4",
          title: "Planos y acabado (trim-out)",
          en: "Blueprints & Trim-out",
          icon: "📐",
          desc: "Leer planos y rematar la obra: la etapa 'finish'. El mecánico interpreta el plano y deja todo funcionando.",
          items: [
            { es: "el plano", en: "blueprint / print / drawing", pron: "BLU-print / PRINT / DRÓ-ing", icon: { svg: "blueprint" },
              exEs: "Revisa el plano eléctrico de la página E-2.", exEn: "Check the electrical print on page E-2.",
              note: "Los planos eléctricos van numerados E-1, E-2... ('E sheets')." },
            { es: "las especificaciones", en: "specs / specifications", pron: "SPEKS", icon: { svg: "materialsList" },
              exEs: "Las especificaciones piden dispositivos grado comercial.", exEn: "The specs call for commercial-grade devices.",
              note: "'It calls for...' = el plano/spec pide..." },
            { es: "el símbolo", en: "symbol", pron: "SÍM-bol", icon: { emoji: "🔣" },
              exEs: "Ese símbolo es un receptáculo dedicado.", exEn: "That symbol is a dedicated receptacle." },
            { es: "la escala", en: "scale", pron: "SKEIL", icon: { emoji: "📏" },
              exEs: "El plano está a escala un cuarto.", exEn: "The print is at quarter-inch scale." },
            { es: "el acabado / remate", en: "trim-out / finish", pron: "TRIM-aut / FÍ-nish", icon: { svg: "coverPlate" },
              exEs: "La próxima semana empezamos el acabado.", exEn: "Next week we start the trim-out." },
            { es: "instalar dispositivos", en: "to trim / to device out", pron: "tu TRIM / tu di-VÁIS aut", icon: { svg: "receptacle" },
              exEs: "Hoy rematamos todo el primer piso.", exEn: "Today we trim out the whole first floor." },
            { es: "energizar / dar corriente", en: "to energize / to power up", pron: "tu É-ner-chais / tu PÁU-er op", icon: { emoji: "⚡" },
              exEs: "Mañana energizamos el edificio.", exEn: "Tomorrow we energize the building." },
            { es: "la lista de pendientes / detalles", en: "punch list", pron: "PONCH LIST", icon: { svg: "materialsList" },
              exEs: "Quedan diez detalles en la lista de pendientes.", exEn: "There are ten items left on the punch list.",
              note: "La 'punch list' son los detalles finales antes de entregar la obra." },
            { es: "como se construyó (planos finales)", en: "as-built (drawings)", pron: "as-BILT", icon: { svg: "blueprint" },
              exEs: "Marca los cambios para los planos as-built.", exEn: "Mark the changes for the as-builts." },
            { es: "la orden de cambio", en: "change order", pron: "CHEINCH ÓR-der", icon: { emoji: "📝" },
              exEs: "Eso no está en contrato: va en orden de cambio.", exEn: "That's not in the contract: it goes on a change order." }
          ]
        },

        {
          id: "n3m5",
          title: "Frases de obra III — Explicar y coordinar",
          en: "Jobsite Phrases III",
          icon: "🧠",
          desc: "Explicar un problema, proponer una solución y coordinarte con otros oficios. El inglés del mecánico que trabaja sin supervisión.",
          items: [
            { kind: "phrase", es: "Encontré el problema.", en: "I found the problem.", pron: "ai FAUND da PRÓ-blem", icon: { emoji: "🎯" },
              exEs: "Y la causa: 'It was a loose neutral' = era un neutro flojo.", exEn: "I found the problem. It was a loose neutral in the panel." },
            { kind: "phrase", es: "Así no pasa la inspección.", en: "That won't pass inspection.", pron: "dat uont pas ins-PÉK-shon", icon: { emoji: "🚫" },
              exEs: "Forma profesional de decir que algo está mal hecho.", exEn: "That splice outside a box won't pass inspection." },
            { kind: "phrase", es: "El código pide...", en: "Code requires...", pron: "KOUD ri-KUÁ-yers", icon: { svg: "necBook" },
              exEs: "Respalda tu trabajo con el NEC.", exEn: "Code requires GFCI protection in bathrooms." },
            { kind: "phrase", es: "Hay que hacerlo de nuevo.", en: "We have to redo it.", pron: "ui jav tu ri-DÚ it", icon: { emoji: "🔁" },
              exEs: "'Redo' = rehacer. 'Rework' = retrabajo.", exEn: "The boxes are at the wrong height. We have to redo them." },
            { kind: "phrase", es: "¿Quién cortó la corriente?", en: "Who shut off the power?", pron: "ju shot of da PÁU-er", icon: { emoji: "❔" },
              exEs: "'Shut off' = cortar/apagar. 'Turn back on' = reconectar.", exEn: "Who shut off the power to the second floor?" },
            { kind: "phrase", es: "Los del sheetrock taparon mis cajas.", en: "The drywall guys covered my boxes.", pron: "da DRÁI-uol gais KÓ-verd mai BÓK-ses", icon: { emoji: "🧱" },
              exEs: "Coordinar con otros oficios: plumbers, framers, drywallers, painters.", exEn: "Tell the drywall guys not to cover the junction boxes." },
            { kind: "phrase", es: "El plomero pasó su tubo por mi ruta.", en: "The plumber ran his pipe through my route.", pron: "da PLÓ-mer ran jis paip zru mai RUT", icon: { emoji: "🚿" },
              exEs: "Conflictos de espacio: primero llega, primero gana.", exEn: "The plumber ran his pipe where my conduit goes. We need to talk." },
            { kind: "phrase", es: "Necesito que me manden otro ayudante.", en: "I need them to send me another helper.", pron: "ai NID dem tu SEND mi a-NÓ-der JÉL-per", icon: { emoji: "👷" },
              exEs: "Pedir recursos al foreman.", exEn: "To finish Friday, I need another helper." },
            { kind: "phrase", es: "Está atrasado el trabajo.", en: "The work is behind schedule.", pron: "da uerk is bi-JÁIND SKÉ-chul", icon: { emoji: "⏳" },
              exEs: "Lo contrario: 'ahead of schedule' = adelantado.", exEn: "We're behind schedule because the material came late." },
            { kind: "phrase", es: "Te lo enseño. / Mira, así se hace.", en: "Let me show you. / Look, this is how you do it.", pron: "let mi SHOU yu", icon: { emoji: "🎓" },
              exEs: "El mecánico enseña al helper. Ahora enseñas tú.", exEn: "Let me show you how to bend an offset." },
            { kind: "phrase", es: "Mide dos veces, corta una.", en: "Measure twice, cut once.", pron: "MÉ-shur tuais, kot uans", icon: { emoji: "✂️" },
              exEs: "Dicho clásico de la construcción en EE.UU.", exEn: "Take your time. Measure twice, cut once." },
            { kind: "phrase", es: "Por seguridad, apágalo primero.", en: "To be safe, shut it off first.", pron: "tu bi SEIF, shot it of ferst", icon: { emoji: "🛡️" },
              exEs: "'Better safe than sorry' = más vale prevenir.", exEn: "To be safe, shut off the breaker and test before you touch." }
          ]
        }
      ]
    },

    /* ================================================================
       NIVEL 4 — FOREMAN
       ================================================================ */
    {
      id: "n4",
      num: 4,
      title: "Foreman",
      en: "Foreman",
      icon: { svg: "foreman" },
      color: "emerald",
      desc: "Diriges la cuadrilla, hablas con el inspector y el superintendente, planeas el material y la seguridad. Tu inglés ahora lidera la obra.",
      modules: [

        {
          id: "n4m1",
          title: "Dirigir la cuadrilla",
          en: "Leading the Crew",
          icon: "👷",
          desc: "Dar instrucciones claras, repartir el trabajo y desarrollar a tu gente. El foreman se mide por lo que produce su cuadrilla.",
          items: [
            { es: "la cuadrilla", en: "crew", pron: "KRU", icon: { emoji: "👷" },
              exEs: "Mi cuadrilla son cinco: dos mecánicos y tres ayudantes.", exEn: "My crew is five guys: two mechanics and three helpers." },
            { es: "el capataz / foreman", en: "foreman", pron: "FÓR-man", icon: { svg: "foreman" },
              exEs: "El foreman responde por la producción y la seguridad.", exEn: "The foreman answers for production and safety." },
            { es: "el superintendente", en: "superintendent / super", pron: "su-per-in-TÉN-dent / SÚ-per", icon: { emoji: "🏢" },
              exEs: "El súper de la general quiere hablar contigo.", exEn: "The GC's super wants to talk to you.",
              note: "GC = general contractor (contratista general)." },
            { es: "el contratista", en: "contractor", pron: "KON-trak-tor", icon: { emoji: "🏗️" },
              exEs: "Trabajamos para el contratista eléctrico.", exEn: "We work for the electrical contractor." },
            { es: "asignar tareas", en: "to assign tasks", pron: "tu a-SÁIN TASKS", icon: { svg: "materialsList" },
              exEs: "Asigna las tareas antes de las 7.", exEn: "Assign the tasks before 7 a.m." },
            { es: "la producción / el rendimiento", en: "production / output", pron: "pro-DÓK-shon", icon: { svg: "ampacity" },
              exEs: "La producción de hoy: 40 cajas y 300 pies de tubo.", exEn: "Today's production: 40 boxes and 300 feet of conduit." },
            { es: "el plazo / la fecha de entrega", en: "deadline", pron: "DÉD-lain", icon: { svg: "calendar" },
              exEs: "La fecha de entrega del rough-in es el viernes.", exEn: "The rough-in deadline is Friday." },
            { es: "el pedido de material", en: "material order", pron: "ma-TÍ-rial ÓR-der", icon: { svg: "materialsList" },
              exEs: "Manda el pedido de material hoy para tenerlo el lunes.", exEn: "Send the material order today so we have it Monday.",
              note: "La lista se llama 'takeoff': contar del plano cuánto material va." },
            { es: "la hoja de tiempo", en: "timesheet", pron: "TÁIM-shit", icon: { svg: "calendar" },
              exEs: "Entrega las hojas de tiempo cada viernes.", exEn: "Turn in the timesheets every Friday." },
            { es: "contratar / despedir", en: "to hire / to lay off (fire)", pron: "tu JÁ-yer / tu lei OF (FÁ-yer)", icon: { emoji: "🤝" },
              exEs: "Vamos a contratar dos ayudantes más.", exEn: "We're going to hire two more helpers.",
              note: "'Lay off' = recorte por falta de trabajo; 'fire' = despido por causa." },
            { es: "el compañero / colega", en: "coworker / partner", pron: "KÓU-uer-ker / PART-ner", icon: { emoji: "🧑‍🤝‍🧑" },
              exEs: "Trabaja con tu compañero, nunca solo en altura.", exEn: "Work with your partner, never alone at heights." },
            { es: "capacitar / entrenar", en: "to train", pron: "tu TREIN", icon: { emoji: "🎓" },
              exEs: "Entrena al helper nuevo con las dobladoras.", exEn: "Train the new helper on the benders." }
          ]
        },

        {
          id: "n4m2",
          title: "Seguridad OSHA y juntas",
          en: "OSHA Safety & Toolbox Talks",
          icon: "🦺",
          desc: "El foreman dirige la seguridad: juntas semanales, análisis de riesgos y reportes. Este vocabulario es obligatorio para el puesto.",
          necNote: "OSHA 29 CFR 1926 Subparte K cubre lo eléctrico en construcción. La NFPA 70E define distancias de seguridad y EPP para trabajo energizado. Regla de oro: no se trabaja vivo salvo justificación por escrito (permiso de trabajo energizado).",
          items: [
            { es: "la junta de seguridad", en: "safety meeting / toolbox talk", pron: "SÉIF-ti MÍ-ting / TUL-boks tok", icon: { svg: "talk" },
              exEs: "Junta de seguridad todos los lunes a las 6:30.", exEn: "Toolbox talk every Monday at 6:30." },
            { es: "el análisis de riesgo", en: "hazard analysis (JHA)", pron: "JÁ-sard a-NÁ-li-sis (chei-eich-EI)", icon: { svg: "inspection" },
              exEs: "Llena el análisis de riesgo antes de empezar.", exEn: "Fill out the JHA before starting.",
              note: "JHA = Job Hazard Analysis. También 'JSA' (Job Safety Analysis)." },
            { es: "el peligro / riesgo", en: "hazard / risk", pron: "JÁ-sard / RISK", icon: { emoji: "⚠️" },
              exEs: "Reporta cualquier peligro de inmediato.", exEn: "Report any hazard immediately." },
            { es: "el accidente / incidente", en: "accident / incident", pron: "ÁK-si-dent / ÍN-si-dent", icon: { emoji: "🚑" },
              exEs: "Todo incidente se reporta, aunque sea pequeño.", exEn: "Every incident gets reported, even small ones." },
            { es: "el casi-accidente", en: "near miss", pron: "nir MIS", icon: { emoji: "😰" },
              exEs: "Ese cable colgando fue un casi-accidente: repórtalo.", exEn: "That hanging wire was a near miss: report it." },
            { es: "el arco eléctrico", en: "arc flash", pron: "ARK FLASH", icon: { emoji: "💥" },
              exEs: "Para abrir ese panel vivo necesitas traje contra arco.", exEn: "To open that live panel you need an arc flash suit.",
              nec: "NFPA 70E: etiquetas de arco en paneles; NEC 110.16 exige el rótulo de advertencia." },
            { es: "la descarga eléctrica / el toque", en: "electric shock", pron: "e-LÉK-trik SHOK", icon: { emoji: "⚡" },
              exEs: "Un toque de 120 puede ser mortal.", exEn: "A 120-volt shock can be deadly.",
              note: "'I got shocked' = me dio toques." },
            { es: "trabajo energizado", en: "live work / energized work", pron: "LAIV UERK", icon: { emoji: "🔥" },
              exEs: "Aquí no se hace trabajo energizado sin permiso firmado.", exEn: "No live work here without a signed permit.",
              nec: "NFPA 70E 110.4: trabajar des-energizado es la regla; vivo es la excepción justificada." },
            { es: "la zona de exclusión / barricada", en: "barricade / exclusion zone", pron: "BÁ-rri-keid", icon: { emoji: "🚧" },
              exEs: "Barrica el área antes de abrir el panel.", exEn: "Barricade the area before opening the panel." },
            { es: "la multa / infracción", en: "fine / violation", pron: "FAIN / vai-o-LÉI-shon", icon: { emoji: "💸" },
              exEs: "Esa infracción de OSHA es multa segura.", exEn: "That OSHA violation is a guaranteed fine." },
            { es: "el simulacro / la evacuación", en: "drill / evacuation", pron: "DRIL / i-va-kiu-ÉI-shon", icon: { emoji: "🚨" },
              exEs: "Punto de reunión: el estacionamiento norte.", exEn: "Muster point: the north parking lot.",
              note: "'Muster point' o 'assembly point' = punto de reunión." },
            { kind: "phrase", es: "La seguridad es primero.", en: "Safety first.", pron: "SÉIF-ti FERST", icon: { emoji: "🛡️" },
              exEs: "El lema universal de la construcción.", exEn: "Safety first, guys. Nobody gets hurt today." }
          ]
        },

        {
          id: "n4m3",
          title: "Inspecciones y permisos",
          en: "Inspections & Permits",
          icon: "📋",
          desc: "Hablar con el inspector con seguridad y respeto técnico. Pasar inspecciones a la primera es la firma de un buen foreman.",
          necNote: "La autoridad local se llama AHJ (Authority Having Jurisdiction — autoridad competente). El inspector aplica el NEC más las enmiendas locales. Su palabra decide en sitio; las diferencias se resuelven con el artículo del código en la mano, con respeto.",
          items: [
            { es: "el inspector", en: "inspector", pron: "ins-PÉK-tor", icon: { svg: "inspection" },
              exEs: "El inspector llega a las 9.", exEn: "The inspector arrives at 9." },
            { es: "la inspección", en: "inspection", pron: "ins-PÉK-shon", icon: { svg: "inspection" },
              exEs: "Mañana es la inspección del rough-in.", exEn: "Tomorrow is the rough-in inspection.",
              note: "Etapas típicas: underground, rough-in, service, final." },
            { es: "la autoridad competente (AHJ)", en: "AHJ (Authority Having Jurisdiction)", pron: "ei-eich-CHÉI", icon: { emoji: "🏛️" },
              exEs: "La AHJ decide qué edición del NEC aplica.", exEn: "The AHJ decides which NEC edition applies." },
            { es: "aprobar / pasar", en: "to pass / to approve", pron: "tu PAS / tu a-PRUV", icon: { emoji: "✅" },
              exEs: "Pasamos la inspección a la primera.", exEn: "We passed inspection on the first try.",
              note: "'It passed' / 'We got the green tag' (etiqueta verde = aprobado)." },
            { es: "reprobar / rechazar", en: "to fail / to get red-tagged", pron: "tu FEIL / tu guet red-TAGD", icon: { emoji: "❌" },
              exEs: "Nos rechazaron por falta de grapas.", exEn: "We failed for missing staples.",
              note: "'Red tag' = rechazo. 'Correction notice' = lista de correcciones." },
            { es: "la corrección", en: "correction", pron: "ko-RRÉK-shon", icon: { emoji: "📝" },
              exEs: "Hicimos las correcciones el mismo día.", exEn: "We made the corrections the same day." },
            { es: "programar / agendar", en: "to schedule", pron: "tu SKÉ-chul", icon: { svg: "calendar" },
              exEs: "Agenda la inspección final para el jueves.", exEn: "Schedule the final inspection for Thursday.",
              note: "'Call in the inspection' = solicitar la inspección." },
            { es: "cumplir con el código", en: "to be up to code / code-compliant", pron: "tu bi op tu KOUD", icon: { svg: "necBook" },
              exEs: "Toda la instalación cumple con el código.", exEn: "The whole installation is up to code." },
            { es: "la violación al código", en: "code violation", pron: "KOUD vai-o-LÉI-shon", icon: { emoji: "🚫" },
              exEs: "El inspector marcó dos violaciones.", exEn: "The inspector flagged two violations.",
              note: "'To flag' = marcar/señalar." },
            { es: "el certificado / visto bueno final", en: "final approval / green tag / CO", pron: "FÁI-nal a-PRÚ-val / si-ÓU", icon: { emoji: "🟢" },
              exEs: "Con el visto bueno final, la luz se conecta.", exEn: "With final approval, the power gets connected.",
              note: "CO = Certificate of Occupancy (certificado de ocupación)." },
            { kind: "phrase", es: "Inspector, ¿qué necesita ver primero?", en: "Inspector, what do you need to see first?", pron: "ins-PÉK-tor, juat du yu nid tu SI ferst", icon: { emoji: "🤝" },
              exEs: "Recíbelo, acompáñalo, ten planos y permiso a la mano.", exEn: "Good morning, inspector. Prints and permit are on the table. What do you need to see first?" },
            { kind: "phrase", es: "Lo corregimos hoy mismo y le avisamos.", en: "We'll fix it today and let you know.", pron: "uil FIKS it tu-DÉI and let yu NOU", icon: { emoji: "🔧" },
              exEs: "Respuesta profesional a un rechazo. Sin discutir.", exEn: "Understood. We'll fix it today and call for re-inspection." }
          ]
        },

        {
          id: "n4m4",
          title: "Frases de foreman — Planear y dirigir",
          en: "Foreman Phrases",
          icon: "🎯",
          desc: "Las frases del que dirige: planear el día, resolver conflictos, negociar tiempos y motivar a la cuadrilla.",
          items: [
            { kind: "phrase", es: "El plan de hoy es terminar el tercer piso.", en: "Today's plan is to finish the third floor.", pron: "tu-DÉIS plan is tu FÍ-nish da zerd flor", icon: { emoji: "🗓️" },
              exEs: "Empieza el día con el plan claro para todos.", exEn: "Today's plan: finish the third floor and start the panels." },
            { kind: "phrase", es: "Tú y Miguel se van a los paneles.", en: "You and Miguel take the panels.", pron: "yu and mi-GUEL teik da PÁ-nels", icon: { emoji: "👉" },
              exEs: "Asignar en parejas: 'You two take...' = ustedes dos van a...", exEn: "You two take the panels; José, you're with me on the pull." },
            { kind: "phrase", es: "¿Cuánto te falta?", en: "How much do you have left?", pron: "jau MOCH du yu jav LEFT", icon: { emoji: "⏱️" },
              exEs: "Respuestas: 'About an hour' / 'Almost done' (casi acabo).", exEn: "How much do you have left on that room? — About an hour." },
            { kind: "phrase", es: "Necesitamos más gente para llegar al viernes.", en: "We need more manpower to make Friday.", pron: "ui nid mor MAN-pau-er tu meik FRÁI-dei", icon: { emoji: "👥" },
              exEs: "'Manpower' = mano de obra. 'To make (a date)' = llegar a la fecha.", exEn: "With this scope, we need two more guys to make Friday." },
            { kind: "phrase", es: "Eso no es nuestro alcance de trabajo.", en: "That's not in our scope of work.", pron: "dats not in áur SKOUP of uerk", icon: { emoji: "📄" },
              exEs: "'Scope' = alcance del contrato. Protege a tu empresa.", exEn: "Moving that panel is not in our scope. It needs a change order." },
            { kind: "phrase", es: "Mándame el pedido por escrito.", en: "Send me the order in writing.", pron: "send mi di ÓR-der in RÁI-ting", icon: { emoji: "✍️" },
              exEs: "Todo por escrito: 'Get it in writing.'", exEn: "If the GC wants extra work, get it in writing." },
            { kind: "phrase", es: "Buen trabajo, muchachos.", en: "Good job, guys. / Nice work.", pron: "gud CHOB gais / nais UERK", icon: { emoji: "👏" },
              exEs: "Reconoce el esfuerzo. Motiva más que gritar.", exEn: "Good job today, guys. We're ahead of schedule." },
            { kind: "phrase", es: "Llega a las seis en punto.", en: "Be here at six sharp.", pron: "bi jir at SIKS sharp", icon: { emoji: "🕕" },
              exEs: "'Sharp' = en punto. 'Don't be late' = no llegues tarde.", exEn: "Concrete pours at seven. Be here at six sharp." },
            { kind: "phrase", es: "Recojan y limpien el área.", en: "Clean up and pick up the area.", pron: "klin OP and pik OP di É-ria", icon: { emoji: "🧹" },
              exEs: "Fin del día: 'Let's clean up. Fifteen minutes.'", exEn: "Clean up your area before you leave. Safety first." },
            { kind: "phrase", es: "Revisen su trabajo antes de entregarlo.", en: "Check your work before you turn it in.", pron: "chek yor UERK bi-FÓR yu tern it IN", icon: { emoji: "🔍" },
              exEs: "Calidad a la primera = menos retrabajos.", exEn: "Check your work. I don't want callbacks on this floor." },
            { kind: "phrase", es: "Si tienes duda, pregúntame.", en: "If you're not sure, ask me.", pron: "if yor not SHUR, ask MI", icon: { emoji: "🙋" },
              exEs: "Puerta abierta = menos errores caros.", exEn: "If you're not sure, ask me. Asking is free; mistakes are not." },
            { kind: "phrase", es: "Nos vemos mañana. Descansen.", en: "See you tomorrow. Get some rest.", pron: "si yu tu-MÓ-rrou. guet som REST", icon: { emoji: "🌙" },
              exEs: "Cierra el día como líder.", exEn: "Good work today. See you tomorrow. Get some rest." }
          ]
        }
      ]
    }
  ]
};

/* ---------- utilidades sobre los datos ---------- */

function allModules() {
  const mods = [];
  COURSE.levels.forEach(function (lv) {
    lv.modules.forEach(function (m) { mods.push({ level: lv, module: m }); });
  });
  return mods;
}

function findModule(id) {
  for (const lv of COURSE.levels) {
    for (const m of lv.modules) {
      if (m.id === id) return { level: lv, module: m };
    }
  }
  return null;
}

function allItems() {
  const out = [];
  COURSE.levels.forEach(function (lv) {
    lv.modules.forEach(function (m) {
      m.items.forEach(function (it) { out.push({ level: lv, module: m, item: it }); });
    });
  });
  return out;
}

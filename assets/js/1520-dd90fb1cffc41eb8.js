"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1520],
  {
    58087: function (e, a, o) {
      o.d(a, {
        Z: function () {
          return c;
        },
        t: function () {
          return u;
        },
      });
      var n = o(7611),
        i = o(84148),
        t = o(52265),
        r = o(47782),
        s = o(16463),
        d = o(2265),
        l = o(8358);
      function c() {
        let e = u();
        return e?.[0];
      }
      function u() {
        let [e, a] = (0, d.useState)(!1),
          [o] = (0, l.fP)(["language"]),
          c = (0, d.useContext)(n.A),
          u = (0, s.useSearchParams)().get("hl") || void 0;
        return (
          (0, d.useEffect)(() => {
            a(!0);
          }, []),
          (0, d.useMemo)(() => {
            if (e)
              return (0, r.RU)(
                (0, i.W7)(u) ||
                (0, i.W7)(o.language) ||
                (0, i.W7)(c?.language) ||
                navigator.languages,
                Array.from(t.Jb.keys()),
                { defaultLocale: "en-US" },
              );
          }, [e, u, o.language, c?.language])
        );
      }
    },
    95397: function (e, a, o) {
      o.d(a, {
        MY: function () {
          return d;
        },
        N4: function () {
          return l;
        },
        _C: function () {
          return c;
        },
      });
      var n = o(57437),
        i = o(2265),
        t = o(58087),
        r = o(50594),
        s = o(84148);
      let d = (0, i.createContext)(void 0);
      function l({ children: e }) {
        let a = (0, t.t)(),
          o = (0, i.useMemo)(() => {
            if (a) return new r._((0, s.no)(a));
          }, [a]);
        return (0, n.jsx)(c, { l10n: o, children: e });
      }
      function c({ children: e, l10n: a }) {
        return (0, n.jsx)(d.Provider, { value: a, children: e });
      }
    },
    7611: function (e, a, o) {
      o.d(a, {
        A: function () {
          return r;
        },
        r: function () {
          return s;
        },
      });
      var n = o(57437),
        i = o(2265),
        t = o(95397);
      let r = (0, i.createContext)(void 0);
      function s({
        children: e,
        language: a,
        setLanguage: o,
        currentLanguage: s,
        setCurrentLanguage: l,
      }) {
        return (0, n.jsx)(r.Provider, {
          value: {
            language: a,
            setLanguage: o,
            currentLanguage: s,
            setCurrentLanguage: l,
          },
          children: (0, n.jsx)(i.Suspense, {
            fallback: (0, n.jsx)(d, { children: e }),
            children: (0, n.jsx)(t.N4, { children: e }),
          }),
        });
      }
      function d({ children: e }) {
        return (0, n.jsx)(t._C, { l10n: void 0, children: e });
      }
    },
    84148: function (e, a, o) {
      o.d(a, {
        Uu: function () {
          return s;
        },
        W7: function () {
          return d;
        },
        no: function () {
          return r;
        },
      });
      var n = o(47782),
        i = o(52265),
        t = o(1832);
      function* r(e) {
        for (let a of (0, n.RU)(e, Array.from(i.Jb.keys()), {
          defaultLocale: "en-US",
        })) {
          let e = new t.Yk(a),
            o = i.Jb.get(a);
          o && (e.addResource(o), yield e);
        }
      }
      function* s() {
        let e = i.Jb.get("en-US"),
          a = new t.Yk("en-US");
        e && a.addResource(e), yield a;
      }
      function d(e) {
        if (e) return [e];
      }
    },
    52265: function (e, a, o) {
      o.d(a, {
        uf: function () {
          return c;
        },
        Jb: function () {
          return d;
        },
        Et: function () {
          return l;
        },
      });
      var n = o(57477),
        i = o(81608),
        t = o(1832),
        r = new t.WZ(`-brand-name=Owleaf Studio
slogan = Innovating Your Gaming Experience

navbar-contact = Contact
navbar-client = Download Owleaf Client

featured = Featured <colored>videos</colored>.

about-title = We help you create <br/> <colored>Awesome Events</colored>.
about = We are a game development studio focused on Minecraft. 
    With over nine years of experience in the industry, we specialize in organizing, 
    developing, and executing events, series, servers, and competitive tournaments.

see-more = And more!

stats-event = Event
stats-watch-time = Watch Time
stats-peak-viewers = Peak Viewers
stats-average-viewers = Average Viewers
stats-participants = Participants
stats-duration = Duration (hours)
stats-dates = Dates
stats-collaborators = Collaborators

minecraft-title = Our <minecraft>Minecraft</minecraft> Creations.Nuestras creaciones en <minecraft>Minecraft</minecraft>.
minecraft-descriptions = Over the years, we have produced many types of projects, including competitive tournaments, role-playing series, 
    entertainment, and special events for both content creators and the general public. We also manage public and private servers, 
    develop custom mods, create virtual concerts, adventure maps, and other possible creations in Minecraft. If you’re interested in developing your own project, contact us and let’s work together!

backrooms = The Backrooms
backrooms-description = The term “Backrooms” comes from an urban legend or creepypasta.
    On April 22, 2023, the Mexican streamer Soarinng organized an event in Minecraft with
    60 content creators, divided into ten teams. Developed by Owleaf Studio, the
    game had four levels. The event was nominated for Best Content Miniseries in the Esland Awards 2024.

squidcraft = Squid Craft Games 1
squidcraft-description = The first edition of the Squid Craft Games, inspired by Netflix's “Squid Games”,
    was held in Minecraft in 2022. It was organized by Auronplay, Rubius and Komanche, along with Twitch Rivals and Owleaf Studio.
    Participants competed for one hundred thousand dollars in 12 games, replicating the original series. It was awarded Best
    Content Miniseries at the Esland Awards.

squidcraft-two = Squid Craft Games 2
squidcraft-two-description = The second edition of the Squid Craft Games took place in 2023 with 200 content creators,
    including English and Spanish-speaking players. This time, the events were set in the Valley of the Monuments in the United States. 
    The event, organized by Rubius, Auronplay, Komanche and Twitch Rivals, once again won the Esland Award for Best Content Miniseries.

squidcraft-three = Squid Craft Games 3
squidcraft-three-description = The thirth edition of the Squid Craft Games took place in 2024 with 200 content creators,
    including English and Spanish-speaking players. This time, the events were set in the Antarctica. 
    The event was organized by Rubius, Auronplay, Komanche and Twitch Rivals.

saw = Saw Minecraft Games
saw-description = The Saw Minecraft Games were inspired by the “Saw” franchise and organized by Auronplay,
    with the development of Owleaf Studio. 100 Spanish-speaking content creators competed in deadly challenges. The
    event reached peak audiences of thousands of viewers and was nominated for best miniseries in the Esland Awards 2023,
    coming in second place behind the Squid Craft Games.

twitchcon = TwitchCon Paris 2023
twitchcon-description = At TwitchCon Paris, July 8-9, 2023, eight teams competed in various Minecraft challenges,
    all of them developed by Owleaf: a bike race through Paris, swimming with obstacles in the Seine River, organizing fruits and vegetables in a market, and a
    and vegetables in a market, and an obstacle course between the city's buildings. The top three places received cash prizes of $2,500.
    cash prizes of $2,500.

noobsters = Noobsters
noobsters-description = In 2014, before the creation of Owleaf Studio, 
    Noobsters was born, a Minecraft server dedicated to modes like 
    SkyWars and UltraHardCore (UHC). Noobsters organized more than 3,000 tournaments 
    UHC tournaments, Skywars games and a survival mode server.

velada = La Velada del A\xf1o
velada-description =  The Event of the Year, held by Ibai in real life, within the series of the year. La Velada del A\xf1o joined Tortillaland 2, 
    series organized by AuronPlay, thanks to the production of Owleaf Studio. The atmosphere of the Badalona Pavilion was recreated for the edition 
    2022 to say goodbye to Ibai of the series. The fights, music and red carpet made the event unforgettable for everyone.

juaniquilacopa = Juaniquilacopa: BuildBattle
juaniquilacopa-description = Juaniquilacopa: BuildBattle was a construction competition organized by JuanSGuarnizo in 2022, 
    in collaboration with Owleaf Studio. It had 50 Spanish-speaking content creators building on different themes, 
    being graded by Quackity, Auron and Juan. The event included a nomination for the Esland 2023 Award for Best Content Miniseries.

hunt-and-run = Hunt and Run
hunt-and-run-description = Hunt and Run, organized by Twitch Rivals in collaboration with IlloJuan and developed by Owleaf, is a Battle Royale-type event
    inspired by The Hunger Games. It took place in January 2024 and was attended by 200 Spanish and English-speaking players, who competed over 4 days for a prize of 100,000 dollars.
    for a prize of US$100,000. The event introduced weapons, new creations and unique tools, in addition to locations made especially for
    Hunt and Run.

hormigeo = Hormigeo 2
hormigeo-description = Hormigeo 2 was a PvP event organized by the streamer AldoGeo and 
    developed by Owleaf Studio in 2023. More than 90 content creators were divided into 6 groups to protect their bases
    into 6 groups to protect their bases and their queen ants, competing in various phases for resources and weaponry. 
    for resources and weaponry. The event was nominated for the Esland 2024 Award for Best Content Miniseries.

experiment = Experiment 110 and Experiment Hardcore
experiment-description = Experimento 110 was an ultra hardcore Minecraft series starring Spreen and hosted by Owleaf Studio between July and October 2023. 
    In this series, the Argentine streamer faced challenges designed by “Doctor Buhaje” in a fictional reality, culminating in a final battle.
    Experimento Hardcore, which followed in November and December 2023, involved 60 creators competing in daily quests with new elements such as monsters, objects and bosses.

impostor = Who is the Impostor?
impostor-description = The “Who's the Impostor?” event organized by JuanSGuarnizo and Owleaf Studio took place in Minecraft 
    on March 13, 2022. It consisted of debates where participants had to find out who was lying about a shared feature. 
    The activity, streamed on Juan's Twitch channel, was divided into two rounds of six players each. All of them, competing 
    for a prize of $500.

platform = Juaniquilacopa: The Platform
platform-description = The Juaniquilacopa: The Platform, inspired by the Spanish movie "The Platform" released in 2019, took place in Minecraft
    on April 12, 2023. Organized by JuanSGuarnizo in collaboration with Owleaf Studio, the event brought together 60 participants in a similar environment
    where cells were distributed vertically and players had to survive by changing levels each round. Each cell housed
    two participants who could fight with each other or with others to get food and survive.
    The event had a second edition a week later and was also nominated for the Esland Award for Best Content Miniseries.

god = Universe of “El Dios de Todo”.
god-description = JuanSGuarnizo and Owleaf Studio created two Minecraft series: "El Dios de Todo" and "Despu\xe9s de Todo". Premiering in 2023, El Dios de Todo follows Juan Cubito in his quest to become a god. 
    Despu\xe9s de Todo, its sequel with side stories, started in October of the same year. El Dios de Todo was nominated for Best Content Series at the Esland Awards 2024.

dedsafio = Dedsafio Minecraft 1
dedsafio-description = Dedsaf\xedo Minecraft is a series created by ElDed and developed by Owleaf Studio.
    The first season took place in 2021 and featured over 60 players. It featured daily challenges and weekly events
    weekly events, as well as a roulette wheel that increased the difficulty of the game daily. The fallen could be revived
    or participate in combat in the Gulag. The goal was to survive until the final battle against the villain REviil, 
    the antagonist of the series.

dedsafio-two = Dedsaf\xedo Minecraft 2
dedsafio-two-description = Dedsafio Minecraft 2 took place in 2022, with 84 content creators. Supported by 
    Twitch Rivals and developed by Owleaf Studio, it lasted 29 days. It also won the Esland Award for Best Content Series in 2023.
    The season introduced themed Gulags, new dungeons and bosses. Roulette featured threats that increased the difficulty of the server daily, all under the dark influense of REviil.

bingo = Dedsaf\xedo Bingo 1
bingo-description = The first edition of Dedsaf\xedo Bingo was held on October 1, 2021 with the participation of 80 content creators, hosted by ElDed and 
    developed by Owleaf Studio. Each player was given a five-by-five square bingo card, and the goal was to complete a specific pattern before
    the others. The event included four rounds: the first phase was individual, the second in pairs, and the remaining rounds in teams of four. The challenges ranged from
    completing Minecraft objects to more complex challenges.

bingo-two = Dedsaf\xedo Bingo 2
bingo-two-description = The second edition of Dedsaf\xedo Bingo took place from August 28-30, 2023 with 160 content creators. Again
    it was organized by ElDed, developed by Owleaf Studio and sponsored by Twitch Rivals. It had individual, pair and team rounds and events. 
    It also featured classic bingos and custom challenges. On the last day, it also added Minecraft to the Dedsaf\xedo roulette to add more difficulty.

juaniquilacopa = Juaniquilacopa: BuildBattle
juaniquilacopa-description = Juaniquilacopa: BuildBattle was a building competition organized by JuanSGuarnizo in 2022, in collaboration with Owleaf Studio. 
    collaboration with Owleaf Studio. It had 50 Spanish-speaking content creators building on different themes, 
    being graded by Quackity, Auron and Juan. The event included a nomination for the Esland 2023 Award for Best Content Miniseries.

juaniquilacopa-two = Juaniquilacopa: BuildBattle 2
juaniquilacopa-two-description = Juaniquilacopa: BuildBattle 2 was the second edition of a construction competition organized by JuanSGuarnizo in 2024, in collaboration 
    with Owleaf Studio. It had 60 Spanish-speaking content creators building on different themes, qualifying each other.

skyblock = Patxingar's Skyblock
skyblock-description = The popular SkyBlock mode in Minecraft reached a new level with a series of seven episodes starring IlloJuan, 
    Andres (elBokeron) and Guille, in collaboration with Owleaf Studio. Airing between April 14 and June 19, 2024, this series stood out for its custom programming, mobs and unique bosses, unique 
    programming, unique mobs and bosses, original music and magical portals. In addition, it offered a plot that went beyond simple survival, with objectives that 
    players had to accomplish in a creative and challenging environment.

dedsafio-three = Dedsaf\xedo Minecraft 3
dedsafio-three-description = Minecraft Challenge 3 took place in 2024, featuring over 120 content creators. It was developed by Owleaf Studio and lasted 30 days.
    The third edition introduced new Gulags, dungeons, monsters, and bosses. The roulette presented daily threats that increased the server's difficulty, all under the dark influense of REviil.

backrooms-two = Backrooms vol.2
backrooms-two-description = On September 7, 2024, Soarinng and Kori Kimura organized the second edition of the Backrooms in Minecraft
    for 100 content creators. It was developed by Owleaf Studio and featured eight different levels. Additionally, the server was opened to the public after the event.

salvando-navidad = Salvando la Navidad
salvando-navidad-description = Salvando la Navidad is an event organized by WestCOL, sponsored by Kick, and developed by Owleaf Studio. 
    It took place between December 16 and 18, 2024, and involved over 65 content creators.

guardianes-dedsafio = Guardianes del Dedsafio
guardianes-dedsafio-description = Coming Soon...

contact = At Owleaf Studio we offer a wide range of products and services. Our experience includes producing competitive tournaments,
    role-playing game series, entertainment content, and organizing special events for both content creators and the general public.
    <br/>
    <br/>
    We have extensive experience managing public and private servers, developing custom mods,
    hosting virtual concerts, creating adventure maps, and other innovative projects within Minecraft.
    <br/>
    <br/>
    To explore the full list of our offerings and see what we have achieved, we invite you to <See-More>see more</See-More>.
    <br/>
    <br/>
    Do you have a brilliant idea and don't know where to start? Do you want to create your project 
    and would like to see a catalog of proposals? Contact us and let's work together!
    <br/>
    <br/>
    Contact: contact@owleaf.studio

search =
    .placeholder = Type to search...

discord = Discord
github = GitHub

footer-about = About
footer-clients = Collaborators
footer-community = Community
footer-company = Company

# Footer links
footer-discord = Discord community
footer-twitter = Twitter page
footer-github = GitHub Organization

# Legal stuff on the footer
footer-legal = Legal
footer-privacy = Privacy Policy
footer-terms = Terms & Conditions
footer-all-rights = All Rights Reserved.

# Contact
contact-header = Contact
contact-name =
    .label = Name
contact-email =
    .label = Email
contact-subject =
    .label = Subject
contact-message =
    .label = Message
    .placeholder = Write your message to us here.
    .description = Remember to write down all the information relevant to what you need.
contact-send = Send

peak-viewers = Peak Viewers
average-viewers = Average Viewers
show-duration = Hours of Show Duration
watch-time = Watch Time
participants = Participants

client-download-platform = Download for <Platform />
client-download-header = Download Owleaf Client for <Platform />
client-download-description = The Owleaf Client is a Minecraft launcher that
    allows you to join our events, public and private servers,
    as well as keep our mods up to date, all in one easy-to-use package.
client-download-more = More Download Options
client-download-all = All Download Options
client-download-all-description = The Owleaf Client is available across many desktop platforms,
    so please chose one of the following available download options.
client-download-tos = By downloading the Owleaf Client you agree to our
    <Terms>terms of service</Terms> and <Privacy>privacy policy</Privacy>.`),
        s = new t.WZ(`-brand-name=Owleaf Studio
slogan = Innovando tu experiencia de juego

navbar-contact = Contacto
navbar-client = Descargar Owleaf Client

featured = Videos <colored>destacados</colored>.

about-title = Creamos <br/> <colored>Eventos</colored>.
about = Somos un estudio especializado en la creación de eventos único y emocionantes.
    Nos dedicamos a ofrecer experiencias inolvidables tanto para el público en general como para creadores de contenido, Próximamente, ampliaremos 
    nuestros servicios para incluir a más creadores de contenido, ayudándoles a llevar sus ideas al siguiente nivel.

stats-event = Evento
stats-watch-time = Horas visualizadas
stats-peak-viewers = Pico de espectadores
stats-average-viewers = Promedio de espectadores
stats-participants = Participantes
stats-duration = Duraci\xf3n (horas)
stats-dates = Fechas
stats-collaborators = 

minecraft-title = Nuestras creaciones en <minecraft>Minecraft</minecraft>.
minecraft-descriptions = A lo largo de los a\xf1os hemos producido muchos tipos de proyectos.
    Entre ellos se encuentran torneos competitivos, series de rol, entretenimiento, y la realizaci\xf3n 
    de eventos especiales tanto para creadores de contenido como para el p\xfablico general. Adem\xe1s de gesti\xf3n 
    de servidores p\xfablicos y privados, desarrollo de mods personalizados, conciertos virtuales, mapas de aventura, 
    entre otras creaciones posibles en Minecraft.
    Si te interesa desarrollar tu propio proyecto, \xa1Cont\xe1ctanos y trabajemos juntos!

backrooms = The Backrooms
backrooms-description = El t\xe9rmino "Backrooms" proviene de una leyenda urbana o creepypasta.
    El 22 de abril de 2023, el streamer mexicano Soarinng organiz\xf3 un evento en Minecraft con
    60 creadores de contenido, divididos en diez equipos. Desarrollado por Owleaf Studio, el
    juego tuvo cuatro niveles. El evento fue nominado a Mejor Miniserie de Contenido en los Premios Esland 2024.

squidcraft = Squid Craft Games 1
squidcraft-description = La primera edici\xf3n de los Squid Craft Games, inspirada en "Squid Games" de Netflix,
    se celebr\xf3 en Minecraft en 2022. Fue organizada por Auronplay, Rubius y Komanche, junto a Twitch Rivals y Owleaf Studio.
    Los participantes compitieron por cien mil d\xf3lares en 12 juegos, replicando a la serie original. Fue premiada como Mejor
    Miniserie de Contenido en los Premios Esland.

squidcraft-two = Squid Craft Games 2
squidcraft-two-description = La segunda edici\xf3n de los Squid Craft Games tuvo lugar en 2023 con 200 creadores de contenido,
    incluyendo jugadores angloparlantes e hispanohablantes. Esta vez, las pruebas estuvieron ambientadas en el Valle de los
    Monumentos de Estados Unidos. El evento, organizado por Rubius, Auronplay, Komanche y Twitch Rivals gan\xf3 nuevamente el Premio Esland a
    Mejor Miniserie de Contenido.

squidcraft-three = Squid Craft Games 3
squidcraft-three-description = La tercera edici\xf3n de los Squid Craft Games tuvo lugar en 2024 con 200 creadores de contenido,
    incluyendo jugadores angloparlantes e hispanohablantes. Esta vez, las pruebas estuvieron ambientadas en la Ant\xe1rtida. 
    El evento fue organizado por Rubius, Auronplay, Komanche y Twitch Rivals.

saw = Saw Minecraft Games
saw-description = Los Saw Minecraft Games estuvieron inspirados en la franquicia "Saw" y fueron organizados por Auronplay,
    con el desarrollo de Owleaf Studio. 100 creadores de contenido hispanohablantes compitieron en desaf\xedos mortales. El
    evento alcanz\xf3 picos de audiencia de miles de espectadores y fue nominado a mejor miniserie en los Premios Esland 2023,
    quedando en segundo lugar detr\xe1s de los Squid Craft Games.

twitchcon = TwitchCon Par\xeds 2023
twitchcon-description = En la TwitchCon de Par\xeds, del 8 al 9 de julio de 2023, ocho equipos compitieron en varios desaf\xedos en Minecraft,
    todos ellos desarrollados por Owleaf: Una carrera de bicicletas por Par\xeds, nataci\xf3n con obst\xe1culos en el R\xedo Sena, organizar frutas
    y verduras en un mercado, y una carrera de obst\xe1culos entre los edificios de la ciudad. Los tres primeros lugares recibieron premios
    en efectivo de 2,500 d\xf3lares.

noobsters = Noobsters
noobsters-description = En 2014, antes de la creaci\xf3n de Owleaf Studio, 
    naci\xf3 Noobsters, un servidor de Minecraft dedicado a modalidades como 
    SkyWars y UltraHardCore (UHC). Noobsters organiz\xf3 m\xe1s de 3,000 torneos 
    de UHC, partidas de Skywars y un servidor en modo supervivencia.

velada = La Velada del A\xf1o
velada-description = El Evento del A\xf1o, llevado a cabo por Ibai en la vida real, dentro de la serie del a\xf1o. La Velada del A\xf1o se uni\xf3 a Tortillaland 2, 
    serie organizada por AuronPlay, gracias a la producci\xf3n de Owleaf Studio. Se recre\xf3 el ambiente del Pabell\xf3n de Badalona para la edici\xf3n 
    2022 para despedir a Ibai de la serie. Los combates, m\xfasica y alfombra roja hicieron que el evento sea inolvidable para todos.

juaniquilacopa = Juaniquilacopa: BuildBattle
juaniquilacopa-description = Juaniquilacopa: BuildBattle fue una competici\xf3n de construcci\xf3n organizada por JuanSGuarnizo en 2022, 
    en colaboraci\xf3n con Owleaf Studio. La misma, tuvo a 50 creadores de contenido hispanohablantes construyendo sobre distintas tem\xe1ticas, 
    siendo calificados por Quackity, Auron y Juan. El evento cont\xf3 con una nominaci\xf3n al Premio Esland 2023 como Mejor Miniserie de Contenido.

hunt-and-run = Hunt and Run
hunt-and-run-description = Hunt and Run, organizado por Twitch Rivals en colaboraci\xf3n con IlloJuan y desarrollado por Owleaf, es un evento tipo Battle Royale
    inspirado en Los Juegos del Hambre. Se llev\xf3 a cabo en enero de 2024 y cont\xf3 con la participaci\xf3n de 200 jugadores de habla hispana y anglosajona, que compitieron
    durante 4 d\xedas por un premio de 100 mil d\xf3lares. El evento introdujo armas, nuevas creaciones y herramientas \xfanicas, adem\xe1s de ubicaciones hechas especialmente para
    Hunt and Run.

hormigeo = Hormigeo 2
hormigeo-description = Hormigeo 2 fue un evento PvP organizado por el streamer AldoGeo y 
    desarrollado por Owleaf Studio en 2023. M\xe1s de 90 creadores de contenido se dividieron
    en 6 grupos para proteger sus bases y a sus hormigas reinas, compitiendo en diversas fases 
    por recursos y armamento. El evento fue nominado 
    al Premio Esland 2024 como Mejor Miniserie de Contenido.

experiment = Experimento 110 y Experimento Hardcore
experiment-description = Experimento 110 fue una serie ultra hardcore de Minecraft protagonizada por Spreen y organizada por Owleaf Studio entre julio y octubre de 2023. 
    En esta serie, el streamer argentino enfrent\xf3 desaf\xedos dise\xf1ados por el “Doctor Buhaje” en una realidad ficticia, culminando en una batalla final.
    Experimento Hardcore, que sigui\xf3 en noviembre y diciembre de 2023, involucr\xf3 a 60 creadores compitiendo en misiones diarias con elementos nuevos como monstruos, objetos y jefes.

impostor = \xbfQui\xe9n es el Impostor?
impostor-description = El evento "\xbfQui\xe9n es el Impostor?" organizado por JuanSGuarnizo y Owleaf Studio se llev\xf3 a cabo en Minecraft 
    el 13 de marzo de 2022. Consisti\xf3 en debates donde los participantes deb\xedan descubrir qui\xe9n ment\xeda sobre una caracter\xedstica compartida. 
    La actividad, transmitida por el canal de Twitch de Juan, se dividi\xf3 en dos rondas de seis jugadores cada una. Todos ellos, compitiendo 
    por un premio de 500 d\xf3lares.

platform = Juaniquilacopa: El Hoyo
platform-description = La Juaniquilacopa: El Hoyo, inspirada en la pel\xedcula espa\xf1ola con el mismo nombre estrenada en 2019, se llev\xf3 a cabo en Minecraft
    el 12 de abril de 2023. Organizado por JuanSGuarnizo en colaboraci\xf3n con Owleaf Studio, el evento reuni\xf3 a 60 participantes en un ambiente similar
    al de la pel\xedcula, donde las celdas se distribu\xedan verticalmente y los jugadores deb\xedan sobrevivir cambiando de nivel en cada ronda. Cada celda albergaba
    a dos participantes que pod\xedan luchar entre s\xed o con otros para conseguir comida y sobrevivir.
    El evento tuvo una segunda edici\xf3n una semana despu\xe9s y, adem\xe1s, fue nominado al Premio Esland como Mejor Miniserie de Contenido.

god = Universo de "El Dios de Todo"
god-description = JuanSGuarnizo y Owleaf Studio crearon dos series de Minecraft: El Dios de Todo y Despu\xe9s de Todo. Estrenada en 2023, 
    El Dios de Todo sigue a Juan Cubito en su b\xfasqueda de convertirse en un dios. Despu\xe9s de Todo, su secuela con historias secundarias,
    comenz\xf3 en octubre del mismo a\xf1o. El Dios de Todo fue nominada a Mejor Serie de Contenido en los Premios Esland 2024.

dedsafio = Dedsaf\xedo Minecraft 1
dedsafio-description = Dedsaf\xedo Minecraft es una serie creada por ElDed y desarrollada por Owleaf Studio.
    La primera temporada tuvo lugar en 2021 y cont\xf3 con m\xe1s de 60 jugadores. Presentaba desaf\xedos diarios y eventos
    semanales, adem\xe1s de una ruleta que aumentaba a diario la dificultad del juego. Los ca\xeddos pod\xedan ser revividos
    o participar en combates en el Gulag. El objetivo era sobrevivir hasta la batalla final contra el villano REviil, 
    antagonista de la serie.

dedsafio-two = Dedsaf\xedo Minecraft 2
dedsafio-two-description = Dedsaf\xedo Minecraft 2 se llev\xf3 a cabo en 2022, con 84 creadores de contenido. Apoyada por 
    Twitch Rivals y desarrollada por Owleaf Studio, dur\xf3 29 d\xedas. Adem\xe1s, gan\xf3 el Premio Esland a Mejor Serie de Contenido en 2023.
    La temporada introdujo Gulags tem\xe1ticos, nuevas dungeons y jefes. La ruleta presentaba amenazas que incrementaban la dificultad del 
    servidor a diario, siempre impulsadas por el malvado REviil.

bingo = Dedsaf\xedo Bingo 1
bingo-description = La primera edici\xf3n de Dedsaf\xedo Bingo se celebr\xf3 el 1 de octubre de 2021 con la participaci\xf3n de 80 creadores de contenido, organizada por ElDed y 
    desarrollada por Owleaf Studio. Cada jugador recibi\xf3 una tarjeta de bingo de cinco por cinco casillas, y el objetivo era completar un patr\xf3n espec\xedfico antes que
    los dem\xe1s. El evento incluy\xf3 cuatro rondas: la primera fase fue individual, la segunda en parejas, y las restantes en equipos de cuatro. Los desaf\xedos variaron desde
    completar objetos de Minecraft hasta retos m\xe1s complejos.

bingo-two = Dedsaf\xedo Bingo 2
bingo-two-description = La segunda edici\xf3n de Dedsaf\xedo Bingo se llev\xf3 a cabo del 28 al 30 de agosto de 2023 con 160 creadores de contenido. Nuevamente
    fue organizada por ElDed, desarrollada por Owleaf Studio y patrocinada por Twitch Rivals. Tuvo rondas y pruebas individuales, en parejas y en equipos. 
    Adem\xe1s, cont\xf3 con bingos cl\xe1sicos y retos personalizados. El \xfaltimo d\xeda, adem\xe1s, agreg\xf3 a la ruleta de Dedsaf\xedo Minecraft para sumar m\xe1s dificultad.

juaniquilacopa = Juaniquilacopa: BuildBattle
juaniquilacopa-description = Juaniquilacopa: BuildBattle fue una competici\xf3n de construcci\xf3n organizada por JuanSGuarnizo en 2022, en 
    colaboraci\xf3n con Owleaf Studio. La misma, tuvo a 50 creadores de contenido hispanohablantes construyendo sobre distintas tem\xe1ticas, 
    siendo calificados por Quackity, Auron y Juan. El evento cont\xf3 con una nominaci\xf3n al Premio Esland 2023 como Mejor Miniserie de Contenido.

juaniquilacopa-two = Juaniquilacopa: BuildBattle 2
juaniquilacopa-two-description = Juaniquilacopa: BuildBattle 2 fue la segunda edici\xf3n de una competici\xf3n de construcci\xf3n organizada por JuanSGuarnizo en 2024, 
    en colaboraci\xf3n con Owleaf Studio. La misma, tuvo a 60 creadores de contenido hispanohablantes construyendo sobre distintas tem\xe1ticas, calific\xe1ndose entre ellos.

skyblock = Patxingar's Skyblock
skyblock-description = La popular modalidad de SkyBlock en Minecraft alcanz\xf3 un nuevo nivel con una serie de siete episodios protagonizados por IlloJuan, 
    Andr\xe9s (elBokeron) y Guille, en colaboraci\xf3n con Owleaf Studio. Emitida entre el 14 de abril y el 19 de junio de 2024, esta serie destac\xf3 por su programaci\xf3n 
    personalizada, mobs y jefes \xfanicos, m\xfasica original y portales m\xe1gicos. Adem\xe1s, ofreci\xf3 una trama que iba m\xe1s all\xe1 de la simple supervivencia, con objetivos que 
    los jugadores deb\xedan cumplir en un entorno creativo y desafiante.

dedsafio-three = Dedsaf\xedo Minecraft 3
dedsafio-three-description = Dedsaf\xedo Minecraft 3 se llev\xf3 a cabo en 2024, con m\xe1s de 120 creadores de contenido. Fue desarrollada por Owleaf Studio 
    y dur\xf3 30 d\xedas. La tercera edici\xf3n introdujo nuevos Gulags, dungeons, monstruos y jefes. La ruleta presentaba amenazas que incrementaban la 
    dificultad del servidor a diario, siempre impulsadas por el malvado REviil.

backrooms-two = Backrooms vol.2
backrooms-two-description = El 7 de septiembre de 2024, Soarinng y Kori Kimura organizaron la segunda edici\xf3n de 
    los Backrooms en Minecraft para 100 creadores de contenido. Fue desarrollado por Owleaf Studio y cont\xf3 con ocho niveles diferentes. Adem\xe1s, el servidor fue abierto al p\xfablico luego del evento.

salvando-navidad = Salvando la Navidad
salvando-navidad-description = Salvando la Navidad es un evento organizado por WestCOL, patrocinado por Kick y desarrollado por Owleaf Studio. Tuvo lugar entre el 16 y 
    el 18 de diciembre de 2024 y participaron m\xe1s de 65 creadores de contenido.

guardianes-dedsafio = Guardianes del Dedsafio
guardianes-dedsafio-description = Pr\xf3ximamente...

aldogeo-description = AldoGeo es un streamer y youtuber mexicano que inici\xf3 en Twitch en 2018. 
    Actualmente, cuenta con m\xe1s de 1,8 millones de seguidores en su canal.
auron-description = Auronplay es un streamer y youtuber espa\xf1ol, que cuenta con un canal de m\xe1s de 30 
    millones de suscriptores en YouTube y m\xe1s de 12 millones en Twitch. En 2019 comenz\xf3 a realizar 
    transmisiones en esa plataforma, emitiendo diferentes juegos y actividades. Fue el primer streamer 
    del mundo en alcanzar 500 emisiones con m\xe1s de 100.000 espectadores.
elded-description = ElDed es un streamer y youtuber mexicano que crea contenido desde 2014. 
    En la actualidad emite en Twitch, donde cuenta con m\xe1s de 4,8 millones de seguidores.
geeklounge-description = Geek Lounge es la empresa encargada de la producci\xf3n de muchos de los eventos de 
    Twitch Rivals. La misma, es una plataforma de soluciones de broadcasting y marketing experiencial para marcas.
ibai-description = Ibai es un streamer, presentador de esports y youtuber espa\xf1ol. Es conocido, adem\xe1s, por sus eventos 
    multitudinarios de entretenimiento en Twitch, plataforma en la que ha roto una gran cantidad de r\xe9cords de audiencia. 
    Tiene el r\xe9cord mundial en “pico de espectadores” de Twitch, con m\xe1s de 3,5 millones.
illojuan-description = IlloJuan es un streamer espa\xf1ol. Emite su contenido en Twitch, donde cuenta con m\xe1s de 4 millones de seguidores. 
    Tambi\xe9n posee un canal de Youtube que supera los 2 millones de suscriptores.
juansguarnizo-description = Juan Guarnizo es un streamer y youtuber colombiano 
    que reside en M\xe9xico. En la actualidad realiza transmisiones en Twitch, 
    donde cuenta con m\xe1s de 10 millones de seguidores.
komanche-description = Komanche es un streamer de El Salvador que emite en Twitch, 
    plataforma en la que posee m\xe1s de 1,6 millones de seguidores.
rubius-description = Rubius comenz\xf3 en YouTube a principios de 2012, siendo una de las caras m\xe1s reconocidas 
    del panorama internacional y teniendo m\xe1s de 40 millones de suscriptores. Inici\xf3 las transmisiones en 
    Twitch de forma m\xe1s regular en 2018. Actualmente, sobrepas\xf3 los 15 millones de seguidores.
soarinng-description = Soarinng es un creador de contenido de M\xe9xico que emite en Twitch. 
    Su canal cuenta con m\xe1s de 300 mil seguidores.
spreen-description = Spreen es un youtuber y streamer argentino. Emite en 
    directo en Kick, donde cuenta con 700 mil seguidores. Adem\xe1s, transmiti\xf3 en Twitch durante 
    mucho tiempo, teniendo m\xe1s de 9 millones de seguidores en la plataforma.
twitch_rivals-description = Los Rivals son torneos de esports en diferentes videojuegos, 
    organizados por Twitch para los creadores de contenido de la plataforma. Los mismos 
    otorgan recompensas y premios en efectivo para los streamers.
twitch-description = Twitch es una plataforma en l\xednea lanzada en 2011, donde las personas pueden transmitir en vivo actividades como videojuegos, 
    arte, m\xfasica y conversaciones. Los usuarios pueden ver y participar en tiempo real, interactuando con los streamers a trav\xe9s de un chat. 
    Es especialmente popular entre gamers y creadores de contenido que desean compartir sus habilidades y conectarse con sus seguidores.
westcol-description = WestCOL es un streamer colombiano que inici\xf3 su carrera en 2018 transmitiendo por Twitch. Actualmente, es uno de 
    los creadores de contenido m\xe1s grandes en Kick, con m\xe1s de 1.7 millones de seguidores.
emastersensei-description = E-MasterSensei es un creador de contenido mexicano, que cuenta con un canal de m\xe1s de 17.8 millones de
    suscriptores en YouTube.                        

contact = En Owleaf Studio nos especializamos en distintos productos y servicios. Entre nuestras ofertas se incluyen la producci\xf3n de torneos competitivos, 
    series de rol, entretenimiento, y la realizaci\xf3n de eventos especiales tanto para creadores de contenido como para el p\xfablico general.
    <br/>
    <br/>
    Adem\xe1s, contamos con experiencia en gesti\xf3n de servidores p\xfablicos y privados, desarrollo de mods personalizados, 
    conciertos virtuales, mapas de aventura entre otras creaciones posibles en Minecraft.
    <br/>
    <br/>
    Si quieres conocer m\xe1s acerca de los tipos de productos y servicios que ofrecemos, as\xed como lo que hemos construido antes, te invitamos a <See-More>ver m\xe1s</See-More>.
    <br/>
    <br/>
    \xbfTienes una idea brillante y no sabes por d\xf3nde iniciar? \xbfQuieres crear tu proyecto y te gustar\xeda ver un 
    cat\xe1logo de propuestas? \xa1Cont\xe1ctanos y trabajemos juntos!
    <br/>
    <br/>
    Contact: contact@eufonia.studio

search =
    .placeholder = Escribe para buscar...

discord = Discord
github = GitHub

footer-about = Acerca de
footer-clients = 
footer-community = Comunidad
footer-company = Empresa

# Enlaces de pie de p\xe1gina
footer-discord = Comunidad Discord
footer-twitter = P\xe1gina de Twitter
footer-github = Organizaci\xf3n GitHub

# Asuntos legales en el pie de p\xe1gina
footer-legal = Legal
footer-privacy = Pol\xedtica de privacidad
footer-terms = T\xe9rminos y condiciones
footer-all-rights = Todos los derechos reservados.

# Contact
contact-header = Contacto
contact-name =
    .label = Nombre
contact-email =
    .label = Correo Electr\xf3nico
contact-subject =
    .label = Asunto
contact-message =
    .label = Mensaje
    .placeholder = Escribe tu mensaje para nosotros aqu\xed.
    .description = Recuerda escribir toda la informaci\xf3n relevante a lo que necesitas.
contact-send = Enviar

peak-viewers = Pico de viewers
average-viewers = Promedio de viewers
show-duration = Horas de Duraci\xf3n del show
watch-time = Horas visualizadas
participants = Participantes

client-download-platform = Descargar para <Platform />
client-download-header = Descargar Owleaf Client para <Platform />
client-download-description = El Owleaf Client es un launcher de Minecraft que te permite unirte a nuestros eventos,
    servidores p\xfablicos y privados, adem\xe1s de mantener nuestros mods actualizadas,
    todo en un paquete f\xe1cil de usar.
client-download-more = M\xe1s Opciones de Descarga
client-download-all = Todas las Opciones de Descarga
client-download-all-description = El cliente Owleaf est\xe1 disponible en varias
    plataformas de escritorio, as\xed que elije una de las siguientes opciones de descarga disponibles.
client-download-tos = Al descargar el Owleaf Client est\xe1s de acuerdo con nuestros
    <Terms>t\xe9rminos de servicio</Terms> y <Privacy>pol\xedtica de privacidad</Privacy>.`);
      let d = new Map(),
        l = new Map();
      function c(e, a, o) {
        return e.toLocaleString(a, o);
      }
      d.set("en-US", r),
        l.set("en-US", n._),
        d.set("es-ES", s),
        l.set("es-ES", i.es);
    },
    50594: function (e, a, o) {
      o.d(a, {
        _: function () {
          return c;
        },
      });
      var n = o(22735),
        i = o(2265),
        t = o(20747),
        r = o(31626),
        s = o(71564);
      let d = /<|&#?\w+;/,
        l = (e) => {
          console.warn(`[@fluent/react] ${e.name}: ${e.message}`);
        };
      class c {
        constructor(e, a = (0, r.g)(), o = l) {
          (this.bundles = t.B.from(e)),
            (this.parseMarkup = a),
            (this.reportError = o);
        }
        getBundle(e) {
          return (0, n.Q)(this.bundles, e);
        }
        areBundlesEmpty() {
          return !!this.bundles[Symbol.iterator]().next().done;
        }
        getString(e, a, o) {
          let n = this.getBundle(e);
          if (n) {
            let o = n.getMessage(e);
            if (o?.value) {
              let e = [],
                i = n.formatPattern(o.value, a, e);
              for (let a of e) this.reportError(a);
              return i;
            }
          } else
            this.areBundlesEmpty()
              ? this.reportError(
                Error(
                  "Attempting to get a string when no localization bundles are present.",
                ),
              )
              : this.reportError(
                Error(
                  `The id "${e}" did not match any messages in the localization bundles.`,
                ),
              );
          return o || e;
        }
        getElement(e, a, o) {
          let n, t;
          let r = this.getBundle(a);
          if (null === r)
            return (
              a
                ? this.areBundlesEmpty()
                  ? this.reportError(
                    Error(
                      "Attempting to get a localized element when no localization bundles are present.",
                    ),
                  )
                  : this.reportError(
                    Error(
                      `The id "${a}" did not match any messages in the localization bundles.`,
                    ),
                  )
                : this.reportError(
                  Error(
                    "No string id was provided when localizing a component.",
                  ),
                ),
              (0, i.createElement)(i.Fragment, null, e)
            );
          let l = r.getMessage(a),
            c = [];
          if (o?.attrs && l?.attributes) {
            n = {};
            let e = [];
            for (let [a, i] of Object.entries(o.attrs))
              i &&
                a in l.attributes &&
                (n[a] = r.formatPattern(l.attributes[a], o.vars, e));
            for (let a of e) this.reportError(a);
          }
          if ("string" == typeof e.type && e.type in s.Z)
            return (0, i.cloneElement)(e, {
              suppressHydrationWarning: !0,
              ...n,
            });
          let u = l?.value;
          if (!u)
            return (0, i.cloneElement)(e, {
              suppressHydrationWarning: !0,
              ...n,
            });
          c = [];
          let p = r.formatPattern(u, o?.vars, c);
          for (let e of c) this.reportError(e);
          if (!d.test(p) || null === this.parseMarkup)
            return (0, i.cloneElement)(
              e,
              { suppressHydrationWarning: !0, ...n },
              p,
            );
          if (o?.elems)
            for (let [e, a] of ((t = new Map()), Object.entries(o.elems)))
              (0, i.isValidElement)(a) && t.set(e.toLowerCase(), a);
          let m = this.parseMarkup(p).map(({ nodeName: e, textContent: a }) => {
            if ("#text" === e) return a;
            let o = e.toLowerCase(),
              n = null == t ? void 0 : t.get(o);
            return n
              ? "string" == typeof n.type && n.type in s.Z
                ? n
                : (0, i.cloneElement)(n, { suppressHydrationWarning: !0 }, a)
              : a;
          });
          return (0, i.cloneElement)(
            e,
            { suppressHydrationWarning: !0, ...n },
            ...m,
          );
        }
      }
    },
  },
]);

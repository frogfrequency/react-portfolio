// use \\n to make a linebreak in the detailInformation-text

export const projectsEnglish = [
    {
        title: 'react "portfolio"',
        type: 'website',
        description: 'egnlish',
        detailInformation: `more infos here coming!`,
        additionalInternLink: { target: 'https://frogfrequency.github.io/about', text: 'go to About'},
        technology: ['React, Javascript, CSS'],
        tryoutLink: undefined,
        sourcecodeLink: 'https://github.com/frogfrequency/react-portfolio',
        picKey: 'reactPortfolio',
        picCount: 5
    },
    {
        title: 'advent of code 2020',
        type: 'series of coding challenges',
        description: `25 coding challenges with two riddles each where the second one builds upon the first but is more difficult`,
        detailInformation: `If you've never heard of Advent of Code, you should definitely check it out! It helped me to improve my Javascript and general problem-solving 
        skills by a tremendous amount! As a guest you can unfortunately not see the respective second parts of the puzzles when visiting the website. 
        Since I am not sure (for copyright reasons) 
        whether I am allowed to openly publish the second parts I will refrain from doing so. When looking at my solutions you will notice that the folders and files are not named
        consitently and there might be more than one solution. Usually the highest number at the end of the filename marks the latest version which is probably the
        working solution. \\nIn general, the second parts tend to either add another level of complexity to the problem
        or make it harder to solve by simply increasing the amount of necessary computation by an immense amount (see anecdote below). My solutions are in no way ideal
        and if I were to refactor or rather redo them (which I'll probably do using C# or Java to deepen my knowledge about object-oriented languages) they would most
        certainly look very different! Almost every puzzle taught me something new and the respective solutions reflect my evolution from a complete beginner in
        creating problem solving algorithms to a ...well it is always hard to make statements about one's own abilities ;) However I believe that I have definately left the
        beginner territory and continuously getting better at solving problems. 

        \\n Anecdote:
        \\n Part one of the puzzle on day 23 
        requires you to simulate a game where in every round the order of some numbered cups is changed according to certain rules. It's fairly easy to simulate merely 100 
        rounds when there are only 9 cups in play. This changes significantly in part two where the cup-count increases to 1'000'000 and 10'000'000 rounds need to be
        simulated!\\n I estimated the computation time for the algorithm I created in part one to be over 50 hours to solve part two and I just couldn't find a way 
        to improve it's performance to such an extent. Since I managed to solve all the previous problems without searching the internet for solutions to 
        the specific problem, I absolutely 
        didn't want to start doing this on the third from last puzzle. My ego was in serious danger! Finally I had to give up and quickly found out that my 
        approach using an array to store the cups was unsuitable when working with a million elements. I found out that in this case linked lists were the key to success.
        Since I had only briefly heard of them I first had to properly understand the concept and how to implement it. Luckily because of the numerous but
        unfruitful attempts and time I had already invested in trying to solve the puzzle, the underlying problem was quite clear to me. Understanding the problem in
        the first place helped me alot to finally solve it by using a linked-list approach. (albeit with a computation time of 24 seconds which, to be frank, still isn't very impressive)`,
        additionalLink: { target: 'https://adventofcode.com/2020/about', text: 'visit AoC'},
        technology: ['Javascript'],
        tryoutLink: undefined,
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/tree/main/adventofcode',
        picKey: 'aoc',
        picCount: 8
    },
    {
        title: 'chess',
        type: 'game',
        description: 'a virtual chess game coded from scratch',
        detailInformation: `In retrospect, it was probably too early to attempt this project. I was too inexperienced (this was even before I started the
        Advent of Code puzzles) and so my coding skills were still very limited. I also had no real clue on how to approach bigger projects.
        I lost no thought about program structure, architecture or separation of different parts(It was only a few months later when I started reading books about
        these topics). Only after a while I realised, I had to start separating the display-layer from 
        the underlying gamelogic.
        I also placed functions that evaluate a piece's possible moves in another file. This was very difficult and tedious work since I was already in
        the middle of the implementation. It would have saved me countless hours of debugging if I had done this
        from the start. I also should have invested more time upfront in planning and designing the application thoroughly.
        Be that as it may, after many many hours of coding, chasing countless bugs in extensive debugging-session and at one point 
        even starting all over againg from scratch, I eventually managed to finish the project. \\n
        It is not a chess engine! It simply lets you move the pieces according to the game's rules (and such could be used to play a local game between two human players).
        However I totally underestimated this -on paper- simple requirement.
        If you know a thing or two about the game of chess, I can tell you that things like 'pawn promotion', 'en passant', 'castling', 'checkmate detection', 'pinned pieces'
        or the simple fact that pawns although they move straight, can only take diagonally, were very tricky to implement.
        \\n
        At the end I consciously didn't remove the square-id's or 
        any kind of square coloring during the game. It lets you guess how the underlying game logic works and I've also grown quite fond of them :) Especially the blue
        coloring that shows possible 'en passant' moves after an opposing pawn advances two squares at once.`, 
        technology: ['Javascript, HTML, CSS'],
        tryoutLink: 'https://frogfrequency.github.io/JS-Mini-Projects/simulators/chess/chess_v1_redesign/',
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/tree/main/simulators/chess/chess_v1_redesign',
        picKey: 'chess',
        picCount: 3
    },
    {
        title: 'graph guesser',
        type: 'game',
        description: 'a primitive game where you have to guess two variables so that a linear function with those two variables slices two previously shown rectangles',
        detailInformation: `One of the first apps I created when I first started using HTML and CSS. I later did some minor style changes like adding a background
        color or changing the font. To play it you either need a little knowledge about linear functions
        or a few minutes of time to try and figure it out.
        \\n
        In a few cases, the program may evaluate an answer as incorrect even though it is correct.
        Since the drawn graph consists of individual dots that are in some cases spread very far apart this error can occur.
        This happens primarily with large gradients/slopes (m-value) `,
        technology: ['Javascript, HTML, CSS'],
        tryoutLink: 'https://frogfrequency.github.io/JS-Mini-Projects/waves-and-graphs/graphGuesser_V1/',
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/tree/main/waves-and-graphs/graphGuesser_V1',
        picKey: 'graphGuesser',
        picCount: 2
    },
    {
        title: 'pixel estimator 2',
        type: 'game',
        description: 'a primitive game where you have to guess the percentage of dark tiles that are shown for a brief moment',
        detailInformation: `This is really nothing special. Just a very simple game I created when I first started using HTML and CSS. 
        My very first steps that were not pure "console applications". I later did some minor style changes like adding a background
        color or changing the font. The game should be self-explanatory and easy to understand.`,
        technology: ['Javascript, HTML, CSS'],
        tryoutLink: 'https://frogfrequency.github.io/JS-Mini-Projects/pixelEstimator_V2/',
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/tree/main/pixelEstimator_V2',
        picKey: 'pixelEstimator',
        picCount: 4
    },
    {
        title: 'poker probability calculator',
        type: 'simulation',
        description: 'a simulator that creates an immense number of poker hands and calculates the probabilities for each hand from it',
        detailInformation: `My very first real Javascript Project!
        I was told that working on projects is the only way to truly learn coding. So after learning basic javascript syntax on 
        freeCodeCamp.org I started working on this project. Since I was pretty much into poker back then, I decided to make a simulator
        and check whether the result would match wikipedia's probability tables. 
        It really helped me alot and also taught me the use and importance of 
        the debugger.
        \\n
        To understand it, you might need a bit of poker knowledge. In general the programm will generate 1'000'000 pokerhands
        and evaluate them. First a random poker deck is created and the topmost 7 cards are "drawn". The algorithm will then
        find the best possible hand that can be created with those 7 cards (either pair, two pair, three of a kind...).
        It then increases the counter for this specific hand (e.g. pairCounter++). After all 1'000'000 hands have been created
        you get a percentage probability for each combination. Important: the programm does not calculate the theoretical probability
        but instead simulates hands and derives the probabilties from them. It also does not differ between straight- and royal flushes.
        \\n
        Unfortunately the algorithm is not 100% accurate in his evaluation. It does not know that the ace can act as a one when
        creating straights. I simply forgot to implement this at the time. Before publishing this on my react-page I wanted to fix this bug
        but eventually decided against it. Since it was my first project I wanted to leave it in its original state.
        However as you can see from the screenshots, the probabilities are very close and the code seems to be working otherwise.
        When looking at the code nowadays, I realize that commenting and keeping your code clean and easy to understand is
        very important when coding!
        `,
        technology: ['Javascript'],
        tryoutLink: '',
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/blob/main/JS-only-projects/Poker/poker-master-build/Master_build.js',
        picKey: 'pokerCalc',
        picCount: 4
    },
]



///////////////////// GERMAN BELOW THIS ///////////////////////////


export const projectsGerman = [
    {
        title: 'react "portfolio"',
        type: 'Website',
        description: 'eine über github gehostete und mit react erstellte website, auf der meine bisherigen Kodierprojekte eingesehen und ausprobiert werden können',
        detailInformation: `Das Erstellen der Website mit React hat mir sehr viel Spass bereitet, da ich mein Vorwissen in Javascript, HTML und CSS sehr gut anweden konnte.
        Die Flexibilität des Frameworks hat mich überrascht. So fand ich zum Beispiel für fast alle meine Ideen auch eine Möglichkeit diese umzusetzen. 
        Durch den Node-Package-Managers konnte ich externe Komponenten einfach installieren und mit Hilfe der jeweiligen Dokumentationen auch rasch verwenden.
        Anfangs nutzte ich diese Komponenten nur sehr spärlich und wollte viele (z.B. Bilder-Gallerie, Animationen oder auch das Fenster für die Farbauswahl) selbst erstellen.
        Ich merkte dann aber schnell, dass dies zwar spannend, aber auch übertrieben aufwändig gewesen wäre. Ausserdem hätte ich auch mit gewaltigem Aufwand nicht
        so gute Resultate erzielen können. Es war also nur logisch möglichst guten Gebrauch von diesen Komponenten zu machen!
        Es war mir aber auch wichtig einzelne Funktionalitäten zuerst selber auszuprobieren.
        So griff ich meistens erst auf ein externe Komponenten zurück, nachdem ich sie
        selber nicht gescheit implementieren konnte oder aber mit meiner eigenen Lösung nicht zufrieden war. Es gibt daher im Quellcode bestimmt Stellen, die 
        unschön bzw. unvorteilhaft umgesetzt sind und die mit einer externen Komponenten sinnvoller realisiert wären. Es war von Anfang an nicht mein Ziel mustergültigen
        Code zu produzieren. Vielmehr wollte ich React so viel wie möglich ausprobieren und damit experimentieren.
        \\n
        Weitere Informationen können auf der About-Page gefunden werden.
        
        `,
        additionalInternLink: { target: 'https://frogfrequency.github.io/about', text: 'gehe zu About'},
        technology: ['React, Javascript, CSS'],
        tryoutLink: undefined,
        sourcecodeLink: 'https://github.com/frogfrequency/react-portfolio',
        picKey: 'reactPortfolio',
        picCount: 5
    },
    {
        title: 'advent of code 2020',
        type: 'Serie von Programmieraufgaben',
        description: `25 Programmieraufgaben mit je zwei Teilen wobei der zweite auf den ersten aufbaut und deutlich schwieriger ist`,
        detailInformation: `Wenn du noch nie vom Advent of Code gehört hast, solltest du das unbedingt nachholen!
        Ich konnte durch die Rätsel sowohl meine Javascript-, wie auch meine allgemeinen Problemlösefähigkeiten enorm verbessern.    
        Leider kannst du als Gast auf der Seite nur die jeweils ersten Teile der Rätsel sehen. 
        Da ich nicht sicher bin, ob ich aus urheberrechtlichen Gründen die zweiten Teile der Rätsel teilen darf, werde ich dies auch nicht tun.
        Wenn du meine Lösungen zu den Rätseln durchschaust, wirst du merken, dass die Namensgebung der Ordner und Dateien nicht konsistent ist und es teilweise
        auch mehrere Lösungen gibt. 
        Meistens ist dann die Datei mit der höchsten Versionsnummer die neuste und enthält die funktionierende Lösung.
        \\n
        Meistens erhöhen die zweiten Teile der Rätsel den Schwierigkeitsgrad der Rätsel entweder indem sie die Komplexität der Aufgabe erhöhen, oder indem sie 
        die nötigen Rechenschritte zur Lösungs des Problems massiv erhöhen (siehe Anekdote weiter unten).
        Meine Lösungen sind selten ideal und würde ich sie refaktorisieren oder sogar nochmals lösen 
        (was ich wahrscheinlich in C# oder Java machen werde um objektorientierte Sprachen besser kennen zu lernen), sähen sie bestimmt ganz anders aus!
        Bei praktisch jedem Rätsel konnte ich etwas neues lernen und die jeweiligen Lösungen widerspiegeln meinen Fortschritt vom kompletten Anfänger im Lösen
        von Kodieraufgaben zum ...nun es ist immer schwierig Aussagen über seine eigenen Fähigkeiten zu machen ;)  
        Ich bin jedoch überzeugt, dass ich definitiv kein Anfänger mehr bin und mich im Problemlösen stetig verbessere.

        \\n Anekdote:
        \\n
        Um den ersten Teil des Rätsels vom Tag 23 zu lösen musste ein einfaches Spiel simuliert werden. In jeder Runde musste die Reihenfolge von nummerierten Bechern
        unter der Anwendung bestimmter Regeln verändert werden.
        Es ist nicht besonders schwierig lediglich 100 Runden zu simulieren, wenn nur neun Becher im Spiel sind. 
        Dies ändert sich aber massgeblich, wenn die Zahl der Becher auf 1'000'000 und die Rundenzahl auf 10'000'000 erhöht wird.
        \\n
        Nach meiner Schätzung hätte der Algorithmus, den ich beim ersten Teil entwickelt hatte, über 50 Stunden gebraucht um die Lösung des zweiten Teils zu berechnen.  
        Ich fand keine Möglichkeit die Effizienz des Algorithmus in solch einem Ausmass zu verbessern.
        Da ich aber alle vorherigen Aufgaben ohne das Suchen im Internet nach Lösungen für das spezifische Problem lösen konnte, wollte ich damit bestimmt nicht bei 
        der drittletzten Aufgabe anfangen. 
        Mein Stolz war in grosser Gefahr!
        Schliesslich musste ich aber doch aufgeben und merkte danach schnell, dass mein Ansatz Arrays zu benutzen nicht geeignet war um eine Million Elemente zu
        speichern. 
        Ich fand heraus, dass verkettete Listen in diesem Fall der Schlüssel zum Erfolg waren.
        Da ich von diesen nur flüchtig etwas gehört hatte, musste ich das Konzept sowie auch die konkrete Implementierung zuerst erlernen.
        Zum Glück war mir die der Aufgabe zugrunde liegende Problematik klar, hatte ich mich doch schon sehr lange und intensiv mit ihr auseinandergesetzt. 
        Das Verständis des eigentlichen Problems half mir somit enorm beim Entwickeln der Lösung mithilfe einer verketteten Liste. (wenn auch die Rechenzeit von 24 Sekunden
        immernoch nicht besonders beeindruckend war)`,
        additionalLink: { target: 'https://adventofcode.com/2020/about', text: 'besuche AoC'},
        technology: ['Javascript'],
        tryoutLink: undefined,
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/tree/main/adventofcode',
        picKey: 'aoc',
        picCount: 8
    },
    {
        title: 'Schach',
        type: 'Spiel',
        description: 'ein virtuelles, von Grund auf programmiertes Schachspiel',
        detailInformation: `Rückblickend war es wohl zu früh dieses Projekt in Angriff zu nehmen.
        Ich war zu unerfahren (es war noch bevor ich die Advent of Code Aufaben begann) und meine Programmierfähigkeiten waren stark begrenzt. 
        Auch hatte ich keine wirkliche Ahnung wie man grössere Projekte angeht. 
        Ich verschwand keinen Gedanken an Dingen wie Programmstruktur, Architektur oder der gescheiten Aufteilung des Codes in Einheiten (erst Monate später
        begann ich mich mit Hilfe von Sachbüchern darüber richtig zu informieren). 
        Erst nach einiger Zeit merkte ich dann, dass ich die Darstellung auf dem Bildschirm von der zugrunde liegenden Spielelogik trennen musste. 
        Ausserdem begann ich die Funktionen für die Bestimmung der möglichen Züge einer Figur in einer separaten Datei zu speichern.
        Dies war sehr mühsam und aufwendig, da ich schon mitten in der eigentlichen Umsetzung war. 
        Hätte ich das schon von Anfang an konsequent gemacht, wären mir unzählige Stunden der Fehlersuche wohl erspart geblieben. 
        Auch wäre es gut gewesen mehr Zeit in die eigentliche Planung und das Design der Anwendung zu stecken. 
        Wie dem auch sei, nach vielen Stunden des Kodierens und unzähligen ausgedehnten Suchen nach Programmfehlern und an einem Punkt
        sogar einem kompletten Neustart des Projekts, konnte ich es letzten Endes dann doch abschliessen.
        \\n
        Es ist kein Schachcomputer! 
        Es lässt dich lediglich die Figuren entsprechend den Regeln im Schach bewegen (und könnte so zum Beispiel für ein
        lokales Spiel zu zweit genutzt werden).
        Ich unterschätze diese auf dem Papier doch sehr einfach klingende Anforderung an die Anwendung massiv.
        Wer sich ein wenig mit Schach auskennt kann sich vorstellen, dass Dinge wie "Bauernumwandlung", "en passant schlagen", "die Rochade",
        "das Erkennen von Mattpositionen", "Fesselung" oder die simple Tatsache, dass Bauern zwar geradeaus ziehen, aber nur diagonal schlagen, schwierig umzusetzen waren. 
        \\n
        Am Ende habe ich die Identifikationsnummern in den Felder und auch die farbliche Hervorhebung dieser während dem Spiel bewusst nicht aus dem Programm entfernt. 
        So kann man die zugrunde liegende Spielelogik erahnen und ausserdem sind sie mir nach den vielen Stunden doch ein wenig ans Herz gewachsen :)
        Besonders das blaue Einfärben gewisser Felder, welches mögliche "en passant" Züge anzeigt, nachdem ein gegnerischer Bauer einen Doppelschritt von
        der Grundlinie aus macht.`, 
        technology: ['Javascript, HTML, CSS'],
        tryoutLink: 'https://frogfrequency.github.io/JS-Mini-Projects/simulators/chess/chess_v1_redesign/',
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/tree/main/simulators/chess/chess_v1_redesign',
        picKey: 'chess',
        picCount: 3
    },
    {
        title: 'Graph-Errater',
        type: 'Spiel',
        description: 'GERMAN a primitive game where you have to guess two variables so that a linear function with those two variables slices two previously shown rectangles',
        detailInformation: `Eine der ersten Anwendungen, die ich erstellte als ich anfing HTML und CSS zu verwenden.
        Vor dem Einbinden in meine React-Website nahm ich dann noch kleine Stiländerungen (u.a. Schriftart und Hintergrundfarbe) vor.
        Um es zu spielen, braucht man entweder ein wenig Vorwissen über lineare Funktionen
        oder ein paar Minuten Zeit um es auszuprobieren und zu verstehen. 
        \\n
        Manchmal kann es vorkommen, dass das Programm eine Antwort als falsch bewertet, obwohl sie richtig ist.
        Da der gezeichnete Graph aus einzelnen, manchmal sehr weit auseinanderliegenden Punkten besteht, kann dieser Fehler auftreten.
        Dies passiert vor allem bei grossen Steigungen (m-Wert) `,
        technology: ['Javascript, HTML, CSS'],
        tryoutLink: 'https://frogfrequency.github.io/JS-Mini-Projects/waves-and-graphs/graphGuesser_V1/',
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/tree/main/waves-and-graphs/graphGuesser_V1',
        picKey: 'graphGuesser',
        picCount: 2
    },
    {
        title: 'Pixel-Errater 2',
        type: 'Spiel',
        description: 'ein primitives Spiel, bei dem man den Prozentsatz der dunklen Felder erraten muss, die für einen kurzen Moment angezeigt werden',
        detailInformation: `Dieses Spiel ist wirklich nichts Besonderes. Als ich anfing HTML und CSS zu benutzen, war es eine der ersten
        Programme, die ich damit erstellte. Zuvor hatte ich praktisch nur Apps und kleine Programme auf der Konsole erstellt.
        Vor dem Einbinden in meine React-Website nahm ich dann noch kleine Stiländerungen (u.a. Schriftart und Hintergrundfarbe) vor.
        Das Spiel sollte selbsterklärend und einfach zu verstehen sein.`,
        technology: ['Javascript, HTML, CSS'],
        tryoutLink: 'https://frogfrequency.github.io/JS-Mini-Projects/pixelEstimator_V2/',
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/tree/main/pixelEstimator_V2',
        picKey: 'pixelEstimator',
        picCount: 4
    },
    {
        title: 'Wahrscheinlichkeitsrechner für Poker',
        type: 'Simulator',
        description: 'GERMAN a simulator that creates an immense number of poker hands and calculates the probabilities for each hand from it',
        detailInformation: `GERMAN My very first real Javascript Project!
        I was told that working on projects is the only way to truly learn coding. So after learning basic javascript syntax on 
        freeCodeCamp.org I started working on this project. Since I was pretty much into poker back then, I decided to make a simulator
        and check whether the result would match wikipedia's probability tables. 
        It really helped me alot and also taught me the use and importance of 
        the debugger.
        \\n
        To understand it, you might need a bit of poker knowledge. In general the programm will generate 1'000'000 pokerhands
        and evaluate them. First a random poker deck is created and the topmost 7 cards are "drawn". The algorithm will then
        find the best possible hand that can be created with those 7 cards (either pair, two pair, three of a kind...).
        It then increases the counter for this specific hand (e.g. pairCounter++). After all 1'000'000 hands have been created
        you get a percentage probability for each combination. Important: the programm does not calculate the theoretical probability
        but instead simulates hands and derives the probabilties from them. It also does not differ between straight- and royal flushes.
        \\n
        Unfortunately the algorithm is not 100% accurate in his evaluation. It does not know that the ace can act as a one when
        creating straights. I simply forgot to implement this at the time. Before publishing this on my react-page I wanted to fix this bug
        but eventually decided against it. Since it was my first project I wanted to leave it in its original state.
        However as you can see from the screenshots, the probabilities are very close and the code seems to be working otherwise.
        When looking at the code nowadays, I realize that commenting and keeping your code clean and easy to understand is
        very important when coding!
        `,
        technology: ['Javascript'],
        tryoutLink: '',
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/blob/main/JS-only-projects/Poker/poker-master-build/Master_build.js',
        picKey: 'pokerCalc',
        picCount: 4
    },
]



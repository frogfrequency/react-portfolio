// use \\n to make a linebreak in the detailInformation-text

export const projectsEnglish = [
    {
        title: 'react "portfolio"',
        type: 'presentation page',
        description: 'a virtual chess game coded from scratch',
        detailInformation: `more infos here coming!`,
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
        whether I am allowed to openly publish them I will refrain from doing so. When looking at my solutions you will notice that the folders and files are not named
        consitently and there might be more than one solution. Usually the highest number at the end of the filename marks the latest version which is probably the
        working solution. \\nIn general, the second parts tend to either add another level of complexity to the problem
        or make it harder to solve by simply increasing the amount of necessary computation by an immense amount (see anecdote below). My solutions are in no way ideal
        and if I were to refactor or rather redo them (which I'll probably do using C# or Java to deepen my knowledge about object-oriented languages) they would most
        certainly look very different! Almost every puzzle taught me something new and the respective solutions reflect my evolution from a complete beginner in
        creating problem solving algorithms to a ...well it is always hard to make statements about one's own abilities ;) However I believe that I have definately left the
        beginner territory and that I am fairly adept in solving problems. 

        \\n Anecdote:
        \\n Part one of the puzzle on day 23 
        requires you to simulate a game where in every round the order of some numbered cups is changed according to certain rules. It's fairly easy to simulate merely 100 
        rounds when there are only 9 cups in play. This changes significantly in part two where the cup-count increases to 1'000'000 and 10'000'000 rounds need to be
        simulated!\\n I estimated the computation time for the algorithm I created in part one to be over 50 hours to solve part two and I just couldn't find a way 
        to improve it's performance to such an extent. Since I managed to solve all the previous problems without searching the internet for specific solution I absolutely 
        didn't want to start doing this on the third from last puzzle. My ego was in serious danger! Finally I had to give up and quickly found out that my 
        approach using an array to store the cups was unsuitable when working with a million elements. I found out that in this case linked lists were the key to success.
        Since I had only briefly heard of them I first had to properly understand the concept and how to implement it. Luckily because of the numerous but
        unfruitful attempts and time I had already invested in trying to solve the puzzle, the underlying problem was quite clear to me. Understanding the problem in
        the first place helped me alot to finally solve it by using a linked-list approach (albeit with a computation time of 24 seconds which, to be frank, still isn't very impressive)`,
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
        these topics). Eventually I intuitively started separating the display-layer from 
        the underlying gamelogic.
        I also placed functions that evaluate a piece's possible moves in another file. This was very difficult and tedious work since I was already in
        the middle of the implementation. It would have saved me countless hours of debugging if I had done this
        from the start. I also should have invested more time upfront in planning the project thoroughly.
        Be that as it may, after many many hours of coding, chasing countless bugs in extensive debugging-session and at one point 
        even starting all over againg from scratch, I eventually managed to finish the project. \\n
        It is not a chess engine! It simply lets you move the pieces according to the game's rules. I totally underestimated this -on paper- simple requirement.
        If you know a thing or two about the game of chess, I can tell you that things like 'pawn promotion', 'en passant', 'castling', 'checkmate detection', 'pinned pieces'
        or the simple fact that pawns although they move straight, can only take diagonally, were very tricky to implement. I consciously didn't remove the square-id's or 
        any kind of square coloring during the game. It lets you guess how the underlying game logic works and I've also grown quite fond of them :) Especially the blue
        coloring that shows possible 'en passant' moves after a pawn moves two squares at once. `, 
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
        detailInformation: 'we want detailed infos here!',
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
        My very first steps that were not pure console application". I later did some minor style changes like adding a background
        color or changing the font. `,
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
        type: 'Website (Präsentation)',
        description: 'eine react Website in der meine Projekte präsentiert werden',
        detailInformation: `mehr infos kommen hier!`,
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
        detailInformation: `GERMAN HERE If you've never heard of Advent of Code, you should definitely check it out! It helped me to improve my Javascript and general problem-solving 
        skills by a tremendous amount! As a guest you can unfortunately not see the respective second parts of the puzzles when visiting the website. 
        Since I am not sure (for copyright reasons) 
        whether I am allowed to openly publish them I will refrain from doing so. When looking at my solutions you will notice that the folders and files are not named
        consitently and there might be more than one solution. Usually the highest number at the end of the filename marks the latest version which is probably the
        working solution. \\nIn general, the second parts tend to either add another level of complexity to the problem
        or make it harder to solve by simply increasing the amount of necessary computation by an immense amount (see anecdote below). My solutions are in no way ideal
        and if I were to refactor or rather redo them (which I'll probably do using C# or Java to deepen my knowledge about object-oriented languages) they would most
        certainly look very different! Almost every puzzle taught me something new and the respective solutions reflect my evolution from a complete beginner in
        creating problem solving algorithms to a ...well it is always hard to make statements about one's own abilities ;) However I believe that I have definately left the
        beginner territory and that I am fairly adept in solving problems. 

        \\n Anecdote:
        \\n Part one of the puzzle on day 23 
        requires you to simulate a game where in every round the order of some numbered cups is changed according to certain rules. It's fairly easy to simulate merely 100 
        rounds when there are only 9 cups in play. This changes significantly in part two where the cup-count increases to 1'000'000 and 10'000'000 rounds need to be
        simulated!\\n I estimated the computation time for the algorithm I created in part one to be over 50 hours to solve part two and I just couldn't find a way 
        to improve it's performance to such an extent. Since I managed to solve all the previous problems without searching the internet for specific solution I absolutely 
        didn't want to start doing this on the third from last puzzle. My ego was in serious danger! Finally I had to give up and quickly found out that my 
        approach using an array to store the cups was unsuitable when working with a million elements. I found out that in this case linked lists were the key to success.
        Since I had only briefly heard of them I first had to properly understand the concept and how to implement it. Luckily because of the numerous but
        unfruitful attempts and time I had already invested in trying to solve the puzzle, the underlying problem was quite clear to me. Understanding the problem in
        the first place helped me alot to finally solve it by using a linked-list approach (albeit with a computation time of 24 seconds which, to be frank, still isn't very impressive)`,
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
        detailInformation: `GERMAN HERE In retrospect, it was probably too early to attempt this project. I was too inexperienced (this was even before I started the
        Advent of Code puzzles) and so my coding skills were still very limited. I also had no real clue on how to approach bigger projects.
        I lost no thought about program structure, architecture or separation of different parts(It was only a few months later when I started reading books about
        these topics). Eventually I intuitively started separating the display-layer from 
        the underlying gamelogic.
        I also placed functions that evaluate a piece's possible moves in another file. This was very difficult and tedious work since I was already in
        the middle of the implementation. It would have saved me countless hours of debugging if I had done this
        from the start. I also should have invested more time upfront in planning the project thoroughly.
        Be that as it may, after many many hours of coding, chasing countless bugs in extensive debugging-session and at one point 
        even starting all over againg from scratch, I eventually managed to finish the project. \\n
        It is not a chess engine! It simply lets you move the pieces according to the game's rules. I totally underestimated this -on paper- simple requirement.
        If you know a thing or two about the game of chess, I can tell you that things like 'pawn promotion', 'en passant', 'castling', 'checkmate detection', 'pinned pieces'
        or the simple fact that pawns although they move straight, can only take diagonally, were very tricky to implement. I consciously didn't remove the square-id's or 
        any kind of square coloring during the game. It lets you guess how the underlying game logic works and I've also grown quite fond of them :) Especially the blue
        coloring that shows possible 'en passant' moves after a pawn moves two squares at once. `, 
        technology: ['Javascript, HTML, CSS'],
        tryoutLink: 'https://frogfrequency.github.io/JS-Mini-Projects/simulators/chess/chess_v1_redesign/',
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/tree/main/simulators/chess/chess_v1_redesign',
        picKey: 'chess',
        picCount: 3
    },
    {
        title: 'Graph-Rater',
        type: 'Spiel',
        description: 'GERMAN a primitive game where you have to guess two variables so that a linear function with those two variables slices two previously shown rectangles',
        detailInformation: 'GERMAN we want detailed infos here!',
        technology: ['Javascript, HTML, CSS'],
        tryoutLink: 'https://frogfrequency.github.io/JS-Mini-Projects/waves-and-graphs/graphGuesser_V1/',
        sourcecodeLink: 'https://github.com/frogfrequency/JS-Mini-Projects/tree/main/waves-and-graphs/graphGuesser_V1',
        picKey: 'graphGuesser',
        picCount: 2
    },
    {
        title: 'Pixel-Rater 2',
        type: 'Spiel',
        description: 'GERMAN a primitive game where you have to guess the percentage of dark tiles that are shown for a brief moment',
        detailInformation: `GERMAN This is really nothing special. Just a very simple game I created when I first started using HTML and CSS. 
        My very first steps that were not pure console application". I later did some minor style changes like adding a background
        color or changing the font. `,
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



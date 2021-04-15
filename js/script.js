const colors = ["Color-Azul", "Color-Azul", "Color-Azul", "Color-Azul", "Color-Azul",
    "Color-Gris", "Color-Gris", "Color-Gris", "Color-Gris", "Color-Gris",
    "Color-Azul", "Color-Azul", "Color-Azul", "Color-Azul", "Color-Azul",
    "Color-Gris", "Color-Gris", "Color-Gris", "Color-Gris", "Color-Gris",
    "Color-Azul", "Color-Azul", "Color-Azul", "Color-Azul", "Color-Azul",
];

// Questions oredered by category
const questions = [ /*Category 1*/
    "¿Cuál es el juego más vendido de la historia?",
    "¿Cuál es considerado el peor juego jamás creado?",
    "¿Cuál es el código Konami?",
    "¿Cuál fue la primera consola portátil?",
    "¿A qué se dedicaba Nintendo en un principio?",
    /*Category 2*/
    "¿Cómo se llama el protagonista de Minecraft?",
    "¿Quién es el Jefe Maestro?",
    "¿Cuál es el personaje estrella de Pokémon?",
    "¿De qué tipo son los 3 pokemones iniciales?",
    "¿Cuál fue el nombre inicial de Mario Bros?",
    /*Category 3*/
    "¿En qué consola se estreno el Kinect?",
    "¿Cuál fue el nombre clave del desarrollo del Xbox Series X?",
    "¿Qué empresa desarrollo la consola Dreamcast?",
    "¿Cómo se llama la plataforma que lanzó Google jugar para videojuegos?",
    "¿Cuál fue la primera Consola doméstica?",
    /*Category 4*/
    "¿Qué empresa creo League of Legends?",
    "¿Cuál fue el nombre original de Pokémon?",
    "¿Cuál fue el primer Grand Theft Auto en 3D?",
    "¿En qué país se creó el juego Tetris?",
    "¿En qué año se lanzó el primer FIFA?",
    /*Category 5*/
    "¿De qué juego es este efecto de sonido?",
    "¿De qué juego es este efecto de sonido?",
    "¿De qué juego es este efecto de sonido?",
    "¿De qué juego es esta canción?",
    "¿De qué juego es esta canción?"
];

// Questions oredered by category
const answers = [ /*Category 1*/
    "Minecraft",
    "E.T. the Extra-Terrestrial",
    "↑ ↑ ↓ ↓ ← → ← → B A",
    "Microvision",
    "Nintendo Koppai se dedicaba a producir cartas.",
    /*Category 2*/
    "Steve",
    "El protagonista de la saga Halo.",
    "Pikachu",
    "Planta, Fuego y Agua.",
    "Jumpman",
    /*Category 3*/
    "Xbox 360",
    "Project Scarlett",
    "Sega",
    "Google Stadia",
    "Magnavox Odyssey",
    /*Category 4*/
    "Riot Games",
    "Pocket Monsters",
    "Grand Theft Auto III",
    "Unión Soviética, Moscú",
    "1993",
    /*Category 5*/
    "Age of Empires",
    "Pac-Man",
    "Metal Gear",
    "Tetris",
    "Crash Bandicoot"
];

var teams = prompt("Cantidad de equipos:");
var score = [];
var actualQues = -1;

//Preload -> Se carga una sola vez cuando se refresca la pagina
function preload() {
    var teamsView = document.getElementById("TeamPoints");

    for (var i = 1; i <= teams; i++) {
        console.log(i);
        score.push(0);
        teamsView.innerHTML += "<div class='Score' id='T" + i + "'> <h3>Equipo " + i + "</h3>" +
            "<div style='text-align: center;'>" +
            "<button class='Add' onclick='addPoints(" + (i - 1) + ",100)'>+</button>" +
            "<button class='Sub' onclick='addPoints(" + (i - 1) + ",-100)'>-</button>" +
            "</div>" +
            "<span>0</span>" +
            "</div>";
    }

    var recuadros = document.getElementsByClassName("Recuadro");
    console.log(recuadros.length);
    for (i = 0; i < recuadros.length; i++) {
        recuadros[i].className += " " + colors[i];
    }
}

//ShowPregunta -> Se ejecuta cada que se preciona un recuadro, muestra Pregunta
function showPregunta(index) {
    actualQues = index;

    var tablero = document.getElementsByClassName("Tablero");
    var pregunta = document.getElementsByClassName("Pregunta");
    tablero[0].className += " NoDisplay";
    pregunta[0].className = "Pregunta " + colors[index];

    var correct = document.getElementsByClassName("Correct");
    var goBack = document.getElementsByClassName("Close");

    correct[0].className = "Correct " + colors[index];
    goBack[0].className = "Close " + colors[index];

    var audio = document.getElementById("audio");
    var ans = document.getElementById("answer");
    var ques = document.getElementById("thisQuestion");
    ques.innerHTML = questions[index];
    ans.className += (" NoDisplay");
    ans.innerHTML = answers[index];

    switch (index) {
        case 20:
            audio.innerHTML = "<audio controls src='sounds/Wololo.mp3'></audio>";
            break;

        case 21:
            audio.innerHTML = "<audio controls src='sounds/Waka.mp3'></audio>";
            break;

        case 22:
            audio.innerHTML = "<audio controls src='sounds/Alert.mp3'></audio>";
            break;

        case 23:
            audio.innerHTML = "<audio controls src='sounds/tetris.mp3'></audio>";
            break;

        case 24:
            audio.innerHTML = "<audio controls src='sounds/crash.mp3'></audio>";
            break;

        default:
            break;
    }
}

//ShowAnswer -> Shows the answer of the question
function showAnswer() {
    var ans = document.getElementById("answer");
    ans.className = "answer";
}

//Hide -> Se ejecuta cada que showPregunta() lo hace, marca un recuadro como usado
function hide(index) {
    var faltan = document.getElementsByClassName("Falta");
    faltan[index].className += " NoDisplay";
    var listos = document.getElementsByClassName("Done");
    listos[index].className = "Done";
}

//AddPoints -> Suma o resta puntos a un equipo, y actualiza el score
function addPoints(team, val) {
    score[team] += val;

    console.log("ADDING");
    console.log(score);

    var puntos = document.getElementsByClassName("Score");
    puntos[team].lastElementChild.innerHTML = score[team];
}

//ClosePregunta -> Hides the question and shows the board
function closePregunta() {
    var tablero = document.getElementsByClassName("Tablero");
    var pregunta = document.getElementsByClassName("Pregunta");
    var ans = document.getElementById("answer");
    pregunta[0].className = "Pregunta NoDisplay";
    tablero[0].className = "Tablero";

    var audio = document.getElementById("audio");
    audio.innerHTML = "";
}

function correctAnswer() {
    hide(actualQues);
    var tablero = document.getElementsByClassName("Tablero");
    var pregunta = document.getElementsByClassName("Pregunta");
    var ans = document.getElementById("answer");
    pregunta[0].className = "Pregunta NoDisplay";
    tablero[0].className = "Tablero";

    var audio = document.getElementById("audio");
    audio.innerHTML = "";
}
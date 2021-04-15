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
    "¿Cuál fue el nombre clave del Xbox One?",
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
const questions = [ /*Category 1*/
    "",
    "",
    "",
    "",
    "",
    /*Category 2*/
    "",
    "",
    "",
    "",
    "",
    /*Category 3*/
    "",
    "",
    "",
    "",
    "",
    /*Category 4*/
    "",
    "",
    "",
    "",
    "",
    /*Category 5*/
    "",
    "",
    "",
    "",
    ""
];

// var teams = prompt("Cantidad de equipos:");
var score = [];
var teams = 3;

//Preload -> Se carga una sola vez cuando se refresca la pagina
function preload() {
    var teamsView = document.getElementById("TeamPoints");

    for (var i = 1; i <= teams; i++) {
        console.log(i);
        score.push(0);
        teamsView.innerHTML += "<div class='Score' id='T" + i + "'> <h3>Team " + i + "</h3>" +
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
    hide(index);

    var tablero = document.getElementsByClassName("Tablero");
    var pregunta = document.getElementsByClassName("Pregunta");
    tablero[0].className += " NoDisplay";
    pregunta[0].className = "Pregunta " + colors[index];

    var goBack = document.getElementsByClassName("Close");
    goBack[0].className = "Close " + colors[(index + 3) % 12];

    var audio = document.getElementById("audio");
    var aux = document.getElementById("thisQuestion");
    aux.innerHTML = questions[index];

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

//ClosePregunta -> Esconde la pregunta y muestra el tablero
function closePregunta() {
    var tablero = document.getElementsByClassName("Tablero");
    var pregunta = document.getElementsByClassName("Pregunta");
    pregunta[0].className = "Pregunta NoDisplay";
    tablero[0].className = "Tablero";

    var audio = document.getElementById("audio");
    audio.innerHTML = "";
}
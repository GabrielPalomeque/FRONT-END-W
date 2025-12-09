// 1. Estado del juego (Variables globales)
let userScore = 0;
let computerScore = 0;

// 2. Caché del DOM (Guardamos los elementos en variables para no buscarlos a cada rato)
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("piedra");
const paper_div = document.getElementById("papel");
const scissors_div = document.getElementById("tijera");

// 3. Funciones del Juego

function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijera'];
    // Genera 0, 1 o 2 aleatoriamente
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(user, computer) {
    userScore++; // Aumenta tu puntaje
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    // Mostramos qué pasó (Tijera vence a Papel...)
    result_p.innerHTML = `${user.toUpperCase()} vence a ${computer.toUpperCase()}. ¡TÚ GANAS! 🔥`;
    
    // Efecto visual verde en el botón que tocaste
    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add('green-glow');
    
    // Quitamos el efecto después de 300ms (0.3 seg)
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user, computer) {
    computerScore++; // Aumenta puntaje CPU
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${user.toUpperCase()} pierde contra ${computer.toUpperCase()}. ¡PERDISTE! 💩`;
    
    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, computer) {
    result_p.innerHTML = `${user.toUpperCase()} es igual a ${computer.toUpperCase()}. ¡EMPATE! 😐`;
    
    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

// LÓGICA DE COMPARACIÓN
function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    // Unimos las dos elecciones (ej: "piedra" + "tijera" = "piedratijera")
    switch (userChoice + computerChoice) {
        case "piedratijera":
        case "papelpiedra":
        case "tijerapapel":
            win(userChoice, computerChoice);
            break;
        case "piedrapapel":
        case "papeltijera":
        case "tijerapiedra":
            lose(userChoice, computerChoice);
            break;
        case "piedrapiedra":
        case "papelpapel":
        case "tijeratijera":
            draw(userChoice, computerChoice);
            break;
    }
}

// 4. Listeners (Escuchar los clics)
function main() {
    rock_div.addEventListener('click', () => game("piedra"));
    paper_div.addEventListener('click', () => game("papel"));
    scissors_div.addEventListener('click', () => game("tijera"));
}

main();
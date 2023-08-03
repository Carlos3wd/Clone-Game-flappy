const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d")
// we will need the gamecontainer to make it blurry
// when we display the end menu
const gameContainer = document.getElementById('game-container');

const flappyimg = new image();
flappyimg.src = 'assets/flappy_dunk.png';

// Game constants
const FLAP_SPEED = -5;
const BIRD_WIDTH = 40;
const BIRD_HEIGTH = 30;
const PIPE_WIDTH = 50;
const PIPE_GAP = 125; 

// Bird variables
let birdX = 50;
let birdY = 50;
let birdVelocity = 0;
let birdAcceleration = 0.1;

// Pipe variables
let pipeX = 400;
let papiY = canvas.heigth - 200;

// score 
let scoreDiv = document.getElementById('score-display')
let score = 0;
let highScore = 0;

function increaseScore() {
     // TODO:
}

function collisionCheck() {
     // TODO:
}
function resetGame() {
     // TODO:
}

function endGame() {
    // TODO:
}
function loop() {
    // TODO:
}
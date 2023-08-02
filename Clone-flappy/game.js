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
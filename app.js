import { updatePlayer } from "./game/player/playerMovement.js";
import { invaders } from "./game/invaders.js";
import { render } from "./render.js";
import { laserCollision } from "./game/playerCollision.js";
export { CANVAS_WIDTH, CANVAS_HEIGHT, ctx, gameInfo, handleGame }

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 3000 / 1.5;
const CANVAS_HEIGHT = canvas.height = 2000 / 1.5;
const gameInfo = document.getElementById('gameInfo');

let endGame = false;

function game() {
    console.log(endGame)
    updatePlayer();
    laserCollision();
    render();

    requestAnimationFrame(game);
}
game();

function handleGame() {

    if (invaders.length === 0) {
        gameInfo.textContent = "YOU WON!"
    } else {
        gameInfo.textContent = "GAME OVER";
    }
}

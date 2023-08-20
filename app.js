import { player } from "./game/player/playerData.js";
import { updatePlayer } from "./game/player/playerMovement.js";
//import { invaders } from "./game/invaders.js";
import { endGameDraw, render } from "./render.js";
import { laserCollision } from "./game/laserCollision.js";
export { CANVAS_WIDTH, CANVAS_HEIGHT, ctx, gameInfo }

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 3000 / 1.5;
const CANVAS_HEIGHT = canvas.height = 2000 / 1.5;
const gameInfo = document.getElementById('gameInfo');
ctx.font = '48px Arial';
ctx.fillStyle = "white";

let isOver = false;
let isWin = false;

function game() {
    //handleGame();

    if (!isOver) {
        laserCollision();
        updatePlayer();
        render();
    } else {
        endGameDraw(isOver, isWin);
    }

    requestAnimationFrame(game);
}
game();

// function handleGame() {

//     if (invaders.length === 0) {
//         isOver = true;
//         isWin = true;
//         return;
//     } else if (invaders[invaders.length - 1].y + invaders[invaders.length - 1].height > CANVAS_HEIGHT) {
//         isOver = true;
//         isWin = false;
//         return
//     }

//     invaders.forEach((invader) => {
//         if (invader.isAlive &
//             player.x > invader.x &&
//             player.x < invader.x + invader.width &&
//             player.y > invader.y &&
//             player.y < invader.y + invader.height) {
//             isOver = true;
//             isWin = false;
//             return
//         }
//     })
// }

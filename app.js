import { player } from "./game/player/playerData.js";
import { updatePlayer } from "./game/player/playerMovement.js";
import { invaders, levels, loadLevel, enemyBullets } from "./game/invaders.js";
import { endGameDraw, render } from "./render.js";
import { laserCollision } from "./game/laserCollision.js";
export { CANVAS_WIDTH, CANVAS_HEIGHT, ctx, gameInfo, levelNum }

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 3500 / 1.5;
const CANVAS_HEIGHT = canvas.height = 2500 / 1.5;
const gameInfo = document.getElementById('gameInfo');
ctx.font = '48px Arial';
ctx.fillStyle = "white";

let isOver = false;
let isWin = false;
let levelNum = 0;

function game() {
    handleGame();

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

function handleGame() {

    if (invaders.length === 0) {
        if (levels.length === levelNum - 1) {
            isOver = true;
            isWin = true;
            return;
        }
        loadLevel(levelNum);
        levelNum++;

    } else if (invaders[invaders.length - 1].y + invaders[invaders.length - 1].height > CANVAS_HEIGHT) {
        isOver = true;
        isWin = false;
        return
    }

    invaders.forEach((invader) => {
        if (invader.isAlive &
            player.x > invader.x - (invader.width / 1) &&
            player.x < invader.x + (invader.width / 2) &&
            player.y > invader.y &&
            player.y < invader.y + invader.height) {
            isOver = true;
            isWin = false;
            return
        }
    })

    enemyBullets.forEach((bullet) => {
        if (player.x > bullet.x - (bullet.width / 1) &&
            player.x < bullet.x + (bullet.width / 2) &&
            player.y > bullet.y - (bullet.height / 1) &&
            player.y < bullet.y + (bullet.height / 2)) {
            isOver = true;
            isWin = false;
            return
        }
    })
}

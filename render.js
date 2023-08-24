export { render, endGameDraw };
import { ctx, CANVAS_WIDTH, CANVAS_HEIGHT, levelNum } from "./app.js";
import { updateLasers } from "./game/laser.js";
import { updateInvaders } from "./game/invaders.js";
import { player } from "./game/player/playerData.js";
import { laserCollision } from "./game/laserCollision.js";

const backGroundImage = new Image();
backGroundImage.src = './images/backGround.png'
const collisionImage = new Image();
collisionImage.src = './images/explosion.png'

function render() {
    endGameDraw();
    updateInvaders();
    updateLasers();
    laserCollision(collisionImage);
    drawScore()
    ctx.drawImage(player.img, player.x, player.y, player.width, player.height);
}

function endGameDraw(over, win) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backGroundImage, 0, 0, 3000, 2000, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (over) {
        if (win) {
            ctx.font = '100px Arial'
            ctx.fillText('YOU WON!', 700, 300);
            ctx.fillText('Your Score: ' + player.score, 700, 400);
            ctx.drawImage(player.img, player.x, player.y, player.width, player.height);
        } else {
            ctx.font = '100px Arial'
            ctx.fillText('YOU LOSE!', 700, 300);
            ctx.fillText('Your Score: ' + player.score, 700, 400);
            updateInvaders();
            updateLasers();
        }
    }
}

function drawScore() {
    ctx.fillText('Score: ' + player.score, 20, 50);
    ctx.fillText('Level: ' + levelNum, 20, 110)
}
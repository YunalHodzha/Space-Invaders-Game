import { player } from "./player.js";
import { updateInvaders, invaders } from "./invaders.js";
import { laserBullets, laserShoot, updateLasers } from "./laser.js";
export { CANVAS_WIDTH, CANVAS_HEIGHT, ctx, gameInfo, handleGameOver }

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 3000 / 1.5;
const CANVAS_HEIGHT = canvas.height = 2000 / 1.5;
const gameInfo = document.getElementById('gameInfo');

const keyState = {};
window.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        let playerPosition = player.x + (player.width / 2) - 20
        laserShoot(playerPosition)
    };
});
window.addEventListener("keydown", (event) => {
    keyState[event.key] = true;
});

window.addEventListener("keyup", (event) => {
    keyState[event.key] = false;
})


const backGroundImage = new Image();
backGroundImage.src = './images/backGround.png'
const collisionImage = new Image();
collisionImage.src = './images/explosion.png'


function game() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backGroundImage, 0, 0, 3000, 2000, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    update();
    updateLasers();
    detectCollision();

    ctx.drawImage(player.img, player.x, player.y, player.width, player.height);
    updateInvaders();



    function update() {
        if (keyState["ArrowLeft"] && player.x > 0) {
            player.x -= player.speed;
        }

        if (keyState["ArrowRight"] && player.x < CANVAS_WIDTH - player.width) {
            player.x += player.speed;
        }

        if (keyState["ArrowUp"] && player.y > 0) {
            player.y -= player.speed
        }

        if (keyState["ArrowDown"] && player.y < CANVAS_HEIGHT - player.height) {
            player.y += player.speed
        }
    }

    requestAnimationFrame(game)
}

game()

function handleGameOver() {

    if (invaders.length === 0) {
        gameInfo.textContent = "YOU WON!"
    } else {
        gameInfo.textContent = "GAME OVER";
    }

}

function detectCollision() {
    laserBullets.forEach((laser) => {
        invaders.forEach((invader) => {
            if (invader.isAlive &&
                laser.x > invader.x &&
                laser.x < invader.x + invader.width &&
                laser.y > invader.y &&
                laser.y < invader.y + invader.height
            ) {
                invader.isAlive = false;
                laser.isAlive = false;
                ctx.drawImage(collisionImage, invader.x, invader.y, invader.width, invader.height)
            }
        })
    })
}
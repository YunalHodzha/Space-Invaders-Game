export { updateInvaders, invaders };
import { CANVAS_HEIGHT, CANVAS_WIDTH, ctx, handleGameOver } from "./app.js";
import { player } from "./player.js";

const invaderImg = new Image();
invaderImg.src = './images/invader1.png';

let invaders = [];
const invaderWidth = 150;
const invaderHeight = 130;
const numRows = 3;
const numCols = 6;

for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        invaders.push({
            img: invaderImg,
            x: col * (invaderWidth + 30) + invaderWidth,
            y: row * (invaderHeight + 10) + 30,
            width: invaderWidth,
            height: invaderHeight,
            isAlive: true,
            direction: 1,
            speed: 8
        });
    }
}

function updateInvaders() {
    if (invaders.length !== 0 && invaders[invaders.length - 1].y + invaders[invaders.length - 1].height < CANVAS_HEIGHT) {

        invaders.forEach((invader) => {
            invader.x += invader.speed * invader.direction;

            if (invader.x + invader.width >= CANVAS_WIDTH - 50 || invader.x < 50) {
                invader.direction *= -1;
                invaders.forEach((invader) => {
                    invader.y += 80;
                })
            }

            if (invader.isAlive &
                player.x > invader.x &&
                player.x < invader.x + invader.width &&
                player.y > invader.y &&
                player.y < invader.y + invader.height) {
                handleGameOver();
            }
        })


        invaders = invaders.filter((invader) => invader.isAlive)

    } else {
        handleGameOver();
    }

    renderInvaders();
}

function renderInvaders() {
    invaders.forEach((invader) => {
        if (invader.isAlive) {
            ctx.drawImage(invader.img, invader.x, invader.y, invader.width, invader.height)
        }
    })
}


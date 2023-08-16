export { updateInvaders };
import { CANVAS_WIDTH, ctx } from "./app.js";

const invaderImg = new Image();
invaderImg.src = './images/invader1.png';

const invaders = [];
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
        });
    }
}

let invaderDirection = 1;
const invaderSpeed = 4;


function updateInvaders() {

    invaders.forEach((invader) => {
        if (invader.isAlive) {
            invader.x += invaderSpeed * invaderDirection;
        }
    })

    invaders.forEach((invader) => {
        if (invader.x + invader.width > CANVAS_WIDTH - 50 || invader.x < 50) {
            invaderDirection *= -1;

            invaders.forEach((invader) => {
                invader.y += 20;
            })
        }
    });

    renderInvaders()

    function renderInvaders() {
        invaders.forEach((invader) => {
            if (invader.isAlive) {
                ctx.drawImage(invader.img, invader.x, invader.y, invader.width, invader.height)
            }
        })
    }
}
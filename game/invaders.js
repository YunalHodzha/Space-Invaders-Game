export { updateInvaders, invaders };
import { CANVAS_HEIGHT, CANVAS_WIDTH, ctx } from "../app.js";

const invaderImg = new Image();
invaderImg.src = './images/invader1.png';

const levels = [
    {
        numRows: 3,
        numCols: 6,
        invaderSpeed: 8
    },
    {
        numRows: 4,
        numCols: 8,
        invaderSpeed: 10
    }
]

let currentLevel = 0;
let invaders = [];

const invaderWidth = 150;
const invaderHeight = 130;
let direction = 1;


function loadLevel(levelIndex) {
    const level = levels[levelIndex];

    for (let row = 0; row < level.numRows; row++) {
        for (let col = 0; col < level.numCols; col++) {
            invaders.push({
                img: invaderImg,
                x: col * (invaderWidth + 30) + invaderWidth,
                y: row * (invaderHeight + 10) + 30,
                width: invaderWidth,
                height: invaderHeight,
                speed: level.speed,
                isAlive: true,
            });
        }
    }
}


function updateInvaders() {
    {
        invaders.forEach((invader) => {
            invader.x += speed * direction;

            if (invader.x + invader.width >= CANVAS_WIDTH - 50 || invader.x < 50) {
                direction *= -1;
                invaders.forEach((invader) => {
                    invader.y += 80;
                })
            }
        })

        invaders = invaders.filter((invader) => invader.isAlive)
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


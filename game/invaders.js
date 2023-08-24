export { updateInvaders, invaders, levels, loadLevel };
import { CANVAS_HEIGHT, CANVAS_WIDTH, ctx } from "../app.js";

const invaderImg = new Image();
invaderImg.src = './images/invader1.png';

const levels = [
    {
        numRows: 1,
        numCols: 1,
        invaderSpeed: 8
    },
    {
        numRows: 2,
        numCols: 2,
        invaderSpeed: 9
    }, {
        numRows: 2,
        numCols: 3,
        invaderSpeed: 11
    }, {
        numRows: 3,
        numCols: 4,
        invaderSpeed: 12
    }
]


let invaders = [levels[0]];

const invaderWidth = 150;
const invaderHeight = 130;
let direction = 1;


function loadLevel(levelIndex) {
    invaders.length = 0;
    let level = levels[levelIndex];

    if (levels.length !== levelIndex) {
        for (let row = 0; row < level.numRows; row++) {
            for (let col = 0; col < level.numCols; col++) {
                invaders.push({
                    img: invaderImg,
                    x: col * (invaderWidth + 30) + invaderWidth,
                    y: row * (invaderHeight + 10) + 30,
                    width: invaderWidth,
                    height: invaderHeight,
                    speed: level.invaderSpeed,
                    isAlive: true,
                });
            }
        }
    };

    if (levels.length + 1 !== levelIndex) {
        levelIndex++;
    };
}


function updateInvaders() {

    invaders.forEach((invader) => {
        invader.x += invader.speed * direction;

        if (invader.x + invader.width >= CANVAS_WIDTH - 50 || invader.x < 50) {
            direction *= -1;
            invaders.forEach((invader) => {
                invader.y += 80;
            })
        }
    })

    invaders = invaders.filter((invader) => invader.isAlive)


    renderInvaders();
}

function renderInvaders() {
    invaders.forEach((invader) => {
        if (invader.isAlive) {
            ctx.drawImage(invader.img, invader.x, invader.y, invader.width, invader.height)
        }
    })
}


export { updateInvaders, invaders, levels, loadLevel, enemyBullets};
import { CANVAS_HEIGHT, CANVAS_WIDTH, ctx } from "../app.js";


const invaderImg = new Image();
invaderImg.src = './images/invader1.png';
const invLaser = new Image();
invLaser.src = './images/invaderLaser.png'

const levels = [
    {
        numRows: 1,
        numCols: 1,
        invaderSpeed: 8,
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
        invaderSpeed: 11
    }, {
        numRows: 3,
        numCols: 5,
        invaderSpeed: 12
    }, {
        numRows: 4,
        numCols: 5,
        invaderSpeed: 12
    }, {
        numRows: 5,
        numCols: 5,
        invaderSpeed: 13
    }, {
        numRows: 5,
        numCols: 6,
        invaderSpeed: 13
    }, {
        numRows: 6,
        numCols: 5,
        invaderSpeed: 13
    }, {
        numRows: 6,
        numCols: 6,
        invaderSpeed: 13
    }
]


let invaders = [levels[0]];
let enemyBullets = [];

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

        if (Math.random() < 0.001) { // Adjust the probability as needed
            // Create a new bullet
            const bullet = {
                x: invader.x + invader.width / 2,
                y: invader.y + invader.height,
                width: 100,
                height: 100,
                speed: 5, // Adjust bullet speed as needed
                // Other bullet properties
            };
            enemyBullets.push(bullet);
        }
    })

    invaders = invaders.filter((invader) => invader.isAlive)


    renderInvaders();
    updateBullets();
    renderBullets();
}

function renderInvaders() {
    invaders.forEach((invader) => {
        if (invader.isAlive) {
            ctx.drawImage(invader.img, invader.x, invader.y, invader.width, invader.height)
        }
    })
}

function updateBullets() {
    enemyBullets.forEach((bullet) => {
        bullet.y += bullet.speed;

        if (bullet.y > CANVAS_HEIGHT) {
            enemyBullets.splice(enemyBullets.indexOf(bullet), 1);
        }
    });
}

function renderBullets() {
    enemyBullets.forEach((bullet) => {
        // Render the bullet on the canvas
        ctx.drawImage(invLaser, bullet.x, bullet.y, bullet.width, bullet.height); // Adjust the size and appearance
    });
}


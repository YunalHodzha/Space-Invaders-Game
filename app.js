import { player } from "./player.js";

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 3000 / 1.5;
const CANVAS_HEIGHT = canvas.height = 2000 / 1.5;

const keyState = {};
window.addEventListener("keydown", (event) => {
    keyState[event.key] = true;
});

window.addEventListener("keyup", (event) => {
    keyState[event.key] = false;
})


const backGroundImage = new Image();
backGroundImage.src = './images/backGround.png'


function game() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backGroundImage, 0, 0, 3000, 2000, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    update();
    ctx.drawImage(player.img, player.x, player.y, player.width, player.height)


    function update() {
        if (keyState["ArrowLeft"] && player.x > 0) {
            player.x -= player.speed;
        }

        if (keyState["ArrowRight"] && player.x < CANVAS_WIDTH - player.width) {
            player.x += player.speed;
        }

        if(keyState["ArrowUp"] && player.y > 0) {
            player.y -= player.speed
        }

        if(keyState["ArrowDown"] && player.y < CANVAS_HEIGHT - player.height) {
            player.y += player.speed
        }
    }
}

setInterval(game, 1000 / 60);
console.log("HEllo World")
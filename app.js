const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 3000 / 1.5;
const CANVAS_HEIGHT = canvas.height = 2000 / 1.5;

const rocket = new Image();
rocket.src = './images/rocket.png';
rocket.width = 16;
rocket.height = 16;

const backGroundImage = new Image();
backGroundImage.src = './images/backGround.png'

//ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)


function game() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backGroundImage, 0, 0, 3000, 2000,0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(rocket, CANVAS_WIDTH /2 , CANVAS_HEIGHT / 1.2, 150, 150)


}

setInterval(game, 1000 / 1);
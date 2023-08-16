export { player, laserShoot, updateLasers };
import { ctx } from "./app.js";

const rocketImg = new Image();
const laserImg = new Image();
laserImg.src = './images/laser.png';
rocketImg.src = './images/rocket.png';
let laserBullets = [];
let lastLaserTime = 0;
const laserCooldown = 200;

const player = {
    img: rocketImg,
    x: 900,
    y: 1100,
    width: 180,
    height: 150,
    speed: 20,
}

function laserShoot(x) {
    const currentTime = Date.now();

    if (currentTime - lastLaserTime >= laserCooldown) {
        laserBullets.push({
            img: laserImg,
            isAlive: true,
            x: x,
            y: player.y - 30,
            width: 50,
            height: 35,
            speed: 10,
        })
        lastLaserTime = currentTime;
    }
}

function updateLasers() {
    laserBullets.forEach((laser) => {
        laser.y -= laser.speed;

        if (laser.y < 0) {
            laser.isAlive = false;
        }
    });

    laserBullets.forEach((laser) => {
        ctx.drawImage(laser.img, laser.x, laser.y, laser.width, laser.height)
    })

    laserBullets = laserBullets.filter((laser) => laser.isAlive);
}
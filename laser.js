import { ctx } from "./app.js";
import { player } from "./player.js";
export {laserShoot, updateLasers, laserBullets};

const laserImg = new Image();
laserImg.src = './images/laser.png';
let laserBullets = [];
let lastLaserTime = 0;
const laserCooldown = 200;


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
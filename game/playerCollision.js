import { laserBullets } from "./laser.js";
import { invaders } from "./invaders.js";
import { ctx } from "../app.js";
export {laserCollision};



function laserCollision(image) {
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
                ctx.drawImage(image, invader.x, invader.y, invader.width, invader.height)
            }
        })
    })
}
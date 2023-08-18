export { render };
import { ctx, CANVAS_WIDTH, CANVAS_HEIGHT } from "./app.js";
import { updateLasers } from "./game/laser.js";
import { updateInvaders } from "./game/invaders.js";
import { player } from "./game/player/playerData.js";
import { laserCollision } from "./game/playerCollision.js";

const backGroundImage = new Image();
backGroundImage.src = './images/backGround.png'
const collisionImage = new Image();
collisionImage.src = './images/explosion.png'

function render() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backGroundImage, 0, 0, 3000, 2000, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    updateInvaders();
    updateLasers();
    laserCollision(collisionImage);
    ctx.drawImage(player.img, player.x, player.y, player.width, player.height);
}


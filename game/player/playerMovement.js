export {updatePlayer};
import { player } from "./playerData.js";
import { laserShoot } from "../laser.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../../app.js";

const keyState = {};
window.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        let playerPosition = player.x + (player.width / 2) - 20
        laserShoot(playerPosition)
    };
});
window.addEventListener("keydown", (event) => {
    keyState[event.key] = true;
});

window.addEventListener("keyup", (event) => {
    keyState[event.key] = false;
})


function updatePlayer() {
    if (keyState["ArrowLeft"] && player.x > 0) {
        player.x -= player.speed;
    }

    if (keyState["ArrowRight"] && player.x < CANVAS_WIDTH - player.width) {
        player.x += player.speed;
    }

    if (keyState["ArrowUp"] && player.y > 0) {
        player.y -= player.speed
    }

    if (keyState["ArrowDown"] && player.y < CANVAS_HEIGHT - player.height) {
        player.y += player.speed
    }
}
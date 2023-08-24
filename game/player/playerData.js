export { player };

const rocketImg = new Image();
rocketImg.src = './images/rocket.png';


const player = {
    img: rocketImg,
    x: 900,
    y: 1100,
    width: 170,
    height: 150,
    speed: 20,
    score: 0
}
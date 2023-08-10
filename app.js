const grid = document.querySelector('.grid');

for (let i = 0; i < 400; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
};

const squares = Array.from(document.querySelectorAll('.grid div'));

const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53
]

function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add('invader')
    }
}

draw();

squares[350].classList.add('shooter');
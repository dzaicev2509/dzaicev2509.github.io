let direction = 'ArrowDown';
let step = 25;
let snake = [];
const POLE_WIDTH = 700;
const POLE_HEIGHT = 700;
let snakeBody = [[300, 300]];
let pole = document.body.appendChild(document.createElement('section'));
pole.style.backgroundColor = 'white';
pole.style.height = POLE_HEIGHT + 'px';
pole.style.width = POLE_WIDTH + 'px';
let test_data = document.body.appendChild(document.createElement('test_data'));

let Directs = {
    //               x-->  y^
    'ArrowUp': [0, -step],
    'ArrowDown': [0, step],
    'ArrowLeft': [-step, 0],
    'ArrowRight': [step, 0],
};

document.addEventListener('keydown', (event) => {
    test_data.textContent = event.key;

    if (event.key == ' ') { }
    else if (event.key in Directs) {
        direction = event.key;
    }
});

setInterval(() => motion(), 100);


let after = (item) => () => item.style.display = 'block'

for (let i = 0; i < 10; i++) { createBlock(); }
function motion() {

    snakeBody.unshift([(snakeBody[0][0] + Directs[direction][0]) % POLE_WIDTH,    //возврат на координаты по x
    (snakeBody[0][1] + Directs[direction][1]) % POLE_HEIGHT]);

    for (let i = 1; i < snake.length; i++) {
        if (snakeBody[i][0] - snakeBody[i - 1][0] > step ||
            snakeBody[i][1] - snakeBody[i - 1][1] > step) {
            snake[i].style.display = 'none';
            setTimeout(((item) => () =>item.style.display = 'block')(snake[i]), 110)
        }
        snake[i].style.left = snakeBody[i][0] + 'px';
        snake[i].style.top = snakeBody[i][1] + 'px';
    }
    snakeBody.pop();
};

function createBlock() {
    let temp = document.createElement('div');
    temp.className = 'snake_s';
    pole.appendChild(temp);
    snake.push(temp);
};
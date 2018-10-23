let direction = 'ArrowUp';
let step = 40;
let snake = [];
let snakeBody = [[300, 300]];

let Directs = {
    'ArrowUp': [0, -step],
    'ArrowDown': [0, step],
    'ArrowLeft': [-step, 0],
    'ArrowRight': [step, 0],
};

document.addEventListener('keydown', (event) => {
    if (event.key in Directs) {
        direction = event.key;
    }
});

setInterval(() => motion(), 100);

for (let i = 0; i < 4; i++) { createBlock(); }
function motion() {

    snakeBody.unshift([snakeBody[0][0] + Directs[direction][0], snakeBody[0][1] + Directs[direction][1]]);

    for (let i = 0; i < snake.length; i++) {
        snake[i].style.left = snakeBody[i][0] + 'px';
        snake[i].style.top = snakeBody[i][1] + 'px';
    }
    snakeBody.pop();
};

function createBlock() {
    let temp = document.createElement('div');
    temp.className = 'snake_s';
    document.body.appendChild(temp);
    snake.push(temp);
};
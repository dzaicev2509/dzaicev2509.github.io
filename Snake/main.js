let step = 50;

let to_top = 300;
let to_left = 300;

document.addEventListener('keydown', (event) => {
switch(event.key){
    case 'ArrowUp':
    to_top -= 50; 
    snake.style.top=to_top+'px';
    break;
    case 'ArrowDown':
    to_top += 50; 
    snake.style.top=to_top+'px';
    break;
    case 'ArrowLeft':
    to_left -= 50; 
    snake.style.left=to_left+'px';
    break;
    case 'ArrowRight':
    to_left += 50; 
    snake.style.left=to_left+'px';
    break;
}
});
var snake = []; //starting snake

function addSnakeNode() {
    let tail = snake[snake.length - 1];
    switch (tail.direction) {
        case "right":
            snake.push(new snakeNode(tail.x - Nwidth, tail.y, tail));
            break;
        case "left":
            snake.push(new snakeNode(tail.x + Nwidth, tail.y, tail));
            break;
        case "up":
            snake.push(new snakeNode(tail.x, tail.y + Nheight, tail));
            break;
        case "down":
            snake.push(new snakeNode(tail.x, tail.y - Nheight, tail));
            break;

        default:
            break;
    }
}

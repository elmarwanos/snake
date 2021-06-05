//--------------------GLOBAL VARIABLES--------------------//
/*
 * game_state = 0        Game has not started yet
 *
 * game_state = 1        Game is being played
 *
 * game_state = 2        Game Over, player lost
 */
let game_state = 0;

const canvas = document.getElementById("rass");
const context = canvas.getContext("2d");

var snakeHead = null; //new

var loopID = null;

const Nheight = 32;
const Nwidth = 32;
//-------------------------------------------------------//

//Game Crash Alert
function crash() {
    window.alert(
        "Seems the game has crashed. Please refresh the page\nIf problem persists click here to contact developer ADD BUTTON"
    );
}

//Set Game Area Size function
window.onload = setGameSize();
window.onresize = setGameSize;

function setGameSize() {
    const header_height =
        document.getElementsByTagName("header")[0].offsetHeight;
    const computed_height = visualViewport.height - header_height;
    document.getElementsByClassName("game")[0].style.height =
        computed_height + "px";
}

//Start Button Listener
document.getElementById("start-button").addEventListener("click", () => {
    if (game_state === 0) {
        document
            .getElementById("start-button")
            .setAttribute("style", "display: none;");
        game_state = 1;
        startGame();
    } else {
        crash();
    }
});

//Activates when the Start Game button is pressed and sets up the inital game state
function startGame() {
    if (game_state === 1) {
        let centerX =
            document.getElementsByClassName("gamescreen")[0].clientHeight / 2.0;
        let centerY =
            document.getElementsByClassName("gamescreen")[0].clientWidth / 2.0;
        snake = [];
        snake.push(new snakeNode(centerX - 16, centerY - 16, null)); //Add starting snake head
        snakeHead = snake[0];
        playing();
    } else {
        crash();
    }
}

//Set up key press detection and starts the game loop
function playing() {
    document.addEventListener("keypress", (event) => {
        if (event.key == "w" || event.key == "W") {
            snakeHead.direction = "up";
        } else if (event.key == "a" || event.key == "A") {
            snakeHead.direction = "left";
        } else if (event.key == "s" || event.key == "S") {
            snakeHead.direction = "down";
        } else if (event.key == "d" || event.key == "D") {
            snakeHead.direction = "right";
        }
    });

    loopID = setInterval(updateGame, 300);
}

//game loop will keep running untill player dies
function updateGame() {
    if (game_state === 1) {
        context.clearRect(0, 0, 800, 800);
        snake.forEach((node) => {
            node.update();
        });

        if (
            snakeHead.x + 32 >= 800 ||
            snakeHead.x < 0 ||
            snakeHead.y < 0 ||
            snakeHead.y + 32 >= 800
        ) {
            game_state = 2;
            gameOver();
        }
    } else {
        crash();
    }
}

//Game over screen + resets game if player accepts
function gameOver() {
    if (game_state === 2) {
        clearInterval(loopID);
        alert("You've lost do you wanna play again");
        game_state = 1;
        startGame();
    } else {
        crash();
    }
}

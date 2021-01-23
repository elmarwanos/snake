//--------------------GLOBAL VARIABLES--------------------//
/*
 * game_state = 0        Game has not started yet
 *
 * game_state = 1        Game is being played
 * 
 * game_state = 2        Game Over, player lost
 */
let game_state = 0;
//-------------------------------------------------------//

//Game Crash Alert
function crash() {
    window.alert("Seems the game has crashed. Please refresh the page\nIf problem persists click here to contact developer ADD BUTTON")
}

//Set Game Area Size function
window.onload = setGameSize();
window.onresize = setGameSize;

function setGameSize() {
    const header_height = document.getElementsByTagName("header")[0].offsetHeight;
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
        document.getElementsByClassName("snake-head")[0].setAttribute("style", "display: block;");
        playing();
    } else {
        crash();
    }
}

//function will keep running untill player dies
function playing() {
    //FIXME arrow keys arent working
    const snake = document.getElementsByClassName("snake-head")[0];

    document.addEventListener('keypress', (event) => {
        var snake_left_pos = snake.offsetLeft;
        var snake_right_pos = snake_left_pos + snake.offsetWidth

        if (event.key == "w" || event.key == "W") {
            console.log("w PRESSED");
        } else if (event.key == "a" || event.key == "A") {
            console.log("a PRESSED");
        } else if (event.key == "s" || event.key == "S") {
            console.log("s PRESSED");
        } else if (event.key == "d" || event.key == "D") {
            if (snake_right_pos > 815) {
                alert("STOP");
                game_state = 2;
                gameOver();
            }
            console.log("d PRESSED");
            snake.style.left = (snake_left_pos + 10) + 'px';
            console.log(snake_left_pos, snake_right_pos);

        }
    })

}

function gameOver() {
    if (game_state === 2) {
        alert("You've lost do you wanna play again")
    } else {
        crash();
    }
}
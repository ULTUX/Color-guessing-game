var boxes = document.querySelectorAll(".colorBox");
var gameInfo = document.querySelector("#gameinfo");
var span = document.querySelector("span");
var title = document.querySelector("#title");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
hard.classList.add("selected");

var isEasy = false;

easy.addEventListener("click", function () {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    isEasy = true;
    restart();

});

hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    isEasy = false;
    restart();
});

var pickedColors = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];

//function generating random rgb color
function random() {
    var toReturn = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    return toReturn;
}

var pickedColorsInString = "rgb(" + pickedColors[0] + ", " + pickedColors[1] + ", " + pickedColors[2] + ")";

//drawing a random square
var pickedSquare = Math.floor(Math.random() * 6);

//Coloring all the squares with random colors
for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = random();
}

//Changing pickedsquare's color to pickedColor
boxes[pickedSquare].style.backgroundColor = pickedColorsInString;

//adding color to span
span.textContent = pickedColorsInString;

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        if (this.style.backgroundColor == pickedColorsInString) {
            gameInfo.textContent = "Correct!";
            for (var i = 0; i < boxes.length; i++) {
                boxes[i].style.backgroundColor = pickedColorsInString;
                title.style.backgroundColor = pickedColorsInString;
            }
        }
        else if (this.style.backgroundColor != "rgb(67, 77, 91)"){
            this.style.backgroundColor = "#434d5b";
            gameInfo.textContent = "Try Again...";
        }
    });
}



var restartGame = document.querySelector("#restartgame");
function restart() {
    gameInfo.textContent = null;
    title.style.backgroundColor = "#2064d6";
    pickedColors = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    pickedColorsInString = "rgb(" + pickedColors[0] + ", " + pickedColors[1] + ", " + pickedColors[2] + ")";
    var pickedSquare = Math.floor(Math.random() * 6);
    if (isEasy == true && pickedSquare > 2) pickedSquare -= 3;
    //Coloring all the squares with random colors
    if (isEasy == false){
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = random();
    }
    }
    else {
        for (var i = 0; i < boxes.length/2; i++) {
            boxes[i].style.backgroundColor = random();
        }
        for (var i = 3 ; i < boxes.length; i++){
            boxes[i].style.backgroundColor = "#434d5b";
        }
    }

    //Changing pickedsquare's color to pickedColor
    boxes[pickedSquare].style.backgroundColor = pickedColorsInString;


    //adding color to span
    span.textContent = pickedColorsInString;
}
restartGame.addEventListener("click", restart);



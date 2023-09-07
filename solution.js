let aleatoryNumber = Math.floor(Math.random() * 10 + 1);
let attempt = 0;
let global = "";
let out = "Jugar";
let userInput = 0;

function playGame() {
    userInput = parseInt(document.getElementById("numberIn").value);


    if (userInput == aleatoryNumber){
        out = `Has adivinado el numero en ${attempt} intentos`;
        document.getElementById("numberClue").innerHTML = aleatoryNumber;
    }

     if (userInput < aleatoryNumber){
        out = `El numero es mayor a ${userInput}`;
        attempt++;
    }
    
     if (userInput > aleatoryNumber){
        out = `El numero es menor a ${userInput}`;
        attempt++;
    }

    document.getElementById("Score").innerHTML = `${out}. Intento numero: ${attempt}.`;
    document.getElementById("numberIn").select();
}

function resetGame() {
     aleatoryNumber = Math.floor(Math.random() * 10 + 1);
     document.getElementById("numberClue").innerHTML = "?";
     document.getElementById("Score").innerHTML = "A jugar!";
     document.getElementById("numberIn").value = "";
     document.getElementById("numberIn").focus();
     document.getElementById("highScore").innerHTML = `Highscore: ${global} ${attempt}`;
     resetScore()
     hScore()
}
function resetScore() {
    attempt = "";
}
function hScore(){
    global = attempt;
}






//MODOS DE JOGO
//modo fácil
function modoFacil() {
    location.href = '../facil/facil.html';
}
//modo normal
function modoNormal() {
    location.href = '../normal/normal.html';
}
//modo Difícil
function modoDificil() {
    location.href = '../bloodborne/bloodborne.html';
}

//JOGOS
let numeroSecreto = Math.floor(Math.random()*21);
let i = 5;

//jogar fácil
function jogarFacil() {
    let chute = document.getElementById("aposta").value;
    chute = parseInt(chute);

    if (chute>=0 && chute<21) {
        if (numeroSecreto == chute) {
            location.href = '../winner/winner.html';
        } else if (numeroSecreto > chute) {
            i--;
            document.getElementById("resultado").innerText = "You are wrong. The secret number is higher than that.";
        } else if (numeroSecreto < chute) {   
            i--;
            document.getElementById("resultado").innerText = "You are wrong. The secret number is less than that.";
        }
    } else {
        document.getElementById("resultado").innerText = "This number is not between 0 and 20";
    }
    document.getElementById('tentativas').innerText = `Attempts left: ${i}`;

    if (i == 0) {
        location.href = '../gameOver/gameOver.html';
    }
}

//jogar normal
function jogarNormal() {
    let chute = document.getElementById("aposta").value;
    chute = parseInt(chute);

    if (chute>=0 && chute<21) {
        if (numeroSecreto == chute) {
            location.href = '../winner/winner.html';
        } else if (numeroSecreto > chute) {
            i--;
            document.getElementById("resultado").innerText = "You are wrong. The secret number is higher than that.";
        } else if (numeroSecreto < chute) {   
            i--;
            document.getElementById("resultado").innerText = "You are wrong. The secret number is less than that.";
        }
    } else {
        document.getElementById("resultado").innerText = "This number is not between 0 and 20";
    }
    document.getElementById('tentativas').innerText = `Attempts left: ${i-2}`;

    if (i == 2) {
        location.href = '../gameOver/gameOver.html';
    }
}

//jogar difícil
function jogarDificil() {
    let chute = document.getElementById("aposta").value;
    chute = parseInt(chute);

    if (chute>=0 && chute<21) {
        if (numeroSecreto == chute) {
            location.href = '../winner/winner.html';
        } else {
            location.href = '../gameOver/gameOver.html';
        }
    } else {
        document.getElementById("resultado").innerText = "This number is not between 0 and 20";
    }
    document.getElementById('tentativas').innerText = `Attempts left: ${i-5}`;
}
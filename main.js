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
let numeroSecreto = Math.floor(Math.random()*10+1);

//jogar fácil
let i = 5;
function jogarFacil() {
    let chute = document.getElementById("aposta").value;
    chute = parseInt(chute);

    if (chute>=0 && chute<21) {
        if (numeroSecreto == chute) {
            location.href = '../winner/winner.html'
        } else if (numeroSecreto > chute) {
            i--;
            document.getElementById("resultado").innerText = "Você errou. O número secreto é maior que esse.";
        } else if (numeroSecreto < chute) {   
            i--;
            document.getElementById("resultado").innerText = "Você errou. O número secreto é menor que esse.";
        }
    } else {
        document.getElementById("resultado").innerText = "Esse número não está entre 0 e 20"
    }
    document.getElementById('tentativas').innerText = `Tentativas restantes: ${i}`

    if (i == 0) {
        location.href = '../gameOver/gameOver.html'
    }
}

//jogar normal
function jogarNormal() {
    let chute = document.getElementById("aposta").value;
    chute = parseInt(chute);

    if (chute>=0 && chute<21) {
        if (numeroSecreto == chute) {
            location.href = '../winner/winner.html'
        } else if (numeroSecreto > chute) {
            i--;
            document.getElementById("resultado").innerText = "Você errou. O número secreto é maior que esse.";
        } else if (numeroSecreto < chute) {   
            i--;
            document.getElementById("resultado").innerText = "Você errou. O número secreto é menor que esse.";
        }
    } else {
        document.getElementById("resultado").innerText = "Esse número não está entre 0 e 20"
    }
    document.getElementById('tentativas').innerText = `Tentativas restantes: ${i-2}`

    if (i == 2) {
        location.href = '../gameOver/gameOver.html'
    }
}

//jogar difícil
function jogarDificil() {
    let chute = document.getElementById("aposta").value;
    chute = parseInt(chute);

    if (chute>=0 && chute<21) {
        if (numeroSecreto == chute) {
            location.href = '../winner/winner.html'
        } else {
            location.href = '../gameOver/gameOver.html'
        }
    } else {
        document.getElementById("resultado").innerText = "Esse número não está entre 0 e 20"
    }
    document.getElementById('tentativas').innerText = `Tentativas restantes: ${i}`
}
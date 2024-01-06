var jogador, ganhador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var ganhadorSelecionado = document.getElementById('ganhador-selecionado');

mudarJogador('X');

function escolherquad(id) {
    if (ganhador !== null) {
        return;
    }

    var quad = document.getElementById(id);
    if (quad.innerHTML !== '-') {
        return;
    }

    quad.innerHTML = jogador;
    quad.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaganhador();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaganhador(){
    var quad1 = document.getElementById(1);
    var quad2 = document.getElementById(2);
    var quad3 = document.getElementById(3);
    var quad4 = document.getElementById(4);
    var quad5 = document.getElementById(5);
    var quad6 = document.getElementById(6);
    var quad7 = document.getElementById(7);
    var quad8 = document.getElementById(8);
    var quad9 = document.getElementById(9);

    if (checaSequencia(quad1, quad2, quad3)) {
        mudaCorquad(quad1, quad2, quad3);
        mudarganhador(quad1);
        return;
    }

    if (checaSequencia(quad4, quad5, quad6)) {
        mudaCorquad(quad4, quad5, quad6);
        mudarganhador(quad4);
        return;
    }

    if (checaSequencia(quad7, quad8, quad9)) {
        mudaCorquad(quad7, quad8, quad9);
        mudarganhador(quad7);
        return;
    }

    if (checaSequencia(quad1, quad4, quad7)) {
        mudaCorquad(quad1, quad4, quad7);
        mudarganhador(quad1);
        return;
    }

    if (checaSequencia(quad2, quad5, quad8)) {
        mudaCorquad(quad2, quad5, quad8);
        mudarganhador(quad2);
        return;
    }

    if (checaSequencia(quad3, quad6, quad9)) {
        mudaCorquad(quad3, quad6, quad9);
        mudarganhador(quad3);
        return;
    }

    if (checaSequencia(quad1, quad5, quad9)) {
        mudaCorquad(quad1, quad5, quad9);
        mudarganhador(quad1);
        return;
    }

    if (checaSequencia(quad3, quad5, quad7)) {
        mudaCorquad(quad3, quad5, quad7);
        mudarganhador(quad3);
    }
}

function mudarganhador(quad) {
    ganhador = quad.innerHTML;
    ganhadorSelecionado.innerHTML = ganhador;
}

function mudaCorquad(quad1, quad2, quad3) {
    quad1.style.background = '#479165d0';
    quad2.style.background = '#479165d0';
    quad3.style.background = '#479165d0';
}

function checaSequencia(quad1, quad2, quad3) {
    var eigual = false;

    if (quad1.innerHTML !== '-' && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar()
{
    ganhador = null;
    ganhadorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quad = document.getElementById(i);
        quad.style.background = '#698d78';
        quad.style.color = '#698d78';
        quad.innerHTML = '-';
    }

    mudarJogador('X');
}
function handleNomeOpcao(numero) {
    if (numero == 1) return "Pedra";
    if (numero == 2) return "Papel";
    if (numero == 3) return "Tesoura";
}

function handleEscolhaComputador() {

    var numero = Math.floor(Math.random() * 3) + 1;
    return numero;
}

function handleResultado(usuario, computador) {
    if (usuario == computador) {
        return "Empate!";
    }

    if (usuario == 1 && computador == 3) return "Você venceu! Pedra quebra Tesoura.";
    if (usuario == 3 && computador == 2) return "Você venceu! Tesoura corta Papel.";
    if (usuario == 2 && computador == 1) return "Você venceu! Papel cobre a Pedra.";
    if (computador == 1 && usuario == 3) return "Computador venceu! Pedra quebra Tesoura.";
    if (computador == 3 && usuario == 2) return "Computador venceu! Tesoura corta Papel.";
    if (computador == 2 && usuario == 1) return "Computador venceu! Papel cobre a Pedra.";
}

function handleJogar(escolhaUsuario) {

    var escolhaComputador = handleEscolhaComputador();

    document.getElementById("escolhaUsuario").innerHTML = handleNomeOpcao(escolhaUsuario);
    document.getElementById("escolhaComputador").innerHTML = handleNomeOpcao(escolhaComputador);

    var resultado = handleResultado(escolhaUsuario, escolhaComputador);
    document.getElementById("mensagem").innerHTML = resultado;
}

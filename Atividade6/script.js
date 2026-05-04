function validarEntradas(a, b, c) {
    return a > 0 && b > 0 && c > 0 && !isNaN(a) && !isNaN(b) && !isNaN(c);
}

function verificarFormaTriangulo(a, b, c) {
    const lados = [a, b, c].sort((x, y) => x - y);
    return lados[0] + lados[1] > lados[2];
}

function classificarTriangulo(a, b, c) {
    const ladosUnicos = new Set([a, b, c]).size;
    
    switch(ladosUnicos) {
        case 1: return "Equilátero";
        case 2: return "Isósceles";
        default: return "Escaleno";
    }
}

function verificarTriangulo() {
    const [inputA, inputB, inputC] = [
        document.getElementById('valorA').value,
        document.getElementById('valorB').value,
        document.getElementById('valorC').value
    ];

    const [a, b, c] = [Number(inputA), Number(inputB), Number(inputC)];
    const resultado = document.getElementById('resultado');
    resultado.className = '';

    if (!inputA.trim() || !inputB.trim() || !inputC.trim() || !validarEntradas(a, b, c)) {
        resultado.innerText = "Erro: Por favor, insira apenas números válidos.";
        resultado.classList.add('erro');
        return;
    }

    if (verificarFormaTriangulo(a, b, c)) {
        const tipo = classificarTriangulo(a, b, c);
        resultado.innerText = `Sucesso! Triângulo formado: ${tipo}.`;
        resultado.classList.add('sucesso');
    } else {
        resultado.innerText = "Atenção: Os valores informados NÃO formam um triângulo.";
        resultado.classList.add('alerta');
    }
}

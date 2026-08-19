function Parte1() {
    for (let i = 1; i <= 10; i++) {
        console.log("primeira parte:" + i);
    }
}

setTimeout(Parte1, 2000);

const fs = require('fs').promises;
const arquivo = 'file.txt';

function Parte2() {
    return fs.readFile(arquivo, 'utf-8');
}

Parte2()
    .then(data => {
        const registros = data.toString().split('\n');
        registros.forEach((registro, index) => {
            console.log("        segunda parte: " + index + " " + registro);
        });
    })
    .catch(err => {
        console.error("Erro ao ler arquivo:", err);
    });

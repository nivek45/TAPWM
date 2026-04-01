var nome = prompt("Digite o nome do aluno:");

var nota1 = parseFloat(prompt("Digite a 1ª nota:"));
var nota2 = parseFloat(prompt("Digite a 2ª nota:"));
var nota3 = parseFloat(prompt("Digite a 3ª nota:"));

var media = (nota1 + nota2 + nota3) / 3;

document.write("<p><strong>Nome:</strong> " + nome + "</p>");
document.write("<p><strong>Nota 1:</strong> " + nota1 + "</p>");
document.write("<p><strong>Nota 2:</strong> " + nota2 + "</p>");
document.write("<p><strong>Nota 3:</strong> " + nota3 + "</p>");
document.write("<p><strong>Média:</strong> " + media.toFixed(2) + "</p>");



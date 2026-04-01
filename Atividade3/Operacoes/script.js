var nota1 = parseFloat(prompt("Digite a 1ª nota:"));
var nota2 = parseFloat(prompt("Digite a 2ª nota:"));

var soma = nota1 + nota2;
var subtracao = nota1 - nota2;
var multiplicacao = nota1 * nota2;
var divisao = nota1 / nota2;
var resto = nota1 % nota2;

document.write("<p><strong>Soma:</strong> " + soma + "</p>");
document.write("<p><strong>Subtração:</strong> " + subtracao + "</p>");
document.write("<p><strong>Multiplicação:</strong> " + multiplicacao + "</p>");
document.write("<p><strong>Divisão:</strong> " + divisao + "</p>");
document.write("<p><strong>Resto:</strong> " + resto + "</p>");

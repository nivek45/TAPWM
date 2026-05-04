const MAX_PESSOAS = 45;

let idades = [];
let opinioes = [];
let sexos = [];

const contadorElemento = document.getElementById("contador");
const resultadoDiv = document.getElementById("resultado");

document.getElementById("formPesquisa").addEventListener("submit", function (e) {
  e.preventDefault();

  if (idades.length >= MAX_PESSOAS) {
    alert("O limite de 45 respostas foi atingido!");
    return;
  }

  const idade = parseInt(document.getElementById("idade").value);
  const sexo = document.getElementById("sexo").value;
  const opiniao = parseInt(document.getElementById("opiniao").value);

  idades.push(idade);
  sexos.push(sexo);
  opinioes.push(opiniao);

  contadorElemento.textContent = idades.length;

  this.reset();
});

function calcularResultados() {
  if (idades.length === 0) {
    resultadoDiv.innerHTML = "<p>Insira dados antes de calcular.</p>";
    return;
  }

  // Média das idades
  const somaIdades = idades.reduce((acc, idade) => acc + idade, 0);
  const mediaIdade = somaIdades / idades.length;

  // Maior e menor idade
  const maiorIdade = Math.max(...idades);
  const menorIdade = Math.min(...idades);

  // Quantidade de péssimos
  const qtdPessimo = opinioes.filter(op => op === 1).length;

  // Porcentagem de ótimo e bom
  const qtdOtimoBom = opinioes.filter(op => op === 3 || op === 4).length;
  const porcentagemOtimoBom = (qtdOtimoBom / opinioes.length) * 100;

  // Contagem por sexo
  const qtdMasculino = sexos.filter(sexo => sexo === "masculino").length;
  const qtdFeminino = sexos.filter(sexo => sexo === "feminino").length;
  const qtdOutros = sexos.filter(sexo => sexo === "outros").length;

  // Exibição dos resultados
  resultadoDiv.innerHTML = `
        <h2>Resultados da Pesquisa</h2>
        <p><strong>Média das idades:</strong> ${mediaIdade.toFixed(2)} anos</p>
        <p><strong>Pessoa mais velha:</strong> ${maiorIdade} anos</p>
        <p><strong>Pessoa mais nova:</strong> ${menorIdade} anos</p>
        <p><strong>Quantidade que responderam péssimo:</strong> ${qtdPessimo}</p>
        <p><strong>Porcentagem de ótimo e bom:</strong> ${porcentagemOtimoBom.toFixed(2)}%</p>
        <p><strong>Masculino:</strong> ${qtdMasculino}</p>
        <p><strong>Feminino:</strong> ${qtdFeminino}</p>
        <p><strong>Outros:</strong> ${qtdOutros}</p>
    `;
}
    // --- FUNÇÕES AUXILIARES ---

    function obterDiaSemanaRefatorado(dataString) {
        const semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        let data = new Date(dataString);
        data.setHours(12);
        return semana[data.getDay()];
    }

    function ehPalindromo(str) {
        let normalizado = str.toLowerCase().replace(/\s+/g, '');
        for (let i = 0; i < normalizado.length / 2; i++) {
            if (normalizado[i] !== normalizado[normalizado.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    function extrairMaior(n1, n2, n3) {
        let maior = n1;
        if (n2 > maior) maior = n2;
        if (n3 > maior) maior = n3;
        return maior;
    }

    function ordenarAscendente(n1, n2, n3) {
        let numeros = [n1, n2, n3];
        for (let i = 0; i < numeros.length; i++) {
            for (let j = i + 1; j < numeros.length; j++) {
                if (numeros[i] > numeros[j]) {
                    let temp = numeros[i];
                    numeros[i] = numeros[j];
                    numeros[j] = temp;
                }
            }
        }
        return numeros;
    }

    function ehSubconjunto(principal, sub) {
        if (!principal || !sub) return "erro";
        let p = principal.toLowerCase();
        let s = sub.toLowerCase();
        return p.indexOf(s) !== -1 ? "é um subconjunto" : "não é um subconjunto";
    }

    // --- FUNÇÕES DE INTERFACE (CHAMADA PELOS BOTÕES) ---

    function executarDiaSemana() {
        let data = document.getElementById('data5').value;
        if (!data) {
            document.getElementById('res5').innerText = "Selecione uma data válida.";
            return;
        }
        document.getElementById('res5').innerText = "Cai num(a): " + obterDiaSemanaRefatorado(data);
    }

    function executarPalindromo() {
        let txt = document.getElementById('texto3').value;
        let resultado = ehPalindromo(txt) ? "Sim, é um palíndromo!" : "Não é um palíndromo.";
        document.getElementById('res3').innerText = resultado;
    }

    function executarMaior() {
        let a = Number(document.getElementById('n1_1').value);
        let b = Number(document.getElementById('n1_2').value);
        let c = Number(document.getElementById('n1_3').value);
        document.getElementById('res1').innerText = "O maior é: " + extrairMaior(a, b, c);
    }

    function executarOrdem() {
        let a = Number(document.getElementById('n2_1').value);
        let b = Number(document.getElementById('n2_2').value);
        let c = Number(document.getElementById('n2_3').value);
        document.getElementById('res2').innerText = "Ordem: " + ordenarAscendente(a, b, c).join(', ');
    }

    function executarSubconjunto() {
        let p1 = document.getElementById('palavra4_1').value;
        let p2 = document.getElementById('palavra4_2').value;
        document.getElementById('res4').innerText = "Resultado: " + ehSubconjunto(p1, p2);
    }
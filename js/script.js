const exercicio1 = () => {
    // Capturar o elemento "Resposta"
    let resposta = document.getElementById("resultado");

    // Variável para armazenar o resultado
    let resultadoHTML = " # ";
    
    // Loop de 1 até 10 usando o laco for
    for (let i = 1; i <= 10; i++) {
        resultadoHTML += i + " # ";
    }
    
    // Exibir o resultado
    resposta.innerHTML = resultadoHTML;
};

const exercicio2 = () => {
    // Pegar o número digitado
    let num = document.getElementById("num").value;

    // Elementos de saída
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");

    // Limpar conteúdo anterior
    resultado.innerHTML = "";
    erro.innerHTML = "";

    // Validação: se vazio ou menor que zero
    if (num === "" || num < 0) {
        erro.innerHTML = "Digite um número válido!";
        return;
    }

    let limite = parseInt(num);
    let respostaTexto = " # ";

    // Laço for pegando apenas pares de 0 até o limite
    for (let i = 0; i <= limite; i += 2) {
        respostaTexto += i + " # ";
    }

    // EXIBIR O RESULTADO (estava faltando no seu!)
    resultado.innerHTML = respostaTexto;
};

const exercicio3 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let numero = parseInt(document.getElementById("num").value);

    // Limpar saídas
    resultado.innerHTML = "";
    erro.innerHTML = "";

    // Validação inicial
    if (isNaN(numero) || numero <= 0) {
        erro.innerHTML = 'Digite um número maior que 0';
        return;
    }

    // O número 1 não é primo por definição
    if (numero === 1) {
        resultado.innerHTML = `O número 1 não é primo`;
        return;
    }

    // Variável Booleana
    let primo = true;

    // Loop para verificar se existe algum divisor além de 1 e ele mesmo
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
            break; // Se achou um divisor, para o loop aqui
        }
    }

    // Verificação Final
    if (primo) {
        resultado.innerHTML = `O número ${numero} é primo`;
    } else {
        resultado.innerHTML = `O número ${numero} não é primo`;
    }
};





const exercicio16 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let numero = document.getElementById("num1").value;

    // Limpar saídas
    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (numero <= 0 || numero === "") {
        erro.innerHTML = "Digite um número positivo";
    } else {
        // Cálculo da circunferência: 2 * PI * raio
        let calculo = 2 * parseFloat(numero) * Math.PI;
        // fixed(2) para não ficar um número gigante na tela
        resultado.innerHTML = `Circunferência: ${calculo.toFixed(2)}`;
    }
};
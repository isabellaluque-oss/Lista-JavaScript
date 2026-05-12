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



const exercicio4 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let num = document.getElementById("num").value;

    // Limpar
    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (num == "") {
        erro.innerHTML = "Digite um número";
    } else {

        resultado.innerHTML = "<h3>Tabuada do " + num + "</h3>";

        for (let i = 0; i <= 10; i++) {
            resultado.innerHTML += num + " x " + i + " = " + (num * i) + "<br>";
        }
    }
}



const exercicio5 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let num = document.getElementById("num").value;

    // Limpar
    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (num == "") {
        erro.innerHTML = "Digite um número";
    } else {

        resultado.innerHTML = "<h3>Números ímpares até " + num + "</h3>";

        let i = 0;

        while (i <= num) {
            if (i % 2 != 0) {
                resultado.innerHTML += i + "<br>";
            }
            i++;
        }
    }
}



//exercicio 6
const exercicio6 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let num = document.getElementById("num").value;

    // Limpar
    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (num == "") {
        erro.innerHTML = "Digite um número";
    } else {

        let i = 0;
        let soma = 0;

        while (i <= num) {
            if (i % 2 == 0) {
                soma += i;
            }
            i++;
        }

        resultado.innerHTML = "<h3>Soma dos números pares até " + num + "</h3>";
        resultado.innerHTML += "Resultado: " + soma;
    }
} 




const exercicio7 = () => {
    let resposta = document.getElementById("resposta");

    let resultado = "";

    let i = 10;

    while (i >= 1) {
        resultado += i + " ";
        i--; // diminui 1
    }

    resposta.innerHTML = "<h2>Resposta da Atividade</h2>" + resultado;
};


const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let palavra = document.getElementById("palavra").value;

  let palavraInvertida = "";

  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  if (palavra === palavraInvertida) {
    resultado.innerHTML = "A palavra é um palíndromo.";
  } else {
    resultado.innerHTML = "A palavra não é um palíndromo.";
  }
};


const exercicio9 = () => {

  let resposta = document.getElementById("resposta");
  let soma = 0;


  for (let i = 1; i <= 100; i++) {
    soma += i;
  }

  resposta.innerHTML = "A soma de 1 a 100 é: " + soma
};


const exercicio10 = () => {
  let resultado = document.getElementById("resultado");

  let quantidade = Number(document.getElementById("num").value);

  let soma = 0;
  let i = 1;

  while (i <= quantidade) {
    let numero = Number(prompt("Digite o número " + i + ":"));
    soma += numero;
    i++;
  }

  let media = soma / quantidade;

  resultado.innerHTML = "Média: " + media;
};



const exercicio11 = () => {
  let resultado = document.getElementById("resposta");

  let resposta = " #";

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      resposta += i + " #";
    }
  }

  resultado.innerHTML = resposta;
};

const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  let num = document.getElementById("num").value;

  let soma = 0;

  for (let i = 0; i < num.length; i++) {
    soma += Number(num[i]);
  }

  resultado.innerHTML = "Soma dos dígitos: " + soma;
};

const exercicio13 = () => {
  let resultado = document.getElementById("resultado");

  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let resposta = " #";

  for (let numero = num1; numero <= num2; numero++) {
    let primo = true;

    if (numero <= 1) {
      primo = false;
    } else {
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          primo = false;
          break;
        }
      }
    }

    if (primo === true) {
      resposta += numero + " #";
    }
  }

  resultado.innerHTML = resposta;
};

const exercicio14 = () => {
  let resultado = document.getElementById("resultado");

  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let area = num1 * num2;

  resultado.innerHTML = "Área do retângulo: " + area;
};

const exercicio15 = () => {
  let resultado = document.getElementById("resultado");
  let palavra = document.getElementById("palavra").value;

  let letras = palavra.split("");
  let resposta = "";

  for (let i = 0; i < letras.length; i++) {
    let letra = letras[i].toLowerCase();

    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      resposta += '"' + letras[i] + '"' + " é vogal |";
    } else {
      resposta += '"' + letras[i] + '"' + " é consoante |";
    }
  }

  resultado.innerHTML = resposta;
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

const exercicio17 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero1 = Number(document.getElementById("num1").value);
  let numero2 = Number(document.getElementById("num2").value);
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (numero1 <= 0 || numero2 <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    let calculo = (numero1 * numero2) / 2;
    resultado.innerHTML = `A área do triangulo é de: ${calculo} un²`;
    erro.innerHTML = "";
  }
};

const exercicio18 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero1 = Number(document.getElementById("num1").value);
  let numero2 = Number(document.getElementById("num2").value);
  let numero3 = Number(document.getElementById("num3").value);
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (numero1 <= 0 || numero2 <= 0 || numero3 <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    let calculo = ((numero1 + numero2) * numero3) / 2;
    resultado.innerHTML = `A área do trapézio é de: ${calculo} un²`;
    erro.innerHTML = "";
  }
};

const exercicio19 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  let letra = document.getElementById("letra").value;
  let vogais = ["a", "e", "i", "o", "u"];
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (letra.length > 1) {
    erro.innerHTML = "Digite apenas um caracter.";
    resultado.innerHTML = "";
  } else if (palavra.length < 1) {
    erro.innerHTML = "Digite uma palavra.";
    resultado.innerHTML = "";
  } else {
    let palavraVetor = palavra.split(""); // Quebra a frase em varias palavras
    for (let i = 0; i < palavraVetor.length; i++) {
      if (vogais.includes(palavraVetor[i])) {
        palavraVetor[i] = letra;
      }
    }
    palavra = palavraVetor.join(""); // Junta novamente as palavras
    resultado.innerHTML = `A palavra resultante é: ${palavra}`;
    erro.innerHTML = "";
  }
};

const exercicio20 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1) {
    erro.innerHTML = "Digite uma palavra.";
    resultado.innerHTML = "";
  } else {
    let fraseInvertida = frase.split(" ").reverse().join(" ");
    resultado.innerHTML = `A frase resultante é: ${fraseInvertida}`;
    erro.innerHTML = "";
  }
};

const exercicio21 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1) {
    erro.innerHTML = "Digite uma palavra.";
    resultado.innerHTML = "";
  } else {
    let fraseNova = frase.split(" ").join("");
    resultado.innerHTML = `A frase resultante é: ${fraseNova}`;
    erro.innerHTML = "";
  }
};

soma = 0;
contador = 0;
const exercicio22 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (soma < 100) {
    soma += parseFloat(numero);
    resultado.innerHTML = `A soma dos números digitados é: ${soma}`;
    erro.innerHTML = "";
  } else {
    resultado.innerHTML = `A soma já atingiu o limite de 100, o total é: ${soma}`;
    erro.innerHTML = "";
  }
};

const exercicio23 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  let frase = document.getElementById("frase").value;

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1 || palavra.length < 1) {
    erro.innerHTML = "Digite uma frase e uma palavra para realizar a contagem.";
    resultado.innerHTML = "";
  } else {
    let palavrasNaFrase = frase.split(" ");
    let contador = 0;
    for (let i = 0; i < palavrasNaFrase.length; i++) {
      if (palavrasNaFrase[i] == palavra) {
        contador++;
      }
    }
    resultado.innerHTML = `A palavra "${palavra}" aparece ${contador} vez(es) na frase.`;
    erro.innerHTML = "";
  }
};

const exercicio24 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (frase.length < 1) {
    erro.innerHTML = "Digite uma frase para converter.";
    resultado.innerHTML = "";
  } else {
    let palavras = frase.split(" ");
    let fraseNova = palavras
      .map((palavra) => {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
      })
      .join(" ");
    resultado.innerHTML = `A frase resultante é: ${fraseNova}`;
    erro.innerHTML = "";
  }
};

const exercicio25 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    erro.innerHTML = "Digite três números válidos.";
    resultado.innerHTML = "";
  } else {
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    resultado.innerHTML = `Os números em ordem crescente são: ${numeros.join(", ")}`;
    erro.innerHTML = "";
  }
};

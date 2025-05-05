/*----------------[ Lista 1 de Exercícios +praTi & Codifica ]----------------*/

const prompt = require("prompt-sync")({ sigint: true }); // Importando o módulo prompt-sync para ler entradas do usuário

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
let numero = parseInt(prompt("Digite um número inteiro: "));
if(numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.4
let idade = parseInt(prompt("Digite a idade: "));
if(idade < 12) {
    console.log("Criança");
} else if(idade < 18) {
    console.log("Adolescente");
} else if(idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
let nota = Number(prompt("Digite a nota (0 a 10): "));
if(nota >= 7) {
    console.log("Aprovado");
} else if(nota >= 4) {
    console.log("Recuperação");
} else if(nota >= 0) {
    console.log("Reprovado");
}

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
console.log(" ---------")
console.log("|  Menu   |");
console.log("| Opção 1 |");
console.log("| Opção 2 |");
console.log("| Opção 3 |");
console.log(" ---------")

let op = Number(prompt("Escolha uma opção (1, 2 ou 3): "));
switch(op) {
    case 1:
        console.log("Você escolheu a opção 1.");
        break;
    case 2:
        console.log("Você escolheu a opção 2.");
        break;
    case 3:
        console.log("Você escolheu a opção 3.");
        break;
    default:
        console.log("Opção inválida.");
}

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
let peso = Number(prompt("Digite o peso em kg: "));
let altura = Number(prompt("Digite a altura em metros: "));
let imc = peso / (altura * 2);

if(imc < 18.5) {
    console.log("Baixo peso");
} else if(imc < 24.9) {
    console.log("Peso normal");
} else if(imc >= 25.0 && imc < 29.9) {
    console.log("Sobrepeso");
} else if(imc > 30.0 && imc < 39.9) {
    console.log("Obesidade");
}

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
let ladoA = Number(prompt("Digite o lado A: "));
let ladoB = Number(prompt("Digite o lado B: "));
let ladoC = Number(prompt("Digite o lado C: "));
if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo Isósceles");
    } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        console.log("Triângulo Escaleno");
    } else {
        console.log("Triângulo Equilátero");
    }
}

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
let macas = Number(prompt("Digite o número de maçãs compradas: "));
let preco = macas < 12 ? 0.30 : 0.25;
let total = macas * preco;
console.log(`Valor total da compra é: R$ ${total.toFixed(2)}`);

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));
if(valor1 === valor2){
    console.log("Os valores são iguais.");
} else if (valor1 < valor2) {
    console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);
} else {
    console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`);
}

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
let nr = Number(prompt("Digite um número inteiro: "));
for (let i = 0; i < 10; i++) {
    console.log(nr);
}

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
let soma = 0;
for (let i = 1; i <= 5; i++){
    let numero = Number(prompt("Digite um número: "));
        if(Number.isInteger(numero) && numero > 0) { // Verificando entrada de número inteiro
            soma += numero;
        } else {
           console.log("Erro, número negativo ou não é um número.");
        }
}
console.log(`Resultado da soma: ${soma}`);

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.
let multiplicador = Number(prompt("Digite um número para obter sua tabuada: "));
for(let i = 1; i <= 10; i++) {
    if(Number.isInteger(multiplicador) && multiplicador >= 0) {
            result = multiplicador * i;
            console.log(`${multiplicador} X ${i} = ${result}`);
    } else {
        console.log(`Número inserido inválido, negativo ou letra.`);
    }
};

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
let somaTotal = 0;
let contador = 0;
let numeroDecimal;
do {
    numeroDecimal = Number(prompt("Insira um número decimal(digite 0 para encerrar): "));
    if(numeroDecimal !== 0 && !Number.isInteger(numeroDecimal)) {
        somaTotal += numeroDecimal;
        contador++;
    } else {
        console.log("Insira somente números decimais.");
    }
} while (numeroDecimal !== 0);
if (contador > 0) {
    let mediaAritmetica = somaTotal / contador;
    console.log(`A média aritmética dos números inseridos é: ${mediaAritmetica}`);
} else {
    console.log("Nenhum número válido.");
}

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
let numeroFatorial = Number(prompt("Insira um número: "));
let fatorial = 1;
for(let i = 1; i < numeroFatorial; i++) {
    fatorial *= i;
    console.log(`${i}! = ${fatorial}`);
}
console.log(`Fatorial de ${numeroFatorial} é: ${fatorial}`);

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for
let n1 = 0;
let n2 = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci:");
for (let i = 0; i < 10; i++) {
    console.log(n1);
    let prox = n1 + n2;
    n1 = n2;
    n2 = prox;
}


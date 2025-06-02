/*----------------[ Lista 2 de Exercícios +praTi & Codifica ]----------------*/

const prompt = require("prompt-sync")({ sigint: true }); // Importando o módulo prompt-sync para ler entradas do usuário

/*Seção 1: Estruturas de Controle Avançadas*/

/* 1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário. */
// function ehDataValida(dia, mes, ano) {
//     if(typeof dia !== 'number' || typeof mes !== 'number' || typeof ano !== 'number') {
//         return false;
//     } else {
//         if (ano < 0 || mes < 1 || mes > 12 || dia < 1) {
//             return false;
//         }
//         const diasPorMes = [31, (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//         if (dia > diasPorMes[mes - 1]) {
//             return false;
//         }
//         return true;
//     }
// }
// // Exemplos
// console.log(ehDataValida(4, 3, 2020));

/* 2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */
// function adivinhacao() {
//     const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
//     let tentativas = 0;
//     let palpite = 0;
    
//     while (palpite !== numeroAleatorio) {
//         palpite = parseInt(prompt("Adivinhe o número (números de 1 a 100): "));
//         tentativas++;

//         if (palpite < numeroAleatorio) {
//             console.log("Mais alto!");
//         } else if (palpite > numeroAleatorio) {
//             console.log("Mais baixo!")
//         } else if (palpite === numeroAleatorio) {
//             console.log(`Você acertou! O número era ${numeroAleatorio}.`);
//             console.log(`Tentativas: ${tentativas}`);
//         } else if (isNaN(palpite)) {
//             console.log("Somente números são permitidos.");
//         }
//     }
// }
// Exemplos
// adivinhacao();

/* 3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array. */
// function palavrasUnicas(frase) {
//     const str = frase.split(" ");
//     const strUnicas = [];

//     for (let i = 0; i < str.length; i++) {
//         if (!strUnicas.includes(str[i])) {
//             strUnicas.push(str[i]);
//         } 
//     }
//     return strUnicas;
// }
// // Exemplos
// console.log(palavrasUnicas("olá olá mundo mundo"));


/* Seção 2: Funções e Recursão */

/* 4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1 */
// function fatorial(n) {
//     if (n < 0) {
//         throw new Error("Número negativo não é permitido.");
//     } else if (n === 0) {
//         return 1;
//     } else {
//         return n * fatorial(n - 1);
//     }
// }
// // Exemplos
// console.log(fatorial(5))
// console.log(fatorial(-5))

/* 5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo. */
// function debounce(fn, delay) {
//     let timeOut;

//     return function (...args) {
//         clearTimeout(timeOut);
//         timeOut = setTimeout(() => {
//             fn(...args);
//         }, delay);
//     }
// }
// // Exemplos
// const minhaFuncao = () => console.log("Função executada após o delay!");
// const debouncedFuncao = debounce(minhaFuncao, 2000);
// debouncedFuncao();
// debouncedFuncao();
// debouncedFuncao();

/* 6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações. */
// function memoize(fn) {
//     const cache = new Map();

//     return function memoizedFunction(...args) {
//         const key = JSON.stringify(args);
//         if (cache.has(key)) {
//             return cache.get(key);
//         } else {
//             const result = fn.apply(this, [memoizedFunction, ...args]);
//             cache.set(key, result);
//             return result;
//         }
//     }
// }

// const memoizedFatorial = memoize(function(self, n) {
//     if (n === 0 || n === 1) return 1;
//     return n * self(n - 1);
// });

// // Exemplos
// console.log(memoizedFatorial(5));
// console.log(memoizedFatorial(10));
// console.log(memoizedFatorial(5));


/* Seção 3: Arrays e Objetos Complexos */

/* 7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, …], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort. */
// function ordenarProdutosPorPreco(produtos) {
//     return [...produtos]
//         .sort((a, b) => a.preco - b.preco)
//         .map(p => p.nome);
// }
// // // Exemplos
// const produtos = [
//     { nome: "Produto A", preco: 30 },
//     { nome: "Produto B", preco: 50 },
//     { nome: "Produto C", preco: 80 },
//     { nome: "Produto D", preco: 20 },
// ];
// console.log(ordenarProdutosPorPreco(produtos));

/* 8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total. */
// function agruparVendasPorCliente(vendas) {
//     return vendas.reduce((acumulador, venda) => {
//         if (!acumulador[venda.cliente]) {
//             acumulador[venda.cliente] = 0;
//         }
//         acumulador[venda.cliente] += venda.total;
//         return acumulador;
//     }, {});
// }
// // Exemplos
// const vendas = [
//     { cliente: "João", total: 100 },
//     { cliente: "Ana", total: 200 },
//     { cliente: "Paulo", total: 300 },
//     { cliente: "Ricardo", total: 400 },
//     { cliente: "Bella", total: 500 },
//     { cliente: "João", total: 150 },
//     { cliente: "Ana", total: 250 },
//     { cliente: "Paulo", total: 350 },
//     { cliente: "Ricardo", total: 450 },
//     { cliente: "Bella", total: 550 },
// ];
// console.log(agruparVendasPorCliente(vendas));

/* 9. Conversão Entre Formatos
Escreva duas funções:
○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], … ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de
pares. */
// function paresParaObjeto(pares) {
//     return pares.reduce((objeto, par) => {
//         objeto[par[0]] = par[1];
//         return objeto;
//     }, {});
// }

// function objetoParaPares(obj) {
//     return Object.entries(obj);
// }
// //Exemplos
// const pares = [["nome", "João"], ["idade", 30], ["cidade", "São Paulo"]];
// const objeto = { nome: "Ana", idade: 25, cidade: "Rio de Janeiro"};
// console.log(paresParaObjeto(pares));
// console.log(objetoParaPares(objeto));
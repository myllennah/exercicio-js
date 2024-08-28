// Crie uma variável para armazenar seu nome completo

const nome = "Milena da Rosa Mota";
console.log("Nome: ", nome);

// Crie uma variável para armazenar se você gosta de programar (true ou false)

let resposta = prompt("Você gosta de programar? (sim ou não)");
    
let likes = (resposta === "sim");
console.log("Gosta de programar:\n",likes);

// Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável

console.log("\nOperações matemáticas");

//2 + (3 x 4) - 5
const a = 2;
const b = 3;
const c = 4;
const d = 5;
console.log(a + (b*c) - d);

//2 x (3 + 4) - 5 ÷ 5
console.log(a*(b+c)-d/d);

//{[(10 - 4) / 2] * 3} + 1

const e = 10;
const f = 1;
console.log((((e - c) / a) * b) + f);

//3 * 4 / 2 + 1 - 5

console.log(b * c / a + f - d);

//Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas

let quem = prompt("Agora vamos criar um poema.\n\nDigite o nome ou um descritivo de uma pessoa.");
let como = prompt("Digite um adjetivo negativo no masculino.");

console.log(`\nUM SINGELO POEMA\n
${quem}, que tudo fala e nada faz\n
Em seu discurso há um eco bem vazio\n
Promessas vãs, um ${como} desafio\n
E um desfecho que nunca satisfaz.`);

//Crie um programa que exiba a data atual formatada utilizando interpolação

const hoje = new Date();
const formato = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
let data = hoje.toLocaleDateString('pt-br', formato);

console.log(`\nHoje é dia ${data}.`);

//Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação

const base = prompt("Vamos calcular a área de um retângulo.\n\nQual é a medida da base?");
const altura = prompt("Qual é a medida da altura?");
console.log("\nA área do retângulo é:", base*altura);

//Crie uma condicional para verificar se o caractere é uma vogal

console.log("\nVogal ou consoante:");
let letra = prompt("Será que esta letra é uma vogal?\n\nDigite uma letra do alfabeto (minúscula).");

if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    console.log("É uma vogal!");
}
else{
    console.log("É uma consoante!");
}

//Crie uma condicional para verificar se o número é par ou é impar

console.log("\nPar ou ímpar:");
let numero = prompt("Digite um número.");

if(numero%2 == 0){
    console.log("O número é par.");
}
else{
    console.log("O número é ímpar.");
}

//Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno:

console.log("\nTipo do triângulo:");
let lado1 = prompt("Descubra de que tipo é um triângulo.\n\nDigite a medida da primeira lateral do triângulo.");
let lado2 = prompt("Digite a medida da segunda lateral do triângulo.");
let lado3 = prompt("Digite a medida da terceira lateral do triângulo.");

if(lado1 === lado2 && lado2 === lado3){
    console.log("O triângulo é equilátero.");
} else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    console.log("O triângulo é isósceles.");
} else{
    console.log("O triângulo é escaleno.");
}

//Calcule a média do aluno e verifique se ele foi aprovado

console.log("\nAprovação:");
const nota = prompt ("Qual a nota do(a) aluno(a) de 0 a 10?");

if(nota >= 7){
    console.log("A pessoa está aprovada!");
}
else{
    console.log("A pessoa está reprovada!");
}

// Crie uma variável para armazenar um array com seus hobbies

const hobbies = ["Cozinhar", "Assistir a filmes", "Caminhar", "Estudar idiomas", "Ler","Trabalhos manuais"]
console.log("\nArray hobbies: ", hobbies)

/* 
Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.
*/

console.log("\nArray frutas");
const frutas = ["Banana", "Manga", "Cereja", "Romã", "Ameixa"];
console.log("Array inicial: ", frutas);
console.log("Segundo elemento: ", frutas[1]);
frutas.push("Laranja", "Morango");
console.log("Adicionando 2: ", frutas);
frutas.splice(0,1);
console.log("Array final: ", frutas);

/* 
Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.
*/

const minhavariavel = 1564351;
console.log("\nTipo de variável: ", minhavariavel, "-", typeof minhavariavel);

/* Crie um programa que simule uma calculadora simples. O usuário deve inserir dois números e um operador (+, -, *, /). Utilize a estrutura switch para realizar a operação correspondente e exibir o resultado. */

console.log("\nResultado do cálculo:");
let num1 = prompt("\nVamos fazer operações matemáticas simples.\nDigite o primeiro número.");
let operador = prompt("Digite Operador.");
let num2 = prompt("Digite o segundo número.");

switch (operador){
    case "+":
        console.log(Number(num1) + Number(num2));
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("Alguma das informações é inválida.");
}

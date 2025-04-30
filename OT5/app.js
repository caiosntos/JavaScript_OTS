/*6- Funções
O que são Funções?
Pensa em funções como ferramentas que você cria para realizar tarefas
específicas. No mundo da programação, elas ajudam a evitar repetições e
tornam o código mais organizado e fácil de gerenciar.
Por que usar Funções?
Imagine ter que escrever o mesmo código várias vezes. Chato, né? Com
funções, você escreve uma vez e chama essa função sempre que precisar.
Criando funções em Javascript
Definindo uma Função Simples:
Aqui, criamos uma função chamada somar que pega dois números (num1 e
num2) e retorna a soma deles. A palavra return é usada para dar o resultado
da função.*/

function somar(num1, num2){
    return num1+num2;
}

/*Chamando a Função:
Aqui, a função somar é chamada com 5 e 3 como argumentos, e o resultado
(8) é guardado na variável resultado.*/

let resultado = somar(5,2)
console.log(resultado);

/*Parâmetros e Argumentos Explicados
Parâmetros vs. Argumentos:
Os parâmetros são como placeholders que definem que tipo de valores a
função espera receber. Já os argumentos são os valores reais passados para
a função.*/


function saudar(nome){
    console.log("Olá, " + nome);
}
saudar("Caio");

/*Arrow Functions
As Arrow Functions, ou funções seta, são um jeito mais novo e mais elegante
de escrever funções. Elas são especialmente úteis para funções anônimas e
curtas, vão ser muito úteis em um futuro próximo, então é bom ter prática com
isso.*/

let soma = (a, b) => a + b;




function calculoRetangulo(altura, base){
    return base*altura;
}


let base = 5;
let altura = 3;
let area = calculoRetangulo(altura, base);
console.log("A área do retangulo é: "+area);


function verificarPar(numero) {
    return numero % 2 === 0;
}

console.log(verificarPar(2)); 
console.log(verificarPar(9)); 

function converter(polegadas) {
    return polegadas * 2.54;
}

let convertido = converter(10)
console.log(convertido); 

//ou

console.log(converter(5)); 


function calculoIMC(peso, tamanho){
    return peso/(tamanho*tamanho);
}
let peso = 68;
let tamanho = 1.68;
let imc = calculoIMC(peso,tamanho);
console.log("O meu imc é: "+imc);

function minuscula(maiscula){
    return maiscula.toLowerCase();
}
let letra = minuscula("WASSUP");
console.log(letra);

let multiplicaPorDez = (a) => a * 10;
let resultadoMultplica = multiplicaPorDez(5);
console.log(resultadoMultplica);


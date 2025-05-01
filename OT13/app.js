/*Desafio 02
Nesse exercício, você está livre para escolher os nomes para suas variáveis e
funções! 😄*/
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(num1, num2){
    return num1 + num2;
}
// Declare uma variável que receba a invocação da função criada acima,passando dois números quaisquer por argumento, e somando `5` ao resultadoretornado da função.
let resultado = (soma(10,5) + 5);
// Qual o valor atualizado dessa variável?
console.log(resultado);
// Declare uma nova variável, sem valor.
let resultadoValor = "";
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a
string:
O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adcionarValor(semValor){
    semValor += "VALOR"
    return semValor;
}

// Invoque a função criada acima.
let mensagem = adcionarValor(resultadoValor);
console.log(mensagem);
/* Qual o retorno da função? (Use comentários de bloco).
Valor
*/
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função
deve retornar a string:
Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando
`2` ao resultado da multiplicação.
*/
function desafio13(num1,num2,num3){
    if (num1 == null ||  num2 ==null || num3 ==null){
        return "Preencha todos os valores corretamente!"
    }else{
        return num1*num2*num3+2;
    }
}
// Invoque a função criada acima, passando só dois números como argumento.
let resultado1 = desafio13(1,2);
console.log(resultado1);
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente! Pois não colocamos todos os argumento.
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
let resultado2 = desafio13(1,2,5);
console.log(resultado2);
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//8
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o
segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function minhaFuncao(arg1, arg2, arg3) {
    if (arguments.length === 0) {
        return false;
    }else if (arguments.length === 1) {
        return arg1;
    }else if (arguments.length === 2) {
        return arg1 + arg2;
    }else if (arguments.length === 3) {
        return (arg1 + arg2) / arg3;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(minhaFuncao(5)); 
console.log(minhaFuncao(5, 3));
console.log(minhaFuncao(5, 3, 2)); 
console.log(minhaFuncao());

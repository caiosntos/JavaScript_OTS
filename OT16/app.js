//Desafio 05
/*
Crie uma variável qualquer, que receba um array com alguns valores
aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let vetor = [1,2,3,4,5];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function acessoVetor(arr){
    return arr;
}
console.log(acessoVetor(vetor));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(acessoVetor(vetor[1]));
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores;
e o
segundo, um número. A função deve retornar o valor de um índice do array
que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o
número passado no
segundo parâmetro.
*/
function recebeArray(vetor2, num2){
    return vetor[num2]
}
let num2 = 3;
console.log(recebeArray(vetor,num2));
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let valoresAleatorios = [42, "banana", true, 3.14, "chatGPT"];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(acessoVetor(valoresAleatorios));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome
do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
- `quantidadePaginas` - Number (quantidade de páginas)
- `autor` - String
- `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function livro(nomeLivro){
    let livros = {
        "Can't Hurt Me": {
            quantidadePaginas: 364,
            autor: "David Goggins",
            editora: "Lioncrest Publishing"
          },
          "Never Finished": {
            quantidadePaginas: 320,
            autor: "David Goggins",
            editora: "Lioncrest Publishing"
          },
          "Mindset of a Warrior": { 
            quantidadePaginas: 280,
            autor: "David Goggins",
            editora: "Warrior Press"
          }
    };
    return nomeLivro ? livros[nomeLivro]:livros;
} 
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(livro());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro
qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let nomeDoLivro = "Never Finished";
let livroSelecionado = livro(nomeDoLivro);

console.log(`O livro ${nomeDoLivro} tem ${livroSelecionado.quantidadePaginas} páginas!`);
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer,
usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${nomeDoLivro} é ${livroSelecionado.autor}.`);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer,
usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${nomeDoLivro} foi publicado pela editora ${livroSelecionado.editora}.`);
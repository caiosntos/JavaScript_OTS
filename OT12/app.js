/*12 - Operador Spread
O operador spread é um recurso poderoso que pode simplificar e tornar seu
código muito mais flexível. Prontos para expandir seus conhecimentos?
O que é o Operador Spread?
O Operador Spread, representado por três pontos (...), permite que você
"espalhe" os elementos de um array ou de um objeto em outro lugar. Isso
pode ser incrivelmente útil em várias situações.
Usando Spread com Arrays*/

let numeros = [1,2,3];
let maisNumeros = [...numeros,4,5,6];
console.log(maisNumeros);

/*Aqui, usamos o Spread para criar um novo array maisNumeros, que contém
todos os elementos de numeros seguidos por 4, 5, 6. É uma maneira elegante
e concisa de combinar arrays.
Usando Spread com Objetos*/

let pessoa = {nome: 'Jão', idade: 25};
let pessoaAtualizada = {...pessoa, idade:26};
console.log(pessoaAtualizada);

/*Neste exemplo, criamos um novo objeto pessoaAtualizada que possui todas as
propriedades de pessoa, mas com a idade atualizada. O Spread aqui nos
permite copiar facilmente propriedades entre objetos.
Aplicações Práticas do Spread
O Spread é útil em diversas situações, como na manipulação de dados e na
passagem de argumentos para funções.
Copiando Arrays*/

let original = [1,2,3];
let copia = [...original];
console.log(copia);

/*Ao usar o Spread, você cria uma cópia superficial do array. Isso é
particularmente útil quando você não quer que as mudanças no novo array
afetem o original.
Concatenando Arrays*/

let inicio = [1,2];
let fim = [3,4];
let combinado = [...inicio, ...fim];
console.log(combinado);

/*O Spread torna a concatenação de arrays uma tarefa simples e limpa.
Espalhando Argumentos*/

function somar(a,b,c){
    return a+b+c;
}
let numeros2 = [1,2,3];
console.log(somar(...numeros2));

/*Aqui, espalhamos os elementos de numeros como argumentos individuais
para a função somar.
Combinando Objetos*/

let objeto1 = {a: 1, b:2};
let objeto2 = {c:3, d:4};
let combinado2 = {...objeto1, ...objeto2};
console.log(combinado2);

let mercado1 = ["Macarrão", "Arroz","Feijão"];
let mercado2 = [...mercado1,"Sabão em pó", "Lisoform", "Pasta de dente"];
console.log(mercado2);

let usuario = {
    nomeUsuario: 'Caio',
    email: 'caiogiovanists@outlook.com'
}
let usuarioAtualizado = {...usuario, Status:'Ativo'}
console.log(usuarioAtualizado);

function listaDeConvidados(...nomes) {
    console.log("Convidados:", nomes);
  }
listaDeConvidados("Caio","Valeria","Giulia");

let musica = ["Mantra - Aka Rasta", "Off - Yng Bitteti", "La - MC Igu"];
let copiaMusica = [...musica]
copiaMusica[1] =  "One - Cult Member";
console.log(musica);
console.log(copiaMusica);

let filme1 = {
    nomeFilme: "The GodFather",
    diretorFilme:"Francis Ford Coppola"
}
let filme2 = {
    anoFilme: 1972,
    generoFilme: "Mafia/Ação"
}
let filme = {...filme1, ...filme2};
console.log(filme);

function criarMenu(entradas, pratosPrincipais, sobremesas) {
    let menu = [...entradas, ...pratosPrincipais, ...sobremesas];
    return menu;
}


let entradas = ["Salada Caesar", "Bruschetta"];
let pratosPrincipais = ["Lasanha", "Frango Grelhado"];
let sobremesas = ["Tiramisu", "Pudim"];
let menuCompleto = criarMenu(entradas, pratosPrincipais, sobremesas);
console.log(menuCompleto);





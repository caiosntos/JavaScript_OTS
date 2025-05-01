/*8 - Estrutura de Dados Set
O que é um Set?
Um Set é como um array, só que cada valor nele é único. Nada de repetição
aqui, galera! Isso é super útil quando você quer garantir que cada elemento
seja único, tipo quando tá lidando com uma lista de IDs ou algo assim.
Criando um Set*/

let meuSet = new Set();

/*Aqui, estamos criando um novo Set vazio. É como abrir uma nova caixa para
guardar coisas, mas só uma de cada tipo.
Adicionando Valores ao Set
Para adicionar coisas no nosso Set, usamos o método add.
Exemplo de Adição*/

meuSet.add(1);
meuSet.add(2);
meuSet.add(2);//Não vai entrar, porque 2 ja está no set

/*Nós adicionamos 1 e 2 ao Set. Tentamos adicionar 2 de novo, mas o Set já tem
um 2, então ele ignora. Sets são tipo aquele amigo que não gosta de repetição.
Verificando a Presença de Valores
Quer saber se algo tá no Set? Usa o has.
Exemplo de Verificação*/

console.log(meuSet.has(1));
console.log(meuSet.has(3));

/*Aqui, estamos checando se 1 e 3 estão no Set. O 1 tá lá, mas o 3 não.
Contando os Valores
Pra saber quantos itens tem no Set, dá uma olhada no size.
Exemplo de Tamanho*/

console.log(meuSet.size);

/*Como só temos 1 e 2 no Set, o size mostra 2.
Dando um Rolê pelo Set
Quer ver tudo que tem no Set? É só iterar sobre ele.
Exemplo de Iteração*/

for(let valor of meuSet){
    console.log(valor);
}

/*Aqui, estamos passando por cada valor do Set e dando um print. Bem prático!
Limpando a Casa
Sets têm uns métodos maneiros tipo delete e clear.
Exemplo de Métodos*/

meuSet.delete(1);
meuSet.clear();

/*Sets no Dia a Dia
Sets são ótimos pra quando você precisa de uma coleção sem repetição. Tipo,
sabe quando você tem um monte de dados e precisa garantir que não tem
nada duplicado? Então, Sets são perfeitos pra isso.
Exemplo Prático*/

let numeros = [1,2,3,,2,1];
let numerosUnicos = new Set(numeros);
console.log([...numerosUnicos]);

let frutas = new Set();
frutas.add("Pera");
frutas.add("Manga");
frutas.add("Melancia");
frutas.add("Pera");

console.log(frutas.has("Melancia"));
frutas.delete("Manga");
frutas.clear();

let setDesafio = new Set();

setDesafio.add(1);
setDesafio.add(2);
setDesafio.add(3);
setDesafio.add(4);

console.log(setDesafio.size);

for (let valorDesafio of setDesafio){
    console.log(valorDesafio);
}

let nomes = ["Caio","Valeria","Giulia","Caio"];
let nomesUnicos = new Set(nomes);
console.log([...nomesUnicos]);
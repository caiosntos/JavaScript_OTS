/*8 - Estrutura de Dados Map
Map é uma daquelas ferramentas que podem fazer a diferença entre um
código ok e um código top!
O que é um Map?
Map é uma coleção de pares chave-valor. Diferente dos objetos, no Map, as
chaves podem ser de qualquer tipo - até objetos ou funções! Além disso, ele
mantém a ordem de inserção, o que pode ser mega útil em algumas situações.*/

let meuMap = new Map();

/*Aqui, estamos criando um novo Map. Pensa nele como um super objeto, só
que mais flexível e com superpoderes!
Adicionando Elementos:
Vamos adicionar alguns elementos ao nosso Map usando o método set.*/

meuMap.set('chave1', 'valor1');
meuMap.set('chave2', 'valor2');

/*Nesse exemplo, adicionamos duas haves ao Map: 'chave1' com o valor
'valor1' e 'chave2' com 'valor2'. O legal do Map é que ele aceita qualquer coisa
como chave!
Acessando Elementos:
Agora, vamos ver como pegar valores de volta do nosso Map.*/

console.log(meuMap.get('chave1'));

/*Usamos o método get com a chave 'chave1' para pegar o valor associado.
Aqui, ele retorna 'valor1'.
Iterando sobre um Map:
Maps são iteráveis, então podemos percorrer eles de várias maneiras.*/

for (let [chave, valor] of meuMap){
    console.log(`${chave}:${valor}`);
}


/*Neste loop for...of, desestruturamos cada par chave-valor e imprimimos
eles. É uma maneira super prática de ver tudo o que tá no Map.
Métodos Úteis do Map:
Maps vêm com alguns métodos bem práticos.*/

console.log(meuMap.size);
meuMap.delete('chave2');
console.log(meuMap.has('chave2'));

/*
● size nos mostra quantos pares chave-valor temos no Map.
● delete remove um par baseado na chave.
● has verifica se uma chave específica existe no Map.

Quando Usar um Map?
Map é perfeito quando você precisa de uma coleção de pares chave-valor,
onde as chaves são únicas e podem ser de qualquer tipo. É uma escolha
melhor que objetos quando as chaves são desconhecidas até o tempo de
execução, ou quando todas as chaves são do mesmo tipo e os valores
também.

Convertendo Map para Objetos e Arrays
Às vezes, você pode querer converter seu Map em um objeto ou array.
*/

let mapParaObjeto = Object.fromEntries(meuMap);
console.log(mapParaObjeto);

let chavesArray = [...meuMap.keys()];
console.log(chavesArray);

/*● Object.fromEntries transforma o Map em um objeto.
● Usando spread (...), pegamos todas as chaves ou valores do Map e
colocamos em um array.*/


let livro = new Map();
livro.set("Nuncaa é hora de parar", "David Goggins");
livro.set("Nada Pode me Ferir", "David Goggins");
livro.set("WhyNot", "Russell Westbrook");
console.log(livro.get("Nunca é hora de parar"));

for (let [chave, valor] of livro){
    console.log(`${chave}:${valor}`);
}

console.log(livro.size);
meuMap.delete("WhyNot");
console.log(livro.has("Nada Pode me Ferir"))

let colecao = new Map();
colecao.set("nome", "Julia");
colecao.set(42, "A resposta");
colecao.set(true, "Verdadeiro");
let obj = { id: 1 };
colecao.set(obj, "Objeto");
let arr = [1, 2, 3];
colecao.set(arr, "Array");
for (let [chave, valor] of colecao.entries()) {
  console.log("Chave:", chave, "-> Valor:", valor);
}

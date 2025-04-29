/*3- Arrays
Imagine um armário com várias gavetas. Em cada gaveta, você guarda um tipo
de coisa. No mundo da programação, um array é como esse armário: uma
coleção de 'gavetas' (elementos) onde você pode armazenar e organizar
dados.
Definindo um Array:*/
let series  = ["The Sopranos", "Seal Team", "Six"];
let filmes = new Array("Pulp Fiction", "Clube da Luta", "Matrix");

/*Aqui, filmes é um array que armazena três strings. Cada filme é como um item
em uma gaveta, com seu próprio 'número' (índice).
Um array pode ser declarado de duas formas: com colchetes [] ou com new
Array(). Mas a galera usa mais os colchetes porque é mais fácil e direto.
Acessando elementos de um Array:*/

let primeiraSerie = series[0];
let filmeInexistente = filmes[-1];

/* Metodos de Arrays:

Push: Pra colocar alguem no final da lista, usa push.*/
series.push("The Sopranos");

/*Pop: Para mandar o último da lista embora, usa pop*/
series.pop();

/*Shift: Se quiser tirar o primeiro da lista, o lance é shift*/
series.shift();

/*unshift: E se a ideia é adicionar alguem no começo da lista, usa unshift*/
series.unshift("Seal Team");

/*Alterando Elementos do Array: Se você quer mudar alguém que já tá na lista, é
só chegar no índice dele e trocar.*/
let games = ["Fifa", "call Of Duty", "Minecraft"];
games[0]="Fifa 21";

/*Length: Pra saber quantos elementos existem na lista, usa length. É tipo perguntar
"quantos são?"*/
let totalSeries = series.length;
console.log(totalSeries);

/*Percorrendo um Array com Loop: Às vezes, você vai querer falar com cada um da
fila. Para isso, usa um loop, como o for.*/
for(let i=0; i<games.length; i++){
    console.log(games[i]);
}


let animais = [];
animais.push("Cachorro","Gavião","Besouro");
 for (let i=0; i<animais.length;i++){
    console.log(animais[i]);
 }

 animais.shift();
 for (let i=0; i<animais.length;i++){
    console.log(animais[i]);
 }

 animais.unshift("Leopardo");
 for (let i=0; i<animais.length;i++){
    console.log(animais[i]);
 }

 animais[1] = "Vasco";
 for (let i=0; i<animais.length;i++){
    console.log(animais[i]);
 }

 let frutas = ["Uva", "Tangerina", "Goiaba", "Manga"];
 console.log(frutas.length);

 for (let i=0; i<frutas.length;i++){
    console.log(frutas[i]);
 }






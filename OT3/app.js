/*4- Loops
Agora vamos falar sobre loops em JavaScript. Loops são ferramentas
poderosas que permitem executar um bloco de código repetidamente sob
determinadas condições. Vamos entender tudo sobre eles!
O Que são Loops?
Em programação, um loop é uma estrutura que repete um bloco de código
enquanto uma condição específica é atendida. No JavaScript, temos vários
tipos de loops, cada um com suas peculiaridades e casos de uso.
Por Que Usamos Loops?
Loops são usados para realizar tarefas repetitivas sem escrever o mesmo
código várias vezes. Eles são fundamentais para operações como percorrer
arrays, processar dados, ou até mesmo em lógicas de jogos.
Tipos de Loops em JavaScript
Loop for: É o cara quando você sabe quantas vezes quer rodar algo. Tipo,
"faz isso aqui 10 vezes"*/

for (let i = 0; i< 10; i++){
    console.log(i);
}

/*Aqui, i começa em 0, e o loop continua enquanto i for menor que 10. A cada
iteração, i é incrementado em 1.
Loop while: Esse aqui é mais quando você tá naquela de "vou fazer isso até
algo acontecer". Mas cuidado, se não botar um jeito de parar, vira festa sem
hora pra acabar*/

let i =0; while (i<10){
    console.log(i);i++;
}

/*Loop do...while: Parecido com o while, mas a diferença é que ele executa pelo
menos uma vez, mesmo que a condição já comece falsa.*/
let j=0;
do{
    console.log(i);i++;
}while(i<10);

/*Loop for...of: Esse é pra quando você tem um array ou algo iterável e quer
passar por cada elemento dele.*/
let nomes = ["Ana", "Bia", "Carlos"];
for(let nome of nomes){
    console.log(nome);
}   
/*Controle de Loops
break: Usado para sair de um loop antes que ele atinja sua condição de
parada natural.
continue: Pula a iteração atual e continua com a próxima*/
for (let i = 0; i<10;i++){
    if (i==5){
        break;
    }if (i%2===0){
        continue;
    }
    console.log(i);
}

for ( let i = 0; i <= 10; i++){
    console.log(i)
}

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }

  let h = 0; while (h<=10){
  console.log(h);h++;
  }
  
  for (let i = 0; i<=20; i++){
    if(i===20){
        break;
    }if(i ==13){
        continue;}
    console.log(i);
}

let nomesDesafio = ["Caio", "Valeria", "Giulia"]
for (let desafioNome of nomesDesafio){
    console.log(desafioNome);
}

for (let i = 0; i <= 100; i++) {
    if (i === 50) {
      break;
    }
    console.log(i);
  }
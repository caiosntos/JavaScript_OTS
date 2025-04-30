/*5- Estruturas de Controle
Vamos mergulhar nas Estruturas de Controle no JavaScript. Essas estruturas
são essenciais para tomar decisões no código e controlar o fluxo de
execução. Vamos entender tudo que um iniciante precisa saber sobre isso.
Sem estruturas de controle, nossos programas seriam sequências lineares de
comandos. Com elas, podemos executar diferentes blocos de código com
base em condições variadas, tornando nosso código mais inteligente e
adaptável.
Estruturas Condicionais If/Else
if e else: É o básico do "se isso, então aquilo". Se a condição for verdadeira,
rola uma coisa, se não, rola outra.
Sintaxe básica:*/


let idade = 20;

if (idade >=18){
    console.log("Usuário é maior de idade.");
}else{
    console.log("Usuário é menor de idade.");
}

/*Encadeamento com Else If
Às vezes, precisamos verificar várias condições. Aqui, else if entra em
ação.*/

let hora = 20;

if (hora < 12){
    console.log("Bom dia!");
} else if (hora < 18){
    console.log("Boa tarde!");
}else{
    console.log("Boa noite!");
}

/*Estrutura Switch Case
switch é utilizado quando você tem várias condições pra checar. Funciona
tipo escolhendo um caminho baseado no valor de uma variável.
Sintaxe Básica do Switch:*/
let corFavorita = "azul";
switch (corFavorita){
    case "vermelho":
        console.log("Você gosta de vermelho");
        break;
    case "azul":
        console.log("Você gosta de azul");
        break;
    case "verde":
        console.log("Você gosta de verde");
        break;
    default:
        console.log("Cor não identificada");
}

let idadeDesafio= 25;
if (idadeDesafio <= 3){
    console.log("Criança");
}else if(idadeDesafio <= 17){
    console.log("Adolescente");
}else if(idadeDesafio <= 64){
    console.log("Adulto");
}else{
    console.log("Idoso");
}

let advinhaDesafio = 2;
switch (advinhaDesafio){
    case 1:
        console.log("Você errou");
        break;
    case 2:
        console.log("Você errou");
        break;
    case 3:
        console.log("Você errou");
        break;
    case 4:
        console.log("Você errou");
        break;
    case 5:
        console.log("Você acertou!");
        break;

        default:
            console.log("Tente novamente!");
}

let notaDesafio = 7;
switch (true) {
    case (notaDesafio < 6):
        console.log("Reprovado");
        break;
    case (notaDesafio >= 6 && notaDesafio <= 7):
        console.log("Recuperação");
        break;
    case (notaDesafio > 7):
        console.log("Aprovado");
        break;
    default:
        console.log("Nota inválida");
}

//Desafio 03
// Declarar uma variável qualquer, que receba um objeto vazio.

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem
ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
let pessoa = {
    nome: "Caio Giovani",
    sobrenome: "Santos Madureira",
    sexo: "Masculino",
    idade: 22,
    altura: 1.71,
    peso: 68,
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversario: function() {
        this.idade += 1;
    },
    andar:function(metros){
        if(this.caminhouQuantosMetros <= metros){
        this.caminhouQuantosMetros += metros;
         this.andando = true;
         return this.caminhouQuantosMetros;
        }
    },
    parar: function() {
            this.andando = false; 
        }
}
/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O
método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez
que
for chamado.
*/
pessoa.fazerAniversario();
console.log(pessoa);
/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as
seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a
quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando
ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar();
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o
valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
function nomeCompleto(){
    return `Olá! Meu nome é ${this.nome} ${this.sobrenome}`;
}
pessoa.nomeCompleto = nomeCompleto;
/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
function mostrarIdade(){
    return `Olá, eu tenho ${this.idade}`;
}
pessoa.mostrarIdade = mostrarIdade;
/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
function mostrarPeso(){
    return `Eu peso ${this.peso}kg`;
}
pessoa.mostrarPeso = mostrarPeso;
/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
function mostrarAltura(){
    return `Minha altura é ${this.altura}m.`;
}
pessoa.mostrarAltura = mostrarAltura;
/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e
comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.nomeCompleto());
/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarIdade());
/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarPeso());
/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarAltura());
/*
Faça a `pessoa` fazer 3 aniversários.
*/
for (let i = 0; i < 3; i++) {
    pessoa.fazerAniversario();
}
/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(`A nova idade da pessoa é: ${pessoa.idade} anos`);
/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar`
3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(3);  
pessoa.andar(7); 
pessoa.andar(12); 
/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(`A pessoa ainda está andando? ${pessoa.andando ? "Sim" : "Não"}`);
/*
Se a pessoa ainda está andando, faça-a parar.
*/
if (pessoa.andando === true) {
    pessoa.parar();
    console.log("A pessoa estava andando e agora parou.");
}
/*
Quantos metros a pessoa andou? (Use uma instrução para responder e
comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(`A pessoa andou ${pessoa.caminhouQuantosMetros}m.`);
/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método
deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu
peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS]
metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
function apresentacao() {
    let artigo = this.sexo === "Feminino" ? "a" : "o";
    let idadeString = this.idade === 1 ? "ano" : "anos";
    let distanciaString = this.caminhouQuantosMetros === 1 ? "metro" : "metros";
    return `Olá, eu sou ${artigo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${idadeString}, ${this.altura}m, meu peso é ${this.peso}Kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${distanciaString}!`;
}
pessoa.apresentacao = apresentacao;

console.log(pessoa.apresentacao());
// Agora, apresente-se ;)

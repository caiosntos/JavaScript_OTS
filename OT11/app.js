/*11 - Strings
Características das Strings
Strings são mais do que apenas textos. No JavaScript, elas são objetos que
vêm com um monte de métodos úteis.
Imutabilidade das Strings*/

let saudacao = "Olá";
saudacao[0] = 'A';
console.log(saudacao);

/*As strings são imutáveis. Isso significa que, uma vez criada, você não pode
alterar um caractere individualmente. Tentar fazer isso não vai gerar um erro,
mas também não vai mudar a string.
Concatenação de Strings*/

let nome = "Caio"
let mensagem = "Oi, " + nome + "!";
console.log(mensagem);

/*Aqui estamos juntando, ou concatenando, strings usando o operador +. É uma
forma básica de construir strings a partir de outras strings.
Métodos Avançados de String
JavaScript oferece vários métodos para trabalhar com strings de maneira mais
sofisticada.
Método slice*/

let frase = "Aprendendo JavaScript em 2023!";
let ano = frase.slice(-5);
console.log(ano);

/*slice() corta e retorna uma parte da string. Aqui, -5 significa que estamos
começando do quinto caractere a contar do fim.
Método replace()*/

let novaFrase = frase.replace("2023", "2024");
console.log(novaFrase);

/*replace() substitui um trecho da string por outro. Neste exemplo, substituímos
"2023" por "2024".
Método toUpperCase() e toLowerCase()*/

let grito = "olá".toUpperCase();
console.log(grito);

let sussurro = "OI".toLowerCase();
console.log(sussurro);

/*Estes métodos transformam a string em maiúsculas ou minúsculas,
respectivamente.
Método trim()*/

let textoComEspacos = " Olá, mundo! ";
let textoSemEspacos = textoComEspacos.trim();//trim() remove espaços em branco do início e do fim da string.
console.log(textoSemEspacos);

/*Strings e Caracteres Especiais
Strings podem conter caracteres especiais, que são úteis para várias
situações.
Quebras de Linha e Tabulações*/

let poema = "Roses are red, \nViolets area blue."; //\n cria uma nova linha. É útil para formatar textos longos ou poesia
console.log(poema);

let citacao = "Ela disse: \"JavaScript é incrivel!\""; //Usamos a barra invertida \ para incluir aspas dentro de uma string sem encerrar a string.
console.log(citacao);


/*Template Literals
Template literals são uma maneira mais poderosa e flexível de trabalhar com
strings.*/

let produto = "Node.js";
let versao = "v14.17.0";
let descricao = `Estudando ${produto} na versão ${versao}`;
console.log(descricao); //Aqui, usamos acentos graves (`) e ${} para inserir variáveis e expressões dentro da string. Isso torna a concatenação mais fácil e legível.

let nomeDesafio = "Caio"
let evento = "Aniversário"
let data = "14/04/2025";
let convite = "Oi " + nome + ", gostaria de te convidar para o meu" + evento + " que será na data " + data + ".";
console.log(convite);

let diarioBordo = `No dia ${data}, ocorreu meu ${evento} e ocorreu tudo conforme planejado. Meu ${evento} foi bem legal com muitos amigos e brincadeiras.`
console.log(diarioBordo);

let fraseDesafio = "Hoje no dia 01/05/2025 é um feriado chamado o dia do dev! Aproveite esse dia off!";
let novaFraseDesafio = fraseDesafio.replace("dev", "trabalhador");
console.log(novaFraseDesafio);

let carta = "Eae meu amigo, \nTudo certo conitgo?\nEspero que sim.\nVeio por meio desta carta me despedir de você,\nEstarei indo embora de joinville e irei me aventurar em São Paulo!\nFique bem meu amigo, até mais!"; //\n cria uma nova linha. É útil para formatar textos longos ou poesia
console.log(carta);

let citacaoFamosa = "Como diria a filósofa Ayn Rand: \"O dinheiro não compra felicidade, mas também não compra a infelicidade.\""; //Usamos a barra invertida \ para incluir aspas dentro de uma string sem encerrar a string.
console.log(citacaoFamosa);
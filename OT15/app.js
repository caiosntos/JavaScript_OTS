
//Desafio 04
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
    let carro = {
        marca: "BMW",
        modelo: "M5 F90",
        placa: "CAIO554",
        ano: 2018,
        cor: "Azul",
        quantasPortas: 4,
        assentos: 5,
        quantidadePessoas: 0
    }
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudarCor(objCarro, novaCor){
        objCarro.cor = novaCor;
}
mudarCor(carro, "Amarelo")
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function obterCor(objCarro) {
    return objCarro.cor;
} 
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function obterModelo(objCarro){
    return objCarro.modelo;
}
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function obterMarca(objCarro){
    return objCarro.marca;
};
/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function obterMarcaModelo(objCarro){
    let marca = obterMarca(objCarro);
    let modelo = obterModelo(objCarro);
    return `Esse carro é um ${marca} ${modelo}.`
}; 
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro.
Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas
por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
function addPessoas(numPessoas) {
    if (this.quantidadePessoas + numPessoas <= this.assentos) {
        this.quantidadePessoas += numPessoas; // Adiciona as pessoas
        return `Foi adicionado um total de ${numPessoas} no carro.`
    } else {
        return `Não é possível adicionar ${numPessoas} pessoas, o carro já está cheio!`;
    }
}
carro.addPessoas = addPessoas;

function obterQuantidadePessoas(carro) {
    return `Quantas pessoas temos no carro? Temos ${carro.quantidadePessoas} pessoas no carro.`;
}

function removerPessoas(carro, numPessoas) {
    if (carro.quantidadePessoas >= numPessoas) {
        carro.quantidadePessoas -= numPessoas;
        return `Agora temos ${carro.quantidadePessoas} pessoas no carro.`;
    } else {
        return `Não é possível remover ${numPessoas} pessoas, o carro tem apenas ${carro.quantidadePessoas} pessoas.`;
    }
}
/*
Agora vamos verificar algumas informações do carro. Para as respostas
abaixo,
utilize sempre o formato de invocação do método (ou chamada da
propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.
Qual a cor atual do carro?
*/
console.log(obterCor(carro));
// Mude a cor do carro para vermelho.
mudarCor(carro, "Vermelho")
// E agora, qual a cor do carro?
console.log(obterCor(carro));
// Mude a cor do carro para verde musgo.
mudarCor(carro, "Verde Musgo")
// E agora, qual a cor do carro?
console.log(obterCor(carro));
// Qual a marca e modelo do carro?
console.log(obterMarcaModelo(carro))
// Adicione 2 pessoas no carro.
console.log(carro.addPessoas(0));
// Adicione mais 4 pessoas no carro.
console.log(carro.addPessoas(4));
// Tire 4 pessoas do carro.
console.log(removerPessoas(carro, 4));
// Adicione 10 pessoas no carro.
console.log(carro.addPessoas(5));
// Quantas pessoas temos no carro?
console.log(obterQuantidadePessoas(carro)); 
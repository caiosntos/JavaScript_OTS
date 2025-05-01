/*10 - Classes
Se você tá pensando em aprender js, entender classes é crucial. Elas são
como moldes para criar objetos mais organizados e reutilizáveis. Então, sem
mais delongas, bora lá!
O que são Classes?
Classes, introduzidas no ES6, são um recurso do JavaScript que facilita a
criação de objetos. Elas agem como um template ou um molde, a partir do
qual você pode criar novos objetos que seguem um padrão.
Criando uma Class*/

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

/*Aqui criamos uma classe Pessoa com um construtor e um método falar,
métodos nada mais são do que funções que estão dentro de uma classe.
O construtor é chamado quando criamos uma nova instância da classe.
this.nome e this.idade são propriedades da classe.
Criando Objetos a partir de Classes
Para criar um objeto a partir de uma classe, usamos a palavra-chave new.*/

let caio = new Pessoa ('Caio', 22);

/*Neste exemplo, joao é uma nova instância da classe Pessoa. Ele tem as
propriedades nome e idade que definimos no construtor.
Pense que quando você chama a classe e abre os (), você está passando
dados para o construtor.
Chamando Métodos da Classe
Vamos ver como chamar métodos definidos na classe.*/

caio.falar();

/*Herança de Classes
Uma das grandes vantagens das classes é a habilidade de herdar
propriedades e métodos de outras classes.
Exemplo de Herança*/

class Estudante extends Pessoa{
    constructor(nome,idade,curso){
        super(nome, idade);
        this.curso = curso;
        this.notas = [];
    }
    calcularMedia() {
        if (this.notas.length === 0) return 0;
        let soma = 0;
        for (let nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    }
    estudar(){
        console.log(`Estudante de ${this.curso}`);
    }
}



let valeria = new Estudante('Valeria', 52,'Educação Fisica');
valeria.notas = [7, 8, 9];
console.log(valeria.calcularMedia());
valeria.estudar();

/*Métodos Estáticos
As classes também podem ter métodos estáticos. Estes são métodos que
você pode chamar diretamente na classe, sem criar uma instância dela.
Exemplo de Método Estático*/

class Utilitario{
    static numeroAleatorio(){
        return Math.floor(Math.random()*100);
    }
    static conversao(celsius){
        return (celsius * 9/5) + 32;
    }
}
let grausCelsius = 25;
let convertido = Utilitario.conversao(grausCelsius);
console.log(`${convertido}°F`);
console.log(Utilitario.numeroAleatorio());

/*Aqui, numeroAleatorio é um método estático da classe Utilitario. Você
pode chamá-lo diretamente, sem precisar instanciar a classe.
Propriedades Privadas
Com a introdução do ES2020, agora é possível definir propriedades privadas
em classes, usando o #.
Exemplo de Propriedades Privadas*/

class ContaBancaria{
    #saldo;

    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }
    depositar(valor){
        this.#saldo += valor;
    }
    sacar(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado!`);
        }else {
            console.log("Saldo insuficiente para o saque.");
        }
    }
    getSaldo(){
        return this.#saldo;
    }
}

let conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.getSaldo());
conta.sacar(200);
console.log("Saldo após saque:", conta.getSaldo()); 

/*A propriedade #saldo é privada. Isso significa que ela só pode ser acessada ou
modificada dentro da classe ContaBancaria.*/

class Animal{
    constructor(nome,som){
        this.nome = nome;
        this.som = som;
    }
    falar(){
        console.log(`som do ${this.nome} é ${this.som}`);
    }
}

let animalDesafio = new Animal('Cachorro', 'Auau');
animalDesafio.falar();

class Veiculo{
    constructor(marca,modelo,velocidadeMaxima){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    descrever(){
        console.log(`Marca: ${this.marca} \nModelo: ${this.modelo} \nVelocidade Máxima: ${this.velocidadeMaxima}`)
    }
}

let veiculoDesafio = new Veiculo('BMW', 'F90', '305 km/h');
veiculoDesafio.descrever();

class Jogo{
    static numeroJogo(){
        return Math.floor(Math.random()*10);
    }
    static advinhar(palpite){
        let numeroSecreto = this.numeroJogo();
        console.log("Numero gerado:", numeroSecreto);
        if(palpite === numeroSecreto){
            return "Parabens! Você acertou!";
        }else{
            return "Errou! Tente Novamente";
        }
    }
}

let tentativa = 5;
console.log(Jogo.advinhar(tentativa));
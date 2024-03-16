class Carro {
    constructor(marca) {
        this.marca = marca;
    }

    getMarca() {
        return this.marca;
    }
}
/*

Na classe Carro, definimos um construtor que recebe como parâmetro marca.

this.marca faz referência ao parâmetro marca da classe e atribui marca ao construtor, fazendo referência à classe Carro.
getMarca() é um método que recupera o valor atribuído em marca e retorna esse valor. 
return this.marca faz referência ao valor atribuído à classe e o retorna. 
Quando o método getMarca() é chamado, o valor é retornado, quando chamado em um objeto Carro.

*/

class Modelo extends Carro {
    constructor(marca, modelo, ano, cor) {
        super(marca);
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    getModelo() {
        return this.modelo;
    }
    getAno() {
        return this.ano;
    }
    getCor() {
        return this.cor;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }
    setAno(ano) {
        this.ano = ano;
    }
    setCor(cor) {
        this.cor = cor;
    }
}
/*
    A classe Modelo é uma classe filha que herda atributos da classe Carro (a classe pai de Modelo). 
    A classe Modelo possui métodos getters e setters que são usados para retornar valores e alterá-los.
    
*/


class GerenciarGaragem {
    constructor() {
        this.carros = [];
    }

    addCarros(carro) {
        this.carros.push(carro);
    }
    rmvCarros(modelo) {
        let carrosListados = [];

        for(let i = 0; i<this.carros.length;i++)
        {
            let carro = this.carros[i];
            if(carro.getModelo() !== modelo)
            {
                carrosListados.push(carro);
            }
        }
    }

    listaGaragem() {
        for (let i = 0; i < this.carros.length; i++) {
            let carro = this.carros[i];
            console.log('Marca.:', carro.getMarca());
            console.log('Ano...:', carro.getAno());
            console.log('Modelo:', carro.getModelo());
            console.log('Cor...:', carro.getCor());
            console.log("-------------------------")
        }
    }
}
/*

    A classe GerenciarGaragem possui um array que armazena os carros instanciados e os armazena. 
    No método addCarros, push() adiciona um novo valor ao array, que será armazenado no array carros[].

    O método rmvCarros(modelo) faz a remoção de carros do array utilizando o valor do modelo como índice. 
    carrosListados cria um novo array para armazenar os carros que não correspondem ao modelo que será removido. 
    O loop for faz a iteração de todos os elementos no array. O if verifica se o modelo que está sendo solicitado é diferente do que queremos remover. 
    Se for diferente, ele não remove; se for igual, ele remove.

*/

//cria um gerenciador de garagem
const gerenciarGaragem = new GerenciarGaragem();
//adiciona os carros ao gerenciador de garagem
gerenciarGaragem.addCarros(new Modelo('Fiat', 2014, 'Uno', 'Prata'));
gerenciarGaragem.addCarros(new Modelo('VW', 1994, 'Gol', 'Branco'));
//lista os carros na garagem
console.log("PRIMEIRA LISTA")
gerenciarGaragem.listaGaragem();
//remove o carro
gerenciarGaragem.rmvCarros('VW');
//atualiza a lista
console.log("SEGUNDA LISTA")
gerenciarGaragem.listaGaragem();

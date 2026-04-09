//objetos
const pessoa = {
    nome: "joao",
    idade: "muito",
    status: true
};
console.log(pessoa);

pessoa.nome = "asd";

const veiculo = {};
veiculo.marca = "toro";
console.log(veiculo);



//constructor
class Veiculo {
    #nome ='klsslafj'; //# == protect
    constructor(){};
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }; 
};

const c1 = new Veiculo('fiat', 2023);

console.log(c1);
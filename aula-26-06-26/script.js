//preços
const precoGasolina = 6.69;
const precoEtanol = 4.30;
const precoDiesel = 6.03;



function atualizarValor (){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);
    let precoPorLitro;  
    switch(tipo){
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        default:
            return;
    };
    let litros = parseFloat(document.getElementById("litros").value);
    calcularValorAbastecimento(precoPorLitro, litros);
}

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizarValor);//



function calcularValorAbastecimento(precoCombustivel, litros){
    if(litros <= 0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "coloca um valor válido ae."
        return;
    }
    let valorTotal = precoCombustivel*litros;
    document.getElementById("resultado").textContent = valorTotal;
}



let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);
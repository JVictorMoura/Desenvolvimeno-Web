let meuCoringao = document.querySelector(".corintia");

let b = document.querySelector(".input");
let destino = document.getElementById("addElement");






let paragrafos = document.getElementsByClassName("paragrafo");

let texto = document.createElement("p");//crando o elemento P e atribuindo a "texto";

for (let i = 0; i < paragrafos.length; i++)
    console.log(paragrafos[i].textContent);


function press(event) {
    if (event.key === 'Enter') {
        destino.append(texto);//adiciona o objeto "texto" dentro de destino
        texto.innerHTML = "Esse texto aparece ao apertar Enter em input";
    }
}
// -
//CRIANDO LISTA/TAGS DENTRO DO HTML
// -
// -
let lista = document.getElementById("lista");//lista
let ul = document.createElement("ul");//cria elemento ul e salva na variavel
let itens = ["Arroz", "Feijão"];

for (let i = 0; i < itens.length; i++) {//ver como fazer lista com js
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
lista.append(ul);

function somar() {
    let resultado = document.getElementById('resultado');
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let soma = n1 + n2;
    let saida = `O resultado é: <b>${soma}</br>`;
    resultado.innerHTML = saida;

}
let botao1 = document.getElementById('botao1');
botao1.onclick = function(){
    alert('+1999 de aura');
    botao1.textContent = "Farmou aura";
}




let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");
let campo = document.getElementById("campo");
let resultado = document.getElementById("resultado");

botao1.onclick = function () {
    console.log("voce é gay");
};
// botao1.onclick = function(){
//     botao1.textContent = "gayzao"; 
// };
botao2.onmouseover = function () {
    // alert ("alert");
    botao2.style.backgroundColor = "red";
    botao2.style.width = "500px";
    botao2.style.height = "500px";
    botao2.style.fontSize = "40px";
};
botao2.onmouseout = function () {
    botao2.style = "";//voltar ao padrao
};
botao1.ondblclick = function(){
    botao1.style.backgroundColor = "red";
};
campo.onkeydown = function(event) {//function 
    if(event.key === "Enter"){
        resultado.textContent = campo.value;
        campo.value = "";//zera o campo de entrada
    }
};
// 'Pegar elementos do 'html pelo id

let botao = document.getElementById("botao-login");
let fundo = document.getElementById("fundo")
let fechar = document.getElementById("botao-fechar")

// Realizar eventos 

botao.onclick = function(){
    fundo.classList.add("visivel");
}

fechar.onclick = function(){
    fundo.classList.remove("visivel");
}
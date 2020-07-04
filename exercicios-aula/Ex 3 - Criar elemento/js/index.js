const btn = document.getElementById("button");
function criarParagrafo (){
    // armazena o novo elemento na variavel
   let paragrafo = document.createElement("p")
//    inclui texto a variavel
   paragrafo.innerHTML = "aprendendo JS"
   document.body.appendChild(paragrafo)
}

// // btn.addEventListener("mouseover",criarElemento)

// btn.addEventListener("click", function(){
//     let paragrafo = document.createElement("p")
//     paragrafo.textContent = " olá mundo!"
//     document.body.appendChild(paragrafo)
// })
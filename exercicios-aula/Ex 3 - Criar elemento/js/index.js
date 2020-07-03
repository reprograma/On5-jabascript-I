const btn = document.getElementById("button")
/*
function criarParagrafo(){
    //armazenei meu novo elemento na variavel
    let paragrafo = document.createElement("p")

    //inclui um texto a variavel
    paragrafo.textContent = "Aprendendo Javascript"
    
    //inclui um texto ao body da pagina
    document.body.appendChild(paragrafo)
}

btn.addEventListener("click", criarParagrafo)

*/

btn.addEventListener("click", function(){
    let paragrafo = document.createElement("p")
    paragrafo.textContent = "Olá mundo!"
    document.body.appendChild(paragrafo) 
})
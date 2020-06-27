const btn = document.getElementById("button")

function criarParagrafo(){
  // Armazenei meu novo elemento na variavel
  let paragrafo = document.createElement("div")

  // Inclui um texto à variável
  paragrafo.textContent = "Aprendendo Javascript"

  // Adicionei o texto ao body da página
  document.body.appendChild(paragrafo)
}

// btn.addEventListener("click", criarParagrafo)


// btn.addEventListener("click", function(){
//   let paragrafo = document.createElement("p")
//   paragrafo.textContent = "Olá Mundo!"
//   document.body.appendChild(paragrafo)
// })

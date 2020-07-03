let titulo = document.querySelector("h1")

let subtitulo = document.querySelector("#item")


let divContainer = document.querySelector(".container")
//Escrever texto
divContainer.textContent = "Testando"


titulo.textContent = "Hello World" // serve para incluir um texto na página// troca adiciona textos

subtitulo.innerHTML = "Agora estou usando o <i>Inner</i>"// interpreta tags de html// adiciona troca texto

let texto = document.querySelector(".hero")
console.log(texto) //verifica se está pegando o texto

//mudar a cor/ estilo do texto
texto.style.color = "red" //elemento.style.color

texto.style.backgroundColor = "yellow"// colocar em camel case backgroundColor

texto.style.paddinTop = "20px"// colocar em camel case paddingTop

texto.style.fontSize = "30px"


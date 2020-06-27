let titulo = document.querySelector("h1")

let subTitulo = document.querySelector("#item")

let subTitulo2 = document.getElementById("item")

let texto = document.querySelector(".hero")

let divContainer = document.querySelector(".container")

//Escrever texto
divContainer.textContent = "Testando"

// Sobrescrever somente texto
titulo.textContent = "Hello World"

// Sobrescrever texto com tag de HTML
subTitulo.innerHTML = "Agora estou usando o <i>Inner</i>"


console.log(texto)

texto.style.color = "red"

texto.style.backgroundColor = "yellow"

texto.style.paddingTop = "20px"

texto.style.fontSize = "30px"
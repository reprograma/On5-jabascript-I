let titulo = document.querySelector("h1");
let subTitulo = document.querySelector("#item");

// titulo.textContent = "Hello <b>world</b>";usando text content, ele não interpreta as tags como tags e sim como texto
titulo.innerHTML = "Agora usando o inner <i> eita</i>"

subTitulo.innerHTML="usando inner e <i> italico </i>"
let texto = document.querySelector(".hero")
console.log(texto)

texto.style.color= "red";
texto.style.backgroundColor = "blue";
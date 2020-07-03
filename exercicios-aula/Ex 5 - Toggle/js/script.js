let btnEsconder = document.querySelector(".esconder")
let btnMostrar = document.querySelector(".mostrar")
let minhaDiv = document.getElementById("minhaId")

btnEsconder.addEventListener("click", function(){
    minhaDiv.classList.add("hide") // div do css para esconder. classList para adicionar ou remover classes possibilidades do css
})


btnMostrar.addEventListener("click", function(){
    minhaDiv.classList.remove("hide")
})
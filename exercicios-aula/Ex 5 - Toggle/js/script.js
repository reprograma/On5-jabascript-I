let btnEsconder = document.querySelector(".esconder")
let btnMostrar = document.querySelector(".mostrar")
let minhaDiv = document.getElementById("minhaId")

btnEsconder.addEventListener("click", function(){
    minhaDiv.classList.add("hide")
});

btnMostrar.addEventListener("click",function(){
    minhaDiv.classList.remove("hide")
});
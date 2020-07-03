const btnLogin = document.querySelector(".login__button")
const btnFechar = document.querySelector(".login-modal__button-close")
//modal guardada numa variavel de escopo global
let modal = document.querySelector(".login-modal") // se usar dentro da função funciona apenas na função

btnLogin.addEventListener("click", function(){
    modal.style.display = "flex"
    //ou --> document.querySelector(".login-modal").style.display = "flex"
})

btnFechar.addEventListener("click", function(){
    modal.style.display = "none"
})
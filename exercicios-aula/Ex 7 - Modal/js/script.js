const btnLogin = document.querySelector(".login__button")
const btnFechar = document.querySelector(".login-modal__button-close")

//Modal guardada numa variavel de escopo global
const modal = document.querySelector(".login-modal")

btnLogin.addEventListener("click", function(){
  // Modal guardada numa variavel dentro da função
  // let modal = document.querySelector(".login-modal")

  modal.style.display = "flex"
  // document.querySelector(".login-modal").style.display = "flex"
})

btnFechar.addEventListener("click", function(){
  modal.style.display = "none"
})
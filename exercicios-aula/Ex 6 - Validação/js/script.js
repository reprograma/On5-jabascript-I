const inputEmail = document.getElementById("loginInputEmail")
const inputSenha = document.getElementById("loginInputPassword")
const btnEnviar = document.querySelector(".login__button")
const mensagem = document.getElementById("mensagem")

function validaDados() {
  event.preventDefault()

  const valorEmail = inputEmail.value
  const valorSenha = inputSenha.value

  // Entre parenteses Condicao do IF
  if (valorEmail == '' ) {
    mensagem.textContent = "Por favor, preencha seu e-mail"
    inputEmail.focus()
    inputEmail.style.border = "5px solid red"
  } else if (valorSenha == '' ) {
    mensagem.textContent = "Por favor, preencha sua senha!"
    inputSenha.focus()
    inputSenha.style.border = "5px solid red"
  } else {
    mensagem.textContent = "Parabéns, verificadas com sucesso!"
    inputSenha.value = ""
    inputEmail.value = ""
    inputSenha.style.border = "none"
    inputEmail.style.border = "none"
  }
} 

btnEnviar.addEventListener("click", validaDados)
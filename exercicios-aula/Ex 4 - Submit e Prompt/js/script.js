let inputValor = document.getElementById("name")
let btnSubmit = document.getElementById("button")
let form = document.getElementById("form")

form.addEventListener("submit", function() {
  event.preventDefault()
  let name = inputValor.value
  alert(name)
  inputValor.value = ""
})



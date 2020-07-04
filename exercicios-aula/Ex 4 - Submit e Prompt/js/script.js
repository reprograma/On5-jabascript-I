let inputValor = document.getElementById("name")
let btmSubmit = document.getElementById("button")
let form = document.querySelector("form")

function mostrarNome(){
    event.preventDefault()
    form.appendChild(inputValor.value)
    alert(name)
};
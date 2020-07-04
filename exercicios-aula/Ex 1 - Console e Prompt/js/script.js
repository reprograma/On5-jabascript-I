let box = document.getElementById("box")
let btn = document.getElementById("btn")
let input = document.querySelector('input[type="text"]')

// Função para mostrar no box o tipo do evento do Input
function inputEvents (e){
  box.innerHTML = "Event: " + e.type;
  console.log(e.type)
}

// input.addEventListener("keydown", inputEvents)
// input.addEventListener("keyup", inputEvents)
// input.addEventListener("focus", inputEvents)
// input.addEventListener("blur", inputEvents)

function mouseEvents (e){
  box.innerHTML = "Event:" + e.type;
  console.log(e.type)
}

btn.addEventListener("mouseover", inputEvents)
// btn.addEventListener("mouseleave", inputEvents )
// btn.addEventListener("mousedown", inputEvents )
// btn.addEventListener("mouseup", inputEvents )
// btn.addEventListener("mouseenter", inputEvents )
let notaUm = document.querySelector(".nota1")
let notaDois = document.querySelector(".nota2")
let btn = document.querySelector("#button")
let suaMediaE = document.querySelector(".media")


btn.addEventListener("click", function ()  {
    let notaUm = parseFloat(notaUm.value)
    let notaDois = parseFloat(notaDois.value)
    let media = ((notaUm + notaDois)/2)

    if (media>= 7) {
        suaMediaE.textContent = (+ media + "aprovado")
    } else {
        suaMediaE.textContent = (+ media + "reprovado")
    }
})

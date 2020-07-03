//captura dos inputs
const n1 = document.querySelector("#nota1")
const n2 = document.querySelector("#nota2")
const n3 = document.querySelector("#nota3")
const mediaAluno = document.querySelector(".media")

//calculo media
const media = calculoMedia(n1, n2, n3)

function calculoMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

// Captura do botão e condicionais

function btn() {
    const nota1 = parseInt(n1.value)
    const nota2 = parseInt(n2.value)
    const nota3 = parseInt(n3.value)
    const mediaFinal = calculoMedia(nota1, nota2, nota3)
    mediaAluno.textContent = mediaFinal.toFixed(1)



    if (mediaFinal >= 6) {
        mediaAluno.style.color = 'green'
    } else {
        mediaAluno.style.color = 'red'
    }


    if (mediaFinal >= 6) {
        res.innerHTML = `<p>Você foi<strong> APROVADO! PARABÉNS!</strong></p>`
        res.style.color = 'green'
    } else {
        res.innerText = `Que pena! Você foi REPROVADO!`
        res.style.color = 'red'
    }

}
//função que permite apenas numeros no input
function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    if (charCode != 8 && charCode != 9) {

        if (charCode < 46 || charCode > 57) {
            return false;
        }
    }
}


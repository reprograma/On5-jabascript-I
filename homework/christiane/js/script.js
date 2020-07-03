//retorna classe do html
let mediaAlunos = document.querySelector(".media")
//retorna elemento id
let button = document.getElementById("button")
//função de cálculo 
function calculoNotas(n1, n2, n3) {
    return(n1 + n2 + n3)/3
}
//função botão. Capturando valores
    button.addEventListener("click", function(e) {
    let input1 = parseFloat(document.querySelector(".nota1").value)
    let input2 = parseFloat(document.querySelector(".nota2").value)
    let input3 = parseFloat(document.querySelector(".nota3").value)
    let media = calculoNotas(input1, input2, input3)
    console.log(input1, input2, input3)
    console.log(media)
    mediaAlunos.textContent = media.toFixed(1)
    //Mostrando mensagem de acordo com a média
    let mensagemAluno = document.querySelector(".mensagem")
    if (media >= 7) {
        mensagemAluno.textContent = "Aluno(a) aprovado(a)!"
    } else  {
        mensagemAluno.textContent = "Aluno(a) reprovado(a)."
    }

    let colorNota = document.querySelector(".media")
    if (media >= 7) {
         colorNota.style.color = "blue"
     } else  {
        colorNota.style.color = "red"
     }
})



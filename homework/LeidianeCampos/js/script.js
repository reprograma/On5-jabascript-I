//alert('Olá, caro(a) aluno(a). Bem-vindo(a) ao sistema de notas do Colégio Dom Bosco.\nPrecisamos de algumas informações sobre você para que possamos informá-lo(a) se passou de ano. \nVamos lá?')

let aluno = document.querySelector(".nome")
let button = document.getElementById("button")
let nota1 = document.querySelector(".nota1")
let nota2 = document.querySelector(".nota2")
let nota3 = document.querySelector(".nota3")
let mediaTitulo = document.querySelector(".media-titulo")
let media = document.querySelector(".media")


button.addEventListener("click", function() {

    let nota1 = parseFloat(document.querySelector(".nota1").value)
    let nota2 = parseFloat(document.querySelector(".nota2").value)
    let nota3 = parseFloat(document.querySelector(".nota3").value)
    let mediaFinal = parseInt((nota1+nota2+nota3)/3)

    if (mediaFinal>=7) {
        alert(`Obrigada pelas informações, ${aluno.value}!`)
        mediaTitulo.innerHTML = "Resultado"
        media.innerHTML = `<br> Parabéns, ${aluno.value}!\nVocê foi aprovado com <strong> média ${mediaFinal}</strong>!\nAproveite suas férias.</br>`

    } else if (mediaFinal<7) {
        alert(`Obrigada pelas informações, ${aluno.value}!`)
        mediaTitulo.innerHTML = "Resultado"
        media.innerHTML = `<br> Que pena, ${aluno.value}, sua <strong> média final </strong> foi <strong> ${mediaFinal} </strong> e você foi reprovado.</br><br>`
        let recuperacao = document.createElement("p")
        recuperacao.innerHTML = "Deseja fazer aulas de recuperação?"
        media.appendChild(recuperacao)

        let botaoSim = document.createElement("button")
        botaoSim.classList.add('button2')
        botaoSim.innerHTML = "Sim"
        media.appendChild(botaoSim)
        
        botaoSim.addEventListener("click", function (){
            alert(`Ótimo! \nAs aulas de recuperação começam na semana que vem, ${aluno.value}!`)
        })

        let botaoNao = document.createElement("button")
        botaoNao.classList.add('button3')
        botaoNao.innerHTML = "Não"
        media.appendChild(botaoNao)

        botaoNao.addEventListener("click", function (){
            alert(`Que pena, ${aluno.value}! \nNos vemos no ano que vem.`)
        })

    } else if ((isNaN(nota1)) || (isNaN(nota2)) || (isNaN(nota3)) || (aluno == '') || (nota1 == '') || (nota2 == '') || (nota3 == '') || ((nota1<0) && (nota1>10)) || ((nota2<0) && (nota2>10)) || ((nota3<0) && (nota3>10))) {
        alert("Por favor, preencha todos os campos corretamente.")
    }
})
    


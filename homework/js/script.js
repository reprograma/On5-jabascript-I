
// Função Calcular para ser chamada no HTML

// function calcular() {
//     let nota1 = document.querySelector('.nota1')
//     let nota2 = document.querySelector('.nota2')
//     let botaoMedia = document.querySelector('button')
//     let resposta = document.querySelector('.media-titulo')

//     let n1 = Number(nota1.value)
//     let n2 = Number(nota2.value)
//     let media = Math.round ((n1+n2)/2)

//     if(media>6) {
//         resposta.innerHTML = 'Parabéns! Você foi aprovado!'
//     } else {
//         resposta.innerHTML = 'Você foi reprovado! '
//     }
    
// }


let nota1 = document.querySelector('.nota1')
let nota2 = document.querySelector('.nota2')
let btnMedia = document.getElementById('button')
let resposta = document.querySelector('.media-titulo')

btnMedia.addEventListener('click', function(){
    n1 = Number(nota1.value)
    n2 = Number(nota2.value)
    let media = Math.round((n1 + n2)/ 2);

    if (media>6) {
        resposta.innerHTML = `Parabéns! Você foi aprovado &#128515!`
    } else {
        resposta.innerHTML = `Que pena! Você foi Reprovado &#128549!`
    }
})
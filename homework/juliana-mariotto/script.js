let notaUm = Number(document.querySelector(".nota1").value);
let notaDois = Number(document.querySelector(".nota2").value);
let mediaAluno = Math.round((notaUm + notaDois) / 2);
let btnMedia = document.querySelector("#button");

function validaDados() {
    event.preventDefault()

    let notaUm = Number(document.querySelector(".nota1").value);
    let notaDois = Number(document.querySelector(".nota2").value);
    let mediaAluno = Math.round((notaUm + notaDois) / 2);
    let media = document.querySelector(".media");

    media.innerHTML = mediaAluno;


    if (mediaAluno >= 7) {
        alert(`Parabéns, você foi aprovado(a) com média ${mediaAluno}. Aproveite suas férias!`);
    } else {
        fazerRecuperacao = confirm(`Sua média é ${mediaAluno} e você foi reprovado(a)! O que acha de fazer aulas de recuperação e ter mais uma oportunidade de passar de ano?`);

        if (fazerRecuperacao) {
            alert(`Ótimo, as aulas de recuperação começam semana que vem!`);
        } else {
            alert(`Que pena, te vejo ano que vem!`);
        }
    }

}
btnMedia.addEventListener("click", validaDados);
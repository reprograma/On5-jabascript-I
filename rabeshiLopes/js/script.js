const mediaAluno = document.querySelector(".media");

function calculoMedia(n1, n2) {
    return (n1 + n2) / 2;
}

let button = document.getElementById("button");
button.addEventListener("click", function(evento){
    const notaUm = Number(document.querySelector(".nota1").value);
    const notaDois = Number(document.querySelector(".nota2").value);
    const media = calculoMedia(notaUm, notaDois);
    mediaAluno.textContent = media.toFixed(1);

    const resultado = document.querySelector(".resultado");
    if (media >= 7) {
        resultado.textContent = "Parabéns, você foi aprovado, aproveite suas férias!"
        resultado.style.color = "green";
     } else  {
        resultado.textContent = "Que pena, você foi reprovado!"
        resultado.style.color = "red";
     }
})
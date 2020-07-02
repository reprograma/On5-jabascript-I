let nota1 = document.querySelector(".nota1");
let nota2 = document.querySelector(".nota2");
let mediaAluno = document.querySelector(".media")

let media = calculaMedia(nota1, nota2);
let btn = document.getElementById("button");

function calculaMedia(n1, n2) {
return (n1 + n2 ) / 2;
}

btn.addEventListener("click", function () {

    let nota1 = parseInt(document.querySelector(".nota1").value);
    let nota2 = parseInt(document.querySelector(".nota2").value);
    let media  = calculaMedia(nota1, nota2);
    mediaAluno.textContent = media;

})
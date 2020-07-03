let notaUm = document.querySelector(".nota1");
let notaDois = document.querySelector(".nota2");
let mediaFinal = document.querySelector(".media")
let btn = document.getElementById("button");
let media = calculoMedia(notaUm, notaDois);

function calculoMedia(n1, n2) {
return (n1 + n2 ) / 2;
}

btn.addEventListener("click", function () {
    let notaUm = parseInt(document.querySelector(".nota1").value);
    let notaDois = parseInt(document.querySelector(".nota2").value);
    let media  = calculoMedia(notaUm, notaDois);
    mediaFinal.textContent = media;
}) 
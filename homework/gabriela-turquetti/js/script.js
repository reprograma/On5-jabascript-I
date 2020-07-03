let notaUm = document.querySelector(".nota1");
let notaDois = document.querySelector(".nota2");
let btn = document.getElementById("button");
let mediaFinal = document.querySelector(".media")

btn.addEventListener("click", function () {
    let notaUm = parseInt(document.querySelector(".nota1").value);
    let notaDois = parseInt(document.querySelector(".nota2").value);
    let media = Math.round(((notaUm + notaDois)/2));

    if (media >= 7) {
        mediaFinal.textContent = (' ' + media + ' ' + 'Parabéns, você foi aprovado! :-)');
    } else {
        mediaFinal.textContent = (' ' + media + ' ' + 'Que pena, você foi reprovado! :-(');
    }
    
});

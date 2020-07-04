let notaUm = document.querySelector(".nota1");
let notaDois = document.querySelector(".nota2");
let btn = document.querySelector("#button");
let resultado = document.querySelector(".media");

btn.addEventListener("click", function() {
    let nota1 = parseFloat(notaUm.value);
    let nota2 = parseFloat(notaDois.value);
    let media = ((nota1 + nota2) / 2);

    console.log(nota1, nota2, media);

    // minha escola adota média 6
    if (media >= 6) {
        resultado.textContent = ` ${media}, aprovado!`;
    } else {
        resultado.textContent = ` ${media}, reprovado!`;
    }
});

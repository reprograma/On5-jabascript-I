// Esse é um exercício casa, para você treinar algumas coisas que aprendemos na aula.

// Capturar os valores dos inputs e salvar em variáveis;
// Capturar o botão;
// Transformar os valores do input em número(parseInt ou parseFloat)
// Efetuar a média;
// Exibir no campo Sua média é:
// Utilizar condicionais para mostrar mensagens de Aprovado ou Reprovado de acordo com a média final.

// Capturar os valores dos inputs e salvar em variáveis;
let notaUm = document.querySelector(".nota1");
let notaDois = document.querySelector(".nota2");


// Capturar o botão;
let button = document.getElementById("#button");

// Transformar os valores do input em número(parseInt ou parseFloat)
notaUm = parseInt(notaUm);
notaDois = parseInt(notaDois);

// Efetuar a média;
button.addEventListener("click", function () {
    let notaUm = parseInt(document.querySelector(".nota1").value);
    let notaDois = parseInt(document.querySelector(".nota2").value);
    let media = Math.round(((notaUm + notaDois)/2));

    if (media >= 7) {
        mediaFinal.textContent = (' ' + media + ' ' + 'Aprovado!');
    } else {
        mediaFinal.textContent = (' ' + media + ' ' + 'Reprovado!');
    }
});

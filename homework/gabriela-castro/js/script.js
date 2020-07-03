function validaDados () {
    let inputNota1 = Number(document.querySelector(".nota1").value);
    let inputNota2 = Number(document.querySelector(".nota2").value);
    let calculoMedia = ((inputNota1 + inputNota2)/2);

    let descricaoMedia = document.querySelector(".media-titulo");
    descricaoMedia.innerHTML = "Sua média é: " + calculoMedia;
    
    if (calculoMedia >= 7) {
        alert(`Parabéns! Você foi aprovado com média ${calculoMedia}, aproveite suas férias!`);
    } else {
        let reprovacao = confirm(`Que pena, sua média é ${calculoMedia} e você foi reprovado. Você gostaria de fazer aulas de recuperação para tentar melhorar a nota e passar de ano?`);
        if (reprovacao) {
            alert('Ótimo, as aulas de recuperação começam semana que vem.');
        } else {
            alert('Que pena, te vejo ano que vem.')
        }
    }

}

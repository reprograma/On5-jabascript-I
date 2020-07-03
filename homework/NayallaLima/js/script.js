//a regra de arredondamento da escola é:notas < 6.7 são arredondadas para baixo, e notas > 6.8 são arredondadas para cima.;
const inputnota1 = document.getElementById("n1")
const inputnota2 = document.getElementById("n2")
const inputnota3 = document.getElementById("n3")
const btnClicar = document.getElementById("btnCalcular");

btnClicar.addEventListener("click", calcularMedia);

function calcularMedia() {
    document.getElementById('media-final').textContent = '';
    document.getElementById('mensagem').textContent = '';

    const valornota1 = parseFloat(inputnota1.value.replace(',', '.'));
    const valornota2 = parseFloat(inputnota2.value.replace(',', '.'));
    const valornota3 = parseFloat(inputnota3.value.replace(',', '.'));

    //console.log(valornota1)

    let resultadoValidacao = validarInput(valornota1, valornota2, valornota3)
    if (resultadoValidacao) {
        const mediaFinal = (valornota1 + valornota2 + valornota3) / 3;

        apresentarResultado(mediaFinal)
        btnClicar.disabled = true
    }
}

function apresentarResultado(mediaFinal) {
    const paragrafo = document.createElement("p")
    paragrafo.setAttribute("id", "msgResultado")
    if (mediaFinal >= 6.8) {
        mediaFinal = Math.ceil(mediaFinal);
        paragrafo.style.color = "MediumSpringGreen"
        paragrafo.textContent = "Parabéns! Você está aprovado(a), aproveite suas férias!"

    } else {
        mediaFinal = Math.floor(mediaFinal);
        paragrafo.style.color = "red"
        paragrafo.textContent = "Que pena, você foi reprovado(a)";
    }
    //console.log(mediaFinal)
    document.getElementById("media-final").textContent = mediaFinal;
    document.getElementById("mensagem").appendChild(paragrafo)

}

const btnReiniciar = document.getElementById("btnReiniciar");

btnReiniciar.addEventListener("click", apagarInput);

function apagarInput() {
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('n3').value = '';
    document.getElementById('media-final').textContent = '';
    document.getElementById('mensagem').textContent = '';
}

function validarInput(nota1, nota2, nota3) {
    let valido = true

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        valido = false
        alert('Por favor, preencha corretamente todas as notas.')
    }
    if ((nota1 < 0 || nota1 > 10) || (nota2 < 0 || nota2 > 10) || (nota3 < 0 || nota3 > 10)) {
        alert('Nota inválida')
        valido = false
    }
    return valido
}
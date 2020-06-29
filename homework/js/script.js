//a regra de arredondamento da escola é:notas < 6.7 são arredondadas para baixo, e notas > 6.8 são arredondadas para cima.;
const inputnota1 = document.getElementById("n1")
const inputnota2 = document.getElementById("n2")
const inputnota3 = document.getElementById("n3")
const btnClicar = document.getElementById("btnCalcular");

btnClicar.addEventListener("click", calcularMedia);

function calcularMedia() {

    const valornota1 = parseFloat(inputnota1.value.replace(',', '.'));
    const valornota2 = parseFloat(inputnota2.value.replace(',', '.'));
    const valornota3 = parseFloat(inputnota3.value.replace(',', '.'));

    console.log(valornota1)

    validarInput(valornota1, valornota2, valornota3)

    const mediaFinal = (valornota1 + valornota2 + valornota3) / 3;

    document.getElementById("media-final").textContent = mediaFinal;
    apresentarResultado(mediaFinal)
}

function apresentarResultado(mediaFinal) {
    const paragrafo = document.createElement("p")
    paragrafo.setAttribute("id", "msgResultado")
    if (mediaFinal >= 6.8) {
        Math.ceil(mediaFinal);
        paragrafo.style.color = "MediumSpringGreen"
        paragrafo.textContent = "Parabéns! Você está aprovado(a), aproveite suas férias!"

    } else {
        Math.floor(mediaFinal);
        paragrafo.style.color = "red"
        paragrafo.textContent = "Que pena, você foi reprovado(a)";
    }

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
    if (isNaN(nota1)) {
        alert("Por favor, preencha corretamente sua 1º nota")
    }
    if (isNaN(nota2)) {
        alert("Por favor, preencha corretamente sua 2º nota")
    }
    if (isNaN(nota3)) {
        alert("Por favor, preencha corretamente sua 3º nota")
    }
}
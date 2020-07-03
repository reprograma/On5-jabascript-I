let nota1 = document.querySelector(".nota1");
let nota2 = document.querySelector(".nota2");
let mediaAluno = document.querySelector(".media")
console.log(mediaAluno)

let media = calculoMedia(nota1, nota2);
let btn = document.getElementById("button");

function calculoMedia(n1, n2) {
return ((n1 + n2 ) / 2);
}

btn.addEventListener("click", function () {

    let nota1 = parseInt(document.querySelector(".nota1").value);
    let nota2 = parseInt(document.querySelector(".nota2").value);
    let media  = calculoMedia(nota1, nota2);
    mediaAluno.textContent = media;

    if (media >= 7) {
        mediaAluno.textContent = media + ", parabéns, você foi aprovado!"
    } else {
        mediaAluno.textContent = media + ", que pena, você foi reprovado"
    }

});

/*let Mensagem = document.querySelector(".media-titulo");
if (calculoMedia >= 7) {
    Mensagem.textContent = "Parabéns, você foi aprovado com a média " + mediaAluno + ", boas férias!!!"
} else {
    Mensagem.textContent = "Que pena, você foi reprovado com a média " + mediaAluno + ", participará da recuperação!!!"
}

document.body.appendChild(paragrafo)*/

/*let paimensagem = document.body;
let parg = document.createElement('p')
if (mediaAluno >=7){
    let texto = document.createTextNode("Aprovado")
} else {
    let texto =document.createTextNode("Reprovado") }
parg.appendChild(texto)
paimensagem.appendChild(parg)*/



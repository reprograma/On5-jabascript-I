const notaUm = Number(document.querySelector(".nota1").value);
const notaDois = Number(document.querySelector(".nota2").value);
const calculoMedia = Math.round((notaUm+notaDois)/2);
const btnMedia = document.querySelector("#button");

console.log(calculoMedia);


function validaDados(){
  event.preventDefault()

  const notaUm = Number(document.querySelector(".nota1").value);
  const notaDois = Number(document.querySelector(".nota2").value);
  const calculoMedia = Math.round((notaUm + notaDois)/2);
  const media = document.querySelector(".media");

  media.innerHTML = "Sua média é: " + calculoMedia;

  if (calculoMedia >= 7) {
      alert(`Você foi aprovado com média ${calculoMedia}, aproveite suas férias!`);
  } else {
      const reprovacao = confirm(`Que pena, sua média é ${calculoMedia} e você foi reprovado.`);
      notaUm.value = ""
      notaDois.value = ""
    }
}
btnMedia.addEventListener("click", validaDados)


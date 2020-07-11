const nota1Input = document.querySelector(".nota1");
const nota2Input = document.querySelector(".nota2");
const button = document.getElementById("button");
const mediaAluno = document.querySelector(".media");
const mediaFrase = document.querySelector(".media-frase");

function calcMedia(n1, n2) {
  return ((n1 + n2) / 2)
}

button.addEventListener("click", function () {
  const nota1Value = parseFloat(nota1Input.value);
  const nota2Value = parseFloat(nota2Input.value);
  const media = calcMedia(nota1Value, nota2Value);

  mediaAluno.textContent = media;

  if (media >= 7) {
    mediaFrase.textContent = "Você passou!";
    mediaFrase.classList.add("aprovado");
  } else {
    mediaFrase.textContent = "Você reprovou!";
    mediaFrase.classList.add("reprovado");
  }
});





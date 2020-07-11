let btnClicar = document.getElementById("button");
btnClicar.addEventListener("click", function () {
  let nota1 = leEconverteNumero(document.querySelector(".nota1").value);
  let nota2 = leEconverteNumero(document.querySelector(".nota2").value);
  let media = (nota1 + nota2) / 2;
  document.querySelector(".media").innerHTML = `  ${media}`;
});

function vazia(str) {
  if (str) return false;
  return true;
}

function leEconverteNumero(x1) {
  if (isNaN(x1) || vazia(x1)) {
    x1 = 0;
  }
  return parseInt(x1);
}
function notificaUsuario(media) {
  if (media >= 7) {
    alert(
      `Parabéns, sua média é de ${media} você foi aprovade nos vemos no ano que vem, aproveite suas férias.`
    );
  } else if (
    confirm(
      `Sinto muito, sua média é de ${media} você foi reprovade, deseja fazer aulas de recuperação?`
    )
  ) {
    alert("Suas aulas começa semana que vem. Até lá.");
  } else {
    alert("Que pena, nos vemos ano que vem.");
  }
}

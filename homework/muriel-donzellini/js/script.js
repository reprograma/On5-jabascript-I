function CalculaMedia() {

    let N1 = parseFloat(document.getElementById("nota1").value);
    let N2 = parseFloat(document.getElementById("nota2").value);
    let MF = Math.round((parseInt(N1) + parseInt(N2)) / 2);

    console.log(N1, N2, MF)

    let msgAprovado = "APROVADO!";
    let msgReprovado = "REPROVADO!";

    if (MF >= 7) {
        document.getElementById("media").innerHTML = ` ${MF}, ${msgAprovado}`;
    } else {
        document.getElementById("media").innerHTML = ` ${MF}, ${msgReprovado}`;
    }

}



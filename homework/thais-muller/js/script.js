function CalMedia() {

    let N1 = parseFloat(document.getElementById("nota1").value);
    let N2 = parseFloat(document.getElementById("nota2").value);
    let MF = Math.round((parseInt(N1) + parseInt(N2)) / 2);
    //declara as variáveis de entrada e saída
    console.log(N1, N2, MF)

    let aprovado = "APROVADO!";
    let reprovado = "REPROVADO!";
    // se a média é maior que sete
    if (MF >= 7) {
        //pega o elemento pela ID
        document.getElementById("media").innerHTML = ` ${MF}, ${aprovado}`;
    } else {  //se não
        document.getElementById("media").innerHTML = ` ${MF}, ${reprovado}`;
    }

}
function media(a, b) {
    var valorMedia = ((a + b)/2);
    document.getElementById("resultado").innerHTML = valorMedia;
    
    if(valorMedia >= 7){
        alert(`Parabéns, você foi aprovado com média ${valorMedia}`)
    } else if (valorMedia >= 0) {
        alert(`Que pena, sua média foi ${valorMedia} e você foi reprovado.`)
    } else {
        alert("Opa, algo deu errado!\nVerifique se você digitou suas duas notas nos espaços indicados.")
    }
}

document.getElementById("calcular").onclick = function (){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    media(a,b);
}
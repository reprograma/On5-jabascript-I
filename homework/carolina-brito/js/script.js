function media(a, b) {
    var valorMedia = ((a + b)/2);
    document.getElementById("resultado").innerHTML = valorMedia;
}

document.getElementById("calcular").onclick = function (){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    media(a,b);
}
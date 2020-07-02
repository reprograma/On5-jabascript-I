//captura os valores inseridos - classes
let notaUm = document.querySelector(".nota1");
let notaDois = document.querySelector(".nota2");

// Captura do botão e armazenamento na variável
let btnCalcularMedia = document.getElementById("button");

let media = document.querySelector(".media");
let mediaTitulo = document.querySelector(".media-titulo");


btnCalcularMedia.addEventListener("click", calcMedia);

function calcMedia(){
    let nota1 = Number(notaUm.value);
    console.log(nota1);
    let nota2 = Number(notaDois.value);
    console.log(nota2);
    let mediaFinal = Math.round(Number((nota1 + nota2) / 2));
    console.log(mediaFinal);

    media.textContent = (mediaFinal);
    

    //condicionais
    if(isNaN(nota1) || isNaN(nota2)){
        media.textContent = (" Por favor, insira as suas notas corretamente:");
        media.style.color = "red";

    } else if(mediaFinal >= 7){
        media.textContent = (" " + mediaFinal + " Parabéns, você está aprovada/o!");
        media.style.color = "green";

    } else{
        media.textContent= (" " + mediaFinal+ " Infelizmente, você não passou de ano. Não desista!");
        media.style.color = "red";
    }
    
}

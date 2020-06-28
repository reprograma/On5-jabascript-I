const btnCalcMedia = document.querySelector('#button');
const notaUm = document.querySelector('.nota1');
const notaDois = document.querySelector('.nota2');
const media = document.querySelector('.media');
const mediaTitle = document.getElementsByClassName('media-titulo');

function exibir(){
    const inputNotaUm = parseInt (notaUm.value);
    console.log (inputNotaUm)
    const inputNotaDois = parseInt (notaDois.value);
    console.log (inputNotaDois)
    const inputMedia = parseInt ((inputNotaUm+inputNotaDois)/2);
    const notas = ('Suas notas foram '+inputNotaUm+ ' e '+inputNotaDois+ ', então sua média é');
    
    if (isNaN(inputNotaUm)|| isNaN(inputNotaDois)){
        alert (`Atenção! É necessário que você digite as duas notas.`);
    }
    else if (inputMedia<7){
        alert (notas + ' '+ inputMedia + '.  Que pena! Você foi reprovado.');
        media.textContent = (' '+inputMedia+ '.' + '  Poxa, reprovado.');
        media.style.color = 'red';
        notaUm.value ='';
        notaDois.value = '';
    }
    else{
        alert (notas + ' '+ inputMedia + '.  Maravilha! Você foi aprovado.');
        media.textContent = (' '+inputMedia+ '.' + '  Ótimo! Aprovado ☺!');
        media.style.color = 'green';
        notaUm.value ='';
        notaDois.value = '';
    }
}
btnCalcMedia.addEventListener("click", exibir)
  
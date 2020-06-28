const btnCalcMedia = document.querySelector('#button');
const notaUm = document.querySelector('.nota1');
const notaDois = document.querySelector('.nota2');
const media = document.querySelector('.media');

function exibir(){
    const inputNotaUm = parseInt (notaUm.value);
    const inputNotaDois = parseInt (notaDois.value);
    const inputMedia = parseInt ((inputNotaUm+inputNotaDois)/2);
    
    if (inputMedia<7){
        media.textContent = (' '+inputMedia+ '.' + '  Que pena! Você foi reprovado!');
        media.style.color = 'red';
        notaUm.value ='';
        notaDois.value = '';
    }
    else{
        media.textContent = (' '+inputMedia+ '.' + '  Que maravilha! Você foi aprovado!');
        media.style.color = 'green';
    }
}
    
btnCalcMedia.addEventListener("click", exibir)
  
const btnCalcMedia = document.querySelector('#button');
const notaUm = document.querySelector('.nota1');
const notaDois = document.querySelector('.nota2');
const media = document.querySelector('.media');
const mediaTitle = document.getElementsByClassName('media-titulo');
const popResult = document.querySelector('.resultado');
const exibirNotas = document.querySelector('.notasShow');
const exibirMedia = document.querySelector('.MediaShow');
const exibirStatus = document.querySelector('.statusShow');
const btnCiente = document.querySelector('#button-ciente');



btnCalcMedia.addEventListener('click', function(){
    const inputNotaUm = Number (notaUm.value);
    console.log (inputNotaUm)
    const inputNotaDois = Number (notaDois.value);
    console.log (inputNotaDois)
    const inputMedia = Math.round ((inputNotaUm+inputNotaDois)/2);
    const notas = (inputNotaUm+ ' e '+inputNotaDois);

    if (isNaN(inputNotaUm)|| isNaN(inputNotaDois)){
        alert (`Atenção! É necessário que você digite as duas notas usando números de 0 a 10.`);
    }

    else if (inputMedia<7){
        popResult.style.display = 'block'
        exibirStatus.textContent = (' REPROVADO');
        exibirStatus.style.color = 'red';
        exibirNotas.textContent = (' '+notas);
        exibirMedia.textContent = (' '+inputMedia);
        media.textContent = (' '+inputMedia+ '.' + '  Poxa, reprovado.');
        media.style.color = 'red';
    }

    else{
        popResult.style.display = 'block'
        exibirStatus.textContent = (' APROVADO');
        exibirStatus.style.color = 'green';
        exibirNotas.textContent = (' '+notas);
        exibirMedia.textContent = (' '+inputMedia);
        media.textContent = (' '+inputMedia+ '.' + '  Maravilha, aprovado.');
        media.style.color = 'green';
    }
})

btnCiente.addEventListener('click', function(){
    popResult.style.display = 'none'
    notaUm.value = '';
    notaDois.value = '';
    media.textContent = '';
})
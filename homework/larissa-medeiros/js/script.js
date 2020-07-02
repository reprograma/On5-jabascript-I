const btnMedia = document.querySelector('#button');
const n1 = document.querySelector('.nota1');
const n2 = document.querySelector('.nota2');
const mensagem = document.querySelector('.media');

function exibir(){
    const inputn1 = parseInt (n1.value);
    console.log (inputn1)
    const inputn2 = parseInt (n2.value);
    console.log (inputn2)
    const inputMedia = parseInt ((inputn1+inputn2)/2);

    if (isNaN(inputn1)|| isNaN(inputn2)){
        mensagem.textContent = " Por favor, digite sua notas!";
    }
    else if (inputMedia<7){
        mensagem.textContent = (` ${inputMedia}. Que pena, você foi reprovado.`);
        n1.value ='';
        n2.value = '';
    }
    else{
        mensagem.textContent = (` ${inputMedia}. Parabéns, você foi aprovado!`);
        n1.value ='';
        n2.value = '';
    }
}
btnMedia.addEventListener("click", exibir);

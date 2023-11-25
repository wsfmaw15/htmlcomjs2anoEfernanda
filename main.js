function tocaSomPom (idElementoAudio){
    documento.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador <listaDeTeclas.length;contador++){

const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];
const idAudio = `#som_${instrumento}`;//template string

tecla.onclick = function () {
    tocaSom(idAudio);
}

tecla.onkeydown = function (evento){

console.log(evento.cod)

if('espaço')

    tecla.classList.add('ativa');
}

if(evento.code ==='Enter'){
    tecla.classList.add('ativa');
}


tecla.onkeyup = function(){
    tecla.classList.remove('ativa'); }
}

function tocaSom (idElementoAudio) {
      document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = Document.querySelectorAll('.tecla');

//para
for(let contador = 0; contador <listaDeTeclas.length;contador++) {

   const tecla = listaDeTeclas{contador};
   const instrumento = tecla.ClassList[1];
  const idAudio = `#som_${instrumento}`; //template string

tecla.onclick = function () {
     tocaSom(idAudio);
}

tecla.onkeydown = function (evento) {
    
    console.log(evento.cod == 'Space')

    if(evento.code == 'Space'){
    tecla.ClassList.add('ativa');
    
}
tecla.onkeyup = function() {
    tecla.ClassList.remove('ativa');

 
}

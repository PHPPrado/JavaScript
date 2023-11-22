function tocaSom(id){
    document.querySelector(id).play();
}

let contador = 0;
//Pega tag
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){


    const tecla = listaDeTeclas[contador];

    //Pega Classe
    const instrumento = tecla.classList[1];

    //Template String
    const idAudio = `#som_${instrumento}`;


    //Chamar função anonima
    tecla.onclick = function(){tocaSom(idAudio)}

}

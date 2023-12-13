const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

const tempoTela = document.querySelector('#timer');


const iniciarOuPausar = document.querySelector('#start-pause span');
const imagePausePlay = document.querySelector('#start-pause img');

const starPauseBt = document.querySelector('#start-pause')

let tempoDecorridoEmSegundos = 10;
mostraTempo();
let intervalo = null;

const beepSong = new Audio('sons/beep.mp3');


const musica = document.querySelector('#alternar-musica');
const arqMusica = new Audio('sons/luna-rise-part-one.mp3');
musica.loop = true;
musica.addEventListener('change', ()=>{
    if(arqMusica.paused){
        arqMusica.play();
    } else {
        arqMusica.pause();
    }
})

const titulo = document.querySelector('.app__title');

const buttonActive = document.querySelector('.active');

const banner = document.querySelector('.app__image');

focoBt.addEventListener('click', ()=> {
    tempoDecorridoEmSegundos = 10;
    alterarContexto('foco');
    focoBt.classList.add('active');
    curtoBt.classList.remove('active');
    longoBt.classList.remove('active');
})
curtoBt.addEventListener('click', ()=> {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
    focoBt.classList.remove('active');
    longoBt.classList.remove('active');
})
longoBt.addEventListener('click', ()=> {
    tempoDecorridoEmSegundos = 900;
    
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
    focoBt.classList.remove('active');
    curtoBt.classList.remove('active');
})

function alterarContexto(contexto){
    mostraTempo()
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);
    switch(contexto){
        case "foco":
            titulo.innerHTML= `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML= `Que tal dar uma respirada? <br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML= `Hora de voltar à superfície. <br>
            <strong class="app__title-strong">Faça uma pausa longa!</strong>`
        default:
            break;
    }
}

const contagem = () =>{
    if(tempoDecorridoEmSegundos <= 0){
        beepSong.play();
        alert('Tempo Finalizado');
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';
        if(focoAtivo){
            const evento = new CustomEvent('FocoFinalizado');
            document.dispatchEvent(evento);
        }
        zerar();
        return;
    }
    tempoDecorridoEmSegundos-=1;
    mostraTempo();
}

starPauseBt.addEventListener('click', iniciarPausar);

function iniciarPausar(){
    if(intervalo){
        zerar();
        return;
    }
    intervalo = setInterval(contagem, 1000);
    iniciarOuPausar.textContent = "Pausar"
    imagePausePlay.setAttribute('src', `imagens/pause.png`);
}

function zerar(){
    clearInterval(intervalo);
    iniciarOuPausar.textContent = "Começar";
    imagePausePlay.setAttribute('src', `imagens/play_arrow.png`);
    intervalo = null;
}

function mostraTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoTela.innerHTML = `${tempoFormatado}`;
}
/* OBJETOS HTML */
const personagem = document.querySelector('.personagem')
const obstaculo = document.querySelector('.obstaculo')
const cardCaracter = document.getElementsByClassName('card-caracter')
const gameBoard = document.getElementsByClassName('game-board')
const contadorHtml = document.getElementsByClassName('contador') 
const botaoReset = document.getElementsByClassName('botaoReset')
const trocarPersonagem = document.getElementsByClassName('trocarPersonagem')
const botaoStart = document.getElementsByClassName('start')
const msgNovoPersonagem = document.getElementsByClassName('msgNovoPersonagem')
const disqueteSalvar = document.getElementsByClassName('disqueteSalvar')
const imgPlayPause = document.getElementsByClassName('imgPlayPause')
const tutorial = document.querySelector('.tutorial')

/* VARIÁVEIS DO JOGO */

let contador = 0 
let velocidade = 1.5
let urlPersonagem = personagem.src
let mapaAtual = 0;
let obstaculoIniciarAnimacao = 'animation: obstaculo-animation 1.5s infinite linear;'
let obstaculoVelocidadeAumentada = 'animation: obstaculo-velocidadeaumentada 1.2s infinite linear;'
let obstaculoVelocidadeAumentada2x = 'animation: obstaculo-velocidadeaumentada2x 900ms infinite linear;'
let obstaculoVelocidadeAumentada3x = 'animation: obstaculo-velocidadeaumentada3x 700ms infinite linear;'
let pararAnimacao = 'none'
let esconderObjeto = 'display: none'
let mostrarObjeto = 'display: block'
let mostrarObjetoFlex = 'display: flex'
let imgGameOver = '././src/images/jogo/gameover.png'
let audioGameOver = './src/music/audiogamefalhou.mp3'
let audioStartGame = './src/music/audiogamemk.mp3'

/* FUNCÕES */

function salvarGame(){
  if (confirm('Deseja salvar o jogo?')){
    if (prompt('Digite seu nome:')){
      alert(contador)
    }
  }
}

function escondeDisqueteSalvar(){
    disqueteSalvar[0].classList.remove('mostrarDisqueteSalvar')
}

function mostrarDisqueteSalvar(){
  disqueteSalvar[0].classList.add('mostrarDisqueteSalvar')
}

function startGame(){
    botaoStart[0].style = esconderObjeto
    obstaculo.style = obstaculoIniciarAnimacao
    tutorial.style = esconderObjeto
}

function contadorfunction(){
    contador++
    contadorHtml[0].innerHTML = contador < 10? '0' + contador : contador 
    //
    if(contador == 20 && cardCaracter[4].style.display == ''){
    desbloqueiaPersonagem()
    }
    //
    aumentaVelocidade()
}   

function desbloqueiaPersonagem(){
    msgNovoPersonagem[0].classList.add('mostrarMsgNovoPersonagem')
    setTimeout(()=>{
        msgNovoPersonagem[0].classList.remove('mostrarMsgNovoPersonagem')
        cardCaracter[4].classList.add('personagemDesbloqueado')
        cardCaracter[4].style = mostrarObjeto
    },6000)
}

function aumentaVelocidade(){
  if(contador > 4){
    obstaculo.style = obstaculoVelocidadeAumentada
  }

  if(contador > 9){
    obstaculo.style = obstaculoVelocidadeAumentada2x
  }

  if(contador > 14){
    obstaculo.style = obstaculoVelocidadeAumentada3x
  }
}

function cardCaracterStartGame(){
  selectCaracter[0].classList.remove('mostrarcaracter')
  gameBoard[0].classList.add('mostrargame-board')
  contador = 0;
  contadorHtml[0].innerHTML = contador
  gameBoard[0].removeAttributeNS
  obstaculo.style = pararAnimacao
  personagem.style.animation = ''
  personagem.style.bottom = 0;
  botaoReset[0].style = esconderObjeto
  loop
  urlPersonagem = personagem.src
  botaoStart[0].style = mostrarObjeto
  tutorial.style = mostrarObjetoFlex
  obstaculo.style = esconderObjeto
  escondeDisqueteSalvar()
  //
  verificaWidthGameBoard()
}

function verificaWidthGameBoard(){
  let gameBoardSize = +window.getComputedStyle(gameBoard[0]).width.replace('px', '');  
  //
  if(gameBoardSize < 3){
    turnYourPhone[0].style = 'display: block'
  }
}

function audioPlayPause(){ 
  if(audioGame[0].src == 'http://127.0.0.1:5501/index.html'){
    audioGame[0].src = audioStartGame
  }else{
    audioGame[0].src = '';
  }
}

/* VARIÁVEIS FUNCIONAIS */

const jump = ()=>{
    personagem.classList.add('jump')
    const gameBoardPosition = +window.getComputedStyle(gameBoard[0]).width.replace('px', '');
    // console.log(gameBoardPosition)
    
    /* CONDIÇÃO QUE ATIVA CONTADOR DE PONTOS DESKTOP */
    if (gameBoardPosition > 1051){
        
      setTimeout(()=>{
        const obstaculoPosition = +window.getComputedStyle(obstaculo).left.replace('px', '');
        const personagemPositionRight = +window.getComputedStyle(personagem).right.replace('px', '');
        console.log(obstaculoPosition)  
        console.log(personagemPositionRight)
        if(contador <= 10){
          if(obstaculoPosition > 400 && obstaculoPosition > personagemPositionRight || obstaculoPosition > 1000){
            contadorfunction()  
          }        
        }
      }, 500)

      setTimeout(()=>{
        if(contador > 10){
          const obstaculoPosition = +window.getComputedStyle(obstaculo).left.replace('px', '');
          console.log(obstaculoPosition) 
          if(obstaculoPosition > 400){
            contadorfunction()  
          }  
        }
      }, 500)
    }
    

    /* CONDIÇÃO QUE ATIVA CONTADOR DE PONTOS MOBILE */
    
    if (gameBoardPosition < 1051){
      setTimeout(()=>{
        const obstaculoPosition = +window.getComputedStyle(obstaculo).right.replace('px', '');
        const personagemPositionRight = +window.getComputedStyle(personagem).right.replace('px', '');
        console.log(obstaculoPosition)  
        console.log(personagemPositionRight)
        // if(contador <= 10){
          if(obstaculoPosition < 0 || obstaculoPosition > 400 || obstaculoPosition > 13000 ){

            contadorfunction()  
          }        
        // }
      }, 500)
     }
    
    setTimeout(()=>{   
    personagem.classList.remove('jump') 
    //
    }, 500)
}

const loop = setInterval(()=>{
    const obstaculoPosition = obstaculo.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    /* PERDE O JOGO */
    if (obstaculoPosition < 100 && obstaculoPosition > 0 && personagemPosition < 80){ 
        clearInterval(loop)
        audioGame[0].src = audioGameOver
        obstaculo.style.animation = pararAnimacao
        obstaculo.style.left = `${obstaculoPosition}px`;            
        personagem.style.bottom = `${personagemPosition}px`;
        personagem.src = imgGameOver
        mostrarDisqueteSalvar()
        botaoReset[0].style = mostrarObjeto
        clearInterval(loop)

        /* REINICIA AS CONDIÇÕES DE JOGO PARA O PERSONAGEM */ 
        botaoReset[0].addEventListener('click', (event)=>{
            event.preventDefault()
            //
            contador = 0;
            contadorHtml[0].innerHTML = contador
            gameBoard[0].removeAttributeNS
            obstaculo.style = obstaculoIniciarAnimacao
            personagem.style.animation = ''
            personagem.style.bottom = 0;
            //
            setTimeout(()=>{
                botaoReset[0].style = esconderObjeto
            }, 100) 
            //
            personagem.src = urlPersonagem
            audioGame[0].src = audioStartGame
            escondeDisqueteSalvar()
            //
            const loopReset = setInterval(()=>{
                const obstaculoPosition = obstaculo.offsetLeft;
                const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
           
                /* COMO ACIMA, SE CAIR NO IF O PERSONAGEM PERDE NOVAMENTE */
                if (obstaculoPosition < 100 && obstaculoPosition > 0 && personagemPosition < 80){
                    clearInterval(loopReset)
                    audioGame[0].src = audioGameOver
                    obstaculo.style.animation = pararAnimacao
                    obstaculo.style.left = `${obstaculoPosition}px`;
                    personagem.style.animation = pararAnimacao
                    personagem.style.bottom = `${personagemPosition}px`;
                    personagem.src = imgGameOver
                    botaoReset[0].style = mostrarObjeto
                    disqueteSalvar[0].classList.add('mostrarDisqueteSalvar')
                }
            }, 10);   
        })    
    }
     
}, 10);


/* EVENTOS DE CLIQUE */

trocarPersonagem[0].addEventListener('click', ()=>{
    setTimeout(()=>{
    gameBoard[0].classList.remove('mostrargame-board')
    containers[6].classList.add("mostrar")
    selectCaracter[0].classList.add('mostrarcaracter')
    contador = 0;
    contadorHtml[0].innerHTML = contador
    gameBoard[0].removeAttributeNS
    obstaculo.style = obstaculoIniciarAnimacao
    personagem.style.animation = ''
    personagem.style.bottom = 0;
    botaoReset[0].style = esconderObjeto
    turnYourPhone[0].classList.add('esconderTurnYourPhone')
    // turnYourPhone[0].style = esconderObjeto
    escondeDisqueteSalvar()
    audioGame[0].src = audioStartGame
    const loopReset = setInterval(()=>{
        const obstaculoPosition = obstaculo.offsetLeft;
        const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
        if (obstaculoPosition < 100 && obstaculoPosition > 0 && personagemPosition < 80){
            clearInterval(loopReset)
            mostrarDisqueteSalvar()
            obstaculo.style.animation = pararAnimacao
            obstaculo.style.left = `${obstaculoPosition}px`;
            personagem.style.animation = pararAnimacao
            personagem.style.bottom = `${personagemPosition}px`;
            personagem.src = imgGameOver
            botaoReset[0].style = mostrarObjeto
            audioGame[0].src = audioGameOver
        }
    }, 10);
         
},200)   
})

/* PERSONAGENS */

/* LACRUZ */
cardCaracter[0].addEventListener('click',()=>{ 
    personagem.src = "./src/images/jogo/personagemlacruz.gif"
    obstaculo.src = "./src/images/jogo/obstaculoleo.png"
    cardCaracterStartGame()
})

/* RAFAEL */
cardCaracter[1].addEventListener('click', ()=>{
    personagem.src = "./src/images/jogo/personagemrafael.gif"
    obstaculo.src = "./src/images/jogo/obstaculoleo.png"
    cardCaracterStartGame()
})

/* LEO */
cardCaracter[2].addEventListener('click', ()=>{
    personagem.src = "./src/images/jogo/personagemleo.gif"
    obstaculo.src = "./src/images/jogo/obstaculoleo.png"
    cardCaracterStartGame()
})

/* PEDRO */
cardCaracter[3].addEventListener('click', ()=>{
    personagem.src = "./src/images/jogo/personagempedro.gif"
    obstaculo.src = "./src/images/jogo/obstaculoleo.png"
    cardCaracterStartGame()
})

/* SERGIO */
cardCaracter[4].addEventListener('click', ()=>{
    personagem.src = "./src/images/jogo/personagemleo.gif"
    obstaculo.src = "./src/images/jogo/obstaculoleo.png"
    cardCaracterStartGame()
})


/* SELEÇÃO DE MAPA CARROSEL */

const mapas = document.getElementsByClassName('mapa')
const setaMapaAnterior = document.getElementsByClassName('setaMapaAnterior')
const setaProximoMapa = document.getElementsByClassName('setaProximoMapa')
const gameBoardMapa = document.getElementsByClassName('game-board')
setaProximoMapa[0].addEventListener('click', ()=>{
})

setaProximoMapa[0].addEventListener("click", function () {
  if (mapaAtual === mapas.length - 1) {
    return;
  }
  mapaAtual++;
  if(mapaAtual == 0){
    gameBoardMapa[0].classList.add('primeiroMapaSelecionado')
    gameBoardMapa[0].classList.remove('segundoMapaSelecionado')
    gameBoardMapa[0].classList.remove('terceiroMapaSelecionado')
    }
    if(mapaAtual == 1){
    gameBoardMapa[0].classList.add('segundoMapaSelecionado')
    gameBoardMapa[0].classList.remove('primeiroMapaSelecionado')
    gameBoardMapa[0].classList.remove('terceiroMapaSelecionado')
    }
    if(mapaAtual == 2){
    gameBoardMapa[0].classList.add('terceiroMapaSelecionado')
    gameBoardMapa[0].classList.remove('primeiroMapaSelecionado')
    gameBoardMapa[0].classList.remove('segundoMapaSelecionado')
    }
    esconderMapaAtual();
    mostrarMapa();
    mostrarOuEsconderSetasMapa();
});

setaMapaAnterior[0].addEventListener("click", function () {
  if (mapaAtual === 0) {
    return;
  }
  mapaAtual--;

  if(mapaAtual == 0){
    gameBoardMapa[0].classList.add('primeiroMapaSelecionado')
    gameBoardMapa[0].classList.remove('segundoMapaSelecionado')
    gameBoardMapa[0].classList.remove('terceiroMapaSelecionado')
    }
    if(mapaAtual == 1){
    gameBoardMapa[0].classList.add('segundoMapaSelecionado')
    gameBoardMapa[0].classList.remove('primeiroMapaSelecionado')
    gameBoardMapa[0].classList.remove('terceiroMapaSelecionado')
    }
    if(mapaAtual == 2){
    gameBoardMapa[0].classList.add('terceiroMapaSelecionado')
    gameBoardMapa[0].classList.remove('primeiroMapaSelecionado')
    gameBoardMapa[0].classList.remove('segundoMapaSelecionado')
    }
    esconderMapaAtual();
    mostrarMapa();
    mostrarOuEsconderSetasMapa();
});

function mostrarMapa() {
  mapas[mapaAtual].classList.add("mostrarMapa");
}

function esconderMapaAtual() {
  const mapaAberta = document.querySelector(".mostrarMapa");
  mapaAberta.classList.remove("mostrarMapa");
}

function mostrarOuEsconderSetasMapa() {
  const naoEhAPrimeiraImagem = mapaAtual !== 0;
  if (naoEhAPrimeiraImagem) {
    setaMapaAnterior[0].classList.remove("opacidade");
  } else {
    setaMapaAnterior[0].classList.add("opacidade");
  }
  const chegouNaUltimaImagem =
  mapaAtual !== 0 && mapaAtual === mapas.length - 1;
  if (chegouNaUltimaImagem) {
    setaProximoMapa[0].classList.add("opacidade");
  } else {
    setaProximoMapa[0].classList.remove("opacidade");
  }
}

document.addEventListener('keydown', jump);

personagem.addEventListener('click', jump);


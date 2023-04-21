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

let contador = 0 

let velocidade = 1.5

console.log(disqueteSalvar)

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
    botaoStart[0].style = 'display: none'
    obstaculo.style = 'animation: obstaculo-animation 1.5s infinite linear;'

}

function contadorfunction(){
    contador++
    contadorHtml[0].innerHTML = contador < 10? '0' + contador : contador
    if(contador == 5 && cardCaracter[4].style.display == ''){
        msgNovoPersonagem[0].classList.add('mostrarMsgNovoPersonagem')
        
        
        setTimeout(()=>{
            msgNovoPersonagem[0].classList.remove('mostrarMsgNovoPersonagem')
            cardCaracter[4].classList.add('personagemDesbloqueado')
            cardCaracter[4].style.display = 'block'
        },6000)
    }
    
}   

// function aumentaVelocidade(){
//     // const obstaculoPosition = obstaculo.offsetLeft;
    
//     // const personagemPositionRight = +window.getComputedStyle(personagem).right.replace('px', '')
//     // console.log(obstaculoPosition)


//     // if(obstaculoPosition > 200   &&  personagemPositionRight < obstaculoPosition){

//     //     if (contador > 5){
//     //         const obstaculoPosition = obstaculo.offsetLeft;
//     //         // obstaculo.style = 'animation: none;'
//     //         obstaculo.style = `animation: obstaculo-animation ${velocidade - 0.1}s infinite linear;`
//     //     }

//     //     if (contador > 10){
//     //         // obstaculo.style = 'animation: none;'
//     //         obstaculo.style = `animation: obstaculo-animation ${velocidade - 0.2}s infinite linear;`
//     //     }

//     //     if (contador > 15){
//     //         // obstaculo.style = 'animation: none;'
//     //         obstaculo.style = `animation: obstaculo-animation ${velocidade - 0.3}s infinite linear;`
//     //     }
//     //     console.log(contador)
//     //     console.log(velocidade)
//     //     console.log(obstaculo.style.animation)       
//     // }
// }

const jump = ()=>{
    personagem.classList.add('jump')
    //
    setTimeout(()=>{
    personagem.classList.remove('jump')
    const obstaculoPosition = obstaculo.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    const personagemPositionRight = +window.getComputedStyle(personagem).right.replace('px', '')
    //
    if(personagemPositionRight < obstaculoPosition){
        contadorfunction()
        // aumentaVelocidade()
        // alert('contou')
    } 
}, 500)}

let urlPersonagem = personagem.src

// function perdeuOJogo(){

  
// }

const loop = setInterval(()=>{

    const obstaculoPosition = obstaculo.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    //
    /* SE CAIR NO IF O PERSONAGEM PERDE O JOGO */
    if (obstaculoPosition < 200 && obstaculoPosition > 0 && personagemPosition < 80){
        
        clearInterval(loop)
        audioGame[0].src = './src/music/audiogamefalhou.mp3'
   
        obstaculo.style.animation = 'none'
        obstaculo.style.left = `${obstaculoPosition}px`;            
        personagem.style.bottom = `${personagemPosition}px`;

        personagem.src = '././src/images/jogo/gameover.png'

        mostrarDisqueteSalvar()

        botaoReset[0].style = 'display: block'

        clearInterval(loop)

        /* REINICIA AS CONDIÇÕES DE JOGO PARA O PERSONAGEM */ 
        botaoReset[0].addEventListener('click', ()=>{
            
            contador = 0;
            contadorHtml[0].innerHTML = contador
            gameBoard[0].removeAttributeNS
            obstaculo.style = 'animation: obstaculo-animation 1.5s infinite linear;'
            personagem.style.animation = ''
            personagem.style.bottom = 0;
            setTimeout(()=>{
                botaoReset[0].style = 'display: none'
            }, 100)
            
            personagem.src = urlPersonagem

            audioGame[0].src = './src/music/audiogamemk.mp3'
            escondeDisqueteSalvar()
        
            const loopReset = setInterval(()=>{

                const obstaculoPosition = obstaculo.offsetLeft;
                const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
            
           
                /* COMO ACIMA, SE CAIR NO IF O PERSONAGEM PERDE NOVAMENTE */
                if (obstaculoPosition < 200 && obstaculoPosition > 0 && personagemPosition < 80){
                    clearInterval(loopReset)
 
                    audioGame[0].src = './src/music/audiogamefalhou.mp3'
                    
                    obstaculo.style.animation = 'none'
                    obstaculo.style.left = `${obstaculoPosition}px`;
            
                    personagem.style.animation = 'none'
                    personagem.style.bottom = `${personagemPosition}px`;
            
                    personagem.src = '././src/images/jogo/gameover.png'
            
                    botaoReset[0].style = 'display: block'

                    disqueteSalvar[0].classList.add('mostrarDisqueteSalvar')
                }
            }, 10);
            
        
        })
        
    }
    
}, 10);



trocarPersonagem[0].addEventListener('click', ()=>{
    setTimeout(()=>{

    gameBoard[0].classList.remove('mostrargame-board')
    containers[6].classList.add("mostrar")
    selectCaracter[0].classList.add('mostrarcaracter')
    contador = 0;
    contadorHtml[0].innerHTML = contador
    gameBoard[0].removeAttributeNS
    obstaculo.style = 'animation: obstaculo-animation 1.5s infinite linear;'
    personagem.style.animation = ''
    personagem.style.bottom = 0;
    botaoReset[0].style = 'display: none'
    escondeDisqueteSalvar()
   

    const loopReset = setInterval(()=>{

        const obstaculoPosition = obstaculo.offsetLeft;
        const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    
        
    
        if (obstaculoPosition < 200 && obstaculoPosition > 0 && personagemPosition < 80){

            clearInterval(loopReset)
            mostrarDisqueteSalvar()

            obstaculo.style.animation = 'none'
            obstaculo.style.left = `${obstaculoPosition}px`;
    
            personagem.style.animation = 'none'
            personagem.style.bottom = `${personagemPosition}px`;
    
            personagem.src = '././src/images/jogo/gameover.png'
    
            botaoReset[0].style = 'display: block'

    
        }
    }, 10);
         
},200)   
})

function cardCaracterStartGame(){
  selectCaracter[0].classList.remove('mostrarcaracter')
  gameBoard[0].classList.add('mostrargame-board')
  contador = 0;
  contadorHtml[0].innerHTML = contador
  gameBoard[0].removeAttributeNS
  obstaculo.style = 'animation: none'
  personagem.style.animation = ''
  personagem.style.bottom = 0;
  botaoReset[0].style = 'display: none'
  loop
  urlPersonagem = personagem.src
  botaoStart[0].style = 'display: block'
  obstaculo.style = 'display: none'
  escondeDisqueteSalvar()
}

/* LACRUZ */
cardCaracter[0].addEventListener('click',()=>{
    
    personagem.src = "{% static '/src/images/jogo/personagemlacruz.gif' %}"
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






document.addEventListener('keydown', jump)


/* SELEÇÃO DE MAPA CARROSEL */

const mapas = document.getElementsByClassName('mapa')
const setaMapaAnterior = document.getElementsByClassName('setaMapaAnterior')
const setaProximoMapa = document.getElementsByClassName('setaProximoMapa')
const gameBoardMapa = document.getElementsByClassName('game-board')



setaProximoMapa[0].addEventListener('click', ()=>{

})


let mapaAtual = 0;

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


const setaVoltar = document.getElementById("setavoltar");
const setaAvancar = document.getElementById("setaavancar");
const fotosCarrossel = document.getElementsByClassName("foto-carrosel")
const voltarCarrosel = document.querySelector('.voltarCarrosel')



let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
  if (imagemAtual === fotosCarrossel.length - 1) {
    return;
  }

  imagemAtual++;
  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }
 
  imagemAtual--;
  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();
});

function mostrarImagem() {
  fotosCarrossel[imagemAtual].classList.add("fotoativa");
}

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".fotoativa");
  imagemAberta.classList.remove("fotoativa");
}

function mostrarOuEsconderSetas() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if (naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("opacidade");
  } else {
    setaVoltar.classList.add("opacidade");
  }

  const chegouNaUltimaImagem =
    imagemAtual !== 0 && imagemAtual === fotosCarrossel.length - 1;
  if (chegouNaUltimaImagem) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  }
}

voltarCarrosel.addEventListener('click', function(){
    containers[4].classList.remove("mostrar")
    containers[3].classList.add("mostrar")
})



const cardPersonagem = document.querySelectorAll(".card-caracter");

cardPersonagem.forEach((cardPersonagem) => {
    cardPersonagem.addEventListener("mouseenter", () => {

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    cardPersonagem.classList.add("selecionado");
    
  });
});

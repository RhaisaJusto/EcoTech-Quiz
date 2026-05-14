window.addEventListener("DOMContentLoaded", () => {
  const botaoComecar = document.getElementById("btn-comecar");

  console.log(botaoComecar);

  if (botaoComecar) {
    botaoComecar.addEventListener("click", () => {
      console.log("resetou");
      localStorage.setItem("pontuacao", 0);
    });
  }
});

const cards = document.querySelectorAll(".card");

let respondeu = false;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (respondeu) return;

    respondeu = true;

    cards.forEach((c) => {
      c.classList.add("virado");

      if (c.classList.contains("resposta-certa")) {
        c.classList.add("acertou");
      } else {
        c.classList.add("errou");
      }
    });

    if (card.classList.contains("resposta-certa")) {
      card.classList.add("selecionado-certo");

      let pontos = Number(localStorage.getItem("pontuacao"));
      localStorage.setItem("pontuacao", pontos + 1);
    } else {
      card.classList.add("selecionado-errado");
    }
  });
});

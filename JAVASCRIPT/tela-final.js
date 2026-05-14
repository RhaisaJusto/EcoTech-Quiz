const botaoComecar = document.getElementById("btn-comecar");

if (botaoComecar) {
  botaoComecar.addEventListener("click", () => {
    localStorage.setItem("pontuacao", 0);
  });
}

const pontos = Number(localStorage.getItem("pontuacao"));

const resultado = document.getElementById("resultado");
const mensagem = document.getElementById("mensagem-final");

resultado.innerText = `${pontos}/5`;

if (pontos === 5) {
  mensagem.innerText =
    "Excelente! Você demonstra grande consciência ambiental.";
} else if (pontos >= 3) {
  mensagem.innerText = "Bom resultado! Pequenas atitudes fazem diferença.";
} else {
  mensagem.innerText = "Cada aprendizado conta. Que tal tentar novamente?";
}

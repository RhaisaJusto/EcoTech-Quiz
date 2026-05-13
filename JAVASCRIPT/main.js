const cards = document.querySelectorAll(".card");

let respondeu = false;

cards.forEach(card => {
    card.addEventListener("click", () => {

        if(respondeu) return;

        respondeu = true;

        cards.forEach(c => {
            c.classList.add("virado");

            if(c.classList.contains("resposta-certa")){
                c.classList.add("acertou");
            } else {
                c.classList.add("errou");
            }
        });

        if(card.classList.contains("resposta-certa")){
            card.classList.add("selecionado-certo");
        } else {
            card.classList.add("selecionado-errado");
        }

    });
});
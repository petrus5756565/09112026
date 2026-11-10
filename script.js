// script.js

// Seleciona o botão de fechar e o card de conteúdo
const botaoFechar = document.querySelector('.botao-fechar');
const cardConteudo = document.querySelector('.conteudo');
const linksMenu = document.querySelectorAll('.nav-item');
const secoes = document.querySelectorAll('.secao');

// mostra a secao clicada
function mostrarSecao(id) {
    secoes.forEach(function (secao) {
        secao.classList.toggle('ativa', secao.id === id);
    });

    linksMenu.forEach(function (link) {
        link.classList.toggle('ativo', link.dataset.secao === id);
    });

    // abre o card de novo se tiver fechado
    cardConteudo.classList.remove('escondido');
}

// menu
linksMenu.forEach(function (link) {
    link.addEventListener('click', function (evento) {
        evento.preventDefault();
        mostrarSecao(link.dataset.secao);
    });
});

// botao X fecha o card
botaoFechar.addEventListener('click', function () {
    cardConteudo.classList.add('escondido');
});

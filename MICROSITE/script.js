// Seleciona todos os botões de link
const botoes = document.querySelectorAll('.botao-link');

// Adiciona um evento de clique a cada botão
botoes.forEach((botao) => {
  botao.addEventListener('click', (evento) => {
    evento.preventDefault(); // Impede o link de abrir (apenas para demonstração)

    // Pega o texto do botão clicado
    const texto = botao.textContent;

    // Mostra uma mensagem no console
    console.log(`Você clicou no botão: ${texto}`);

    // Altera a cor de fundo do botão temporariamente
    botao.style.backgroundColor = '#00cc99';

    // Volta à cor original depois de 500ms
    setTimeout(() => {
      botao.style.backgroundColor = '#4e73df';
    }, 500);
  });
});
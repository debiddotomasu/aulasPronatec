function jogar(escolhaJogador) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

  document.getElementById('jogador').textContent = 'Você escolheu: ' + escolhaJogador;
  document.getElementById('computador').textContent = 'Computador escolheu: ' + escolhaComputador;

  let resultado = '';

  if (escolhaJogador === escolhaComputador) {
    resultado = 'Empate!';
    document.getElementById('resultado').style.color = '#888'; // cinza
  } else if (
    (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
  ) {
    resultado = 'Você ganhou!';
    document.getElementById('resultado').style.color = '#006400'; // verde
  } else {
    resultado = 'Você perdeu!';
    document.getElementById('resultado').style.color = '#8B0000'; // vermelho escuro
  }

  document.getElementById('resultado').textContent = resultado;
}

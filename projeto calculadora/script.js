function calcular(operacao) {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(n1) || isNaN(n2)) {
    resultado.textContent = "Por favor, insira dois números válidos.";
    return;
  }

  let total = 0;

  switch (operacao) {
    case 'soma':
      total = n1 + n2;
      break;
    case 'subtracao':
      total = n1 - n2;
      break;
    case 'multiplicacao':
      total = n1 * n2;
      break;
    case 'divisao':
      if (n2 === 0) {
        resultado.textContent = "Não é possível dividir por zero!";
        return;
      }
      total = n1 / n2;
      break;
    default:
      resultado.textContent = "Operação inválida.";
      return;
  }

  resultado.textContent = `Resultado: ${total}`;
}

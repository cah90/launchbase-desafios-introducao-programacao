function imcCalc(nome, peso, altura) {

  const imc = peso / (altura * altura);

  return (imc < 29.9) ? `${nome} você não está acima do peso` : `${nome} você está acima do peso`;
  
}

console.log(imcCalc('Cassia', 63, 1.65));

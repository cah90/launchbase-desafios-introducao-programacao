function aposentadoriaCalc( sexo, idade, contribuicao) {
  const regraAposentadoria = idade + contribuicao;

  if (sexo === 'F' && contribuicao >= 30 && regraAposentadoria >= 85) {
    return true; 
  } else if (sexo === 'M' && contribuicao >= 35 && regraAposentadoria >= 95) {
    return true; 
  } else {
    return false;
  }
}

function message(eAposentado, nome) {
  if(eAposentado) {
    return `${nome} voce pode se aposentar`;
  } else {
    return `${nome} voce nao pode se aposentar`;
  }
}

let m = message(aposentadoriaCalc('F', 55, 40), 'Cristina');

console.log(m)

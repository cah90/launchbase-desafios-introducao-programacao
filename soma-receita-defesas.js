const usuarios = [{
    nome: 'Cristina',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: 'Stefaninhu',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: 'Erica',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  },
  {
    nome: 'Cassia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
]

for (let i = 0; i < usuarios.length; i++) {
  let saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas);

  enviaMensagem(saldo, usuarios[i].nome);
}

function calculaSaldo(receita, despesa) {
  receita = somaNumeros(receita);
  despesa = somaNumeros(despesa);

  return (receita - despesa).toFixed(1);
}

function somaNumeros(numeros) {
  
  return numeros.reduce((total, num) => total + num, 0);
}

function enviaMensagem(saldo, usuario) {
  if (saldo > 0) {
    console.log(`${usuario} possui saldo POSITIVO de ${saldo}`)
  } else {
    console.log(`${usuario} possui saldo NEGATIVO de ${saldo}`)
  }
}

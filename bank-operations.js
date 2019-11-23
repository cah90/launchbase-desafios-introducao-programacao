const user = {
  name: 'Cassia',
  transactions: [],
  balance: 0
}

function createTransaction(transaction) {
  user.transactions.push(transaction) 

  if(transaction.type === 'credit') {
    user.balance += transaction.value
   } else {
    user.balance -= transaction.value
   }
}

function getHigherTransactionByType(transactionType) {
  let biggestValue = 0
  let biggestTransaction = {}

  for (let transaction of user.transactions) {
    if(transaction.type === transactionType) {
      if(transaction.value > biggestValue) {
        biggestValue = transaction.value 
        biggestTransaction = transaction    
      }
    }
  }
  return biggestTransaction
}

function getAverageTransactionValue() {
  let sum = 0

  for(let transaction of user.transactions) { //how to do a reduce here???
    sum += transaction.value
  }
  return sum / user.transactions.length
}

function getTransactionsCount() {
  const transactionCount = {
    credit: 0,
    debit: 0
  }

  for(let transaction of user.transactions) {
    if(transaction.type === 'credit') {
      transactionCount.credit++
    } else {
      transactionCount.debit++
    }
  }
  return transactionCount
}

createTransaction( {type: 'credit', value: 50.5} )
createTransaction( {type: 'credit', value: 610.5} )
createTransaction( {type: 'credit', value: 590.5} )
createTransaction( {type: 'debit', value: 10.5} )

const result = getHigherTransactionByType("credit")
console.log(result)

const result1 = getAverageTransactionValue()
console.log(result1)

const result2 = getTransactionsCount()
console.log(result2)
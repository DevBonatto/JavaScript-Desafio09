/* 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador. */
alert('Hello World')

/* 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas. */
let numberOne = 5
let numberTwo = 2
let resultOne = numberOne + numberTwo
alert(`O resultado da soma é ${resultOne}`)

/* 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número". */
let random = '3'

if (typeof random == 'number') {
  alert('É um número')
} else {
  alert("Não é um número");
}

/* 4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string". */
let randomTwo = '3'

if(typeof randomTwo == 'string'){
  alert('É uma String')
} else {
  alert('Não é uma String')
}

/* 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano". */
let randomThree = true

if(typeof randomThree == "boolean"){
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}

/* 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas. */
let resultTwo = numberOne - numberTwo
alert(`O resultado da subtração é ${resultTwo}`)

/* 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas. */
let resultThree = numberOne * numberTwo
alert(`O resultado da multiplicação é ${resultThree}`)

/* 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas. */
let resultFour = numberOne / numberTwo
alert(`O resultado da divisão é ${resultFour}`)

/* 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par". */
/* 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". */
let result = numberOne % 2 == 0 ? 'Par' : 'Impar'
alert(`O número um é ${result}`)





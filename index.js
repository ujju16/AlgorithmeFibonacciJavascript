/* Suite de Fibonacci */

const n = Number(prompt('Entrer un nombre entier supérieur à 1: '))

var fibo = new Array(n+1)
fibo[0] = 0
fibo[1] = 1

for (let i = 2; i < n+1; i++) {
  fibo[i] = fibo[i-1] + fibo[i-2]
}

for (let i=0; i < n+1; i++) {
  console.log(fibo[i])
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    totalImpares += 1;
  }
}

if (totalImpares !== 0) {
  console.log('O array possui ' + totalImpares + ' valores impares');
} else {
  console.log('nenhum valor ímpar encontrado');
}

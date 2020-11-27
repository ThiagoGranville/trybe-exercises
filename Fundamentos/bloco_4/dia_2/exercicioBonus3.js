let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplicados = [];
let novoNumber;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] !== numbers[numbers.length - 1]) {
    novoNumber = numbers[index] * numbers[index + 1];
  } else {
    novoNumber = numbers[index] * 2;
  }
  numbersMultiplicados.push(novoNumber);
}

console.log(numbersMultiplicados);

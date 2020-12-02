const arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function numeroMaisRepetido(array) {
  let count = 0;
  let countRepetido = 0;
  let numIndex = 0;
  for (let number in array) {
    for (let num in array) {
      if (array[num] === array[number]) {
        count += 1;
      }
    }
    if (count > countRepetido){
      countRepetido = count;
      numIndex = number;
    }
    count = 0;
  }
  return array[numIndex];
}

console.log(numeroMaisRepetido(arrayTeste));
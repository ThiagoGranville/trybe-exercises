const arrayTeste = [2, 3, 6, 7, 10, 1];

function indiceDeMaiorValor(array) {
  let maiorValor = array[0];
  let indexMaior = 0;
  for (let index in array) {
    if (array[index] > maiorValor) {
      maiorValor = array[index];
      indexMaior = index;
    }
  }
  return indexMaior;
}

console.log(indiceDeMaiorValor(arrayTeste));

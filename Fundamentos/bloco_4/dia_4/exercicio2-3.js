const arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function indiceDeMenorValor(array) {
  let menorValor = array[0];
  let indexMenor = 0;
  for (let index in array) {
    if (array[index] < menorValor) {
      menorValor = array[index];
      indexMenor = index;
    }
  }
  return indexMenor;
}

console.log(indiceDeMenorValor(arrayTeste));

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = array => {
  const sortResult = array.sort((a,b) => a - b);
  return sortResult;
}

console.log(`Os números ${sortArray(oddsAndEvens)} se encontram ordenados de forma crescente !`);
let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function descobrirMaiorNome(array) {
  let maiorNome = array[0];

  for (let nome in array) {
    if (array[nome].length >= maiorNome.length) {
      maiorNome = array[nome];
    }
  }
  return maiorNome;
}

console.log(descobrirMaiorNome(arrayTeste));

let n = 5;
let asteriscos = '';

if (n > 1) {
  for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    for (let indexColuna = 0; indexColuna <= indexLinha; indexColuna += 1) {
      asteriscos += '*';
    }
    console.log(asteriscos);
    asteriscos = '';
  }
} else {
  console.log('Valor inválido.');
}

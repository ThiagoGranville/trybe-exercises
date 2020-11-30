function verificaPalindromo(palavra) {
  let palavraReversa = '';

  for (let index = palavra.length - 1; index >= 0; index -= 1) {
    palavraReversa += palavra[index];
  }

  if (palavra.toLowerCase() === palavraReversa.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindromo('Arara'));

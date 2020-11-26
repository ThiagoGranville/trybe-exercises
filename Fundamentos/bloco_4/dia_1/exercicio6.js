let chessPiece = 'Knight';

switch (chessPiece.toLowerCase()) {
  case 'king':
    console.log('1 quadrado, em qualquer direção');
    break;

  case 'queen':
    console.log('Quantos quadrados for possivel, em qualquer direção');
    break;

  case 'rook':
    console.log(
      'Quantos quadrados for possivel, horizontalmente ou verticalmente'
    );
    break;

  case 'bishop':
    console.log('Quantos quadrados for possivel, diagonalmente');
    break;

  case 'knight':
    console.log('Formato de L, podem pular sobre peças');
    break;

  case 'pawn':
    console.log('1 quadrado, verticalmente, 2 quadrados se for a primeira vez se movendo, capturam na diagonal');
    break;
  
  default:
    console.log("ERRO: Peça inválida!");
}

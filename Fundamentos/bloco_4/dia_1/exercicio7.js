let nota = 80;

switch (true) {
  case nota < 0 || nota > 100:
    console.log('ERRO: Nota inválida!');
    break;

  case nota >= 90:
    console.log('Nota: A');
    break;

  case nota >= 80:
    console.log('Nota: B');
    break;

  case nota >= 70:
    console.log('Nota: C');
    break;

  case nota >= 60:
    console.log('Nota: D');
    break;

  case nota >= 50:
    console.log('Nota: E');
    break;

  case nota < 50:
    console.log('Nota: F');
    break;
}

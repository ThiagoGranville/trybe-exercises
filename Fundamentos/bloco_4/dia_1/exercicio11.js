let salarioBruto = 3500.0;
let aliquotaINSS;
let valorINSS;
let salarioBase;
let aliquotaIR;
let parcelaIR;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = 0.11;
} else {
  valorINSS = 570.88;
}

valorINSS = salarioBruto * aliquotaINSS;

salarioBase = salarioBruto - valorINSS;

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase;
} else if (salarioBase <= 2826.65) {
  parcelaIR = 142.8;
  aliquotaIR = 0.075;
} else if (salarioBase <= 3751.05) {
  parcelaIR = 354.8;
  aliquotaIR = 0.15;
} else if (salarioBase <= 4664.68) {
  parcelaIR = 636.13;
  aliquotaIR = 0.225;
} else {
  parcelaIR = 869.36;
  aliquotaIR = 0.275;
}

salarioLiquido = salarioBase - ((salarioBase * aliquotaIR) - parcelaIR);

console.log("Para um salário bruto de R$" + salarioBruto.toFixed(2) + " o salário líquido é de R$" + salarioLiquido.toFixed(2));
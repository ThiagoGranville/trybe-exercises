let custo = 2500.00;
let valorVenda = 3800.00;

if(custo < 0.00 || valorVenda < 0.00){
  console.log("ERRO: Valores inválidos!")
}

else{
  let imposto = custo * 0.20;
  let custoTotal = custo + imposto;
  let lucro = valorVenda - custoTotal;
  let lucroTotal = lucro * 1000.00;

  console.log(lucroTotal.toFixed(2));
}
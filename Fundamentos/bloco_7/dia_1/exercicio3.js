const fatorial = (number) => { return number <= 1 ? 1 : number * fatorial(number - 1); };

console.log(fatorial(4));

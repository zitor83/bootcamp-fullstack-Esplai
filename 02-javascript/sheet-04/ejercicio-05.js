const numeros=[1,3,45,67,9,2,99,6,86]

const numerosPares= numeros.filter((numero)=> {return numero % 2 === 0});

const numerosMayoresDeDiez= numeros.filter((numero)=> {return numero > 10});

console.log(numeros);
console.log(numerosPares);
console.log(numerosMayoresDeDiez);
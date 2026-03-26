let numero ="25";
let numeroDecimal = "100.5";
let saludo= "hola";
let tieneMascotas = true;

//SE CONVIERTE A NUMERO CORRECTAMENTE
console.log(Number(numero));

//SE CONVIERTE A NUMERO CORRECTAMENTE
console.log(Number(numeroDecimal));

//SE CONVIERTE A NUMERO ENTERO
console.log(Number(tieneMascotas));
//NO TIENE UN VALOR NUMERICO, PERO SE CONVIERTE A 1 PORQUE ES TRUE. SI FUERA FALSE SE CONVERTIRIA A 0.

//SE CONVIERTE A NaN. 
console.log(Number(saludo)); 
//NO SE PUEDE CONVERTIR A NUMERO PORQUE ES UN TEXTO QUE NO REPRESENTA UN NUMERO.
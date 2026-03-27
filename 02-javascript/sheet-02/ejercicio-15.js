

function aplicarOperacion(num1,num2,callback){
    return callback(num1,num2);
}

function sumar(num1,num2){
    return num1 + num2;
}

function restar(num1,num2){
    return num1 - num2;
}
function multiplicar(num1,num2){
    return num1 * num2;
}

console.log(aplicarOperacion(5,3,sumar));
console.log(aplicarOperacion(5,3,restar));
console.log(aplicarOperacion(5,3,multiplicar));
const numero = 5;
const stringNumero = "5";
const esNumero = true;
const otroNumero = 10;
const stringPatata = "patata";
const esPatata = false;

console.log(numero<otroNumero); // true ya que 5 es menor que 10

console.log(numero>otroNumero); // false ya que 5 no es mayor que 10

console.log(numero==stringNumero); // true ya que el valor es el mismo

console.log(numero===stringNumero); // false ya que el tipo no es el mismo

console.log(esNumero==true); // true ya que el valor es el mismo

console.log(stringPatata==esPatata); // false ya que son diferentes 

console.log(stringPatata===esPatata); // false ya que son diferentes tipos y valores

console.log(stringPatata==stringNumero); // false ya que son diferentes valores

console.log(stringPatata<=stringNumero); // false ya que "patata" no es menor o igual que "5" en orden lexicográfico

console.log(stringPatata>=stringNumero); // true ya que "patata" es mayor o igual que "5" en orden lexicográfico

console.log(stringPatata!=stringNumero); // true ya que son diferentes valores

console.log(stringPatata!==stringNumero); // true ya que son diferentes tipos y valores
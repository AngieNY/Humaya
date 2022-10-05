let numero = 2;
let numero2 = "2";
let numero3 = 2;
let numero4 = "2";

console.log(((numero+numero2 ==7 )&&(numero == 2))? "Es correcto" : "No es correcto");


console.log(parseInt(numero + numero2));
console.log(numero + numero2);

console.table({numero, numero2, numero3, numero4});
// Ojo porque frena el hilo de ejecución del sitio
// alert("Ingrese la edad");  

let edad = parseInt(prompt("ingresa tu edad: "));

 (!edad)? alert("ingresa un numero"): "Bienvenido";

console.log(edad);

confirm("Está seguro?")

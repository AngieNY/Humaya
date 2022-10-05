// const peliculas = new Array(10);
// puedo usar const o let
// inicializo el array agregandole datos
// const peliculas = [123,
//                 "star wars", 
//                 true,
//                 2+5,
//                 {nombre: "Manzana", precio: 500},
//                 [10, 12, 14, 16, ["hola", "chau"]],
//                 function () {}  //no va con coma porque es el ultimo elemento
//                 ];

//console.log({peliculas})
// para acceder a "chau" por ej:
//console.log(peliculas[5][4][1]);

const peliculas = ["star wars ", "matrix ", "back to the future"]

peliculas.forEach((elementos, indice, peli)=>{
    console.log(elementos,indice,peli)

});

peliculas.forEach((pelicula, posicion, )=>{
    console.log(pelicula,posicion)

});
// USAR ESTE FOREACH DE AHORA EN MAS!!!
peliculas.forEach((pelicula)=>console.log(pelicula));

peliculas.forEach((pelicula)=>{
    console.log(pelicula);
    document.write(pelicula)
});
//console.log(peliculas.length);

//for(let i=0;i<peliculas.length;i++){
 //   console.log(peliculas[i]);
//    document.write(peliculas[i])
//}

// for(let i= peliculas.length -1; i>=0; i--){
//     console.log(peliculas[i])
// }

let peliculaNueva = peliculas.push("Spiderman");

peliculas.push("spiderman 2");

peliculas.unshift("Avengers");

peliculas.pop();

let eliminado = peliculas.splice(1,2);
console.log(eliminado);
console.log(peliculas);

console.log(peliculaNueva);



//✅ Definí una función obtenerNumeroMayor que tome por parámetro un array 2d de números matriz y devuelva el mayor número de dicha matriz.

//  obtenerNumeroMayor([[2, 7, 12, 1],[8, 23],
// [9, 45, 7],[22, 3, 24, 4],]) 
// 45

// let obtenerNumeroMayor = (array)=>{

//     let numeroMayor = 0;
//     for (let i = 0; i < array.length; i++) {
//         const primerValor = array[i];

//         for (let j = 0; j < primerValor.length; j++) {
//             const segundoValor = primerValor[j];

//            if (segundoValor > numeroMayor) {
//             numeroMayor = segundoValor;
//            }

            
//         }
        
//     }
// return numeroMayor;
// }

// console.log(obtenerNumeroMayor([[2, 7, 12, 1],[8, 23], [9, 45, 7],[22, 3, 24, 4],]));

//✅ Definí una función sumar que reciba una matriz de números  y devuelva la suma de todos los números de dicha matriz.

//  sumar([[4, 5],[2, 7, 1],[8, 10],])
// 37

// let sumar = (numeros)=>{

//     let resultado= 0;
// for (let i = 0; i < numeros.length; i++) {
//     const valorActualMatriz = numeros[i];

//     for (let j = 0; j < valorActualMatriz.length; j++) {
//         const valorActualArray = valorActualMatriz[j];
//         resultado += valorActualArray
        
//     }
    
// }
// return resultado;
// }
// console.log(sumar([[4, 5],[2, 7, 1],[8, 10],]));

// ✅Definí una función esMatrizCuadrada que reciba como argumento un array 2d matriz y devuelva si es una matriz cuadrada, es decir, si tiene igual cantidad de filas que de columnas.

//  esMatrizCuadrada([[4, 5],[2, 7, 1],[8, 10],]) 
// false

//  esMatrizCuadrada([[4, 5, 9],[2, 7, 1],[8, 10, 5],])
// true

// let esMatrizCuadrada = (array)=>{

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     return array.length === element.length

// }


// }
// console.log(esMatrizCuadrada([[4, 5],[2, 7, 1],[8, 10],]));
//  console.log(esMatrizCuadrada([[4, 5, 9],[2, 7, 1],[8, 10, 5],]));

//✅ Definí una función generarGrilla que tome por parámetro un número entero filas, un número entero columnas y un array de valores items, y devuelva una matriz de filas filas y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio de items.

//  generarGrilla(2, 3, [1, 2]) 
//   [
//     [1, 1, 2], 
//     [2, 1, 1]
//   ]

//  generarGrilla(3, 3, ['a', 'b', 'c'])
//   [
//     ['c', 'c', 'a'], 
//     ['c', 'a', 'a'], 
//     ['b', 'a', 'b']
//   ]

// let generarGrilla = (filas, columnas, items)=>{

//     let matriz = [];

//     for (let i = 0; i < filas; i++) {
//         matriz.push([]);
    
//     }

//     for (let j = 0; j < matriz.length; j++) {
//         const array = matriz[j];

//        for (let x = 0; x < columnas; x++) {

//         array.push(items[Math.floor(Math.random() * items.length)])
     
//        }
        
//     }

// return matriz;

// }

// console.log( generarGrilla(2, 3, [1, 2]));

// ✅Definí una función generarMatrizEscalonada que reciba como argumento un número entero filas y devuelva un array 2d con la cantidad de filas filas, donde la primera fila tiene 1 columna, la segunda tiene 2, la tercera 3, y así sucesivamente. Los ítems de la matriz deben ser 0.

//  generarMatrizEscalonada(3) 
//   [
//     [0], 
//     [0, 0], 
//     [0, 0, 0]
//   ] 
//  generarMatrizEscalonada(5)  
//   [
//     [0], 
//     [0, 0], 
//     [0, 0, 0], 
//     [0, 0, 0, 0], 
//     [0, 0, 0, 0, 0]
//   ] 

// let generarMatrizEscalonada = (filas)=>{
//     let matriz= [];

//     for (let i = 0; i < filas; i++) {
//         matriz.push([]);
//     }

//     for (let j = 0; j < matriz.length; j++) {
//         const array = matriz[j];

//         console.log(array);

//         for (let x = 0; x < filas; x++) {
//             let columnas = x;
//           //  let array = 0;

//             array.push(columnas)
            
//         }
        
//     }
// return matriz
// }
// console.log(generarMatrizEscalonada(3));

// ✅Definí una función obtenerFilaMasLarga que reciba como argumento un array 2d matriz y devuelva el array (fila) que tenga mayor longitud. Si hay varios de igual longitud, debe devolver el primero de ellos.

//  obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]])
// [3, 7, 5]
//  obtenerFilaMasLarga([[1], [3, 7], [6, 8]])
// [3, 7]

// let obtenerFilaMasLarga = (array)=>{
// let filaMasLarga = [];

// for (let i = 0; i < array.length; i++) {
//     const fila = array[i];

//     if (fila.length > filaMasLarga.length) {
//         filaMasLarga = fila
//     }

// }

// return filaMasLarga;
// }

// console.log(obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]]));

// console.log(obtenerFilaMasLarga([[1], [3, 7], [6, 8]]));

// Definí una función obtenerCantidad que tome un valor cualquiera item y una matriz items y devuelva la cantidad de veces que item se encuentra dentro de items.

// obtenerCantidad('🍎', [
//   ['🍎', '🍏', '🍌', '🍌'],
//   ['🍌', '🍎'],
//   ['🍎', '🍏', '🍌'],
//   ['🍏', '🍌', '🍎', '🍌'],
// ])
// 4

// let obtenerCantidad = (item, items)=>{
// let resultado = 0;

// for (let i = 0; i < items.length; i++) {
//     const array = items[i];

//     for (let j = 0; j < array.length; j++) {
//         const element = array[j];

//         if (element === item) {
//             resultado += 1;
//         }
        
//     }
// }
// return resultado;
// }

// console.log(obtenerCantidad('🍎', [
//     ['🍎', '🍏', '🍌', '🍌'],
//     ['🍌', '🍎'],
//     ['🍎', '🍏', '🍌'],
//     ['🍏', '🍌', '🍎', '🍌'],
//   ]));

//❌ Definí una función convertirEnMatriz que reciba como argumentos un número entero columnas y un array array y devuelva una matriz con los items de array y la cantidad de columnas columnas por fila. La última fila puede quedarse como menos columnas de las indicadas si no hay más ítems que agregar.

//  convertirEnMatriz(2, [1, 2, 3, 4])
// [[1, 2], [3, 4]]
//  convertirEnMatriz(3, [1, 2, 3, 4, 5, 6, 7])
// [[1, 2, 3], [4, 5, 6], [7]]
//  convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
// [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11]]

// let convertirEnMatriz = (columnas, array)=>{
// let matriz =[];

// for (let i = 0; i < array.length; i++) {
   
    
// }

// return matriz;
// }
// console.log(convertirEnMatriz(2, [1, 2, 3, 4]));
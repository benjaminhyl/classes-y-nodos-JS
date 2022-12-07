const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];
const matriz2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matriz.flat());

//Hay que especificar la profundidad de arrays que hay dentro del array inicial
console.log(matriz.flat(3));

console.log(matriz2.flat());
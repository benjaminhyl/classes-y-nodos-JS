const elements = ['Fire', 'Air', 'Water'];

console.log( elements.join() );
// expected output "Fire,Air,Water"

console.log(elements.join(''));
// expected output "FireAirWater"

console.log(elements.join('-'));
// expected output "Fire-Air-Water"

console.log(elements.join(' ').split(" "));
// expected output ["Fire", "Air", "Water"]
let str = "Ejemplo de titulo"
console.log(str.toLowerCase().split(" ").join("-"));
let array = [11,1,13,99,8]
console.log(array.sort((a,b) => a-b))
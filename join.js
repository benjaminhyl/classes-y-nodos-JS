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

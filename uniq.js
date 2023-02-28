var a = [1, 1, 2];
let array = [
   "7",
   "7",
   "6",
   "5",
   "5",
   "5",
   "5",
   "5"
];
let obj = {
   a: "1",
   a: "1",
   b: "2",
   b: "2",
   b: "2",
   b: "3"
}
//let b = Object.keys(obj)
for (key in obj) {
   console.log(obj[key])
}
let ss = "  Ejemplo     "
let array_strings = [" hola  ", "mundo  ", " nuevo"]
//let b =[... new Set(obj)];
console.log(ss.trim());
console.log(ss);
let trim_array = array_strings.map(item => item.trim());
//console.log(trim_array)
//console.log( array_strings.forEach(item => {return item.trim()}))


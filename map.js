let variant = [
    {"nombre": "Benjamin",
    "edad": 33},
    {"nombre": "Alejandro",
    "edad": 20},
    {"nombre": "Martin",
    "edad": 5}   
];

//Mutable
let holder = variant.map(item => {return item.altura = 1.83});
console.log(holder);

//Inmutable
let holder2 = variant.map(item => ({...item, "altura" : 1.83}));
console.log(variant);
console.log(holder2);


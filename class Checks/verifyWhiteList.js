let regex = /(\w+\s)/gim
let regV2 = /^(\w{2,15}\s\w{2,15}\s)?<?([\w]{2,25}@hyl.cl)/gim
let regex2 = /[\w]{2,25}@hyl.cl/gim;
let str1 = "bnass@hyl.cl";
let str2 = "benjamin nass bnass@hyl.cl";
let str3 = "benjamin nass <bnass@hyl.cl>";
let str = "Beautiful is better than ugly";
let array1 = ["manzana", "mora", "aji"];

let ex = str.match(regex);
let ex2 = str.match(regV2);
let ex3 = str1.match(regV2);
let ex4 = str2.match(regV2);
let ex5 = str3.match(regV2);

console.log(str1.slice(1,))

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)
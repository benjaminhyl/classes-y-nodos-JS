function filterByLength(array) {
   let holder = array.filter(item => 
      item.length>=4
    )
    return holder;
  }
//let array1 = ["manzana", "mora", "aji"];
//console.log(filterByLength(array1));

//filter an array with another array
let arr1 = [1,2,3,4,7,8];
let arr2 = [2,4];
//let res = arr1.filter(item => !arr2.includes(item));
//console.log(res);

console.log( arr1.find(item => item > 5))
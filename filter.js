function filterByLength(array) {
   let holder = array.filter(item => 
      item.length>=4
    )
    return holder;
  }
let array1 = ["manzana", "mora", "aji"];
console.log(filterByLength(array1));
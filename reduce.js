function calcSum(numbers) {
    return numbers.reduce((sum, item) => (
       sum = sum + item),0)
  }
let test = [1,2,3,4];
console.log(calcSum(test));  
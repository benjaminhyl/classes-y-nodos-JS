/* function calcSum(numbers) {
    return numbers.reduce((sum, item) => (
       sum = sum + item),0)
  } */
let test = [1,2,3,4];
let res = test.reduce((sum, item) => (
  sum = sum + item),0)
//console.log(res);  



const test1 = [
    { nation: { name: "Germany", iso: "DE", rankingPoints: 293949 } },
    { nation: { name: "Hungary", iso: "HU", rankingPoints: 564161 } },
    { nation: { name: "Serbia", iso: "SR", rankingPoints: 231651 } }
];    
const sorted = test1.sort((a, b) => a.nation.rankingPoints - b.nation.rankingPoints);

// Using forEach:
var dict = {}
sorted.forEach((el, index) => dict[el.nation.iso] = sorted.length - index);

// Using reduce:
dict = sorted.reduce(
    (dict, el, index) => {if (!dict[el.nation.iso]) {
      dict[el.nation.iso] = []}
      dict[el.nation.iso].push(el.nation.name); 
      dict[el.nation.iso].push(el.nation.rankingPoints);
      return dict, dict},{});
console.log(dict)
//console.log("dict['DE'] = ", dict['DE'])



let student = [
  { name: 'David', age: 23, hobby: 'fishing' },
  { name: 'Rachel', age: 25, hobby: 'cooking' },
  { name: 'Rahul', age: 22, hobby: 'fishing' }
];

function myFunc(obj, prop) {
  return obj.reduce(function (acc, item) {
    let key = item[prop]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {})
}
let groupedStudent = myFunc(student, 'hobby')
//console.log(groupedStudent)
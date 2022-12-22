const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];
  //console.log((team[2].name).includes("Zulema"))
  //true
/*   let arr = ["Osa", "Lupi", "Manchi","ana"];
  function filtrar(words, query){
    console.log( words.filter(item => item.includes(query)))
 }
  console.log(arr.includes("an"))
  filtrar(arr,"hi") */
  let type = "excel.xlsx"
  let type2 = "excel.xls"
  let type3 =[".xlsx", ".xls"]
let tipo="" 
  type3.forEach(item => {
    if(type.includes(item))tipo =true
    })
  console.log(tipo)
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
  let arr = ["Osa", "Lupi", "Manchi","ana"];
  function filtrar(words, query){
    console.log( words.filter(item => item.includes(query)))
  }
  //console.log(arr.includes("ana"))
  //filtrar(arr,"a")
  let str = "INDICADOR UTM MES"
  console.log(str.includes("INDICADOR UTM"))
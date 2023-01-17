const team2 = {
    p1:{
      name: "Nicolas",
      age: 12,
    },
    p2:{
      name: "Andrea",
      age: 8,
    },
    p3:{
      name: "Zulema",
      age: 2,
    },
    p4:{
      name: "Santiago",
      age: 18,
    },
};
let group = [];
for(item in team2){
  group=[...group, team2[item]];
  console.log(group);
  console.log(team2[item].age);
}

/* for(item in team2){
    
    console.log(team2[item].age)
}
 */

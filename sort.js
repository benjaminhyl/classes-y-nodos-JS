const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    }
];

 
let holder = orders.map(item => {
return{...item, date: 10}});
console.log(holder.sort((a,b)=>b.total - a.total))


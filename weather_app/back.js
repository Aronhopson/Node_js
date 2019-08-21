
setTimeout(() =>{
    console.log("ok")
},1000);

// const name = ["qwerty", "asd" , "zxcvbnm"]
// const shortName = names.filter((name) => {
//     return name.length <=4;
// })

const geocode=(address, callback) => {
    setTimeout(() => {
        const data ={
            latitude :0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}
geocode("India", (data) => {
    console.log(data)
});

//messing around

const add=(a,b, callba) =>{
    setTimeout(()=> {
        callba(a+b)
    }, 2000)
}
add(1, 4, (sum) => {
    console.log(sum)
})
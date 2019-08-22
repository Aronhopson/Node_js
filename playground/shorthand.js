//object property shorthand
const name = "aron"
const age = 21

const user ={
    name,
    age ,
    location: "hyderabad"
}
console.log(user)

//objecct destruction(makes easy to extrac property created inj object)
 const product =  { 
     label : "books",
     price : 2,
     stock: "lol"
}

// const {label: labless, price} = product
// console.log(labless)
// console.log(price)

const trie = (bla, {label, stock}) => {
    console.log(bla, label, stock)
}
trie("you", product)

// const add = function(x){
//     return x*x
// }

// const add = (x,y) => {
//   return x+y;
// }
// console.log(add(5,8))

const event = {
    name: "party",
    // people: ["a", "s" , "d"],
    guestlist : function() {
        return "guest" + this.name

        // this.people.forEach((pep) => {
        //     console.log(pep + " " + this.name)
            
        // })
    }
}
 console.log(event.guestlist())

var test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };
  
  console.log(test.func());
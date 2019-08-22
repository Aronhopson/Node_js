const path = require("path")
const express = require("express")
const app = express()
const hbs  = require("hbs")

const publicDirec = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//SET UP VEIWS ENGINE
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//SETUP STATIC DIRECDTORY
app.use(express.static(publicDirec))


//STATIC DIRECTORY
app.get("/", (req, res) =>{
    res.render("index", {
        name: "fuck index",
        titl: "WEATHER"
    })
});

app.get("/help", (req, res) =>{
    res.render("help", {
        helpText: "Thsiis help text",
        name: "hopson",
        titl: "help"
    })
});

app.get("/about", (req, res) =>{
    res.render("about", {
        name: "fuck about",
        titl: "SUN"
    })
});

app.get("/weather", (req, res) =>{

    if(!req.query.address){
    return  res.send({    //return here stop the execution of function here so that code down below dont run
          error: "please verify"
      })
    }
    res.send({ 
        forecast : "its snowy",
        location: "hyderabad",
        address: req.query.address
    })
})

app.get("/products", (req, res ) => {
    if(!req.query.search){
       return  res.send({     //return here stop the execution of function here so that code down below dont run
            error : "please provide search"
            
        })
    }
    console.log(req.query.search)
        res.send({    
    products :[]
})
})

app.listen(3000, () => {
    console.log("Server has started")
})
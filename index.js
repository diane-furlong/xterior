//dependencies
const express = require("express")
var path = require("path")

//set up express app
const app = express()
var PORT = process.env.PORT || 5000

//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//data


//Routes
//basic route that sends user first to the AJAX page
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'))
})

//Starts the server to begin listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})
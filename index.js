//dependencies
const express = require("express")
const path = require("path")

//set up express app
var app = express()
const PORT = process.env.PORT || 5001

//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//data


//Routes
//basic route that sends user first to the AJAX page
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './index.html'))
})

//Starts the server to begin listening
.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})
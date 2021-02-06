//dependencies
const express = require("express")
const path = require("path")

//set up express app

const PORT = process.env.PORT || 5000

//set up express app to handle data parsing
express()
    .use(express.static(path.join(__dirname, 'index.html')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('index.html'))

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
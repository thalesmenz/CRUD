const express = require("express")

const app = express()

app.listen('3000')

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.use('/static', express.static(__dirname + '/public'));
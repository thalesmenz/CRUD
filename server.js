const express = require("express")
const path = ("path")

const app = express()

app.listen('3000')


app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

app.use(express.static("public"))
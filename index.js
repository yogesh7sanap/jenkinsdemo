const express=require("express")

const app =express()

app.get('/',(req,res) => {

    res.send("<h1>Welcome to the node js app</h1>")
})


app.get('/about',(req,res) => {

    res.send("<h1>About page logged in the log</h1>")
})

app.listen(3000);
//app.listen(process.env.MYPORT)
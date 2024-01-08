const express = require("express")
const app = express()
const port = 3000

app.get("/user/:id", (req, res) => {
    const p = req.params
    console.log(p)
    const q = req.query
    console.log(q)
    res.send("Hi")
})

app.listen(port, () => {
    console.log("Example app listening on port 3000")
})
const express = require("express")
var cors = require("cors")
const app = express()
const port = 3000

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/sound/:name", (req, res) => {
    const {name} = req.params // key:value 쌍에서 value만 바로 가져오기
    console.log(name)

    if (name == "dog") {
        res.json({"sound":"멍멍"})
    }
    else if (name == "cat") {
        res.json({"sound":"야옹"})
    }
    else if (name == "pig") {
        res.json({"sound":"꿀꿀"})
    }
    else {
        res.json({"sound":"오류"})
    }
})

app.listen(port, () => {
    console.log("server started")
})
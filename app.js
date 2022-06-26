
const fs = require("fs")
const express = require("express")
const helmet = require("helmet")

const app = express()
const port = 3000

app.use(helmet())

app.use("/tokens", express.static("tokens.json"))
app.use("/logos", express.static("logos"))

app.listen(port, () => {
    console.log(`Token list API listening on port ${ port }`)
})

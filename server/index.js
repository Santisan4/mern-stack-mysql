const express = require("express")
const app = express()
const moment = require('moment')
const cors = require("cors")
const path = require("path")

// const PORT = require("./config")

const indexRoutes = require("./routes/indexRoutes")
const taskRoutes = require("./routes/tasksRoutes")

app.use(cors())
app.use(express.json())

app.use("/", taskRoutes)
app.use(indexRoutes)

app.use(express.static(path.join(__dirname,"../client/dist")))

app.listen((process.env.PORT || 4000),() => {
    console.log("Server is listening on port", process.env.PORT || 4000 )
})


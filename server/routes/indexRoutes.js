const express = require("express")
const router = express()


router.get("/ping",  (req, res) => {
    res.send("home")
})

module.exports = router
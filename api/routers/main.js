const express = require("express")
const router = express.Router()
const config = require("../config.json")

router.get("/health", (req, res) => {
    res.json({
        status: true,
        service_name: config.info.service_name,
        version: config.info.version
    })
})

router.get("*", (req, res) => {
    res.statusCode = 404
    res.json({
        status: false,
        message: "404, Page Not Found"
    })
})

module.exports = router

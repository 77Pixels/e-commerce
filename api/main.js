const express = require("express")
const config = require("./config.json")
const chalk = require("chalk")
const main_router = require("./routers/main")
const buyer_router = require("./routers/buyer")
const seller_router = require("./routers/seller")
const admin_router = require("./routers/admin")


app = express()

app.use("/seller", seller_router)
app.use("/admin", admin_router)
app.use("/", buyer_router)
app.use("/", main_router)


app.listen(config.PORT, () => {
    console.log(chalk.green.inverse(` Server running on port ${config.PORT} `))
})

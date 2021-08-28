const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.listen(port, () => {
    console.log("Running is running in", port)
})

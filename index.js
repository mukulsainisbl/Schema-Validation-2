const express = require('express')
const connection = require('./config/db')
const contactRouter = require('./routes/contact.routes')
const PORT = 8080
const app = express()
app.use(express.json())

app.use('/contact' , contactRouter ,)

app.listen(PORT,async ()=> {
try {
    await connection;
    console.log("Connected to Database")
} catch (error) {
    console.log(error)
}
console.log(`Server is listen on ${PORT} `)
})
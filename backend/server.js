const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

// connectDB()

const app = express()

app.get('/api/goals', (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
})

app.listen(port, () => console.log(`server started on port ${port}`))

app.get('/api/hello', (req, res) => {
    res.json({ message: 'HELLO' })
})


// app.use(express.json())

// app.use(express.urlencoded({ extended: false }))

// app.use('/api/goals', require('./routes/goalRoutes'))

// app.use('/api/users', require('./routes/userRoutes'))

// app.use(errorHandler)



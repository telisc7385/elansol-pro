require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userRouter = require('./routes/userRouter')

const app = express()

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,  
  })
  .then(() => {
     
    console.log('MongoDB Connected ')
  })
  .catch((err) => {
     
    console.error('Failed ', err)
  })

 
app.use(cors())

app.use(express.json())

app.use('/api/users', userRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})

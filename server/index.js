import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import userRoutes from './routes/users.js'
import dotenv from "dotenv";
import questionRoutes from './routes/Questions.js'
import answerRoute from './routes/Answers.js'

dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());


app.get('/', (req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoute)
const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.Connection_url
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message))

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import urlRoute from './routes/url.js'
import userRoutes from './routes/auth.js'


const app = express();

dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

app.use("/url",urlRoute);
app.use('/user', userRoutes)



mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))


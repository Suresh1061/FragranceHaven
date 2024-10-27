import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import connectDB from './db'
import cors from "cors"

dotenv.config()
const app: Application = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))

//imports routes
import productRoute from './routes/product.route'
import reviewRoute from './routes/review.route'

//routes declearation
app.use("/api/products", productRoute)
app.use("/api/reviews", reviewRoute)


app.get('/', (req: Request, res: Response) => {
     res.send('Hello World!')
})

connectDB()
     .then(() => {
          app.on('error', (err) => {
               console.log(err)
          })
          app.listen(port, () => {
               console.log(`Server is running on port ${port}`)
          })
     })
     .catch((err) => {
          console.log("Databse connection failed", err)
     })
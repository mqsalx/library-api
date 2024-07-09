import express from "express"
import connectDB from "./config/dbConnect.js"
import routes from "./routes/index.js"
import errorHandler from "./middlewares/errorHandler.js"

const connection = await connectDB()
connection.on("error", (error) => {
    console.error("Connection to database failed", error)
})

const app = express()
routes(app)

app.use(errorHandler)

export default app
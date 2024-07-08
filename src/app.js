import express from "express"
import connectDB from "./config/dbConnect.js"
import books from "./models/Book.js"

const connection = await connectDB()
connection.on("error", (error) => {
    console.error("Connection to database failed", error)
})

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Node Course")
})

app.get("/books", async (req, res) => {
    const listBooks = await books.find({})
    res.status(200).json(listBooks)
})

app.get("/books/:id", (req, res)=> {
    const index = getBookById(req.params.id)
    res.status(200).json(books[index])
})

app.post("/books", (req, res) => {
    books.push(req.body)
    res.status(201).send("Book added")
})

app.put("/books/:id", (req, res) => {
    const index = getBookById(req.params.id)
    books[index].title = req.body.title
    res.status(200).json(books)
})

app.delete("/books/:id", (req, res) => {
    const index = getBookById(req.params.id)
    books.splice(index, 1)
    res.status(200).send("Book deleted")
})

export default app
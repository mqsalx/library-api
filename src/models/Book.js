import mongoose from "mongoose"
import { authorSchema } from "./Author.js"


const booksSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    publisher: {
        type: String,
        required: [true, "Publisher is required"]
    },
    price: {
        type: Number
    },
    pages: {
        type: Number
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors",
        required: [true, "Author is required"]
    }
}, { versionKey: false })

const books = mongoose.model("books", booksSchema)

export default books

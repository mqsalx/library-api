import mongoose from "mongoose"


const booksSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String, required: true
    },
    publisher: {
        type: String
    },
    price: {
        type: Number
    },
    pages: {
        type: Number
    }
}, { versionKey: false })

const books = mongoose.model("books", booksSchema)

export default books

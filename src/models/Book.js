import mongoose from "mongoose"


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
        required: [true, "Publisher is required"],
        enum: {
            values: [
                "Penguin",
                "Harper Collins",
                "Bloomsbury",
                "Parragon"
            ],
            message: "Publisher {VALUE} is not valid"

        }
    },
    price: {
        type: Number
    },
    pages: {
        type: Number,
        validate:{
            validator: (value) => {
                return value > 0 && value < 5000
            },
            message: "Pages should be between 0 and 5000"
        }
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors",
        required: [true, "Author is required"]
    }
}, { versionKey: false })

const books = mongoose.model("books", booksSchema)

export default books

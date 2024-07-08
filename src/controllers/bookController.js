import books from "../models/Book.js"

class BookController {

    static async getBooks(req, res) {
        const listBooks = await books.find({})
        res.status(200).json(listBooks)
    }

    static async postBook(req, res) {
        try{
            const createBook = await books.create(req.body)
            res.status(201).json({message: "Book added", book: createBook})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Error at adding book`})
        }
    }
}

export default BookController
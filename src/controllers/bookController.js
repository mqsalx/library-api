import books from "../models/Book.js"

class BookController {

    static async getBooks(req, res) {
        try {
            const listBooks = await books.find({})
            res.status(200).json(listBooks)

        } catch(error) {
            res.status(500).json({message: `${error.message} - Error at getting books`})
        }
    }

    static async getBook(req, res) {
        try {
            const id = req.params.id
            const retrieveBook = await books.findById(id)
            res.status(200).json(retrieveBook)

        } catch(error) {
            res.status(500).json({message: `${error.message} - Error at getting book by id`})
        }
    }


    static async postBook(req, res) {
        try{
            const createBook = await books.create(req.body)
            res.status(201).json({message: "Book added", book: createBook})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Error at adding book`})
        }
    }

    static async putBook(req, res) {
        try {
            const id = req.params.id
            const updateBook = await books.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Book updated", book: updateBook })
        } catch(error) {
            res.status(500).json({message: `${error.message} - Error at updating book`})
        }
    }

    static async deleteBook(req, res) {
        try {
            const id = req.params.id
            const removeBook = await books.findByIdAndDelete(id)
            res.status(200).json({ message: "Book deleted"})
        } catch(error) {
            res.status(500).json({message: `${error.message} - Error at deleting book`})
        }
    }
}

export default BookController
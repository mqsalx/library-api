import { author } from "../models/Author.js"
import books from "../models/Book.js"

class BookController {

    static async getBooks(req, res, next) {
        try {
            const listBooks = await books.find({})
            res.status(200).json(listBooks)
        } catch (error) {
            next(error)
        }
    }

    static async getBook(req, res, next) {
        try {
            const id = req.params.id
            const retrieveBook = await books.findById(id)
            res.status(200).json(retrieveBook)
        } catch (error) {
            next(error)
        }
    }


    static async postBook(req, res, next) {
        const createBook = req.body
        try{
            const authorFound = await author.findById(createBook.author)
            const completeBook = { ...createBook, author: { ...authorFound._doc} }
            const newBook = await books.create(completeBook)
            res.status(201).json({message: "Book added"})
        } catch (error) {
            next(error)
        }
    }

    static async putBook(req, res, next) {
        try {
            const id = req.params.id
            const updateBook = await books.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Book updated"})
        } catch (error) {
            next(error)
        }
    }

    static async deleteBook(req, res, next) {
        try {
            const id = req.params.id
            const removeBook = await books.findByIdAndDelete(id)
            res.status(200).json({ message: "Book deleted"})
        } catch (error) {
            next(error)
        }
    }

    static async getBooksByPublisher(req, res, next) {
        const publisher = req.query.publisher
        try {
            const booksByPublisher = await books.find({ publisher: publisher })
            res.status(200).json(booksByPublisher)
        } catch (error) {
            next(error)
        }
    }
}

export default BookController
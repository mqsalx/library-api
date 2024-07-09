import books from "../models/Book.js"
import NotFound from "../errors/notFound.js"

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

            if (retrieveBook !== null) {
                res.status(200).json(retrieveBook)
            } else {
               next(new NotFound("Book not found"))
            }

        } catch (error) {
            next(error)
        }
    }


    static async postBook(req, res, next) {
        try{
            let book = new books(req.body);
            const newBook = await book.save();
            res.status(201).json(newBook.toJSON())
        } catch (error) {
            next(error)
        }
    }

    static async putBook(req, res, next) {
        try {
            const id = req.params.id
            const updateBook = await books.findByIdAndUpdate(id, {$set: req.body})

            if (updateBook !== null) {
                res.status(200).json({ message: "Book updated"})
            } else {
               next(new NotFound("Book not found"))
            }

        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async deleteBook(req, res, next) {
        try {
            const id = req.params.id
            const removeBook = await books.findByIdAndDelete(id)

            if (updateBook !== null) {
                res.status(200).json({ message: "Book deleted"})
            } else {
               next(new NotFound("Book not found"))
            }

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
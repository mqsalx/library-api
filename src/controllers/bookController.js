import { authors, books } from "../models/index.js"
import NotFound from "../errors/notFound.js"
import BadRequest from "../errors/badRequest.js"

class BookController {

    static async getBooks(req, res, next) {

        try {

            const listBooks = books
                .find()

            req.result = listBooks

            next()

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

    static getBooksFilter = async (req, res, next) => {

        try {

            const search = await processSearch(req.query)

            if (search !== null) {
                const booksByPublisher = books
                    .find(search)
                    .populate("author")

                req.result = booksByPublisher

                next()

            } else {
                res.status(200).send([])
            }

        } catch (error) {
            next(error)
        }
    }
}

async function processSearch(params) {

    const {
        title,
        publisher,
        minpages,
        maxpages,
        nameAuthor
    } = params

    let search = {}

    if (title) {
        search.title = {
            $regex: title,
            $options: "i"
        }
    }

    if (publisher) {
        search.publisher = publisher
    }

    if(minpages || maxpages) search.pages = {}

    if(minpages) search.pages.$gte = minpages

    if(maxpages) search.pages.$lte = maxpages

    if(nameAuthor) {
        const author = await authors.findOne({ name: nameAuthor })
        if(author !== null) {
            search.author = author._id
        } else {
            search = null
        }
    }

    return search
}

export default BookController
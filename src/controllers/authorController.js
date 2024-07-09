import NotFound from "../errors/notFound.js"
import { authors } from "../models/index.js"

class AuthorController {

    static async getAuthors(req, res, next) {
        try {
            const listAuthors = await authors.find({})
            res.status(200).json(listAuthors)
        } catch (error) {
            next(error)
        }
    }

    static async getAuthor(req, res, next) {
        try {
            const id = req.params.id
            const retrieveAuthor = await authors.findById(id)

            if (retrieveAuthor !== null) {
                res.status(200).json(retrieveAuthor)
            } else {
               next(new NotFound("Author not found"))
            }

        } catch (error) {
            next(error)
        }
    }

    static async postAuthor(req, res, next) {
        try{
            let author = new authors(req.body);
            const newAuthor = await author.save();
            res.status(201).json(newAuthor.toJSON())
        } catch (error) {
            next(error)
        }
    }

    static async putAuthor(req, res, next) {
        try {
            const id = req.params.id
            const updateAuthor = await authors.findByIdAndUpdate(id, {$set: req.body})

            if (updateAuthor !== null) {
                res.status(200).json({ message: "Author updated"})
            } else {
               next(new NotFound("Author not found"))
            }

        } catch (error) {
            next(error)
        }
    }

    static async deleteAuthor(req, res, next) {
        try {
            const id = req.params.id
            const removeAuthor = await authors.findByIdAndDelete(id)

            if (removeAuthor !== null) {
                res.status(200).json({ message: "Author deleted"})
            } else {
               next(new NotFound("Author not found"))
            }

        } catch (error) {
            next(error)
        }
    }
}

export default AuthorController
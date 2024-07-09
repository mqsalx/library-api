import NotFound from "../errors/notFound.js"
import { author } from "../models/Author.js"

class AuthorController {

    static async getAuthors(req, res, next) {
        try {
            const listAuthors = await author.find({})
            res.status(200).json(listAuthors)
        } catch (error) {
            next(error)
        }
    }

    static async getAuthor(req, res, next) {
        try {
            const id = req.params.id
            const retrieveAuthor = await author.findById(id)

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
            const createAuthor = await author.create(req.body)
            res.status(201).json({message: "Author added"})
        } catch (error) {
            next(error)
        }
    }

    static async putAuthor(req, res, next) {
        try {
            const id = req.params.id
            const updateAuthor = await author.findByIdAndUpdate(id, {$set: req.body})

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
            const removeAuthor = await author.findByIdAndDelete(id)

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
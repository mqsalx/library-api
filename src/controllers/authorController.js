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
                res.status(404).json({message:  "Author not found"})
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
            const updateAuthor = await author.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Author updated"})
        } catch (error) {
            next(error)
        }
    }

    static async deleteAuthor(req, res, next) {
        try {
            const id = req.params.id
            const removeAuthor = await author.findByIdAndDelete(id)
            res.status(200).json({ message: "Author deleted"})
        } catch (error) {
            next(error)
        }
    }
}

export default AuthorController
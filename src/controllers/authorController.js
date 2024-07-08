import author from "../models/Author.js"

class AuthorController {

    static async getAuthors(req, res) {
        try {
            const listAuthors = await books.find({})
            res.status(200).json(listAuthors)
        } catch(error) {
            res.status(500).json({message: `${error.message} - Error at getting authors`})
        }
    }

    static async getAuthor(req, res) {
        try {
            const id = req.params.id
            const retrieveAuthor = await books.findById(id)
            res.status(200).json(retrieveAuthor)
        } catch(error) {
            res.status(500).json({message: `${error.message} - Error at getting author by id`})
        }
    }


    static async postAuthor(req, res) {
        try{
            const createAuthor = await books.create(req.body)
            res.status(201).json({message: "Author added"})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Error at adding author`})
        }
    }

    static async putAuthor(req, res) {
        try {
            const id = req.params.id
            const updateAuthor = await books.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Author updated"})
        } catch(error) {
            res.status(500).json({message: `${error.message} - Error at updating author`})
        }
    }

    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id
            const removeAuthor = await books.findByIdAndDelete(id)
            res.status(200).json({ message: "Author deleted"})
        } catch(error) {
            res.status(500).json({message: `${error.message} - Error at deleting author`})
        }
    }
}

export default BookController
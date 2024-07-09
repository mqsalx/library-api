import express from "express"
import BookController from "../controllers/bookController.js"


const router = express.Router()

router.get("/books", BookController.getBooks)
router.get("/books/search", BookController.getBooksByPublisher)
router.get("/books/:id", BookController.getBook)
router.post("/books", BookController.postBook)
router.put("/books/:id", BookController.putBook)
router.delete("/books/:id", BookController.deleteBook)

export default router
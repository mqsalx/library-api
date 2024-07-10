import express from "express"
import BookController from "../controllers/bookController.js"
import pagination from "../middlewares/pagination.js"


const router = express.Router()

router.get("/books", BookController.getBooks, pagination)
router.get("/books/search", BookController.getBooksFilter, pagination)
router.get("/books/:id", BookController.getBook)
router.post("/books", BookController.postBook)
router.put("/books/:id", BookController.putBook)
router.delete("/books/:id", BookController.deleteBook)

export default router
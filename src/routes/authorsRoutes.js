import express from "express"
import AuthorController from "../controllers/authorController.js"


const router = express.Router()

router.get("/authors", AuthorController.getAuthors)
router.get("/authors/:id", AuthorController.getAuthor)
router.post("/authors", AuthorController.postAuthor)
router.put("/authors/:id", AuthorController.putAuthor)
router.delete("/authors/:id", AuthorController.deleteAuthor)

export default router
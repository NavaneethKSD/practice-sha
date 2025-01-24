const express = require("express");
const { createBook, getBooks, updateBook, deleteBook } = require("../controllers/bookControllers");
const router = express.Router();

router.post('/create', createBook);
router.get('/read', getBooks);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);
router.get()

module.exports = router;
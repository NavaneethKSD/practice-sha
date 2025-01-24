const Book = require("../models/bookModel")
const createBook = async (req, res) => {
    try {
        const {title, author, genre, available, year } = req.body;
        const bookTitle = Book.findOne({title});

        const book = new Book({
            title,
            author,
            genre,
            available,
            year
        });
        await book.save();
        res.status(201).json({message: "Book added Successfully", data: book});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({data: books});
    

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        
        res.status(200).json({data: book});
        

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new: true});
        res.status(200).json({message: "Book updated Successfully", data: book});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Book deleted Successfully", data: book});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createBook, getBooks, getBookById, updateBook, deleteBook };
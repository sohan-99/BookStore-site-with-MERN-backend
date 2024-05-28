import Book from '../model/book.model.js';

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ message: error.message });
    res.status(500).json(error);
  }
};

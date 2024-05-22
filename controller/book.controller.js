import Book from '../model/book.model';

export const getBooks = async (req, res) => {
try{
  const books = await Book.find();
  res.status(200).json(books);
}catch(error){
  // res.status(404).json({message: error.message});
  console.log("Error: " + error.message);
  res.status(500).json(error);
}

}
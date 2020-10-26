const indexModel = require("../models/index.model");

module.exports.getBookList = async (req,res)=>{
    try {
        let bookList = await indexModel.book.find().populate("bookauthors","bookcomments","purchaseitems","archivedpurchaseitems");
        return res.status(201).json(bookList);
    } catch (error) {
        return res.status(400).json({message: "Get book list from API"+error});
    }
}
module.exports.getBookById = async (req,res)=>{
    try {
        let book = await indexModel.book.findById(req.body.bookId).populate("bookauthors","bookcomments","purchaseitems","archivedpurchaseitems");
        return res.status(201).json(book);
    } catch (error) {
        return res.status(400).json({message: "Get book by Id from API"+error});
    }
}
module.exports.createNewBook = async (req,res)=>{
    let newBook = new indexModel.book({
        title: req.body.title,
        description: req.body.description,
        long_description: req.body.long_description,
        bookauthors: req.body.description // array: one book have more author
    });
    try {
        //save new book :
        await newBook.save();
        // create book author document:
        let newBookAuthor = new indexModel.bookauthor({
            book: newBook._id,
            authors: newBook.bookauthors
        });
        await newBookAuthor.save();

        //update author table: 
        for ( let author of newBookAuthor.authors){
            await indexModel.author.findByIdAndUpdate({
                bookauthors:{$push:newBookAuthor._id} // them id cua  bookauthor vua tao.
            });
        }
        return res.status(200).json({message:"Create a new book: Finished ! "});
    } catch (error) {
        return res.status(400).json({message:"Error from Server during create new book: "+ error});
    }
}
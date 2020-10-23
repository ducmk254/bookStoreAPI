const indexModel = require("../models/index.model");
module.exports.getListAuthor = async(req,res)=>{
    try {
        let authorList = await indexModel.author.find().populate("bookauthors");
                                                // .exec()
                                                // .populate("bookauthors");
        return res.status(200).json(authorList);
    } catch (error) {
        return res.status(400).json({message:"Get author list error : "+error});
    }
}
module.exports.getAuthor  = async (req,res)=>{
    try {
        let author = await indexModel.author.findById(req.params.authorId)
                                            .populate("bookauthors");
        return res.status(200).json(author);
    } catch (error) {
        return res.status(400).json({message:"Get author error : "+error});
    }
}

module.exports.createAuthor = async (req,res)=>{
    try {
        let newAuthor = new indexModel.author({
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            street: req.body.street,
            city: req.body.city,
            bookauthors:[]
        });
        await newAuthor.save();
        return res.status(201).json(newAuthor);
    } catch (error) {
        return res.status(400).json({message:"Create error : " +error});
    }
}
module.exports.changeAuthor = async (req,res)=>{
    try {
        let currentAuthor = await indexModel.author.findById(req.params.authorId);
        if(!currentAuthor) return res.status(404).json({message:"Author not found!!!"});
        await currentAuthor.updateOne({
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            street: req.body.street,
            city: req.body.city

            // DON'T CHANGE BOOK LIST OF AUTHOR
        });
        return res.status(200).json({message:"Update finished!"});
    } catch (error) {
        return res.status(400).json({message:"Update error : "+error});
    }
}
module.exports.deleteAuthor = async (req,res)=>{
    try {
        let currentAuthor = await indexModel.author.findById(req.params.authorId);
        if(!currentAuthor) return res.status(403).json({message:"Author not found!!!"});
        for(let bookauthorId of currentAuthor.bookauthors){
            
            let bookauthorCurrent =  await indexModel.bookauthor.findById({_id:bookauthorId});
            
            await indexModel.book.findByIdAndUpdate({_id:bookauthorCurrent.book},{
                bookauthors:{$pull:bookauthorCurrent.author}
            });
            await bookauthorCurrent.deleteOne();
        }
        await currentAuthor.deleteOne();
        return res.status(200).json({message:"Delete author finished!!!"});
    } catch (error) {
        return res.status(400).json({message:"Delete error: "+error});
    }
}
const joi = require("@hapi/joi");
const indexModel = require("../models/index.model");

module.exports.validateAuthor = async (req,res,next)=>{
    const authorSchema = joi.object({
        firstname: joi.string().required().min(1).max(100),
        lastname: joi.string().required().min(1).max(100),
        street: joi.string(),
        city: joi.string()
    });
    try {
        let validateInput = await authorSchema.validateAsync({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            street: req.body.street,
            city: req.body.city
        });
        if(!validateInput){
            console.log(validateInput);
            return res.status(401).json({message:"Loi validate data: "+validateInput.error})
        }
        next();
    } catch (error) {
        return res.status(500).json({message:"Loi validate server : "+error});
    }
    
}
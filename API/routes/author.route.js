const indexController = require("../controllers/index.controller");
const indexMiddleware = require("../middlewares/index.Middleware");
module.exports = (app)=>{
    app.route("/api/authors")
        .get(indexController.authorController.getListAuthor)
        .post(indexMiddleware.authorValidate.validateAuthor ,indexController.authorController.createAuthor)
    app.route("/api/author/:authorId")
        .get(indexController.authorController.getAuthor)
        .put(indexMiddleware.authorValidate.validateAuthor,indexController.authorController.changeAuthor)
        .delete(indexController.authorController.deleteAuthor)
}
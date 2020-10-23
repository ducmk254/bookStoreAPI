const indexController = require("../controllers/index.controller");

module.exports = (app)=>{
    app.route("/api/authors")
        .get(indexController.authorController.getListAuthor)
        .post(indexController.authorController.createAuthor)
    app.route("/api/author/:authorId")
        .get(indexController.authorController.getAuthor)
        .put(indexController.authorController.changeAuthor)
        .delete(indexController.authorController.deleteAuthor)
}
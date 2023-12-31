const AuthorController = require("../controllers/author.controller");


module.exports = app => {
app.get("/api/authors", AuthorController.findAllAuthors);
app.get("/api/authors/count", AuthorController.countAllAuthors);
app.get("/api/authors/:id", AuthorController.findOneAuthor);
app.patch("/api/authors/:id", AuthorController.updateExistingAuthor);
app.post("/api/authors", AuthorController.createNewAuthor);
app.delete("/api/authors/:id", AuthorController.DeleteOneAuthor);
};

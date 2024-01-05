const AuthorController = require("../controllers/author.controller");


module.exports = app => {
app.get("/api/authors", AuthorController.findAllAuthors);
app.get("/api/authors/:id", AuthorController.findOneAuthor);
app.get("/api/books", AuthorController.findAllBooks);
app.post("/api/books", AuthorController.createNewBook);
app.get("/api/authors/:id/books", AuthorController.findBooksByAuthorId);


app.patch("/api/authors/:id", AuthorController.updateExistingAuthor);
app.post("/api/authors", AuthorController.createNewAuthor);
app.delete("/api/authors/:id", AuthorController.DeleteOneAuthor);
};

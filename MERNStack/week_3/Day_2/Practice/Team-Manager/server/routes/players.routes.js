const PlayerController = require("../controllers/players.controller");


module.exports = app => {
app.get("/api/players", PlayerController.findAll);
app.get("/api/players/count", PlayerController.countAll);
app.get("/api/players/:id", PlayerController.findOne);
app.patch("/api/players/:id", PlayerController.updateExisting);
app.post("/api/players", PlayerController.createNew);
app.delete("/api/players/:id", PlayerController.DeleteOne);
};

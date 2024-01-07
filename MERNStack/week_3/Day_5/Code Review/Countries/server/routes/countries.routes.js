const CountryController = require("../controllers/countries.controller");


module.exports = app => {
app.get("/api/countries", CountryController.findAllCountries);
// app.get("/api/countries/count", CountryController.countAllCountries);
app.get("/api/countries/:id", CountryController.findOneCountry);
app.patch("/api/countries/:id", CountryController.updateExistingCountry);
app.post("/api/countries", CountryController.createNewCountry);
app.delete("/api/countries/:id", CountryController.DeleteOneCountry);
};

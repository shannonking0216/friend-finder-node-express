const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const applyApiRoutesToApp = require("./app/routing/apiRoutes")
applyApiRoutesToApp(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
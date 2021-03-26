const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

// Index route
app.get("/", (req, res ) => {
    res.render("index");
    console.log("GET /");
});

let port = 5000;
app.listen(port, () => {
    console.log(`Server startad på ${port}`);
});

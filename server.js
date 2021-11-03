// Bring express into the program
const express = require('express');
// Bring mysql into the program
const mysql = require('mysql')
// Bring handlebars into the program
const exphbs = require('express-handlebars');
// We set up the port or specify if another process may use an undetermined port'
const PORT = process.env.PORT || 3000;
// This allows us to use the function of the express app
const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set the view engine as handlebars and the main html file
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
    console.log(`Server listening on PORT: ${PORT}`)
})
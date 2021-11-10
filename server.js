// Bring express into the program
const express = require('express');
// Bring mysql into the program
const mysql = require('mysql')
// We set up the port or specify if another process may use an undetermined port'
const PORT = process.env.PORT || 3000;
// This allows us to use the function of the express app
const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// require and use the routes we set up
require('./routes/htmlRoutes.js')(app)
// Set the app to listen on the specified port
app.listen(PORT, function () {
    console.log(`Server listening on PORT: ${PORT}`)
})
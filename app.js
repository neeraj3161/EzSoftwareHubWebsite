const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs'); // Use 'view engine' instead of 'view-engine'
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views'); // General config

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/privacy-policy', (req, res) => { 
    res.render('privacy');
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log("Server started at " + port);
});

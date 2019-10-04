const express = require("express");
const app = express();
app.get("/cars", (req, res) => {
    res.render('cars');
})
app.get("/cats", (req, res) => {
    res.render('cats');
})
app.get("/cars/new", (req, res) => {
    res.render('form');
})
app.get("/lasy", (req, res) => {
    var cat_info = {
        'name':"lasy",
        'pic':"./images/cat1.jpg",
        'Favorite_food':"Tunna",
        'age':"3 years",
        'Sleeping_Sopts':["Under beds", "Dark places"],
    };
    res.render('details', {cat: cat_info});

})
app.get("/smoky", (req, res) => {
    var cat_info = {
        'name':"smoky",
        'pic':"./images/cat2.jpg",
        'Favorite_food':"chicken",
        'age':"2 years",
        'Sleeping_Sopts':["Under beds", "Dark places"],
    };
    res.render('details', {cat: cat_info});

})
app.get("/carrot", (req, res) => {
    var cat_info = {
        'name':"carrots",
        'pic':"./images/cat3.jpg",
        'Favorite_food':"chicken and Tunna",
        'age':"3 months",
        'Sleeping_Sopts':["Under beds", "Dark places"],
    };
    res.render('details', {cat: cat_info});

})
app.get("/harry", (req, res) => {
    var cat_info = {
        'name':"harry",
        'pic':"./images/cat4.jpg",
        'Favorite_food':"chicken and Tunna",
        'age':"2 years",
        'Sleeping_Sopts':["Under beds", "Dark places"],
    };
    res.render('details', {cat: cat_info});

})
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(8000, () => console.log("listening on port 8000")); 
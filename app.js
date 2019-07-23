var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
    { name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732c7cdc9648c15a_960.jpg&user=Free-Photos" },
    { name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732c7cdc9648c15a_960.jpg&user=Pexels" },
    { name: "Mountain Goat's Rest", image: "https://photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732c7cdd9244c05f_960.jpg&user=Free-Photos" },
    { name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732c7cdc9648c15a_960.jpg&user=Free-Photos" },
    { name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732c7cdc9648c15a_960.jpg&user=Pexels" },
    { name: "Mountain Goat's Rest", image: "https://photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732c7cdd9244c05f_960.jpg&user=Free-Photos" },
    { name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732c7cdc9648c15a_960.jpg&user=Free-Photos" },
    { name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732c7cdc9648c15a_960.jpg&user=Pexels" },
    { name: "Mountain Goat's Rest", image: "https://photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732c7cdd9244c05f_960.jpg&user=Free-Photos" },
    { name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732c7cdc9648c15a_960.jpg&user=Free-Photos" },
    { name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732c7cdc9648c15a_960.jpg&user=Pexels" },
    { name: "Mountain Goat's Rest", image: "https://photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732c7cdd9244c05f_960.jpg&user=Free-Photos" },
];

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;

    var newCampGround = { name: name, image: image };
    campgrounds.push(newCampGround);
    res.redirect("/campgrounds");
});

app.listen(3000, function() {
    console.log("Serving on http://localhost:3000/");
});
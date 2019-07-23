var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);
// Campground.create(
//     {
//         name: "Mountain Goat's Rest", 
//         image: "https://photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732c7cdd9244c05f_960.jpg&user=Free-Photos"
//     }, function (err, campground) {
//     if (err)
//         console.log(err);
//     else
//         console.log(campground);
// });

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    Campground.find({}, function (erro, allcampgrounds) {
        if (erro)
            console.log(erro);
        else
            res.render("campgrounds", { campgrounds: allcampgrounds });
    });
    //res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;

    var newCampGround = { name: name, image: image };
    Campground.create(newCampGround, function(erro, newCamp) {
        if (erro)
            console.log(erro);
        else {
            console.log(newCamp);
            res.redirect("/campgrounds");
        }
    });
});

app.listen(3000, function() {
    console.log("Serving on http://localhost:3000/");
});
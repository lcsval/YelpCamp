var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

router.get("/", function (req, res) {
    Campground.find({}, function (err, allCampgrounds) {
        if (err)
            console.log(err);
        else
            res.render("campgrounds/index", { campgrounds: allCampgrounds });
    });
});

router.get("/new", isLoggedIn, function (req, res) {
    res.render("campgrounds/new");
});

router.post("/", isLoggedIn, function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = { id: req.user._id, username: req.user.username };
    var newCampGround = { name: name, image: image, description: description, author: author };

    Campground.create(newCampGround, function(err, newCamp) {
        if (err)
            console.log(err);
        else {
            console.log(newCamp);
            res.redirect("/campgrounds");
        }
    });
});

router.get("/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if (err)
            console.log(err);
        else
            res.render("campgrounds/show", {campground: foundCampground});
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect("/login");
}

module.exports = router;
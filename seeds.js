var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    },
    {
        name: "Applebs Rest",
        image: "https://images.unsplash.com/photo-1539712258047-fd138a7e6737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    },
    {
        name: "Valley be",
        image: "https://images.unsplash.com/photo-1502814828814-f57efb0dc974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    },
]

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        if (err)
            console.log(err);
    
        console.log("removed campgrounds!");

        // add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if (err)
                    console.log(err);
                else
                    console.log("added a campground");

                    // add a few comments
                    Comment.create(
                    {
                        text: "comment test aa a asdas dasbla bla",
                        author: "Homer"
                    }, function (err, comment) {
                        if (err)
                            console.log(err);
                        else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Create new Comment");
                        }
                    });     
            });
        });


    });
}

module.exports = seedDB;
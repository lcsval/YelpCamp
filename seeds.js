var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ligula nulla, ac euismod diam efficitur quis. Integer ultricies feugiat rhoncus. Fusce dignissim lorem ut dolor egestas congue. Integer ultricies bibendum purus et consequat. Nullam efficitur ipsum massa, elementum tempor leo aliquet quis. Duis et lacus quis risus efficitur tincidunt eu vitae lacus. Duis quis dictum erat, quis gravida augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nec condimentum arcu, ut lobortis metus. Morbi sagittis tellus quis tortor fermentum iaculis. Curabitur rutrum pulvinar ipsum, ut malesuada ex pellentesque ultrices. Cras tempus tristique ex, suscipit tempor metus iaculis at. Sed rutrum quam vitae imperdiet venenatis."
    },
    {
        name: "Applebs Rest",
        image: "https://images.unsplash.com/photo-1539712258047-fd138a7e6737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ligula nulla, ac euismod diam efficitur quis. Integer ultricies feugiat rhoncus. Fusce dignissim lorem ut dolor egestas congue. Integer ultricies bibendum purus et consequat. Nullam efficitur ipsum massa, elementum tempor leo aliquet quis. Duis et lacus quis risus efficitur tincidunt eu vitae lacus. Duis quis dictum erat, quis gravida augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nec condimentum arcu, ut lobortis metus. Morbi sagittis tellus quis tortor fermentum iaculis. Curabitur rutrum pulvinar ipsum, ut malesuada ex pellentesque ultrices. Cras tempus tristique ex, suscipit tempor metus iaculis at. Sed rutrum quam vitae imperdiet venenatis."
    },
    {
        name: "Valley be",
        image: "https://images.unsplash.com/photo-1502814828814-f57efb0dc974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ligula nulla, ac euismod diam efficitur quis. Integer ultricies feugiat rhoncus. Fusce dignissim lorem ut dolor egestas congue. Integer ultricies bibendum purus et consequat. Nullam efficitur ipsum massa, elementum tempor leo aliquet quis. Duis et lacus quis risus efficitur tincidunt eu vitae lacus. Duis quis dictum erat, quis gravida augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nec condimentum arcu, ut lobortis metus. Morbi sagittis tellus quis tortor fermentum iaculis. Curabitur rutrum pulvinar ipsum, ut malesuada ex pellentesque ultrices. Cras tempus tristique ex, suscipit tempor metus iaculis at. Sed rutrum quam vitae imperdiet venenatis."
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
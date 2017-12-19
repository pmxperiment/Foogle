var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/foogle");

module.exports.Restaurant = require("./restaurants.js");
module.exports.Review = require("./reviews.js");

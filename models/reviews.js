var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  review_text: String,
  username: String,
  createdTimeStamp: Timestamp
});

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;

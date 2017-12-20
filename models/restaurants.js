var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var reviews=require('./review.js');

var restaurantsSchema = new Schema({
  name: String,
  location:String,
  price_range: String,
  serviceTime:String,
  cuisine:String,
  OperationHours:[ String ],
  reviews: [ reviews.schema ],
});
var Restaurant = mongoose.model('Book', restaurantsSchema);
module.exports = Restaurant;

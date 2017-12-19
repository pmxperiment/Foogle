var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var restaurantsSchema = new Schema({
  name: String,
  location:String,
  price_range: String,
  serviceTime:String,
  cuisine:String,
  OperationHours:[ String ],
  reviews: {
    type: Schema.Types.ObjectId,
    ref: 'Review'
  },

});
var Restaurant = mongoose.model('Book', restaurantsSchema);
module.exports = Restaurant;

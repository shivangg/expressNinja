const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a geoLocation data
const GeoScheme = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
})


const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field required!"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoScheme
})

const Ninja =mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  }
  // add in geo location
})

const Ninja =mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
var mongoose = require('mongoose');

var ArtistSchema = new mongoose.Schema({
  name: { type: String, required: true},
  slug: { type: String, required: true}
});

module.exports = mongoose.model('Artist', ArtistSchema);

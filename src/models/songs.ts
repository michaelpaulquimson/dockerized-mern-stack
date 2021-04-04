const { Schema, model } = require('mongoose');

const SongSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  }
});

const Song = model('song', SongSchema);

module.exports = Song;
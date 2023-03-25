import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: Array,
    required: true
  },
  addedBy: {
    type: String,
    required: true
  },
  ratings: {
    type: Array,
    default: []
  },
  src: {
    type: String,
    required: true
  },
  length: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

export const SongModel = mongoose.model('Song', SongSchema)
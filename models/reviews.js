const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      require: true,
    },
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;

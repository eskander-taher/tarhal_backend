const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  weather: {
    type: String,
    required: true,
  },
  hotels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
  ],
  restaurants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  ],
  guides: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guide",
    },
  ],
  places: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
    },
  ],
  images: [
    {
      type: String,
    }
  ]
});

const City = mongoose.model("City", citySchema);

module.exports = City;

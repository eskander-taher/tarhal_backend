const mongoose = require("mongoose");

const touristSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
  },
});

const Tourist = mongoose.model("Tourist", touristSchema);

module.exports = Tourist;

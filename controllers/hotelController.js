const Hotel = require("../models/hotelModel");
const unlinkfile = require("../utils/unlinkFile");

// get all hotels
const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json({ hotels });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// get a hotel by ID
const getHotelById = async (req, res) => {
  const hotelId = req.params.id;

  try {
    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.status(200).json({ hotel });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// create a new hotel
const createHotel = async (req, res) => {
  try {
    const { name, description, location } = req.body;

    const hotel = new Hotel({
      name,
      description,
      location,
      image: req.file.filename,
    });

    const savedHotel = await hotel.save();

    if (savedHotel) {
      res.status(201).json({
        message: "Hotel created successfully",
        hotel: savedHotel,
      });
    } else {
      res.status(500).json({ message: "Failed to create hotel" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// update a hotel by ID
const updateHotel = async (req, res) => {
  try {
    const { name, description, location } = req.body;

    const hotelId = req.params.id;
    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    hotel.name = name;
    hotel.description = description;
    hotel.location = location;

    if (req.file.filename) {
      unlinkfile(hotel.image);
      hotel.image = req.file.filename;
    }

    const updatedHotel = await hotel.save();

    res
      .status(200)
      .json({ message: "Hotel updated successfully", hotel: updatedHotel });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// delete a hotel by ID
const deleteHotel = async (req, res) => {
  const hotelId = req.params.id;

  try {
    const hotel = await Hotel.findByIdAndDelete(hotelId);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    unlinkfile(hotel.image); // Delete the associated file using the unlinkfile function

    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
};

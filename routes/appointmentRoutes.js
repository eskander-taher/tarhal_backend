const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

// GET all appointments
router.get("/", appointmentController.getAllAppointments);

// GET a single appointment by ID
router.get("/:id", appointmentController.getAppointmentById);

// POST create a new appointment
router.post("/", appointmentController.createAppointment);

// PUT update an appointment by ID
router.put("/:id", appointmentController.updateAppointment);

// DELETE an appointment by ID
router.delete("/:id", appointmentController.deleteAppointment);

module.exports = router;

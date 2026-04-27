
import express from "express";
import BookingRequest from "../models/BookingRequest.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const bookingRequest = await BookingRequest.create(req.body);
    res.status(201).json(bookingRequest);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

export default router;
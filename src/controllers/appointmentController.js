import Appointment from "../models/Appointment.js";
import Patient from "../models/Patient.js";

// GET all appointments
export const getAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find()
      .populate("patient", "firstName lastName email phone")
      .sort({ appointmentDate: 1, appointmentTime: 1 });

    res.status(200).json(appointments);
  } catch (error) {
    next(error);
  }
};

// GET one appointment
export const getAppointmentById = async (req, res, next) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate(
      "patient",
      "firstName lastName email phone"
    );

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json(appointment);
  } catch (error) {
    next(error);
  }
};

// POST create appointment
export const createAppointment = async (req, res, next) => {
  try {
    const {
      patient,
      provider,
      appointmentDate,
      appointmentTime,
      reason,
      status,
      notes,
    } = req.body;

    const existingPatient = await Patient.findById(patient);

    if (!existingPatient) {
      return res.status(404).json({ message: "Selected patient not found" });
    }

    const newAppointment = await Appointment.create({
      patient,
      provider,
      appointmentDate,
      appointmentTime,
      reason,
      status,
      notes,
    });

    const populatedAppointment = await Appointment.findById(newAppointment._id).populate(
      "patient",
      "firstName lastName email phone"
    );

    res.status(201).json(populatedAppointment);
  } catch (error) {
    next(error);
  }
};

// PUT update appointment
export const updateAppointment = async (req, res, next) => {
  try {
    const {
      patient,
      provider,
      appointmentDate,
      appointmentTime,
      reason,
      status,
      notes,
    } = req.body;

    if (patient) {
      const existingPatient = await Patient.findById(patient);

      if (!existingPatient) {
        return res.status(404).json({ message: "Selected patient not found" });
      }
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        patient,
        provider,
        appointmentDate,
        appointmentTime,
        reason,
        status,
        notes,
      },
      {
        new: true,
        runValidators: true,
      }
    ).populate("patient", "firstName lastName email phone");

    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json(updatedAppointment);
  } catch (error) {
    next(error);
  }
};

// DELETE appointment
export const deleteAppointment = async (req, res, next) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!deletedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    next(error);
  }
};
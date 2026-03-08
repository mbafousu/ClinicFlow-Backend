import Patient from "../models/Patient.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// GET all patients
export const getPatients = asyncHandler(async (req, res) => {
  const { search } = req.query;

  const filter = search
    ? {
        $or: [
          { firstName: { $regex: search, $options: "i" } },
          { lastName: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
        ],
      }
    : {};

  const patients = await Patient.find(filter).sort({ lastName: 1, firstName: 1 });
  res.json(patients);
});


// GET one patient
export const getPatientById = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id);

  if (!patient) {
    res.status(404);
    throw new Error("Patient not found");
  }

  res.json(patient);
});


// CREATE patient
export const createPatient = asyncHandler(async (req, res) => {
  const patient = new Patient(req.body);
  const savedPatient = await patient.save();

  res.status(201).json(savedPatient);
});


// UPDATE patient
export const updatePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!patient) {
    res.status(404);
    throw new Error("Patient not found");
  }

  res.json(patient);
});


// DELETE patient
export const deletePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findByIdAndDelete(req.params.id);

  if (!patient) {
    res.status(404);
    throw new Error("Patient not found");
  }

  res.json({ message: "Patient deleted successfully" });
});
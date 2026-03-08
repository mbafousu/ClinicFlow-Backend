import "dotenv/config";
import bcrypt from "bcrypt";

import { connectDB } from "../config/db.js";
import User from "../models/User.js";
import Patient from "../models/Patient.js";
import Visit from "../models/Visit.js";

const seed = async () => {
  await connectDB();

  // 1) Clear existing data
  await Promise.all([
    User.deleteMany(),
    Patient.deleteMany(),
    Visit.deleteMany(),
  ]);

  // 2) Create demo user
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("Password123!", salt);

  const demoUser = await User.create({
    name: "Demo Staff",
    email: "demo@clinicflow.com",
    password: hashedPassword,
    role: "staff",
  });

  // 3) Create demo patients
  const patients = await Patient.insertMany([
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@demo.com",
      phone: "555-1111",
    },
    {
      firstName: "Maria",
      lastName: "Lopez",
      email: "maria@demo.com",
      phone: "555-2222",
    },
    {
      firstName: "Kevin",
      lastName: "Smith",
      email: "kevin@demo.com",
      phone: "555-3333",
    },
  ]);

  // 4) Create demo visits
  await Visit.insertMany([
    {
      patient: patients[0]._id,
      reason: "Headache",
      status: "checked_in",
      vitals: {
        temperatureC: 37.2,
        pulse: 86,
        respRate: 18,
        bpSystolic: 120,
        bpDiastolic: 80,
        spo2: 98,
        weightKg: 78,
      },
      notes: "Patient reports headache since yesterday.",
    },
    {
      patient: patients[0]._id,
      reason: "Follow-up",
      status: "completed",
      vitals: {
        temperatureC: 36.9,
        pulse: 74,
        respRate: 16,
        bpSystolic: 118,
        bpDiastolic: 76,
        spo2: 99,
        weightKg: 77.5,
      },
      notes: "Symptoms improved. Encourage hydration and rest.",
    },
    {
      patient: patients[1]._id,
      reason: "Routine checkup",
      status: "completed",
      vitals: {
        temperatureC: 36.8,
        pulse: 72,
        respRate: 16,
        bpSystolic: 116,
        bpDiastolic: 74,
        spo2: 99,
        weightKg: 64,
      },
      notes: "Vitals stable. No concerns.",
    },
    {
      patient: patients[2]._id,
      reason: "Cough",
      status: "in_progress",
      vitals: {
        temperatureC: 37.8,
        pulse: 92,
        respRate: 20,
        bpSystolic: 124,
        bpDiastolic: 82,
        spo2: 96,
        weightKg: 85,
      },
      notes: "Dry cough for 3 days. Assess for infection.",
    },
    {
      patient: patients[2]._id,
      reason: "Fever",
      status: "scheduled",
      vitals: {
        temperatureC: 38.4,
        pulse: 104,
        respRate: 22,
        bpSystolic: 122,
        bpDiastolic: 78,
        spo2: 95,
        weightKg: 84.7,
      },
      notes: "Scheduled visit created for fever evaluation.",
    },
  ]);

  console.log("✅ Seed completed!");
  console.log("Demo login:");
  console.log("Email: demo@clinicflow.com");
  console.log("Password: Password123!");

  process.exit(0);
};

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
import { asyncHandler } from "../utils/asyncHandler.js";

export const searchDrugs = asyncHandler(async (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ message: "Search term is required" });
  }

  const response = await fetch(
    `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${search}&limit=5`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch drug data");
  }

  const data = await response.json();

  res.json(data);
});
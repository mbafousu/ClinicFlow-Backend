export const errorHandler = (err, req, res, next) => {
  console.error(err);

  // duplicate key error (unique email)
  if (err.code === 11000) {
    return res.status(400).json({
      message: "Duplicate field value",
      details: err.keyValue,
    });
  }

  // validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation error",
      details: err.errors,
    });
  }

  res.status(err.status || 500).json({
    message: err.message || "Server Error",
  });
};
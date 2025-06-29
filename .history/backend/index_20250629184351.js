require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ✅ Correct CORS setup
app.use(cors({
  origin: "http://localhost:3000",  // React frontend
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
}));

app.options("*", cors());  // Handle preflight

app.use(bodyParser.json());
app.use(cookieParser());

// ✅ Correct route
app.use("/api", authRoute);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  mongoose.connect(uri)
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB error:", err));
});

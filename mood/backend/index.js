
const express = require("express");

const app = express()




const mongoose = require("mongoose");
require("dotenv").config();


app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("App is working and connected to MongoDB!");
});

const PORT = process.env.PORT || 6070;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

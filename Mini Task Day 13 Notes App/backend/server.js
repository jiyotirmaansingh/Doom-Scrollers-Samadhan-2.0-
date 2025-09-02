const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notesRouter = require("./routes/notes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/notesApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

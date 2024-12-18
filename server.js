const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/emogiStoreRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/stories', router);

const DB_URL = "mongodb://localhost:27017/emoji-story-generator";
const PORT = 3000;
mongoose
  .connect(DB_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

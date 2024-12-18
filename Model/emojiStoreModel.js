const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  emojiSequence: { type: [String], required: true },
  translation: { type: String, required: true },
  authorNickname: { type: String, required: true },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("StoreModel", StoreSchema);

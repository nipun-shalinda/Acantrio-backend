const mongoose = require("mongoose");

const translationSchema = new mongoose.Schema({
  storyId: { type: mongoose.Schema.Types.ObjectId, required: true },
  translation: { type: String, required: true },
  vots: { type: Number, default: 0 },
});

module.exports = mongoose.model("TranslationModel", translationSchema);
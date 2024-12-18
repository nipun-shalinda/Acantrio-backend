const mongoose = require("mongoose");

const translationRulesSchema = new mongoose.Schema({
  poattern: { type: [String], required: true },
  template: { type: [String], required: true },
});

module.exports = mongoose.model("TranslationRulesModel", translationRulesSchema);
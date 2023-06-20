const mongoose = require("mongoose");

const homeworkSchema = mongoose.Schema({
  id: { type: String, required: true, min: 7 },
  courseSubject: { type: String, required: true },
  endDate: { type: String, required: true },
  settlement:{type: String, required: true}, 
  form:{type: String, required: true},
  description: { type: String, required: true },
});

module.exports = mongoose.model("Homework", homeworkSchema);
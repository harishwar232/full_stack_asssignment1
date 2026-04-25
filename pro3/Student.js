const mongoose = require("./db");

const studentSchema = new mongoose.Schema({
    name: String,
    department: String,
    company: String,
    package: Number
});

module.exports = mongoose.model("Student", studentSchema);
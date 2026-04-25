const express = require("express");
const bodyParser = require("body-parser");

// connect database
require("./db");

const Student = require("./Student");

const app = express();
app.use(bodyParser.json());

// Add Student
app.post("/addStudent", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.send("Student Added Successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get Students
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
const express = require("express");
const bodyParser = require("body-parser");
const Student = require("./Student");

const app = express();
app.use(bodyParser.json());

app.post("/addStudent", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();

        res.json({ message: "Saved to DB", data: student });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log("Server running"));
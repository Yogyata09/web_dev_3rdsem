
import express from 'express';

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Sample student data
let students = [
    { id: 1, name: "Rahul", course: "CSE" },
    { id: 2, name: "Priya", course: "IT" }
];

// GET request
app.get('/students', (req, res) => {
    res.json(students);
});

// POST request
app.post('/students', (req, res) => {
    const student = req.body;
    students.push(student);

    res.status(201).json({
        message: "Student added successfully",
        student: student
    });
});

// PUT request
app.put('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.course = req.body.course;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

// DELETE request
app.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const studentExists = students.some(s => s.id === id);

    if (!studentExists) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

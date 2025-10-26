import { useState } from "react";
import "./App.css";

export default function App() {
  const [student, setStudent] = useState({ name: "", subject: "", grade: "" });
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.name || !student.subject || !student.grade) {
      alert("Please fill in all fields.");
      return;
    }

    const gradeNumber = parseFloat(student.grade);
    if (isNaN(gradeNumber) || gradeNumber < 0 || gradeNumber > 10) {
      alert("The grade must been a number between 0 and 10.");
      return;
    }

    if (editingIndex !== null) {
      const updated = [...students];
      updated[editingIndex] = student;
      setStudents(updated);
      setEditingIndex(null);
    } else {
      setStudents([...students, student]);
    }

    setStudent({ name: "", subject: "", grade: "" });
  };

  const handleEdit = (index) => {
    setStudent(students[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      {}
      <div className="header">
        <img
          src="/sistemas-novo.svg"
          alt="Logo do Colégio"
          className="header-img"
        />
        <h1 className="header-title"> Teacher's Grade Manager</h1>
      </div>

      {}
      <div className="card">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={student.subject}
            onChange={handleChange}
          />
          <input
            type="number"
            name="grade"
            placeholder="Grade (0–10)"
            value={student.grade}
            onChange={handleChange}
            min="0"
            max="10"
          />
          <button type="submit">
            {editingIndex !== null ? "Save the changes" : "Add Student"}
          </button>
        </form>

        <div className="student-list">
          {students.length === 0 ? (
            <p className="empty">"No students have been added yet."</p>
          ) : (
            students.map((s, index) => {
              const gradeNumber = parseFloat(s.grade);
              const approved = gradeNumber >= 6;
              return (
                <div
                  key={index}
                  className={`student ${approved ? "approved" : "failed"}`}
                >
                  <div>
                    <strong>{s.name}</strong> — {s.subject} — Nota: {s.grade}{" "}
                    <span className="status">
                      ({approved ? "Approved" : "Failed"})
                    </span>
                  </div>
                  <div className="actions">
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

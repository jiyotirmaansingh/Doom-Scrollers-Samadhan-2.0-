import { useEffect, useState } from "react";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";
import "./notes.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  // Fetch notes from backend
  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error("Error fetching notes:", err));
  }, []);

  // Save new or updated note
  const handleSave = (note) => {
    if (editingNote) {
      // Update existing note
      fetch(`http://localhost:5000/notes/${editingNote._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      })
        .then((res) => res.json())
        .then((updatedNote) => {
          setNotes(
            notes.map((n) => (n._id === updatedNote._id ? updatedNote : n))
          );
          setEditingNote(null);
        });
    } else {
      // Create new note
      fetch("http://localhost:5000/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      })
        .then((res) => res.json())
        .then((newNote) => setNotes([...notes, newNote]));
    }
  };

  // Delete note
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/notes/${id}`, { method: "DELETE" })
      .then(() => setNotes(notes.filter((n) => n._id !== id)));
  };

  // Edit note
  const handleEdit = (note) => {
    setEditingNote(note);
  };

  return (
    <div className="app-container">
      <h1>Notes App</h1>
      <NoteForm onSave={handleSave} editingNote={editingNote} />
      <NotesList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;

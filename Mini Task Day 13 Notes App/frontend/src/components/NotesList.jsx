function NotesList({ notes, onDelete, onEdit }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note._id} className="note-card">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => onEdit(note)} className="edit-btn">
            Edit
          </button>
          <button onClick={() => onDelete(note._id)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NotesList;

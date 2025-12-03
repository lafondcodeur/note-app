const Note = ({ note, deleteNote }) => {
  return (
    <div
      className="p-4 border-l-4 bg-white rounded-lg shadow-md"
      style={{
        borderLeftColor:
          note.priority === "high"
            ? "red"
            : note.priority === "moyenne"
            ? "orange"
            : "green",
      }}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>Catégorie</strong> : {note.category}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Priorité</strong> : {note.priority}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Description</strong> : {note.description}
      </p>
      <button
        onClick={() => deleteNote(note.id)}
        className="mt-3 text-red-500 hover:text-red-700 cursor-pointer transition"
      >
        🚨Supprimer
      </button>
    </div>
  );
};

export default Note;

import Note from "./Note";
const NoteList = ({ notes, deleteNote }) => {
  if (notes.lenght === 0) {
    return <p className="text-center text-gray-500">No note yet</p>;
  }
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;

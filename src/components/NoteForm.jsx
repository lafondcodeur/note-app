import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "moyenne",
    category: "debutant",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  // Handle form Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return; // Validation
    // Create a new note object
    const newNote = { id: Date.now(), ...formData };
    // Add the new note to the notes array, which gets passed from App.jsx
    setNotes([newNote, ...notes]);
    // Reset form data
    setFormData({
      title: "",
      category: "debutant",
      priority: "moyen",
      description: "",
    });
  };

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form" : "Add new Form + "}
      </button>
      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "high", label: "🔴  High" },
              { value: "moyenne", label: "Moyenne" },
              { value: "low", label: "Low" },
            ]}
          />
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "debutant", label: "Debutant" },
              { value: "personal", label: "Personal" },
              { value: "idea", label: "Idea" },
            ]}
          />
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-500 text-white cursor-pointer py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;

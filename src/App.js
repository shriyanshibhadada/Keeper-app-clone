import "./App.css";
import Header from "./components/Header.js";
import Note from "./components/Note.js";
import Footer from "./components/Footer.js";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteNote(id) {
    setNotes(
      notes.filter((item, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((notesData, index) => {
        return (
          <Note
            title={notesData.title}
            key={index}
            content={notesData.content}
            deleteNote={deleteNote}
            id={index}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

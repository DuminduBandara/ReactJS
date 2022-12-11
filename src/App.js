import React from 'react';
import Notes from './components/notesList';
import { nanoid } from 'nanoid'
import Search from './components/search';
import Navbar from './components/Navbar';


const App = () => {

 

  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      text: "Note1 plz",
      date: "15/12/2022"
    },
    {
      id: nanoid(),
      text: "Note2 plz",
      date: "13/12/2022"
    }
  ]);

  

  const [searchNote, setSearchNotes] = React.useState('')

  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const saveNotes = JSON.parse(
      localStorage.getItem('react-note')
    );
    if(saveNotes){
      setNotes(saveNotes);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('react-note-data', JSON.stringify(notes));
  }, [notes])


  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const addNewNotes = [...notes, newNote];
    setNotes(addNewNotes);
    // setNotes(...prevNotes => prevNotes, newNote);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return(
    <div className={`${darkMode && 'dark-mode'}`}>
      <main className="container">
        <Navbar 
          handleDarkMode={setDarkMode}
        />
        <Search
          handleDarkMode={setDarkMode}
          handleSearchNote={setSearchNotes}
        />
        <Notes 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchNote))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </main>
    </div>
  );
}

export default App;
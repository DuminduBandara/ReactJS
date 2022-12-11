import React from 'react';
import Note from './note';
import AddNote from './addNewNote';


const Notes = ({notes, handleAddNote, handleDeleteNote}) => {

    return(
        <div className="notes-list">
            {notes.map(note => (
                <Note 
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );

} 

export default Notes;
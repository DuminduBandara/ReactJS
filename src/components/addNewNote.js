import React from 'react';

const AddNewNote = ({handleAddNote}) => {

    const [addText, setAddText] = React.useState('');
    const charLimit = 200;
    const handleChange = (event) => {
        if(charLimit - event.target.value.length >= 0){
            setAddText(event.target.value);
        }
    } 


    const handleSave = (event) => {
        if(addText.trim().length > 0){
            handleAddNote(addText)
            setAddText('')
        }
    }

    return(
        <div className="note newNote">
            <textarea
                rows='10'
                cols='10'
                placeholder='Add new Note'
                value={addText}
                onChange={handleChange}
            ></textarea>
            <div className="note-bottom">
                <small>{charLimit - addText.length}</small>
                <button className="saveBtn" onClick={handleSave}>Save</button>
            </div>
        </div>
    );

}

export default AddNewNote;
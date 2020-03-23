import React from 'react';  
import Note from '../note/Note';
import './NoteMainPage.css';

export default function NoteMainPage(props) {
    return (
      <section className='notePage'>
        <div>
        <ul className='notes'>
          {props.notes.map(note =>
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
            </li>
          )}
        </ul>
        
        <button className='addNoteButton'>+ Add Note</button></div>
      </section>
      
    );
}
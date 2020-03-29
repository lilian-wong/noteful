import React from 'react';  
import Note from '../note/Note';
import './NoteMainPage.css';

import  NotefulContext  from '../NotefulContext';

export default function NoteMainPage(props) {
    return (
      <NotefulContext.Consumer>
        {({notes}) =>
          <section className='notePage'>
            <div>
              <ul className='notes'>
                {  
                  props.notes.map(note =>
                      <li key={note.id}>
                        <Note
                          id={note.id}
                          name={note.name}
                          modified={note.modified}
                          history = {props.history}
                        />
                      </li>
                )}
              </ul>
              <button className='addNoteButton'>+ Add Note</button>
            </div>
          </section>
      }
      </NotefulContext.Consumer>
    );
}
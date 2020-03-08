import React from 'react';
import Note from '../note/Note';


export default function NoteList(props){
  console.log(props.notes);
    return (
      <section className='NoteList'>
        <ul className='NoteList_list' aria-live='polite'>
          {props.notes.map(note =>
            <Note
              key={note.id}
              {...note}
            />
          )}
        </ul>
      </section>
    );
}

NoteList.defaultProps = {
  notes: []
}
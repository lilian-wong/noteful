import React, { Component } from 'react';  
import Note from '../note/Note';
import './NoteMainPage.css';
import  NotefulContext  from '../NotefulContext';

export default class NoteMainPage extends Component {
  static defaultProps ={
    match: {
      params: {}
    }
  }
  static contextType = NotefulContext;

  updateDeleteNote = deletedNotePath => {
    this.props.history.push('/notes');
  }
    render() {
      const {notes=[]} = this.context;
      const {deletedNoteId} = this.props.match.params;
     
      console.log(this.props.history);

      return(
          <section className='noteMainPage'>
            <div>
              <ul className='notes'>
                {  
                  this.props.notes.map(note =>
                      <li key={note.id}>
                        <Note
                          id={note.id}
                          name={note.name}
                          modified={note.modified}
                          onDeleteNote = {this.updateDeleteNote}
                        />
                      </li>
                  )}
              </ul>
              <button className='addNoteButton'>+ Add Note</button>
            </div>
          </section>
        )
      }
}

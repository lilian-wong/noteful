import React, { Component } from 'react';
// import { format } from 'date-fns';
import Note from '../note/Note';
import  NotefulContext  from '../NotefulContext';

export default class NotePage extends Component{
  static defaultProps ={
    match: {
      params: {}
    }
  }

  static contextType = NotefulContext;

  updateDeleteNote = deletedNotePath => {
    this.props.history.push('/');
  }

  render(){
    const {notes=[]} = this.context;
    const {deletedNoteId} = this.props.match.params;
    
    return (
      <section className='Note'>
        <div>
            <button type='button' onClick ={this.props.history.goBack}>Go back</button>
        </div>
        <Note
            id={this.props.notes.id}
            name={this.props.notes.name}
            modified={this.props.notes.modified}
            onDeleteNote={this.updateDeleteNote}
        />
        {/* <h2>{props.notes.name}</h2>
          <p>Modified Date: {format(new Date(props.notes.modified), 'MM/dd/yyyy')}</p> */}
          <p>{this.props.notes.content}</p>
      </section>
      
    );
  }
}

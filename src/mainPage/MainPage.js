  import React from 'react';
  import FolderList from '../folderList/FolderList';
  import NoteList from '../noteList/NoteList';
  import './MainPage.css';

  export default function MainPage(props) {
  
      return (
        <div className='MainPage'>
           <header>
              <h1>Noteful</h1>
            </header>
              <section className="Sidebar">
                <FolderList folders={props.dummy.folders}/>
              </section>     
              <section className="Main">
                <NoteList notes = {props.dummy.notes}/>
              </section> 
          </div>
      );
  }
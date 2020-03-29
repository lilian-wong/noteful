import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import NoteMainPage from './noteMainPage/NoteMainPage';
import NotePage from './notePage/NotePage';
import FolderNav from './folderNav/FolderNav';
import NoteNavPage from './noteNavPage/NoteNavPage';
//import AddNoteForm from './addNoteForm/AddNoteForm';
import NotefulContext from './NotefulContext';
import config from './config';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      folders: [],
      notes: [],
      addFolder: () => {},
      addNote: () => {},
      onClickDeleteNote: () => {},
    };
  }

  componentDidMount(){
      Promise.all([
        fetch(`${config.API_ENDPOINT}/notes`),
        fetch(`${config.API_ENDPOINT}/folders`)
      ])
      .then(([noteResponse, folderResponse]) => {
        if(!noteResponse.ok)
          return noteResponse.json().then(e => Promise.reject(e))
        if(!folderResponse.ok)
          return folderResponse.json().then(e => Promise.reject(e))
        return Promise.all([
          noteResponse.json(),
          folderResponse.json(),
        ])
      })

      .then(([notes, folders]) => {
        this.setState({notes, folders});
       
      })
      .catch(error => {
        console.error({error});
      });
      
  }

  onClickDeleteNote = noteId => {
    const newNotes = this.state.notes.filter( note => note.id !== noteId);
    this.setState({
      notes: newNotes
    })
  }
  renderNoteRoutes(){
      const {notes} = this.state;
     
      return <>
        {/* <Route exact path = '/'>
          <NoteMainPage notes={notes}/>
        </Route> */}
        <Route
          path='/'  
          render= {routeProps =>{
            return(
              <NoteMainPage 
              {...routeProps}
              notes={notes}
              />
            )
          }}
        />
        {['/FolderPage/:folderId'].map(path => (
          <Route          
              key={path}
              path={path}
              render={routeProps => {
                  const {folderId} = routeProps.match.params;
                  const selectedFolder = notes.filter(selected =>
                    selected.folderId=== folderId);
                    console.log(routeProps);
                  return (
                      <NoteMainPage
                          {...routeProps}
                          notes={selectedFolder}
                      />
                  );
              }} 
          />
        ))}
      {['/NotePage/:noteId'].map(path => (
        <Route 
            key={path}
            path={path}
            render={routeProps => {
              const {noteId} = routeProps.match.params;
              const selectedNote = notes.filter(selected =>
                selected.id=== noteId);
              let selectedFolder = selectedNote.find(note =>note.id===noteId);
              if(selectedFolder){
                return(
                  <NotePage
                    {...routeProps}
                    notes={selectedFolder}
                  />
                );
            }}}
          />
          ))}
      </>  
  }

  renderFolderRoutes(){
    const {folders, notes} = this.state;
   
        return <>
              {['/','/FolderPage/:folderId'].map(path => (
                  <Route
                      exact
                      key={path}
                      path={path}
                      render={routeProps => (
                          <FolderNav
                              {...routeProps}
                          />
                      )}
                     
                  />
              ))}
              {['/NotePage/:noteId'].map(path => (
                <Route 
                    key={path}
                    path={path}
                    render={routeProps => {
                      const {noteId} = routeProps.match.params;
                      const note = notes.filter(selected =>
                        selected.id=== noteId);
                      let selectedNote = note.find(note_item =>note_item.id===noteId);
                      if(selectedNote){
                      return(
                        <NoteNavPage
                          selectedNote= {selectedNote}
                          folders={folders}
                        />
                        );
                      }
              }}
              
            />
          ))}
        </>
  }

  render(){
    const store = {
      note: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.state.onClickDeleteNote
    }
    return(
      <NotefulContext.Provider value={store} >
        <div className = 'App'>
            <header className="App_header">
              <h1>
                <NavLink to ="/">Noteful </NavLink>
              </h1>
            </header>
            <div className='Wrapper'>
              <nav className='Sidebar'> 
                {this.renderFolderRoutes()}
              </nav>
              <main className='App_mainPage'>
                {this.renderNoteRoutes()}
              </main> 
            </div>
        </div>
        </NotefulContext.Provider>
    )
  }
}

export default App;

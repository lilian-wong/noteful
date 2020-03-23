import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import NoteMainPage from './noteMainPage/NoteMainPage';
import NotePage from './notePage/NotePage';
import dummyStore from './dummy-store';
import FolderNav from './folderNav/FolderNav';
import NoteNavPage from './noteNavPage/NoteNavPage';

class App extends Component{
  state = {
    folders: [],
    notes: []
  };

  loadData(){
    this.setState({
      folders: dummyStore.folders,
      notes: dummyStore.notes
    })
  }

  componentDidMount(){
     this.loadData();
  }


  renderNoteRoutes(){
    const {notes} = this.state;
      return <>
        <Route exact path='/'>
          <NoteMainPage
            notes={notes}
          />
        </Route>
        {['/FolderPage/:folderId'].map(path => (
          <Route          
              key={path}
              path={path}
              render={routeProps => {
                  const {folderId} = routeProps.match.params;
                  const selectedFolder = notes.filter(selected =>
                    selected.folderId=== folderId);
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
            }
            }}
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
                              folders={folders}
                              notes={notes}
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
    return(
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
    )
  }
}

export default App;

import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import NoteMainPage from './noteMainPage/NoteMainPage';
import NotePage from './notePage/NotePage';
import dummyStore from './dummy-store';
import FolderNav from './folderNav/FolderNav';


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
              return(
                <NotePage
                  {...routeProps}
                  notes={selectedNote}
                />
              );
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
                    const selectedNote = notes.filter(selected =>
                      selected.id=== noteId);
                    return(
                      <FolderNav
                        folders={folders}
                        notes={notes}
                      {...routeProps}
                  />
                    );
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

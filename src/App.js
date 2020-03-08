import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import MainPage from './mainPage/MainPage';
import dummyStore from './dummy-store';
import FolderList from './folderList/FolderList';
import NoteList from './noteList/NoteList';


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

  render(){
    const {folders, notes} = this.state;
    return (
      <main>
        <Route exact path='/' 
        render ={()=> 
          <MainPage dummy= {this.state}/>}
          />
        <Route path='/FolderList' 
        render ={()=>
          <FolderList folders = {folders}/>}
        />
        <Route path='/NoteList' 
        render = {()=> 
            <NoteList notes = {notes}/>}
        />
      </main>
    );
  }
}

export default App;

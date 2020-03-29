import React from 'react';
import { NavLink} from 'react-router-dom';
import '../folder/Folder.css';


export default function FolderPage(props){
    let selectedFolder = props.folders.filter(
       selected => selected.id===props.selectedNote.folderId
    )
    
    return(
        <div>
            <section className='Folder'>
                <NavLink to={`/FolderPage`} >
                    {selectedFolder[0].name}
                </NavLink>
            </section>

        </div>
    );
}
import React from 'react';
import Folder from '../folder/Folder';

export default function FolderNav(props){
 
    return(
        <section className='FolderList'>
            <ul className='FolderList_list' aria-live='polite'>
                {props.folders.map(folder => (        
                    <Folder 
                    key = {folder.id}
                    {...folder}
                    /> 
                )
            )}
            </ul>
            <button className='addFolderButton'>+ Add</button>
        </section>     
    )
}

FolderNav.defaultProps = {
    folders: []
}
import React from 'react';
import '../folder/Folder';
import Folder from '../folder/Folder';

export default function FolderList(props){
    
    return(
        <section className="FolderList">
            <ul className="FolderList_list" aria-live='polite'>
                {props.folders.map(folder => 
                    <Folder 
                    key = {folder.id}
                    {...folder}
                    />
                )}
            </ul>
        </section>        
    )
}

FolderList.defaultProps = {
    folders: []
}

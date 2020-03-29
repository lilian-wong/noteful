import React from 'react';
import Folder from '../folder/Folder';
import  NotefulContext  from '../NotefulContext';

export default function FolderNav(props){
    return(
        <NotefulContext.Consumer>
            {({folders}) =>
                <section className='FolderList'>
                    <ul className='FolderList_list' aria-live='polite'>
                        {folders.map(folder => (        
                            <Folder 
                            key = {folder.id}
                            {...folder}
                            /> 
                        )
                    )}
                    </ul>
                    <button className='addFolderButton'>+ Add</button>
                </section>   
            }
        </NotefulContext.Consumer>  
    )
}

// FolderNav.defaultProps = {
//     folders: []
// }
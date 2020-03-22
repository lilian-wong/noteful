import React from 'react';
import { NavLink} from 'react-router-dom';
import './Folder.css';

export default function Folder(props){
    return(
        <li className='Folder'>      
            <NavLink to={`/FolderPage/${props.id}`} >
                {props.name}
            </NavLink>
        </li>
    )
}

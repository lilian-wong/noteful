import React from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';

export default function Folder(props){
    return(
        <li>
            <Link to='/FolderList'>
                {props.name}
            </Link>
        </li>
    )
}
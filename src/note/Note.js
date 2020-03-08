import React from 'react';
import {Link} from 'react-router-dom';
import {format} from 'date-fns';
import './Note.css';

export default function Note(props){
    return(
        <section className="Note">
            <h2 className="Note_title">
                <Link to= {`/note/{props.id}`}>
                    {props.name}
                </Link>
            </h2>
            <div className="Note_delete">
                <button className="delete_btn" type="button">
                    Delete Note
                </button>
            </div>
                <div className='Note_modified_date'>
                    Modified
                    {' '}
                    <span className='Date'>
                        {format(new Date(props.modified), 'MM/dd/yyyy')}
                    </span>
                </div>
        </section>
    )
}


import React from 'react';
import {Link} from 'react-router-dom';
import {format} from 'date-fns';
import './Note.css';

export default function Note(props){
        console.log(props.id);
    return(
        <section className="Note">
            <h2 className="Note_title">
                <Link to= {`/NotePage/${props.id}`}>
                    {props.name}
                </Link>
            </h2>
            <div className="Note_delete">
                <button className="delete_btn" type="button">
                    Delete Note
                </button>
            </div>
            <div className='Note_modified_date'>
                Date Modified on
                {' '}
                <span className='Date'>
                    {format(new Date(props.modified), 'MM/dd/yyyy')}
                </span>
            </div>
        </section>
    )
}


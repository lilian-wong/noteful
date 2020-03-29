import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './Note.css';
import NotefulContext  from '../NotefulContext';
import config from '../config';


export default class Note extends Component{
    static defaultProps = {
        onClickDeleteNote: () => {}
    }

    static contextType = NotefulContext;

    onClickDeleteNote = e => {
        e.preventDefault();
        const noteId = this.props.id;
        let url = `${config.API_ENDPOINT}/notes/${noteId}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(response => {
            if(!response.ok){
                return response.json().then(e => Promise.reject(e))
            }
            return response.json()
        })
        .then(() => {
            this.context.deleteNote(noteId);       
        })
        .catch(error => {
            console.error({error})
        })
    }

    render(){

        const { name, id, modified} = this.props;
           
        return (
            <section className='Note'>
                <h2 className='Note_title'>
                        <Link to= {`/NotePage/${id}`}>
                            {name}
                        </Link>
                    </h2>
                    <div className='Note_delete'>
                        <button 
                            className='delete_btn' 
                            type='button'
                            onClick={this.onClickDeleteNote}
                        >
                        Delete Note
                        </button>
                    </div>
                    <div className='Note_modified_date'>
                        Date Modified on
                        {' '}
                        <span className='Date'>
                            {format(new Date(modified), 'MM/dd/yyyy')}
                        </span>
                    </div>
            </section>
        )
    }
}
    


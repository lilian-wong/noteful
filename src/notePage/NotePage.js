import React from 'react';
import { format } from 'date-fns';
import { useHistory } from 'react-router-dom';

export default function NotePage(props){
  let history = useHistory();
    return (
      <section className='Note'>
        <div>
            <button type='button' onClick={() => history.goBack()}>Go back</button>
        </div>
        <h2>{props.notes.name}</h2>
          <p>Modified Date: {format(new Date(props.notes.modified), 'MM/dd/yyyy')}</p>
          <p>{props.notes.content}</p>
      </section>
      
    );
}

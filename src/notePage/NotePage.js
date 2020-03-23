import React from 'react';
import {format} from 'date-fns';

export default function NotePage(props){
  console.log(props.notes);
    return (
      <section className='Note'>
        <h2>{props.notes.name}</h2>
          <p>Modified Date: {format(new Date(props.notes.modified), 'MM/dd/yyyy')}</p>
          <p>{props.notes.content}</p>
      </section>
    );
}

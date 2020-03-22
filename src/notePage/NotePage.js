import React from 'react';

export default function NotePage(props){
    return (
      <section className='Note'>
        <h2>{props.notes.id}</h2>
      </section>
    );
}

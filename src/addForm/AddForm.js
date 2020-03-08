import React from 'react';

export default function addForm(props){
    const {className, ...otherProps} = props
    return(
        <form   
            className={['add_form', className].join(' ')}
            action="#"
            {...otherProps}
        />
    ) 
}
import React from 'react';
import  NotefulContext  from '../NotefulContext';
import './AddNoteForm.css';

export default function AddNoteForm(props){    
       return(
              <NotefulContext.Consumer>
                {({ testing }) => (
                  <form>
                     
                  </form>
                    
                  
                )}
              </NotefulContext.Consumer>
          
            )
            
}

 


import React from 'react';
import '../StyleSheets/Book.css'

const Book = (props) => {


    return (
        <div className='book'>
            
           <h1  onClick={props.delete} style={{backgroundColor:'yellow', color:'black'}}> Book : {props.bookName} </h1>
           <h4> Writer : {props.writer} </h4>
           <button onClick={props.delete}>delete</button>
           
           <input type="text" onChange={props.inputName} />
          
         
           
            
        </div>
    );
};

export default Book;
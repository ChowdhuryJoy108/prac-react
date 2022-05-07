import React from 'react';
import '../StyleSheets/Book.css';

const Book = (props) => {
    console.log(props);
    return (
        <div className='book' onClick={props.selectedBookHandler}>
           <h1 style={{color:'black'}}> Book : {props.bookName} </h1>
           <h4> Writer : {props.writer} </h4>
           {/* <button onClick={props.delete}>delete</button>  */}
           {/* <input type="text" onChange={props.inputName} /> */}   
        </div>
    );
};

export default Book;
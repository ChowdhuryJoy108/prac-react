import React from 'react';
import Book from '../Book';

const BookList = (props) => {
    // console.log(props.delete)
    return (
        props.books.map((book,index) => {
            return(
              <Book bookName={book.bookName} 
              writer={book.writer}
              delete={()=>props.delete(index)} 
            //   inputName={(event)=>this.changeInputState(event,index)} 
            />
            );
      
           })
    );
}

export default BookList;
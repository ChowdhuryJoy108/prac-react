import React, {Component} from 'react';
import Book from '../Book';
import { Link } from 'react-router-dom'
// import {withRouter} from 'react-router-dom';
class BookList extends Component {
    // constructor(props){
    //   super(props);
    
    // } 
    render(){
      // console.log(this.props);
      return (
        this.props.books.map((book,index) => {
            return(
              <Link to={"/" + book.id} key={book.id} style={{textDecoration:'none', color:'black'}}>
              
              <Book bookName={book.bookName} 
              writer={book.writer}
              selectedBookHandler={() => this.props.selectedBookHandler(book.id)}
              // delete={()=>this.props.delete(index)} 

            //   inputName={(event)=>this.changeInputState(event,index)} 
            />
            </Link>
            );
         })
    );
    }
}
export default BookList;
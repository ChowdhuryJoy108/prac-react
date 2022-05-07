import React, {Component} from 'react'
import booklist from '../assets/booklist'; //fakedata
import BookList from './lists/BookList';
import NewBook from './representational/NewBook';
import { Routes, Route, NavLink } from 'react-router-dom' ;
import BookDetail from './representational/BookDetail';

// we have used { Routes Route } from react-router-dom then we will nested Route inside Routes
// we have used NavLink in place of anchor tag because we do not want page to reload again.

class Main extends Component{

    state = {
        books:booklist, // from assets folder 
        // showBooks: true,
        selectedBook:null
      }

      // delete 
      // deleteBookState = (index) =>{
      //   const books = [...this.state.books];
      //   books.splice(index,1);
      //   this.setState({
      //     books:books
      //   })
      // }

    //   changeInputState = ((index,event) =>{
    //     const book = {
    //       ...this.state.books[index]
    //     }
    //     book.bookName = event.target.value;
    //     const books = [...this.state.books];
    //     books[index]=book;
    //     this.setState({
    //       books:books
    //     })
    //   })

      //toggle code
      // toggleBooks = () => {
      //     this.setState({
      //       showBooks:!this.state.showBooks
      //     });
      // }

      selectedBookHandler = (bookId) =>{
        const book = this.state.books.filter(book =>
          book.id === bookId )[0];
        this.setState({
            selectedBook:book
        })
        
      }

      render(){
        
           const  books = <BookList 
           books={this.state.books} 
           selectedBookHandler={this.selectedBookHandler}
           />
          //  delete={this.deleteBookState} />


        return(
          <div className=''>
              <nav className='Nav-bar'>
               <ul>
                <li><NavLink to="/">Home </NavLink></li>
                <li><NavLink to="/new-book">New Book</NavLink></li>
              </ul>
             </nav>
            <Routes >
              <Route path="/" exact element={books} /> 
              {/* exact will check our link text accurately for example we have to write "/new-book" accurately,
              otherwise page will not be  found */}
              <Route path="/new-book" exact element={<NewBook />} /> 
              <Route path="/:id" exact element={<BookDetail book={this.state.selectedBook}/>} />
              
            </Routes>
            
            {/* <BookDetail book={this.state.selectedBook}/> */}

          
          </div>
        )
      }
}

export default Main
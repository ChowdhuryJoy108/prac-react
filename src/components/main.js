import React, {Component} from 'react'

import Change from './Change';
import booklist from '../assets/booklist';
import BookList from './lists/BookList';

class Main extends Component{

    state = {

        books:booklist, // from assets folder 
    
        showBooks: true
      }

      // delete 

      deleteBookState = (index) =>{
        const books = [...this.state.books];
        books.splice(index,1);
        this.setState({
          books:books
        })
      }
    


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
    
      toggleBooks = () => {
          this.setState({
            showBooks:!this.state.showBooks
          });
      }
    

    
      render(){
          
          let books = null;
          if(this.state.showBooks){
           
            books = <BookList books={this.state.books} 
            delete={this.deleteBookState} />
          }
         
    
        return(
          <div className=''>
            <h1>Book List</h1>
            <button onClick={this.toggleBooks}>Toggle Books</button>
            { books}
            <Change change={this.changeBookState} />
    
            
          </div>
    
        )
      }

}

export default Main
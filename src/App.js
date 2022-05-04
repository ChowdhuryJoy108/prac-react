import React, {Component} from 'react'
import './App.css';
import Book from './components/Book';
import Change from './components/Change';


class App extends Component{

  state = {

    books: [

           {
              id:1,
              bookName:'1984',
              writer:'George Orwell'
            },
            {
              id:2,
              bookName:'The Da Vinci Code',
              writer:'Dan Brown'
            },
      
            {
              id:3,
              bookName:'The Alchemis',
              writer:'Paulo Coelho'
            }
    ],

    showBooks: true
  }

//   changeBookState = () =>{
//     this.setState({
//       books: [

//         {
//            id:1,
//            bookName: 'Nineteen Eighty-Four',
//            writer: 'George Orwell',
//          },
//          {
//            id:2,
//            bookName:'The Da Vinci Code',
//            writer:'Dan Brown'
//          },
   
//          {
//            id:3,
//            bookName:'Metamorphosis',
//            writer:'Paulo Coelho'
//          }
//  ],
//     })
//   }



  deleteBookState = (index) =>{
    const books = [...this.state.books];
    books.splice(index,1);
    this.setState({
      books:books
    })
  }

  changeInputState = ((index,event) =>{
    const book = {
      ...this.state.books[index]
    }
    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index]=book;
    this.setState({
      books:books
    })
  })

  toggleBooks = () => {
      this.setState({
        showBooks:!this.state.showBooks
      });
  }


  render(){
      let books = null;
      if(this.state.showBooks){
       
        books = this.state.books.map((book,index) => {
        return(
          <Book bookName={book.bookName} 
          writer={book.writer}
          delete={()=>this.deleteBookState(index)} 
          inputName={(event)=>this.changeInputState(event,index)} />
        );
  
       });
      }
     

    return(
      <div className='App'>
        <h1>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        { books}
        <Change change={this.changeBookState} />

        
      </div>

    )
  }

}

export default App;

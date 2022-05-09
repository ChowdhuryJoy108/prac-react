import React, {Component,createRef} from "react";

class NewBook extends Component{
    constructor(props){
        super(props);
        this.bookName=createRef();
        this.writer=createRef();
        this.description=createRef();

        // this.state={
        //     bookName:'',
        //     writer:'',
        //     description:''
        // }

        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit = (e) =>{
        // console.log(this.state);
        console.log(this.bookName.current.value);
        console.log(this.writer.current.value);
        console.log(this.description.current.value);

        e.preventDefault();
        
    }

    // handleInputChange = e =>{
    //     const name = e.target.name;
    //     const value=e.target.value;

    //     this.setState({
    //         [name]:value
    //     })
    // }

   
    render(){

    return(
        <div>
            <h1>New Book Entry!</h1>
            <form action="" onSubmit={this.handleSubmit}>
                <label>Book Name: </label>
                <br />
                <input type="text" name="bookName" ref={this.bookName}  />
                <br />
                <label>Writer:</label>
                <br />
                <input type="text" name="writer" ref={this.writer} />
                <br />
                <label>Description: </label>
                <br />
                <textarea name="description"  cols="30" rows="10" ref={this.description} ></textarea>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
      )
  }
}
export default NewBook;
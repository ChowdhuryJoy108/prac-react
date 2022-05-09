import React, {Component} from "react";

class NewBook extends Component{
    constructor(props){
        super(props);

        // this.state={
        //     bookName:'',
        //     writer:'',
        //     description:''
        // }

        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit = (e) =>{
        console.log(this.state);
        e.preventDefault();
        
    }

    handleInputChange = e =>{
        const name = e.target.name;
        const value=e.target.value;

        this.setState({
            [name]:value
        })
    }

   
    render(){

    return(
        <div>
            <h1>New Book Entry!</h1>
            <form action="" onSubmit={this.handleSubmit}>
                <label>Book Name: </label>
                <br />
                <input type="text" name="bookName" value={this.state.bookName} onChange={(e) => this.handleInputChange(e)} />
                <br />
                <label>Writer:</label>
                <br />
                <input type="text" name="writer" value={this.state.writer} onChange={(e) => this.handleInputChange(e)}/>
                <br />
                <label>Description: </label>
                <br />
                <textarea name="description"  cols="30" rows="10" value={this.state.description} onChange={(e) => this.handleInputChange(e)}></textarea>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
      )
  }
}
export default NewBook;
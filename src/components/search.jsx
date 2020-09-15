import React, {Component} from "react";


class Search extends Component {
    constructor(props){
        super(props);
        this.state= {
            input : ""
        };
        this.handleInputdata = this.handleInputdata.bind(this); // or use arrow function
    }
    handleInputdata(event){
         console.log(event.target.value);
         this.setState({input : event.target.value});
    };

    handleFormdata = (event)=>{
        event.preventDefault();
        this.props.action(this.state.input);
    }
    render(){
        return(
            <>
            <div className="row" style = {{"marginTop" : "20px"}}>
              <div className = "col-md-8">
              <form onSubmit={this.handleFormdata}>
              <div className="form-group">
                
                <input type="text"  className="form-control" placeholder="search here" 
                onChange = {this.handleInputdata}
                />
                {this.state.input}
              </div>
              </form>
              </div>
            </div>
            </>
        )
    }
}

export default Search;
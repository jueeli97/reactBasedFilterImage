import React, {Component} from "react";
import Search from "./components/search"
import axios from "axios";
import Showimage from "./components/showimage";
class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            inputdata : "",
            data : [],
            loading : null
        };
    }
            Fetchinputdata = async(data)=>{
              let {inputdata} = this.state;
            this.setState({loading : true});
            this.setState({inputdata : data});
            
            let response = await axios
            .get(`https://pixabay.com/api/?key=17519298-c1f91944af0a6f87ee78815f5&q=yellow+{${inputdata}}&image_type=photo&pretty=true`) 
            console.log(response.data.hits);

            setTimeout(() => {
                this.setState({loading : false});
                this.setState({data : response.data.hits})
            }, 2000);
            
        };
        


    render() {
        return (<div className = "container">
        <Search action={this.Fetchinputdata}/>
        {this.state.inputdata}
         { this.state.loading ? "LOADING" : <Showimage d={this.state.data} />}
        </div>
        )
    }
}

export default App;
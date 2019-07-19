import React,{Component} from "react";
import { render } from "react-dom";
class Logo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="logo-div">
                {/*<img className="logo-img" src={this.props.src} />*/}
                <a className="logo-a" href="./index.html" >AUI Demo</a>
            </div>
        );
    }
}
export default Logo;
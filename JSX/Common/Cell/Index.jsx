import React,{Component} from "react";
import { render } from "react-dom";
class Cell extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="cell-div">
                <h4>{this.props.item.name}</h4>
                <span>{this.props.item.description}</span>
            </div>
        );
    }
}
export default Cell;
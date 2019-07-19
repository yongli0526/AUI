import React,{Component} from "react";
import { render } from "react-dom";
require('./cell.css');
const events=[
    "handleCellClick"
];
class Cell extends Component{
    constructor(props){
        super(props);
        events.map(item => this[item] = this[item].bind(this));
    }
    handleCellClick(){
        this.props.itemOnClick(this.props.item);
    }
    render(){
        return(
            <div className="cell-div" title={this.props.item.name} onClick={this.handleCellClick}>
                <div className="cell-name">{this.props.item.name}</div>
                <span className="cell-description">{this.props.item.description}</span>
                <span className="cell-author">{this.props.item.author}</span>
                <div className="cell-icon-div">
                    <div className="cell-icon">
                        <strong>{this.props.item.name.substring(0,1)}</strong>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cell;
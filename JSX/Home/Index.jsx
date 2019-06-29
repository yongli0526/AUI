import React,{Component} from "react";
import { render } from "react-dom";
import Cell from "../Common/Cell/Index";
import {components} from "../Common/ComponentName";
const events = [
    "cellOnClick"
]
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            cellItems:[]
        }
        events.map(item => this[item] = this[item].bind(this));
    }
    componentDidMount(){
        for( let key in components){
            this.state.cellItems.push(components[key]);
        }
        this.setState({});
    }
    cellOnClick(item){

    }
    render(){
        return(
            <div>
                {
                    this.state.cellItems.map(item => 
                        <Cell item={item} itemOnClick={this.cellOnClick}/>
                    )
                }
            </div>
        );
    }
}
export default Home;
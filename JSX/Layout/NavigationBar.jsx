import React,{Component} from "react";
import { render } from "react-dom";
const events = [
    "selectModuleChanged"
];
class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
        events.map(item => this[item] = this[item].bind(this));
    }
    selectModuleChanged(name, e){
        let buttons = document.getElementsByClassName("nb-button");
        for(let i = 0;i < buttons.length;i++){
            buttons[i].classList.remove("nb-button-selected");
        }
        e.target.classList.add("nb-button-selected");
        this.props.selectModuleChanged(name);
    }
    render(){
        return(
            <div className={this.props.className + " nb-style"}>
            {
                this.props.moduleList.map((item,index)=>
                    <div className="display-flex">
                        {
                            index != 0 &&
                            <div className="nb-cut-line margin-left-10 margin-right-10">|</div>
                        }
                        <button className="nb-button" onClick={this.selectModuleChanged.bind(this,item)}>{item}</button>
                    </div>
                )
            }
            </div>
        );
    }
}
export default NavigationBar;
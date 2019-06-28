import React,{Component} from "react";
import { render } from "react-dom";
const events = [
    "selectModuleChanged",
    "reFlushNB"
];
class NavigationBar extends Component{
    constructor(props){
        super(props);
        events.map(item => this[item] = this[item].bind(this));
    }
    reFlushNB(name){
        this.buttonChange(name);
    }
    selectModuleChanged(name, e){
        this.buttonChange(name, e);
        this.props.selectModuleChanged(name);
    }
    buttonChange(name, e){
        let buttons = document.getElementsByClassName("nb-button");
        for(let i = 0;i < buttons.length;i++){
            buttons[i].classList.remove("nb-button-selected");
        }
        if(e)
            e.target.classList.add("nb-button-selected");
        else{
            let str = name.toLowerCase();
            document.getElementById("nb-buttom-" + str).classList.add("nb-button-selected");
        }
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
                        <button id={"nb-buttom-" + item.toLowerCase()} className="nb-button" onClick={this.selectModuleChanged.bind(this,item)}>{item}</button>
                    </div>
                )
            }
            </div>
        );
    }
}
export default NavigationBar;
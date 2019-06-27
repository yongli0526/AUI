import React,{Component} from "react";
import { render } from "react-dom";
import {withRouter} from "react-router-dom";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";
const events = [
    "selectModuleChanged"
];
class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            logoSrc:"Images/logo.png",
            moduleList:["Home","Components","About"]
        }
        events.map(item => this[item] = this[item].bind(this));
    }
    selectModuleChanged(moduleName){
        console.log(moduleName);
    }
    render(){
        return(
            <div className="main-div">
                <div className="layout-header">
                    <Logo src={this.state.logoSrc}/>
                    <NavigationBar 
                        className="nb"
                        moduleList={this.state.moduleList}
                        selectModuleChanged={this.selectModuleChanged}
                    />
                </div>

                <div className="layout-body">
                
                </div>

                <div className="layout-footer">
                    <span className="copy-right">Copyright&copy; 2019 Li Yong</span>
                </div>
            </div>
        );
    }
}
export default withRouter(Layout);
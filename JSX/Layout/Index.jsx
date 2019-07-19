import React,{Component} from "react";
import { render } from "react-dom";
import {withRouter} from "react-router-dom";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";
import Router from "../Router/Router";
import { modules } from "../Common/ModuleName";
import BreadCrumb from "../Components/BreadCrumb/Index";
const events = [
    "selectModuleChanged",
    "setBreadCrumb",
];
class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            logoSrc:"Images/logo.png",
            moduleList:[],
            showBreadCrumb: false,
            breadCrumb: [],
        }
        for(let key in modules){
            this.state.moduleList.push(modules[key]);
        }
        this.nbRef = React.createRef();
        events.map(item => this[item] = this[item].bind(this));
        window.commonUtil = {
            setBreadCrumb : this.setBreadCrumb
        };
    }
    componentDidMount(){
        this.reFlushNB();
    }
    componentWillReceiveProps(){
        this.reFlushNB();
    }
    reFlushNB(){
        let array = window.location.href.trim().split("/");
        let str = "";
        for(let i = 0;i < array.length;i++){
            str = this.getModule(array[i]);
            if(str != "")
                break;
        }
        str == "" ? this.nbRef.current.reFlushNB(modules.home) : this.nbRef.current.reFlushNB(str);
    }
    selectModuleChanged(moduleName){
        this.props.history.push("/" + moduleName);
    }
    getModule(str){
        switch(str.toLowerCase()){
            case modules.home.toLowerCase():
                str = modules.home;
                break;
            case modules.about.toLowerCase():
                str = modules.about;
                break;
            default:
                str = "";
                 break;
        }
        return str;
    }
    setBreadCrumb(breadCrumb){
        if(breadCrumb.length > 0){
            this.state.showBreadCrumb = true;
            this.state.breadCrumb = breadCrumb;
        }
        else
            this.state.showBreadCrumb = false;
        this.setState({});
    }
    render(){
        return(
            <div className="main-div">
                <div className="layout-header">
                    <Logo src={this.state.logoSrc}/>
                    <NavigationBar 
                        className="nb"
                        ref={this.nbRef}
                        moduleList={this.state.moduleList}
                        selectModuleChanged={this.selectModuleChanged}
                    />
                </div>

                <div className="layout-body">
                    {
                        this.state.showBreadCrumb && 
                        <BreadCrumb breadCrumb={this.state.breadCrumb}/>
                    }
                    <Router />
                </div>

                <div className="layout-footer">
                    <span style={{display:'none'}} className="copy-right">Copyright&copy; 2019 Li Yong</span>
                </div>
            </div>
        );
    }
}
export default withRouter(Layout);
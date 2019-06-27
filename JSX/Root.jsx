import React,{Component} from "react";
import { render} from "react-dom";
import {HashRouter} from "react-router-dom";
import Layout from "./Layout/Index";
class Root extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <HashRouter>
                <Layout />
            </HashRouter>);
    }
}
export default Root;

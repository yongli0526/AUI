import React,{Component} from "react";
import { render } from "react-dom";
import {Switch,Route} from "react-router-dom";
import Home from "../Index";
import BreadCrumb from "../BreadCrumb/Index";
import Layout from "../Layout/Index";
class HomeRouter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Layout>
                <Switch>
                   <Route path='/home/breadcrumb' component={BreadCrumb}/>
                   <Route path='/' component={Home}/>
                </Switch>
            </Layout>
        );
    }
}
export default HomeRouter;
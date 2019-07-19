import React,{Component} from "react";
import { render } from "react-dom";
import {Switch,Route} from "react-router-dom";
import HomeRouter from "../Home/HomeRouter/HomeRouter";
import About from "../About/Index";
class Router extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/" component={HomeRouter} />
            </Switch>
        );
    }
}
export default Router;
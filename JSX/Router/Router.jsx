import React,{Component} from "react";
import { render } from "react-dom";
import {Switch,Route} from "react-router-dom";
import Home from "../Home/Index";
import About from "../About/Index";
class Router extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}
export default Router;
import React,{Component} from "react";
import { render } from "react-dom";
import LeftNavMenu from "../../Components/LeftNavMenu/Index";
class Layout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <LeftNavMenu />
                {
                   this.props.children
                }
            </div>
        );
    }
}
export default Layout;
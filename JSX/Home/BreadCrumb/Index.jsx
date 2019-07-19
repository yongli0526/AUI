import React,{Component} from "react";
import { render } from "react-dom";
class BreadCrump extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let breadCrumb = [{name:"bbbb",url:"mmm"}];
        window.commonUtil.setBreadCrumb(breadCrumb);
    }
    render(){
        return(
            <div>
                1
            </div>
        );
    }
}
export default BreadCrump;
import React,{Component} from "react";
import wrapAnimation from "../../common/wrapAnimation";
 class List extends Component{
    render() {
        return(
            <div className="wrap-box">
                <p>list</p>
            </div>
        )
    }
}
export default wrapAnimation(List)

import React,{Component} from "react";
import wrapAnimation from "../../common/wrapAnimation";
class Add extends Component{
    render() {
        return(
            <div className="wrap-box">
                <p>add</p>
            </div>
        )
    }
}

export default wrapAnimation(Add);

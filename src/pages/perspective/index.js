import React,{Component} from "react";
import "./index.less";
class perspective extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="page-wrap">
                <div className="box-wrap">
                    <ul className="sides">
                        <li className="back">back</li>
                        <li className="left">left</li>
                        <li className="right">right</li>
                        <li className="top">top</li>
                        <li className="bottom">bottom</li>
                        <li className="front">front</li>
                    </ul>
                </div>

                <div>
                    <div className="con">
                        <div className="title">transform-origin:</div>
                        <ul className="options">
                            <li><label htmlFor="to1">50% 50%</label></li>
                            <li><label htmlFor="to2">50% 0</label></li>
                            <li><label htmlFor="to3">0 0</label></li>
                            <li><label htmlFor="to4">left bottom</label></li>
                            <li><label htmlFor="to5">50% 50% -25px</label></li>
                            <li><label htmlFor="bvh">+ backface-visibility:hidden</label></li>
                        </ul>
                        <input className="i i1" id="to1" type="radio" name="to" value="1" />
                        <input className="i i2" id="to2" type="radio" name="to" value="2" />
                        <input className="i i3" id="to3" type="radio" name="to" value="3" />
                        <input className="i i4" id="to4" type="radio" name="to" value="4" />
                        <input className="i i5" id="to5" type="radio" name="to" value="5" />
                        <input className="i i6" id="bvh" type="checkbox" name="bvh" value="1" />
                        <div className="scene">
                            <div className="cube">
                                <div className="side">SIDE</div>
                            </div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export  default perspective;

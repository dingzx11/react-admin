import React, {Component} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./index.less"

export default class transitionGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            num: 0,
            showTwo: false,
            go: false,
            groupList: [
                {id: 1, name: "a", in: false},
                {id: 2, name: "b", in: false},
                {id: 3, name: "c", in: false},
                {id: 4, name: "d", in: false},
                {id: 5, name: "e", in: false}
            ]
        }
    }


    onToggle = () => this.setState({show: !this.state.show});

    onToggle2 = () => this.setState({num: (this.state.num + 1) % 2});
    onToggle3 = () => {
        this.setState({showTwo: !this.state.showTwo});
    };
    onGo = () => {
        let arr = this.state.groupList;
        let n = this.state.go ? arr.length - 1 : 0;
        let timer = "";
        clearInterval(timer);
        timer = setInterval(t => {
            arr[n].in = !arr[n].in;
            this.setState({
                groupList: arr
            });
            if (this.state.go) {
                if( n === 0){
                    clearInterval(timer);
                    this.setState({
                        go: false
                    });
                }
                n--;
            } else {
                if( n === arr.length - 1 ){
                    clearInterval(timer);
                    this.setState({
                        go: true
                    });
                }
                n++;
            }
        }, 80);

    };

    render() {
        const {show} = this.state;
        return (
            <div className={'container'}>
                <div className={'square-wrapper'}>
                    <CSSTransition
                        in={show}
                        timeout={300}
                        classNames={'fade'}
                        unmountOnExit={true}
                    >
                        <div className={'square'}/>
                    </CSSTransition>
                </div>
                <button onClick={this.onToggle}>toggle</button>
                <TransitionGroup className={'square-wrapper-2'}>
                    <CSSTransition
                        key={this.state.num}
                        timeout={500}
                        classNames={'fade-2'}
                    >
                        <div className={'square-2'}>{this.state.num}</div>
                    </CSSTransition>
                </TransitionGroup>
                <button onClick={this.onToggle2}>toggle</button>


                <div className="switch-in-leave">
                    <button onClick={this.onToggle3}>切换</button>
                    <CSSTransition
                        in={this.state.showTwo}
                        timeout={500}
                        classNames={'fade-i'}
                        unmountOnExit={true}
                    >
                        <div className="switch-item"></div>
                    </CSSTransition>
                </div>


                <div className="box">
                    <button onClick={this.onGo.bind(this)}>GO</button>
                    {this.state.groupList.map((item) => (
                        <CSSTransition
                            key={item.id}
                            in={item.in}
                            timeout={500}
                            classNames={'slide'}
                            unmountOnExit={true}
                        >
                            <li className="box-item">{item.name}</li>
                        </CSSTransition>
                    ))}
                </div>

            </div>
        );
    }
}

import React, {Component} from "react";
import {CSSTransition} from "react-transition-group";
import "./wrapAnimation.css";

function wrapAnimation(WrappedComponent) {
    return class extends Component {
        render() {
            return (
                <CSSTransition
                    in={this.props.match !== null}
                    classNames={'page-fade'}
                    timeout={500}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <WrappedComponent {...this.props} />
                </CSSTransition>
            )
        }
    }
}

export  default wrapAnimation

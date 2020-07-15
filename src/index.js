import React,{Component} from "react";
import ReactDom from "react-dom";
import "@/assets/styles/base.css";
import "@/assets/styles/page.less";
import AppRouter from "./router";
import {Provider} from "mobx-react";
import store from "./store";
class App extends Component {
    render() {
        return(
            <div className="page-wrap">
                <Provider {...store}>
                    <AppRouter />
                </Provider>
            </div>
        )
    }
}

ReactDom.render(<App />,document.getElementById("app"));

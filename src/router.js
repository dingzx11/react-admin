import React, {Component} from "react";
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";
import {TransitionGroup} from "react-transition-group";

/*import Home from "@/pages/home";
import Blog from "@/pages/blog";
import Resume from "@/pages/resume";
import User from "@/pages/user";
import TransitionGroup from "@/pages/transition"*/

//分开打包
import LoadableComponent from "./config/loadable";

const Home = LoadableComponent(() => import("@/pages/home"))
const Blog = LoadableComponent(() => import("@/pages/blog"))
const Resume = LoadableComponent(() => import("@/pages/resume"))
const User = LoadableComponent(() => import("@/pages/user"))
const TransitionGroupPage = LoadableComponent(() => import("@/pages/transition"))
const Perspective =LoadableComponent(c=>import("@/pages/perspective"))


class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <ul className="page-menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/resume">resume</Link>
                    </li>
                    <li>
                        <Link to="/user">user</Link>
                    </li>
                    <li>
                        <Link to="/transition">transition</Link>
                    </li>
                    <li>
                        <Link to="/perspective">perspective</Link>
                    </li>
                </ul>
                <div className="page-main">
                    <TransitionGroup>
                        <Switch>
                            {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
                            <Route path="/" exact component={Home}/>
                            <Route path="/blog" component={Blog}/>
                            <Route exact path="/resume" component={Resume}/>
                            <Route exact path="/user" component={User}/>
                            <Route exact path="/transition" component={TransitionGroupPage}/>
                            <Route exact path="/perspective" component={Perspective}/>
                        </Switch>
                    </TransitionGroup>
                </div>
            </BrowserRouter>
        )
    }
}


export default AppRouter;

import React,{Component} from "react";
import AddPage from "./add";
import ListPage from "./list";
import {Route, Link} from "react-router-dom";
import {TransitionGroup} from "react-transition-group";
 class Blog extends Component{
    render() {
        return(
            <div>
                <p>blog</p>
                <Link to="/blog/add">AddPage</Link>
                <Link to="/blog/list">ListPage</Link>
                <div>
                    <TransitionGroup>
                        <Route path="/blog/add"  component={AddPage}/>
                        <Route path="/blog/list" component={ListPage} />
                    </TransitionGroup>
                </div>
            </div>
        )
    }
}


export default Blog;

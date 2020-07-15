import React,{Component} from "react";
import {inject,observer} from "mobx-react";
import wrapAnimation from "../../common/wrapAnimation";
@inject("UserListStore")

@observer //双向绑定
 class User extends Component{
    componentDidMount(){
        const {UserListStore} = this.props;
    }
    setName(){
        const {UserListStore} = this.props;
        let val=this.refs.username.value;
        UserListStore.setName(val);
    }
    render() {
        const {UserListStore} =this.props;
        return(
            <div>
                <p>User</p>
                <input type="text" ref='username'/>
                <button onClick={this.setName.bind(this)}>修改</button>
                <p>name: {UserListStore.name}</p>
            </div>
        )
    }
}
export default wrapAnimation(User);

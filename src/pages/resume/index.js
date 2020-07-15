import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import http from "../../config/http";
import "./index.less";
import wrapAnimation from "../../common/wrapAnimation";
@inject("UserListStore")
class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {
                albums: []
            }
        };
    }

    getData() {
        http.post("/api/top/album", {offset: 0, limit: 10}).then(res => {
            this.setState({
                list: res,
                name: "dingzx"
            });
        })
    }

    render() {
        const {UserListStore} = this.props;
        return (
            <div>
                <p className="page-title">Resume</p>
                <p>UserListStore: {UserListStore.name}</p>
                <button onClick={this.getData.bind(this)}>获取数据</button>
                <ul className="song-list">

                    {
                        this.state.list.albums.map((item, index) => {
                            return (
                                <li className="list-item" key={index}>
                                    <img src={item.picUrl} alt=""/>
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.company}</p>
                                        <p>{item.subType}</p>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}
export default wrapAnimation(Resume)

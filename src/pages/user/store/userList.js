import {observable,action} from "mobx";
class UserListStore {
    @observable name;
    constructor() {
        this.name="my name is user list;"
    }
    @action setName=(data)=>{
        this.name=data;
    }
}

export default new UserListStore();

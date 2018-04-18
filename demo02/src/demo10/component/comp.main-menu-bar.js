import React,{Component} from "react";
import MenuItem from "./comp.main-menu-item";
import Util from './../common/util';

class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuList: [
                {title:"首页",path:"/"},
                {title:"关于",path:"/about"},
                {title:"产品",path:"/product"},
            ],
        }
    }

    componentDidMount() {

    }

    render() {
        const {menuList} = this.state;
        return (
            <div>
                {menuList.map((item, index) => <MenuItem key={`main-menu-item-${index}`} title={item.title} path={item.path}/>)}
            </div>
        );
    }
}


export default MenuBar;

import React,{Component} from "react";
import MenuBar from "./../component/comp.menu-bar";

class NormalLayout extends Component {
    render(){
        return (
            <div>
                <h1 className={"title"}>首页-API通讯</h1>
                <MenuBar/>
                <div className={"content"}>
                    {this.children}
                </div>
            </div>
        );
    }
}

export default NormalLayout;

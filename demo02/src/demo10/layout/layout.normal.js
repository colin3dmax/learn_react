import React,{Component} from "react";

class NormalLayout extends Component {
    render(){
        return (
            <div>
                <h1 className={"title"}>{this.props.title}</h1>
                <div className={"content"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default NormalLayout;

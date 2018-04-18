import ReactDOM from 'react-dom';
import React,{Component} from 'react';

/**
 * 组件化的第一步
 */
class PageIndex extends Component {
    render(){
        return (<div>Hello ABC</div>);
    }
}

ReactDOM.render(
    <PageIndex/>,
    document.getElementById("root")
);


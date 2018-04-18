import ReactDOM from 'react-dom';
import React, {Component} from 'react';

/**
 * 组件的嵌套使用
 *
 * state组件内数据状态维护者
 *
 * componentWillMount
 * componentDidMount
 * componentWillUnmount
 */
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:1,
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.timer = setInterval(()=>{
            this.setState({
                count:this.state.count+1
            });
            console.log(this.state.count);
        },1000)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        const {count} = this.state;
        return (<div>{count}</div>);
    }
}

class PageIndex extends Component {
    render() {
        return (<Counter/>);
    }
}


class PageTwoCount extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <Counter/>
            </div>
        );
    }
}


ReactDOM.render(
    <PageIndex/>,
    document.getElementById("root")
);

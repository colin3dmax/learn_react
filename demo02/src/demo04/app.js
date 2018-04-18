import ReactDOM from 'react-dom';
import React, {Component} from 'react';

/**
 * 组件的功能扩展
 *
 * props 组件之间沟通的通讯员
 * 每个Counter都可以有不一样的一生
 *
 */
class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count:props.start,
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
        return (
            <div>
                <h1>每个Counter都有不同的一生</h1>
                <Counter start={1}/>
                <Counter start={10}/>
                <Counter start={25}/>
            </div>
        );
    }
}


ReactDOM.render(
    <PageIndex/>,
    document.getElementById("root")
);

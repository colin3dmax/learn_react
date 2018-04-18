import ReactDOM from 'react-dom';
import React, {Component} from 'react';

/**
 * 组件的功能扩展
 *
 * props 组件之间沟通的通讯员
 *
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
        const {start} = this.props;
        return (<div>{start}</div>);
    }
}

class PageIndex extends Component {
    render() {
        return (<Counter start={8}/>);
    }
}


ReactDOM.render(
    <PageIndex/>,
    document.getElementById("root")
);

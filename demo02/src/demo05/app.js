import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import css from './app.css';
/**
 * 组件中的CSS
 * 美丽的外衣
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
        return (<div className={"counter"}>{count}</div>);
    }
}

class PageIndex extends Component {
    render() {
        return (
            <div>
                <h1 className={"title"}>美丽的外衣</h1>
                <Counter start={1}/>
            </div>
        );
    }
}


ReactDOM.render(
    <PageIndex/>,
    document.getElementById("root")
);

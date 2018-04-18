import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import css from './app.css';

/**
 * 组件中的CSS-2
 * 七彩的Counter
 */
class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.start,
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
            console.log(this.state.count);
        }, 1000)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        const {count} = this.state;
        const {color} = this.props;
        return (
            <div
                className={"counter"}
                style={{
                    borderColor: color,
                    color: color,
                }}
            >
                {count}
            </div>
        );
    }
}

class PageIndex extends Component {
    render() {
        return (
            <div>
                <h1 className={"title"}>七彩的Counter</h1>
                <Counter start={10} color={"red"}/>
                <Counter start={20} color={"orange"}/>
                <Counter start={30} color={"yellow"}/>
                <Counter start={40} color={"green"}/>
                <Counter start={50} color={"cyan"}/>
                <Counter start={60} color={"blue"}/>
                <Counter start={70} color={"purple"}/>
            </div>
        );
    }
}


ReactDOM.render(
    <PageIndex/>,
    document.getElementById("root")
);

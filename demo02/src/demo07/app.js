import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import css from './app.less';

/**
 * 组件样式的less/sass化
 * Counter的主题化
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
                <Counter start={10}/>
            </div>
        );
    }
}


ReactDOM.render(
    <PageIndex/>,
    document.getElementById("root")
);

import React, {Component} from 'react';

/**
 * MenuItem
 */
class MenuItem extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        const {count} = this.state;
        return (
            <div
                className={"menu-item"}
            >
                {this.props.title}
            </div>
        );
    }
}


export default MenuItem;

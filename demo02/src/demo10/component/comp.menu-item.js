import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

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
            <Link className={"menu-item"} to={`/product/${this.props.id}`}>{this.props.title}</Link>
        );
    }
}


export default MenuItem;

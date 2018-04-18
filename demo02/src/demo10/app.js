import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import css from './app.less';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import MainMenuBar from "./component/comp.main-menu-bar";
import PageHome from './pages/page.home';
import PageAbout from './pages/page.about';
import PageProduct from './pages/page.product';

/**
 * React Router 组织单页面应用
 */

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <MainMenuBar/>
                    <Route exact path="/" component={PageHome}/>
                    <Route path="/about" component={PageAbout}/>
                    <Route exact path="/product" component={PageProduct}/>
                    <Route path="/product/:productId" component={PageProduct}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

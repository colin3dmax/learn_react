import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import css from './app.less';

import PageHome from './pages/page.home';

/**
 * 页面的重新组织
 * 用 import 和 export 连接模块
 */

ReactDOM.render(
    <PageHome/>,
    document.getElementById("root")
);

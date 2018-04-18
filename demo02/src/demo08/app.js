import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import css from './app.less';

/**
 * 组件联网
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

class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading:false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.fetchDataFromServer();
        }, 2000)
    }

    fetchDataFromServer() {
        console.log("fetchDataFromServer---->start");
        this.setState({
            loading:true,
        })
        fetch("https://webapi.51taouk.com/api/content/GetHomePageContents", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'text/plain',
                Host: "webapi.51taouk.com",
                wbhost: "51taouk.com",
            },
            method: 'POST',
            mode: 'cors'
        }).then(resp => resp.json()).then((json) => {

            console.log("fetchDataFromServer---->get", json);
            setTimeout(()=>{
                this.setState({
                    data: json,
                    loading:false,
                });
            },2000);

        });
    }

    genMenuUI(){
        const {data} = this.state;
        console.log("render:", data);
        if (!data.hasOwnProperty("listHomeCategory")) {
            return (
                <div>暂时没有任何数据！</div>
            );
        } else {
            return (
                <div>
                    { data.listHomeCategory.map((item, index) => <MenuItem key={`menu-item-${index}`} title={item.Name}/>) }
                </div>
            );
        }
    }

    render() {
        const {loading} = this.state;
        if(loading){
            return ("数据加载中...")
        }else{
            return this.genMenuUI();
        }

    }
}


class PageHome extends Component {
    render(){
        return (
            <div>
                <h1 className={"title"}>首页-API通讯</h1>
                <MenuBar/>
            </div>
        );
    }
}


ReactDOM.render(
    <PageHome/>,
    document.getElementById("root")
);

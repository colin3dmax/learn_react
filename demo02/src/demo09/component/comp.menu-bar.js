import React,{Component} from "react";
import MenuItem from "./comp.menu-item";
import Util from './../common/util';

class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: false,
        }
    }

    componentDidMount() {
        this.fetchDataFromServer();
    }

    fetchDataFromServer() {
        console.log("fetchDataFromServer---->start");
        this.setState({
            loading: true,
        });
        Util.fetchApi("https://webapi.51taouk.com/api/content/GetHomePageContents", {}).then((json) => {
            console.log("fetchDataFromServer---->get", json);
            this.setState({
                data: json,
                loading: false,
            });
        });
    }

    genMenuUI() {
        const {data} = this.state;
        console.log("render:", data);
        if (!data.hasOwnProperty("listHomeCategory")) {
            return (
                <div>暂时没有任何数据！</div>
            );
        } else {
            return (
                <div>
                    {data.listHomeCategory.map((item, index) => <MenuItem key={`menu-item-${index}`} title={item.Name}/>)}
                </div>
            );
        }
    }

    render() {
        const {loading} = this.state;
        if (loading) {
            return ("数据加载中...")
        } else {
            return this.genMenuUI();
        }

    }
}


export default MenuBar;

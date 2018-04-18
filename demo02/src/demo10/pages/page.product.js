import React,{Component} from "react";
import Layout from "./../layout/layout.normal";

import MenuBar from "./../component/comp.menu-bar";

class PageProduct extends Component {
    constructor(props){
        super(props);
        console.log("PageProduct-->",props);

    }
    render(){
        console.log("product-render:",this.props);
        const {productId} = this.props.match.params;
        return (
            <Layout title={"Page Product"}>
                <MenuBar/>
                {productId && <h2>ProductId:{productId}</h2>}
            </Layout>
        );
    }
}

export default PageProduct;

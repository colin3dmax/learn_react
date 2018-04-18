import React,{Component} from "react";

const Util = {
    fetchApi:function(url,data){
        const options = Object.assign({
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'text/plain',
                Host: "webapi.51taouk.com",
                wbhost: "51taouk.com",
            },
            method: 'POST',
            mode: 'cors'
        },data);
        return fetch("https://webapi.51taouk.com/api/content/GetHomePageContents", options).then(resp => resp.json());
    }
}
export default Util;

const path = require('path');

module.exports = {
    entry: './src/demo10/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            //配置js支持es6->es5 ,支持jsx语法转换
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react']
                    }
                }
            },
            //配置支持载入css
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            //配置支持less
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
        ]
    }
};

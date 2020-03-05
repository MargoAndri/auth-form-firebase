const path = require(`path`);
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: 'eval',
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};

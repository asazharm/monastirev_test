const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                type: 'asset/resource'
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
            },
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",

                    },
                    {
                        loader: "sass-loader"
                    }

                ]
            },
            {
                test: /\.(css)$/,
                exclude: /nodemodules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
            ]
    }
}
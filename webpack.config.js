module.exports = {
    entry: __dirname + '/JSX/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        rules: [{
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: "[name].[ext]",
                        mimetype: 'image/png',
                        outputPath: 'images/'
                    },
                }
            ]
        },{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    resolve: {
        modules: ["./node_modules"],
        extensions: [".js", ".json", ".jsx", ".css"]
    }
}

const path = require('path');

const { ModuleFilenameHelpers } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css',
            }),
        ],
        mode: env.production ? 'production' : 'development',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node-modules/
            }, {
                use: [MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    options: { sourceMap: true }
                }, {
                    loader: "sass-loader",
                    options: { sourceMap: true }
                }],
                test: /\.s?css$/
            }]
        },
        devtool: env.production ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};
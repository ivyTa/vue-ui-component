const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        'index' : './src/index.js',
        'eledemo':'./demo-ele/demo.js',
        'ljdemo':'./demo-lj/demo.js',
        'README':'./README.js',
    },
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
           {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader?-url!postcss-loader?',
                            loader: 'vue-style-loader'
                        }),
                        scss: 'style-loader!css-loader!postcss-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {test: /\.scss$/,   loader: ExtractTextPlugin.extract({
                use:'style-loader',
                use:'css-loader?-url!postcss-loader!sass-loader?'
            })},
            {test: /\.css/,   loader: ExtractTextPlugin.extract({
                use:'style-loader',
                use:'css-loader?-url!postcss-loader?'
            })},
            { test: /\.(png|woff|woff2|eot|ttf|gif|svg)$/, loader: 'url-loader?limit=100000' },
        ]
    },
    //devtool: 'cheap-source-map',
    // resolve: {
    //     modules: [path.resolve(__dirname, "target/ROOT/static/js"),
    //         path.resolve(__dirname, "src/main/webapp/"),"node_modules"]
    // },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer({
            browsers: [
                'last 3 versions',
                'ie >= 10',
                'ie_mob >= 10',
                'ff >= 30',
                'chrome >= 34',
                'safari >= 6',
                'opera >= 12.1',
                'ios >= 6',
                'android >= 4.4',
                'bb >= 10',
                'and_uc 9.9',
            ]}) ] } }),
        new ExtractTextPlugin('[name].min.css')
    ],
};

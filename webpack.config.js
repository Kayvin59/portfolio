/* eslint-disable */
'use strict';

const webpack = require('webpack');
const path = require('path');   // Webpack uses this to work with directories
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

    // Path to your entry point. From this file Webpack will begin his work
    entry: ["./src/js/index.js", "./src/scss/style.scss"],

    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'scripts.min.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.js$/,
                /* ... */
            },
            {
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,
        
                // Set loaders to transform files.
                // Loaders are applying from right to left(!)
                // The first loader will be applied after others
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    }, 
                    {
                        loader: 'sass-loader',
                    }
                ]
                
            },
            {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        // Using file-loader for these files
                        loader: "file-loader",
        
                        // In options we can set different things like format
                        // and directory to save
                        options: {
                            outputPath: 'img'
                        }
                    }
                ]
            },
            {
                // Apply rule for fonts files
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        // Using file-loader too
                        loader: "file-loader",
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: "./public/style.css"
        }),
        new UglifyJSPlugin(),
        new OptimizeCSSAssets(),
        new BrowserSyncPlugin({ //the first object is the BrowserSync configuration
            browser: "chrome", // Open the site in Chrome
            host: 'localhost', // host of browsersync local server
            open: 'local', // Decide which URL to open automatically when Browsersync starts. 
            port: 3000, // port of browsersync local server
            watch: true, // default watch configuration, look at 'files' parameters for more customization
            files: ["src/scss/style.scss", "src/js/*.js"],
            proxy: "localhost:8080", // Proxy an EXISTING vhost. Browsersync will wrap your vhost with a proxy URL to view your site.
        },
        {
            injectCss: true,
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript 
    // minifying and other thing so let's set mode to development
    mode: 'development'
};
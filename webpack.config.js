const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/app.js',
    output: {
        filename: 'script.js',
        path: path.resolve(path.resolve(), 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

const environment = {
    development: {
        APP_API: 'https://localhost:8081',
    },
    production: {
        APP_API: 'https://antp.link:8080',
    },
};

module.exports = (_, argv) => {
    const mode = argv.mode || 'production';
    console.log('mode:', mode);

    config.plugins = [
        new HtmlWebpackPlugin(),
        new EnvironmentPlugin({
            NODE_ENV: mode,
            ...environment[mode],
        }),
    ];
    return config;
};

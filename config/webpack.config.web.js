/* eslint max-len: 0 */
import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'
import baseConfig from '../webpack.config.base'

import OpenBrowserPlugin from 'open-browser-webpack-plugin';

const port = process.env.PORT || 3000;

export default merge(baseConfig, {
    debug: true,

    devtool: 'cheap-module-eval-source-map',

    entry: [
        `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr`,
        './app/index'
    ],

    output: {
        publicPath: `http://localhost:${port}/dist/`,
        path: path.join(__dirname, '../dist')
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        }),
        new OpenBrowserPlugin({ url: `http://localhost:3000/` })
    ],

    target: 'web'
});

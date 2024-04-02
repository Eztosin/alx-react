const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
	path: path.resolve(__dirname, 'public'),
	filename: 'bundle.js',
    },
    module: {
	rules: [
	    {
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
		    loader: 'babel-loader',
		    options: {
			presets: ['@babel/preset-env'],
		    },
		},
	    },
	    {
		test: /\.css$/,
		use: ['style-loader', 'css-loader'],
	    },
	    {
		test: /\.(png|jpg|gif|svg)$/,
		use: {
		    loader: 'url-loader',
		    options: {
			limit: 8192,
			name: '[name].[ext]',
			outputPath: 'images',
		    },
		},
	    },
	],
    },
    plugins: [
	new HtmlWebpackPlugin({
	    template: '/public/index.html',
	    filename: './index.html',
	}),
	new OptimizeCssAssetsPlugin(),
    ],
};

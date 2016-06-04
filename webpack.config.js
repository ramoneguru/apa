var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		filename: "bundle.js",
		path: __dirname + '/dist'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel"},
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{test: /\.scss$/, loaders: ["style", "css", "sass"]}
		]
	},
	devServer: {
		inline: true,
		contentBase: './app',
		historyAPIFallback: true
	},
	plugins: [HTMLWebpackPluginConfig]
};
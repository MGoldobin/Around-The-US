const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: { main: "./src/scripts/script.js" },
	output: {
			path: path.resolve(__dirname, 'public'),
			filename: "main.js"
	},
	module: {
    rules: [ 
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
			},
			{
					test: /\.css$/,
					loader: [
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: { importLoaders: 1 }
						},
						"postcss-loader"
					]
			},
			{
				test: /\.(png|svg|jpg|gif|woff2|woff)$/,
				loader: "file-loader"
			},
			{
				test: /\.html$/,
				loader: "html-loader",
			}
    ]
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html" 
		}),
		new MiniCssExtractPlugin()
	]
}
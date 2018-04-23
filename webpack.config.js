const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const port = 8080;

module.exports = (env) => ({
	entry: {
		main: env.development ? [
			'react-hot-loader/patch',
			`webpack-dev-server/client?http://localhost:${port}`,
			'webpack/hot/only-dev-server',
			'./src/index.js'
		] : './src/index.js',
		vendor: './src/vendor.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[hash].js'
	},

        
	resolve: {
		modules: [
			path.join(__dirname, "src"),
			"node_modules"
		],
                    
		enforceExtension: false,
		extensions: ['.js', '.jsx', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components)/
                    
			},

			{
				test: /\.(css|scss)$/,
				use: ExtractTextWebpackPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},

			{
				test: /\.(png|jpg|gif|eot|woff2|woff|ttf|dtd|svg)$/,
				use: 'file-loader'
			}
		]
	},
	performance: {
		assetFilter(assetFilename) {
			return assetFilename.endsWith('.jsx');
		}
	},
	plugins: [
		new ExtractTextWebpackPlugin({filename: 'main.css'}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: "./index.html",
			title: 'React State Management'
		}),

		env.development ? new webpack.HotModuleReplacementPlugin() : null,
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		})
	].filter(p => p !== null),
	devtool: 'cheap-module-source-map',
	stats: {
		maxModules: 0
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port,
		stats: 'minimal',
		hot: true,
		open: true,
		noInfo: false,

		historyApiFallback: true,
		proxy: {
			"/service-example/*" : {
				target: "http://localhost:3000/"
                    
			} 
		}
	}
});
var path = require('path');

module.exports = {
	mode: 'production',
	/*
		Webpack starts building a relation of modules usde in a web app through the entry file, so the file should contain overall contents. 
		entry point can be more than one.
	*/
	entry: './js/app.js',
	output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'main.bundle.js'
	},
	/* entry -> (module: loader for various sources) -> output */
	module: {
		/* rules: each object is a loader setting for files having specific ext */
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	stats: {
			colors: true
	},
	devtool: 'source-map'
};
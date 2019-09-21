const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
	   app: path.join(__dirname, 'src/containers/index.jsx')
	},

	output: {
	  path: filePath,
	  filename: fileName,
	},

	resolve: {
	  extensions: [
	    '.js','.jsx'
	  ]
	},

	module: {
	  loaders: [
	     {
	       enforce: 'pre',
	       test: /\.(js|jsx)$/,
	       exclude: [
	        /node_modules/,
	        path.resolve(__dirname, 'dist/bundle.js'),
	        path.resolve(__dirname, 'dist/main.min.js')
	       ],
	       loader: 'eslint-loader',
	      options: {
	        emitError: true,
	        emitWarning: true,
	        failOnError: false
	      }
	     },
	    {
	      test: /\.(js|jsx)$/,
	      exclude: /node_modules/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015']
	      }
	    },
	    {
	        test: /\.scss$/,
	        use: [
	          {
	            loader: "style-loader"
	          },
	          {
	            loader: "css-loader"
	          },
	          {
	            loader: "sass-loader"
	          },
	          {
	            loader: "sass-resources-loader",
	            options: {
	              resources: require(path.join(process.cwd(), 'client/scss/utils.js'))
	            }
	          }
	        ]
	    }
	  ]
	},

	plugins: [
	  new webpack.DefinePlugin({
	    'process.env.NODE_ENV': JSON.stringify('production')
	  }),
	  new webpack.optimize.UglifyJsPlugin()
	]
};
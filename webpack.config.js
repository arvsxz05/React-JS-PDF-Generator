var config = {
   entry: './main.js',
	
   output: {
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
           test: /\.css$/,
           loader: 'style-loader'
         }, 
         {
           test: /\.css$/,
           loader: 'css-loader',
           query: {
             modules: true,
             localIdentName: '[name]__[local]___[hash:base64:5]'
           }
        },
        { 
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
          loader: "url-loader?limit=10000&mimetype=application/font-woff" 
        },
        { 
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
          loader: "file-loader"
        }
      ]
   }
}

module.exports = config;
module.exports = {
  entry: './client/index.jsx',
  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/public/',
  }
};
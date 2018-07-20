module.exports = {
  entry: './client/index.js',
  modules: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: './public',
  },
};

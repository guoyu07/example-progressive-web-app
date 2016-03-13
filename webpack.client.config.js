module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'client.js'
  },
  module: {
    loaders: [{ 
      test: /\.js$/, 
      loader: 'babel', 
      exclude: '/node_modules/', 
      query: { 
        presets: ['es2015', 'stage-1', 'react'] 
      } 
    }]
  }
};

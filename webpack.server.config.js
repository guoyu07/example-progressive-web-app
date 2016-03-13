var fs = require('fs'),
    path = require('path'); 

module.exports = {
  entry: './server.js',
  target: 'node',
  output: {
    path: __dirname + '/compiled',
    filename: 'server.js'
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
  },
  externals: [getExternals()],
};

function getNodeModules() {
  return fs.readdirSync('node_modules')
           .filter(function(x) {
              return [ '.bin' ].indexOf(x) === -1
           });
}

/** 
 * Get Externals 
 * Use commonjs for all external, server side dependencies. 
 * 
 * http://jlongster.com/Backend-Apps-with-Webpack--Part-I
 * https://webpack.github.io/docs/configuration.html#externals
 */
function getExternals() {
  return function(context, request, callback) {
      var path = request.split('/')[0];

      if (getNodeModules().indexOf(path) >= 0) {
        callback(null, 'commonjs ' + request); 
      } else {
        callback();
      } 
  }
}

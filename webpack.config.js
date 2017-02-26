const path = require('path');

const config = {
  entry: './src/constructor/constructor.js',
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'canvaslite.js',
    // export itself to a global var
    libraryTarget: "var",
    // name of the global var: "Foo"
    library: "CanvasLite"
  },
  module: {
    loaders: [
    ]
  }
};

// Babel Loader
config.module.loaders.push({
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel-loader',
  query: {
    presets: ['es2015'],
    // the 'transform-runtime' plugin tells babel to require the runtime
    // instead of inlining it.
    plugins: ['transform-runtime']
  }
});

module.exports = config;
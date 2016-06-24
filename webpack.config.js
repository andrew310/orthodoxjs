const path = require('path');
const CLIENT_DIR = path.resolve(__dirname, 'client');
const SERVER_DIR = path.resolve(__dirname, 'server/generated');
const DIST_DIR = path.resolve(__dirname, 'dist');

const loaders: [{
    test: /\.js$/,
    include: CLIENT_DIR,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react']
    }
  },
  {
    test: /\.less$/,
    loader: 'style-loader!css-loader!less-loader'
  }]


module.exports = [{
  name: 'client',
  target: 'web',
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: loaders
  },
  resolve: {
    alias: {
      components: path.resolve(CLIENT_DIR, 'components')
    }
  }
},
{
  name: 'server',
  target: 'node',
  context: CLIENT_DIR,
  entry: {
    app: 'components/app/index.js'
  },
  output: {
    path: SERVER_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z\-0-9]+$/,
  module: {
    loaders: loaders
  },
  resolve: {
    alias: {
      components: path.resolve(CLIENT_DIR, 'components')
    }
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}];

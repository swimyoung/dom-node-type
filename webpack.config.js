module.exports = {
  entry: {
    'dist/domNodeType': `${__dirname}/src/index.ts`,
  },
  output: {
    path: __dirname,
    filename: `[name].js`,
    library: 'domNodeType',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  devtool: 'source-map',
};

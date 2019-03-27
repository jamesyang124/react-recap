module.exports = {
  entry: ['./index.js'],

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
};

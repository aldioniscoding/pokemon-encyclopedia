require("babel-polyfill");

const port = process.env.PORT || 4000;

module.exports = {
  context: __dirname,
  entry: ["babel-polyfill", "./src/index.jsx"],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    port,
    historyApiFallback: true,
    compress: true,
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff(2)?|ttf|eot|svg)$/,
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.(less|config|variables|overrides)$/],
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [],
};

/**
 *      a questo file bisogna dargli:
 *      - l'entry point
 *      - l'output
 *  */

const path = require("path");

console.log(path.join(__dirname, "public"));
module.exports = {
  // watch: true,
  mode: "development",
  entry: "./src/app.js",
  output: {
    //   per l'output.path serve il percorso assoluto della cartella e quindi ci serviamo di __dirname e path.join
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  // loader
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        // ogni volta che webpack incontra un file .css userà style-loader e css-loader (che sono due loaders)
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
  },
};

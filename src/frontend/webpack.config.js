const path = require("path");
const config = {
  entry: "./src/index-validation.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: ""
  }
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "eval";
    config.output.filename = "validation.bundle.js";
  }

  if (argv.mode === "production") {
    config.devtool = false;
    config.output.filename = "validation.bundle.min.js";
  }

  return config;
};
const getConfig = (modeMInimize) => {
  return {
    mode: "production",
    optimization: {
      minimize: modeMInimize,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: "/node_modules/",
          // loader: 'babel-loader',
        },
      ],
    },
    // devtool: 'eval-source-map'
  };
};

export default getConfig;

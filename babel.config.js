module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        "react-native-classname-to-style",
        ["react-native-platform-specific-extensions", { extensions: ["css"] }],
        {
          alias: {
            "@components": "./components",
            "@assets": "./assets",
            "@services": "./services",
            "@store": "./store",
          },
        },
      ],
    ],
  };
};

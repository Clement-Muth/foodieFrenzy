module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./app/"],
        alias: {
          components: "./app/components",
          common: "./app/common",
          routes: "./app/routes",
          types: "./app/types",
          utils: "./app/utils",
          views: "./app/views",
          libraries: "./app/libraries",
          pages: "./app/pages",
          public: "./app/public"
        }
      }
    ],
    "react-native-reanimated/plugin"
  ]
};

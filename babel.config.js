module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        alias: {
          "@styles": "./constants/Styles.ts",
          "@colors": "./constants/Colors.ts"
        }
      }
    ]
  ]
};

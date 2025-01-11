const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

// Добавляем поддержку alias
defaultConfig.resolver.extraNodeModules = {
  '@colors': path.resolve(__dirname, './constants/Colors.ts'),
  '@styles': path.resolve(__dirname, './constants/Styles.ts')
};

// Добавляем поддержку SCSS и SASS
defaultConfig.transformer = {
  ...defaultConfig.transformer,
  babelTransformerPath: require.resolve('react-native-sass-transformer'),
};

defaultConfig.resolver = {
  ...defaultConfig.resolver,
  sourceExts: [...defaultConfig.resolver.sourceExts, 'scss', 'sass'],
};

module.exports = defaultConfig;

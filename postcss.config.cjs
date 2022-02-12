const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

const config = {
  plugins: [autoprefixer, cssnano({ preset: 'default' }), postcssPresetEnv()],
};

module.exports = config;

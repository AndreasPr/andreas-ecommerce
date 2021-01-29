// craco.config.js
const purgecss = require('@fullhuman/postcss-purgecss');
module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js', './src/**/*.ts', './src/**/*.tsx']
        })
      ]
    }
  }
};
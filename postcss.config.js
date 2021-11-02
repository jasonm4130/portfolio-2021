/* eslint-disable import/no-extraneous-dependencies */
const pxToRem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    pxToRem({
      propList: [
        'font',
        'font-size',
        'line-height',
        'letter-spacing',
        '*margin*',
        '*padding*',
      ],
    }),
  ],
};

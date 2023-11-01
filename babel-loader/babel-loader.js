const babel = require('@babel/core');
const presetEnv = require('@babel/preset-env');

module.exports = function (source, options) {
  const obj = babel.transformSync(source, {
    presets: [presetEnv],
    ...options,
  })
  console.log('obj', obj);
  return obj.code
}

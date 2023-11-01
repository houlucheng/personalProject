const babelLoader = require('./babel-loader');
const sourceCode = require('fs').readFileSync('./example.js', 'utf-8');

const options = {

}

console.log('sourceCode', sourceCode);

const transformedCode = babelLoader(sourceCode, options);
console.log('transformedCode', transformedCode);
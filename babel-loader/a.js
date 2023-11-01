const generator = require('@babel/generator').default
const types = require('@babel/types')
const body = []
// for 
/**
 * const arr = [1,2,3,4,5]
 * for(let i = 0; i < arr.length; i++) {
 *  console.log(arr[i])
 * }
 * try{
 * console.log(x)
 * }catch(e) {
 * console.log(e)
 * }
 */
body.push(
  types.variableDeclaration('const', [
    types.variableDeclarator(
      types.identifier('arr'),
      types.arrayExpression([
        types.numericLiteral(1),
        types.numericLiteral(2),
        types.numericLiteral(3),
        types.numericLiteral(4),
        types.numericLiteral(5),
      ])
    )
  ]),
  types.forStatement(
    types.variableDeclaration('let', [
      types.variableDeclarator(types.identifier('i'), types.numericLiteral(0))
    ]),
    types.binaryExpression(
      '<',
      types.identifier('i'),
      types.memberExpression(
        types.identifier('arr'),
        types.identifier('length')
      )
    ),
    types.updateExpression('++', types.identifier('i')),
    types.blockStatement([
      types.expressionStatement(
        types.callExpression(
          types.memberExpression(
            types.identifier('console'),
            types.identifier('log')
          ),
          [
            types.memberExpression(
              types.identifier('arr'),
              types.identifier('i')
            )
          ]
        )
      )
    ])
  )
)
body.push(
  types.tryStatement(
    types.blockStatement([
      types.expressionStatement(
        types.callExpression(
          types.memberExpression(types.identifier('console'), types.identifier('log')),
          [
            types.identifier('x')
          ]
        )
      )
    ]),
    types.catchClause(
      types.identifier('e'),
      types.blockStatement([
        types.expressionStatement(
          types.callExpression(
            types.memberExpression(types.identifier('console'), types.identifier('log')),
            [
              types.identifier('e')
            ]
          )
        )
      ]),
    )
  )
)

const ast = types.program(body)

const { code } = generator(ast)
// console.log(code)

let getValue = (function () {
  let obj = {
    a: 1,
    b: 2
  };
  return function getvalue(k) {
    return obj[k];
    return obj.hasOwnProperty(k) ? obj[k] : undefined
  };
})()
let prototype = getValue('__proto__');
// console.log(prototype);
Object.defineProperty(prototype, 'getThis', {
  get() {
    return this;
  }
})


// 找前缀
function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) {
    return '';
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === '') {
        return '';
      }
    }
  }

  return prefix;
}
longestCommonPrefix(['abcd', 'abcef', 'abc', 'abcokj'])

// 打家劫舍
var rob = function (nums) {
  const length = nums.length;
  if (length === 1) {
    return nums[0];
  } else if (length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
};

const robRange = (nums, start, end) => {
  let first = nums[start], second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
}
console.log(rob([1, 2, 3, 1]));
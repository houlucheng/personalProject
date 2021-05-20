(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tools"] = factory();
	else
		root["tools"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUrlParameters)
/* harmony export */ });

/**
 * 正则表示法
 * 思路:通过正则表达式获取url上的参数 然后通过数组reduce追加到对象中
 * 
 * @param {string} url 需要获取的url地址默认为当前地址
 */
function getUrlParameters(url = window.location.href) {
    /**
     * match返回字符串中匹配结果的数组,匹配不到返回null
     * [^?=&]+ 匹配除了?=&之外的字符 仅匹配一次
     * Array.reduce(callBack(prev,cur,index,array), initialValue)
     * Array.slice(start,[end]) 返回start-end的元素
     */
    const params = url.match(/([^?=&]+)=([^&]*)/g)
    if (params) {
        return params.reduce((a, v) => (a[v.slice(0, v.indexOf('='))] = transferDefectParams(v.slice(v.indexOf('=') + 1)), a), {})
    }
    return {}
}

/**
 * 将参数中的null undefined转化为空
 * @param {String} el 
 */
 getUrlParameters.transferDefectParams = function (el) {
    return ['null', 'undefined'].includes(el) ? '' : el
}

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
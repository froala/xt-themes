
(function (factory) {
  if (typeof module === 'object' && typeof module.exports !== "undefined") {
      module.exports = factory;
  } else {
      factory(FroalaCharts);
  }
}(function (FroalaCharts) {
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_boilerplate__ = __webpack_require__(4);


FroalaCharts.addDep(__WEBPACK_IMPORTED_MODULE_0__src_boilerplate__["a" /* boilerplateBasic */]);
FroalaCharts.addDep(__WEBPACK_IMPORTED_MODULE_0__src_boilerplate__["b" /* boilerplateExtended */]);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return boilerplateBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return boilerplateExtended; });
/** !
 * @license Boilerplate Theme v//? write(JSON.parse(require('fs').readFileSync('./package.json')).version);
 * FusionCharts JavaScript Library
 *
 * This theme file includes the following theme variants:
 * - boilerplate-basic
 * - boilerplate-extended
 *
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 */
/* jshint unused:false */
var themeArray = [{
  name: 'boilerplate-basic',
  theme: {
    base: {
      chart: {
        labelDisplay: 'stagger !important',
        caption: 'Theme Caption \\!important',
        canvasBgColor: '#56EF22',
        borderThickness: '5 !important',
        borderColor: '#E60539',
        baseFontColor: '#781129'
      },
      categories: [{
        fontColor: '#0F4F40',
        fontSize: 15,
        category: function (index) {
          return {
            showLabel: index % 2 ? 0 : 1
          };
        },
        vline: {
          color: '#000000',
          thickness: 2
        }
      }],
      dataset: [{
        color: '#8C3146',
        data: function (index, dataObj) {
          if (index == 8) {
            dataObj.value = '';
          }
          return {
            color: Number(dataObj.value) < 32000 ? '#8C3146' : '#FF0000',
            alpha: '100'
          };
        }
      }],
      trendlines: [{
        line: function (index) {
          if (index) {
            return {
              color: '#ff0000',
              thickness: 3
            };
          } else {
            return {
              color: '#ffff00',
              thickness: 3
            };
          }
        }
      }]
    },
    pie2d: {
      chart: {
        bgColor: '#FF0000'
      }
    },
    msline: {
      chart: {
        canvasBgColor: '#FF0000'
      }
    }
  }
}, {
  name: 'boilerplate-extended',
  theme: {
    base: {
      chart: {
        labelDisplay: 'rotate',
        showValues: 1,
        rotateYAxisName: 0,
        canvasBgColor: '#f0ff00',
        borderThickness: 1
      },
      categories: {
        fontColor: '#ff0000',
        fontSize: 15,
        category: function (index) {
          return {
            showLabel: index % 2 ? 1 : 0
          };
        },
        vline: {
          color: '#000000',
          thickness: 2
        }
      },
      dataset: [{
        color: '#00ffff',
        data: function (index) {
          return {
            color: index % 2 ? '#0FF000' : '#ffffff',
            alpha: '100'
          };
        }
      }]
    }
  }
}],
    // end of definition of themes
boilerplateBasic = {
  extension: themeArray[0],
  name: 'boilerplateBasicTheme',
  type: 'theme'
},
    boilerplateExtended = {
  extension: themeArray[1],
  name: 'boilerplateExtendedTheme',
  type: 'theme'
};



/***/ })
/******/ ]);
}));

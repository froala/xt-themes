
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_froala__ = __webpack_require__(14);


FroalaCharts.addDep(__WEBPACK_IMPORTED_MODULE_0__src_froala__["a" /* default */]);

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Froala theme
 */
var themeObject = {
    name: 'froala',
    theme: {
        base: {
            chart: {
                paletteColors: "#007BFF, #FFC107, #DC3545, #28A745, #6C757D, #6F42C1, #FD7E14, #17A2B8",
                canvasBorderColor: '#ffffff',
                bgColor: "#ffffff",
                // base font styling
                baseFontColor: "#8892A0",
                baseFontSize: '22.4',
                baseFont: 'Lato',
                // caption styling
                captionFontColor: "#444444",
                captionFontSize: '44',
                captionFont: 'Lato',
                //subcaption styling
                subCaptionFontColor: "#444444",
                subCaptionFontSize: '32',
                subCaptionFont: 'Lato',
                // tooltip styling
                toolTipBgColor: '#222222',
                toolTipColor: '#FFFFFF',
                toolTipBorderColor: '#000000',
                // axis line styling
                xAxisLineColor: '#000000',
                yAxisLineColor: '#000000'
            }
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    extension: themeObject,
    name: "froalaTheme",
    type: "theme"
});

/***/ })

/******/ });
}));

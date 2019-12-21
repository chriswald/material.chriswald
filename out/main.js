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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/login.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/login.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, p, div {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\nhtml {\n    font-size: 1em;\n    font-family: \"Roboto Mono\", monospace;\n}\n\n.card {\n    border-radius: 2px 2px 2px 2px;\n    -moz-border-radius: 2px 2px 2px 2px;\n    -webkit-border-radius: 2px 2px 2px 2px;\n\n    -webkit-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);\n    -moz-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);\n    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);\n}\n\n.center {\n    margin: auto;\n}\n\n.text-center {\n    text-align: center;\n}\n\n.login-control {\n    padding-right: .5em;\n    padding-left: .5em;\n\n    max-width: 25em;\n}\n\n.login-form {\n    font-size: 1em;\n    margin-top: 1em;\n    margin-bottom: 1em;\n\n    font-family: \"Roboto Mono\", monospace;\n    background-color: #F7F7F7;\n}\n\n.login-form input, p{\n    font-family: inherit;\n}\n\n.login-row {\n    padding: 1em;\n}\n\n.login-header {\n    padding: 1em;\n    display: flex;\n    justify-content: space-between;\n}\n\n.login-title {\n\n}\n\n.login-message {\n    text-align: right;\n}\n\n.error {\n    color: red;\n}\n\n.login-input {\n    width: 100%;\n    height: 2.5em;\n    border: 1px solid #C8C8C8;\n}\n\n.login-button {\n    background-color:#3bb2ff;\n    background: -moz-linear-gradient(45deg, #3bb2ff 0%, #3bb2ff 100%); /* ff3.6+ */\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #3bb2ff), color-stop(100%, #3bb2ff)); /* safari4+,chrome */\n    background: -webkit-linear-gradient(45deg, #3bb2ff 0%, #3bb2ff 100%); /* safari5.1+,chrome10+ */\n    background: -o-linear-gradient(45deg, #3bb2ff 0%, #3bb2ff 100%); /* opera 11.10+ */\n    background: -ms-linear-gradient(45deg, #3bb2ff 0%, #3bb2ff 100%); /* ie10+ */\n    background: linear-gradient(45deg, #3bb2ff 0%, #3bb2ff 100%); /* w3c */\n\n    -moz-border-radius:2px;\n    -webkit-border-radius:2px;\n    border-radius:2px;\n    border: 1px solid #0FA0FF;\n\n    color: white;\n    cursor:pointer;\n    text-decoration: none;\n\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n}\n\n.login-button:hover {\n    background-color:#0399FB;\n    background: -moz-linear-gradient(45deg, #0399FB 0%, #0399FB 100%); /* ff3.6+ */\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #0399FB), color-stop(100%, #0399FB)); /* safari4+,chrome */\n    background: -webkit-linear-gradient(45deg, #0399FB 0%, #0399FB 100%); /* safari5.1+,chrome10+ */\n    background: -o-linear-gradient(45deg, #0399FB 0%, #0399FB 100%); /* opera 11.10+ */\n    background: -ms-linear-gradient(45deg, #0399FB 0%, #0399FB 100%); /* ie10+ */\n    background: linear-gradient(45deg, #0399FB 0%, #0399FB 100%); /* w3c */\n}\n\n.login-button:active {\n    background-color: #64C2FF;\n    background: -moz-linear-gradient(45deg, #64C2FF 0%, #64C2FF 100%); /* ff3.6+ */\n    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #64C2FF), color-stop(100%, #64C2FF)); /* safari4+,chrome */\n    background: -webkit-linear-gradient(45deg, #64C2FF 0%, #64C2FF 100%); /* safari5.1+,chrome10+ */\n    background: -o-linear-gradient(45deg, #64C2FF 0%, #64C2FF 100%); /* opera 11.10+ */\n    background: -ms-linear-gradient(45deg, #64C2FF 0%, #64C2FF 100%); /* ie10+ */\n    background: linear-gradient(45deg, #64C2FF 0%, #64C2FF 100%); /* w3c */\n}\n\n.hidden {\n    display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/LoginError.tsx":
/*!****************************!*\
  !*** ./src/LoginError.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./style/login.css */ "./src/style/login.css");
const UrlUtils_1 = __importDefault(__webpack_require__(/*! ./UrlUtils */ "./src/UrlUtils.ts"));
class LoginUserNameEntry extends React.Component {
    render() {
        if (UrlUtils_1.default.IsFailedLogin()) {
            return (React.createElement("div", { className: "login-message error" }, UrlUtils_1.default.GetLoginErrorMessage()));
        }
        else {
            return null;
        }
    }
}
exports.default = LoginUserNameEntry;


/***/ }),

/***/ "./src/LoginFooter.tsx":
/*!*****************************!*\
  !*** ./src/LoginFooter.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./style/login.css */ "./src/style/login.css");
const UrlUtils_1 = __importDefault(__webpack_require__(/*! ./UrlUtils */ "./src/UrlUtils.ts"));
class LoginUserNameEntry extends React.Component {
    render() {
        return (React.createElement("div", { className: "login-row text-center" },
            React.createElement("a", { href: `./createuser?r=${encodeURI(UrlUtils_1.default.GetSuccessUrl())}` }, "New to the site? Sign up")));
    }
}
exports.default = LoginUserNameEntry;


/***/ }),

/***/ "./src/LoginForm.tsx":
/*!***************************!*\
  !*** ./src/LoginForm.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const LoginHeader_1 = __importDefault(__webpack_require__(/*! ./LoginHeader */ "./src/LoginHeader.tsx"));
const LoginUserNameEntry_1 = __importDefault(__webpack_require__(/*! ./LoginUserNameEntry */ "./src/LoginUserNameEntry.tsx"));
const LoginPasswordEntry_1 = __importDefault(__webpack_require__(/*! ./LoginPasswordEntry */ "./src/LoginPasswordEntry.tsx"));
const LoginHIddenData_1 = __importDefault(__webpack_require__(/*! ./LoginHIddenData */ "./src/LoginHIddenData.tsx"));
const LoginSubmit_1 = __importDefault(__webpack_require__(/*! ./LoginSubmit */ "./src/LoginSubmit.tsx"));
const LoginFooter_1 = __importDefault(__webpack_require__(/*! ./LoginFooter */ "./src/LoginFooter.tsx"));
__webpack_require__(/*! ./style/login.css */ "./src/style/login.css");
class LoginForm extends React.Component {
    render() {
        return (React.createElement("div", { className: "login-control center" },
            React.createElement("form", { id: "login-form", className: "login-form card", action: "signinact.php", method: "post" },
                React.createElement(LoginHeader_1.default, null),
                React.createElement(LoginUserNameEntry_1.default, null),
                React.createElement(LoginPasswordEntry_1.default, null),
                React.createElement(LoginHIddenData_1.default, null),
                React.createElement(LoginSubmit_1.default, null),
                React.createElement(LoginFooter_1.default, null))));
    }
}
exports.default = LoginForm;


/***/ }),

/***/ "./src/LoginFormHiddenRow.tsx":
/*!************************************!*\
  !*** ./src/LoginFormHiddenRow.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./style/login.css */ "./src/style/login.css");
class LoginFormRow extends React.Component {
    render() {
        return (React.createElement("div", { className: "login-row hidden" }, this.props.children));
    }
}
exports.default = LoginFormRow;


/***/ }),

/***/ "./src/LoginFormRow.tsx":
/*!******************************!*\
  !*** ./src/LoginFormRow.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./style/login.css */ "./src/style/login.css");
class LoginFormRow extends React.Component {
    render() {
        return (React.createElement("div", { className: "login-row" }, this.props.children));
    }
}
exports.default = LoginFormRow;


/***/ }),

/***/ "./src/LoginHIddenData.tsx":
/*!*********************************!*\
  !*** ./src/LoginHIddenData.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const LoginFormHiddenRow_1 = __importDefault(__webpack_require__(/*! ./LoginFormHiddenRow */ "./src/LoginFormHiddenRow.tsx"));
const UrlUtils_1 = __importDefault(__webpack_require__(/*! ./UrlUtils */ "./src/UrlUtils.ts"));
__webpack_require__(/*! ./style/login.css */ "./src/style/login.css");
class LoginHiddenData extends React.Component {
    render() {
        return (React.createElement(LoginFormHiddenRow_1.default, null,
            React.createElement("input", { id: "success-url", type: "text", name: "successURL", className: "login-input", value: UrlUtils_1.default.GetSuccessUrl() }),
            React.createElement("input", { id: "failure-url", type: "text", name: "failureURL", className: "login-input", value: UrlUtils_1.default.GetFailureUrl() })));
    }
}
exports.default = LoginHiddenData;


/***/ }),

/***/ "./src/LoginHeader.tsx":
/*!*****************************!*\
  !*** ./src/LoginHeader.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./style/login.css */ "./src/style/login.css");
const LoginError_1 = __importDefault(__webpack_require__(/*! ./LoginError */ "./src/LoginError.tsx"));
class LoginHeader extends React.Component {
    render() {
        return (React.createElement("div", { className: "login-header" },
            React.createElement("div", { className: "login-title" }, "Login"),
            React.createElement(LoginError_1.default, null)));
    }
}
exports.default = LoginHeader;


/***/ }),

/***/ "./src/LoginPasswordEntry.tsx":
/*!************************************!*\
  !*** ./src/LoginPasswordEntry.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const LoginFormRow_1 = __importDefault(__webpack_require__(/*! ./LoginFormRow */ "./src/LoginFormRow.tsx"));
__webpack_require__(/*! ./style/login.css */ "./src/style/login.css");
class LoginUserNameEntry extends React.Component {
    render() {
        return (React.createElement(LoginFormRow_1.default, null,
            React.createElement("input", { id: "login-password", className: "login-input", type: "password", name: "password", placeholder: "Password", autoComplete: "off" })));
    }
}
exports.default = LoginUserNameEntry;


/***/ }),

/***/ "./src/LoginSubmit.tsx":
/*!*****************************!*\
  !*** ./src/LoginSubmit.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const LoginFormRow_1 = __importDefault(__webpack_require__(/*! ./LoginFormRow */ "./src/LoginFormRow.tsx"));
__webpack_require__(/*! ./style/login.css */ "./src/style/login.css");
class LoginSubmit extends React.Component {
    render() {
        return (React.createElement(LoginFormRow_1.default, null,
            React.createElement("input", { id: "login-submit", className: "login-input login-button", type: "submit", name: "btnSubmit", value: "Submit", onSubmit: () => { return false; } })));
    }
}
exports.default = LoginSubmit;


/***/ }),

/***/ "./src/LoginUserNameEntry.tsx":
/*!************************************!*\
  !*** ./src/LoginUserNameEntry.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const LoginFormRow_1 = __importDefault(__webpack_require__(/*! ./LoginFormRow */ "./src/LoginFormRow.tsx"));
__webpack_require__(/*! ./style/login.css */ "./src/style/login.css");
class LoginUserNameEntry extends React.Component {
    render() {
        return (React.createElement(LoginFormRow_1.default, null,
            React.createElement("input", { id: "login-email", className: "login-input", type: "email", name: "email", placeholder: "Email address", autoComplete: "off" })));
    }
}
exports.default = LoginUserNameEntry;


/***/ }),

/***/ "./src/UrlUtils.ts":
/*!*************************!*\
  !*** ./src/UrlUtils.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UrlUtils {
    static GetSuccessUrl() {
        var _a;
        return _a = new URLSearchParams(document.location.search).get("r"), (_a !== null && _a !== void 0 ? _a : "./dashboard");
    }
    static GetFailureUrl() {
        var _a;
        let defaultUrl = `.${document.location.pathname}`;
        if (document.location.search.length > 0) {
            defaultUrl += "&f=1";
        }
        else {
            defaultUrl += "?f=1";
        }
        return _a = new URLSearchParams(document.location.search).get("r"), (_a !== null && _a !== void 0 ? _a : defaultUrl);
    }
    static GetLoginErrorMessage() {
        var _a;
        return _a = new URLSearchParams(document.location.search).get("m"), (_a !== null && _a !== void 0 ? _a : "Login failed");
    }
    static IsFailedLogin() {
        return (new URLSearchParams(document.location.search).get("f") === "1");
    }
}
exports.default = UrlUtils;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const react_dom_1 = __webpack_require__(/*! react-dom */ "react-dom");
const LoginForm_1 = __importDefault(__webpack_require__(/*! ./LoginForm */ "./src/LoginForm.tsx"));
react_dom_1.render(React.createElement(LoginForm_1.default, null), document.getElementById("main"));


/***/ }),

/***/ "./src/style/login.css":
/*!*****************************!*\
  !*** ./src/style/login.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./login.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/login.css");
content = content.__esModule ? content.default : content;

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
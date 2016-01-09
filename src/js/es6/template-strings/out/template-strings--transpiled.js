/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Template Strings
	 */
	var arg = 'concatinated string';
	var strTmpl = 'templated string';
	var arr = [1, 2, 3];

	function lineType() {
	    var num = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	    switch (num) {
	        case 1:
	            return 'single line';
	        case 2:
	            return 'multi-line';
	        default:
	            return 'invalid number specified';
	    }
	}

	// concatinated string
	console.log('This is a ' + arg + ' and only supports ' + lineType() + ' statements and arrays ' + arr + '\n');

	// temlpated string
	console.log('This is a ' + strTmpl + ' and supports\n' + lineType(2) + ' statements and arrays ' + arr);

/***/ }
/******/ ]);
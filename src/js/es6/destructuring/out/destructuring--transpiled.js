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
	 * Destructuring
	 */

	/*
	    objects
	 */
	function repeatStr(_ref) {
	    var STRING = _ref.STRING;
	    var AMOUNT = _ref.AMOUNT;

	    return STRING.repeat(AMOUNT);
	}

	var STRING = 'repeat ';
	var AMOUNT = 3;

	console.log(repeatStr({ STRING: STRING, AMOUNT: AMOUNT }));

	/*
	    with array
	 */
	var arr = ['obj01', 'obj02', 'obj03', 'obj04', 'obj05'];
	var o1 = arr[0];
	var o2 = arr[1];
	var o3 = arr[2];
	var o4 = arr[3];
	var o5 = arr[4];

	console.log(o1, o2, o5);

	/*
	    array with complex obj
	 */
	var arr2 = [{ name: 'Steve' }, { name: 'John' }, { name: 'Jos�' }, { name: 'Anna' }, { name: 'Christine' }];
	var p01 = arr2[0];
	var p02 = arr2[1];
	var p03 = arr2[2];
	var p04 = arr2[3];
	var p05 = arr2[4];

	console.log(p01.name, p04.name);

/***/ }
/******/ ]);
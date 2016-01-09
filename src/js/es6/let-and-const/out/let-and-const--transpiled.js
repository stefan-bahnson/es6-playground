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

	"use strict";

	/**
	 *  Arrow => functions
	 */

	/*
	    classic function call
	*/
	function square(x) {
	    return x * x;
	}

	console.log(square(5));

	/*
	    Same thing with arrow functions
	*/
	var sq = function sq(x) {
	    return x * x;
	};

	console.log(sq(5));

	/*
	    iteration and arrow functions
	*/
	var arr = [1, 2, 3, 4, 5];

	/*
	    Single statement
	*/
	console.log("\nsingle statement");
	arr.map(function (num) {
	    return console.log(num);
	});

	/*
	    multiple statements wrap in {}
	*/
	console.log("\nmultiple statements");
	arr.map(function (num) {
	    var newNum = num * 2;
	    console.log(newNum);
	});

	/*
	    multiple statements and args
	*/
	console.log("\nmultiple statements and args");
	arr.map(function (num, i) {
	    var newNum = num * i;
	    console.log(newNum);
	});

	function blockScoping() {

	    var a = 1;
	    var b = 2;

	    if (a == 1) {

	        var _b = a + 2;
	        var _c = _b + 1;
	        console.log("inside if() let b=" + _b + " and let c=" + _c);
	    }

	    console.log("var a=" + a + " declared outside if()");
	    console.log("let b=" + b + " declared inside if()");
	    console.log("let c=" + c + " declared inside if()"); // undefined because let is block scoped. change to var and see what happens.
	}

	blockScoping();

/***/ }
/******/ ]);
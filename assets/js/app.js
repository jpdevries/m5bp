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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var hidePageComponents = true;

	document.querySelector('html').classList.remove('no-js');
	document.querySelector('html').classList.add('js');

	//document.querySelector('html').setAttribute('complex-layout', true);

	//document.querySelector('html').setAttribute('contrast', 'white-on-black');
	//document.querySelector('html').setAttribute('contrast', 'black-on-white');
	//document.querySelector('html').removeAttribute('contrast');

	//document.body.classList.add('searching');
	document.body.classList.add('snappy');

	var radios = document.querySelectorAll('input[type="radio"]');
	for (var i = 0; i < radios.length; i++) {
	  var radio = radios[i];
	  radio.addEventListener('change', function (event) {
	    hidePageComponents = event.target.value == 1 ? true : false;
	    //doFilterPageComponents(hidePageComponents);
	    hidePageComponents ? document.querySelector('html').classList.add('hide-unmatched-elements') : document.querySelector('html').classList.remove('hide-unmatched-elements');
	  });
	}

	document.getElementById('ubersearch').addEventListener('input', function (event) {
	  if (event.target.value) event.target.classList.add('dirty');
	  if (hidePageComponents) {
	    doFilterPageComponents(event.target.value);
	  }
	});

	function mainNavDetailsOpen() {
	  var open = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	  var details = document.querySelectorAll('#mainnav__nav > details');
	  for (var _i = 0; _i < details.length; _i++) {
	    var detail = details[_i];
	    open ? detail.setAttribute('open', true) : detail.removeAttribute('open');
	  }
	}

	document.getElementById('ubersearch').addEventListener('focus', function (event) {
	  if (event.target.value) event.target.classList.add('dirty');
	  document.body.classList.add('searching');
	  mainNavDetailsOpen(true);
	});

	document.getElementById('ubersearch').addEventListener('blur', function (event) {
	  if (!event.target.value) event.target.classList.remove('dirty');
	  //document.body.classList.remove('searching');
	  //mainNavDetailsOpen(false);
	});

	function doFilterPageComponents(filter) {
	  filter = filter.trim().toLowerCase();

	  var filterWords = filter.split(' ');

	  var pageComponents = document.querySelectorAll('#mainnav__nav li');

	  var _loop = function _loop(_i2) {
	    var pageComponent = pageComponents[_i2];

	    var match = function () {
	      var found = false;

	      for (var _i3 = 0; _i3 < filterWords.length; _i3++) {
	        var filterWord = filterWords[_i3];

	        try {
	          if (pageComponent.querySelector('h3 > a').innerHTML.toLowerCase().includes(filterWord) || pageComponent.querySelector('p').innerHTML.toLowerCase().includes(filterWord)) {
	            //console.log('match');
	            return true;
	          }
	        } catch (e) {}
	      }

	      return found;
	    }();

	    if (!match && filter) {
	      pageComponent.setAttribute('hidden', 'true');
	      pageComponent.setAttribute('aria-hidden', 'true');
	    } else {
	      pageComponent.removeAttribute('hidden');
	      pageComponent.removeAttribute('aria-hidden');
	    }
	  };

	  for (var _i2 = 0; _i2 < pageComponents.length; _i2++) {
	    _loop(_i2);
	  }
	}

	/*
	const ubersearch = document.querySelector('#ubersearch');
	ubersearch.addEventListener('blur', (event) => {
	  console.log(event);
	});

	ubersearch.addEventListener('focus', (event) => {
	  console.log(event);
	});
	*/

/***/ }
/******/ ]);
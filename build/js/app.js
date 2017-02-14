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
/******/ 	__webpack_require__.p = "js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _SplitTextIntoRows = __webpack_require__(2);\n\nvar _SplitTextIntoRows2 = _interopRequireDefault(_SplitTextIntoRows);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar item = document.querySelector('.js-item');\n\nnew _SplitTextIntoRows2.default({ container: item });\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwbGl0SW50b1Jvd3MgZnJvbSAnLi9fU3BsaXRUZXh0SW50b1Jvd3MuanMnO1xuXG5sZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pdGVtJyk7XG5cbm5ldyBTcGxpdEludG9Sb3dzKHsgY29udGFpbmVyOiBpdGVtIH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SplitIntoRows = function () {\n\tfunction SplitIntoRows(props) {\n\t\t_classCallCheck(this, SplitIntoRows);\n\n\t\tthis._container = props.container;\n\t\tthis._text = props.container.textContent;\n\t\tthis._init();\n\t}\n\n\t_createClass(SplitIntoRows, [{\n\t\tkey: '_init',\n\t\tvalue: function _init() {\n\t\t\tvar container = this._container;\n\t\t\tvar words = this._text.split(' ');\n\t\t\tvar wordsLength = words.length;\n\t\t\tcontainer.innerHTML = '<span></span>';\n\t\t\tvar row = container.querySelector('span');\n\t\t\tvar parentWidth = container.offsetWidth;\n\t\t\trow.style.whiteSpace = 'nowrap';\n\n\t\t\tfor (var i = 0; i < wordsLength; i++) {\n\t\t\t\t//get current word with space\n\t\t\t\tvar word = words[i];\n\t\t\t\tvar editedWord = word + ' ';\n\t\t\t\t//caching old text value for new line\n\t\t\t\tvar oldTextValue = row.textContent;\n\t\t\t\t//set new text value (add new word)\n\t\t\t\trow.textContent += editedWord;\n\n\t\t\t\t//if row width with new word bigger then parent width\n\t\t\t\t//create line with text value minus current word\n\t\t\t\tif (row.offsetWidth > parentWidth) {\n\t\t\t\t\tvar newLine = document.createElement('span');\n\t\t\t\t\tnewLine.textContent = oldTextValue;\n\t\t\t\t\tcontainer.insertBefore(newLine, row);\n\t\t\t\t\t//reset row text value to current words with space\n\t\t\t\t\trow.textContent = editedWord;\n\n\t\t\t\t\t//remove if line is empty\n\t\t\t\t\tif (!newLine.textContent.length) newLine.remove();\n\t\t\t\t}\n\t\t\t\t//if it's last word - remove white space and use this span for last line\n\t\t\t\tif (i == wordsLength - 1) row.removeAttribute('style');\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'reinit',\n\t\tvalue: function reinit() {\n\t\t\tthis._init();\n\t\t}\n\t}, {\n\t\tkey: 'destroy',\n\t\tvalue: function destroy() {\n\t\t\tthis._container.textContent = this._text;\n\t\t}\n\t}, {\n\t\tkey: 'update',\n\t\tvalue: function update() {\n\t\t\tthis._text = this._container.textContent;\n\t\t\tthis._init();\n\t\t}\n\t}]);\n\n\treturn SplitIntoRows;\n}();\n\nexports.default = SplitIntoRows;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvX1NwbGl0VGV4dEludG9Sb3dzLmpzPzRkMzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXRJbnRvUm93cyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHR0aGlzLl9jb250YWluZXIgPSBwcm9wcy5jb250YWluZXI7XHJcblx0XHR0aGlzLl90ZXh0ID0gcHJvcHMuY29udGFpbmVyLnRleHRDb250ZW50O1xyXG5cdFx0dGhpcy5faW5pdCgpO1xyXG5cdH1cclxuXHJcblx0X2luaXQoKSB7XHJcblx0XHRsZXQgY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyO1xyXG5cdFx0bGV0IHdvcmRzID0gdGhpcy5fdGV4dC5zcGxpdCgnICcpO1xyXG5cdFx0bGV0IHdvcmRzTGVuZ3RoID0gd29yZHMubGVuZ3RoO1xyXG5cdFx0Y29udGFpbmVyLmlubmVySFRNTCA9ICc8c3Bhbj48L3NwYW4+JztcclxuXHRcdGxldCByb3cgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG5cdFx0bGV0IHBhcmVudFdpZHRoID0gY29udGFpbmVyLm9mZnNldFdpZHRoO1xyXG5cdFx0cm93LnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzTGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Ly9nZXQgY3VycmVudCB3b3JkIHdpdGggc3BhY2VcclxuXHRcdFx0bGV0IHdvcmQgPSB3b3Jkc1tpXTtcclxuXHRcdFx0bGV0IGVkaXRlZFdvcmQgPSAod29yZCArICcgJyk7XHJcblx0XHRcdC8vY2FjaGluZyBvbGQgdGV4dCB2YWx1ZSBmb3IgbmV3IGxpbmVcclxuXHRcdFx0bGV0IG9sZFRleHRWYWx1ZSA9IHJvdy50ZXh0Q29udGVudDtcclxuXHRcdFx0Ly9zZXQgbmV3IHRleHQgdmFsdWUgKGFkZCBuZXcgd29yZClcclxuXHRcdFx0cm93LnRleHRDb250ZW50ICs9IGVkaXRlZFdvcmQ7XHJcblxyXG5cdFx0XHQvL2lmIHJvdyB3aWR0aCB3aXRoIG5ldyB3b3JkIGJpZ2dlciB0aGVuIHBhcmVudCB3aWR0aFxyXG5cdFx0XHQvL2NyZWF0ZSBsaW5lIHdpdGggdGV4dCB2YWx1ZSBtaW51cyBjdXJyZW50IHdvcmRcclxuXHRcdFx0aWYgKHJvdy5vZmZzZXRXaWR0aCA+IHBhcmVudFdpZHRoKSB7XHJcblx0XHRcdFx0bGV0IG5ld0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0XHRcdFx0bmV3TGluZS50ZXh0Q29udGVudCA9IG9sZFRleHRWYWx1ZTtcclxuXHRcdFx0XHRjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5ld0xpbmUsIHJvdyk7XHJcblx0XHRcdFx0Ly9yZXNldCByb3cgdGV4dCB2YWx1ZSB0byBjdXJyZW50IHdvcmRzIHdpdGggc3BhY2VcclxuXHRcdFx0XHRyb3cudGV4dENvbnRlbnQgPSBlZGl0ZWRXb3JkO1xyXG5cclxuXHRcdFx0XHQvL3JlbW92ZSBpZiBsaW5lIGlzIGVtcHR5XHJcblx0XHRcdFx0aWYgKCFuZXdMaW5lLnRleHRDb250ZW50Lmxlbmd0aCkgbmV3TGluZS5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvL2lmIGl0J3MgbGFzdCB3b3JkIC0gcmVtb3ZlIHdoaXRlIHNwYWNlIGFuZCB1c2UgdGhpcyBzcGFuIGZvciBsYXN0IGxpbmVcclxuXHRcdFx0aWYgKGkgPT0gd29yZHNMZW5ndGggLSAxKSByb3cucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVpbml0KCkge1xyXG5cdFx0dGhpcy5faW5pdCgpO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHRoaXMuX2NvbnRhaW5lci50ZXh0Q29udGVudCA9IHRoaXMuX3RleHQ7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLl90ZXh0ID0gdGhpcy5fY29udGFpbmVyLnRleHRDb250ZW50O1xyXG5cdFx0dGhpcy5faW5pdCgpO1xyXG5cdH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL19TcGxpdFRleHRJbnRvUm93cy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBdERBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);
module.exports =
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*INPUT FIELDS*/
	var Form = _react2.default.createClass({
		displayName: 'Form',

		getInitialState: function getInitialState() {
			return { title: '', text: '' };
		},
		handleTitleChange: function handleTitleChange(e) {
			this.setState({ title: e.target.value });
		},
		handleTextChange: function handleTextChange(e) {
			this.setState({ text: e.target.value });
		},
		handleSubmit: function handleSubmit(e) {
			e.preventDefault();
			//alert(this.state.title);
			this.props.onItemSubmit({ title: this.state.title, text: this.state.text });
			this.setState({ title: '', text: '' });
		},
		render: function render() {
			return _react2.default.createElement(
				'form',
				{ onSubmit: this.handleSubmit },
				'Title:',
				_react2.default.createElement('br', null),
				_react2.default.createElement('input', { type: 'text', name: 'title', value: this.state.title, onChange: this.handleTitleChange }),
				_react2.default.createElement('br', null),
				'Text:',
				_react2.default.createElement('br', null),
				_react2.default.createElement('input', { type: 'text', name: 'text', value: this.state.text, onChange: this.handleTextChange }),
				_react2.default.createElement('br', null),
				_react2.default.createElement('input', { type: 'submit', value: 'Post' })
			);
		}
	});

	/*ITEM TEMPLATE*/
	var Item = _react2.default.createClass({
		displayName: 'Item',
		handleDelete: function handleDelete() {
			this.props.onDelete(this.props.id);
		},

		render: function render() {
			return _react2.default.createElement(
				'li',
				{ className: 'listItem' },
				_react2.default.createElement(
					'h2',
					{ className: 'listTitle' },
					this.props.title
				),
				_react2.default.createElement(
					'div',
					null,
					this.props.text
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.handleDelete },
					'delete'
				)
			);
		}
	});

	/*LIST OF ITEMS
	 * this component is the renders the list
	 * parent: App
	 * Child: Item
	 * Receives state from parent, maps to child, passes functions to delete as prop
	 */
	var List = _react2.default.createClass({
		displayName: 'List',

		render: function render() {
			var deleteMe = this.props.handleDelete;
			var listItems = this.props.data.map(function (item, i) {
				return _react2.default.createElement(Item, { title: item.title, id: i, text: item.text, onDelete: deleteMe });
			});
			return _react2.default.createElement(
				'ul',
				{ className: 'col-md-4 list-group' },
				listItems
			);
		}
	});

	/*PARENT CLASS TO PUT THEM ALL TOGETHER*/
	var App = _react2.default.createClass({
		displayName: 'App',

		handleDelete: function handleDelete(itemIdx) {
			//alert(itemIdx);
			var deleteThis = this.state.data.splice(itemIdx, 1);
			this.setState({ data: this.state.data });
		},
		getInitialState: function getInitialState() {
			return { data: [{ id: 1, title: "List Item 1", text: "this is a list item" }, { id: 2, title: "List Item 2", text: "this is another list item" }] };
		},
		handleSubmit: function handleSubmit(item) {
			//alert(item.text);
			var newList = this.state.data.concat([{ title: item.title, text: item.text }]);
			this.setState({ data: newList });
		},
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(List, { data: this.state.data, handleDelete: this.handleDelete }),
				_react2.default.createElement(Form, { onItemSubmit: this.handleSubmit })
			);
		}
	});

	exports.default = App;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
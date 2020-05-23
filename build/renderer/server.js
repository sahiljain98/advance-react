'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _App = require('components/App');

var _App2 = _interopRequireDefault(_App);

var _stateApi = require('state-api');

var _stateApi2 = _interopRequireDefault(_stateApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serverRender = async () => {

  // hit api - S2S
  const response = await (0, _axios2.default)(`http://${_config2.default.host}:${_config2.default.port}/data`);
  const store = new _stateApi2.default(response.data);

  return {
    initalMarkup: _server2.default.renderToString(_react2.default.createElement(_App2.default, { store: store })),
    initialData: response.data
  };
};

exports.default = serverRender;
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _server = require('renderer/server');

var _server2 = _interopRequireDefault(_server);

var _testData = require('testData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const rp      = require('request-promise-native');
// const options = {
//   uri: 'http://10.5.62.104/airtel-dth-plan/rest/dth/fetch/v1/dthConnectionServices?accountId=3000018563',
//   headers: {
//       // 'User-Agent': 'Request-Promise'
//       "adsHeader": "cccccc",
//       "googleCookie": "google.com",
//       'iv-user':"8787008271",
//       'Content-Type':"application/json"
//   },
//   json: true // Automatically parses the JSON string in the response
// };


const app = (0, _express2.default)();

// set default folder
app.use(_express2.default.static('public'));

// set default engine to ejs
app.set('view engine', 'ejs');

// for frontend - react
app.get('/', async (req, res) => {
  const initalContent = await (0, _server2.default)();
  res.render('index', _extends({}, initalContent));
});

// for api - node
app.get('/data', (req, res) => {
  res.send(_testData.data);
});

// app.get('/api', (req, res) => {
//   rp(options)
//   .then(parsedBody => {
//       res.send(parsedBody);
//   })
//   .catch(err => {
//       res.send(err);
//   });
// });

// enable port
app.listen(_config2.default.port, function listenHandler() {
  console.info(`Running on PORT ${_config2.default.port}...`);
});
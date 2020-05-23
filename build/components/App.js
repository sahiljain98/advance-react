'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.pickby');

var _lodash2 = _interopRequireDefault(_lodash);

var _ArticleList = require('./ArticleList');

var _ArticleList2 = _interopRequireDefault(_ArticleList);

var _SearchBar = require('./SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Timestamp = require('./Timestamp');

var _Timestamp2 = _interopRequireDefault(_Timestamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = this.props.store.getState(), this.onStoreChange = () => {
      this.setState(this.props.store.getState());
    }, _temp;
  }
  // context api


  // static function for context api
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  // put data directly to state


  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.articles != this.state.articles || nextState.searchTerm != this.state.searchTerm;
  }

  render() {
    let { articles, searchTerm } = this.state;
    let searchRE = new RegExp(searchTerm, 'i');
    if (searchRE) {
      articles = (0, _lodash2.default)(articles, value => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Timestamp2.default, null),
      _react2.default.createElement(_SearchBar2.default, null),
      _react2.default.createElement(_ArticleList2.default, {
        articles: articles
      })
    );
  }
}
App.childContextTypes = {
  store: _propTypes2.default.object };
exports.default = App;
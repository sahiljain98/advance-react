'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _storeProvider = require('./storeProvider');

var _storeProvider2 = _interopRequireDefault(_storeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchBar extends _react.PureComponent {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            searchTerm: ''
        }, this.doSearch = (0, _lodash2.default)(() => {
            this.props.store.setSearchTerm(this.state.searchTerm);
        }, 300), this.handleChange = event => {
            this.setState({ searchTerm: event.target.value }, () => {
                this.doSearch();
            });
        }, _temp;
    }

    render() {
        return _react2.default.createElement('input', {
            type: 'search',
            value: this.state.searchTerm,
            onChange: this.handleChange,
            placeholder: 'Enter search term'
        });
    }
}
exports.default = (0, _storeProvider2.default)()(SearchBar);
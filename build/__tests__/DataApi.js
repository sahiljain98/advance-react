'use strict';

var _stateApi = require('state-api');

var _stateApi2 = _interopRequireDefault(_stateApi);

var _testData = require('../testData.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = new _stateApi2.default(_testData.data);

describe('DataApi', () => {

  it('exposes articles as an object', () => {
    const articles = api.getState().articles;
    const articleId = _testData.data.articles[0].id;
    const articleTitle = _testData.data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = api.getState().authors;
    const authorId = _testData.data.authors[0].id;
    const authorTitle = _testData.data.authors[0].title;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].title).toBe(authorTitle);
  });
});
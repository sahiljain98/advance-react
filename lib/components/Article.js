import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.8em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
};

const dateDisplay = (dateString) => new Date(dateString).toDateString();


export class Article extends PureComponent {
  render() {
    const { article, author } = this.props;
    return (
      <div style={styles.article}>
        <div style={styles.title}>{article.title}</div>
        <div style={styles.date}>{dateDisplay(article.date)}</div>
        <a href={author.website} style={styles.author}>{author.firstName} {author.lastName}</a>
        <div style={styles.body}>{article.body}</div>
      </div>);
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};
// bind function with store
function extraProps(store, originalProps){
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
}
// bind context api store with component
export default storeProvider(extraProps)(Article);


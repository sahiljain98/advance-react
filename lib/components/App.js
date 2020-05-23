import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

class App extends Component {
    // context api
    static childContextTypes = {
      store : PropTypes.object
    }
    // static function for context api
    getChildContext(){
      return {
        store: this.props.store
      };
    }
    // put data directly to state
    state = this.props.store.getState();

    onStoreChange=()=>{
      this.setState(this.props.store.getState());
    }

    componentDidMount() {
      this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
      this.props.store.startClock();
    }

    componentWillUnmount() {
      this.props.store.unsubscribe(this.subscriptionId);
    }

    shouldComponentUpdate(nextProps, nextState){
      return (nextState.articles != this.state.articles || nextState.searchTerm != this.state.searchTerm);
    }

    render() {
      let {articles, searchTerm} = this.state;
      let searchRE = new RegExp(searchTerm,'i');
      if(searchRE){
        articles = pickBy(articles,(value)=>{
          return value.title.match(searchRE) || value.body.match(searchRE);
        })
      }
      return (<div>
        <Timestamp />
        <SearchBar />
        <ArticleList
          articles={articles}
        />
        {/* {ArticleList({articles})} */}
        </div>);
    }
}
export default App;

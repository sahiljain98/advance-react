import React from 'react';
import ArticleList from '../ArticleList';
import {shallow} from 'enzyme';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: '1' },
      b: { id: '2' },
    }
  };
  it('render correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps}
    />);    
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });

});

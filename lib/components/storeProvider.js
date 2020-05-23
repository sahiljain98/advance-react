import React from 'react';
import PropTypes from 'prop-types';

// generic high order component which enables store accessable to component
const storeProvider = (extraProps = () =>({})) => (Component) => {

  return class extends React.PureComponent {
    // update default class name
    static displayName = `${Component.name}Container`;
    // fetch store from context api
    static contextTypes = {
      store: PropTypes.object,
    }
    usedState = () =>{
      return extraProps(this.context.store, this.props)
    }
    
    state = this.usedState();

    onStoreChange=()=>{
      if(this.subscriptionId){
        this.setState(this.usedState());
      }
    }

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }
    render() {
      return (<Component 
        {...this.props}
        {...this.usedState()} 
        store={this.context.store} />);
    }
  };
};
export default storeProvider;

// functional component

//   const WithStore = (props, context) =>
//     <Component {...props} store={context.store} />;

//   WithStore.contextTypes = {
//     store: PropTypes.object,
//   };

//   WithStore.displayName = `${Component.name}Container`;

//   return WithStore;
// };
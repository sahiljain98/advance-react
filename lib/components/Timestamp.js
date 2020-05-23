import React, { Component } from 'react';
import storeProvider from './storeProvider';

class Timestamp extends Component {

    static timeDisplay=(timestamp)=>(timestamp.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}))
    shouldComponentUpdate(nextProps,nextState){
        const currentTimeStamp = timeDisplay(this.props.timestamp);
        const nextTimeStamp = timeDisplay(nextProps.timestamp);
        return currentTimeStamp !== nextTimeStamp;
    }
    render() {
        return (
            <div>
                {this.props.timestampDisplay}
            </div>
        )
    }
}
function extraProps(store, originalProps){
    return {
        timestampDisplay: Timestamp.timeDisplay( store.getState().timestamp)
    };
}
export default storeProvider(extraProps)(Timestamp);
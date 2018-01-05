import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

function Today({ day, onNext }) {
    return <div>Today is {day.toString()} 
        <button type="button" onClick={onNext}>Next</button></div>;
}

const ConnectedToday = connect(
    function mapStateToProps(state) {
        return state;
    }, 
    function mapDispatchToProps(dispatch) {
        return {
            onNext: ()=> { dispatch({type: "NEXT_DAY"}); }
        };
    }
    )(Today);

function reducer(state = { day: new Date(2018,2,20) }, action) {
    switch (action.type) {
        case "NEXT_DAY":
            const currentDay = store.getState().day;
            return { day: new Date(currentDay.getTime() + (24*3600*1000))};
        default: return state;
    }
}
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedToday />
    </Provider>, 
    document.getElementById('root'));

store.dispatch({type: "START"});

registerServiceWorker();
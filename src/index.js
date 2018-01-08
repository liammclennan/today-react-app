import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Today(props) {
    const day = new Date(props.match.params.datestring);
    const nextDay = new Date(day.getTime() + (24*3600*1000));
    const tomorrowDateString = `${nextDay.getFullYear()}-${nextDay.getMonth()+1}-${nextDay.getDate()}`;
    return (
        <div>Today is {day.toString()} 
            <Link to={"/day/" + tomorrowDateString}>Next</Link>
        </div>);
}

function Home() {
    const randomBetween = (min, max) => Math.floor(Math.random() * (max-min+1) + min);
    const randomDateString = `${randomBetween(1900, 2100)}-${randomBetween(1, 12)}-${randomBetween(1, 28)}`;

    return <div><h1>Home</h1>
        <Link to={`/day/${randomDateString}`}>{randomDateString}</Link>
    </div>;
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
        <Router>
            <div>
            <Route exact path="/" component={Home} />
            <Route path="/day/:datestring" component={ConnectedToday} />
            </div>
        </Router>
    </Provider>, 
    document.getElementById('root'));

store.dispatch({type: "START"});

registerServiceWorker();
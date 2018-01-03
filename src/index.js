import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function Today({ day, onNext }) {
    return <div>Today is {day.toString()} 
		<button type="button" onClick={onNext}>Next</button></div>;
}

let day = new Date(2018,2,20);

function onNext() {
    day = new Date(day.getTime() + (24*3600*1000));
    render();
}

function render() {
    ReactDOM.render(<Today day={day} onNext={onNext} />, document.getElementById('root'));
}
render();


registerServiceWorker();

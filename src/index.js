import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Today({ day }) {
    return <div>Today is {day.toString()}</div>;
}

ReactDOM.render(<Today day={new Date(2018,2,20)} />, document.getElementById('root'));
registerServiceWorker();

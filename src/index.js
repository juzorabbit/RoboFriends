import React from 'react';
import 'tachyons';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import  { robots } from './robots.js';
import App from './container/App.js';

ReactDOM.render( <App />


   , document.getElementById('root'));
registerServiceWorker();

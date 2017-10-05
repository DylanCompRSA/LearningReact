import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,Header,Container,Home,About,Contact} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div className="App container"><Header/></div>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Articles from './components/Articles';
import * as serviceWorker from './serviceWorker';
import allReducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';

const store = createStore( allReducers, applyMiddleware())


ReactDOM.render(
<Provider store={store} >
        <App/>  
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router} from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducers';

import serverMiddleware from './middlewares/ServerMiddleware';

const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeStoreEnhancers(
        applyMiddleware(
            thunk,
            serverMiddleware
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);

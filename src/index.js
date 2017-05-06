import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './reducers';
import {syncHistoryWithStore} from 'react-router-redux';
import serverMiddleware from './middlewares/ServerMiddleware';

const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducers,
    composeStoreEnhancers(
        applyMiddleware(
            thunk,
            serverMiddleware
        )
    )
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history}/>
    </Provider>,
    document.getElementById('root')
);

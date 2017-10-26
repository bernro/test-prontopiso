import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import rootReducer from '../reducers';

export const history = createHistory();
const middleware = promise();

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(middleware)
    );
}

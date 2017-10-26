import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import promise from 'redux-promise-middleware';
import rootReducer from '../reducers';
import DevTools from '../../components/Dev/DevTools';

export const history = createHistory();
const middleware = promise();

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(middleware),
            DevTools.instrument()
        )
    );
}

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import PisosReducer from "./PisosReducer.js";


const rootReducer = combineReducers({
    pisos: PisosReducer,
    routing
});

export default rootReducer;

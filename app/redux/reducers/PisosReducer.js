import { FETCH_RESTAURANTS } from '../actions/PisosActions.js';

export default function reducer(state = {}, action) {
    switch(action.type) {

        case `${FETCH_RESTAURANTS}_PENDING`:
            return Object.assign({}, state, {loading: true, loaded: false});

        case `${FETCH_RESTAURANTS}_FULFILLED`:
            return Object.assign(
                {},
                state, 
                {
                    loading: false,
                    loaded: true,
                    list: action.payload.data
                }
            );
    }

    return $.extend({}, state, {});
}
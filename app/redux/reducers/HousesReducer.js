import { FETCH_HOUSES } from '../actions/HousesActions.js';

export default function reducer(state = {}, action) {
    switch(action.type) {
        case `${FETCH_HOUSES}_PENDING`:
            return Object.assign(
                {},
                state,
                {
                    loading: true,
                    loaded: false
                }
            );

        case `${FETCH_HOUSES}_FULFILLED`:
            return Object.assign(
                {},
                state,
                {
                    loading: false,
                    loaded: true,
                    list: action.payload.data
                }
            );
        // no default
    }

    return state;
}

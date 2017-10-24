import axios from 'axios';

export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';

export function fetchRestaurants(criteria, sortCriteria) {
    return {
        type: FETCH_RESTAURANTS,
        payload: axios.get('/api/restaurant')
    };
}

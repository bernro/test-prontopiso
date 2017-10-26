import axios from 'axios';

export const FETCH_HOUSES = 'FETCH_HOUSES';

export function fetchHouses() {
    return {
        type: FETCH_HOUSES,
        payload: axios.get('http://staging.prontopiso.com/api/building_surveys')
    };
}

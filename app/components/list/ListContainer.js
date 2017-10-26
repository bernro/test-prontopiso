import React from 'react';
import PropTypes from 'prop-types';
import { fetchHouses } from '../../redux/actions/HousesActions.js';
import { connect } from 'react-redux';

import List from './List';

@connect((store) => {
    return {
        houses: store.houses
    };
})
export default class ListContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchHouses());
    }
    render() {
        const {loading, loaded, list} = this.props.houses;
        return (
            <List
                houses={list}
                loading={loading}
                loaded={loaded}
            />
        );
    }
}

ListContainer.propTypes = {
    dispatch: PropTypes.func,
    houses: PropTypes.object
};

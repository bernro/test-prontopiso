import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.Component {

    render() {
        const { loading, loaded, houses } = this.props;
        return (
            <div className="RestaurantList">
                { loading && !loaded ?
                    <p>Loading Houses ... </p>
                :
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Creation</th>
                                <th>address</th>
                                <th>Type of Building</th>
                                <th>Buy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {houses.map((house, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{house.id}</td>
                                        <td>{house.creationDate}</td>
                                        <td>{house.address.street}</td>
                                        <td>{house.typeBuilding}</td>
                                        <td>{house.buyDate}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

List.propTypes = {
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    houses: PropTypes.array
};

List.defaultProps = {
    loading: true,
    loaded: false,
    houses: []
};

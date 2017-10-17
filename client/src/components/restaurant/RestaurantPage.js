import React, { Component } from 'react';
import axios from "axios"


class RestaurantPage extends Component {
    state = {
        vineyard: {
            name: "",
            restaurants: []
        }
    }

    componentWillMount() {
        this.getAllRestaurants()
    }

    getAllRestaurants = async () => {
        try {
            const vineyardId = this.props.match.params.vineyardId
            const response = await axios.get(`/api/vineyards/${vineyardId}`)
            const restaurantList = response.data.restaurants
            this.setState({ vineyard: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h1>Restaurants Where Our Wines are Served:</h1>
                <RestaurantsList restaurants={this.state.vineyard.restaurants} />
            </div>
        );
    }
}

export default RestaurantPage;
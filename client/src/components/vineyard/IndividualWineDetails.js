import React, { Component } from 'react';
import axios from 'axios'

class IndividualWineDetails extends Component {
    state = {
        wine: {
            name: "",
            vintage: "",
            description: "",
            price: null,
            image: ""
        },
        redirectToIndividualVineyard: false
    }

    componentWillMount() {
        this.findWine()
    }

    componentWillReceiveProps() {
        this.findWine()
    }

    findWine = () => {
        console.log('finding wine!')
        const wine = this.props.vineyard.wines.find((wine) => {
            return wine._id === this.props.wineId
        })
        this.setState({ wine: wine })
    }

    render() {



        return (
            <div>
                <h4>Name: {this.state.wine.name}</h4>
                <h4>Vintage: {this.state.wine.vintage}</h4>
                <h4>Description: {this.state.wine.description}</h4>
                <h4>Price: ${this.state.wine.price}</h4>
                <img src={this.state.wine.image} />
            </div>
        );
    }
}

export default IndividualWineDetails;


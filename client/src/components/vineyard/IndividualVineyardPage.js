import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
// import WinesList from "./Wines"

class IndividualVineyardPage extends Component {
    state = {
        vineyard: {
            name: "",
            address: "",
            website: "",
            description: "",
            wines: [{_id: '', name: ''}]
        }
    }

    componentWillMount() {
        this.showVineyard()
    }

    showVineyard = async () => {
        const vineyardId = this.props.match.params.vineyardId
        const response = await axios.get(`/api/vineyards/${vineyardId}`)
        this.setState({ vineyard: response.data })
        console.log(response.data)
    }



    render() {
        return (
            <div>
                <h2>{this.state.vineyard.name}</h2>
                <h3>ADDRESS: {this.state.vineyard.address}</h3>
                <h3>WEBSITE: {this.state.vineyard.website}</h3>
                <h3>DESCRIPTION: {this.state.vineyard.description}</h3>
                <h3>OUR WINES:</h3>
                {this.state.vineyard.wines.map(wine => {
                    return(<div><Link to={`/vineyards/${this.state.vineyard._id}/${wine._id}`}>{wine.name}</Link></div>)
                })
                }

            </div>
        );
    }
}

export default IndividualVineyardPage;
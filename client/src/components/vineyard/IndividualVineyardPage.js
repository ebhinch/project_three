import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import IndividualWineDetails from "./IndividualWineDetails.js"
// import WinePage from "../wine/WinePage.js"
// import WinesList from "../wine/WinePage"

class IndividualVineyardPage extends Component {
    state = {
        vineyard: {
            name: "",
            address: "",
            website: "",
            description: "",
            wines: [{
                _id: "",
                name: ""
            }]
        },
        currentWineToShow: '',
        showWineDetails: false
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

    toggleShowWines = (wineId) => {
        console.log(wineId )
        this.setState({ showWineDetails: true, currentWineToShow: wineId })

    }

    render() {
        if (!this.state.showWineDetails) {
            return (
                <div>
                    <h2>{this.state.vineyard.name}</h2>
                    <h3>ADDRESS: {this.state.vineyard.address}</h3>
                    <h3>WEBSITE: {this.state.vineyard.website}</h3>
                    <h3>DESCRIPTION: {this.state.vineyard.description}</h3>
                    <h3>OUR WINES:</h3>


                    {this.state.vineyard.wines.map(wine => {
                        return (<div><h4>{wine.name}</h4><button onClick={() => this.toggleShowWines(wine._id)}>Show {wine.name} Details</button></div>)
                    })}


                </div>
            );
        }
        else {
            return (
                <div>

                    <div>
                        <h2>{this.state.vineyard.name}</h2>
                        <h3>ADDRESS: {this.state.vineyard.address}</h3>
                        <h3>WEBSITE: {this.state.vineyard.website}</h3>
                        <h3>DESCRIPTION: {this.state.vineyard.description}</h3>
                        <h3>OUR WINES:</h3>


                        {this.state.vineyard.wines.map(wine => {
                            return (<div><h4>{wine.name}</h4><button onClick={() => this.toggleShowWines(wine._id)}>Show {wine.name} Details</button></div>)
                        })}


                    </div>

                    <IndividualWineDetails vineyard={this.state.vineyard} wineId={this.state.currentWineToShow} />

                </div>
            )
        }
    }
}
export default IndividualVineyardPage;
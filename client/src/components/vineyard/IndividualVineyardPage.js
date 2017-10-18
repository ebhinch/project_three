import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import IndividualWineDetails from "./IndividualWineDetails.js"
import { FlexRow } from "../styled-components/FlexContainers"
import { FlexColumn } from "../styled-components/FlexContainers"
import PageBody from "../styled-components/PageBody"
import PageParagraphText from "../styled-components/PageParagraphText"
import styled from 'styled-components';

const WineList = FlexRow.extend`
    align-items: space-between;
    flex-wrap: wrap;
    justify-content: space-evenly;


`

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
            }],
            restaurants: [{
                _id: "",
                name: "",
                website: ""
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
        console.log(vineyardId)
        const response = await axios.get(`/api/vineyards/${vineyardId}`)
        console.log(response)
        this.setState({ vineyard: response.data })

    }

    toggleShowWines = (wine) => {
        console.log(wine)
        this.setState({ showWineDetails: true, currentWineToShow: wine })
    }

    render() {
        return (
            <PageBody>
                <PageParagraphText>
                    <h2>{this.state.vineyard.name}</h2>
                    <h3>ADDRESS: {this.state.vineyard.address}</h3>
                    <h3>WEBSITE: {this.state.vineyard.website}</h3>
                    <h3>DESCRIPTION: {this.state.vineyard.description}</h3>
                    <h3>RESTUARANTS SERVING OUR WINES: {this.state.vineyard.restaurants.map(restaurant => {return (<div><h4>{restaurant.name}</h4></div>)
                    })}
                    </h3>

                    <h3>OUR WINES:</h3>


                    <WineList>{this.state.vineyard.wines.map(wine => {
                        return (
                            <div>
                                <h4>{wine.name}</h4>
                                <button onClick={() => this.toggleShowWines(wine)}>
                                    Show {wine.name} Details
                            </button>
                            </div>)
                    })}

                    {this.state.showWineDetails
                        ? <IndividualWineDetails vineyard={this.state.vineyard} wine={this.state.currentWineToShow} />
                        : null
                    }
                    </WineList>



                </PageParagraphText>
            </PageBody>
        )
    }
}
export default IndividualVineyardPage;
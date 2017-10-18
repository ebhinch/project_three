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
    margin-bottom: 2px;
`

const DetailHeader = styled.h3`
    font-size: 18px;
    font-weight: bolder;
    margin: 5px;
    align-items: center;
`

const DetailText = styled.h4`
    margin-left: 10px;
    font-size: 16px;
    font-family: 'Puritan', sans-serif;    
`

const CenterText = styled.div`
    text-align: center;
`

const DetailButton= FlexRow.extend`
align-items: space-between;
margin-top: 2px;
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
                    <CenterText><h2><a href={this.state.vineyard.website}>{this.state.vineyard.name}</a></h2></CenterText>
                    <DetailHeader>Description: </DetailHeader>
                    <DetailText>{this.state.vineyard.description}</DetailText>
                    <DetailHeader>Address: </DetailHeader><DetailText>{this.state.vineyard.address}</DetailText>

                    <div>
                        <DetailHeader>
                            Restaurants Serving Our Wines:
                        </DetailHeader> {this.state.vineyard.restaurants.map(restaurant => {
                            return (
                                <div>
                                    <DetailText>{restaurant.name}</DetailText>
                                </div>)
                        })}
                    </div>
                    <br />

                    <DetailHeader><CenterText>OUR WINES:</CenterText></DetailHeader>
                    <WineList>{this.state.vineyard.wines.map(wine => {
                        return (
                            <div>
                                <DetailText>{wine.name}</DetailText>
                                <DetailButton>
                                    <button onClick={() => this.toggleShowWines(wine)}>
                                    Show {wine.name} Details
                                     </button>
                                </DetailButton>
                            </div>)
                    })}
                    </WineList>
                        {this.state.showWineDetails
                            ? <div><IndividualWineDetails vineyard={this.state.vineyard} wine={this.state.currentWineToShow}></IndividualWineDetails></div> 
                            : null
                        }
                    



                </PageParagraphText>
            </PageBody>
        )
    }
}
export default IndividualVineyardPage;
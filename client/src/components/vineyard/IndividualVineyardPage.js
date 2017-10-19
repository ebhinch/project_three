import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import IndividualWineDetails from "./IndividualWineDetails.js";
import { FlexRow } from "../styled-components/FlexContainers";
import { FlexColumn } from "../styled-components/FlexContainers";
import PageBody from "../styled-components/PageBody";
import PageParagraphText from "../styled-components/PageParagraphText";
import DetailHeader from "../styled-components/DetailHeader";
import DetailText from "../styled-components/DetailText";
import PageTitle from "../styled-components/PageTitle.js";
import ShadowDiv from "../styled-components/ShadowDiv";
import styled from 'styled-components';
import jefferson from "./jefferson.jpg"
import vaVineyard from "./vaVineyard.png"

const WineList = FlexRow.extend`
    align-items: space-between;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 2px;
`

const WineDetailNameAndButton = FlexColumn.extend`
    align-items: center;
    margin-top: 2px;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const VineyardSection = FlexColumn.extend`
    color: #0f5e75;
    align-items: center;
    text-align: center;
    img {
        width: 50%
    }
`

const VineyardDiv = ShadowDiv.extend`
    padding-right: 10px;
    padding-left: 10px;
    width: 60%
`

const VineyardImage = styled.div`
    img{
        width: 100%;
        height: 500px;

    }
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
                    <VineyardImage><img src={vaVineyard} alt="picture" /></VineyardImage>
                    <VineyardSection>

                        <PageTitle>
                            <a href={this.state.vineyard.website}>{this.state.vineyard.name}</a>
                        </PageTitle>

                        <VineyardDiv><DetailHeader>Description: </DetailHeader>
                            <DetailText>{this.state.vineyard.description}</DetailText></VineyardDiv>

                        <VineyardDiv><DetailHeader>Address: </DetailHeader>
                            <DetailText>{this.state.vineyard.address}</DetailText></VineyardDiv>

                        <VineyardDiv>
                            <DetailHeader> Restaurants Serving Our Wines:</DetailHeader> 
                            
                            {this.state.vineyard.restaurants.map(restaurant => {
                                return (
                                    <div>
                                    <DetailText><a href={restaurant.website}>{restaurant.name}</a></DetailText>
                                    </div>
                                )
                            })
                            }
                        </VineyardDiv>

                        <br />

                        <DetailHeader>OUR WINES:</DetailHeader>
                        <br />
                        <WineList>{this.state.vineyard.wines.map(wine => {
                            return (
                                <div>
                                    <WineDetailNameAndButton>
                                        <DetailText>{wine.name}</DetailText>
                                        <button onClick={() => this.toggleShowWines(wine)}>
                                            Show {wine.name} Details
                                     </button>
                                    </WineDetailNameAndButton>
                                </div>)
                        })}
                        </WineList>
                        {this.state.showWineDetails
                            ? <div><IndividualWineDetails vineyard={this.state.vineyard} wine={this.state.currentWineToShow}></IndividualWineDetails></div>
                            : null
                        }



                    </VineyardSection>
                </PageParagraphText>
            </PageBody>
        )
    }
}
export default IndividualVineyardPage;
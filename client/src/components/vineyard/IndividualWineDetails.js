import React, { Component } from 'react';
import axios from 'axios'
import PageBody from "../styled-components/PageBody"
import { FlexRow } from "../styled-components/FlexContainers"
import { FlexColumn } from "../styled-components/FlexContainers"
import ShadowDiv from "../styled-components/ShadowDiv"
import styled from 'styled-components';

const WineDetails = FlexColumn.extend`
    align-items: center;
    text-align: center;
    img {
        height: 300px;
    }
`

const IndividualWineDetails = (props) => {

    return (
        <PageBody>
            <WineDetails>
                <br />
                <ShadowDiv>
                    <h4>Name: {props.wine.name}</h4>
                    <h4>Vintage: {props.wine.vintage}</h4>
                    <h4>Description: {props.wine.description}</h4>
                    <h4>Price: ${props.wine.price}</h4>
                </ShadowDiv>
                <ShadowDiv>
                    <img src={props.wine.image} />
                </ShadowDiv>
            </WineDetails>
        </PageBody>
    );
}


export default IndividualWineDetails;


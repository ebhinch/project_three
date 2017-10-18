import React, { Component } from 'react';
import axios from 'axios'
import PageBody from "../styled-components/PageBody"
import styled from 'styled-components';

const IndividualWineDetails = (props) => {

    return (
        <div>
            <h4>Name: {props.wine.name}</h4>
            <h4>Vintage: {props.wine.vintage}</h4>
            <h4>Description: {props.wine.description}</h4>
            <h4>Price: ${props.wine.price}</h4>
            <img src={props.wine.image} />
        </div>
    );
}


export default IndividualWineDetails;


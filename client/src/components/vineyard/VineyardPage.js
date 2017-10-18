import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import IndividualVineyardPage from "./IndividualVineyardPage.js"
import PageBody from "../styled-components/PageBody"
import styled from 'styled-components';


class VineyardPage extends Component {
    state = {
        vineyards: []
    }

    componentWillMount() {
        this.getAllVineyards()
    }

    getAllVineyards = async () => {
        try {
            const response = await axios.get("/api/vineyards")
            this.setState({ vineyards: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <PageBody>
            <div>
                <h3>Time to get excited about planning your trip along Charlottesville's Monticello Wine Trail! Whether you're traveling from across the country (or world!) or you're local, Charlottesvino makes planning easier, so you'll have more time for enjoying our beautiful wineries.</h3>
                {this.state.vineyards.map(vineyard => {
                    return (<div><Link key={vineyard._id} to={`/vineyards/${vineyard._id}`}>{vineyard.name}</Link></div>)
                })}
            </div>
            </PageBody>
        );
    }
}

export default VineyardPage;


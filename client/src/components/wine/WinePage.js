import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'


class WinePage extends Component {
    componentWillMount(){
        console.log('mounting')
    }

    render() {


        return (
            <div>
                <h1>hello from winepage</h1>
                <h1>{this.props.vineyard.name}</h1>
            </div>
        );
    }
}

export default WinePage;


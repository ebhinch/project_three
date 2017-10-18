import React, { Component } from 'react';
import DetailHeader from "../styled-components/DetailHeader";
import PageBody from "../styled-components/PageBody"
import DetailText from "../styled-components/DetailText"
import PageParagraphText from "../styled-components/PageParagraphText";
import ShadowDiv from "../styled-components/ShadowDiv";
import { FlexColumn } from "../styled-components/FlexContainers";
import styled from 'styled-components';

const ContactSection = FlexColumn.extend`
color: #0f5e75;
align-items: center;
text-align: center;
img {
    height: 300px;
}
`

class ContactPage extends Component {
    render() {
        return (
            <PageBody><PageParagraphText><ContactSection>
                <ShadowDiv><DetailHeader>Contact Charlottesvino</DetailHeader>
                <DetailText>
                    We'd love to hear from you. <br /><br />Whether planning a trip and wondering what else to do while in town or suggesting a new winery for Charlottesvino to feature, let us know! 
                    <br />
                    <div><a href="">Email </a></div>
                    <div><a href="#">Facebook</a> </div>
                    <div></div>
                
                
                </DetailText></ShadowDiv>
                <ShadowDiv><DetailHeader>About Charlottesvino</DetailHeader>
                <DetailText>Charlottesvino was founded in October 2017. An effort to streamline wine tasting trips along the Monticello Wine Trail, the site serves as a guide for locals and visitors alike. We've got up-to-date information on each vineyard's wine inventory, where wines are served locally and more. Plus! We allow users to save notes, meaning its easier than ever to keep track of planning a day of wine tasting...leaving more time for the fun!  </DetailText></ShadowDiv>
                </ContactSection></PageParagraphText></PageBody>
        );
    }
}

export default ContactPage;
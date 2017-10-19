import React, { Component } from 'react';
import DetailHeader from "../styled-components/DetailHeader";
import PageBody from "../styled-components/PageBody"
import DetailText from "../styled-components/DetailText"
import PageParagraphText from "../styled-components/PageParagraphText";
import ShadowDiv from "../styled-components/ShadowDiv";
import { FlexColumn } from "../styled-components/FlexContainers";
import styled from 'styled-components';
import va from "./va.jpg"

const ContactSection = FlexColumn.extend`
color: #0f5e75;
align-items: center;
text-align: center;
img {
    width: 100%
}
`
const ContactDiv = ShadowDiv.extend`
    padding-right: 10px;
    padding-left: 10px;
    width: 40%
`

class ContactPage extends Component {
    render() {
        return (
            <PageBody>
                <PageParagraphText>
                    <ContactSection>

                        <img src={va} alt="picture" />

                        <ContactDiv>
                            <DetailHeader>
                                Contact Charlottesvino
                    </DetailHeader>
                            <DetailText>
                                We'd love to hear from you. <br /><br />Whether planning a trip and wondering what else to do while in town or suggesting a new winery for Charlottesvino to feature, let us know!
                                <br />
                                <div><a href="">Email </a></div>
                                <div><a href="#">Facebook</a> </div>
                                <div></div>
                            </DetailText>
                        </ContactDiv>
                        <ContactDiv>
                            <DetailHeader>About Charlottesvino</DetailHeader>
                            <DetailText>Charlottesvino was founded in October 2017. An effort to streamline wine tasting trips along the Monticello Wine Trail, the site serves as a guide for locals and visitors alike. We've got up-to-date information on each vineyard's wine inventory, where wines are served locally and more. Plus! We allow users to save notes, meaning its easier than ever to keep track of planning a day of wine tasting...leaving more time for the fun!  </DetailText>
                        </ContactDiv>
                    </ContactSection>
                </PageParagraphText>
            </PageBody>
        );
    }
}

export default ContactPage;
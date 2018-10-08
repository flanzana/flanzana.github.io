import React, { Component } from 'react';
import styled from 'styled-components';
import { MainSection, MainTitle } from '../theme/globalStyle';

const AboutMeDiv = styled.div`
    max-width: 900px;
    padding: 0 50px;

    a {
        color: ${props => props.theme.primary};
    }

    a:hover {
        color: ${props => props.theme.secondary}
    }
`;

class AboutMe extends Component {
    render() {
        return(
            <MainSection bgl>
                <MainTitle>About me</MainTitle>
                <AboutMeDiv>
                    <p>Hi! My name is Žana Flander from Slovenia and I am passionate about frontend web development and cartography. I gained expertise in cartography, GIS, land surveying, frontend web development and customer service. I am fluent in English, Slovenian and Spanish. I have studied and worked abroad. You can see my full work experience and education on <a href="https://www.linkedin.com/in/zanaflander" target="_blank" rel="noopener noreferrer">my LinkedIn profile</a>. My hobbies are yoga, volleyball and chess. I am always eager to learn and engage in new things.</p>
                </AboutMeDiv>
            </MainSection>
        )
    }
}

export default AboutMe;
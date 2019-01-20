import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const ButtonWrapper = styled.a`
    width: calc(${props => props.size} + 2vmin);
	height: calc(${props => props.size} + 2vmin);
	font-size: calc(${props => props.size} + 2vmin);
    background-color: ${props => props.theme.white};
	color: ${props => props.theme.primary};
	border-radius: 50%;
    padding: calc(${props => props.size}/3 + 0.5vmin);
    display: flex;
    justify-content: center;
    align-items: center;
	text-decoration: none;

	&:hover {
		animation: ${rotate360} 0.3s linear 1;
		box-shadow: 0px 0px 20px 5px rgba(255,255,255,1);
	}
`;

const ContactButton = (props) => (
    <ButtonWrapper href={props.href} target="_blank" rel="noopener noreferrer" size={props.size}>
        <i className={props.iconName} aria-hidden="true"></i>
    </ButtonWrapper>
)


export default ContactButton;
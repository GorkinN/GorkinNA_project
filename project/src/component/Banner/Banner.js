import React from 'react';
import styled from "styled-components";
import bannerBackground from "./banner-background.png";
import {TransparentButton} from "../Button/Button";
import { StyleSheet, View } from 'react-native';
let BannerContainer=styled.div`
flex-grow: 1;
display: flex;
flex-direction: column;
flex-wrap: wrap;
max-width: 420px;
height: 280px;
box-sizing: border-box;
padding: 48px 33px 32px 33px;
border-radius: 12px;
background: #F4F8EC url(${bannerBackground}) no-repeat;
background-size: cover;
`;
let BannerSubfocus = styled.div`
    margin-bottom: 8px;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.secondaryColor};
    `;
let BannerHeading= styled.div`
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: ${props=>props.theme.baseColor};
`;
let buttonForBanner = StyleSheet.create({
    position: {
       alignSelf: 'left',
       marginTop: 'auto',
       marginRight: 'auto'
    }
});
export const Banner = ({subfocusText, headingText}) => {
    return (
        <BannerContainer>
            <BannerSubfocus>{subfocusText}</BannerSubfocus>
            <BannerHeading>{headingText}</BannerHeading>
            <View style={buttonForBanner.position}>
                <TransparentButton >
                    Read recepies
                </TransparentButton>
            </View>
        </BannerContainer>
    );
}
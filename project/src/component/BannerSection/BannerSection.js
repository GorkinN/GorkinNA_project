import React from 'react';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import {Banner} from "../Banner/Banner.js";
import styled from "styled-components";
import {SectionLayout} from "../SectionLayout/SectionLayout";
let BannerBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
flex-grow:1;
@media (max-width:${props=>props.theme.laptop}){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:10px;
}
@media (max-width:${props=>props.theme.smallPhone}){
    display:flex;
    flex-direction:column;
}
`;
const BannerSection = ({
    categories, 
    subfocus="Banner subfocus", 
    heading='Space for heading'
}) => {
    return (
        <SectionLayout 
            left={
                <CategoryMenu categoriesMenuArray={categories}/>
            }
            rigth={
                <BannerBox>
                    <Banner subfocusText={subfocus} headingText={heading}/>
                    <Banner subfocusText={subfocus} headingText={heading}/>
                </BannerBox>
        }>
        </SectionLayout>
        
    );
}

export default BannerSection;

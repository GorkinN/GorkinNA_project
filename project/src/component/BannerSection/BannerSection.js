import React from 'react';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import "./BannerSection.css";
import {Banner} from "../Banner/Banner.js";
import { Container } from '../common/Container';
import styled from "styled-components";
import {SectionLayout} from "../SectionLayout/SectionLayout";
let BannerSectionBox = styled.section`
display:flex;
justify-content: space-between;
padding-top: 64px;
padding-bottom: 64px;
@media (max-width:${props => props.theme.desktop}) {
    padding-top: 30px;
    padding-bottom: 30px;
}
`;
let BannerBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
flex-grow:1;`;
const BannerSection = ({
    categories, 
    subfocus="Banner subfocus", 
    heading='Space for heading'
}) => {
    return (
        <SectionLayout>
            <BannerSectionBox>
                    <div className="banner-section__menu section__menu">
                        <CategoryMenu categoriesMenuArray={categories}></CategoryMenu>
                    </div>
                    <BannerBox>
                        <Banner subfocusText={subfocus} headingText={heading}/>
                        <Banner subfocusText={subfocus} headingText={heading}/>
                    </BannerBox>
            </BannerSectionBox>
        </SectionLayout>
        
    );
}

export default BannerSection;

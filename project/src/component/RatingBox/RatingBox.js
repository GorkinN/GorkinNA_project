import React from 'react';
import styled from "styled-components";

import starBlackEmpty from "./starBlackEmpty.svg";
import starBlackFilled from "./starBlackFilled.svg";
import starGoldenEmpty from "./starGoldenEmpty.png";
import starGoldenFilled from "./starGoldenFilled.svg";

const RatingContainer = styled.div`
display:flex;
`;
const RateStar = styled.img`
display:block;
padding:5px;
&:nth-child(1) {
    padding-left:0;
}`;

export const RatingBox = ({
    rate=1,
    isGolden=false
}) => {

    let ratingNum;
    if (rate>5 || rate<0) {
        ratingNum=5;
    } 
    else {
        ratingNum=rate;
    }

    let filledStar = isGolden? starGoldenFilled : starBlackFilled; 
    let emptyStar = isGolden? starGoldenEmpty : starBlackEmpty;
   
    let starsArr = [];
    for (let i=0; i<5; i++) {
        if (i<ratingNum) {
            starsArr.push(<RateStar src={filledStar} alt="rating star" key={i}/>);
            continue;
        }
        starsArr.push(<RateStar src={emptyStar} alt="rating star" key={i}/>);              
    }
    return (
        <RatingContainer>
            {starsArr}
        </RatingContainer>
    );
}


 

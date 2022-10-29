import React from 'react';
import styled from "styled-components";
import {Container} from "../common/Container";
let SectionLayoutBox = styled.section`
display:grid;
grid-template-columns: repeat(4, 1fr);
padding:32px 0;
@media (max-width:${props => props.theme.tablet}){
    padding:16px 0;
}
`;
let LeftChild=styled.div`
${props=>props.colSpan && `grid-column:span ${props.colSpan};`}
@media (max-width:${props => props.theme.laptop}){
    grid-column: 1/-1;  
}
`;
let RightChild=styled.div`
${props=>props.colSpan && `grid-column:span ${props.colSpan};`}
@media (max-width:${props => props.theme.laptop}){
    grid-column: 1/-1;  
    padding-top:10px;
}
`;

export const SectionLayout = ({
    left=null, 
    rigth=null,
    leftColSpan=1,
    rightColSpan=3,
}) => {
    return (
        <Container>
            <SectionLayoutBox>
                <LeftChild colSpan={leftColSpan}>
                    {left}
                </LeftChild>
                <RightChild colSpan={rightColSpan}>
                    {rigth}
                </RightChild>
            </SectionLayoutBox>
        </Container>
    );
}



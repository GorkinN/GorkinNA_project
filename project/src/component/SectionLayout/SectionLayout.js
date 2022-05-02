import React from 'react';
import styled from "styled-components";
import {Container} from "../common/Container";
let SectionLayoutBox = styled.section`
display:grid;
grid-template-columns: repeat(4, 1fr);
padding:64px 0;
`;
let LeftChild=styled.div``;
let RightChild=styled.div``;

export const SectionLayout = ({children}) => {
    return (
        <Container>
            <SectionLayoutBox>
                {children}
            </SectionLayoutBox>
        </Container>
    );
}



import styled from "styled-components";
export let Container=styled.div`
    max-width: 1190px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 10px;
  
  @media (max-width: ${props=>props.theme.tablet}) {
      max-width: 900px;
  }
  
  @media (max-width: ${props=>props.theme.phone}) {
      max-width: 730px;
  }
  
  @media (max-width: ${props=>props.theme.smallPhone}) {
      max-width: none;
  }
`;
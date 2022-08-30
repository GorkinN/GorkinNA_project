import styled from "styled-components";

let StyledAnchor=styled.a`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: ${props => props.theme.hrefFontSize};
line-height: ${props => props.theme.hrefLineHeight};
color: ${props => props.theme.secondaryColor};
text-decoration: ${props => props.underline ? "underline":"none"};

`;

export default StyledAnchor;

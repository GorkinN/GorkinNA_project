import styled from "styled-components";

export const CardPictureContainer=styled.div`
position:relative;
border-radius: 12px;
width: 100%;
height: 100%;
margin-bottom: 16px;
overflow:hidden;
box-shadow:0 0 4px 1px rgba(128, 128, 128, 0.1);
`;
export const CardPicture = styled.img`
display:block;
height: 100%;
width:100%;
object-fit:cover;
`;
export const CardSale = styled.div`
position:absolute;
top:12px;
left:20px;
padding:0 2px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
background-color:white;
border-radius:1em;
box-shadow:0 0 2px 0 white;
color: ${props => props.theme.secondaryColor};
`;
export const CardTitle = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 22px;
color: ${props =>props.theme.baseColor};
`;
export const CardDescription = styled.div`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #575757;
margin-bottom:16px;
@media(max-width:${props=>props.theme.tablet}){
    margin-bottom:8px;
}
`;
export const CardPriceBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
@media (max-width:${props=> props.theme.tablet}) {
    margin-right:26px;
}
`;
export const CardPrice = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
color: ${props =>props.theme.baseColor};
`;
export const CardPriceOff = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
text-decoration-line: line-through;
color: #A9A9A9;
`;
import styled from "styled-components";
export const Fieldset = styled.fieldset`
display:flex;
flex-direction:column;
width:100%;
margin-top: 20px;
:nth-child(1) {
    margin-top:0;
}
@media (max-width:${props => props.theme.laptop}) {
    max-width:30%;
    margin-top: 0;
}
@media (max-width:${props => props.theme.smallPhone}) {
    max-width:none;
    margin-top: 20px;
}
`;
import styled from "styled-components";

export const CheckBoxLabel = styled.label`
position:relative;
font-family: 'Open Sans';
font-style: normal;
font-weight: 900;
font-size: 14px;
line-height: 19px;
color: #151515;
cursor:pointer;
flex-grow:1;
border-radius:12px;
padding:2px 5px;
margin-right:5px;
:before {
    content:"";
    position:absolute;
    top:50%;
    left:-10px;
    transform:translate(-50%, -50%);
    width:15px;
    height:15px;
    border-radius:5px;
    border: 2px solid #6A983C;
    transition: 0.1s ease-in-out;
}

:after {
    content:"";
    position:absolute;
    top:50%;
    left:-10px;
    transform:translate(-50%, -50%);
    width:10px;
    height:10px;
    transition: 0.1s ease-in-out;
}
`;
export const Checkbox=styled.input`
display:none;
:checked ~ label:after {
    width:5px;
    transform:rotate(220deg) translate(110%, 30%);
    border-top: 3px solid white;
    border-left:3px solid white;
    transition: 0.2s ease-in-out;
}
:checked ~ label:before {
    background-color:#6A983C;
}
`;
export const LabelContainer = styled.div`
padding-left:15px;
display:flex;
justify-content:space-between;
margin:5px 0;
`;
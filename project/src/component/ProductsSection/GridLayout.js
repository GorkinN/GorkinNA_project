import styled from "styled-components";
export const GridLayout = styled.ul`
display:grid;
grid-template-columns:repeat(3, 1fr);
grid-gap:32px;
@media (max-width:${props=>props.theme.laptop}) {
  grid-gap:20px;
}
@media (max-width:${props=>props.theme.tablet}) {
  grid-template-columns:repeat(2, 1fr);
  grid-gap:10px;
}
@media (max-width:${props=>props.theme.smallPhone}) {
  grid-template-columns:repeat(1, 1fr);
}
`;
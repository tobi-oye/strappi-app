import styled from "styled-components";
export const GridLayout = styled.div`
  height: 100vh;
  // border: 10px solid blue;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas:
    "aside main"
`;

export const Aside = styled.div`
  grid-area: aside;

`;
export const Main = styled.div`
  grid-area: main;
`;

import styled from "styled-components";
import Card from "./components/Card";

const List = (): JSX.Element => {
  const Container = styled.div`
    padding: 10px 50px;
  `;
  const Header = styled.div`
    padding: 10px 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `;
  const HeaderText = styled.p`
    font-size: 20px;
    font-weight: bold;
  `;

  return (
    <>
      <Header>
        <HeaderText>SPACE TRIPS</HeaderText>
      </Header>
      <Container>
        <Card />
      </Container>
    </>
  );
};

export default List;

import styled from "styled-components";
import { ReactComponent as Icon } from "../../../../assets/icons/Rocket@2x.svg";
const Card = (): JSX.Element => {
  const Container = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // border: 1px solid black;
  `;

  const InfoContainer = styled.div`
    padding: 10px 10px 40px 10px;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `;
  const FlightContainer = styled.div`
    display: flex;
    justify-content: center;
    background: black;
    color: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `;
  const SpaceCenterInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    // border: 1px solid black;
    padding: 0px;
  `;
  const BodyTextBold = styled.p`
    font-size: 20px;
    margin: 0px;
    font-weight: bold;
  `;
  const BodyTextSmall = styled.p`
    font-size: 10px;
    margin: 10px 0px 0px 0px;
  `;
  const BodyTextNormal = styled.p`
    font-size: 20px;
    margin: 50px 0px 0px 0px;
  `;
  return (
    <Container>
      <InfoContainer>
        <SpaceCenterInfo>
          <BodyTextBold>Nyasia Island Space Center</BodyTextBold>
          <BodyTextSmall>Earth</BodyTextSmall>
          <BodyTextNormal>12 departures planned today</BodyTextNormal>
        </SpaceCenterInfo>
        <div>
          <Icon />
        </div>
      </InfoContainer>
      <FlightContainer>
        <p style={{ color: "white" }}>SEE ALL FLIGHTS</p>
      </FlightContainer>
    </Container>
  );
};

export default Card;

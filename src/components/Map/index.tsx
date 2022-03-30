import styled from "styled-components";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import SearchBar from "../SearchBar";

const Maps = (): JSX.Element => {
  const Header = styled.div`
    padding: 10px 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // border: 1px solid black;
    background: black;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `;
  const HeaderButton = styled.button`
    //   padding: 10px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid black;
    background: orange;
    width: 60px;
    border: none;
    // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `;
  const HStack = styled.div`
    display: flex;
    justify-content: space-between;
    background: black;
  `;
  const HeaderText = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: white;
  `;
  const InputText = styled.input`
    // width: 80%;
    margin: 5px;
    align-items: center;
  `;

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoidGhvcmJ5eSIsImEiOiJjbDE5bDF3YTUyMWt5M2ltdDB6MXQwNnFhIn0.BaGBxPDopO8rK0BgTKBuCg"; // Set your mapbox token here

  const viewPort = {
    width: "100%",
    height: 900,
    latitude: 41.579606918652054,
    longitude: 4.244298260567439,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
    transitionDuration: 1000,
  };

  return (
    <>
      <HStack>
        <Header>
          <HeaderText>Departure</HeaderText>
          <SearchBar />
          <HeaderText>Departure Time</HeaderText>
          <InputText />
        </Header>

        <HeaderButton />
      </HStack>
      <Map
        initialViewState={viewPort}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        mapboxAccessToken={MAPBOX_TOKEN}
      />
      ;
    </>
  );
};

export default Maps;

import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function Admin(props) {
  return (
    <Container>
      <Rect>
        <Text>Admin</Text>
      </Rect>
      <Rect2>
        <JumlahParkir>Jumlah Parkir</JumlahParkir>
        <IconRow>
          <MaterialCommunityIconsIcon
            name="signal-cellular-2"
            style={{
              color: "rgba(128,128,128,1)",
              fontSize: 85,
              height: 93,
              width: 85
            }}
          ></MaterialCommunityIconsIcon>
          <LoremIpsum>120</LoremIpsum>
        </IconRow>
      </Rect2>
      <Rect3>
        <InputAdmin>Input Admin</InputAdmin>
        <Placeholder placeholder="PlatNomor"></Placeholder>
        <Placeholder1 placeholder="Jenis Kendaraan"></Placeholder1>
      </Rect3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(230, 230, 230,0.17);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Rect = styled.div`
  width: 1282px;
  height: 120px;
  background-color: rgba(248,231,28,1);
  flex-direction: column;
  display: flex;
`;

const Text = styled.span`

  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 45px;
  margin-top: 33px;
  margin-left: 55px;
`;

const Rect2 = styled.div`
  width: 496px;
  height: 190px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  margin-top: 61px;
  margin-left: 393px;
`;

const JumlahParkir = styled.span`

  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 37px;
  margin-left: 134px;
`;

const LoremIpsum = styled.span`

  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 47px;
  margin-left: 129px;
  margin-top: 19px;
`;

const IconRow = styled.div`
  height: 93px;
  flex-direction: row;
  display: flex;
  margin-top: 5px;
  margin-left: 108px;
  margin-right: 95px;
`;

const Rect3 = styled.div`
  width: 562px;
  height: 251px;
  background-color: rgba(245,235,123,1);
  flex-direction: column;
  display: flex;
  margin-top: 35px;
  margin-left: 360px;
`;

const InputAdmin = styled.span`

  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 39px;
  margin-top: 10px;
  margin-left: 176px;
`;

const Placeholder = styled.input`

  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 57px;
  width: 293px;
  background-color: rgba(253,253,253,0.72);
  margin-top: 12px;
  margin-left: 141px;
  border: none;
  background: transparent;
`;

const Placeholder1 = styled.input`

  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 57px;
  width: 293px;
  background-color: rgba(253,253,253,0.72);
  margin-top: 20px;
  margin-left: 141px;
  border: none;
  background: transparent;
`;

export default Admin;

import React from "react";
import { Text } from "react-native";

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from "./styles";

const ChannelItem = () => (
  <ChannelContainer>
    <LeftSide>
      <Avatar />
      <Column>
        <Username>rocketseat_oficial</Username>
        <Info>40 news videos</Info>
      </Column>
    </LeftSide>

    <RightSide>
      <WhiteCircle />
    </RightSide>
  </ChannelContainer>
);

const ChannelList: React.FC = () => {
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;

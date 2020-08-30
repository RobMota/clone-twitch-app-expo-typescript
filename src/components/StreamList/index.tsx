import React from "react";
import { Text } from "react-native";

import streamThumbnail from "../../images/stream_thumbnail.jpg";

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamDescription,
  StreamCategory,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
} from "./styles";

const StreamItem = () => (
  <StreamContainer>
    <StreamThumbnail source={streamThumbnail} />

    <StreamColumn>
      <StreamRow>
        <StreamHeader>
          <StreamAvatar />
          <StreamUsername numberOfLines={1}>Official</StreamUsername>
        </StreamHeader>

        <StreamDescription numberOfLines={1}>
          Front-end com Next.js, Chakra UI e Graphql
        </StreamDescription>

        <StreamCategory numberOfLines={1}>Science & Technology</StreamCategory>
      </StreamRow>
      <TagRow>
        <TagView>
          <TagText>Portuguese</TagText>
        </TagView>
        <TagView>
          <TagText>Web Development</TagText>
        </TagView>
      </TagRow>
    </StreamColumn>
  </StreamContainer>
);

const StreamList: React.FC = () => {
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;

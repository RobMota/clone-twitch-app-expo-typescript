import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View``;

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 10px 0 24px;
`;

export const CategoryContainer = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const CategoryImage = styled.Image`
  width: 140px;
  height: 200px;
`;

export const CategoryName = styled.Text`
  margin-top: 5px;
  max-width: 140px;
  color: ${colors.black};
  font-family: roboto_700;
  font-size: 13.5px;
`;

export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RedCircle = styled.View`
  background: ${colors.red};
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

export const Info = styled.Text`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${colors.gray};
  font-family: roboto_500;
`;

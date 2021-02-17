import styled, {css} from 'styled-components/native';

interface ISegmentText {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 65px 25px 25px 25px;
  background-color: #fff;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderLogo = styled.Image`
  width: 34px;
  height: 34px;
  margin-right: 9px;
`;

export const HeaderTitle = styled.Text`
  font-size: 27px;
  color: #141821;
  font-family: 'IBMPlexSans-Bold';
`;

export const Segment = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SegmentButton = styled.TouchableOpacity``;

export const SegmentButtonText = styled.Text<ISegmentText>`
  font-size: 18px;
  color: #b8c0c9;
  font-family: 'IBMPlexSans-Light';
  font-weight: 400;
  margin-right: 25px;

  ${(props) =>
    props.active &&
    css`
      font-family: 'IBMPlexSans-Bold';
      font-weight: 700;
      color: #404b63;
    `}
`;

export const CategoryContainer = styled.View`
  margin-top: 23px;
`;

export const Category = styled.View`
  margin-bottom: 20px;
`;

export const CategoryTitle = styled.Text`
  font-family: 'IBMPlexSans-Bold';
  font-size: 18px;
  color: #404b63;
`;

export const Content = styled.ScrollView`
  margin-top: 10px;
  border-radius: 20px;
`;

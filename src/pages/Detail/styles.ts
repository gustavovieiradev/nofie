import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 342px;
`;

export const HeaderImage = styled.Image`
  width: 100%;
  height: 342px;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 55px;
  left: 25px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 10px 20px rgba(255, 184, 73, 0.2);
  border-radius: 8px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

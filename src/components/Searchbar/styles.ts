import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f6f7fb;
  border-radius: 14px;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#B8C0C9',
})`
  flex: 1;
  margin-right: 10px;
  font-family: 'IBMPlexSans-Light';
  font-weight: 400;
  font-size: 16px;
  color: #404b63;
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  background-color: #ffb849;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(255, 184, 73, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

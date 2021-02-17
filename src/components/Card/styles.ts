import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  /* box-shadow: 0px 15px 30px rgba(64, 75, 99, 0.08); */
  border-radius: 12px;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 106px;
  height: 106px;
  border-radius: 12px;
`;

export const Data = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  width: 200px;
  font-family: 'IBMPlexSans-Bold';
  font-size: 18px;
  color: #404b63;
`;

export const Description = styled.Text`
  width: 200px;
  font-family: 'IBMPlexSans-Light';
  font-weight: 400;
  color: #b8c0c9;
  font-size: 14px;
`;

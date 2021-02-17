import {FlatList} from 'react-native';
import styled from 'styled-components/native';

import {IMovie} from '../../interfaces/movie';

interface IBannerItemParams {
  width: number;
}

interface IBannerTitleParams {
  width: number;
}

export const BannerContainer = styled.View``;

export const BannerList = styled(FlatList as new () => FlatList<IMovie>)`
  margin-top: 27px;
`;

export const BannerItem = styled.TouchableOpacity<IBannerItemParams>`
  margin-right: 20px;
  width: ${(props) => props.width}px;
`;

export const BannerImage = styled.Image`
  height: 200px;
  width: 100%;
  border-radius: 20px;
  position: relative;
`;

export const BannerTitle = styled.Text<IBannerTitleParams>`
  width: ${(props) => props.width}px;
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 18px;
  font-family: 'IBMPlexSans-Bold';
`;

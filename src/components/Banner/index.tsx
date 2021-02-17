import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import {IMovie} from '../../interfaces/movie';

import {
  BannerContainer,
  BannerImage,
  BannerItem,
  BannerList,
  BannerTitle,
} from './styles';

interface IProps {
  movies: IMovie[];
  width: number;
  widthTitle: number;
}

export default function Banner({movies, width, widthTitle}: IProps) {
  const navigation = useNavigation();

  const handleGoDetail = useCallback(
    (id: number) => {
      navigation.navigate('Detail', {id});
    },
    [navigation],
  );

  return (
    <BannerContainer>
      <BannerList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(movie) => movie.id.toString()}
        renderItem={({item}) => (
          <BannerItem width={width} onPress={() => handleGoDetail(item.id)}>
            <BannerImage
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
              }}
            />
            <BannerTitle width={widthTitle}>{item.title}</BannerTitle>
          </BannerItem>
        )}
      />
    </BannerContainer>
  );
}

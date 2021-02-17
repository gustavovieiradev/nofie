import React from 'react';
import {IMovie} from '../../interfaces/movie';

import {Container, Data, Description, Image, Title} from './styles';

interface IProps {
  movie: IMovie;
}

export default function Card({movie}: IProps) {
  return (
    <Container>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }}
      />
      <Data>
        <Title>{movie.title}</Title>
        <Description numberOfLines={2}>{movie.overview}</Description>
      </Data>
    </Container>
  );
}

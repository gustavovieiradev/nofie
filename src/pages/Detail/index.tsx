import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {IMovie} from '../../interfaces/movie';
import api from '../../services/api';
import {Container, HeaderImage, Header, BackButton} from './styles';

interface DetailDataRouteParams {
  id: number;
}

export default function Detail() {
  const [movie, setMovie] = useState<IMovie>();

  const route = useRoute();
  const params = route.params as DetailDataRouteParams;

  useEffect(() => {
    async function loadMovie(): Promise<void> {
      const moviesPaginate = await api.get<IMovie>(`/movie/${params.id}`);
      setMovie(moviesPaginate.data);
    }
    loadMovie();
  });

  return (
    <Container>
      {movie && (
        <>
          <Header>
            <HeaderImage
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
              }}
            />
            <BackButton>
              <Icon name="arrow-left" size={22} color="#fff" />
            </BackButton>
          </Header>
        </>
      )}
    </Container>
  );
}

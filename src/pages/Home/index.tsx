import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';

import logoImg from '../../assets/images/logo.png';
import Banner from '../../components/Banner';
import Searchbar from '../../components/Searchbar';
import {IMovie} from '../../interfaces/movie';
import api from '../../services/api';

import {
  Category,
  CategoryContainer,
  CategoryTitle,
  Container,
  Header,
  HeaderLogo,
  HeaderTitle,
  Segment,
  SegmentButton,
  SegmentButtonText,
  Content,
} from './styles';

interface ITrendingMovie {
  page: number;
  results: IMovie[];
}

interface IGenre {
  genres: {
    id: number;
    name: string;
  }[];
}

interface IMoviesDiscover {
  idGenre: number;
  nameGenre: string;
  movies: IMovie[];
}

export default function Home() {
  const [segmentActive, setSegmentActive] = useState<string>('movie');
  const [moviesTrending, setMoviesTrending] = useState<IMovie[]>([]);
  const [moviesDiscover, setMoviesDiscover] = useState<IMoviesDiscover[]>([]);
  const [textSearch, setTextSearch] = useState<string>('');

  const navigation = useNavigation();

  const handleChangeSegment = useCallback((segment: string) => {
    setSegmentActive(segment);
  }, []);

  useEffect(() => {
    async function loadMoviesTrending(): Promise<void> {
      const trendings = await api.get<ITrendingMovie>(
        `/trending/${segmentActive}/week`,
      );

      setMoviesTrending(trendings.data.results);
    }

    async function loadMoviesDiscover(): Promise<void> {
      const genres = await api.get<IGenre>(`/genre/${segmentActive}/list`);
      const discovers = await api.get<ITrendingMovie>(
        `/discover/${segmentActive}`,
      );

      const dataMoviesDiscover = genres.data.genres.map<IMoviesDiscover>(
        (genre) => {
          return {
            idGenre: genre.id,
            nameGenre: genre.name,
            movies: [],
          };
        },
      );

      discovers.data.results.forEach((discover) => {
        discover.genre_ids.forEach((id) => {
          const index = dataMoviesDiscover.findIndex((d) => d.idGenre === id);
          dataMoviesDiscover[index].movies.push(discover);
        });
      });

      const dataMoviesDiscoverWithDiscover = dataMoviesDiscover.filter(
        (data) => data.movies.length >= 3,
      );

      setMoviesDiscover(dataMoviesDiscoverWithDiscover);
    }

    loadMoviesTrending();
    loadMoviesDiscover();
  }, [segmentActive, setMoviesTrending]);

  const handleGoSearch = useCallback(() => {
    navigation.navigate('Search', {textSearch});
  }, [navigation, textSearch]);

  return (
    <Container>
      <Header>
        <HeaderLogo source={logoImg} />
        <HeaderTitle>Nofie</HeaderTitle>
      </Header>

      <Searchbar onChange={setTextSearch} onClick={handleGoSearch} />

      <Content showsVerticalScrollIndicator={false}>
        <Segment>
          <SegmentButton>
            <SegmentButtonText
              active={segmentActive === 'movie'}
              onPress={() => handleChangeSegment('movie')}>
              Filmes
            </SegmentButtonText>
          </SegmentButton>
          <SegmentButton>
            <SegmentButtonText
              active={segmentActive === 'tv'}
              onPress={() => handleChangeSegment('tv')}>
              Séries
            </SegmentButtonText>
          </SegmentButton>
        </Segment>

        {moviesTrending.length > 0 && (
          <Banner movies={moviesTrending} width={300} widthTitle={200}/>
        )}

        <CategoryContainer>
          {moviesDiscover.length > 0 &&
            moviesDiscover.map((movieDiscover) => (
              <Category key={movieDiscover.idGenre}>
                <CategoryTitle>{movieDiscover.nameGenre}</CategoryTitle>
                <Banner
                  movies={movieDiscover.movies}
                  width={180}
                  widthTitle={150}
                />
              </Category>
            ))}
        </CategoryContainer>
      </Content>
    </Container>
  );
}

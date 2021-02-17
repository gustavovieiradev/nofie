import {useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import Card from '../../components/Card';
import Searchbar from '../../components/Searchbar';
import {IMovie, IMoviePaginate} from '../../interfaces/movie';
import api from '../../services/api';
import {Container, Content} from './styles';

interface SearchDataRouteParams {
  textSearch?: string;
}

export default function Search() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [textSearch, setTextSearch] = useState<string>('');

  const route = useRoute();
  const params = route.params as SearchDataRouteParams;

  useEffect(() => {
    async function loadMovies(): Promise<void> {
      if (params && params.textSearch) {
        console.log(333333);
        const moviesPaginate = await api.get<IMoviePaginate>('/search/movie', {
          params: {query: params.textSearch},
        });
        setMovies(moviesPaginate.data.results);
        setTextSearch(params.textSearch);
      }
    }

    loadMovies();
  }, [params, setTextSearch]);

  const handleClickSearch = useCallback(async () => {
    const moviesPaginate = await api.get<IMoviePaginate>('/search/movie', {
      params: {query: textSearch},
    });

    setMovies(moviesPaginate.data.results);
  }, [textSearch]);

  return (
    <Container>
      <Searchbar
        onChange={setTextSearch}
        onClick={handleClickSearch}
        defaultValue={textSearch}
      />
      <Content showsVerticalScrollIndicator={false}>
        {movies.length > 0 &&
          movies.map((movie) => <Card movie={movie} key={movie.id} />)}
      </Content>
    </Container>
  );
}

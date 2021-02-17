export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  overview: string;
}

export interface IMoviePaginate {
  page: number;
  results: IMovie[];
}

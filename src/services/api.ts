import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

api.defaults.headers.authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTU1ZmYyZGM5NjM0Zjk2MWJhYTU3MmM4MWNiNjYwNSIsInN1YiI6IjYwMmIxYzljZDZkNjRkMDA0MGM3YjhmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6JeafbXkcel5FrsBffnknX7NNIwNUJQjn7_f9UpjI4E';

export default api;

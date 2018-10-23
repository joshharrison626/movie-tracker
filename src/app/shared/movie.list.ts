import { Movie } from '../models/movie.model';

export const MOVIE_LIST: Movie[] = [
  {
    id: Math.floor(Math.random() * 1000).toString(),
    title: 'Jurassic Park',
    genre: ['Science Fiction', 'Action', 'Adventure'],
    rating: '5',
  },
  {
    id: Math.floor(Math.random() * 1000).toString(),
    title: 'Stargate',
    genre: ['Science Fiction', 'Action', 'Adventure'],
    rating: '5',
  },
  {
    id: Math.floor(Math.random() * 1000).toString(),
    title: 'Napoleon Dynamite',
    genre: ['Comedy'],
    rating: '5',
  },
];

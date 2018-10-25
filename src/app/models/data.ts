import { Movie } from './movie.model';

export const MOVIE_LIST: Movie[] = [
  {
    id: Math.floor(Math.random() * 1000).toString(),
    title: 'Jurassic Park',
    genre: 'Science Fiction',
    rating: '5',
  },
  {
    id: Math.floor(Math.random() * 1000).toString(),
    title: 'Stargate',
    genre: 'Science Fiction',
    rating: '4',
  },
  {
    id: Math.floor(Math.random() * 1000).toString(),
    title: 'Napoleon Dynamite',
    genre: 'Comedy',
    rating: '5',
  },
];

export const GENRE_LIST: string[] = [
  'Action',
  'Comedy',
  'Fantasy',
  'Horror',
  'Science Fiction',
];

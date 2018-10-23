import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

export const MOVIE_LIST: Movie[] = [
  {
    title: 'Jurassic Park',
    genre: ['Science Fiction', 'Action', 'Adventure'],
    rating: 5,
  },
  {
    title: 'Stargate',
    genre: ['Science Fiction', 'Action', 'Adventure'],
    rating: 5,
  },
  {
    title: 'Napoleon Dynamite',
    genre: ['Comedy'],
    rating: 5,
  },
];

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovieList(): Promise<Movie[]> {
    return Promise.resolve(MOVIE_LIST); // simulate async http request
  }
}

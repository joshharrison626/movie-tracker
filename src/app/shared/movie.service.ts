import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIE_LIST } from './movie.list';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovieList(): Promise<Movie[]> {
    return Promise.resolve(MOVIE_LIST); // simulate async http request
  }

  saveMovie(movie: Movie): Promise<Movie[]> {
    MOVIE_LIST.push(movie);
    return Promise.resolve(MOVIE_LIST); // simulate async http request
  }

  editMovie(movie: Movie): Promise<any> {
    const movieIndex = MOVIE_LIST.findIndex(item => item.id === movie.id);

    if (MOVIE_LIST[movieIndex].title !== movie.title) {
      return Promise.reject('Protected property');
    } else {
      MOVIE_LIST[movieIndex] = movie;
      return Promise.resolve(MOVIE_LIST); // simulate async http
    }
  }
}

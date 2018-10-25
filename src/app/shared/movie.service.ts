import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIE_LIST } from '../models/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovieList(): Observable<Movie[]> {
    return new Observable((observer) => {
      observer.next(MOVIE_LIST);
      observer.complete();
    }); // simulate async http request
  }

  saveMovie(movie: Movie): Observable<Movie[]> {
    MOVIE_LIST.push(movie);
    return new Observable((observer) => {
      observer.next(MOVIE_LIST);
      observer.complete();
    }); // simulate async http request
  }

  editMovie(movie: Movie): Observable<any> {
    const movieIndex = MOVIE_LIST.findIndex(item => item.id === movie.id);

    return new Observable((observer) => {
      if (MOVIE_LIST[movieIndex].title !== movie.title) {
        observer.error('Protected property');
      } else {
        MOVIE_LIST[movieIndex] = movie;
        observer.next(MOVIE_LIST);
        observer.complete();
      }
    }); // simulate async http request
  }

  deleteMovie(movie: Movie): Observable<Movie[]> {
    const movieIndex = MOVIE_LIST.findIndex(item => item.id === movie.id);

    return new Observable((observer) => {
      MOVIE_LIST.splice(movieIndex, 1);
      observer.next(MOVIE_LIST);
      observer.complete();
    }); // simulate async http request
  }
}

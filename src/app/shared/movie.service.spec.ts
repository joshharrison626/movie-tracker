import { TestBed } from '@angular/core/testing';
import * as _ from 'lodash';

import { MovieService } from './movie.service';
import { Movie } from '../models/movie.model';
import { MOVIE_LIST } from '../models/data';

describe('MovieService', () => {
  let service: MovieService;
  let movieList: Movie[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieService,
      ]
    });

    service = TestBed.get(MovieService);
    movieList = _.cloneDeep(MOVIE_LIST);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMovieList', () => {
    it('should return the contents of MOVIE_LIST', () => {
      service.getMovieList().subscribe(list => {
        expect(list.length).toEqual(3);
        expect(list[0].title).toEqual('Jurassic Park');
        expect(list[1].title).toEqual('Stargate');
        expect(list[2].title).toEqual('Napoleon Dynamite');
      });
    });
  });

  describe('saveMovie', () => {
    it('should add a movie to MOVIE_LIST', async () => {
      const movie: Movie = {
        title: 'foo',
        genre: 'bar',
        rating: '5',
      };

      service.saveMovie(movie).subscribe(list => {
        expect(list.length).toEqual(4);
        expect(list[3].title).toEqual(movie.title);
      });
    });
  });

  describe('editMovie', () => {
    it('should modify the movie genre', async () => {
      const movie = movieList[0];
      movie.genre = 'Comedy';

      service.editMovie(movie).subscribe(list => {
        expect(list[0].genre).toEqual('Comedy');
      });
    });

    it('should modify the movie rating', async () => {
      const movie = movieList[0];
      movie.rating = '3';

      service.editMovie(movie).subscribe(list => {
        expect(list[0].rating).toEqual('3');
      });
    });

    it('should throw an error if modifying the title', async () => {
      const movie = movieList[0];
      movie.title = 'foo';

      service.editMovie(movie).subscribe(
        () => { },
        (error) => {
          expect(error).toEqual('Protected property');
        });
    });
  });

  describe('deleteMovie', () => {
    it('should remove a movie from MOVIE_LIST', async () => {
      const movie: Movie = {
        title: 'foo',
        genre: 'bar',
        rating: '5',
      };
      MOVIE_LIST.push(movie);

      service.deleteMovie(movie).subscribe(list => {
        expect(list.length).toEqual(4);
        expect(list[3].title).toEqual(movie.title);
      });
    });
  });
});

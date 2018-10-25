import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { MOVIE_LIST, GENRE_LIST } from '../models/data';
import { MaterialModule } from '../material/material.module';
import { MovieService } from '../shared/movie.service';
import { of } from 'rxjs';
import * as _ from 'lodash';
import { Movie } from '../models/movie.model';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let movieServiceSpy: jasmine.SpyObj<MovieService>;
  let movieList: Movie[];

  beforeEach(async(() => {
    const MovieServiceSpy = jasmine.createSpyObj('MovieService', ['getMovieList', 'saveMovie', 'editMovie', 'deleteMovie']);

    TestBed.configureTestingModule({
      declarations: [
        MovieListComponent
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [
        {
          provide: MovieService,
          useValue: MovieServiceSpy,
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;

    movieServiceSpy = TestBed.get(MovieService);
    movieList = _.cloneDeep(MOVIE_LIST);
  });

  it('should initialize genreList with the genre options', () => {
    expect(component.genreList).toEqual(GENRE_LIST);
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      movieServiceSpy.getMovieList.and.returnValue(of(movieList));
    });

    it('should call MovieService.getMovieList', () => {
      component.ngOnInit();

      expect(movieServiceSpy.getMovieList).toHaveBeenCalled();
    });

    it('should create the newMovieFormGroup', () => {
      component.ngOnInit();

      expect(component.newMovieFormGroup).toBeDefined();
      expect(component.title).toBeDefined();
      expect(component.genre).toBeDefined();
    });

    it('should load the MOVIE_LIST data from MovieService into the table data source', () => {
      component.ngOnInit();

      expect(component.movieList.data).toEqual(movieList);
    });

    it('should set up the snackBarConfig', () => {
      component.ngOnInit();

      expect(component.snackBarConfig).toEqual({
        duration: 5000,
        panelClass: 'snack-bar-custom',
      });
    });
  });

  describe('deleteMovie', () => {
    const movie: Movie = {
      title: 'foo',
      genre: 'bar',
      rating: '5',
    };

    beforeEach(() => {
      movieServiceSpy.deleteMovie.and.returnValue(of(movieList));
    });

    it('should call MovieService.deleteMovie and pass in the movie to be deleted', () => {
      component.deleteMovie(movie);

      expect(movieServiceSpy.deleteMovie).toHaveBeenCalledWith(movie);
    });

    it('should set the movieList to the returned list of movies', () => {
      component.deleteMovie(movie);

      expect(component.movieList.data).toEqual(movieList);
    });
  });

  describe('editMovie', () => {
    let movie: Movie;

    beforeEach(() => {
      movie = movieList[0];
      movie.title = 'foo';

      movieServiceSpy.editMovie.and.returnValue(of(movieList));
    });

    it('should call MovieService.editMovie and pass in the movie being edited', () => {
      component.editMovie(movie);

      expect(movieServiceSpy.editMovie).toHaveBeenCalledWith(movie);
    });

    it('should set the movieList to the returned list of movies', () => {
      component.editMovie(movie);

      expect(component.movieList.data).toEqual(movieList);
    });
  });

  describe('setRating', () => {
    let movie: Movie;

    beforeEach(() => {
      movie = movieList[0];

      MOVIE_LIST[0].rating = '2';
      movieServiceSpy.editMovie.and.returnValue(of(movieList));
    });

    it('should call editMovie with the movie containing the new rating', () => {
      const expectedMovie = _.cloneDeep(movie);
      expectedMovie.rating = '2';
      spyOn(component, 'editMovie').and.stub();

      component.setRating(movie, 2);

      expect(component.editMovie).toHaveBeenCalledWith(expectedMovie);
    });
  });

  describe('saveMovie', () => {
    beforeEach(() => {
      movieServiceSpy.getMovieList.and.returnValue(of(movieList));

      fixture.detectChanges();
      component.title.setValue('foo');
      component.genre.setValue('bar');

      movieList.push({ title: 'foo', genre: 'bar' });
      movieServiceSpy.saveMovie.and.returnValue(of(movieList));
    });

    it('should call MovieService.saveMovie with the movie to be saved', () => {
      component.saveMovie();

      expect(movieServiceSpy.saveMovie).toHaveBeenCalled();
    });

    it('should set the movieList to the returned list of movies including the newly saved movie', () => {
      component.saveMovie();

      expect(component.movieList.data).toContain({ title: 'foo', genre: 'bar' });
    });

    it('should call resetForm', () => {
      spyOn(component, 'resetForm');

      component.saveMovie();

      expect(component.resetForm).toHaveBeenCalled();
    });
  });

  describe('resetForm', () => {
    beforeEach(() => {
      movieServiceSpy.getMovieList.and.returnValue(of(movieList));

      fixture.detectChanges();
      component.title.setValue('foo');
      component.genre.setValue('bar');
    });

    it('should reset the newMovieFormGroup title', () => {
      spyOn(component.title, 'reset');

      component.resetForm();

      expect(component.title.reset).toHaveBeenCalled();
    });

    it('should reset the newMovieFormGroup genre', () => {
      spyOn(component.genre, 'reset');

      component.resetForm();

      expect(component.genre.reset).toHaveBeenCalled();
    });
  });
});

import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../shared/movie.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatTableDataSource, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { GENRE_LIST } from '../models/data';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieList: any;
  newMovieFormGroup: FormGroup;
  genreList: string[] = GENRE_LIST;
  snackBarConfig = new MatSnackBarConfig();
  displayedColumns: string[] = ['delete', 'title', 'genre', 'rating'];

  constructor(
    private movieService: MovieService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.movieService.getMovieList().subscribe(list => {
      this.movieList = new MatTableDataSource(list);
    });

    this.newMovieFormGroup = this.fb.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
    });

    this.snackBarConfig = {
      duration: 5000,
      panelClass: 'snack-bar-custom',
    };
  }

  get title() { return <AbstractControl>this.newMovieFormGroup.get('title'); }
  get genre() { return <AbstractControl>this.newMovieFormGroup.get('genre'); }

  deleteMovie(movie: Movie): void {
    this.movieService.deleteMovie(movie).subscribe(list => {
      this.movieList = new MatTableDataSource(list);
      this.snackBar.open('Movie deleted', String.fromCodePoint(0x2713), this.snackBarConfig);
    });
  }

  editMovie(movie: Movie): void {
    this.movieService.editMovie(movie).subscribe(list => {
      this.movieList = new MatTableDataSource(list);
      this.snackBar.open('Movie modified', String.fromCodePoint(0x2713), this.snackBarConfig);
    });
  }

  setRating(movie: Movie, newValue: number) {
    const movieToEdit = movie;
    movieToEdit.rating = newValue.toString();
    this.editMovie(movieToEdit);
  }

  saveMovie(): void {
    const movie: Movie = {
      id: Math.floor(Math.random() * 1000).toString(),
      title: this.title.value,
      genre: this.genre.value,
    };

    this.movieService.saveMovie(movie).subscribe(list => {
      this.movieList = new MatTableDataSource(list);
      this.snackBar.open('Movie saved', String.fromCodePoint(0x2713), this.snackBarConfig);
      this.resetForm();
    });
  }

  resetForm(): void {
    this.title.reset();
    this.genre.reset();
  }
}

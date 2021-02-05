import {Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../model/movie";
import {MovieService} from "../../service/movie.service";
import {matFormFieldAnimations} from '@angular/material/form-field';


@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NewMovieComponent implements OnInit {

  movie = {} as Movie;
  Movies!: Array<Movie>;


  constructor(private _movieService: MovieService) { }

  starRating = 0;
  ngOnInit(): void {
  }
  onSaveMovie(movie: Movie): void
  {
    this._movieService.addMovie(movie).subscribe(
      data =>
      {
        if (data)
        {

        }
      },
      error =>
      { }
    );
  }
  saveMovie(): void
  {
    this.onSaveMovie(this.movie);
    this.movie = {} as Movie;
  }

}



import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any ;
  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
  }
  onGetMovies(): void
  {
    this._movieService.getMovies().subscribe(
      data =>
      {
        if (data)
        {
          this.movies = data;
        }
      },
      error =>
      { }
    );
  }
}

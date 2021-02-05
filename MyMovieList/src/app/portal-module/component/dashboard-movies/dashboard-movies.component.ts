import { Component, OnInit } from '@angular/core';
import {Movie} from "../../model/movie";
import {MovieService} from "../../service/movie.service";

@Component({
  selector: 'app-dashboard-movies',
  templateUrl: './dashboard-movies.component.html',
  styleUrls: ['./dashboard-movies.component.css']
})
export class DashboardMoviesComponent implements OnInit {
  movies!: Array<Movie>;
  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.onGetMovies()
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

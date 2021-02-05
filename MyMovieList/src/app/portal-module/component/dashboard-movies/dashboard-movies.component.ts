import {Component, Inject, OnInit} from '@angular/core';
import {Movie} from "../../model/movie";
import {MovieService} from "../../service/movie.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {NewMovieComponent} from "../new-movie/new-movie.component";

@Component({
  selector: 'app-dashboard-movies',
  templateUrl: './dashboard-movies.component.html',
  styleUrls: ['./dashboard-movies.component.css']
})
export class DashboardMoviesComponent implements OnInit {
  movies!: Array<Movie>;
  constructor(public dialog: MatDialog, private _movieService: MovieService) { }

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
  openDialog() {
    this.dialog.open(NewMovieComponent);
  }
}


import {Component, Inject, OnInit} from '@angular/core';
import {Movie} from "../../model/movie";
import {MovieService} from "../../service/movie.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {NewMovieComponent} from "../new-movie/new-movie.component";

@Component({
  selector: 'app-dashboard-movies',
  templateUrl: './dashboard-movies.component.html',
  styleUrls: ['./dashboard-movies.component.css'],

})
export class DashboardMoviesComponent implements OnInit {
  movies!: Array<Movie>;
  movie = {} as Movie;
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
          console.log(this.movies)
          console.log()
        }
      },
      error =>
      { }
    );
  }
  deleteMovie(movie: Movie): void
  {
    this._movieService.deleteMovie(movie).subscribe(() => this.onGetMovies())
  }
  deleteMovieSelect(movie: Movie): void
  {
    this.deleteMovie(movie);
  }
  editMovie(movie: Movie): void
  {
    this._movieService.editMovie(movie).subscribe(() => this.onGetMovies())
  }
  editMovieSelect(movie: Movie): void
  {
    this.editMovie(movie);
  }


  onSaveMovie(movie: Movie): void
  {
    this._movieService.addMovie(movie).subscribe(
      data =>
      {
        if (data)
        {
            this.onGetMovies()
        }
      },
      error =>
      { }
    );
  }
  setPoster(event: any ,id:number):void{
    if(event != null) {

      let File:FileList = event.target.files;
      if(File.length>0){
        this._movieService.addPoster(id,File[0]).subscribe(
          response=>
          {
            console.log(response)
            this.onGetMovies()
          },
          error=>{}
        );
      }
    }

  }


  openDialog() {
    const dialogRef = this.dialog.open(NewMovieComponent);
    const subscribeDialog = dialogRef.componentInstance.newMovieEvent.subscribe((movie : Movie) => {
      console.log('dialog data', movie);
      this.movie = movie;
      this.onSaveMovie(this.movie);

      //i can see 'hello' from MatDialog
    });
    dialogRef.afterClosed().subscribe(result => {
      subscribeDialog.unsubscribe();
    });
  }

}


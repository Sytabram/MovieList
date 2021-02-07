import {Component, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/movie";
import {MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from "@angular/material/dialog";
import {DialogMovieComponent} from "../dialog-movie/dialog-movie.component";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movie!: Movie;
  @Output() movieSelected = new EventEmitter<Movie>();

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }
  openMovie() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.movie;
    const dialogRef  = this.dialog.open(DialogMovieComponent, dialogConfig);
    const subscribeDialog = dialogRef.componentInstance.movieSelected.subscribe((movie : Movie) => {
      console.log('dialog data', movie);
      this.deleteMovie()
      //i can see 'hello' from MatDialog
    });
    dialogRef.afterClosed().subscribe(result => {
      subscribeDialog.unsubscribe();
    });
  }
  deleteMovie()
  {
    this.movieSelected.emit(this.movie);
  }

}

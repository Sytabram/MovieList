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
  @Output() movieDelete = new EventEmitter<Movie>();
  @Output() movieEdit = new EventEmitter<Movie>();
  @Output() moviePoster = new EventEmitter<Event>();

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }
  openMovie() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.movie;
    const dialogRef  = this.dialog.open(DialogMovieComponent, dialogConfig);
    const subscribeDialog = dialogRef.componentInstance.movieDelete.subscribe(() => {
      this.deleteMovie()

    });
    const subscribeEditDialog = dialogRef.componentInstance.movieEdit.subscribe((movieEdit : Movie) => {
      console.log('dialog data', movieEdit);
      this.editMovie(movieEdit)

    });
    const subscribePostDialog = dialogRef.componentInstance.moviePoster.subscribe((event : Event) => {
      this.posterMovie(event)

    });
    dialogRef.afterClosed().subscribe(result => {
      subscribeDialog.unsubscribe();
      subscribeEditDialog.unsubscribe();
      subscribePostDialog.unsubscribe();
    });
  }
  deleteMovie()
  {
    this.movieDelete.emit(this.movie);
  }
  editMovie(movie : Movie)
  {
    this.movieEdit.emit(this.movie);
  }
  posterMovie (event: any){
    this.moviePoster.emit(event);
  }

}

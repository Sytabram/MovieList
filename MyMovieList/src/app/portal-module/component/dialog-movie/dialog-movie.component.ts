import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Movie} from "../../model/movie";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {NewMovieComponent} from "../new-movie/new-movie.component";

@Component({
  selector: 'app-dialog-movie',
  templateUrl: './dialog-movie.component.html',
  styleUrls: ['./dialog-movie.component.css'],
})
export class DialogMovieComponent implements OnInit {

  movie!: Movie;
  isEditable = false;
  @Output() movieDelete = new EventEmitter<Movie>();
  @Output() movieEdit = new EventEmitter<Movie>();
  @Output() moviePoster = new EventEmitter<Event>();

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogMovieComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  showEdit()
  {
    if(this.isEditable){
      this.isEditable = false;
    } else {
      this.isEditable = true;
    }
  }
  deleteMovie()
  {
    this.movieDelete.emit();
    this.dialogRef.close(true);
  }
  saveEditMovie()
  {
      this.movieEdit.emit(this.data);
    this.dialogRef.close(true);
  }
  setPoster(event:any ): void {
    this.moviePoster.emit(event);
    this.dialogRef.close(true);
  }
}

import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Movie} from "../../model/movie";
import {MAT_DIALOG_DATA,MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-movie',
  templateUrl: './dialog-movie.component.html',
  styleUrls: ['./dialog-movie.component.css'],
})
export class DialogMovieComponent implements OnInit {

  isEditable: boolean = false;
  movie!: Movie;
  @Output() movieSelected = new EventEmitter<Movie>();

  constructor(public dialogRef: MatDialogRef<DialogMovieComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  deleteMovie()
  {
    this.movieSelected.emit(this.movie);
  }
}

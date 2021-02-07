import {Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../model/movie";
import {MovieService} from "../../service/movie.service";
import {matFormFieldAnimations} from '@angular/material/form-field';
import {FileChangeEvent} from "@angular/compiler-cli/src/perform_watch";
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NewMovieComponent implements OnInit {

  movie = {} as Movie;
  Movies!: Array<Movie>;
  @Output() newMovieEvent = new EventEmitter<Movie>();
  constructor(private _movieService: MovieService, public dialogRef: MatDialogRef<NewMovieComponent>) { }

  starRating = 0;
  ngOnInit(): void {
  }
  saveMovie(): void
  {
    this.newMovieEvent.emit(this.movie)
    this.dialogRef.close(true);
  }

}



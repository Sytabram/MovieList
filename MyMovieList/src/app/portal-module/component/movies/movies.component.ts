import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/movie";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movie!: Movie;
  @Output() movieSelected = new EventEmitter<Movie>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.movie)
  }

}

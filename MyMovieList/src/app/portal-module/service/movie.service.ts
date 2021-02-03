import { Injectable } from '@angular/core';
import {Movie} from "../model/movie";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = "https://localhost:5001/movies";
  movie: any;
  constructor(private http: HttpClient)
  { }
  getMovies(): Observable<Array<Movie>>
  {
    return this.http.get<[Movie]>(this.url);
  }
}
